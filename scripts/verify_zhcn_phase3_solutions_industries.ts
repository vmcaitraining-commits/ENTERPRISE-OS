import fs from 'fs';
import path from 'path';
import {
  SUPPORTED_LOCALES,
  isLocalePublished,
  DEFAULT_LOCALE
} from '../src/i18n/registry';
import { namespaceLoaders, getRouteNamespace } from '../src/i18n/loader';

// Import VI dictionaries
import viSolutions from '../src/i18n/locales/vi/solutions';
import viIndustries from '../src/i18n/locales/vi/industries';

// Import zh-CN dictionaries
import zhCNSolutions from '../src/i18n/locales/zh-CN/solutions';
import zhCNIndustries from '../src/i18n/locales/zh-CN/industries';

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
console.log('ZH-CN PHASE 3: SOLUTIONS & INDUSTRIES AUDIT');
console.log('==================================================\n');

// 1. DRAFT PUBLICATION STATUS
console.log('--- 1. Publication Status Gate (zh-CN is PUBLISHED) ---');
assert(
  SUPPORTED_LOCALES['zh-CN']?.status === 'published',
  'Publication',
  'zh-CN status must be "published"'
);
assert(
  isLocalePublished('zh-CN') === true,
  'Publication',
  'isLocalePublished("zh-CN") must be true'
);
assert(
  isLocalePublished('vi') === true,
  'Publication',
  'isLocalePublished("vi") must remain true'
);
assert(
  isLocalePublished('en') === true,
  'Publication',
  'isLocalePublished("en") must remain true'
);

// Check sitemap matches publication status
const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const isZhPublished = isLocalePublished('zh-CN');
  if (isZhPublished) {
    assert(
      sitemapContent.includes('/zh-CN/'),
      'Sitemap',
      'public/sitemap.xml must contain /zh-CN/ URLs when published'
    );
  } else {
    assert(
      !sitemapContent.includes('/zh-CN/'),
      'Sitemap',
      'public/sitemap.xml must NOT contain any /zh-CN/ URLs while in draft'
    );
  }
}

// 2. NAMESPACE LOADERS
console.log('\n--- 2. Loader Integration & Route Namespace ---');
assert(
  typeof namespaceLoaders['zh-CN']?.solutions === 'function',
  'Loader',
  'namespaceLoaders["zh-CN"].solutions must be registered'
);
assert(
  typeof namespaceLoaders['zh-CN']?.industries === 'function',
  'Loader',
  'namespaceLoaders["zh-CN"].industries must be registered'
);
assert(
  getRouteNamespace('/solutions') === 'solutions',
  'Loader',
  'getRouteNamespace("/solutions") must return "solutions"'
);
assert(
  getRouteNamespace('/solutions/sales') === 'solutions',
  'Loader',
  'getRouteNamespace("/solutions/sales") must return "solutions"'
);
assert(
  getRouteNamespace('/industries') === 'industries',
  'Loader',
  'getRouteNamespace("/industries") must return "industries"'
);
assert(
  getRouteNamespace('/industries/trade') === 'industries',
  'Loader',
  'getRouteNamespace("/industries/trade") must return "industries"'
);

// 3. SOLUTIONS PARITY
console.log('\n--- 3. Solutions Namespace Parity & Completeness ---');
assert(Boolean(zhCNSolutions.overview), 'Solutions', 'zhCNSolutions must contain overview');
assert(Boolean(zhCNSolutions.departmentDetail), 'Solutions', 'zhCNSolutions must contain departmentDetail');
assert(Boolean(zhCNSolutions.needDetail), 'Solutions', 'zhCNSolutions must contain needDetail');
assert(Boolean(zhCNSolutions.departments), 'Solutions', 'zhCNSolutions must contain departments');
assert(Boolean(zhCNSolutions.needs), 'Solutions', 'zhCNSolutions must contain needs');
assert(Boolean(zhCNSolutions.visuals), 'Solutions', 'zhCNSolutions must contain visuals');

// Check 6 departments
const expectedDepts = ['sales', 'marketing', 'customer-service', 'hr', 'finance', 'management'];
expectedDepts.forEach((dept) => {
  const deptData = (zhCNSolutions.departments as any)?.[dept];
  assert(Boolean(deptData), 'Solutions:Dept', `Department "${dept}" must exist in zhCNSolutions`);
  if (deptData) {
    assert(Boolean(deptData.name), 'Solutions:Dept', `Department "${dept}" has localized name: ${deptData.name}`);
    assert(Boolean(deptData.tagline), 'Solutions:Dept', `Department "${dept}" has localized tagline`);
    assert(Array.isArray(deptData.problems) && deptData.problems.length > 0, 'Solutions:Dept', `Department "${dept}" has problems list`);
    assert(Array.isArray(deptData.processes) && deptData.processes.length > 0, 'Solutions:Dept', `Department "${dept}" has processes list`);
  }
});

