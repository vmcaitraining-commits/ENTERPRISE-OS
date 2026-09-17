import { TranslationDictionary } from '../../types';

const zhCNSolutions: TranslationDictionary = {
  overview: {
    badge: '专业化业务解决方案体系',
    title: '企业运营全面解决方案',
    description: '探索 {deptCount} 个按部门划分的专业解决方案套件与 {needCount} 个按业务转型需求定制的解决方案包，全流程运行于 AI Enterprise 统一数据基座之上。',
    filterLabel: '筛选解决方案：',
    filterAll: '全部（{totalCount} 个解决方案）',
    filterDept: '按部门分类（{deptCount} 个解决方案）',
    filterNeed: '按转型需求分类（{needCount} 个解决方案）',
    deptSectionTitle: '1. 部门业务专属解决方案',
    deptSectionDesc: '为各个职能部门提供专属业务可视化界面、标准化作业流程（SOP）与受控的人机协同 AI Copilot 助手。',
    deptCountBadge: '{count} 个部门',
    dataManagedLabel: '核心管理数据：',
    deptCardCta: '查看业务界面与标准流程 (SOP)',
    needSectionTitle: '2. 数字化转型需求解决方案',
    needSectionDesc: '彻底攻克迫切的企业技术挑战：业务流程自动化、企业知识管理、专业 AI 助手网络、智能语音分析中心。',
    needCountBadge: '{count} 个方案',
    needCardCta: '查看方案详情',
    crosslinkBadge: '单一数据资产 — 多重业务角色',
    crosslinkTitle: '探索 11 大核心子系统与 6 大职能部门如何实现无缝协同互通',
    crosslinkDesc: '所有业务部门统一访问单一事实来源（Single Source of Truth），实行多层级权限管控，全流程由人工审核严格把关。',
    crosslinkCta: '查看 AI Enterprise 架构总览'
  },

  departmentDetail: {
    backToAll: '全部解决方案',
    deptBreadcrumb: '职能部门',
    badge: '深度部门专属解决方案',
    titlePrefix: '解决方案：',
    ctaConsultation: '申请 {name} 解决方案专业咨询',
    ctaArchitecture: '查看 AI Enterprise 统一架构',
    salesScopeTitle: '业务范畴界定：',
    salesScopeText: '本页面聚焦于销售团队作业流程（Sales）、业绩指标分配与商机成交跟进。如需了解底层技术架构 CRS/CRM 及 Customer 360 客户主数据平台，请查阅企业级 CRS/CRM 技术方案。',
    salesScopeLink: '探索企业级 CRS / CRM 平台',
    problemsTitle: '流程标准化前常见的运营瓶颈',
    problemsSubtitle: '数据资产流失风险与跨部门决策效率低下',
    problemsConclusion: '结论：数据割裂形成信息孤岛（Data Silos），迫使员工重复手工录入并在月度报告中消耗大量沟通成本。',
    sopTitle: '标准化作业流程（SOP）',
    sopSubtitle: '线索接入、业务流转与跨部门交接的自动化闭环',
    sopStage: '阶段 0{index}',
    sopStatus: '状态：系统自动记录审计日志（Audit Log）',
    visualsTitle: '专业业务模拟交互看板',
    visualsSubtitle: '专为 {name} 打造的标准交互工作界面',
    copilotTitle: '专属于 {name} 的 AI Copilot 业务助理',
    copilotBadge: '人机协同把关机制（HUMAN-IN-THE-LOOP）',
    copilotReads: '1. AI 读取与鉴权数据范围：',
    copilotAnalyzes: '2. 深度业务分析与研判能力：',
    copilotProposes: '3. 智能行动建议与推演：',
    copilotExecutes: '4. 自动化执行边界（经授权）：',
    copilotApproval: '必须由人工最终审批的关键节点：',
    reportsTitle: '核心运营报表与管理指标（KPI/BI）',
    reportsSubtitle: '基于业务发生事实实时联动计算',
    handoffTitle: '跨部门业务数据流转与协作',
    handoffBus: '统一事件总线（Unified Event Bus）',
    handoffNote: '数据通过内部安全协议实时向下游部门流转，彻底消除信息滞后与手工对账断层。',
    ctaReady: '准备好标准化 {name} 运营流程了吗？',
    ctaDesc: 'VMC Group 专家团队随时为您评估当前数据就绪度，并为企业制定切实可行的分期落地实施路线图。',
    ctaConsultationBtn: '预约 {name} 方案专家咨询',
    ctaScheduleBtn: '预约现场调研与评估'
  },

  needDetail: {
    backToSolutions: '返回解决方案总览',
    badge: '数字化转型核心需求方案',
    productWalkthrough: '产品业务演示（Walkthrough）',
    coreValueLabel: '核心价值：',
    ctaConsultation: '申请 {name} 解决方案专业咨询',
    ctaArchitecture: '查看 AI ENTERPRISE 架构',
    crmDistinctionTitle: '业务范畴界定：',
    crmDistinctionText: '本页面介绍 CRS / CRM 平台级技术能力（Customer 360、商机漏斗、多渠道数据接入）。如需了解销售团队的具体作业流、业绩提成机制与跟单话术，请查看销售部解决方案（Sales）。',
    crmDistinctionLink: '查看销售部解决方案',
    aiAgentDistinctionTitle: '业务范畴界定：',
    aiAgentDistinctionText: '本页面阐述 9 大 AI Agent 协同网络架构、企业数据安全及人机把关机制。如需了解各专业岗位的具体 Copilot 功能与交互指令，请查阅 AI Copilot 助手专区。',
    aiAgentDistinctionLink: '探索 9 大 AI Copilot 助手',
    voiceDistinctionTitle: '方案差异说明：',
    voiceDistinctionText: '本页面阐述语音转文字（STT）与通话质检分析的技术方案。如需查看自动化电话日程提醒助手功能，请查阅专职 AI Voice 语音助手。',
    voiceDistinctionLink: '查看专职 AI Voice 助手',
    automationDistinctionTitle: '业务流程界定：',
    automationDistinctionText: '本页面阐述全企业流程自动化引擎（Workflow Engine）的核心原理与调度机制。如需查看各业务部门的具体标准化流程，请查看各部门解决方案。',
    automationDistinctionLink: '查看部门解决方案',
    interactiveDemoTitle: '交互界面与业务数据流模拟',
    interactiveDemoSubtitle: '基于统一管理平台深度体验端到端业务处理过程',
    problemsTitle: '面临的痛点挑战与运营瓶颈',
    problemsSubtitle: '制约业务规模化扩张并导致高昂运营成本的核心障碍',
    overviewTitle: '解决方案架构概览与运行机制',
    dataTypesTitle: '纳入数字化与权限管控的数据资产',
    workflowTitle: '标准化作业工作流（Workflow SOP）',
    workflowSubtitle: '从原始数据输入到业务成果交付的受控闭环',
    workflowInput: '数据输入端（Input）',
    workflowProcess: '标准化流转处理（Process）',
    workflowAi: 'AI 辅助与自动化（Automation）',
    workflowHuman: '人工把关控制（Human Control）',
    workflowOutput: '业务成果交付（Output）',
    featuresTitle: '核心功能矩阵与技术架构能力',
    featuresSubtitle: '构成完整企业级解决方案的专业模块组件',
    aiSectionTitle: 'AI 辅助角色与人机协同把关机制（Human-in-the-Loop）',
    aiSectionSubtitle: 'AI 负责分析推演并提出建议 — 人类保持最终控制与审批裁决权',
    aiReads: '1. AI 检索与读取的数据范围',
    aiAnalyzes: '2. 深度分析与模式识别能力',
    aiProposes: '3. 智能策略建议与初稿拟定',
    aiExecutes: '4. 自动化任务执行（需策略配置）',
    aiApprovalRequired: '强制人工把关与审批卡点（Human Oversight）：',
    connectionsTitle: '与 AI ENTERPRISE 核心架构的互联互通',
    connectionsSubtitle: '在 11 大核心子系统生态中实现跨模块无缝流转',
    reportsTitle: '核心管理报表与决策指标（KPI/BI）',
    reportsSubtitle: '基于业务事实数据实时度量企业运营健康度',
    securityTitle: '安全合规、数据保护与系统治理',
    securitySubtitle: '严格确立信息安全等级与细粒度访问权限机制',
    secRbac: '多层级 RBAC 角色权限体系',
    secAudit: '全程审计追踪日志（Audit Log）',
    secApproval: '多级业务分级审批流',
    secScope: '独立隔离的企业数据空间',
    faqTitle: '关于解决方案的常见问题解答',
    faqSubtitle: '解答有关技术架构、数据安全及实施落地的关键疑问',
    roadmapTitle: '标准 5 阶段实施落地路线图',
    roadmapSubtitle: '精益实施流程，最大程度减少对日常运营的干扰，确保按期上线',
    roadmapSteps: [
      {
        step: '阶段一',
        duration: '第 1 周',
        title: '现状调研与实施范围界定（Scope Definition）',
        desc: '深入分析业务实际瓶颈，梳理企业现行 SOP 操作规程，确立数字化转型的期望 KPI 指标体系。'
      },
      {
        step: '阶段二',
        duration: '第 2 周',
        title: '数据资产治理与数据清洗（Data Readiness）',
        desc: '规划主数据表结构，清洗标准化客户与单据档案，确立精细化的 RBAC 权限与数据隔离策略。'
      },
      {
        step: '阶段三',
        duration: '第 3 周',
        title: '业务流转配置与子系统集成（Integration）',
        desc: '搭建端到端自动化业务场景，设定 AI 安全护栏与合规边界，完成与相关职能子系统的 API 联通。'
      },
      {
        step: '阶段四',
        duration: '第 4 周',
        title: '人员实操培训与受控试运行（Pilot Run）',
        desc: '按岗位角色开展系统操作培训，组织多部门双轨试运行，并逐项验证各业务环节的人工审批卡点。'
      },
      {
        step: '阶段五',
        duration: '第 5 周及之后',
        title: '正式交付验收与持续优化迭代',
        desc: '完成上线验收并转入正式运营，建立 SLA 运行监控机制，定期评估数字化转型的效能收益。'
      }
    ],
    ctaTitle: '准备好与 {name} 一同启动数字化升级了吗？',
    ctaDesc: '联系 VMC Group 资深顾问，获取量身定制的产品演示、技术架构方案及企业业务场景评估报告。',
    ctaConsultationBtn: '申请 {name} 解决方案咨询',
    ctaTrialBtn: '预约深度架构研讨会'
  },

  departments: {
    sales: {
      name: '销售与商务（Sales）',
      tagline: '客户资产管理、商机漏斗跟踪与多渠道销售业绩达成',
      problems: [
        '客户数据与销售线索散落在个人聊天软件、个人 Excel 表格与纸质便签中。',
        '销售人员离职造成客户联络中断，企业面临私有客户资产流失的巨大风险。',
        '管理者无法穿透管控线索跟进进度、各环节转化率及销售通话/咨询服务质量。',
        '报价单制定、商务合同审批与回款对账流程冗长，依赖大量手工反复核对。'
      ],
      dataManaged: [
        '360° 客户全景档案',
        '销售线索池与来源渠道分布',
        '销售商机漏斗（Sales Pipeline）',
        '跟进记录、沟通纪要与通话日志',
        '报价单、订单与商务合同',
        '回款流水与应收账款进度'
      ],
      processes: [
        '线索自动接入：从官网、表单及数字化营销触点集中归集',
        '智能线索分发：按销售技能、负责区域与排班规则合规指派',
        '跟进过程监控：跟踪沟通轨迹、设置跟进提醒并辅助生成标准报价单',
        '商机签约成单：生成标准合同并快速触发财务对账与交付/客服接入'
      ],
      aiAssistance: {
        reads: '读取销售线索基础信息、沟通历史记录、历史交易状态及此前表达的业务诉求。',
        analyzes: '综合评估成单概率、客户意向等级及客户对报价方案的反馈倾向。',
        proposes: '推荐针对性的跟进话术、最佳回访时间窗口以及适配的产品套餐组合。',
        executes: '自动发送跟进确认邮件、流转更新商机阶段、生成日程待办提醒。',
        requiresApproval: '必须人工审批：超出常规权限的特殊商务折扣、正式合同审批以及大额线索放弃/废弃。'
      },
      reports: [
        '销售个人与团队业绩达成实时看板',
        '全流程销售漏斗各阶段转化率（Funnel Conversion）',
        '线索首次响应与平均跟进周期（Lead Response Time）',
        '月度与季度销售回款预测（Sales Forecasting）'
      ],
      interDepartmentConnection: '签约成单数据即时联通至财务部（生成开票与应收账款）及客服部（建立服务履约与维保档案）。'
    },
    marketing: {
      name: '市场营销（Marketing）',
      tagline: '全渠道营销活动运营、ROI 效果精确归因与优质潜客培育',
      problems: [
        '投入大量广告预算，却难以准确核算获客各渠道的真实获客成本（CAC/CPL）。',
        '销售团队反馈的线索质量数据无法闭环反哺给市场部，难以持续优化投放策略。',
        '营销传播物料与对外内容碎片化，难以保证企业品牌定位与专业形象的高度一致。',
        '潜客培育流程（Nurturing）依赖人工零散触达或处于完全缺位状态。'
      ],
      dataManaged: [
        '全渠道广告营销活动与传播矩阵',
        '各渠道营销投放预算与实际 ROI 产出',
        '企业统一内容资产库（白皮书、案例、物料）',
        '官网获客表单与全网用户行为轨迹',
        '邮件、社交媒体及各营销触点的互动数据'
      ],
      processes: [
        '活动统筹规划与各渠道预算分级分配',
        '快速搭建落地页（Landing Page）与自动数据采集表单',
        '线索多维标签化（Tagging）与自动化意向评分（Lead Scoring）',
        '端到端追踪线索转化为销售签约与最终营收的整体效果'
      ],
      aiAssistance: {
        reads: '读取官网访问行为数据、客户互动表单以及历史各渠道推广活动的效果数据。',
        analyzes: '识别高转化率获客渠道，测算每个合格商机（SQL）的实际获客成本。',
        proposes: '提供内容选题方向建议，优化推广落地页文案标题，推算潜客培育邮件的最佳发送时机。',
        executes: '自动为客户打上业务标签，将表单线索实时同步至 CRM 销售线索池。',
        requiresApproval: '必须人工审批：对外公开物料发布、市场广告投放预算增补与结算。'
      },
      reports: [
        '有效潜客获取成本（CPL）与客户获取成本（CAC）',
        '流量 → 线索 → 商机 → 签约成单的全链路转化漏斗',
        '各渠道投入产出比：官网直客、搜索投放、社交媒体、渠道合作伙伴',
        '内容互动率与潜客全生命周期参与度'
      ],
      interDepartmentConnection: '线索秒级同步进入销售部商机漏斗；实时接收销售最终成单金额，精确核算营销 ROI。'
    },
    'customer-service': {
      name: '客户服务与售后（CSKH）',
      tagline: '卓越售后服务体验、工单敏捷响应与全生命周期客户留存提升',
      problems: [
        '客户求助信息分散在多渠道聊天工具、服务热线与邮件中，极易发生遗漏。',
        '客服人员缺乏客户历史交易与合同全貌，沟通处理缓慢且易反复求证。',
        '客诉响应不及时，容易导致服务升级并对企业信誉造成负面影响。',
        '缺乏统一的客户满意度数据与合同续费/复购倾向的实时监测。'
      ],
      dataManaged: [
        '多渠道客户支持工单与客诉处理系统',
        '产品维保记录、巡检档案与技术支持日志',
        '客户满意度评分（CSAT 与 NPS）',
        '服务合同履约期与定期回访保养计划',
        '企业标准服务知识库（SOP 与 FAQ）'
      ],
      processes: [
        '全渠道统一接收服务诉求并自动创建服务工单',
        '根据 SLA 响应级别将工单精准分派给对应专业服务工程师',
        '全程追踪故障诊断进度并严格按规范向客户同步处理状态',
        '工单结单后自动触发满意度调查，推进维保续签与回访'
      ],
      aiAssistance: {
        reads: '读取工单问题详述、客户历史合同与过往交易记录、企业官方知识库（FAQ/SOP）。',
        analyzes: '研判问题紧急度与客户情绪倾向，归纳故障根因并匹配对应技术支持层级。',
        proposes: '基于已审核的企业知识库，智能草拟规范准确的技术答复与解决步骤。',
        executes: '向客户发送工单状态进度通知，针对临近 SLA 超时的工单触发告警预警。',
        requiresApproval: '必须人工审批：赔偿金方案审批、特殊延保授权、存在重大争议的工单结单。'
      },
      reports: [
        '首次响应时长（FRT）与平均故障解决时长（TTR）',
        'SLA 服务等级承诺达成率',
        '客户服务满意度综合评分（CSAT）',
        '维保合同续约率与核心客户忠诚度指数'
      ],
      interDepartmentConnection: '将售后发现的升级换购机会流转至销售团队；将典型产品质量问题反馈给管理层与研发技术部门。'
    },
    hr: {
      name: '人力资源与培训（HR）',
      tagline: '员工全生命周期管理、智能考勤排班、绩效考核与组织能力提升',
      problems: [
        '考勤核对、休假审批与人事审批依赖纸质单据或零散表单，费时且易出错。',
        '绩效考核主观性强，缺乏日常真实业务执行数据的客观支撑。',
        '员工培训材料与标准作业规范（SOP）散落各处，新员工融入周期漫长。',
        '缺乏组织人效全局视野，核心人才保留与梯队建设面临挑战。'
      ],
      dataManaged: [
        '员工数字化人事档案与劳动合同',
        '考勤打卡记录、年假台账、出差调休申请',
        '绩效考核指标体系（KPI / OKR）',
        '企业内部知识培训课程与考核记录',
        '招聘需求计划与候选人简历库'
      ],
      processes: [
        '招聘流程与新员工标准化入职导引（Onboarding）',
        '线上审批流转（请假、出差、加班补签）',
        '绩效考核指标自动与各部门实际业务成果挂钩',
        '组织企业内部业务培训并开展定期专业能力评定'
      ],
      aiAssistance: {
        reads: '读取考勤打卡数据、日常工作进度、内部单据流转与员工培训完成进度。',
        analyzes: '统计员工出勤情况，对比分析实际业务产出与阶段性 KPI 目标的偏差。',
        proposes: '根据员工技能短板推荐匹配的内训课程，草拟月度考勤异常汇总。',
        executes: '定期推送工作日志提交提醒，在月末自动汇总生成标准化考勤工时报表。',
        requiresApproval: '必须人工审批：绩效评优与处分决定、薪酬待遇调整、长假审批以及人事任免聘用。'
      },
      reports: [
        '各部门出勤率与人员流动率（Turnover Rate）',
        '各业务部门人均产值与综合人效排名',
        '岗位招聘平均周期与单人招聘成本',
        '内部合规课程与 SOP 培训通过率'
      ],
      interDepartmentConnection: '向财务部输出合规工时与薪资核算基准；从销售部与运营部同步业务实绩作为绩效考核依据。'
    },
    finance: {
      name: '财务与会计（Finance）',
      tagline: '实时现金流穿透、应收应付管控、预算执行与透明财务核算',
      problems: [
        '收支现金流无法与业务订单实时关联比对，存在对账滞后与财务盲区。',
        '缺乏应收账款到期自动预警机制，容易造成客户账期拖延甚至坏账积压。',
        '管理层需等待月末会计结账后方能获取经营报表，决策缺乏前瞻性。',
        '报销审批缺乏层级联动与额度校验，容易发生预算超支或合规漏洞。'
      ],
      dataManaged: [
        '资金流水账户与银行电子对账单',
        '电子收据、付款凭证与税务发票',
        '应收账款（AR）与应付账款（AP）台账',
        '各部门年度与月度预算执行额度',
        '实时收入、成本核算与利润损益表'
      ],
      processes: [
        '按权限梯度在线审批各部门日常费用支出申请',
        '销售订单回款与银行账户流水自动勾稽核对',
        '按约定账期自动向对应客户发送专业催款提醒通知',
        '定期自动生成动态现金流分析与财务平衡状况看板'
      ],
      aiAssistance: {
        reads: '读取资金收支记录、银行交易流水、采购合同与对应的发票凭证。',
        analyzes: '预测企业未来 30 至 90 天的现金流走势，智能识别高账龄坏账风险客户。',
        proposes: '预警个别部门潜在的预算超支风险，提供现金流调节与付款排程建议。',
        executes: '按既定模板生成周期性催款通知草稿，将支出费用自动归类至对应会计科目。',
        requiresApproval: '必须人工审批：所有实际资金出纳拨付、坏账核销申请、部门预算调剂与追加。'
      },
      reports: [
        '日度与周度动态现金流量表（Cash Flow）',
        '客户应收账款账龄精细化分析报表（Aging Report）',
        '各部门实际支出与年初批准预算对比差异表',
        '基于实际发生事实的实时暂估经营损益表'
      ],
      interDepartmentConnection: '接收销售部合同信息开具结算凭据；接收人事与市场部费用申请实施预算合规校验。'
    },
    management: {
      name: '企业经营管理（Management）',
      tagline: '中央经营指挥驾驶舱、SOP 流程标准固化与全局量化决策支持',
      problems: [
        '管理层缺乏全局统揽视角，了解企业运转状况依赖逐个询问各部门负责人。',
        '跨部门业务衔接处容易出现推诿扯皮，业务突发异常缺乏协同响应机制。',
        '企业重大战略决策常依靠直觉经验，缺乏完整可靠的事实数据链条支撑。',
        '企业运营管理知识过度依赖少数核心人员，缺乏规范化、可复制的制度流程（SOP）。'
      ],
      dataManaged: [
        '企业级战略目标（OKR）与各部门关键指标（KPI）',
        '企业标准作业程序（SOP）与内部规章制度',
        '全系统多维度业务操作审计日志（Audit Log）',
        '跨部门经营综合分析报表',
        '重大管理决策追溯与企业知识资产库'
      ],
      processes: [
        '制定战略经营目标并逐级穿透拆解至各业务职能部门',
        '实时追踪战略项目落地里程碑与跨部门流程流转堵点',
        '在安全授权体系下在线审批重大超权限业务决策事项',
        '基于全链条真实数据开展定期量化经营分析会'
      ],
      aiAssistance: {
        reads: '读取来自销售、市场、客服、人事、财务等全业务子系统的综合统计数据。',
        analyzes: '识别跨部门流程流转中的停滞卡点，自动捕捉核心经营指标的异常波动。',
        proposes: '提供经营应对策略方案，推演资源配置优化方案，提出流程精简建议。',
        executes: '每天清晨自动汇总生成《管理层经营早报》（Executive Morning Brief）。',
        requiresApproval: '必须人工审批：任何企业规章制度变更、重大战略决策调整、系统顶级管理权限分配。'
      },
      reports: [
        '企业综合经营健康度中央驾驶舱（Executive Dashboard）',
        '企业年度战略目标 OKR 达成全景进度图谱',
        '跨部门核心业务流程流转周期与运营效率指标',
        '经营潜在风险早期自动预警与识别报告'
      ],
      interDepartmentConnection: '作为全企业数据协同调度中枢，统一协调并穿透驱动其余 5 大业务职能板块。'
    }
  },

  needs: {
    crm: {
      name: '企业级 CRS / CRM 平台',
      tagline: '全生命周期客户资产管理、多线商机漏斗与统一交易闭环',
      coreValue: '将分散在员工个人的客户信息沉淀为企业核心的数字化资产；打通从市场引流、销售拓客、合同履约到财务回款的无缝业务链条。',
      problems: [
        '客户数据分散在个人 Excel 表格、微信聊天记录和便签中，人员流动极易导致重要客户资源流失。',
        '缺乏统一的 Customer 360 视图：销售不知道售后支持历史，客服不掌握合同商务条款，信息严重脱节。',
        '销售商机漏斗（Pipeline）流转停滞，管理层难以察觉潜在交易受阻于哪一阶段。',
        '商务合同、订单履约与财务实际回款对账脱节，依赖跨部门人工反复沟通确认。'
      ],
      solutionOverview: 'AI ENTERPRISE 提供标准化的企业级 CRS/CRM 平台，贯穿客户全生命周期（Customer Journey）：从多渠道线索汇集、自动指派、商机跟进与报价洽谈、合同签订，直到售后服务承接与回款对账。',
      dataTypes: [
        '360° 客户全景档案（企业信息、法定代表、核心诉求、客户分级评级）',
        '线索池与多渠道来源（官网、在线表单、线下活动、营销推广）',
        '商机阶段漏斗（初步接洽、需求调研、方案报价、商务谈判、赢单归档）',
        '合同档案、订单台账、付款计划与实际回款记录',
        '客户互动时间轴（通话纪要、回访记录、往来邮件、预约日程）'
      ],
      operatingWorkflow: {
        input: '客户通过官网表单、市场营销活动或由销售人员直接录入意向线索。',
        process: '系统规范格式、排重清洗、计算意向分级，并按专业规则智能分配至销售团队。',
        aiAutomation: 'AI 分析客户意向、推介沟通话术、创建跟进提醒并评估商机赢率。',
        humanControl: '销售顾问与客户面对面沟通，结合实际情况调整报价方案并按制度提报合同审批。',
        output: '合同完成签署，自动生成订单，数据实时流转至财务部门并启动客服入驻流程。'
      },
      keyFeatures: [
        { title: 'Customer 360 全景档案', description: '集中汇聚客户历史交易、沟通备忘、订单明细及售后服务记录，消除信息死角。' },
        { title: '多通道商机漏斗看板', description: '直观呈现销售各阶段分布，对超时未跟进商机主动预警，辅助科学预测回款金额。' },
        { title: '报价单与合同审批流', description: '在线套用标准报价模板，自动发起价格审批，合同文档与客户档案深度关联归档。' },
        { title: '客户互动全景时间轴', description: '完整记录每次电话沟通、会议纪要、往来邮件与下一步待办行动，形成完整业务证据链。' },
        { title: '精细化数据隔离与鉴权', description: '支持按部门、销售团队及个人负责制划分访问与编辑权限，切实保护企业核心商业机密。' }
      ],
      aiAssistance: {
        reads: '读取客户历史成交记录、跟进沟通日志、商机阶段演进及销售人员的处理节奏。',
        analyzes: '研判客户真实意向强度、互动频次、漏斗各阶段流失原因及销售人员转化效率。',
        proposes: '推荐合理的二次回访时机、异议化解策略及适合推荐的增购产品组合。',
        executes: '自动为线索打上业务标签、更新跟进阶段、触发日程提醒并推送预约确认通知（需配置授权）。',
        requiresApproval: '针对超额折扣审批、核心重大客户调配转让、客户档案注销/删除等关键操作，强制执行人工审批。'
      },
      systemConnections: [
        '连接官网与客户门户（Scope A）：通过 API 接口实时接收在线咨询与注册表单线索。',
        '连接财务与会计子系统（Scope E）：自动同步回款进展、合同条款与发票开具状态。',
        '连接客户服务与支持子系统（Scope D）：签约后无缝交接客户基础档案，保障服务连续性。',
        '连接商业智能分析子系统（Scope J）：向上输出漏斗转化率与销售预测数据，辅助高层决策。'
      ],
      reportTypes: [
        '线索来源渠道结构与转化效率趋势报表',
        '销售漏斗各阶段流转周期与流失率分析',
        '销售个人与团队业绩指标达成进度报表',
        '首次响应平均时长与客户跟进触达频次统计'
      ],
      securityAndGovernance: {
        rbac: '基于角色细化权限：销售人员仅可见名下客户，团队负责人监管全组，管理层统揽全局。',
        auditLog: '完整记录档案查看、信息变更、数据导出、合同状态调整的操作人与精确时间戳。',
        approvalMechanism: '超范围商务折扣及关键 VIP 客户再分配操作必须触发多级人工审批流程。',
        dataScope: '客户全部资产数据存放在企业独立专属数据空间中，绝不与任何第三方外泄共享。'
      },
      faqs: [
        {
          q: 'CRS / CRM 系统是否支持从原有的 Excel 或老系统中导入历史客户数据？',
          a: '支持。AI ENTERPRISE 提供专用导入与清洗排重工具，支持直接导入 Excel/CSV 文件或通过标准化 API 接口批量导入，确保历史交易资产无损迁移。'
        },
        {
          q: '销售人员是否可以随意查看或导出其他同事负责的客户资料？',
          a: '不可。系统采用严格的 RBAC 角色权限模型，普通销售仅能查阅自己负责的客户，导出数据等高风险操作需单独授权并记录操作审计日志。'
        },
        {
          q: '合同成单后，CRM 与财务核算子系统（Scope E）如何联动？',
          a: '合同状态一旦更新为“已签署”，系统将自动生成首期付款单及电子发票待开草稿并推送给财务人员，无需销售反复手动通知催办。'
        }
      ]
    },
    'ai-agent': {
      name: '专业 AI Agent 协同网络',
      tagline: '9 大职能业务 AI 助理协同配合，全程在人工把关与受控框架下规范运行',
      coreValue: 'AI 不脱离业务独立做主，而是作为专职业务 Copilot 助理：在严格鉴权范围内读取数据、深度推演分析、输出行动建议，经人工审核确认后方可执行。',
      problems: [
        '通用型外部 AI 工具缺乏对企业内部专有数据的理解，无法深度契合企业的具体业务操作流程。',
        '企业担忧 AI 擅自执行错误操作或对外不当言论，引发客户信任危机与商业合规风险。',
        '各部门员工耗费大量时间于手动汇总报表、翻阅公司管理制度及起草常规回复文书。',
        '缺乏针对 AI 的细颗粒度数据鉴权机制，存在跨部门泄露敏感经营数据的重大隐患。'
      ],
      solutionOverview: 'AI ENTERPRISE 部署由 9 大专业化 AI Agent 构成的协作网络（AI CEO、AI Sales、AI Marketing、AI CSKH、AI HR、AI Finance、AI Voice、AI Workflow、AI Search/RAG）。每个 Agent 均被严格限定在授权数据空间与安全护栏之中。',
      dataTypes: [
        '全公司核心经营指标（KPI、OKR、资金动态、人效产出、重大项目）',
        '企业各项规章制度、合规标准与标准作业规程（SOP）知识库',
        '各职能子系统按权限划分的专业业务数据底座',
        '人工对 AI 生成建议的采纳、修改与驳回反馈日志'
      ],
      operatingWorkflow: {
        input: '员工发起业务问答、提出任务指令，或系统预设事件触发（如下班对账、风控报警、新线索入库）。',
        process: 'AI Agent 在受限权限范围内检索内部知识底座与业务数据，精准识别任务意图。',
        aiAutomation: '执行逻辑推演、核验制度边界、标出异常指标并整理出规范的行动方案初稿。',
        humanControl: '业务主管审阅行动方案，按需微调补充，最终点击“审批通过”或“驳回修改”。',
        output: '系统精准执行对应动作（分发早报、更新状态、创建任务），操作全程留痕记入审计日志。'
      },
      keyFeatures: [
        { title: 'AI CEO — 高管经营决策助理', description: '整合全业务板块核心经营数据，识别现金流卡点与交付瓶颈，预警潜在运营风险。' },
        { title: 'AI Sales & AI Marketing Copilot', description: '深入剖析客户画像、评估商机意向得分，推荐精准触达文案，助力降低获客成本。' },
        { title: 'AI CSKH & AI Voice 质检助手', description: '推荐投诉解决方案，辅助识别客户沟通情绪，指导一线员工提供标准规范的贴心服务。' },
        { title: 'AI HR & AI Finance 财务助手', description: '核验考勤异常、初筛候选人简历、审核报销单据合规性并协助对账查漏。' },
        { title: 'AI Search / RAG 企业智能知识库', description: '支持使用自然语言快速检索企业内部制度、业务操作指引与技术手册，严防越权获取文档。' }
      ],
      aiAssistance: {
        reads: '严格限定在各 Agent 预先配置好的数据字段与文档知识库范围内，不可越权读取。',
        analyzes: '识别业务指标变化趋势、与标准作业规程（SOP）的偏离程度，解析长文本语境含义。',
        proposes: '草拟正式邮件初稿、提炼管理层简报、设计应对方案草案、生成优先待办列表。',
        executes: '整理多维对比表格、排版文本文档、生成系统预存待办草稿。',
        requiresApproval: '任何对外产生实际影响的行为（如向客户发送正式信函、资金拨付、制度修订、合同盖章）强制要求人工终审。'
      },
      systemConnections: [
        '深度链接 AI ENTERPRISE 11 大核心子系统（Scope A 至 Scope K），实现全局指令协同。',
        '直接嵌入员工的个人工作台（Workspace），按岗位角色动态加载对应的 Copilot 面板。',
        '深度集成权限管理与审计系统（Scope K），在数据输入层即刻完成访问隔离与数据脱敏。'
      ],
      reportTypes: [
        '各 AI Agent 模块的使用频率与处理任务类型统计',
        'AI 方案建议的人工通过率、修改率与驳回率分析',
        '引入 AI 辅助后各标准业务环节节省的工时测算'
      ],
      securityAndGovernance: {
        rbac: 'AI Agent 自动继承当前登录员工的系统权限，绝不可访问超越用户本人权限的敏感数据。',
        auditLog: 'AI 接收的所有指令、输出的所有推演与最终执行结果均实时记入企业审计日志。',
        approvalMechanism: '严格坚持 Human-in-the-loop 原则：在执行产生实际业务影响的动作前，人类拥有最终决策权。',
        dataScope: '企业专有数据仅在系统配置的模型环境中按权限调用，杜绝作为通用公开模型训练材料。'
      },
      faqs: [
        {
          q: 'AI Agent 是否会在未经人工允许的情况下，擅自向外部客户发送邮件或发布信息？',
          a: '绝对不会。AI Agent 生成的所有邮件草稿、报价单与回复建议，均必须经过有权限员工在界面上确认核准（Human-in-the-Loop）后，方可对外发出。'
        },
        {
          q: '企业的内部业务数据是否会被拿去训练公共基础大模型？',
          a: '不会。数据流转遵循企业专属安全鉴权边界与私有化策略，绝不泄漏至公共模型训练池中。'
        },
        {
          q: '本页面（/solutions/ai-agent）与导航中的 /ai Copilot 列表有何区别？',
          a: '本页面着重阐述 AI Agent 协作网络的技术底座、数据安全隔离与把关架构；/ai 则更侧重于展示 9 位业务 Copilot 针对具体岗位的日常操作特性。'
        }
      ]
    },
    voice: {
      name: '智能语音转写与通话质检分析',
      tagline: '高清录音转写、智能角色声纹分离，辅助提取对话要点并一键同步待办至 CRM',
      coreValue: '将非结构化的商务通话录音转化为高价值结构化数据，辅助企业把握客户真实诉求、规范销售服务礼仪，并提升 CRM 跟进纪要更新效率。',
      problems: [
        '销售/客服与客户的通话内容在通话结束后难以系统化留存，管理层无法掌握真实的商务承诺。',
        '长时间沟通后，员工需要花费大量精力回忆并整理文字总结至 CRM，关键信息容易遗漏。',
        '难以客观评估整个团队的沟通服务质量，往往直到客户发起投诉时才暴露服务问题。',
        '新人对复杂业务场景的应对缺乏实时参考，难以准确把握对话节奏与专业话术。'
      ],
      solutionOverview: 'AI Voice 致力于提供通话质检与分析支持：将语音音频精准转写为结构化中文文本、智能区分说话人角色、研判沟通情绪倾向、提取重点共识、辅助起草通话总结（Post-call Summary）并一键推荐转为 CRM 跟踪待办。',
      dataTypes: [
        '商务通话音频档案（加密存储在专有存储区中）',
        '逐句完整通话转写文本（区分客户与业务顾问的角色声纹）',
        '通话智能摘要（核心诉求、意向预算、达成意向、待办任务）',
        '沟通质量评估指标（通话时长、沟通情绪分布、标准话术依从度）'
      ],
      operatingWorkflow: {
        input: '顾问与客户完成一通业务电话（或接入实时通话音频流）。',
        process: '语音转文字技术快速将音频流转录为结构化逐句文本并标明说话人。',
        aiAutomation: 'AI 分析对话内容、提取关键业务要素、分析情绪倾向并草拟通话总结报告。',
        humanControl: '负责顾问审阅核对总结内容，按需补充完善细节并确认沉淀至 CRM 客户档案。',
        output: 'CRM 客户全景视图（Customer 360）成功留存本次沟通记录并自动建立下一步跟进日程。'
      },
      keyFeatures: [
        { title: '语音精准转录（Speech-to-Text）', description: '将通话音频精准转换为结构化文字，清晰呈现顾问与客户的对话流转。' },
        { title: '通话后智能摘要（Post-call Summary）', description: '自动提取核心业务要点：客户需求、预算范围、疑虑卡点及达成共识。' },
        { title: '下一步行动智能建议（Next Best Action）', description: '根据对话约定推荐后续回访时间点、所需发送的方案资料或售后技术支持流程。' },
        { title: '情绪识别与话术规范度质检', description: '辅助研判沟通氛围，比对标准作业 SOP 规范，排查是否存在不当承诺。' },
        { title: '一键归档至 CRM 互动时间轴', description: '支持将转写纪要一键关联至客户名下，彻底告别繁重的手动整理工作。' }
      ],
      aiAssistance: {
        reads: '读取授权通话录音文件以及系统内该客户的历史背景档案。',
        analyzes: '识别对话核心关键词、商务上下文语义、情绪积极/消极倾向以及对话中提及的金额和交付节点。',
        proposes: '生成精炼的通话要点小结、提炼跟进待办清单（Follow-up Tasks）并建议后续跟进消息草稿。',
        executes: '将生成的摘要草稿自动暂存于 CRM 待确认区域。',
        requiresApproval: '必须由人工核对确认后方可正式存入核心客户时间轴；任何自动化外呼流程均须严格遵守相关法规合规要求。'
      },
      systemConnections: [
        '与 CRS / CRM 平台（Scope B）直接集成：实时丰富 Customer 360 客户跟进历史。',
        '连接售后与客服支持系统（Scope D）：辅助提升处理复杂客诉的服务效率。',
        '支持通过标准 API 协议对接企业内部部署的 SIP/VoIP 呼叫中心系统。'
      ],
      reportTypes: [
        '各业务组通话总量与时长趋势分析报表',
        '高频出现的热门业务需求与客户疑虑聚类分析',
        '各团队沟通情绪倾向与服务满意度分布看板'
      ],
      securityAndGovernance: {
        rbac: '仅授权的部门主管与对应负责员工有权调听录音或查看转写文本。',
        auditLog: '详细记录所有音频播放、下载与文本查阅行为的操作时间与操作人。',
        approvalMechanism: '因通话而产生的客户关键档案修改必须由人工核验确认。',
        dataScope: '音频与文本数据独立加密存放，支持根据企业合规政策设置自动生命周期归档或彻底销毁。'
      },
      faqs: [
        {
          q: '本页面的 AI Voice 方案是否会自动拨打推销电话打扰客户？',
          a: '不会。本页面（/solutions/voice）介绍的是通话录音转写（STT）与质量分析辅助技术，专用于内部服务改进，绝非无序电话外呼工具。'
        },
        {
          q: '语音识别的准确率如何？',
          a: '转录质量取决于录音设备、网络环境及口音清晰度。界面展示的数据与指标为模拟演示，用于展示说话人分离及核心诉求提取的技术流程。'
        },
        {
          q: '企业通话录音如何安全存储与保护？',
          a: '所有音频文件在专属数据库中进行高标准 256 位加密存储，仅当事员工与直属主管享有收听权限，每次调阅均记入审计日志。'
        }
      ]
    },
    automation: {
      name: '端到端业务流程自动化（Workflow Automation）',
      tagline: '基于标准 SOP 的跨部门业务流程调度引擎，减少机械性手工录入',
      coreValue: '将分散在各个孤岛环节的业务步骤串接为自动化、可视化、受控运转的完整业务链，具备完备的触发条件、多级审批卡点与审计日志。',
      problems: [
        '跨部门业务交接流转停滞（销售签完单需手工微信通知财务开票，财务开票后需自行打电话联系库房发货）。',
        '员工大量时间被重复性事务占用：在多个系统间搬运数据、起草通知邮件、手动分配工单。',
        '请假、付款、合同折扣等审批事项分散在各种聊天群组与纸质单据中，流转周期长且责任模糊。',
        '流程瓶颈难以发现：管理者无法实时看清某一单据究竟卡在哪一位负责人的案头以及已超时多久。'
      ],
      solutionOverview: 'AI ENTERPRISE 流程自动化引擎遵循严谨的业务模型：事件触发（Trigger）→ 条件判断（Condition）→ 自动化动作（Action）→ 人工审批（Approval）→ 交付结果（Result）→ 审计存证（Log）。帮助企业建立权责明确、运转高效的现代化作业体系。',
      dataTypes: [
        '标准 SOP 流程规则（步骤编排、负责人岗位、SLA 时限、分支跳转条件）',
        '运行中的工作流状态（处理中、待审批、已完成、已驳回）',
        '业务触发事件数据（新线索涌入、订单创建、回款完成、合同到期）',
        '流程执行历史审计追踪记录（Audit Trail）'
      ],
      operatingWorkflow: {
        input: '业务事件触发（Trigger）：如客户签署合同、员工提交垫付款申请、官网收到新需求。',
        process: '系统校验业务条件（Condition）：金额是否超标？属于哪一业务部门？',
        aiAutomation: '自动生成待办事项、预填审批单据、指派至责任人并发送提醒通知。',
        humanControl: '权责主管在工作台查阅业务材料，点击“批准通过”或“打回修改”（Approval）。',
        output: '业务结果即时流转至相关子系统（开具单据、更新台账、推送确认通知）并完整留痕记入日志。'
      },
      keyFeatures: [
        { title: 'Trigger - Condition - Action 自动化引擎', description: '支持可视化配置从简单到复杂的业务场景规则，无需编写代码即可快速上线。' },
        { title: '多级灵活业务审批流（Multi-level Approval）', description: '支持串行或并行多级审核，可按涉及金额或职级层级严格设置分级审批权限。' },
        { title: '跨部门业务单据自动流转', description: '前序部门确认后，系统自动激活下游部门的后续处理任务，彻底消除信息断层。' },
        { title: 'SLA 时限倒计时与超期升级预警', description: '临近处理时限前主动发送催办提醒，发生超期时支持按规则自动升级给上一级主管。' },
        { title: '全流程执行审计记录（Execution Log）', description: '完整记录每一步的操作人、处理耗时、审批批注与修改原因，便于事后复盘。' }
      ],
      aiAssistance: {
        reads: '读取内部 SOP 操作规程、当前待办申请详情以及历史类似审批案例的处理数据。',
        analyzes: '核验业务申请是否符合制度规范，预检材料是否存在缺漏，监测各环节的流转耗时。',
        proposes: '向空闲负荷适宜的岗位分派工作，对周期性合规标准单据提示快捷审批建议。',
        executes: '自动打上阶段标签、推进下一流转节点、生成待办提醒并更新系统底座状态。',
        requiresApproval: '涉及资金出纳、法律合规及人事变动等高风险控制点，强制要求人工亲自审批确认。'
      },
      systemConnections: [
        '与任务与流程管理子系统（Scope G）底层联动。',
        '连接人力资源与组织架构（Scope F），实时解析上下级汇报链条与审批权限。',
        '深度链接销售（Scope B）与财务管理（Scope E），自动推动成单交易与款项结算流程。'
      ],
      reportTypes: [
        '各类型业务流程平均流转与结案周期报表',
        '流程流转瓶颈分析与高频超期节点排查报表',
        '自动化处理单据数量与传统手工耗时对比测算'
      ],
      securityAndGovernance: {
        rbac: '严密管控流程创建权、流转审批权与执行过程查阅权，杜绝越权审批。',
        auditLog: '对每一次审批通过、驳回操作及批注意见均打上不可篡改的电子时间戳。',
        approvalMechanism: '任何自动化任务均不得擅自跳过或绕过公司制度所确立的安全审批卡点。',
        dataScope: '业务表单及流转细节仅向流程责任链条内的相关责任人和主管可见。'
      },
      faqs: [
        {
          q: '当业务流转出现异常（Exception）时，系统如何应对？',
          a: '自动化引擎将自动切入异常处理分支：暂停自动化动作、触发红色高亮告警并即时指派给具备更高权限的主管介入人工处理。'
        },
        {
          q: '企业是否可以在无编程基础的情况下，自行根据内部 SOP 配置新流程？',
          a: '可以。系统提供直观的可视化界面，管理人员可以直接依据公司书面 SOP 规范配置 Trigger-Condition-Action 规则，无需专业 IT 编码。'
        },
        {
          q: '管理人员是否支持在手机移动端完成业务单据的审批？',
          a: '支持。审批提醒将实时推送到工作台移动端，审批人可查阅摘要附件并一键完成审批或驳回。'
        }
      ]
    },
    website: {
      name: '核心协同企业数字化门户',
      tagline: '品牌官网与在线门户直连 CRM 底座，加速访客线索向销售漏斗转化',
      coreValue: '企业门户不再是孤立的静态展示页，而是与企业管理系统深层连通的数字大门，实现线索秒级捕获并无缝注入业务漏斗。',
      problems: [
        '外部建站工具与企业内部系统割裂，客户在线留资后仅发送至个人邮箱，极易被忽略遗忘。',
        '销售人员需数小时甚至数天后才收到网站潜客信息，白白错失黄金沟通转化时机。',
        '网站内容、图文案例更新困难，每次微调都要依赖外部建站外包团队。',
        '无法科学衡量获客成效：难以追溯访客究竟由哪场营销活动吸引而来以及后续是否签约。'
      ],
      solutionOverview: '在 AI ENTERPRISE 架构中，门户子系统（Scope A）与管理系统紧密融合：所有在线预约表单、咨询留资通过安全 API 实时注入 CRS/CRM 销售漏斗中，第一时间启动客户跟进服务。',
      dataTypes: [
        '企业品牌形象、公司介绍及多媒体资产（Logo、配色标准、官方相册）',
        '企业产品服务白皮书、解决方案资料与官方权威资讯',
        '在线咨询表单、调研问卷与技术方案咨询留资',
        '多终端适配界面模板与各专题活动独立落地页'
      ],
      operatingWorkflow: {
        input: '访客浏览企业官网，了解解决方案并填写在线咨询表单或申请技术演示。',
        process: '系统自动校验输入格式、过滤广告垃圾信息并标记来源渠道参数（UTM 标签）。',
        aiAutomation: 'AI 辅助检验信息完整度，初步判断访客所属行业与诉求方向，并推送到 CRM 系统。',
        humanControl: '专属销售顾问在工作台接收到线索提醒，按标准服务 SOP 启动回访接洽。',
        output: '留资记录安全沉淀于 Customer 360 档案中，开启客户首次接触到最终成交的全生命周期记录。'
      },
      keyFeatures: [
        { title: '在线表单直通 CRS / CRM', description: '访客提交的咨询意向秒级直达内部系统，杜绝二次手工搬运，大幅提升响应时效。' },
        { title: '集中化内容与品牌资产管控', description: '直接通过统一后台管理公司介绍、服务案例与产品资讯，保持品牌形象高度一致。' },
        { title: '行业专属专题落地页支持', description: '根据推广需求快速发布针对特定行业或营销主题的专属落地页面。' },
        { title: '多终端自适应浏览体验', description: '全面适配桌面电脑、平板与移动手机屏幕，加载迅捷、排版优雅。' },
        { title: '官网智能知识问答助手预留', description: '支持接入基于官方知识库的智能问答服务，辅助解答客户常规产品咨询。' }
      ],
      aiAssistance: {
        reads: '读取官方企业介绍资料、常见问题库（FAQ）以及访客在表单中填写的具体诉求内容。',
        analyzes: '解析客户表单中的业务描述，初步判断客户意向匹配度并推荐指派至对应专业业务组。',
        proposes: '辅助撰写官网专栏文章草稿、优化利于 SEO 的标题文案并润色行动号召语（CTA）。',
        executes: '自动将官网线索推送到预设的销售跟进队列中。',
        requiresApproval: '任何在官网公开发布的新闻、解决方案变更或产品价格策略调整，均需管理人员审批后方可上线。'
      },
      systemConnections: [
        '连接系统设置、权限管理与安全子系统（Scope K）：管理企业基本信息与品牌视觉资产。',
        '连接 CRS / CRM 平台（Scope B）：实时将官网表单数据精准注入销售商机漏斗。',
        '连接数字营销与推广子系统（Scope C）：精确追踪各推广渠道与落地页的访客转化成效。'
      ],
      reportTypes: [
        '按日/周/月统计的在线表单提交量趋势报表',
        '官网访客浏览量向有效销售线索的转化漏斗分析',
        '最受访客关注的解决方案页面与行业内容排行'
      ],
      securityAndGovernance: {
        rbac: '明确职责边界：内容采编起草物料，主编审核上线，销售人员仅接收归集后的线索。',
        auditLog: '完整记录所有页面内容变动、表单配置调整与版本发布操作历史。',
        approvalMechanism: '严格的内容发布前机审与人审流程（Publishing Workflow），确保对外信息严谨准确。',
        dataScope: '官网客户提交的隐私资料全链路传输加密，符合国家信息安全管理要求。'
      },
      faqs: [
        {
          q: '企业门户系统是否加载流畅并且利于搜索引擎（SEO）收录？',
          a: '是的。系统采用现代化架构，优化 Core Web Vitals 指标，完备配置 SEO 结构化元数据，在各类电脑及移动设备上均可丝滑流畅加载。'
        },
        {
          q: '客户在网站提交表单后，销售人员多久能够收到提醒？',
          a: '表单数据通过事件驱动机制秒级同步至 CRM（Scope B）销售待处理队列，并附带投放来源渠道参数，方便针对性沟通。'
        },
        {
          q: '企业日常是否支持自主更新网站内容与横幅图片，无需依赖外部程序员？',
          a: '完全可以。企业管理员可通过系统管理后台直接编辑发布内容、图文案例与服务介绍，无需外部开发团队介入。'
        }
      ]
    },
    bi: {
      name: '商业智能与实时决策报表（BI）',
      tagline: '多维企业经营数据中枢，KPI/OKR 目标可视化追踪与运营走势研判',
      coreValue: '告别月末依靠人工反复拼凑 Excel 报表的被动模式；赋能管理层通过实时流转的动态数据大屏，随时掌控企业全方位运营健康度，以数据驱动敏捷决策。',
      problems: [
        '管理层需等待月度结账数日后才能看到各部门统计结果，经营决策往往陷入滞后被动。',
        '各部门口径不一数据打架（销售报出的业绩、财务实际收到的账款、库房实际结存各不相同）。',
        '员工花费大量时间于在各部门间来回复制粘贴数据并拼凑汇报幻灯片，耗费大量精力。',
        '缺乏早期预警机制：当发现收入滑坡或支出失控时，往往已造成无法挽回的实质损失。'
      ],
      solutionOverview: 'AI ENTERPRISE 商业智能系统（Scope J）承担着企业中央数据中枢的核心角色：实时汇聚各业务子系统的数据流，计算关键绩效指标（KPIs），以交互式图表进行直观呈现并对潜在异动主动发出预警。',
      dataTypes: [
        '销售与业绩达成数据（周期合同额、客单均价、商机赢单率）',
        '运营与产出效能数据（任务结项数、SLA 履约处理耗时）',
        '基础财务指标数据（已到账资金、应收未结款项、日常固定与变动开支）',
        '组织人力效能数据（员工规模、人员流动比率、平均人效产值）',
        '流程自动化成效数据（自动化完成任务数、AI 方案采纳占比）'
      ],
      operatingWorkflow: {
        input: '业务事件持续发生并实时传入：新订单建立、咨询服务结单、审批流程通过、发票开具完成。',
        process: '数据处理引擎实时清洗对齐、聚合汇总并自动同步计入对应的综合指标池中。',
        aiAutomation: 'AI 监测指标异常波动（如某业务线收入突降、某项成本异常激增）并第一时间推送警示。',
        humanControl: '管理团队审阅仪表盘，穿透下钻（Drill-down）查看原始单据与明细数据，研判经营对策。',
        output: '经营看板伴随业务发生事实持续动态刷新，彻底减少月末集中手工统计汇总的工作量。'
      },
      keyFeatures: [
        { title: '高管全局驾驶舱（Executive Dashboard）', description: '在单一主屏幕上集成呈现企业最核心的顶层经营指标，专供高管决策研判。' },
        { title: '各职能部门深度分析大屏', description: '专为各业务线负责人打造的分析视角：销售漏斗、市场投入产出、客户满意度、人效及财务流动性。' },
        { title: '战略目标追踪看板（KPI / OKR）', description: '将顶层战略目标与基层每日实际业务执行挂钩，全方位动态展示完成进度。' },
        { title: '自动化与 AI 增效指标看板', description: '量化展现流程自动化与 AI 助手为企业实际节省的工时及所替代的机械性操作量。' },
        { title: '异常波动预警与发展趋势预判', description: '当关键财务或运营指标触及安全阈值时自动标黄报警，防患于未然。' }
      ],
      aiAssistance: {
        reads: '读取各业务子系统中已获授权的全部汇总指标与结构化数据底座。',
        analyzes: '研判不同变量之间的内在联动关系（如广告投放额与最终成单量）、增长速率及与年度目标的达成差距。',
        proposes: '定期以简练文字提炼经营要点总结，指出数据异常波动背后潜藏的业务诱因。',
        executes: '按排期自动渲染图表、刷新看板并将周期性经营简报发送给对应管理人员。',
        requiresApproval: '任何基于数据分析结论所做出的预算增减、人事调整或战略策略变更，均由管理层亲自审批。'
      },
      systemConnections: [
        '汇聚 AI ENTERPRISE 11 大功能子系统（Scope A 至 Scope K）的全量业务数据。',
        '嵌入高管工作台（Executive Workspace），作为高管日常决策的核心入口。',
        '为 AI CEO（Scope I）高管助手提供坚实的基础数据支持与推演基准。'
      ],
      reportTypes: [
        '实时销售收入与商机漏斗达成分析大屏',
        '客户服务支持效率与客诉化解率分析报表',
        '各部门年度战略 OKR 与月度 KPI 达成走势',
        '企业运营人效分析与业务流程自动化率统计'
      ],
      securityAndGovernance: {
        rbac: '严密实行基于管理职级的报表鉴权：各级主管仅有权查看名下管辖业务板块的数据指标。',
        auditLog: '详细记录所有核心战略报表的访问调阅、大屏查看与统计数据导出操作日志。',
        approvalMechanism: '企业核心 KPI/OKR 计算逻辑、权重分配及目标阈值由经营管理委员会正式审批生效。',
        dataScope: '全部报表数据均由企业专有数据库实时聚合演算，严格符合企业数据主权安全规范。'
      },
      faqs: [
        {
          q: 'BI 报表上的数据是否能实现动态实时更新？',
          a: '可以。系统支持伴随业务实际发生事实（交易录入、凭证开具、工单关闭等）动态聚合更新图表，大幅减少传统手工统计的时滞。'
        },
        {
          q: '是否可以将商业智能看板中的报表数据导出为 Excel 或 PDF 文档？',
          a: '可以。系统支持一键导出符合标准格式的 Excel、CSV 或排版优美的 PDF 文档以供会议汇报使用，导出操作均记录在安全审计日志中。'
        },
        {
          q: '企业是否支持自主调整或自定义个性化的 KPI / OKR 计算规则？',
          a: '可以。管理团队可结合企业不同成长时期的战略管理重点，自由配置指标权重、达标红线与核算周期。'
        }
      ]
    }
  },

  visuals: {
    common: {
      illustrativeData: '[示例数据]',
      illustrativeScenario: '[演示场景]',
      deviceVisualization: '[设备交互呈现]',
      encryptionNotice: '通话录音文件实施 256 位加密存储',
      roleBasedAccess: '按业务岗位角色精准鉴权',
      stepPrefix: '步骤',
      status: '状态'
    },
    sales: {
      tabPipeline: '1. 看板商机漏斗 (Pipeline)',
      tabCustomer360: '2. 360° 客户全景视图',
      tabFunnel: '3. 全流程转化漏斗 (Funnel)',
      tabHandoff: '4. 合同 → 财务 → 售后交接流',
      pipelineTitle: '销售商机管理漏斗（Sales Opportunity Pipeline）',
      pipelineSubtitle: '全流程追踪线索从接入、报价谈判、签约赢单到交付交接的每一个阶段',
      pipelineTotalLabel: '漏斗商机总金额：',
      colApproach: '接洽与需求评估',
      colQuote: '方案调研与报价',
      colNegotiation: '商务合同谈判',
      colWon: '签约成单与交付',
      customer360Title: '360° 客户全景档案（Customer 360）',
      customer360Subtitle: '企业法定代表档案、信用账期额度与全景互动时间轴',
      customerVipBadge: '重点 VIP 核心客户',
      customerIndustry: '高端制造与化工原料供应链',
      statTotalRevenue: '累计销售成交额',
      statOpenOrders: '履约中订单数',
      statDebt: '当前应收账款',
      statHealth: '客户健康度综合指数',
      statHealthVal: '极佳 (满意度 CSAT 9.4/10)',
      timelineTitle: '近期业务沟通时间轴',
      funnelTitle: '全链路销售转化漏斗（Sales Funnel）',
      funnelSubtitle: '深度分析漏斗各阶段流失率与平均成单周期',
      handoffTitle: '跨部门业务交接流：销售 → 财务 → 客户服务',
      handoffSubtitle: '数据通过事件总线实时流转，彻底告别手工发送微信通知与重复对账',
      step1Title: '成单签署与电子合同盖章',
      step2Title: '财务部自动接收单据与应收账款',
      step3Title: '客服部激活售后与保修档案',
      step4Title: '总经理审批确认年度销售额'
    },
    marketing: {
      tabFunnel: '1. 渠道 → 线索 → 营收漏斗',
      tabChannels: '2. 渠道投产效果 (CAC & CPL)',
      tabCalendar: '3. 营销日历与传播排期',
      tabNurturing: '4. 潜客自动化培育链',
      funnelTitle: '全链路联动漏斗：从营销投放预算到最终成单收入',
      funnelSubtitle: '精确追踪每一分推广预算带来的真实签约业绩，无需跨部门反复对账',
      roiLabel: '全渠道平均综合 ROI：380%',
      channelsTitle: '各营销渠道效果归因排行',
      channelsSubtitle: '对比单条销售线索获取成本（CPL）与付费客户获取成本（CAC）',
      calendarTitle: '营销推广日历与内容发布排期',
      calendarSubtitle: '多渠道统筹调度：从官网专栏、培育邮件到行业研讨会',
      nurturingTitle: '基于行为轨迹的潜客自动化培育流',
      nurturingSubtitle: '结合线索互动行为自动打标，在精准时间窗口推送针对性方案'
    },
    customerService: {
      tabInbox: '1. 多渠道工单接入队列',
      tabSla: '2. SLA 履约倒计时看板',
      tabTimeline: '3. 客户争议解决时间轴',
      tabCsat: '4. 满意度综合评分 (CSAT)',
      inboxTitle: '全渠道融合工单队列（Omnichannel Inbox）',
      inboxSubtitle: '集中归集来自邮件、官网、服务门户与客服热线的支持请求',
      slaTitle: '服务等级协议承诺倒计时（SLA Countdown）',
      slaSubtitle: '多色警示并在工单临近超时前自动向上一级服务主管预警升级',
      timelineTitle: '典型客诉协同处理时间轴',
      timelineSubtitle: '透明留痕从诉求接收、技术诊断、问题修复到关怀回访的每一个节点',
      csatTitle: '客户满意度量化调研（CSAT & NPS）',
      csatSubtitle: '全面量化结单后的客户实际体验与维保续约倾向'
    },
    hr: {
      tabAttendance: '1. 考勤排班与休假审批',
      tabOnboarding: '2. 新员工入职清单 (Onboarding)',
      tabSkillMatrix: '3. 员工技能矩阵 (Skill Matrix)',
      tabTraining: '4. 内部培训课程管理',
      attendanceTitle: '在线考勤排班与行政申请表单',
      attendanceSubtitle: '指纹/人脸识别打卡数据与排班表实时自动勾稽核对',
      onboardingTitle: '新员工入职标准化导引流程（30 天培养计划）',
      onboardingSubtitle: '自动开通系统账号、分发电脑资产、下发 SOP 资料并指派带教导师',
      skillMatrixTitle: '岗位能力评估与核心技能矩阵',
      skillMatrixSubtitle: '客观比对员工当前实操能力与目标岗位标准胜任力要求',
      trainingTitle: '专业技能课程与入职培训进度',
      trainingSubtitle: '追踪标准作业程序（SOP）学习进度与定期合规考核通过率'
    },
    finance: {
      tabCashflow: '1. 动态现金流看板 (Cash-flow)',
      tabAging: '2. 账龄结构分析 (Aging Report)',
      tabBudget: '3. 预算 vs 实际 (Budget vs Actual)',
      tabReconciliation: '4. 银行流水与发票自动勾稽',
      cashflowTitle: '实时资金收支流水与动态走势',
      cashflowSubtitle: '结合周期性应收账款与固定支出，推演企业未来 30 至 60 天可用资金',
      agingTitle: '客户应收账款账龄结构分析（Aging Analysis）',
      agingSubtitle: '对超期 45 天未结款的客户自动触发账期警报并限制新增销售发货',
      budgetTitle: '部门预算额度执行与控制',
      budgetSubtitle: '对比各职能部门实际开支与年初获批预算额度的偏差情况',
      reconciliationTitle: '银行对账单与电子发票自动勾稽核对',
      reconciliationSubtitle: 'AI 辅助匹配对账金额、合同流水号与付款方抬头，减少手工录入'
    },
    management: {
      tabCockpit: '1. 经营指挥大屏 (Cockpit)',
      tabOkr: '2. 公司战略目标树 (OKR)',
      tabExceptions: '3. 业务特批待办队列',
      tabMorningBrief: '4. 附带溯源的早报简讯',
      cockpitTitle: '企业综合运营中央指挥驾驶舱（Executive Cockpit）',
      cockpitSubtitle: '一屏综合呈现 5 大业务板块核心数据：销售收入、成本支出、客户资产、人力效能',
      okrTitle: '企业战略目标与关键成果全景图（Company OKR）',
      okrSubtitle: '将顶层经营目标拆解穿透至各业务部门及核心岗位责任人',
      exceptionsTitle: '高风险与特殊例外审批事项待办队列',
      exceptionsSubtitle: '大额商务折扣特批、人员编制外招聘申请、超预算费用支出审批',
      morningBriefTitle: '高管经营智能早报（Executive Morning Brief）',
      morningBriefSubtitle: '速览过去 24 小时内的关键指标异动并提示今日优先关注事项'
    },
    crm: {
      headerCompany: '安发智能科技有限公司（AP Tech）',
      headerVipBadge: '重点 VIP 客户',
      headerCode: '编号：KH-2026-0842',
      headerReps: '企业代表：阮文雄（运营总监） • 负责顾问：陈氏梅（资深销售组长）',
      statRevenueLabel: '累计成交金额',
      statRelationLabel: '客户合作关系',
      statRelationVal: '深度良好合作',
      tabTimeline: '沟通互动时间轴',
      tabContracts: '商务合同与报价单',
      tabBilling: '付款结算（财务 Scope E）',
      tabService: '售后维保（服务 Scope D）',
      pipelineHeader: '多通道商机漏斗（B2B 销售与大客户订单）',
      pipelineSubtitle: '清晰呈现从线索介入、报价磋商到赢单交接的各阶段动态'
    },
    aiAgent: {
      title: '9 大专业业务 AI Agent 协同运作演示',
      subtitle: '全流程受控闭环：读取鉴权数据 → 深度业务推演 → 拟定行动建议 → 人工把关审批',
      step1Title: '1. 员工发起交互（User）',
      step1Badge: '任务触发源',
      step1Desc: '员工在工作台中提出业务咨询或任务指令（如：“为客户安发科技起草一份合同对账说明函”）。',
      step2Title: '2. 专职 AI Agent 介入',
      step2Badge: '语义意图识别',
      step2Desc: 'Agent 解析业务意图，确定调用的业务子系统（Scope B CRM + Scope E 财务）与权限范围。',
      step3Title: '3. 鉴权数据匹配（RBAC）',
      step3Badge: '数据严格隔离',
      step3Desc: '系统校验权限令牌：Agent 仅获准读取该员工负责的客户数据，严防跨部门非授权数据流出。',
      step4Title: '4. 输出结构化建议',
      step4Badge: '起草方案草案',
      step4Desc: 'Agent 汇总比对数据，起草完整的回复说明草稿，推送至审批主管的工作台界面。',
      proposalCardTitle: 'AI Agent 建议方案草案（待审批）',
      proposalCardSubtitle: '数据提取自 Scope B（合同 #HD-2026-04）与 Scope E（银行汇款凭证）',
      btnApprove: '审批通过并发布',
      btnReject: '驳回 / 要求修改',
      approvedAlert: '已成功审批通过！系统已执行对应任务并将操作完整记录至审计日志。',
      rejectedAlert: '已驳回该建议方案。修改意见已退回给对应的 AI Agent。'
    },
    voice: {
      badgeFlow: '智能语音转录与分析流',
      titleFlow: '业务处理全流程：声波音频 → 角色分离转写 → AI 生成要点建议 → 确认写入 CRM 待办',
      callInfoTitle: 'CRM 解决方案商务咨询通话录音',
      customerName: '咨询客户：明先生 — TechCorp 运营总监',
      callDuration: '通话时长：06 分 42 秒 • 双声道声纹分离完成',
      transcriptTitle: '完整通话录音转写纪要（Speech-to-Text 说话人分离）',
      summaryTitle: 'AI 自动提炼的通话总结草案（Post-Call Summary）',
      summaryReq: '核心诉求：',
      summaryReqVal: '为 35 人销售团队部署企业级 CRM 并与现有财务软件实现数据对接。',
      summaryBudget: '预期预算：',
      summaryBudgetVal: '2 亿 - 3 亿越南盾，计划分两期结算。',
      summaryNext: '建议下一步行动：',
      summaryNextVal: '发送详细报价方案清单，并约定在下周四开展在线产品功能演示。',
      btnCreateTask: '基于此摘要创建 CRM 跟进待办',
      taskCreatedSuccess: '已成功在 CRM 中创建该客户的跟进待办事项！'
    },
    automation: {
      badgeCanvas: '可视化工作流画布 (Visual Canvas)',
      titleCanvas: '业务自动化流转：Trigger → Condition (条件分支) → Action → Approval → Result → Audit Log',
      btnBranchHigh: '大额分支（>1亿盾，需CFO审批）',
      btnBranchStd: '标准分支（<1亿盾常规流）',
      btnBranchException: '异常分支（触发风控预警）',
      stepTrigger: 'Trigger：产生新业务订单',
      stepTriggerDesc: '销售人员从 CRM 建立一笔总金额为 150,000,000 越南盾的正式销售订单',
      stepCondition: 'Condition：订单金额校验',
      stepConditionDesc: '订单金额 > 1 亿越盾 → 自动激活销售总监与财务总监（CFO）双重审批流程',
      stepAction: 'Action：生成财务特批单据',
      stepActionDesc: '自动向财务总监推送审批提醒，并附带本单毛利率结构分析测算表',
      stepApproval: 'Approval：人工最终核准把关',
      stepApprovalDesc: '强制控制点：在财务总监完成数字签名核准前，不可正式盖章发放合同',
      stepResult: 'Result：审批结案与交付流转',
      stepResultDesc: '系统自动生成财务入账凭证，并向客户发送成单确认通知'
    },
    website: {
      badgePortal: '核心互联企业门户',
      titlePortal: '潜客转化流程：在线留资表单 → UTM 来源渠道归因 → API 实时同步至 CRM（Scope B）',
      btnDesktop: '电脑端展示 (Desktop)',
      btnMobile: '手机移动端展示 (Mobile)',
      formTitle: '企业数字化解决方案咨询预约表',
      formName: '姓名',
      formEmail: '企业邮箱',
      formCompany: '公司名称',
      formNeed: '感兴趣的解决方案',
      formBtnSubmit: '提交方案咨询申请',
      syncAlertSuccess: '咨询数据已通过事件流实时同步至 CRM 销售线索池（Scope B）！'
    },
    bi: {
      badgeBi: '三层级商业智能架构',
      titleBi: '可视化指标分层：战略 KPI 仪表盘 → 部门趋势深度分析 → 穿透查询原始单据',
      tier1Title: '第 1 层：EXECUTIVE KPI SCORECARD（全公司顶层战略记分卡）',
      tier2Title: '第 2 层：各职能部门深度分析与增长趋势',
      tier3Title: '第 3 层：穿透检索明细单据与审计追溯日志（DRILL-DOWN）',
      statRevenue: '本月营业总收入',
      statMargin: '业务综合毛利率',
      statPipeline: '商机漏斗总估值',
      statCsat: '客户满意度综合评分'
    }
  }
};

export default zhCNSolutions;
