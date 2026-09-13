/**
 * VMC Group Multilingual System
 * Phase 3 — Master Glossary, Technical Taxonomy & Protected Terms Specification
 *
 * CANONICAL SOURCE: Tiếng Việt (vi) is the single canonical source of truth.
 * All translations must map directly: Vietnamese -> Target Locale.
 */

import {
  GlossaryEntry,
  GlossaryTargetItem,
  GlossaryCategory,
  RiskLevel,
  TerminologyGroup,
  LocaleCode,
  TranslationStatus,
  SemanticReviewChecklist
} from './types';
import { evaluateSemanticChecklist } from './review';

// =========================================================================
// SECTION 1: CONFIRMED PROTECTED BRAND NAMES (IMMUTABLE)
// =========================================================================
// These exact strings are confirmed protected enterprise identities and MUST NEVER
// be altered, translated, or extended into unauthorized brand names:
export const CONFIRMED_PROTECTED_BRANDS = [
  'VMC Group',
  'VMC',
  'AI ENTERPRISE'
] as const;

export type ProtectedBrand = (typeof CONFIRMED_PROTECTED_BRANDS)[number];

// Prohibited pseudo-brands that must never be created or translated as official brands:
export const PROHIBITED_PSEUDO_BRANDS = [
  'VMC AI Enterprise',
  'VMC CRM',
  'AI Enterprise Group',
  'VMC Enterprise AI'
] as const;

export const isProtectedBrand = (term: string): boolean => {
  return (CONFIRMED_PROTECTED_BRANDS as readonly string[]).includes(term);
};

// =========================================================================
// SECTION 2: TECHNICAL TERMINOLOGY TAXONOMY
// =========================================================================

/**
 * GROUP A — VERBATIM PRESERVATION
 * Standard technical acronyms, protocols, and architectural specifications.
 * MUST be kept verbatim in all languages (no phonetic transliteration or literal translation).
 */
export const TECHNICAL_GROUP_A_VERBATIM = [
  'API',
  'Webhook',
  'CRM',
  'CRS',
  'RAG',
  'RBAC',
  'SLA',
  'KPI',
  'BI',
  'SOP',
  'SSO',
  'OAuth2',
  'AES-256',
  'RESTful API',
  'Vector Database',
  'Human-in-the-Loop'
] as const;

/**
 * GROUP B — ENGLISH TERM + EXPLANATORY PHRASE
 * Core modern enterprise tech concepts where retaining the standard industry term
 * prevents confusion, with optional native explanatory phrasing.
 */
export const TECHNICAL_GROUP_B_ENGLISH_EXP = [
  'Pipeline',
  'Customer 360',
  'Audit Log',
  'Prompt',
  'Fine-tuning',
  'Single Source of Truth',
  'Workflow',
  'Copilot',
  'Automation'
] as const;

/**
 * GROUP C — LOCALIZABLE DOMAIN TERMS
 * Standard enterprise domain terms that should be translated into recognized,
 * professional target language terms (never casual or colloquial).
 */
export const TECHNICAL_GROUP_C_LOCALIZABLE = [
  'Phân quyền',
  'Phê duyệt',
  'Quy trình',
  'Điểm nghẽn',
  'Đối soát',
  'Chuyển giao',
  'Triển khai',
  'Quản trị dữ liệu',
  'Bảo mật',
  'Nhật ký kiểm toán',
  'Nguồn dữ liệu',
  'Phạm vi quyền'
] as const;

// Backward-compatible export
export const TECHNICAL_TERMINOLOGY = [
  ...TECHNICAL_GROUP_A_VERBATIM,
  'Copilot'
] as const;

export type TechnicalTerm = (typeof TECHNICAL_TERMINOLOGY)[number];

// =========================================================================
// SECTION 3: MASTER & PRIORITY GLOSSARY
// =========================================================================

