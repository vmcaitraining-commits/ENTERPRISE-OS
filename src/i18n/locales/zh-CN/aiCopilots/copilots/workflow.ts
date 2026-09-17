export const workflow = {
  slug: 'workflow',
  name: 'AI 业务流程与协同调度 Copilot（Workflow Copilot）',
  roleTitle: '跨部门标准作业规程（SOP）自动化协同助手',
  shortTagline: '全景监控跨部门业务单据流转，实时侦测流转瓶颈与堵点，智能建议资源动态调度与副审授权方案。',
  targetAudience: '首席运营官（COO）、质量管理部总监（QA/QC）、跨职能协作流程负责人',
  heroSample: {
    type: 'Process Bottleneck & Resource Reallocation',
    title: '流程监控：企业级 B2B 采购订单履约全链路 (SOP-OP-12)',
    timestamp: '15:30 PM [实时扫描在途 42 笔业务订单]',
    summary: '侦测到在“财务账期核定”节点发生严重堵塞，平均停滞达 18.5 小时（超 SLA 规定 250%）；系统建议启动临时副审授权以快速疏导。',
    dataPoints: [
      { label: '被监控业务流程', value: 'SOP-OP-12 (5 大部门协同链)', status: 'normal' },
      { label: '检出异常堵点', value: '步骤 3：财务账期资信审核', status: 'alert' },
      { label: '超期超时状况', value: '耗时 18.5h (标准 SLA 为 5h)', status: 'warning' },
      { label: '积压订单总规模', value: '7 笔订单涉及 4.5 亿金额', status: 'alert' },
    ],
    sampleSnippet: '• 根因深度剖析：该节点主审财务会计突发请假，副审备份人员未获授权，导致流程全线阻断。\n• 连锁业务影响：仓储部无法出库备料，物流车队被动等待，面临重大违约赔偿风险。\n• 自动化建议：建议将 5000 万以内的订单临时委托梅兰副主管审批，并全线推送加急协同提醒。',
    actionRequired: '财务部主管点击“批准临时副审授权”以立即放行 7 笔受阻订单。'
  },
  beforeAfter: [
    {
      task: '跨部门业务单据流转进度跟踪',
      before: {
        process: '销售为了催单满大楼跑财务工位问“批了没”，财务又打电话催仓库，各部门互相推诿扯皮。',
        timeSpent: '每天耗费大量精力用于线下催办',
        painPoint: '单据静静滞留在某人电脑里无人知晓，直到客户震怒催货才慌忙寻找。'
      },
      after: {
        process: 'AI 引擎实时将单据流转可视化投影在大屏上；前一环节刚一签署完成，下一环节秒级触发协同任务。',
        timeSpent: '全流程即时流转互锁',
        humanRole: '各岗位专员心无旁骛，高效攻坚自己任务清单里的本职工作。'
      }
    },
    {
      task: '流程卡顿瓶颈识别与应急调度',
      before: {
        process: '只有在月度例会或收到客户正式违约索赔函时，管理层才发现交付周期被严重拖垮。',
        timeSpent: '数周甚至整月后才被动察觉',
        painPoint: '不清楚究竟是哪个部门拖后腿，各部门互相指责甩锅。'
      },
      after: {
        process: 'AI 自动比对各节点实际工时与预设 SLA，一旦出现积压即刻标红预警并向负责人发出调度提醒。',
        timeSpent: '实时分钟级预警响应',
        humanRole: '管理层在问题刚露头时主动统筹人手，将阻滞掐灭在萌芽状态。'
      }
    },
    {
      task: '标准作业规程（SOP）合规性把控',
      before: {
        process: '为赶时间，个别员工私自跳过质检验收环节或缺少领导签字便直接发货，隐患极大。',
        timeSpent: '线下违规操作难以杜绝',
        painPoint: '不合格品流向市场，导致严重的品牌名誉受损和高额赔付代价。'
      },
      after: {
        process: '系统在关键卡点强制实施依赖项校验，若缺少必要的质检附件或复核签字，下一环节严禁放行。',
        timeSpent: '自动化合规守卫卡点',
        humanRole: '确保 100% 的业务交付件严丝合缝契合质量标准与法律规范。'
      }
    }
  ],
  demoSpec: {
    title: '模拟演示实践：全链路流程图谱、堵点瓶颈预警与资源调度建议',
    sourceDescription: '数据接入自企业业务工作流引擎（Workflow Engine）以及各部门处理单据的真实时间戳。',
    dataSources: [
      { name: '企业 SOP 标准业务规程', type: '流程节点、责任角色、SLA 时限要求', syncMode: '流程引擎配置' },
      { name: '任务执行实时日志 (Task Log)', type: '开始时间、签批时间、实际经办人', syncMode: '毫秒级写入' },
      { name: '员工排班与在岗状态', type: '在岗人员、休假状态、外出申请', syncMode: 'HRM 实时联动' }
    ],
    disclaimer: 'AI 仅提供工作流瓶颈分析与调度建议方案。任何审批权限的下放、流程变更或责任人调整，必须由流程主责领导最终审批生效。'
  },
  governance: {
    allowedData: [
      '企业各业务流程架构图（SOP）及节点路由转发逻辑',
      '系统中各项经办任务的认领时间、处理耗时与完成时间戳',
      '各环节任务相比既定 SLA 标准的超期超时统计指标',
      '各职能部门及个人名下当前在途积压的任务单据数量'
    ],
    prohibitedData: [
      '严禁系统调阅与流程进度无关的绝密商业合同核心财务条款',
      '系统绝对禁止擅自跳过涉及人身安全或财务审计的核心审批卡点',
      '严禁 AI 未经公司正式红头文件审批私自重构流程主干路由架构',
      '严禁擅自删改或篡改任何人员的历史签批操作时间记录'
    ],
    rbacRules: [
      '经办员工仅能更新分配给自身名下的待办任务节点。',
      '部门主管有权在本部门内部调配任务分工或启用副审机制。',
      '首席运营官（COO）享有对全公司 SOP 规程变更的唯一终审批准权。'
    ],
    auditLogMechanisms: [
      '以秒级精度记录单据在各部门之间流转交接的时间戳轨迹。',
      '完整保存系统给出的堵点预警日志及调度建议的历史快照。',
      '详细留存每一次越权审批、豁免卡点或临时授权的批准人与审批意见。'
    ]
  },
  taskDivision: {
    automatedTasks: [
      { task: '当前节点任务签发后，秒级向下一责任人分发待办任务', boundary: '依据流程图谱', systemOutput: '新待办任务通知' },
      { task: '连续监控节点已耗工时并对照 SLA，超时前自动黄色预警', boundary: '计时器自动轮询', systemOutput: '超期预警提示' },
      { task: '智能汇总队列积压特征，定位出全链路最大的流转瓶颈', boundary: '排队论数据分析', systemOutput: '流程堵点热力卡' },
      { task: '主审人员缺勤时，基于权责矩阵自动推荐具备副审资格的人选', boundary: '权限矩阵匹配', systemOutput: '临时副审授权草案' }
    ],
    mandatoryApprovals: [
      { checkpoint: '批准跳过或后补某项质检复核步骤', reason: '面临严重的质量与安全合规风险', approverRole: '质量管理部总监（QA/QC）', actionIfRejected: '严格退回原节点补齐检查' },
      { checkpoint: '批准向备岗人员授予临时副审签批权', reason: '牵涉企业签字权责的严肃性与法律责任', approverRole: '业务主管部门正职负责人', actionIfRejected: '维持原主审人，按常规请假规程处置' },
      { checkpoint: '修订某核心业务环节的 SLA 标准考核时限', reason: '直接影响向客户做出的商业履约承诺', approverRole: '首席运营官（COO）', actionIfRejected: '继续执行原版严格 SLA 时限' }
    ]
  },
  metrics: [
    { name: '全链路流转总周期 (Cycle Time)', formula: '从第一步发起建单至最后一步闭环归档的耗时总和', dataSource: '工作流引擎时间戳', frequency: '每周统计', targetBenchmark: '端到端流转周期压缩 30% - 50%' },
    { name: 'SLA 按期合规履约率', formula: '(在规定 SLA 内完成的任务数 / 任务总数) × 100%', dataSource: 'SLA 报表中心', frequency: '每周核算', targetBenchmark: '试点期达成率 ≥ 92%' },
    { name: '流程堵点平均发现与处置耗时', formula: '从发生异常堆积到调度指令正式生效的时间间隔', dataSource: '审计日志跟踪', frequency: '按单点事件考核', targetBenchmark: '处置耗时控制在 2 小时以内' }
  ],
  pilotPlan: {
    recommendedScope: '选取 1 条最关键的跨部门业务大动脉：B2B 采购订单审批履约流程（商务 -> 财务 -> 仓储）。',
    duration: '分阶段试点实施',
    pilotSteps: [
      { week: '第 1 阶段', phase: '流程建模与 SLA 阈值标定', activities: ['梳理 5 大流转节点的实际责任岗位', '为各节点设定合理的 SLA 考核基准（如：价格审核 2h，资信核定 4h）', '明确主审与副审角色的权责映射关系'], deliverable: '数字化流程图谱经三方主管联合签字' },
      { week: '第 2 阶段', phase: '自动化通知与超时警报联调', activities: ['打通系统任务分发通知', '配置工时达 70% 时的提前黄色告警', '试运行首批 20 笔真实业务订单流转'], deliverable: '自动化流转稳定运行记录' },
      { week: '第 3 阶段', phase: '堵点智能感知与副审授权演练', activities: ['观察流程图谱上的实时热力图堆积情况', '实测触发临时副审授权机制并评估其疏通成效', '组织跨部门例会研判卡阻的组织与人员成因'], deliverable: '成功化解 3 起典型堵点案例' },
      { week: '第 4 阶段', phase: '周期压缩复盘与推广准备', activities: ['核对履约耗时较历史基准的降幅', '完善标准作业指导书，形成规章制度', '向采购审批、招聘入职等其他复杂流程拓展推进'], deliverable: '跨部门工作流 Pilot 验收总结报告' }
    ],
    goNoGoCriteria: [
      '试点业务的平均流转闭环周期较此前手工阶段缩短 30% 以上。',
      '单据在流转中彻底杜绝“踢皮球”、卡阻无明确归口责任人的现象。',
      '各参测部门主管一致认可系统有效减少了线下催办电话与低效沟通。'
    ]
  }
};
