/**
 * VMC Group Multilingual System
 * Phase 3 — Translation Governance Rules, Claim Preservation & Style Guides
 *
 * CANONICAL SOURCE: Tiếng Việt (vi) is the single canonical source of truth.
 * All translations must map directly: Vietnamese -> Target Locale.
 */

import { LocaleCode } from './types';

// =========================================================================
// SECTION 1: CANONICAL SOURCE DEFINITION
// =========================================================================
export const CANONICAL_SOURCE_LOCALE: LocaleCode = 'vi';

// =========================================================================
// SECTION 2: THE 10 MANDATORY TRANSLATION PRINCIPLES
// =========================================================================
export const TRANSLATION_PRINCIPLES = [
  {
    id: 1,
    title: 'Bảo toàn ý nghĩa (Meaning Preservation)',
    description: 'Bản dịch phải phản ánh chính xác ngữ nghĩa và chủ đích nghiệp vụ của bản gốc tiếng Việt.'
  },
  {
    id: 2,
    title: 'Bảo toàn mức độ chắc chắn (Claim Strength Preservation)',
    description: 'Không được biến khả năng/ước lượng/điều kiện thành cam kết tuyệt đối hoặc bảo đảm 100%.'
  },
  {
    id: 3,
    title: 'Bảo toàn điều kiện/ràng buộc (Constraint Preservation)',
    description: 'Các điều kiện "tùy phạm vi", "theo cấu hình", "phụ thuộc vào hệ thống" phải được giữ nguyên.'
  },
  {
    id: 4,
    title: 'Bảo toàn ngữ cảnh (Context Preservation)',
    description: 'Thuật ngữ phải dịch đúng chuyên ngành B2B/Enterprise, không dịch nghĩa đời thường hay tách rời ngữ cảnh.'
  },
  {
    id: 5,
    title: 'Bảo toàn số liệu (Data & Number Preservation)',
    description: 'Số lượng, phần trăm, mốc thời gian, công thức, SLA, KPI, chỉ số kỹ thuật phải khớp 100% bản gốc.'
  },
  {
    id: 6,
    title: 'Bảo toàn disclaimer (Disclaimer Preservation)',
    description: 'Không bao giờ xóa bỏ disclaimer (dữ liệu minh họa, bản dự thảo, mục tiêu tham khảo) để làm gọn câu.'
  },
  {
    id: 7,
    title: 'Bảo toàn trạng thái dữ liệu (State Preservation)',
    description: 'Phân biệt rõ ràng giữa "chưa phát hành", "bản thử nghiệm", "kế hoạch" và "đã phát hành chính thức".'
  },
  {
    id: 8,
    title: 'Bảo toàn vai trò Human-in-the-Loop (HITL Preservation)',
    description: 'Không được phóng đại khả năng tự động hóa làm lu mờ vai trò kiểm soát, phê duyệt của con người.'
  },
  {
    id: 9,
    title: 'Không thêm thông tin (No Hallucination / Invention)',
    description: 'Không tự ý bổ sung tính năng, cam kết hoặc thông tin thị trường mà bản tiếng Việt không đề cập.'
  },
  {
    id: 10,
    title: 'Không bỏ thông tin quan trọng (No Omission of Key Constraints)',
    description: 'Không lược bỏ bất kỳ điều kiện giới hạn pháp lý, bảo mật hay trách nhiệm giải trình nào.'
  }
] as const;

// =========================================================================
// SECTION 3: CLAIM STRENGTH PRESERVATION RULES
// =========================================================================

/**
 * Vietnamese qualifiers indicating non-absolute claims, estimates, or conditional behavior
 */
export const VIETNAMESE_QUALIFIERS = [
  'có thể hỗ trợ',
  'có khả năng',
  'theo cấu hình',
  'tùy phạm vi triển khai',
  'tùy thuộc vào',
  'mục tiêu tham khảo',
  'dữ liệu minh họa',
  'kịch bản mô phỏng',
  'đề xuất',
  'bản dự thảo',
  'dự kiến',
  'ước tính'
] as const;

/**
 * Prohibited target claim escalation words if source contains qualifiers
 */
export const FORBIDDEN_ESCALATED_CLAIMS: Record<string, string[]> = {
  en: [
    'guaranteed',
    'guarantee',
    'guarantees',
    'always',
    'automatically',
    'ensures',
    'will deliver',
    'fully automated',
    'zero risk',
    '100%',
    'official',
    'certified',
    'proven'
  ],
  'zh-CN': [
    '保证',
    '百分之百',
    '必定',
    '绝对',
    '零风险',
    '完全全自动',
    '确保达成'
  ],
  ja: [
    '100%保証',
    '絶対に',
    '必ず',
    '完全に自動化',
    'ゼロリスク',
    '確約'
  ],
  ko: [
    '100% 보장',
    '무조건',
    '완전 자동화',
    '무위험',
    '확정'
  ],
  de: [
    'garantiert',
    'vollautomatisch',
    'null risiko',
    '100%ig',
    'stets'
  ],
  fr: [
    'garanti',
    'assure à 100%',
    'entièrement automatisé',
    'sans aucun risque'
  ],
  es: [
    'garantizado',
    '100% seguro',
    'totalmente automatizado',
    'cero riesgo'
  ]
};

