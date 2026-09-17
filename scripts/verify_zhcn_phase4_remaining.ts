/**
 * Verification Script for ZH-CN Phase 4: Remaining Namespaces
 * (aiCopilots, capabilities, resources, about, contact)
 */

import viCopilots from '../src/i18n/locales/vi/aiCopilots';
import zhCopilots from '../src/i18n/locales/zh-CN/aiCopilots';
import viCap from '../src/i18n/locales/vi/capabilities';
import zhCap from '../src/i18n/locales/zh-CN/capabilities';
import viRes from '../src/i18n/locales/vi/resources';
import zhRes from '../src/i18n/locales/zh-CN/resources';
import viAbout from '../src/i18n/locales/vi/about';
import zhAbout from '../src/i18n/locales/zh-CN/about';
import viContact from '../src/i18n/locales/vi/contact';
import zhContact from '../src/i18n/locales/zh-CN/contact';
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
console.log('ZH-CN PHASE 4: REMAINING NAMESPACES VERIFICATION');
console.log('==================================================\n');

// 1. Publication State
assert(SUPPORTED_LOCALES['zh-CN'].status === 'published', 'zh-CN status is "published"');
assert(isLocalePublished('zh-CN') === true, 'isLocalePublished("zh-CN") is TRUE');

const namespaces = [
  { name: 'aiCopilots', vi: viCopilots, zh: zhCopilots },
  { name: 'capabilities', vi: viCap, zh: zhCap },
  { name: 'resources', vi: viRes, zh: zhRes },
  { name: 'about', vi: viAbout, zh: zhAbout },
  { name: 'contact', vi: viContact, zh: zhContact }
];

for (const { name, vi, zh } of namespaces) {
  const viLeaves = getLeaves(vi, name);
  const zhLeaves = getLeaves(zh, name);

  const viCount = Object.keys(viLeaves).length;
  const zhCount = Object.keys(zhLeaves).length;

  assert(viCount === zhCount, `[KeyParity:${name}] VI has ${viCount} leaf keys, ZH has ${zhCount}`);

  let missing = 0;
  let empty = 0;
  let phMismatch = 0;

  for (const k of Object.keys(viLeaves)) {
    if (!(k in zhLeaves)) {
      missing++;
      fail(`Missing key in zh-CN: ${k}`);
    } else {
      const zhVal = zhLeaves[k];
      if (typeof zhVal === 'string' && zhVal.trim() === '') {
        empty++;
        fail(`Empty string at: ${k}`);
      }
      const viPh = getPlaceholders(viLeaves[k]);
      const zhPh = getPlaceholders(zhVal);
      if (viPh.join(',') !== zhPh.join(',')) {
        phMismatch++;
        fail(`Placeholder mismatch at ${k}: VI=${viPh}, ZH=${zhPh}`);
      }
    }
  }

  assert(missing === 0, `Zero missing keys in ${name}`);
  assert(empty === 0, `Zero empty values in ${name}`);
  assert(phMismatch === 0, `Zero placeholder mismatches in ${name}`);
}

// 2. High-Risk term checks
const serializedCopilots = JSON.stringify(zhCopilots);
assert(!serializedCopilots.includes('100% 准确'), 'No 100% accuracy claims in Copilots');
assert(!serializedCopilots.includes('零幻觉'), 'No zero hallucination claims in Copilots');
assert(!serializedCopilots.includes('自动解雇'), 'No auto firing claims in Copilots');
assert(!serializedCopilots.includes('自动付款'), 'No auto payment claims in Copilots');

console.log('\n==================================================');
if (failures === 0) {
  console.log('🎉 ZH-CN PHASE 4 ALL AUDIT CHECKS PASSED PERFECTLY!');
} else {
  console.error(`❌ ZH-CN PHASE 4 FAILED WITH ${failures} ERRORS`);
  process.exit(1);
}
console.log('==================================================');
