export const ceo = {
  simulatedHeader: '[模拟演示场景] 接入数据后支持于上午 07:30 自动生成简报',
  reconciledSubheader: '系统配置就绪后，跨 4 大业务子系统自动交叉对账',
  simulatedBadge: '[模拟演示数据]',
  title: '晨间管理执行简报（Morning Executive Brief）',
  rbacNotice: '安全权限管控：仅向总裁办（CEO / 董事长）及授权助理开放',
  kpis: {
    revenue: {
      label: '本月累计营收 MTD [模拟数据]',
      value: '3.82 / 4.15 亿',
      note: '完成月度计划的 92.0%'
    },
    cashflow: {
      label: 'D+21 资金流预测 [模拟数据]',
      value: '- 4.2 亿越南盾',
      note: '短期资金缺口风险预警'
    },
    sla: {
      label: '工作任务 SLA [模拟数据]',
      value: '94.2% 按期完成',
      note: '本周 380/403 项任务'
    },
    anomalies: {
      label: '待决策业务异常 [模拟数据]',
      value: '02 项关键卡点',
      note: '亟待管理层下达批示'
    }
  },
  anomaliesListTitle: '异常事件清单 [模拟场景与演示数据]：',
  clickInstruction: '点击查看详情并审批应对方案',
  riskWarningBadge: '风险预警 [模拟演示]',
  impactLabel: '业务影响：',
  anomalies: [
    {
      id: 1,
      title: 'XL-088 号施工合同（南安生态城）进度滞后 3 天',
      impact: '6.5 亿越南盾回款顺延至下一账期',
      department: '工程项目管理中心与财务部',
      suggestedAction: '召集工程项目总监与财务总监于 09:30 召开 15 分钟协调会',
      actionKey: 'meet'
    },
    {
      id: 2,
      title: 'Meta 渠道广告投放消耗环比上升 18%，但有效表单转化率下降 6%',
      impact: '本周单线索获客成本（CAC）由 21 万升至 27.5 万越南盾',
      department: '市场营销部',
      suggestedAction: '责成市场部总监于 11:30 前完成受众画像定向审查与调优',
      actionKey: 'review'
    }
  ],
  proposedActionHeader: 'AI 模拟建议应对举措（供管理层审核批示）：',
  approvalCheckpointNotice: '强制卡点：AI 严禁越权向外分发通知。只有经总裁确认后方可触发系统推送。',
  dismissBtn: '忽略',
  approveBtn: '核准并发送会议通知',
  approvedNotice: '已向相关两部门分发会议召集通知',
  dismissedNotice: '已记录并忽略此项预警'
};
