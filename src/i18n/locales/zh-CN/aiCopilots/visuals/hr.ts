export const hr = {
  badge: '人力资源与绩效管理 [模拟演示]',
  subnote: '考勤对账与员工发展场景模拟',
  simulatedBadge: '[模拟演示数据]',
  title: '考勤异常识别、新员工入职协同与技能缺口看板',
  tabs: {
    exceptions: '考勤异常清单 (3) [模拟演示]',
    onboarding: '新员工入职协同 [模拟演示]',
    skillgap: '团队技能缺口 [模拟演示]'
  },
  exceptionsSection: {
    subtitle: '智能识别出 3 起需员工补充证明材料的异常考勤打卡：',
    deadlineNotice: '补充申诉说明截止时间：每月 25 日',
    datePrefix: '日期：',
    aiSuggestionPrefix: 'AI 建议动作：',
    remindBtn: '提醒补充申诉',
    remindedBtn: '已发送催交提醒',
    items: [
      {
        id: 1,
        name: '阮文安',
        dept: '项目管理部',
        date: '2026/09/05',
        issue: '缺少下班签退打卡记录（Check-out）',
        suggestedAction: '自动发送提醒，请员工补交漏打卡情况说明单'
      },
      {
        id: 2,
        name: '陈氏碧',
        dept: '财务部',
        date: '2026/09/08',
        issue: '上班迟到 28 分钟（尚未提交审批请假单）',
        suggestedAction: '提醒员工补交外勤出差或因公外出审批单'
      },
      {
        id: 3,
        name: '范明德',
        dept: '业务部',
        date: '2026/09/09',
        issue: '全天缺勤（未见休假审批流）',
        suggestedAction: '提示部门主管确认缺勤原因并核实员工状况'
      }
    ]
  },
  onboardingSection: {
    employeeName: '黎黄南 - ERP 实施工程师（入职 12 天）',
    mentor: '带教导师：武俊明（实施项目主管）',
    progressBadge: '入职进展：3/5 阶段达成（按期推进）',
    steps: [
      { step: 1, title: '签订正式劳动合同与领取办公设备', date: '第 1 天', status: 'completed' },
      { step: 2, title: '完成企业文化宣导与各项规章制度培训', date: '第 3 天', status: 'completed' },
      { step: 3, title: '与带教导师会谈并确立试用期工作目标 (KPI)', date: '第 7 天', status: 'completed' },
      { step: 4, title: '入职 30 天试用期工作进展双向评估', date: '第 30 天', status: 'active' },
      { step: 5, title: '人事评审委员会召开转正评审答辩会', date: '第 60 天', status: 'upcoming' }
    ]
  },
  skillgapSection: {
    subtitle: '对照实际业务 KPI 与岗位胜任力模型（Skill Matrix）进行偏离度诊断：',
    gapPrefix: '技能差距：',
    currentPrefix: '当前水平：',
    benchmarkPrefix: '岗位达标基准：',
    items: [
      { skill: '大客户商务谈判能力 (B2B)', dept: '销售部', current: 65, benchmark: 90, gap: '-25%' },
      { skill: 'Jira 及企业标准 SOP 项目管理工具运用', dept: '技术工程部', current: 78, benchmark: 85, gap: '-7%' },
      { skill: '税务合规管控与数电发票处理实务', dept: '财务部', current: 88, benchmark: 90, gap: '-2%' }
    ]
  },
  checkpointNotice: '强制合规卡点：AI 绝无权限擅自扣发员工薪资或决定解雇员工。必须由薪酬绩效专员（C&B）审定考勤，并报管理层签批。'
};
