import { TranslationDictionary } from '../../types';

const enSolutions: TranslationDictionary = {
  overview: {
    badge: 'SPECIALIZED ENTERPRISE SOLUTIONS',
    title: 'Enterprise Operational Solutions',
    description: 'Explore {deptCount} department-specific solution suites and {needCount} digital transformation packages, operating on the unified AI Enterprise data foundation.',
    filterLabel: 'Filter solutions:',
    filterAll: 'All ({totalCount} solutions)',
    filterDept: 'By Department ({deptCount} solutions)',
    filterNeed: 'By Transformation Need ({needCount} solutions)',
    deptSectionTitle: '1. Department-Specific Solutions',
    deptSectionDesc: 'Dedicated operational visuals, standardized workflows, and supervised AI Copilots for each functional division.',
    deptCountBadge: '{count} Departments',
    dataManagedLabel: 'Core Data Managed:',
    deptCardCta: 'View Operational UI & SOP',
    needSectionTitle: '2. Transformation Need Solutions',
    needSectionDesc: 'Targeted solutions for critical operational demands: Workflow Automation, Knowledge Governance, Virtual Assistants, AI Voice.',
    needCountBadge: '{count} Solutions',
    needCardCta: 'View Solution Details',
    crosslinkBadge: 'SINGLE DATA ARCHITECTURE — MULTI-ROLE',
    crosslinkTitle: 'Discover how 11 modules and 6 departments interconnect without bottlenecks',
    crosslinkDesc: 'All functional teams access a single source of truth, protected by multi-tier RBAC and strictly governed by human approval checkpoints.',
    crosslinkCta: 'Explore AI Enterprise Overview'
  },

  departmentDetail: {
    backToAll: 'All Solutions',
    deptBreadcrumb: 'Departments',
    badge: 'SPECIALIZED DEPARTMENT SOLUTION',
    titlePrefix: 'Solution for',
    ctaConsultation: 'Request Consultation for {name}',
    ctaArchitecture: 'View Unified AI Enterprise Architecture',
    salesScopeTitle: 'Scope Distinction:',
    salesScopeText: 'This page focuses on sales team operational playbooks, revenue targets, and closing pipelines. If looking for the technical CRM platform & Customer 360 database architecture, please explore the CRS / CRM technology solution.',
    salesScopeLink: 'Explore Enterprise CRS / CRM',
    problemsTitle: 'Operational Bottlenecks Prior to Standardization',
    problemsSubtitle: 'Risks of data loss & reduced decision velocity',
    problemsConclusion: 'Conclusion: Fragmented data creates information silos, forcing personnel into repetitive manual entry and delayed reporting.',
    sopTitle: 'Standard Operating Procedures (SOP)',
    sopSubtitle: 'Automated intake, processing, and cross-team handoff',
    sopStage: 'STAGE 0{index}',
    sopStatus: 'Status: Automatically tracked in Audit Log',
    visualsTitle: 'Sample Operational Business Interface',
    visualsSubtitle: 'Standard interactive interface tailored for {name}',
    copilotTitle: 'Dedicated AI Copilot for {name}',
    copilotBadge: 'HUMAN-IN-THE-LOOP SAFEGUARD',
    copilotReads: '1. Data Read & Scoped Permissions:',
    copilotAnalyzes: '2. Operational Analysis Capabilities:',
    copilotProposes: '3. Intelligent Proposal Scenarios:',
    copilotExecutes: '4. Autonomous Execution Scope:',
    copilotApproval: 'Mandatory Human Approval Checkpoint:',
    reportsTitle: 'Key Performance Indicators & Reports (KPI/BI)',
    reportsSubtitle: 'Dynamically populated from verified operational events',
    handoffTitle: 'Cross-Departmental Data Handoff',
    handoffBus: 'Unified Event Bus',
    handoffNote: 'Data is forwarded instantly via secure internal protocols, designed to eliminate information delays and manual reconciliation.',
    ctaReady: 'Ready to standardize {name} operations?',
    ctaDesc: 'VMC Group solution architects are available to assess your current data readiness and formulate a realistic staged implementation roadmap.',
    ctaConsultationBtn: 'Request Consultation for {name}',
    ctaScheduleBtn: 'Schedule Readiness Assessment'
  },

  needDetail: {
    backToSolutions: 'Back to Solutions Catalog',
    badge: 'TRANSFORMATION NEED SOLUTION',
    productWalkthrough: 'Product Walkthrough',
    coreValueLabel: 'Core Value:',
    ctaConsultation: 'Request Consultation for {name}',
    ctaArchitecture: 'View AI ENTERPRISE Architecture',
    crmDistinctionTitle: 'Scope Distinction:',
    crmDistinctionText: 'This page introduces the CRS / CRM technology platform (Customer 360, pipeline, multi-channel connectivity). To review organizational workflows and operational playbooks for sales teams, please view the Sales Department Solution.',
    crmDistinctionLink: 'View Sales Solution',
    aiAgentDistinctionTitle: 'Scope Distinction:',
    aiAgentDistinctionText: 'This page specifies the AI Agent network solution architecture, data safety, and Human-in-the-Loop safeguards. To explore the catalog of 9 dedicated AI Copilots by job title, please view the AI Copilot Catalog.',
    aiAgentDistinctionLink: 'Explore 9 AI Copilots',
    voiceDistinctionTitle: 'Solution Distinction:',
    voiceDistinctionText: 'This page covers Speech-to-Text audio transcription and call quality analytics technology. To explore automated appointment reminder calling, please view the dedicated AI Voice Assistant.',
    voiceDistinctionLink: 'View AI Voice Assistant',
    automationDistinctionTitle: 'Workflow Distinction:',
    automationDistinctionText: 'This page specifies the overarching Workflow Engine. To view specialized workflows for specific business units, please explore the Department Solutions catalog.',
    automationDistinctionLink: 'View Department Solutions',
    interactiveDemoTitle: 'Interactive Demonstration & Business Data Flow',
    interactiveDemoSubtitle: 'Simulated operational workflow walkthrough on the platform',
    problemsTitle: 'Operational Challenges & Bottlenecks Addressed',
    problemsSubtitle: 'Obstacles stalling organizational velocity and inflating operational overhead',
    overviewTitle: 'Solution Overview & Operating Principles',
    dataTypesTitle: 'Data Entities Digitized & Governed',
    workflowTitle: 'Standard Operating Workflow (Workflow SOP)',
    workflowSubtitle: 'Closed-loop execution from initial intake to final delivery',
    workflowInput: 'Data Intake (Input)',
    workflowProcess: 'Standardized Processing (Process)',
    workflowAi: 'AI & Automation',
    workflowHuman: 'Human Oversight (Human Control)',
    workflowOutput: 'Delivered Outcome (Output)',
    featuresTitle: 'Core Capabilities & Technological Features',
    featuresSubtitle: 'Specialized modules delivering an end-to-end enterprise solution',
    aiSectionTitle: 'AI Copilot Roles & Human-in-the-Loop Governance',
    aiSectionSubtitle: 'AI analyzes and proposes — Humans oversee and authorize final execution',
    aiReads: '1. Data Read & Accessed by AI',
    aiAnalyzes: '2. Deep Analytical Capabilities',
    aiProposes: '3. Intelligent Proposals & Suggestions',
    aiExecutes: '4. Automated Execution (When Configured)',
    aiApprovalRequired: 'Mandatory Human Oversight Checkpoints:',
    connectionsTitle: 'Core AI ENTERPRISE Architectural Connectivity',
    connectionsSubtitle: 'Seamless integration across the 11-module enterprise ecosystem',
    reportsTitle: 'Key Governance Reports & Metrics (KPI/BI)',
    reportsSubtitle: 'Operational performance measurement driven by verifiable metrics',
    securityTitle: 'Security, Compliance & Data Governance',
    securitySubtitle: 'Rigorous information security standards and role-based access control',
    secRbac: 'Multi-tier RBAC Permissions',
    secAudit: 'Audit Logging & Traceability',
    secApproval: 'Multi-level Approval Workflows',
    secScope: 'Isolated Tenant Data Scoping',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Technical clarity on data governance, security, and practical deployment',
    roadmapTitle: 'Standard 5-Stage Implementation Roadmap',
    roadmapSubtitle: 'Streamlined deployment minimizing operational disruption and ensuring on-schedule delivery',
    roadmapSteps: [
      {
        step: 'Stage 1',
        duration: 'Week 1',
        title: 'Current State Assessment & Scope Definition',
        desc: 'Identify operational bottlenecks, audit existing SOP documentation, and establish baseline enterprise KPI benchmarks.'
      },
      {
        step: 'Stage 2',
        duration: 'Week 2',
        title: 'Data Structure Standardization & Cleaning (Data Readiness)',
        desc: 'Model data schemas, sanitize customer records and operational catalogs, and configure RBAC authorization policies.'
      },
      {
        step: 'Stage 3',
        duration: 'Week 3',
        title: 'Workflow Configuration & Module Integration',
        desc: 'Configure workflow triggers, establish AI guardrails and validation rules, and connect data interfaces across modules.'
      },
      {
        step: 'Stage 4',
        duration: 'Week 4',
        title: 'Staff Training & Supervised Pilot Run',
        desc: 'Conduct role-based staff onboarding, run parallel pilot workflows, and validate human-in-the-loop sign-off checkpoints.'
      },
      {
        step: 'Stage 5',
        duration: 'Week 5+',
        title: 'Official Production Handover & Continuous Optimization',
        desc: 'Transition to full production operations, establish SLA monitoring metrics, and execute periodic performance reviews.'
      }
    ],
    ctaTitle: 'Ready to transform operations with {name}?',
    ctaDesc: 'Connect with VMC Group solution architects for an interactive demonstration, technical architecture review, and enterprise readiness assessment.',
    ctaConsultationBtn: 'Request Consultation for {name}',
    ctaTrialBtn: 'Schedule In-Depth Consultation'
  },

  departments: {
    sales: {
      name: 'Sales',
      tagline: 'Customer relationship management, sales pipelines, and multi-channel revenue conversion',
      problems: [
        'Customer and lead records scattered across messaging apps, personal spreadsheets, and manual notebooks.',
        'Employee turnover causing customer contact disruptions and risk of institutional data loss.',
        'Lack of visibility into lead response latency, stage conversion rates, and consultative call quality.',
        'Quotations, contracts, and revenue reconciliation processes remain manual and delayed.'
      ],
      dataManaged: [
        'Customer 360 Profiles',
        'Lead Records & Channel Attribution',
        'Sales Opportunity Pipelines',
        'Call Logs & Consultation Records',
        'Quotations, Orders & Contracts',
        'Revenue & Payment Schedules'
      ],
      processes: [
        'Automated lead intake from Websites, Digital Forms, and connected touchpoints',
        'Skill-based and shift-aware intelligent lead assignment for sales personnel',
        'Interaction tracking, follow-up notifications, and standardized quotation drafting',
        'Deal closing, contract generation, and automated handoff to Operations and CS'
      ],
      aiAssistance: {
        reads: 'Reads lead attributes, interaction history, deal stages, and prior discussion notes.',
        analyzes: 'Evaluates deal closing probability, prospect qualification scores, and customer response trends.',
        proposes: 'Recommends optimal follow-up cadences, objection-handling templates, and tailored product bundles.',
        executes: 'Dispatches confirmation emails, updates pipeline stages, and schedules follow-up tasks.',
        requiresApproval: 'Mandatory approval required: Non-standard discounts, formal contract issuance, and high-value deal cancellations.'
      },
      reports: [
        'Real-time individual and team revenue performance dashboards',
        'Sales funnel conversion rates across pipeline stages',
        'Average lead response and qualification velocity',
        'Monthly and quarterly sales forecast projections'
      ],
      interDepartmentConnection: 'Commercial transaction data propagates instantly to Finance (invoicing, accounts receivable) and CS (onboarding, service SLAs).'
    },
    marketing: {
      name: 'Marketing',
      tagline: 'Multi-channel campaign execution, CAC/CPL attribution, and structured lead nurturing',
      problems: [
        'Significant ad spend without granular cost attribution per qualified opportunity.',
        'Sales qualitative feedback fails to loop back to Marketing to refine messaging and targeting.',
        'Fragmented brand communication lacking cohesion with enterprise positioning.',
        'Lead nurturing workflows remain manual or inconsistent across customer cohorts.'
      ],
      dataManaged: [
        'Campaign Schedules & Distribution Channels',
        'Marketing Expenditures & Multi-channel ROI',
        'Digital Asset Management & Content Repositories',
        'Registration Forms & Web Behavioral Telemetry',
        'Engagement Metrics via Email, Messaging & Social Channels'
      ],
      processes: [
        'Campaign planning, budget allocation, and channel scheduling',
        'Creation of conversion landing pages and structured lead forms',
        'Behavioral lead tagging and progressive qualification scoring',
        'Closed-loop conversion measurement from inbound lead to contracted revenue'
      ],
      aiAssistance: {
        reads: 'Evaluates website traffic telemetry, customer inquiries, and historical campaign yield.',
        analyzes: 'Identifies highest-converting acquisition channels and unit acquisition costs per deal.',
        proposes: 'Recommends editorial themes, optimizes landing page headlines, and schedules nurture sequences.',
        executes: 'Applies automated customer tags and synchronizes incoming leads into CRM pipelines.',
        requiresApproval: 'Mandatory approval required: Public content release and commercial advertising budget allocations.'
      },
      reports: [
        'Cost Per Qualified Lead (CPL) and Customer Acquisition Cost (CAC)',
        'End-to-end conversion efficiency: Traffic → Lead → Opportunity → Revenue',
        'Channel performance breakdown: Search, Social, Content, Partners',
        'Engagement depth indices and brand lifecycle progression'
      ],
      interDepartmentConnection: 'Directly routes inbound inquiries to Sales pipelines with zero delay, receiving transaction data to compute true marketing ROI.'
    },
    'customer-service': {
      name: 'Customer Service (CSKH)',
      tagline: 'Post-sales experience optimization, SLA response tracking, and customer lifetime value expansion',
      problems: [
        'Support tickets missed or delayed across fragmented channels (email, phone, chat).',
        'Support staff lack visibility into purchase history, leading to repetitive or misinformed responses.',
        'Delayed complaint resolution degrading client trust and enterprise brand equity.',
        'Absence of structured CSAT/NPS measurement and systematic renewal tracking.'
      ],
      dataManaged: [
        'Omnichannel Ticket Queues & Escalation Records',
        'Warranty, Maintenance & Technical Support Logs',
        'Customer Satisfaction Surveys (CSAT, NPS)',
        'Contract Renewal Dates & SLA Commitments',
        'Enterprise Knowledge Repositories (FAQ, SOP)'
      ],
      processes: [
        'Multi-channel intake and automated ticket categorization',
        'SLA-driven ticket dispatching to specialized support engineers',
        'Real-time status tracking and standardized communication playbooks',
        'Post-resolution satisfaction surveying and structured renewal outreach'
      ],
      aiAssistance: {
        reads: 'Parses ticket descriptions, customer contracts, transaction logs, and internal knowledge docs.',
        analyzes: 'Evaluates urgency tier, customer sentiment indicators, and underlying issue drivers.',
        proposes: 'Suggests verified response templates grounded in approved enterprise documentation.',
        executes: 'Transmits automated progress notifications to clients and alerts agents to approaching SLA deadlines.',
        requiresApproval: 'Mandatory approval required: Compensation policies, special SLA concessions, and closure of disputed tickets.'
      },
      reports: [
        'First Response Time (FRT) and Time to Resolution (TTR)',
        'SLA compliance rate across priority tiers',
        'Customer Satisfaction Score (CSAT) trends',
        'Contract renewal rates and net customer retention'
      ],
      interDepartmentConnection: 'Forwards qualified expansion opportunities to Sales, while routing product defects to Engineering and Management.'
    },
    hr: {
      name: 'Human Resources & Training',
      tagline: 'Employee lifecycle administration, verified attendance, performance tracking, and capability growth',
      problems: [
        'Manual timekeeping, leave tracking, and paper requests causing administrative overhead and discrepancies.',
        'Performance evaluations reliant on subjective perceptions rather than verified operational metrics.',
        'Training materials and operating procedures (SOPs) fragmented, lengthening new hire onboarding.',
        'High turnover risks and lack of executive visibility into organizational human capital.'
      ],
      dataManaged: [
        'Personnel Records & Employment Agreements',
        'Timekeeping Telemetry, Leave Balances & Attendance Requests',
        'Performance Evaluation Metrics (KPI / OKR)',
        'Internal Curricula, Training Paths & Assessments',
        'Recruitment Pipelines & Candidate Portfolios'
      ],
      processes: [
        'Structured recruitment workflows and 30-day onboarding checklists',
        'Digital self-service approvals (leave requests, remote work, attendance adjustments)',
        'Automated KPI tracking tied directly to functional operational output',
        'Periodic competency evaluations and internal training compliance audits'
      ],
      aiAssistance: {
        reads: 'Reads attendance records, task completion velocity, administrative requests, and course completion logs.',
        analyzes: 'Identifies attendance consistency patterns and highlights performance variances against quarterly targets.',
        proposes: 'Recommends tailored skill-building modules addressing identified operational competency gaps.',
        executes: 'Sends automated deadline reminders for evaluations and generates monthly timesheet consolidations.',
        requiresApproval: 'Mandatory approval required: Disciplinary actions, compensation adjustments, formal promotions, and extended leave.'
      },
      reports: [
        'Attendance consistency and departmental turnover rates',
        'Cross-departmental performance index rankings',
        'Time-to-hire and average talent acquisition cost metrics',
        'Course completion rates across standardized internal SOP curricula'
      ],
      interDepartmentConnection: 'Supplies verified attendance and payroll inputs to Finance, while syncing KPI targets with Sales and Operations.'
    },
    finance: {
      name: 'Finance & Accounting',
      tagline: 'Cash-flow control, receivables management, budgetary enforcement, and real-time financial reporting',
      problems: [
        'Cash receipts and disbursements are not instantly reconciled against operational orders.',
        'Accounts receivable aging accumulates due to manual follow-ups and lack of proactive payment alerts.',
        'Executive decision-makers must wait until month-end close to view core operational financial figures.',
        'Risk of budget overruns caused by absence of multi-level authorization workflows.'
      ],
      dataManaged: [
        'Cash & Bank Account Ledgers',
        'Payment Vouchers, Receipts & Electronic Invoices',
        'Accounts Receivable (AR) & Accounts Payable (AP)',
        'Departmental Operating Budgets & Variance Limits',
        'Revenue, Cost of Goods Sold, and Profitability Statements'
      ],
      processes: [
        'Digital multi-tiered expenditure approvals based on authority thresholds',
        'Automated matching of incoming bank transactions against sales orders',
        'Automated payment reminders dispatched according to agreed credit terms',
        'Continuous cash-flow consolidation and periodic financial balancing'
      ],
      aiAssistance: {
        reads: 'Examines transaction streams, payment histories, executed contracts, and matched invoices.',
        analyzes: 'Forecasts rolling 30-to-90 day cash flows and identifies accounts presenting credit default risk.',
        proposes: 'Flags localized budget deficits and suggests optimal liquidity rebalancing strategies.',
        executes: 'Generates scheduled debt reminder notices and categorizes expenditures to appropriate cost centers.',
        requiresApproval: 'Mandatory approval required: Actual fund disbursements, bad-debt write-offs, and budgetary threshold modifications.'
      },
      reports: [
        'Daily and weekly cash-flow liquidity statements',
        'Accounts receivable aging analysis and bad-debt risk tables',
        'Budget vs. Actual expenditure comparisons by cost center',
        'Real-time estimated operational profit and loss statements'
      ],
      interDepartmentConnection: 'Receives signed contracts from Sales for automated billing; receives expense requests from HR and Marketing for budget governance.'
    },
    management: {
      name: 'Executive Management',
      tagline: 'Centralized operational command, SOP standardization, and comprehensive intelligence for leadership',
      problems: [
        'Leadership lacks unified operational visibility, relying on ad-hoc status requests to department heads.',
        'Cross-departmental coordination friction leading to blame-shifting during operational escalations.',
        'Strategic decisions driven by intuition rather than verified real-time empirical data.',
        'Institutional knowledge concentrated in key individuals rather than codified in accessible SOPs.'
      ],
      dataManaged: [
        'Enterprise-wide Strategic Objectives (OKR & KPI)',
        'Standard Operating Procedures (SOP) & Organizational Policies',
        'Unified System Audit Trail & Security Logs',
        'Cross-departmental Consolidated Intelligence Reports',
        'Enterprise Knowledge Vault & Governance Directives'
      ],
      processes: [
        'Objective setting and top-down metric cascading to functional business units',
        'Real-time milestone tracking and operational bottleneck detection',
        'Secure digital approval of decisions exceeding standard departmental authority',
        'Periodic operational reviews grounded in live empirical data'
      ],
      aiAssistance: {
        reads: 'Consolidates data across all functional modules: Commercial, Marketing, CS, HR, and Finance.',
        analyzes: 'Detects cross-departmental procedural bottlenecks and flags statistical metric anomalies.',
        proposes: 'Proposes operational remediation scenarios, resource reallocation plans, and workflow optimizations.',
        executes: 'Compiles the Daily Morning Executive Briefing with source attribution.',
        requiresApproval: 'Mandatory approval required: Strategic policy changes, structural budget shifts, and administrative security privilege elevations.'
      },
      reports: [
        'Executive Cockpit enterprise health overview',
        'Company-wide OKR strategic goal completion roadmap',
        'Operational efficiency metrics and cycle-time benchmarks',
        'Early-stage operational risk and anomaly alerts'
      ],
      interDepartmentConnection: 'Functions as the central coordination hub unifying data flows across all 5 operational divisions.'
    }
  },

  needs: {
    crm: {
      name: 'Enterprise CRS / CRM',
      tagline: 'Comprehensive customer relationship management, opportunity pipelines, and unified transaction lifecycles',
      coreValue: 'Transforms customer records from scattered personal notes into governed enterprise digital assets, seamlessly connecting marketing, sales, order fulfillment, and cash collection.',
      problems: [
        'Customer records fragmented across spreadsheets and personal chat accounts, creating data loss risks upon employee turnover.',
        'Absence of Customer 360: Sales teams lack support ticket context, while support staff cannot view signed commercial contract terms.',
        'Sales pipelines stall without visibility, leaving managers unable to identify which deal stages are bottlenecked.',
        'Disconnection between executed contracts, operational fulfillment, and real-time accounts receivable reconciliation with accounting.'
      ],
      solutionOverview: 'AI ENTERPRISE provides a standardized CRS / CRM module governing the end-to-end customer journey: from initial inquiry intake and consultant allocation to quotation drafting, contract closure, post-sales support, and revenue realization.',
      dataTypes: [
        'Customer 360 Profiles (Corporate entities, representatives, requirements, customer tiering)',
        'Inbound Leads & Source Attribution (Website, Digital Forms, Events, Marketing Campaigns)',
        'Sales Pipelines & Stage Progression (Qualification, Needs Assessment, Quotation, Negotiation, Closed-Won)',
        'Commercial Contracts, Purchase Orders, Payment Milestones & Linked Revenue Data',
        'Interaction Timeline (Logged Calls, Consultation Notes, Email Threads, Meeting Schedules)'
      ],
      operatingWorkflow: {
        input: 'Inbound inquiries received via website forms, digital campaigns, or direct entry by commercial consultants.',
        process: 'Standardizes contact data, executes deduplication checks, scores lead potential, and routes to account executives.',
        aiAutomation: 'AI evaluates prospect requirements, suggests consultative talking points, automates follow-up tasks, and estimates closing probability.',
        humanControl: 'Sales representatives conduct customer consultations, tailor quotation proposals, and submit commercial terms for internal review.',
        output: 'Contract executed, sales order generated, transaction data synchronized to accounting, and post-sales onboarding triggered.'
      },
      keyFeatures: [
        { title: 'Customer 360 Profiles', description: 'Centralized perspective of historical transactions, consultation notes, executed orders, and active support tickets.' },
        { title: 'Multi-stream Sales Pipelines', description: 'Visual progression across commercial deal stages, flagging overdue interactions and forecasting weighted pipeline revenue.' },
        { title: 'Quotation & Contract Governance', description: 'Generate quotations using approved templates, track discount authorizations, and maintain contracts linked to customer records.' },
        { title: 'Interaction Timelines', description: 'Chronological recording of every customer touchpoint: calls, meeting summaries, follow-up commitments, and action items.' },
        { title: 'Data Access Governance', description: 'Role-based access boundaries partitioned by department, sales squad, or individual representative to enforce confidentiality.' }
      ],
      aiAssistance: {
        reads: 'Examines purchase history, consultation records, opportunity pipeline stages, and representative response latency.',
        analyzes: 'Evaluates engagement velocity, interaction frequency, stage-specific drop-off rates, and consultant efficiency.',
        proposes: 'Recommends optimal outreach timing, objection-handling strategies, and context-relevant cross-sell opportunities.',
        executes: 'Categorizes incoming inquiries, updates customer segment tags, schedules calendar tasks, and issues appointment confirmations.',
        requiresApproval: 'Mandatory approval required: Non-standard discount levels, account reallocations, or customer record deletions.'
      },
      systemConnections: [
        'Integrated with Website & Portal (Scope A): Ingests inbound registration forms and inquiry leads via direct API synchronizations.',
        'Integrated with Accounting & Financial Management (Scope E): Reconciles payments, contracts, and billing schedules.',
        'Integrated with Customer Service & Support (Scope D): Hands over client accounts upon contract execution for continuous SLA support.',
        'Integrated with BI & Analytics (Scope J): Feeds pipeline velocity and stage conversion metrics into executive dashboards.'
      ],
      reportTypes: [
        'Inbound lead volume and source attribution trends over time',
        'Pipeline stage conversion rates and sales velocity indicators',
        'Quota attainment and performance tracking for individuals and teams',
        'Average response velocity and follow-up interaction frequency metrics'
      ],
      securityAndGovernance: {
        rbac: 'Hierarchical role-based access: Representatives access assigned accounts; team leads supervise squads; executives retain comprehensive visibility.',
        auditLog: 'Complete audit logging: captures record modifications, data exports, status updates, and user session timestamps.',
        approvalMechanism: 'Multi-tiered authorization protocols enforced for out-of-policy discounting or high-value customer reassignments.',
        dataScope: 'All customer databases reside within isolated enterprise tenant boundaries and are never shared with external third parties.'
      },
      faqs: [
        {
          q: 'Does the CRS / CRM system support migrating legacy customer data from Excel or other platforms?',
          a: 'Yes. AI ENTERPRISE provides data cleaning, deduplication, and automated ingestion tools from spreadsheet formats (Excel/CSV) or via standardized REST APIs to preserve historical transaction continuity.'
        },
        {
          q: 'Can sales representatives view customer accounts assigned to colleagues?',
          a: 'The system enforces strict RBAC boundaries: Representatives only view accounts assigned to them; Department Managers oversee their teams; Executive Leadership retains high-level visibility.'
        },
        {
          q: 'How does CRM communicate with Accounting (Scope E) upon contract closing?',
          a: 'Upon contract status transitioning to "Executed", the system automatically generates payment milestone records and draft electronic invoices for Accounting, removing manual coordination bottlenecks.'
        }
      ]
    },
    'ai-agent': {
      name: 'Specialized AI Agent Network',
      tagline: 'System of 9 dedicated AI Copilots aligned with functional business roles, governed by strict human approval safeguards',
      coreValue: 'AI does not operate as an unconstrained autonomous actor; it serves as a specialized Copilot: reading authorized data, conducting deep analysis, formulating proposals, and executing strictly upon human sign-off.',
      problems: [
        'Generic external chatbots lack enterprise context, cannot interpret internal records, and are disconnected from operational SOPs.',
        'Concerns regarding uncontrolled autonomous AI actions or unverified outputs introducing legal and reputational risks.',
        'Staff spend substantial daily hours manually aggregating data, researching internal procedures, and compiling status reports.',
        'Absence of data scoping for AI tools, presenting risks of sensitive internal information leaking across functional divisions.'
      ],
      solutionOverview: 'AI ENTERPRISE deploys a network of 9 specialized AI Copilots (AI CEO, AI Sales, AI Marketing, AI CS, AI HR, AI Finance, AI Voice, AI Workflow, AI Search/RAG). Each Copilot operates strictly within defined data domains and human-in-the-loop boundaries.',
      dataTypes: [
        'Enterprise operational indicators (KPI, OKR, financial statements, personnel metrics, project milestones)',
        'Internal policy libraries, compliance manuals, and Standard Operating Procedures (SOP)',
        'Domain-specific functional data partitioned across respective operational modules',
        'Audit logs capturing prompts, AI-generated proposals, and user authorization decisions'
      ],
      operatingWorkflow: {
        input: 'Operational user inquiry or scheduled system trigger (end-of-day close, anomaly threshold breach, inbound inquiry).',
        process: 'AI Agent queries authorized internal knowledge repositories and accesses scoped database records.',
        aiAutomation: 'Executes computations, verifies compliance policies, detects anomalies, and drafts structured action proposals.',
        humanControl: 'Authorized personnel review proposed actions, make modifications if required, and click Approve or Reject.',
        output: 'Action executed accurately (dispatches report, updates record stage, assigns task) and recorded in the Audit Log.'
      },
      keyFeatures: [
        { title: 'AI CEO — Executive Operations Copilot', description: 'Synthesizes cross-departmental intelligence, detects cash-flow and milestone bottlenecks, and highlights operational risks.' },
        { title: 'AI Sales & AI Marketing Copilot', description: 'Analyzes prospect profiles, calculates qualification scores, drafts outreach communications, and evaluates lead acquisition costs.' },
        { title: 'AI Customer Service & AI Voice', description: 'Suggests issue resolution paths, analyzes call sentiment dynamics, and ensures support communications adhere to standards.' },
        { title: 'AI HR & AI Finance', description: 'Reconciles standardized attendance, screens applicant resumes, verifies payment voucher compliance, and reconciles balances.' },
        { title: 'AI Search / Internal Knowledge RAG', description: 'Enables semantic natural-language retrieval of internal policies, compliance guides, and product specifications within authorized document scopes.' }
      ],
      aiAssistance: {
        reads: 'Reads only documentation and data fields explicitly authorized within each Agent\'s configured role profile.',
        analyzes: 'Metric trajectory variances, procedural deviations from SOP benchmarks, textual sentiment, and query contexts.',
        proposes: 'Draft email communications, executive summary briefings, operational remediation plans, and prioritized action checklists.',
        executes: 'Aggregates structured data, builds comparative tables, formats documents, and creates draft system records.',
        requiresApproval: 'Mandatory approval required: Any action impacting external stakeholders (email dispatch, funds transfer, policy alteration, formal sign-off).'
      },
      systemConnections: [
        'Orchestrates and integrates across all 11 core modules of AI ENTERPRISE (Scope A through Scope K).',
        'Embedded directly within individual user Workspaces aligned with functional job roles.',
        'Governed by the Multi-tier Authorization, Audit & Security Infrastructure (Scope K) to ensure data isolation.'
      ],
      reportTypes: [
        'Utilization frequency and task category distribution by AI Copilot role',
        'Approval, revision, and rejection rates for AI-formulated proposals',
        'Quantified time savings across standardized business workflows'
      ],
      securityAndGovernance: {
        rbac: 'Each AI Agent strictly inherits the RBAC permissions of the authenticated user session; cannot access data beyond user clearance.',
        auditLog: 'All user queries, model outputs, proposal generations, and human decisions are immutably recorded in system audit logs.',
        approvalMechanism: 'Human-in-the-Loop mandate: human decision-makers represent the mandatory final checkpoint before action execution.',
        dataScope: 'Data processing complies with configured tenant access policies and the data privacy agreements of the underlying infrastructure provider.'
      },
      faqs: [
        {
          q: 'Do AI Agents autonomously dispatch external emails or publish statements on behalf of the company?',
          a: 'No. All draft artifacts (emails, quotations, notices) formulated by AI Agents require explicit review and authorization by assigned personnel (Human-in-the-Loop) prior to release.'
        },
        {
          q: 'Is proprietary enterprise data used to train public commercial AI models?',
          a: 'Data processing strictly honors configured access controls and enterprise service agreements, ensuring proprietary records remain within designated tenant scopes.'
        },
        {
          q: 'What is the structural difference between this page (/solutions/ai-agent) and the /ai directory?',
          a: 'The /solutions/ai-agent page specifies underlying network architecture, data routing, and governance guardrails; the /ai directory showcases the 9 individual operational Copilots tailored by job role.'
        }
      ]
    },
    voice: {
      name: 'AI Voice Transcription & Call Analytics',
      tagline: 'Speech-to-Text conversation transcription, multi-speaker diarization, call summaries, and CRM task extraction',
      coreValue: 'Converts unstructured audio calls into structured, searchable digital text, enabling enterprises to oversee consultative quality, understand client demands, and update CRM records efficiently.',
      problems: [
        'Consultation details between agents and customers are frequently lost after call termination, leaving management blind to commitments.',
        'Staff spend substantial post-call time attempting to recall and manually log notes into CRM, causing critical detail omission.',
        'Objective evaluation of consultative quality across teams is difficult, often discovering communication lapses only after escalations occur.',
        'New representatives encounter steep learning curves mastering complex consultative scenarios during live calls.'
      ],
      solutionOverview: 'AI Voice provides call analytics and quality governance: supporting Vietnamese speech-to-text conversion, multi-speaker diarization, dialogue sentiment identification, key point extraction, post-call summary drafting, and automated CRM task suggestions.',
      dataTypes: [
        'Encrypted call audio recordings (stored in compliant enterprise repositories)',
        'Full conversational call transcripts with speaker diarization',
        'Post-call summaries (Core requirements, client budget, agreements, follow-up actions)',
        'Call evaluation indicators (Duration, sentiment trajectory, script compliance scores)'
      ],
      operatingWorkflow: {
        input: 'Voice call concluded between agent and customer (or live stream audio input).',
        process: 'Speech-to-text engine transcribes conversational audio with multi-speaker separation.',
        aiAutomation: 'AI evaluates content, extracts core discussion points, detects conversational tone, and drafts a structured post-call summary.',
        humanControl: 'Responsible agent reviews the drafted summary, adjusts details if necessary, and confirms saving to the CRM record.',
        output: 'Customer 360 profile updated with the interaction history and suggested follow-up tasks upon human confirmation.'
      },
      keyFeatures: [
        { title: 'Speech-to-Text with Speaker Diarization', description: 'Transcribes spoken dialogue into structured text, cleanly distinguishing between agent and customer utterances.' },
        { title: 'Automated Post-call Summaries', description: 'Extracts core customer requirements, estimated budget parameters, objections raised, and agreed commitments.' },
        { title: 'Next Best Action Recommendations', description: 'Suggests follow-up timelines, quotation collateral to deliver, or technical support tickets to open based on discussion points.' },
        { title: 'Tone & Procedural Compliance Analysis', description: 'Identifies conversational sentiment markers and assists quality supervisors in auditing compliance with SOP playbooks.' },
        { title: 'Direct CRM Timeline Synchronization', description: 'Attaches transcripts and summaries directly to linked customer profiles, eliminating manual copy-pasting.' }
      ],
      aiAssistance: {
        reads: 'Processes voice recording files alongside existing Customer 360 profile context.',
        analyzes: 'Detects key discussion terms, conversational context, tone indicators, and verbal commitments regarding pricing or project schedules.',
        proposes: 'Drafts post-call summaries, prioritized follow-up tasks, and suggested email or messaging templates.',
        executes: 'Drafts structured summaries and links them to customer profiles within the CRM interface.',
        requiresApproval: 'Staff must confirm summary accuracy prior to permanent record commit; automated outbound calling (if deployed) must strictly honor legal compliance frameworks.'
      },
      systemConnections: [
        'Directly linked with CRS / CRM & Sales (Scope B): Updates Customer 360 interaction logs and next-step tasks.',
        'Linked with Customer Service & Support (Scope D): Oversees service call quality and handles escalated complaints.',
        'Designed to integrate with enterprise SIP / VoIP telephony infrastructures via standardized API endpoints.'
      ],
      reportTypes: [
        'Call volume and total call duration analytics aggregated by day, week, and month',
        'Categorized customer inquiry themes ranked by frequency of occurrence',
        'Sentiment distribution breakdowns across responsible support and sales squads'
      ],
      securityAndGovernance: {
        rbac: 'Only department supervisors and assigned account representatives possess clearance to replay audio or inspect transcripts.',
        auditLog: 'Logs every access event, audio playback, or recording file export within system audit trails.',
        approvalMechanism: 'All modifications to customer records resulting from call summaries require human agent confirmation.',
        dataScope: 'Audio files reside in isolated storage partitions, with automated retention and deletion policies configured per enterprise rules.'
      },
      faqs: [
        {
          q: 'Does AI Voice on this page initiate unsolicited automated calls to customers?',
          a: 'No. The solution specified at /solutions/voice focuses on Speech-to-Text transcription and post-call quality analytics for completed interactions, distinct from outbound notification agents.'
        },
        {
          q: 'How is transcription accuracy evaluated?',
          a: 'Accuracy depends on recording quality and environmental noise factors. Interface metrics are simulated demonstrations showcasing speaker diarization and commercial terminology recognition.'
        },
        {
          q: 'How are voice recording files stored and protected?',
          a: 'Audio files are encrypted with 256-bit standards in isolated storage repositories. Only authorized personnel have playback access, and every access is logged in the system Audit Log.'
        }
      ]
    },
    automation: {
      name: 'Workflow Automation',
      tagline: 'Cross-departmental SOP workflow engine minimizing repetitive manual handoffs while enforcing operational guardrails',
      coreValue: 'Unifies fragmented departmental steps into an automated, transparent operational sequence with clear trigger conditions, authorization gates, and audit trails.',
      problems: [
        'Cross-departmental handoffs stall (sales closes deals and reminds accounting manually; accounting issues invoices and manually chats with the warehouse).',
        'Staff expend multiple daily hours copying data between disjointed systems, dispatching confirmation emails, and assigning tasks manually.',
        'Authorization processes (leave, advances, contracts, discounts) experience delays across multiple chat threads and paperwork.',
        'Bottlenecks remain hidden: Executives cannot determine where requests are stuck or identify which steps exceed SOP SLAs.'
      ],
      solutionOverview: 'The Workflow Automation module of AI ENTERPRISE establishes standardized process sequences based on the Trigger → Condition → Action → Approval → Result → Log model, supporting smooth, accountable, and auditable enterprise execution.',
      dataTypes: [
        'SOP Workflow Definitions (Step sequences, Assignees, SLA thresholds, Branch conditions)',
        'Active Workflow Execution States (In-progress, Pending Approval, Completed, Rejected)',
        'Trigger Event Telemetry (New Lead, New Order, Payment Confirmed, Contract Expiring)',
        'Compliance Inspection Records and Execution Audit Trails'
      ],
      operatingWorkflow: {
        input: 'Trigger Event: Commercial contract signed, employee submits advance request, new lead registered.',
        process: 'System evaluates Conditions: Does order value exceed approval limits? Which functional department is responsible?',
        aiAutomation: 'Automates task creation, populates form fields, assigns responsible staff, and sends notification reminders.',
        humanControl: 'Designated supervisors review documentation and authorize, reject, or request revisions (Approval).',
        output: 'Outcomes update across connected modules (finance logs voucher, HR records update, confirmation email dispatched) with full audit logging.'
      },
      keyFeatures: [
        { title: 'Trigger - Condition - Action Engine', description: 'Configure automated operational sequences ranging from simple tasks to complex branch logic without modifying source code.' },
        { title: 'Multi-level Approval Workflows', description: 'Supports sequential or parallel authorization chains, configuring financial or organizational hierarchy thresholds.' },
        { title: 'Cross-departmental Case Routing', description: 'Data transitions from Sales trigger downstream tasks in Accounting, Inventory, and CS upon status changes.' },
        { title: 'SLA Tracking & Escalation Alerts', description: 'Issues proactive reminders when deadlines approach and escalates overdue tasks to senior supervisors.' },
        { title: 'Transparent Execution Logs', description: 'Maintains chronological audit records: capturing actor, timestamp, outcome, and rejection rationales for every step.' }
      ],
      aiAssistance: {
        reads: 'Examines internal SOP guidelines, active request form fields, and historical approval records for similar cases.',
        analyzes: 'Evaluates procedural compliance with SOP rules, detects input discrepancies, and measures processing cycle times across stages.',
        proposes: 'Recommends task assignments based on staff workload capacity and suggests expedited reviews for standard recurring cases.',
        executes: 'Applies automated tags, advances workflow stages, generates reminder notifications, and updates database records.',
        requiresApproval: 'All financial, legal, or personnel privilege authorization checkpoints strictly require direct human confirmation.'
      },
      systemConnections: [
        'Directly linked with Task & Workflow Management (Scope G).',
        'Linked with HR & Training (Scope F) to determine reporting lines and approval authority tiers.',
        'Linked with CRS / CRM & Sales (Scope B) and Accounting & Finance (Scope E) for commercial order workflows.'
      ],
      reportTypes: [
        'Average completion cycle times categorized by workflow template',
        'Operational bottleneck reports highlighting stages experiencing recurring delays',
        'Proportion of automated workflow steps versus manual interventions'
      ],
      securityAndGovernance: {
        rbac: 'Enforces permissions determining who can design workflows, who can approve steps, and who possesses view-only access.',
        auditLog: 'Preserves timestamped audit logs for all approval and rejection actions to support governance audits.',
        approvalMechanism: 'No automated routine is permitted to bypass established corporate authorization checkpoints.',
        dataScope: 'Operational records are visible exclusively to authorized actors within the designated workflow responsibility chain.'
      },
      faqs: [
        {
          q: 'How does the workflow engine handle execution exceptions?',
          a: 'The engine initiates an exception-handling branch: suspending automated progression, flagging an alert indicator, and routing notification to senior supervisors for intervention.'
        },
        {
          q: 'Can non-technical managers configure new operational workflows without coding?',
          a: 'Yes. An intuitive interface allows defining Trigger - Condition - Action rules that map directly to internal corporate SOP documents without source code modification.'
        },
        {
          q: 'Can managers execute approvals on mobile devices?',
          a: 'Yes. All approval requests trigger instant notifications across desktop and mobile Workspace interfaces, allowing managers to inspect summaries and approve in seconds.'
        }
      ]
    },
    website: {
      name: 'Unified Enterprise Website',
      tagline: 'Brand portal connected directly with CRM, supporting automated inbound funnel synchronization',
      coreValue: 'The enterprise website is not a static promotional brochure; it is a connected digital entryway linking directly into corporate operations to capture and route inbound inquiries into commercial pipelines.',
      problems: [
        'Websites built on disconnected external platforms route customer inquiries to personal inboxes or standalone spreadsheets, risking missed leads.',
        'Delayed sales follow-up on website inquiries (taking hours or days), substantially diminishing conversion probability.',
        'Website messaging, pricing, and collateral are difficult to update, requiring total reliance on external agencies.',
        'Inability to measure full-funnel yield: Unknown which marketing campaigns drive visitor traffic that converts into contracted revenue.'
      ],
      solutionOverview: 'Within the AI ENTERPRISE architecture, the Website module (Scope A) is integrated directly with enterprise management: inquiry forms, contact submissions, and interaction events synchronize via secure APIs into the CRS / CRM system to activate timely sales engagement.',
      dataTypes: [
        'Brand Identity, Corporate Profile & Digital Assets (Logos, Color Palettes, Typography)',
        'Official Content Repositories, Product Documentation, and Media Assets',
        'Inbound Inquiry Forms, Diagnostic Surveys, and Consultation Requests',
        'Website Interface Templates, Version Histories, and Campaign Landing Pages'
      ],
      operatingWorkflow: {
        input: 'Visitors browse the corporate website, review solutions, and submit contact or consultation inquiry forms.',
        process: 'System sanitizes inputs, enforces anti-spam validation, and tags campaign source metadata (UTM parameters).',
        aiAutomation: 'AI assists in validating input formatting, categorizing prospect industry and requirements, and routing into CRM.',
        humanControl: 'Sales consultants receive structured notifications in their Workspace queues and initiate standardized outreach.',
        output: 'Inquiry record safely stored within Customer 360, establishing the customer lifecycle from the very first interaction.'
      },
      keyFeatures: [
        { title: 'Direct Form Synchronization to CRM', description: 'Synchronizes registration data directly into internal systems, eliminating manual data transposition steps.' },
        { title: 'Centralized Content & Identity Management', description: 'Manage corporate information, service portfolios, and vision statements directly from the AI ENTERPRISE Admin console.' },
        { title: 'Specialized Landing Page Deployment', description: 'Easily launch tailored thematic pages supporting industry-specific campaigns, events, or product releases.' },
        { title: 'Cross-device Responsive Performance', description: 'Engineered for seamless visual presentation across desktops, tablets, and smartphones with fast loading speeds.' },
        { title: 'AI Website Assistant Integration', description: 'Assists web visitors in discovering products and understanding policies grounded in official knowledge repositories.' }
      ],
      aiAssistance: {
        reads: 'Examines official enterprise information repositories, FAQs, and submitted customer inquiry text.',
        analyzes: 'Evaluates prospect requirements submitted in registration forms to classify intent and suggest appropriate teams.',
        proposes: 'Suggests draft article copy, refines SEO meta descriptions, and optimizes call-to-action (CTA) button copy.',
        executes: 'Routes website inquiries to the appropriate sales team queues according to business rules.',
        requiresApproval: 'All newly drafted web collateral, pricing updates, or corporate announcements require administrative review before publication.'
      },
      systemConnections: [
        'Directly linked with Administration, Permissions & Security (Scope K): Manages enterprise configuration and digital branding.',
        'Linked with CRS / CRM & Sales (Scope B): Routes inbound inquiry records into commercial opportunity pipelines.',
        'Linked with Digital Marketing & Campaigns (Scope C): Measures multi-channel visitor conversion efficiency.'
      ],
      reportTypes: [
        'Registration form submission volume tracked by day, week, and month',
        'Conversion rates from unique website visitors to qualified inbound leads',
        'Top-performing solution pages and content assets by visitor engagement depth'
      ],
      securityAndGovernance: {
        rbac: 'Separation of duties: Content Editors draft copy, Administrators approve publication, Sales teams receive lead data.',
        auditLog: 'Logs content edits, form layout modifications, and publication events across all pages.',
        approvalMechanism: 'Structured publishing workflows require editorial approval prior to making updates public.',
        dataScope: 'Data captured from website forms is encrypted in transit and protected per enterprise security protocols.'
      },
      faqs: [
        {
          q: 'Is the website optimized for speed and SEO rankings?',
          a: 'Yes. The website is engineered with modern web standards, optimized Core Web Vitals, structured schema meta tags, and responsive layouts across desktop and mobile devices.'
        },
        {
          q: 'How rapidly do sales representatives receive inquiries submitted through the website?',
          a: 'Form submissions synchronize via automated API / webhook pipelines into CRM queues (Scope B), carrying campaign attribution tags (UTM) for immediate prioritization.'
        },
        {
          q: 'Can non-technical staff update website banners and solution descriptions independently?',
          a: 'Yes. All text, imagery, and promotional solution overviews can be updated through the Admin console without relying on external web agencies.'
        }
      ]
    },
    bi: {
      name: 'Real-Time BI & Executive Analytics',
      tagline: 'Multi-dimensional executive intelligence hub, visual KPI/OKR scorecards, and operational trend analysis',
      coreValue: 'Minimizes delays associated with manual month-end spreadsheet consolidation, equipping executives with real-time operational indicators to steer organizations through data-driven decisions.',
      problems: [
        'Leadership waits extended periods after period close to view consolidated department figures, delaying strategic decisions.',
        'Data discrepancies between divisions (sales reports one revenue figure, accounting reconciles a different sum, warehouse counts vary).',
        'Substantial administrative labor expended copying and pasting fragmented spreadsheets into executive slide decks.',
        'Lack of early warning indicators: Revenue dips or expense overruns are frequently discovered only after impact has occurred.'
      ],
      solutionOverview: 'The Reporting & Business Intelligence module (Scope J) serves as the operational data nerve center: consolidating information streams from all modules, computing key performance indicators (KPIs), rendering visual dashboards, and issuing anomaly alerts.',
      dataTypes: [
        'Commercial & Revenue Indicators (Periodic sales volume, Average deal size, Stage win rates)',
        'Operational & Productivity Metrics (Completed task counts, SLA resolution velocity)',
        'Financial Indicators (Collected revenue, Accounts receivable aging, Operational burn rates)',
        'Human Capital Indices (Headcount, Turnover velocity, Average productivity per employee)',
        'AI & Automation Yield Metrics (Automated tasks executed, User proposal acceptance rates)'
      ],
      operatingWorkflow: {
        input: 'Continuous event telemetry generated from daily operations: new orders, concluded calls, authorized vouchers, generated invoices.',
        process: 'Data engine sanitizes and aggregates incoming transactional streams into governance metric data cubes.',
        aiAutomation: 'AI identifies statistical anomalies (unexpected revenue dips in specific cohorts, abnormal cost spikes) and generates alerts.',
        humanControl: 'Leadership reviews dashboards, drills down into underlying source records, and issues strategic directives.',
        output: 'Executive scorecards update dynamically from incoming operational data, eliminating manual compilation labor.'
      },
      keyFeatures: [
        { title: 'Executive Cockpit Dashboard', description: 'Consolidates mission-critical enterprise indicators on a unified interface tailored for executive leadership.' },
        { title: 'Department-Specific Intelligence Views', description: 'Dedicated scorecards for functional heads: Commercial, Marketing, Customer Service, HR, and Finance.' },
        { title: 'Strategic Goal & Key Result Tracking (KPI / OKR)', description: 'Connects strategic objectives with daily execution metrics, evaluating milestone completion in real time.' },
        { title: 'AI & Automation Efficiency Measurement', description: 'Provides transparent reporting on organizational workload reductions delivered by automated workflows and AI Copilots.' },
        { title: 'Anomaly & Trend Alerting', description: 'Automatically flags indicators breaching safety thresholds or exhibiting negative momentum for timely intervention.' }
      ],
      aiAssistance: {
        reads: 'Examines authorized aggregated metric databases across all operational modules within the enterprise OS.',
        analyzes: 'Evaluates variable correlations (marketing spend vs. closed contracts), growth velocity, and variance against strategic plans.',
        proposes: 'Generates periodic executive summary briefings highlighting underlying drivers behind statistical fluctuations.',
        executes: 'Compiles visual charts, refreshes dashboard scorecards, and dispatches scheduled performance digests.',
        requiresApproval: 'All structural budget adjustments or governance policy interventions based on metrics remain strictly within leadership authority.'
      },
      systemConnections: [
        'Aggregates data across functional modules of AI ENTERPRISE (Scope A, B, C, D, E, F, G, H, I, K).',
        'Embedded directly within the Executive Workspace to provide real-time strategic visibility.',
        'Supplies verified empirical data to the AI CEO Copilot (Scope I) to formulate executive recommendations.'
      ],
      reportTypes: [
        'Real-time revenue realization and commercial pipeline velocity reports',
        'Customer support resolution velocity and escalation management summaries',
        'Company-wide OKR and KPI strategic milestone attainment tracking',
        'Operational productivity statistics and workflow automation volume'
      ],
      securityAndGovernance: {
        rbac: 'Enforces strict role-based dashboard access clearance: managers inspect only metrics within their functional jurisdiction.',
        auditLog: 'Logs every viewing of strategic reports and every dataset export operation out of the platform.',
        approvalMechanism: 'Metric formulations, weighting logic, and KPI thresholds require formal executive authorization.',
        dataScope: 'All analytical metrics are computed directly from the enterprise\'s isolated tenant database per corporate governance policies.'
      },
      faqs: [
        {
          q: 'Do BI dashboards update in real time?',
          a: 'Yes. The system recalculates visual charts as operational events, invoices, or support tickets are committed, minimizing latency compared to manual batch reporting.'
        },
        {
          q: 'Can analytical reports be exported to Excel or PDF formats?',
          a: 'Yes. Dashboards support export to Excel, CSV, or formatted PDF documents for executive board sessions; every export is tracked in the system Audit Log.'
        },
        {
          q: 'Can enterprises customize proprietary KPI / OKR calculation formulas?',
          a: 'Yes. Executive leadership can configure metric weighting models, target thresholds, and evaluation cadences aligned with corporate governance frameworks.'
        }
      ]
    }
  },

  visuals: {
    common: {
      illustrativeData: '[Illustrative Data]',
      illustrativeScenario: '[Illustrative Scenario]',
      deviceVisualization: '[Device Preview]',
      encryptionNotice: '256-bit encrypted audio storage',
      roleBasedAccess: 'Role-based access clearance enforced',
      stepPrefix: 'Step',
      status: 'Status'
    },
    sales: {
      tabPipeline: '1. Kanban Pipeline',
      tabCustomer360: '2. Customer 360',
      tabFunnel: '3. Conversion Funnel',
      tabHandoff: '4. Contract → Finance → CS Handoff',
      pipelineTitle: 'Sales Opportunity Pipeline',
      pipelineSubtitle: 'Track deals from initial lead intake to contract execution and operations handoff',
      pipelineTotalLabel: 'Total Pipeline Value:',
      colApproach: 'Qualification & Discovery',
      colQuote: 'Assessment & Proposal',
      colNegotiation: 'Contract Negotiation',
      colWon: 'Closed-Won & Handoff',
      customer360Title: 'Customer 360° Profile',
      customer360Subtitle: 'Corporate entity dossier, credit limits, and interaction timeline',
      customerVipBadge: 'Key Enterprise Account',
      customerIndustry: 'Industrial Manufacturing & Chemical Distribution',
      statTotalRevenue: 'Cumulative Revenue',
      statOpenOrders: 'Active Contracts',
      statDebt: 'Current Receivables',
      statHealth: 'Account Health Index',
      statHealthVal: 'Excellent (CSAT 9.4/10)',
      timelineTitle: 'Recent Interaction Timeline',
      funnelTitle: 'Full-Funnel Sales Conversion',
      funnelSubtitle: 'Analyze stage drop-off rates and average sales cycle duration',
      handoffTitle: 'Cross-Departmental Workflow: Sales → Finance → Customer Service',
      handoffSubtitle: 'Instant event-bus data forwarding eliminates manual email notifications',
      step1Title: 'Deal Closing & Digital Signature',
      step2Title: 'Finance Receives Voucher Automatically',
      step3Title: 'CS Activates Service & Warranty Profile',
      step4Title: 'Executive Leadership Authorizes Revenue'
    },
    marketing: {
      tabFunnel: '1. Source → Lead → Revenue Funnel',
      tabChannels: '2. Channel Yield (CAC & CPL)',
      tabCalendar: '3. Content & Campaign Calendar',
      tabNurturing: '4. Nurture Automation',
      funnelTitle: 'Closed-Loop Funnel: From Marketing Spend to Realized Revenue',
      funnelSubtitle: 'Measure attributed revenue per marketing dollar without manual reconciliation',
      roiLabel: 'Omnichannel ROI: 380%',
      channelsTitle: 'Marketing Channel Performance Rankings',
      channelsSubtitle: 'Compare Cost Per Lead (CPL) against Customer Acquisition Cost (CAC)',
      calendarTitle: 'Campaign Schedule & Content Editorial Calendar',
      calendarSubtitle: 'Orchestrate multi-channel assets from blog posts to webinars',
      nurturingTitle: 'Behavior-Driven Lead Nurturing Workflow',
      nurturingSubtitle: 'Segment cohorts by behavioral engagement and dispatch personalized communications'
    },
    customerService: {
      tabInbox: '1. Omnichannel Ticket Queue',
      tabSla: '2. SLA Commitment Countdown',
      tabTimeline: '3. Issue Resolution Timeline',
      tabCsat: '4. Satisfaction Distribution (CSAT)',
      inboxTitle: 'Unified Omnichannel Ticket Queue',
      inboxSubtitle: 'Categorize inbound requests from Email, Website, Customer Portal, and Calls',
      slaTitle: 'SLA Commitment Countdown Monitor',
      slaSubtitle: 'Color-coded visual warnings and automated escalations prior to SLA breaches',
      timelineTitle: 'Customer Incident Resolution Case Study',
      timelineSubtitle: 'Transparent audit tracking intake, diagnosis, resolution, and apology communications',
      csatTitle: 'Customer Satisfaction Analytics (CSAT & NPS)',
      csatSubtitle: 'Measure post-resolution sentiment and customer repurchase rates'
    },
    hr: {
      tabAttendance: '1. Timesheets & Leave Requests',
      tabOnboarding: '2. Onboarding Checklists',
      tabSkillMatrix: '3. Skill & Competency Matrix',
      tabTraining: '4. Internal Curricula Pathways',
      attendanceTitle: 'Digital Timesheets & Leave Approvals',
      attendanceSubtitle: 'Biometric and facial recognition telemetry synchronized with standard schedules',
      onboardingTitle: '30-Day New Hire Onboarding Workflow',
      onboardingSubtitle: 'Automate workstation provisioning, system access, training syllabi, and mentor assignment',
      skillMatrixTitle: 'Core Competency & Skill Matrix',
      skillMatrixSubtitle: 'Evaluate current staff proficiency against standard role benchmarks',
      trainingTitle: 'Professional Development & SOP Training Pathways',
      trainingSubtitle: 'Track module completion velocity and periodic comprehension assessments'
    },
    finance: {
      tabCashflow: '1. Cash-Flow Projection',
      tabAging: '2. Aging Analysis (AR)',
      tabBudget: '3. Budget vs. Actual',
      tabReconciliation: '4. Bank & Invoice Reconciliation',
      cashflowTitle: 'Real-Time Cash Receipts & Disbursements Monitor',
      cashflowSubtitle: 'Rolling 30-to-60 day liquidity forecast based on receivables and recurring obligations',
      agingTitle: 'Accounts Receivable Aging Analysis',
      agingSubtitle: 'Automated warnings and credit flags when invoices exceed 45 days overdue',
      budgetTitle: 'Departmental Budget Variance Control',
      budgetSubtitle: 'Compare actual departmental spending against annual authorized allocations',
      reconciliationTitle: 'Automated Bank Statement & Electronic Invoice Matching',
      reconciliationSubtitle: 'AI matches transaction amounts, contract codes, and beneficiaries with high precision'
    },
    management: {
      tabCockpit: '1. Executive Cockpit',
      tabOkr: '2. Strategic OKR Tree',
      tabExceptions: '3. Exception Approval Queue',
      tabMorningBrief: '4. Sourced Morning Briefing',
      cockpitTitle: 'Executive Operations Cockpit',
      cockpitSubtitle: 'Synthesizes enterprise health indicators across Revenue, Expenses, Clients, and Talent',
      okrTitle: 'Strategic Objectives & Key Results (Company OKR)',
      okrSubtitle: 'Cascades top-level corporate priorities into departmental and individual key results',
      exceptionsTitle: 'Urgent Operational Exception Approval Queue',
      exceptionsSubtitle: 'High-value discount proposals, headcount variances, and out-of-budget expenditures',
      morningBriefTitle: 'AI-Compiled Executive Morning Briefing',
      morningBriefSubtitle: 'Highlights 24-hour metric variances and suggests prioritized leadership actions'
    },
    crm: {
      headerCompany: 'An Phat Technology Joint Stock Company (AP Tech)',
      headerVipBadge: 'VIP Enterprise Account',
      headerCode: 'Code: KH-2026-0842',
      headerReps: 'Representative: Mr. Nguyen Van Hung (COO) • Assigned: Tran Thi Mai (Sales Lead)',
      statRevenueLabel: 'Cumulative Revenue',
      statRelationLabel: 'Relationship Status',
      statRelationVal: 'Active Positive Engagement',
      tabTimeline: 'Interaction Timeline',
      tabContracts: 'Contracts & Quotes',
      tabBilling: 'Invoicing & Accounting (Scope E)',
      tabService: 'Support & Warranty (Scope D)',
      pipelineHeader: 'Multi-stream Sales Pipeline (B2B Deals)',
      pipelineSubtitle: 'Visualize deal progression from lead qualification to contract execution and handoff'
    },
    aiAgent: {
      title: '9 Specialized AI Copilots in Operation',
      subtitle: 'Closed-loop sequence: Read scoped data → Conduct analysis → Propose actions → Human signs off',
      step1Title: '1. Enterprise Employee (User)',
      step1Badge: 'Triggering Actor',
      step1Desc: 'Staff member submits operational prompt from Workspace (e.g., "Draft contract reconciliation memo for AP Tech").',
      step2Title: '2. Specialized AI Agent',
      step2Badge: 'Semantic Parsing',
      step2Desc: 'Agent parses intent, determines linked functional modules (Scope B CRM + Scope E Finance), and verifies clearance.',
      step3Title: '3. Scoped Data Access (RBAC)',
      step3Badge: 'Tenant Data Isolation',
      step3Desc: 'System verifies authentication token: Agent ONLY loads AP Tech data assigned to this representative, preventing data leakage.',
      step4Title: '4. Structured Action Proposal',
      step4Badge: 'Draft Solution',
      step4Desc: 'Agent synthesizes records, computes figures, and compiles a complete draft proposal delivered to the supervisor interface.',
      proposalCardTitle: 'AI Agent Draft Proposal (Pending Human Review)',
      proposalCardSubtitle: 'Extracted from Scope B (Contract #HD-2026-04) and Scope E (Bank Payment Order)',
      btnApprove: 'Approve & Execute',
      btnReject: 'Reject / Request Revision',
      approvedAlert: 'Successfully approved! Action executed and recorded in Audit Log.',
      rejectedAlert: 'Proposal rejected. Revision feedback returned to AI Agent.'
    },
    voice: {
      badgeFlow: 'Call Audio Analysis & Transcription Flow',
      titleFlow: 'Operational Flow: Audio Waveform → Diarized Transcript → AI Summary → Verified CRM Task',
      callInfoTitle: 'CRM Solution Consultation Call Recording',
      customerName: 'Client: Mr. Minh — Chief Operating Officer, TechCorp',
      callDuration: 'Duration: 06 min 42 sec • 2 distinct audio channels separated',
      transcriptTitle: 'Full Diarized Conversation Transcript (Speech-to-Text)',
      summaryTitle: 'Automated AI-Suggested Post-Call Summary',
      summaryReq: 'Core Requirements:',
      summaryReqVal: 'Deploy CRM for 35 commercial sales representatives and integrate with existing accounting software.',
      summaryBudget: 'Projected Budget:',
      summaryBudgetVal: '200 - 300 million VND, structured across 2 disbursement milestones.',
      summaryNext: 'Proposed Next Action:',
      summaryNextVal: 'Deliver detailed quotation proposal and schedule technical feature demonstration next Thursday.',
      btnCreateTask: 'Generate CRM Task from this Summary',
      taskCreatedSuccess: 'CRM follow-up task successfully scheduled!'
    },
    automation: {
      badgeCanvas: 'Visual Workflow Canvas',
      titleCanvas: 'Operational Logic: Trigger → Condition (Branching) → Action → Approval → Result → Audit Log',
      btnBranchHigh: 'Branch >100M VND (CFO Approval)',
      btnBranchStd: 'Standard Branch (<100M VND)',
      btnBranchException: 'Exception Branch (Risk Warning)',
      stepTrigger: 'Trigger: New Order Created',
      stepTriggerDesc: 'Sales representative logs a commercial sales order in CRM totaling 150,000,000 VND',
      stepCondition: 'Condition: Value Threshold Check',
      stepConditionDesc: 'Value > 100M VND → Triggers approval workflow requiring Department Head and CFO authorization',
      stepAction: 'Action: Generate Finance Voucher',
      stepActionDesc: 'Dispatches notification to CFO accompanied by automated gross margin analysis',
      stepApproval: 'Approval: Mandatory Human Sign-off',
      stepApprovalDesc: 'Mandatory checkpoint: Awaiting CFO digital signature prior to contract release',
      stepResult: 'Result: Finalization & Handoff',
      stepResultDesc: 'System generates accounting vouchers and dispatches confirmation notices to customer'
    },
    website: {
      badgePortal: 'Unified Enterprise Website',
      titlePortal: 'Conversion Pipeline: Registration Form → UTM Parsing → API Sync to CRM (Scope B)',
      btnDesktop: 'Desktop Preview',
      btnMobile: 'Mobile Preview',
      formTitle: 'Enterprise Solution Consultation Request',
      formName: 'Full Name',
      formEmail: 'Corporate Email',
      formCompany: 'Company Name',
      formNeed: 'Solution of Interest',
      formBtnSubmit: 'Submit Consultation Request',
      syncAlertSuccess: 'Data successfully synchronized into CRM (Scope B) via event stream!'
    },
    bi: {
      badgeBi: '3-Tier Executive BI Architecture',
      titleBi: 'Visual Analytics: Metric Scorecards → Trend Analysis → Drill-Down to Source Records',
      tier1Title: 'TIER 1: EXECUTIVE KPI SCORECARD (COMPANY-WIDE OVERVIEW)',
      tier2Title: 'TIER 2: DEPARTMENTAL ANALYSIS & MOMENTUM TRENDS',
      tier3Title: 'TIER 3: AUDIT DRILL-DOWN TO UNDERLYING TRANSACTION RECORDS',
      statRevenue: 'Monthly Realized Revenue',
      statMargin: 'Gross Profit Margin',
      statPipeline: 'Total Pipeline Value',
      statCsat: 'Customer CSAT Index'
    }
  }
};

export default enSolutions;
