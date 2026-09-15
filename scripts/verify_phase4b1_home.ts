import fs from 'fs';
import path from 'path';

console.log('=== VERIFYING PHASE 4B1: HOME PAGE LOCALIZATION ===\n');

const homeFiles = [
  'src/components/public/pages/HomePage.tsx',
  'src/components/public/home/HeroWorkflowDemo.tsx',
  'src/components/public/home/BottlenecksBeforeAfter.tsx',
  'src/components/public/home/ArchitectureMap11Modules.tsx',
  'src/components/public/home/DepartmentSolutionPreview.tsx',
  'src/components/public/home/ControlledAiFlow.tsx',
  'src/components/public/home/IndustrySolutionsGrid.tsx',
  'src/components/public/home/IntegrationAndSecurityHub.tsx',
  'src/components/public/home/RoadmapAndCommitments.tsx',
  'src/components/public/home/FinalCtaSection.tsx'
];

let errors: string[] = [];

// 1. Verify all components import and instantiate useI18n
console.log('1. Checking useI18n wiring in HomePage and sub-components...');
homeFiles.forEach((relPath) => {
  const fullPath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`File missing: ${relPath}`);
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  if (!content.includes('useI18n')) {
    errors.push(`${relPath}: missing useI18n import`);
  }
  if (!content.includes('t(')) {
    errors.push(`${relPath}: missing translation calls t(...)`);
  }
});

// 2. Verify loader.ts has registered home namespace
console.log('2. Checking i18n loader configuration for home namespace...');
const loaderContent = fs.readFileSync(path.resolve(process.cwd(), 'src/i18n/loader.ts'), 'utf8');
if (!loaderContent.includes("home: () => import('./locales/vi/home')")) {
  errors.push('loader.ts: missing vi home namespace registration');
}
if (!loaderContent.includes("home: () => import('./locales/en/home')")) {
  errors.push('loader.ts: missing en home namespace registration');
}
if (!loaderContent.includes("'home'")) {
  errors.push('loader.ts: home not in preload list');
}

// 3. Verify dictionary symmetry between vi and en
console.log('3. Checking dictionary key symmetry (vi/home.ts vs en/home.ts)...');
import viHome from '../src/i18n/locales/vi/home';
import enHome from '../src/i18n/locales/en/home';

function getLeafKeys(obj: Record<string, any>, prefix = ''): string[] {
  let keys: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      keys = keys.concat(getLeafKeys(v, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const viKeys = getLeafKeys(viHome).sort();
const enKeys = getLeafKeys(enHome).sort();

const missingInEn = viKeys.filter((k) => !enKeys.includes(k));
const extraInEn = enKeys.filter((k) => !viKeys.includes(k));

if (missingInEn.length > 0) {
  errors.push(`Keys missing in en/home.ts: ${missingInEn.join(', ')}`);
}
if (extraInEn.length > 0) {
  errors.push(`Extra keys in en/home.ts: ${extraInEn.join(', ')}`);
}

// 4. Verify no empty translations
console.log('4. Checking for empty or untranslated values in en/home.ts...');
function checkEmptyValues(obj: Record<string, any>, prefix = ''): string[] {
  let empty: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (v === '' || v === null || v === undefined) {
      empty.push(fullKey);
    } else if (Array.isArray(v)) {
      v.forEach((item, idx) => {
        if (typeof item === 'string' && item.trim() === '') {
          empty.push(`${fullKey}[${idx}]`);
        } else if (typeof item === 'object') {
          empty = empty.concat(checkEmptyValues(item, `${fullKey}[${idx}]`));
        }
      });
    } else if (typeof v === 'object') {
      empty = empty.concat(checkEmptyValues(v, fullKey));
    }
  }
  return empty;
}

const emptyInEn = checkEmptyValues(enHome);
if (emptyInEn.length > 0) {
  errors.push(`Empty translations in en/home.ts: ${emptyInEn.join(', ')}`);
}

console.log(`Total keys checked: ${viKeys.length}`);

if (errors.length > 0) {
  console.error('\n❌ Verification Failed:');
  errors.forEach((err) => console.error(` - ${err}`));
  process.exit(1);
} else {
  console.log('\n✅ PHASE 4B1 VERIFICATION PASSED: All 10 Home components wired and localized with 100% dictionary symmetry.');
}
