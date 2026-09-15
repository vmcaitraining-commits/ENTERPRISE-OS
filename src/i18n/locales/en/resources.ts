/**
 * Translation Target: English (en)
 * Namespace: resources
 * 
 * Governance Status: DRAFT / NEEDS_REVIEW
 * Strict Constraints:
 * - Brand names preserved verbatim: VMC Group, AI ENTERPRISE
 * - Technical Group A acronyms preserved: NDA, CRM, SOP, SLA, CSAT, API, Webhook, RESTful, LLM, RBAC, Single Source of Truth, Human-in-the-Loop
 * - Status badges: [Reference Sample], [In Progress], [Unreleased], [Pending Documentation]
 * - Draft disclaimers preserved on legal sections
 * - Target audience correctly translated without misattributing to VMC size
 * - Exact key parity with vi/resources.ts
 */
export default {
  // Hero & Header
  badge: 'RESOURCES & OPERATIONAL KNOWLEDGE',
  title: 'Technical Documentation, SOP Standards & Frequently Asked Questions',
  subtitle: 'Reference architecture blueprints, digital SOP frameworks, and concrete answers regarding security, pricing, and AI ENTERPRISE deployment.',

  // Section 1: Documents & Standards
  sectionDocBadge: 'TECHNICAL DOCUMENTATION & WORKFLOWS',
  sectionDocTitle: 'Sample Documents & Architecture Standards',
  sectionDocTransparency: 'Transparent operational status',
  btnPreview: 'Preview sample content',
  btnClose: 'Close',
  previewAriaClose: 'Close preview modal',
  previewDisclaimer: 'Illustrative reference sample — No direct download file provided',

  // Categories
  catArchitecture: 'System Architecture',
  catSop: 'Digital SOP Workflows',
  catSecurity: 'Security & Governance',

  // Status Badges
  statusSample: '[Reference Sample]',
  statusInProgress: '[In Progress]',
  statusUnreleased: '[Unreleased]',
  statusPendingDoc: '[Pending Documentation]',

  // Doc Types
  docTypeArch: 'Architecture Framework',
  docTypeSop: 'SOP Documentation',
  docTypeStandard: 'Operating Standard',
  docTypeApi: 'API Specification',

  // Documents
  doc1Title: 'Master Architecture Blueprint: AI ENTERPRISE Reference Model',
  doc1FormatNote: 'Reference blueprint (Direct download file not provided)',
  doc1Desc: 'Inter-module data flow diagrams, logical tenant isolation mechanisms, and security boundaries for the AI Copilot network.',
  doc1Preview: `[ARCHITECTURE REFERENCE SAMPLE — NOT AN OFFICIAL DOWNLOADABLE FILE]
1. Architecture Overview: 11 Core Modules synchronized on a Single Source of Truth.
2. Infrastructure Layer: Multi-tenant data space isolation, encrypted at rest and in transit.
3. Intelligence Layer: 9 AI Copilots strictly bound by RBAC account permissions, with 100% audit logging of queries.
* Notice: Official architecture documentation is provided exclusively to clients upon contract execution.`,

  doc2Title: 'Sample Digitized Standard Operating Procedure (SOP) Framework',
  doc2FormatNote: 'Reference template framework',
  doc2Desc: 'Core process templates for Sales, Marketing, Customer Service, Human Resources, Finance, and Executive Management.',
  doc2Preview: `[SAMPLE SOP WORKFLOW — CUSTOMIZED PER ENTERPRISE]
- Sales Module: Lead Ingestion -> Scoring -> Automated Routing -> Standard Quote -> Contract.
- Marketing Module: Channel -> Conversion Funnel -> Automated Segmentation Tags -> CRM Sync.
- Customer Service Module: Omnichannel -> Automated Ticket -> SLA Dispatch -> CSAT Evaluation.
- Finance Module: Actual Cash Flow -> Invoice Reconciliation -> Budget Alert.
* Notice: Actual SOP workflows are tailored based on current-state survey findings for each organization.`,

  doc3Title: 'Security Standards, RBAC Permissions & AI Responsibility Boundaries',
  doc3FormatNote: 'Internal standardization document',
  doc3Desc: 'Hierarchical account privilege rules, Human-in-the-Loop approval gates, and internal data protection standards.',
  doc3Preview: `[INTERNAL DOCUMENTATION IN PROGRESS]
- Principle 1: Data is processed according to access permissions and policies of the model or provider configured for the system.
- Principle 2: Human approval (Human-in-the-Loop) is a prerequisite for financial transactions, data deletion, and bulk email dispatch.
- Principle 3: Immutable Audit Logs record user identity, timestamp, and IP address.
* Status: Finalizing specialized security governance annexes.`,

  doc4Title: 'API & Webhook Integration Technical Specification (RESTful)',
  doc4FormatNote: 'Technical draft',
  doc4Desc: 'Technical guide for connecting existing enterprise systems with AI ENTERPRISE.',
  doc4Preview: `[UNRELEASED PUBLIC DOCUMENTATION]
- Standardized API and Webhook specifications aligned with AI ENTERPRISE release versions.
- Enterprises requiring custom integrations receive dedicated technical specifications during technical contract execution.`,

  // Section 2: FAQ
  sectionFaqBadge: 'FREQUENTLY ASKED QUESTIONS',
  sectionFaqTitle: 'Categorized Frequently Asked Questions (FAQ)',
  sectionFaqDesc: 'Questions structured around primary executive considerations.',
  faqTabImplementation: 'Implementation & Operations',
  faqTabPricing: 'Pricing & Investment',
  faqTabSecurity: 'Data & Security',

  // FAQ Items - Implementation
  faqImp1Q: 'Who is VMC Group and how is it positioned?',
  faqImp1A: 'VMC Group designs and builds enterprise operating systems powered by data, technology, and AI. We are not a simple website development agency or a vendor selling standalone chatbots. We act as enterprise architects designing and deploying a unified operating system for organizations.',
  faqImp2Q: 'How does AI ENTERPRISE differ from purchasing disparate software tools?',
  faqImp2A: 'Instead of purchasing separate CRM, HR, and accounting tools and struggling with costly, fragmented integrations, AI ENTERPRISE provides a unified core architecture: one single database, one permission standard, one coherent workflow engine, and cross-functional AI assistants.',
  faqImp3Q: 'Which organizations are best suited for VMC Group solutions?',
  faqImp3A: 'Growing medium-sized enterprises (approximately 20 – 500 personnel) with established business operations that face operational friction across people, data, processes, and cross-departmental coordination, seeking standardized operations and practical technology adoption.',
  faqImp4Q: 'How long does a typical deployment project take?',
  faqImp4A: 'Deployment timelines depend on departmental scope, existing data readiness, and workflow customization requirements. VMC Group follows a rigorous 6-phase roadmap, establishing milestone acceptance criteria following the current-state assessment.',

  // FAQ Items - Pricing
  faqPri1Q: 'How is AI ENTERPRISE pricing structured?',
  faqPri1A: 'There is no fixed one-size-fits-all rate card because AI ENTERPRISE is an enterprise solution tailored on a modular core architecture. Costs depend on organizational headcount, active functional modules, data volume, customization depth, and training scope. Organizations can request a consultation for an optimized solution design.',
  faqPri2Q: 'Are there hidden fees or recurring licensing surprises?',
  faqPri2A: 'All software licenses, cloud infrastructure hosting, and Large Language Model (LLM) API costs are transparently detailed in the formal solution proposal following the initial assessment. Clients retain full ownership and autonomy over their infrastructure decisions.',

  // FAQ Items - Security
  faqSec1Q: "What is VMC Group's AI deployment philosophy?",
  faqSec1A: 'VMC Group enforces strict governance: AI never acts autonomously without boundaries. AI operates within defined data boundaries, user roles, permission limits, human approval workflows, and immutable audit logs. AI serves as an operational capability multiplier for people, not a total replacement.',
  faqSec2Q: 'Is proprietary enterprise data kept secure?',
  faqSec2A: 'Clients maintain 100% ownership of their data. The architecture enforces isolated tenant data environments, encryption at rest and in transit, multi-tier access permissions, and immutable audit trails tracking all system activities.',
  faqSec3Q: 'How is enterprise data handled and protected when using AI capabilities?',
  faqSec3A: 'Data is processed strictly within the access permissions and privacy policies of the specific model or infrastructure provider configured for the system.',

  // Section 3: NDA & Data Policy
  sectionNdaTitle: 'Data Security Policy & NDA Commitment',
  draftBadge: 'Draft — subject to confirmation prior to official publication',
  ndaIntro: 'VMC Group respects confidentiality and adheres to enterprise data protection guidelines:',
  ndaItem1Title: 'Signed NDA:',
  ndaItem1Desc: 'Comprehensive protection of enterprise data, with no disclosure to unauthorized third parties.',
  ndaItem2Title: '100% Data Ownership:',
  ndaItem2Desc: 'Enterprises retain complete ownership of their databases and proprietary knowledge assets.',
  ndaItem3Title: 'Data Processing Scope:',
  ndaItem3Desc: 'Data is processed strictly within access boundaries and policies of configured models and providers.',
  ndaFooterNotice: 'Guideline principles. Formal legal NDA contracts are executed individually under each service agreement.',

  // Section 4: Operating Terms & Human Responsibility
  sectionTermsTitle: 'Operating Terms & Human Approval Responsibilities',
  termsContent: 'AI modules are deployed with explicit operational boundaries: AI assists in analyzing data and drafting tasks, while human supervisors retain ultimate approval authority over financial transactions, public communications, and personnel policies. Detailed service terms and legal liabilities are formalized within standard bilateral service contracts.',

  // Bottom CTA
  ctaTitle: 'Need in-depth discussion on security architecture or specific workflows?',
  ctaDesc: "VMC Group's architecture consulting team is prepared to assess your workflows and formulate a comprehensive architecture plan.",
  ctaButton: 'Request Solution Consultation'
};
