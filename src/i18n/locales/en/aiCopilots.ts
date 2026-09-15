import { TranslationDictionary } from '../../types';

const enAiCopilots: TranslationDictionary = {
  detail: {
    backToNetwork: 'Back to 9 AI Copilots Network',
    heroBadge: 'Domain Specialization • {roleTitle}',
    targetAudienceLabel: 'Target Audience:',
    outputPreviewLabel: 'Actual Output Preview for {name}:',
    simulatedDataNote: 'Simulated data based on actual business operations',
    beforeAfterBadge: 'Process Comparison',
    beforeAfterTitle: 'Process Shift: Before & After Copilot Deployment',
    beforeAfterDesc: 'Shifting staff time from manual searching and copy-pasting to governance and strategic decision-making.',
    beforeTitle: 'Before Copilot (Manual)',
    bottleneckLabel: 'Bottleneck:',
    afterTitle: 'After Copilot (AI-Assisted)',
    humanRoleLabel: 'Human Role:',
    dataSourcesBadge: 'Operational Data Foundation',
    dataSourcesTitle: 'Data Sources & Synchronization Methods',
    dataTypeLabel: 'Data type:',
    transparencyNotice: 'Transparency Notice:',
    governanceBadge: 'Security & Boundaries',
    governanceTitle: 'Data Access Governance & Role-Based Access Control (RBAC)',
    governanceDesc: 'Data is strictly segregated by tenant, permission scope, and system configurations. Data processing adheres to access boundaries and compliance policies of configured models and providers.',
    allowedDataTitle: 'AI Permitted Data Scope (Read-only):',
    prohibitedDataTitle: 'Restricted & Prohibited Data (Out of Scope):',
    rbacRulesTitle: 'Role-Based Access Control Principles (RBAC):',
    auditTrailTitle: 'Audit Trail & Traceability Mechanisms:',
    auditTrailDesc: 'Critical operations and prompts are logged to tamper-proof audit trails based on system configuration for auditability and verification.',
    hitlBadge: 'Human-in-the-Loop',
    hitlTitle: 'Automated Task Boundary & Mandatory Approval Checkpoints',
    hitlDesc: 'AI processes low-risk repetitive tasks; all financial, HR, and external-facing executive decisions strictly require human sign-off.',
    safeAutomationTitle: 'Automated AI Operations (Safe Automation)',
    systemOutputLabel: 'System output:',
    approvalGatesTitle: 'Mandatory Human Approval Gates',
    approverLabel: 'Approved by:',
    reasonLabel: 'Mandatory reason:',
    rejectedActionLabel: 'If rejected:',
    pilotMetricsBadge: 'Empirical Measurement',
    pilotMetricsTitle: 'Target Pilot Evaluation Metrics [Reference Baseline]',
    pilotMetricsDesc: 'The indicators and milestones below are reference pilot target metrics established for controlled trial phases, not fixed commercial performance guarantees.',
    frequencyLabel: 'Interval:',
    formulaLabel: 'Formula:',
    metricDataSourceLabel: 'Data source:',
    targetBenchmarkLabel: '[Target Pilot Reference]:',
    pilotRoadmapBadge: 'Implementation Roadmap',
    pilotRoadmapTitle: 'Deploying a Phased Pilot ({duration})',
    pilotRoadmapDesc: 'We recommend a bounded scope to mitigate risk and measure empirical outcomes before enterprise-wide scaling.',
    deploymentPolicyLabel: 'Deployment policy:',
    deploymentPolicyText: 'Phased pilot. Timeline depends on data boundaries, integration depth, compliance prerequisites, and enterprise acceptance criteria.',
    recommendedScopeLabel: 'Recommended scope:',
    deliverableLabel: 'Deliverable:',
    goNoGoTitle: 'Pilot Acceptance (Go / No-Go Criteria)',
    goNoGoDesc: 'The pilot is approved for production expansion only when 100% of these safety criteria are fulfilled:',
    ctaTitle: 'Ready to Deploy a Phased Pilot for {name}?',
    ctaDesc: 'VMC digital transformation consultants will assist your team in auditing data readiness, configuring human-in-the-loop safeguards, and running a measured pilot aligned with your business reality.',
    ctaSurveyBtn: 'Request Pilot Assessment',
    ctaOtherCopilotsBtn: 'Explore Other 8 Copilots',
    stepPrefix: 'Phase'
  },
  visuals: {
    ceo: {
      simulatedHeader: '[Simulated Scenario] 07:30 AM synthesis support upon data connection',
      reconciledSubheader: 'Cross-reconciled across 4 modules when configured',
      simulatedBadge: '[Simulated Data]',
      title: 'Morning Executive Brief',
      rbacNotice: 'Security Classification: Executive Board Access Only',
      kpis: {
        revenue: {
          label: 'Revenue MTD [Simulated]',
          value: '3.82 / 4.15 B VND',
          note: '92.0% of monthly target achieved'
        },
        cashflow: {
          label: 'Cash Flow D+21 [Simulated]',
          value: '- 420 M VND',
          note: 'Short-term liquidity deficit alert'
        },
        sla: {
          label: 'Task SLA [Simulated]',
          value: '94.2% On-time',
          note: '380/403 weekly tasks'
        },
        anomalies: {
          label: 'Anomalies Awaiting Decision [Simulated]',
          value: '02 Decision Gates',
          note: 'Executive directive required'
        }
      },
      anomaliesListTitle: 'Anomaly Register [Simulated Scenario & Data]:',
      clickInstruction: 'Click to inspect & approve options',
      riskWarningBadge: 'Risk Alert [Simulated]',
      impactLabel: 'Impact:',
      anomalies: [
        {
          id: 1,
          title: 'Contract XL-088 (Nam An Urban) delayed by 3 days',
          impact: '650M VND cash collection deferred to next cycle',
          department: 'PMU & Accounting Dept',
          suggestedAction: 'Convene 15-minute briefing with PMU Director & Chief Accountant at 09:30',
          actionKey: 'meet'
        },
        {
          id: 2,
          title: 'Meta ad spend increased 18% while form rate dropped 6%',
          impact: 'Est. weekly CAC rose from 210k to 275k VND/lead',
          department: 'Marketing Department',
          suggestedAction: 'Instruct Head of Marketing to audit target audience parameters before 11:30',
          actionKey: 'review'
        }
      ],
      proposedActionHeader: 'Proposed action from simulated AI scenario (for Executive approval):',
      approvalCheckpointNotice: 'Approval Gate: AI cannot autonomously broadcast notices. Only dispatched upon CEO confirmation.',
      dismissBtn: 'Dismiss',
      approveBtn: 'Approve & Dispatch Notice',
      approvedNotice: 'Briefing notice successfully dispatched to 2 departments',
      dismissedNotice: 'This alert has been recorded as dismissed'
    },
    sales: {
      hotLeadBadge: 'Hot Lead • 92/100',
      simulatedIntake: '[Simulated Scenario] Inbounded via Webhook',
      simulatedBadge: '[Simulated Data]',
      companyName: 'Thang Long Construction Engineering JSC',
      contactPerson: 'Duc Tran (Chief Executive Officer)',
      companyScale: '60 staff / Construction Engineering',
      phone: '0983.xxx.888',
      tabs: {
        score: 'Scoring Rationale [Simulated]',
        quote: 'Draft Quotation [Simulated]',
        email: 'Draft Email [Simulated]'
      },
      scoreTab: {
        title: '3 Scoring Factors for 92/100 [Simulated Scenario & Data]:',
        reasons: [
          {
            num: '1.',
            label: 'Website Telemetry:',
            desc: '5 visits to Pricing page within 48h, downloaded site management solution brochure.'
          },
          {
            num: '2.',
            label: 'ICP Alignment:',
            desc: '60 personnel scale, registrant title is Chief Executive Officer (Final Decision Maker).'
          },
          {
            num: '3.',
            label: 'Deployment Urgency:',
            desc: 'Selected implementation target "Within this month" and submitted direct mobile number.'
          }
        ],
        mainNeedLabel: 'Primary Stated Need:',
        mainNeedValue: 'Control material cost overruns across 4 active simultaneous job sites.',
        suggestedPackageLabel: 'AI Suggested Solution [Reference]:',
        suggestedPackageValue: 'Standard Construction ERP (50 Users) + Site Inventory & Cost Estimation Module.'
      },
      quoteTab: {
        title: 'Draft Quotation #BG-2026-TL01 [Simulated Data]',
        framework: 'Standard VMC Published Price Book',
        items: [
          { name: '1. Cloud ERP Construction License (50 Accounts / 12 Months)', price: '120,000,000 VND' },
          { name: '2. Site Materials Inventory & Project Budgeting Module', price: '45,000,000 VND' },
          { name: '3. Phased Implementation, SOP Standardization & Training', price: '35,000,000 VND' }
        ],
        totalLabel: 'Estimated Total [Simulated] (Excl. VAT):',
        totalValue: '200,000,000 VND',
        discountNote: '* Quotation applies 0% discount conforming to specialist authorization limits. Additional discounts require CSO sign-off.'
      },
      emailTab: {
        toLabel: 'To:',
        toEmail: 'ductran@thanglongcons.vn',
        subjectLabel: 'Subject:',
        subjectValue: 'Material Cost Control Solution for Thang Long Cons - VMC Group',
        greeting: 'Dear Mr. Duc Tran - CEO of Thang Long Cons,',
        paragraph1: 'This is Hoang from VMC Group. I noticed you are exploring solutions to manage site material cost overruns across your ongoing construction projects...',
        paragraph2: 'I have attached a preliminary outline for our Construction ERP solution (50 users), including the site inventory module you researched. Would you be available for a brief 10-minute briefing call at 2:00 PM this afternoon?'
      },
      checkpointNotice: 'Safety Gate: AI never autonomously sends quotes or emails. Sales specialist reviews and authorizes send.',
      submitBtn: 'Review & Dispatch Email',
      submittedNotice: 'Email dispatched and activity logged to CRM'
    },
    marketing: {
      reportBadge: 'Channel Performance Report [Simulated]',
      reconciledNotice: 'Spend reconciled with CRM when configured',
      simulatedBadge: '[Simulated Data]',
      title: 'Channel Efficiency Comparison & Content Approval Queue',
      tableSectionTitle: '1. Customer Acquisition Cost (CAC) vs. Deal Creation Rate [Simulated]:',
      scenarioNote: 'Simulated scenario data',
      tableHeaders: {
        channel: 'Ad Channel',
        spend: 'Spend',
        validLeads: 'Valid Leads',
        cac: 'Cost / Lead (CAC)',
        conversion: 'Deal Conversion',
        recommendation: 'AI Recommendation'
      },
      channels: [
        {
          name: 'Google Search Ads',
          spend: '45.0M VND',
          validLeads: 243,
          cac: '185,000 VND',
          conversionToDeal: '28.4%',
          trend: 'up',
          recommendation: 'Increase +20M Budget'
        },
        {
          name: 'Meta Ads (Facebook)',
          spend: '52.0M VND',
          validLeads: 168,
          cac: '310,000 VND',
          conversionToDeal: '14.2%',
          trend: 'down',
          recommendation: 'Decrease -20M Budget'
        },
        {
          name: 'TikTok Video Ads',
          spend: '18.0M VND',
          validLeads: 42,
          cac: '428,000 VND',
          conversionToDeal: '8.1%',
          trend: 'down',
          recommendation: 'Optimize Audience & Creative'
        }
      ],
      budgetProposal: {
        title: 'Budget Allocation Recommendation [Reference Scenario]:',
        desc: 'Shift 20,000,000 VND from Meta to Google Search to maximize high-conversion inbound demand [Simulated Scenario].',
        approveBtn: 'Approve Budget Scenario',
        approvedNotice: 'Budget scenario authorized'
      },
      queueSectionTitle: '2. Content Approval Queue [Simulated]:',
      queuePendingCount: '2 draft articles awaiting Marketing Head review',
      lengthLabel: 'Length:',
      reviewNotesLabel: 'Review notes:',
      approvePostBtn: 'Approve Publication',
      approvedPostNotice: 'Approved for publication',
      contentQueue: [
        {
          id: 1,
          title: '5 Signs Enterprises Need SOP Standardization Before Buying ERP',
          channel: 'Website Blog & LinkedIn',
          wordCount: '1,450 words',
          complianceScore: '98/100 (Compliant)',
          complianceNotes: 'Removed absolute performance claims, aligned with VMC brand tone.',
          status: 'pending'
        },
        {
          id: 2,
          title: 'Guide to Controlling Material Budget Overruns in Construction',
          channel: 'Ebook & Download Gate',
          wordCount: '3,200 words',
          complianceScore: '92/100 (Requires Attention)',
          complianceNotes: 'Cites 1 cost metric, requires Chief Accountant verification sign-off.',
          status: 'pending'
        }
      ],
      checkpointNotice: 'Safety Gate: AI cannot publish articles to live blogs or alter spend limits on advertising accounts.'
    },
    customerService: {
      ticketTitle: 'Ticket #CS-8492: Component Delivery Delay Complaint',
      priorityBadge: 'Priority P2 (Urgent)',
      simulatedBadge: '[Simulated Data]',
      customerLabel: 'Customer: Nguyen Hoang Nam',
      orderLabel: 'Order: #LK-992 (24,500,000 VND)',
      sentimentLabel: 'Scenario Sentiment: Frustrated [Reference Suggestion]',
      intakeTime: '[Simulated] Received: 14:20 (Waiting 4 mins)',
      complaintHeader: 'Customer Message via Web Portal [Simulated Scenario]:',
      complaintQuote: '"The components were promised yesterday but still haven\'t arrived, and nobody answered the hotline. Our construction site is stalled. If it\'s not delivered this afternoon, I will cancel the entire contract and demand compensation!"',
      citationHeader: 'Cited Policy Basis [Simulated Source Documentation]:',
      viewOriginal: 'View Source Document',
      citationContent: 'Excerpt from SOP-CS-04 (Customer Care & Complaint Handling Policy, Section 3.2 - Force Majeure Delivery Delay Clause): For delays between 24h-48h, support specialists are authorized to apply: Free shipping and a 10% discount voucher for the subsequent order.',
      suggestedResponseHeader: 'AI Suggested Response [Reference Draft for Specialist Review]:',
      saveEditBtn: 'Save Edits',
      editBtn: 'Edit Phrasing',
      defaultResponseText: `Dear Mr. Nguyen Hoang Nam,\n\nVMC Group sincerely apologizes for the 2-day delivery delay on component shipment #LK-992, caused by severe weather conditions at the Da Nang transit hub.\n\nThe shipment has arrived at the Cau Giay district depot, and our courier is currently contacting you for direct handover before 16:30 this afternoon.\n\nIn accordance with VMC Service Policy (SOP-CS-04, Section 3.2), VMC would like to provide you with a 10% discount voucher [VMC-CARE10] for your next order, alongside complimentary shipping for this order. We truly appreciate your patience and understanding!`,
      checkpointNotice: 'Safety Gate: Support specialists must verify tracking code before dispatching. AI does not autonomously message customers.',
      submitBtn: 'Specialist Approve & Send Response',
      submittedNotice: 'Response dispatched to customer at 14:24 (4-minute SLA)'
    },
    hr: {
      badge: 'HR & Performance Management [Simulated]',
      subnote: 'Simulated payroll timesheet cycle',
      simulatedBadge: '[Simulated Data]',
      title: 'Timesheet Exceptions, Onboarding & Skill Gap Matrix',
      tabs: {
        exceptions: 'Timesheet Exceptions (3) [Simulated]',
        onboarding: 'Onboarding [Simulated]',
        skillgap: 'Skill Gaps [Simulated]'
      },
      exceptionsSection: {
        subtitle: 'Detected 3 anomaly entries requiring employee submission:',
        deadlineNotice: 'Explanation deadline: 25th monthly',
        datePrefix: 'Date:',
        aiSuggestionPrefix: 'AI Suggestion:',
        remindBtn: 'Remind to Submit',
        remindedBtn: 'Reminder Sent',
        items: [
          {
            id: 1,
            name: 'Nguyen Van An',
            dept: 'Project Management Unit',
            date: '05/09/2026',
            issue: 'Missing Check-out Timestamp',
            suggestedAction: 'Send reminder to submit missed clock-in/out explanation'
          },
          {
            id: 2,
            name: 'Tran Thi Bich',
            dept: 'Accounting Department',
            date: '08/09/2026',
            issue: 'Late by 28 mins (No leave request filed)',
            suggestedAction: 'Remind to submit external field work verification form'
          },
          {
            id: 3,
            name: 'Pham Minh Duc',
            dept: 'Sales Department',
            date: '09/09/2026',
            issue: 'Full-day absence (Unapproved leave)',
            suggestedAction: 'Alert Department Head to verify absence reason'
          }
        ]
      },
      onboardingSection: {
        employeeName: 'Le Hoang Nam - ERP Implementation Engineer (Joined 12 days ago)',
        mentor: 'Assigned Mentor: Vu Tuan Minh (Implementation Lead)',
        progressBadge: 'Progress: 3/5 steps (On schedule)',
        steps: [
          { step: 1, title: 'Contract Signing & Equipment Handover', date: 'Day 1', status: 'completed' },
          { step: 2, title: 'Complete Company Culture & Policy Orientation', date: 'Day 3', status: 'completed' },
          { step: 3, title: 'Mentor Briefing & Probation KPIs Alignment', date: 'Day 7', status: 'completed' },
          { step: 4, title: '30-Day Probation Progress Evaluation', date: 'Day 30', status: 'active' },
          { step: 5, title: 'HR Committee Official Probation Review', date: 'Day 60', status: 'upcoming' }
        ]
      },
      skillgapSection: {
        subtitle: 'Reconciling actual KPI performance against Standard Competency Framework (Skill Matrix):',
        gapPrefix: 'Gap:',
        currentPrefix: 'Current:',
        benchmarkPrefix: 'Required Benchmark:',
        items: [
          { skill: 'Major Contract Negotiation Skills (B2B)', dept: 'Sales', current: 65, benchmark: 90, gap: '-25%' },
          { skill: 'Proficiency with Jira/SOP Project Management Tools', dept: 'Engineering', current: 78, benchmark: 85, gap: '-7%' },
          { skill: 'Tax Compliance & E-Invoicing Controls', dept: 'Accounting', current: 88, benchmark: 90, gap: '-2%' }
        ]
      },
      checkpointNotice: 'Safety Gate: AI does not autonomously deduct salary or make termination decisions. C&B specialists finalize timesheets with leadership sign-off.'
    },
    finance: {
      badge: 'Bank Transaction Reconciliation [Illustrative]',
      subnote: 'Simulated bank data synchronization when configured',
      simulatedBadge: '[Illustrative Data]',
      title: 'Transaction Matching, Exception Resolution & Cashflow Forecasting',
      tabs: {
        reconcile: 'Transaction matching [Illustrative]',
        forecast: 'Cashflow forecast [Illustrative]'
      },
      matched: {
        header: 'Suggested matched transaction [Scenario & illustrative data]:',
        confidence: 'Simulated confidence: 99.8%',
        bankStatementLabel: 'Bank statement:',
        bankStatementAmount: '+ 45,000,000 VND',
        bankStatementNote: '"BINH MINH TRADING CO LTD PAYMENT FOR CONTRACT HD-2026-091"',
        crmOrderLabel: 'Order on CRM:',
        crmOrderName: 'Contract #HD-2026-091',
        crmOrderNote: 'Amount due: 45,000,000 VND (Exact match)',
        aiSuggestion: 'AI suggestion: Propose draft receipt voucher for accountant verification & approval.',
        confirmReceiptBtn: 'Confirm draft receipt creation',
        receiptCreated: 'Created receipt voucher #PT-0912-01'
      },
      exception: {
        header: 'Exception transaction [Illustrative scenario - Requires accountant resolution]:',
        varianceAmount: 'Amount variance: - 250,000 VND',
        bankStatementLabel: 'Bank statement:',
        bankStatementAmount: '+ 12,250,000 VND',
        bankStatementNote: '"AN PHAT WIRE TRANSFER PURCHASE ORDER 8821"',
        originalInvoiceLabel: 'Original invoice #8821:',
        originalInvoiceAmount: '12,500,000 VND',
        originalInvoiceNote: 'Shortage of 250,000 VND (likely customer deducted bank fee or discount)',
        checkpointWarning: 'Safety guardrail: AI does not automatically bind receipts when amounts do not match strictly.',
        manualActionBtn: 'Manual resolution & Request Sales review'
      },
      forecast: {
        header: 'Cashflow forecast [Illustrative simulation scenario for reference]',
        subnote: 'Sensitivity analysis simulation scenario (when configured with full data integration)',
        baseScenario: {
          label: 'Base Scenario [Illustrative]:',
          amount: '+ 520 Million VND',
          assumption: 'Assumes 90% of customers pay on committed schedule'
        },
        conservativeScenario: {
          label: 'Conservative Scenario [Illustrative]:',
          amount: '+ 180 Million VND',
          assumption: 'Assumes 2 installation contracts delayed by 15 days'
        },
        optimisticScenario: {
          label: 'Optimistic Scenario [Illustrative]:',
          amount: '+ 780 Million VND',
          assumption: 'Assumes overdue receivables recovered before Sep 30'
        },
        recommendationStrong: 'Reference recommendation from simulated AI scenario:',
        recommendationText: 'Cash reserve is secure for the next 21 days. However, on Sep 25, payroll of 450M and VAT of 120M are due; recommended Chief Accountant expedite recovery of 2 receivables from Nam An Co. before Sep 22.'
      },
      checkpointNotice: 'Safety boundary: AI only reads statements and drafts receipt vouchers. AI strictly has no authority to transfer funds or alter account balances.'
    },
    voice: {
      badgeControlled: 'Controlled',
      badgeIllustrative: '[Illustrative Scenario]',
      title: 'AI Voice Dialogue Simulation (Dialogue Flow)',
      subnote: 'Simulated scenario: Appointment reminder • Rescheduling • Handoff on out-of-scope queries',
      progressLabel: 'Call Progression:',
      speakers: {
        ai: 'VMC Voice AI Assistant',
        user: 'Customer (Mr. Tuan Anh)',
        transfer: 'Safety Gate: Scripted handoff to designated staff per routing policy'
      },
      steps: [
        {
          type: 'Automated Reminder',
          text: 'Hello Mr. Tuan Anh, this is VMC Technical Service Center. I am calling to confirm your scheduled vehicle maintenance today at 2:00 PM at our Cau Giay workshop.',
          actionPrompt: 'Customer replies requesting appointment reschedule...'
        },
        {
          type: 'Rescheduling Request',
          text: 'I have an ongoing meeting with a partner at 2:00 PM today. Could we reschedule to around 4:30 PM this afternoon? Will technicians still be available?',
          actionPrompt: 'AI checks workshop bay capacity and available time slots...'
        },
        {
          type: 'Reschedule Confirmed',
          text: 'Yes, our service workshop operates until 6:30 PM. I have successfully rescheduled your appointment to 4:30 PM today. Upon arrival, simply provide your phone number for immediate technician check-in.',
          actionPrompt: 'Customer unexpectedly asks an in-depth technical question...'
        },
        {
          type: 'Out-of-Scope Safety Question',
          text: 'By the way, over the past few days my car makes a loud squeaking sound when braking. How long does that inspection take, and will the brake disc need immediate replacement?',
          actionPrompt: 'Safety gate triggered: Scripted handoff to designated staff per routing policy'
        },
        {
          type: 'Human Handoff (When Configured)',
          text: 'Regarding brake safety issues, please hold while I transfer this call to Lead Engineer Tuan Minh to provide you with precise technical guidance right away!',
          actionPrompt: 'Engineer receives transferred call on extension with contextual summary'
        }
      ],
      completeCallNotice: 'Call completed: Technical Advisor has successfully taken over.',
      btnContinue: 'Continue Dialogue',
      btnReset: 'Replay from Start',
      checkpointNotice: 'Core Rule: Voice AI does not speculate on technical diagnostics or pricing outside approved scripts; always hands off to human staff when encountering open-ended queries.'
    },
    workflow: {
      badgeBottleneck: 'Bottleneck Detected [Simulated Scenario]',
      badgeProcess: 'Simulated B2B Order Processing SOP',
      badgeIllustrative: '[Illustrative Data]',
      title: 'Process Flow & Resource Reallocation Recommendation',
      progressTitle: 'Docket routing progression across 5 departments:',
      progressAlert: 'Bottlenecked at Step 3 (Accounting)',
      stepTimeLabel: 'Elapsed Time:',
      stepSlaPrefix: 'SLA Threshold:',
      steps: [
        {
          step: 1,
          title: 'Create B2B Sales Order',
          dept: 'Sales',
          timeSpent: '25 mins',
          slaLimit: '2 hrs'
        },
        {
          step: 2,
          title: 'Approve Price & Discount',
          dept: 'Sales Manager',
          timeSpent: '1.2 hrs',
          slaLimit: '4 hrs'
        },
        {
          step: 3,
          title: 'Credit & Limit Appraisal',
          dept: 'Receivables Accounting',
          timeSpent: '18.5 hrs',
          slaLimit: '5 hrs',
          details: '7 orders (valued at 450M VND) backlogged as Lead Credit Auditor is on unexpected sick leave.'
        },
        {
          step: 4,
          title: 'Warehouse Dispatch & Picking',
          dept: 'Warehouse',
          timeSpent: 'Waiting for Step 3',
          slaLimit: '3 hrs'
        },
        {
          step: 5,
          title: 'Handover Shipping & Proof of Delivery',
          dept: 'Fleet / Logistics',
          timeSpent: 'Waiting for Dispatch',
          slaLimit: '24 hrs'
        }
      ],
      suggestion: {
        title: 'Automated Recommendation from AI Workflow:',
        description: 'Temporarily activate secondary approval authority for Deputy Accounting Manager (Ms. Mai Lan) for orders under 50,000,000 VND to immediately unblock 5 of 7 stalled orders.',
        subApproverName: 'Deputy Accounting Manager (Ms. Mai Lan)',
        btnApprove: 'Approve Secondary Delegation',
        approvedStatus: 'Delegation Approved: Clearing 5 backlogged orders'
      },
      checkpointNotice: 'Safety Gate: AI only detects bottlenecks and proposes recommendations. Delegation authorization must strictly be approved by Department Head.'
    },
    rag: {
      badgeCategory: 'Enterprise Knowledge Retrieval (Enterprise RAG)',
      subnote: 'Simulated semantic retrieval grounded in official documentation',
      badgeIllustrative: '[Demonstration Scenario]',
      title: 'Query → Source Citation → Synthesized Answer (With Exception Handling)',
      scenarios: {
        standard: '1. Grounded Source [Sample]',
        missing: '2. Missing Source [Sample]',
        rbac: '3. RBAC Block [Sample]'
      },
      standard: {
        query: 'Sample query: "How many days of marriage leave am I entitled to, and does the company provide a wedding gift?"',
        sourceTitle: 'Retrieved excerpt from Vector DB [Simulation]:',
        sourceRef: 'HR-Policy-2026.pdf#Page18',
        sourceQuote: '“...Pursuant to Article 12, Clause 3 of VMC Labor Regulations: Employees with official contracts are entitled to 03 paid working days of leave upon marriage. The Trade Union and Company grant a wedding gift valued at 2,000,000 VND. Prerequisite: Submit marriage certificate copy to HR Department at least 05 working days in advance...”',
        answerTitle: 'Synthesized response based on scenario [Grounded citation sample]:',
        item1Label: '1. Leave Duration:',
        item1Value: 'You are entitled to 03 paid working days of leave.',
        item2Label: '2. Wedding Gift:',
        item2Value: 'Company and Trade Union provide a financial gift of 2,000,000 VND.',
        item3Label: '3. Procedure:',
        item3Value: 'Submit a copy of your Marriage Registration Certificate to HR at least 5 working days in advance.'
      },
      missing: {
        query: 'Query: "Does the company offer a 0% interest home purchase loan policy for employees?"',
        title: 'Safety Guardrail: No matching source documents located',
        desc: 'The system reviewed all 42 active policy manuals, collective bargaining agreements, and internal directives, but found no provisions establishing a home purchase loan policy.',
        actionLabel: 'AI Action:',
        actionDesc: 'Refuses speculative generation to prevent misinformation. Recommends contacting the HR Director (Ms. Thanh Ha - Ext 104) directly to discuss special assistance inquiries.'
      },
      rbac: {
        query: 'Query: "Show me the detailed salary roster and 2026 Tet bonus levels for the Executive Board?"',
        title: 'Access Denied: Permission Boundary Violation (RBAC Guardrail)',
        desc: 'Current user session is assigned to the [Sales Specialist] role. Executive compensation data is restricted to [Strictly Confidential - Board of Directors Level].',
        logLabel: 'Security Audit Log:',
        logDesc: 'Query request was automatically blocked and recorded in the information security audit trail.'
      },
      checkpointNotice: 'Grounded RAG Principle: Generates responses only when evidentiary source documents exist. Transparently signals missing data and halts unauthorized queries.'
    }
  },
  copilots: {
    ceo: {
      name: 'AI CEO Copilot',
      roleTitle: 'Executive Operations & Business Health Synthesizer',
      shortTagline: 'Automated morning brief synthesizing KPIs, detecting cross-department anomalies, and preparing executive decision briefings.',
      targetAudience: 'Chief Executive Officer (CEO), Chairman of the Board, Chief Operating Officer (COO), Executive Secretariat & Advisory Staff',
      heroSample: {
        type: 'Morning Executive Brief',
        title: 'Morning Executive Brief — Sep 12, 2026',
        timestamp: '07:30 AM (Automated synthesis across 4 operational modules)',
        summary: 'Past 7-day revenue reached 92% of target; however, short-term cash flow deficit is projected for Week 3 due to 2 construction contracts pending sign-off.',
        dataPoints: [
          { label: 'Revenue MTD', value: '3.82 / 4.15 B VND', status: 'normal' },
          { label: 'Cash Flow Projection D+21', value: '- 420 M VND', status: 'warning' },
          { label: 'Weekly Task SLA Compliance', value: '94.2%', status: 'success' },
          { label: 'Anomalies Awaiting Decision', value: '2 Decision Gates', status: 'alert' }
        ],
        sampleSnippet: '• Anomaly 1: Contract XL-088 (Nam An Urban Project) delayed Milestone 2 acceptance by 3 days, deferring 650M VND cash inflow.\n• Anomaly 2: Meta advertising spend rose 18% this week, but qualified lead conversion rate dropped 6% week-over-week.\n• Proposed Action: Convene a 15-minute briefing with Project Director & Chief Accountant at 09:30 AM.',
        actionRequired: 'Executive confirms: "Authorize 09:30 AM Briefing Notice" or "Dismiss".'
      },
      beforeAfter: [
        {
          task: 'Company-Wide Executive Reporting Synthesis',
          before: {
            process: 'Assistant calls and follows up with 5 department heads for scattered slides and Excel sheets; takes 4-6 hours manual consolidation late Friday.',
            timeSpent: '6 - 8 hours/week',
            painPoint: 'Data discrepancies between Accounting and Sales; leadership receives delayed reports.'
          },
          after: {
            process: 'AI reads connected CRM, ERP, and HRM data to generate an automated Morning Brief at 07:30 AM daily with cross-reconciliation.',
            timeSpent: '5 - 10 minutes reading/day',
            humanRole: 'Leadership dedicates full time to root-cause analysis and strategic directive formulation.'
          }
        },
        {
          task: 'Cash Flow & Milestone Risk Early Detection',
          before: {
            process: 'Deficits only discovered when Accounting reports insufficient funds for payroll or vendors on the 25th of the month.',
            timeSpent: 'Passive monthly cycle',
            painPoint: 'No reaction runway; forced emergency credit drawdown or debt extension requests.'
          },
          after: {
            process: 'AI monitors acceptance milestones, accounts receivable, and recurring expenses, alerting 21-30 days ahead of projected budget variance.',
            timeSpent: 'Real-time alert engine',
            humanRole: 'Leadership reviews cash-smoothing options or instructs expedited milestone acceptance.'
          }
        },
        {
          task: 'Weekly Executive Briefing Preparation',
          before: {
            process: 'Meetings extend 3 hours debating data veracity; department heads spend meeting time rationalizing discrepancies.',
            timeSpent: '3 - 4 hours meeting/week',
            painPoint: 'No structured action commitment summary post-meeting; tasks drift without SLA accountability.'
          },
          after: {
            process: 'AI synthesizes top 3 critical bottlenecks, impending milestone commitments, and proposed action delegations.',
            timeSpent: '45 - 60 min focused session',
            humanRole: 'Leadership makes decisive rulings; AI logs action items into the SLA tracking matrix.'
          }
        }
      ],
      demoSpec: {
        title: 'Executive Scenario: Morning Brief Report & Anomaly Warning',
        sourceDescription: 'Data ingested from CRM (orders, lead pipeline), Financial Module (cash ledger, receivables), and Project/SOP Module (task velocity).',
        dataSources: [
          { name: 'Core CRM Database', type: 'Orders, contracts, lead pipeline status', syncMode: 'Real-time Webhook' },
          { name: 'Accounting & Banking Module', type: 'Balance statements, accounts receivable ledger', syncMode: 'Hourly Periodic Sync' },
          { name: 'Project & SOP Task Module', type: 'Milestone completions, task overdue ratios', syncMode: 'Real-time Query' }
        ],
        disclaimer: 'Simulated operational scenario on synthetic data for an 80-person enterprise. AI does not make autonomous executive rulings.'
      },
      governance: {
        allowedData: [
          'Departmental consolidated revenue and progress summaries',
          'Consolidated cash flow balances and projected disbursement schedules',
          'Task completion rates and group-level SLA metrics',
          'Aggregate customer satisfaction (CSAT) and complaint trends'
        ],
        prohibitedData: [
          'Individual employee compensation and personal bonus breakdowns (unless explicitly provisioned)',
          'Bank account credentials, payment tokens, or electronic transaction credentials',
          'Personal medical records or confidential personnel files',
          'Sealed bidding dossiers outside designated executive scope'
        ],
        rbacRules: [
          'Only authenticated accounts in the Executive Leadership group (CEO, Board Chairman) and designated executive assistants can access the Morning Brief.',
          'All drill-down inquiries across department data strictly adhere to organizational hierarchy boundaries.',
          'AI rejects any unauthorized data-write commands into core accounting systems.'
        ],
        auditLogMechanisms: [
          'Complete audit trail of every Morning Brief generated (timestamp, source data snapshots, model inference parameters).',
          'Traceable query log recording user queries with IP addresses and session IDs.',
          'Immutable logging of all executive approval, dismissal, or modification actions.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Cross-reconcile CRM and Accounting records', boundary: 'Read-only data access', systemOutput: 'Variance reconciliation table' },
          { task: 'Compile daily 07:30 AM Morning Brief digest', boundary: 'Content synthesis only', systemOutput: 'Dashboard card brief digest' },
          { task: 'Detect project milestone delays exceeding 48 hours', boundary: 'Rule-based alert thresholds', systemOutput: 'Red alert flag in executive digest' },
          { task: 'Draft executive briefing agenda and convening notice', boundary: 'Draft generation only', systemOutput: 'Ready-to-review notice template' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Dispatch company-wide urgent briefing notice', reason: 'Prevent operational disruption or unwarranted alarm', approverRole: 'Chief Executive Officer (CEO)', actionIfRejected: 'Cancel broadcast; keep to focused private brief' },
          { checkpoint: 'Reallocate departmental budget ceiling', reason: 'Directly impacts capital commitments', approverRole: 'Board of Directors / Executive Board', actionIfRejected: 'Maintain existing budget ceilings' },
          { checkpoint: 'Revise quarterly OKR/KPI milestone targets', reason: 'Alters compensation benchmarks and corporate strategy', approverRole: 'Executive Operations Committee', actionIfRejected: 'Retain current evaluation metrics' }
        ]
      },
      metrics: [
        { name: 'Weekly Executive Reporting Prep Time', formula: 'Total assistant/department-head hours spent compiling weekly slides & metrics', dataSource: 'Time-tracking survey & work log', frequency: 'Weekly', targetBenchmark: '50% - 70% reduction in manual synthesis time' },
        { name: 'Cash Flow Anomaly Lead Time', formula: 'Days elapsed between initial project milestone slippage and leadership alert notification', dataSource: 'Risk detection logs vs Occurrence ledger', frequency: 'Per transaction cycle', targetBenchmark: '21 - 30 days advance warning window' },
        { name: 'Executive Meetings Concluding On Agenda', formula: '(Meetings completed within 60 minutes / Total scheduled meetings) × 100%', dataSource: 'Calendar logs & Meeting minutes', frequency: 'Monthly', targetBenchmark: '≥ 85% of meetings resolve core agenda on time' }
      ],
      pilotPlan: {
        recommendedScope: 'Targeted at Executive Board (CEO + 2 Deputy Directors) and 3 core operational units (Sales, Accounting, Operations).',
        duration: 'Phased Pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Clean Data Ingestion & Integration', activities: ['Standardize current weekly reporting templates', 'Provision read-only API access for CRM and Accounting modules', 'Configure core executive health indicators (8 key metrics)'], deliverable: 'Secure read-only connection across 2 primary data sources' },
          { week: 'Phase 2', phase: 'Thresholds & Anomaly Rule Configuration', activities: ['Define budget variance tolerance thresholds (±10%)', 'Configure daily Morning Brief delivery schedule (07:30 AM)', 'Generate parallel AI briefs alongside traditional manual reports'], deliverable: 'First trial Morning Brief running in test environment' },
          { week: 'Phase 3', phase: 'Assisted Co-pilot Trial Operations', activities: ['Executive Assistant reviews AI-synthesized summaries for accuracy', 'Document variance discrepancies or missing context edge cases', 'Fine-tune extraction prompts and aggregation heuristics'], deliverable: 'Cross-reconciliation data fidelity reaches ≥ 95%' },
          { week: 'Phase 4', phase: 'Review & Operational Handover', activities: ['Convene evaluation session with Executive Board', 'Deliver operational guide and sign-off governance protocol', 'Decide on expanding connections to HR & Project modules'], deliverable: 'Pilot Phase Acceptance & Handover Sign-off' }
        ],
        goNoGoCriteria: [
          'Financial and sales metrics in Morning Brief achieve 100% reconciliation with verified accounting ledgers.',
          'Executive leadership reclaims at least 3 hours weekly from operational tracking overhead.',
          'Zero security incidents or unauthorized data access outside RBAC boundaries.'
        ]
      }
    },
    sales: {
      name: 'AI Sales Copilot',
      roleTitle: 'Sales & Lead Management Assistant',
      shortTagline: 'Scores leads based on behavioral telemetry, provides explicit scoring rationale, and automatically drafts emails and quotations for specialist approval.',
      targetAudience: 'Chief Sales Officer (CSO), Sales Team Leads, Advisory Specialists & Business Development Representatives (BDR/AE)',
      heroSample: {
        type: 'Lead Evaluation & Draft Proposal',
        title: 'Lead Evaluation: Thang Long Construction Engineering JSC',
        timestamp: '10:15 AM (Inbounded via ERP solution landing page)',
        summary: 'Potential Score: 92/100 (Hot Lead). Prospect evaluating solution for 45 users, estimated budget 200-300M VND.',
        dataPoints: [
          { label: 'Lead Score', value: '92 / 100', status: 'success' },
          { label: 'Website Behavior', value: '5 pricing page visits, 1 brochure downloaded', status: 'normal' },
          { label: 'Industry & Scale', value: 'Construction / 60 staff', status: 'normal' },
          { label: 'Next Action', value: 'Send draft quote & schedule confirmation call', status: 'alert' }
        ],
        sampleSnippet: '• Scoring rationale: Decision maker is Chief Executive Officer, submitted verified corporate phone and email, target Q4 deployment timeline.\n• Draft quotation generated: Standard 50-User Package + 2 Modules: Project Management & Construction Materials Inventory.\n• Draft email prepared: Directly addresses site material cost overrun issues prospect identified.',
        actionRequired: 'Sales specialist verifies "Review draft email & quotation" prior to dispatch.'
      },
      beforeAfter: [
        {
          task: 'Inbound Lead Triage & Initial Response',
          before: {
            process: 'Sales opens Excel/Google Sheets to receive leads, takes 2-4 hours to make the first call, unaware of specific features prospect researched.',
            timeSpent: '2 - 4 hours from registration',
            painPoint: 'Lead interest cools down, pickup rates decline, consultations wander without addressing core pain points.'
          },
          after: {
            process: 'AI analyzes click history and industry profile, scores lead readiness, and routes alert to assigned Sales rep within 60 seconds.',
            timeSpent: '< 5 minutes response time',
            humanRole: 'Sales possesses full context to conduct consultation focused directly on customer priorities.'
          }
        },
        {
          task: 'Preliminary Quote Drafting & Solution Proposal',
          before: {
            process: 'Sales opens Word/Excel template, copies company names, manually calculates user counts, prone to discount errors or missing modules.',
            timeSpent: '30 - 45 minutes per quotation',
            painPoint: 'Delayed quotation delivery to prospect; pricing discrepancies trigger internal friction.'
          },
          after: {
            process: 'AI populates standard format with verified price book rates and generates draft PDF with accompanying email.',
            timeSpent: '2 minutes review',
            humanRole: 'Sales verifies scope, unit quantities, and authorizes quote dispatch; AI never issues quotes autonomously.'
          }
        },
        {
          task: 'Post-Meeting Opportunity Follow-up',
          before: {
            process: 'Sales relies on memory or sticky notes, easily misses scheduled 3-5 day follow-up while client evaluates.',
            timeSpent: 'Inconsistent and irregular',
            painPoint: 'High deal drop-off rate due to lack of systematic nurturing.'
          },
          after: {
            process: 'AI recommends follow-up cadence aligned with deal progression and schedules tasks on rep dashboard.',
            timeSpent: 'Timely prompts at key milestones',
            humanRole: 'Specialist conducts personalized outreach calls or messages based on prepared talking points.'
          }
        }
      ],
      demoSpec: {
        title: 'Interactive Demo: Smart Lead Card & Draft Quotation / Email',
        sourceDescription: 'Synthesized data from intake forms, website engagement telemetry, and CRM standard price books.',
        dataSources: [
          { name: 'Website Lead Intake Webhook', type: 'Registration form, IP, dwell time', syncMode: 'Real-time' },
          { name: 'CRM Contact History', type: 'Call logs, prior interaction notes', syncMode: 'Real-time query' },
          { name: 'Price Book & Discount Policies', type: 'Executive-approved published price lists', syncMode: 'Updated per directive' }
        ],
        disclaimer: 'Quotations and emails are internal draft recommendations only. The system never autonomously dispatches proposals to clients without explicit sales sign-off.'
      },
      governance: {
        allowedData: [
          'Prospective customer profile data and submitted business contact details',
          'Website interaction records and downloaded product documentation',
          'Standard product catalog, published price books, and approved discount thresholds',
          'Meeting briefing notes and deal stages in sales pipeline'
        ],
        prohibitedData: [
          'Customer credit card information or personal credentials',
          'Deal pipelines belonging to other sales representatives (in partitioned territory setups)',
          'Internal cost of goods sold (COGS) restricted from representative tier',
          'Autonomous discount adjustments exceeding established corporate ceilings'
        ],
        rbacRules: [
          'Sales reps only access leads assigned to themselves or designated operational team.',
          'Sales Director holds visibility over full pipeline with authority to reallocate leads.',
          'Any pricing adjustment outside standard catalog requires approval escalation to CSO.'
        ],
        auditLogMechanisms: [
          'Logs lead intake timestamps, scoring algorithms, and criteria weightings.',
          'Preserves historical versions of all AI-generated email drafts and quotations.',
          'Records audit trail of who approved quote dispatch and any applied discount percentages.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Extract lead attributes from intake form', boundary: 'Read & populate CRM', systemOutput: 'Structured Lead Profile' },
          { task: 'Score lead readiness based on rule matrix', boundary: 'Calculated per scoring model', systemOutput: '0-100 score with 3 rationale factors' },
          { task: 'Draft preliminary price quotation', boundary: 'Drafts only on standard template', systemOutput: 'Draft PDF quotation and cover email' },
          { task: 'Schedule 3-day follow-up reminder task', boundary: 'Enters rep task queue', systemOutput: 'Dashboard reminder task' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Dispatch official price quote to client', reason: 'Legal and financial commitment on pricing and service scope', approverRole: 'Assigned Sales Representative', actionIfRejected: 'Revise user quantities or unit pricing' },
          { checkpoint: 'Apply above-threshold discount (>10%)', reason: 'Direct impact on corporate gross margins', approverRole: 'Chief Sales Officer (CSO)', actionIfRejected: 'Mandate sale at standard catalog pricing' },
          { checkpoint: 'Mark major deal as Closed/Lost', reason: 'Prevent premature loss of salvageable revenue opportunities', approverRole: 'Sales Team Lead', actionIfRejected: 'Reassign to another specialist for re-engagement' }
        ]
      },
      metrics: [
        { name: 'Speed to Lead (Initial Response Time)', formula: 'Elapsed time from form submission to first representative call/email', dataSource: 'CRM Timestamps', frequency: 'Daily', targetBenchmark: 'Reduced to < 15 minutes (vs. 2-4 hours manual baseline)' },
        { name: 'Lead Profile Completeness Rate', formula: '(Leads with complete qualification data / Total inbound leads) × 100%', dataSource: 'CRM Data Quality Reports', frequency: 'Weekly', targetBenchmark: '≥ 90% leads possessing structured requirements' },
        { name: 'Lead-to-Consultation Conversion Rate', formula: '(Confirmed consultations / Total hot-scored leads) × 100%', dataSource: 'Sales Pipeline Analytics', frequency: 'Monthly', targetBenchmark: 'Measurable improvement during controlled pilot' }
      ],
      pilotPlan: {
        recommendedScope: 'Controlled trial with 1 sales pod (3-5 representatives) focusing on 1 flagship solution.',
        duration: 'Phased pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Lead Scoring Matrix Formulation', activities: ['Define Ideal Customer Profile criteria (Industry, scale, budget)', 'Connect webhook from 1 priority landing page', 'Configure accounts for 3 pilot sales representatives'], deliverable: 'Scoring matrix signed off by Sales Director' },
          { week: 'Phase 2', phase: 'Triage & Draft Generation Trial', activities: ['Inbound leads scored by AI with draft emails prepared', 'Sales team reviews draft relevance and accuracy', 'Refine template wording to match company brand voice'], deliverable: 'Draft adoption rate by sales reps reaches ≥ 70%' },
          { week: 'Phase 3', phase: 'Response Time & Velocity Benchmarking', activities: ['Enable push notifications for high-scoring inbound leads', 'Track elapsed time to initial client outreach', 'Conduct daily 15-minute morning review with pilot pod'], deliverable: 'Average initial response time < 20 minutes' },
          { week: 'Phase 4', phase: 'Evaluation & Playbook Finalization', activities: ['Compare consultation booking rate against control group', 'Finalize standard operating procedure for full sales team', 'Prepare scaled rollout plan for entire sales division'], deliverable: 'Pilot evaluation report delivered to Executive Board' }
        ],
        goNoGoCriteria: [
          'Sales reps save at least 20 minutes per proposal preparation.',
          'Zero unauthorized quotes or mispriced proposals dispatched to clients.',
          'Participating sales team satisfaction rating reaches ≥ 4/5 stars.'
        ]
      }
    },
    marketing: {
      name: 'AI Marketing Copilot',
      roleTitle: 'Growth & Campaign Optimization Assistant',
      shortTagline: 'Compares multi-channel conversion efficiency, proposes optimal budget reallocations, and manages content publication review queues.',
      targetAudience: 'Chief Marketing Officer (CMO), Head of Marketing, Campaign Specialists (Media Buyers), Content Creators',
      heroSample: {
        type: 'Channel Efficiency & Content Approval Queue',
        title: 'Channel Performance Report & Content Publication Queue',
        timestamp: '08:00 AM (Data from Week 36/2026)',
        summary: 'Google Ads Search generating lowest CAC (185,000 VND / qualified lead); recommends reallocating 20M VND from display to search campaigns.',
        dataPoints: [
          { label: 'Google Search CAC', value: '185,000 VND', status: 'success' },
          { label: 'Meta Ads CAC', value: '310,000 VND', status: 'warning' },
          { label: 'Budget Reallocation Proposal', value: '+ 20M to Search', status: 'normal' },
          { label: 'Content in Queue', value: '3 posts awaiting sign-off', status: 'alert' }
        ],
        sampleSnippet: '• Channel comparison: Google Search lead-to-opportunity conversion at 28% (Meta at 14%).\n• Adjustment proposal: Scale down top-funnel Meta awareness spend; allocate surplus to high-intent "ERP management solutions" keywords.\n• Review queue: Blog article "5 Signs Your Enterprise Needs SOP Standardization" scanned and compliant with brand guidelines.',
        actionRequired: 'Head of Marketing clicks "Approve Publication" and "Authorize Weekly Budget Scenario".'
      },
      beforeAfter: [
        {
          task: 'Multi-Channel Customer Acquisition Cost (CAC) Analysis',
          before: {
            process: 'Specialist exports reports from Facebook Ads, Google Ads, TikTok Ads into Excel, manually matching with CRM lead records.',
            timeSpent: '4 - 6 hours/week',
            painPoint: 'Only tracks vanity leads; unable to discern which channel drives actual signed contracts.'
          },
          after: {
            process: 'AI correlates ad spend directly with recognized CRM revenue, calculating empirical CAC by acquisition channel.',
            timeSpent: 'Instant dashboard visibility',
            humanRole: 'Marketer focuses on customer journey analysis and creative messaging optimization.'
          }
        },
        {
          task: 'Editorial Compliance & Brand Consistency Review',
          before: {
            process: 'Marketing head reads every draft, corrects syntax, checks for absolute claims or off-brand positioning.',
            timeSpent: '2 - 3 hours/day',
            painPoint: 'Content risks inconsistent brand voice, exaggerated claims, or off-target positioning.'
          },
          after: {
            process: 'AI scans drafts against brand guidelines, flags sensitive phrases, and queues compliant drafts for one-click approval.',
            timeSpent: '10 minutes reviewing flagged items',
            humanRole: 'Marketing lead reviews highlighted flags and authorizes publication release.'
          }
        },
        {
          task: 'Lead Nurturing via Email & Direct Messaging',
          before: {
            process: 'Blasts generic emails to broad database with uniform copy regardless of industry or company scale.',
            timeSpent: 'High effort, low open rates',
            painPoint: 'High unsubscribe rates; prospects alienated by irrelevant messaging.'
          },
          after: {
            process: 'AI segments leads by industry and engagement telemetry, suggesting tailored nurture sequences per awareness stage.',
            timeSpent: 'Pre-configured sequence templates',
            humanRole: 'Marketing team signs off on messaging frameworks before activating automated flows.'
          }
        }
      ],
      demoSpec: {
        title: 'Interactive Demo: Channel Comparison, Budget Optimization & Content Queue',
        sourceDescription: 'Integrated data from advertising platform spend reports and empirical conversion metrics in corporate CRM.',
        dataSources: [
          { name: 'Ad Platforms (Google / Meta API)', type: 'Spend, impressions, clicks', syncMode: 'Daily sync' },
          { name: 'CRM Conversion Funnel', type: 'Qualified leads, opportunities, closed deals', syncMode: 'Continuous query' },
          { name: 'Brand Guidelines Database', type: 'Brand voice rules, prohibited claims', syncMode: 'Updated by Communications Board' }
        ],
        disclaimer: 'AI has no authority to alter ad campaign budgets autonomously or publish content to live channels. Every execution requires human authorization.'
      },
      governance: {
        allowedData: [
          'Traffic metrics, advertising spend, clicks, and form submissions across channels',
          'Aggregated sales funnel conversion rates (from lead to signed contract)',
          'Brand guidelines, approved messaging frameworks, and creative assets',
          'Draft blog posts, marketing emails, and video scripts in draft state'
        ],
        prohibitedData: [
          'Ad account passwords or corporate credit card billing details',
          'Sensitive personal identifiable information (PII) without explicit consent',
          'Confidential corporate financial data outside allocated marketing budget scope',
          'Autonomous launching of campaigns exceeding approved budget allocations'
        ],
        rbacRules: [
          'Content creators have permissions to author drafts and submit to review queue.',
          'Head of Marketing holds authority to approve content and propose budget shifts.',
          'Chief Marketing Officer (CMO) gives final sign-off on monthly macro budget.'
        ],
        auditLogMechanisms: [
          'Logs all AI budget reallocation proposals along with calculation rationales.',
          'Maintains full revision history of drafts and logs user identity approving publication.',
          'Audit trails reconcile advertising expenses against tax invoices.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Calculate channel-specific CAC per lead source', boundary: 'Cross-system reconciliation', systemOutput: 'Channel Efficiency Rankings' },
          { task: 'Scan drafts for brand guideline compliance', boundary: 'Keyword & rule engine', systemOutput: 'Flagged phrases needing revision' },
          { task: 'Draft contextual nurture email templates', boundary: 'Drafts generation only', systemOutput: 'Queued email draft templates' },
          { task: 'Synthesize weekly campaign performance brief', boundary: 'Scheduled Mondays 08:00 AM', systemOutput: 'Visual dashboard report' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Publish article or video to official channels', reason: 'Safeguard corporate reputation and brand positioning', approverRole: 'Head of Marketing', actionIfRejected: 'Returned to writer for revisions' },
          { checkpoint: 'Shift budget allocations between ad channels', reason: 'Direct impact on cash flow and strategic marketing plans', approverRole: 'Chief Marketing Officer (CMO)', actionIfRejected: 'Retain baseline budget allocation' },
          { checkpoint: 'Launch mass email or broadcast campaign', reason: 'Prevent spam penalties and policy non-compliance', approverRole: 'Digital Marketing Lead', actionIfRejected: 'Adjust recipient criteria and copy' }
        ]
      },
      metrics: [
        { name: 'Channel-Level CAC Attribution Accuracy', formula: 'Correlation between recorded ad spend and actual recognized contract revenue', dataSource: 'CRM & Accounting Reconciliation', frequency: 'Monthly', targetBenchmark: '100% advertising spend correctly attributed' }
,
        { name: 'Draft Content Brand Compliance Rate', formula: '(Content drafts free of prohibited phrasing / Total content drafts) × 100%', dataSource: 'Content Moderation Audit Logs', frequency: 'Weekly', targetBenchmark: '≥ 95% queued content compliant' },
        { name: 'Marketing Weekly Reporting Consolidation Time', formula: 'Total staff hours spent assembling multi-channel reports', dataSource: 'Staff Timesheet Surveys', frequency: 'Weekly', targetBenchmark: 'Reduced from 4-6 hours to 30 minutes' }
      ],
      pilotPlan: {
        recommendedScope: 'Deployment across Corporate Blog and 2 primary acquisition channels (Google Search & Meta Ads).',
        duration: 'Phased pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Brand Guidelines Ingestion & Data Integration', activities: ['Ingest Brand Guidelines and restricted terms into compliance engine', 'Connect reporting APIs for Google Ads and Meta Ads', 'Initialize content review and approval queue'], deliverable: 'Content compliance queue operational' }
,
          { week: 'Phase 2', phase: 'Draft Moderation Workflow Trial', activities: ['Content specialists process 10 sample articles through system', 'AI scans phrasing and tags risk levels', 'Marketing head reviews and evaluates tagging accuracy'], deliverable: 'One-click approval workflow standardized' },
          { week: 'Phase 3', phase: 'Full-Funnel CAC Calculation Trial', activities: ['Cross-reference leads from each campaign against CRM records', 'AI generates first reallocation recommendation scenario', 'Team convenes to evaluate feasibility of proposed shifts'], deliverable: 'Validated multi-channel efficiency analysis' },
          { week: 'Phase 4', phase: 'Evaluation & SOP Formalization', activities: ['Measure time saved across marketing operations', 'Issue standard operating procedure for AI-assisted workflows', 'Expand pilot scope to Zalo and Email Automation channels'], deliverable: 'Marketing Pilot sign-off report delivered to leadership' }
        ],
        goNoGoCriteria: [
          'Zero publications containing restricted or prohibited terms released.',
          'Ad spend analytics correlate with credit card settlement statements.',
          'Marketing team achieves at least 50% time savings on reporting.'
        ]
      }
    },
    'customer-service': {
      name: 'AI Customer Service Copilot (CSKH Copilot)',
      roleTitle: 'Inquiry Resolution & Post-Sales Support Assistant',
      shortTagline: 'Ingests tickets, categorizes urgency levels, suggests policy-sourced response drafts with SOP citations, and awaits specialist sign-off.',
      targetAudience: 'Chief Customer Officer (CXO), Customer Service Manager, Technical Support & Post-sales Account Specialists',
      heroSample: {
        type: 'Ticket Analysis & Sourced Response Draft',
        title: 'Ticket #8492: Delivery Timeline Complaint & Component Exchange',
        timestamp: '14:20 PM (Ingested via Customer Support Portal)',
        summary: 'Customer frustrated due to 2-day delivery delay; AI categorizes as High Priority (P2) and drafts response incorporating standard compensatory policy.',
        dataPoints: [
          { label: 'Classification', value: 'Late Delivery / Urgent P2', status: 'alert' },
          { label: 'Customer Sentiment', value: 'Frustrated, urgent response required', status: 'warning' },
          { label: 'Source Documentation Cited', value: 'SOP-CS-04 (Section 3.2: Delay Compensation Policy)', status: 'normal' },
          { label: 'Proposed Resolution', value: 'Complimentary shipping + 10% Voucher', status: 'success' }
        ],
        sampleSnippet: '• Cited Source: Per VMC Service Regulations (SOP-CS-04, Section 3.2 issued Jan 15, 2026), shipments delayed >24h due to logistics issues qualify for a 10% voucher on subsequent order.\n• Draft Response: Sincere apology formulated, objective root cause explained, and updated delivery window confirmed (16:30 this afternoon).\n• Status: Awaiting CS specialist verification of waybill before dispatching.',
        actionRequired: 'CS specialist inspects tracking number and clicks "Approve & Send Response" or "Edit Content".'
      },
      beforeAfter: [
        {
          task: 'Looking up warranty policies & issue handling protocols',
          before: {
            process: 'Junior reps navigate multiple policy documents or ask in chat groups; answers vary wildly.',
            timeSpent: '10 - 20 minutes/ticket',
            painPoint: 'Customers endure long wait times; inaccurate policy citations lead to prolonged disputes.'
          },
          after: {
            process: 'AI queries enterprise knowledge base and surfaces pertinent clause excerpts alongside original document references.',
            timeSpent: '< 30s lookup time',
            humanRole: 'Specialist validates context and applies policy to customer case.'
          }
        },
        {
          task: 'Drafting responses to common inquiries & escalations',
          before: {
            process: 'Specialists manually type each response or copy old snippets; phrasing deteriorates during peak stress hours.',
            timeSpent: '5 - 10 minutes/response',
            painPoint: 'Inconsistent tone of voice, occasional friction with demanding clients.'
          },
          after: {
            process: 'AI prepares comprehensive, polite, well-structured replies based on approved company communication standards.',
            timeSpent: '1 minute review & approval',
            humanRole: 'Specialist reviews client details, order number, and dispatches.'
          }
        },
        {
          task: 'Triage and complaint severity categorization',
          before: {
            process: 'Incoming tickets arrive in a unified inbox, handled first-in-first-out, leaving severe escalations overlooked.',
            timeSpent: 'Delays in critical complaints',
            painPoint: 'High-value accounts feel ignored because critical issues are not escalated to management promptly.'
          },
          after: {
            process: 'AI scans keywords and tone, tags P1/P2/P3 upon intake, and triggers automatic supervisor alerts for overdue SLA items.',
            timeSpent: 'Instant categorization',
            humanRole: 'Managers intervene directly on sensitive accounts before escalation.'
          }
        }
      ],
      demoSpec: {
        title: 'Interactive Demo: Complaint Ticket, Policy-Sourced Draft & Dispatch Sign-Off',
        sourceDescription: 'Fed from customer portal streams, standardized service SOP manuals, and historical CRM support logs.',
        dataSources: [
          { name: 'Customer Support Ticketing System', type: 'Inquiry messages, emails, ingestion timestamps', syncMode: 'Real-time Webhook' },
          { name: 'CS Knowledge Base', type: 'Warranty terms, returns policy, service price lists', syncMode: 'Version Authenticated' },
          { name: 'Customer Order History', type: 'Order ID, delivery dates, payment status', syncMode: 'CRM Linked' }
        ],
        disclaimer: 'AI suggests responses based on indexed company documentation. All official communications sent to clients require explicit human verification.'
      },
      governance: {
        allowedData: [
          'Inbound customer messages, support emails, and complaint notes',
          'Standardized customer service SOP manuals and published warranty guidelines',
          'Order transaction history and active service package entitlements',
          'Pre-approved standardized reply templates ratified by executive management'
        ],
        prohibitedData: [
          'Autonomous commitment of cash compensations exceeding authorized caps',
          'Internal corporate financial records, cost margins, or product margins',
          'Sensitive personal identifiable data of other customers',
          'Autonomous termination of contracts or unilateral service term alterations'
        ],
        rbacRules: [
          'Support agents can inspect assigned tickets and adjust draft responses.',
          'Support Team Leads can authorize discretionary compensations within set limits.',
          'Customer Experience Directors review and authorize legal-risk P1 complaints.'
        ],
        auditLogMechanisms: [
          'Log customer inquiries alongside exact regulatory SOP clauses cited by AI.',
          'Record specialist response turnaround times and modifications relative to AI draft.',
          'Track CSAT evaluation ratings submitted after resolution.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Ingest and assign ticket IDs across channels', boundary: 'System synchronization', systemOutput: 'New ticket queue assignment' },
          { task: 'Analyze urgency levels (P1, P2, P3)', boundary: 'Context & keyword based', systemOutput: 'Priority level tagging' },
          { task: 'Extract relevant policy guidelines & clauses', boundary: 'Knowledge base retrieval', systemOutput: 'Quoted excerpt with SOP page citation' },
          { task: 'Formulate preliminary response draft', boundary: 'UI draft preparation only', systemOutput: 'Pending response text in review console' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Dispatch response to client', reason: 'Ensures factual accuracy and human empathy', approverRole: 'Customer Service Specialist', actionIfRejected: 'Rewrite response manually per rep discretion' },
          { checkpoint: 'Grant compensation / fee waivers', reason: 'Direct impact on operating expenditure', approverRole: 'Customer Service Manager', actionIfRejected: 'Decline compensation with polite explanation' },
          { checkpoint: 'Close severe service complaints', reason: 'Confirms customer satisfaction achieved', approverRole: 'Support Team Lead', actionIfRejected: 'Continue follow-up investigation and outreach' }
        ]
      },
      metrics: [
        { name: 'First Response Time (FRT)', formula: 'Elapsed time from ticket creation to initial formal human response', dataSource: 'Customer Support Ticketing System', frequency: 'Daily', targetBenchmark: 'Pilot goal to reduce to < 5 mins (down from 25 mins)' },
        { name: 'Specialist AI Draft Acceptance Rate', formula: '(Responses dispatched using AI draft / Total responses sent) × 100%', dataSource: 'Specialist Action Audit Logs', frequency: 'Weekly', targetBenchmark: '≥ 80% suggested drafts accepted without major rewrite' },
        { name: 'Customer Satisfaction Score (CSAT)', formula: 'Average rating on a 5-star scale following ticket closure', dataSource: 'Automated Post-Ticket Feedback Survey', frequency: 'Monthly', targetBenchmark: 'Target benchmark maintained at ≥ 4.5 / 5.0' }
      ],
      pilotPlan: {
        recommendedScope: 'Initial trial for 1 support channel (Web Chat or Email Support) with 3 designated CS specialists.',
        duration: 'Phased Pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Knowledge Base & SOP Digitization', activities: ['Consolidate 15 most frequent SOP workflows and warranty policies', 'Audit document currency prior to ingestion into AI knowledge store', 'Configure P1, P2, P3 priority classification rules'], deliverable: 'Verified CS knowledge repository ready for testing' },
          { week: 'Phase 2', phase: 'Internal Draft Suggestion Trial', activities: ['Live tickets trigger internal-only AI suggested drafts', 'Specialists evaluate accuracy of policy citations and citations', 'Refine greeting templates, tone of voice, and brand phrasing'], deliverable: 'SOP citation precision benchmarked at ≥ 90%' },
          { week: 'Phase 3', phase: 'Enable One-Click Approval & Dispatch', activities: ['Specialists review and approve outbound messages directly in Copilot UI', 'Track average handle times per ticket', 'Monitor customer sentiment and speed feedback'], deliverable: 'Handle times reduced by at least 40%' },
          { week: 'Phase 4', phase: 'Evaluation & Cross-Channel Expansion', activities: ['Evaluate CSAT trends and specialist adoption rates', 'Incorporate edge cases and complex escalation paths into knowledge store', 'Plan expansion to full inbound hotline and social media channels'], deliverable: 'Executive Pilot evaluation report completed' }
        ],
        goNoGoCriteria: [
          '0% autonomous outbound messages sent without specialist sign-off.',
          'Over 85% specialist feedback rating drafts as helpful.',
          'Average handling duration per ticket reduced by at least 30%.'
        ]
      }
    },
    hr: {
      name: 'AI HR Copilot',
      roleTitle: 'People Operations & Performance Management Assistant',
      shortTagline: 'Automatically screens timesheets for anomaly entries, tracks new hire onboarding checklists, and highlights skill gaps across teams.',
      targetAudience: 'Chief Human Resources Officer (CHRO), HR & Admin Manager, Recruitment & C&B Specialists, Internal Training Coordinators',
      heroSample: {
        type: 'Timesheet Exceptions & Skill Gap Dashboard',
        title: 'Payroll Timesheet Exceptions & Departmental Skill Gaps',
        timestamp: '09:00 AM (Attendance data from Sept 01 - Sept 10, 2026)',
        summary: 'Detected 4 attendance anomaly entries (missed biometric scans, business trips pending documentation); New hire onboarding at 4/5 milestones.',
        dataPoints: [
          { label: 'Total Headcount Screened', value: '82 Employees', status: 'normal' },
          { label: 'Actionable Exceptions', value: '4 Entries', status: 'alert' },
          { label: 'New Onboarding Milestones', value: '4 / 5 Steps Complete', status: 'success' },
          { label: 'Identified Skill Gap', value: 'Negotiation Skills (Sales)', status: 'warning' }
        ],
        sampleSnippet: '• Exception 1: Nguyen Van An (Project Unit) missing check-out scan on Sept 05; AI recommends automated ping to file missed clock-in explanation.\n• Exception 2: Tran Thi Bich (Accounting) logged 2 late check-ins without leave request.\n• New Hire Onboarding: Le Hoang Nam (Software Engineer) completed contract, equipment pickup, and culture training; 30-day probation review milestone remaining.',
        actionRequired: 'C&B specialist clicks "Send Documentation Reminders" to 4 affected staff.'
      },
      beforeAfter: [
        {
          task: 'Month-end timesheet and leave slip reconciliation',
          before: {
            process: 'C&B specialist spends 3 days opening raw biometric logs, line-by-line checking missed punches, and emailing for paper slips.',
            timeSpent: '16 - 24 hours/payroll cycle',
            painPoint: 'Prone to calculation errors, payroll delays, and employee frustration over incorrect deductions.'
          },
          after: {
            process: 'AI scans biometric logs daily, flags anomaly lines automatically, and dispatches self-service digital submission prompts.',
            timeSpent: '1 - 2 hours total review',
            humanRole: 'Specialist only reviews exceptional explanations and locks the final approved ledger.'
          }
        },
        {
          task: 'New employee onboarding management (Onboarding)',
          before: {
            process: 'Scattered materials sent over chat/email; mentors often miss critical 30-day and 60-day probation review check-ins.',
            timeSpent: 'Dependent on personal memory',
            painPoint: 'New hires feel disoriented and unsupported, leading to higher early turnover during probation.'
          },
          after: {
            process: 'AI initiates a standardized 5-step checklist, triggers scheduled resources, and prompts line managers for milestone evaluations.',
            timeSpent: 'Automated schedule tracking',
            humanRole: 'Line manager focuses on coaching, mentorship, and qualitative cultural integration.'
          }
        },
        {
          task: 'Identifying organizational skill gaps',
          before: {
            process: 'Skill gaps are only uncovered when critical project failures happen or during subjective annual reviews.',
            timeSpent: 'Evaluated once a year',
            painPoint: 'Training initiatives miss real business needs, resulting in spent budget without productivity gains.'
          },
          after: {
            process: 'AI correlates KPI achievements against standardized role frameworks, highlighting specific competency gaps per department.',
            timeSpent: 'Monitored quarterly',
            humanRole: 'L&D leads design targeted, high-impact curriculum directly addressing team needs.'
          }
        }
      ],
      demoSpec: {
        title: 'Interactive Demo: Timesheet Exception Table, Onboarding Checklist & Skill Gap Matrix',
        sourceDescription: 'Connected to biometric timekeeping terminals, e-leave management systems, and internal competency matrices.',
        dataSources: [
          { name: 'Timekeeping Hardware & Software', type: 'Clock-in, clock-out, tardiness logs', syncMode: 'Daily Batch Sync' },
          { name: 'E-Leave & Field Work Portal', type: 'Approved leave, pending requests', syncMode: 'Real-time Query' },
          { name: 'Competency Framework (Skill Matrix)', type: 'Role benchmarks, evaluation scores', syncMode: 'Quarterly Refresh' }
        ],
        disclaimer: 'AI does not autonomously dock pay or adjust employee compensation. Exception tables serve solely as administrative alerts for timely verification.'
      },
      governance: {
        allowedData: [
          'Clock-in/out timestamps and approved absence/leave documentation records',
          'New hire onboarding progress logs and onboarding quiz completion data',
          'Job descriptions (JD) and standardized role competency benchmark rubrics',
          'Aggregated departmental performance and KPI completion summaries'
        ],
        prohibitedData: [
          'Individual salary figures, personal banking numbers, or tax identification codes',
          'Confidential medical history, clinical records, or private family backgrounds',
          'Private peer-to-peer correspondence or interpersonal chat records',
          'Autonomous execution of termination, disciplinary, or demotion decisions'
        ],
        rbacRules: [
          'Employees can only inspect their own attendance logs and personal onboarding checklist.',
          'Department Heads view aggregated team attendance summaries for their own units.',
          'Only authorized C&B specialists and HR Director access company-wide reconciliation ledgers.'
        ],
        auditLogMechanisms: [
          'Log all manual edits to attendance records (editor ID, justification, timestamp).',
          'Record log history of documentation reminder alerts dispatched to staff.',
          'Maintain historical evaluation scores and reviewer sign-offs for probation closures.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Cross-reference biometric timestamps against assigned shift rules', boundary: 'Per shift schedule', systemOutput: 'Anomaly exception item list' },
          { task: 'Dispatch notification prompts for missing explanation forms', boundary: 'Internal notifications only', systemOutput: 'In-app / portal alerts to employees' },
          { task: 'Trigger 5-step onboarding journey upon new employee creation', boundary: 'On profile onboarding', systemOutput: 'Active 5-step checklist for new hire' },
          { task: 'Calculate KPI scores against competency benchmarks', boundary: 'Scheduled calculation', systemOutput: 'Departmental skill gap visual radar' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Finalize payroll attendance figures at month-end', reason: 'Directly impacts employee take-home remuneration', approverRole: 'HR Director & Chief Accountant', actionIfRejected: 'Instruct line-by-line audit on disputed items' },
          { checkpoint: 'Approve official completion of probation period', reason: 'Formal legal commitment for indefinite labor contract', approverRole: 'General Director / HR Director', actionIfRejected: 'Extend probation period or terminate agreement' },
          { checkpoint: 'Authorize budget-bearing corporate training programs', reason: 'Allocates company training expenditure', approverRole: 'Board of Management', actionIfRejected: 'Adjust scope or pivot to internal knowledge sharing' }
        ]
      },
      metrics: [
        { name: 'Monthly Timesheet Closing Duration', formula: 'Total hours required by C&B team to finalize monthly attendance reconciliation', dataSource: 'HR Department Workflow Log', frequency: 'Monthly', targetBenchmark: 'Reduced from 3 working days to under 4 hours' },
        { name: 'On-Time Explanation Submission Rate', formula: '(Explanation slips submitted prior to 25th / Total exceptions flagged) × 100%', dataSource: 'E-Leave & Request Management System', frequency: 'Monthly', targetBenchmark: '≥ 95% of exceptions resolved before payroll lock' },
        { name: 'New Hire 100% Onboarding Checklist Completion Rate', formula: '(New hires completing all 5 steps / Total cohort) × 100%', dataSource: 'Onboarding Tracking System', frequency: 'Quarterly', targetBenchmark: 'Maintained at 100% completion rate' }
      ],
      pilotPlan: {
        recommendedScope: 'Apply pilot to corporate office headquarters (30-50 staff) to validate timesheet reconciliation and onboarding workflows.',
        duration: 'Phased Pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Biometric Integration & Shift Logic Alignment', activities: ['Configure shift policies and grace periods (15-min tolerance)', 'Sync past 7 days of biometric terminal punch data', 'Upload standardized corporate onboarding roadmap'], deliverable: 'Biometric terminals and shift logic verified' },
          { week: 'Phase 2', phase: 'Exception Detection & Alert Testing', activities: ['AI identifies missing time punch records from sample week', 'Dispatch test notification prompts to 5 employees with missed scans', 'Evaluate response turnaround time for submitting explanations'], deliverable: 'Automated notification workflow runs smoothly' },
          { week: 'Phase 3', phase: 'Trial Onboarding with 2 New Hires', activities: ['Activate onboarding profiles and automated milestone tracking', 'System delivers daily orientation materials per scheduled timeline', 'Prompt managers for 7-day initial check-in meeting'], deliverable: '100% milestone adherence on schedule' },
          { week: 'Phase 4', phase: 'First Full-Month Timesheet Closing', activities: ['C&B team uses AI reconciliation digest to lock payroll ledger', 'Benchmark reconciliation hours against historical baseline', 'Deliver pilot summary and efficiency report to HR Director'], deliverable: 'Attendance ledger finalized 2 days earlier than baseline' }
        ],
        goNoGoCriteria: [
          'Calculated workdays and hours match 100% with raw terminal logs.',
          'Zero employee disputes regarding erroneous deductions or miscounted leave.',
          'Staff report positive usability and clear instructions on automated prompts.'
        ]
      }
    },
    finance: {
      name: 'AI Finance Copilot',
      roleTitle: 'Accounting & Cashflow Control Assistant',
      shortTagline: 'Automates bank transaction matching against invoice/order codes, detects exception transactions, and forecasts cashflow with uncertainty confidence bands.',
      targetAudience: 'Chief Financial Officer (CFO), Chief Accountant, Accounts Receivable (AR) Specialist, Cash & Bank Accountant',
      heroSample: {
        type: 'Bank Reconciliation & Cashflow Forecast',
        title: 'Bank Transaction Reconciliation & 30-Day Cashflow Forecast',
        timestamp: '4:00 PM (Transaction data as of Sep 12, 2026)',
        summary: 'Successfully matched 18/19 daily bank transactions; detected 1 exception transaction with amount variance; 30-day cashflow forecast includes conservative confidence band.',
        dataPoints: [
          { label: 'Daily Transactions', value: '18 / 19 syntax matched', status: 'success' },
          { label: 'Exception Transactions', value: '1 item with 250,000 VND variance', status: 'alert' },
          { label: 'Current Available Balance', value: '1.42 Billion VND', status: 'normal' },
          { label: 'D+30 Cashflow Forecast', value: 'Positive 380 - 620 Million VND', status: 'normal' }
        ],
        sampleSnippet: '• Sample Matched Transaction: 45,000,000 VND transaction from Techcombank exactly matched order code HD-2026-091 from Binh Minh Co.; AI proposes draft receipt voucher.\n• Exception Requiring Review: 12,250,000 VND transaction from An Phat Co., order lists 12,500,000 VND (250,000 VND shortage likely from bank transfer fee deduction).\n• Cashflow Forecast: Evaluates base scenario (Projected in 1.8B, out 1.45B) and conservative scenario if 1 major receivable is delayed by 15 days.',
        actionRequired: 'Accountant clicks "Confirm Receipt Creation" for 18 matched items and "Manual Resolution" for the 250k variance.'
      },
      beforeAfter: [
        {
          task: 'Reconciling bank statements against sales orders',
          before: {
            process: 'Accountant opens banking portal to export Excel statements, reads wire transfer descriptions line by line, and searches CRM to manually mark "Paid".',
            timeSpent: '2 - 3 hours daily',
            painPoint: 'Abbreviated transfer descriptions lack order codes, wasting time calling Sales reps to identify customer payments.'
          },
          after: {
            process: 'AI parses wire transfer syntax, matches amounts and sender names against pending order registries, automatically matching 80-90% of transactions.',
            timeSpent: '10 - 15 minutes reviewing exceptions',
            humanRole: 'Accountant only verifies proposed pairings and resolves entries with misspelled or incomplete information.'
          }
        },
        {
          task: 'Detecting overdue receivables risk early',
          before: {
            process: 'Receivables reviewed only at month-end or when overdue aging has become severe, increasing bad debt exposure.',
            timeSpent: 'Reactive month-end process',
            painPoint: 'Working capital is tied up; aging debts accumulate without clear ownership tracking.'
          },
          after: {
            process: 'AI analyzes repayment history, triggers proactive alerts 7 days before invoices mature, and profiles partner credit risk.',
            timeSpent: 'Automated proactive alerts',
            humanRole: 'AR accountant coordinates with Sales to dispatch early reconciliation notices.'
          }
        },
        {
          task: 'Forecasting cashflow for supplier payment planning',
          before: {
            process: 'Complex manual Excel models assume 100% on-time collections, causing sudden cash shortages when customers delay payment.',
            timeSpent: 'Entire week spent modeling reports',
            painPoint: 'Lacks confidence intervals, causing leadership to commit funds under overly optimistic projections.'
          },
          after: {
            process: 'AI models cashflow across 2 scenarios (Base and Conservative), rendering confidence bands calibrated to historical customer payment behavior.',
            timeSpent: 'Automated daily updates',
            humanRole: 'CFO proactively manages supplier disbursement schedules with secure safety margins.'
          }
        }
      ],
      demoSpec: {
        title: 'Live Demo: Bank Transaction Matching, Exception Resolution & Cashflow Forecasting',
        sourceDescription: 'Data ingested from read-only corporate bank account statements, accounting software, and CRM orders.',
        dataSources: [
          { name: 'Bank Balance Fluctuation Feed', type: 'Amount, timestamp, transfer description', syncMode: 'Banking API / Periodic Statements' },
          { name: 'CRM Order & Invoice Registry', type: 'Order code, value, payment terms', syncMode: 'Real-time synchronization' },
          { name: 'Periodic Expense Allocation Schedule', type: 'Payroll, office rent, tax, vendor payables', syncMode: 'Approved budget schedule' }
        ],
        disclaimer: 'The AI system only has READ access to balance data and drafts DRAFT receipt/payment vouchers. The AI strictly has no authority to execute fund transfers from accounts or alter banking balances.'
      },
      governance: {
        allowedData: [
          'Balance movement records and transfer descriptions from corporate accounts',
          'Sales invoices, commercial contracts, and committed milestone schedules',
          'Budget estimates approved by the Board of Directors for departments',
          'Payment history and historical average settlement cycles of clients'
        ],
        prohibitedData: [
          'OTP codes, bank login credentials, or digital signature tokens',
          'Personal bank accounts of executives or staff outside company accounts',
          'Unauthorized payment signing or issuing payment orders',
          'Unauthorized modification of figures in statutory tax accounting ledgers'
        ],
        rbacRules: [
          'Accountants may only view and reconcile accounts within assigned business units.',
          'Chief Accountant must approve all draft receipt/disbursement vouchers prior to general ledger posting.',
          'Chief Financial Officer (CFO) is the sole authority to approve cashflow forecast scenarios submitted to the CEO.'
        ],
        auditLogMechanisms: [
          'Audit logging for every matched transaction (timestamp, transaction ID, syntax confidence).',
          'Records history of user confirmation or rejection of AI-proposed pairings.',
          'Audit logs tracking all modifications to 30-day cashflow forecast assumptions.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Parsing transfer descriptions to identify order codes', boundary: 'Intelligent fuzzy matching', systemOutput: 'Suggested invoice-transaction match pairings' },
          { task: 'Detecting amount variance discrepancies (exceptions)', boundary: 'Exact arithmetic comparison', systemOutput: 'Red-flag alert with exact variance amount' },
          { task: 'Drafting receipt voucher entries', boundary: 'Draft generation only', systemOutput: 'Receipt vouchers awaiting accountant approval' },
          { task: 'Plotting 30-day cashflow forecast with confidence bands', boundary: 'Statistical simulation', systemOutput: 'Visual scenario chart on dashboard' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Approving receipt/payment vouchers into official accounting ledgers', reason: 'Statutory accounting legal compliance', approverRole: 'Chief Accountant', actionIfRejected: 'Request staff accountant review source documentation' },
          { checkpoint: 'Resolving unallocated deposits or amount variances', reason: 'Prevent misallocated receivables and compliance risks', approverRole: 'Chief Accountant & Relevant Sales Rep', actionIfRejected: 'Hold in suspense account and verify with customer' },
          { checkpoint: 'Executing outgoing supplier payment transfers', reason: 'Safeguarding enterprise liquid assets', approverRole: 'Account Holder (CEO / CFO)', actionIfRejected: 'Cancel wire transfer order' }
        ]
      },
      metrics: [
        { name: 'Daily Bank Reconciliation Duration', formula: 'Minutes required by accountant to reconcile daily balance movements', dataSource: 'Accounting operational log', frequency: 'Daily', targetBenchmark: 'Reduced from 120 minutes to 15 minutes' },
        { name: 'Automated Accurate Transaction Matching Rate', formula: '(Correctly matched transactions without edits / Total transactions) × 100%', dataSource: 'System reconciliation report', frequency: 'Weekly', targetBenchmark: '≥ 85% accurately matched automatically' },
        { name: '14-Day Cashflow Forecast Variance vs. Actuals', formula: '|Actual cashflow - Base forecast cashflow| / Actual cashflow', dataSource: 'Actual receipts vs disbursements comparison', frequency: 'Monthly', targetBenchmark: 'Tolerance within confidence interval (≤ ± 8%)' }
      ],
      pilotPlan: {
        recommendedScope: 'Apply pilot to 1 primary operating bank account and order catalog of 1 branch.',
        duration: 'Phased Pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Standardize Syntax & Ingest Sample Statements', activities: ['Standardize wire transfer reference template for clients (Order Code - Name)', 'Ingest 100 historical transactions for AI parsing of common abbreviations', 'Assign RBAC permissions to 2 staff accountants'], deliverable: 'Tested syntax recognition rules' },
          { week: 'Phase 2', phase: 'Parallel Reconciliation Trial', activities: ['Daily statement ingest and AI-generated match suggestions', 'Staff accountant conducts independent cross-check and flags misidentifications', 'Fine-tune Vietnamese string parsing heuristics'], deliverable: 'Matching accuracy reaches ≥ 80%' },
          { week: 'Phase 3', phase: 'One-Click Draft Receipt Creation', activities: ['Accountants verify matched items and generate receipts with one click', 'Resolve 5 exception cases involving shortages or inaccurate codes', 'Deploy trial 30-day cashflow forecast model'], deliverable: 'Save 80% of manual voucher entry time' },
          { week: 'Phase 4', phase: 'Forecast Model Evaluation & Sign-off', activities: ['Compare prior week forecasted balance against actual account balances', 'Present cashflow forecast dashboard to the Chief Financial Officer', 'Formalize Copilot-assisted accounting standard operating procedure'], deliverable: 'Accounting Department Pilot Acceptance Sign-off' }
        ],
        goNoGoCriteria: [
          '100% of generated draft receipts exactly match bank statement transaction amounts.',
          'Zero instances of misattributing payments from one client to another.',
          'Chief Accountant confirms security compliance: AI does not access or alter primary bank accounts.'
        ]
      }
    },
    voice: {
      name: 'AI Voice Copilot',
      roleTitle: 'Controlled Automated Voice System',
      shortTagline: 'Scripted conversational tree for appointment reminders, rescheduling assistance, and policy-driven routing to designated staff on in-depth queries.',
      targetAudience: 'Chief Operating Officer (COO), Call Center Managers, Appointment Scheduling & Phone Customer Care Teams',
      heroSample: {
        type: 'Controlled Voice Tree & Human Transfer',
        title: 'Call Script: Periodic Vehicle Maintenance Appointment Reminder',
        timestamp: '11:00 AM (Call #V-7819 to Customer Mr. Le Tuan Anh)',
        summary: 'Customer answered, confirmed maintenance schedule but requested to move from 14:00 to 16:30; upon inquiring about brake/engine noises, AI immediately handed off call to Technical Advisor.',
        dataPoints: [
          { label: 'Call Status', value: 'Completed (2 min 15 sec)', status: 'success' },
          { label: 'Customer Intent', value: 'Reschedule + Technical Query', status: 'normal' },
          { label: 'Updated Outcome', value: 'Moved to 16:30 on Sep 12', status: 'normal' },
          { label: 'Staff Transfer', value: 'Transferred to Engineer Tuan', status: 'alert' }
        ],
        sampleSnippet: '• AI Dialogue: "Hello Mr. Tuan Anh from VMC Service Center. I am calling to confirm your vehicle maintenance appointment today at 14:00..."\n• Customer Response: "I am busy this afternoon, can we move to 4:30? Also, my brakes make a loud squeaking sound recently—how long does checking that take?"\n• Controlled Processing: AI successfully confirmed reschedule to 16:30; recognized brake noise query as a technical safety issue -> executed scripted handoff to designated staff per routing policy.',
        actionRequired: 'Technical Advisor accepts transferred call with full contextual summary pre-populated on screen.'
      },
      beforeAfter: [
        {
          task: 'Manual appointment confirmation calling',
          before: {
            process: 'Call center agents manually dial each customer from lists of hundreds daily, repeating identical reminder scripts.',
            timeSpent: '4 - 6 hrs/agent/day',
            painPoint: 'High labor spend on repetitive tasks, agent fatigue leading to strained vocal delivery by day-end, high missed-call rates.'
          },
          after: {
            process: 'AI performs scripted reminder calls with natural voice synthesis, accurately capturing acceptance or reschedule requests.',
            timeSpent: 'Automated per schedule',
            humanRole: 'Staff only intervenes when customers have special requests or require technical depth.'
          }
        },
        {
          task: 'Handling unexpected out-of-scope customer queries',
          before: {
            process: 'Traditional IVR keypads frustrate customers with rigid trees; unconstrained generative bots hallucinate inaccurate information.',
            timeSpent: 'Customer drop-off and frustration',
            painPoint: 'Damages brand reputation if AI misstates technical specifications or commercial pricing.'
          },
          after: {
            process: 'Strict safety gate: When an unscripted open question is detected, AI initiates a scripted handoff to qualified staff per routing policy.',
            timeSpent: 'Scripted routing handoff',
            humanRole: 'Domain specialist takes over live call and resolves customer concerns comprehensively.'
          }
        },
        {
          task: 'Call transcription & CRM record logging',
          before: {
            process: 'After each call, agents manually type notes into CRM, often rushing due to queues and leaving sparse documentation.',
            timeSpent: '2 - 3 mins logging/call',
            painPoint: 'Critical context lost; subsequent shifts lack visibility into customer discussion history.'
          },
          after: {
            process: 'System generates speech-to-text transcript drafts, summarizes key points, and updates appointment statuses in CRM records.',
            timeSpent: 'Instantaneous sync',
            humanRole: 'Entire team maintains transparent, synchronized visibility into interaction histories.'
          }
        }
      ],
      demoSpec: {
        title: 'Interactive Demo: Reminder Call Tree, Rescheduling & Staff Handoff',
        sourceDescription: 'Simulation of controlled conversational voice flow adhering to safety boundaries: predefined script branches, intent recognition, and human supervisory gates.',
        dataSources: [
          { name: 'CRM Appointment Schedule', type: 'Customer name, phone number, schedule, service type', syncMode: 'Read calendar schedules' },
          { name: 'Approved Voice Script Repository', type: 'Dialogue scripts, FAQs, response policies', syncMode: 'Fixed scripted rules' },
          { name: 'Staff Real-Time Availability', type: 'Internal directory, extension online/offline status', syncMode: 'Real-time SIP/WebRTC' }
        ],
        disclaimer: 'Voice AI is restricted to outbound scripted notifications and appointment reminders approved by executive leadership. Prohibited from debt collection, unsolicited marketing, or legal advisory.'
      },
      governance: {
        allowedData: [
          'Customer appointment metadata: scheduled time, location, service code, and contact name',
          'Scripted dialogues approved by Executive Leadership and Legal/Compliance',
          'Internal PBX directory and on-duty rosters of advisory specialists',
          'Audio call recordings and text transcripts for quality management and audit'
        ],
        prohibitedData: [
          'Never request passwords, OTP tokens, or payment card details over voice calls',
          'Never commit commercial pricing or arbitrary discounts outside pre-loaded scripts',
          'No calling outside statutory business hours (strictly 08:30 – 18:00)',
          'Immediately terminate or transfer calls if customer expresses distress or opt-out'
        ],
        rbacRules: [
          'Only Call Center Managers possess permissions to edit and activate call script branches.',
          'Duty agents receive transferred calls strictly matched to their specialty queue.',
          'System administrators maintain opt-out suppression lists (Blacklist) to prevent unwanted calls.'
        ],
        auditLogMechanisms: [
          'Store audio recordings and transcript logs according to enterprise retention policies.',
          'Log intent recognition accuracy and frequency of escalation handoffs to human staff.',
          'Maintain tamper-evident audit trails of script approval signatures and campaign dispatch windows.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Execute scripted reminder calls according to dispatch list', boundary: 'Within statutory calling hours', systemOutput: 'Automated outbound call' },
          { task: 'Speech recognition & intent classification (Confirm / Reschedule)', boundary: 'Natural language processing', systemOutput: 'Logged customer preference' },
          { task: 'Generate speech-to-text transcript drafts', boundary: 'Audio-to-text transcription', systemOutput: 'CRM call transcript record' },
          { task: 'Update revised appointment status in CRM', boundary: 'Per confirmed outcome', systemOutput: 'Calendar status updated' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Approval of new outbound voice scripts', reason: 'Ensures professional tone and regulatory/statutory compliance', approverRole: 'COO & Customer Care Manager', actionIfRejected: 'Requires script revision' },
          { checkpoint: 'Handling negative customer feedback or distress', reason: 'Protects brand reputation and client relationship', approverRole: 'Customer Care Lead', actionIfRejected: 'Escalates to senior specialist for dedicated callback' },
          { checkpoint: 'Approval of campaign contact target list', reason: 'Prevents duplicate contacts or calling suppressed numbers', approverRole: 'Sales / Customer Care Manager', actionIfRejected: 'Re-filters verified recipient list' }
        ]
      },
      metrics: [
        { name: 'Appointment confirmation success rate', formula: '(Confirmed or rescheduled calls / Total connected calls) × 100%', dataSource: 'AI Telephony Reporting', frequency: 'Daily', targetBenchmark: 'Pilot target benchmark: ≥ 80% successfully resolved calls' },
        { name: 'Staff handoff capability upon complex query', formula: 'Percentage of calls requiring escalation routed successfully to human extensions', dataSource: 'SIP Routing Engine', frequency: 'Per call event', targetBenchmark: 'Scripted routing handoff to qualified staff [Reference Target]' },
        { name: 'Speech-to-text transcription accuracy', formula: '(Accurately transcribed words in context / Total words) × 100%', dataSource: 'Random sample audit of 50 calls/week', frequency: 'Weekly', targetBenchmark: 'Benchmark: ≥ 92% context accuracy (Vietnamese)' }
      ],
      pilotPlan: {
        recommendedScope: 'Scoped to 1 dedicated campaign: Periodic maintenance reminders for 50-100 customers daily.',
        duration: 'Phased Pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Script engineering & voice synthesis testing', activities: ['Draft concise dialogue (< 45s) in professional tone', 'Select natural Vietnamese synthetic voice profiles (Northern/Southern)', 'Configure decision branches: Confirm, Reschedule, Busy / Call back later'], deliverable: 'Complete voice script tree signed off by management' },
          { week: 'Phase 2', phase: 'Internal simulation with employee test cohort', activities: ['Conduct 30 test calls to internal staff mobile numbers', 'Evaluate intent recognition under noisy environments and rapid speech', 'Verify live call transfer to human extension under routing policy'], deliverable: 'Internal intent recognition benchmark ≥ 90%' },
          { week: 'Phase 3', phase: 'Controlled pilot trial with 30 customers/day', activities: ['Enable reminder campaign for opted-in loyalty customer segment', 'Station standby advisory agents ready for transferred calls', 'Log customer sentiment and feedback regarding call experience'], deliverable: 'Zero unresolved customer complaints or negative feedback' },
          { week: 'Phase 4', phase: 'Analytics review & script optimization', activities: ['Analyze drop-off points across dialogue turns to streamline prompts', 'Measure labor hours saved for front-desk and call center agents', 'Handover standard operating procedures to Call Center team'], deliverable: 'Formal pilot evaluation and sign-off report' }
        ],
        goNoGoCriteria: [
          '100% of out-of-scope customer queries are routed to live duty specialists without dropped connections.',
          'Early disconnect rate within first 5 seconds remains below 15%.',
          'All reschedule events synchronize with CRM calendars without scheduling conflicts.'
        ]
      }
    },
    workflow: {
      slug: 'workflow',
      name: 'AI Workflow Copilot',
      roleTitle: 'SOP Process Automation Assistant',
      shortTagline: 'Monitors cross-departmental workflow flows, detects operational bottlenecks in real time, and suggests resource reallocation options.',
      targetAudience: 'Chief Operating Officer (COO), Quality Assurance/Control (QA/QC) Leads, Department Heads with cross-functional workflows',
      heroSample: {
        type: 'Process Bottleneck & Resource Reallocation',
        title: 'Process Monitoring: B2B Enterprise Order Fulfillment (SOP-OP-12)',
        timestamp: '15:30 PM (Scanned 42 active orders across pipeline)',
        summary: 'Critical bottleneck detected at "Receivables Credit Appraisal" with average waiting time of 18.5 hours (exceeding 5-hour SLA threshold by 250%).',
        dataPoints: [
          { label: 'Monitored Workflow', value: 'SOP-OP-12 (5 Cross-functional steps)', status: 'normal' },
          { label: 'Bottleneck Detected', value: 'Step 3: Credit Appraisal (Accounting)', status: 'alert' },
          { label: 'SLA Overrun Duration', value: '18.5h (5h SLA baseline)', status: 'warning' },
          { label: 'Stalled Orders', value: '7 orders valued at 450M VND', status: 'alert' }
        ],
        sampleSnippet: '• Root Cause Analysis: Lead credit auditor is on unexpected leave; secondary delegation permissions have not been activated for the deputy.\n• Domino Impact: Warehouse cannot release stock, fleet drivers remain idle, risk of missing delivery commitments to clients.\n• Automated Recommendation: Temporarily delegate credit sign-off for orders under 50M VND to Deputy Accounting Manager and dispatch alert notification.',
        actionRequired: 'Accounting Department Head clicks "Approve Secondary Delegation" to unblock processing of 7 pending orders.'
      },
      beforeAfter: [
        {
          task: 'Tracking cross-departmental docket progression',
          before: {
            process: 'Sales walks to Accounting to check docket approval status, Accounting calls Warehouse; dockets get bounced around with vague ownership.',
            timeSpent: 'Hours wasted chasing updates daily',
            painPoint: 'Files sit unattended on someone’s desk unnoticed; staff scrambles only when customers complain.'
          },
          after: {
            process: 'AI tracks each step on a visual flowchart, automatically triggering subsequent tasks upon completion of preceding stages.',
            timeSpent: 'Instantaneous handover',
            humanRole: 'Each staff member focuses strictly on executing tasks within their dedicated assigned queue.'
          }
        },
        {
          task: 'Detecting and resolving process bottlenecks',
          before: {
            process: 'Delays only surface when customers complain or monthly reports reveal stalled fulfillment.',
            timeSpent: 'Weeks of lag before detection',
            painPoint: 'No clarity on which department caused the holdup; teams exchange blame.'
          },
          after: {
            process: 'AI benchmarks actual step completion times against SLA baselines, flagging queued holdups and alerting process owners.',
            timeSpent: 'Real-time alerting',
            humanRole: 'Management intervenes to reallocate staffing as soon as latency patterns emerge.'
          }
        },
        {
          task: 'Enforcing SOP standard operating compliance',
          before: {
            process: 'Staff bypasses QA check gates or omits handover sign-offs to expedite delivery under pressure.',
            timeSpent: 'Difficult compliance enforcement',
            painPoint: 'Product defects reach end customers, causing reputational damage and warranty costs.'
          },
          after: {
            process: 'System enforces gating: subsequent steps remain locked until mandatory validation fields and attachments are verified.',
            timeSpent: 'Automated gate check',
            humanRole: 'Ensures 100% of dossiers comply with certified quality standards before dispatch.'
          }
        }
      ],
      demoSpec: {
        title: 'Interactive Demo: Process Flowchart, Bottleneck Alerts & Reallocation Suggestions',
        sourceDescription: 'Extracted from workflow engine transaction logs and empirical step processing times across departments.',
        dataSources: [
          { name: 'Enterprise SOP Definitions', type: 'Step stages, assigned roles, SLA thresholds', syncMode: 'Process configuration' },
          { name: 'Task Execution Logs', type: 'Start timestamps, completion timestamps, actor IDs', syncMode: 'Real-time telemetry' },
          { name: 'Staff Rosters & Leave Calendars', type: 'Available personnel, on-leave statuses', syncMode: 'HRM synchronization' }
        ],
        disclaimer: 'AI suggests coordination and resource reallocation plans. Authority delegation or assignee modifications must strictly be approved by Department Heads or Process Owners.'
      },
      governance: {
        allowedData: [
          'Standard Operating Procedure (SOP) schemas and task routing topologies',
          'Timestamps of task intake, processing, and completion across system nodes',
          'Task overdue status measured against predetermined SLA baselines',
          'Queue depth and backlog volumes distributed per individual and department'
        ],
        prohibitedData: [
          'Confidential document contents unrelated to operational routing progress',
          'Autonomously bypassing mandatory safety or financial audit gates',
          'Altering core workflow topology without ratified change orders',
          'Deleting or manipulating historical audit logs or user execution timestamps'
        ],
        rbacRules: [
          'Operators possess permissions to update only tasks directly assigned to them.',
          'Department Heads maintain authority to reassign work packages within their department.',
          'Chief Operating Officer (COO) alone approves modifications to corporate SOP structures.'
        ],
        auditLogMechanisms: [
          'Timestamp cross-departmental task handoffs with second-level precision.',
          'Log historical bottleneck alerts and corresponding AI reallocation suggestions.',
          'Maintain indelible records of authorizers for step overrides or exception sign-offs.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Automatically trigger subsequent step upon preceding completion', boundary: 'Per process topology', systemOutput: 'Task dispatched to next actor' },
          { task: 'Benchmark step completion times against SLA thresholds', boundary: 'Automated timer tracking', systemOutput: 'Warning flag when approaching SLA limit' },
          { task: 'Detect node congestion and queue accumulation', boundary: 'Queue analytics', systemOutput: 'Bottleneck highlight on visual dashboard' },
          { task: 'Suggest alternate reviewers during primary staff absence', boundary: 'Based on delegation matrix', systemOutput: 'Temporary delegation recommendation' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Approve exception to bypass quality check stage', reason: 'Quality risk and procedural safety integrity', approverRole: 'QA/QC Department Head', actionIfRejected: 'Mandates complete inspection execution' },
          { checkpoint: 'Authorize delegation of sign-off authority to alternate personnel', reason: 'Legal accountability and signing authority boundaries', approverRole: 'Relevant Department Head', actionIfRejected: 'Maintains original assignee' },
          { checkpoint: 'Modify established process SLA thresholds', reason: 'Direct impact on contractual customer commitments', approverRole: 'Chief Operating Officer (COO)', actionIfRejected: 'Reverts to existing baseline SLA' }
        ]
      },
      metrics: [
        { name: 'Process cycle time', formula: 'Total duration from docket initiation to final fulfillment step', dataSource: 'Workflow Engine Timestamps', frequency: 'Weekly', targetBenchmark: 'Cycle time reduction of 30% – 50%' },
        { name: 'SLA on-time completion rate', formula: '(Tasks completed on schedule / Total dispatched tasks) × 100%', dataSource: 'System SLA Reports', frequency: 'Weekly', targetBenchmark: 'Pilot target benchmark: ≥ 92% on-time completion' },
        { name: 'Bottleneck detection & remediation latency', formula: 'Elapsed duration from queue congestion onset to corrective dispatch', dataSource: 'Process Audit Logs', frequency: 'Per incident event', targetBenchmark: 'Alerted and triaged within < 2 hours' }
      ],
      pilotPlan: {
        recommendedScope: 'Scoped to 1 core cross-departmental process: B2B Order Approval & Fulfillment (Sales -> Accounting -> Warehouse).',
        duration: 'Phased Pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Digital modeling of existing SOP topology', activities: ['Map 5 actual cross-departmental handoff steps', 'Configure SLA targets per step (e.g., Price Approval: 2h, Credit Appraisal: 4h)', 'Assign primary owners and designated backup roles'], deliverable: 'Digital process flowchart ratified by Department Heads' },
          { week: 'Phase 2', phase: 'Automated dispatch & notification configuration', activities: ['Activate push alerts when incoming tasks are assigned', 'Configure amber warnings upon reaching 70% of SLA duration', 'Pilot docket routing across initial 20 test orders'], deliverable: 'Notification engine running reliably' },
          { week: 'Phase 3', phase: 'Bottleneck detection activation', activities: ['Monitor bottleneck heatmaps for queue accumulation', 'Test AI-guided reallocation recommendations during staff overload', 'Conduct cross-departmental reviews of simulated bottleneck scenarios'], deliverable: 'Successfully resolved 3 live bottleneck occurrences' },
          { week: 'Phase 4', phase: 'Cycle time reduction evaluation & expansion roadmap', activities: ['Compare order completion lead times against historical pre-Copilot baselines', 'Finalize user documentation and performance evaluation report', 'Draft rollout plan for Procurement and Recruiting workflows'], deliverable: 'Signed cross-departmental pilot sign-off report' }
        ],
        goNoGoCriteria: [
          'Average docket turnaround time reduced by at least 30%.',
          '0% lost or stalled dockets lacking assigned accountability.',
          'Participating departments confirm substantial reduction in manual follow-up calls.'
        ]
      }
    },
    rag: {
      name: 'AI Enterprise Search & Knowledge RAG',
      roleTitle: 'Grounded Enterprise Knowledge Retrieval System',
      shortTagline: 'Query internal enterprise knowledge based on authorized documentation, with source citations and transparent handling of missing sources or permission boundaries.',
      targetAudience: 'All Employees, Executive Assistants, Legal & Compliance Specialists, Training & Technical Documentation Officers',
      heroSample: {
        type: 'Semantic Search & Grounded Citation',
        title: 'Policy Inquiry: Marriage Leave Entitlement & Wedding Subsidy',
        timestamp: '16:45 PM (Inquiry by Sales Specialist)',
        summary: 'Successful policy retrieval: Extracted 2 relevant clauses from the internal HR Regulations with exact page number, effective date, and reference document link.',
        dataPoints: [
          { label: 'Query Prompt', value: 'How many days of marriage leave am I entitled to, and is there a subsidy?', status: 'normal' },
          { label: 'Citation Grounding', value: 'Based on source document [Illustrative]', status: 'success' },
          { label: 'Source Document', value: 'VMC Internal Regulations 2026 (Page 18, Article 12.3)', status: 'normal' },
          { label: 'Requester Clearance', value: 'Valid (Internal Public Document)', status: 'normal' }
        ],
        sampleSnippet: '• Grounded response: Pursuant to Article 12.3 of VMC Labor Regulations (issued Jan 02, 2026):\n1. Official employees upon marriage are entitled to 03 paid working days of leave.\n2. The Company grants a wedding gift of 2,000,000 VND from the Trade Union Welfare Fund.\n• Required procedure: Submit a copy of Marriage Certificate to HR at least 05 working days in advance.\n• Verification reference: [View source document: HR-Policy-2026.pdf#page=18].',
        actionRequired: 'User may click the link to directly inspect page 18 of the source document.'
      },
      beforeAfter: [
        {
          task: 'Searching internal policy guidelines and official forms',
          before: {
            process: 'Staff sift through dozens of shared folders on cloud drives, frequently downloading obsolete or superseded templates.',
            timeSpent: '15 - 30 mins per search',
            painPoint: 'Using obsolete contract forms or misapplying outdated policies requires starting work over from scratch.'
          },
          after: {
            process: 'Staff submit natural language queries; AI retrieves answers with direct links opening the latest valid forms.',
            timeSpent: '< 5 seconds',
            humanRole: 'Staff download standardized forms and proceed in compliance with current guidelines.'
          }
        },
        {
          task: 'Verifying factual grounding of AI responses (Mitigating Hallucination)',
          before: {
            process: 'Using general public AI models risks generating unverified statements regarding internal company policies.',
            timeSpent: 'Risk of fabricated information',
            painPoint: 'Misinterpreting legal or technical provisions, creating operational liabilities.'
          },
          after: {
            process: 'RAG technology generates answers based on text chunks extracted from verified repositories; withholds answers if source documents are absent.',
            timeSpent: 'Transparent citation',
            humanRole: 'Staff cross-check original source excerpts to confirm factual accuracy.'
          }
        },
        {
          task: 'Access control and privacy enforcement during document searches',
          before: {
            process: 'Loosely configured shared network drives risk accidental exposure of confidential payroll or tender files.',
            timeSpent: 'High data breach risk',
            painPoint: 'Violation of enterprise internal information security classifications.'
          },
          after: {
            process: 'AI verifies user Role-Based Access Control (RBAC) before retrieval; politely denies requests exceeding clearance level.',
            timeSpent: 'Immediate clearance gate',
            humanRole: 'Protects business proprietary information and confidential corporate records.'
          }
        }
      ],
      demoSpec: {
        title: 'Practical Demonstration: Query → Source Citation → Synthesized Answer (With Missing Sources & Access Boundaries)',
        sourceDescription: 'Ingested from enterprise repository of policies, employee handbooks, technical manuals, and standard contract templates.',
        dataSources: [
          { name: 'Internal Policy & Directive Archive', type: 'Approved PDF and Word documents', syncMode: 'Periodic ingestion upon publication' },
          { name: 'Product & Engineering Handbooks', type: 'Operating guides, technical specifications', syncMode: 'Tagged with access classifications' },
          { name: 'Role-Based Access Control (RBAC) Directory', type: 'Staff tier, department, clearance scope', syncMode: 'Enterprise SSO verification' }
        ],
        disclaimer: 'The RAG system adheres to a strict principle: Synthesizes responses only when evidentiary source documents exist. In the event of missing data or insufficient user permissions, the system explicitly indicates the boundary rather than conjecturing.'
      },
      governance: {
        allowedData: [
          'Approved labor regulations, employee benefit policies, and corporate culture handbooks',
          'Standard Operating Procedures (SOPs) pertaining to the requester’s operational department',
          'Product training materials, official published price lists, and technical documentation',
          'Standardized corporate administrative templates, proposal forms, and acceptance checklists'
        ],
        prohibitedData: [
          'Individual employee compensation records, bonus allocations, and performance evaluations',
          'Confidential financial files, unpublished internal tax audit materials',
          'Closed-session minutes of the Board of Directors and Supervisory Committee',
          'Product source code or technical trade secrets categorized as Strictly Confidential'
        ],
        rbacRules: [
          'Staff-level users are limited to querying documents categorized as Internal Public.',
          'Department Heads may additionally query operational documents within their respective departments.',
          'Executive Leadership holds authorization to query across the enterprise repository.'
        ],
        auditLogMechanisms: [
          'Logs all query requests, requester identity, timestamp, and client IP address.',
          'Maintains audit trails of specific source document excerpts retrieved for each response.',
          'Triggers administrator alerts upon repeated unauthorized attempts to query confidential documents.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Ingesting PDF/Word documents into semantic vector representations', boundary: 'Processes approved documents only', systemOutput: 'Vector database knowledge base' },
          { task: 'Retrieving document chunks with highest semantic relevance', boundary: 'Bound by user account permissions', systemOutput: '2-3 relevant source citation excerpts' },
          { task: 'Synthesizing response based on retrieved source passages', boundary: 'Strictly bounded to provided text', systemOutput: 'Answer accompanied by source links' },
          { task: 'Declining answer when relevant evidentiary source is missing', boundary: 'Safety guardrail rule', systemOutput: 'Notice: No matching source documents found' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Authorizing new document ingestion into AI knowledge base', reason: 'Ensures documents are authentic and officially ratified', approverRole: 'Legal / HR Department Head', actionIfRejected: 'Excludes document from ingestion batch' },
          { checkpoint: 'Assigning classification level to documents (Confidential / Internal)', reason: 'Determines authorized readership permissions', approverRole: 'Document Owner (Issuing Department Head)', actionIfRejected: 'Defaults to highest confidentiality classification' },
          { checkpoint: 'Archiving or updating superseded documentation', reason: 'Prevents AI from citing retired or outdated regulations', approverRole: 'Executive Secretariat / Knowledge Administrator', actionIfRejected: 'Flags document as under review' }
        ]
      },
      metrics: [
        { name: 'Internal Knowledge Retrieval Duration', formula: 'Minutes required for staff to locate answers to internal policy questions', dataSource: 'User Feedback Survey', frequency: 'Monthly', targetBenchmark: 'Reduced from 15-20 minutes to under 30 seconds' },
        { name: 'Grounded Citation Rate for Responses', formula: '(Responses containing verified source citations / Total responses) × 100%', dataSource: 'RAG Audit Logs', frequency: 'Weekly', targetBenchmark: 'Target benchmark maintained at ≥ 98%' },
        { name: 'RBAC Permission Boundary Compliance Rate', formula: '(Unauthorized disclosure incidents / Total queries) × 100%', dataSource: 'Information Security Reports', frequency: 'Continuous', targetBenchmark: 'Zero unauthorized disclosure incidents recorded' }
      ],
      pilotPlan: {
        recommendedScope: 'Initial pilot covering 20 core HR Regulation & Culture Handbook documents company-wide.',
        duration: 'Phased Pilot',
        pilotSteps: [
          { week: 'Phase 1', phase: 'Document Digitization & Curation', activities: ['Consolidate active policy documents currently in effect', 'Convert to standardized formats with clear page and section numbering', 'Configure user access permissions for pilot cohort'], deliverable: '20 curated and classification-tagged documents' },
          { week: 'Phase 2', phase: 'Benchmark Retrieval Testing', activities: ['Pilot team submits 50 test queries ranging from standard to complex', 'Verify that AI references exact articles and page citations', 'Evaluate handling of negative test cases absent from source files'], deliverable: 'Verified source citation rate reaches ≥ 95%' },
          { week: 'Phase 3', phase: 'Company-Wide User Pilot Launch', activities: ['Activate search interface on employee workbar', 'Monitor log queries to identify frequent information requests', 'Ingest supplementary guidance for topics missing from current knowledge base'], deliverable: 'Over 200 validated search interactions recorded' },
          { week: 'Phase 4', phase: 'Evaluation & Technical Documentation Expansion', activities: ['Measure user satisfaction regarding search speed and relevance', 'Expand knowledge base to include technical and sales collateral', 'Hand over document lifecycle maintenance workflow to HR Department'], deliverable: 'Signed RAG Pilot sign-off report' }
        ],
        goNoGoCriteria: [
          'Responses cite direct references to verified source documents.',
          'No unauthorized access to confidential managerial documents occurs.',
          'User satisfaction rate regarding speed and relevance exceeds 90%.'
        ]
      }
    }
  }
};

export default enAiCopilots;
