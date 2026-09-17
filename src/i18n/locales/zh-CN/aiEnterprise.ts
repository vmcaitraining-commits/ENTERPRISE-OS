/**
 * Canonical Source: Tiếng Việt (vi) -> Simplified Chinese (zh-CN)
 * Namespace: aiEnterprise
 */

export default {
  "hero": {
    "badge": "统一企业操作系统",
    "titlePart1": "AI ENTERPRISE — 架构 ",
    "titleOneData": "统一数据",
    "titleSeparator": "，",
    "titleManyRoles": "多重角色",
    "titlePart2": " 运营。",
    "description": "无需维护大量带有碎片化数据的零散软件，AI ENTERPRISE 围绕单一事实真相数据源来组织企业的所有活动 — 每个部门都在符合其权限范围内的专门工作空间中运作。",
    "ctaConsultation": "预约架构咨询",
    "ctaAssessment": "报名参加 AI 准备度评估",
    "quickNav": "快速导航至：",
    "anchorArchitecture": "#architecture (11 个模块)",
    "anchorPrinciples": "#principles (6 大原则)",
    "anchorSecurity": "#security (安全与权限)",
    "diagramBadge": "执行模型",
    "diagramTitle": "访问权限示意图：一个数据核心服务于 6 个专业视图",
    "diagramDisclaimer": "* 示例场景与数据",
    "coreBadge": "UNIFIED DATA CORE",
    "coreTitle": "统一企业数据库",
    "coreDescription": "集中存储所有实体：客户、订单、合同、收款单、任务及互动历史。",
    "coreStatusLabel": "连接状态：",
    "coreStatusValue": "实时同步",
    "coreStorageLabel": "存储模型：",
    "coreStorageValue": "基于租户与权限隔离",
    "corePrincipleLabel": "原则：",
    "corePrincipleValue": "Single Source of Truth",
    "workspacePrefix": "工作空间：",
    "rbacBadge": "标准 RBAC 权限",
    "viewScopeTitle": "可访问数据 (View Scope)：",
    "actionScopeTitle": "允许的操作 (Action Scope)：",
    "copilotLabel": "专属 AI Copilot：",
    "roles": [
      {
        "id": "ceo",
        "title": "执行委员会 / CEO",
        "shortTitle": "CEO 与领导层",
        "summary": "无需等待月末汇总报告，实时掌握企业健康全景。",
        "dataVisible": [
          "全公司 OKR / KPI 指标看板",
          "按业务周期的实际收支与预测现金流（示例数据）",
          "销售额与合同进度",
          "关键操作的审计日志 (Audit Log)"
        ],
        "actionsPermitted": [
          "审批战略与大型预算",
          "审批佣金与价格政策",
          "授予与分配最高管理权限",
          "签署战略合作伙伴合同"
        ],
        "aiCopilot": "AI CEO Copilot — 每日晨间总结运营健康状况，发现现金流异常。"
      },
      {
        "id": "sales",
        "title": "销售总监 / Sales Lead",
        "shortTitle": "业务 (Sales)",
        "summary": "全面管理销售漏斗、互动历史，并与会计部门互联合同进度。",
        "dataVisible": [
          "360 度客户档案 (Customer 360)",
          "多渠道销售漏斗 (Sales Pipeline)",
          "历史报价、合同与已结单的订单",
          "个人与团队的销售报告"
        ],
        "actionsPermitted": [
          "创建报价、导出已审批的标准合同",
          "将线索 (Lead) 分配给销售人员",
          "确认订单并移交至会计部门",
          "为大客户申请折扣"
        ],
        "aiCopilot": "AI Sales Copilot — 评估线索热度、提取通话记录、推荐成交话术。"
      },
      {
        "id": "marketing",
        "title": "营销主管 / Marketing Lead",
        "shortTitle": "营销 (Marketing)",
        "summary": "通过与业务部实际成交率的直接数据连接，准确衡量客户获取成本 (CAC)。",
        "dataVisible": [
          "线索来源及每个活动的成本",
          "各漏斗阶段的转化率",
          "官网及表单的互动数据",
          "从各个营销渠道带来的实际收入"
        ],
        "actionsPermitted": [
          "发起并协调活动预算",
          "发布落地页 (Landing Page) 及表单",
          "设置自动线索培育流程",
          "生成多渠道效果报告"
        ],
        "aiCopilot": "AI Marketing Copilot — 提供文章标题建议、优化 SEO 内容、细分客户画像。"
      },
      {
        "id": "finance",
        "title": "总会计师 / 财务经理",
        "shortTitle": "财务与会计",
        "summary": "严格控制现金流；自动无延迟地核对销售合同与银行账户收款。",
        "dataVisible": [
          "现金账本与银行账户余额",
          "应收账款 (AR) 及应付账款 (AP) 列表",
          "已签署且等待开票的商业合同",
          "各部门的支出申请及预算限额"
        ],
        "actionsPermitted": [
          "开具收款单、付款单及财务发票",
          "记录订单付款状态",
          "自动发出债务预警指令",
          "在授权范围内审批各项支出"
        ],
        "aiCopilot": "AI Finance Copilot — 对账发票凭证、发现逾期债务、预测短期现金流。"
      },
      {
        "id": "cskh",
        "title": "客服组长 / 客户服务",
        "shortTitle": "客户服务 (CS)",
        "summary": "查看完整的购买历史、保修记录以及销售部门的承诺，以快速、准确地处理问题。",
        "dataVisible": [
          "所有购买历史及保修合同",
          "投诉工单队列及 SLA 期限",
          "以往技术支持日志",
          "客户满意度指标 (CSAT / NPS)"
        ],
        "actionsPermitted": [
          "接收、分配及移交技术工单",
          "更新投诉处理进度",
          "服务完成后自动激活调查问卷",
          "创造增销/续约机会 (Upsell / Renewal)"
        ],
        "aiCopilot": "AI CSKH Copilot — 自动对工单紧急程度进行分类，并根据标准提供建议答案。"
      },
      {
        "id": "hr",
        "title": "人事管理 / HR Lead",
        "shortTitle": "人事 (HR)",
        "summary": "集中管理人事档案，自动考勤，并将个人 KPI 与实际收入绩效挂钩。",
        "dataVisible": [
          "人事档案、劳动合同及职称",
          "考勤、请假、迟到数据",
          "个人与部门 KPI 目标跟踪表",
          "薪酬支出及招聘计划"
        ],
        "actionsPermitted": [
          "审批请假申请与考勤说明",
          "启动招聘及评估流程",
          "自动汇总薪资计算数据",
          "更新部门组织结构图"
        ],
        "aiCopilot": "AI HR Copilot — 扫描提取求职者简历，起草基于 KPI 的反馈方案。"
      }
    ]
  },
  "comparison": {
    "badge": "企业的底层根本痛点",
    "title": "核心本质区别：零散拼凑系统 vs. 统一企业操作系统",
    "description": "许多企业误以为数字化转型就是采购更多单点软件。实际上，东拼西凑独立应用只会制造大量“数据孤岛”，增加隐性成本并拖慢整体运营节奏。",
    "beforeCardTitle": "孤岛式碎片化软件模式 (SILOED APPS)",
    "beforeCardBadge": "转型前痛点",
    "beforeCardDesc": "企业使用大量割裂工具：第三方独立建站、单独的 CRM、独立的财务记账软件、依靠 Excel 跟踪任务、通过微信/Zalo 群聊交接沟通……",
    "beforePoint1Strong": "数据分散割裂：",
    "beforePoint1Text": " 每个部门各自保存孤立文件，难以自动化跨部门共享，极易滋生错漏。",
    "beforePoint2Strong": "反复人工录入：",
    "beforePoint2Text": " 员工耗费大量工时在不同系统间重复敲击录入相同信息，业务流转频繁脱节断层。",
    "beforePoint3Strong": "报表严重滞后且难以追溯：",
    "beforePoint3Text": " 依靠人工手工拼凑汇总的报表存在数周延迟，缺乏贯穿始终的操作审计轨迹。",
    "afterCardTitle": "统一的 AI ENTERPRISE 企业操作系统",
    "afterCardBadge": "转型后成效",
    "afterCardDesc": "将所有职能分系统汇聚在单一共享底层数据库上。业务信息全链路实时连通流转，基于权限严格管控。",
    "afterPoint1Strong": "数据统一集中：",
    "afterPoint1Text": " 客户、合同与财务共享一套标准化的单一事实真相数据源 (Single Source of Truth)。",
    "afterPoint2Strong": "工作流无缝互通：",
    "afterPoint2Text": " 业务单据与数据依据预设配置的 SOP 标准规程在各部门间自动流转流送。",
    "afterPoint3Strong": "报表透明且权限清晰：",
    "afterPoint3Text": " 所有经营数据直接映射系统实时真实发生额；详实记录每一项操作的历史日志。",
    "tableHeading": "5 大实际运营维度的深度对照表",
    "tableDisclaimer": "* 基于企业真实业务运营流程的对比分析",
    "tableColBefore": "传统零散软件拼接模式：",
    "tableColAfter": "AI ENTERPRISE 统一操作系统：",
    "rows": [
      {
        "dimension": "数据存储与架构体系",
        "beforeProblem": "数据散落在多个孤立应用中（CRM 存一套、财务另外记一套、Excel 表格管理工单、微信交代工作）。客户一旦变更联系方式，仅在单个软件中更新，其他部门毫不知情。",
        "afterSolution": "单一事实真相数据源 (Single Source of Truth)。所有部门统一访问并共享标准化数据库；数据遵循严格的权限控制实时同步更新。",
        "impactMetric": "数据高度集中，彻底消除碎片化"
      },
      {
        "dimension": "日常业务操作与录入耗时",
        "beforeProblem": "员工必须跨多个工具手动反复录入同一客户信息：从网站表单抄到 CRM、从纸质合同录入财务软件、从收款单复制到内部协作群。",
        "afterSolution": "数据依照标准 SOP 规程全自动流转。客户提交表单 → CRM 自动建档 → 签署合同自动生成预制财务单据 → 自动触发售后服务流程。",
        "impactMetric": "大幅消减重复手工录入工作量"
      },
      {
        "dimension": "数据精准度与业财对账",
        "beforeProblem": "部门间数据对不上：销售统计的成单业绩与财务银行实收金额存在偏差；财务人员月末需花费大量工时逐笔人肉对账查账。",
        "afterSolution": "合同执行状态与真实回款流水全流程端到端互通。业绩指标与应收账款建立在同一套账本上，有效杜绝口径冲突与对账误差。",
        "impactMetric": "最大限度杜绝业财对账数据偏差"
      },
      {
        "dimension": "经营管理决策响应时效",
        "beforeProblem": "管理层在月末或季末才能拿到各部门层层汇总的手工报表。对于成本突发异动或销售业绩滑坡，往往难以及时察觉，错失干预良机。",
        "afterSolution": "BI 经营驾驶舱直接基于系统生产数据实时动态渲染。董事会可随时在大盘上掌控关键业务指标、在途项目进度与现金流健康度。",
        "impactMetric": "报表实时随系统业务数据动态刷新"
      },
      {
        "dimension": "AI 应用与数据安全治理",
        "beforeProblem": "员工私下将包含客户隐私或报价底牌的敏感资料随意粘贴进外部公共 AI 工具。数据访问边界失控，且完全缺乏操作审计留痕机制。",
        "afterSolution": "AI Copilot 网络完全在企业专属的私有受控边界内运作。所有行动严格遵循人机协同机制 (Human-in-the-loop)，并留存不可篡改的审计日志。",
        "impactMetric": "权限严密可控，操作轨迹详实可溯"
      }
    ]
  },
  "transactionFlow": {
    "badge": "跨部门数据协同闭环",
    "disclaimer": "模拟演示场景与数据",
    "title": "单笔交易全生命周期流转：Marketing → Sales → Finance → CSKH → BI",
    "description": "见证一份典型服务合同的数据，是如何依照标准业务 SOP 在 5 大职能部门之间自动化流转与平滑交接的。",
    "stagePrefix": "阶段",
    "flowNature": "依据配置的业务规程自动化连通流转",
    "actionTitle": "本阶段实际业务操作：",
    "dataGeneratedTitle": "产生并记录的业务数据：",
    "aiAutomationTitle": "AI 辅助与自动化引擎角色：",
    "handoffTitle": "自动化流转交接 (Handoff)：",
    "steps": [
      {
        "stepNumber": 1,
        "stageName": "线索接入与初筛",
        "scopeCode": "Scope C",
        "scopeTitle": "多渠道数字营销",
        "role": "潜在客户与营销主管",
        "userAction": "客户在企业官方网站上提交商务咨询表单（模拟交易范例金额：120,000,000 越南盾）。",
        "dataGenerated": [
          "线索编号：#LD-8492 [模拟演示数据]",
          "来源渠道：所配置的数字营销推广链路",
          "核心诉求：流程标准化与跨部门数据互联",
          "企业规模：45 名在职员工"
        ],
        "aiAutomationRole": "AI Marketing 辅助计算潜在客户商机评分（模拟评分：94/100），丰富企业背景画像并完成自动分类。",
        "handoffNext": "自动在 CRM 中生成统一客户档案，并按照设定的分配策略流转至销售待办接待队列。"
      },
      {
        "stepNumber": 2,
        "stageName": "商务洽谈与合同签署",
        "scopeCode": "Scope B",
        "scopeTitle": "销售业务 / CRM",
        "role": "大客户商务顾问 (Account Executive)",
        "userAction": "销售顾问在系统接收到待办通知，发起需求沟通，一键调用系统模板生成报价单并推送电子合同。",
        "dataGenerated": [
          "电子合同编号：#HD-2026-088 [模拟演示样本]",
          "合同标的金额：120,000,000 越南盾",
          "签署状态：客户已完成数字签名与 OTP 认证",
          "商机阶段：Won (已成单签约)"
        ],
        "aiAutomationRole": "AI Sales Copilot 辅助提取通话纪要要点，提炼核心商务条款，并协助自动预填标准合同草案。",
        "handoffNext": "合同签署完成流转至“已签约”状态后，系统秒级自动生成预收应收款凭证并交接给财务部门。"
      },
      {
        "stepNumber": 3,
        "stageName": "资金核对与入账收款",
        "scopeCode": "Scope E",
        "scopeTitle": "财务与会计核算",
        "role": "往来结算会计与总会计师",
        "userAction": "客户完成首期款转账支付（模拟首期到账：60,000,000 越南盾）汇入企业法定对公账户。",
        "dataGenerated": [
          "电子收款单据：#PT-5521 [模拟演示样本]",
          "实际到账金额：60,000,000 越南盾",
          "后续尾款账期追踪与账龄监控",
          "会计核算凭证依据标准科目自动记录"
        ],
        "aiAutomationRole": "系统根据预设勾稽规则，自动将网银流水附言与合同编号完成核销匹配，极大减少手工翻单压力。",
        "handoffNext": "确认收款成功后，系统自动将项目实施交接单流转至客户服务与实施技术团队。"
      },
      {
        "stepNumber": 4,
        "stageName": "服务实施与交付支持",
        "scopeCode": "Scope D",
        "scopeTitle": "客户成功与售后服务",
        "role": "客户成功专员与实施工程师",
        "userAction": "客服实施团队调阅完整的客户 360 画像，无缝承接销售前期约定的全部业务技术参数。",
        "dataGenerated": [
          "实施交付工单：#TK-1044 [模拟演示样本]",
          "按照企业规程约定的支持响应时效 (SLA)",
          "合同约定的分期实施计划与关键里程碑",
          "为客户企业分配的统一身份访问凭据"
        ],
        "aiAutomationRole": "AI CSKH Copilot 协助拟定定制化的欢迎致辞函件，自动挂载对应的标准化产品使用手册与规程指南。",
        "handoffNext": "实施与服务进展持续自动回填至客户全景视图，并同步刷新管理层 BI 报表看板。"
      },
      {
        "stepNumber": 5,
        "stageName": "经营分析与 BI 洞察",
        "scopeCode": "Scope J",
        "scopeTitle": "实时商业智能与报告",
        "role": "执行委员会与首席执行官 (CEO)",
        "userAction": "管理层打开综合管理大屏，全局掌控直接由系统各节点汇总生成的财务、销售及工单健康指标。",
        "dataGenerated": [
          "本期营业收入指标 [模拟演示数据]",
          "根据记账凭证动态映射的现金流净流入",
          "各推广渠道实际沉淀的市场投放费用",
          "各项年度战略 OKR / KPI 达成进度条"
        ],
        "aiAutomationRole": "AI 辅助刷新未来周期现金流波动预测曲线，智能提炼异常异动原因供领导层研讨决策。",
        "handoffNext": "全流程沉淀的高质量交易数据安全归档，作为后续流程优化与智能分析的知识资产 (Scope H & Scope J)。"
      }
    ]
  },
  "architecture": {
    "badge": "11 个核心模块架构",
    "title": "企业运营操作系统 (OS) 结构图",
    "description": "这 11 个模块是构建任何数字企业的基础。您可以先部署核心模块，随后再灵活扩展其他组件。",
    "mapBadge": "系统拓扑",
    "mapTitle": "业务流及互联图",
    "mapDisclaimer": "* 虚线表示 API 扩展与系统集成",
    "layer1Title": "第 1 层：接待与数字交互门户",
    "layer1Count": "1 个模块",
    "layer2Title": "第 2 层：核心业务与客户",
    "layer2Count": "3 个模块",
    "layer3Title": "第 3 层：运营与内部资源",
    "layer3Count": "3 个模块",
    "layer4Title": "第 4 层：智能与中央指挥",
    "layer4Count": "4 个模块",
    "modulePrefix": "模块",
    "scopePrefix": "Scope",
    "capabilitiesTitle": "核心能力：",
    "dataInTitle": "输入数据 (Data In)：",
    "dataOutTitle": "输出数据 (Data Out)：",
    "mobileAccordionTitle": "点击查看详细架构层",
    "mobileMainCapabilities": "主要能力：",
    "modules": [
      {
        "code": "A",
        "name": "企业门户官网 (Website)",
        "layer": "第 1 层：接待与数字交互门户",
        "layerNum": 1,
        "tagline": "代表品牌门面，整合活动落地页，并将访客数据流自动引入 CRM",
        "keyCapabilities": [
          {
            "title": "品牌网站及活动落地页",
            "desc": "采用专业的企业界面，针对搜索引擎 (SEO) 进行优化，且加载速度快。"
          },
          {
            "title": "动态智能表单",
            "desc": "在各种设备上无缝捕获潜在客户需求及 UTM 参数。"
          },
          {
            "title": "直接连接 CRM / CRS 核心",
            "desc": "不再依赖手动导出/导入 Excel，确保每一位潜在客户的数据即时同步。"
          },
          {
            "title": "灵活的内容管理 (CMS)",
            "desc": "支持管理员轻松发布产品、新闻并管理支持文档。"
          }
        ],
        "dataIn": "来自各数字渠道、广告活动、搜索和直接访问的流量。",
        "dataOut": "客户联系信息、兴趣点和 UTM 来源被即时同步至 CRM (Scope B)。",
        "solutionLink": "/solutions/website",
        "solutionLabel": "查看企业官网解决方案"
      },
      {
        "code": "B",
        "name": "CRM / CRS 客户关系系统",
        "layer": "第 2 层：核心业务与客户",
        "layerNum": 2,
        "tagline": "客户 360 度视角，管理销售漏斗并防止员工离职带来的数据丢失",
        "keyCapabilities": [
          {
            "title": "构建统一客户档案 (Customer 360)",
            "desc": "集中存储客户的互动历史、需求、合同及相关票据。"
          },
          {
            "title": "管理销售漏斗 (Pipeline)",
            "desc": "跟踪商机进度从“接触”、“报价”直到“赢单交涉”。"
          },
          {
            "title": "自动生成报价单与电子合同模板",
            "desc": "利用预配置的产品库快速创建报价，连接电子签名并自动化审批流程。"
          },
          {
            "title": "智能通话分析集成",
            "desc": "记录并提取咨询通话内容，提取客户需求，并为业务员自动生成跟进任务。"
          }
        ],
        "dataIn": "官网 (Scope A) 和营销 (Scope C) 的线索；咨询需求和通话信息。",
        "dataOut": "已签合同流向会计 (Scope E)；承诺信息流向客服 (Scope D)。",
        "solutionLink": "/solutions/crm",
        "solutionLabel": "查看 CRM 与业务解决方案"
      },
      {
        "code": "C",
        "name": "多渠道营销与营销自动化",
        "layer": "第 2 层：核心业务与客户",
        "layerNum": 2,
        "tagline": "运行多渠道营销活动，优化获客成本 (CAC)，实现自动化客户培育",
        "keyCapabilities": [
          {
            "title": "集中管理多渠道活动",
            "desc": "跟踪来自 Google、Meta、TikTok 及合作伙伴网络的预算和广告效果。"
          },
          {
            "title": "自动线索评分 (Lead Scoring)",
            "desc": "基于客户的互动行为及用户画像契合度对潜在客户进行分级。"
          },
          {
            "title": "自动化培育序列 (Drip Campaign)",
            "desc": "根据客户所处阶段发送个性化的邮件或 Zalo ZNS 关怀消息。"
          },
          {
            "title": "根据实际收入衡量 ROI 与 CAC",
            "desc": "与销售部的实际订单数据关联，精确计算单份合同的获客成本。"
          }
        ],
        "dataIn": "营销活动支出；来自广告渠道和社交媒体的互动数据。",
        "dataOut": "经过质量评分后的潜在客户列表将被移交给销售团队 (Scope B)。",
        "solutionLink": "/solutions/marketing",
        "solutionLabel": "查看多渠道营销解决方案"
      },
      {
        "code": "D",
        "name": "客户服务 (CS)",
        "layer": "第 2 层：核心业务与客户",
        "layerNum": 2,
        "tagline": "接收多渠道请求，根据规定时限管理投诉工单，并提升客户体验",
        "keyCapabilities": [
          {
            "title": "多渠道统一工单队列",
            "desc": "将来自 Fanpage、Zalo、电子邮件、官网和总机的请求汇总至统一视图。"
          },
          {
            "title": "根据规定监控处理时限",
            "desc": "在工单即将超出回复时间或违反处理规则时发出自动预警。"
          },
          {
            "title": "管理保修及服务合同",
            "desc": "跟踪服务有效期限、定期维护计划并自动提醒续约。"
          },
          {
            "title": "客户满意度调查 (CSAT/NPS)",
            "desc": "服务完成后自动触发评价表单，及早发现客户流失风险。"
          }
        ],
        "dataIn": "销售部门 (Scope B) 移交的合同；客户提交的支持请求、疑问和故障反馈。",
        "dataOut": "提供增销 (Upsell/Renewal) 机会给销售部门；为主管生成服务质量报告 (Scope J)。",
        "solutionLink": "/solutions/customer-service",
        "solutionLabel": "查看客户服务解决方案"
      },
      {
        "code": "E",
        "name": "财务与会计",
        "layer": "第 3 层：运营与内部资源",
        "layerNum": 3,
        "tagline": "控制实收实付现金流，自动对账债务以及电子发票管理",
        "keyCapabilities": [
          {
            "title": "现金及银行账户管理",
            "desc": "跟踪实际余额，透明收支记录，并自动与余额变动对账。"
          },
          {
            "title": "管理应收 (AR) 和应付 (AP) 账款",
            "desc": "根据合同约定自动发送催款通知，准确分类账龄。"
          },
          {
            "title": "在线提议与支出审批流程",
            "desc": "按照各部门的预算定额严格控制垫支及采购申请。"
          },
          {
            "title": "电子发票及现金流预测",
            "desc": "根据订单开具发票，并模拟预测业务周期的收支，支持经营决策。"
          }
        ],
        "dataIn": "销售部门 (Scope B) 的合同与订单；人事部门 (Scope F) 及营销部门 (Scope C) 的费用申请。",
        "dataOut": "拨款状态、合同付款确认，以及向 BI 仪表板 (Scope J) 提供的现金流指标。",
        "solutionLink": "/solutions/finance",
        "solutionLabel": "查看财务与会计解决方案"
      },
      {
        "code": "F",
        "name": "人事管理 (HR)",
        "layer": "第 3 层：运营与内部资源",
        "layerNum": 3,
        "tagline": "集中人事档案、自动考勤、核对薪资基金并评估 KPI 绩效",
        "keyCapabilities": [
          {
            "title": "数字化人事档案与组织架构图",
            "desc": "存储劳动合同、学历证明、晋升历史及层级管理关系。"
          },
          {
            "title": "自动考勤与在线单据",
            "desc": "同步考勤机/GPS 定位；在手机端审批请假、迟到申请。"
          },
          {
            "title": "公式自动化的薪资表",
            "desc": "基于实际数据准确计算工资、社保、个人所得税和业务提成。"
          },
          {
            "title": "定期评估 KPI / OKR 能力",
            "desc": "将个人绩效与每日实际执行数据挂钩。"
          }
        ],
        "dataIn": "考勤数据；各部门的招聘和评估建议。",
        "dataOut": "将薪酬基金成本传输给会计 (Scope E)；将员工生产力数据传输到 BI 仪表板 (Scope J)。",
        "solutionLink": "/solutions/hr",
        "solutionLabel": "查看人事管理解决方案"
      },
      {
        "code": "G",
        "name": "任务 — 项目 — 运营 (SOP)",
        "layer": "第 3 层：运营与内部资源",
        "layerNum": 3,
        "tagline": "数字化标准操作程序 (SOP)，管理项目进度，自动流转跨部门工作",
        "keyCapabilities": [
          {
            "title": "标准化运营流程图 (SOP)",
            "desc": "规范各个实施步骤，明确区分执行人、审批人及处理期限。"
          },
          {
            "title": "基于进度与责任 (RACI) 的项目管理",
            "desc": "通过看板 (Kanban)、甘特图直观展示工作；自动提供逾期预警。"
          },
          {
            "title": "安全在线多级审批",
            "desc": "让财务单据、公文和预算审批的流转过程随时随地畅通无阻。"
          },
          {
            "title": "跨部门自动化 (Workflow Automation)",
            "desc": "按“触发器 → 条件 → 动作 → 审批”的模型自动激活任务。"
          }
        ],
        "dataIn": "董事会下达的新任务/项目，或需要执行生产的已签订单。",
        "dataOut": "任务完成进度；为整个组织提供处理期限分析报告。",
        "solutionLink": "/solutions/operations",
        "solutionLabel": "查看运营与项目管理解决方案"
      },
      {
        "code": "H",
        "name": "RAG 内部知识库",
        "layer": "第 4 层：智能与中央指挥",
        "layerNum": 4,
        "tagline": "利用 AI 检索能力对企业内部文档进行分类和智能查询",
        "keyCapabilities": [
          {
            "title": "企业知识资源数字化",
            "desc": "存储规章制度、产品手册、培训材料及项目资料。"
          },
          {
            "title": "基于角色的访问权限 (RBAC)",
            "desc": "确保敏感文件只有获得授权的部门才能查看和搜索。"
          },
          {
            "title": "使用自然语言查询 (RAG)",
            "desc": "员工可使用 AI，从大量长文档中提取出精确信息，无需逐页翻阅。"
          },
          {
            "title": "版本控制与持续更新",
            "desc": "管理文档版本，确保员工查阅到的始终是最新更新的内容。"
          }
        ],
        "dataIn": "来自组织内部、运营指南和产品材料的所有培训及知识文本。",
        "dataOut": "为员工的搜索查询提供准确、最新且在权限范围内的参考信息。",
        "solutionLink": "/solutions/knowledge-base",
        "solutionLabel": "查看内部知识库解决方案"
      },
      {
        "code": "I",
        "name": "AI Copilot 智能助手",
        "layer": "第 4 层：智能与中央指挥",
        "layerNum": 4,
        "tagline": "集成在各个流程中的虚拟助手，在符合人类约束的情况下提供支持并自动执行任务",
        "keyCapabilities": [
          {
            "title": "根据语境草拟文本",
            "desc": "起草咨询邮件、技术支持回复以及业务活动的广告文案。"
          },
          {
            "title": "分析与提供业务见解",
            "desc": "识别数据趋势，建议潜在客户名单，并在指标中发现异常。"
          },
          {
            "title": "AI 支持流程流转 (Workflow)",
            "desc": "利用自然语言执行系统命令（例如：“根据昨天的数据创建会议报告”）。"
          },
          {
            "title": "Human-in-the-Loop 审批阻截",
            "desc": "所有关于财务建议或对外发送的操作均被挂起以等待人工确认。"
          }
        ],
        "dataIn": "员工在操作环境中的系统命令或上下文数据。",
        "dataOut": "建议文本、统计汇总以及待管理层批准的业务操作提案。",
        "solutionLink": "/solutions/ai-copilot",
        "solutionLabel": "查看 AI Copilot 解决方案"
      },
      {
        "code": "J",
        "name": "BI 仪表板与运营报告",
        "layer": "第 4 层：智能与中央指挥",
        "layerNum": 4,
        "tagline": "通过直观图表连接并处理跨模块的数据集，帮助快速做出基于数据的决策",
        "keyCapabilities": [
          {
            "title": "实时跨系统数据集",
            "desc": "将来自 CRM、HR、财务的数据整合成综合指标（例如，计算员工的平均利润）。"
          },
          {
            "title": "直观数据可视化",
            "desc": "提供按销售漏斗、部门 KPI 进度和现金流趋势定制图表。"
          },
          {
            "title": "异常自动预警",
            "desc": "当特定指标（例如存货积压、逾期债务超限）达到预设阈值时触发警告。"
          },
          {
            "title": "管理层简报与报告输出",
            "desc": "允许以 PDF、Excel 格式导出月报，或按计划自动向利益相关者发送简报。"
          }
        ],
        "dataIn": "从前三个层级模块获取结构化的操作和交易数据。",
        "dataOut": "呈现管理仪表板视图、预警警报并为董事会生成高级分析报告。",
        "solutionLink": "/solutions/bi-dashboard",
        "solutionLabel": "查看 BI 仪表板解决方案"
      },
      {
        "code": "K",
        "name": "开放连接系统 (API & Webhook)",
        "layer": "第 4 层：智能与中央指挥",
        "layerNum": 4,
        "tagline": "多层安全网关，连接内部架构并与企业现有的外部系统进行通信",
        "keyCapabilities": [
          {
            "title": "标准化 API 端口 (RESTful)",
            "desc": "提供双向连接，使现有外部软件中的数据能推送至 AI ENTERPRISE。"
          },
          {
            "title": "实时 Webhook 系统",
            "desc": "向外部接收方（例如，ERP、银行系统）发送即时事件通知。"
          },
          {
            "title": "认证与权限控制 (OAuth2 / RBAC)",
            "desc": "使用标准令牌 (Token) 管理 API 访问权限，确保外部集成符合内部数据政策。"
          },
          {
            "title": "详细请求审计与监控",
            "desc": "记录所有 API 请求信息以便于追踪错误、检测入侵并监控集成流量。"
          }
        ],
        "dataIn": "从第三方系统、旧版软件或银行服务发送而来的数据。",
        "dataOut": "向系统外流出的操作状态通知及同步数据，受协议严格保护。",
        "solutionLink": "/solutions/integration",
        "solutionLabel": "查看系统开放集成解决方案"
      }
    ]
  },
  "supervisedAi": {
    "badge": "人工智能的安全准则",
    "title": "受控 AI 机制：Human-in-the-loop（必须有人工审核把关）",
    "description": "在企业核心运营中，AI 绝对无权擅自决定财务支出或直接对外签署合同。AI ENTERPRISE 设立严格的防线机制：AI 仅负责数据梳理、分析与草拟预案，人类掌握不可逾越的最终裁决权。",
    "flowHeading": "标准化的 6 步受控人机协同运转闭环",
    "flowSubheading": "核心安全防线锁死在第 4 步",
    "col1Title": "1. 处于安全红线内的自动化 AI 任务",
    "col1Subtitle": "在预设规程和权限范围内辅助处理日常信息与数据初筛",
    "col2Title": "2. 强制必须人工把关核准的卡点",
    "col2Subtitle": "在正式生效或对外发布之前，必须经法定授权人员签字批准",
    "steps": [
      {
        "stepNum": 1,
        "title": "读取与整合数据",
        "actor": "AI",
        "actorLabel": "AI Engine",
        "description": "从 CRM、财务或内部知识库合法提取上下文数据（严格禁止跨越员工自身被赋予的 RBAC 权限范围）。",
        "subtext": "遵循精细化权限配置"
      },
      {
        "stepNum": 2,
        "title": "分析与风险研判",
        "actor": "AI",
        "actorLabel": "AI Engine",
        "description": "对照企业标准 SOP、既定折扣红线与预算配额，敏锐扫描潜在的违规风险或数据异常。",
        "subtext": "评估潜在业务风险"
      },
      {
        "stepNum": 3,
        "title": "拟定建议方案草稿 (Draft)",
        "actor": "AI",
        "actorLabel": "AI Copilot",
        "description": "自动起草报价单明细、采购付款申请草稿或符合礼仪规范的对客答复邮件正文。",
        "subtext": "纯草稿，暂无任何法律效力"
      },
      {
        "stepNum": 4,
        "title": "强制防线：人工审核与把关",
        "actor": "HUMAN",
        "actorLabel": "具法定权限的主管人员",
        "description": "部门主管、总会计师或总经理查验草案，拥有绝对权力进行润色修改、审批放行或全盘驳回。",
        "subtext": "必须人工点击批准"
      },
      {
        "stepNum": 5,
        "title": "系统自动化下发执行",
        "actor": "SYSTEM",
        "actorLabel": "Workflow Engine",
        "description": "一旦收到经核准人员签批的确认指令，系统自动触发邮件发送、开具电子发票或预算划转。",
        "subtext": "严格遵照审批指令执行"
      },
      {
        "stepNum": 6,
        "title": "留存审计日志 (Audit Log)",
        "actor": "SYSTEM",
        "actorLabel": "Security Core",
        "description": "完整保存审计轨迹：AI 提出了何种草案、哪位主管点击核准、具体时间戳及最终执行结果回执。",
        "subtext": "用于内部稽核与全流程追溯"
      }
    ],
    "autonomousTasks": [
      {
        "name": "线索智能分类与潜力评分",
        "desc": "基于客户填报的表单信息与访问行为，自动计算线索意向热度得分。"
      },
      {
        "name": "电话录音转写与摘要萃取",
        "desc": "将销售咨询通话语音转化为文本，自动提取客户需求痛点并同步归档至 CRM。"
      },
      {
        "name": "话术建议与公文初稿起草",
        "desc": "基于企业内部标准知识库，协助草拟售后工单答复或标准化的商务往来邮件。"
      },
      {
        "name": "业务异常与指标波动预警",
        "desc": "当推广获客成本陡增或客户工单即将超时超限时，自动向部门主管发出黄色预警。"
      },
      {
        "name": "跨部门业务状态自动联动",
        "desc": "前道单据签署后，自动流转至下一责任部门并向相关同事下发内部协同提醒。"
      }
    ],
    "strictApprovalTasks": [
      {
        "name": "实际对外资金划拨与支付出账",
        "desc": "任何涉及企业银行对公账户或库存现金的实际付款，必须有总会计师与企业法人代表签批。"
      },
      {
        "name": "超出门限的特殊价格折扣审批",
        "desc": "超出业务员常规权限范围的非标折扣申请，必须由销售总监亲自核准签字。"
      },
      {
        "name": "法律合同签署与战略伙伴协议",
        "desc": "所有具备法律约束力的商务合同与对外承诺函，必须由企业法定代表人进行数字验签。"
      },
      {
        "name": "向公众平台正式发布对外图文",
        "desc": "官方自媒体公开发布的文章、新闻通稿或官网价格明细，必须经市场总监审查批准。"
      },
      {
        "name": "调整系统管理权限与安全配置",
        "desc": "指派管理员角色、修改财务数据查看范围或调整核心审批路由必须由最高决策层授权。"
      }
    ]
  },
  "deploymentPrinciples": {
    "badge": "不可逾越的原则",
    "title": "VMC Group 的 6 大核心部署原则",
    "description": "这些基础承诺不仅确保系统符合长期稳定的架构标准，而且维护每个企业的完全独立性、保密性和数据所有权。",
    "principlePrefix": "原则",
    "commitmentsTitle": "实施承诺：",
    "items": [
      {
        "num": "01",
        "title": "为每家企业提供专属网站",
        "description": "每个客户都拥有一个独立的门户网站和域名，承载着完全独立的品牌形象、界面及潜在客户接收结构。我们不共用前台界面，不依赖于公共平台。",
        "highlights": [
          "根据配置设置专属域名和品牌标识",
          "定制化页面结构和数据收集表单",
          "直接同步到内部 CRM，无中间环节"
        ]
      },
      {
        "num": "02",
        "title": "独立用户与高度安全性",
        "description": "每名员工分配独立的账户标识，支持安全验证并实行基于角色的访问控制 (RBAC)。严禁共享账户，确保可追责并具备按规程追溯的能力。",
        "highlights": [
          "为各部门岗位量身定制个人身份验证",
          "最小特权原则 (Least Privilege) 分配",
          "在审计日志中明确记录个人责任"
        ]
      },
      {
        "num": "03",
        "title": "数据隔离与企业所有权",
        "description": "不同企业间的数据通过租户隔离及访问范围划分。根据部署协议，所有客户、财务和运营数据库的全部所有权归企业所有。",
        "highlights": [
          "根据租户和访问范围隔离数据",
          "企业有权依照交接程序导出数据",
          "支持按照部署范围和合同应用保密协议"
        ]
      },
      {
        "num": "04",
        "title": "流程和界面灵活配置",
        "description": "系统允许对数据字段、审批流程和 SOP 步骤进行深度定制，使其符合行业特点和组织文化，同时不破坏共享核心架构的完整性。",
        "highlights": [
          "自定义信息字段和销售漏斗",
          "根据额度配置多级审批流程",
          "继承核心系统的高完整性与稳定性"
        ]
      },
      {
        "num": "05",
        "title": "AI 基于组织上下文运作",
        "description": "AI Copilot 网络能够从企业内部知识库（SOP、业务手册、产品文档）进行检索。AI处理遵循数据的租户隔离、权限边界及系统配置。",
        "highlights": [
          "在经过审查的内部知识数据库上执行 RAG 查询",
          "根据权限保护商业信息及内部政策",
          "依靠 RAG 和受控数据源减少“幻觉”解答的风险"
        ]
      },
      {
        "num": "06",
        "title": "共用经过验证的核心架构",
        "description": "尽管每家企业都有各自的数据和流程，但整个系统均在 VMC Group 的标准核心架构上运行。这确保了高稳定性、易于扩展，并能够持续接收新的升级版本。",
        "highlights": [
          "企业级稳定的基础设施平台",
          "持续升级并定期更新安全补丁",
          "支持针对所有关键操作记录审计日志"
        ]
      }
    ]
  },
  "security": {
    "badge": "数据安全与治理",
    "title": "企业级安全保护与多层权限管理",
    "description": "我们深知，客户数据库、财务数据和商业秘密是生存资产。AI ENTERPRISE 架构按照严格的安全标准设计，具备透明的访问控制和审计机制。",
    "diagramHeading": "标准访问控制循环图",
    "diagramSubheading": "5 层身份验证与授权机制",
    "step1Num": "01",
    "step1Title": "1. 身份验证 (User)",
    "step1Desc": "为独立个人账户提供强密码及 OTP 安全验证。",
    "step2Num": "02",
    "step2Title": "2. 角色分配 (Role)",
    "step2Desc": "分配职称角色：管理层、部门主管、专员、会计等。",
    "step3Num": "03",
    "step3Title": "3. 资源定位 (Resource)",
    "step3Desc": "目标数据：客户档案、合同、现金账本、支出建议、KPI 指标。",
    "step4Num": "04",
    "step4Title": "4. 操作授权 (Action)",
    "step4Desc": "权限检查：查看 (Read)、创建 (Create)、更新 (Update)、审批 (Approve)。",
    "step5Num": "05",
    "step5Title": "5. 审计记录 (Audit Log)",
    "step5Desc": "保存操作痕迹支持审计：何人、何时、对何种数据造成了何种影响。",
    "rbacHeading": "示例角色权限矩阵 (Role-Based Access Control)",
    "rbacSubheading": "展示 5 大角色群体在核心资源组上的实际访问权限差异",
    "rbacBadge": "RBAC 模型",
    "tableHeaderResource": "资源组别",
    "tableHeaderCeo": "CEO / 领导层",
    "tableHeaderSalesLead": "销售主管",
    "tableHeaderSalesRep": "销售专员",
    "tableHeaderChiefAccountant": "总会计师",
    "tableHeaderSupportAgent": "客服专员",
    "approvalExampleTitle": "演示场景：多级审批流程 (Multi-level Approval)",
    "approvalExampleScenario": "模拟情境：18% 的订单折扣申请（> 15% 权限上限）",
    "exampleStep1Badge": "第 1 步",
    "exampleStep1Title": "销售专员发起请求",
    "exampleStep1Desc": "建立报价，附上“客户承诺签订 2 年合同”的理由并提交 18% 折扣申请。",
    "exampleStep2Badge": "第 2 步",
    "exampleStep2Title": "系统锁定并自动指派",
    "exampleStep2Desc": "系统侦测到申请超出 15% 上限，自动锁定开具合同权限并通报销售主管。",
    "exampleStep3Badge": "第 3 步",
    "exampleStep3Title": "主管初审",
    "exampleStep3Desc": "主管审查毛利润率，在草案上副署（签署初步意见）后将其上报总经理。",
    "exampleStep4Badge": "第 4 步（终审）",
    "exampleStep4Title": "总经理数字签名",
    "exampleStep4Desc": "CEO 在移动应用端进行审核并通过 OTP 确认。报价自动解锁并发送给客户。",
    "rbacRows": [
      {
        "resource": "客户与线索档案 (Customer 360)",
        "ceo": "查看全部 / 导出报告",
        "salesLead": "查看全部 / 分配线索",
        "salesRep": "查看负责的客户 / 更新",
        "chiefAccountant": "查看付款信息",
        "supportAgent": "查看信息以提供服务"
      },
      {
        "resource": "报价与商业合同",
        "ceo": "审批所有合同",
        "salesLead": "审批折扣 ≤ 15%",
        "salesRep": "创建标准报价草案",
        "chiefAccountant": "查看已签合同",
        "supportAgent": "查看保修条款"
      },
      {
        "resource": "现金账本、银行及收支",
        "ceo": "查看全部 / 审批大额支出",
        "salesLead": "无权查看",
        "salesRep": "无权查看",
        "chiefAccountant": "管理收支 / 开具发票",
        "supportAgent": "无权查看"
      },
      {
        "resource": "垫支申请及部门预算",
        "ceo": "审批高级别预算",
        "salesLead": "审批本部门申请",
        "salesRep": "创建支出申请",
        "chiefAccountant": "控制限额 / 拨款",
        "supportAgent": "创建设备申领请求"
      },
      {
        "resource": "收入与现金流报告 (BI)",
        "ceo": "根据系统数据查看全部",
        "salesLead": "查看销售部门业绩",
        "salesRep": "查看个人销售业绩",
        "chiefAccountant": "查看完整财务报告",
        "supportAgent": "查看服务报告"
      },
      {
        "resource": "系统配置与审计日志",
        "ceo": "查看完整的审计日志",
        "salesLead": "无权查看",
        "salesRep": "无权查看",
        "chiefAccountant": "查看财务单据日志",
        "supportAgent": "无权查看"
      }
    ],
    "pillars": [
      {
        "title": "传输加密与数据保护",
        "desc": "用户与系统之间的所有数据传输都通过 TLS/HTTPS 协议进行加密；数据的存储完全符合安全标准。"
      },
      {
        "title": "按组织进行数据分离",
        "desc": "不同企业的数据库通过租户及独立的访问配置进行分离，保障数据完全处于企业的掌控之中。"
      },
      {
        "title": "最小特权原则 (Least Privilege)",
        "desc": "每名员工仅能在其工作职责所及范围内获取权限，最大限度地减少越权访问或非法提取数据的风险。"
      },
      {
        "title": "系统审计日志 (Audit Log)",
        "desc": "系统支持对登录、状态更改和报告导出等关键操作进行记录追踪，明确账户信息与操作时间。"
      }
    ]
  },
  "roadmapAndCta": {
    "roadmapBadge": "切实可行的执行路线图",
    "roadmapTitle": "精益的阶段性部署路线图",
    "roadmapDescription": "实际时间表取决于组织的规模、所选模块的数量以及数据准备情况。按阶段部署的策略有助于企业在每个里程碑后对效果进行有效评估。",
    "deliverablesTitle": "交付成果 (Deliverables)：",
    "ctaBadge": "准备好迎接技术转型了吗？",
    "ctaTitle": "启动您的 AI ENTERPRISE 操作系统转型",
    "ctaDescription": "与 VMC Group 的解决方案架构专家进行一对一交流。我们将分析您目前的瓶颈，并基于您的实际业务难题构建真实的运营工作流演示。",
    "ctaBtnConsultation": "预约架构咨询与演示",
    "ctaBtnCapabilities": "进行系统能力调查",
    "trustBadge1": "不中断现有业务运营",
    "trustBadge2": "数据归企业完全所有",
    "trustBadge3": "贴心陪伴，提供技术支持与完善交接",
    "phases": [
      {
        "phase": "阶段 01",
        "duration": "步骤 1",
        "title": "调研与数据/流程标准化",
        "objective": "审查当前的数据交换流程与瓶颈，统一目标架构，并对核心目录进行标准化。",
        "deliverables": [
          "运营流程及数据交互图",
          "初步的数据结构和权限矩阵 (RBAC)",
          "部署计划及模块优先层级"
        ]
      },
      {
        "phase": "阶段 02",
        "duration": "步骤 2",
        "title": "配置系统并集成优先模块",
        "objective": "搭建环境，配置初步的关键模块，并连通主要业务的数据流。",
        "deliverables": [
          "优先模块的接收门户和数据库",
          "根据配置设置表单及审批流",
          "连通所选模块间的数据交换"
        ]
      },
      {
        "phase": "阶段 03",
        "duration": "步骤 3",
        "title": "试运行 (Pilot) 与人员培训",
        "objective": "在目标用户群体内开展试运行，基于知识库配置 AI 助手，并对实际用户进行培训。",
        "deliverables": [
          "测试环境及业务场景",
          "知识库 (RAG) 与 AI 的审批边界",
          "用户使用手册及培训会议"
        ]
      },
      {
        "phase": "阶段 04",
        "duration": "步骤 4",
        "title": "Go-live 上线，微调与移交",
        "objective": "系统投入正式运行，监控管理仪表板指标，并将管理权限平稳移交给企业。",
        "deliverables": [
          "在实际环境中正式运行的系统",
          "根据系统数据生成的 BI 管理报告看板",
          "交付运营文档及技术支持计划"
        ]
      }
    ]
  }
};