const RAW_MASTER_GLOSSARY: Array<Omit<GlossaryEntry, 'status' | 'candidateTranslations'>> = [
  // --- BRAND IDENTITIES ---
  {
    id: 'brand-vmc-group',
    sourceVi: 'VMC Group',
    category: 'BRAND',
    protected: true,
    doNotTranslate: true,
    riskLevel: 'LEGAL_HIGH',
    allowedTranslations: {
      en: ['VMC Group'],
      'zh-CN': ['VMC Group'],
      ja: ['VMC Group'],
      ko: ['VMC Group'],
      de: ['VMC Group'],
      fr: ['VMC Group'],
      es: ['VMC Group']
    },
    forbiddenTranslations: {
      en: ['VMC Corporation', 'VMC Company'],
      'zh-CN': ['VMC集团'],
      ja: ['VMCグループ']
    },
    notes: 'Official corporate brand. Must remain verbatim across all languages.'
  },
  {
    id: 'brand-vmc',
    sourceVi: 'VMC',
    category: 'BRAND',
    protected: true,
    doNotTranslate: true,
    riskLevel: 'LEGAL_HIGH',
    allowedTranslations: {
      en: ['VMC'],
      'zh-CN': ['VMC'],
      ja: ['VMC'],
      ko: ['VMC'],
      de: ['VMC'],
      fr: ['VMC'],
      es: ['VMC']
    },
    notes: 'Short brand name. Must remain verbatim.'
  },
  {
    id: 'brand-ai-enterprise',
    sourceVi: 'AI ENTERPRISE',
    category: 'BRAND',
    protected: true,
    doNotTranslate: true,
    riskLevel: 'LEGAL_HIGH',
    allowedTranslations: {
      en: ['AI ENTERPRISE'],
      'zh-CN': ['AI ENTERPRISE'],
      ja: ['AI ENTERPRISE'],
      ko: ['AI ENTERPRISE'],
      de: ['AI ENTERPRISE'],
      fr: ['AI ENTERPRISE'],
      es: ['AI ENTERPRISE']
    },
    forbiddenTranslations: {
      en: ['VMC AI Enterprise', 'AI Enterprise Solution'],
      'zh-CN': ['企业AI', 'AI企业版']
    },
    notes: 'Official platform umbrella name. Exact capitalization AI ENTERPRISE.'
  },

  // --- PRIORITY ENTERPRISE ARCHITECTURE CONCEPTS ---
  {
    id: 'concept-ai-os',
    sourceVi: 'Hệ điều hành doanh nghiệp bằng AI',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Architecture proposition: the enterprise OS powered by AI',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['AI-Powered Enterprise Operating System', 'Enterprise Operating System Powered by AI'],
      'zh-CN': ['AI驱动的企业级操作系统', '基于AI的企业操作系统'],
      ja: ['AI主導のエンタープライズOS', 'AI搭載エンタープライズ・オペレーティングシステム'],
      ko: ['AI 기반 엔터프라이즈 운영체제'],
      de: ['KI-gestütztes Unternehmensbetriebssystem'],
      fr: ['Système d’exploitation d’entreprise propulsé par l’IA'],
      es: ['Sistema operativo empresarial impulsado por IA']
    },
    forbiddenTranslations: {
      en: ['AI Operating System for companies', 'Corporate AI OS software'],
      'zh-CN': ['AI公司系统']
    }
  },
  {
    id: 'concept-data-driven-enterprise',
    sourceVi: 'Doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Vision statement: enterprise driven by data, technology, and AI',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Enterprise driven by data, technology, and AI', 'Data-, tech-, and AI-driven enterprise'],
      'zh-CN': ['由数据、技术和人工智能驱动的企业'],
      ja: ['データ、テクノロジー、AIによって運営される企業'],
      ko: ['데이터, 기술, AI로 운영되는 기업'],
      de: ['Daten-, technologie- und KI-gestütztes Unternehmen'],
      fr: ['Entreprise pilotée par la donnée, la technologie et l’IA'],
      es: ['Empresa impulsada por datos, tecnología e IA']
    }
  },
  {
    id: 'concept-ssot',
    sourceVi: 'Nguồn dữ liệu duy nhất',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Data architecture standard',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_B_ENGLISH_WITH_EXPLANATION',
    allowedTranslations: {
      en: ['Single Source of Truth', 'Single Source of Truth (SSOT)'],
      'zh-CN': ['单一可信数据源 (Single Source of Truth)', '单一事实源'],
      ja: ['単一の情報源 (Single Source of Truth)'],
      ko: ['단일 진실 공급원 (Single Source of Truth)'],
      de: ['Single Source of Truth (zentrale Datenbasis)'],
      fr: ['Source unique de vérité (Single Source of Truth)'],
      es: ['Fuente única de verdad (Single Source of Truth)']
    }
  },
  {
    id: 'concept-data-space',
    sourceVi: 'Không gian dữ liệu',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Isolated data partitioning and workspace boundaries',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'DATA_GOVERNANCE_HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Data Space', 'Data Spaces'],
      'zh-CN': ['数据空间'],
      ja: ['データスペース'],
      ko: ['데이터 스페이스'],
      de: ['Datenraum'],
      fr: ['Espace de données'],
      es: ['Espacio de datos']
    }
  },

  // --- ACCESS, WORKFLOW & GOVERNANCE ---
  {
    id: 'concept-rbac-permissions',
    sourceVi: 'Phân quyền',
    category: 'SECURITY_GOVERNANCE',
    context: 'Access control and role assignment',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'SECURITY_HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Access Control', 'Permissions', 'Role-Based Access Control (RBAC)'],
      'zh-CN': ['权限管控', '角色权限分配'],
      ja: ['アクセス制御', '権限管理'],
      ko: ['접근 제어', '권한 관리'],
      de: ['Zugriffsberechtigung', 'Berechtigungssteuerung'],
      fr: ['Contrôle d’accès', 'Gestion des habilitations'],
      es: ['Control de acceso', 'Gestión de permisos']
    }
  },
  {
    id: 'concept-approval',
    sourceVi: 'Phê duyệt',
    category: 'PROCESS_WORKFLOW',
    context: 'Governance sign-off and validation',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Approval', 'Approval Workflow'],
      'zh-CN': ['审批'],
      ja: ['承認'],
      ko: ['승인'],
      de: ['Freigabe', 'Genehmigung'],
      fr: ['Approbation', 'Validation'],
      es: ['Aprobación']
    }
  },
  {
    id: 'concept-approval-flow',
    sourceVi: 'Quy trình phê duyệt',
    category: 'PROCESS_WORKFLOW',
    context: 'Multi-step sign-off process',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Approval Flow', 'Approval Workflow'],
      'zh-CN': ['审批流程'],
      ja: ['承認ワークフロー'],
      ko: ['승인 워크플로우'],
      de: ['Genehmigungsworkflow'],
      fr: ['Flux d’approbation'],
      es: ['Flujo de aprobación']
    }
  },
  {
    id: 'concept-workflow-process',
    sourceVi: 'Quy trình',
    category: 'PROCESS_WORKFLOW',
    context: 'Business process / SOP operational sequence',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Process', 'Workflow', 'Operating Procedure'],
      'zh-CN': ['业务流程', '流程'],
      ja: ['プロセス', '業務フロー'],
      ko: ['프로세스', '워크플로우'],
      de: ['Prozess', 'Ablauf'],
      fr: ['Processus', 'Procédure'],
      es: ['Proceso', 'Procedimiento']
    }
  },
  {
    id: 'concept-bottleneck',
    sourceVi: 'Điểm nghẽn',
    category: 'PROCESS_WORKFLOW',
    context: 'Operational blockage or pipeline constraint',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Bottleneck', 'Operational Bottleneck'],
      'zh-CN': ['瓶颈环节', '瓶颈'],
      ja: ['ボトルネック', '業務停滞ポイント'],
      ko: ['병목 현상', '보틀넥'],
      de: ['Engpass', 'Prozessengpass'],
      fr: ['Goulot d’étranglement'],
      es: ['Cuello de botella']
    }
  },
  {
    id: 'concept-reconciliation',
    sourceVi: 'Đối soát',
    category: 'PROCESS_WORKFLOW',
    context: 'Financial or operational reconciliation between sources',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'FINANCIAL_HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Reconciliation', 'Cross-Verification'],
      'zh-CN': ['对账', '核对'],
      ja: ['照合', 'データ突合'],
      ko: ['대사', '정산 대조'],
      de: ['Abstimmung', 'Finanzabgleich'],
      fr: ['Rapprochement', 'Réconciliation'],
      es: ['Conciliación']
    }
  },
  {
    id: 'concept-handover',
    sourceVi: 'Chuyển giao',
    category: 'PROCESS_WORKFLOW',
    context: 'Knowledge / technology transfer and project handover',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Handover', 'Technology Transfer', 'Transition'],
      'zh-CN': ['移交', '交付'],
      ja: ['引き継ぎ', '技術移転'],
      ko: ['이관', '인수인계'],
      de: ['Übergabe', 'Wissenstransfer'],
      fr: ['Passation', 'Transfert de compétences'],
      es: ['Traspaso', 'Transferencia']
    }
  },
  {
    id: 'concept-deployment',
    sourceVi: 'Triển khai',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Solution rollout and implementation',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Deployment', 'Implementation', 'Rollout'],
      'zh-CN': ['部署', '落地实施'],
      ja: ['導入', '展開', '実装'],
      ko: ['도입', '배포', '구축'],
      de: ['Bereitstellung', 'Implementierung'],
      fr: ['Déploiement', 'Mise en œuvre'],
      es: ['Despliegue', 'Implementación']
    }
  },
  {
    id: 'concept-data-governance',
    sourceVi: 'Quản trị dữ liệu',
    category: 'SECURITY_GOVERNANCE',
    context: 'Data ownership, lineage, and compliance',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'DATA_GOVERNANCE_HIGH',
    terminologyGroup: 'GROUP_B_ENGLISH_WITH_EXPLANATION',
    allowedTranslations: {
      en: ['Data Governance'],
      'zh-CN': ['数据治理'],
      ja: ['データガバナンス'],
      ko: ['데이터 거버넌스'],
      de: ['Data Governance', 'Daten-Governance'],
      fr: ['Gouvernance des données'],
      es: ['Gobernanza de datos']
    }
  },
  {
    id: 'concept-security',
    sourceVi: 'Bảo mật',
    category: 'SECURITY_GOVERNANCE',
    context: 'System, network, and data protection',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'SECURITY_HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Security', 'Information Security'],
      'zh-CN': ['信息安全', '安全保障'],
      ja: ['セキュリティ', '情報セキュリティ'],
      ko: ['보안', '정보보호'],
      de: ['Sicherheit', 'Informationssicherheit'],
      fr: ['Sécurité', 'Sécurité des données'],
      es: ['Seguridad', 'Seguridad de la información']
    }
  },
  {
    id: 'concept-audit-log',
    sourceVi: 'Nhật ký kiểm toán',
    category: 'SECURITY_GOVERNANCE',
    context: 'Immutable activity tracking and audit trail',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'SECURITY_HIGH',
    terminologyGroup: 'GROUP_B_ENGLISH_WITH_EXPLANATION',
    allowedTranslations: {
      en: ['Audit Log', 'Audit Trail'],
      'zh-CN': ['审计日志', '审计追踪'],
      ja: ['監査ログ', '監査証跡'],
      ko: ['감사 로그', '감사 추적'],
      de: ['Audit-Protokoll', 'Audit Trail'],
      fr: ['Journal d’audit', 'Piste d’audit'],
      es: ['Registro de auditoría', 'Pista de auditoría']
    }
  },
  {
    id: 'concept-permission-scope',
    sourceVi: 'Phạm vi quyền',
    category: 'SECURITY_GOVERNANCE',
    context: 'Boundary of user and service account privileges',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'SECURITY_HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Permission Scope', 'Access Scope'],
      'zh-CN': ['权限范围'],
      ja: ['権限スコープ', 'アクセス権限の範囲'],
      ko: ['권한 범위'],
      de: ['Berechtigungsumfang', 'Zugriffsbereich'],
      fr: ['Périmètre des droits', 'Étendue des habilitations'],
      es: ['Alcance de permisos', 'Ámbito de acceso']
    }
  },

  // --- CONTEXT-SENSITIVE: SOURCE ---
  {
    id: 'concept-data-source',
    sourceVi: 'Nguồn dữ liệu',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Technical origin of data ingested into the system',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'DATA_GOVERNANCE_HIGH',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Data Source', 'Data Origin'],
      'zh-CN': ['数据源'],
      ja: ['データソース', 'データ発信元'],
      ko: ['데이터 소스'],
      de: ['Datenquelle'],
      fr: ['Source de données'],
      es: ['Fuente de datos']
    }
  },
  {
    id: 'concept-lead-source',
    sourceVi: 'Nguồn khách hàng tiềm năng',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Commercial acquisition channel of marketing/sales leads',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['Lead Source', 'Acquisition Channel'],
      'zh-CN': ['线索来源', '客资渠道'],
      ja: ['リード獲得経路', '商談ソース'],
      ko: ['리드 유입 경로'],
      de: ['Lead-Quelle', 'Akquisekanal'],
      fr: ['Source de prospect'],
      es: ['Origen del prospecto']
    }
  },

  // --- DISCLAIMERS & BOUNDARIES (STRICT PRESERVATION) ---
  {
    id: 'disclaimer-demo-data',
    sourceVi: 'Dữ liệu minh họa',
    category: 'DISCLAIMER',
    context: 'Explicit disclaimer that displayed numbers are illustrative only',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'LEGAL_HIGH',
    allowedTranslations: {
      en: ['Illustrative Data', 'Sample Data for Demonstration Only'],
      'zh-CN': ['示例数据（仅供演示参考）', '演示数据'],
      ja: ['デモ用データ（例示目的のみ）'],
      ko: ['예시 데이터 (참고용)'],
      de: ['Illustrative Daten (nur zur Veranschaulichung)'],
      fr: ['Données indicatives (à titre d’illustration uniquement)'],
      es: ['Datos ilustrativos (solo con fines demostrativos)']
    },
    forbiddenTranslations: {
      en: ['Live Data', 'Official Data', 'Actual Production Numbers']
    }
  },
  {
    id: 'disclaimer-demo-scenario',
    sourceVi: 'Kịch bản minh họa',
    category: 'DISCLAIMER',
    context: 'Simulated case study or mock flow',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'LEGAL_HIGH',
    allowedTranslations: {
      en: ['Illustrative Scenario', 'Demonstration Scenario'],
      'zh-CN': ['演示场景（示例）'],
      ja: ['例示シナリオ'],
      ko: ['예시 시나리오'],
      de: ['Illustratives Szenario'],
      fr: ['Scénario d’illustration'],
      es: ['Escenario ilustrativo']
    }
  },
  {
    id: 'disclaimer-simulated-scenario',
    sourceVi: 'Kịch bản mô phỏng',
    category: 'DISCLAIMER',
    context: 'Modeled scenario, not real production log',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'LEGAL_HIGH',
    allowedTranslations: {
      en: ['Simulated Scenario', 'Modeled Scenario'],
      'zh-CN': ['模拟场景'],
      ja: ['シミュレーション・シナリオ'],
      ko: ['시뮬레이션 시나리오'],
      de: ['Simuliertes Szenario'],
      fr: ['Scénario simulé'],
      es: ['Escenario simulado']
    }
  },
  {
    id: 'disclaimer-ref-target',
    sourceVi: 'Mục tiêu tham khảo',
    category: 'DISCLAIMER',
    context: 'Non-guaranteed benchmark or reference target',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'FINANCIAL_HIGH',
    allowedTranslations: {
      en: ['Reference Target', 'Indicative Benchmark'],
      'zh-CN': ['参考目标（非绝对指标）', '参考基准'],
      ja: ['参考目標値'],
      ko: ['참고용 목표치'],
      de: ['Richtwert (Referenzziel)'],
      fr: ['Cible indicative', 'Objectif de référence'],
      es: ['Objetivo de referencia']
    },
    forbiddenTranslations: {
      en: ['Guaranteed Target', 'Guaranteed Output', 'Committed KPI']
    }
  },
  {
    id: 'disclaimer-draft',
    sourceVi: 'Bản dự thảo',
    category: 'DISCLAIMER',
    context: 'Unapproved or work-in-progress content',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'LEGAL_HIGH',
    allowedTranslations: {
      en: ['Draft Version', 'Draft'],
      'zh-CN': ['草案版本', '草案'],
      ja: ['ドラフト版', '下書き'],
      ko: ['초안 버전'],
      de: ['Entwurfsfassung'],
      fr: ['Version préliminaire', 'Projet'],
      es: ['Borrador', 'Versión preliminar']
    },
    forbiddenTranslations: {
      en: ['Final Version', 'Official Release']
    }
  },
  {
    id: 'disclaimer-unreleased',
    sourceVi: 'Chưa phát hành',
    category: 'DISCLAIMER',
    context: 'Pre-launch or planned feature/locale',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    allowedTranslations: {
      en: ['Unreleased', 'Coming Soon'],
      'zh-CN': ['尚未发布', '即将推出'],
      ja: ['未リリース', '近日公開'],
      ko: ['미출시', '공개 예정'],
      de: ['Noch nicht veröffentlicht', 'Demnächst verfügbar'],
      fr: ['Non publié', 'Bientôt disponible'],
      es: ['No publicado', 'Próximamente']
    }
  },
  {
    id: 'disclaimer-phased-pilot',
    sourceVi: 'Pilot theo giai đoạn',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Iterative, staged deployment model',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    allowedTranslations: {
      en: ['Phased Pilot', 'Staged Pilot Deployment'],
      'zh-CN': ['分阶段试点实施'],
      ja: ['段階的パイロット運用'],
      ko: ['단계별 파일럿 운영'],
      de: ['Phasenweiser Pilotbetrieb'],
      fr: ['Déploiement pilote par étapes'],
      es: ['Piloto por etapas']
    }
  },

  // --- AI ARCHITECTURE & AGENTS ---
  {
    id: 'concept-ai-assistant',
    sourceVi: 'Trợ lý AI',
    category: 'AI_ARCHITECTURE',
    context: 'Task-specific AI assistant',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_C_LOCALIZABLE',
    allowedTranslations: {
      en: ['AI Assistant'],
      'zh-CN': ['AI助手'],
      ja: ['AIアシスタント'],
      ko: ['AI 어시스턴트'],
      de: ['KI-Assistent'],
      fr: ['Assistant IA'],
      es: ['Asistente de IA']
    }
  },
  {
    id: 'concept-ai-copilot',
    sourceVi: 'AI Copilot',
    category: 'AI_ARCHITECTURE',
    context: 'Interactive copilot assisting enterprise users',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_A_VERBATIM',
    allowedTranslations: {
      en: ['AI Copilot'],
      'zh-CN': ['AI Copilot', 'AI副驾驶'],
      ja: ['AI Copilot'],
      ko: ['AI 코파일럿 (AI Copilot)'],
      de: ['KI-Copilot'],
      fr: ['Copilote IA'],
      es: ['Copiloto de IA']
    }
  },
  {
    id: 'concept-ai-agent-network',
    sourceVi: 'Mạng lưới AI Agent',
    category: 'AI_ARCHITECTURE',
    context: 'Multi-agent interconnected system collaborating on workflows',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_B_ENGLISH_WITH_EXPLANATION',
    allowedTranslations: {
      en: ['AI Agent Network', 'Multi-Agent Network'],
      'zh-CN': ['AI Agent协同网络', 'AI代理网络'],
      ja: ['AIエージェント・ネットワーク'],
      ko: ['AI 에이전트 네트워크'],
      de: ['KI-Agentennetzwerk'],
      fr: ['Réseau d’agents IA'],
      es: ['Red de agentes de IA']
    }
  },
  {
    id: 'concept-customer-360',
    sourceVi: 'Customer 360',
    category: 'ENTERPRISE_SYSTEM',
    context: 'Comprehensive unified customer profile view',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_B_ENGLISH_WITH_EXPLANATION',
    allowedTranslations: {
      en: ['Customer 360', '360-Degree Customer View'],
      'zh-CN': ['客户全景画像 (Customer 360)', 'Customer 360'],
      ja: ['顧客360度ビュー (Customer 360)'],
      ko: ['고객 360도 통합 뷰 (Customer 360)'],
      de: ['Customer 360 (360-Grad-Kundenansicht)'],
      fr: ['Vue Client 360 (Customer 360)'],
      es: ['Visión 360 del Cliente (Customer 360)']
    }
  },
  {
    id: 'concept-pipeline',
    sourceVi: 'Pipeline',
    category: 'PROCESS_WORKFLOW',
    context: 'Sales / deal stage progression or data pipeline',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_A_VERBATIM',
    allowedTranslations: {
      en: ['Pipeline'],
      'zh-CN': ['Pipeline', '业务漏斗/管线'],
      ja: ['パイプライン (Pipeline)'],
      ko: ['파이프라인 (Pipeline)'],
      de: ['Pipeline'],
      fr: ['Pipeline'],
      es: ['Pipeline']
    }
  },
  {
    id: 'concept-workflow',
    sourceVi: 'Workflow',
    category: 'PROCESS_WORKFLOW',
    context: 'Automated procedural flow',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'NORMAL',
    terminologyGroup: 'GROUP_A_VERBATIM',
    allowedTranslations: {
      en: ['Workflow'],
      'zh-CN': ['工作流 (Workflow)'],
      ja: ['ワークフロー (Workflow)'],
      ko: ['워크플로우 (Workflow)'],
      de: ['Workflow', 'Arbeitsablauf'],
      fr: ['Flux de travail (Workflow)'],
      es: ['Flujo de trabajo (Workflow)']
    }
  },
  {
    id: 'concept-automation',
    sourceVi: 'Automation',
    category: 'PROCESS_WORKFLOW',
    context: 'Systemic automated execution',
    protected: false,
    doNotTranslate: false,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_A_VERBATIM',
    allowedTranslations: {
      en: ['Automation', 'Intelligent Automation'],
      'zh-CN': ['自动化'],
      ja: ['自動化', 'オートメーション'],
      ko: ['자동화'],
      de: ['Automatisierung'],
      fr: ['Automatisation'],
      es: ['Automatización']
    }
  },
  {
    id: 'concept-rag',
    sourceVi: 'RAG',
    category: 'TECHNICAL',
    context: 'Retrieval-Augmented Generation',
    protected: true,
    doNotTranslate: true,
    riskLevel: 'HIGH',
    terminologyGroup: 'GROUP_A_VERBATIM',
    allowedTranslations: {
      en: ['RAG', 'Retrieval-Augmented Generation (RAG)'],
      'zh-CN': ['RAG (检索增强生成)', 'RAG'],
      ja: ['RAG (検索拡張生成)', 'RAG'],
      ko: ['RAG (검색 증강 생성)', 'RAG'],
      de: ['RAG'],
      fr: ['RAG'],
      es: ['RAG']
    }
  },
  {
    id: 'concept-rbac',
    sourceVi: 'RBAC',
    category: 'SECURITY_GOVERNANCE',
    context: 'Role-Based Access Control',
    protected: true,
    doNotTranslate: true,
    riskLevel: 'SECURITY_HIGH',
    terminologyGroup: 'GROUP_A_VERBATIM',
    allowedTranslations: {
      en: ['RBAC', 'Role-Based Access Control (RBAC)'],
      'zh-CN': ['RBAC (基于角色的访问控制)', 'RBAC'],
      ja: ['RBAC (ロールベースアクセス制御)', 'RBAC'],
      ko: ['RBAC (역할 기반 접근 제어)', 'RBAC'],
      de: ['RBAC'],
      fr: ['RBAC'],
      es: ['RBAC']
    }
  },
  {
    id: 'concept-human-in-the-loop',
    sourceVi: 'Human-in-the-Loop',
    category: 'SECURITY_GOVERNANCE',
    context: 'Human governance & review checkpoint before final action',
    protected: true,
    doNotTranslate: true,
    riskLevel: 'LEGAL_HIGH',
    terminologyGroup: 'GROUP_A_VERBATIM',
    allowedTranslations: {
      en: ['Human-in-the-Loop', 'Human-in-the-Loop (HITL)'],
      'zh-CN': ['人机协同审核 (Human-in-the-Loop)', 'Human-in-the-Loop'],
      ja: ['Human-in-the-Loop (人間による介入・承認)', 'Human-in-the-Loop'],
      ko: ['Human-in-the-Loop (인간 참여형 검증)', 'Human-in-the-Loop'],
      de: ['Human-in-the-Loop'],
      fr: ['Human-in-the-Loop (contrôle humain)'],
      es: ['Human-in-the-Loop (supervisión humana)']
    }
  }
];

