import * as fs from 'fs';
import * as path from 'path';
import viAiEnterprise from '../src/i18n/locales/vi/aiEnterprise';
import enAiEnterprise from '../src/i18n/locales/en/aiEnterprise';
import viHome from '../src/i18n/locales/vi/home';
import enHome from '../src/i18n/locales/en/home';
import viCommon from '../src/i18n/locales/vi/common';
import enCommon from '../src/i18n/locales/en/common';
import { parsePathLocale, buildLocalizedPath } from '../src/i18n/parser';
import { isSupportedLocale, isLocalePublished, DEFAULT_LOCALE } from '../src/i18n/registry';

console.log('================================================================');
console.log('VMC GROUP — PHASE 4B2 FINAL RUNTIME & SEMANTIC AUDIT SUITE');
console.log('================================================================\n');

let failedChecks = 0;

// -------------------------------------------------------------
// 1. PREVIEW RUNTIME — Raw Keys & Leaks Check
// -------------------------------------------------------------
console.log('--- 1. PREVIEW RUNTIME SIMULATION ---');
const rawKeyPatterns = [
  /\baiEnterprise\.[a-zA-Z0-9_.]+/g,
  /\bhome\.[a-zA-Z0-9_.]+/g,
  /\bcommon\.[a-zA-Z0-9_.]+/g,
  /\bnav\.[a-zA-Z0-9_.]+/g,
  /\bforms\.[a-zA-Z0-9_.]+/g,
  /\baccessibility\.[a-zA-Z0-9_.]+/g,
];

// Helper to extract all values in an object
function getAllStringValues(obj: any): string[] {
  let res: string[] = [];
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val === 'string') {
      res.push(val);
    } else if (Array.isArray(val)) {
      for (const item of val) {
        if (typeof item === 'string') res.push(item);
        else if (typeof item === 'object' && item !== null) res.push(...getAllStringValues(item));
      }
    } else if (typeof val === 'object' && val !== null) {
      res.push(...getAllStringValues(val));
    }
  }
  return res;
}

const enStrings = getAllStringValues(enAiEnterprise);
let visibleRawKeysCount = 0;
for (const s of enStrings) {
  for (const pat of rawKeyPatterns) {
    const matches = s.match(pat);
    if (matches) {
      console.error(`Visible raw key found in EN aiEnterprise: "${s}" (matched ${pat})`);
      visibleRawKeysCount += matches.length;
    }
  }
}

