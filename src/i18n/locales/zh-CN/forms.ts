/**
 * Canonical Source: Tiếng Việt (vi) -> Simplified Chinese (zh-CN)
 * Namespace: forms
 * 
 * Includes:
 * - Consultation form & contact form labels
 * - Field placeholders
 * - Selection options (company scales, industries, etc.)
 * - Validation messages (required, invalid format, minimum length)
 * - Submission states (submitting, success, error)
 * - Modal headers & disclaimers
 */
export default {
  // Field Labels
  fullNameLabel: '联系人姓名',
  companyNameLabel: '企业名称',
  workEmailLabel: '工作邮箱',
  businessEmailLabel: '企业邮箱',
  phoneLabel: '联系电话',
  companyScaleLabel: '人员规模',
  industryLabel: '所属主要行业',
  needDescriptionLabel: '需要解决的业务痛点或转型需求',
  consultationTypeLabel: '咨询形式',

  // Required indicators
  requiredIndicator: '*',

  // Field Placeholders
  fullNamePlaceholder: '张明',
  companyNamePlaceholder: '股份有限公司 / 有限责任公司...',
  emailPlaceholder: 'name@company.com',
  phonePlaceholder: '138 0013 8000',
  companyScalePlaceholder: '请选择企业规模...',
  industryPlaceholder: '请选择行业领域...',
  needDescriptionPlaceholder: '例如：需要打通市场与销售部门之间的客户数据，或希望实现内部审批流程的数字化与自动化...',

  // Scale Options
  scaleUnder20: '20 人以下',
  scale20to50: '20 - 50 人',
  scale50to150: '50 - 150 人',
  scale150to500: '150 - 500 人',
  scaleAbove500: '500 人以上',

  // Industry Options
  industryTrade: '商业贸易与零售',
  industryService: '专业服务咨询',
  industryEducation: '教育与职业培训',
  industryRealEstate: '房地产与项目分销',
  industryManufacturing: '工业制造与代工',
  industryDistribution: '渠道分销与批发',
  industryConstruction: '建筑工程与施工',
  industryTechnology: '科技与数字化企业',
  industryOther: '其他行业',

  // Form Validation Messages
  requiredFullName: '请输入联系人姓名',
  requiredCompanyName: '请输入您的企业名称',
  requiredEmail: '请输入工作邮箱',
  invalidEmail: '邮箱格式不正确（例如：name@company.com）',
  requiredPhone: '请输入联系电话',
  invalidPhoneLength: '电话号码长度至少需要8位数字',
  requiredCompanyScale: '请选择企业人员规模',
  requiredIndustry: '请选择企业所属行业',
  invalidFormToast: '请检查表单中填写的错误项！',
  missingRequiredFields: '请完整填写所有必填字段！',

  // Submission CTAs & States
  submitButton: '确认提交信息',
  submittingButton: '正在提交...',
  cancelButton: '取消',
  submissionSuccessToast: '信息提交成功！VMC Group 架构顾问将在24个工作小时内与您联系。',
  submissionErrorToast: '当前无法提交申请，请稍后重试。',
  contactSubmitButton: '提交咨询申请信息',
  contactSubmittingButton: '正在处理...',
  sendAdditionalRequest: '提交补充需求',

  // Contact Page Form
  contactBadge: '登记表单',
  contactTitle: '企业解决方案咨询登记',
  contactDesc: '请填写企业基本信息，以便在24小时内获取初步架构分析报告。',

  // Modal Titles & Headers
  assessmentBadge: 'AI 就绪度评估',
  assessmentTitle: '申请企业 AI 就绪度全面评估',
  assessmentDesc: 'VMC Group 系统架构专家将对技术储备、数据资产与业务流程进行调研，为您定制最优的 AI ENTERPRISE 落地规划路线。',

  bookingBadge: '1对1 深度预约',
  bookingTitle: '预约 AI 架构方案深度咨询',
  bookingDesc: '与 VMC Group 系统架构师进行45分钟一对一深度探讨，梳理多部门在统一协同操作系统上的连通方案。',

  generalBadge: '企业咨询',
  generalTitle: '登记 AI ENTERPRISE 解决方案咨询',
  generalDesc: '直接对接 VMC Group 专家团队，获取根据贵司实际规模、所属行业与业务流程量身定制的配置建议。',

  // Success Screen
  successTitle: '申请接收成功！',
  successDetail: '感谢来自 {companyName} 的 {fullName}。VMC Group 咨询专家将在24个工作小时内通过邮箱 {email} 和电话与您取得联系。',

  // Security & NDA Notice
  securityNotice: '保密承诺：VMC Group 尊重 100% 数据隐私，并在开展任何深度技术讨论前签署保密协议 (NDA)。'
};
