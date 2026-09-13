/**
 * VMC Group Multilingual System
 * Phase 3 — Translation QA & Semantic Safety Validators
 *
 * Enforces rigorous enterprise checks:
 * - Protected brand preservation
 * - Number & quantitative safety
 * - Placeholder syntax integrity
 * - Claim strength & disclaimer preservation
 * - Negation loss detection (NEGATION_CRITICAL)
 * - Source version & hash freshness tracking
 * - Untranslated leak & raw key leak detection
 */

import {
  LocaleCode,
  TranslationRecord,
  ValidationResult,
  ValidationIssue,
  RiskLevel
} from './types';
import {
  CONFIRMED_PROTECTED_BRANDS,
  PROHIBITED_PSEUDO_BRANDS,
  findGlossaryViolation
} from './glossary';
import {
  VIETNAMESE_QUALIFIERS,
  FORBIDDEN_ESCALATED_CLAIMS,
  VIETNAMESE_NEGATION_MARKERS,
  TARGET_NEGATION_INDICATORS,
  MANDATORY_DISCLAIMERS
} from './rules';

// =========================================================================
// HASHING UTILITY
// =========================================================================

/**
 * Deterministic lightweight string hash for source version tracking
 */
export const computeSourceHash = (text: string): string => {
  let hash = 5381;
  const clean = text.trim();
  for (let i = 0; i < clean.length; i++) {
    hash = (hash * 33) ^ clean.charCodeAt(i);
  }
  return `h_${(hash >>> 0).toString(16)}`;
};

// =========================================================================
// PLACEHOLDER EXTRACTOR & VALIDATOR
// =========================================================================

const PLACEHOLDER_REGEX = /\{\{?([a-zA-Z0-9_]+)\}?\}/g;

export const extractPlaceholders = (text: string): string[] => {
  const matches = text.match(PLACEHOLDER_REGEX);
  if (!matches) return [];
  // Normalize `{name}` and `{{name}}` to canonical name
  return matches.map((m) => m.replace(/[\{\}]/g, '').trim());
};

export const validatePlaceholders = (
  sourceVi: string,
  targetText: string
): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];
  const sourcePhs = extractPlaceholders(sourceVi);
  const targetPhs = extractPlaceholders(targetText);

  // Missing placeholders
  for (const ph of sourcePhs) {
    if (!targetPhs.includes(ph)) {
      issues.push({
        code: 'PLACEHOLDER_MISMATCH',
        severity: 'FATAL',
        message: `Missing placeholder "{${ph}}" in translation.`,
        expected: `{${ph}}`
      });
    }
  }

  // Phantom placeholders added in translation
  for (const ph of targetPhs) {
    if (!sourcePhs.includes(ph)) {
      issues.push({
        code: 'PLACEHOLDER_MISMATCH',
        severity: 'ERROR',
        message: `Translation contains unauthorized extra placeholder "{${ph}}".`,
        received: `{${ph}}`
      });
    }
  }

  return issues;
};

// =========================================================================
// NUMBER & QUANTITATIVE SAFETY VALIDATOR
// =========================================================================

const NUMBER_REGEX = /(?:\d+(?:[.,]\d+)?%?|\b\d+\/\d+\b)/g;

export const extractNumbers = (text: string): string[] => {
  const matches = text.match(NUMBER_REGEX);
  if (!matches) return [];
  return matches.map((n) => n.trim().toLowerCase());
};

export const validateNumbers = (
  sourceVi: string,
  targetText: string
): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];
  const sourceNumbers = extractNumbers(sourceVi);
  const targetNumbers = extractNumbers(targetText);

  // Check if every number from source exists in target
  for (const num of sourceNumbers) {
    if (!targetNumbers.includes(num)) {
      issues.push({
        code: 'NUMBER_MISMATCH',
        severity: 'FATAL',
        message: `Quantitative mismatch: Number or percentage "${num}" found in source is missing or altered in translation.`,
        expected: num
      });
    }
  }

  return issues;
};

// =========================================================================
// PROTECTED BRAND VALIDATOR
// =========================================================================

export const validateProtectedBrands = (
  sourceVi: string,
  targetText: string,
  locale: LocaleCode
): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];

  // 1. Check for unauthorized pseudo-brands
  for (const pseudo of PROHIBITED_PSEUDO_BRANDS) {
    if (targetText.includes(pseudo)) {
      issues.push({
        code: 'PROTECTED_BRAND_MODIFIED',
        severity: 'FATAL',
        message: `Prohibited pseudo-brand detected in translation: "${pseudo}". Must preserve exact canonical brand.`
      });
    }
  }

  // 2. Check if official brands present in source are preserved verbatim in target
  for (const brand of CONFIRMED_PROTECTED_BRANDS) {
    if (sourceVi.includes(brand)) {
      if (!targetText.includes(brand)) {
        issues.push({
          code: 'PROTECTED_BRAND_MODIFIED',
          severity: 'FATAL',
          message: `Protected brand "${brand}" from source was translated, omitted, or altered in "${locale}" translation.`,
          expected: brand
        });
      }
    }
  }

  // 3. Check glossary rules & forbidden translations
  const violation = findGlossaryViolation(targetText, locale);
  if (violation.violated && violation.reason) {
    issues.push({
      code: 'GLOSSARY_VIOLATION',
      severity: 'ERROR',
      message: violation.reason
    });
  }

  return issues;
};

