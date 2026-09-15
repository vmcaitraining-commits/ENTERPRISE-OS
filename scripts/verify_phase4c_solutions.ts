import viSolutions from '../src/i18n/locales/vi/solutions';
import enSolutions from '../src/i18n/locales/en/solutions';
import viAiEnterprise from '../src/i18n/locales/vi/aiEnterprise';
import enAiEnterprise from '../src/i18n/locales/en/aiEnterprise';
import viHome from '../src/i18n/locales/vi/home';
import enHome from '../src/i18n/locales/en/home';
import viCommon from '../src/i18n/locales/vi/common';
import enCommon from '../src/i18n/locales/en/common';
import viNav from '../src/i18n/locales/vi/nav';
import enNav from '../src/i18n/locales/en/nav';

let errors: string[] = [];
let warnings: string[] = [];

console.log('====================================================');
console.log('PHASE 4C AUDIT: SOLUTIONS ENGLISH LOCALIZATION');
console.log('====================================================\n');

// 1. Structural / Deep Key Parity Check
function compareStructures(viObj: any, enObj: any, prefix = ''): number {
  let count = 0;
  const viKeys = Object.keys(viObj);
  const enKeys = Object.keys(enObj);

  for (const key of viKeys) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    if (!(key in enObj)) {
      errors.push(`Missing EN key: ${currentPath}`);
      continue;
    }

    const viVal = viObj[key];
    const enVal = enObj[key];

    if (typeof viVal !== typeof enVal) {
      errors.push(`Type mismatch at ${currentPath}: VI is ${typeof viVal}, EN is ${typeof enVal}`);
      continue;
    }

    if (Array.isArray(viVal)) {
      if (!Array.isArray(enVal)) {
        errors.push(`Array mismatch at ${currentPath}: EN is not an array`);
        continue;
      }
      if (viVal.length !== enVal.length) {
        errors.push(`Array length mismatch at ${currentPath}: VI has ${viVal.length}, EN has ${enVal.length}`);
      }
      for (let i = 0; i < viVal.length; i++) {
        const itemVi = viVal[i];
        const itemEn = enVal[i];
        if (typeof itemVi === 'object' && itemVi !== null) {
          count += compareStructures(itemVi, itemEn, `${currentPath}[${i}]`);
        } else {
          count++;
          if (typeof itemVi === 'string') {
            if (typeof itemEn !== 'string' || itemEn.trim().length === 0) {
              errors.push(`Empty or invalid string in EN at ${currentPath}[${i}]`);
            }
          }
        }
      }
    } else if (typeof viVal === 'object' && viVal !== null) {
      count += compareStructures(viVal, enVal, currentPath);
    } else {
      count++;
      if (typeof viVal === 'string') {
        if (typeof enVal !== 'string' || enVal.trim().length === 0) {
          errors.push(`Empty or invalid string in EN at ${currentPath}`);
        }
      }
    }
  }

  // Reverse check for extraneous EN keys
  for (const key of enKeys) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    if (!(key in viObj)) {
      errors.push(`Extraneous EN key: ${currentPath}`);
    }
  }

  return count;
}

const totalEntries = compareStructures(viSolutions, enSolutions);
console.log(`[Check 1] Structural Parity: Total leaf entries compared = ${totalEntries}`);

// 2. Check for Vietnamese character leak in EN translations
const vietnameseCharRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;

function checkVietnameseLeaks(obj: any, prefix = '') {
  for (const key of Object.keys(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    const val = obj[key];
    if (typeof val === 'string') {
      // Whitelist acceptable proper names or known terms if any
      const testVal = val;
      if (vietnameseCharRegex.test(testVal)) {
        errors.push(`Vietnamese character leak in EN at ${currentPath}: "${val}"`);
      }
    } else if (Array.isArray(val)) {
      val.forEach((item, idx) => {
        if (typeof item === 'string') {
          if (vietnameseCharRegex.test(item)) {
            errors.push(`Vietnamese character leak in EN at ${currentPath}[${idx}]: "${item}"`);
          }
        } else if (typeof item === 'object' && item !== null) {
          checkVietnameseLeaks(item, `${currentPath}[${idx}]`);
        }
      });
    } else if (typeof val === 'object' && val !== null) {
      checkVietnameseLeaks(val, currentPath);
    }
  }
}

checkVietnameseLeaks(enSolutions);
console.log('[Check 2] Vietnamese Leaks Scan: Completed');

// 3. Prohibited absolute superlatives check
const bannedTerms = [
  '100% secure',
  'unhackable',
  'zero error',
  'physically isolated',
  'supercharge',
  'empower'
];

function checkBannedTerms(obj: any, prefix = '') {
  for (const key of Object.keys(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    const val = obj[key];
    if (typeof val === 'string') {
      for (const banned of bannedTerms) {
        if (val.toLowerCase().includes(banned.toLowerCase())) {
          errors.push(`Banned term "${banned}" found in EN at ${currentPath}`);
        }
      }
    } else if (Array.isArray(val)) {
      val.forEach((item, idx) => {
        if (typeof item === 'string') {
          for (const banned of bannedTerms) {
            if (item.toLowerCase().includes(banned.toLowerCase())) {
              errors.push(`Banned term "${banned}" found in EN at ${currentPath}[${idx}]`);
            }
          }
        } else if (typeof item === 'object' && item !== null) {
          checkBannedTerms(item, `${currentPath}[${idx}]`);
        }
      });
    } else if (typeof val === 'object' && val !== null) {
      checkBannedTerms(val, currentPath);
    }
  }
}

checkBannedTerms(enSolutions);
console.log('[Check 3] Enterprise Governance & Tone Check: Completed');

// 4. Regression Check across Previous Namespaces
const aiEntEntries = compareStructures(viAiEnterprise, enAiEnterprise, 'aiEnterprise');
const homeEntries = compareStructures(viHome, enHome, 'home');
const commonEntries = compareStructures(viCommon, enCommon, 'common');
const navEntries = compareStructures(viNav, enNav, 'nav');

console.log(`[Check 4] Multi-Namespace Regression:
- aiEnterprise: ${aiEntEntries} entries verified
- home: ${homeEntries} entries verified
- common: ${commonEntries} entries verified
- nav: ${navEntries} entries verified`);

// Summary
console.log('\n====================================================');
if (errors.length > 0) {
  console.error(`❌ AUDIT FAILED: ${errors.length} errors found:`);
  errors.slice(0, 30).forEach((err, i) => console.error(` ${i + 1}. ${err}`));
  if (errors.length > 30) {
    console.error(` ... and ${errors.length - 30} more errors`);
  }
  process.exit(1);
} else {
  console.log('✅ PHASE 4C SOLUTIONS AUDIT PASS!');
  console.log(`- Solutions Dictionary Total Leaf Entries: ${totalEntries}`);
  console.log('- 100% Structural symmetry between VI and EN');
  console.log('- Zero Vietnamese leaks in EN');
  console.log('- Zero banned superlative buzzwords');
  console.log('- Multi-namespace regression PASS');
  console.log('====================================================\n');
}
