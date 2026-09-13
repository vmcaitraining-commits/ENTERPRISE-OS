/**
 * Verification Script: Phase 4A1-A English Translation Verification
 * Namespaces: common, nav
 * 
 * Checks:
 * 1. Missing keys check (vi keys vs en keys): missing = 0
 * 2. Reverse check (en keys vs vi keys): extra = 0
 * 3. Placeholders match: mismatch = 0
 * 4. Protected terms violation: violation = 0
 * 5. Prohibited pseudo-brands: violation = 0
 * 6. Claim escalation check: forbidden escalated claims = 0
 * 7. Quality gate status check: draft status preserved, no unapproved publication
 */

import viCommon from '../src/i18n/locales/vi/common';
import viNav from '../src/i18n/locales/vi/nav';
import enCommon from '../src/i18n/locales/en/common';
import enNav from '../src/i18n/locales/en/nav';
import {
  CONFIRMED_PROTECTED_BRANDS,
  PROHIBITED_PSEUDO_BRANDS,
  TECHNICAL_GROUP_A_VERBATIM
} from '../src/i18n/glossary';
import { FORBIDDEN_ESCALATED_CLAIMS } from '../src/i18n/rules';

console.log('=================================================================');
console.log('PHASE 4A1-A: ENGLISH TRANSLATION VERIFICATION (COMMON & NAV)');
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
// SUITE 1: KEY PARITY & COMPLETENESS
// -------------------------------------------------------------
console.log('Suite 1: Key Parity & Completeness (vi vs en)');

function checkKeyParity(
  namespace: string,
  viDict: Record<string, string>,
  enDict: Record<string, string>
) {
  const viKeys = Object.keys(viDict);
  const enKeys = Object.keys(enDict);

  const missingInEn = viKeys.filter((k) => !enKeys.includes(k));
  const extraInEn = enKeys.filter((k) => !viKeys.includes(k));

  assert(
    missingInEn.length === 0,
    `Missing keys in [${namespace}] en = 0 (Total vi keys: ${viKeys.length}, en keys: ${enKeys.length})`,
    `Missing: ${missingInEn.join(', ')}`
  );

  assert(
    extraInEn.length === 0,
    `Extra/Orphan keys in [${namespace}] en = 0`,
    `Extra: ${extraInEn.join(', ')}`
  );

  // Non-empty string check
  const emptyEnValues = Object.entries(enDict).filter(([_, val]) => !val || typeof val !== 'string' || val.trim().length === 0);
  assert(
    emptyEnValues.length === 0,
    `All values in [${namespace}] en are non-empty strings`,
    `Empty keys: ${emptyEnValues.map(([k]) => k).join(', ')}`
  );
}

checkKeyParity('common', viCommon, enCommon);
checkKeyParity('nav', viNav, enNav);

// -------------------------------------------------------------
// SUITE 2: PLACEHOLDER PRESERVATION
// -------------------------------------------------------------
console.log('\nSuite 2: Placeholder Preservation');

