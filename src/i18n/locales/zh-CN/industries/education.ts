import { IndustryDetailedConfig } from '../../../../data/industryDetailedData';

export const education: IndustryDetailedConfig = {
  slug: 'education',
  name: '教育培训与学籍教务',
  tagline: '招生全链转化漏斗、智能排课师资调度与数字教学资源沉淀',
  sectorCode: 'IND-EDU-03',
  heroProblemSummary: '培训学校、成人教育机构及职业院校常在开学招生旺季面临咨询线索海量涌入的局面。若不能在黄金 15 分钟内快速分发跟进，意向学员极易流失至竞品机构。此外，排课冲突、分期学费追缴以及教学课件分散在个人电脑中，极易导致财务坏账与教学管理混乱。',
  operatingSnapshot: {
    dailyVolume: '100 - 1,000 条招生线索/月 [模拟开班业务规模]',
    primaryChannels: '推广落地页、线下宣讲会表单、招生顾问电话、班级服务群',
    keyConstraint: '前 15 分钟黄金跟进时限内智能分发至对应专业咨询顾问',
    complianceNote: '严格保障学员个人信息合规隐私，按政策合规开具电子培训发票'
  },
  dailyOperation: [
    {
      time: '08:00',
      title: '晨间招生线索智能清洗与顾问排班分发',
      actor: '招生咨询团队负责人',
      desc: '系统根据留资时间、意向课程与校区位置自动为线索打标，按顾问值班表合规分派。',
      systemAction: '标准作业演示：按预设分流策略自动将线索推送到排班顾问的工作台。'
    },
    {
      time: '09:30',
      title: '学业规划电话沟通与水平摸底测评预约',
      actor: '招生咨询顾问（Admissions Consultant）',
      desc: '致电了解学员现有知识基础、学习目标及时间安排，并预约在线入学测评。',
      systemAction: '系统应用场景：自动推送预约确认通知并附带线上测评专属答卷链接。'
    },
    {
      time: '11:30',
      title: '教务智能分班排课与授课师资匹配',
      actor: '教务管理团队（Academic Affairs）',
      desc: '依据入学测评得分与学员空闲时段，自动比对拟开班排课计划中的空余名额。',
      systemAction: '标准作业演示：实时核验物理教室/线上直播间的容量配额，杜绝超额报名。'
    },
    {
      time: '14:00',
      title: '课堂考勤打卡登记与缺勤学员主动关怀',
      actor: '助教老师（TA）/ 授课讲师',
      desc: '在线登记当期课堂到课出勤状态，对请假缺勤学员在 Scope G 模块中予以标注。',
      systemAction: '系统应用场景：自动向请假学员发送关怀提醒，并附带本课时录播回放链接。'
    },
    {
      time: '17:00',
      title: '分期学费账期催缴提醒与教学质量回访',
      actor: '教务财务会计',
      desc: '核对阶段课程结束前即将到期的下一期续费清单，开展满意度回访。',
      systemAction: '标准作业演示：按学费分期节点自动向家长/学员发送账单明细短信提醒。'
    }
  ],
  journeyVisualFlow: [
    {
      stepNumber: 1,
      title: '招生线索',
      subtitle: '广告投放、官网、活动表单',
      isBottleneck: false,
      systemSupport: '通过 Webhook 集中汇聚多渠道意向留资进入 CRM 招生漏斗中。'
    },
    {
      stepNumber: 2,
      title: '方案咨询',
      subtitle: '诉求诊断 & 意向分级',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：顾问拨打延误超过 2 小时，导致有效沟通接通率锐减 50% 以上。',
      systemSupport: '系统能力：设置意向评分引擎，实现新入库线索向在线顾问秒级转派。'
    },
    {
      stepNumber: 3,
      title: '排课分班',
      subtitle: '时段匹配、教室 & 师资调度',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：授课讲师日程撞期冲突，或班级学员基础参差不齐引发客诉。',
      systemSupport: '系统能力：多维排课调度看板，对讲师档期与教室资源冲突实时亮红预警。'
    },
    {
      stepNumber: 4,
      title: '教学实施',
      subtitle: '面授互动、出勤记录 & 课件',
      isBottleneck: false,
      systemSupport: '系统能力：数字化课件库按班级精准鉴权下发，无缝对接主流在线学习平台。'
    },
    {
      stepNumber: 5,
      title: '学费核算',
      subtitle: '分期结算、对账 & 电子发票',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：手工登记学费易发生错账漏账，引发与家长的退费/补款争议。',
      systemSupport: '系统能力：按课程阶段建立分期收款台账，支持网银流水自动对账与合规开票。'
    },
    {
      stepNumber: 6,
      title: '结业续费',
      subtitle: '教学满意度调查 & 晋级推荐',
      isBottleneck: false,
      systemSupport: '系统能力：自动推送结业满意度调研问卷，并根据学习表现推荐进阶课程。'
    }
  ],
  configuredModules: [
    {
      scope: 'Scope B',
      moduleName: '招生 CRM 与学员全景成长档案',
      inputData: '意向学员姓名、报考课程、联系方式、摸底测试成绩单。',
      coreProcess: '管理从公域留资到试听、正式入学的完整生命周期，建立学员成长卡。',
      outputData: '按班级汇聚的学员名册与各招生顾问的转化漏斗达成报表。'
    },
    {
      scope: 'Scope H',
      moduleName: '企业级数字教学资源与课件知识库',
      inputData: '电子教材、名师录播课、辅导习题集与模拟试题试卷。',
      coreProcess: '搭建结构化教学资源库，支持基于关键词快速检索并按班级授权。',
      outputData: '保障学员与任课讲师便捷、合规地获取授权教学辅助材料。'
    },
    {
      scope: 'Scope E',
      moduleName: '学费分期台账与教务收支核算中枢',
      inputData: '收费标准政策、助学金减免、学员各期缴费协议与还款计划。',
      coreProcess: '监控多期缴费履约状态，勾稽银行对账凭证并自动更新学籍财务状态。',
      outputData: '实时培训收入动态报表与临期未缴款学员追缴清单。'
    },
    {
      scope: 'Scope D',
      moduleName: '学员教务关怀与转班退费支持通道',
      inputData: '休学延期申请、调课改期诉求、课堂效果评价与客诉工单。',
      coreProcess: '集中统一处理各类学务申请，按规程流转至教务主管与财务快速审批。',
      outputData: '问题响应时长大幅缩短，全面增强学员与家长的信任度与归属感。'
    }
  ],
  aiSpecializedDemo: {
    title: 'AI 助手业务模拟：学员画像诊断与分班推荐',
    problemContext: '[模拟场景] 一位意向学员刚提交了一份在线英语能力摸底问卷，并希望能在工作日晚间上课。AI 读取授权数据，根据时间要求与分级标准自动推荐 2 个适配合适班级。',
    inputLabel: '学员摸底测评与诉求输入 [模拟数据]：',
    sampleInput: {
      '学员姓名': '陈黄龙 [模拟数据]',
      '意向课程': 'IELTS 冲刺 6.5 强化班',
      '摸底得分': '听力: 5.0 | 阅读: 5.5 | 写作: 4.5 (综合参考评级: 5.0 分位)',
      '空闲时段': '每周二 / 四 / 六晚间（18:30 之后）',
      '时限要求': '计划于 12 月底前拿到合格成绩以申请出国留学签证'
    },
    aiProcessing: 'AI 读取测评成绩与在招班级排课排期表，比对分班规则库拟定选班推荐...',
    aiOutput: {
      badge: 'AI 模拟：学员选班建议与顾问沟通策略',
      summary: 'AI 识别出学员出境目标明确、备考时间紧迫。建议优先推荐基础进阶班型过渡。',
      recommendations: [
        '推荐班级 1：IELTS-K42 (9月18日开班) — 每周二/四/六 (19:00-21:00) — 尚余 3 个空位。',
        '推荐班级 2：IELTS-FastTrack 极速冲刺 (9月22日开班) — 每周 4 次高密度强化课。'
      ],
      riskLevel: 'LOW',
      actionItems: [
        '建议招生顾问沟通时重点强调留学申请时间线倒计时节点以促成决策。',
        '建议向学员微信推送进阶提分方案路线图及首期特惠缴费名额。'
      ]
    },
    disclaimer: '本模拟场景基于模拟数据生成。AI 仅提供初步比对建议，最终分班确定由教务主任与任课老师最终审批。'
  },
  trackedKpis: [
    {
      metric: '线索至正式付费学员转化率（Lead-to-Student Rate）',
      formula: '(正式注册交费学员数 / 接收入库的有效留资总数) × 100% [参考公式]',
      frequency: '按招生推广活动统计',
      targetBenchmark: '15% - 25% [推荐行业基准]',
      businessImpact: '量化数字化投放回报效率，检验招生顾问团队的专业沟通水平。'
    },
    {
      metric: '课程结业率与完课率（Course Completion Rate）',
      formula: '(出勤课时 ≥ 80% 的学员数 / 初始注册学员总数) × 100% [参考公式]',
      frequency: '按班级结课评估',
      targetBenchmark: '≥ 85% [推荐行业基准]',
      businessImpact: '体现教学内容质量的核心基石，直接决定后期的升班续读比率。'
    },
    {
      metric: '分期学费按期缴费履约率（Tuition On-Time Collection）',
      formula: '(准时收回的学费金额 / 合同约定当期应收总额) × 100% [参考公式]',
      frequency: '按月度跟踪监控',
      targetBenchmark: '≥ 95% [推荐行业基准]',
      businessImpact: '保障机构稳定的现金流，防范讲师课酬与校区租金支付风险。'
    }
  ],
  threeStageRoadmap: [
    {
      phase: '阶段一（第 1 - 3 周）',
      title: '招生漏斗梳理与多渠道线索统一归集',
      timeline: '第 1 周 - 第 3 周',
      focus: '打通各类广告投放表单并汇聚到统一的 CRM 平台，确立顾问分流机制。',
      deliverables: [
        '通过标准 Webhook 对接落地页与新媒体咨询入口',
        '搭建阶段划分明确的学员招生转化漏斗',
        '配置自动化确认短信与预约跟进模板'
      ]
    },
    {
      phase: '阶段二（第 4 - 7 周）',
      title: '教务班级排课看板与分期收费台账配置',
      timeline: '第 4 周 - 第 7 周',
      focus: '上线排课调度看板，实现出勤考勤在线打卡与阶段性学费自动催缴。',
      deliverables: [
        '教室、讲师与班级三维一体的排课管理大屏',
        '分期学费到期自动提醒与状态对账机制',
        '按科目分类权限管控的数字化教学课件库'
      ]
    },
    {
      phase: '阶段三（第 8 - 12 周）',
      title: 'AI 测评推荐辅助与招生人效 BI 看板上线',
      timeline: '第 8 周 - 第 12 周',
      focus: '启用 AI 学员画像与推荐建议模型，上线单客获客成本与班级满班率大屏。',
      deliverables: [
        'AI 辅助分析学员诉求并智能生成选班推荐方案',
        '招生综合获客成本（CAC）与顾问转化效能 BI 仪表盘',
        '移交教务管理部与招生团队的标准作业流程（SOP）'
      ]
    }
  ]
};
