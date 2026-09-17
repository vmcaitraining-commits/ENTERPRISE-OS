export const sales = {
  hotLeadBadge: '高意向商机 • 92/100',
  simulatedIntake: '[模拟演示场景] 通过 Webhook 接入',
  simulatedBadge: '[模拟演示数据]',
  companyName: '昇龙工程技术股份公司',
  contactPerson: '陈友德（总经理 / 执行董事）',
  companyScale: '60 人规模 / 建筑工程安装行业',
  phone: '0983.xxx.888',
  tabs: {
    score: '评分判定依据 [模拟]',
    quote: '预制报价草案 [模拟]',
    email: '首联沟通邮件草案 [模拟]'
  },
  scoreTab: {
    title: '线索评分 92/100 的三大依据 [模拟演示场景与数据]：',
    reasons: [
      {
        num: '1.',
        label: '官网行为轨迹：',
        desc: '48 小时内 5 次深度访问产品价格明细页，并已下载《施工现场数字化管理方案白皮书》。'
      },
      {
        num: '2.',
        label: '客户画像契合：',
        desc: '企业规模 60 人，登记职务为总经理/执行董事（业务最终决策者级别）。'
      },
      {
        num: '3.',
        label: '项目紧迫程度：',
        desc: '上线时间选择“本月内启动”，且留存了准确无误的个人直联手机号码。'
      }
    ],
    mainNeedLabel: '系统记录的核心诉求：',
    mainNeedValue: '严格控制当前 4 个同步在建施工项目的材料预算超支风险。',
    suggestedPackageLabel: 'AI 建议匹配方案 [仅供参考]：',
    suggestedPackageValue: '工程安装行业标准版 ERP（50 账户）+ 施工现场材料管理与工程预决算模块。'
  },
  quoteTab: {
    title: '预制方案报价草案 #BG-2026-TL01 [模拟演示数据]',
    framework: 'VMC 官方标准刊例价目表',
    items: [
      { name: '1. 建筑安装云 ERP 企业授权（50 账户 / 12 个月）', price: '120,000,000 越南盾' },
      { name: '2. 施工现场材料库房管理与工程预决算模块', price: '45,000,000 越南盾' },
      { name: '3. 系统部署实施、业务 SOP 梳理与分期培训辅导服务', price: '35,000,000 越南盾' }
    ],
    totalLabel: '预估合计金额 [模拟演示]（未含增值税）：',
    totalValue: '200,000,000 越南盾',
    discountNote: '* 本报价遵照专员级权限执行 0% 折扣。任何额外折扣申请均须呈报销售总监审批。'
  },
  emailTab: {
    toLabel: '收件人：',
    toEmail: 'ductran@thanglongcons.vn',
    subjectLabel: '邮件主题：',
    subjectValue: '致昇龙工程：关于施工项目材料预算超支管控的数字化解决方案 - VMC Group',
    greeting: '尊敬的陈友德总经理：',
    paragraph1: '我是来自 VMC Group 的商务顾问小黄。获悉贵司目前正面临多个在建工地材料预算超支的管控挑战……',
    paragraph2: '随信谨附上针对 50 人团队量身规划的工程安装 ERP 解决方案框架草案，其中已重点涵盖贵司关注的现场库房管控模块。能否允许我今天下午 14:00 与您通一次 10 分钟的简短电话深入交流？'
  },
  checkpointNotice: '强制把关卡点：AI 绝无权限自行发送对外报价或邮件。必须由销售顾问逐项复核后手动点击发送。',
  submitBtn: '顾问复核并发送邮件',
  submittedNotice: '已正式发送邮件并将沟通轨迹存档至 CRM'
};