// =========================================================================
// CLAIM STRENGTH PRESERVATION VALIDATOR
// =========================================================================

export const validateClaimStrength = (
  sourceVi: string,
  targetText: string,
  locale: LocaleCode
): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];
  const sourceLower = sourceVi.toLowerCase();
  const targetLower = targetText.toLowerCase();

  // Check if source contains any qualifying constraint
  const hasQualifier = VIETNAMESE_QUALIFIERS.some((q) => sourceLower.includes(q.toLowerCase()));

  if (hasQualifier) {
    const forbiddenList = FORBIDDEN_ESCALATED_CLAIMS[locale] || FORBIDDEN_ESCALATED_CLAIMS['en'];
    for (const forbidden of forbiddenList) {
      // Word boundary check for alphabet languages
      const regex = new RegExp(`\\b${forbidden.toLowerCase()}\\b`, 'i');
      if (regex.test(targetLower)) {
        issues.push({
          code: 'CLAIM_ESCALATION',
          severity: 'FATAL',
          message: `Claim strength escalation: Vietnamese source has qualifying constraint, but translation escalates claim with forbidden absolute term "${forbidden}".`,
          received: forbidden
        });
      }
    }
  }

  return issues;
};

// =========================================================================
// NEGATION SAFETY VALIDATOR (NEGATION_CRITICAL)
// =========================================================================

export const validateNegationSafety = (
  sourceVi: string,
  targetText: string,
  locale: LocaleCode,
  riskLevel?: RiskLevel
): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];
  const sourceLower = sourceVi.toLowerCase();
  const targetLower = targetText.toLowerCase();

  // Check if source has negative particle
  const sourceHasNegation = VIETNAMESE_NEGATION_MARKERS.some((neg) =>
    sourceLower.includes(neg.toLowerCase())
  );

  if (sourceHasNegation) {
    const indicators = TARGET_NEGATION_INDICATORS[locale] || TARGET_NEGATION_INDICATORS['en'];
    const targetHasNegation = indicators.some((ind) => targetLower.includes(ind.toLowerCase()));

    if (!targetHasNegation) {
      const isCritical = riskLevel === 'NEGATION_CRITICAL' || riskLevel === 'LEGAL_HIGH' || riskLevel === 'SECURITY_HIGH';
      issues.push({
        code: 'NEGATION_LOST',
        severity: isCritical ? 'FATAL' : 'ERROR',
        message: `Critical Negation Lost: Vietnamese source contains negative assertion ("không/chưa"), but translation in "${locale}" contains no recognized negation marker.`
      });
    }
  }

  return issues;
};

// =========================================================================
// DISCLAIMER PRESERVATION VALIDATOR
// =========================================================================

export const validateDisclaimerPreservation = (
  sourceVi: string,
  targetText: string,
  locale: LocaleCode
): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];
  const sourceLower = sourceVi.toLowerCase();
  const targetLower = targetText.toLowerCase();

  for (const disclaimer of MANDATORY_DISCLAIMERS) {
    if (sourceLower.includes(disclaimer.sourceVi.toLowerCase())) {
      const equivalents = disclaimer.expectedEquivalents[locale] || disclaimer.expectedEquivalents['en'];
      const hasEquivalent = equivalents.some((eq) => targetLower.includes(eq.toLowerCase()));

      if (!hasEquivalent) {
        issues.push({
          code: 'DISCLAIMER_MISSING',
          severity: 'FATAL',
          message: `Mandatory disclaimer omitted: Source contains "${disclaimer.sourceVi}", but no equivalent was found in "${locale}" translation.`,
          expected: equivalents.join(' OR ')
        });
      }
    }
  }

  return issues;
};

// =========================================================================
// UNTRANSLATED LEAK & RAW KEY LEAK VALIDATORS
// =========================================================================

