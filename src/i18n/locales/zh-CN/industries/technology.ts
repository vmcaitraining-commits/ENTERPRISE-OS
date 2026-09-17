import { IndustryDetailedConfig } from '../../../../data/industryDetailedData';

export const technology: IndustryDetailedConfig = {
  slug: 'technology',
  name: '科技软件与数字化交付',
  tagline: '敏捷研发交付闭环、技术规范知识中枢与受控客户运维保障',
  sectorCode: 'IND-TEC-08',
  heroProblemSummary: '高科技企业、SaaS 软件商及数字化服务机构，常常陷入工具碎片化泥潭（Slack、Jira、Trello、网盘、邮箱互不相通）。客户数据散落各处，技术支持人员无法查阅客户合约背景；接口 API 与技术规范缺乏同步维护，导致新员工上手检索耗时过长、工单响应延误严重。',
  operatingSnapshot: {
    dailyVolume: '处理数百起技术支持工单、新需求评审与版本迭代研发周期 [模拟业务规模]',
    primaryChannels: '客户专属技术支持工单网关、内部敏捷技术研讨通道、API/SOP 规范知识库',
    keyConstraint: '严密监控故障响应时限（SLA）并严格执行受控数据安全分级鉴权',
    complianceNote: '严格遵循企业信息安全准则，全方位保护用户数据隐私并规范发布版本'
  },
  dailyOperation: [
    {
      time: '09:00',
      title: '晨间站会（Standup）与高危紧急工单审查',
      actor: '技术总架构师（Tech Lead） & 运维支持团队',
      desc: '审查夜间监控告警与线上突发故障（Incident），依据 SLA 等级严密分级。',
      systemAction: '标准作业演示：将 P1/P2 故障秒级路由指派给值班值守工程师并启动 SLA 倒计时。'
    },
    {
      time: '10:30',
      title: '客户定制诉求梳理并归入产品需求池（Product Backlog）',
      actor: '产品经理（Product Manager）',
      desc: '甄别提炼 B2B 核心客户反馈，综合评估优先级并排入下一个敏捷迭代冲刺计划。',
      systemAction: '标准作业演示：打通 CRM 客户档案与 Scope G 研发看板工单的任务关联链条。'
    },
    {
      time: '14:00',
      title: '技术文档检索与智能支持方案生成',
      actor: '解决方案工程师（Solutions Engineer）',
      desc: '调取 AI 知识库与企业内部技术 Wiki，秒级查询 API 语法、报错代码与内部架构规范。',
      systemAction: '系统应用场景：AI 助手精准匹配对应技术段落并附带原始权威文档跳转链接供复核。'
    },
    {
      time: '16:30',
      title: '功能测试验收通过与发版日志（Release Note）发布',
      actor: '测试团队（QA） & 技术文档专家',
      desc: '回归验证新上线的补丁或功能模块，面向企业客户编撰正式版本升级更新通知。',
      systemAction: '标准作业演示：向使用相关功能模块的企业订阅用户精准推送升级公告。'
    },
    {
      time: '18:00',
      title: '全天 SLA 服务达成率核算与疑难案例复盘',
      actor: '客户成功总监 & 技术运维主管',
      desc: '汇总当日工单解决效率，将典型疑难案例沉淀至排错指引（Troubleshooting Guide）中。',
      systemAction: '标准作业演示：将经验教训自动归档进技术沉淀库，赋能全员知识共享。'
    }
  ],
  journeyVisualFlow: [
    {
      stepNumber: 1,
      title: '工单接入',
      subtitle: '在线支持门户、邮件 & 企微',
      isBottleneck: false,
      systemSupport: '标准流程：全渠道集中接入客户技术支持诉求，按紧急程度智能标记优先级。'
    },
    {
      stepNumber: 2,
      title: '需求管理',
      subtitle: '缺陷分类、需求池 & 敏捷排期',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：客户反馈沉没在无数内部聊天群中，无人追踪跟进导致客户严重不满。',
      systemSupport: '系统能力：将工单无缝转化为需求池（Backlog）任务卡片，紧密关联签约客户画像。'
    },
    {
      stepNumber: 3,
      title: '版本发布',
      subtitle: '持续测试、打包 & 灰度上线',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：新版上线后未及时同步商务与客服，面对客户询问支支吾吾陷入被动。',
      systemSupport: '系统能力：发版审批流与变更日志（Changelog）全自动广播通知机制。'
    },
    {
      stepNumber: 4,
      title: '知识溯源',
      subtitle: '语义检索、技术 Wiki & 智能诊断',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：支持人员解答口径互相打架，旧版 API 与过期 SOP 误导客户。',
      systemSupport: '系统能力：集中化 Wiki 结合可溯源引用的智能语义检索，确保技术回答权威统一。'
    }
  ],
  configuredModules: [
    {
      scope: 'Scope K',
      moduleName: '开放 API 与 Webhook 跨系统互联总线',
      inputData: '第三方外部系统事件载荷、安全认证 Token、接口调用审计日志。',
      coreProcess: '通过标准 API/Webhook 稳固对接上下游异构系统，严格审计接口调用权限。',
      outputData: '在各业务系统间保持高可靠、实时同步的自动化数据流管道。'
    },
    {
      scope: 'Scope H',
      moduleName: '企业级技术 Wiki 与 API 规范知识中心',
      inputData: '系统架构蓝图、开放平台接口指南、排错故障手册、信息安全防范守则。',
      coreProcess: '构建结构化技术知识中枢，支持自然语言检索与多版本变更对照。',
      outputData: '工程师与技术支持人员能够毫秒级定位最权威技术标准与规范。'
    },
    {
      scope: 'Scope D',
      moduleName: 'SLA 工单服务网关与客户成功协同体系',
      inputData: '客户提交的工单内容、故障等级（P1至P4）、合同约定 SLA 时效。',
      coreProcess: '按工程师专业擅长领域智能派工，超时未处理自动升级通知管理层。',
      outputData: '赋予客户极具安全感、透明高效的尊崇技术运维保障体验。'
    },
    {
      scope: 'Scope J',
      moduleName: '数字服务健康度与净收入留存率（NRR）看板',
      inputData: '企业活跃租户数、SLA 达标履约率、月度经常性收入（MRR）。',
      coreProcess: '全景综合分析客户净收入留存率（Net Revenue Retention）与流失预警指标。',
      outputData: '高层经营驾驶舱，为科技企业持续扩大订阅续约规模提供数据导航。'
    }
  ],
  aiSpecializedDemo: {
    title: 'AI 助手业务模拟：技术工单智能分级与 RAG 知识库精准溯源',
    problemContext: '[模拟场景] 核心企业客户提交工单反馈：“在调用订单同步接口时系统频繁报错 HTTP 429 Too Many Requests”。AI 助手调取工单与授权 API 规范，给出故障定性与权威文档索引。',
    inputLabel: '企业客户提交的报错工单文本 [模拟展示]：',
    sampleInput: {
      '报障企业': 'Logix 数字化平台（合同方案: 旗舰企业版 SaaS） [模拟数据]',
      '故障现象': '14:00 运行 5,000 单批量同步脚本时频发 HTTP 429 报错，同步作业中断。',
      '运行环境': '生产环境 API 网关服务集群（API Gateway v2.4.1）',
      '提交人员': '阮黄明 - 战略生态合作技术总监'
    },
    aiProcessing: 'AI 读取错误日志并调取 Scope H 中经授权的 API Rate Limit 规范文档比对...',
    aiOutput: {
      badge: 'AI 模拟：API 频次限流（Rate Limit）故障诊断',
      summary: '旗舰版账户配置的默认接口调用阈值为 120 次/分钟。客户脚本采用多线程并发调用，瞬时流量击穿配额。',
      recommendations: [
        '技术文档索引定位：[Docs/API/V2-Rate-Limiting.md#4.2章节] — 采用指数退避重试（Exponential Backoff）规范。',
        '最佳实践解决方案：建议向客户推荐使用批量提交端点（/api/v2/orders/batch），单次最高可聚合提交 500 单。'
      ],
      riskLevel: 'MEDIUM',
      actionItems: [
        '自动在工单回复区生成带文档链接的标准建议草稿，供工程师审核一键发送。',
        '建议值班工程师临时为该客户申请 24 小时大促数据割接弹性配额。'
      ]
    },
    disclaimer: '本推演基于沙箱模拟环境展开。AI 仅在受控知识库中辅助索引权威技术段落并提出排错建议，具体技术处理由一线工程师确认执行。'
  },
  trackedKpis: [
    {
      metric: '首次响应平均耗时（First Response Time - FRT）',
      formula: '客户提交工单到值班工程师首次进行专业技术应答的历时 [参考度量]',
      frequency: '全天候实时监控',
      targetBenchmark: '< 15 分钟（针对 P1/P2 高危工单） [推荐行业基准]',
      businessImpact: '在关键业务中断时刻迅速稳住客户阵脚，筑牢企业级服务信任护城河。'
    },
    {
      metric: 'SLA 服务水平协议履约达成率（Resolution Compliance）',
      formula: '(在 SLA 承诺期限内闭环解决的工单数 / 接收工单总数) × 100% [参考公式]',
      frequency: '按周度复盘考核',
      targetBenchmark: '≥ 98.0% [推荐行业基准]',
      businessImpact: '严格履行高规格 SLA 商务契约，坚决防范违约索赔与声誉受损。'
    },
    {
      metric: '净收入留存率（Net Revenue Retention - NRR）',
      formula: '((期初 MRR + 扩容增购增量 - 降级与流失额) / 期初 MRR) × 100% [参考公式]',
      frequency: '按季度综合统计',
      targetBenchmark: '≥ 110% [推荐行业基准]',
      businessImpact: '直接衡量企业产品黏性与客户老客拓增扩张能力的终极晴雨表。'
    }
  ],
  threeStageRoadmap: [
    {
      phase: '阶段一（第 1 - 3 周）',
      title: '工单服务台搭建与 SLA 响应时限固化',
      timeline: '第 1 周 - 第 3 周',
      focus: '统一技术支持服务入口，依据合同级别定义明确的 SLA 响应与解决时限。',
      deliverables: [
        '企业级 B2B 客户支持工单服务台网关',
        '分级 SLA 响应时效机制与超时自动上报告警规则',
        '高危紧急故障技术专家快速派单流转机制'
      ]
    },
    {
      phase: '阶段二（第 4 - 7 周）',
      title: '技术 Wiki 知识库建设与需求池敏捷贯通',
      timeline: '第 4 周 - 第 7 周',
      focus: '搭建内部结构化技术知识中心，将工单反馈无缝链接入研发需求看板。',
      deliverables: [
        '统一版本控制的企业级内部 Wiki 与标准排错手册',
        '规范化软件版本发版公告与变更日志管理体系',
        '开放标准 API 与 Webhook 总线跨系统连接'
      ]
    },
    {
      phase: '阶段三（第 8 - 12 周）',
      title: 'AI 检索与技术诊断激活及经营 BI 看板',
      timeline: '第 8 周 - 第 12 周',
      focus: '启用具备权威来源引用的 AI 智能技术诊断助手，上线包含 NRR 与 SLA 的经营大屏。',
      deliverables: [
        '支持自然语言语义检索与精准文档定位的 AI 助手',
        '覆盖 SLA 达标率与订阅 ARR/MRR 走势的 BI 决策看板',
        '科技团队数字化精细化运营标准作业规程（SOP）'
      ]
    }
  ]
};