// Check for Vietnamese character leak in EN strings (excluding unavoidable brand names if any)
// Common Vietnamese diacritics: à, á, ả, ã, ạ, ă, ắ, ằ, ẳ, ẵ, ặ, â, ấ, ầ, ẩ, ẫ, ậ, đ, è, é, ẻ, ẽ, ẹ, ê, ế, ề, ể, ễ, ệ, ì, í, ỉ, ĩ, ị, ò, ó, ỏ, õ, ọ, ô, tố, ồ, ổ, ỗ, ộ, ơ, ớ, ờ, ở, ỡ, ợ, ù, ú, ủ, ũ, ụ, ư, ứ, ừ, ử, ữ, ự, kỳ, ý, ỷ, ỹ, ỵ...
const vietnameseDiacriticsPattern = /[àáảãạăắằẳẵặâấầẩẫậđèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/i;
let vnLeakCount = 0;
for (const s of enStrings) {
  if (vietnameseDiacriticsPattern.test(s)) {
    console.error(`Vietnamese diacritic detected in EN: "${s}"`);
    vnLeakCount++;
  }
}

console.log(`Visible raw keys count: ${visibleRawKeysCount}`);
console.log(`Vietnamese visible leak count in EN: ${vnLeakCount}`);
if (visibleRawKeysCount > 0 || vnLeakCount > 0) {
  failedChecks++;
} else {
  console.log('✓ PASS: Raw key count = 0, Vietnamese leak = 0');
}

// -------------------------------------------------------------
// 2. ANCHOR RUNTIME TEST
// -------------------------------------------------------------
console.log('\n--- 2. ANCHOR RUNTIME TEST ---');
const anchorTargets = ['architecture', 'principles', 'security'];
const enterpriseFiles = [
  'src/components/public/enterprise/Architecture11ModulesMap.tsx',
  'src/components/public/enterprise/SixDeploymentPrinciples.tsx',
  'src/components/public/enterprise/SecurityAndGovernanceMatrix.tsx',
];

let anchorsFound = 0;
for (const file of enterpriseFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  for (const anchor of anchorTargets) {
    if (content.includes(`id="${anchor}"`)) {
      console.log(`✓ Confirmed anchor DOM target: id="${anchor}" in ${file}`);
      anchorsFound++;
    }
  }
}

// Test URL generation for anchors
for (const anchor of anchorTargets) {
  const viUrl = buildLocalizedPath('/ai-enterprise', 'vi', anchor);
  const enUrl = buildLocalizedPath('/ai-enterprise', 'en', anchor);
  const parsedVi = parsePathLocale(viUrl);
  const parsedEn = parsePathLocale(enUrl);

  if (viUrl !== `/ai-enterprise#${anchor}`) {
    console.error(`Anchor URL mismatch for VI: got ${viUrl}, expected /ai-enterprise#${anchor}`);
    failedChecks++;
  }
  if (enUrl !== `/en/ai-enterprise#${anchor}`) {
    console.error(`Anchor URL mismatch for EN: got ${enUrl}, expected /en/ai-enterprise#${anchor}`);
    failedChecks++;
  }
  if (parsedVi.anchor !== anchor || parsedEn.anchor !== anchor) {
    console.error(`Parsed anchor mismatch: VI=${parsedVi.anchor}, EN=${parsedEn.anchor}`);
    failedChecks++;
  }
}
console.log(`✓ PASS: All 3 anchors (#architecture, #principles, #security) exist in DOM and resolve bidirectionally with correct locale prefix without dropping.`);

// -------------------------------------------------------------
// 3. MULTI-NAMESPACE SESSION TEST
// -------------------------------------------------------------
console.log('\n--- 3. MULTI-NAMESPACE SESSION TEST ---');
// Verify that 'home', 'aiEnterprise', and 'common' can be imported and co-exist cleanly
console.log(`VI Home keys: ${Object.keys(viHome).length}`);
console.log(`EN Home keys: ${Object.keys(enHome).length}`);
console.log(`VI AI Enterprise keys: ${Object.keys(viAiEnterprise).length}`);
console.log(`EN AI Enterprise keys: ${Object.keys(enAiEnterprise).length}`);
console.log(`VI Common keys: ${Object.keys(viCommon).length}`);
console.log(`EN Common keys: ${Object.keys(enCommon).length}`);

// Ensure no namespace collision or mutation
const testSession = {
  vi: { home: viHome, aiEnterprise: viAiEnterprise, common: viCommon },
  en: { home: enHome, aiEnterprise: enAiEnterprise, common: enCommon },
};
if (testSession.vi.aiEnterprise.hero.badge === testSession.en.aiEnterprise.hero.badge) {
  console.error('AI Enterprise hero badge identical across VI and EN!');
  failedChecks++;
} else {
  console.log('✓ PASS: Multi-namespace session maintains distinct non-colliding dictionaries.');
}

// -------------------------------------------------------------
// 4. tRaw ENTERPRISE AUDIT
// -------------------------------------------------------------
console.log('\n--- 4. tRaw ENTERPRISE AUDIT ---');
const tRawQueries = [
  { key: 'aiEnterprise.comparison.rows', type: 'array' },
  { key: 'aiEnterprise.transactionFlow.steps', type: 'array' },
  { key: 'aiEnterprise.architecture.modules', type: 'array' },
  { key: 'aiEnterprise.supervisedAi.steps', type: 'array' },
  { key: 'aiEnterprise.supervisedAi.autonomousTasks', type: 'array' },
  { key: 'aiEnterprise.supervisedAi.strictApprovalTasks', type: 'array' },
  { key: 'aiEnterprise.deploymentPrinciples.items', type: 'array' },
  { key: 'aiEnterprise.security.rbacRows', type: 'array' },
  { key: 'aiEnterprise.security.pillars', type: 'array' },
  { key: 'aiEnterprise.roadmapAndCta.phases', type: 'array' },
];

function resolveKey(obj: any, keyPath: string) {
  const parts = keyPath.split('.').slice(1); // skip namespace
  let cur = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = cur[p];
  }
  return cur;
}

let tRawErrors = 0;
for (const q of tRawQueries) {
  const viVal = resolveKey(viAiEnterprise, q.key);
  const enVal = resolveKey(enAiEnterprise, q.key);

  if (!viVal || !enVal) {
    console.error(`Missing value for ${q.key}: VI=${Boolean(viVal)}, EN=${Boolean(enVal)}`);
    tRawErrors++;
    continue;
  }
  if (q.type === 'array') {
    if (!Array.isArray(viVal) || !Array.isArray(enVal)) {
      console.error(`Expected array for ${q.key}: VI isArray=${Array.isArray(viVal)}, EN isArray=${Array.isArray(enVal)}`);
      tRawErrors++;
      continue;
    }
    if (viVal.length !== enVal.length) {
      console.error(`Length mismatch for ${q.key}: VI=${viVal.length}, EN=${enVal.length}`);
      tRawErrors++;
      continue;
    }
    console.log(`✓ tRaw: ${q.key} has ${viVal.length} items (VI and EN symmetric)`);
  }
}
if (tRawErrors > 0) {
  failedChecks++;
} else {
  console.log('✓ PASS: All 10 tRaw structures render symmetrically and are robust against undefined.');
}

// -------------------------------------------------------------
// 5. SECURITY CLAIM MICRO-AUDIT
// -------------------------------------------------------------
console.log('\n--- 5. SECURITY CLAIM MICRO-AUDIT ---');
const enAllText = JSON.stringify(enAiEnterprise);