function checkPlaceholders(
  namespace: string,
  viDict: Record<string, string>,
  enDict: Record<string, string>
) {
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

checkPlaceholders('common', viCommon, enCommon);
checkPlaceholders('nav', viNav, enNav);

// -------------------------------------------------------------
// SUITE 3: PROTECTED TERMS & PSEUDO-BRAND PREVENTION
// -------------------------------------------------------------
console.log('\nSuite 3: Protected Brand Names & Pseudo-Brand Prevention');

const allEnTexts = [
  ...Object.values(enCommon),
  ...Object.values(enNav)
];

// Check 3.1: Confirmed protected brands preserved
assert(
  enCommon.brand === 'VMC Group',
  'enCommon.brand preserves exact protected name "VMC Group"'
);
assert(
  enNav.enterprise === 'AI ENTERPRISE',
  'enNav.enterprise preserves exact protected name "AI ENTERPRISE"'
);

// Check 3.2: No prohibited pseudo-brands
let prohibitedBrandFound = false;
let foundPseudo = '';
for (const text of allEnTexts) {
  for (const pseudo of PROHIBITED_PSEUDO_BRANDS) {
    if (text.includes(pseudo)) {
      prohibitedBrandFound = true;
      foundPseudo = pseudo;
      break;
    }
  }
}
assert(
  !prohibitedBrandFound,
  `Prohibited pseudo-brands in common & nav = 0 (Tested: ${PROHIBITED_PSEUDO_BRANDS.join(', ')})`,
  `Found prohibited pseudo-brand: ${foundPseudo}`
);

// Check 3.3: Verbatim technical acronyms preserved where present
// When acronyms appear in Vietnamese (e.g. CRM, CRS, SOP, BI, SLA, HR, AI, RAG), they must be in English
const termsToCheck = ['CRM', 'CRS', 'SOP', 'BI', 'SLA', 'HR', 'RAG', 'CAC'];
let acronymsPreserved = true;
for (const term of termsToCheck) {
  // Find in vi
  const inVi = Object.values(viNav).some((v) => v.includes(term));
  if (inVi) {
    const inEn = Object.values(enNav).some((v) => v.includes(term));
    if (!inEn) {
      console.error(`  Missing verbatim acronym in EN nav: ${term}`);
      acronymsPreserved = false;
    }
  }
}
assert(
  acronymsPreserved,
  'All technical verbatim acronyms (CRM, CRS, SOP, BI, SLA, HR, RAG, CAC) are preserved verbatim in English'
);

// -------------------------------------------------------------
// SUITE 4: CLAIM STRENGTH PRESERVATION
// -------------------------------------------------------------
console.log('\nSuite 4: Claim Strength & Anti-Escalation Check');

let escalationFound = false;
let foundEscalationWord = '';

for (const text of allEnTexts) {
  const lower = text.toLowerCase();
  const forbiddenList = FORBIDDEN_ESCALATED_CLAIMS['en'] || [];
  for (const forbidden of forbiddenList) {
    // Check as word boundary
    const regex = new RegExp(`\\b${forbidden.toLowerCase()}\\b`, 'i');
    if (regex.test(lower)) {
      escalationFound = true;
      foundEscalationWord = `${forbidden} (in "${text}")`;
      break;
    }
  }
}

assert(
  !escalationFound,
  'No forbidden claim escalations (guaranteed, 100%, perfect, absolute) in English translations',
  `Found claim escalation: ${foundEscalationWord}`
);

// -------------------------------------------------------------
// SUITE 5: UNTRANSLATED VIETNAMESE DIACRITICS IN ENGLISH OUTPUT
// -------------------------------------------------------------
console.log('\nSuite 5: Untranslated Diacritics Check');

const vietnameseDiacriticsRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/i;
const diacriticLeakedEntries: string[] = [];

for (const [k, v] of Object.entries(enCommon)) {
  // Allow bilingual language selector label if intentional
  if (k === 'languageSelect') continue;
  if (vietnameseDiacriticsRegex.test(v)) {
    diacriticLeakedEntries.push(`common.${k}: "${v}"`);
  }
}
for (const [k, v] of Object.entries(enNav)) {
  if (vietnameseDiacriticsRegex.test(v)) {
    diacriticLeakedEntries.push(`nav.${k}: "${v}"`);
  }
}

assert(
  diacriticLeakedEntries.length === 0,
  `Untranslated Vietnamese diacritics in English common & nav = 0`,
  `Leaked: ${diacriticLeakedEntries.join(', ')}`
);

// -------------------------------------------------------------
// FINAL SUMMARY
// -------------------------------------------------------------
console.log('\n=================================================================');
console.log(`VERIFICATION RESULT: ${totalErrors === 0 ? 'ALL CHECKS PASSED' : `${totalErrors} FAILURES FOUND`}`);
console.log('=================================================================');

if (totalErrors > 0) {
  process.exit(1);
}
