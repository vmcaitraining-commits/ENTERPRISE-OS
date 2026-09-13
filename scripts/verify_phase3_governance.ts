/**
 * Verification Script: Phase 3 Translation Governance, Glossary & Semantic Safety
 * Run with: npx tsx scripts/verify_phase3_governance.ts
 */

import {
  CANONICAL_SOURCE_LOCALE,
  TRANSLATION_PRINCIPLES,
  MASTER_GLOSSARY,
  GLOSSARY_MAP,
  CONFIRMED_PROTECTED_BRANDS,
  PROHIBITED_PSEUDO_BRANDS,
  TECHNICAL_GROUP_A_VERBATIM,
  TECHNICAL_GROUP_B_ENGLISH_EXP,
  TECHNICAL_GROUP_C_LOCALIZABLE,
  getGlossaryStats,
  approveGlossaryCandidate,
  publishGlossaryCandidate,
  validateTranslation,
  validatePlaceholders,
  validateNumbers,
  validateProtectedBrands,
  validateClaimStrength,
  validateNegationSafety,
  validateDisclaimerPreservation,
  validateUntranslatedLeaks,
  computeSourceHash,
  createSemanticChecklist,
  evaluateSemanticChecklist,
  transitionTranslationStatus,
  globalTranslationMemory,
  TranslationRecord
} from '../src/i18n';

