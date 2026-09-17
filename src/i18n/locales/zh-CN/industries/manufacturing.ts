import { IndustryDetailedConfig } from '../../../../data/industryDetailedData';

export const manufacturing: IndustryDetailedConfig = {
  slug: 'manufacturing',
  name: '制造与生产加工',
  tagline: '生产工单全生命周期追踪、质检 KCS 标准化把控与出厂交期协同监管',
  sectorCode: 'IND-MFG-05',
  heroProblemSummary: '机械加工、包装印刷、服装制造等中小型工厂，经常面临销售部门与生产车间脱节的脱敏问题。业务前端急于接单，车间却因原材料短缺难以开工；各道工序的完工流转仅依赖手工纸质台账记录，导致各级管理人员无法准确获知订单真实完工节点与确切交货日期。',
  operatingSnapshot: {
    dailyVolume: '多条产线同时并行流转数十个制造工单（PO/MO） [模拟业务规模]',
    primaryChannels: 'B2B 定制合同、OEM 委外代工单、工序移交流转单、品控 KCS 检验单',
    keyConstraint: '严密监控准时足额交付率（OTIF）并按定额控制各工序废品次品率',
    complianceNote: '遵循内部 ISO/SOP 质检规范，逐批完整归档工序检验历史溯源单据'
  },
  dailyOperation: [
    {
      time: '07:00',
      title: '晨间班前早会与车间日生产排程核对',
      actor: '车间总调度 & 各班组长',
      desc: '核查各生产线当班到岗人数，根据物料库存核对当天各机台需完成的工单排产。',
      systemAction: '标准作业演示：在车间生产看板上实时呈现今日目标排产与派工任务指引。'
    },
    {
      time: '09:00',
      title: '承接销售新订单并拆解转化为制造工单（MO）',
      actor: '生产计划与物料控制部（PMC）',
      desc: '将销售已签章订单转化为车间制造工单（MO），并根据物料清单（BOM）核算原辅料需求。',
      systemAction: '标准作业演示：根据输入数据核对原材料可用库存；在出现缺料时自动生成采购申请单。'
    },
    {
      time: '11:30',
      title: '各道工序完工产出数据实时填报',
      actor: '各工序产线组长',
      desc: '在 Scope G 模块中实时录入下料、冲压、焊接、喷涂等各工序半成品合格数量。',
      systemAction: '系统应用场景：自动测算实际完成度与排产计划的偏差，对滞后工单亮色预警。'
    },
    {
      time: '14:30',
      title: '品控 KCS 质检巡检与次品缺陷分类归因',
      actor: '质量检验员（QC / KCS）',
      desc: '按质检规范抽检实测尺寸与技术参数，记录合格数量并将瑕疵按原因分类归档。',
      systemAction: '标准作业演示：生成数字化质检记录；在不良品率超出预设阈值时自动触发停机告警。'
    },
    {
      time: '17:00',
      title: '成品打包装箱、条码贴签与完工入库入账',
      actor: '包装班组 & 成品库管员',
      desc: '按客户包装规范打包封箱，打印并粘贴批次溯源码标签，办理成品完工入库。',
      systemAction: '系统应用场景：在 Scope B 模块中更新工单完工状态，通知业务人员协调物流提货。'
    }
  ],
  journeyVisualFlow: [
    {
      stepNumber: 1,
      title: '接单评审',
      subtitle: '图纸要求确认 & 意向 PO',
      isBottleneck: false,
      systemSupport: '承接 B2B 销售订单，在 Scope B 中规范化归档工艺图纸、加工要求及公差标准。'
    },
    {
      stepNumber: 2,
      title: '计划排产',
      subtitle: '下达制造工单 & BOM 算料',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：手工表格算料极易漏料算错，往往产线开工后才发现缺料停工待料。',
      systemSupport: '系统能力：标准 BOM 物料定额自动核算，快速比对可用库存生成排程建议。'
    },
    {
      stepNumber: 3,
      title: '车间加工',
      subtitle: '工位派工 & 工序流转登记',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：无法实时透视各道工序瓶颈，车间进度反馈比现场实际滞后 1 至 2 天。',
      systemSupport: '系统能力：直观的可视化进度看板，实时记录每个批次在各道工序的流动轨迹。'
    },
    {
      stepNumber: 4,
      title: '质量把关',
      subtitle: 'KCS 质检 & 不良品归因',
      isBottleneck: true,
      bottleneckNote: '传统瓶颈：纸质质检单事后补填，发现批量报废时已酿成严重原料浪费。',
      systemSupport: '系统能力：移动端数字化品检表单，不良率超标时即时触发异常处理流程。'
    },
    {
      stepNumber: 5,
      title: '成品入库',
      subtitle: '标签打码、装箱 & 准时出厂',
      isBottleneck: false,
      systemSupport: '标准流程：自动生成出厂交接单据与合格证，系统实时回传预计交付时间。'
    }
  ],
  configuredModules: [
    {
      scope: 'Scope G',
      moduleName: '制造工单与车间工序流转看板',
      inputData: '制造工单（MO）、工序步骤定义、标准工时定额、物料清单（BOM）。',
      coreProcess: '追踪各批次工单在车间各道工序的流转状态，记录设备异常停线事故。',
      outputData: '全厂生产综合进度概览看板，快速识别延误瓶颈工位。'
    },
    {
      scope: 'Scope B',
      moduleName: 'B2B 销售订单与外协代工 CRM',
      inputData: '企业客户档案、承诺交付节点、外包装技术标准、阶梯结算条款。',
      coreProcess: '打通从销售签单到车间交付的数据流，赋予销售人员实时查单能力。',
      outputData: '业务人员精准掌握订单排产进度，告别频繁跑车间询问交期。'
    },
    {
      scope: 'Scope E',
      moduleName: '物料定额耗用与损耗成本控制',
      inputData: '原材料领料出库明细、合格品入库总数、工序报废次品台账。',
      coreProcess: '对比实际原辅料消耗与技术标准定额差异，测算各订单实际加工成本。',
      outputData: '单个批次工单实际制造成本核算单，辅助企业精准控制毛利。'
    },
    {
      scope: 'Scope J',
      moduleName: '车间人效分析与准时交货率（OTIF）看板',
      inputData: '订单总交付周期、各班组实际产出效率、首检合格率（FPY）报表。',
      coreProcess: '多维综合呈现产线设备负荷、工人产出工时以及准时足额交付表现。',
      outputData: '管理层经营驾驶舱，支撑工厂资源科学调配与扩产决策。'
    }
  ],
  aiSpecializedDemo: {
    title: 'AI 助手业务模拟：工序卡点识别与交期延误风险预警',
    problemContext: '[模拟场景] 某外贸批次 5,000 件高精机械配件正在车间加工。CNC 精加工环节因 03 号机台突发临时维保延误 3.5 小时。AI 助手读取授权数据，计算链式影响并测算交期风险。',
    inputLabel: '车间在制工单运行数据 [模拟展示]：',
    sampleInput: {
      '制造工单编号': 'MO-2026-0581 [模拟数据]',
      '目标生产数量': '5,000 件标准机械精密件',
      '承诺交付节点': '9月15日出厂集港（剩余 48 小时）',
      '当前工序进度': '下料: 100% | CNC: 62% (03号机维保停机 3.5h) | 表面电镀: 0% | KCS终检: 0%',
      '前期报废率': '1.2% (处于质量安全定额 < 2.0% 合格区间内)'
    },
    aiProcessing: 'AI 读取剩余工序节拍与机台可用产能，比对排产规则测算全流程完工时间线...',
    aiOutput: {
      badge: 'AI 模拟：生产延误风险与产能调度建议',
      summary: 'AI 测算表明突发机台停滞会导致后续电镀工序堆积拥堵，存在约 6 小时交付延期隐患。',
      recommendations: [
        '产能转派建议：建议将约 800 件在制半成品转派至 05 号 CNC 机台（该机台夜班计划存在闲置档期）。',
        '后道协同方案：在 9月15日早班为包装车间临时增调 2 名人员，以追回耽误的时间。'
      ],
      riskLevel: 'HIGH',
      actionItems: [
        '车间主管复核工装夹具适配性，确认机台转单指令生效。',
        '向销售部更新内部预估完工节点，确保与港口装箱订舱节奏同步。'
      ]
    },
    disclaimer: '本推演基于模拟业务数据展开。AI 仅在企业设定的排程规则下提供计算参考，最终工单调拨与机台指派由车间生产厂长核准执行。'
  },
  trackedKpis: [
    {
      metric: '准时足额交付达成率（OTIF - On-Time In-Full）',
      formula: '(准时且合格交付的工单数 / 客户有效工单总数) × 100% [参考公式]',
      frequency: '按周度复盘考核',
      targetBenchmark: '≥ 95% [推荐行业基准]',
      businessImpact: '夯实制造企业的核心契约信誉，杜绝迟交引发的扣款与索赔风险。'
    },
    {
      metric: '一次检验合格率（First Pass Yield - FPY）',
      formula: '(首次检验即合格的件数 / 车间投入生产总件数) × 100% [参考公式]',
      frequency: '按班次统计核算',
      targetBenchmark: '≥ 96.5% [推荐行业基准]',
      businessImpact: '大幅减少二次返工与废品损失，降低每单位产品综合制造成本。'
    },
    {
      metric: '平均生产周期时长（Manufacturing Cycle Time）',
      formula: '从原材料领料下线到最终包装入库的平均经过时长 [参考公式]',
      frequency: '按批次追踪',
      targetBenchmark: '缩短 15% - 20% [推荐行业基准]',
      businessImpact: '加快在制品（WIP）流动速度，显著降低企业流动资金占用压力。'
    }
  ],
  threeStageRoadmap: [
    {
      phase: '阶段一（第 1 - 3 周）',
      title: '工单规范梳理与标准工序流转搭建',
      timeline: '第 1 周 - 第 3 周',
      focus: '在 Scope G 模块中配置制造工单（MO）模板与物料清单，取代零散纸质单据。',
      deliverables: [
        '标准化电子制造工单与工艺路线流转卡',
        '车间班组每日工序合格数量填报机制',
        '销售订单与车间排产工单的关联打通'
      ]
    },
    {
      phase: '阶段二（第 4 - 7 周）',
      title: '数字化质检 KCS 部署与车间进度看板上线',
      timeline: '第 4 周 - 第 7 周',
      focus: '推行移动端品检记录，部署全厂工单状态看板，实现材料领用与出入库联动。',
      deliverables: [
        '多工序数字化 KCS 质检记录与缺陷分类表单',
        '车间在制工单进度看板（Kanban）',
        '成品完工入库与原辅料定额耗用对比核对机制'
      ]
    },
    {
      phase: '阶段三（第 8 - 12 周）',
      title: 'AI 产能卡点分析激活与精益制造 BI 看板',
      timeline: '第 8 周 - 第 12 周',
      focus: '应用 AI 辅助识别交期延误风险，上线 OTIF 准时交付率与物料损耗分析看板。',
      deliverables: [
        'AI 工序延误风险预警与机台负荷再平衡建议模型',
        '工厂综合能效、废品率与 OTIF 决策大屏',
        '车间班组长与 PMC 计划员标准作业程序（SOP）'
      ]
    }
  ]
};
