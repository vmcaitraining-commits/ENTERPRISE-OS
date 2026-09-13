import { parsePathLocale, buildLocalizedPath } from '../src/i18n/parser';
import {
  SUPPORTED_LOCALES,
  getPublishedLocales,
  isSupportedLocale,
  isLocalePublished,
  getStoredLocale,
  setStoredLocale
} from '../src/i18n/registry';
import { LocaleCode } from '../src/i18n/types';

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failed++;
  }
}

console.log('--- STARTING I18N PHASE 2 VERIFICATION TEST ---\n');

// 1. PUBLISHED LOCALE FILTERING
console.log('1. Checking Published Locale Filtering...');
assert(isLocalePublished('vi') === true, 'vi is published');
assert(isLocalePublished('en') === false, 'en is NOT published (draft)');
assert(isLocalePublished('zh-CN') === false, 'zh-CN is planned');
assert(isLocalePublished('ja') === false, 'ja is planned');
assert(isLocalePublished('ko') === false, 'ko is planned');
assert(isLocalePublished('de') === false, 'de is planned');
assert(isLocalePublished('fr') === false, 'fr is planned');
assert(isLocalePublished('es') === false, 'es is planned');

const published = getPublishedLocales();
assert(published.length === 1 && published[0].code === 'vi', 'Only "vi" is in getPublishedLocales()');

// 2. ROUTE PRESERVATION (Vietnamese <-> English)
console.log('\n2. Testing Route Preservation...');

// Root
assert(buildLocalizedPath('/', 'en') === '/en', 'buildLocalizedPath("/", "en") -> /en');
assert(buildLocalizedPath('/en', 'vi') === '/', 'buildLocalizedPath("/en", "vi") -> /');

// Solutions CRM
assert(buildLocalizedPath('/solutions/crm', 'en') === '/en/solutions/crm', '/solutions/crm -> /en/solutions/crm');
assert(buildLocalizedPath('/en/solutions/crm', 'vi') === '/solutions/crm', '/en/solutions/crm -> /solutions/crm');

// Industries Education
assert(buildLocalizedPath('/industries/education', 'en') === '/en/industries/education', '/industries/education -> /en/industries/education');
assert(buildLocalizedPath('/en/industries/education', 'vi') === '/industries/education', '/en/industries/education -> /industries/education');

// AI CEO
assert(buildLocalizedPath('/ai/ceo', 'en') === '/en/ai/ceo', '/ai/ceo -> /en/ai/ceo');
assert(buildLocalizedPath('/en/ai/ceo', 'vi') === '/ai/ceo', '/en/ai/ceo -> /ai/ceo');

// Resources & Contact
assert(buildLocalizedPath('/resources', 'en') === '/en/resources', '/resources -> /en/resources');
assert(buildLocalizedPath('/contact', 'en') === '/en/contact', '/contact -> /en/contact');

// Anchor Preservation
assert(
  buildLocalizedPath('/ai-enterprise', 'en', 'security') === '/en/ai-enterprise#security',
  'buildLocalizedPath("/ai-enterprise", "en", "security") -> /en/ai-enterprise#security'
);
assert(
  buildLocalizedPath('/ai-enterprise#security', 'en') === '/en/ai-enterprise#security',
  'buildLocalizedPath("/ai-enterprise#security", "en") with inline anchor -> /en/ai-enterprise#security'
);
assert(
  buildLocalizedPath('/en/ai-enterprise#security', 'vi') === '/ai-enterprise#security',
  'buildLocalizedPath("/en/ai-enterprise#security", "vi") -> /ai-enterprise#security'
);

// Cross-locale switching (e.g. ja -> de)
assert(buildLocalizedPath('/ai/ceo', 'de') === '/de/ai/ceo', '/ai/ceo -> /de/ai/ceo');
const parsedJaCeo = parsePathLocale('/ja/ai/ceo');
assert(
  buildLocalizedPath(parsedJaCeo.canonicalPath, 'de') === '/de/ai/ceo',
  '/ja/ai/ceo -> /de/ai/ceo via canonicalPath'
);

// 3. ADMIN REGRESSION SAFEGUARDS
console.log('\n3. Testing Admin Regression Safeguards...');
assert(buildLocalizedPath('/admin', 'en') === '/admin', 'buildLocalizedPath("/admin", "en") returns /admin (never /en/admin)');
assert(buildLocalizedPath('/admin', 'vi') === '/admin', 'buildLocalizedPath("/admin", "vi") returns /admin');
assert(buildLocalizedPath('/admin/settings', 'en') === '/admin', 'buildLocalizedPath("/admin/settings", "en") returns /admin');

const parsedAdmin = parsePathLocale('/admin');
assert(parsedAdmin.locale === 'vi', 'parsePathLocale("/admin") locale is "vi"');
assert(parsedAdmin.canonicalPath === '/admin', 'parsePathLocale("/admin") canonicalPath is "/admin"');
assert(parsedAdmin.hasLocalePrefix === false, 'parsePathLocale("/admin") hasLocalePrefix is false');

// 4. UNKNOWN LOCALE SAFETIES
console.log('\n4. Testing Unknown Locale Safeties...');
const parsedXx = parsePathLocale('/xx/');
assert(parsedXx.locale === 'vi', 'parsePathLocale("/xx/") defaults to "vi"');
assert(parsedXx.canonicalPath === '/xx', 'parsePathLocale("/xx/") canonicalPath is "/xx"');

const parsedAbcCrm = parsePathLocale('/abc/solutions/crm');
assert(parsedAbcCrm.locale === 'vi', 'parsePathLocale("/abc/solutions/crm") defaults to "vi"');
assert(parsedAbcCrm.canonicalPath === '/abc/solutions/crm', 'parsePathLocale("/abc/solutions/crm") canonicalPath is "/abc/solutions/crm"');

// 5. NATIVE NAMES & METADATA AUDIT
console.log('\n5. Auditing Native Names & Metadata...');
const expectedNativeNames: Record<LocaleCode, string> = {
  vi: 'Tiếng Việt',
  en: 'English',
  'zh-CN': '简体中文',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español'
};

Object.entries(expectedNativeNames).forEach(([code, nativeName]) => {
  const meta = SUPPORTED_LOCALES[code as LocaleCode];
  assert(meta !== undefined, `Locale "${code}" exists in SUPPORTED_LOCALES`);
  assert(meta.nativeName === nativeName, `Locale "${code}" nativeName is "${nativeName}"`);
});

// 6. PERSISTENCE HELPERS
console.log('\n6. Checking Persistence Helpers...');
assert(typeof getStoredLocale === 'function', 'getStoredLocale is a function');
assert(typeof setStoredLocale === 'function', 'setStoredLocale is a function');

console.log(`\n--- TEST SUMMARY: ${passed} PASSED, ${failed} FAILED ---`);
if (failed > 0) {
  process.exit(1);
}
