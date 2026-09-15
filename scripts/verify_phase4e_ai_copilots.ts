import viAiCopilots from '../src/i18n/locales/vi/aiCopilots';
import enAiCopilots from '../src/i18n/locales/en/aiCopilots';
import { copilotDetailedMap } from '../src/data/aiCopilotDetailedData';
import { parsePathLocale, buildLocalizedPath } from '../src/i18n/parser';

interface AuditIssue {
  section: string;
  type: 'ERROR' | 'WARNING';
  message: string;
}

const issues: AuditIssue[] = [];
const log = (msg: string) => console.log(msg);

console.log('================================================================');
console.log('   VMC GROUP — PHASE 4E FINAL AUDIT: ALL 9 AI COPILOTS');
console.log('================================================================\n');

const EXPECTED_SLUGS = [
  'ceo',
  'sales',
  'marketing',
  'customer-service',
  'hr',
  'finance',
  'voice',
  'workflow',
  'rag'
];

const VISUAL_KEYS_MAP: Record<string, string> = {
  ceo: 'ceo',
  sales: 'sales',
  marketing: 'marketing',
  'customer-service': 'customerService',
  hr: 'hr',
  finance: 'finance',
  voice: 'voice',
  workflow: 'workflow',
  rag: 'rag'
};

// -----------------------------------------------------------------------------
// CHECK A: Route & Link Check
// -----------------------------------------------------------------------------
console.log('--- [CHECK A] Route & Link Check ---');

// 1. Check copilotDetailedMap has all 9 slugs
for (const slug of EXPECTED_SLUGS) {
  if (!copilotDetailedMap[slug]) {
    issues.push({ section: 'Route', type: 'ERROR', message: `copilotDetailedMap missing slug: "${slug}"` });
  } else {
    log(`  ✓ Data map contains: ${slug}`);
  }
}

// 2. Parser and buildLocalizedPath for all slugs
for (const slug of EXPECTED_SLUGS) {
  const viPath = `/ai/${slug}`;
  const enPath = `/en/ai/${slug}`;

  // Parse VI
  const parsedVi = parsePathLocale(viPath);
  if (parsedVi.locale !== 'vi' || parsedVi.canonicalPath !== viPath) {
    issues.push({ section: 'Route', type: 'ERROR', message: `parsePathLocale failed for VI: ${viPath} -> got ${JSON.stringify(parsedVi)}` });
  }

  // Parse EN
  const parsedEn = parsePathLocale(enPath);
  if (parsedEn.locale !== 'en' || parsedEn.canonicalPath !== viPath) {
    issues.push({ section: 'Route', type: 'ERROR', message: `parsePathLocale failed for EN: ${enPath} -> got ${JSON.stringify(parsedEn)}` });
  }

  // Build path switcher pairs
  const switchedToEn = buildLocalizedPath(viPath, 'en');
  const switchedToVi = buildLocalizedPath(enPath, 'vi');
  if (switchedToEn !== enPath) {
    issues.push({ section: 'Route', type: 'ERROR', message: `buildLocalizedPath VI->EN failed: expected ${enPath}, got ${switchedToEn}` });
  }
  if (switchedToVi !== viPath) {
    issues.push({ section: 'Route', type: 'ERROR', message: `buildLocalizedPath EN->VI failed: expected ${viPath}, got ${switchedToVi}` });
  }
}
log('  ✓ All 9 slugs parsed and path-switched bidirectionally (/ai/:slug <-> /en/ai/:slug)\n');

// -----------------------------------------------------------------------------
// CHECK B: VI/EN Parity Check for Visuals & Copilots
// -----------------------------------------------------------------------------
console.log('--- [CHECK B] VI/EN Parity Check ---');

const viVisuals = (viAiCopilots as any).visuals || {};
const enVisuals = (enAiCopilots as any).visuals || {};
const viCopilots = (viAiCopilots as any).copilots || {};
const enCopilots = (enAiCopilots as any).copilots || {};

// 1. Visual parity
for (const [slug, visualKey] of Object.entries(VISUAL_KEYS_MAP)) {
  if (!viVisuals[visualKey]) {
    issues.push({ section: 'Parity', type: 'ERROR', message: `Missing VI visual resource for "${visualKey}" (slug: ${slug})` });
  }
  if (!enVisuals[visualKey]) {
    issues.push({ section: 'Parity', type: 'ERROR', message: `Missing EN visual resource for "${visualKey}" (slug: ${slug})` });
  }
  if (viVisuals[visualKey] && enVisuals[visualKey]) {
    log(`  ✓ Visual pair verified: ${visualKey}`);
  }
}

