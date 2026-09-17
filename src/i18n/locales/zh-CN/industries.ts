import { trade } from './industries/trade';
import { service } from './industries/service';
import { education } from './industries/education';
import { realEstate } from './industries/realEstate';
import { manufacturing } from './industries/manufacturing';
import { distribution } from './industries/distribution';
import { construction } from './industries/construction';
import { technology } from './industries/technology';

const zhCNIndustries = {
  overview: {
    badge: '专业化业务架构体系',
    badgeSubtitle: '8 大核心行业赛道',
    title: 'AI ENTERPRISE 解决方案',
    titleHighlight: '深度赋能 8 大核心行业',
    subtitle: '拒绝千篇一律的通用模板。每个行业都拥有独特的运营逻辑、专属业务瓶颈与针对性功能模块配置，切实解决核心商业难题。',
    sectionHeader: '标准化配置的 8 大行业体系',
    sectionSubheader: '点击各个行业，深入探索典型业务一日流转、关键运营瓶颈与专属 AI 场景演示。',
    sectorCounter: '8 / 8 核心行业赛道',
    flowLabel: '业务数据流转路径：',
    exploreCardLink: '探索行业专属方案',
    survey: {
      badge: '其他特殊业务领域',
      title: '您的企业属于其他特殊细分行业？',
      description: 'VMC Group 为医疗健康、高科技农业、跨国物流、金融保险等特殊业务领域提供深度现状调研与专属运营架构设计服务，全程遵循严格的双向保密协议（NDA）。',
      ndaBadge: '签署正式商业保密协议（NDA），保障企业商业机密安全',
      ctaButton: '申请专属业务架构调研',
      preselectedOption: '其他特殊行业（申请调研）'
    }
  },
  detail: {
    breadcrumb: '行业解决方案',
    architectureBadge: '行业专属业务运营架构',
    titlePrefix: '企业级解决方案',
    problemSummaryHeading: '行业普遍存在的运营现状瓶颈：',
    surveyCta: '调研 {{name}} 行业当前运营状态',
    viewDailyCta: '查看典型一日运营流转',
    snapshot: {
      heading: '真实业务运营场景总览',
      badge: '标准化业务蓝图',
      dailyVolumeLabel: '日均业务单据/交易量：',
      primaryChannelsLabel: '主要业务沟通与交易渠道：',
      keyConstraintLabel: '关键业务红线与制约瓶颈：',
      complianceNoteLabel: '合规与监管要求：',
      disclaimer: '* 业务数据模型参照 VMC AI ENTERPRISE 企业标准制定。'
    },
    daily: {
      badge: '业务人员一日真实作业流',
      heading: '从晨间启动到晚间结案的业务全貌',
      subheading: '告别聊天记录和 Excel 表格的割裂管理，{{name}} 全天业务节点在系统中严密互联、透明流转。',
      actorLabel: '作业角色',
      systemActionLabel: '系统自动处理'
    },
    modules: {
      badge: '核心业务模块精简配置',
      heading: '专为 {{name}} 精选的核心功能套件',
      subheading: '拒绝冗余无用的空泛功能。系统精准激活解决行业痛点的核心模块，降低认知负担与操作复杂度。',
      interopLabel: '跨系统互联互通能力',
      inputDataLabel: '业务输入数据：',
      coreProcessLabel: '核心处理与流转流程：',
      outputDataLabel: '成果输出与风控把关点：'
    },
    kpi: {
      badge: '量化成效与业务指标追踪',
      heading: '建议重点监测的行业核心运营指标',
      subheading: '真实反映企业运营健康度与服务交付能力，可在 Scope J 商业智能分析模块中实时穿透监测。',
      kpiIndexLabel: '指标名称',
      formulaLabel: '计算公式：',
      benchmarkLabel: '推荐行业基准值：',
      businessImpactLabel: '对商业经营的核心影响：',
      disclaimer: '* 模拟指标数据用于阐述精细化指标管理方法论。'
    },
    roadmap: {
      badge: '分步落地实施路线图',
      heading: '稳步推进的 3 大落地阶段',
      subheading: '采用受控的滚动上线模式：先完成数据治理与清洗，再推进流程自动化，最终激活 AI 智能决策。',
      deliverablesLabel: '核心交付成果物：'
    },
    cta: {
      badge: '{{nameUpper}} 专属运营现状评估',
      heading: '准备好为您的企业全面标准化业务运营了吗？',
      description: 'VMC Group 专家团队随时为您梳理当前业务关键瓶颈，并量身设计契合当前发展阶段的模块配置方案。',
      submitButton: '预约 {{name}} 行业深度咨询',
      exploreOtherButton: '探索其余 7 大行业方案',
      preselectedNote: '调研申请表中将预选锁定 "{{name}}" 行业。'
    }
  },
  visuals: {
    journey: {
      badge: '真实业务旅程与瓶颈穿透分析',
      heading: '端到端业务流转路径 — {{industryName}}',
      subheading: '点击业务旅程的各个环节，查看详细作业规范及系统如何化解关键瓶颈。',
      legendNormalized: '已标准化',
      legendBottleneck: '高风险运营瓶颈',
      bottleneckBadge: '卡点瓶颈',
      smoothBadge: '流畅无阻',
      phaseLabel: '阶段 {{step}} / {{total}}',
      bottleneckTitle: '实际存在的运营卡点：',
      systemSupportTitle: 'AI ENTERPRISE 系统化解方案：',
      statusLabel: '当前状态：',
      statusControlled: '设有系统级风控卡点',
      statusStandard: '遵循标准化 SOP 流程',
      interfaceLabel: '配套支持界面：一体化专业业务工作台'
    },
    aiDemo: {
      badge: '行业专属 AI 助手作业模拟演示',
      runSimulation: '启动 AI 分析推演',
      processingText: '正在深度分析业务数据...',
      liveState: '实时运行状态',
      processingWait: 'AI 助手正在比对行业规则、核验历史数据...',
      summaryHeading: '系统初步研判与结论：',
      recommendationsHeading: '优化行动建议：',
      actionItemsHeading: '系统建议责任人执行的行动事项：',
      riskLevel: {
        high: '风险等级：高',
        medium: '风险等级：中',
        low: '风险等级：低'
      }
    }
  },
  sectors: {
    trade,
    service,
    education,
    'real-estate': realEstate,
    manufacturing,
    distribution,
    construction,
    technology
  }
};

export default zhCNIndustries;
