export const customerService = {
  name: 'AI 客户服务与售后支持 Copilot（CSKH Copilot）',
  roleTitle: '工单处理与售后关怀协同助手',
  shortTagline: '自动接入工单、研判客诉紧急等级、根据企业标准 SOP 规程匹配精准答复草案并标明出处，由客服专员复核后发送。',
  targetAudience: '客户体验总监（CXO）、客服中心主管、售后技术支持专家及客诉管理组长',
  heroSample: {
    type: 'Ticket Analysis & Sourced Response Draft',
    title: '工单 #8492：零部件交付延期与退换货客诉',
    timestamp: '14:20 PM [来自客户服务门户]',
    summary: '客户因货物延期 2 天情绪激动；AI 将工单判定为 P2 高危优先级，依据制度规程起草歉意信并推荐补偿方案。',
    dataPoints: [
      { label: '工单分类', value: '物流延误投诉 / P2 紧急', status: 'alert' },
      { label: '客户情绪标签', value: '情绪激动，亟需安抚答复', status: 'warning' },
      { label: '引用规章文件', value: 'SOP-CS-04 (第 3.2 条：延误赔偿规则)', status: 'normal' },
      { label: '建议处置方案', value: '免除本次运费 + 补偿 10% 抵用券', status: 'success' }
    ],
    sampleSnippet: '• 引用来源：依据 VMC 客户服务管理规范（SOP-CS-04，2026/01/15 颁布，第 3.2 条），物流不可抗力延期超 24 小时赠送次单 10% 优惠券。\n• 答复草稿：已生成包含诚恳道歉、客观原因解释及明确预计送达时间（今日 16:30）的完整函件。\n• 待办状态：等待客服代表确认实际运单轨迹后手动点击发送。',
    actionRequired: '客服专员核对运单状态后，点击“核准并发送回复”或“润色答复用词”。'
  },
  beforeAfter: [
    {
      task: '售后质保政策与故障排查规程查阅',
      before: {
        process: '新客服需反复翻阅厚重的工作手册或在企业微信群中向老员工求助，不同客服口径差异极大。',
        timeSpent: '单张工单查阅耗时 10 - 20 分钟',
        painPoint: '客户长时间等待；口径错误容易引发客户二次投诉乃至法律争议。'
      },
      after: {
        process: 'AI 毫秒级检索企业已认证的知识库，直接定位规章章节并显示条文原文与出处链接。',
        timeSpent: '30 秒内检索呈现精准依据',
        humanRole: '客服人员结合当事人实际情况研判条文适用性，确保服务有理有据。'
      }
    },
    {
      task: '高频咨询与常规客诉答复起草',
      before: {
        process: '客服需逐字手工敲键盘或在备忘录中翻找旧模板粘贴，工作重压之下措辞易显生硬机械。',
        timeSpent: '每条答复编写需 5 - 10 分钟',
        painPoint: '语言组织缺乏温度，面对愤怒客户时易激化矛盾。'
      },
      after: {
        process: 'AI 基于最佳实践服务用语，快速生成语言得体、逻辑清晰、直面核心关切的定制化回复草稿。',
        timeSpent: '1 分钟审读与轻量微调',
        humanRole: '客服专员重点校对客户姓名、单号与特殊诉求，注入人文关怀。'
      }
    },
    {
      task: '客诉严重程度研判与超时升级机制',
      before: {
        process: '所有工单混杂在一个通用公用收件箱，遵循“先来后到”机械排队，重大恶性事件容易被淹没延误。',
        timeSpent: '重大投诉严重超时积压',
        painPoint: 'VIP 核心客户怒火升级，小问题拖延成重大商业违约或舆情危机。'
      },
      after: {
        process: '系统自动分析留言语义与情绪倾向，毫秒级打上 P1/P2/P3 优先级标签，对超时工单即时呈报主管。',
        timeSpent: '即刻完成自动化分级归类',
        humanRole: '管理层在事态升级前第一时间介入处置，挽回高价值客情关系。'
      }
    }
  ],
  demoSpec: {
    title: '模拟演示实践：客诉工单受理、溯源答复草拟与人工审核下发',
    sourceDescription: '数据接入自客户支持服务台、售后 SOP 规章知识库以及历史对客答复知识资产。',
    dataSources: [
      { name: '多渠道客服工单系统', type: '客户留言、邮件内容、提交时间戳', syncMode: '实时 Webhook 同步' },
      { name: '企业客服知识底座 (KB)', type: '保修条例、退换货制度、维修配件公价表', syncMode: '已校验受控版本' },
      { name: '客户历史订单履约档案', type: '订单编号、发货时点、签收与支付状态', syncMode: 'CRM 实时关联' }
    ],
    disclaimer: 'AI 仅基于企业数字化制度文件建议答复方案。所有向客户发送的正式答复均需经人工客服点击确认。'
  },
  governance: {
    allowedData: [
      '客户主动提交的咨询留言、售后工单报障内容及附件截图',
      '公司已正式印发宣导的客户服务规程、保修条例与官方收费指导价',
      '提问客户名下的历史订购设备清单、合同维保期与已购服务方案',
      '经法务及客服管理层核准发布的各类标准问答范本'
    ],
    prohibitedData: [
      '严禁系统擅自承诺超出客服授权限额的任何现金赔付或实物赠送',
      '严禁向客户透露公司内部财务成本核算、采购底价或利润率数据',
      '严禁调阅或跨客户暴露其他客户的敏感商业订单或个人信息',
      '系统绝无权限私自解除客户服务合同或更改核心维保条款'
    ],
    rbacRules: [
      '一线客服专员拥有查看所分配工单及编辑 AI 建议草稿的权限。',
      '客服主管拥有在既定额度内核准特殊补偿与折扣优惠券的权限。',
      '客户体验总监负责审批涉及法律风险的 P1 级重大客诉处理方案。'
    ],
    auditLogMechanisms: [
      '精确留存客户原始提问文本与 AI 引用规章条款的具体章节编号。',
      '完整记录客服专员发送答复的时间、实际发送内容与 AI 初始版本的差异对比。',
      '记录工单结单后客户提交的 CSAT 服务满意度评价打分。'
    ]
  },
  taskDivision: {
    automatedTasks: [
      { task: '全渠道接收咨询并生成唯一工单编号与服务队列', boundary: '系统接口对接', systemOutput: '新工单流水号' },
      { task: '根据语义分析紧急度并标记 P1/P2/P3 优先级标签', boundary: '语义与情绪识别', systemOutput: '优先级分类标签' },
      { task: '精准检索并提取制度文件中最匹配的补偿或技术条款', boundary: '基于知识库检索', systemOutput: '规章引用条文摘录' },
      { task: '根据工单事实与制度要求起草得体的正式答复草稿', boundary: '仅生成待审草稿', systemOutput: '待核准回复文本' }
    ],
    mandatoryApprovals: [
      { checkpoint: '向客户正式发出客服答复', reason: '确保信息权威严谨，维系人与人之间的真诚共情', approverRole: '客服专员（一线把关）', actionIfRejected: '客服根据实际情况重写答复' },
      { checkpoint: '执行退换货、运费免除或发放优惠券补偿', reason: '直接产生成本支出与财务费用', approverRole: '客服部门主管', actionIfRejected: '驳回补偿申请，依常规政策解释' },
      { checkpoint: '对 P1 级重大违约或人身设备安全投诉执行结单', reason: '杜绝客诉隐患未闭环引发后续纠纷', approverRole: '客户体验总监 / 运营副总裁', actionIfRejected: '持续跟进并安排专家现场会诊' }
    ]
  },
  metrics: [
    { name: '首次响应时间 (First Response Time)', formula: '从工单生成至专员发出首封正式回复的时间间隔', dataSource: '客服系统工单报表', frequency: '每日统计', targetBenchmark: '试点期缩短至 5 分钟以内（原均值 25 分钟）' },
    { name: 'AI 建议答复采纳率', formula: '(基于 AI 草稿修改发出的工单数 / 发出答复工单总量) × 100%', dataSource: '客服操作日志', frequency: '每周核算', targetBenchmark: '有效答复采纳率 ≥ 80%' },
    { name: '客户服务综合满意度 (CSAT)', formula: '结单后客户 5 星好评的平均综合得分', dataSource: '评价问卷反馈', frequency: '每月评估', targetBenchmark: '满意度指标稳定在 ≥ 4.5 / 5.0' }
  ],
  pilotPlan: {
    recommendedScope: '选取 1 个核心沟通渠道（如网页在线客服或售后支持邮箱），配备 3 名资深专员开展试点。',
    duration: '分阶段试点实施',
    pilotSteps: [
      { week: '第 1 阶段', phase: '服务规程梳理与知识库数字化', activities: ['汇总 15 份高频客服 SOP、质保制度与常见问答', '由业务骨干核对制度时效性，录入系统知识库', '配置 P1/P2/P3 优先级判定词典'], deliverable: '数字化客服制度知识库验收通过' },
      { week: '第 2 阶段', phase: '影子运行与准确率校验', activities: ['新进工单在后台静默生成答复建议', '专员对照查验条款引用的准确性与完整度', '调试提示词模板，纠正称谓与行业习惯用语'], deliverable: '条款引用准确率达到 ≥ 90%' },
      { week: '第 3 阶段', phase: '一键审校发送实战运行', activities: ['客服专员直接在 Copilot 辅助界面审阅草案并点击发送', '监测各工单的平均处理流转时长', '专人盯防客户对答复速度与专业度的即时评价'], deliverable: '工单处理耗时降低 40% 以上' },
      { week: '第 4 阶段', phase: '成效量化评估与全员推广', activities: ['综合复盘 CSAT 评分与专员采纳度', '将新增疑难案例反哺沉淀至规程知识库', '向公司管理层提报全客服团队普及方案'], deliverable: '客服部 Pilot 验收总结与推广建议书' }
    ],
    goNoGoCriteria: [
      '杜绝任何一起未经人工专员确认即直接自动向客户发送内容的失控事件（保持 0 容忍）。',
      '一线客服人员对 AI 答复草稿的实用性满意度评价超过 85%。',
      '试点期内工单平均流转闭环时长较历史同期缩短 30% 以上。'
    ]
  }
};
