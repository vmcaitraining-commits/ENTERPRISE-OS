import viAiEnterprise from '../src/i18n/locales/vi/aiEnterprise';
import enAiEnterprise from '../src/i18n/locales/en/aiEnterprise';
import * as fs from 'fs';
import * as path from 'path';

let errors: string[] = [];
let warnings: string[] = [];

console.log('====================================================');
console.log('PHASE 4B2 AUDIT: AI ENTERPRISE ENGLISH LOCALIZATION');
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
      // Check array items
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
          } else if (typeof itemVi !== typeof itemEn) {
            errors.push(`Type mismatch at ${currentPath}[${i}]: VI is ${typeof itemVi}, EN is ${typeof itemEn}`);
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
      } else if (typeof viVal !== typeof enVal) {
        errors.push(`Type mismatch at ${currentPath}: VI is ${typeof viVal}, EN is ${typeof enVal}`);
      }
    }
  }

  // Check for extraneous keys in EN
  for (const key of enKeys) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    if (!(key in viObj)) {
      errors.push(`Extraneous EN key: ${currentPath}`);
    }
  }

  return count;
}

const keyCount = compareStructures(viAiEnterprise, enAiEnterprise);
console.log(`[1] Key Parity: Evaluated ${keyCount} leaf keys/items. Parity check complete.`);

// 2. High-Risk Semantic Guardrails
const BANNED_TERMS = [
  // Overstated isolation
  /\bphysically isolated\b/i,
  /\bzero leakage\b/i,
  /\bleak-free\b/i,
  // Overstated autonomy
  /\bnever acts autonomously\b/i,
  /\b100% autonomous\b/i,
  /\bfully unguided\b/i,
  // Unverified certifications
  /\bISO\s?27001\b/i,
  /\bSOC\s?2\b/i,
  /\bHIPAA\b/i,
  /\bFedRAMP\b/i,
  /\bPCI-DSS\b/i,
  // Absolute security claims
  /\b100% secure\b/i,
  /\bbulletproof\b/i,
  /\bunhackable\b/i,
  /\bunbreakable\b/i
];

function scanRiskTerms(obj: any, currentPath = '') {
  for (const [k, v] of Object.entries(obj)) {
    const p = currentPath ? `${currentPath}.${k}` : k;
    if (typeof v === 'string') {
      for (const pattern of BANNED_TERMS) {
        if (pattern.test(v)) {
          errors.push(`High-risk banned term matched [${pattern}]: at ${p} -> "${v}"`);
        }
      }
    } else if (Array.isArray(v)) {
      v.forEach((item, idx) => {
        if (typeof item === 'string') {
          for (const pattern of BANNED_TERMS) {
            if (pattern.test(item)) {
              errors.push(`High-risk banned term matched [${pattern}]: at ${p}[${idx}] -> "${item}"`);
            }
          }
        } else if (typeof item === 'object' && item !== null) {
          scanRiskTerms(item, `${p}[${idx}]`);
        }
      });
    } else if (typeof v === 'object' && v !== null) {
      scanRiskTerms(v, p);
    }
  }
}

scanRiskTerms(enAiEnterprise);
console.log(`[2] Semantic Risk Audit: Completed scan with ${BANNED_TERMS.length} banned risk patterns.`);

// 3. Component Wiring Audit
const ENTERPRISE_COMPONENTS = [
  'src/components/public/enterprise/HeroSingleDataMultiRole.tsx',
  'src/components/public/enterprise/SiloVsUnifiedComparison.tsx',
  'src/components/public/enterprise/EndToEndTransactionFlow.tsx',
  'src/components/public/enterprise/Architecture11ModulesMap.tsx',
  'src/components/public/enterprise/SupervisedAiApproval.tsx',
  'src/components/public/enterprise/SixDeploymentPrinciples.tsx',
  'src/components/public/enterprise/SecurityAndGovernanceMatrix.tsx',
  'src/components/public/enterprise/EnterpriseRoadmapAndCta.tsx'
];

for (const compPath of ENTERPRISE_COMPONENTS) {
  const fullPath = path.resolve(process.cwd(), compPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`Component missing: ${compPath}`);
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf8');

  // Must import useI18n
  if (!content.includes('useI18n')) {
    errors.push(`Component ${compPath} does not import or use useI18n!`);
  }

  // Must call t or tRaw with aiEnterprise
  if (!content.includes("'aiEnterprise.") && !content.includes('"aiEnterprise.')) {
    errors.push(`Component ${compPath} does not query aiEnterprise namespace!`);
  }
}
console.log(`[3] Component Wiring Audit: Verified ${ENTERPRISE_COMPONENTS.length} components wire to aiEnterprise.`);

// 4. Loader and Types Registration Audit
const typesPath = path.resolve(process.cwd(), 'src/i18n/types.ts');
const typesContent = fs.readFileSync(typesPath, 'utf8');
if (!typesContent.includes("'aiEnterprise'")) {
  errors.push("TranslationNamespace in src/i18n/types.ts missing 'aiEnterprise'");
}

const loaderPath = path.resolve(process.cwd(), 'src/i18n/loader.ts');
const loaderContent = fs.readFileSync(loaderPath, 'utf8');
if (!loaderContent.includes('aiEnterprise: () => import(')) {
  errors.push("loader.ts missing namespaceLoader for 'aiEnterprise'");
}
if (!loaderContent.includes("'aiEnterprise'")) {
  errors.push("loader.ts missing preloadCoreNamespaces for 'aiEnterprise'");
}
console.log(`[4] Registry & Loader Audit: Verified i18n subsystem registration.`);

// Report
console.log('\n====================================================');
if (errors.length > 0) {
  console.error(`FAILED: ${errors.length} error(s) detected:`);
  errors.forEach((err, i) => console.error(`  ${i + 1}. ${err}`));
  process.exit(1);
} else {
  console.log(`SUCCESS: All checks passed! 0 errors.`);
  console.log(`Total leaf translation entries: ${keyCount}`);
  if (warnings.length > 0) {
    console.log(`Warnings (${warnings.length}):`);
    warnings.forEach((w) => console.log(`  - ${w}`));
  }
  console.log('====================================================');
}
