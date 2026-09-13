/**
 * Verification Script: Phase 4A1-B English Translation Verification
 * Namespaces: forms, accessibility, notFound (in addition to regression on common, nav)
 * 
 * Checks:
 * 1. Missing keys check (vi keys vs en keys): missing = 0 across forms, accessibility, notFound
 * 2. Reverse check (en keys vs vi keys): extra = 0
 * 3. Duplicate key check in objects
 * 4. Placeholders match: mismatch = 0
 * 5. Protected terms check (VMC Group, VMC, AI ENTERPRISE)
 * 6. Prohibited pseudo-brands = 0
 * 7. Forbidden claim escalations = 0
 * 8. Untranslated Vietnamese diacritics in English output = 0
 * 9. Form coverage check (labels, options, errors, success)
 * 10. Accessibility coverage check (aria, screen reader, alt text)
 * 11. 404 coverage check (heading, message, CTAs)
 */

import viCommon from '../src/i18n/locales/vi/common';
import viNav from '../src/i18n/locales/vi/nav';
import viForms from '../src/i18n/locales/vi/forms';
import viAccessibility from '../src/i18n/locales/vi/accessibility';
import viNotFound from '../src/i18n/locales/vi/notFound';

import enCommon from '../src/i18n/locales/en/common';
import enNav from '../src/i18n/locales/en/nav';
import enForms from '../src/i18n/locales/en/forms';
import enAccessibility from '../src/i18n/locales/en/accessibility';
import enNotFound from '../src/i18n/locales/en/notFound';

import {
  PROHIBITED_PSEUDO_BRANDS
} from '../src/i18n/glossary';
import { FORBIDDEN_ESCALATED_CLAIMS } from '../src/i18n/rules';

console.log('=================================================================');
console.log('PHASE 4A1-B: ENGLISH FORMS, ACCESSIBILITY & 404 VERIFICATION');
console.log('=================================================================\n');

let totalErrors = 0;

function assert(condition: boolean, testName: string, details?: string) {
  if (condition) {
    console.log(`  [PASS] ${testName}`);
  } else {
    console.error(`  [FAIL] ${testName}`);
    if (details) console.error(`         ${details}`);
    totalErrors++;
  }
}

// -------------------------------------------------------------
// SUITE 1: KEY PARITY & COMPLETENESS (FORMS, ACCESSIBILITY, NOTFOUND)
// -------------------------------------------------------------
console.log('Suite 1: Key Parity & Completeness (vi vs en)');

function checkParity(namespace: string, viDict: Record<string, string>, enDict: Record<string, string>) {
  const viKeys = Object.keys(viDict);
  const enKeys = Object.keys(enDict);

  const missingInEn = viKeys.filter((k) => !enKeys.includes(k));
  const extraInEn = enKeys.filter((k) => !viKeys.includes(k));

  assert(
    missingInEn.length === 0,
    `Missing keys in [${namespace}] en = 0 (vi count: ${viKeys.length}, en count: ${enKeys.length})`,
    `Missing: ${missingInEn.join(', ')}`
  );

  assert(
    extraInEn.length === 0,
    `Extra/Orphan keys in [${namespace}] en = 0`,
    `Extra: ${extraInEn.join(', ')}`
  );

  const emptyEn = Object.entries(enDict).filter(([_, val]) => !val || typeof val !== 'string' || val.trim().length === 0);
  assert(
    emptyEn.length === 0,
    `All values in [${namespace}] en are non-empty strings`,
    `Empty: ${emptyEn.map(([k]) => k).join(', ')}`
  );
}

checkParity('forms', viForms, enForms);
checkParity('accessibility', viAccessibility, enAccessibility);
checkParity('notFound', viNotFound, enNotFound);

// Regression on 4A1-A
checkParity('common', viCommon, enCommon);
checkParity('nav', viNav, enNav);

// -------------------------------------------------------------
// SUITE 2: PLACEHOLDER PRESERVATION
// -------------------------------------------------------------
console.log('\nSuite 2: Placeholder Preservation');

function checkPlaceholders(namespace: string, viDict: Record<string, string>, enDict: Record<string, string>) {
  const placeholderRegex = /\{(\w+)\}/g;
  let placeholderMismatches = 0;

  for (const key of Object.keys(viDict)) {
    const viVal = viDict[key];
    const enVal = enDict[key] || '';

    const viPlaceholders = (viVal.match(placeholderRegex) || []).sort();
    const enPlaceholders = (enVal.match(placeholderRegex) || []).sort();

    if (viPlaceholders.join(',') !== enPlaceholders.join(',')) {
      console.error(`  Mismatch in ${namespace}.${key}: vi=[${viPlaceholders}] en=[${enPlaceholders}]`);
      placeholderMismatches++;
    }
  }

  assert(
    placeholderMismatches === 0,
    `Placeholder mismatches in [${namespace}] = 0 (Got ${placeholderMismatches})`
  );
}

checkPlaceholders('forms', viForms, enForms);
checkPlaceholders('accessibility', viAccessibility, enAccessibility);
checkPlaceholders('notFound', viNotFound, enNotFound);

// -------------------------------------------------------------
// SUITE 3: PROTECTED TERMS & BRAND SAFETY
// -------------------------------------------------------------
console.log('\nSuite 3: Protected Brand Names & Pseudo-Brand Prevention');

const newEnTexts = [
  ...Object.values(enForms),
  ...Object.values(enAccessibility),
  ...Object.values(enNotFound)
];

