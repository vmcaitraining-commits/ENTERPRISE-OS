import { TranslationDictionary } from '../../types';

const enIndustries: TranslationDictionary = {
  overview: {
    badge: 'SPECIALIZED BUSINESS ARCHITECTURE',
    badgeSubtitle: '8 Core Industry Sectors',
    title: 'AI ENTERPRISE Solutions',
    titleHighlight: 'Across 8 Core Industries',
    subtitle: 'Moving beyond one-size-fits-all software. Each industry sector features distinct operating rhythms, critical workflow bottlenecks, and targeted module configurations engineered to resolve domain-specific challenges.',
    sectionHeader: 'Standardized Architecture Across 8 Industry Sectors',
    sectionSubheader: 'Explore daily operating rhythms, critical workflow bottlenecks, and interactive AI scenarios for each sector.',
    sectorCounter: '8 / 8 Industry Tracks',
    flowLabel: 'Operational Data Flow:',
    exploreCardLink: 'Explore Industry Blueprint',
    survey: {
      badge: 'UNLISTED OR HIGHLY SPECIALIZED INDUSTRIES',
      title: 'Does your enterprise operate in a specialized domain?',
      description: 'VMC Group delivers bespoke architectural assessments and tailored operating system designs for specialized domains (Healthcare, High-Tech Agriculture, Logistics, Finance & Insurance) under strict confidential 1-on-1 consultations.',
      ndaBadge: 'Protected under formal bilateral non-disclosure agreements (NDA)',
      ctaButton: 'Request Specialized Architecture Assessment',
      preselectedOption: 'Other Specialized Industry (Assessment Request)'
    }
  },

  detail: {
    breadcrumb: 'Industry Solutions',
    architectureBadge: 'Industry Operational Architecture',
    titlePrefix: 'Enterprise Solution',
    problemSummaryHeading: 'Prevalent Operational Bottlenecks:',
    surveyCta: 'Assess Operating Status for {{name}}',
    viewDailyCta: 'View Daily Operation',
    snapshot: {
      heading: 'REAL-WORLD OPERATIONAL CONTEXT',
      badge: 'Standardized Blueprint',
      dailyVolumeLabel: 'Daily Transaction Volume:',
      primaryChannelsLabel: 'Primary Interaction Channels:',
      keyConstraintLabel: 'Critical Operational Constraint:',
      complianceNoteLabel: 'Compliance & Governance Requirement:',
      disclaimer: '* Illustrative operational parameters structured to VMC AI ENTERPRISE standards.'
    },
    daily: {
      badge: 'DAILY OPERATIONAL REALITY',
      heading: 'End-to-End Operating Workflow Throughout the Day',
      subheading: 'Eliminating fragmented ad-hoc spreadsheets and chat threads, every operational node in {{name}} is seamlessly orchestrated.',
      actorLabel: 'Actor',
      systemActionLabel: 'System Action'
    },
    modules: {
      badge: 'TARGETED MODULE CONFIGURATION',
      heading: 'Core Architecture Modules Configured for {{name}}',
      subheading: 'Eliminating bloated, unused features. The system selectively provisions targeted modules engineered to resolve sector-specific operational bottlenecks.',
      interopLabel: 'Cross-Module Interoperability',
      inputDataLabel: 'Input Data Stream:',
      coreProcessLabel: 'Core Processing Logic:',
      outputDataLabel: 'Output & Control Checkpoints:'
    },
    kpi: {
      badge: 'OPERATIONAL PERFORMANCE METRICS',
      heading: 'Core Operational KPIs & Benchmarks',
      subheading: 'Reflecting underlying operational health and fulfillment capacity, systematically monitored within the Scope J BI & Executive Analytics module.',
      kpiIndexLabel: 'Metric',
      formulaLabel: 'Calculation Logic:',
      benchmarkLabel: 'Reference Target Benchmark:',
      businessImpactLabel: 'Strategic Business Impact:',
      disclaimer: '* Illustrative sample data demonstrating metrics governance methodology.'
    },
    roadmap: {
      badge: 'PRACTICAL IMPLEMENTATION ROADMAP',
      heading: '3-Stage Disciplined Rollout Plan',
      subheading: 'Phased rollout methodology: data foundation and schema governance first, cross-departmental workflow orchestration second, AI copilots and advanced optimization third.',
      deliverablesLabel: 'Key Milestone Deliverables:'
    },
    cta: {
      badge: 'SPECIALIZED ARCHITECTURE SURVEY FOR {{nameUpper}}',
      heading: 'Ready to Standardize Operations Across Your Enterprise?',
      description: 'VMC Group enterprise system architects partner with your leadership team to diagnose critical operational bottlenecks and configure modular deployments matched to your business scale.',
      submitButton: 'Schedule In-Depth Consultation for {{name}}',
      exploreOtherButton: 'Explore the Other 7 Industry Blueprints',
      preselectedNote: 'The sector "{{name}}" will be pre-selected in your consultation request form.'
    }
  },

  visuals: {
    journey: {
      badge: 'OPERATIONAL LIFECYCLE & CRITICAL BOTTLENECK AUDIT',
      heading: 'Operational Data Architecture Flow — {{industryName}}',
      subheading: 'Select each phase of the workflow to inspect operational handoffs and system bottleneck remediations.',
      legendNormalized: 'Standardized Workflow',
      legendBottleneck: 'High-Risk Operational Bottleneck',
      bottleneckBadge: 'Bottleneck',
      smoothBadge: 'Streamlined',
      phaseLabel: 'Phase {{step}} of {{total}}',
      bottleneckTitle: 'Real-World Operational Bottleneck:',
      systemSupportTitle: 'AI ENTERPRISE System Safeguard:',
      statusLabel: 'Status:',
      statusControlled: 'Governed by System Safeguard Checkpoints',
      statusStandard: 'Standardized Operating Procedure',
      interfaceLabel: 'Workspace Interface: Unified Operational Workspace'
    },
    aiDemo: {
      badge: 'SPECIALIZED AI COPILOT OPERATIONAL SIMULATION',
      runSimulation: 'Run AI Diagnostic Simulation',
      processingText: 'Synthesizing data streams...',
      liveState: 'Live State',
      processingWait: 'Specialized AI Copilot is cross-checking operational rules and data records...',
      summaryHeading: 'System Preliminary Synthesis:',
      recommendationsHeading: 'Recommended Remediation Actions:',
      actionItemsHeading: 'Human Decision Checkpoints Required:',
      riskLevel: {
        high: 'RISK LEVEL: HIGH',
        medium: 'RISK LEVEL: MEDIUM',
        low: 'RISK LEVEL: LOW'
      }
    }
  },

  sectors: {
    // -------------------------------------------------------------------------
    // BATCH B: TRADE & RETAIL (IND-TRD-01)
    // -------------------------------------------------------------------------
    trade: {
      slug: 'trade',
      name: 'Trade & Retail',
      tagline: 'Consolidate omnichannel orders, configure branch warehouse data flows, and personalize shopper lifecycle engagement',
      sectorCode: 'IND-TRD-01',
      heroProblemSummary: 'Retail enterprises frequently suffer from fragmented customer data siloed across disjointed sales channels (brick-and-mortar storefronts, e-commerce websites, third-party marketplaces, and social channels). Surging order volumes overwhelm disconnected warehouse spreadsheets, causing overselling, fulfillment delays, and forfeited repeat purchase opportunities.',
      operatingSnapshot: {
        dailyVolume: '300 - 3,000 orders/day [Illustrative Scenario]',
        primaryChannels: 'Physical Stores, E-commerce Web, Marketplaces, Social Channels',
        keyConstraint: 'Inventory synchronization rules or API connection with enterprise warehouse/WMS software',
        complianceNote: 'Order-level electronic invoicing compliance and consumer privacy protection'
      },
      dailyOperation: [
        {
          time: '07:30',
          title: 'Scan and Ingest Overnight Orders Across Omnichannel Sources',
          actor: 'Fulfillment Supervisor & Online Sales Lead',
          desc: 'Automated order ingestion consolidates transactions from e-commerce marketplaces, brand web stores, and messaging endpoints into a unified operations console via integrated APIs.',
          systemAction: 'Application Scenario: Configures rules to update temporary available inventory allocations across active sales channels.'
        },
        {
          time: '09:30',
          title: 'Sync Branch Warehouse Inventory & Route Fulfillment Points',
          actor: 'Warehouse Dispatch Team',
          desc: 'Intelligent routing scenarios propose order allocation to optimal branch warehouses to assist in reducing transit delivery times.',
          systemAction: 'Workflow Demonstration: Generates SKU-level pick-lists formatted for branch warehouse fulfillment staff.'
        },
        {
          time: '14:00',
          title: 'Handover to 3PL Carriers & Generate Tracking Waybills',
          actor: 'Packaging Team & 3PL Logistics Carriers',
          desc: 'Barcodes are scanned on outgoing parcels, transfer manifests are issued to dispatch couriers, and in-transit delivery tracking states are initiated.',
          systemAction: 'Workflow Demonstration: Triggers automated SMS Brandname/Zalo notification workflows containing tracking numbers via carrier API integration.'
        },
        {
          time: '17:30',
          title: 'Reconcile COD Delivery Status & Record Revenue Inflows',
          actor: 'Sales Operations Accountant',
          desc: 'Cross-checks successfully fulfilled orders, return merchandise authorizations (RMA), and cash-on-delivery (COD) disbursements from carrier partners.',
          systemAction: 'Application Scenario: Reconciles carrier balances and updates financial reporting tables in Scope E according to preconfigured parameters.'
        },
        {
          time: '20:30',
          title: 'Analyze Daily Basket Composition & Trigger Reorder Scenarios',
          actor: 'Marketing & Customer Service Operations',
          desc: 'Reviews customer cohorts who received deliveries 3-7 days prior to deliver automated satisfaction surveys and targeted loyalty reorder vouchers.',
          systemAction: 'AI Illustrative Scenario: AI reads authorized purchasing records to propose high-probability repeat customer engagement cohorts.'
        }
      ],
      journeyVisualFlow: [
        {
          stepNumber: 1,
          title: 'Omnichannel',
          subtitle: 'Store, Web, Marketplaces, Social',
          isBottleneck: false,
          systemSupport: 'Ingests webhook order events and unified customer messages into Scope A & B operational endpoints upon integration.'
        },
        {
          stepNumber: 2,
          title: 'Orders',
          subtitle: 'Validation & Inventory Reservation',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Manual cross-channel data entry causes 15-30 minute processing delays, resulting in inventory allocation discrepancies.',
          systemSupport: 'Configurable Capability: Automates order payload parsing, UTM source attribution tagging, and multi-tier status routing.'
        },
        {
          stepNumber: 3,
          title: 'Inventory',
          subtitle: 'Available-to-Promise & Stock Transfer',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Lack of real-time available-to-promise inventory visibility across branch warehouses causes ghost orders and stockouts.',
          systemSupport: 'Implementation Capability: Configures inventory synchronization logic or connects via API to the enterprise warehouse/WMS software.'
        },
        {
          stepNumber: 4,
          title: 'Fulfillment',
          subtitle: '3PL Carrier Handover & COD Tracking',
          isBottleneck: false,
          systemSupport: 'Workflow Demonstration: Supports carrier API integrations, automated waybill generation, and transit milestone status tracking.'
        },
        {
          stepNumber: 5,
          title: 'Repeat Purchase',
          subtitle: 'Care, Loyalty & Reorder Triggers',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Customer relationships terminate after initial delivery, lacking visibility into consumption lifecycles to trigger replenishment.',
          systemSupport: 'Configurable Capability: Maintains complete interaction audit trails and establishes automated scheduled post-purchase nurture workflows.'
        }
      ],
      configuredModules: [
        {
          scope: 'Scope B',
          moduleName: 'Retail CRS / CRM & Order Management Console',
          inputData: 'Shopper profiles, phone numbers, omnichannel transaction history, shipping addresses.',
          coreProcess: 'Configures buyer record governance, centralizes transaction logs, and segments customer cohorts based on deterministic rules.',
          outputData: 'Unified Customer 360 profile cards and routed order queues allocated to designated branch fulfillment teams.'
        },
        {
          scope: 'Scope A',
          moduleName: 'Brand Website & Lead Ingestion Portal',
          inputData: 'Web traffic streams, product view behaviors, campaign promotional opt-in forms.',
          coreProcess: 'Ingests registration form data, records shopping cart progression events, and triggers notification scenarios.',
          outputData: 'Structured prospect records channeled into the CRM pipeline in accordance with configured routing rules.'
        },
        {
          scope: 'Scope C',
          moduleName: 'Marketing Automation & Customer Care Orchestration',
          inputData: 'SKUs purchased, fulfillment completion timestamps, member loyalty reward point tiers.',
          coreProcess: 'Automates thank-you messaging, usage guidelines, and personalized complementary product recommendations.',
          outputData: 'Structured post-purchase nurturing workflows executing strictly along pre-approved enterprise parameters.'
        },
        {
          scope: 'Scope J',
          moduleName: 'Retail Business Intelligence & Performance Reporting',
          inputData: 'Daily sales volume, distribution channels, merchandise mix, order return rates.',
          coreProcess: 'Visualizes revenue trends, category basket composition, and repeat purchase cohorts from integrated data streams.',
          outputData: 'Interactive executive analytics dashboards supporting leadership monitoring and data-backed decision-making.'
        }
      ],
      aiSpecializedDemo: {
        title: 'AI Illustrative Scenario: Cross-Selling Recommendations & Safety Stock Alerts',
        problemContext: '[Illustrative Scenario] A customer recently added an "Ultra-Quiet Digital Air Fryer" to their shopping cart. Authorized AI queries permissions-governed catalogs to propose complementary accessories and checks warehouse safety stock thresholds.',
        inputLabel: 'Simulated Scenario Data [Illustrative Demonstration]:',
        sampleInput: {
          'Order ID': 'ORD-TRD-8821 [Sample Record]',
          'Primary Product': 'Ultra-Quiet Digital 6.5L Air Fryer (Stainless Steel)',
          'Sales Channel': 'Enterprise Brand Website (Direct)',
          'Customer': 'Thu Trang Nguyen (Returning Buyer - 2 prior purchases)',
          'Current Inventory': 'Hanoi Warehouse: 14 units | Da Nang Warehouse: 3 units | Ho Chi Minh City: 22 units'
        },
        aiProcessing: 'AI parses order attributes and authorized warehouse safety stock limits, cross-referencing configured business rules to synthesize recommendations...',
        aiOutput: {
          badge: 'AI Illustrative Scenario: Sales Conversion Support Recommendation',
          summary: 'AI identifies high-affinity complementary accessory options based on rule configurations and flags Da Nang branch inventory approaching safety stock thresholds.',
          recommendations: [
            'Propose Accessory Bundle: 100-pack parchment baking liner (+65,000 VND) - 340 packs currently available in central stock.',
            'Propose Extended Care: 24-month replacement protection (+180,000 VND) - Recommended promotion for verified repeat buyers.'
          ],
          riskLevel: 'LOW',
          actionItems: [
            'Propose customer support agents present bundle option chips inside chat dialog prior to final order confirmation.',
            'Flag recommendation to generate internal transfer request from Ho Chi Minh City to reinforce weekend stock.'
          ]
        },
        disclaimer: 'AI simulation scenario operates strictly on illustrative dummy data. AI only reads authorized datasets, performing analysis and suggestions within configured bounds; actual execution requires human managerial sign-off.'
      },
      trackedKpis: [
        {
          metric: 'Out-of-Stock Order Cancellation Rate',
          formula: '(Orders cancelled due to inventory stockout / Total orders received) × 100% [Reference Formula]',
          frequency: 'Monitored daily',
          targetBenchmark: '< 1.0% [Reference Target]',
          businessImpact: 'Minimizes order cancellations, safeguards customer trust, and prevents platform merchant penalty fees.'
        },
        {
          metric: 'Repeat Purchase Rate',
          formula: '(Customers with ≥ 2 confirmed transactions / Total registered customer base) × 100% [Reference Formula]',
          frequency: 'Evaluated monthly',
          targetBenchmark: '25% - 40% [Reference Target]',
          businessImpact: 'Expands customer lifetime value (LTV) while lowering blended customer acquisition cost (CAC).'
        },
        {
          metric: 'Order Processing & Dispatch Lead Time',
          formula: 'Elapsed duration from order ingestion to carrier handover scan [Reference Formula]',
          frequency: 'Monitored per operational shift',
          targetBenchmark: '< 4 working hours [Reference Target]',
          businessImpact: 'Accelerates fulfillment speed, drives positive customer feedback, and reduces delivery inquiries.'
        }
      ],
      threeStageRoadmap: [
        {
          phase: 'Phase 1 (Weeks 1 - 3)',
          title: 'Catalog Architecture & Omnichannel Order Consolidation',
          timeline: 'Week 1 - Week 3',
          focus: 'Centralize product hierarchies, SKU registries, and multi-channel order feeds into the CRM operational console.',
          deliverables: [
            'Standardized master product catalog and tiered pricing matrices',
            'Configured omnichannel ingestion endpoints via API connections (Web, Marketplaces, Chat)',
            'Standardized picking ticket templates and carrier waybill printing formats'
          ]
        },
        {
          phase: 'Phase 2 (Weeks 4 - 7)',
          title: 'Inventory Policy Configuration & Fulfillment Control Workflows',
          timeline: 'Week 4 - Week 7',
          focus: 'Establish multi-location safety stock alert thresholds, carrier tracking reconciliation, and COD settlement flows.',
          deliverables: [
            'Configurable safety stock alert rules segmented by branch warehouse locations',
            'Automated logistics carrier account statement balance reconciliation workflows',
            'Role-based access control (RBAC) schemas tailored for warehouse and sales personnel'
          ]
        },
        {
          phase: 'Phase 3 (Weeks 8 - 12)',
          title: 'Lifecycle Care Automation & Executive BI Analytics',
          timeline: 'Week 8 - Week 12',
          focus: 'Deploy post-purchase nurture triggers, repurchase scoring models, and comprehensive retail executive analytics.',
          deliverables: [
            'Post-purchase customer survey and nurture triggers operating under deterministic rules',
            'Executive BI dashboards visualising channel-by-channel sales volume and profitability',
            'Comprehensive operational Standard Operating Procedure (SOP) documentation'
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // BATCH B: PROFESSIONAL SERVICES (IND-SRV-02)
    // -------------------------------------------------------------------------
    service: {
      slug: 'service',
      name: 'Professional Services',
      tagline: 'Manage expert consultation calendars, govern contract scope boundaries, and standardize milestone deliverables',
      sectorCode: 'IND-SRV-02',
      heroProblemSummary: 'Consulting practices, engineering design studios, legal firms, and technical service providers struggle to track consultant utilization across multiple simultaneous engagements. Appointment calendars clash, clients demand out-of-scope revisions without formal tracking, and delayed milestone sign-offs severely compromise cash flows.',
      operatingSnapshot: {
        dailyVolume: '10 - 50 concurrent active service engagements [Illustrative Scenario]',
        primaryChannels: '1-on-1 Consultations, Virtual Project Review Sessions, Formal Milestone Handover Records',
        keyConstraint: 'Rigorous Scope of Work (SOW) boundary enforcement configured to prevent unbilled scope creep',
        complianceNote: 'Audit logging of meeting minutes, technical delivery confirmations, and client milestone sign-offs'
      },
      dailyOperation: [
        {
          time: '08:30',
          title: 'Review Consultant Calendars & Balance Workload Capacity',
          actor: 'Practice Lead & Operations Director',
          desc: 'Reviews scheduled advisory sessions across the consulting bench, auditing initial client discovery briefing materials.',
          systemAction: 'Workflow Demonstration: Sends automated calendar reminder notifications with secure briefing links based on system rules.'
        },
        {
          time: '10:00',
          title: 'Conduct Deep-Dive Client Advisory & Scope Discovery',
          actor: 'Lead Consultant & Client Project Sponsor',
          desc: 'Assesses client operating challenges, defines engagement business goals, and delineates the formal Scope of Work (SOW).',
          systemAction: 'Application Scenario: Records structured discussion syntheses and milestone deliverables into CRM opportunity records.'
        },
        {
          time: '13:30',
          title: 'Draft Service Proposal & Route Electronic Engagement Agreement',
          actor: 'Service Commercial & Legal Practice Team',
          desc: 'Generates engagement agreements from legal templates, establishing revision caps, deliverables, and payment schedules.',
          systemAction: 'Workflow Demonstration: Routes proposal documents for managerial sign-off on payment terms prior to client dispatch.'
        },
        {
          time: '15:30',
          title: 'Allocate Delivery Consultants & Initialize Project Workspace',
          actor: 'Project Manager (PM)',
          desc: 'Breaks down the contractual scope into milestone task packages, assigning team responsibilities and targeted completion dates.',
          systemAction: 'Application Scenario: Initializes milestone tracking structures on Scope G and alerts assigned delivery consultants.'
        },
        {
          time: '18:00',
          title: 'Issue Milestone Acceptance Minutes & Reconcile Scope Revisions',
          actor: 'Project Lead & Client Engagement Manager',
          desc: 'Signs off completed Phase 1 deliverables, cataloging out-of-scope client feature requests into formal addendum proposals.',
          systemAction: 'Workflow Demonstration: Routes milestone completion data to financial billing modules for progress invoicing.'
        }
      ],
      journeyVisualFlow: [
        {
          stepNumber: 1,
          title: 'Consultation',
          subtitle: 'Booking Ingestion & Expert Dispatch',
          isBottleneck: false,
          systemSupport: 'Configurable Capability: Client self-service booking portal synchronized with consultant calendars.'
        },
        {
          stepNumber: 2,
          title: 'Contract / SOW',
          subtitle: 'Scope Definition & Milestone Terms',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Manual contract drafting omits revision limits and delivery boundaries, inviting severe scope creep.',
          systemSupport: 'Implementation Capability: Standardized template repository enforcing stage-gated milestone payment structures.'
        },
        {
          stepNumber: 3,
          title: 'Resourcing',
          subtitle: 'Capacity Balancing & Billable Hours',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Informal task dispatch via messaging apps obscures consultant over-allocation and project delivery delays.',
          systemSupport: 'Workflow Demonstration: Visual resource allocation heatmaps tracking billable utilization against project budgets.'
        },
        {
          stepNumber: 4,
          title: 'Acceptance',
          subtitle: 'Milestone Sign-off & Billing Release',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Delayed client sign-offs due to disputed scope extensions stall working capital and retainage recovery.',
          systemSupport: 'Configurable Capability: Electronic milestone acceptance minutes documenting verified deliverables and revision logs.'
        }
      ],
      configuredModules: [
        {
          scope: 'Scope B',
          moduleName: 'Professional Services CRM & Opportunity Pipeline',
          inputData: 'Corporate client profiles, key stakeholders, discovery records, proposal negotiation history.',
          coreProcess: 'Tracks advisory deal velocity, qualifies engagement readiness, and coordinates consultant availability.',
          outputData: 'Complete Client 360 dossiers and confirmed calendar engagements synchronized across operating schedules.'
        },
        {
          scope: 'Scope G',
          moduleName: 'Engagement Milestone & Task Delivery Governance',
          inputData: 'Contractual deliverables, assigned consultants, committed milestone deadlines.',
          coreProcess: 'Decomposes agreements into milestone deliverables, monitoring individual task completion timelines against targets.',
          outputData: 'Real-time project health dashboards supporting weekly client status reports and governance reviews.'
        },
        {
          scope: 'Scope D',
          moduleName: 'Post-Delivery Support & Service Ticket Desk',
          inputData: 'Post-handover warranty inquiries, consultant advisory feedback, documentation revision requests.',
          coreProcess: 'Centralizes client inquiries into a unified desk, triaging severity and routing tasks based on expert domain.',
          outputData: 'Transparent service resolution audit trails and client satisfaction governance metrics.'
        },
        {
          scope: 'Scope H',
          moduleName: 'Knowledge Repository & Engagement Templates',
          inputData: 'Standard master service agreements, scope variation rate cards, internal consulting methodologies.',
          coreProcess: 'Maintains version-controlled corporate knowledge, managing role-based access permissions across delivery teams.',
          outputData: 'Guarantees enterprise delivery teams apply consistent advisory quality standards across engagements.'
        }
      ],
      aiSpecializedDemo: {
        title: 'AI Illustrative Scenario: Scope Creep Diagnostic & Advisory Meeting Synthesis',
        problemContext: '[Illustrative Scenario] Following an implementation review meeting, the client requested 3 additional complex reporting modules not included in the original agreement. Authorized AI cross-checks the meeting transcript against the baseline scope.',
        inputLabel: 'Post-Meeting Synthesis Records [Illustrative Scenario]:',
        sampleInput: {
          'Original Agreement': 'CTR-SRV-2026/04 [Illustrative Sample] - Sales Process Re-engineering Advisory',
          'Baseline Scope': '01 Comprehensive Sales SOP Manual + 02 Onsite Staff Training Workshops (Up to 15 attendees)',
          'New Client Request': 'Client requested 03 dynamic weekly BI reporting dashboards and 30 days of continuous onsite advisory support',
          'Consultant Notes': 'Client sponsor requested including these deliverables within the original fee structure without additional cost'
        },
        aiProcessing: 'AI parses newly requested deliverables against authorized contract boundaries, evaluating scope divergence against business rules...',
        aiOutput: {
          badge: 'AI Illustrative Scenario: Scope Creep Risk Identification',
          summary: 'AI flags 02 major deliverable requests that exceed the contractual boundary of Agreement CTR-SRV-2026/04 under configured rules.',
          recommendations: [
            'Out-of-Scope Item 1: Construction of 03 dynamic BI dashboards (Estimated at approximately 40 technical hours).',
            'Out-of-Scope Item 2: 30 days of continuous onsite advisory (Substantially exceeds contractual 2-session training workshop limit).'
          ],
          riskLevel: 'HIGH',
          actionItems: [
            'Generate draft Scope Variation Addendum No. 01 incorporating standard professional hourly rate cards.',
            'Provide engagement lead with a standardized client response memo separating Phase 1 completion from Phase 2 add-on scopes.'
          ]
        },
        disclaimer: 'AI simulation scenario operates strictly on illustrative dummy data. AI only reads authorized datasets, performing analysis and suggestions within configured bounds; actual execution requires human managerial sign-off.'
      },
      trackedKpis: [
        {
          metric: 'Milestone On-Time Delivery Rate',
          formula: '(Milestones completed within contractual schedule / Total committed milestones) × 100% [Reference Formula]',
          frequency: 'Evaluated weekly',
          targetBenchmark: '≥ 90% [Reference Target]',
          businessImpact: 'Maintains predictable progress billing inflows and solidifies market reputation with enterprise accounts.'
        },
        {
          metric: 'Billable Staff Utilization Rate',
          formula: '(Total billable hours charged to client accounts / Total working hours logged) × 100% [Reference Formula]',
          frequency: 'Evaluated monthly',
          targetBenchmark: '65% - 75% [Reference Target]',
          businessImpact: 'Optimizes specialized human capital costs and protects engagement gross profit margins.'
        },
        {
          metric: 'Post-Engagement Client Satisfaction Score (CSAT)',
          formula: 'Average rating across standard 5-point evaluation scale upon final milestone sign-off [Reference Formula]',
          frequency: 'Monitored per project',
          targetBenchmark: '≥ 4.7 / 5.0 [Reference Target]',
          businessImpact: 'Fosters organic enterprise client referrals and sustains long-term annual retainer renewals.'
        }
      ],
      threeStageRoadmap: [
        {
          phase: 'Phase 1 (Weeks 1 - 3)',
          title: 'Practice Discovery & Engagement Contracting Standardization',
          timeline: 'Week 1 - Week 3',
          focus: 'Centralize consultant schedules, professional bios, and engagement proposal templates into the CRM console.',
          deliverables: [
            'Online discovery booking portal and consultant skill-matching assignment rules',
            'Standardized master service agreement and statement of work template library',
            'Service rate card frameworks and milestone payment schedule governance'
          ]
        },
        {
          phase: 'Phase 2 (Weeks 4 - 7)',
          title: 'Project Delivery Governance & Milestone Sign-off Workflows',
          timeline: 'Week 4 - Week 7',
          focus: 'Deploy project task management, track billable hours, and link milestone deliveries directly to billing releases.',
          deliverables: [
            'Project task assignment and milestone progress tracking dashboards',
            'Electronic milestone sign-off minutes with internal review approval flows',
            'Centralized client request ticket desk for post-delivery support inquiries'
          ]
        },
        {
          phase: 'Phase 3 (Weeks 8 - 12)',
          title: 'Scope Creep Diagnostics & Practice BI Analytics',
          timeline: 'Week 8 - Week 12',
          focus: 'Deploy AI advisory synthesis tools, monitor scope divergence risks, and analyze practice profitability.',
          deliverables: [
            'AI meeting summary assistant and scope divergence alert protocols',
            'Executive BI dashboards tracking billable utilization and practice margins',
            'Structured project closeout and intellectual property capture procedures'
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // BATCH C: EDUCATION & TRAINING (IND-EDU-03)
    // -------------------------------------------------------------------------
    education: {
      slug: 'education',
      name: 'Education & Training',
      tagline: 'Manage intelligent admissions funnels, coordinate academic faculty schedules, and centralize digital curriculum resources',
      sectorCode: 'IND-EDU-03',
      heroProblemSummary: 'Training academies, educational institutions, and corporate learning centers face overwhelming admissions inquiries during peak recruitment cycles. Delayed advisor outreach results in prospective students enrolling with competitors. Meanwhile, manual class scheduling, fragmented tuition tracking, and decentralized learning materials result in operational inefficiencies.',
      operatingSnapshot: {
        dailyVolume: '100 - 1,000 admissions leads/month depending on enrollment cycles [Illustrative Scenario]',
        primaryChannels: 'Digital Campaign Landing Pages, Event Forms, Telephone Inquiries, Academic Class Groups',
        keyConstraint: 'Automated admissions counselor dispatch within 15 minutes of inquiry submission',
        complianceNote: 'Student personal data protection, privacy governance, and electronic tuition receipt compliance'
      },
      dailyOperation: [
        {
          time: '08:00',
          title: 'Triage and Route Morning Admissions Lead Ingestion',
          actor: 'Admissions Operations Lead',
          desc: 'Assesses student intent levels based on registered course categories and inquiry timestamps to assign outreach priorities.',
          systemAction: 'Workflow Demonstration: Routes prospective student records to active on-duty advisors according to configured rules.'
        },
        {
          time: '09:30',
          title: 'Conduct Academic Consultation & Schedule Placement Assessments',
          actor: 'Admissions Consultant',
          desc: 'Interviews prospects regarding current skill proficiencies, personal development goals, and books placement evaluations.',
          systemAction: 'Application Scenario: Dispatches automated appointment confirmation messages with assessment portal links.'
        },
        {
          time: '11:30',
          title: 'Coordinate Class Allocation & Assign Instructors',
          actor: 'Academic Affairs Coordinator',
          desc: 'Matches placement test results and student schedule preferences against planned cohort openings and capacity caps.',
          systemAction: 'Workflow Demonstration: Audits classroom capacity limits and virtual meeting room quotas against configured limits.'
        },
        {
          time: '14:00',
          title: 'Log Session Attendance & Flag Absenteeism Patterns',
          actor: 'Teaching Assistant (TA) & Academic Faculty',
          desc: 'Logs student attendance and flags unexcused absences in the Scope G academic registry.',
          systemAction: 'Application Scenario: Triggers automated care messages offering lecture recording links for excused absences.'
        },
        {
          time: '17:00',
          title: 'Reconcile Installment Tuition Milestones & Send Satisfaction Polls',
          actor: 'Academic Finance Officer',
          desc: 'Audits student cohort tuition installment due dates prior to module completion milestones.',
          systemAction: 'Workflow Demonstration: Sends automated tuition payment reminders in accordance with contractual payment schedules.'
        }
      ],
      journeyVisualFlow: [
        {
          stepNumber: 1,
          title: 'Admissions Lead',
          subtitle: 'Digital Ads, Forms, Seminars',
          isBottleneck: false,
          systemSupport: 'Ingests registration webhooks from landing pages and campaign channels into the admissions CRM upon integration.'
        },
        {
          stepNumber: 2,
          title: 'Consultation',
          subtitle: 'Skill Profiling & Lead Scoring',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Advisor outreach delays exceeding 2 hours decrease successful connection rates by more than 50%.',
          systemSupport: 'Configurable Capability: Configures intent scoring algorithms and round-robin lead allocation across on-duty counselors.'
        },
        {
          stepNumber: 3,
          title: 'Cohort Allocation',
          subtitle: 'Timetables, Rooms & Instructors',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Faculty timetable clashes and mismatched student proficiencies trigger student complaints and dropout risks.',
          systemSupport: 'Workflow Demonstration: Timetable coordination workspace with automated instructor conflict alerts based on data entry.'
        },
        {
          stepNumber: 4,
          title: 'Learning',
          subtitle: 'Lectures, Attendance & Resources',
          isBottleneck: false,
          systemSupport: 'Implementation Capability: Centralized digital learning repository with role-based access; integrates with existing enterprise LMS platforms.'
        },
        {
          stepNumber: 5,
          title: 'Tuition',
          subtitle: 'Installment Auditing & Receipts',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Tracking tuition milestones via manual spreadsheets causes accounting disputes and delayed receivables.',
          systemSupport: 'Workflow Demonstration: Tracks milestone payment schedules and reconciles settlement statuses via connected banking gateways.'
        },
        {
          stepNumber: 6,
          title: 'Feedback',
          subtitle: 'CSAT Surveys & Re-enrollment',
          isBottleneck: false,
          systemSupport: 'Configurable Capability: Automates pedagogical evaluation surveys and prompts advanced course progression pathways.'
        }
      ],
      configuredModules: [
        {
          scope: 'Scope B',
          moduleName: 'Admissions CRM & Student Lifecycle Management',
          inputData: 'Candidate dossiers, targeted curriculum, phone contacts, placement evaluation scores.',
          coreProcess: 'Governs student conversion lifecycles from initial lead to active student, managing centralized academic records.',
          outputData: 'Cohort student rosters and advisor pipeline velocity tracking metrics.'
        },
        {
          scope: 'Scope H',
          moduleName: 'Curriculum Repository & Digital Learning Assets',
          inputData: 'Electronic syllabi, recorded video masterclasses, faculty guidelines, sample assessments.',
          coreProcess: 'Structures digital learning assets, enabling semantic catalog searches and granular role-based permissions.',
          outputData: 'Secure, authenticated access for enrolled students and instructors to approved academic materials.'
        },
        {
          scope: 'Scope E',
          moduleName: 'Tuition Installment Governance & Receivables',
          inputData: 'Course fee structures, approved scholarship tiers, student installment schedules.',
          coreProcess: 'Tracks multi-stage tuition billing plans, cross-checking wire transfers and updating enrollment statuses.',
          outputData: 'Academic revenue reporting and prioritized accounts receivable rosters for administrative follow-up.'
        },
        {
          scope: 'Scope D',
          moduleName: 'Student Support Desk & Academic Affairs Service',
          inputData: 'Leave-of-absence requests, schedule adjustments, instructor feedback, student service tickets.',
          coreProcess: 'Centralizes academic service requests into a unified queue, dispatching cases to authorized officers.',
          outputData: 'Rapid student issue resolution, strengthening institutional engagement and learner retention.'
        }
      ],
      aiSpecializedDemo: {
        title: 'AI Illustrative Scenario: Cohort Matching & Prospective Student Intent Evaluation',
        problemContext: '[Illustrative Scenario] A prospective student recently completed an online English language diagnostic and requested weekday evening classes. Authorized AI cross-checks placement results against planned course offerings.',
        inputLabel: 'Prospective Student Intake Data [Illustrative Scenario]:',
        sampleInput: {
          'Student Name': 'Hoang Long Tran [Illustrative Sample]',
          'Target Course': 'Intensive Academic IELTS Target 6.5',
          'Diagnostic Test Score': 'Listening: 5.0 | Reading: 5.5 | Writing: 4.5 (Overall Placement Reference: Band 5.0)',
          'Available Schedule': 'Tuesday - Thursday - Saturday Evenings (After 18:30)',
          'Enrollment Deadline': 'Requires certification before December for international study application'
        },
        aiProcessing: 'AI reviews student diagnostic attributes and authorized course catalog schedules, evaluating alignment against business rules...',
        aiOutput: {
          badge: 'AI Illustrative Scenario: Admissions Advisory Recommendation',
          summary: 'AI identifies urgent prospective student timeline given impending December international application deadline. Recommends Pre-IELTS cohort placement under system rules.',
          recommendations: [
            'Proposed Cohort Option 1: IELTS-K42 (Orientation starting Sep 18) - Schedule Tue/Thu/Sat (19:00 - 21:00) - 3 seats currently open.',
            'Proposed Cohort Option 2: IELTS-FastTrack (Starting Sep 22) - Accelerated 4 sessions/week to satisfy urgent deadline.'
          ],
          riskLevel: 'LOW',
          actionItems: [
            'Advise admissions counselor to structure advisory outreach around the critical December international deadline.',
            'Dispatch digital course roadmap and promotional enrollment package to prospect communications channel.'
          ]
        },
        disclaimer: 'AI simulation scenario operates strictly on illustrative dummy data. AI only reads authorized datasets, performing analysis and suggestions within configured bounds; actual execution requires human managerial sign-off.'
      },
      trackedKpis: [
        {
          metric: 'Lead-to-Student Conversion Rate',
          formula: '(Enrolled students / Total qualified prospective admissions inquiries) × 100% [Reference Formula]',
          frequency: 'Monitored per campaign',
          targetBenchmark: '15% - 25% [Reference Target]',
          businessImpact: 'Maximizes digital marketing return on ad spend (ROAS) and audits admissions team productivity.'
        },
        {
          metric: 'Course Completion Rate',
          formula: '(Students attending ≥ 80% of scheduled sessions / Total enrolled students) × 100% [Reference Formula]',
          frequency: 'Evaluated per cohort',
          targetBenchmark: '≥ 85% [Reference Target]',
          businessImpact: 'Validates instructional quality and serves as primary indicator for advanced level re-enrollment.'
        },
        {
          metric: 'On-Time Tuition Installment Collection Rate',
          formula: '(Tuition collected on schedule / Total contractual tuition due in period) × 100% [Reference Formula]',
          frequency: 'Monitored monthly',
          targetBenchmark: '≥ 95% [Reference Target]',
          businessImpact: 'Secures operational cash reserves to fulfill faculty payroll obligations and campus facility expenses.'
        }
      ],
      threeStageRoadmap: [
        {
          phase: 'Phase 1 (Weeks 1 - 3)',
          title: 'Admissions Funnel Consolidation & Lead Triage Rules',
          timeline: 'Week 1 - Week 3',
          focus: 'Centralize admissions inquiries from campaigns into the CRM; configure advisor lead distribution rules.',
          deliverables: [
            'Integrated admissions webhooks connected to campaign landing pages and messaging channels',
            'Configured admissions pipeline stages and standardized interaction statuses',
            'Automated consultation appointment confirmation message templates'
          ]
        },
        {
          phase: 'Phase 2 (Weeks 4 - 7)',
          title: 'Academic Cohort Management & Tuition Milestone Workflows',
          timeline: 'Week 4 - Week 7',
          focus: 'Deploy cohort timetable schedules, attendance logging, and installment tuition billing reconciliation.',
          deliverables: [
            'Class schedule, instructor assignment, and facility capacity management matrices',
            'Automated tuition payment reminder messaging workflows',
            'Digital curriculum repository with granular role-based access permissions'
          ]
        },
        {
          phase: 'Phase 3 (Weeks 8 - 12)',
          title: 'AI Advisory Assistance & Admissions Executive Analytics',
          timeline: 'Week 8 - Week 12',
          focus: 'Deploy AI candidate intent evaluation, cohort matching recommendations, and customer acquisition cost (CAC) BI dashboards.',
          deliverables: [
            'AI advisory scoring model assessing prospective student urgency and course fit',
            'Executive BI dashboards tracking student acquisition costs and cohort completion rates',
            'Standardized operational handover documentation for academic and admissions teams'
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // BATCH C: REAL ESTATE (IND-RES-04)
    // -------------------------------------------------------------------------
    'real-estate': {
      slug: 'real-estate',
      name: 'Real Estate',
      tagline: 'Secure project property inventories, manage transparent lead ownership, and govern reservation deposit procedures',
      sectorCode: 'IND-RES-04',
      heroProblemSummary: 'Brokerages, real estate agencies, and property developers face internal conflicts over client lead ownership across sales teams. Master property inventories (apartments, commercial units, land plots) updated manually on spreadsheets cause double-booking, cross-selling confusion, and brand reputational damage with buyers and developers.',
      operatingSnapshot: {
        dailyVolume: 'Hundreds of active property listings across distribution portfolios [Illustrative Scenario]',
        primaryChannels: 'Project Sales Galleries, Direct Buyer Inquiries, Broker Affiliate Networks, Project Web Portals',
        keyConstraint: 'Strict role-based data security protecting owner contacts and preventing internal lead ownership conflicts',
        complianceNote: 'Standardized reservation agreements, escrow deposits, and comprehensive audit trail logging'
      },
      dailyOperation: [
        {
          time: '08:00',
          title: 'Update Master Inventory Stacking Plans & Unit Availability',
          actor: 'Inventory Management Administrator',
          desc: 'Audits expiring unit reservation locks according to established time limits to release unconfirmed units back to available status.',
          systemAction: 'Workflow Demonstration: Updates color-coded architectural stacking plans (Block/Floor) on the Scope B dashboard.'
        },
        {
          time: '10:00',
          title: 'Register Prospective Buyer Lead Protection Rights',
          actor: 'Real Estate Broker',
          desc: 'Logs buyer contact details and investment criteria into CRM to secure lead ownership according to agency rules.',
          systemAction: 'Application Scenario: Enforces automated duplicate phone number cross-checking against active client records.'
        },
        {
          time: '11:30',
          title: 'Match Buyer Investment Criteria with Available Inventory',
          actor: 'Broker & Prospective Property Investor',
          desc: 'Filters available units matching financial budgets, orientation, floor level, and scheduled payment milestones.',
          systemAction: 'Workflow Demonstration: Generates personalized cash flow calculation tables and promotional discount schedules.'
        },
        {
          time: '14:30',
          title: 'Execute Time-Bounded Unit Reservation (Unit Lock)',
          actor: 'Sales Team Leader & System Administrator',
          desc: 'Initiates a time-bounded unit reservation lock when a buyer selects a property, allowing formal paperwork preparation.',
          systemAction: 'Workflow Demonstration: Transitions unit status to Reserved and synchronizes real-time visibility across the sales team.'
        },
        {
          time: '17:00',
          title: 'Confirm Escrow Deposit & Draft Formal Reservation Agreement',
          actor: 'Sales Operations Accountant & Legal Officer',
          desc: 'Verifies banking deposit transfers, generates official electronic receipts, and compiles reservation agreements.',
          systemAction: 'Application Scenario: Updates unit status to Formally Deposited and records projected broker commissions based on rules.'
        }
      ],
      journeyVisualFlow: [
        {
          stepNumber: 1,
          title: 'Inventory',
          subtitle: 'Stacking Plans & Unit Statuses',
          isBottleneck: false,
          systemSupport: 'Configurable Capability: Centralizes project unit catalogs, supporting dynamic statuses: Available, Reserved, Deposited, Sold.'
        },
        {
          stepNumber: 2,
          title: 'Matching',
          subtitle: 'Financial Budgets, Facing & Legal',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Agents manually search through spreadsheets, missing closing opportunities while buyers wait.',
          systemSupport: 'Implementation Capability: Multi-criteria dynamic filtering; generates standardized buyer cash flow projection models.'
        },
        {
          stepNumber: 3,
          title: 'Lead Protection',
          subtitle: 'Anti-Collision & RBAC Privacy',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Internal disputes flare up when multiple brokers solicit the same client due to missing lead lock rules.',
          systemSupport: 'Configurable Capability: Configures phone number collision checks and automatically reallocates stale leads upon expiry.'
        },
        {
          stepNumber: 4,
          title: 'Deposit / Contract',
          subtitle: 'Unit Lock, Escrow & Compliance',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Outdated unit reservation statuses trigger double-booking disputes and legal liabilities during sales events.',
          systemSupport: 'Workflow Demonstration: Enforces temporary unit locking via Scope B with immutable operational audit logging.'
        }
      ],
      configuredModules: [
        {
          scope: 'Scope B',
          moduleName: 'Real Estate Opportunity CRM & Master Inventory Stacking',
          inputData: 'Project catalogs, building towers, unit specs, base pricing, discount policies, buyer records.',
          coreProcess: 'Visualizes unit availability on interactive stacking plans; enforces lead ownership protection policies.',
          outputData: 'Transparent inventory availability, eliminating double-selling while attributing sales to correct brokers.'
        },
        {
          scope: 'Scope A',
          moduleName: 'Project Showcase Portal & Viewing Tour Booking',
          inputData: 'Project specifications, model unit virtual tours, brochure download forms, viewing registrations.',
          coreProcess: 'Captures buyer interest from marketing campaigns, routing leads to designated branch floor teams.',
          outputData: 'Structured prospective buyer profiles routed into CRM to facilitate timely broker outreach.'
        },
        {
          scope: 'Scope K',
          moduleName: 'Audit Logging & Granular RBAC Data Security',
          inputData: 'Phone number access events, export logs, unit reservation status override commands.',
          coreProcess: 'Records immutable audit trails of confidential buyer record access and critical inventory status changes.',
          outputData: 'Data governance audit reports supporting leadership oversight and compliance enforcement.'
        },
        {
          scope: 'Scope J',
          moduleName: 'Sales Velocity & Inventory Absorption Analytics',
          inputData: 'Transacted units, absorbed price brackets, sales team transaction velocity.',
          coreProcess: 'Aggregates sales absorption rates and agent productivity metrics based on recorded transactions.',
          outputData: 'Enables property developers and master agencies to track phase-by-phase portfolio absorption.'
        }
      ],
      aiSpecializedDemo: {
        title: 'AI Illustrative Scenario: Inventory Matching & Lead Collision Verification',
        problemContext: '[Illustrative Scenario] A broker engages a prospective investor seeking a rental yield unit with 1.2 billion VND equity. Authorized AI cross-checks available project inventory and validates lead ownership rules.',
        inputLabel: 'Prospective Investor Criteria [Illustrative Scenario]:',
        sampleInput: {
          'Masked Phone Number': '0912.xxx.789 [Encrypted Sample Data]',
          'Investment Objective': 'Rental yield cash flow generation',
          'Available Equity': '1.2 - 1.5 billion VND (Estimated 50% mortgage requirement)',
          'Unit Preferences': '2 Bedrooms | South-East Facing Balcony | Handover within current year',
          'Registering Broker': 'Van Nam Le (Agency Branch 02)'
        },
        aiProcessing: 'AI parses available unit inventory and lead registry rules, evaluating criteria against configured policies...',
        aiOutput: {
          badge: 'AI Illustrative Scenario: Investor Matching Recommendation',
          summary: 'AI confirms phone number has had no recorded broker activity in the past 90 days under system rules. Identifies 2 matching units in available stock.',
          recommendations: [
            'Matching Unit 1: Unit A-1408 (Sapphire Tower) - 68m2 - Total price 2.8B VND (Equity requirement ~1.15B VND) - Garden view.',
            'Matching Unit 2: Unit B-0902 (Diamond Tower) - 65m2 - Total price 2.65B VND (Equity requirement ~1.05B VND) - 4% early closing incentive.'
          ],
          riskLevel: 'LOW',
          actionItems: [
            'Formally record 60-day buyer protection rights under the registering broker in accordance with agency policy.',
            'Generate comparative banking mortgage amortization schedules for broker presentation to client.'
          ]
        },
        disclaimer: 'AI simulation scenario operates strictly on illustrative dummy data. AI only reads authorized datasets, performing analysis and suggestions within configured bounds; actual execution requires human managerial sign-off.'
      },
      trackedKpis: [
        {
          metric: 'Internal Lead Ownership Conflict Rate',
          formula: '(Internal broker lead dispute cases / Total transacted leads) × 100% [Reference Formula]',
          frequency: 'Monitored continuously',
          targetBenchmark: '0% [Reference Target under deterministic lock rules]',
          businessImpact: 'Eliminates internal sales conflicts, building a transparent and collaborative agency culture.'
        },
        {
          metric: 'Unit Reservation Lock-In Speed',
          formula: 'Elapsed seconds from verbal agreement to system unit status lock [Reference Formula]',
          frequency: 'Measured per transaction',
          targetBenchmark: '< 60 seconds [Reference Target]',
          businessImpact: 'Eliminates double-booking risks across sales floors during high-traffic project launch events.'
        },
        {
          metric: 'Reservation-to-Contract Conversion Rate',
          formula: '(Confirmed sales purchase agreements / Total unit reservations held) × 100% [Reference Formula]',
          frequency: 'Evaluated per sales campaign',
          targetBenchmark: '≥ 75% [Reference Target]',
          businessImpact: 'Validates buyer qualification rigor and audits sales team consultation effectiveness.'
        }
      ],
      threeStageRoadmap: [
        {
          phase: 'Phase 1 (Weeks 1 - 3)',
          title: 'Inventory Architecture & Lead Ownership Policy Setup',
          timeline: 'Week 1 - Week 3',
          focus: 'Structure property stacking plans on Scope B; configure duplicate phone verification and lead protection rules.',
          deliverables: [
            'Visual interactive property stacking plans with color-coded unit statuses',
            'Configured lead collision detection and time-bounded client ownership rules',
            'Role-based security schemas for floor managers, brokers, and inventory admins'
          ]
        },
        {
          phase: 'Phase 2 (Weeks 4 - 7)',
          title: 'Reservation Procedures & Portal Integration',
          timeline: 'Week 4 - Week 7',
          focus: 'Deploy time-bounded unit locking, receipt verification flows, and public showcase portal connections.',
          deliverables: [
            'Time-bounded unit reservation and escrow deposit approval workflows',
            'Standardized reservation agreement templates and promotional calculation models',
            'Immutable audit logging capturing sensitive customer data access'
          ]
        },
        {
          phase: 'Phase 3 (Weeks 8 - 12)',
          title: 'AI Advisory Suggestions & Inventory Velocity BI',
          timeline: 'Week 8 - Week 12',
          focus: 'Deploy AI property matching algorithms, commission calculation rules, and executive absorption dashboards.',
          deliverables: [
            'AI recommendation assistant matching buyer budgets with available inventory',
            'Executive BI dashboards tracking inventory absorption rates and team performance',
            'Configured broker commission calculation frameworks tied to verified contracts'
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // BATCH D: MANUFACTURING & PROCESSING (IND-MFG-05) - HIGH RISK
    // -------------------------------------------------------------------------
    manufacturing: {
      slug: 'manufacturing',
      name: 'Manufacturing & Processing',
      tagline: 'Track production work orders, standardize KCS quality inspections, and monitor factory dispatch timelines',
      sectorCode: 'IND-MFG-05',
      heroProblemSummary: 'Manufacturing plants, mechanical fabricators, packaging mills, and apparel factories suffer from severe communication disconnects between Commercial Sales and the Factory Floor. Sales books urgent orders while raw material supplies are depleted; stage-by-stage work-in-progress (WIP) tracked on paper obscuring delivery completion dates.',
      operatingSnapshot: {
        dailyVolume: 'Dozens of production work orders (PO/MO) operating concurrently across assembly lines [Illustrative Scenario]',
        primaryChannels: 'B2B Sales Orders, Contract Manufacturing Agreements, Station Transfer Slips, KCS Inspection Minutes',
        keyConstraint: 'Track on-time in-full delivery rates (OTIF) and control scrap rates per station under strict rules',
        complianceNote: 'Maintain quality inspection history for every manufactured batch adhering to internal ISO/SOP standards'
      },
      dailyOperation: [
        {
          time: '07:00',
          title: 'Morning Shift Handover & Production Schedule Review',
          actor: 'Plant Superintendent & Shift Supervisor',
          desc: 'Verifies line headcount, cross-checking daily targeted manufacturing orders against available raw material inventory.',
          systemAction: 'Workflow Demonstration: Displays shop floor scheduling boards so operators review daily targeted production volumes.'
        },
        {
          time: '09:00',
          title: 'Receive New Manufacturing Orders from Commercial Sales',
          actor: 'Production Planning Department',
          desc: 'Translates confirmed B2B sales contracts into formal Manufacturing Orders (MO), calculating material consumption bills of materials (BOM).',
          systemAction: 'Workflow Demonstration: Audits available material stocks against production requirements, generating requisition drafts when needed.'
        },
        {
          time: '11:30',
          title: 'Log Stage-by-Stage Output & Track Work-in-Progress (WIP)',
          actor: 'Assembly Line Team Leader',
          desc: 'Records completed sub-assembly outputs across manufacturing stages (Cutting, Bending, Welding, Coating) in Scope G.',
          systemAction: 'Application Scenario: Calculates real-time completion percentages against targets and flags bottleneck stations.'
        },
        {
          time: '14:30',
          title: 'Execute KCS Quality Inspection & Triage Defect Causes',
          actor: 'Quality Control Inspector (QC/KCS)',
          desc: 'Audits physical tolerances, logs passed units, and categorizes defect root causes using digital inspection forms.',
          systemAction: 'Workflow Demonstration: Archives digital KCS certificates; triggers supervisor alerts if scrap rates exceed thresholds.'
        },
        {
          time: '17:00',
          title: 'Package, Apply Barcode Labels & Complete Finished Goods Dispatch',
          actor: 'Packaging Department & Finished Goods Warehouse',
          desc: 'Packages merchandise to client specifications, applies batch traceability barcode labels, and coordinates delivery.',
          systemAction: 'Application Scenario: Updates completion milestones in Scope B so commercial teams coordinate customer delivery.'
        }
      ],
      journeyVisualFlow: [
        {
          stepNumber: 1,
          title: 'Orders',
          subtitle: 'Technical Specs & Confirmed PO',
          isBottleneck: false,
          systemSupport: 'Captures B2B sales orders, attaching technical drawings and fabrication specs to centralized Scope B records.'
        },
        {
          stepNumber: 2,
          title: 'Planning',
          subtitle: 'Work Order Routing & Material Check',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Production scheduling on paper without real-time material audits causes machines to sit idle awaiting components.',
          systemSupport: 'Configurable Capability: Cross-checks reference material BOMs and schedules line assignments based on configured rules.'
        },
        {
          stepNumber: 3,
          title: 'Fabrication',
          subtitle: 'Line Dispatch & Stage Updates',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Line supervisors lack visibility into intermediate station bottlenecks, lagging 1-2 days behind shop floor reality.',
          systemSupport: 'Workflow Demonstration: Visual station progress tracking boards supporting stage-by-stage quantity logging.'
        },
        {
          stepNumber: 4,
          title: 'KCS / QC',
          subtitle: 'Quality Inspection & Defect Logging',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Paper-based QC logs delay defect detection until large production batches are spoiled, escalating material waste.',
          systemSupport: 'Implementation Capability: Digital KCS inspection forms triggering automated supervisor alerts when scrap exceeds thresholds.'
        },
        {
          stepNumber: 5,
          title: 'Dispatch',
          subtitle: 'Packaging, Transfer & Delivery',
          isBottleneck: false,
          systemSupport: 'Workflow Demonstration: Generates standardized finished goods delivery manifests and records shipping timestamps.'
        }
      ],
      configuredModules: [
        {
          scope: 'Scope G',
          moduleName: 'Manufacturing Work Order & Stage Progress Tracking',
          inputData: 'Manufacturing orders, station routing, standard operation cycle times, material BOM structures.',
          coreProcess: 'Tracks real-time batch progression across workstations; logs machine operational hours and unscheduled downtime.',
          outputData: 'Shop-floor Kanban visualization boards enabling supervisors to spot bottleneck stations before deadlines slip.'
        },
        {
          scope: 'Scope B',
          moduleName: 'B2B Sales Order Management & Contract Fabrication',
          inputData: 'Corporate customer records, contractual delivery dates, packaging specs, commercial payment terms.',
          coreProcess: 'Provides end-to-end operational visibility from order booking to factory dispatch for commercial sales personnel.',
          outputData: 'Sales executives maintain live order status visibility to coordinate accurate delivery windows with clients.'
        },
        {
          scope: 'Scope E',
          moduleName: 'Raw Material Consumption & Scrap Cost Control',
          inputData: 'Dispatched raw material stock, verified finished goods output, scrap recovery volumes.',
          coreProcess: 'Compares actual material consumption against standard engineering BOMs to govern fabrication unit costs.',
          outputData: 'Provisional unit manufacturing cost reports supporting gross margin and profitability analysis.'
        },
        {
          scope: 'Scope J',
          moduleName: 'Plant Productivity BI & On-Time Delivery Analytics',
          inputData: 'Order completion lead times, shift-by-shift output, first-pass quality inspection yields.',
          coreProcess: 'Synthesizes assembly line throughput metrics and on-time in-full (OTIF) fulfillment rates from logged data.',
          outputData: 'Executive manufacturing dashboards assisting leadership in tracking plant capacity and operational health.'
        }
      ],
      aiSpecializedDemo: {
        title: 'AI Illustrative Scenario: Station Bottleneck Diagnostic & Dispatch Risk Synthesis',
        problemContext: '[Illustrative Scenario] A manufacturing run of 5,000 export-grade mechanical components is underway. Workstation CNC-03 experienced an unscheduled 3.5-hour maintenance outage. Authorized AI evaluates downstream ripple effects.',
        inputLabel: 'Batch Fabrication Operating Data [Illustrative Scenario]:',
        sampleInput: {
          'Work Order ID': 'MO-2026-0581 [Illustrative Scenario]',
          'Target Batch Volume': '5,000 standard precision metal components',
          'Committed Dispatch': 'September 15 dispatch deadline (48 hours remaining)',
          'Current Station Status': 'Cutting: 100% | CNC: 62% (Machine 03 halted 3.5h) | Plating: 0% | KCS: 0%',
          'Preliminary KCS Defect Rate': '1.2% (Within allowable engineering tolerance < 2.0%)'
        },
        aiProcessing: 'AI parses station progress metrics and machine throughput capacities, evaluating downstream cycle time constraints...',
        aiOutput: {
          badge: 'AI Illustrative Scenario: Schedule Delay Risk Identification',
          summary: 'AI calculates that machine downtime risks creating station congestion, projecting a potential 6-hour delay without schedule rebalancing.',
          recommendations: [
            'Propose Workstation Rebalancing: Consider rerouting approximately 800 components to Machine CNC-05 (Available on night shift).',
            'Propose Staffing Adjustment: Schedule 02 additional packaging technicians during the morning shift on September 15.'
          ],
          riskLevel: 'HIGH',
          actionItems: [
            'Plant superintendent reviews machine rerouting proposal to compensate for the intermediate station shortfall.',
            'Provide internal status update to commercial sales team to coordinate final logistics pickup.'
          ]
        },
        disclaimer: 'AI simulation scenario operates strictly on illustrative dummy data. AI only reads authorized datasets, performing analysis and suggestions within configured bounds; actual execution requires human managerial sign-off.'
      },
      trackedKpis: [
        {
          metric: 'On-Time In-Full Delivery Rate (OTIF)',
          formula: '(Orders completed on schedule and meeting quality specs / Total orders dispatched) × 100% [Reference Formula]',
          frequency: 'Evaluated weekly',
          targetBenchmark: '≥ 95% [Reference Target]',
          businessImpact: 'Protects long-term supplier partnerships and eliminates contractual delivery delay penalties.'
        },
        {
          metric: 'First Pass Quality Yield (FPY)',
          formula: '(Units passing KCS inspection without rework / Total units fabricated) × 100% [Reference Formula]',
          frequency: 'Monitored per shift',
          targetBenchmark: '≥ 96.5% [Reference Target]',
          businessImpact: 'Minimizes material scrap waste, reduces rework labor costs, and maximizes production line throughput.'
        },
        {
          metric: 'Average Manufacturing Cycle Time',
          formula: 'Mean elapsed time from raw material warehouse release to finished goods packaging sign-off [Reference Formula]',
          frequency: 'Monitored per production batch',
          targetBenchmark: '15% - 20% reduction [Reference Target]',
          businessImpact: 'Accelerates working capital turns and reinforces capacity to fulfill urgent custom orders.'
        }
      ],
      threeStageRoadmap: [
        {
          phase: 'Phase 1 (Weeks 1 - 3)',
          title: 'Work Order Structuring & Station Workflow Standardization',
          timeline: 'Week 1 - Week 3',
          focus: 'Configure work order templates and manufacturing station routings in Scope G, phasing out paper logs.',
          deliverables: [
            'Standardized Manufacturing Order (MO) templates and Bill of Materials (BOM) catalog',
            'Shift-by-shift output logging procedures across primary manufacturing stations',
            'Integrated handoff flow linking commercial sales orders to production planning'
          ]
        },
        {
          phase: 'Phase 2 (Weeks 4 - 7)',
          title: 'Digital KCS Inspection & Shop-Floor Tracking Boards',
          timeline: 'Week 4 - Week 7',
          focus: 'Deploy digital quality control inspection forms; configure real-time station tracking boards.',
          deliverables: [
            'Digital KCS quality inspection forms categorizing defect root causes',
            'Real-time shop floor Kanban tracking boards monitoring active batch progression',
            'Finished goods dispatch manifests and material variance reconciliation flows'
          ]
        },
        {
          phase: 'Phase 3 (Weeks 8 - 12)',
          title: 'AI Delay Risk Diagnostics & Plant Performance BI',
          timeline: 'Week 8 - Week 12',
          focus: 'Deploy AI bottleneck diagnostics, station rebalancing models, and plant executive BI analytics.',
          deliverables: [
            'AI schedule delay diagnostic model and station rebalancing recommendations',
            'Executive BI dashboards tracking OTIF rates and raw material scrap variance',
            'Standard operating procedure manuals for plant superintendents and planners'
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // BATCH D: WHOLESALE & DISTRIBUTION (IND-DIS-06) - HIGH RISK
    // -------------------------------------------------------------------------
    distribution: {
      slug: 'distribution',
      name: 'Wholesale & Distribution',
      tagline: 'Govern dealer network pricing tiers, enforce credit limit ceilings, and streamline dispatch approvals',
      sectorCode: 'IND-DIS-06',
      heroProblemSummary: 'FMCG, industrial supplies, and equipment wholesale distributors struggle with intricate pricing policies and volume rebates across dealer tiers (Tier 1, Tier 2, exclusive regional partners). Sales orders booked via messaging apps often apply erroneous discount rates while warehouses inadvertently ship to distributors with overdue credit balances, creating severe debt exposure.',
      operatingSnapshot: {
        dailyVolume: 'Operating distribution networks of 50 to 1,000+ dealers and retail stores [Illustrative Scenario]',
        primaryChannels: 'Recurring Dealer Reorders, Field Sales Route Personnel, B2B Dealer Web Portals',
        keyConstraint: 'Credit limit ceiling enforcement with configurable dispatch hold alerts upon credit breach',
        complianceNote: 'Distribution contracts, cumulative sales rebate governance, and periodic debt reconciliation'
      },
      dailyOperation: [
        {
          time: '08:00',
          title: 'Ingest Recurring Orders Across Dealer Network',
          actor: 'Route Sales Personnel & Sales Administration',
          desc: 'Aggregates recurring orders submitted by regional dealers via the B2B portal or field route sales representatives.',
          systemAction: 'Workflow Demonstration: Automatically applies contract price lists and discount rates tied to dealer tier levels.'
        },
        {
          time: '09:30',
          title: 'Audit Outstanding Credit Limits & Aging Balances',
          actor: 'Distribution Credit Accountant',
          desc: 'Reviews current dealer account balances, cross-referencing approved contractual credit limits and days overdue.',
          systemAction: 'Application Scenario: Flags credit limit breaches and halts warehouse dispatch routing according to configured rules.'
        },
        {
          time: '11:30',
          title: 'Execute Cross-Departmental Dispatch Approval (Workflow Sign-off)',
          actor: 'Commercial Director & Chief Accountant',
          desc: 'Reviews special order exceptions requiring temporary credit guarantees or controlled management overrides.',
          systemAction: 'Workflow Demonstration: Records justification notes into immutable Audit Logs and routes approved dispatch tickets.'
        },
        {
          time: '14:30',
          title: 'Route Fleet Dispatch & Execute Regional Warehouse Pick-Up',
          actor: 'Logistics Coordinator & Warehouse Lead',
          desc: 'Consolidates deliveries by geographic transport routes, issues commercial invoices, and releases goods to freight.',
          systemAction: 'Workflow Demonstration: Updates order states to Out for Delivery, attaching signed proof-of-delivery receipts.'
        },
        {
          time: '17:30',
          title: 'Reconcile Account Balances & Calculate Tiered Volume Rebates',
          actor: 'Distribution Accountant',
          desc: 'Logs incoming bank transfer settlements, matching payments against individual outstanding commercial invoices.',
          systemAction: 'Application Scenario: Updates cumulative quarterly sales progress to calculate tiered volume rebates under configured rules.'
        }
      ],
      journeyVisualFlow: [
        {
          stepNumber: 1,
          title: 'Dealer Network',
          subtitle: 'Tier 1, 2 Classification & Sales Routes',
          isBottleneck: false,
          systemSupport: 'Configurable Capability: Complete Dealer 360 dossiers: contracts, credit limits, order histories, and cumulative sales.'
        },
        {
          stepNumber: 2,
          title: 'Pricing / Tier',
          subtitle: 'Enforce Standard Discount Matrices',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Sales reps quote erroneous prices verbally or via messaging, eroding enterprise wholesale margins.',
          systemSupport: 'Configurable Capability: Enforces tiered price lists; restricts arbitrary sales price overrides without approval.'
        },
        {
          stepNumber: 3,
          title: 'Credit Limits',
          subtitle: 'Audit Outstanding Debt & Aging Days',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Shipments continue to dealers with long-overdue debt balances due to the lack of dispatch hold controls.',
          systemSupport: 'Configurable Capability: Credit limit check rules triggering automated alert flags before dispatch orders are released.'
        },
        {
          stepNumber: 4,
          title: 'Dispatch Sign-off',
          subtitle: 'Sales - Finance - Warehouse Handoff',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Manual paper approval routing takes entire days, stalling freight trucks at warehouse gates.',
          systemSupport: 'Workflow Demonstration: Online multi-tier dispatch approval workflows aligned with organizational permissions.'
        }
      ],
      configuredModules: [
        {
          scope: 'Scope B',
          moduleName: 'B2B Dealer Network CRM & Wholesale Order Management',
          inputData: 'Dealer registries, classification tiers (Gold, Silver, Bronze), approved credit lines, shipping addresses.',
          coreProcess: 'Applies contractual tiered discounts automatically; centralizes full order histories across the network.',
          outputData: 'Accurate wholesale order documentation enforcing agreed pricing matrices and settlement conditions.'
        },
        {
          scope: 'Scope E',
          moduleName: 'Credit Limit Governance & Configurable Dispatch Holds',
          inputData: 'Issued sales invoices, recorded payments, contractual credit terms (30 days, 45 days).',
          coreProcess: 'Calculates real-time outstanding balances per transaction, flagging order creation holds when credit terms are breached.',
          outputData: 'Safeguards wholesale cash flow stability and reduces extended accounts receivable exposure.'
        },
        {
          scope: 'Scope D',
          moduleName: 'Dealer Relationship Desk & Warranty / Returns Triage',
          inputData: 'Damaged merchandise claims, batch quality inquiries, marketing collateral assistance requests.',
          coreProcess: 'Centralizes dealer return and warranty tickets, attributing liability across logistics or manufacturing teams.',
          outputData: 'Sustains transparent, professional, and audit-compliant partnerships across wholesale channels.'
        },
        {
          scope: 'Scope J',
          moduleName: 'Sales Territory BI & Distribution Penetration Analytics',
          inputData: 'Regional revenue distribution, SKU sales volumes, dealer reorder frequency patterns.',
          coreProcess: 'Identifies dealers with abnormal reorder declines compared to historical baselines to alert territory managers.',
          outputData: 'Executive BI dashboards tracking territory market share and dealer performance against quotas.'
        }
      ],
      aiSpecializedDemo: {
        title: 'AI Illustrative Scenario: Dealer Credit Risk Audit & Discount Validation',
        problemContext: '[Illustrative Scenario] Dealer Minh Phat (Gold Tier - Can Tho Region) submits a purchase order of 250 million VND. Current balance is 420 million VND against an approved 500 million ceiling. The order would breach the limit by 170 million VND. Authorized AI evaluates the risk.',
        inputLabel: 'Order Attributes and Dealer Credit History [Illustrative Scenario]:',
        sampleInput: {
          'Dealer Name': 'Minh Phat Wholesale - Can Tho (Tier: Gold) [Sample Record]',
          'New Order Value': '250,000,000 VND (18% Gold Tier discount applied)',
          'Current Balance': '420,000,000 VND (Approved Credit Limit: 500,000,000 VND)',
          'Overdue Status': '01 outstanding invoice of 85,000,000 VND is 4 days overdue',
          'Partnership History': '3-year partner, cumulative annual sales reaching 3.8 billion VND'
        },
        aiProcessing: 'AI parses dealer debt parameters and authorized credit governance policies to evaluate financial risk...',
        aiOutput: {
          badge: 'AI Illustrative Scenario: Credit Ceiling Breach Alert',
          summary: 'Order pushes total balance to 670M VND (Exceeding ceiling by 170M VND) accompanied by an invoice 4 days overdue. AI recommends review status.',
          recommendations: [
            'Proposed Option 1: Request dealer settle overdue 85M VND invoice + 85M VND toward new order prior to warehouse dispatch.',
            'Proposed Option 2: Route request to authorized leadership to evaluate a temporary 7-day credit exception guarantee.'
          ],
          riskLevel: 'HIGH',
          actionItems: [
            'Advise credit accountant to dispatch detailed statement of accounts reconciliation directly to dealer.',
            'Suspend pick-list and dispatch note printing for this order pending verified management approval.'
          ]
        },
        disclaimer: 'AI simulation scenario operates strictly on illustrative dummy data. AI only reads authorized datasets, performing analysis and suggestions within configured bounds; actual execution requires human managerial sign-off.'
      },
      trackedKpis: [
        {
          metric: 'Days Sales Outstanding (DSO)',
          formula: '(Total dealer accounts receivable / Total credit sales) × Number of days in period [Reference Formula]',
          frequency: 'Evaluated monthly',
          targetBenchmark: '30 - 45 days [Reference Target]',
          businessImpact: 'Accelerates working capital velocity and mitigates financing costs associated with warehouse stock.'
        },
        {
          metric: 'Price & Discount Compliance Rate',
          formula: '(Orders dispatched at approved price lists and discounts / Total orders) × 100% [Reference Formula]',
          frequency: 'Monitored continuously',
          targetBenchmark: '100% [Reference Target under deterministic lock rules]',
          businessImpact: 'Eliminates unauthorized internal sales discounting and preserves wholesale gross profit margins.'
        },
        {
          metric: 'Dealer Retention Rate',
          formula: '(Dealers placing active orders in month / Total contracted dealer network) × 100% [Reference Formula]',
          frequency: 'Evaluated monthly',
          targetBenchmark: '≥ 85% [Reference Target]',
          businessImpact: 'Maintains retail shelf penetration and defends market territory against competitor expansion.'
        }
      ],
      threeStageRoadmap: [
        {
          phase: 'Phase 1 (Weeks 1 - 3)',
          title: 'Dealer Catalog Architecture & Tiered Pricing Configuration',
          timeline: 'Week 1 - Week 3',
          focus: 'Centralize dealer master files in Scope B; configure locked price lists and tiered discount matrices.',
          deliverables: [
            'Centralized dealer directory with formal tier classifications and territory assignments',
            'Enforced price list locking rules preventing arbitrary manual discounting',
            'B2B order intake portal configured for regional sales representatives'
          ]
        },
        {
          phase: 'Phase 2 (Weeks 4 - 7)',
          title: 'Credit Limit Governance & Dispatch Approval Workflows',
          timeline: 'Week 4 - Week 7',
          focus: 'Deploy credit limit monitoring and overdue debt alerts; digitize cross-departmental dispatch sign-offs.',
          deliverables: [
            'Credit limit checks and overdue payment alert rules configured by account',
            'Multi-tier digital dispatch sign-off workflows mapped to organizational roles',
            'Standardized periodic account balance reconciliation statement templates'
          ]
        },
        {
          phase: 'Phase 3 (Weeks 8 - 12)',
          title: 'AI Credit Risk Warnings & Wholesale Market BI',
          timeline: 'Week 8 - Week 12',
          focus: 'Deploy AI reorder drop warnings, cumulative rebate calculation models, and executive distribution BI.',
          deliverables: [
            'AI early warning system identifying declining dealer purchase frequencies',
            'Executive BI dashboards tracking territory penetration and volume trends',
            'System operating documentation and training modules for wholesale personnel'
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // BATCH E: CONSTRUCTION & ENGINEERING (IND-CON-07)
    // -------------------------------------------------------------------------
    construction: {
      slug: 'construction',
      name: 'Construction & Engineering',
      tagline: 'Govern project construction schedules, digitize job site field diaries, and streamline payment acceptance records',
      sectorCode: 'IND-CST-07',
      heroProblemSummary: 'General contractors, specialized subcontractors, and MEP engineering firms struggle to maintain communication between field job sites and executive management. Job site diaries kept on paper lack photographic accountability, material waste on site goes untracked, and delayed progress acceptance minutes stall working capital for months.',
      operatingSnapshot: {
        dailyVolume: '3 - 20 active construction projects distributed across multiple locations [Illustrative Scenario]',
        primaryChannels: 'Digital Site Diaries, Photographic Progress Logs, Field Inspection Acceptance Minutes',
        keyConstraint: 'Track actual completed work volumes against baseline Gantt schedule milestones',
        complianceNote: 'Adhere to construction quality records, occupational safety standards, and as-built documentation'
      },
      dailyOperation: [
        {
          time: '06:30',
          title: 'Headcount Roll Call & Daily Safety Briefing (Toolbox Talk)',
          actor: 'Site Superintendent & Safety Engineer',
          desc: 'Verifies subcontractor trade crew headcounts, delivers job hazard safety briefings, and assigns daily work packages.',
          systemAction: 'Workflow Demonstration: Logs verified field manpower headcounts into Scope G project tracking tables.'
        },
        {
          time: '08:30',
          title: 'Receive Material Deliveries on Site & Inspect Quality Certifications',
          actor: 'Materials Engineer & Site Warehouse Clerk',
          desc: 'Inspects delivery tickets, mill test certificates, and CO/CQ documents for structural steel, cement, and MEP conduits.',
          systemAction: 'Workflow Demonstration: Uploads material inspection photos and accepted inventory quantities to project logs.'
        },
        {
          time: '11:30',
          title: 'Compile Morning Digital Job Site Daily Diary',
          actor: 'Field Supervision Engineer',
          desc: 'Updates weather conditions, active machinery hours, and work packages in progress across structural grids.',
          systemAction: 'Application Scenario: Uploads field photos tagged with timestamps and grid locations to project records.'
        },
        {
          time: '15:00',
          title: 'Execute Work Inspection with Owner Supervision Consultant',
          actor: 'Deputy Site Manager & Supervision Consultant',
          desc: 'Inspects structural elevations, rebar spacing, and tie clearances prior to concrete pouring operations.',
          systemAction: 'Workflow Demonstration: Signs digital inspection minutes on mobile devices; records sign-off for billing milestones.'
        },
        {
          time: '17:30',
          title: 'Aggregate Daily Quantities & Review Subcontractor Advances',
          actor: 'Site Superintendent & Project Accountant',
          desc: 'Reconciles approved work quantities completed during the shift and audits material requisition slips for the next day.',
          systemAction: 'Application Scenario: Updates progress syntheses for engineering management and syncs Gantt schedule baselines.'
        }
      ],
      journeyVisualFlow: [
        {
          stepNumber: 1,
          title: 'Gantt Schedule',
          subtitle: 'Bill of Quantities & Milestones',
          isBottleneck: false,
          systemSupport: 'Configurable Capability: Master schedule and detailed work package tracking on Scope G project Gantt charts.'
        },
        {
          stepNumber: 2,
          title: 'Site Diary',
          subtitle: 'Photos, Labor & Weather Logs',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Paper job site diaries are lost or backdated with inaccurate records, keeping headquarters blind to actual job site reality.',
          systemSupport: 'Implementation Capability: Digital field daily diaries with timestamped and location-annotated site photos based on user input.'
        },
        {
          stepNumber: 3,
          title: 'Inspection Sign-off',
          subtitle: 'Supervision Sign-off & Stage Gate',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Delayed inspection sign-offs leave downstream subcontractor trades waiting idle on site, inflating labor costs.',
          systemSupport: 'Workflow Demonstration: Scheduled inspection notification flows and digital technical sign-off archive records.'
        },
        {
          stepNumber: 4,
          title: 'Billing Dossiers',
          subtitle: 'Quantity Summaries & As-Builts',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Milestone billing dossiers assembled only at period ends lack supporting documents, delaying disbursements for months.',
          systemSupport: 'Workflow Demonstration: Compiles signed inspection minutes into progress billing dossiers conforming to contractual standards.'
        },
        {
          stepNumber: 5,
          title: 'Disbursement',
          subtitle: 'Subcontractor Advances & Cash Flow',
          isBottleneck: false,
          systemSupport: 'Configurable Capability: Tracks subcontractor advance limits and cumulative disbursements against verified work quantities.'
        }
      ],
      configuredModules: [
        {
          scope: 'Scope G',
          moduleName: 'Construction Project Gantt & Digital Site Diary',
          inputData: 'Bill of Quantities (BOQ), contractual milestones, weather logs, daily manpower counts, material usage.',
          coreProcess: 'Tracks physical progress against project baseline schedules; archives timestamped field site photography.',
          outputData: 'Updated Gantt progress charts providing executive management with transparent visibility across job sites.'
        },
        {
          scope: 'Scope H',
          moduleName: 'Technical Submittals, Shop Drawings & Quality Records',
          inputData: 'Approved shop drawings, inspection test plans, material test certificates (CO/CQ).',
          coreProcess: 'Manages drawing version control, ensuring field engineers access approved construction documents on mobile devices.',
          outputData: 'Prevents construction errors caused by trades building from outdated drawing revisions.'
        },
        {
          scope: 'Scope E',
          moduleName: 'Project Cash Flow & Subcontractor Advance Governance',
          inputData: 'Subcontract agreements, verified quantity inspection sign-offs, advance payment requests.',
          coreProcess: 'Cross-checks subcontractor payment requests against verified completed quantities before approving disbursements.',
          outputData: 'Mitigates contractor financial risk by preventing over-payment beyond physically inspected progress.'
        },
        {
          scope: 'Scope J',
          moduleName: 'Budget Variance BI & Project Cost Analytics',
          inputData: 'Contractual project budgets, actual field labor costs, material requisitions, equipment rental expenses.',
          coreProcess: 'Synthesizes cost variances (Cost Overrun) across work packages from logged inputs to alert management of budget strain.',
          outputData: 'Executive project margin dashboards supporting financial forecasting and working capital management.'
        }
      ],
      aiSpecializedDemo: {
        title: 'AI Illustrative Scenario: Site Diary Synthesis & Schedule Slippage Diagnostic',
        problemContext: '[Illustrative Scenario] Project "SkyTower Plaza" is currently executing Level 8 structural floor slab construction. 3 days of heavy rain occurred alongside rebar delivery delays. Authorized AI reviews site diaries against baseline milestones.',
        inputLabel: 'Job Site Progress Reporting Records [Illustrative Scenario]:',
        sampleInput: {
          'Project Name': 'SkyTower Plaza - Level 8 Structural Slab Package [Illustrative Scenario]',
          'Target Milestone': 'Concrete pour scheduled for September 14 (Targeted 20:00 start)',
          'Field Daily Diary': 'Heavy rain halted operations for 14 hours | Slab rebar arrived 1 day late',
          'Actual Progress': 'Rebar placement at 45% (30% behind schedule milestone baseline)',
          'Subcontractor': 'Toan Thang Rebar Crew (Active headcount: 18 steel fixers)'
        },
        aiProcessing: 'AI parses daily site diary records and milestone scheduling baselines, evaluating trade capacity constraints...',
        aiOutput: {
          badge: 'AI Illustrative Scenario: Milestone Slippage Risk Identification',
          summary: 'AI identifies high risk that rebar preparation cannot meet the committed concrete pour milestone due to weather disruptions and crew shortages.',
          recommendations: [
            'Proposed Resource Adjustment: Evaluate adding approximately 08 skilled steel fixers on the next shift.',
            'Proposed Technical Solution: Review with Supervision Consultant the feasibility of zoning the floor slab into two partial pour sectors.'
          ],
          riskLevel: 'HIGH',
          actionItems: [
            'Site superintendent reviews situation and issues operational instructions to subcontractor trades.',
            'Update adjusted schedule milestones on Gantt chart to synchronize concrete supplier dispatch.'
          ]
        },
        disclaimer: 'AI simulation scenario operates strictly on illustrative dummy data. AI only reads authorized datasets, performing analysis and suggestions within configured bounds; actual execution requires human managerial sign-off.'
      },
      trackedKpis: [
        {
          metric: 'Milestone Schedule Adherence Rate',
          formula: '(Milestones completed on or ahead of contractual schedule / Total milestones) × 100% [Reference Formula]',
          frequency: 'Evaluated weekly',
          targetBenchmark: '≥ 92% [Reference Target]',
          businessImpact: 'Avoids contractual liquidated damages (LD) and safeguards reputation with project developers.'
        },
        {
          metric: 'Project Cost Variance (CV)',
          formula: '((Actual incurred cost - Approved budget baseline) / Approved budget baseline) × 100% [Reference Formula]',
          frequency: 'Evaluated monthly',
          targetBenchmark: '≤ ± 3.0% [Reference Target]',
          businessImpact: 'Preserves project gross margins and curbs unmonitored material waste on job sites.'
        },
        {
          metric: 'Progress Billing Cycle Lead Time',
          formula: 'Elapsed days from physical work completion on site to formal client billing dossier submission [Reference Formula]',
          frequency: 'Monitored per payment cycle',
          targetBenchmark: '< 5 working days [Reference Target]',
          businessImpact: 'Accelerates working capital recovery and ensures timely cash disbursements to subcontractor partners.'
        }
      ],
      threeStageRoadmap: [
        {
          phase: 'Phase 1 (Weeks 1 - 3)',
          title: 'Project Architecture & Digital Site Diary Standardization',
          timeline: 'Week 1 - Week 3',
          focus: 'Structure project Gantt charts on Scope G; deploy digital daily job site diary templates.',
          deliverables: [
            'Standardized project Gantt schedule structures mapped per construction package',
            'Digital site diary forms with timestamped, geolocated photo uploads',
            'Digital document repository for approved shop drawings and submittals'
          ]
        },
        {
          phase: 'Phase 2 (Weeks 4 - 7)',
          title: 'Inspection Workflows & Subcontractor Advance Governance',
          timeline: 'Week 4 - Week 7',
          focus: 'Deploy incoming material inspections; link verified site work quantities directly to subcontractor payment flows.',
          deliverables: [
            'Digital technical inspection sign-off minutes with audit logging',
            'Multi-tier material requisition and subcontractor advance approval workflows',
            'Real-time cost tracking comparing actual expenditures against package budgets'
          ]
        },
        {
          phase: 'Phase 3 (Weeks 8 - 12)',
          title: 'AI Delay Diagnostics & Project Financial BI',
          timeline: 'Week 8 - Week 12',
          focus: 'Deploy AI schedule slippage risk diagnostics, progress billing dossier automation, and financial BI analytics.',
          deliverables: [
            'AI schedule diagnostic assistant analyzing site diaries to flag delay risks',
            'Executive BI dashboards tracking project financial health and subcontractor cash flows',
            'Standard operating procedure manuals for site superintendents and project managers'
          ]
        }
      ]
    },

    // -------------------------------------------------------------------------
    // BATCH E: TECHNOLOGY & DIGITAL ENTERPRISE (IND-TEC-08)
    // -------------------------------------------------------------------------
    technology: {
      slug: 'technology',
      name: 'Technology & Digital Enterprise',
      tagline: 'Lean Agile operations, standardized engineering knowledge repositories, and controlled continuous client support',
      sectorCode: 'IND-TEC-08',
      heroProblemSummary: 'Technology companies, SaaS platforms, and digital service providers suffer from excessive tool sprawl (Slack, Jira, Trello, Google Drive, Zendesk). Customer account history is fractured across disparate tools, support engineers lack visibility into enterprise contracts, and unsynchronized API documentation slows onboarding and ticket resolution.',
      operatingSnapshot: {
        dailyVolume: 'Hundreds of technical support tickets, feature requests, and active Agile development sprints [Illustrative Scenario]',
        primaryChannels: 'Customer Support Desk, Internal Developer Channels, API / Architecture SOP Documentation Repositories',
        keyConstraint: 'Strict Service Level Agreement (SLA) response enforcement and role-based data security configurations',
        complianceNote: 'Information security standards, customer data privacy protection, and release version management'
      },
      dailyOperation: [
        {
          time: '09:00',
          title: 'Morning Standup & Incident Triage Review',
          actor: 'Tech Lead & Support Engineering Team',
          desc: 'Reviews overnight production incidents, triaging severity levels against contractual SLA commitments.',
          systemAction: 'Workflow Demonstration: Routes P1/P2 tickets to on-duty engineers and monitors SLA milestone count-downs.'
        },
        {
          time: '10:30',
          title: 'Triage Client Feature Inquiries & Groom Product Backlog',
          actor: 'Product Manager (PM)',
          desc: 'Evaluates feature requests from enterprise B2B accounts, prioritizing user stories for upcoming Sprint cycles.',
          systemAction: 'Workflow Demonstration: Links CRM client accounts directly to technical task cards in Scope G.'
        },
        {
          time: '14:00',
          title: 'Query Technical Architecture & Deploy Support Remediation',
          actor: 'Solutions Engineer',
          desc: 'Leverages RAG search tools to query API endpoints, system error codes, and internal architectural wiki specifications.',
          systemAction: 'Application Scenario: AI assistant retrieves relevant technical wiki documentation complete with citation links for verification.'
        },
        {
          time: '16:30',
          title: 'Verify Bug Fixes & Publish Release Notes',
          actor: 'QA Team & Technical Writer',
          desc: 'Verifies hotfix patches or new feature deployments, drafting structured release notes for impacted clients.',
          systemAction: 'Workflow Demonstration: Dispatches release notifications to customer accounts subscribed to relevant modules.'
        },
        {
          time: '18:00',
          title: 'Audit Daily SLA Compliance & First-Contact Resolution Metrics',
          actor: 'Customer Support Lead & Operations Manager',
          desc: 'Reviews ticket resolution metrics within committed SLA windows, logging complex incident post-mortems into knowledge bases.',
          systemAction: 'Workflow Demonstration: Archives verified troubleshooting guides into the central knowledge repository.'
        }
      ],
      journeyVisualFlow: [
        {
          stepNumber: 1,
          title: 'Customer Tickets',
          subtitle: 'Support Portal, Email & Messaging',
          isBottleneck: false,
          systemSupport: 'Workflow Demonstration: Centralized ticket ingestion across support channels, auto-triaging priority levels by policy.'
        },
        {
          stepNumber: 2,
          title: 'Backlog',
          subtitle: 'Defect Triage, Features & Sprint Priority',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Customer feature requests get lost in fragmented internal chat channels, leaving status unmonitored.',
          systemSupport: 'Configurable Capability: Converts support tickets into Product Backlog user stories linked to customer CRM profiles.'
        },
        {
          stepNumber: 3,
          title: 'Release',
          subtitle: 'QA Testing, Packaging & Deployment',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: New product features deploy without notifying Commercial and Support teams, creating confusion when clients inquire.',
          systemSupport: 'Process Capability: Manages release approval gates and generates standardized version changelogs.'
        },
        {
          stepNumber: 4,
          title: 'Source Knowledge & API',
          subtitle: 'RAG Search, Technical Wiki & Helpdesk',
          isBottleneck: true,
          bottleneckNote: 'Bottleneck: Support agents deliver inconsistent answers due to scattered, outdated API documentation and legacy SOP spreadsheets.',
          systemSupport: 'Application Scenario: Centralized technical knowledge wiki equipped with natural language RAG semantic search and cited source references.'
        }
      ],
      configuredModules: [
        {
          scope: 'Scope K',
          moduleName: 'Open API & Webhook Integration Architecture',
          inputData: 'Event payloads from internal services and third-party systems, authentication tokens, request logs.',
          coreProcess: 'Connects external web services into the platform via secure APIs and Webhooks; manages role-based access permissions.',
          outputData: 'Synchronized real-time data streams across technical operating infrastructure.'
        },
        {
          scope: 'Scope H',
          moduleName: 'Engineering Knowledge Wiki & API Documentation',
          inputData: 'System architecture specifications, API integration guides, troubleshooting playbooks, security SOPs.',
          coreProcess: 'Organizes structured technology documentation, supporting natural language search and version history tracking.',
          outputData: 'Enables engineers and support specialists to rapidly query verified technical standards.'
        },
        {
          scope: 'Scope D',
          moduleName: 'Customer Support Ticket Desk & SLA Management',
          inputData: 'User technical support tickets, urgency classifications (P1 to P4), committed response windows.',
          coreProcess: 'Dispatches tickets based on engineer domain expertise, monitoring SLA resolution deadlines in real time.',
          outputData: 'Enterprise clients receive prompt, transparent, and professionally governed service resolution.'
        },
        {
          scope: 'Scope J',
          moduleName: 'Digital Service Health BI & Net Revenue Retention (NRR)',
          inputData: 'Active account usage, SLA compliance rates, monthly recurring revenue (MRR) renewals.',
          coreProcess: 'Tracks Net Revenue Retention (NRR) rates and enterprise client satisfaction metrics from logged system data.',
          outputData: 'Executive BI dashboards supporting technology leadership in tracking operational health and account retention.'
        }
      ],
      aiSpecializedDemo: {
        title: 'AI Illustrative Scenario: Support Ticket Triage & RAG Engineering Wiki Retrieval',
        problemContext: '[Illustrative Scenario] An enterprise client reports an error: "System returned HTTP 429 Too Many Requests when calling order synchronization endpoint". Authorized AI evaluates ticket contents and queries API rate limit documentation.',
        inputLabel: 'Support Ticket Ingestion Payload [Illustrative Scenario]:',
        sampleInput: {
          'Client Account': 'Logix Platform (Subscription Tier: Enterprise SaaS) [Sample Record]',
          'Issue Description': 'Encountered HTTP 429 error when executing sync script for 5,000 orders at 14:00. Process halted.',
          'Environment': 'Production API Gateway (v2.4.1)',
          'Submitter': 'Hoang Minh Nguyen - Partner Integration Lead'
        },
        aiProcessing: 'AI reviews error details, querying authorized API Rate Limit documentation in Scope H to locate specific guidelines...',
        aiOutput: {
          badge: 'AI Illustrative Scenario: API Rate Limit Incident Classification',
          summary: 'Enterprise tier accounts have an authorized threshold of 120 requests/minute per documentation. Client script executed concurrent requests exceeding limits.',
          recommendations: [
            'Source Documentation Citation: [Docs/API/V2-Rate-Limiting.md#Section-4.2] - Exponential Backoff & Retry Implementation Guide.',
            'Proposed Technical Solution: Direct client to the Bulk Batch Endpoint (/api/v2/orders/batch) supporting up to 500 orders per request.'
          ],
          riskLevel: 'MEDIUM',
          actionItems: [
            'Generate draft technical response into the ticket reply draft area for engineering review prior to client dispatch.',
            'Support engineer may consider granting a temporary 24-hour rate limit increase if client is executing a one-time data migration.'
          ]
        },
        disclaimer: 'AI simulation scenario operates strictly on illustrative dummy data. AI only reads authorized documentation, retrieving cited text references and proposing remediation paths; actual technical resolution remains with engineering personnel.'
      },
      trackedKpis: [
        {
          metric: 'First Response Time (FRT)',
          formula: 'Elapsed duration from ticket submission to first verified engineer response [Reference Formula]',
          frequency: 'Monitored real-time',
          targetBenchmark: '< 15 minutes (for P1/P2 incidents) [Reference Target]',
          businessImpact: 'Preserves trust with enterprise partners across business-critical technology services.'
        },
        {
          metric: 'SLA Resolution Compliance Rate',
          formula: '(Tickets resolved within contractual SLA window / Total tickets processed) × 100% [Reference Formula]',
          frequency: 'Evaluated weekly',
          targetBenchmark: '≥ 98.0% [Reference Target]',
          businessImpact: 'Satisfies enterprise Master Service Agreements (SLA) and avoids financial breach penalty risks.'
        },
        {
          metric: 'Net Revenue Retention (NRR)',
          formula: '((Starting MRR + Expansion MRR - Churn MRR) / Starting MRR) × 100% [Reference Formula]',
          frequency: 'Evaluated quarterly',
          targetBenchmark: '≥ 110% [Reference Target]',
          businessImpact: 'Primary benchmark reflecting expansion, stability, and customer value within technology enterprises.'
        }
      ],
      threeStageRoadmap: [
        {
          phase: 'Phase 1 (Weeks 1 - 3)',
          title: 'Support Desk Consolidation & SLA Commitment Framework',
          timeline: 'Week 1 - Week 3',
          focus: 'Unify technical support intake channels into a centralized desk; configure SLA response priority policies.',
          deliverables: [
            'Enterprise B2B client support portal with multi-tier ticket submission forms',
            'SLA response and resolution commitment policies configured per subscription tier',
            'High-priority incident dispatch and notification escalation protocols'
          ]
        },
        {
          phase: 'Phase 2 (Weeks 4 - 7)',
          title: 'Engineering Knowledge Wiki & Product Backlog Integration',
          timeline: 'Week 4 - Week 7',
          focus: 'Build centralized engineering wiki; link customer support tickets directly to product development user stories.',
          deliverables: [
            'Engineering Wiki repository and SOP troubleshooting playbook framework',
            'Standardized release management workflows (Release Notes and Changelog publication)',
            'Integrated API & Webhook connections linking external technical tools'
          ]
        },
        {
          phase: 'Phase 3 (Weeks 8 - 12)',
          title: 'AI RAG Documentation Search & Service Health BI',
          timeline: 'Week 8 - Week 12',
          focus: 'Deploy AI RAG semantic search assistant with cited documentation sources; deploy NRR executive BI analytics.',
          deliverables: [
            'AI RAG technical assistant querying API and SOP manuals with cited documentation sources',
            'Executive BI dashboards tracking SLA compliance and recurring revenue health (MRR/NRR)',
            'Operational handover documentation and data-driven SOP governance frameworks'
          ]
        }
      ]
    }
  }
};

export default enIndustries;
