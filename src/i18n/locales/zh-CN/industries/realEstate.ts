import { IndustryDetailedConfig } from '../../../../data/industryDetailedData';

export const realEstate: IndustryDetailedConfig = {
  slug: 'real-estate',
  name: '房地产与物业项目管理',
  tagline: '房源销控实时锁定、客源归属防撞保护与认购定金合规闭环',
  sectorCode: 'IND-RES-04',
  heroProblemSummary: '房产经纪机构与代理分销商长期饱受多名顾问为同一客户争抢归属权的困扰。楼盘房源（公寓、地块）销控表通过 Excel 手工更新缓慢，极易引发两名置业顾问同时向不同客户推销甚至锁认同一套房源的尴尬事故（撞单/飞单），严重损害企业信誉。',
  operatingSnapshot: {
    dailyVolume: '在售房源盘中包含数百至数千套单元 [模拟业务规模]',
    primaryChannels: '开盘认筹盛会、展厅直访客户、全民经纪人渠道、项目推广官网',
    keyConstraint: '多层级数据加密防泄密与客源撞单防抢排他规则机制',
    complianceNote: '严格遵循认购定金协议合规流程，全过程留存系统审计轨迹（Audit Trail）'
  },
  dailyOperation: [
    {
      time: '08:00',
      title: '房源销控大屏与过期锁房状态实时释放',
      actor: '销控中心管理员（Admin）',
      desc: '审查已超过保留有效期的暂锁房源，对未及时缴纳定金的单元重置为“待售”可用状态。',
      systemAction: '标准作业演示：在 Scope B 销控平面图上以颜色动态更新楼栋/楼层单元最新状态。'
    },
    {
      time: '10:00',
      title: '意向潜客源头报备登记与归属权锁定',
      actor: '置业顾问（Broker）',
      desc: '录入新客户联络方式与意向房型，系统自动设置归属保护期以防止内部抢单。',
      systemAction: '系统应用场景：自动比对手机号查重，校验该客户此前是否在保护期内被其他顾问报备。'
    },
    {
      time: '11:30',
      title: '房源多维匹配筛选与首付月供测算',
      actor: '置业顾问 & 购房客户',
      desc: '按预算总价、朝向、楼层及付款政策秒级筛选房源库，为客户打印专业置业计划书。',
      systemAction: '标准作业演示：一键导出包含首付比例、契税与月供还款参考计划的正式测算单。'
    },
    {
      time: '14:30',
      title: '限时认购锁房（Lock 房）指令提交',
      actor: '销售主管 & 销控台',
      desc: '客户选定心仪房源后，顾问在系统发起限时锁房申请，锁定 60 分钟以便完成定金交纳。',
      systemAction: '标准作业演示：房源状态秒级转为“已锁房”，对全渠道销售大屏即刻更新并广播。'
    },
    {
      time: '17:00',
      title: '定金到账审核确认与电子认购协议拟定',
      actor: '财务会计 & 法务合规审核员',
      desc: '核验定金银行入账流水，开具电子收据并生成标准商品房认购协议书供客户签章。',
      systemAction: '系统应用场景：房源正式标记为“已认购”，系统自动根据点位比例核算置业顾问提成。'
    }
  ],
  journeyVisualFlow: [
    {
      stepNumber: 1,
      title: '项目房源',
      subtitle: '平面户型图 & 单元实时销控',
      isBottleneck: false,
      systemSupport: '系统能力：统一集中化销控管理，以红绿黄蓝清晰标示待售、锁房、已订与签约状态。'
    },
    {
      stepNumber: 2,
      title: '诉求匹配',
      subtitle: '总价预算、朝向 & 户型筛选',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：顾问在数百个离线表格中大海捞针，面对高意向客户错失最佳推荐窗口。',
      systemSupport: '系统能力：支持复合多维度房源检索器，秒级自动测算首付与按揭现金流。'
    },
    {
      stepNumber: 3,
      title: '客源报备',
      subtitle: '号码查重 & 归属期保护',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：缺乏透明锁客机制，多名顾问为同一组客户争执推诿，引发内耗。',
      systemSupport: '系统能力：自动手机号隐秘查重，设置专属保护周期并到期自动公开掉入公海。'
    },
    {
      stepNumber: 4,
      title: '认购签约',
      subtitle: '限时锁房、收银核账 & 协议',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：房源已收取定金但未即时同步，造成其他团队二次开单的一房两卖官司。',
      systemSupport: '系统能力：高并发限时锁房互斥机制，完整留存每次状态变更的电子时间戳。'
    }
  ],
  configuredModules: [
    {
      scope: 'Scope B',
      moduleName: '房产 CRM 销售漏斗与楼盘销控总览',
      inputData: '项目分期、楼栋、单元编号、参考备案总价、折扣权限、购房人画像。',
      coreProcess: '图形化管理项目房源销控看板，遵循严密机制保障客源专职跟进归属。',
      outputData: '实时透明的阳光销控平层大屏，杜绝撞单并精确统计顾问团队业绩。'
    },
    {
      scope: 'Scope A',
      moduleName: '项目推广微官网与看房预约通道',
      inputData: '楼盘区位沙盘图、VR 样板间航拍、开盘价目表下载表单。',
      coreProcess: '全网广告投放流量集中接入，按案场轮岗排班规则秒级派发至接待顾问。',
      outputData: '意向潜客全量留痕沉淀进入 CRM，实现第一时间电话回访邀约。'
    },
    {
      scope: 'Scope K',
      moduleName: '安全审计日志与敏感数据加密鉴权',
      inputData: '客户真实手机号调取记录、大批量名单导出指令、价格权限改动。',
      coreProcess: '全程加密客户真实通讯录，对异常高频导出与查看操作触发高危告警。',
      outputData: '严格的信息安全合规审计报告，切实保护高净值业主私密信息。'
    },
    {
      scope: 'Scope J',
      moduleName: '楼盘去化周期与案场去化分析大屏',
      inputData: '已签约套数、热销主力户型分布、各营销战区去化进度。',
      coreProcess: '多维综合呈现楼盘去化速度、客群支付能力分布与营销转化效率。',
      outputData: '赋能房企高管与操盘手实时掌控推盘节奏，动态调整营销策略。'
    }
  ],
  aiSpecializedDemo: {
    title: 'AI 助手业务模拟：意向房源智能匹配与客源查重校验',
    problemContext: '[模拟场景] 置业顾问接待了一位手握 120 万首付预算、寻求两房投资客群。AI 助手读取授权数据，瞬间完成客源防撞单校验并推荐 2 套在售高匹配度房源。',
    inputLabel: '客户置业需求输入 [模拟展示]：',
    sampleInput: {
      '客户手机号码': '138****8829 [模拟脱敏号码]',
      '置业核心目的': '长期出租获取租金现金流',
      '自有流动资金': '120 万 - 150 万元（预期申请商业贷款 50%）',
      '意向户型规格': '两室一厅 | 东南朝向阳台 | 承诺年内正式交付现房',
      '报备接待顾问': '李文男（第二销售案场二组）'
    },
    aiProcessing: 'AI 助手在授权数据库内核查该号码在近 90 天内的跟进记录，并智能比对当前在售销控库...',
    aiOutput: {
      badge: 'AI 模拟：置业方案匹配与合规报备建议',
      summary: 'AI 校验确认该号码在过去 90 天内无有效跟进人，报备生效。推荐 2 套匹配度极高的高性价比房源。',
      recommendations: [
        '匹配房源 1：蓝宝石楼栋 A-1408 — 68㎡ — 总价 280 万（实付首付约 115 万）— 瞰中心园景。',
        '匹配房源 2：钻石楼栋 B-0902 — 65㎡ — 总价 265 万（实付首付约 105 万）— 享限时 96 折。'
      ],
      riskLevel: 'LOW',
      actionItems: [
        '建议系统正式确立李文男顾问对该客户的 15 天专属带看保护期。',
        '建议为顾问自动生成包含首付月供与预计租金回报率的置业方案 PDF。'
      ]
    },
    disclaimer: '本推演基于模拟业务数据。AI 仅在企业系统配置的业务规则下提供辅助匹配，所有合同认购与最终折扣均由案场销售总监亲自审批。'
  },
  trackedKpis: [
    {
      metric: '内部客源撞单冲突率（Duplicate Lead Conflict）',
      formula: '(发生的客源争议仲裁件数 / 案场接待客户总量) × 100% [参考公式]',
      frequency: '每日持续监控',
      targetBenchmark: '0% [依靠系统锁客机制达成目标]',
      businessImpact: '消除团队争吵恶性内耗，构建透明、公平、积极的销售战狼文化。'
    },
    {
      metric: '限时锁房全网状态同步耗时（Lock-in Speed）',
      formula: '从顾问在手机提交锁房申请到各端大屏标红变色的耗时 [参考度量]',
      frequency: '逐笔实时统计',
      targetBenchmark: '< 60 秒 [推荐行业基准]',
      businessImpact: '杜绝开盘抢房高峰期发生一房双卖、撞单签约的恶性公关危机。'
    },
    {
      metric: '意向认购转正式网签转化率（Conversion Rate）',
      formula: '(成功网签备案合同套数 / 缴纳定金锁定总套数) × 100% [参考公式]',
      frequency: '按推盘批次核算',
      targetBenchmark: '≥ 75% [推荐行业基准]',
      businessImpact: '科学评估案场推客质量与客户真实购买意向的成色。'
    }
  ],
  threeStageRoadmap: [
    {
      phase: '阶段一（第 1 - 3 周）',
      title: '房源盘点数字化与客源防撞单机制部署',
      timeline: '第 1 周 - 第 3 周',
      focus: '将楼盘全部户型销控数据搬迁至 Scope B 平台，确立手机号防抢保护规则。',
      deliverables: [
        '按楼栋单元渲染的可视化色块销控平面图',
        '基于客户手机号的排他报备与失效流转规则配置',
        '各营销案场经理与置业顾问的多角色权限划分'
      ]
    },
    {
      phase: '阶段二（第 4 - 7 周）',
      title: '认购锁房流程固化与外部展示门户联动',
      timeline: '第 4 周 - 第 7 周',
      focus: '配置定金到账审核流与认购协议自动打印，实现项目官网意向线索秒级接入。',
      deliverables: [
        '具备限时倒计时自动释放功能的电子锁房审批流',
        '符合法务规范的商品房认购书与测算单模板',
        '全方位记录敏感客户电话查阅的安全审计日志'
      ]
    },
    {
      phase: '阶段三（第 8 - 12 周）',
      title: 'AI 房源匹配激活与案场去化驾驶舱上线',
      timeline: '第 8 周 - 第 12 周',
      focus: '应用 AI 辅助根据预算智能推荐房源，上线楼盘去化速度与顾问佣金提成大屏。',
      deliverables: [
        'AI 客户偏好识别与最优房源组合推荐方案',
        '按面积段、朝向去化深度分析的 BI 决策看板',
        '房产代理机构案场标准化跟进 SOP 实操手册'
      ]
    }
  ]
};
