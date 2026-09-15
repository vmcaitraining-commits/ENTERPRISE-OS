import viAiCopilots from '../src/i18n/locales/vi/aiCopilots';
import enAiCopilots from '../src/i18n/locales/en/aiCopilots';

let errors: string[] = [];

console.log('=== VMC GROUP PHASE 4E-B2: FINANCE COPILOT LOCALIZATION AUDIT ===\n');

// 1. Check visuals.finance existence and matching
const viFinanceVisual = (viAiCopilots as any).visuals?.finance;
const enFinanceVisual = (enAiCopilots as any).visuals?.finance;

if (!viFinanceVisual) errors.push('Missing viAiCopilots.visuals.finance');
if (!enFinanceVisual) errors.push('Missing enAiCopilots.visuals.finance');

function deepCompareKeys(obj1: any, obj2: any, path = ''): void {
  for (const key of Object.keys(obj1)) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in obj2)) {
      errors.push(`Missing key in EN: ${currentPath}`);
    } else if (typeof obj1[key] === 'object' && obj1[key] !== null && !Array.isArray(obj1[key])) {
      deepCompareKeys(obj1[key], obj2[key], currentPath);
    } else if (Array.isArray(obj1[key])) {
      if (!Array.isArray(obj2[key])) {
        errors.push(`Key in EN should be array: ${currentPath}`);
      } else if (obj1[key].length !== obj2[key].length) {
        errors.push(`Array length mismatch at ${currentPath}: VI has ${obj1[key].length}, EN has ${obj2[key].length}`);
      }
    }
  }
}

if (viFinanceVisual && enFinanceVisual) {
  deepCompareKeys(viFinanceVisual, enFinanceVisual, 'visuals.finance');
}

// 2. Check copilots.finance existence and matching
const viFinanceCopilot = (viAiCopilots as any).copilots?.finance;
const enFinanceCopilot = (enAiCopilots as any).copilots?.finance;

if (!viFinanceCopilot) errors.push('Missing viAiCopilots.copilots.finance');
if (!enFinanceCopilot) errors.push('Missing enAiCopilots.copilots.finance');

if (viFinanceCopilot && enFinanceCopilot) {
  deepCompareKeys(viFinanceCopilot, enFinanceCopilot, 'copilots.finance');
}

// 3. Check for Vietnamese diacritics in EN finance strings (leak check)
const vietnameseDiacriticsRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;

// Whitelisted terms in EN that might contain VND with diacritics or proper names if any
function checkEnLeaks(obj: any, path = ''): number {
  let leakCount = 0;
  if (typeof obj === 'string') {
    // Check if string contains Vietnamese diacritics
    if (vietnameseDiacriticsRegex.test(obj)) {
      console.log(`[VIETNAMESE LEAK] at ${path}: "${obj}"`);
      leakCount++;
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      leakCount += checkEnLeaks(item, `${path}[${index}]`);
    });
  } else if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      leakCount += checkEnLeaks(obj[key], path ? `${path}.${key}` : key);
    }
  }
  return leakCount;
}

const visualLeaks = checkEnLeaks(enFinanceVisual, 'en.visuals.finance');
const copilotLeaks = checkEnLeaks(enFinanceCopilot, 'en.copilots.finance');

// 4. Absolute Safety Rules Check: Prohibited claims
const prohibitedClaims = [
  'authorizes payments',
  'transfers funds',
  'approves accounting entries',
  'independently changes budget',
  'automatic payment approval',
  'automatic tax filing',
  'guaranteed tax compliance',
  'guaranteed financial accuracy',
  'perfect forecast',
  'zero reconciliation error'
];

const allEnFinanceText = JSON.stringify(enFinanceCopilot) + ' ' + JSON.stringify(enFinanceVisual);
for (const claim of prohibitedClaims) {
  if (allEnFinanceText.toLowerCase().includes(claim.toLowerCase())) {
    errors.push(`PROHIBITED CLAIM FOUND: "${claim}" in EN finance copy`);
  }
}

// 5. Human Authorization Check
const humanAuthKeywords = [
  'accountant',
  'chief accountant',
  'cfo',
  'authorized signatory',
  'approval',
  'verification'
];
console.log('--- Human Authorization Verification ---');
const disclaimer = enFinanceCopilot?.demoSpec?.disclaimer;
console.log('Demo Disclaimer:', disclaimer);
if (!disclaimer || !disclaimer.includes('ABSOLUTELY HAS NO AUTHORITY')) {
  errors.push('Disclaimer must retain strict prohibition "ABSOLUTELY HAS NO AUTHORITY"');
}

const checkpointNotice = enFinanceVisual?.checkpointNotice;
console.log('Visual Checkpoint Notice:', checkpointNotice);
if (!checkpointNotice || !checkpointNotice.includes('ABSOLUTELY HAS NO AUTHORITY')) {
  errors.push('Visual checkpoint notice must retain strict prohibition "ABSOLUTELY HAS NO AUTHORITY"');
}

// 6. Regression Check on Previous Copilots
const requiredCopilots = ['ceo', 'sales', 'marketing', 'hr'];
for (const c of requiredCopilots) {
  if (!(viAiCopilots as any).copilots?.[c]) {
    errors.push(`Regression: VI copilot ${c} is missing!`);
  }
  if (!(enAiCopilots as any).copilots?.[c]) {
    errors.push(`Regression: EN copilot ${c} is missing!`);
  }
}

// Customer service check (may be customerService in visuals, customer-service in copilots)
if (!(viAiCopilots as any).copilots?.['customer-service']) {
  errors.push(`Regression: VI copilot customer-service is missing!`);
}
if (!(enAiCopilots as any).copilots?.['customer-service']) {
  errors.push(`Regression: EN copilot customer-service is missing!`);
}

console.log('\n--- SUMMARY ---');
console.log(`Errors: ${errors.length}`);
console.log(`Vietnamese Leaks in EN Finance: ${visualLeaks + copilotLeaks}`);

if (errors.length > 0) {
  console.error('FAILURES:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log('All checks passed successfully!');
}
