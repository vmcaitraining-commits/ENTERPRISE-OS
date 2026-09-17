/**
 * Canonical Source: Tiếng Việt (vi) -> Simplified Chinese (zh-CN)
 * Namespace: accessibility
 * 
 * Includes:
 * - Dialog & Modal accessibility (aria-labels, role descriptions)
 * - Navigation & Drawer toggles (open/close menus)
 * - Screen-reader-only labels (sr-only)
 * - Theme & Language control labels
 * - Form accessibility labels & error live regions
 * - Shared visual & diagram alt texts
 */
export default {
  // Modal & Dialog
  closeConsultationModalAria: '关闭咨询登记窗口',
  consultationDialogAriaLabel: '企业解决方案咨询登记弹窗',
  closeDialogAria: '关闭对话窗口',

  // Navigation & Menus
  openMobileMenuAria: '打开移动端导航菜单',
  closeMobileMenuAria: '关闭移动端导航菜单',
  mobileMenuNavAria: '移动端导航菜单',
  primaryNavAria: 'VMC Group 官网主导航',
  footerNavAria: 'VMC Group 页脚导航',
  breadcrumbNavAria: '页面层级面包屑导航',
  skipToContentAria: '跳过导航直接进入主要内容',

  // Theme & Language Controls
  toggleThemeAria: '切换浅色与深色界面模式',
  selectLanguageAria: '打开语言选择面板',
  languageListAria: '支持的语言列表',
  activeLanguageIndicator: '当前选中的语言',

  // Form Controls Accessibility
  contactFormAriaLabel: '企业解决方案咨询登记表单',
  formRequiredFieldAria: '必填字段',
  formErrorNoticeAria: '输入错误提示',
  formSuccessNoticeAria: '提交成功提示',
  characterCountAria: '剩余字符数',

  // Media & Shared Visual Alt Texts
  companyLogoAlt: 'VMC Group 标志 - AI ENTERPRISE OS',
  dataFlowDiagramAlt: 'VMC Group AI Enterprise 数据流与子系统架构图',
  systemStatusIconAlt: '系统运行状态指示图标',
  securityShieldAlt: '信息安全承诺与 NDA 数据隐私保护标志',
  verifiedBadgeAlt: '已通过安全测试验证的子系统认证徽章',
  loadingIndicatorAlt: '正在加载数据，请稍候'
};