// =========================================================================
// SECTION 4: NEGATION SAFETY MARKERS
// =========================================================================

export const VIETNAMESE_NEGATION_MARKERS = [
  'không',
  'chưa',
  'chẳng',
  'không được',
  'không thể',
  'không tự động',
  'không thay thế',
  'không sử dụng'
] as const;

export const TARGET_NEGATION_INDICATORS: Record<LocaleCode, string[]> = {
  vi: ['không', 'chưa', 'chẳng'],
  en: ['not', 'never', 'no', 'without', 'neither', 'nor', 'cannot', "can't", "won't", "doesn't", "does not", "is not", 'unauthorized'],
  'zh-CN': ['不', '非', '未', '无', '禁止', '勿', '不能'],
  ja: ['ない', 'ず', 'ぬ', '不可', '非', '禁止', 'ません'],
  ko: ['않', '못', '없', '비', '금지', '아닌'],
  de: ['nicht', 'kein', 'nie', 'ohne', 'weder', 'niemals'],
  fr: ['ne pas', 'non', 'aucun', 'sans', 'jamais', 'ni'],
  es: ['no', 'nunca', 'jamás', 'sin', 'ningún', 'ninguno']
};

// =========================================================================
// SECTION 5: DISCLAIMER PRESERVATION SPECIFICATION
// =========================================================================

export interface DisclaimerRequirement {
  id: string;
  sourceVi: string;
  expectedEquivalents: Record<LocaleCode, string[]>;
}

export const MANDATORY_DISCLAIMERS: DisclaimerRequirement[] = [
  {
    id: 'demo-data',
    sourceVi: 'Dữ liệu minh họa',
    expectedEquivalents: {
      vi: ['Dữ liệu minh họa'],
      en: ['illustrative data', 'sample data', 'demonstration data', 'for illustration'],
      'zh-CN': ['示例数据', '演示数据'],
      ja: ['例示データ', 'デモ用データ'],
      ko: ['예시 데이터', '참고용 데이터'],
      de: ['illustrative daten', 'beispieldaten'],
      fr: ['données indicatives', 'données d’illustration'],
      es: ['datos ilustrativos', 'datos de muestra']
    }
  },
  {
    id: 'demo-scenario',
    sourceVi: 'Kịch bản minh họa',
    expectedEquivalents: {
      vi: ['Kịch bản minh họa'],
      en: ['illustrative scenario', 'demonstration scenario', 'sample scenario'],
      'zh-CN': ['演示场景', '示例场景'],
      ja: ['例示シナリオ'],
      ko: ['예시 시나리오'],
      de: ['illustratives szenario'],
      fr: ['scénario d’illustration'],
      es: ['escenario ilustrativo']
    }
  },
  {
    id: 'simulated-scenario',
    sourceVi: 'Kịch bản mô phỏng',
    expectedEquivalents: {
      vi: ['Kịch bản mô phỏng'],
      en: ['simulated scenario', 'modeled scenario'],
      'zh-CN': ['模拟场景'],
      ja: ['シミュレーション・シナリオ'],
      ko: ['시뮬레이션 시나리오'],
      de: ['simuliertes szenario'],
      fr: ['scénario simulé'],
      es: ['escenario simulado']
    }
  },
  {
    id: 'ref-target',
    sourceVi: 'Mục tiêu tham khảo',
    expectedEquivalents: {
      vi: ['Mục tiêu tham khảo'],
      en: ['reference target', 'indicative benchmark', 'reference benchmark'],
      'zh-CN': ['参考目标', '参考基准'],
      ja: ['参考目標', '参考指標'],
      ko: ['참고용 목표', '참고 기준'],
      de: ['referenzziel', 'richtwert'],
      fr: ['cible indicative', 'objectif de référence'],
      es: ['objetivo de referencia', 'meta indicativa']
    }
  },
  {
    id: 'draft',
    sourceVi: 'Bản dự thảo',
    expectedEquivalents: {
      vi: ['Bản dự thảo'],
      en: ['draft', 'draft version', 'preliminary draft'],
      'zh-CN': ['草案', '草案版本'],
      ja: ['ドラフト', '下書き'],
      ko: ['초안', '초안 버전'],
      de: ['entwurf', 'entwurfsfassung'],
      fr: ['projet', 'version préliminaire'],
      es: ['borrador', 'versión preliminar']
    }
  },
  {
    id: 'scope-dependent',
    sourceVi: 'Tùy phạm vi triển khai',
    expectedEquivalents: {
      vi: ['Tùy phạm vi triển khai'],
      en: ['depending on implementation scope', 'subject to deployment scope', 'varies by scope'],
      'zh-CN': ['根据实施范围', '视部署范围而定'],
      ja: ['導入範囲に応じて', '展開スコープによる'],
      ko: ['도입 범위에 따라'],
      de: ['abhängig vom implementierungsumfang'],
      fr: ['selon le périmètre de déploiement'],
      es: ['según el alcance de implementación']
    }
  },
  {
    id: 'config-dependent',
    sourceVi: 'Theo cấu hình',
    expectedEquivalents: {
      vi: ['Theo cấu hình'],
      en: ['depending on configuration', 'as configured', 'subject to configuration', 'configuration-dependent'],
      'zh-CN': ['根据系统配置', '视配置而定'],
      ja: ['設定に応じて', '構成による'],
      ko: ['설정에 따라', '구성 기준'],
      de: ['konfigurationsabhängig', 'je nach konfiguration'],
      fr: ['selon la configuration'],
      es: ['según la configuración']
    }
  }
];

