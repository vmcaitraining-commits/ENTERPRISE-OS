import { IndustryDetailedConfig } from '../../../../data/industryDetailedData';

export const service: IndustryDetailedConfig = {
  slug: 'service',
  name: '专业服务与咨询方案',
  tagline: '咨询日程统筹调度、服务合同范围红线把控与交付验收闭环管理',
  sectorCode: 'IND-SRV-02',
  heroProblemSummary: '咨询机构、设计公司、律所及技术服务企业普遍难以精确追踪每位专家顾问的真实有效工时负载。咨询日程容易冲突撞期，客户常在合同外提出额外无休止的定制诉求却未被书面记录（Scope Creep），导致项目阶段验收延期并造成回款账款长期积压。',
  operatingSnapshot: {
    dailyVolume: '10 - 50 个并行履约服务合同 [模拟业务规模]',
    primaryChannels: '1 对 1 专家咨询日程、在线项目研讨会、阶段性电子验收单据',
    keyConstraint: '严格把控合同约定服务范围（Scope of Work），防范无偿超出合同范围的变更',
    complianceNote: '完整归档会议纪要并保存各关键技术交付节点的客户签章记录'
  },
  dailyOperation: [
    {
      time: '08:30',
      title: '咨询日程穿透审查与顾问工时负荷排程',
      actor: '业务运营负责人',
      desc: '审查各专业顾问当天的预约日程安排，提前调阅客户提交的背景需求初审表单。',
      systemAction: '标准作业演示：按规则自动推送日程临期提醒并附带调研文档链接。'
    },
    {
      time: '10:00',
      title: '深度咨询研讨与业务明细诉求沉淀',
      actor: '资深业务专家 & 客户方企业代表',
      desc: '深入倾听客户实际运营痛点，准确界定项目最终目标与服务交付边界（Scope of Work）。',
      systemAction: '系统应用场景：自动提炼会议核心要点并形成待办清单沉淀入 CRM 商机档案。'
    },
    {
      time: '13:30',
      title: '编制服务方案建议书并提报电子合同审批',
      actor: '咨询销售顾问',
      desc: '调用标准法律合同模板起草方案，明确限定修改迭代次数与分阶段付款验收里程碑。',
      systemAction: '标准作业演示：自动触发主管审核付款条款合规性，核准后即刻推送客户电子签章。'
    },
    {
      time: '15:30',
      title: '交付专家资源指派与交付项目建档启动',
      actor: '项目经理（PM）',
      desc: '将合同内容拆解为具体的任务包（WBS），明确指派负责人并锁定承诺交付时间线。',
      systemAction: '系统应用场景：在 Scope G 模块中生成任务甘特看板并实时通知各执行成员。'
    },
    {
      time: '18:00',
      title: '阶段性成果验收单签署与范围变更核验',
      actor: '项目总监 & 客户方代表',
      desc: '双方签字确认阶段一交付达成，将合同外的追加诉求规范化登记为补充协议（Addendum）。',
      systemAction: '标准作业演示：验收确认信息实时同步至财务子系统，自动开具对应阶段账单。'
    }
  ],
  journeyVisualFlow: [
    {
      stepNumber: 1,
      title: '预约咨询',
      subtitle: '在线留资 & 顾问日程锁定',
      isBottleneck: false,
      systemSupport: '系统能力：在线预约门户实时对接顾问日程日历，智能避开忙碌冲突时段。'
    },
    {
      stepNumber: 2,
      title: '合同范围',
      subtitle: '锁定义务范围 & 结算节点',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：手工起草合同极易遗漏修改轮次上限与验收时限，埋下争议隐患。',
      systemSupport: '系统能力：标准化条款模板库，按项目里程碑强制绑定阶段付款触发条件。'
    },
    {
      stepNumber: 3,
      title: '工时排程',
      subtitle: '按专长派单 & 有效工时核算',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：通过即时通讯软件零散派单，无法实时看清顾问真实负荷与怠工延误。',
      systemSupport: '系统能力：直观的顾问工作负荷热力大屏，对比实际填报工时与预估预算偏差。'
    },
    {
      stepNumber: 4,
      title: '阶段验收',
      subtitle: '交付归档、客签确认 & 回款对账',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：客户对超出范围的额外修改扯皮推诿，迟迟不签阶段验收导致资金滞压。',
      systemSupport: '系统能力：具备电子签名效力的阶段验收单据，完整记录每次修改历史版本证据链。'
    }
  ],
  configuredModules: [
    {
      scope: 'Scope B',
      moduleName: '咨询商机跟进与专业日程管理 CRM',
      inputData: '合作企业全景画像、对接人岗位、调研问卷与历史交流纪要。',
      coreProcess: '追踪商务洽谈成熟度，评估商机赢率并根据专家档期智能协调日程。',
      outputData: '详尽的客户 360° 档案与自动同步到个人日历的工作备忘录。'
    },
    {
      scope: 'Scope G',
      moduleName: '项目里程碑交付与任务协同看板',
      inputData: '合同约定的交付条款、指派执行人、承诺各交付里程碑时限。',
      coreProcess: '将大项目拆解为可量化追踪的里程碑节点，全程监控每个成员的工时投入。',
      outputData: '供客户与管理层定期审阅的项目实施健康度状态甘特图。'
    },
    {
      scope: 'Scope D',
      moduleName: '售后客户支持工单与争议处理网关',
      inputData: '交付后的运维技术支持申请、专家服务反馈、文档微调诉求。',
      coreProcess: '统一服务入口集中受理交付后反馈，按紧急等级分类指派专人解决。',
      outputData: '透明规范的服务质量评价报告与问题闭环处理记录。'
    },
    {
      scope: 'Scope H',
      moduleName: '企业级咨询知识库与法务模板中枢',
      inputData: '标准服务合同范本、超范围变更计费标准、新人交付赋能 SOP。',
      coreProcess: '集中化管理核心业务模板版本，按职级安全授予员工访问权限。',
      outputData: '确保全体顾问与项目团队遵循一致的高水准专业作业规范。'
    }
  ],
  aiSpecializedDemo: {
    title: 'AI 助手业务模拟：范围蔓延自动预警（Scope Creep）与纪要提取',
    problemContext: '[模拟场景] 在项目阶段研讨会后，客户方提出额外增加 3 份不在合同初始范围内的定制深度 BI 分析报表。AI 助手读取授权纪要，迅速标出超出原约定义务范围的风险。',
    inputLabel: '会后交流纪要文本输入 [模拟数据]：',
    sampleInput: {
      '原合同编号': 'HD-SRV-2026/04 [模拟数据] - 企业营销流程重组咨询方案',
      '约定基准范围': '编制 1 套销售 SOP 标准手册 + 开展 2 场落地实操内训（最多 15 人）',
      '客户新增诉求': '要求额外交付 3 份周度动态 BI 分析仪表盘，并派驻顾问现场驻场指导 30 天',
      '顾问随笔备忘': '客户对接人希望将其纳入现有合同总价范围内，不增加任何额外服务费用'
    },
    aiProcessing: 'AI 对比授权合同范围条款与会后新增诉求，对照企业项目风控规则库生成建议...',
    aiOutput: {
      badge: 'AI 模拟：合同范围蔓延预警（Scope Creep Warning）',
      summary: 'AI 识别出 2 项明显超出原 HD-SRV-2026/04 合同约定交付边界的重大新增需求。',
      recommendations: [
        '超范围项 1：构建 3 套动态 BI 仪表盘（参考行业工时：需增加约 40 个技术工时）。',
        '超范围项 2：全职驻场 30 个工作日（严重超出原定 2 场集中内训的约定范畴）。'
      ],
      riskLevel: 'HIGH',
      actionItems: [
        '建议项目经理起草《补充服务协议 01 号》，参照标准工时费率向客户提出增补报价。',
        '建议商务负责人以委婉专业的商务公函形式向客户澄清阶段一与阶段二的交付边界。'
      ]
    },
    disclaimer: '本模拟推演基于模拟业务数据。AI 仅在预先授权的数据范围内进行合规筛查并输出建议，最终所有商务决策均由项目合伙人核准决定。'
  },
  trackedKpis: [
    {
      metric: '项目里程碑准时交付率（Milestone On-Time）',
      formula: '(按时完成验收的里程碑数 / 承诺总里程碑数) × 100% [参考公式]',
      frequency: '按周度复盘核算',
      targetBenchmark: '≥ 90% [推荐行业基准]',
      businessImpact: '保障企业分阶段款项按时回笼，树立卓越的契约交付信誉。'
    },
    {
      metric: '顾问有效计费工时利用率（Billable Utilization Rate）',
      formula: '(向客户计费的有效工时总数 / 顾问实际总工时) × 100% [参考公式]',
      frequency: '按月度核算评估',
      targetBenchmark: '65% - 75% [推荐行业基准]',
      businessImpact: '优化专家人力成本结构，最大化提升单个咨询项目的综合毛利水平。'
    },
    {
      metric: '项目终期客户满意度综合评分（CSAT）',
      formula: '客户在最终验收单签署时提交的 5 星级满意度平均得分 [参考度量]',
      frequency: '按单个项目终验统计',
      targetBenchmark: '≥ 4.7 / 5.0 [推荐行业基准]',
      businessImpact: '沉淀高信誉标杆案例，形成高转化率的企业口碑转介绍与年度续约率。'
    }
  ],
  threeStageRoadmap: [
    {
      phase: '阶段一（第 1 - 3 周）',
      title: '业务流转梳理与标准化合同范本库建设',
      timeline: '第 1 周 - 第 3 周',
      focus: '将顾问日程排期、专家资质库与商务建议书模板统一部署于数字化工作台。',
      deliverables: [
        '客户在线预约咨询门户与顾问自动派单路由规则',
        '标准化法务合规咨询服务合同模板库',
        '基于服务颗粒度的明细报价表与里程碑付款机制'
      ]
    },
    {
      phase: '阶段二（第 4 - 7 周）',
      title: '项目进度看板配置与验收把关流程落地',
      timeline: '第 4 周 - 第 7 周',
      focus: '推行项目任务协同工具，建立工时填报机制并将阶段验收单与开票对账联动。',
      deliverables: [
        '按合同自动拆解生成的多角色项目实施看板',
        '电子化阶段验收单与内部跨部门审核流程',
        '客户售后问题与微调诉求统一受理网关'
      ]
    },
    {
      phase: '阶段三（第 8 - 12 周）',
      title: 'AI 纪要辅助激活与专业人效 BI 驾驶舱上线',
      timeline: '第 8 周 - 第 12 周',
      focus: '应用 AI 辅助识别合同范围偏差与会议纪要提炼，上线咨询人效分析看板。',
      deliverables: [
        'AI 辅助合同范围比对与项目卡点预警模型',
        '覆盖工时利用率与项目毛利率的 BI 决策大屏',
        '咨询机构项目复盘与知识资产沉淀长效管理规范'
      ]
    }
  ]
};
