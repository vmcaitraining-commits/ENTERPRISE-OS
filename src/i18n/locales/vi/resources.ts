/**
 * Canonical Source: Tiếng Việt (vi)
 * Namespace: resources
 * 
 * Kho Tài Liệu Kỹ Thuật, Quy Chuẩn SOP, FAQ & Chính Sách Bảo Mật / Điều Khoản
 */
export default {
  // Hero & Header
  badge: 'TÀI NGUYÊN & TRI THỨC VẬN HÀNH',
  title: 'Kho Tài Liệu Kỹ Thuật, Quy Chuẩn SOP & Câu Hỏi Thường Gặp',
  subtitle: 'Cung cấp các bản vẽ kiến trúc mẫu, khung tài liệu SOP và các giải đáp thực tế về bảo mật, chi phí và triển khai hệ điều hành AI ENTERPRISE.',

  // Section 1: Documents & Standards
  sectionDocBadge: 'TÀI LIỆU KỸ THUẬT & QUY TRÌNH',
  sectionDocTitle: 'Tài Liệu Mẫu & Quy Chuẩn Kiến Trúc',
  sectionDocTransparency: 'Minh bạch trạng thái tài liệu thực tế',
  btnPreview: 'Xem nội dung mẫu',
  btnClose: 'Đóng',
  previewAriaClose: 'Đóng bản xem trước',
  previewDisclaimer: 'Nội dung mẫu minh họa — Không có link tải trực tiếp',

  // Categories
  catArchitecture: 'Kiến trúc Hệ thống',
  catSop: 'Quy trình SOP Số',
  catSecurity: 'An ninh & Bảo mật',

  // Status Badges
  statusSample: '[Bản mẫu]',
  statusInProgress: '[Đang cập nhật]',
  statusUnreleased: '[Chưa phát hành]',
  statusPendingDoc: '[Cần bổ sung tài liệu]',

  // Doc Types
  docTypeArch: 'Khung kiến trúc',
  docTypeSop: 'Tài liệu SOP',
  docTypeStandard: 'Quy chuẩn',
  docTypeApi: 'Đặc tả API',

  // Documents
  doc1Title: 'Khung Kiến trúc Tổng thể AI ENTERPRISE Reference Model',
  doc1FormatNote: 'Bản vẽ tham chiếu (Không cung cấp file tải trực tiếp)',
  doc1Desc: 'Sơ đồ luồng dữ liệu liên phân hệ, cơ chế phân tách tenant logic và ranh giới an toàn cho mạng lưới AI Copilot.',
  doc1Preview: `[BẢN MẪU THAM KHẢO KIẾN TRÚC — KHÔNG PHẢI TẬP TIN TẢI VỀ CHÍNH THỨC]
1. Tổng quan kiến trúc: 11 Phân hệ lõi kết nối đồng bộ trên một nguồn dữ liệu duy nhất (Single Source of Truth).
2. Tầng hạ tầng: Cô lập dữ liệu đa tenant (Isolated tenant data space), mã hóa lưu trữ và truyền tải.
3. Tầng trí tuệ: 9 AI Copilots hoạt động trong phạm vi quyền hạn tài khoản (RBAC-bound), audit log 100% truy vấn.
* Lưu ý: Hồ sơ kiến trúc chính thức chỉ được bàn giao cho khách hàng ký kết hợp đồng triển khai.`,

  doc2Title: 'Khung Quy trình Vận hành Chuẩn (SOP) Số hóa Mẫu',
  doc2FormatNote: 'Biểu mẫu khung tham khảo',
  doc2Desc: 'Bộ biểu mẫu quy trình khung cho các phòng ban Kinh doanh, Marketing, CSKH, Nhân sự, Tài chính và Ban Điều hành.',
  doc2Preview: `[BẢN MẪU QUY TRÌNH SOP — TÙY BIẾN THEO TỪNG DOANH NGHIỆP]
- Phân hệ Kinh doanh: Tiếp nhận Lead -> Chấm điểm -> Điều phối tự động -> Báo giá chuẩn -> Hợp đồng.
- Phân hệ Marketing: Kênh -> Phễu chuyển đổi -> Tag phân nhóm tự động -> Đồng bộ CRM.
- Phân hệ CSKH: Đa kênh -> Ticket tự động -> Phân bổ theo SLA -> Đánh giá CSAT.
- Phân hệ Tài chính: Dòng tiền thực -> Đối soát hóa đơn -> Cảnh báo ngân sách.
* Lưu ý: Quy trình SOP thực tế được may đo dựa trên kết quả khảo sát hiện trạng của từng tổ chức.`,

  doc3Title: 'Quy chuẩn An ninh, Phân quyền RBAC & Ranh giới Trách nhiệm AI',
  doc3FormatNote: 'Tài liệu chuẩn hóa nội bộ',
  doc3Desc: 'Quy chế phân cấp thẩm quyền tài khoản, cơ chế Human-in-the-Loop và tiêu chuẩn bảo vệ dữ liệu nội bộ doanh nghiệp.',
  doc3Preview: `[TÀI LIỆU ĐANG TRONG QUÁ TRÌNH CẬP NHẬT NỘI BỘ]
- Nguyên tắc 1: Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.
- Nguyên tắc 2: Con người phê duyệt (Human-in-the-Loop) là điều kiện tiên quyết cho các thao tác tài chính, xóa dữ liệu, gửi email hàng loạt.
- Nguyên tắc 3: Nhật ký kiểm toán bất biến (Immutable Audit Logs) ghi nhận người dùng, thời gian và địa chỉ IP.
* Trạng thái: Đang hoàn thiện các phụ lục kiểm soát bảo mật chuyên sâu.`,

  doc4Title: 'Đặc tả Kỹ thuật Tích hợp API & Webhook (RESTful)',
  doc4FormatNote: 'Dự thảo kỹ thuật',
  doc4Desc: 'Tài liệu hướng dẫn kết nối hệ thống hiện hữu của doanh nghiệp với hệ thống AI ENTERPRISE.',
  doc4Preview: `[TÀI LIỆU CHƯA PHÁT HÀNH CÔNG KHAI]
- Đặc tả API và Webhook chuẩn hóa cho từng phiên bản release của AI ENTERPRISE.
- Doanh nghiệp có nhu cầu kết nối chuyên biệt sẽ được cung cấp tài liệu kỹ thuật đối ứng trong giai đoạn ký hợp đồng kỹ thuật.`,

  // Section 2: FAQ
  sectionFaqBadge: 'GIẢI ĐÁP THẮC MẮC',
  sectionFaqTitle: 'Câu Hỏi Thường Gặp (FAQ) Phân Loại',
  sectionFaqDesc: 'Phân tách câu hỏi theo từng nhóm mối quan tâm chính của lãnh đạo doanh nghiệp.',
  faqTabImplementation: 'Triển khai & Vận hành',
  faqTabPricing: 'Chi phí & Đầu tư',
  faqTabSecurity: 'Dữ liệu & Bảo mật',

  // FAQ Items - Implementation
  faqImp1Q: 'VMC Group là ai và định vị như thế nào?',
  faqImp1A: 'VMC Group là đơn vị xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI. Chúng tôi không định vị là công ty làm website đơn thuần hay bán thêm một công cụ chatbot riêng lẻ, mà đóng vai trò là kiến trúc sư thiết kế và triển khai một hệ điều hành thống nhất cho doanh nghiệp.',
  faqImp2Q: 'AI ENTERPRISE khác gì so với việc mua nhiều phần mềm rời rạc?',
  faqImp2A: 'Thay vì doanh nghiệp phải mua CRM riêng, phần mềm nhân sự riêng, kế toán riêng rồi loay hoay tìm cách ghép nối với nhiều chi phí và dữ liệu phân mảnh, AI ENTERPRISE cung cấp một kiến trúc lõi thống nhất: một cơ sở dữ liệu, một chuẩn phân quyền, một luồng quy trình và các trợ lý AI thông minh xuyên suốt.',
  faqImp3Q: 'Doanh nghiệp nào phù hợp với giải pháp của VMC Group?',
  faqImp3A: 'Doanh nghiệp vừa và đang tăng trưởng (khoảng 20 – 500 nhân sự), đã có hoạt động kinh doanh thực tế nhưng bắt đầu gặp giới hạn về con người, dữ liệu, quy trình và sự phối hợp liên phòng ban; có tinh thần chuẩn hóa vận hành và mong muốn ứng dụng công nghệ thực chất.',
  faqImp4Q: 'Thời gian triển khai một dự án kéo dài bao lâu?',
  faqImp4A: 'Thời gian triển khai cụ thể phụ thuộc vào quy mô phòng ban, mức độ chuẩn hóa dữ liệu hiện tại và yêu cầu may đo quy trình của doanh nghiệp. VMC Group tiến hành qua 6 giai đoạn rõ ràng và luôn thống nhất lộ trình nghiệm thu sau buổi khảo sát hiện trạng thực tế.',

  // FAQ Items - Pricing
  faqPri1Q: 'Chi phí triển khai AI ENTERPRISE được tính như thế nào?',
  faqPri1A: 'Hiện chưa có một bảng giá cố định duy nhất vì AI ENTERPRISE là giải pháp doanh nghiệp may đo theo kiến trúc lõi. Chi phí phụ thuộc vào quy mô nhân sự, số lượng module kích hoạt, khối lượng dữ liệu, mức độ tùy biến và phạm vi chuyển giao. Doanh nghiệp có thể đăng ký tư vấn để nhận cấu hình giải pháp tối ưu.',
  faqPri2Q: 'Doanh nghiệp có phải trả phí ẩn hay chi phí bản quyền định kỳ không?',
  faqPri2A: 'Mọi khoản chi phí bản quyền phần mềm, chi phí hạ tầng máy chủ đám mây hoặc chi phí API mô hình ngôn ngữ lớn (LLM) đều được bóc tách minh bạch trong bản đề xuất giải pháp sau khảo sát. Doanh nghiệp nắm quyền chủ động tuyệt đối về phương án hạ tầng.',

  // FAQ Items - Security
  faqSec1Q: 'Triết lý ứng dụng AI của VMC Group là gì?',
  faqSec1A: 'VMC Group tuân thủ nguyên tắc: AI không tự do hành động. AI hoạt động dựa trên dữ liệu, vai trò, quyền hạn, phê duyệt của con người và nhật ký audit log minh bạch. AI là năng lực vận hành gia tăng sức mạnh cho con người chứ không thay thế hoàn toàn con người.',
  faqSec2Q: 'Dữ liệu của doanh nghiệp có được bảo mật an toàn không?',
  faqSec2A: 'Doanh nghiệp sở hữu hoàn toàn 100% dữ liệu của mình. Hệ thống áp dụng kiến trúc phân tách không gian dữ liệu riêng biệt cho từng doanh nghiệp, mã hóa lưu trữ, phân quyền đa tầng và nhật ký audit log truy vết mọi thao tác.',
  faqSec3Q: 'Dữ liệu của doanh nghiệp được xử lý và bảo vệ như thế nào khi ứng dụng AI?',
  faqSec3A: 'Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.',

  // Section 3: NDA & Data Policy
  sectionNdaTitle: 'Chính Sách Bảo Mật Dữ Liệu & Cam Kết NDA',
  draftBadge: 'Bản dự thảo — cần xác nhận trước khi công bố chính thức',
  ndaIntro: 'VMC Group tôn trọng quyền riêng tư và cam kết áp dụng khung bảo vệ dữ liệu nghiệp vụ:',
  ndaItem1Title: 'Ký thỏa thuận NDA:',
  ndaItem1Desc: 'Bảo vệ toàn diện dữ liệu nghiệp vụ, không tiết lộ cho bên thứ ba.',
  ndaItem2Title: 'Quyền sở hữu 100%:',
  ndaItem2Desc: 'Doanh nghiệp nắm quyền sở hữu cơ sở dữ liệu và tài liệu tri thức.',
  ndaItem3Title: 'Phạm vi xử lý dữ liệu:',
  ndaItem3Desc: 'Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.',
  ndaFooterNotice: 'Nội dung mang tính nguyên tắc định hướng. Văn bản pháp lý NDA chính thức được ký kết riêng theo từng hợp đồng dịch vụ.',

  // Section 4: Operating Terms & Human Responsibility
  sectionTermsTitle: 'Điều Khoản Vận Hành & Trách Nhiệm Phê Duyệt Con Người',
  termsContent: 'Các phân hệ AI được triển khai với ranh giới trách nhiệm rõ ràng: AI trợ giúp đọc dữ liệu và dự thảo tác vụ; con người giữ quyền phê duyệt cuối cùng đối với các giao dịch tài chính, xuất bản truyền thông, hoặc ban hành chính sách nhân sự. Các điều khoản dịch vụ và trách nhiệm pháp lý chi tiết sẽ được cụ thể hóa trong văn bản hợp đồng chính thức giữa hai bên.',

  // Bottom CTA
  ctaTitle: 'Cần trao đổi sâu về bài toán bảo mật hoặc quy trình cụ thể?',
  ctaDesc: 'Đội ngũ tư vấn kiến trúc của VMC Group sẵn sàng khảo sát và xây dựng phương án kiến trúc chi tiết cho doanh nghiệp của bạn.',
  ctaButton: 'Đăng ký tư vấn giải pháp'
};
