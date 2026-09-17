export const finance = {
  badge: '银行交易流水对账 [模拟演示]',
  subnote: '系统配置就绪后，模拟银行流水与业务系统自动同步',
  simulatedBadge: '[模拟演示数据]',
  title: '银行交易流水自动对账、异常核查与现金流预测',
  tabs: {
    reconcile: '流水智能对账 [模拟演示]',
    forecast: '现金流动态预测 [模拟演示]'
  },
  matched: {
    header: '建议智能匹配交易 [模拟演示场景与数据]：',
    confidence: '模拟置信度：99.8%',
    bankStatementLabel: '银行电子对账单：',
    bankStatementAmount: '+ 45,000,000 越南盾',
    bankStatementNote: '"CTY TNHH TM BINH MINH TT TIEN HOP DONG HD-2026-091"',
    crmOrderLabel: 'CRM 关联订单：',
    crmOrderName: '合同 #HD-2026-091',
    crmOrderNote: '应收结算金额：45,000,000 越南盾（完全吻合）',
    aiSuggestion: 'AI 建议动作：建议自动生成预制收款凭证草稿，供财务会计复核并审批入账。',
    confirmReceiptBtn: '确认生成收款单',
    receiptCreated: '已生成收款凭证草稿 #PT-0912-01'
  },
  exception: {
    header: '对账异常交易 [模拟演示场景 - 需财务专员介入处置]：',
    varianceAmount: '金额差异：- 250,000 越南盾',
    bankStatementLabel: '银行电子对账单：',
    bankStatementAmount: '+ 12,250,000 越南盾',
    bankStatementNote: '"AN PHAT CK MUA HANG SO 8821"',
    originalInvoiceLabel: '原始发票 #8821：',
    originalInvoiceAmount: '12,500,000 越南盾',
    originalInvoiceNote: '差额短缺 250,000 越南盾（可能为客户自行扣减了银行跨行手续费或未核准的折扣）',
    checkpointWarning: '安全控制防线：在金额未能绝对吻合时，AI 严禁擅自核销对账。',
    manualActionBtn: '手工挂账处置并向销售反馈'
  },
  forecast: {
    header: '未来资金流动态预测 [模拟演示场景与分析参考]',
    subnote: '基于历史回款周期与敏感性分析（在接入全量财务及业务数据后可用）',
    baseScenario: {
      label: '基准预测情景 [模拟演示]：',
      amount: '+ 5.2 亿越南盾',
      assumption: '假设 90% 的客户按照合同约定如期履约付款'
    },
    conservativeScenario: {
      label: '审慎预测情景 [模拟演示]：',
      amount: '+ 1.8 亿越南盾',
      assumption: '假设 2 笔工程安装合同回款延期 15 天'
    },
    optimisticScenario: {
      label: '乐观预测情景 [模拟演示]：',
      amount: '+ 7.8 亿越南盾',
      assumption: '假设在 09 月 30 日前成功清收所有历史应收逾期款'
    },
    recommendationStrong: 'AI 模拟预测给出的管理参考建议：',
    recommendationText: '未来 21 天内现金流头寸处于安全边际。但 09 月 25 日面临 4.5 亿薪资发放及 1.2 亿增值税集中支出；建议总会计师督促销售团队在 09 月 22 日前加紧跟进南安公司的 2 笔到期工程款。'
  },
  checkpointNotice: '核心安全边界：AI 仅具备只读权限调阅流水并草拟预制凭证。AI 绝对无权发起任何对外资金划转或直接修改账面余额。'
};
