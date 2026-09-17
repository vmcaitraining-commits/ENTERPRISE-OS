/**
 * Verification Script for ZH-CN Phase 2: Home & AI Enterprise Namespaces
 */

import viHome from '../src/i18n/locales/vi/home';
import zhHome from '../src/i18n/locales/zh-CN/home';
import viEnterprise from '../src/i18n/locales/vi/aiEnterprise';
import zhEnterprise from '../src/i18n/locales/zh-CN/aiEnterprise';
import { SUPPORTED_LOCALES, isLocalePublished } from '../src/i18n/registry';

let failures = 0;

function pass(msg: string) {
  console.log(`✅ [PASS] ${msg}`);
}

function fail(msg: string) {
  console.error(`❌ [FAIL] ${msg}`);
  failures++;
}

function assert(condition: boolean, msg: string) {
  if (condition) pass(msg);
  else fail(msg);
}

function getLeaves(obj: any, prefix = '', leaves: Record<string, any> = {}) {
  if (obj === null || obj === undefined) return leaves;
  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
    leaves[prefix] = obj;
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => {
      getLeaves(item, prefix + '[' + idx + ']', leaves);
    });
  } else if (typeof obj === 'object') {
    for (const k of Object.keys(obj)) {
      getLeaves(obj[k], prefix ? prefix + '.' + k : k, leaves);
    }
  }
  return leaves;
}

function getPlaceholders(str: string) {
  if (typeof str !== 'string') return [];
  const matches = str.match(/\{([a-zA-Z0-9_]+)\}/g) || [];
  return matches.sort();
}

console.log('==================================================');
console.log('ZH-CN PHASE 2: HOME & AI ENTERPRISE VERIFICATION');
console.log('==================================================\n');

// 1. Publication State
assert(SUPPORTED_LOCALES['zh-CN'].status === 'published', 'zh-CN status is "published"');
assert(isLocalePublished('zh-CN') === true, 'isLocalePublished("zh-CN") is TRUE');

// 2. Home Key Parity
const viHomeLeaves = getLeaves(viHome, 'home');
const zhHomeLeaves = getLeaves(zhHome, 'home');

assert(Object.keys(viHomeLeaves).length === 431, `VI Home has 431 leaf keys (got ${Object.keys(viHomeLeaves).length})`);
assert(Object.keys(zhHomeLeaves).length === 431, `ZH Home has 431 leaf keys (got ${Object.keys(zhHomeLeaves).length})`);

let homeMissing = 0;
let homeEmpty = 0;
let homePhMismatch = 0;

for (const k of Object.keys(viHomeLeaves)) {
  if (!(k in zhHomeLeaves)) {
    homeMissing++;
    fail(`Missing Home key in zh-CN: ${k}`);
  } else {
    const zhVal = zhHomeLeaves[k];
    if (typeof zhVal === 'string' && zhVal.trim() === '') {
      homeEmpty++;
      fail(`Empty Home string at: ${k}`);
    }
    const viPh = getPlaceholders(viHomeLeaves[k]);
    const zhPh = getPlaceholders(zhVal);
    if (viPh.join(',') !== zhPh.join(',')) {
      homePhMismatch++;
      fail(`Placeholder mismatch at ${k}: VI=${viPh}, ZH=${zhPh}`);
    }
  }
}
assert(homeMissing === 0, 'Zero missing keys in Home');
assert(homeEmpty === 0, 'Zero empty values in Home');
assert(homePhMismatch === 0, 'Zero placeholder mismatches in Home');

// 3. AI Enterprise Key Parity
const viEntLeaves = getLeaves(viEnterprise, 'aiEnterprise');
const zhEntLeaves = getLeaves(zhEnterprise, 'aiEnterprise');

assert(Object.keys(viEntLeaves).length === 664, `VI AI Enterprise has 664 leaf keys (got ${Object.keys(viEntLeaves).length})`);
assert(Object.keys(zhEntLeaves).length === 664, `ZH AI Enterprise has 664 leaf keys (got ${Object.keys(zhEntLeaves).length})`);

let entMissing = 0;
let entEmpty = 0;
let entPhMismatch = 0;

for (const k of Object.keys(viEntLeaves)) {
  if (!(k in zhEntLeaves)) {
    entMissing++;
    fail(`Missing AI Enterprise key in zh-CN: ${k}`);
  } else {
    const zhVal = zhEntLeaves[k];
    if (typeof zhVal === 'string' && zhVal.trim() === '') {
      entEmpty++;
      fail(`Empty AI Enterprise string at: ${k}`);
    }
    const viPh = getPlaceholders(viEntLeaves[k]);
    const zhPh = getPlaceholders(zhVal);
    if (viPh.join(',') !== zhPh.join(',')) {
      entPhMismatch++;
      fail(`Placeholder mismatch at ${k}: VI=${viPh}, ZH=${zhPh}`);
    }
  }
}
assert(entMissing === 0, 'Zero missing keys in AI Enterprise');
assert(entEmpty === 0, 'Zero empty values in AI Enterprise');
assert(entPhMismatch === 0, 'Zero placeholder mismatches in AI Enterprise');

// 4. Critical Content Sanity Checks
assert(zhHome.hero.titleHighlightAi !== '', 'Hero titleHighlightAi present in Home');
assert(zhEnterprise.architecture.title !== '', 'Architecture section title present in AI Enterprise');
assert(!JSON.stringify(zhHome).includes('100% chính xác'), 'No unverified accuracy claims in Home');
assert(!JSON.stringify(zhEnterprise).includes('完全替代人类'), 'No complete human replacement claims in AI Enterprise');

console.log('\n==================================================');
if (failures === 0) {
  console.log('🎉 ZH-CN PHASE 2 ALL AUDIT CHECKS PASSED PERFECTLY!');
} else {
  console.error(`❌ ZH-CN PHASE 2 FAILED WITH ${failures} ERRORS`);
  process.exit(1);
}
console.log('==================================================');
