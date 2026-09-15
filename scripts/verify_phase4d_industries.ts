import viIndustries from '../src/i18n/locales/vi/industries';
import enIndustries from '../src/i18n/locales/en/industries';
import { namespaceLoaders, preloadCoreNamespaces } from '../src/i18n/loader';

let errors: string[] = [];
let warnings: string[] = [];

console.log('====================================================');
console.log('PHASE 4D AUDIT: INDUSTRIES ENGLISH LOCALIZATION');
console.log('====================================================\n');

// 1. Structural Parity
function compareStructures(viObj: any, enObj: any, prefix = ''): number {
  let count = 0;
  const viKeys = Object.keys(viObj);
  const enKeys = Object.keys(enObj);

  // If this object is sampleInput, keys are intentionally localized field names
  if (prefix.endsWith('sampleInput')) {
    if (viKeys.length !== enKeys.length) {
      errors.push(`sampleInput key count mismatch at ${prefix}: VI has ${viKeys.length}, EN has ${enKeys.length}`);
    }
    for (const key of enKeys) {
      const val = enObj[key];
      if (typeof val !== 'string' || val.trim().length === 0) {
        errors.push(`Empty or invalid string in EN sampleInput at ${prefix}.${key}`);
      }
      count++;
    }
    return count;
  }

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
      }
    }
  }

  // Reverse check for extraneous EN keys
  for (const key of enKeys) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    if (!(key in viObj)) {
      errors.push(`Extraneous EN key: ${currentPath}`);
    }
  }

  return count;
}

const totalEntries = compareStructures(viIndustries, enIndustries);
console.log(`[Check 1] Structural Parity: Total leaf entries compared = ${totalEntries}`);

// 2. Validate all 8 sectors exist with full depth
const requiredSectors = [
  'trade',
  'service',
  'education',
  'real-estate',
  'manufacturing',
  'distribution',
  'construction',
  'technology'
];

console.log('[Check 2] Validating 8 industry sectors completeness...');
for (const sector of requiredSectors) {
  const viSec = viIndustries.sectors[sector];
  const enSec = enIndustries.sectors[sector];

  if (!viSec) {
    errors.push(`Missing VI sector: ${sector}`);
    continue;
  }
  if (!enSec) {
    errors.push(`Missing EN sector: ${sector}`);
    continue;
  }

  // Check sub-structures match canonical source
  if (!enSec.dailyOperation || enSec.dailyOperation.length !== viSec.dailyOperation.length) {
    errors.push(`Sector ${sector} dailyOperation length mismatch: VI has ${viSec.dailyOperation.length}, EN has ${enSec.dailyOperation?.length}`);
  }
  if (!enSec.journeyVisualFlow || enSec.journeyVisualFlow.length !== viSec.journeyVisualFlow.length) {
    errors.push(`Sector ${sector} journeyVisualFlow length mismatch: VI has ${viSec.journeyVisualFlow.length}, EN has ${enSec.journeyVisualFlow?.length}`);
  }
  if (!enSec.configuredModules || enSec.configuredModules.length !== viSec.configuredModules.length) {
    errors.push(`Sector ${sector} configuredModules length mismatch: VI has ${viSec.configuredModules.length}, EN has ${enSec.configuredModules?.length}`);
  }
  if (!enSec.trackedKpis || enSec.trackedKpis.length !== viSec.trackedKpis.length) {
    errors.push(`Sector ${sector} trackedKpis length mismatch: VI has ${viSec.trackedKpis.length}, EN has ${enSec.trackedKpis?.length}`);
  }
  if (!enSec.threeStageRoadmap || enSec.threeStageRoadmap.length !== viSec.threeStageRoadmap.length) {
    errors.push(`Sector ${sector} threeStageRoadmap length mismatch: VI has ${viSec.threeStageRoadmap.length}, EN has ${enSec.threeStageRoadmap?.length}`);
  }
  if (!enSec.aiSpecializedDemo || !enSec.aiSpecializedDemo.aiOutput?.summary) {
    errors.push(`Sector ${sector} has incomplete aiSpecializedDemo in EN`);
  }
}