/**
 * Transforms raw glossary definitions into strictly governed GlossaryEntry instances.
 * RULE: AI-generated translations are NEVER automatically approved.
 * Only confirmed immutable protected brand names are initialized with status 'APPROVED'.
 * All other 35 enterprise concepts and candidate translations are initialized with status 'NEEDS_REVIEW'.
 */
export const MASTER_GLOSSARY: GlossaryEntry[] = RAW_MASTER_GLOSSARY.map((raw) => {
  const isConfirmedBrand = raw.category === 'BRAND' && raw.protected && raw.doNotTranslate;
  const status: TranslationStatus = isConfirmedBrand ? 'APPROVED' : 'NEEDS_REVIEW';

  const candidateTranslations: Partial<Record<LocaleCode, GlossaryTargetItem[]>> = {};

  for (const [locale, items] of Object.entries(raw.allowedTranslations)) {
    if (items) {
      candidateTranslations[locale as LocaleCode] = (items as string[]).map((text) => ({
        text,
        status: isConfirmedBrand ? 'APPROVED' : 'NEEDS_REVIEW',
        reviewedBy: isConfirmedBrand ? 'VMC_LEGAL_TRADEMARK' : undefined,
        reviewedAt: isConfirmedBrand ? '2026-09-01T00:00:00.000Z' : undefined,
        checklistPassed: isConfirmedBrand
      }));
    }
  }

  return {
    ...raw,
    status,
    candidateTranslations,
    allowedTranslations: raw.allowedTranslations
  };
});

