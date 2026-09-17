/**
 * Canonical Source: Tiếng Việt (vi) -> Simplified Chinese (zh-CN)
 * Namespace: resources
 * 
 * 运营资源与专业知识库、技术文档库、SOP 规范、FAQ 与安全保密政策 / 运营条款
 */
export default {
  // Hero & Header
  badge: '运营资源与专业知识库',
  title: '技术文档库、SOP 规范与常见问题答疑',
  subtitle: '提供参考架构蓝图、SOP 规程框架，以及针对数据安全、投资预算与 AI ENTERPRISE 落地实施的务实解答。',

  // Section 1: Documents & Standards
  sectionDocBadge: '技术规范与业务规程',
  sectionDocTitle: '样板技术文档与架构规程',
  sectionDocTransparency: '透明披露文档实际就绪状态',
  btnPreview: '查看样板预览',
  btnClose: '关闭',
  previewAriaClose: '关闭预览弹窗',
  previewDisclaimer: '参考样板内容 — 不提供公开直接下载链接',

  // Categories
  catArchitecture: '系统架构设计',
  catSop: '数字化 SOP 规程',
  catSecurity: '系统与数据安全',

  // Status Badges
  statusSample: '[参考样板]',
  statusInProgress: '[持续编写中]',
  statusUnreleased: '[暂未公开发布]',
  statusPendingDoc: '[待补充技术文档]',

  // Doc Types
  docTypeArch: '架构蓝图框架',
  docTypeSop: 'SOP 规程文档',
  docTypeStandard: '技术规范指南',
  docTypeApi: 'API 接口规范',

  // Documents
  doc1Title: 'AI ENTERPRISE Reference Model 总体架构蓝图',
  doc1FormatNote: '参考设计蓝图（不提供公开文件直接下载）',
  doc1Desc: '跨分系统数据流转拓扑、Tenant 逻辑隔离机制以及专属 AI Copilot 网络的安全防护边界。',
  doc1Preview: `[系统架构参考样板 — 非正式公开下载文件]
1. 总体架构概览：11 个核心分系统统一互联在单一事实真相数据源 (Single Source of Truth) 之上。
2. 基础设施层：多租户逻辑强隔离 (Isolated tenant data space)，端到端传输与持久化存储全链路加密。
3. 智能应用层：9 大 AI Copilot 网络在严密的用户 RBAC 权限边界内运作，100% 审计追踪查询日志。
* 说明：正式且完整的架构交付文档仅在客户签署落地实施合同后正式移交。`,

  doc2Title: '企业数字化标准作业规程 (SOP) 参考套件',
  doc2FormatNote: '参考流程规范框架',
  doc2Desc: '涵盖销售、营销、客户服务、人力资源、财务核算与管理决策等关键业务部门的样板业务规程。',
  doc2Preview: `[SOP 业务规程样板 — 依各企业实际情况定制]
- 销售业务分系统：线索接入 -> 商机评分 -> 自动化调配分流 -> 标准报价 -> 电子合同。
- 数字营销分系统：推广渠道 -> 转化漏斗 -> 自动画像打标 -> 实时同步 CRM。
- 客户服务分系统：多渠道接入 -> 自动派发工单 -> 遵循 SLA 闭环 -> 收集 CSAT 反馈。
- 财务核算分系统：真实资金流 -> 银行对账勾稽 -> 预算红线预警。
* 说明：实际落地运行的 SOP 流程均在完成现场深度调研后深度量身定制。`,

  doc3Title: '系统安全规程、RBAC 权限划分与 AI 责任边界',
  doc3FormatNote: '内部技术规范标准',
  doc3Desc: '用户账户分级授权机制、人机协同审核 (Human-in-the-Loop) 拦截机制与企业内部数据保护标准。',
  doc3Preview: `[内部安全技术规程编写中]
- 原则 1：数据仅在为系统所配置的模型或服务提供商的访问授权范围与隐私政策内进行处理。
- 原则 2：人机协同机制 (Human-in-the-Loop) 是涉及资金划转、数据删除与大宗邮件发送等高风险操作的不可逾越的前提。
- 原则 3：不可篡改的系统审计日志 (Immutable Audit Logs) 详实记录操作人员身份、精确时间戳与 IP 地址。
* 状态：专项深度安全审计附录正在持续补充完善中。`,

  doc4Title: 'API 与 Webhook 集成技术规格书 (RESTful)',
  doc4FormatNote: '技术规格草案',
  doc4Desc: '指导企业将现有软件资产与新建 AI ENTERPRISE 系统进行连通互调的技术指南。',
  doc4Preview: `[技术规格文档暂未公开发布]
- 针对 AI ENTERPRISE 各个正式发行版本的标准化 RESTful API 与 Webhook 规格说明。
- 具有定制对接需求的企业客户，将在签署技术实施协议阶段获取对应的专属技术接口文档。`,

  // Section 2: FAQ
  sectionFaqBadge: '疑难问题释疑',
  sectionFaqTitle: '常见问题解答 (FAQ) 分类',
  sectionFaqDesc: '按照企业决策层重点关注的核心维度进行分类整理。',
  faqTabImplementation: '实施与运营落地',
  faqTabPricing: '投入预算与成本',
  faqTabSecurity: '数据资产与安全',

  // FAQ Items - Implementation
  faqImp1Q: 'VMC Group 是谁，核心定位是什么？',
  faqImp1A: 'VMC Group 是以数据、现代技术与人工智能驱动企业高质运营的系统构建者。我们绝非普通的展示型网站建站公司，亦非单独售卖单点聊天机器人工具的软件代理商，而是为现代企业设计并落地交付统一企业操作系统的系统架构师。',
  faqImp2Q: 'AI ENTERPRISE 与采购多套零散单点软件有何本质不同？',
  faqImp2A: '传统模式下企业不得不分别购买独立的 CRM、单独的人事软件、独立的财务系统，随后在零散对接中耗费巨资且导致数据四分五裂。AI ENTERPRISE 提供统一的底层核心架构：一个统一数据库、一套标准权限矩阵、一套连通工作流，以及贯穿各部门的受控智能 AI 助手。',
  faqImp3Q: '什么样的企业适合选择 VMC Group 的解决方案？',
  faqImp3A: '处于发展与稳健增长阶段的中型企业（约 20 至 500 名员工），具备成熟的商业模式，但开始遭遇跨部门协同、人员效率瓶颈、数据孤岛与流程断层的制约；且管理层具有规范化运营理念，追求务实求真的技术变革。',
  faqImp4Q: '一个项目的整体实施周期通常需要多久？',
  faqImp4A: '具体周期取决于企业涉及的部门数量、现有业务数据的规范程度以及流程定制的复杂度。VMC Group 严格遵循标准化的 6 大实施阶段，在实地调研与诊断后与企业决策层共同敲定严谨透明的阶段推进计划与验收里程碑。',

  // FAQ Items - Pricing
  faqPri1Q: 'AI ENTERPRISE 的实施费用是如何构成的？',
  faqPri1A: '目前没有一刀切的固定标价，因为 AI ENTERPRISE 是基于企业核心架构深度定制的解决方案。投入取决于组织规模、启用的功能模块数量、数据接入体量、定制开发范围及交付赋能深度。企业可预约咨询以获取针对性的最优配置规划。',
  faqPri2Q: '后续是否存在隐性收费或不合理的周期性授权费？',
  faqPri2A: '所有涉及的软件授权、云服务器基础设施以及大语言模型 (LLM) 的 API 消耗成本，均在完成现场调研后的方案建议书中条目清晰、公开透明地列明。企业对基础设施的架构路线拥有完全的自主选择权。',

  // FAQ Items - Security
  faqSec1Q: 'VMC Group 应用人工智能的核心哲学与准则是？',
  faqSec1A: 'VMC Group 严格恪守核心准则：AI 绝不可自由失控行动。AI 必须完全在企业授权数据、岗位职责、权限控制、人类最终核准与透明审计日志的红线内运作。AI 的使命是作为超级助手赋能增强人类生产力，而非全盘替代人类。',
  faqSec2Q: '企业核心经营数据的安全性如何得到有效保障？',
  faqSec2A: '企业 100% 独家拥有自身所有业务数据资产的所有权。系统采用严谨的多租户逻辑数据隔离架构，实行端到端加密存储与传输，配合细粒度 RBAC 权限管控以及详实的不可篡改审计日志，全方位防范泄露风险。',
  faqSec3Q: '在应用 AI 时，企业数据是如何被处理与防护的？',
  faqSec3A: '数据仅在为系统所配置的模型或服务提供商的访问授权范围与隐私政策内进行处理。',

  // Section 3: NDA & Data Policy
  sectionNdaTitle: '数据安全政策与保密协议 (NDA) 约定',
  draftBadge: '政策草案 — 正式实施前须经双方签署确认',
  ndaIntro: 'VMC Group 尊重商业隐私，承诺采用业务数据保护框架：',
  ndaItem1Title: '签署 NDA 协议：',
  ndaItem1Desc: '保护业务数据安全，不向第三方披露。',
  ndaItem2Title: '100% 数据所有权：',
  ndaItem2Desc: '企业拥有自身数据库与知识文档的全部所有权。',
  ndaItem3Title: '数据处理范围：',
  ndaItem3Desc: '数据根据系统所配置模型或供应商的访问权限与政策进行处理。',
  ndaFooterNotice: '内容具有原则导向作用。具有法律效力的正式 NDA 文本将在具体服务合同中单独签署。',

  // Section 4: Operating Terms & Human Responsibility
  sectionTermsTitle: '运营条款与人工最终审批责任准则',
  termsContent: '系统所部署的各 AI 助理均具备不可逾越的责任红线：AI 仅作为辅助工具负责读取数据与起草任务预案；对任何实质性的财务资金划拨、对外媒体发布或人事政策变动，人类拥有不可替代的最终审批裁决权。详尽的服务条款与法律权利义务将在双方正式商务合同中予以明确约定。',

  // Bottom CTA
  ctaTitle: '需要就具体的数据安全关切或业务流程展开深入探讨？',
  ctaDesc: 'VMC Group 的专业架构咨询团队随时准备为您展开针对性调研，为您的企业定制详实可落地的技术架构蓝图。',
  ctaButton: '预约架构咨询交流'
};