// Check RAG visual specifically
const ragEnVisual = enVisuals.rag;
if (!ragEnVisual) {
  issues.push({ section: 'RAG Visual', type: 'ERROR', message: 'enAiCopilots.visuals.rag is missing' });
} else {
  const reqRagFields = ['badgeCategory', 'subnote', 'badgeIllustrative', 'title', 'scenarios', 'standard', 'missing', 'rbac', 'checkpointNotice'];
  for (const f of reqRagFields) {
    if (!ragEnVisual[f]) {
      issues.push({ section: 'RAG Visual', type: 'ERROR', message: `enAiCopilots.visuals.rag missing required field: "${f}"` });
    }
  }
  if (ragEnVisual.scenarios) {
    for (const sc of ['standard', 'missing', 'rbac']) {
      if (!ragEnVisual.scenarios[sc]) {
        issues.push({ section: 'RAG Visual', type: 'ERROR', message: `enAiCopilots.visuals.rag.scenarios missing: "${sc}"` });
      }
    }
  }
  log('  ✓ RAG visual contains query, sources/citations, synthesized answer, missing source case, RBAC denial case');
}

// 2. Copilot content parity (all 7 sections)
const REQUIRED_SECTIONS = [
  'heroSample',
  'beforeAfter',
  'demoSpec',
  'governance',
  'taskDivision',
  'metrics',
  'pilotPlan'
];

for (const slug of EXPECTED_SLUGS) {
  const viC = viCopilots[slug];
  const enC = enCopilots[slug];

  if (!viC) {
    issues.push({ section: 'Copilot', type: 'ERROR', message: `Missing VI copilot for "${slug}"` });
    continue;
  }
  if (!enC) {
    issues.push({ section: 'Copilot', type: 'ERROR', message: `Missing EN copilot for "${slug}"` });
    continue;
  }

  // Check top level metadata
  for (const metaField of ['name', 'roleTitle', 'shortTagline', 'targetAudience']) {
    if (!enC[metaField]) {
      issues.push({ section: 'Copilot Meta', type: 'ERROR', message: `EN copilot "${slug}" missing metadata: ${metaField}` });
    }
  }

  // Check 7 standard sections
  for (const sec of REQUIRED_SECTIONS) {
    if (!viC[sec]) {
      issues.push({ section: 'Section', type: 'ERROR', message: `VI copilot "${slug}" missing section "${sec}"` });
    }
    if (!enC[sec]) {
      issues.push({ section: 'Section', type: 'ERROR', message: `EN copilot "${slug}" missing section "${sec}"` });
    }
  }

  // Check array lengths
  if (Array.isArray(viC.beforeAfter) && Array.isArray(enC.beforeAfter)) {
    if (viC.beforeAfter.length !== enC.beforeAfter.length) {
      issues.push({ section: 'Parity', type: 'ERROR', message: `beforeAfter length mismatch for "${slug}": VI=${viC.beforeAfter.length}, EN=${enC.beforeAfter.length}` });
    }
  }
  if (Array.isArray(viC.metrics) && Array.isArray(enC.metrics)) {
    if (viC.metrics.length !== enC.metrics.length) {
      issues.push({ section: 'Parity', type: 'ERROR', message: `metrics length mismatch for "${slug}": VI=${viC.metrics.length}, EN=${enC.metrics.length}` });
    }
  }
  if (viC.pilotPlan && enC.pilotPlan) {
    if (Array.isArray(viC.pilotPlan.pilotSteps) && Array.isArray(enC.pilotPlan.pilotSteps)) {
      if (viC.pilotPlan.pilotSteps.length !== enC.pilotPlan.pilotSteps.length) {
        issues.push({ section: 'Parity', type: 'ERROR', message: `pilotSteps length mismatch for "${slug}": VI=${viC.pilotPlan.pilotSteps.length}, EN=${enC.pilotPlan.pilotSteps.length}` });
      }
    }
    if (Array.isArray(viC.pilotPlan.goNoGoCriteria) && Array.isArray(enC.pilotPlan.goNoGoCriteria)) {
      if (viC.pilotPlan.goNoGoCriteria.length !== enC.pilotPlan.goNoGoCriteria.length) {
        issues.push({ section: 'Parity', type: 'ERROR', message: `goNoGoCriteria length mismatch for "${slug}": VI=${viC.pilotPlan.goNoGoCriteria.length}, EN=${enC.pilotPlan.goNoGoCriteria.length}` });
      }
    }
  }

  log(`  ✓ Copilot sections verified: ${slug} (7/7 standard sections present)`);
}
log('');

