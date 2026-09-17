import { IndustryDetailedConfig } from '../../../../data/industryDetailedData';

export const distribution: IndustryDetailedConfig = {
  slug: 'distribution',
  name: '仓储分销与多级供应链',
  tagline: '经销网络多级管控、分级阶梯价格锁死与账期信贷超额锁单',
  sectorCode: 'IND-DIS-06',
  heroProblemSummary: '快消品、五金机电、工业耗材等批发分销企业，常深陷于各级代理商（一级批发商、二级分销商、区域独家代理）错综复杂的价盘与返点政策中。业务员通过微信或电话口头报单极易报错价格；库管员面对严重超出授信额度与逾期拖欠货款的经销商依旧照常发货，给企业带来惨重的资金坏账坏盘风险。',
  operatingSnapshot: {
    dailyVolume: '统筹覆盖 50 至 1,000+ 家下游经销商与加盟网点 [模拟业务规模]',
    primaryChannels: '周期性采购补货订单、区域走访业务员（车销/访销）、B2B 经销商专区',
    keyConstraint: '严控铺底周转账期授信红线，超限触发硬性拦截禁止发货',
    complianceNote: '严格遵循特许分销协议，规范核算阶梯阶梯返利并开展定期账目对账'
  },
  dailyOperation: [
    {
      time: '08:00',
      title: '下游经销商周期性补货订单集中接收',
      actor: '区域驻点业务员 / 销售内勤主管',
      desc: '汇总各级经销商通过在线订货端或业务员手持终端提交的当日补货单据。',
      systemAction: '标准作业演示：系统根据经销商客户等级（金牌/银牌），自动匹配对应基准折扣价盘。'
    },
    {
      time: '09:30',
      title: '应收信贷额度（Credit Limit）与逾期账龄审查',
      actor: '渠道信用风控会计',
      desc: '审查经销商当前累计应收账款，对比合同签署的授信总额度与账期逾期天数。',
      systemAction: '系统应用场景：自动识别超限超期客户，强制触发锁单警告并冻结出库单打印。'
    },
    {
      time: '11:30',
      title: '跨部门出库审批工作流（Workflow Approval）',
      actor: '销售大区总监 / 财务负责人',
      desc: '审核由于促销提货或特殊担保需要申请账期特批的例外紧急出货流程。',
      systemAction: '标准作业演示：将特批理由与电子签名写入审计日志，核准后即刻释放出库指令。'
    },
    {
      time: '14:30',
      title: '车辆配载调度与按片区物流路线干线装车',
      actor: '物流调度主任 & 仓库总管',
      desc: '按地理送货干线（如省内干线、同城配送线）拼车装货，打印随车送货出库联。',
      systemAction: '标准作业演示：流转出库状态为“在途运输”，待收货人核验签收回传电子回单。'
    },
    {
      time: '17:30',
      title: '铺底账期动态对账与阶梯销量返利核算',
      actor: '分销财务会计',
      desc: '核实各经销商今日银行汇款对账流水，按发票逐笔核销历史欠款。',
      systemAction: '系统应用场景：自动累计季度出货量，动态计算阶梯返利金额并过账生成折让台账。'
    }
  ],
  journeyVisualFlow: [
    {
      stepNumber: 1,
      title: '经销网络',
      subtitle: '一级/二级划分 & 走访路线',
      isBottleneck: false,
      systemSupport: '系统能力：经销商 360° 全景视图：包含合同有效期、授信额度、订货历史与累计回款。'
    },
    {
      stepNumber: 2,
      title: '分级价盘',
      subtitle: '严格绑定渠道等级折扣',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：业务员随意口头承诺低价引发渠道倒货窜货，极大吞噬渠道利润。',
      systemSupport: '系统能力：多层级阶梯基准价格表锁死，无高管电子特批禁止私自修改单价。'
    },
    {
      stepNumber: 3,
      title: '信用授信',
      subtitle: '超额拦截 & 逾期账龄报警',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：严重超期欠款数月未结清仍盲目给货，导致坏账雪球越滚越大。',
      systemSupport: '系统能力：严格的应收账款控制规则（Credit Limit Rule），超额自动断单预警。'
    },
    {
      stepNumber: 4,
      title: '出库履约',
      subtitle: '销售-财务-仓储无缝联动',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：纸质审批跨部门盖章耗时一整天，货运卡车滞留在库区延误发运。',
      systemSupport: '系统能力：移动端在线秒级审批流，财务放行后仓管工作台即时亮绿灯出货。'
    }
  ],
  configuredModules: [
    {
      scope: 'Scope B',
      moduleName: '分销渠道 CRM 与 B2B 订单协同平台',
      inputData: '经销商档案、加盟等级（金/银/铜）、核定信用额度、收货网点清单。',
      coreProcess: '自动化计算分销商阶梯返利折让，留存经销网络全量补货订单历史。',
      outputData: '规范标准的 B2B 订货单，品类、价格与付款账期均严密合规。'
    },
    {
      scope: 'Scope E',
      moduleName: '应收信贷风控与硬性锁单管控中枢',
      inputData: '出库销售开票金额、银行回款账单、约定还款期限（30天/45天）。',
      coreProcess: '逐笔交易更新账户欠款余额，对违约逾期的客户实行自动断单拦截。',
      outputData: '有效保障企业现金流安全，彻底杜绝坏账呆账无序蔓延。'
    },
    {
      scope: 'Scope D',
      moduleName: '分销商售后服务与破损换货管理',
      inputData: '运输途中外包装破损索赔、批次质量异议、市场物料支援申请。',
      coreProcess: '统一工单通道快速受理经销商售后诉求，厘清承运商与工厂责任界限。',
      outputData: '保持平等、透明且长久互信的战略渠道伙伴合作关系。'
    },
    {
      scope: 'Scope J',
      moduleName: '销售网络多维渗透与渠道动销 BI 看板',
      inputData: '分区域销售额、各产品线进销存动销比、经销商订货活跃频次。',
      coreProcess: '自动预警异常订货下滑与动销停滞网点，指导区域业务员开展针对性帮扶。',
      outputData: '渠道占有率全景大屏，支撑管理层动态调整大区销售指标与策略。'
    }
  ],
  aiSpecializedDemo: {
    title: 'AI 助手业务模拟：经销商授信额度风险评估与折扣合规校验',
    problemContext: '[模拟场景] 华南一级分销商“明发商贸”提交了一笔 2.5 亿元新进货单。该客户当前已有应收欠款 4.2 亿元（核定最高信贷上限：5.0 亿元）。本单若直接释放将导致欠款突破上限达 1.7 亿元。AI 助手读取授权数据进行穿透风险研判。',
    inputLabel: '经销商进货申请与历史授信数据 [模拟展示]：',
    sampleInput: {
      '经销商名称': '明发商贸有限公司（等级: 金牌分销商） [模拟数据]',
      '新增申请金额': '250,000,000 元（享受金牌等级 18% 基准折让）',
      '当前未还欠款': '420,000,000 元（核准授信上限: 500,000,000 元）',
      '历史欠款账龄': '包含一笔 8,500 万元发票款已发生逾期 4 天',
      '合作信用评级': '已连续合作 3 年，年度累计出货额突破 38 亿元'
    },
    aiProcessing: 'AI 助手调取风控授信规则库，综合评估该客户全周期还款表现与坏账敞口...',
    aiOutput: {
      badge: 'AI 模拟：授信溢出警示与风控应对方案',
      summary: '本单通过将使总欠款激增至 6.7 亿元（超出授信额度 1.7 亿元），且存在逾期账目。AI 建议暂时冻结直接出库权限。',
      recommendations: [
        '方案建议 1：要求该经销商在今日付清已逾期的 8,500 万元，并预付 8,500 万元现款后再行出库。',
        '方案建议 2：由大区总经理签署 7 天紧急临时授信特批担保函，走受控例外放行流。'
      ],
      riskLevel: 'HIGH',
      actionItems: [
        '建议财务专员一键生成对账单推送至明发商贸财务总监微信。',
        '在仓库系统将本单出库标签标记为“待风控放行”，暂停打单装车。'
      ]
    },
    disclaimer: '本场景推演基于模拟业务数据展开。AI 仅在企业信贷风控规则框架下进行辅助研判，最终授信额度调整与特批由财务总监亲自签署确认。'
  },
  trackedKpis: [
    {
      metric: '平均应收账款回收天数（Days Sales Outstanding - DSO）',
      formula: '(期末应收账款总额 / 统计期销售赊销总额) × 统计天数 [参考公式]',
      frequency: '按月度统计评估',
      targetBenchmark: '30 - 45 天 [推荐行业基准]',
      businessImpact: '加快资金回笼周转，减轻企业为采购备货支付的银行利息负担。'
    },
    {
      metric: '出库价格与折扣政策执行合规率（Price Compliance）',
      formula: '(严格按核准折扣出货的单据量 / 总出库单据量) × 100% [参考公式]',
      frequency: '持续在线监控',
      targetBenchmark: '100% [依靠系统价盘锁定]',
      businessImpact: '坚决防范业务员私自低价放单与窜货，守住企业健康的利润底线。'
    },
    {
      metric: '优质经销商周期性续单复购留存率（Dealer Retention Rate）',
      formula: '(当期保持正常下单提货的经销商数量 / 有效签约经销商总数) × 100% [参考公式]',
      frequency: '按月度跟踪评估',
      targetBenchmark: '≥ 85% [推荐行业基准]',
      businessImpact: '巩固企业在各个区域零售终端的货架占有率，阻击竞品渗透。'
    }
  ],
  threeStageRoadmap: [
    {
      phase: '阶段一（第 1 - 3 周）',
      title: '渠道主数据梳理与分级价盘体系固化',
      timeline: '第 1 周 - 第 3 周',
      focus: '在 Scope B 中完成经销商档案录入，按等级强制锁定供货折让表。',
      deliverables: [
        '经销商统一主数据台账与层级标签体系',
        '系统级价盘规则锁定，杜绝无授权私自篡改',
        '为走访业务员配置移动端在线查价与开单终端'
      ]
    },
    {
      phase: '阶段二（第 4 - 7 周）',
      title: '授信额度红线设置与多级审批流落地',
      timeline: '第 4 周 - 第 7 周',
      focus: '建立超授信与逾期欠款锁单拦截机制，实现销售、财务与仓储协同审批。',
      deliverables: [
        '信用额度超限与账期逾期自动锁单预警规则',
        '跨部门电子化审批出库流及审计日志留痕',
        '周期性电子对账函模板与差异调整工作流'
      ]
    },
    {
      phase: '阶段三（第 8 - 12 周）',
      title: 'AI 信用风控研判激活与渠道动销看板上线',
      timeline: '第 8 周 - 第 12 周',
      focus: '应用 AI 辅助评估经销商异常订单与违约风险，上线大区渗透率决策看板。',
      deliverables: [
        'AI 授信风控预警与异常订货停滞检测模型',
        '大区出货动销比与 DSO 资金周转 BI 仪表盘',
        '分销体系标准化运营与风控管控制度手册'
      ]
    }
  ]
};
