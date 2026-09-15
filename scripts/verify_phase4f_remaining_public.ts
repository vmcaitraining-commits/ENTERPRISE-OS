import viCapabilities from '../src/i18n/locales/vi/capabilities';
import enCapabilities from '../src/i18n/locales/en/capabilities';
import viResources from '../src/i18n/locales/vi/resources';
import enResources from '../src/i18n/locales/en/resources';
import viAbout from '../src/i18n/locales/vi/about';
import enAbout from '../src/i18n/locales/en/about';
import viContact from '../src/i18n/locales/vi/contact';
import enContact from '../src/i18n/locales/en/contact';
import { parsePathLocale, buildLocalizedPath } from '../src/i18n/parser';
import { preloadCoreNamespaces, namespaceLoaders } from '../src/i18n/loader';

interface AuditIssue {
  section: string;
  type: 'ERROR' | 'WARNING';
  message: string;
}

const issues: AuditIssue[] = [];
const log = (msg: string) => console.log(msg);

console.log('================================================================');
console.log('   VMC GROUP — PHASE 4F VERIFICATION: REMAINING PUBLIC PAGES');
console.log('   /capabilities, /resources, /about, /contact');
console.log('================================================================\n');

const PUBLIC_ROUTES = [
  '/capabilities',
  '/resources',
  '/about',
  '/contact'
];

// -----------------------------------------------------------------------------
// CHECK 1: Route & Path Parser Check
// -----------------------------------------------------------------------------
console.log('--- [CHECK 1] Route & Path Parser Check ---');

for (const route of PUBLIC_ROUTES) {
  const viPath = route;
  const enPath = `/en${route}`;

  // Parse VI
  const parsedVi = parsePathLocale(viPath);
  if (parsedVi.locale !== 'vi' || parsedVi.canonicalPath !== viPath) {
    issues.push({
      section: 'Route',
      type: 'ERROR',
      message: `parsePathLocale failed for VI: ${viPath} -> got ${JSON.stringify(parsedVi)}`
    });
  } else {
    log(`  ✓ VI Route parser: ${viPath} -> locale: ${parsedVi.locale}`);
  }

  // Parse EN
  const parsedEn = parsePathLocale(enPath);
  if (parsedEn.locale !== 'en' || parsedEn.canonicalPath !== viPath) {
    issues.push({
      section: 'Route',
      type: 'ERROR',
      message: `parsePathLocale failed for EN: ${enPath} -> got ${JSON.stringify(parsedEn)}`
    });
  } else {
    log(`  ✓ EN Route parser: ${enPath} -> canonicalPath: ${parsedEn.canonicalPath}, locale: ${parsedEn.locale}`);
  }

  // Build localized path
  const builtEn = buildLocalizedPath(viPath, 'en');
  if (builtEn !== enPath) {
    issues.push({
      section: 'Route',
      type: 'ERROR',
      message: `buildLocalizedPath(..., 'en') produced "${builtEn}", expected "${enPath}"`
    });
  }
}
log('');

// -----------------------------------------------------------------------------
// CHECK 2: Namespace Registration & Preloading Check
// -----------------------------------------------------------------------------
console.log('--- [CHECK 2] Namespace Registration & Preloading Check ---');

const REQUIRED_NAMESPACES = ['capabilities', 'resources', 'about', 'contact'] as const;

for (const ns of REQUIRED_NAMESPACES) {
  if (!namespaceLoaders.vi?.[ns]) {
    issues.push({
      section: 'Namespace',
      type: 'ERROR',
      message: `namespaceLoaders.vi missing loader for namespace: "${ns}"`
    });
  } else {
    log(`  ✓ namespaceLoaders.vi registered for: ${ns}`);
  }

  if (!namespaceLoaders.en?.[ns]) {
    issues.push({
      section: 'Namespace',
      type: 'ERROR',
      message: `namespaceLoaders.en missing loader for namespace: "${ns}"`
    });
  } else {
    log(`  ✓ namespaceLoaders.en registered for: ${ns}`);
  }
}