/**
 * Glossary Governance Statistics
 */
export interface GlossaryGovernanceStats {
  totalEntries: number;
  approvedEntries: number;
  needsReviewEntries: number;
  aiTranslatedEntries: number;
  publishedEntries: number;
}

export const getGlossaryStats = (): GlossaryGovernanceStats => {
  let approved = 0;
  let needsReview = 0;
  let aiTranslated = 0;
  let published = 0;

  for (const entry of MASTER_GLOSSARY) {
    if (entry.status === 'APPROVED') approved++;
    else if (entry.status === 'NEEDS_REVIEW') needsReview++;
    else if (entry.status === 'AI_TRANSLATED') aiTranslated++;
    else if (entry.status === 'PUBLISHED') published++;
  }

  return {
    totalEntries: MASTER_GLOSSARY.length,
    approvedEntries: approved,
    needsReviewEntries: needsReview,
    aiTranslatedEntries: aiTranslated,
    publishedEntries: published
  };
};

/**
 * Quality Gate: Approves a glossary candidate translation ONLY when all 10 semantic criteria pass.
 */
export const approveGlossaryCandidate = (
  entryId: string,
  locale: LocaleCode,
  targetText: string,
  reviewerName: string,
  checklist: SemanticReviewChecklist
): { success: boolean; error?: string } => {
  const entry = GLOSSARY_MAP.get(entryId);
  if (!entry) {
    return { success: false, error: `Glossary entry "${entryId}" not found.` };
  }

  // 10-point Quality Gate Check
  const { allPassed, failedItems } = evaluateSemanticChecklist(checklist);
  if (!allPassed) {
    const failedStr = failedItems.map((f) => `[${f.id}] ${f.label}`).join(', ');
    return {
      success: false,
      error: `Cannot approve glossary candidate translation. Failed semantic checks: ${failedStr}.`
    };
  }

  const targetList = entry.candidateTranslations[locale];
  const targetItem = targetList?.find((t) => t.text === targetText);
  if (!targetItem) {
    return {
      success: false,
      error: `Candidate translation "${targetText}" for locale "${locale}" not found in entry "${entryId}".`
    };
  }

  targetItem.status = 'APPROVED';
  targetItem.reviewedBy = reviewerName;
  targetItem.reviewedAt = new Date().toISOString();
  targetItem.checklistPassed = true;

  // If all candidate translations for this entry are approved, entry status can become APPROVED
  const allCandidatesApproved = Object.values(entry.candidateTranslations)
    .flat()
    .every((item) => item?.status === 'APPROVED');
  if (allCandidatesApproved) {
    entry.status = 'APPROVED';
  }

  return { success: true };
};