let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${testName}`);
  } else {
    console.error(`  [FAIL] ${testName}`);
    if (detail) {
      console.error(`         Detail: ${detail}`);
    }
  }
}

console.log('=================================================================');
console.log('VMC GROUP MULTILINGUAL — PHASE 3 GOVERNANCE VERIFICATION');
console.log('=================================================================\n');

// -------------------------------------------------------------------------
// SUITE 1: CANONICAL SOURCE & CORE PRINCIPLES
// -------------------------------------------------------------------------
console.log('Suite 1: Canonical Source & Translation Principles');
assert(CANONICAL_SOURCE_LOCALE === 'vi', 'Canonical source locale is strictly "vi"');
assert(TRANSLATION_PRINCIPLES.length === 10, 'All 10 mandatory translation principles are formalized');

// -------------------------------------------------------------------------
// SUITE 2: PROTECTED BRAND INTEGRITY & PSEUDO-BRAND REJECTION
// -------------------------------------------------------------------------
console.log('\nSuite 2: Protected Brand Names & Pseudo-Brand Prevention');
assert(
  CONFIRMED_PROTECTED_BRANDS.includes('VMC Group') &&
  CONFIRMED_PROTECTED_BRANDS.includes('VMC') &&
  CONFIRMED_PROTECTED_BRANDS.includes('AI ENTERPRISE'),
  'Protected brands contain exact enterprise identities'
);

const brandIssues1 = validateProtectedBrands(
  'Hệ điều hành VMC Group cho doanh nghiệp',
  'Operating system of VMC Corporation for enterprises',
  'en'
);
assert(
  brandIssues1.some((i) => i.code === 'PROTECTED_BRAND_MODIFIED'),
  'Flags violation when "VMC Group" is translated to "VMC Corporation"'
);

const brandIssues2 = validateProtectedBrands(
  'Hệ thống AI ENTERPRISE',
  'System powered by VMC AI Enterprise',
  'en'
);
assert(
  brandIssues2.some((i) => i.code === 'PROTECTED_BRAND_MODIFIED'),
  'Flags violation when unauthorized pseudo-brand "VMC AI Enterprise" is used'
);

// -------------------------------------------------------------------------
// SUITE 3: TECHNICAL TERMINOLOGY TAXONOMY (A, B, C)
// -------------------------------------------------------------------------
console.log('\nSuite 3: Technical Terminology Taxonomy');
assert(
  TECHNICAL_GROUP_A_VERBATIM.includes('API') &&
  TECHNICAL_GROUP_A_VERBATIM.includes('RAG') &&
  TECHNICAL_GROUP_A_VERBATIM.includes('RBAC') &&
  TECHNICAL_GROUP_A_VERBATIM.includes('Human-in-the-Loop'),
  'Group A contains verbatim technical acronyms and specifications'
);
assert(
  TECHNICAL_GROUP_B_ENGLISH_EXP.includes('Single Source of Truth') &&
  TECHNICAL_GROUP_B_ENGLISH_EXP.includes('Customer 360'),
  'Group B contains English terms with contextual explanations'
);
assert(
  TECHNICAL_GROUP_C_LOCALIZABLE.includes('Phân quyền') &&
  TECHNICAL_GROUP_C_LOCALIZABLE.includes('Đối soát'),
  'Group C contains standardized localizable domain terms'
);

// -------------------------------------------------------------------------
// SUITE 4: MASTER GLOSSARY & PRIORITY CONCEPTS COVERAGE
// -------------------------------------------------------------------------
console.log('\nSuite 4: Master Glossary & Priority Concepts Coverage');
assert(MASTER_GLOSSARY.length >= 25, `Master glossary populated with ${MASTER_GLOSSARY.length} prioritized entries`);

const ssotEntry = MASTER_GLOSSARY.find((e) => e.id === 'concept-ssot');
assert(
  !!ssotEntry && ssotEntry.allowedTranslations['en']?.includes('Single Source of Truth'),
  'Master glossary defines Single Source of Truth with correct allowed translations'
);

const demoDataEntry = MASTER_GLOSSARY.find((e) => e.id === 'disclaimer-demo-data');
assert(
  !!demoDataEntry && demoDataEntry.riskLevel === 'LEGAL_HIGH',
  'Master glossary tags disclaimer "Dữ liệu minh họa" as LEGAL_HIGH'
);

// -------------------------------------------------------------------------
// SUITE 5: PLACEHOLDER SAFETY VALIDATION
// -------------------------------------------------------------------------
console.log('\nSuite 5: Placeholder Safety Validation');
const phValid = validatePlaceholders('Xin chào {name}, bạn có {count} tác vụ.', 'Hello {name}, you have {count} tasks.');
assert(phValid.length === 0, 'Clean placeholder translation produces zero errors');

const phMissing = validatePlaceholders('Xin chào {name}, bạn có {count} tác vụ.', 'Hello, you have {count} tasks.');
assert(
  phMissing.some((i) => i.code === 'PLACEHOLDER_MISMATCH' && i.expected === '{name}'),
  'Detects missing placeholder "{name}" as fatal error'
);

const phExtra = validatePlaceholders('Xin chào bạn.', 'Hello {user}.');
assert(
  phExtra.some((i) => i.code === 'PLACEHOLDER_MISMATCH' && i.received === '{user}'),
  'Detects unauthorized injected placeholder "{user}" as error'
);

// -------------------------------------------------------------------------
// SUITE 6: NUMBER & QUANTITATIVE SAFETY VALIDATION
// -------------------------------------------------------------------------
console.log('\nSuite 6: Number & Quantitative Safety Validation');
const numValid = validateNumbers('Hệ thống đạt 99.9% uptime và phục vụ 24/7.', 'System delivers 99.9% uptime and operates 24/7.');
assert(numValid.length === 0, 'Clean number preservation passes validation');

const numAltered = validateNumbers('Tiết kiệm 30% thời gian xử lý.', 'Saves 50% processing time.');
assert(
  numAltered.some((i) => i.code === 'NUMBER_MISMATCH' && i.expected === '30%'),
  'Detects quantitative discrepancy: 30% changed to 50%'
);

// -------------------------------------------------------------------------
// SUITE 7: CLAIM STRENGTH PRESERVATION VALIDATION
// -------------------------------------------------------------------------
console.log('\nSuite 7: Claim Strength Preservation Validation');
const claimClean = validateClaimStrength(
  'Hệ thống có thể hỗ trợ tối ưu hóa quy trình theo cấu hình.',
  'The system can support process optimization depending on configuration.',
  'en'
);
assert(claimClean.length === 0, 'Appropriately nuanced translation passes claim check');

const claimEscalated = validateClaimStrength(
  'Hệ thống có thể hỗ trợ tối ưu hóa quy trình.',
  'The system guaranteed 100% process optimization.',
  'en'
);
assert(
  claimEscalated.some((i) => i.code === 'CLAIM_ESCALATION'),
  'Catches claim escalation: "có thể hỗ trợ" translated to forbidden "guaranteed"'
);

// -------------------------------------------------------------------------
// SUITE 8: NEGATION SAFETY VALIDATION
// -------------------------------------------------------------------------
console.log('\nSuite 8: Negation Safety Validation');
const negClean = validateNegationSafety(
  'Hệ thống không tự động đưa ra quyết định mà cần phê duyệt.',
  'The system does not make decisions automatically; it requires approval.',
  'en',
  'NEGATION_CRITICAL'
);
assert(negClean.length === 0, 'Correctly translated negation passes validation');

const negLost = validateNegationSafety(
  'Hệ thống không tự động đưa ra quyết định.',
  'The system automatically makes decisions.',
  'en',
  'NEGATION_CRITICAL'
);
assert(
  negLost.some((i) => i.code === 'NEGATION_LOST' && i.severity === 'FATAL'),
  'Critical Negation Lost: Drops negative assertion and triggers FATAL'
);

// -------------------------------------------------------------------------
// SUITE 9: DISCLAIMER PRESERVATION VALIDATION
// -------------------------------------------------------------------------
console.log('\nSuite 9: Disclaimer Preservation Validation');
const discClean = validateDisclaimerPreservation(
  'Biểu đồ thể hiện Dữ liệu minh họa phục vụ tham khảo.',
  'The chart displays illustrative data for reference purposes.',
  'en'
);
assert(discClean.length === 0, 'Preserved disclaimer passes validation');

const discMissing = validateDisclaimerPreservation(
  'Biểu đồ thể hiện Dữ liệu minh họa phục vụ tham khảo.',
  'The chart displays actual enterprise performance.',
  'en'
);
assert(
  discMissing.some((i) => i.code === 'DISCLAIMER_MISSING'),
  'Missing mandatory disclaimer "Dữ liệu minh họa" triggers FATAL error'
);

// -------------------------------------------------------------------------
// SUITE 10: UNTRANSLATED VIETNAMESE LEAK & RAW KEY LEAK
// -------------------------------------------------------------------------
console.log('\nSuite 10: Untranslated Diacritics & Raw Key Leak');
const leakVietnamese = validateUntranslatedLeaks(
  'This enterprise solution provides phân quyền quản trị dữ liệu.',
  'en'
);
assert(
  leakVietnamese.some((i) => i.code === 'UNTRANSLATED_VIETNAMESE_LEAK'),
  'Catches untranslated Vietnamese text with diacritics in English output'
);

const leakRawKey = validateUntranslatedLeaks('nav.solutions.crm.title', 'en');
assert(
  leakRawKey.some((i) => i.code === 'RAW_KEY_LEAK'),
  'Catches unresolved raw translation key leak'
);

// -------------------------------------------------------------------------
// SUITE 11: SOURCE FRESHNESS & HASH TRACKING
// -------------------------------------------------------------------------
console.log('\nSuite 11: Source Freshness & Version Tracking');
const sourceVi = 'Giải pháp vận hành doanh nghiệp bằng AI.';
const originalHash = computeSourceHash(sourceVi);

const testRecord: TranslationRecord = {
  key: 'home.hero.title',
  namespace: 'home',
  sourceVi: sourceVi,
  sourceVersion: 1,
  sourceHash: originalHash,
  locale: 'en',
  targetText: 'Enterprise operational solution powered by AI.',
  translatedFromVersion: 1,
  translatedFromHash: originalHash,
  status: 'DRAFT',
  updatedAt: new Date().toISOString()
};

const fullValid1 = validateTranslation({
  sourceVi: testRecord.sourceVi,
  targetText: testRecord.targetText,
  locale: testRecord.locale,
  record: testRecord
});
assert(fullValid1.isValid, 'Up-to-date record passes full validation');

// Simulate Vietnamese source update
testRecord.sourceVi = 'Giải pháp vận hành doanh nghiệp bằng AI VMC Group thế hệ mới.';
const fullValid2 = validateTranslation({
  sourceVi: testRecord.sourceVi,
  targetText: testRecord.targetText,
  locale: testRecord.locale,
  record: testRecord
});
assert(
  fullValid2.issues.some((i) => i.code === 'SOURCE_OUTDATED'),
  'Flags SOURCE_OUTDATED when canonical Vietnamese source text changes'
);

// -------------------------------------------------------------------------
// SUITE 12: STATUS WORKFLOW & QA REVIEW GATES (A-J)
// -------------------------------------------------------------------------
console.log('\nSuite 12: Status Workflow & Semantic Review Gates');
const record2: TranslationRecord = {
  key: 'solutions.crm.hero',
  namespace: 'solutions',
  sourceVi: 'Giải pháp CRM VMC Group.',
  sourceVersion: 1,
  sourceHash: computeSourceHash('Giải pháp CRM VMC Group.'),
  locale: 'en',
  targetText: 'VMC Group CRM Solution.',
  translatedFromVersion: 1,
  translatedFromHash: computeSourceHash('Giải pháp CRM VMC Group.'),
  status: 'AI_TRANSLATED',
  updatedAt: new Date().toISOString()
};

// Attempt to jump from AI_TRANSLATED straight to PUBLISHED (Must fail!)
const directPublish = transitionTranslationStatus(record2, 'PUBLISHED');
assert(!directPublish.success, 'Prevents jumping directly from AI_TRANSLATED to PUBLISHED');

// Transition to NEEDS_REVIEW
const toReview = transitionTranslationStatus(record2, 'NEEDS_REVIEW');
assert(toReview.success && record2.status === 'NEEDS_REVIEW', 'Transitions from AI_TRANSLATED to NEEDS_REVIEW');

// Attempt promotion to APPROVED without checklist (Must fail!)
const approveWithoutChecklist = transitionTranslationStatus(record2, 'APPROVED');
assert(!approveWithoutChecklist.success, 'Prevents promotion to APPROVED without semantic checklist');

// Complete 10-point checklist (A-J)
const checklist = createSemanticChecklist();
checklist.A.passed = true;
checklist.B.passed = true;
checklist.C.passed = true;
checklist.D.passed = true;
checklist.E.passed = true;
checklist.F.passed = true;
checklist.G.passed = true;
checklist.H.passed = true;
checklist.I.passed = true;
checklist.J.passed = true;

const approveWithChecklist = transitionTranslationStatus(record2, 'APPROVED', {
  reviewerName: 'SENIOR_LEAD_QA',
  checklist
});
assert(
  approveWithChecklist.success && record2.status === 'APPROVED' && record2.approvedBy === 'SENIOR_LEAD_QA',
  'Successfully promotes to APPROVED with verified 10-point checklist and human signer'
);

// Promote APPROVED to PUBLISHED (Must succeed)
const publishSuccess = transitionTranslationStatus(record2, 'PUBLISHED');
assert(publishSuccess.success && record2.status === 'PUBLISHED', 'Successfully publishes APPROVED translation');

// -------------------------------------------------------------------------
// SUITE 13: TRANSLATION MEMORY (TM) SEGMENT REUSE
// -------------------------------------------------------------------------
console.log('\nSuite 13: Translation Memory (TM) Segment Reuse');
globalTranslationMemory.clear();

globalTranslationMemory.register(
  'Nguồn dữ liệu duy nhất',
  computeSourceHash('Nguồn dữ liệu duy nhất'),
  'en',
  'Single Source of Truth',
  'enterprise_architecture',
  'ENTERPRISE_SYSTEM',
  'APPROVED'
);

const tmMatch = globalTranslationMemory.lookup('Nguồn dữ liệu duy nhất', 'en', 'enterprise_architecture');
assert(
  tmMatch !== null && tmMatch.targetText === 'Single Source of Truth',
  'Successfully retrieves approved segment from Translation Memory'
);

// -------------------------------------------------------------------------
// SUITE 14: PHASE 3 HARDENING — GLOSSARY STATUS GOVERNANCE & GATES (A-E)
// -------------------------------------------------------------------------
console.log('\nSuite 14: Phase 3 Hardening — Glossary Status Governance & Quality Gates (A-E)');

// Stats inspection
const glossaryStats = getGlossaryStats();
console.log(`  Glossary Stats: Total=${glossaryStats.totalEntries}, Approved=${glossaryStats.approvedEntries}, NeedsReview=${glossaryStats.needsReviewEntries}, AITranslated=${glossaryStats.aiTranslatedEntries}, Published=${glossaryStats.publishedEntries}`);

assert(
  glossaryStats.totalEntries === 38,
  `Master glossary contains exact 38 prioritized enterprise entries (Got ${glossaryStats.totalEntries})`
);
assert(
  glossaryStats.approvedEntries === 3,
  `Exactly 3 confirmed protected brand names are APPROVED (Got ${glossaryStats.approvedEntries})`
);
assert(
  glossaryStats.needsReviewEntries === 35,
  `All 35 unreviewed enterprise candidate entries are strictly NEEDS_REVIEW (Got ${glossaryStats.needsReviewEntries})`
);
assert(
  glossaryStats.publishedEntries === 0,
  `Zero foreign glossary translations are PUBLISHED (Got ${glossaryStats.publishedEntries})`
);

// TEST A: AI-generated glossary targets are NEVER automatically APPROVED
const unreviewedEntries = MASTER_GLOSSARY.filter((e) => e.category !== 'BRAND' || !e.protected);
const anyUnreviewedIsApproved = unreviewedEntries.some((e) => e.status === 'APPROVED');
assert(
  !anyUnreviewedIsApproved,
  'TEST A: AI-generated candidate translations are strictly NOT automatically APPROVED'
);

const sampleCandidateItem = GLOSSARY_MAP.get('concept-ai-os')?.candidateTranslations['en']?.[0];
assert(
  sampleCandidateItem !== undefined && sampleCandidateItem.status === 'NEEDS_REVIEW',
  'TEST A: Individual candidate translation item initializes with status "NEEDS_REVIEW"'
);

// TEST B: Incomplete semantic checklist → APPROVED must FAIL
const incompleteChecklist = createSemanticChecklist();
// Leave checklist items unpassed (only set A-H, omit I and J)
incompleteChecklist.A.passed = true;
incompleteChecklist.B.passed = true;
incompleteChecklist.C.passed = true;
incompleteChecklist.D.passed = true;
incompleteChecklist.E.passed = true;
incompleteChecklist.F.passed = true;
incompleteChecklist.G.passed = true;
incompleteChecklist.H.passed = true;
// I and J are false!

const failApproveResult = approveGlossaryCandidate(
  'concept-ai-os',
  'en',
  'AI-Powered Enterprise Operating System',
  'TEST_REVIEWER',
  incompleteChecklist
);
assert(
  !failApproveResult.success && failApproveResult.error?.includes('Failed semantic checks'),
  'TEST B: Incomplete semantic checklist (omitting I & J) causes approval attempt to FAIL'
);

// TEST C: APPROVED is valid ONLY when all 10 semantic quality gate criteria PASS
const completeChecklist = createSemanticChecklist();
completeChecklist.A.passed = true; // Meaning preserved
completeChecklist.B.passed = true; // Claim strength preserved
completeChecklist.C.passed = true; // Negation preserved
completeChecklist.D.passed = true; // Disclaimer preserved
completeChecklist.E.passed = true; // Number preservation
completeChecklist.F.passed = true; // Terminology/context
completeChecklist.G.passed = true; // Native phrasing
completeChecklist.H.passed = true; // No invented fact
completeChecklist.I.passed = true; // No omitted qualifier
completeChecklist.J.passed = true; // Context review

const validApproveResult = approveGlossaryCandidate(
  'concept-ai-os',
  'en',
  'AI-Powered Enterprise Operating System',
  'LEGAL_ENTERPRISE_QA',
  completeChecklist
);
assert(
  validApproveResult.success,
  'TEST C: Valid APPROVED succeeds when all 10 criteria pass with human sign-off'
);

const verifiedCandidateItem = GLOSSARY_MAP.get('concept-ai-os')?.candidateTranslations['en']?.find(
  (t) => t.text === 'AI-Powered Enterprise Operating System'
);
assert(
  verifiedCandidateItem?.status === 'APPROVED' && verifiedCandidateItem?.reviewedBy === 'LEGAL_ENTERPRISE_QA',
  'TEST C: Target item status successfully promoted to APPROVED with audit trail'
);

// TEST D: PUBLISHED gate — ONLY from APPROVED
// Attempt to publish an unapproved candidate translation (still in NEEDS_REVIEW)
const unapprovedPublishResult = publishGlossaryCandidate(
  'concept-ai-os',
  'en',
  'Enterprise Operating System Powered by AI' // this alternative was not approved yet
);
assert(
  !unapprovedPublishResult.success && unapprovedPublishResult.error?.includes('Must be APPROVED first'),
  'TEST D: Direct transition from NEEDS_REVIEW to PUBLISHED is strictly BLOCKED'
);

// Now publish the approved candidate item
const approvedPublishResult = publishGlossaryCandidate(
  'concept-ai-os',
  'en',
  'AI-Powered Enterprise Operating System'
);
assert(
  approvedPublishResult.success,
  'TEST D: Publication succeeds ONLY after translation has achieved APPROVED status'
);

// TEST E: Source Vietnamese changes → translation APPROVED/PUBLISHED is detected as OUTDATED
const originalSourceVi = 'Quy trình kiểm soát dữ liệu tự động.';
const sourceHashOrig = computeSourceHash(originalSourceVi);

const publishedRecord: TranslationRecord = {
  key: 'solutions.data_control.desc',
  namespace: 'solutions',
  sourceVi: originalSourceVi,
  sourceVersion: 1,
  sourceHash: sourceHashOrig,
  locale: 'en',
  targetText: 'Automated data control procedure.',
  translatedFromVersion: 1,
  translatedFromHash: sourceHashOrig,
  status: 'PUBLISHED',
  updatedAt: new Date().toISOString()
};

// Source changes in Vietnamese canonical source
const modifiedSourceVi = 'Quy trình kiểm soát dữ liệu tự động và phê duyệt hai lớp.';
const staleValidation = validateTranslation({
  sourceVi: modifiedSourceVi,
  targetText: publishedRecord.targetText,
  locale: publishedRecord.locale,
  record: publishedRecord
});
assert(
  staleValidation.issues.some((i) => i.code === 'SOURCE_OUTDATED'),
  'TEST E: Modifying canonical Vietnamese source flags PUBLISHED translation as SOURCE_OUTDATED'
);

// -------------------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------------------
console.log('\n=================================================================');
console.log(`VERIFICATION RESULT: ${passedTests}/${totalTests} TESTS PASSED`);
console.log('=================================================================');

if (passedTests === totalTests) {
  console.log('ALL PHASE 3 GOVERNANCE REQUIREMENTS MET SATISFACTORILY.\n');
  process.exit(0);
} else {
  console.error('FAILURES DETECTED IN PHASE 3 VERIFICATION.\n');
  process.exit(1);
}
