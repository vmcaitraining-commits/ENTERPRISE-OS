import { IndustryDetailedConfig } from '../../../../data/industryDetailedData';

export const trade: IndustryDetailedConfig = {
  slug: 'trade',
  name: '商贸与全渠道零售',
  tagline: '聚合全渠道订单、精细化多仓库存联动并实现老客精准复购培育',
  sectorCode: 'IND-TRD-01',
  heroProblemSummary: '零售与商贸企业常困扰于客户数据被割裂在多个渠道（线下门店、官网、电商平台、社交私域）。订单短时间集中爆发导致库存更新不同步，造成超卖缺货、发货延误以及老客关怀严重脱节。',
  operatingSnapshot: {
    dailyVolume: '300 - 3,000 单/日 [模拟业务规模]',
    primaryChannels: '线下实体门店、品牌官网、主流电商平台、社交私域群',
    keyConstraint: '多仓实时库存动态联动或与企业现有 WMS/ERP 系统无缝对接',
    complianceNote: '遵循逐笔开具电子发票规范，严格保障消费者个人隐私安全'
  },
  dailyOperation: [
    {
      time: '07:30',
      title: '全渠道隔夜订单聚合与校验接入',
      actor: '仓储物流主管 & 在线客服组长',
      desc: '通过标准 API 接口将来自电商平台、品牌官网及客服对话中的隔夜新增订单自动汇总至中央调度控制台。',
      systemAction: '系统应用场景：自动配置并预锁各渠道可用安全库存，防止前台发生超卖。'
    },
    {
      time: '09:30',
      title: '门店仓储库存动态同步与发货点智能分配',
      actor: '仓储物流调度中心',
      desc: '结合收件地址与各前置仓实际库存分布，智能推荐最优就近发货网点，缩短整体履约配送链路。',
      systemAction: '标准作业演示：按 SKU 聚合生成标准拣货波次清单（Pick-list），指导库管快速出货。'
    },
    {
      time: '14:00',
      title: '第三方物流承运商交接与运单号回传',
      actor: '打包组员工 & 3PL 快递揽收员',
      desc: '扫码核对打包包裹，打印交接清单并批量流转订单状态为“配送中”。',
      systemAction: '标准作业演示：通过对接的短信/公众号接口自动向买家推送运单号及物流轨迹提醒。'
    },
    {
      time: '17:30',
      title: '货到付款（COD）状态对账与收入入账确认',
      actor: '销售会计',
      desc: '与物流承运商系统核对今日妥投签收、拒收退回及代收货款流水明细。',
      systemAction: '系统应用场景：自动勾稽核对快递账单余额，并实时过账生成 Scope E 财务应收数据。'
    },
    {
      time: '20:30',
      title: '全天客单篮子分析与老客复购培育激活',
      actor: '市场营销 / 客服运维',
      desc: '针对已妥投签收 3 至 7 天的客户，自动触发满意度回访问卷与专属复购优惠礼券。',
      systemAction: 'AI 场景演示：AI 助手在授权范围内分析复购周期，智能圈选高潜复购客户人群包。'
    }
  ],
  journeyVisualFlow: [
    {
      stepNumber: 1,
      title: '全渠道接入',
      subtitle: '线下门店、官网、电商平台、社媒',
      isBottleneck: false,
      systemSupport: '通过 API 与 Webhook 集中汇聚多渠道订单与咨询事件至 Scope A 与 Scope B 控制台。'
    },
    {
      stepNumber: 2,
      title: '订单核验',
      subtitle: '有效性校验 & 预占库存',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：员工在不同平台间手工倒单录入，存在 15-30 分钟时滞导致库存账实不符。',
      systemSupport: '系统能力：自动拆解清洗多渠道订单数据，规范化地址并打上 UTM 来源归因标签。'
    },
    {
      stepNumber: 3,
      title: '多仓库存',
      subtitle: '可用量校验 & 跨仓调拨',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：各分仓间缺乏实时共享可用库存视界，极易接收虚假订单或跨区域盲目调配。',
      systemSupport: '系统能力：灵活配置多仓库存联动规则，或通过标准 API 深度打通第三方 WMS 系统。'
    },
    {
      stepNumber: 4,
      title: '发货配送',
      subtitle: '3PL 交接 & COD 状态追踪',
      isBottleneck: false,
      systemSupport: '标准流程：自动调用快递平台接口批量打单，实时追踪物流节点与签收状态。'
    },
    {
      stepNumber: 5,
      title: '精准复购',
      subtitle: '老客关怀、会员积分 & 交叉销售',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：成单即失联，无法科学测算消耗周期以适时跟进推荐二次购买。',
      systemSupport: '系统能力：完整沉淀互动时间轴，按商品消耗周期自动激活定时关怀策略。'
    }
  ],
  configuredModules: [
    {
      scope: 'Scope B',
      moduleName: '零售 CRS / CRM & 订单统一管理平台',
      inputData: '买家全景档案、手机号码、历史购买记录、收件地址分布。',
      coreProcess: '建立规范的客户档案主数据，记录每次交易明细并根据消费行为标签化客群。',
      outputData: '集中化的 Customer 360 客户视图及按仓分配的待发货工单清单。'
    },
    {
      scope: 'Scope A',
      moduleName: '企业门户与全渠道留资接单网关',
      inputData: '访问流量、商品浏览足迹、在线预订与领券表单数据。',
      coreProcess: '快速承接线上咨询意向，清洗过滤无效垃圾数据并实时推送到线索流转队列。',
      outputData: '标准化意向潜客流转进入 CRM 转化漏斗，即刻触发销售跟进。'
    },
    {
      scope: 'Scope C',
      moduleName: '营销自动化与精细化老客关怀体系',
      inputData: '所购商品型号、订单履约完成时间、会员累计积分。',
      coreProcess: '配置自动发送感谢信、专属售后使用教程以及智能搭配增购推荐策略。',
      outputData: '按既定 SOP 执行的客户全生命周期培育流。'
    },
    {
      scope: 'Scope J',
      moduleName: '零售商业智能分析与多维看板（BI）',
      inputData: '日度销售总额、各渠道投产比、产品动销排行及退换货比率。',
      coreProcess: '多维直观呈现营收走势、客单价分布与复购转化曲线，赋能管理者敏捷决策。',
      outputData: '供管理层研判经营状况的可视化实时数据驾驶舱。'
    }
  ],
  aiSpecializedDemo: {
    title: 'AI 助手业务模拟：智能关联推荐与安全库存阈值预警',
    problemContext: '[模拟场景] 一位老顾客在官方商城将“高档智能空气炸锅”加入购物车。AI 在授权数据范围内自动推荐关联耗材，并校验前置仓安全库存阈值。',
    inputLabel: '业务输入数据 [模拟展示]：',
    sampleInput: {
      '订单编号': 'ORD-TRD-8821 [模拟数据]',
      '主购商品': '6.5L 不锈钢智能空气炸锅',
      '销售渠道': '品牌官方商城 (Direct)',
      '客户身份': '阮秋庄女士（VIP 老客户 - 累计购买 2 次）',
      '当前前置仓库存': '北京总仓: 14 台 | 成都分仓: 3 台 | 广州分仓: 22 台'
    },
    aiProcessing: 'AI 读取经授权的订单数据与库存配置，比对业务规则库以拟定最优建议方案...',
    aiOutput: {
      badge: 'AI 模拟：销售辅助与库存预警建议',
      summary: 'AI 识别出高转化率关联耗材推荐机会，同时警示成都分仓库存已触碰最低安全警戒线。',
      recommendations: [
        '加购推荐：空气炸锅专用烤盘纸 100 张套餐 (+20元) — 当前备货充足（340 套）。',
        '延保服务建议：24 个月性能换新保障服务 (+50元) — 针对优质老客户推荐转化率极高。'
      ],
      riskLevel: 'LOW',
      actionItems: [
        '建议线上客服在确认订单界面提供一键组合加购快捷按钮。',
        '建议仓储调度员生成由总仓向成都分仓调拨 10 台设备的备货审批流。'
      ]
    },
    disclaimer: '本模拟场景基于沙箱数据推演。AI 仅在被授予的权限范围内进行分析和提出建议；最终所有商业决定均由相关业务负责人亲自核准。'
  },
  trackedKpis: [
    {
      metric: '因缺货导致的订单取消率（Out-of-Stock Cancellation）',
      formula: '(因缺货取消的订单量 / 总接收订单量) × 100% [参考公式]',
      frequency: '每日核算追踪',
      targetBenchmark: '< 1.0% [推荐行业基准]',
      businessImpact: '减少因库存断档造成的业绩损失，提升消费者品牌信任度。'
    },
    {
      metric: '老客复购率（Repeat Purchase Rate）',
      formula: '(累计购买 ≥ 2 次的客户数 / 累计客户总数) × 100% [参考公式]',
      frequency: '按月度综合评估',
      targetBenchmark: '25% - 40% [推荐行业基准]',
      businessImpact: '提升客户终身价值（LTV），大幅摊薄整体新客获取成本。'
    },
    {
      metric: '订单平均履约出库时长（Order Lead Time）',
      formula: '从客户完成支付下单到包裹扫码交付快递承运商的时长 [参考度量]',
      frequency: '按班次统计',
      targetBenchmark: '< 4 个工作小时 [推荐行业基准]',
      businessImpact: '大幅缩短客户收货等待周期，优化购物整体满意度。'
    }
  ],
  threeStageRoadmap: [
    {
      phase: '阶段一（第 1 - 3 周）',
      title: '商品主数据梳理与全渠道订单聚合配置',
      timeline: '第 1 周 - 第 3 周',
      focus: '统一规范商品档案、条形码 SKU 体系，并将多渠道订单数据汇流至中央控制台。',
      deliverables: [
        '标准化商品目录库与多层级价格策略表',
        '配置多渠道接单网关 API 接口（官网、电商、私域客服）',
        '制定标准化电子拣货单与出库交接单据规范'
      ]
    },
    {
      phase: '阶段二（第 4 - 7 周）',
      title: '库存多仓规则配置与发货对账控制流',
      timeline: '第 4 周 - 第 7 周',
      focus: '设立分仓安全库存预警机制，打通快递物流轨迹回传与 COD 回款对账流程。',
      deliverables: [
        '按物理仓库独立配置的安全库存上下限警戒规则',
        '周期性物流承运商对账与发票核对标准化流程',
        '严格基于仓储、客服与销售岗位的细粒度权限配置'
      ]
    },
    {
      phase: '阶段三（第 8 - 12 周）',
      title: '老客自动化关怀激活与商业智能分析看板上线',
      timeline: '第 8 周 - 第 12 周',
      focus: '落地基于购买周期的自动化培育策略，上线高管与业务线 BI 分析驾驶舱。',
      deliverables: [
        '自动触发的售后致谢、使用关怀与 CSAT 满意度调研规则',
        '按商品类别与销售渠道穿透展示的零售 BI 数据大屏',
        '移交企业全体业务人员的标准作业程序（SOP）实操手册'
      ]
    }
  ]
};
