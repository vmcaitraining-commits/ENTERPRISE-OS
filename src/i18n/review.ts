/**
 * VMC Group Multilingual System
 * Phase 3 — Semantic Review Engine & Status Workflow
 *
 * Enforces the 10-point semantic review checklist (A-J) and prevents
 * automatic publication without verified QA sign-off.
 */

import {
  TranslationStatus,
  SemanticCheckItem,
  SemanticReviewChecklist,
  TranslationRecord
} from './types';
import { computeSourceHash } from './validators';

// =========================================================================
// SECTION 1: THE 10-POINT SEMANTIC REVIEW CHECKLIST (A-J)
// =========================================================================

export const SEMANTIC_CHECKLIST_DEFINITIONS: Record<
  'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J',
  { label: string; description: string }
> = {
  A: {
    label: 'Meaning Preserved',
    description: 'Ngữ nghĩa nghiệp vụ được chuyển tải trọn vẹn, không làm lệch ý đồ ban đầu.'
  },
  B: {
    label: 'Claim Strength Preserved',
    description: 'Mức độ cam kết giữ nguyên, không tự động biến khả năng/ước lượng thành cam kết 100%.'
  },
  C: {
    label: 'Negation Preserved',
    description: 'Mệnh đề phủ định ("không/chưa") được chuyển ngữ chính xác, không biến thành khẳng định.'
  },
  D: {
    label: 'Disclaimer Preserved',
    description: 'Các tuyên bố miễn trừ, dữ liệu minh họa, bản dự thảo được giữ đầy đủ.'
  },
  E: {
    label: 'Numbers Preserved',
    description: 'Số liệu, tỷ lệ %, ngày tháng, SLA, KPI hoàn toàn trùng khớp bản gốc.'
  },
  F: {
    label: 'Terminology Correct',
    description: 'Thuật ngữ tuân thủ Master Glossary, nhóm A giữ nguyên, nhóm B/C dịch chuẩn ngành.'
  },
  G: {
    label: 'Native Phrasing',
    description: 'Diễn đạt tự nhiên, chuẩn mực B2B của ngôn ngữ đích, không phải dịch máy thô ráp.'
  },
  H: {
    label: 'No Invented Facts',
    description: 'Không sáng tạo thêm tính năng hay thông tin chưa từng có trong bản tiếng Việt.'
  },
  I: {
    label: 'No Omitted Qualifier',
    description: 'Không lược bỏ điều kiện ràng buộc ("tùy phạm vi", "theo cấu hình").'
  },
  J: {
    label: 'Context Correct',
    description: 'Hiểu đúng ngữ cảnh (ví dụ: data source vs. lead source, pipeline bán hàng vs. dữ liệu).'
  }
};

/**
 * Creates a clean semantic review checklist initialized to unapproved
 */
export const createSemanticChecklist = (): SemanticReviewChecklist => {
  const result: Partial<SemanticReviewChecklist> = {};
  const keys: Array<'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'> = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
  ];

  for (const k of keys) {
    result[k] = {
      id: k,
      label: SEMANTIC_CHECKLIST_DEFINITIONS[k].label,
      passed: false
    };
  }

  return result as SemanticReviewChecklist;
};

/**
 * Evaluates whether all 10 semantic criteria are met
 */
export const evaluateSemanticChecklist = (
  checklist: SemanticReviewChecklist
): { allPassed: boolean; failedItems: SemanticCheckItem[] } => {
  const items = Object.values(checklist);
  const failedItems = items.filter((item) => !item.passed);
  return {
    allPassed: failedItems.length === 0,
    failedItems
  };
};

// =========================================================================
// SECTION 2: STATUS WORKFLOW ENGINE
// =========================================================================

/**
 * Allowed status transitions
 */
const VALID_TRANSITIONS: Record<TranslationStatus, TranslationStatus[]> = {
  DRAFT: ['AI_TRANSLATED', 'NEEDS_REVIEW', 'OUTDATED'],
  AI_TRANSLATED: ['NEEDS_REVIEW', 'DRAFT', 'OUTDATED'], // CANNOT transition directly to APPROVED or PUBLISHED
  NEEDS_REVIEW: ['APPROVED', 'DRAFT', 'AI_TRANSLATED', 'OUTDATED'],
  APPROVED: ['PUBLISHED', 'NEEDS_REVIEW', 'OUTDATED'],
  PUBLISHED: ['OUTDATED', 'NEEDS_REVIEW'],
  OUTDATED: ['DRAFT', 'AI_TRANSLATED', 'NEEDS_REVIEW']
};

export const canTransitionStatus = (
  current: TranslationStatus,
  target: TranslationStatus
): boolean => {
  if (current === target) return true;
  return VALID_TRANSITIONS[current]?.includes(target) ?? false;
};

export interface StatusTransitionResult {
  success: boolean;
  newStatus: TranslationStatus;
  error?: string;
}

/**
 * Executes a controlled status transition with governance gate checks
 */
export const transitionTranslationStatus = (
  record: TranslationRecord,
  targetStatus: TranslationStatus,
  options?: {
    reviewerName?: string;
    checklist?: SemanticReviewChecklist;
  }
): StatusTransitionResult => {
  // Check if source changed since translation was created -> must be OUTDATED
  const currentSourceHash = computeSourceHash(record.sourceVi);
  if (record.translatedFromHash && record.translatedFromHash !== currentSourceHash) {
    record.status = 'OUTDATED';
    return {
      success: targetStatus === 'OUTDATED',
      newStatus: 'OUTDATED',
      error: 'Source Vietnamese text has changed. Translation must be flagged as OUTDATED.'
    };
  }

  // Check valid transition path
  if (!canTransitionStatus(record.status, targetStatus)) {
    return {
      success: false,
      newStatus: record.status,
      error: `Invalid status transition: Cannot transition directly from "${record.status}" to "${targetStatus}".`
    };
  }

  // Gate check: Promotion to APPROVED requires all 10 semantic checks to pass
  if (targetStatus === 'APPROVED') {
    if (!options?.checklist) {
      return {
        success: false,
        newStatus: record.status,
        error: 'Cannot approve translation without completing the 10-point semantic review checklist.'
      };
    }

    const { allPassed, failedItems } = evaluateSemanticChecklist(options.checklist);
    if (!allPassed) {
      const failedLabels = failedItems.map((f) => `[${f.id}] ${f.label}`).join(', ');
      return {
        success: false,
        newStatus: record.status,
        error: `Cannot approve translation. Failed semantic checks: ${failedLabels}.`
      };
    }

    record.approvedBy = options.reviewerName || 'QA_HUMAN_REVIEWER';
  }

  // Gate check: Promotion to PUBLISHED requires that it was already APPROVED
  if (targetStatus === 'PUBLISHED') {
    if (record.status !== 'APPROVED') {
      return {
        success: false,
        newStatus: record.status,
        error: `Cannot publish translation with status "${record.status}". Only APPROVED translations may be PUBLISHED.`
      };
    }
  }

  record.status = targetStatus;
  record.updatedAt = new Date().toISOString();

  return {
    success: true,
    newStatus: targetStatus
  };
};
