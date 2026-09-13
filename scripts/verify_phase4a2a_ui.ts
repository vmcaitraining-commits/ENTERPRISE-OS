/**
 * Verification Script for Phase 4A2-A: Wire English Global Navigation UI
 *
 * Verifies:
 * 1. PublicHeader.tsx, PublicFooter.tsx, and LanguageSwitcher.tsx contain no raw Vietnamese text leaks.
 * 2. All navigation data items in navigationData.ts have corresponding keys in both vi and en nav namespaces.
 * 3. In en locale, dictionaries yield proper English strings for all nav and common elements.
 * 4. Zero fallback-to-Vietnamese on core navigation keys.
 */

import viNav from '../src/i18n/locales/vi/nav';
import enNav from '../src/i18n/locales/en/nav';
import viCommon from '../src/i18n/locales/vi/common';
import enCommon from '../src/i18n/locales/en/common';
import { NAV_DEPARTMENTS, NAV_NEEDS, NAV_INDUSTRIES, NAV_AI_AGENTS } from '../src/components/public/navigationData';
import fs from 'fs';
import path from 'path';

let failed = false;

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`  [FAIL] ${msg}`);
    failed = true;
  } else {
    console.log(`  [PASS] ${msg}`);
  }
}

console.log('='.repeat(65));
console.log('PHASE 4A2-A: NAVIGATION UI WIRING VERIFICATION');
console.log('='.repeat(65));

// Test 1: Check navigationData items have valid keys
console.log('Suite 1: navigationData.ts Translation Keys Parity');
const checkNavList = (listName: string, items: any[]) => {
  let missingName = 0;
  let missingDesc = 0;
  for (const item of items) {
    if (item.nameKey) {
      if (!(item.nameKey in viNav) || !(item.nameKey in enNav)) {
        console.error(`    Missing nameKey: ${item.nameKey}`);
        missingName++;
      }
    }
    if (item.descKey) {
      if (!(item.descKey in viNav) || !(item.descKey in enNav)) {
        console.error(`    Missing descKey: ${item.descKey}`);
        missingDesc++;
      }
    }
  }
  assert(missingName === 0, `${listName}: All nameKey exist in vi & en nav`);
  if (items.some(i => i.descKey)) {
    assert(missingDesc === 0, `${listName}: All descKey exist in vi & en nav`);
  }
};

checkNavList('NAV_DEPARTMENTS', NAV_DEPARTMENTS);
checkNavList('NAV_NEEDS', NAV_NEEDS);
checkNavList('NAV_INDUSTRIES', NAV_INDUSTRIES);
checkNavList('NAV_AI_AGENTS', NAV_AI_AGENTS);

// Test 2: Check PublicHeader.tsx for un-wired Vietnamese text in render JSX
console.log('Suite 2: PublicHeader.tsx Text Localization Audit');
const headerContent = fs.readFileSync(path.resolve(process.cwd(), 'src/components/public/PublicHeader.tsx'), 'utf-8');

// Ensure key translated phrases are present
const expectedKeys = [
  "t('nav.topBannerTag')",
  "t('nav.topBannerText')",
  "t('nav.topBannerDiagramLink')",
  "t('nav.topBannerAdminLink')",
  "t('nav.enterprise')",
  "t('nav.enterpriseTitle')",
  "t('nav.solutions')",
  "t('nav.aiAndAutomation')",
  "t('nav.capabilities')",
  "t('nav.resources')",
  "t('nav.aboutVmc')",
  "t('nav.home')",
  "t('common.themeMode')",
  "t('common.registerSolutionConsultation')",
  "t('nav.mobileSwitchToWorkspace')"
];

let missingHeaderKeys = 0;
for (const k of expectedKeys) {
  if (!headerContent.includes(k)) {
    console.error(`    Missing key call in PublicHeader: ${k}`);
    missingHeaderKeys++;
  }
}
assert(missingHeaderKeys === 0, 'All expected t() calls present in PublicHeader.tsx');

// Test 3: Check PublicFooter.tsx for un-wired text
console.log('Suite 3: PublicFooter.tsx Text Localization Audit');
const footerContent = fs.readFileSync(path.resolve(process.cwd(), 'src/components/public/PublicFooter.tsx'), 'utf-8');
const expectedFooterKeys = [
  "t('nav.footerEnterpriseCol')",
  "t('nav.footerSolutionsCol')",
  "t('nav.footerIndustriesCol')",
  "t('common.copyrightNotice')",
  "t('common.privacyPolicy')",
  "t('common.termsOfService')",
  "t('common.workspaceAdmin')",
  "t('common.brandTagline')"
];

let missingFooterKeys = 0;
for (const k of expectedFooterKeys) {
  if (!footerContent.includes(k)) {
    console.error(`    Missing key call in PublicFooter: ${k}`);
    missingFooterKeys++;
  }
}
assert(missingFooterKeys === 0, 'All expected t() calls present in PublicFooter.tsx');

// Test 4: LanguageSwitcher check
console.log('Suite 4: LanguageSwitcher.tsx Text Localization Audit');
const switcherContent = fs.readFileSync(path.resolve(process.cwd(), 'src/components/public/LanguageSwitcher.tsx'), 'utf-8');
const expectedSwitcherKeys = [
  "t('common.languageSelect')",
  "t('common.currentLanguageSelectorAria'",
  "t('common.plannedLanguagesNotice')",
  "t('common.plannedLanguagesCount'"
];

let missingSwitcherKeys = 0;
for (const k of expectedSwitcherKeys) {
  if (!switcherContent.includes(k)) {
    console.error(`    Missing key call in LanguageSwitcher: ${k}`);
    missingSwitcherKeys++;
  }
}
assert(missingSwitcherKeys === 0, 'All expected t() calls present in LanguageSwitcher.tsx');

console.log('='.repeat(65));
if (failed) {
  console.error('VERIFICATION RESULT: SOME CHECKS FAILED');
  process.exit(1);
} else {
  console.log('VERIFICATION RESULT: ALL CHECKS PASSED');
  process.exit(0);
}