/**
 * Publication Gate: Publishes a glossary candidate translation ONLY if it has been APPROVED.
 * Direct transition from AI_TRANSLATED or NEEDS_REVIEW to PUBLISHED is strictly BLOCKED.
 */
export const publishGlossaryCandidate = (
  entryId: string,
  locale: LocaleCode,
  targetText: string
): { success: boolean; error?: string } => {
  const entry = GLOSSARY_MAP.get(entryId);
  if (!entry) return { success: false, error: `Glossary entry "${entryId}" not found.` };
  const targetItem = entry.candidateTranslations[locale]?.find((t) => t.text === targetText);
  if (!targetItem) {
    return { success: false, error: `Target candidate translation not found for locale "${locale}".` };
  }

  // Publication Gate: only APPROVED candidates can be published!
  if (targetItem.status !== 'APPROVED') {
    return {
      success: false,
      error: `Cannot publish candidate translation with status "${targetItem.status}". Must be APPROVED first.`
    };
  }

  targetItem.status = 'PUBLISHED';
  return { success: true };
};

/**
 * Fast lookup map by term ID
 */
export const GLOSSARY_MAP: Map<string, GlossaryEntry> = new Map(
  MASTER_GLOSSARY.map((entry) => [entry.id, entry])
);

/**
 * Fast lookup helper for protected brands and terms
 */
export const findGlossaryViolation = (
  text: string,
  locale: LocaleCode
): { violated: boolean; reason?: string } => {
  // 1. Check for prohibited pseudo-brands
  for (const fakeBrand of PROHIBITED_PSEUDO_BRANDS) {
    if (text.includes(fakeBrand)) {
      return {
        violated: true,
        reason: `Text contains prohibited unauthorized pseudo-brand: "${fakeBrand}". Must use canonical "VMC Group", "VMC", or "AI ENTERPRISE".`
      };
    }
  }

  // 2. Check for forbidden translations in glossary entries
  for (const entry of MASTER_GLOSSARY) {
    const forbidden = entry.forbiddenTranslations?.[locale];
    if (forbidden) {
      for (const banned of forbidden) {
        if (text.toLowerCase().includes(banned.toLowerCase())) {
          return {
            violated: true,
            reason: `Text contains prohibited translation "${banned}" for concept "${entry.sourceVi}" (${entry.id}).`
          };
        }
      }
    }
  }

  return { violated: false };
};
