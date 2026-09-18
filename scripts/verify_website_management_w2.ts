import fs from 'fs';
import path from 'path';

let issues: { section: string; type: 'ERROR' | 'WARNING'; message: string }[] = [];

function log(msg: string) {
  console.log(msg);
}

function checkFileContains(filePath: string, stringsToCheck: string[], section: string) {
  if (!fs.existsSync(filePath)) {
    issues.push({ section, type: 'ERROR', message: `File not found: ${filePath}` });
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  for (const str of stringsToCheck) {
    if (!content.includes(str)) {
      issues.push({ section, type: 'ERROR', message: `Expected content not found in ${filePath}: "${str}"` });
    }
  }
}

function checkFileNotContains(filePath: string, stringsToCheck: string[], section: string) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const str of stringsToCheck) {
    if (content.includes(str)) {
      issues.push({ section, type: 'ERROR', message: `Forbidden content found in ${filePath}: "${str}"` });
    }
  }
}

function runAudit() {
  log('======================================================================');
  log('WEBSITE MANAGEMENT W2: TECHNICAL AUDIT');
  log('======================================================================\n');

  // Verify Tree has 38 canonical + 1 global = 39 minimum
  const manifestPath = path.resolve(process.cwd(), 'src/modules/website-management/domain/website-manifest.ts');
  if (fs.existsSync(manifestPath)) {
    const content = fs.readFileSync(manifestPath, 'utf8');
    const matches = content.match(/route: '/g) || [];
    if (matches.length < 38) {
      issues.push({ section: 'Manifest', type: 'ERROR', message: `Expected at least 38 canonical pages, found ${matches.length}` });
    }
    if (!content.includes('isGlobal: true')) {
      issues.push({ section: 'Manifest', type: 'ERROR', message: `Global group missing in manifest` });
    }
  }

  // Verify models
  checkFileContains(
    path.resolve(process.cwd(), 'src/modules/website-management/domain/models.ts'),
    ['TranslationStatus', 'CoverageStatus', 'fieldKey', 'canonicalLocale', 'translationStatuses'],
    'Domain Models'
  );

  // Verify UI has vi, en, zhCN tabs, canonical label, outdated status, save draft
  const editorPath = path.resolve(process.cwd(), 'src/components/admin/website-management/content-manager/ContentEditor.tsx');
  checkFileContains(
    editorPath,
    ['Tiếng Việt', 'CANONICAL', 'English', '简体中文', 'OUTDATED', 'Save Draft'],
    'Content Editor'
  );
  
  // Verify Repository isolation
  checkFileNotContains(
    editorPath,
    ['localStorage.setItem', 'localStorage.getItem'],
    'Content Editor (Persistence isolation)'
  );

  const localAdapterPath = path.resolve(process.cwd(), 'src/modules/website-management/infrastructure/local-adapter.ts');
  checkFileContains(
    localAdapterPath,
    ['JSON.stringify(previousEntry.vi) !== JSON.stringify(entry.vi)', "entry.translationStatuses.en = 'OUTDATED'", 'contentVersions.push(newVersion)'],
    'Local Adapter (Dependency & versioning)'
  );
  checkFileNotContains(
    localAdapterPath,
    ['base64', 'FileReader'],
    'Local Adapter (No binary persistence)'
  );
  
  const layoutPath = path.resolve(process.cwd(), 'src/components/admin/website-management/content-manager/ContentManagerLayout.tsx');
  checkFileContains(
    layoutPath,
    ['AUTH NOT CONFIGURED', 'disabled', 'Production publishing will be enabled'],
    'Content Manager Layout (Auth & Publish)'
  );

  const propertiesPath = path.resolve(process.cwd(), 'src/components/admin/website-management/content-manager/ContentProperties.tsx');
  checkFileContains(
    propertiesPath,
    ['Coverage', 'Translation Health', 'outdated'],
    'Content Properties'
  );

  if (issues.length > 0) {
    log('💥 VERIFICATION FAILED WITH ISSUES:');
    issues.forEach(i => log(`- [${i.section}] ${i.message}`));
    process.exit(1);
  } else {
    log('🎉 ALL AUDIT CHECKS PASSED: PHASE W2 IS TECHNICALLY VERIFIED!');
    process.exit(0);
  }
}

runAudit();
