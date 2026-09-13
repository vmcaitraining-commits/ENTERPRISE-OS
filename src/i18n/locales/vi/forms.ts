/**
 * Canonical Source: Tiếng Việt (vi)
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
  fullNameLabel: 'Họ và tên người liên hệ',
  companyNameLabel: 'Tên doanh nghiệp',
  workEmailLabel: 'Email công tác',
  businessEmailLabel: 'Email doanh nghiệp',
  phoneLabel: 'Số điện thoại liên hệ',
  companyScaleLabel: 'Quy mô nhân sự',
  industryLabel: 'Ngành nghề chính',
  needDescriptionLabel: 'Nhu cầu hoặc điểm nghẽn vận hành cần giải quyết',
  consultationTypeLabel: 'Hình thức tư vấn',

  // Required indicators
  requiredIndicator: '*',

  // Field Placeholders
  fullNamePlaceholder: 'Nguyễn Văn A',
  companyNamePlaceholder: 'Công ty Cổ phần / TNHH...',
  emailPlaceholder: 'name@company.com',
  phonePlaceholder: '0912 345 678',
  companyScalePlaceholder: 'Chọn quy mô...',
  industryPlaceholder: 'Chọn ngành nghề...',
  needDescriptionPlaceholder: 'Ví dụ: Cần đồng bộ dữ liệu khách hàng giữa phòng Marketing và Sales, hoặc muốn số hóa quy trình phê duyệt nội bộ...',

  // Scale Options
  scaleUnder20: 'Dưới 20 nhân sự',
  scale20to50: '20 - 50 nhân sự',
  scale50to150: '50 - 150 nhân sự',
  scale150to500: '150 - 500 nhân sự',
  scaleAbove500: 'Trên 500 nhân sự',

  // Industry Options
  industryTrade: 'Thương mại & Bán lẻ',
  industryService: 'Dịch vụ chuyên nghiệp',
  industryEducation: 'Giáo dục & Đào tạo',
  industryRealEstate: 'Bất động sản',
  industryManufacturing: 'Sản xuất & Gia công',
  industryDistribution: 'Phân phối & Bán buôn',
  industryConstruction: 'Xây dựng & Thi công',
  industryTechnology: 'Doanh nghiệp Công nghệ',
  industryOther: 'Ngành nghề khác',

  // Form Validation Messages
  requiredFullName: 'Vui lòng nhập họ và tên người liên hệ',
  requiredCompanyName: 'Vui lòng nhập tên doanh nghiệp của bạn',
  requiredEmail: 'Vui lòng nhập email công tác',
  invalidEmail: 'Email không đúng định dạng (ví dụ: name@company.com)',
  requiredPhone: 'Vui lòng nhập số điện thoại liên hệ',
  invalidPhoneLength: 'Số điện thoại phải có ít nhất 8 chữ số',
  requiredCompanyScale: 'Vui lòng chọn quy mô nhân sự của doanh nghiệp',
  requiredIndustry: 'Vui lòng chọn ngành nghề kinh doanh',
  invalidFormToast: 'Vui lòng kiểm tra các trường bị lỗi!',
  missingRequiredFields: 'Vui lòng hoàn tất các trường bắt buộc!',

  // Submission CTAs & States
  submitButton: 'Xác nhận gửi thông tin',
  submittingButton: 'Đang gửi...',
  cancelButton: 'Hủy bỏ',
  submissionSuccessToast: 'Gửi thông tin thành công! Chuyên gia VMC Group sẽ liên hệ trong 24h làm việc.',
  submissionErrorToast: 'Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau.',
  contactSubmitButton: 'Gửi thông tin đăng ký tư vấn',
  contactSubmittingButton: 'Đang xử lý...',
  sendAdditionalRequest: 'Gửi yêu cầu bổ sung',

  // Contact Page Form
  contactBadge: 'PHIẾU ĐĂNG KÝ',
  contactTitle: 'Đăng Ký Tư Vấn Giải Pháp Doanh Nghiệp',
  contactDesc: 'Điền thông tin doanh nghiệp để nhận báo cáo phân tích kiến trúc sơ bộ trong vòng 24 giờ.',

  // Modal Titles & Headers
  assessmentBadge: 'ĐÁNH GIÁ NĂNG LỰC SẴN SÀNG AI',
  assessmentTitle: 'Đăng Ký Đánh Giá Mức Độ Sẵn Sàng AI',
  assessmentDesc: 'Chuyên gia kiến trúc của VMC Group sẽ khảo sát mức độ sẵn sàng công nghệ, dữ liệu và quy trình để đề xuất lộ trình ứng dụng AI ENTERPRISE tối ưu.',

  bookingBadge: 'ĐẶT LỊCH LÀM VIỆC 1:1',
  bookingTitle: 'Đặt Lịch Tư Vấn Kiến Trúc AI',
  bookingDesc: 'Phiên làm việc chuyên sâu 45 phút cùng Kiến trúc sư hệ thống VMC Group về phương án kết nối các phòng ban trên một nền tảng vận hành thống nhất.',

  generalBadge: 'TƯ VẤN DOANH NGHIỆP',
  generalTitle: 'Đăng Ký Tư Vấn Giải Pháp AI ENTERPRISE',
  generalDesc: 'Kết nối trực tiếp cùng đội ngũ VMC Group để nhận cấu hình may đo theo quy mô, ngành nghề và quy trình thực tế của doanh nghiệp.',

  // Success Screen
  successTitle: 'Tiếp nhận yêu cầu thành công!',
  successDetail: 'Cảm ơn Quý khách {fullName} từ doanh nghiệp {companyName}. Chuyên gia tư vấn của VMC Group sẽ liên hệ lại qua email {email} và số điện thoại trong vòng 24 giờ làm việc.',

  // Security & NDA Notice
  securityNotice: 'Cam kết bảo mật: VMC Group tôn trọng 100% quyền riêng tư dữ liệu và ký thỏa thuận bảo mật thông tin (NDA) trước mọi buổi làm việc chuyên sâu.'
};
