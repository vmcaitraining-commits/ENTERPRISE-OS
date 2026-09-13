/**
 * Canonical Source: Tiếng Việt (vi)
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
  closeConsultationModalAria: 'Đóng cửa sổ đăng ký tư vấn',
  consultationDialogAriaLabel: 'Cửa sổ đăng ký tư vấn giải pháp doanh nghiệp',
  closeDialogAria: 'Đóng cửa sổ đối thoại',

  // Navigation & Menus
  openMobileMenuAria: 'Mở menu điều hướng di động',
  closeMobileMenuAria: 'Đóng menu điều hướng di động',
  mobileMenuNavAria: 'Menu điều hướng di động',
  primaryNavAria: 'Điều hướng chính website VMC Group',
  footerNavAria: 'Điều hướng chân trang VMC Group',
  breadcrumbNavAria: 'Điều hướng phân cấp trang',
  skipToContentAria: 'Bỏ qua chuyển đến nội dung chính',

  // Theme & Language Controls
  toggleThemeAria: 'Chuyển đổi giao diện sáng tối',
  selectLanguageAria: 'Mở bảng lựa chọn ngôn ngữ',
  languageListAria: 'Danh sách các ngôn ngữ được hỗ trợ',
  activeLanguageIndicator: 'Ngôn ngữ đang được chọn',

  // Form Controls Accessibility
  contactFormAriaLabel: 'Biểu mẫu đăng ký tư vấn giải pháp doanh nghiệp',
  formRequiredFieldAria: 'Trường thông tin bắt buộc',
  formErrorNoticeAria: 'Cảnh báo lỗi nhập liệu',
  formSuccessNoticeAria: 'Thông báo gửi thành công',
  characterCountAria: 'Số ký tự còn lại',

  // Media & Shared Visual Alt Texts
  companyLogoAlt: 'Logo VMC Group - AI ENTERPRISE OS',
  dataFlowDiagramAlt: 'Sơ đồ luồng dữ liệu và kiến trúc phân hệ AI Enterprise VMC Group',
  systemStatusIconAlt: 'Biểu tượng trạng thái hoạt động hệ thống',
  securityShieldAlt: 'Biểu tượng cam kết bảo mật thông tin và quyền riêng tư dữ liệu NDA',
  verifiedBadgeAlt: 'Huy hiệu xác thực phân hệ đã kiểm thử an toàn',
  loadingIndicatorAlt: 'Đang tải dữ liệu, vui lòng đợi trong giây lát'
};