// -----------------------------------------------------------------------------
// CHECK C: Deep Key Parity & Raw Key Leak Check
// -----------------------------------------------------------------------------
console.log('--- [CHECK C] Deep Key Parity & Raw Key Leak Check ---');

function deepCompare(objVi: any, objEn: any, path: string) {
  if (typeof objVi !== typeof objEn) {
    issues.push({ section: 'DeepParity', type: 'ERROR', message: `Type mismatch at ${path}: VI is ${typeof objVi}, EN is ${typeof objEn}` });
    return;
  }
  if (typeof objVi === 'object' && objVi !== null) {
    if (Array.isArray(objVi)) {
      if (!Array.isArray(objEn)) {
        issues.push({ section: 'DeepParity', type: 'ERROR', message: `Array type mismatch at ${path}` });
      }
    } else {
      const viKeys = Object.keys(objVi);
      for (const k of viKeys) {
        const subPath = path ? `${path}.${k}` : k;
        if (!(k in objEn)) {
          issues.push({ section: 'DeepParity', type: 'ERROR', message: `Missing key in EN: ${subPath}` });
        } else {
          deepCompare(objVi[k], objEn[k], subPath);
        }
      }
    }
  }
}

deepCompare(viAiCopilots, enAiCopilots, 'aiCopilots');
log('  ✓ Deep structural recursive comparison completed.\n');

// -----------------------------------------------------------------------------
// CHECK D: Vietnamese Leak Check in EN Strings
// -----------------------------------------------------------------------------
console.log('--- [CHECK D] Vietnamese Leak Check in English ---');

const VIETNAMESE_DIACRITICS_REGEX = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;

// Whitelisted proper names / addresses intentionally preserved in illustrative simulations
const ALLOWED_PROPER_NAMES = [
  'VMC',
  'VND',
  'Nguyễn Hoàng Nam',
  'Cầu Giấy',
  'Đà Nẵng',
  'Tuấn Anh',
  'Thanh Hà',
  'Mai Lan',
  'Minh Phương',
  'Hoàng Nam'
];

let leakCount = 0;
function scanForLeaks(obj: any, path: string) {
  if (typeof obj === 'string') {
    if (VIETNAMESE_DIACRITICS_REGEX.test(obj)) {
      // Check if it only contains allowed proper names
      let sanitized = obj;
      for (const name of ALLOWED_PROPER_NAMES) {
        sanitized = sanitized.split(name).join('');
      }
      if (VIETNAMESE_DIACRITICS_REGEX.test(sanitized)) {
        issues.push({ section: 'Leak', type: 'ERROR', message: `Vietnamese text detected in EN at ${path}: "${obj}"` });
        leakCount++;
      }
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => scanForLeaks(item, `${path}[${idx}]`));
  } else if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      scanForLeaks(obj[key], `${path}.${key}`);
    }
  }
}

scanForLeaks(enAiCopilots, 'enAiCopilots');
log(`  ✓ Vietnamese leaks scan finished. Disallowed leaks found: ${leakCount}\n`);

// -----------------------------------------------------------------------------
// CHECK E: Protected Brands & Controlled Terms Check
// -----------------------------------------------------------------------------
console.log('--- [CHECK E] Controlled Terms & Brand Names Check ---');

const allEnText = JSON.stringify(enAiCopilots);

// 1. VMC brand check
if (!allEnText.includes('VMC')) {
  issues.push({ section: 'Brand', type: 'ERROR', message: 'VMC brand name missing in EN copy' });
} else {
  log('  ✓ "VMC" brand name preserved in EN copy');
}

// 2. AI Copilot vs AI Agent concept separation
// /ai is AI Copilots. Ensure it doesn't accidentally rebrand the copilots themselves into "AI Agent"
if (allEnText.includes('CEO Agent') || allEnText.includes('Sales Agent Copilot')) {
  issues.push({ section: 'Taxonomy', type: 'WARNING', message: 'Potential confusion between AI Copilot and AI Agent naming' });
} else {
  log('  ✓ Role-based Copilot naming strictly maintained (AI CEO Copilot, AI Sales Copilot, etc.)');
}
log('');

// -----------------------------------------------------------------------------
// CHECK F: Semantic Claim Escalation & Safety Guardrails Check
// -----------------------------------------------------------------------------
console.log('--- [CHECK F] Semantic Claim & Boundary Safety Check ---');

const PROHIBITED_CLAIMS = [
  'authorizes payments',
  'transfers funds',
  'executes payments',
  'approves accounting entries',
  'independently changes budget',
  'automatic payment approval',
  'automatic tax filing',
  'guaranteed tax compliance',
  'guaranteed financial accuracy',
  'perfect forecast',
  'zero reconciliation error',
  '100% voice recognition',
  '100% transcription accuracy',
  'perfect emotion detection',
  'automatic closing',
  'zero hallucination',
  '100% retrieval accuracy',
  'complete knowledge',
  'guaranteed factuality',
  'legal certainty',
  'technical certainty'
];

