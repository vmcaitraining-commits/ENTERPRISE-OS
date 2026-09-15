export type LocaleCode = 'vi' | 'en' | 'zh-CN' | 'ja' | 'ko' | 'de' | 'fr' | 'es';

export type LocaleStatus = 'published' | 'draft' | 'planned';

export interface LocaleMetadata {
  code: LocaleCode;
  name: string;
  nativeName: string;
  flag?: string;
  status: LocaleStatus;
  direction: 'ltr' | 'rtl';
  isDefault?: boolean;
}

export type TranslationNamespace =
  | 'common'
  | 'nav'
  | 'forms'
  | 'accessibility'
  | 'notFound'
  | 'home'
  | 'solutions'
  | 'industries'
  | 'ai'
  | 'seo'
  | 'aiEnterprise'
  | 'aiCopilots'
  | 'capabilities'
  | 'resources'
  | 'about'
  | 'contact';

export type TranslationDictionary = Record<string, any>;

// =========================================================================
// PHASE 3: TRANSLATION GOVERNANCE TYPES
// =========================================================================

export type TranslationStatus =
  | 'DRAFT'
  | 'AI_TRANSLATED'
  | 'NEEDS_REVIEW'
  | 'APPROVED'
  | 'PUBLISHED'
  | 'OUTDATED';

export type RiskLevel =
  | 'NORMAL'
  | 'HIGH'
  | 'LEGAL_HIGH'
  | 'SECURITY_HIGH'
  | 'DATA_GOVERNANCE_HIGH'
  | 'FINANCIAL_HIGH'
  | 'NEGATION_CRITICAL';

export type TerminologyGroup =
  | 'GROUP_A_VERBATIM'
  | 'GROUP_B_ENGLISH_WITH_EXPLANATION'
  | 'GROUP_C_LOCALIZABLE';

export type GlossaryCategory =
  | 'BRAND'
  | 'TECHNICAL'
  | 'ENTERPRISE_SYSTEM'
  | 'PROCESS_WORKFLOW'
  | 'SECURITY_GOVERNANCE'
  | 'DISCLAIMER'
  | 'AI_ARCHITECTURE';

export interface GlossaryTargetItem {
  text: string;
  status: TranslationStatus; // 'NEEDS_REVIEW' | 'AI_TRANSLATED' | 'APPROVED' | 'PUBLISHED'
  reviewedBy?: string;
  reviewedAt?: string;
  checklistPassed?: boolean;
}

export interface GlossaryEntry {
  id: string;
  sourceVi: string;
  category: GlossaryCategory;
  context?: string;
  protected: boolean;
  doNotTranslate: boolean;
  riskLevel: RiskLevel;
  terminologyGroup?: TerminologyGroup;
  status: TranslationStatus;
  candidateTranslations: Partial<Record<LocaleCode, GlossaryTargetItem[]>>;
  allowedTranslations: Partial<Record<LocaleCode, string[]>>;
  forbiddenTranslations?: Partial<Record<LocaleCode, string[]>>;
  notes?: string;
}

export interface TranslationRecord {
  key: string;
  namespace: TranslationNamespace;
  sourceVi: string;
  sourceVersion: number;
  sourceHash: string;
  locale: LocaleCode;
  targetText: string;
  translatedFromVersion: number;
  translatedFromHash: string;
  status: TranslationStatus;
  riskLevel?: RiskLevel;
  context?: string;
  reviewNotes?: string;
  approvedBy?: string;
  updatedAt: string;
}

export type ValidationSeverity = 'FATAL' | 'ERROR' | 'WARNING' | 'INFO';

export type ValidationCode =
  | 'PROTECTED_BRAND_MODIFIED'
  | 'PLACEHOLDER_MISMATCH'
  | 'NUMBER_MISMATCH'
  | 'NEGATION_LOST'
  | 'DISCLAIMER_MISSING'
  | 'CLAIM_ESCALATION'
  | 'UNTRANSLATED_VIETNAMESE_LEAK'
  | 'RAW_KEY_LEAK'
  | 'SOURCE_OUTDATED'
  | 'GLOSSARY_VIOLATION'
  | 'STATUS_UNAPPROVED_FOR_PUBLISH';

export interface ValidationIssue {
  code: ValidationCode;
  severity: ValidationSeverity;
  message: string;
  field?: string;
  expected?: string;
  received?: string;
}

export interface ValidationResult {
  isValid: boolean;
  canPublish: boolean;
  issues: ValidationIssue[];
}

export interface SemanticCheckItem {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';
  label: string;
  passed: boolean;
  notes?: string;
}

export type SemanticReviewChecklist = Record<'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J', SemanticCheckItem>;
