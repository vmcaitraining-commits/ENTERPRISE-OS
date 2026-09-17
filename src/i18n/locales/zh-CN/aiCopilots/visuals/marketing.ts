export const marketing = {
  reportBadge: '各渠道投放成效分析 [模拟演示]',
  reconciledNotice: '系统配置完成后自动与 CRM 实际成单关联对账',
  simulatedBadge: '[模拟演示数据]',
  title: '全渠道投产比深度比对与待审内容管线',
  tableSectionTitle: '1. 各渠道获客成本（CAC）与合同成单转化率对比 [模拟演示]：',
  scenarioNote: '模拟演示剧本数据',
  tableHeaders: {
    channel: '广告投放渠道',
    spend: '预算支出',
    validLeads: '合规留资量',
    cac: '单线索成本 (CAC)',
    conversion: '商机成单转化率',
    recommendation: 'AI 优化建议'
  },
  channels: [
    {
      name: 'Google 搜索关键词广告',
      spend: '4500 万越南盾',
      validLeads: 243,
      cac: '185,000 越南盾',
      conversionToDeal: '28.4%',
      trend: 'up',
      recommendation: '建议追加 +2000 万预算'
    },
    {
      name: 'Meta 信息流广告 (Facebook)',
      spend: '5200 万越南盾',
      validLeads: 168,
      cac: '310,000 越南盾',
      conversionToDeal: '14.2%',
      trend: 'down',
      recommendation: '建议缩减 -2000 万预算'
    },
    {
      name: 'TikTok 短视频广告',
      spend: '1800 万越南盾',
      validLeads: 42,
      cac: '428,000 越南盾',
      conversionToDeal: '8.1%',
      trend: 'down',
      recommendation: '重新打磨受众定向与创意素材'
    }
  ],
  budgetProposal: {
    title: '建议预算动态调度方案 [参考剧本]：',
    desc: '建议将 20,000,000 越南盾预算从 Meta 转移至 Google Search，以吸纳更多高转化商机 [模拟演示场景]。',
    approveBtn: '批准预算调整建议',
    approvedNotice: '已批准预算调度剧本'
  },
  queueSectionTitle: '2. 营销待审内容管线 (Content Approval Queue) [模拟演示]：',
  queuePendingCount: '2 篇专业文章样本正等待市场部负责人审批',
  lengthLabel: '文章篇幅：',
  reviewNotesLabel: '合规校对批注：',
  approvePostBtn: '审批通过并排期',
  approvedPostNotice: '已批准排期发布',
  contentQueue: [
    {
      id: 1,
      title: '企业在采购 ERP 之前必须梳理规范 SOP 的 5 大核心征兆',
      channel: '官方技术博客与领英专栏 (LinkedIn)',
      wordCount: '1,450 字',
      complianceScore: '98/100 (达标合规)',
      complianceNotes: '已全部剔除绝对化宣传用语，完全遵循 VMC 品牌视觉及公关规范。',
      status: 'pending'
    },
    {
      id: 2,
      title: '建筑工程施工企业项目材料预算超支管控实用指南',
      channel: '白皮书电子书与下载专区',
      wordCount: '3,200 字',
      complianceScore: '92/100 (需重点留意)',
      complianceNotes: '文中引用了 1 项行业成本核算数据，建议由总会计师签字核验后发布。',
      status: 'pending'
    }
  ],
  checkpointNotice: '强制安全把关：AI 绝对无权直接在官网发布文章，亦无权擅自修改广告后台账户的花费限额。'
};
