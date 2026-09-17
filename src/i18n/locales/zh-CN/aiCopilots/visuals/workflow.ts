export const workflow = {
  badgeBottleneck: '流程卡点侦测 [模拟演示]',
  badgeProcess: 'B2B 采购订单审批履约流程模拟',
  badgeIllustrative: '[模拟演示数据]',
  title: '跨部门业务流程图谱与资源动态调度建议',
  progressTitle: '审批流经 5 大职能部门的流转进展：',
  progressAlert: '卡阻滞留于第 3 步（财务应收审核）',
  stepTimeLabel: '已耗工时：',
  stepSlaPrefix: 'SLA 规定基准：',
  steps: [
    {
      step: 1,
      title: '录入 B2B 采购订单',
      dept: '销售商务部',
      timeSpent: '25 分钟',
      slaLimit: '2 小时'
    },
    {
      step: 2,
      title: '审批价格折扣与商务条款',
      dept: '销售总监',
      timeSpent: '1.2 小时',
      slaLimit: '4 小时'
    },
    {
      step: 3,
      title: '账期资信与应收账款核定',
      dept: '财务应收主管',
      timeSpent: '18.5 小时',
      slaLimit: '5 小时',
      details: '因主审财务会计突发请病假，导致 7 笔订单（涉及金额 4.5 亿越南盾）发生异常滞留。'
    },
    {
      step: 4,
      title: '出具出库通知与备料拣货',
      dept: '仓储物流中心',
      timeSpent: '等待步骤 3 完成',
      slaLimit: '3 小时'
    },
    {
      step: 5,
      title: '交付运抵工地与签收回执',
      dept: '车队与工程运输',
      timeSpent: '等待出库签单',
      slaLimit: '24 小时'
    }
  ],
  suggestion: {
    title: 'AI 工作流引擎提出的自动化建议：',
    description: '针对 50,000,000 越南盾以下的常规订单，建议临时授权财务部副主管（梅兰女士）副审权限，以立即疏解当前受阻的 5/7 张订单。',
    subApproverName: '财务部副主管（梅兰女士）',
    btnApprove: '批准临时副审授权',
    approvedStatus: '已成功授权：5 笔订单正在顺畅流转放行'
  },
  checkpointNotice: '强制合规卡点：AI 仅负责识别流转卡阻并出具建议方案。所有审批权下放与调配操作必须由部门正职主管亲自签字确认。'
};