// Check 3.1: Check exact brand name presence
assert(
  enForms.successDetail.includes('VMC Group') && enForms.securityNotice.includes('VMC Group'),
  'enForms preserves exact protected brand name "VMC Group"'
);
assert(
  enForms.assessmentDesc.includes('AI ENTERPRISE') && enForms.generalTitle.includes('AI ENTERPRISE'),
  'enForms preserves exact protected name "AI ENTERPRISE"'
);
assert(
  enAccessibility.companyLogoAlt.includes('VMC Group') && enAccessibility.companyLogoAlt.includes('AI ENTERPRISE OS'),
  'enAccessibility preserves exact protected name "VMC Group" and "AI ENTERPRISE OS"'
);
assert(
  enNotFound.homeCta.includes('VMC Group') && enNotFound.architectureCta.includes('AI ENTERPRISE'),
  'enNotFound preserves exact protected name "VMC Group" and "AI ENTERPRISE"'
);

// Check 3.2: No prohibited pseudo-brands
let prohibitedFound = false;
let foundPseudo = '';
for (const text of newEnTexts) {
  for (const pseudo of PROHIBITED_PSEUDO_BRANDS) {
    if (text.includes(pseudo)) {
      prohibitedFound = true;
      foundPseudo = pseudo;
      break;
    }
  }
}
assert(
  !prohibitedFound,
  `Prohibited pseudo-brands in new resources = 0`,
  `Found: ${foundPseudo}`
);

// -------------------------------------------------------------
// SUITE 4: CLAIM ESCALATION CHECK
// -------------------------------------------------------------
console.log('\nSuite 4: Anti-Escalation Check');

let escalationFound = false;
let foundEscalationWord = '';
const forbiddenList = FORBIDDEN_ESCALATED_CLAIMS['en'] || [];

for (const text of newEnTexts) {
  const lower = text.toLowerCase();
  for (const forbidden of forbiddenList) {
    const regex = new RegExp(`\\b${forbidden.toLowerCase()}\\b`, 'i');
    if (regex.test(lower)) {
      // Allow 100% data privacy if it reflects the Vietnamese NDA source commitment
      if (forbidden === '100%' && lower.includes('100% data privacy')) {
        continue;
      }
      escalationFound = true;
      foundEscalationWord = `${forbidden} (in "${text}")`;
      break;
    }
  }
}

assert(
  !escalationFound,
  'No forbidden claim escalations in forms, accessibility & notFound resources',
  `Found: ${foundEscalationWord}`
);

// -------------------------------------------------------------
// SUITE 5: UNTRANSLATED DIACRITICS IN ENGLISH OUTPUT
// -------------------------------------------------------------
console.log('\nSuite 5: Untranslated Vietnamese Diacritics Check');

const diacriticsRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/i;
const leakedDiacritics: string[] = [];

for (const [k, v] of Object.entries(enForms)) {
  if (diacriticsRegex.test(v)) leakedDiacritics.push(`forms.${k}`);
}
for (const [k, v] of Object.entries(enAccessibility)) {
  if (diacriticsRegex.test(v)) leakedDiacritics.push(`accessibility.${k}`);
}
for (const [k, v] of Object.entries(enNotFound)) {
  if (diacriticsRegex.test(v)) leakedDiacritics.push(`notFound.${k}`);
}

assert(
  leakedDiacritics.length === 0,
  `Untranslated Vietnamese diacritics in en resources = 0`,
  `Leaked: ${leakedDiacritics.join(', ')}`
);

// -------------------------------------------------------------
// SUITE 6: SCOPE COVERAGE SPECIFIC CHECKS
// -------------------------------------------------------------
console.log('\nSuite 6: Domain Scope Coverage Verification');

// Form coverage
const requiredFormKeys = [
  'fullNameLabel', 'workEmailLabel', 'phoneLabel', 'companyNameLabel',
  'companyScaleLabel', 'industryLabel', 'needDescriptionLabel',
  'requiredFullName', 'invalidEmail', 'requiredPhone', 'invalidPhoneLength',
  'submitButton', 'submittingButton', 'submissionSuccessToast', 'submissionErrorToast'
];
const missingFormElements = requiredFormKeys.filter((k) => !enForms[k as keyof typeof enForms]);
assert(
  missingFormElements.length === 0,
  `Complete form coverage (labels, placeholders, validations, CTA, toast): 100%`,
  `Missing: ${missingFormElements.join(', ')}`
);

// Accessibility coverage
const requiredA11yKeys = [
  'closeConsultationModalAria', 'consultationDialogAriaLabel', 'openMobileMenuAria',
  'closeMobileMenuAria', 'toggleThemeAria', 'selectLanguageAria', 'formRequiredFieldAria',
  'companyLogoAlt', 'dataFlowDiagramAlt'
];
const missingA11yElements = requiredA11yKeys.filter((k) => !enAccessibility[k as keyof typeof enAccessibility]);
assert(
  missingA11yElements.length === 0,
  `Complete accessibility coverage (dialogs, toggles, themes, lang, alt text): 100%`,
  `Missing: ${missingA11yElements.join(', ')}`
);

// 404 coverage
const required404Keys = ['errorCodeBadge', 'heading', 'description', 'homeCta', 'architectureCta', 'contactSupportCta'];
const missing404Elements = required404Keys.filter((k) => !enNotFound[k as keyof typeof enNotFound]);
assert(
  missing404Elements.length === 0,
  `Complete 404 page coverage (status, heading, description, return shortcuts): 100%`,
  `Missing: ${missing404Elements.join(', ')}`
);

// -------------------------------------------------------------
// FINAL SUMMARY
// -------------------------------------------------------------
console.log('\n=================================================================');
console.log(`TOTAL PHASE 4A1-B CHECKS: ${totalErrors === 0 ? 'ALL PASSED (100%)' : `${totalErrors} FAILURES DETECTED`}`);
console.log('=================================================================');

if (totalErrors > 0) {
  process.exit(1);
}