// =========================================================================
// SECTION 6: STYLE GUIDES PER LOCALE
// =========================================================================

export interface LocaleStyleGuide {
  locale: LocaleCode;
  tone: string;
  register: string;
  characteristics: string[];
  forbiddenTone: string[];
}

export const LOCALE_STYLE_GUIDES: Record<LocaleCode, LocaleStyleGuide> = {
  vi: {
    locale: 'vi',
    tone: 'Doanh nghiệp chuẩn mực, công nghệ, kiên định và trung thực',
    register: 'Trang trọng, chuyên nghiệp B2B',
    characteristics: [
      'Ngôn từ chính xác, rõ ràng, gãy gọn',
      'Định vị là đối tác tư vấn và đồng hành kiến trúc hệ thống cấp cao',
      'Phân biệt rõ ràng giữa năng lực sẵn sàng và thử nghiệm'
    ],
    forbiddenTone: ['Cường điệu hóa', 'Quảng cáo sáo rỗng', 'Cam kết vượt thực tế']
  },
  en: {
    locale: 'en',
    tone: 'Enterprise B2B, authoritative, clear, and precise',
    register: 'Formal B2B / Executive level',
    characteristics: [
      'Direct, scannable, natural international English',
      'Active voice preferred, avoid passive ambiguity',
      'Accurate industry terminology without marketing fluff'
    ],
    forbiddenTone: ['Hype-driven marketing', 'Sensationalism', 'Unsubstantiated claims']
  },
  'zh-CN': {
    locale: 'zh-CN',
    tone: 'Professional enterprise technology Chinese (简体中文)',
    register: 'Formal business and technical register',
    characteristics: [
      'Standard Mainland technical vocabulary',
      'Clear syntactic boundaries, dignified and restrained tone',
      'Accurate representation of governance and architecture'
    ],
    forbiddenTone: ['Sensational sales idioms', 'Overly casual expressions']
  },
  ja: {
    locale: 'ja',
    tone: 'Professional Japanese business writing (丁寧・誠実・論理的)',
    register: 'Desu/Masu (です・ます) or formal business standard',
    characteristics: [
      'Polite, respectful, and transparent',
      'Avoid awkward word-for-word literal translations',
      'Respect established Japanese IT katakana conventions'
    ],
    forbiddenTone: ['Excessive self-praise', 'Unclear responsibility']
  },
  ko: {
    locale: 'ko',
    tone: 'Professional B2B Korean (비즈니스 엔터프라이즈)',
    register: 'Haeyoche / Hapsyoche professional balance',
    characteristics: [
      'Natural, professional enterprise terminology',
      'Concise technical clarity',
      'Clear separation of system features vs. governance bounds'
    ],
    forbiddenTone: ['Casual internet slang', 'Exaggerated superlative phrasing']
  },
  de: {
    locale: 'de',
    tone: 'Professional Enterprise German, precise and technical',
    register: 'Formal Sie-Form, objective engineering clarity',
    characteristics: [
      'High semantic precision, structured clarity',
      'Clear definition of technical roles and data boundaries',
      'Rigorous preservation of security and legal constraints'
    ],
    forbiddenTone: ['Americanized marketing exaggeration', 'Vague corporate slogans']
  },
  fr: {
    locale: 'fr',
    tone: 'Professional B2B French, elegant, rigorous and clear',
    register: 'Formal "Vous", executive and professional',
    characteristics: [
      'Balanced syntax, natural French enterprise idioms',
      'Exact terminology for data governance and AI systems',
      'Nuanced expression of conditional capabilities'
    ],
    forbiddenTone: ['Literal calques of English slogans', 'Informal phrasing']
  },
  es: {
    locale: 'es',
    tone: 'Professional International Spanish (Español neutro / corporativo)',
    register: 'Formal "Usted", executive B2B tone',
    characteristics: [
      'Clear, universally understood international Spanish',
      'Avoid regional or colloquial idioms',
      'Precise rendering of enterprise software and security terms'
    ],
    forbiddenTone: ['Colloquial jargon', 'Overheated promotional promises']
  }
};
