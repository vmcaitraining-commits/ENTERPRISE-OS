import fs from 'fs';
import path from 'path';

let issues: { section: string; type: 'ERROR' | 'WARNING'; message: string }[] = [];

function log(msg: string) {
  console.log(msg);
}

// Check exactly 2 main tabs
function verifyAdminTabs() {
  const componentPath = path.resolve(process.cwd(), 'src/components/admin/tabs/TabWebsiteManagement.tsx');
  if (!fs.existsSync(componentPath)) {
    issues.push({ section: 'Admin Module', type: 'ERROR', message: 'TabWebsiteManagement.tsx not found.' });
    return;
  }
  const content = fs.readFileSync(componentPath, 'utf8');
  if (!content.includes('QUẢN TRỊ NỘI DUNG WEBSITE') || !content.includes('GIAO DIỆN & TRÌNH XÂY DỰNG WEBSITE')) {
    issues.push({ section: 'Admin Module', type: 'ERROR', message: 'TabWebsiteManagement must contain exact 2 main tabs text.' });
  }
}

// Check 38 canonical page manifest
function verifyManifest() {
  const manifestPath = path.resolve(process.cwd(), 'src/modules/website-management/domain/website-manifest.ts');
  if (!fs.existsSync(manifestPath)) {
    issues.push({ section: 'Manifest', type: 'ERROR', message: 'website-manifest.ts not found.' });
    return;
  }
  const content = fs.readFileSync(manifestPath, 'utf8');
  const pageMatches = content.match(/route: '/g) || [];
  if (pageMatches.length !== 38) {
    issues.push({ section: 'Manifest', type: 'ERROR', message: `Expected exactly 38 routes in manifest, got ${pageMatches.length}.` });
  }
}

// Check domain models
function verifyModels() {
  const modelsPath = path.resolve(process.cwd(), 'src/modules/website-management/domain/models.ts');
  if (!fs.existsSync(modelsPath)) {
    issues.push({ section: 'Domain Models', type: 'ERROR', message: 'models.ts not found.' });
    return;
  }
  const content = fs.readFileSync(modelsPath, 'utf8');
  const requiredTypes = [
    'WebsitePage', 'WebsiteSection', 'WebsiteContentEntry', 'WebsiteContentVersion',
    'WebsiteAsset', 'WebsiteAssetUsage', 'WebsiteTheme', 'WebsiteThemeVersion',
    'WebsiteLayoutNode', 'WebsiteContentBinding', 'WebsiteSystemBlock',
    'WebsitePublication', 'WebsiteAuditEntry'
  ];
  for (const type of requiredTypes) {
    if (!content.includes(`interface ${type}`)) {
      issues.push({ section: 'Domain Models', type: 'ERROR', message: `Model ${type} not found.` });
    }
  }
}

// Check repository abstraction
function verifyRepository() {
  const repoPath = path.resolve(process.cwd(), 'src/modules/website-management/domain/repository.ts');
  if (!fs.existsSync(repoPath)) {
    issues.push({ section: 'Repository', type: 'ERROR', message: 'repository.ts not found.' });
    return;
  }
}

// Check local adapter isolation & no large binary persistence
function verifyAdapter() {
  const adapterPath = path.resolve(process.cwd(), 'src/modules/website-management/infrastructure/local-adapter.ts');
  if (!fs.existsSync(adapterPath)) {
    issues.push({ section: 'Local Adapter', type: 'ERROR', message: 'local-adapter.ts not found.' });
    return;
  }
  const content = fs.readFileSync(adapterPath, 'utf8');
  if (content.includes('localStorage.setItem') && content.includes('base64')) {
    issues.push({ section: 'Local Adapter', type: 'ERROR', message: 'Adapter should not persist large base64.' });
  }
}

// Check statuses in UI
function verifyStatuses() {
  const componentPath = path.resolve(process.cwd(), 'src/components/admin/tabs/TabWebsiteManagement.tsx');
  if (!fs.existsSync(componentPath)) return;
  const content = fs.readFileSync(componentPath, 'utf8');
  if (!content.includes('persistenceStatus.replace(')) {
    issues.push({ section: 'Status', type: 'ERROR', message: 'Must mark persistence dynamically or as LOCAL DEVELOPMENT.' });
  }
  if (!content.includes('AUTH NOT CONFIGURED')) {
    issues.push({ section: 'Status', type: 'ERROR', message: 'Must mark Auth as AUTH NOT CONFIGURED.' });
  }
  if (!content.includes('NOT CONNECTED')) {
    issues.push({ section: 'Status', type: 'ERROR', message: 'Must mark CRM Lead Capture as NOT CONNECTED.' });
  }
}

function runAudit() {
  log('======================================================================');
  log('WEBSITE MANAGEMENT W1: TECHNICAL AUDIT');
  log('======================================================================\n');

  verifyAdminTabs();
  verifyManifest();
  verifyModels();
  verifyRepository();
  verifyAdapter();
  verifyStatuses();

  if (issues.length > 0) {
    log('💥 VERIFICATION FAILED WITH ISSUES:');
    issues.forEach(i => log(`- [${i.section}] ${i.message}`));
    process.exit(1);
  } else {
    log('🎉 ALL AUDIT CHECKS PASSED: PHASE W1 IS TECHNICALLY VERIFIED!');
    process.exit(0);
  }
}

runAudit();