const VIETNAMESE_DIACRITICS_REGEX = /[àáảãạăắằẵặâấầẫậđèéẻẽẹêếềễệìíỉĩịòóỏõọôốồỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/i;
const RAW_KEY_PATTERN = /^[a-zA-Z0-9_-]+\.[a-zA-Z0-9_.-]+$/;

export const validateUntranslatedLeaks = (
  targetText: string,
  locale: LocaleCode
): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];

  // 1. Raw Key Leak
  if (RAW_KEY_PATTERN.test(targetText.trim())) {
    issues.push({
      code: 'RAW_KEY_LEAK',
      severity: 'FATAL',
      message: `Raw translation key leak: Target string "${targetText}" looks like an unresolved key path.`
    });
  }

  // 2. Untranslated Vietnamese diacritics in non-Vietnamese locales
  if (locale !== 'vi') {
    // Exclude brand names that might be mentioned
    const words = targetText.split(/\s+/);
    let diacriticWordsCount = 0;

    for (const word of words) {
      if (VIETNAMESE_DIACRITICS_REGEX.test(word)) {
        diacriticWordsCount++;
      }
    }

    if (diacriticWordsCount > 0) {
      issues.push({
        code: 'UNTRANSLATED_VIETNAMESE_LEAK',
        severity: diacriticWordsCount >= 3 ? 'FATAL' : 'ERROR',
        message: `Untranslated Vietnamese text detected in "${locale}" target (found ${diacriticWordsCount} word(s) with Vietnamese diacritics).`
      });
    }
  }

  return issues;
};

// =========================================================================
// SOURCE FRESHNESS & OUTDATED DETECTION
// =========================================================================

export const validateSourceFreshness = (
  record: TranslationRecord
): ValidationIssue[] => {
  const issues: ValidationIssue[] = [];
  const currentSourceHash = computeSourceHash(record.sourceVi);

  if (record.translatedFromHash && record.translatedFromHash !== currentSourceHash) {
    issues.push({
      code: 'SOURCE_OUTDATED',
      severity: 'FATAL',
      message: `Source content has changed since this translation was created. Translation is OUTDATED.`,
      expected: currentSourceHash,
      received: record.translatedFromHash
    });
  }

  if (record.translatedFromVersion && record.translatedFromVersion < record.sourceVersion) {
    issues.push({
      code: 'SOURCE_OUTDATED',
      severity: 'ERROR',
      message: `Translation was generated from source version ${record.translatedFromVersion}, but current source is version ${record.sourceVersion}.`
    });
  }

  return issues;
};

// =========================================================================
// MASTER QA VALIDATOR
// =========================================================================

export interface ValidateTranslationOptions {
  sourceVi: string;
  targetText: string;
  locale: LocaleCode;
  riskLevel?: RiskLevel;
  record?: TranslationRecord;
  targetStatus?: string;
}

export const validateTranslation = (
  options: ValidateTranslationOptions
): ValidationResult => {
  const { sourceVi, targetText, locale, riskLevel, record, targetStatus } = options;
  const issues: ValidationIssue[] = [];

  // 1. Placeholder Safety
  issues.push(...validatePlaceholders(sourceVi, targetText));

  // 2. Number & Quantitative Safety
  issues.push(...validateNumbers(sourceVi, targetText));

  // 3. Protected Brands & Glossary
  issues.push(...validateProtectedBrands(sourceVi, targetText, locale));

  // 4. Claim Strength Preservation
  issues.push(...validateClaimStrength(sourceVi, targetText, locale));

  // 5. Negation Safety
  issues.push(...validateNegationSafety(sourceVi, targetText, locale, riskLevel));

  // 6. Disclaimer Preservation
  issues.push(...validateDisclaimerPreservation(sourceVi, targetText, locale));

  // 7. Untranslated & Raw Key Leaks
  issues.push(...validateUntranslatedLeaks(targetText, locale));

  // 8. Source Freshness (if record provided)
  if (record) {
    issues.push(...validateSourceFreshness(record));
    const currentPassedHash = computeSourceHash(sourceVi);
    if (record.translatedFromHash && record.translatedFromHash !== currentPassedHash) {
      if (!issues.some((i) => i.code === 'SOURCE_OUTDATED')) {
        issues.push({
          code: 'SOURCE_OUTDATED',
          severity: 'FATAL',
          message: `Source content has changed since this translation was created. Translation is OUTDATED.`,
          expected: currentPassedHash,
          received: record.translatedFromHash
        });
      }
    }
  }

  // 9. Publication Gate
  if (targetStatus === 'PUBLISHED') {
    if (record && record.status !== 'APPROVED' && record.status !== 'PUBLISHED') {
      issues.push({
        code: 'STATUS_UNAPPROVED_FOR_PUBLISH',
        severity: 'FATAL',
        message: `Cannot publish translation with status "${record.status}". Must be APPROVED by human QA before publication.`
      });
    }
  }

  const fatalOrError = issues.some((i) => i.severity === 'FATAL' || i.severity === 'ERROR');
  const hasFatal = issues.some((i) => i.severity === 'FATAL');

  return {
    isValid: !fatalOrError,
    canPublish: !hasFatal && !fatalOrError,
    issues
  };
};
