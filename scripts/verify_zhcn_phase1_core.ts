import fs from 'fs';
import path from 'path';
import {
  SUPPORTED_LOCALES,
  isLocalePublished,
  getPublishedLocales,
  DEFAULT_LOCALE
} from '../src/i18n/registry';
import { parsePathLocale, buildLocalizedPath } from '../src/i18n/parser';

// Import VI dictionaries
import viCommon from '../src/i18n/locales/vi/common';
import viNav from '../src/i18n/locales/vi/nav';
import viForms from '../src/i18n/locales/vi/forms';
import viAccessibility from '../src/i18n/locales/vi/accessibility';
import viNotFound from '../src/i18n/locales/vi/notFound';

// Import zh-CN dictionaries
import zhCommon from '../src/i18n/locales/zh-CN/common';
import zhNav from '../src/i18n/locales/zh-CN/nav';
import zhForms from '../src/i18n/locales/zh-CN/forms';
import zhAccessibility from '../src/i18n/locales/zh-CN/accessibility';
import zhNotFound from '../src/i18n/locales/zh-CN/notFound';

interface VerificationFailure {
  category: string;
  detail: string;
}

const failures: VerificationFailure[] = [];

const assert = (condition: boolean, category: string, detail: string) => {
  if (!condition) {
    failures.push({ category, detail });
    console.error(`❌ [FAIL] [${category}] ${detail}`);
  } else {
    console.log(`✅ [PASS] [${category}] ${detail}`);
  }
};

console.log('==================================================');
console.log('ZH-CN PHASE 1: CORE INTERNATIONALIZATION FOUNDATION AUDIT');
console.log('==================================================\n');

// 1. REGISTRY STATUS CHECK
console.log('--- 1. Registry Status & Publication Gate ---');
const zhMeta = SUPPORTED_LOCALES['zh-CN'];
assert(Boolean(zhMeta), 'Registry', 'zh-CN must exist in SUPPORTED_LOCALES');
assert(zhMeta?.code === 'zh-CN', 'Registry', 'zh-CN code must be "zh-CN"');
assert(zhMeta?.nativeName === '简体中文', 'Registry', 'zh-CN nativeName must be "简体中文"');
assert(zhMeta?.status === 'published', 'Registry', `zh-CN status must be "published", got "${zhMeta?.status}"`);
assert(isLocalePublished('zh-CN') === true, 'Registry', 'isLocalePublished("zh-CN") must be TRUE');
assert(isLocalePublished('vi') === true, 'Registry', 'isLocalePublished("vi") must remain TRUE');
assert(isLocalePublished('en') === true, 'Registry', 'isLocalePublished("en") must remain TRUE');

const otherLocales = ['ja', 'ko', 'de', 'fr', 'es'] as const;
otherLocales.forEach((loc) => {
  assert(
    SUPPORTED_LOCALES[loc].status === 'planned',
    'Registry',
    `Locale ${loc} must remain "planned", got "${SUPPORTED_LOCALES[loc].status}"`
  );
  assert(
    isLocalePublished(loc) === false,
    'Registry',
    `isLocalePublished("${loc}") must be FALSE`
  );
});

const publishedList = getPublishedLocales();
assert(
  publishedList.length === 3 &&
    publishedList.some((l) => l.code === 'vi') &&
    publishedList.some((l) => l.code === 'en') &&
    publishedList.some((l) => l.code === 'zh-CN'),
  'Registry',
  `getPublishedLocales() must contain exactly vi, en and zh-CN. Found: [${publishedList.map((l) => l.code).join(', ')}]`
);

// 2. DICTIONARY KEY PARITY CHECKS
console.log('\n--- 2. Core Namespaces Key Parity Check ---');

const checkKeyParity = (
  namespace: string,
  viDict: Record<string, any>,
  zhDict: Record<string, any>
) => {
  const viKeys = Object.keys(viDict);
  const zhKeys = Object.keys(zhDict);

  const missingKeys = viKeys.filter((k) => !zhKeys.includes(k));
  const extraKeys = zhKeys.filter((k) => !viKeys.includes(k));

  assert(
    missingKeys.length === 0,
    `KeyParity:${namespace}`,
    missingKeys.length === 0
      ? `All ${viKeys.length} canonical keys present in zh-CN`
      : `Missing keys in zh-CN: ${missingKeys.join(', ')}`
  );

  assert(
    extraKeys.length === 0,
    `KeyParity:${namespace}`,
    extraKeys.length === 0
      ? `No uncanonical extra keys in zh-CN`
      : `Extra keys in zh-CN: ${extraKeys.join(', ')}`
  );

  // Check no empty or undefined strings
  let emptyCount = 0;
  for (const k of viKeys) {
    if (!zhDict[k] || typeof zhDict[k] !== 'string' || zhDict[k].trim() === '') {
      emptyCount++;
      failures.push({
        category: `ValueCheck:${namespace}`,
        detail: `Key "${k}" has empty or invalid value in zh-CN`
      });
    }
  }
  assert(emptyCount === 0, `ValueCheck:${namespace}`, `All ${viKeys.length} keys have non-empty string values`);

  // Check placeholders match
  let placeholderMismatches = 0;
  for (const k of viKeys) {
    const viMatches = (viDict[k].match(/\{(\w+)\}/g) || []).sort();
    const zhMatches = (zhDict[k]?.match(/\{(\w+)\}/g) || []).sort();
    if (viMatches.join(',') !== zhMatches.join(',')) {
      placeholderMismatches++;
      failures.push({
        category: `PlaceholderCheck:${namespace}`,
        detail: `Key "${k}" placeholder mismatch: VI [${viMatches.join(', ')}] vs zh-CN [${zhMatches.join(', ')}]`
      });
    }
  }
  assert(
    placeholderMismatches === 0,
    `PlaceholderCheck:${namespace}`,
    `All placeholders match 1:1 with canonical VI`
  );
};