// Check 6 needs
const expectedNeeds = ['crm', 'ai-agent', 'voice', 'automation', 'website', 'bi'];
expectedNeeds.forEach((need) => {
  const needData = (zhCNSolutions.needs as any)?.[need];
  assert(Boolean(needData), 'Solutions:Need', `Need "${need}" must exist in zhCNSolutions`);
  if (needData) {
    assert(Boolean(needData.name), 'Solutions:Need', `Need "${need}" has localized name: ${needData.name}`);
    assert(Boolean(needData.tagline), 'Solutions:Need', `Need "${need}" has localized tagline`);
    assert(Array.isArray(needData.problems) && needData.problems.length > 0, 'Solutions:Need', `Need "${need}" has problems`);
    assert(Boolean(needData.operatingWorkflow), 'Solutions:Need', `Need "${need}" has operatingWorkflow`);
  }
});

// Check Visuals keys
assert(Boolean((zhCNSolutions.visuals as any)?.sales), 'Solutions:Visuals', 'visuals.sales must exist');
assert(Boolean((zhCNSolutions.visuals as any)?.marketing), 'Solutions:Visuals', 'visuals.marketing must exist');
assert(Boolean((zhCNSolutions.visuals as any)?.customerService), 'Solutions:Visuals', 'visuals.customerService must exist');
assert(Boolean((zhCNSolutions.visuals as any)?.hr), 'Solutions:Visuals', 'visuals.hr must exist');
assert(Boolean((zhCNSolutions.visuals as any)?.finance), 'Solutions:Visuals', 'visuals.finance must exist');
assert(Boolean((zhCNSolutions.visuals as any)?.management), 'Solutions:Visuals', 'visuals.management must exist');

// 4. INDUSTRIES PARITY
console.log('\n--- 4. Industries Namespace & 8 Sector Profiles Parity ---');
assert(Boolean(zhCNIndustries.overview), 'Industries', 'zhCNIndustries must contain overview');
assert(Boolean(zhCNIndustries.detail), 'Industries', 'zhCNIndustries must contain detail');
assert(Boolean(zhCNIndustries.visuals), 'Industries', 'zhCNIndustries must contain visuals');
assert(Boolean(zhCNIndustries.sectors), 'Industries', 'zhCNIndustries must contain sectors');

const expectedSectors = [
  'trade',
  'service',
  'education',
  'real-estate',
  'manufacturing',
  'distribution',
  'construction',
  'technology'
];

expectedSectors.forEach((slug) => {
  const sector = (zhCNIndustries.sectors as any)?.[slug];
  assert(Boolean(sector), 'Industries:Sector', `Sector "${slug}" must exist in zhCNIndustries.sectors`);
  if (sector) {
    assert(sector.slug === slug, 'Industries:Sector', `Sector "${slug}" slug matches`);
    assert(Boolean(sector.name), 'Industries:Sector', `Sector "${slug}" has name: ${sector.name}`);
    assert(Boolean(sector.tagline), 'Industries:Sector', `Sector "${slug}" has tagline`);
    assert(Boolean(sector.heroProblemSummary), 'Industries:Sector', `Sector "${slug}" has heroProblemSummary`);

    const snapshot = sector.operationalSnapshot || sector.operatingSnapshot;
    assert(Boolean(snapshot), 'Industries:Sector', `Sector "${slug}" has operational snapshot`);

    const daily = sector.dailyOperations || sector.dailyOperation;
    assert(Array.isArray(daily) && daily.length > 0, 'Industries:Sector', `Sector "${slug}" has daily operations (${daily?.length} items)`);

    const journey = sector.journeySteps || sector.journeyVisualFlow;
    assert(Array.isArray(journey) && journey.length > 0, 'Industries:Sector', `Sector "${slug}" has journey flow (${journey?.length} steps)`);

    assert(Array.isArray(sector.configuredModules) && sector.configuredModules.length > 0, 'Industries:Sector', `Sector "${slug}" has configured modules (${sector.configuredModules?.length} modules)`);

    const demo = sector.aiDemo || sector.aiSpecializedDemo;
    assert(Boolean(demo), 'Industries:Sector', `Sector "${slug}" has AI demo`);

    assert(Array.isArray(sector.trackedKpis) && sector.trackedKpis.length > 0, 'Industries:Sector', `Sector "${slug}" has tracked KPIs (${sector.trackedKpis?.length} KPIs)`);

    const roadmap = sector.implementationRoadmap || sector.threeStageRoadmap;
    assert(Array.isArray(roadmap) && roadmap.length > 0, 'Industries:Sector', `Sector "${slug}" has 3-stage roadmap (${roadmap?.length} phases)`);
  }
});

// 5. SAFETY & GLOSSARY CHECKS
console.log('\n--- 5. Safety & Quality Guidelines Audit ---');
const allText = JSON.stringify(zhCNIndustries) + JSON.stringify(zhCNSolutions);

// Prohibited terms
const prohibited = [
  'AI 自动招聘',
  '自动解雇',
  '100% 转写准确率',
  '100% 准确率'
];

prohibited.forEach((term) => {
  assert(
    !allText.includes(term),
    'Safety',
    `Must not contain unauthorized claim: "${term}"`
  );
});

// Summary
console.log('\n==================================================');
console.log(`TOTAL AUDIT COMPLETED. Failures: ${failures.length}`);
console.log('==================================================');

if (failures.length > 0) {
  console.error(`\n❌ Failed checks (${failures.length}):`);
  failures.forEach((f, idx) => {
    console.error(`  ${idx + 1}. [${f.category}] ${f.detail}`);
  });
  process.exit(1);
} else {
  console.log('\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
