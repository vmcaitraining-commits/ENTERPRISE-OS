import viAiCopilots from '../src/i18n/locales/vi/aiCopilots';
import zhCnAiCopilots from '../src/i18n/locales/zh-CN/aiCopilots';

console.log('Auditing zh-CN aiCopilots structure and parity with vi...');

let errors: string[] = [];

function checkKeyParity(path: string, viObj: any, zhObj: any) {
  if (typeof viObj !== typeof zhObj) {
    errors.push(`Type mismatch at ${path}: expected ${typeof viObj}, got ${typeof zhObj}`);
    return;
  }
  if (Array.isArray(viObj)) {
    if (!Array.isArray(zhObj)) {
      errors.push(`Array mismatch at ${path}: zhObj is not an array`);
      return;
    }
    if (viObj.length !== zhObj.length) {
      errors.push(`Array length mismatch at ${path}: vi has ${viObj.length}, zh has ${zhObj.length}`);
    }
    for (let i = 0; i < Math.min(viObj.length, zhObj.length); i++) {
      checkKeyParity(`${path}[${i}]`, viObj[i], zhObj[i]);
    }
    return;
  }
  if (typeof viObj === 'object' && viObj !== null && zhObj !== null) {
    const viKeys = Object.keys(viObj);
    const zhKeys = Object.keys(zhObj);

    for (const key of viKeys) {
      if (!(key in zhObj)) {
        errors.push(`Missing key at ${path}.${key}`);
      } else {
        checkKeyParity(`${path}.${key}`, viObj[key], zhObj[key]);
      }
    }
    for (const key of zhKeys) {
      if (!(key in viObj)) {
        errors.push(`Extraneous key at ${path}.${key}`);
      }
    }
  }
}

checkKeyParity('aiCopilots', viAiCopilots, zhCnAiCopilots);

if (errors.length > 0) {
  console.error(`Found ${errors.length} parity errors:`);
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('✓ 100% key parity verified between vi and zh-CN for aiCopilots!');
}