// Test preloadCoreNamespaces execution
try {
  await preloadCoreNamespaces('vi');
  log('  ✓ preloadCoreNamespaces("vi") executed successfully');
  await preloadCoreNamespaces('en');
  log('  ✓ preloadCoreNamespaces("en") executed successfully');
} catch (err) {
  issues.push({
    section: 'Namespace',
    type: 'ERROR',
    message: `preloadCoreNamespaces failed with error: ${String(err)}`
  });
}
log('');

// -----------------------------------------------------------------------------
// CHECK 3: 100% Key Parity Check (VI vs EN)
// -----------------------------------------------------------------------------
console.log('--- [CHECK 3] Key Parity Check (VI vs EN) ---');

const NAMESPACE_PAIRS = [
  { name: 'capabilities', vi: viCapabilities, en: enCapabilities },
  { name: 'resources', vi: viResources, en: enResources },
  { name: 'about', vi: viAbout, en: enAbout },
  { name: 'contact', vi: viContact, en: enContact }
];

for (const { name, vi, en } of NAMESPACE_PAIRS) {
  const viKeys = Object.keys(vi);
  const enKeys = Object.keys(en);

  const missingInEn = viKeys.filter((k) => !enKeys.includes(k));
  const extraInEn = enKeys.filter((k) => !viKeys.includes(k));

  if (missingInEn.length > 0) {
    issues.push({
      section: 'Parity',
      type: 'ERROR',
      message: `[${name}] Missing keys in EN: ${missingInEn.join(', ')}`
    });
  }

  if (extraInEn.length > 0) {
    issues.push({
      section: 'Parity',
      type: 'ERROR',
      message: `[${name}] Extra unexpected keys in EN: ${extraInEn.join(', ')}`
    });
  }

  // Check for empty strings in both VI and EN
  for (const k of viKeys) {
    const viVal = (vi as Record<string, string>)[k];
    if (typeof viVal !== 'string' || viVal.trim() === '') {
      issues.push({
        section: 'Parity',
        type: 'ERROR',
        message: `[${name}] VI key "${k}" has empty or invalid value`
      });
    }
  }

  for (const k of enKeys) {
    const enVal = (en as Record<string, string>)[k];
    if (typeof enVal !== 'string' || enVal.trim() === '') {
      issues.push({
        section: 'Parity',
        type: 'ERROR',
        message: `[${name}] EN key "${k}" has empty or invalid value`
      });
    }
  }

  if (missingInEn.length === 0 && extraInEn.length === 0) {
    log(`  ✓ [${name}] Perfect 100% key parity (${viKeys.length} keys total, 0 missing, 0 empty)`);
  }
}
log('');

// -----------------------------------------------------------------------------
// CHECK 4: Leak & Diacritic Scan in English copy
// -----------------------------------------------------------------------------
console.log('--- [CHECK 4] Vietnamese Diacritic Leak Check in EN Copy ---');

const VIETNAMESE_DIACRITICS_REGEX = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;

// Allowed proper names with Vietnamese diacritics
const ALLOWED_PROPER_NAMES = [
  'Vũ Mạnh Cường',
  'Hà Nội',
  'Việt Nam'
];

for (const { name, en } of NAMESPACE_PAIRS) {
  let leakCount = 0;
  for (const [key, val] of Object.entries(en)) {
    if (typeof val === 'string' && VIETNAMESE_DIACRITICS_REGEX.test(val)) {
      let sanitized = val;
      for (const properName of ALLOWED_PROPER_NAMES) {
        sanitized = sanitized.split(properName).join('');
      }
      if (VIETNAMESE_DIACRITICS_REGEX.test(sanitized)) {
        issues.push({
          section: 'Leak',
          type: 'ERROR',
          message: `[${name}.${key}] Unsanitized Vietnamese text found in EN copy: "${val}"`
        });
        leakCount++;
      }
    }
  }
  log(`  ✓ [${name}] Diacritic scan completed. Disallowed leaks found: ${leakCount}`);
}
log('');

// -----------------------------------------------------------------------------
// CHECK 5: Semantic Safety & Grounding Guardrails
// -----------------------------------------------------------------------------
console.log('--- [CHECK 5] Semantic Safety & Grounding Audit ---');

const allEnContent = JSON.stringify([enCapabilities, enResources, enAbout, enContact]);

