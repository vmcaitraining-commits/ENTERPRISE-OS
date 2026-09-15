/**
 * ENGLISH LOCALIZATION: aiEnterprise
 * VMC Group Multilingual Phase 4B2
 * Namespace: aiEnterprise
 * Status: DRAFT / AI_TRANSLATED / NEEDS_REVIEW
 * Style: Enterprise Architecture English (Restrained, Scientific, Executive-friendly)
 */

export default {
  hero: {
    badge: 'UNIFIED ENTERPRISE OPERATING SYSTEM',
    titlePart1: 'AI ENTERPRISE — Architecture of ',
    titleOneData: 'One Data Core',
    titleSeparator: ', ',
    titleManyRoles: 'Multiple Operational Roles',
    titlePart2: '.',
    description: 'Rather than maintaining fragmented standalone software stacks with disconnected records, AI ENTERPRISE structures enterprise operations around a Single Source of Truth — granting each department dedicated workspaces aligned strictly with authorized roles.',
    ctaConsultation: 'Request Architecture Consultation',
    ctaAssessment: 'Request AI Readiness Assessment',
    quickNav: 'Jump to:',
    anchorArchitecture: '#architecture (11 Modules)',
    anchorPrinciples: '#principles (6 Principles)',
    anchorSecurity: '#security (Security & RBAC)',
    diagramBadge: 'EXECUTION MODEL',
    diagramTitle: 'Access Control Architecture: One Data Core Serving 6 Specialized Perspectives',
    diagramDisclaimer: '* Illustrative Scenario & Sample Data',
    coreBadge: 'UNIFIED DATA CORE',
    coreTitle: 'Unified Enterprise Database',
    coreDescription: 'Centralizes core operational entities: Accounts, Orders, Contracts, Receipts, Tasks, and Interaction History.',
    coreStatusLabel: 'Connection Status:',
    coreStatusValue: 'Real-time synchronization',
    coreStorageLabel: 'Storage Model:',
    coreStorageValue: 'Tenant-partitioned with role-based access',
    corePrincipleLabel: 'Core Principle:',
    corePrincipleValue: 'Single Source of Truth',
    workspacePrefix: 'Workspace:',
    rbacBadge: 'Standard RBAC Controls',
    viewScopeTitle: 'Authorized View Scope:',
    actionScopeTitle: 'Permitted Action Scope:',
    copilotLabel: 'Assigned AI Copilot:',
    roles: [
      {
        id: 'ceo',
        title: 'Executive Leadership / CEO',
        shortTitle: 'CEO & Leadership',
        summary: 'Monitor enterprise health metrics continuously without waiting for consolidated end-of-month reporting cycles.',
        dataVisible: [
          'Company-wide OKR / KPI scorecards',
          'Cash flow inflows, outflows, and period forecasts (Illustrative Data)',
          'Sales revenue pipeline & contract milestones',
          'Audit log of critical enterprise transactions'
        ],
        actionsPermitted: [
          'Approve high-value strategic budgets and initiatives',
          'Authorize commercial pricing policies and commission schemes',
          'Manage master administrative credentials and role assignments',
          'Sign and execute strategic partnership agreements'
        ],
        aiCopilot: 'AI CEO Copilot — Morning executive briefing and cash flow variance detection.'
      },
      {
        id: 'sales',
        title: 'Commercial Director / Sales Lead',
        shortTitle: 'Commercial & Sales',
        summary: 'Oversee full prospect pipelines, interaction histories, and contract milestones linked directly to accounting records.',
        dataVisible: [
          'Customer 360 unified relationship records',
          'Multi-channel sales pipeline progression',
          'Quotation logs, active contracts, and executed orders',
          'Individual and departmental revenue performance reports'
        ],
        actionsPermitted: [
          'Generate quotations and issue approved standard contract templates',
          'Allocate incoming leads across sales representatives',
          'Register confirmed orders for accounting processing',
          'Submit custom discount requests for major accounts'
        ],
        aiCopilot: 'AI Sales Copilot — Lead qualification scoring, call transcription, and negotiation guidance.'
      },
      {
        id: 'marketing',
        title: 'Head of Marketing / Marketing Lead',
        shortTitle: 'Marketing',
        summary: 'Measure Customer Acquisition Cost (CAC) accurately through direct data linkage with sales conversion outcomes.',
        dataVisible: [
          'Lead attribution and expenditure by campaign',
          'Funnel stage conversion velocity and drop-off rates',
          'Website interaction telemetry and form submissions',
          'Attributed revenue realized across marketing channels'
        ],
        actionsPermitted: [
          'Initialize campaign parameters and allocate budgets',
          'Publish campaign landing pages and lead capture forms',
          'Configure automated lead nurturing workflows',
          'Export cross-channel performance analytics'
        ],
        aiCopilot: 'AI Marketing Copilot — Content drafting, SEO optimization, and audience persona clustering.'
      },
      {
        id: 'finance',
        title: 'Chief Financial Officer / Head of Accounting',
        shortTitle: 'Finance & Accounting',
        summary: 'Maintain precise cash flow governance; reconcile commercial contracts with verified banking receipts without lag.',
        dataVisible: [
          'Cash ledger balances and operating bank account status',
          'Accounts Receivable (AR) and Accounts Payable (AP) aging',
          'Executed commercial agreements awaiting invoicing',
          'Departmental expense submissions and budget allocations'
        ],
        actionsPermitted: [
          'Issue receipt vouchers, payment orders, and fiscal invoices',
          'Confirm and log payment reconciliation status',
          'Trigger automated overdue collection notifications',
          'Authorize disbursements within delegated approval thresholds'
        ],
        aiCopilot: 'AI Finance Copilot — Document reconciliation, overdue balance detection, and short-term cash flow modeling.'
      },
      {
        id: 'cskh',
        title: 'Customer Success Lead / Support Lead',
        shortTitle: 'Customer Success',
        summary: 'Access comprehensive purchase records, warranty terms, and sales commitments to resolve issues rapidly and accurately.',
        dataVisible: [
          'Complete purchase history and service warranties',
          'Support ticket queue status and SLA compliance thresholds',
          'Historical incident logs and technical support notes',
          'Customer satisfaction benchmarks (CSAT / NPS)'
        ],
        actionsPermitted: [
          'Triage, assign, and escalate technical support tickets',
          'Update complaint resolution milestones',
          'Trigger automated post-resolution feedback surveys',
          'Identify expansion, upsell, and renewal opportunities'
        ],
        aiCopilot: 'AI CSKH Copilot — Ticket urgency classification and standard response drafting.'
      },
      {
        id: 'hr',
        title: 'Human Resources Director / HR Lead',
        shortTitle: 'People & HR',
        summary: 'Centralize employee records, automate attendance verification, and align individual KPIs with business performance.',
        dataVisible: [
          'Personnel profiles, employment contracts, and title records',
          'Verified attendance, leave requests, and schedule logs',
          'Individual and departmental KPI performance scorecards',
          'Payroll allocations and talent acquisition plans'
        ],
        actionsPermitted: [
          'Approve leave applications and attendance adjustments',
          'Initiate recruitment workflows and evaluation cycles',
          'Generate automated payroll computations from verified inputs',
          'Maintain organizational hierarchy charts and reporting lines'
        ],
        aiCopilot: 'AI HR Copilot — Candidate profile screening, attendance consolidation, and internal policy memo drafting.'
      }
    ]
  },

  comparison: {
    badge: 'STRUCTURAL ENTERPRISE CHALLENGE',
    title: 'Core Distinction: Disconnected Applications vs. Unified Operating System',
    description: 'Many organizations assume digital transformation simply means acquiring additional SaaS tools. In practice, patching disconnected applications creates operational silos, increases hidden coordination overhead, and degrades response velocity.',
    beforeCardTitle: 'FRAGMENTED SOFTWARE STACK (SILOED APPS)',
    beforeCardBadge: 'PRE-TRANSFORMATION',
    beforeCardDesc: 'Enterprise operations divided across isolated applications: third-party CMS, detached CRM, separate accounting software, spreadsheet task lists, and unindexed chat channels...',
    beforePoint1Strong: 'Fragmented records:',
    beforePoint1Text: ' Each team maintains isolated files, hindering automated handoffs and introducing reconciliation errors.',
    beforePoint2Strong: 'Manual data re-entry:',
    beforePoint2Text: ' Staff re-type customer details across successive steps, causing workflow bottlenecks and record divergence.',
    beforePoint3Strong: 'Delayed reporting & poor auditability:',
    beforePoint3Text: ' Hand-compiled period reports introduce latency with limited operational traceability.',
    afterCardTitle: 'UNIFIED AI ENTERPRISE OPERATING SYSTEM',
    afterCardBadge: 'POST-TRANSFORMATION',
    afterCardDesc: 'Consolidates functional modules over a shared enterprise data foundation. Operational flows pass across boundaries governed by role-based permissions.',
    afterPoint1Strong: 'Unified data core:',
    afterPoint1Text: ' A standardized Single Source of Truth shared across accounts, contracts, and financial records.',
    afterPoint2Strong: 'Connected workflows:',
    afterPoint2Text: ' Records transition automatically across departments per established business rules.',
    afterPoint3Strong: 'Audit-ready visibility & role governance:',
    afterPoint3Text: ' Analytics reflect verified transactional activity with complete operation logs.',
    tableHeading: 'Operational Evaluation: 5 Key Comparison Dimensions',
    tableDisclaimer: '* Structural workflow comparison analysis',
    tableColBefore: 'Fragmented Application Model:',
    tableColAfter: 'Unified AI ENTERPRISE Model:',
    rows: [
      {
        dimension: 'Data Storage Architecture',
        beforeProblem: 'Data resides across disconnected tools (CRM in one tool, Accounting in another, tasks in spreadsheets, approvals in chat). Customer updates in one application fail to propagate, leaving remaining teams misinformed.',
        afterSolution: 'A Single Source of Truth architecture. All departments access and update a shared, standardized data repository; updates synchronize across authorized workflows with RBAC controls.',
        impactMetric: 'Centralized records, minimal fragmentation'
      },
      {
        dimension: 'Operational Hand-offs & Entry',
        beforeProblem: 'Employees manually re-key identical customer records across tools: web form entries into CRM, sales contracts into accounting ledgers, and transaction confirmations into team chats.',
        afterSolution: 'Data transitions automatically across standardized SOP workflows: Web form submission → CRM Lead record → Contract execution triggers accounting receivable → Customer onboarding initialized.',
        impactMetric: 'Significant reduction in manual re-entry'
      },
      {
        dimension: 'Reporting Accuracy & Reconciliation',
        beforeProblem: 'Discrepancies frequently emerge across departmental reports: sales revenue pipeline totals fail to match confirmed cash receipts, requiring substantial manual reconciliation time.',
        afterSolution: 'Contract status and cash receipts share connected transactional records. Revenue reporting and receivables reconciliation draw from an identical database, minimizing reporting variance.',
        impactMetric: 'Minimized reconciliation discrepancies'
      },
      {
        dimension: 'Executive Decision Velocity',
        beforeProblem: 'Leadership depends on manual reporting consolidations assembled across departmental tiers at period close. Detecting cost inflation or revenue decline incurs unavoidable operational latency.',
        afterSolution: 'Executive BI dashboards populate directly from live system transactions. Leadership observes business metrics, project milestones, and liquidity trends directly on the control interface.',
        impactMetric: 'Reports powered by live system data'
      },
      {
        dimension: 'AI Governance & Data Security',
        beforeProblem: 'Employees paste confidential customer details or quotes into public AI services. Organizations lack visibility into data boundaries, retention policies, or audit traceability.',
        afterSolution: 'AI Copilots operate strictly within configured organization data boundaries. Operations adhere to Human-in-the-loop oversight with system audit logging for complete traceability.',
        impactMetric: 'Explicit permissions and audit history'
      }
    ]
  },

  transactionFlow: {
    badge: 'CONNECTED DATA TRANSACTION FLOW',
    disclaimer: 'Illustrative Scenario & Sample Data',
    title: 'An End-to-End Enterprise Lifecycle: Marketing → Sales → Finance → CSKH → BI',
    description: 'Observe how a representative enterprise engagement transitions automatically across 5 functional scopes governed by standard business protocols.',
    stagePrefix: 'STAGE',
    flowNature: 'Continuous workflow governed by business rules',
    actionTitle: 'Operational Execution at this Stage:',
    dataGeneratedTitle: 'Generated Records & Audit Evidence:',
    aiAutomationTitle: 'AI Assistance & Workflow Automation:',
    handoffTitle: 'Automated Stage Handoff:',
    steps: [
      {
        stepNumber: 1,
        stageName: 'Lead Capture & Ingestion',
        scopeCode: 'Scope C',
        scopeTitle: 'Multi-Channel Marketing',
        role: 'Prospective Client & Marketing Lead',
        userAction: 'Client completes an inquiry form on the corporate website (Illustrative engagement reference: 120,000,000 VND).',
        dataGenerated: [
          'Lead Identifier: #LD-8492 (Illustrative Data)',
          'Attribution: Configured marketing channel',
          'Primary Requirement: Workflow optimization & data integration',
          'Organization Scale: 45 personnel'
        ],
        aiAutomationRole: 'AI Marketing assists with initial lead scoring (Sample: 94/100), enrichment, and preliminary requirement tagging per configuration.',
        handoffNext: 'Automatically instantiates a CRM account record and routes it into the sales assignment queue according to distribution rules.'
      },
      {
        stepNumber: 2,
        stageName: 'Consultation & Contract Execution',
        scopeCode: 'Scope B',
        scopeTitle: 'Commercial / CRM',
        role: 'Account Executive / Sales Lead',
        userAction: 'Sales representative receives system alert, conducts scoping, generates an approved template quote, and sends electronic agreement.',
        dataGenerated: [
          'E-Contract Record: #HD-2026-088 (Illustrative Sample)',
          'Engagement Value Reference: 120,000,000 VND',
          'Verification Status: OTP digital signature confirmed',
          'Pipeline Milestone: Closed-Won'
        ],
        aiAutomationRole: 'AI Sales Copilot summarizes call records, extracts key operational requirements, and assists with pre-populating contract templates.',
        handoffNext: 'Contract status transition to "Executed" automatically instantiates billing milestones and transfers records to Accounting.'
      },
      {
        stepNumber: 3,
        stageName: 'Payment Confirmation & Accounting',
        scopeCode: 'Scope E',
        scopeTitle: 'Finance & Accounting',
        role: 'Disbursement Accountant & Chief Accountant',
        userAction: 'Client transfers milestone deposit (Illustrative Sample: 60,000,000 VND) to verified corporate bank account.',
        dataGenerated: [
          'Electronic Receipt: #PT-5521 (Illustrative Sample)',
          'Reconciled Cash Inflow: 60,000,000 VND',
          'Receivable Tracking: Next contract milestone scheduled',
          'General Ledger: Updated per standard accounting workflow'
        ],
        aiAutomationRole: 'Automated matching verifies bank transaction identifiers against contract references, reducing manual balance cross-checks.',
        handoffNext: 'Verified payment confirmation triggers onboarding handoff notifications to Customer Success and Deployment teams.'
      },
      {
        stepNumber: 4,
        stageName: 'Client Onboarding & Support',
        scopeCode: 'Scope D',
        scopeTitle: 'Customer Success (CSKH)',
        role: 'Implementation Specialist & Support Lead',
        userAction: 'Support team receives unified Customer 360 profile containing agreed scope details, timelines, and commitments from sales.',
        dataGenerated: [
          'Onboarding Ticket: #TK-1044 (Illustrative Sample)',
          'Response SLA Target: Governed by standard policy',
          'Implementation Schedule: Aligned with contract milestones',
          'User Provisioning: Client credentials issued'
        ],
        aiAutomationRole: 'AI CSKH Copilot drafts welcome packets, links relevant SOP guides, and generates service documentation templates.',
        handoffNext: 'Deployment progress telemetry synchronizes continuously to the customer record and updates executive BI reporting.'
      },
      {
        stepNumber: 5,
        stageName: 'Executive Analytics & BI',
        scopeCode: 'Scope J',
        scopeTitle: 'Real-Time BI & Analytics',
        role: 'Executive Committee & Chief Executive Officer',
        userAction: 'Leadership accesses executive dashboard to review financial health, revenue velocity, and operational milestones derived from live system data.',
        dataGenerated: [
          'Period Revenue Performance (Illustrative Data)',
          'Cash Inflow Position: Reconciled to bank ledger',
          'Marketing Acquisition Expenditure: Verified across channels',
          'Target Achievement Rate: Tracked against period OKRs'
        ],
        aiAutomationRole: 'AI models update period cash flow projections and synthesize variance indicators for leadership review.',
        handoffNext: 'Transaction records are archived and aggregated for compliance audits, trend reporting, and SOP process optimization (Scope H & Scope J).'
      }
    ]
  },

  architecture: {
    badge: '4-TIER OVERALL ARCHITECTURE',
    title: '11 AI ENTERPRISE Modules Map (Scope A → K)',
    description: 'Designed as a modular, phased architecture: Organizations can initiate deployment with 2–3 priority scopes and activate subsequent capabilities over time without disrupting ongoing operations.',
    mapBadge: 'UNIFIED 4-TIER ARCHITECTURE',
    mapTitle: 'Architectural Map of 11 Functional Scopes over a Shared Data Core',
    mapDisclaimer: '* Select any module to inspect detailed functional specifications below',
    layer1Title: 'TIER 1: DIGITAL PRESENCE & LEAD INGESTION',
    layer1Count: '1 Module',
    layer2Title: 'TIER 2: CUSTOMER & REVENUE GOVERNANCE',
    layer2Count: '3 Modules',
    layer3Title: 'TIER 3: INTERNAL OPERATIONS & ORGANIZATIONAL RESOURCES',
    layer3Count: '4 Modules',
    layer4Title: 'TIER 4: EXECUTIVE INTELLIGENCE & OPEN PLATFORM',
    layer4Count: '3 Modules (Balanced 3-column layout)',
    modulePrefix: 'Module:',
    scopePrefix: 'SCOPE',
    capabilitiesTitle: 'Core Functional Capabilities:',
    dataInTitle: 'Data Ingestion (Data In):',
    dataOutTitle: 'Data Handoff (Data Out):',
    mobileAccordionTitle: '11 Functional Modules (Tap to expand):',
    mobileMainCapabilities: 'Core Capabilities:',
    modules: [
      {
        code: 'A',
        name: 'Website & CMS Management',
        layer: 'Tier 1: Digital Presence & Lead Ingestion',
        layerNum: 1,
        tagline: 'Brand portal and dedicated campaign landing pages with direct operational core integration',
        keyCapabilities: [
          { title: 'Content & Landing Page Governance', desc: 'Easily publish articles, media, and targeted campaign pages tailored to marketing initiatives.' },
          { title: 'Intelligent Lead Capture Forms', desc: 'Automated verification of contact formats with instant intent tagging upon form submission.' },
          { title: 'Direct CRM Synchronization (Scope B)', desc: 'Captured prospect data syncs directly into the sales pipeline without intermediary re-entry.' },
          { title: 'Real-Time Conversion Analytics', desc: 'Monitor visitor traffic, form completion rates, and user journeys directly on system dashboards.' }
        ],
        dataIn: 'User visits, inquiry form submissions, and attribution parameters from advertising and search channels.',
        dataOut: 'Standardized prospect records routed instantly to Sales (Scope B) and Marketing (Scope C).',
        solutionLink: '/solutions/website',
        solutionLabel: 'Explore Website & CMS Solutions'
      },
      {
        code: 'B',
        name: 'Commercial / CRS / CRM',
        layer: 'Tier 2: Customer & Revenue Governance',
        layerNum: 2,
        tagline: 'Customer 360 profile governance, multi-channel sales pipeline, and electronic contracts',
        keyCapabilities: [
          { title: 'Customer 360 Profile Governance', desc: 'Centralizes contact details, consultation history, prior transactions, and account interest.' },
          { title: 'Visual Multi-Channel Pipeline', desc: 'Track opportunity progression through discovery, quotation, and negotiation milestones.' },
          { title: 'Standard Quotations & E-Contracts', desc: 'Generate quotes from catalog rules, integrate digital signatures, and automate review workflows.' },
          { title: 'Call Intelligence Integration', desc: 'Transcribe sales consultations, synthesize requirements, and generate follow-up reminders.' }
        ],
        dataIn: 'Inquiries from Website (Scope A) and Marketing (Scope C); customer consultation notes and call records.',
        dataOut: 'Executed contracts to Accounting (Scope E); agreed service commitments to Customer Success (Scope D).',
        solutionLink: '/solutions/crm',
        solutionLabel: 'Explore CRM & Sales Solutions'
      },
      {
        code: 'C',
        name: 'Multi-Channel Marketing',
        layer: 'Tier 2: Customer & Revenue Governance',
        layerNum: 2,
        tagline: 'Multi-channel campaign execution, CAC optimization, and automated customer nurturing',
        keyCapabilities: [
          { title: 'Centralized Multi-Channel Campaigns', desc: 'Track ad spend and performance attribution across major search, social, and affiliate channels.' },
          { title: 'Automated Lead Qualification Scoring', desc: 'Rank prospects based on engagement telemetry, company profile attributes, and conversion intent.' },
          { title: 'Automated Drip Sequences', desc: 'Deliver personalized multi-stage email and messaging sequences tailored to customer milestones.' },
          { title: 'ROI & CAC Accounting Attribution', desc: 'Link marketing expenditures directly with realized contract value to compute true acquisition costs.' }
        ],
        dataIn: 'Marketing campaign expenditures; interaction telemetry across digital advertising and social channels.',
        dataOut: 'Qualified, scored prospect records transferred directly to the commercial team (Scope B).',
        solutionLink: '/solutions/marketing',
        solutionLabel: 'Explore Marketing Solutions'
      },
      {
        code: 'D',
        name: 'Customer Success (CSKH)',
        layer: 'Tier 2: Customer & Revenue Governance',
        layerNum: 2,
        tagline: 'Unified omni-channel ticket queues, policy SLA tracking, and enhanced client experience',
        keyCapabilities: [
          { title: 'Unified Omni-Channel Ticket Queue', desc: 'Consolidate customer inquiries from email, web, chat, and phone into a single management console.' },
          { title: 'Policy SLA Monitoring & Alerts', desc: 'Automated warnings when response or resolution targets approach defined SLA thresholds.' },
          { title: 'Warranty & Service Contract Lifecycle', desc: 'Track contract validity, schedule maintenance milestones, and automate renewal reminders.' },
          { title: 'Customer Feedback Surveys (CSAT/NPS)', desc: 'Trigger automated post-service satisfaction surveys to identify dissatisfaction and churn risks early.' }
        ],
        dataIn: 'Handoff agreements from Sales (Scope B); incoming customer support inquiries and incident tickets.',
        dataOut: 'Upsell and renewal opportunities for Sales; service quality performance metrics for Leadership (Scope J).',
        solutionLink: '/solutions/customer-service',
        solutionLabel: 'Explore Customer Success Solutions'
      },
      {
        code: 'E',
        name: 'Finance & Accounting',
        layer: 'Tier 3: Internal Operations & Organizational Resources',
        layerNum: 3,
        tagline: 'Cash flow governance, automated receivables reconciliation, and electronic invoicing',
        keyCapabilities: [
          { title: 'Cash Ledger & Bank Account Reconciliation', desc: 'Monitor verified balances, maintain clear receipts, and reconcile transactions against banking data.' },
          { title: 'Accounts Receivable (AR) & Payable (AP)', desc: 'Automate milestone collection notices and categorize invoice aging schedules accurately.' },
          { title: 'Digital Expense Requisition Workflows', desc: 'Strict governance of departmental advance requests and procurement against approved budget limits.' },
          { title: 'Electronic Invoicing & Cash Forecasting', desc: 'Issue invoices from confirmed orders and model period cash flow trajectories for executive review.' }
        ],
        dataIn: 'Contracts and orders from Sales (Scope B); approved expense submissions from HR (Scope F) and Marketing (Scope C).',
        dataOut: 'Disbursement confirmations, verified invoice records, and cash flow telemetry for BI Dashboards (Scope J).',
        solutionLink: '/solutions/finance',
        solutionLabel: 'Explore Finance & Accounting Solutions'
      },
      {
        code: 'F',
        name: 'Human Resources (HR)',
        layer: 'Tier 3: Internal Operations & Organizational Resources',
        layerNum: 3,
        tagline: 'Centralized employee records, automated attendance, payroll verification, and KPI evaluations',
        keyCapabilities: [
          { title: 'Digital Personnel Records & Hierarchy', desc: 'Maintain employment contracts, certifications, promotion milestones, and organizational trees.' },
          { title: 'Automated Attendance & Digital Requests', desc: 'Integrate verified timekeeping inputs; manage leave applications and attendance corrections digitally.' },
          { title: 'Formula-Driven Payroll Processing', desc: 'Compute base compensation, statutory contributions, taxes, and sales commissions from verified data.' },
          { title: 'Periodic KPI / OKR Evaluations', desc: 'Align individual performance evaluations directly with verified operational accomplishments.' }
        ],
        dataIn: 'Timekeeping records; recruitment requisitions and periodic evaluations across departments.',
        dataOut: 'Consolidated payroll commitments to Accounting (Scope E); workforce productivity metrics to BI (Scope J).',
        solutionLink: '/solutions/hr',
        solutionLabel: 'Explore HR Solutions'
      },
      {
        code: 'G',
        name: 'Workflows — Projects — Operations (SOP)',
        layer: 'Tier 3: Internal Operations & Organizational Resources',
        layerNum: 3,
        tagline: 'Standard Operating Procedure (SOP) digitization, project tracking, and cross-department automation',
        keyCapabilities: [
          { title: 'SOP Process Modeling', desc: 'Standardize operational procedures with designated assignees, approvers, and resolution deadlines.' },
          { title: 'Project Tracking & RACI Accountability', desc: 'Visualize deliverables through Kanban and Gantt views; configure automated overdue alerts.' },
          { title: 'Multi-Tier Digital Approvals', desc: 'Secure approval routing for documents, expense requests, and policy waivers accessible anywhere.' },
          { title: 'Cross-Department Workflow Automation', desc: 'Trigger automated sequential actions using Trigger → Condition → Action → Approval logic.' }
        ],
        dataIn: 'Executive directives, approved project scopes, or executed customer contracts requiring implementation.',
        dataOut: 'Task completion milestones, process compliance metrics, and operational SLA reporting.',
        solutionLink: '/solutions/automation',
        solutionLabel: 'Explore SOP & Automation Solutions'
      },
      {
        code: 'H',
        name: 'Enterprise Knowledge Base (Wiki/RAG)',
        layer: 'Tier 3: Internal Operations & Organizational Resources',
        layerNum: 3,
        tagline: 'Policy digitization, operational handbooks, and grounded knowledge retrieval for AI Copilots',
        keyCapabilities: [
          { title: 'Digital Governance & Policy Repository', desc: 'Store internal training documentation, technical manuals, and structured operational FAQs.' },
          { title: 'Natural Language RAG Search', desc: 'Staff query internal manuals in natural language; system retrieves precise answers with document citations.' },
          { title: 'Version Control & Access Governance', desc: 'Strict role-based restrictions ensure confidential policies remain accessible only to authorized personnel.' },
          { title: 'Grounded Context for AI Copilots', desc: 'Provides factual context ensuring AI assistants generate responses aligned with company policies.' }
        ],
        dataIn: 'Internal policies, compliance guides, contract templates, and sales playbooks from departments.',
        dataOut: 'Verified grounding context for AI Search / RAG engines and the enterprise AI Copilot network.',
        solutionLink: '/solutions/rag',
        solutionLabel: 'Explore Knowledge Base & RAG Solutions'
      },
      {
        code: 'I',
        name: 'AI & Intelligent Agent Network',
        layer: 'Tier 4: Executive Intelligence & Open Platform',
        layerNum: 4,
        tagline: 'Role-specialized AI agent network operating under Human-in-the-loop oversight',
        keyCapabilities: [
          { title: 'Role-Specialized AI Copilots', desc: 'Dedicated AI assistants for CEO, Sales, Marketing, CSKH, HR, Finance, Voice, Workflow, and RAG Search.' },
          { title: 'Human-in-the-loop Governance', desc: 'AI assists with analysis and draft preparation; high-impact decisions require authorized human approval.' },
          { title: 'Voice Call Transcription & Insights', desc: 'Transcribe audio consultations into text, synthesize customer priorities, and update CRM records.' },
          { title: 'Secure Workspace Model Tuning', desc: 'Training and retrieval occur within enterprise tenant boundaries, without public model data sharing.' }
        ],
        dataIn: 'Authorized operational records from remaining 10 functional modules and the knowledge base (Scope H).',
        dataOut: 'Draft proposals, action recommendations, synthesized analytical summaries, and variance alerts.',
        solutionLink: '/solutions/ai-agent',
        solutionLabel: 'Explore 9 Specialized AI Copilots'
      },
      {
        code: 'J',
        name: 'Real-Time BI & Executive Analytics',
        layer: 'Tier 4: Executive Intelligence & Open Platform',
        layerNum: 4,
        tagline: 'Executive decision command center, KPI/OKR visualization, and predictive cash flow modeling',
        keyCapabilities: [
          { title: 'Executive Command Dashboard for CEO', desc: 'Consolidate vital enterprise indicators onto a single unified interface powered by live system data.' },
          { title: 'Departmental Deep-Dive Reports', desc: 'Analyze sales pipeline velocity, contract turnaround times, and customer support resolution SLA metrics.' },
          { title: 'Strategic OKR / KPI Benchmark Tracking', desc: 'Track progress variances against annual plans and evaluate operational performance across business units.' },
          { title: 'Automated Operational Variance Alerts', desc: 'Receive proactive alerts for sudden revenue deceleration in a branch or unusual marketing cost spikes.' }
        ],
        dataIn: 'Continuous operational streams from across functional modules: Sales, Marketing, Finance, HR, and Operations.',
        dataOut: 'Consolidated organizational health metrics supporting informed executive decision-making.',
        solutionLink: '/solutions/bi',
        solutionLabel: 'Explore Real-Time BI Solutions'
      },
      {
        code: 'K',
        name: 'Open Platform & System Integrations',
        layer: 'Tier 4: Executive Intelligence & Open Platform',
        layerNum: 4,
        tagline: 'Enterprise security architecture, granular RBAC, RESTful API/Webhook connectivity, and backups',
        keyCapabilities: [
          { title: 'Granular Role-Based Access Control (RBAC)', desc: 'Strict enforcement of View, Create, Edit, Delete, and Export permissions aligned with job descriptions.' },
          { title: 'Standard Open API & Webhook Gateways', desc: 'Seamlessly interface with banking gateways, electronic invoicing providers, and logistics platforms.' },
          { title: 'Comprehensive System Audit Logging', desc: 'Record access events, authentication sessions, and record mutations per configuration for auditability.' },
          { title: 'Data Backup & Recovery Protocols', desc: 'Data encrypted in transit and backed up periodically to support business continuity.' }
        ],
        dataIn: 'Operational logs from all active sessions, incoming webhook payloads, and third-party API calls.',
        dataOut: 'Security infrastructure, authentication controls, and data protection across all 10 modules.',
        solutionLink: '/resources',
        solutionLabel: 'View Architecture & Security Documentation'
      }
    ]
  },

  supervisedAi: {
    badge: 'GOVERNED ARTIFICIAL INTELLIGENCE',
    title: 'Supervised AI Control Model: Human-in-the-loop Governance',
    description: 'Enterprise AI must never operate with unchecked authority over financial commitments or contractual agreements. AI ENTERPRISE enforces a strict governance protocol: AI assists with contextual analysis and draft synthesis, while authorized personnel retain definitive decision authority.',
    flowHeading: 'Standard 6-Step Governed Execution Lifecycle',
    flowSubheading: 'Mandatory verification gate at Step 4',
    col1Title: '1. Safe Autonomous Tasks within Predefined Boundaries',
    col1Subtitle: 'Processes routine operational requests strictly within predefined operational boundaries',
    col2Title: '2. Mandatory Human Approval Gates',
    col2Subtitle: 'Requires authorized personnel sign-off prior to external release or execution',
    steps: [
      {
        stepNum: 1,
        title: 'Ingest & Read Context',
        actor: 'AI',
        actorLabel: 'AI Engine',
        description: 'Queries authorized internal context from CRM, Accounting, or Wiki knowledge bases within designated permission boundaries.',
        subtext: 'Within role permission boundaries'
      },
      {
        stepNum: 2,
        title: 'Analyze & Evaluate Risk',
        actor: 'AI',
        actorLabel: 'AI Engine',
        description: 'Cross-checks against standard SOPs, discount policies, and budget thresholds to identify anomalies or potential operational risks.',
        subtext: 'System risk evaluation'
      },
      {
        stepNum: 3,
        title: 'Draft Operational Proposal',
        actor: 'AI',
        actorLabel: 'AI Copilot',
        description: 'Prepares structured draft proposals: quotation models, expenditure requisitions, or standardized response messages.',
        subtext: 'Non-executing draft'
      },
      {
        stepNum: 4,
        title: 'Control Gate: Human Approval',
        actor: 'HUMAN',
        actorLabel: 'Authorized Approver',
        description: 'Designated management (Lead, Chief Accountant, or CEO) reviews the draft, with authority to adjust, approve, or reject.',
        subtext: 'MANDATORY APPROVAL'
      },
      {
        stepNum: 5,
        title: 'Authorized System Execution',
        actor: 'SYSTEM',
        actorLabel: 'Workflow Engine',
        description: 'Upon authorized approval, the system triggers designated actions: dispatching emails, generating invoices, or allocating budget.',
        subtext: 'Executed per verified command'
      },
      {
        stepNum: 6,
        title: 'Audit Trail Logging',
        actor: 'SYSTEM',
        actorLabel: 'Security Core',
        description: 'Logs action history: AI-generated proposal details, approving identity, execution timestamp, and outcomes per audit configuration.',
        subtext: 'Auditability & traceability'
      }
    ],
    autonomousTasks: [
      {
        name: 'Lead Qualification & Scoring',
        desc: 'Evaluates engagement temperature and tags prospective accounts based on inbound form criteria and interaction telemetry.'
      },
      {
        name: 'Call Audio Transcription & Synthesis',
        desc: 'Transcribes recorded consultation calls into text and extracts key discussion points directly into CRM customer cards.'
      },
      {
        name: 'Contextual Draft Generation',
        desc: 'Synthesizes initial draft responses for client tickets or follow-up communications grounded in the internal knowledge base.'
      },
      {
        name: 'Operational Variance Notifications',
        desc: 'Alerts designated managers when campaign expenditures surge abnormally or support tickets approach policy SLA thresholds.'
      },
      {
        name: 'Cross-Department Milestone Synchronization',
        desc: 'Updates order milestones and generates internal task reminders for relevant personnel following standard state changes.'
      }
    ],
    strictApprovalTasks: [
      {
        name: 'Disbursement & Fund Transfers',
        desc: 'All financial outflows from company ledgers or bank accounts strictly require authorized signatures from Finance and Leadership.'
      },
      {
        name: 'Pricing Discounts Exceeding Policy Caps',
        desc: 'Quotations reflecting discount percentages exceeding commercial rep thresholds mandate Commercial Director approval.'
      },
      {
        name: 'Commercial Agreements & Partnership Terms',
        desc: 'Legal contracts, binding terms, and institutional commitments must be confirmed by authorized organizational signatories.'
      },
      {
        name: 'Public Content & Official Communications',
        desc: 'External announcements, press materials, and revised pricing policies on public portals require formal editorial sign-off.'
      },
      {
        name: 'Administrative Role & Permission Adjustments',
        desc: 'Modifying administrator credentials, granting access to confidential financial ledgers, or altering system configurations.'
      }
    ]
  },

  deploymentPrinciples: {
    badge: 'CORE ARCHITECTURAL PRINCIPLES',
    title: '6 Core Deployment Principles of VMC Group',
    description: 'Foundational commitments ensuring long-term architectural stability while preserving the operational independence, data security, and ownership of each enterprise.',
    principlePrefix: 'Principle',
    commitmentsTitle: 'Implementation Commitments:',
    items: [
      {
        num: '01',
        title: 'Dedicated Digital Presence for Each Enterprise',
        description: 'Each client operates on an independent portal and domain, reflecting their distinctive brand identity, interface styling, and lead intake structures, without shared public layouts or third-party platform lock-in.',
        highlights: [
          'Independent domain and brand identity configured per client',
          'Customizable page structures and lead capture intake forms',
          'Direct synchronization into internal CRM without intermediaries'
        ]
      },
      {
        num: '02',
        title: 'Dedicated User Accounts & Strong Access Controls',
        description: 'Every employee is provisioned with an individual identifier, verified authentication, and role-based access control (RBAC). Shared credentials are restricted to maintain personal accountability and audit traceability.',
        highlights: [
          'Personalized authentication tailored to departmental roles',
          'Principle of least privilege (Least Privilege) applied to all accounts',
          'Individual accountability recorded within system audit logs'
        ]
      },
      {
        num: '03',
        title: 'Tenant Data Partitioning & Enterprise Ownership',
        description: 'Data across organizations is partitioned by tenant and access scope. All customer, financial, and operational records remain the exclusive property of the enterprise under agreed deployment terms.',
        highlights: [
          'Data is partitioned by tenant and authorized access scope',
          'Enterprises retain full data export rights per handover procedures',
          'Confidentiality agreements apply per deployment contracts'
        ]
      },
      {
        num: '04',
        title: 'Configurable Workflows & Modular Interfaces',
        description: 'The architecture allows customization of data fields, approval thresholds, and SOP sequences to match industry-specific requirements without breaking the underlying shared core foundation.',
        highlights: [
          'Customizable data attributes and commercial pipeline stages',
          'Configurable multi-tier approval workflows based on thresholds',
          'Inherits the architectural stability of the unified core'
        ]
      },
      {
        num: '05',
        title: 'AI Grounded in Organizational Context',
        description: 'AI Copilots retrieve context from internal knowledge bases (SOPs, operational manuals, product specs). Data is partitioned by tenant, access scope, and system configuration, processed within defined permission boundaries and model provider policies.',
        highlights: [
          'RAG retrieval grounded in verified internal organizational knowledge',
          'Protects commercial information and internal policies via RBAC',
          'Reduces ungrounded hallucinations through controlled reference sources'
        ]
      },
      {
        num: '06',
        title: 'Shared, Governed Core Architecture',
        description: 'While each enterprise maintains distinct data and workflows, systems operate on VMC Group\'s standardized architectural core, ensuring high operational stability, scalability, and regular updates.',
        highlights: [
          'Stable, enterprise-grade underlying infrastructure',
          'Continuous capability updates and security patches',
          'Supports audit logging for critical administrative actions'
        ]
      }
    ]
  },

  security: {
    badge: 'SECURITY & DATA GOVERNANCE',
    title: 'Enterprise-Grade Security & Multi-Tier Access Control',
    description: 'We recognize that customer records, financial ledgers, and proprietary workflows are vital assets. AI ENTERPRISE is built upon rigorous security practices with granular access controls and transparent audit logging.',
    diagramHeading: 'Standard Access Control Lifecycle Architecture',
    diagramSubheading: '5-Layer Authentication & Authorization Flow',
    step1Num: '01',
    step1Title: '1. Identity (User)',
    step1Desc: 'Independent personal authentication verified with strong passwords & OTP credentials.',
    step2Num: '02',
    step2Title: '2. Role (Role)',
    step2Desc: 'Assigned functional roles: Leadership, Department Lead, Specialist, Accountant.',
    step3Num: '03',
    step3Title: '3. Resource (Resource)',
    step3Desc: 'Target entities: Customer accounts, Contracts, Ledgers, Requisitions, KPIs.',
    step4Num: '04',
    step4Title: '4. Action (Action)',
    step4Desc: 'Permission evaluation: Read (View), Create, Update, and Approve.',
    step5Num: '05',
    step5Title: '5. Audit Trail (Audit Log)',
    step5Desc: 'Immutable audit logs: Actor identity, timestamp, and modified data attributes.',
    rbacHeading: 'Reference Role-Based Access Control (RBAC) Matrix',
    rbacSubheading: 'Illustrates actual access privileges across 5 role tiers on core enterprise resources',
    rbacBadge: 'RBAC Model',
    tableHeaderResource: 'Resource Category',
    tableHeaderCeo: 'CEO / Executive Board',
    tableHeaderSalesLead: 'Sales Lead',
    tableHeaderSalesRep: 'Sales Representative',
    tableHeaderChiefAccountant: 'Chief Accountant',
    tableHeaderSupportAgent: 'Customer Success Agent',
    approvalExampleTitle: 'Illustrative Scenario: Multi-Level Approval Workflow',
    approvalExampleScenario: 'Scenario: 18% Order Discount Request (> Standard 15% Cap)',
    exampleStep1Badge: 'Step 1',
    exampleStep1Title: 'Sales Rep Submits Request',
    exampleStep1Desc: 'Drafts quotation and submits an 18% discount request justified by a 2-year commitment.',
    exampleStep2Badge: 'Step 2',
    exampleStep2Title: 'Automatic Hold & Route',
    exampleStep2Desc: 'System detects request exceeds 15% cap, locks contract generation, and alerts Sales Lead.',
    exampleStep3Badge: 'Step 3',
    exampleStep3Title: 'Sales Lead Review',
    exampleStep3Desc: 'Sales Lead evaluates gross margin impact, endorses the request, and forwards to CEO.',
    exampleStep4Badge: 'Step 4 (Final)',
    exampleStep4Title: 'CEO Digital Sign-Off',
    exampleStep4Desc: 'CEO reviews request via mobile interface and approves with OTP. Quotation unlocks for client delivery.',
    rbacRows: [
      {
        resource: 'Customer Accounts & Leads (Customer 360)',
        ceo: 'Full Access / Export Reports',
        salesLead: 'Full Access / Allocate Leads',
        salesRep: 'Assigned Accounts / Edit',
        chiefAccountant: 'Payment Status View',
        supportAgent: 'View for Support Delivery'
      },
      {
        resource: 'Quotations & Commercial Contracts',
        ceo: 'Final Approval Authority',
        salesLead: 'Approve Discounts ≤ 15%',
        salesRep: 'Generate Draft Quotations',
        chiefAccountant: 'View Executed Contracts',
        supportAgent: 'View Warranty Terms'
      },
      {
        resource: 'Cash Ledgers, Banking & Disbursements',
        ceo: 'Full Access / Authorize Major Spend',
        salesLead: 'Restricted',
        salesRep: 'Restricted',
        chiefAccountant: 'Manage Cash Flow / Issue Invoices',
        supportAgent: 'Restricted'
      },
      {
        resource: 'Expense Requisitions & Department Budgets',
        ceo: 'Approve Executive Budgets',
        salesLead: 'Approve Department Requisitions',
        salesRep: 'Submit Expense Requests',
        chiefAccountant: 'Audit Caps / Execute Payments',
        supportAgent: 'Submit Tool Requisitions'
      },
      {
        resource: 'Revenue & Cash Flow Analytics (BI)',
        ceo: 'Full Access via Live Data',
        salesLead: 'Sales Department Analytics',
        salesRep: 'Individual Performance View',
        chiefAccountant: 'Full Financial Statements',
        supportAgent: 'Support Performance View'
      },
      {
        resource: 'System Configurations & Audit Logs',
        ceo: 'Full Audit Trail Access',
        salesLead: 'Restricted',
        salesRep: 'Restricted',
        chiefAccountant: 'Financial Transaction Logs',
        supportAgent: 'Restricted'
      }
    ],
    pillars: [
      {
        title: 'In-Transit Encryption & Data Protection',
        desc: 'All communications between users and the platform are encrypted using TLS/HTTPS protocols; stored records adhere to security best practices.'
      },
      {
        title: 'Organizational Data Partitioning',
        desc: 'Each enterprise repository is partitioned by tenant with independent access configurations, keeping proprietary data under enterprise control.'
      },
      {
        title: 'Principle of Least Privilege (Least Privilege)',
        desc: 'Users are provisioned with permissions strictly necessary for their job responsibilities, mitigating unauthorized record exposure.'
      },
      {
        title: 'System Audit Logging (Audit Log)',
        desc: 'The platform records critical transactions including logins, state mutations, and data exports with user identifiers and timestamps.'
      }
    ]
  },

  roadmapAndCta: {
    roadmapBadge: 'PRACTICAL IMPLEMENTATION ROADMAP',
    roadmapTitle: 'Phased, Streamlined Deployment Methodology',
    roadmapDescription: 'Actual timelines depend on organization scale, selected scope count, and existing data readiness. A phased approach allows organizations to validate concrete value after each milestone.',
    deliverablesTitle: 'Phase Deliverables:',
    ctaBadge: 'READY FOR ARCHITECTURAL TRANSFORMATION?',
    ctaTitle: 'Begin Your Transition to the AI ENTERPRISE Operating System',
    ctaDescription: 'Speak directly with a VMC Group enterprise solutions architect. We will assess current operational bottlenecks and construct a live workflow demo tailored to your operational requirements.',
    ctaBtnConsultation: 'Request Architecture Consultation & Demo',
    ctaBtnCapabilities: 'Explore System Capabilities',
    trustBadge1: 'Preserves existing operational continuity',
    trustBadge2: 'Data remains enterprise proprietary property',
    trustBadge3: 'Comprehensive technical onboarding and support',
    phases: [
      {
        phase: 'Phase 01',
        duration: 'Stage 1',
        title: 'Assessment & Data/Workflow Standardization',
        objective: 'Assess operational bottlenecks, map existing data exchanges, agree upon target architecture, and standardize foundational catalogs.',
        deliverables: [
          'Operational process maps and data exchange diagrams',
          'Data structure models and preliminary RBAC matrix',
          'Phased deployment plan and module priority matrix'
        ]
      },
      {
        phase: 'Phase 02',
        duration: 'Stage 2',
        title: 'System Configuration & Priority Module Integration',
        objective: 'Provision environment, configure initial high-priority modules, and connect primary operational data flows.',
        deliverables: [
          'Intake portal and databases for priority modules',
          'Configured digital forms and multi-tier approval flows',
          'Data exchange bridges connecting designated modules'
        ]
      },
      {
        phase: 'Phase 03',
        duration: 'Stage 3',
        title: 'Pilot Deployment & Personnel Training',
        objective: 'Execute pilot with target user cohort, configure AI assistants with internal knowledge bases, and conduct hands-on staff training.',
        deliverables: [
          'Validated pilot environment and business scenario test cases',
          'Configured knowledge base (RAG) and AI approval boundaries',
          'User guides and recorded role-based training sessions'
        ]
      },
      {
        phase: 'Phase 04',
        duration: 'Stage 4',
        title: 'Go-Live, Fine-Tuning & Administrative Handover',
        objective: 'Transition system into full production operations, monitor executive telemetry, and transfer administrative controls to enterprise staff.',
        deliverables: [
          'Live enterprise operating system in production',
          'Executive BI dashboard displaying live system indicators',
          'Operational documentation handover and ongoing technical support plan'
        ]
      }
    ]
  }
};