checkKeyParity('common', viCommon, zhCommon);
checkKeyParity('nav', viNav, zhNav);
checkKeyParity('forms', viForms, zhForms);
checkKeyParity('accessibility', viAccessibility, zhAccessibility);
checkKeyParity('notFound', viNotFound, zhNotFound);

// 3. BRAND INTEGRITY & UNTRANSLATED RULES
console.log('\n--- 3. Brand & Technical Terminology Protection ---');
assert(zhCommon.brand === 'VMC Group', 'BrandProtection', 'common.brand must be "VMC Group"');
assert(zhCommon.brandTagline === 'AI ENTERPRISE OS', 'BrandProtection', 'common.brandTagline must be "AI ENTERPRISE OS"');
assert(zhCommon.badgeAiEnterprise === 'AI Enterprise', 'BrandProtection', 'common.badgeAiEnterprise must be "AI Enterprise"');
assert(zhCommon.badgeScope === 'Scope A-K', 'BrandProtection', 'common.badgeScope must be "Scope A-K"');
assert(zhCommon.badgeHumanInTheLoop === 'Human-in-the-Loop', 'BrandProtection', 'common.badgeHumanInTheLoop must be "Human-in-the-Loop"');

assert(zhNav.enterprise === 'AI ENTERPRISE', 'BrandProtection', 'nav.enterprise must be "AI ENTERPRISE"');
assert(zhNav.aiCopilot === 'AI Copilot', 'BrandProtection', 'nav.aiCopilot must be "AI Copilot"');
assert(zhNav.workspace === 'Workspace', 'BrandProtection', 'nav.workspace must be "Workspace"');
assert(zhNav.aiCeoName === 'AI CEO Copilot', 'BrandProtection', 'nav.aiCeoName must be "AI CEO Copilot"');
assert(zhNav.aiSalesName === 'AI Sales Copilot', 'BrandProtection', 'nav.aiSalesName must be "AI Sales Copilot"');

// 4. ROUTE PARSER & PATH LOCALIZATION
console.log('\n--- 4. Routing & Localization Parser ---');
const parsedZhRoot = parsePathLocale('/zh-CN');
assert(parsedZhRoot.locale === 'zh-CN' && parsedZhRoot.canonicalPath === '/', 'Routing', 'parsePathLocale("/zh-CN") resolves to locale zh-CN and path /');

const parsedZhSolutions = parsePathLocale('/zh-CN/solutions/crm');
assert(
  parsedZhSolutions.locale === 'zh-CN' && parsedZhSolutions.canonicalPath === '/solutions/crm',
  'Routing',
  'parsePathLocale("/zh-CN/solutions/crm") resolves to locale zh-CN and path /solutions/crm'
);

const localizedZhPath = buildLocalizedPath('/solutions/ai-agent', 'zh-CN');
assert(localizedZhPath === '/zh-CN/solutions/ai-agent', 'Routing', 'buildLocalizedPath("/solutions/ai-agent", "zh-CN") produces /zh-CN/solutions/ai-agent');

// 5. PRODUCTION SITEMAP VERIFICATION
console.log('\n--- 5. Production Sitemap Verification ---');
const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const isZhPublished = isLocalePublished('zh-CN');
  if (isZhPublished) {
    const zhMatches = sitemapContent.match(/<loc>https:\/\/vmcgroup\.com\/zh-CN/g) || [];
    assert(zhMatches.length === 38, 'ProductionSafety', `public/sitemap.xml must contain exactly 38 /zh-CN URLs when published, got ${zhMatches.length}`);
  } else {
    const hasZhInSitemap = sitemapContent.includes('/zh-CN');
    assert(!hasZhInSitemap, 'ProductionSafety', 'public/sitemap.xml MUST NOT contain any /zh-CN URLs when draft');
  }
  const hasPlanned = ['/ja', '/ko', '/de', '/fr', '/es'].some((seg) => sitemapContent.includes(seg));
  assert(!hasPlanned, 'ProductionSafety', 'public/sitemap.xml strictly contains ZERO planned locale URLs');
}

// SUMMARY
console.log('\n==================================================');
if (failures.length === 0) {
  console.log('🎉 ZH-CN PHASE 1 VERIFICATION PASSED: 0 ERRORS');
  console.log('All 5 core namespaces verified with 100% key parity & production safety.');
  console.log('==================================================');
  process.exit(0);
} else {
  console.error(`💥 VERIFICATION FAILED WITH ${failures.length} ISSUE(S):`);
  failures.forEach((f, idx) => console.error(`  ${idx + 1}. [${f.category}] ${f.detail}`));
  console.log('==================================================');
  process.exit(1);
}