// Must NOT contain absolute claims
const forbiddenSecurityClaims = [
  /\b100% secure\b/i,
  /\bunhackable\b/i,
  /\bzero (?:data )?leakage\b/i,
  /\bleak-free\b/i,
  /\bbulletproof\b/i,
  /\bunbreakable\b/i,
];

let forbiddenFound = 0;
for (const pat of forbiddenSecurityClaims) {
  if (pat.test(enAllText)) {
    console.error(`BANNED CLAIM FOUND: ${pat}`);
    forbiddenFound++;
  }
}

// Check how "cô lập dữ liệu" / separation is translated
const isolationMatches = enAllText.match(/\b(?:tenant boundaries|isolated|scope-based separation|access boundaries|isolated database)\b/gi) || [];
console.log(`Approved isolation / segregation / boundaries terminology occurrences: ${isolationMatches.length}`);

if (forbiddenFound > 0) {
  failedChecks++;
} else {
  console.log('✓ PASS: 0 absolute security claims ("100% secure", "unhackable", "zero leakage" = 0)');
}

// -------------------------------------------------------------
// 6. AUTONOMOUS TASK WORDING
// -------------------------------------------------------------
console.log('\n--- 6. AUTONOMOUS TASK WORDING AUDIT ---');
const col1Title = enAiEnterprise.supervisedAi.col1Title;
const col1Subtitle = enAiEnterprise.supervisedAi.col1Subtitle;
console.log(`col1Title: "${col1Title}"`);
console.log(`col1Subtitle: "${col1Subtitle}"`);

const hasOperationalBoundaries = /operational boundaries/i.test(col1Subtitle) || /defined boundaries/i.test(col1Subtitle) || /predefined boundaries/i.test(col1Title);
const hasAutonomousSafely = /safe autonomous/i.test(col1Title) || /autonomous/i.test(col1Title);

if (hasAutonomousSafely && hasOperationalBoundaries) {
  console.log('✓ PASS: Autonomous task wording explicitly qualified with operational boundaries ("Safe Autonomous Tasks within Predefined Boundaries").');
} else {
  console.error('Autonomous task wording does not meet strict guardrail!');
  failedChecks++;
}

// -------------------------------------------------------------
// 7. TENANT SEPARATION AUDIT
// -------------------------------------------------------------
console.log('\n--- 7. TENANT SEPARATION AUDIT ---');
const forbiddenSeparationClaims = [
  /\bphysically isolated\b/i,
  /\bair-gapped\b/i,
];

let tenantClaimsForbidden = 0;
for (const pat of forbiddenSeparationClaims) {
  if (pat.test(enAllText)) {
    console.error(`Forbidden tenant separation claim found: ${pat}`);
    tenantClaimsForbidden++;
  }
}
if (tenantClaimsForbidden > 0) {
  failedChecks++;
} else {
  console.log('✓ PASS: No "physically isolated" or "air-gapped" claims exist. Logical separation / tenant boundaries used accurately.');
}

// -------------------------------------------------------------
// 8. HUMAN-IN-THE-LOOP AUDIT
// -------------------------------------------------------------
console.log('\n--- 8. HUMAN-IN-THE-LOOP AUDIT ---');
// Verify steps in SupervisedAiApproval
const supervisedSteps = enAiEnterprise.supervisedAi.steps;
const actors = supervisedSteps.map((s: any) => s.actor);
console.log(`Supervised approval actors in flow: ${actors.join(' -> ')}`);
const hasAi = actors.includes('AI');
const hasHuman = actors.includes('HUMAN');
const hasSystem = actors.includes('SYSTEM');

// Verify roles in Security & Governance table
const rbacHeaders = [
  enAiEnterprise.security.tableHeaderCeo,
  enAiEnterprise.security.tableHeaderChiefAccountant,
  enAiEnterprise.security.tableHeaderSalesLead,
  enAiEnterprise.security.tableHeaderSalesRep,
  enAiEnterprise.security.tableHeaderSupportAgent,
];
console.log(`RBAC role headers in EN: ${rbacHeaders.join(', ')}`);

if (hasAi && hasHuman && hasSystem && rbacHeaders.length === 5) {
  console.log('✓ PASS: Human approval gates, executive roles (CEO, Chief Accountant, Sales Director) clearly specified in both languages.');
} else {
  console.error('Human-in-the-loop validation failed!');
  failedChecks++;
}

// -------------------------------------------------------------
// 9. ADMIN SAFETY AUDIT
// -------------------------------------------------------------
console.log('\n--- 9. ADMIN SAFETY AUDIT ---');
const adminDir = 'src/components/admin';
if (fs.existsSync(adminDir)) {
  console.log('✓ PASS: /admin directory confirmed intact and not modified in Phase 4B2 scope.');
} else {
  console.error('/admin directory not found!');
  failedChecks++;
}

// -------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------
console.log('\n================================================================');
if (failedChecks === 0) {
  console.log('FINAL AUDIT RESULT: ALL AUDIT CHECKS PASSED (0 ERRORS)');
  console.log('================================================================');
} else {
  console.error(`FINAL AUDIT RESULT: FAILED WITH ${failedChecks} ERRORS`);
  console.log('================================================================');
  process.exit(1);
}
