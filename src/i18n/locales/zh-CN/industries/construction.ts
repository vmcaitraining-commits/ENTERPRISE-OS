import { IndustryDetailedConfig } from '../../../../data/industryDetailedData';

export const construction: IndustryDetailedConfig = {
  slug: 'construction',
  name: '工程总包与施工进度管理',
  tagline: '施工现场甘特里程碑管控、电子施工日志上云与阶段验工计价清算',
  sectorCode: 'IND-CST-07',
  heroProblemSummary: '建筑总包、机电安装与装饰装修工程企业，普遍面临施工现场一线与企业后方总部调度信息断层的割裂痛点。现场施工日志仅靠零散纸质书写且易涂改伪造；工地领料出库缺乏核销容易造成严重偷漏滴漏；关键分部分项隐蔽工程验收单签署迟缓，导致业主工程结算款与分包进度款积压数月无法结算。',
  operatingSnapshot: {
    dailyVolume: '3 至 20 个跨地域异地并行业务在建工程项目 [模拟业务规模]',
    primaryChannels: '数字化移动施工日志、现场隐蔽工程验收相片、监理联合签章记录',
    keyConstraint: '严密比对实际完成工程量与甘特图（Gantt）基准进度的工期偏差',
    complianceNote: '严格遵循国家建筑质量安全规范，全过程留存隐蔽工程影像与竣工档案'
  },
  dailyOperation: [
    {
      time: '06:30',
      title: '班前点名与一线班组安全晨会交底（Toolbox Talk）',
      actor: '项目总工程师（技术总工）/ 专职安全员',
      desc: '点核各劳务分包班组实到工人人数，强调当日高空/临电安全作业红线并下达派工单。',
      systemAction: '标准作业演示：在 Scope G 项目进度大屏中实时登记现场实际出勤用工总数。'
    },
    {
      time: '08:30',
      title: '工程材料进场检验与出厂合格证核对',
      actor: '材料主管工程师 & 工地物资总管',
      desc: '核查钢筋、商品混凝土、电缆等进场物资的送货单据与出厂质量合格证（CO/CQ）。',
      systemAction: '标准作业演示：拍照上传物资进场取样送检凭证，同步更新项目物资台账。'
    },
    {
      time: '11:30',
      title: '上午班次数字化现场施工日志在线填报',
      actor: '施工现场质检工程师',
      desc: '按数字化表单记录当日天气风速、大型设备运行工况及各作业面施工进展。',
      systemAction: '系统应用场景：自动抓取带有时空防伪水印的水印照片并归档入项目电子档案库。'
    },
    {
      time: '15:00',
      title: '隐蔽工程联合验收与监理代表签字确认',
      actor: '项目副经理 & 建设单位驻地监理（TVGS）',
      desc: '在隐蔽浇筑（如钢筋绑扎、吊顶封板）前共同实测标高尺寸、钢筋间距与锚固质量。',
      systemAction: '标准作业演示：在移动终端上完成电子化内部预验与监理签认，沉淀进度款结算证据。'
    },
    {
      time: '17:30',
      title: '全天完成工程量汇总与劳务分包垫资审核',
      actor: '项目经理（PM） & 驻场成本造价员',
      desc: '汇总当日合格完成的实物工程量，审核劳务队伍次日领料申请与预支工程款明细。',
      systemAction: '系统应用场景：自动将阶段进度回传公司总部工程部，实时更新甘特图进度条。'
    }
  ],
  journeyVisualFlow: [
    {
      stepNumber: 1,
      title: '甘特排期',
      subtitle: '清单工程量拆解 & 关键路径',
      isBottleneck: false,
      systemSupport: '系统能力：在 Scope G 中依据清单定额编排项目总工期与关键节点里程碑横道图。'
    },
    {
      stepNumber: 2,
      title: '施工日志',
      subtitle: '现场照片、班组用工 & 气象',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：纸质日志字迹潦草且事后倒签补录，总部管理层完全看不清现场真实工况。',
      systemSupport: '系统能力：移动端数字化日志上报，支持防伪带经纬度时间水印照片与出勤自动汇算。'
    },
    {
      stepNumber: 3,
      title: '节点验收',
      subtitle: '监理现场验收 & 准许下步施工',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：隐蔽工序验收推诿扯皮，后道分包班组停工待料造成窝工索赔。',
      systemSupport: '系统能力：规范化发起联合验收邀请，线上流转电子质量检验批次台账。'
    },
    {
      stepNumber: 4,
      title: '验工结算',
      subtitle: '实测工程量汇总 & 竣工资料',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：直到年底或竣工才集中清算工程量，资料遗失导致巨额审计结算款拖延。',
      systemSupport: '系统能力：按施工月度自动沉淀归集合格检验批资料，形成标准化的计价结算档案。'
    },
    {
      stepNumber: 5,
      title: '资金拨付',
      subtitle: '分包进度款核付 & 现金流控制',
      isBottleneck: false,
      systemSupport: '系统能力：动态关联已完实物工程量，防范超前支付分包款引发的项目资金链断裂。'
    }
  ],
  configuredModules: [
    {
      scope: 'Scope G',
      moduleName: '工程项目进度甘特管控与移动端数字日志',
      inputData: '合同清单工程量、关键控制里程碑、现场气象风力、用工考勤、机械台班。',
      coreProcess: '全景呈现工程进度计划与现场实际执行对比，直观展示各作业面进度滞后偏差。',
      outputData: '动态刷新的工程进度甘特大屏，指导多专业交叉施工高效协同。'
    },
    {
      scope: 'Scope H',
      moduleName: '工程图纸档案（Shopdrawing）与技术规范库',
      inputData: '建筑深化施工图（Shopdrawing）、设计变更洽商单、材料检测报告（CO/CQ）。',
      coreProcess: '统一管理图纸变更历史版本，保障现场施工人员随时随地调阅最新版蓝图。',
      outputData: '从源头杜绝施工工人误用作废图纸引发返工拆除事故。'
    },
    {
      scope: 'Scope E',
      moduleName: '项目验工计价与分包进度款支付风控',
      inputData: '劳务分包合同协议、实测合格工程量单据、现场进度款请款书。',
      coreProcess: '建立请款单据与监理验收证明的强制钩稽校验，严格按完成比例批复拨款。',
      outputData: '杜绝工程款超额预付风险，牢牢守住项目资金安全红线。'
    },
    {
      scope: 'Scope J',
      moduleName: '工程动态成本核算与预算偏差分析（Variance）',
      inputData: '各标段目标成本预算定额、实际发生人工工资、物资耗用与机械设备租赁支出。',
      coreProcess: '实时核算各分部分项工程成本超支偏差（Cost Overrun），对预算超限触发警报。',
      outputData: '为工程总监与财务部提供在建项目全周期动态成本看板。'
    }
  ],
  aiSpecializedDemo: {
    title: 'AI 助手业务模拟：现场施工日志交叉研判与工期延误风险预警',
    problemContext: '[模拟场景] 重点工程“天际中心写字楼”正推进至 8 层主体结构梁板施工。现场遭遇连续 3 天暴雨，且到场钢筋因道路交通管制延误 1 天。AI 助手读取授权日志与甘特图，测算关键节点混凝土浇筑延误风险。',
    inputLabel: '施工日志与工期计划输入 [模拟展示]：',
    sampleInput: {
      '在建项目': '天际中心商业综合体 - 8 层结构梁板工程 [模拟数据]',
      '承诺节点': '原定 9月14日 20:00 启动大体积商品混凝土连续浇筑',
      '现场日志记载': '遭遇暴雨被迫停工累计 14 小时 | 关键梁板钢筋延后 1 天进场',
      '实际完成进度': '钢筋绑扎完成度仅达 45%（比基准计划落后约 30% 进度）',
      '劳务班组配置': '通胜钢筋劳务作业队（在岗熟练工人: 18 人）'
    },
    aiProcessing: 'AI 读取剩余工作量与单人日绑扎定额，对比关键节点浇筑时间线推演偏差...',
    aiOutput: {
      badge: 'AI 模拟：工期滞后风险与劳务增派建议',
      summary: '受暴雨停工与供料延迟双重影响，现有人力难以在原定混凝土浇筑窗口前通过隐蔽工程验收。',
      recommendations: [
        '劳务增援建议：协调分包劳务队在下个班次紧急增派约 8 名专业绑扎工人通宵突击。',
        '工序穿插优化：与现场监理沟通，建议将梁板划分为 A/B 两个施工段实行分段验收。'
      ],
      riskLevel: 'HIGH',
      actionItems: [
        '项目经理立即约谈钢筋劳务带班负责人并签发抢工单。',
        '同步更新总部工程管理大屏，调整商品混凝土搅拌站罐车配送排班。'
      ]
    },
    disclaimer: '本推演基于模拟数据生成。AI 仅在企业项目进度逻辑规则内进行推导与预警，现场施工调配与安全技术方案由项目总工最终确认。'
  },
  trackedKpis: [
    {
      metric: '关键控制里程碑准时达成率（Schedule Adherence）',
      formula: '(按时通过监理验收的里程碑项数 / 承诺关键节点总数) × 100% [参考公式]',
      frequency: '按周度复盘核算',
      targetBenchmark: '≥ 92% [推荐行业基准]',
      businessImpact: '彻底规避合同约定的逾期违约赔偿金，维护在业界的总包品牌声誉。'
    },
    {
      metric: '项目实际动态成本预算偏差率（Cost Variance）',
      formula: '((实际累计支出成本 - 核定动态预算成本) / 核定动态预算成本) × 100% [参考公式]',
      frequency: '按月度核算评估',
      targetBenchmark: '≤ ± 3.0% [推荐行业基准]',
      businessImpact: '守住工程投标测算的预期目标毛利率，防止现场物资无序流失浪费。'
    },
    {
      metric: '工程进度款验工计价申报周期（Billing Cycle Time）',
      formula: '从分项工程验收合格到全套计价资料报送业主完成的平均工作日 [参考度量]',
      frequency: '按进度款申报周期统计',
      targetBenchmark: '< 5 个工作日 [推荐行业基准]',
      businessImpact: '大幅缩短资金回笼周期，有效保障下游中小分包队伍的农民工工资发放。'
    }
  ],
  threeStageRoadmap: [
    {
      phase: '阶段一（第 1 - 3 周）',
      title: '施工进度模型建立与移动端电子日志落地',
      timeline: '第 1 周 - 第 3 周',
      focus: '在 Scope G 中搭建标准化工程 WBS 与甘特图，推广移动端现场施工日志。',
      deliverables: [
        '标准化的工程分部分项进度横道甘特图模板',
        '具备防篡改时空水印的移动端每日施工日志表单',
        '数字化深化施工图（Shopdrawing）在线图库'
      ]
    },
    {
      phase: '阶段二（第 4 - 7 周）',
      title: '工序联合验收上云与进度款勾稽风控配置',
      timeline: '第 4 周 - 第 7 周',
      focus: '上线隐蔽工程电子报验单，将实测工程量与劳务分包请款强关联管控。',
      deliverables: [
        '监理工程师在线联合签章与整改闭环工作流',
        '分包商按实际验收工程量结算进度款核批流程',
        '在建项目物资出入库与定额消耗对比看板'
      ]
    },
    {
      phase: '阶段三（第 8 - 12 周）',
      title: 'AI 工期偏差研判激活与项目造价 BI 看板',
      timeline: '第 8 周 - 第 12 周',
      focus: '应用 AI 辅助识别多专业交叉施工卡点，上线覆盖多项目的综合造价驾驶舱。',
      deliverables: [
        'AI 现场日志分析与工期延误推演算法模型',
        '项目资金流水、应收账款与成本偏差 BI 仪表盘',
        '面向现场技术负责人与资料员的工程标准化 SOP 手册'
      ]
    }
  ]
};