// 3. Vietnamese Character Leak Detection in EN
const vietnameseCharRegex = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/;

function checkVietnameseLeaks(obj: any, prefix = '') {
  for (const key of Object.keys(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    const val = obj[key];
    if (typeof val === 'string') {
      if (vietnameseCharRegex.test(val)) {
        errors.push(`Vietnamese character leak in EN at ${currentPath}: "${val}"`);
      }
    } else if (Array.isArray(val)) {
      val.forEach((item, idx) => {
        if (typeof item === 'string') {
          if (vietnameseCharRegex.test(item)) {
            errors.push(`Vietnamese character leak in EN at ${currentPath}[${idx}]: "${item}"`);
          }
        } else if (typeof item === 'object' && item !== null) {
          checkVietnameseLeaks(item, `${currentPath}[${idx}]`);
        }
      });
    } else if (typeof val === 'object' && val !== null) {
      checkVietnameseLeaks(val, currentPath);
    }
  }
}

console.log('[Check 3] Scanning for Vietnamese character leaks in EN...');
checkVietnameseLeaks(enIndustries);

// 4. Safety & Banned Claims Check
console.log('[Check 4] Checking safety constraints and banned claims in EN...');
const prohibitedPhrases = [
  '100% accurate',
  '100% accuracy',
  'fully autonomous',
  'zero human intervention',
  'complete replacement',
  'guaranteed 100%'
];

function checkSafety(obj: any, prefix = '') {
  for (const key of Object.keys(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    const val = obj[key];
    if (typeof val === 'string') {
      const lower = val.toLowerCase();
      for (const phrase of prohibitedPhrases) {
        if (lower.includes(phrase)) {
          errors.push(`Prohibited safety phrase "${phrase}" found at ${currentPath}: "${val}"`);
        }
      }
    } else if (Array.isArray(val)) {
      val.forEach((item, idx) => {
        if (typeof item === 'string') {
          const lower = item.toLowerCase();
          for (const phrase of prohibitedPhrases) {
            if (lower.includes(phrase)) {
              errors.push(`Prohibited safety phrase "${phrase}" found at ${currentPath}[${idx}]: "${item}"`);
            }
          }
        } else if (typeof item === 'object' && item !== null) {
          checkSafety(item, `${currentPath}[${idx}]`);
        }
      });
    } else if (typeof val === 'object' && val !== null) {
      checkSafety(val, currentPath);
    }
  }
}
checkSafety(enIndustries);

// 5. Loader Registration Check
console.log('[Check 5] Verifying loader registration and asynchronous loading...');
if (!('industries' in namespaceLoaders.vi)) {
  errors.push('Namespace "industries" not found in namespaceLoaders.vi');
}
if (!('industries' in namespaceLoaders.en)) {
  errors.push('Namespace "industries" not found in namespaceLoaders.en');
}

async function verifyLoaderRuntime() {
  const { loadNamespace } = await import('../src/i18n/loader');
  const enDict = await loadNamespace('en', 'industries');
  if (!enDict || !enDict.overview || !enDict.sectors) {
    errors.push('Failed to load "industries" namespace via loadNamespace("en", "industries")');
  }

  // Summary Report
  console.log('\n====================================================');
  console.log('AUDIT SUMMARY');
  console.log('====================================================');
  console.log(`Total Errors: ${errors.length}`);
  console.log(`Total Warnings: ${warnings.length}`);

  if (errors.length > 0) {
    console.error('\nERRORS FOUND:');
    errors.forEach((err, idx) => console.error(`${idx + 1}. ${err}`));
    process.exit(1);
  } else {
    console.log('\n✅ ALL AUDIT CHECKS PASSED: PHASE 4D INDUSTRIES LOCALIZATION IS VERIFIED.');
    process.exit(0);
  }
}

verifyLoaderRuntime();