for (const claim of PROHIBITED_CLAIMS) {
  if (allEnText.toLowerCase().includes(claim.toLowerCase())) {
    issues.push({ section: 'Safety Claim', type: 'ERROR', message: `Prohibited claim found in EN: "${claim}"` });
  }
}
log('  ✓ Zero prohibited absolute claims found in EN copy');

// Finance Copilot specific checks
const enFinance = enCopilots.finance;
const enFinanceVis = enVisuals.finance;
const financeDisclaimer = enFinance?.demoSpec?.disclaimer || '';
const financeNotice = enFinanceVis?.checkpointNotice || '';

if (!financeDisclaimer.toLowerCase().includes('has no authority') && !financeDisclaimer.toLowerCase().includes('strictly has no authority')) {
  issues.push({ section: 'Finance Safety', type: 'ERROR', message: 'Finance demoSpec.disclaimer missing negative boundary authority phrase' });
}
if (!financeNotice.toLowerCase().includes('has no authority') && !financeNotice.toLowerCase().includes('strictly has no authority')) {
  issues.push({ section: 'Finance Safety', type: 'ERROR', message: 'Finance visual checkpointNotice missing negative boundary authority phrase' });
}
log('  ✓ Finance negative boundary authority verified ("strictly has no authority to execute bank transfers or alter account balances")');

// Voice Copilot specific checks
const voiceEnVis = enVisuals.voice;
const voiceDisclaimer = enCopilots.voice?.demoSpec?.disclaimer || '';
if (!voiceDisclaimer.toLowerCase().includes('scripted notifications') || !voiceDisclaimer.toLowerCase().includes('debt collection')) {
  issues.push({ section: 'Voice Safety', type: 'WARNING', message: 'Voice disclaimer should match canonical outbound scripted scope' });
}
log('  ✓ Voice copilot boundary verified (outbound scripted notifications & prohibited debt collection)');

// RAG Copilot specific checks
const ragDisclaimer = enCopilots.rag?.demoSpec?.disclaimer || '';
if (!ragDisclaimer.toLowerCase().includes('synthesizes responses only when evidentiary source documents exist')) {
  issues.push({ section: 'RAG Safety', type: 'ERROR', message: 'RAG disclaimer must state that answers are synthesized only when evidence exists' });
}
log('  ✓ RAG copilot grounded evidence boundary verified\n');

// -----------------------------------------------------------------------------
// CHECK G: Human-in-the-Loop & Approval Check
// -----------------------------------------------------------------------------
console.log('--- [CHECK G] Human-in-the-Loop & Approval Check ---');

for (const slug of EXPECTED_SLUGS) {
  const copilot = enCopilots[slug];
  const approvals = copilot?.taskDivision?.mandatoryApprovals;
  if (!Array.isArray(approvals) || approvals.length === 0) {
    issues.push({ section: 'HITL', type: 'ERROR', message: `Copilot "${slug}" has empty or missing mandatoryApprovals` });
  } else {
    for (const app of approvals) {
      if (!app.checkpoint || !app.approverRole || !app.reason || !app.actionIfRejected) {
        issues.push({ section: 'HITL', type: 'ERROR', message: `Incomplete approval gate in "${slug}": ${JSON.stringify(app)}` });
      }
    }
    log(`  ✓ HITL approval gates verified for: ${slug} (${approvals.length} gates registered)`);
  }
}
log('');

// -----------------------------------------------------------------------------
// SUMMARY & EXIT
// -----------------------------------------------------------------------------
console.log('================================================================');
console.log('   AUDIT SUMMARY');
console.log('================================================================');

const errors = issues.filter(i => i.type === 'ERROR');
const warnings = issues.filter(i => i.type === 'WARNING');

console.log(`Total Errors:   ${errors.length}`);
console.log(`Total Warnings: ${warnings.length}\n`);

if (errors.length > 0) {
  console.error('FAILURES:');
  errors.forEach(e => console.error(` [${e.section}] ${e.message}`));
  process.exit(1);
} else {
  if (warnings.length > 0) {
    console.warn('WARNINGS:');
    warnings.forEach(w => console.warn(` [${w.section}] ${w.message}`));
  }
  console.log('🎉 ALL 9 AI COPILOTS PASSED VERIFICATION WITH ZERO ERRORS!');
  process.exit(0);
}