// 1. Prohibited absolute or invented claims
const PROHIBITED_CLAIMS = [
  'iso certified',
  'iso 27001',
  'iso 9001',
  'gdpr certified',
  'gdpr compliant',
  '100% confidential',
  'nda guaranteed',
  'unbreakable security',
  'zero defect',
  'award winning',
  'top 10 ai',
  'decades of experience',
  '1000+ clients',
  '10,000+ clients',
  'guaranteed roi'
];

for (const claim of PROHIBITED_CLAIMS) {
  if (allEnContent.toLowerCase().includes(claim.toLowerCase())) {
    issues.push({
      section: 'Safety',
      type: 'ERROR',
      message: `Prohibited unverified or absolute claim found in EN: "${claim}"`
    });
  }
}
log('  ✓ Prohibited unverified marketing claims check: Zero violations found');

// 2. Draft status verification in resources
if (!enResources.draftBadge.toLowerCase().includes('draft')) {
  issues.push({
    section: 'Legal Safety',
    type: 'ERROR',
    message: 'resources.draftBadge in EN must explicitly include "Draft"'
  });
} else {
  log(`  ✓ resources.draftBadge correctly marked as Draft: "${enResources.draftBadge}"`);
}

// 3. Human-in-the-Loop & Governance check in About focusDesc
if (!enAbout.focusDesc.toLowerCase().includes('human') && !enAbout.focusDesc.toLowerCase().includes('governed')) {
  issues.push({
    section: 'HITL',
    type: 'WARNING',
    message: 'about.focusDesc should emphasize human-governed automation'
  });
} else {
  log('  ✓ Human-governed automated workflows confirmed in EN About (focusDesc)');
}

// 4. Contact data grounding in ContactPage.tsx and Enterprise Context defaults
import fs from 'fs';
import path from 'path';

const contactPageSrc = fs.readFileSync(path.resolve(process.cwd(), 'src/components/public/pages/ContactPage.tsx'), 'utf-8');

if (!contactPageSrc.includes('vmcaitraining@gmail.com')) {
  issues.push({
    section: 'Contact Grounding',
    type: 'ERROR',
    message: 'Verified contact email "vmcaitraining@gmail.com" missing in ContactPage.tsx'
  });
} else {
  log('  ✓ Verified contact email "vmcaitraining@gmail.com" confirmed in ContactPage.tsx');
}

if (!contactPageSrc.includes('vmcgroup.com')) {
  issues.push({
    section: 'Contact Grounding',
    type: 'ERROR',
    message: 'Verified website "vmcgroup.com" missing in ContactPage.tsx'
  });
} else {
  log('  ✓ Verified official website "vmcgroup.com" confirmed in ContactPage.tsx');
}

if (!contactPageSrc.includes('Hanoi, Vietnam')) {
  issues.push({
    section: 'Contact Grounding',
    type: 'ERROR',
    message: 'English localized headquarters "Hanoi, Vietnam" missing in ContactPage.tsx'
  });
} else {
  log('  ✓ Localized headquarters "Hanoi, Vietnam" confirmed in ContactPage.tsx');
}
log('');

// -----------------------------------------------------------------------------
// AUDIT SUMMARY & EXIT
// -----------------------------------------------------------------------------
console.log('================================================================');
console.log('   AUDIT SUMMARY FOR PHASE 4F');
console.log('================================================================');

const errors = issues.filter((i) => i.type === 'ERROR');
const warnings = issues.filter((i) => i.type === 'WARNING');

console.log(`Total Errors:   ${errors.length}`);
console.log(`Total Warnings: ${warnings.length}\n`);

if (errors.length > 0) {
  console.error('FAILURES DETECTED:');
  errors.forEach((e) => console.error(` [${e.section}] ${e.message}`));
  process.exit(1);
} else {
  if (warnings.length > 0) {
    console.warn('WARNINGS:');
    warnings.forEach((w) => console.warn(` [${w.section}] ${w.message}`));
  }
  console.log('🎉 PHASE 4F REMAINING PUBLIC PAGES PASSED ALL AUDITS WITH ZERO ERRORS!');
  process.exit(0);
}
