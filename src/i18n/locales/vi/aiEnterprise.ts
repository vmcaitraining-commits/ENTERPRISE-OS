/**
 * CANONICAL VIETNAMESE DICTIONARY: aiEnterprise
 * VMC Group Multilingual Phase 4B2
 * Namespace: aiEnterprise
 */

export default {
  hero: {
    badge: 'HỆ ĐIỀU HÀNH DOANH NGHIỆP HỢP NHẤT',
    titlePart1: 'AI ENTERPRISE — Kiến trúc ',
    titleOneData: 'Một Dữ Liệu',
    titleSeparator: ', ',
    titleManyRoles: 'Nhiều Vai Trò',
    titlePart2: ' vận hành.',
    description: 'Thay vì duy trì hàng loạt phần mềm rời rạc với dữ liệu phân mảnh, AI ENTERPRISE tổ chức toàn bộ hoạt động của doanh nghiệp xoay quanh một nguồn dữ liệu sự thật duy nhất — mỗi phòng ban có không gian làm việc chuyên biệt theo đúng thẩm quyền.',
    ctaConsultation: 'Đăng ký tư vấn kiến trúc',
    ctaAssessment: 'Đăng ký đánh giá mức độ sẵn sàng AI',
    quickNav: 'Chuyển nhanh đến:',
    anchorArchitecture: '#architecture (11 Phân hệ)',
    anchorPrinciples: '#principles (6 Nguyên tắc)',
    anchorSecurity: '#security (Bảo mật & Phân quyền)',
    diagramBadge: 'MÔ HÌNH THỰC THI',
    diagramTitle: 'Sơ đồ phân quyền truy cập: Một Lõi Dữ Liệu phục vụ 6 Góc Nhìn Chuyên Biệt',
    diagramDisclaimer: '* Kịch bản & Dữ liệu minh họa',
    coreBadge: 'UNIFIED DATA CORE',
    coreTitle: 'Cơ Sở Dữ Liệu Doanh Nghiệp Thống Nhất',
    coreDescription: 'Lưu trữ tập trung mọi thực thể: Khách hàng, Đơn hàng, Hợp đồng, Phiếu thu, Tác vụ và Lịch sử tương tác.',
    coreStatusLabel: 'Trạng thái kết nối:',
    coreStatusValue: 'Đồng bộ thời gian thực',
    coreStorageLabel: 'Mô hình lưu trữ:',
    coreStorageValue: 'Phân tách theo tenant và phân quyền',
    corePrincipleLabel: 'Nguyên tắc:',
    corePrincipleValue: 'Single Source of Truth',
    workspacePrefix: 'Không gian làm việc:',
    rbacBadge: 'Phân quyền RBAC chuẩn',
    viewScopeTitle: 'Dữ liệu được truy cập (View Scope):',
    actionScopeTitle: 'Hành động được phép (Action Scope):',
    copilotLabel: 'Trợ lý AI đồng hành:',
    roles: [
      {
        id: 'ceo',
        title: 'Ban Điều Hành / CEO',
        shortTitle: 'CEO & Lãnh đạo',
        summary: 'Nắm bắt bức tranh tổng thể sức khỏe doanh nghiệp theo thời gian thực mà không cần đợi báo cáo tổng hợp cuối tháng.',
        dataVisible: [
          'Bảng chỉ số OKR / KPI toàn công ty',
          'Dòng tiền thực thu, thực chi và dự báo theo kỳ kinh doanh (Dữ liệu minh họa)',
          'Doanh số bán hàng & tiến độ hợp đồng',
          'Nhật ký kiểm toán các hoạt động trọng yếu (Audit Log)'
        ],
        actionsPermitted: [
          'Phê duyệt chiến lược và ngân sách lớn',
          'Phê duyệt chính sách hoa hồng & giá',
          'Trao quyền và phân quyền quản trị cao nhất',
          'Ký duyệt hợp đồng đối tác chiến lược'
        ],
        aiCopilot: 'AI CEO Copilot — Tóm tắt sức khỏe vận hành mỗi sáng, phát hiện bất thường dòng tiền.'
      },
      {
        id: 'sales',
        title: 'Giám Đốc Kinh Doanh / Sales Lead',
        shortTitle: 'Kinh doanh (Sales)',
        summary: 'Quản lý toàn diện phễu khách hàng tiềm năng, lịch sử tương tác và tiến độ hợp đồng liên thông với kế toán.',
        dataVisible: [
          'Hồ sơ khách hàng 360 độ (Customer 360)',
          'Đường ống bán hàng (Sales Pipeline) đa kênh',
          'Lịch sử báo giá, hợp đồng & đơn hàng đã chốt',
          'Báo cáo doanh số cá nhân và đội ngũ'
        ],
        actionsPermitted: [
          'Tạo báo giá, xuất hợp đồng mẫu đã duyệt',
          'Phân bổ lead cho nhân viên kinh doanh',
          'Ghi nhận đơn hàng chuyển giao sang Kế toán',
          'Đề xuất mức chiết khấu cho khách hàng lớn'
        ],
        aiCopilot: 'AI Sales Copilot — Chấm điểm độ nóng lead, bóc băng cuộc gọi, gợi ý kịch bản chốt đơn.'
      },
      {
        id: 'marketing',
        title: 'Trưởng Phòng Tiếp Thị / Marketing Lead',
        shortTitle: 'Marketing',
        summary: 'Đo lường chi phí thu hút khách hàng (CAC) chuẩn xác nhờ liên thông dữ liệu trực tiếp với tỷ lệ chốt hợp đồng của Sales.',
        dataVisible: [
          'Nguồn lead và chi phí theo từng chiến dịch',
          'Tỷ lệ chuyển đổi qua các tầng phễu',
          'Dữ liệu tương tác trên Website và biểu mẫu',
          'Doanh thu thực tế mang về từ từng kênh tiếp thị'
        ],
        actionsPermitted: [
          'Khởi tạo và điều phối ngân sách chiến dịch',
          'Xuất bản trang đích (Landing Page) và form',
          'Thiết lập luồng nuôi dưỡng lead tự động',
          'Kết xuất báo cáo hiệu quả đa kênh'
        ],
        aiCopilot: 'AI Marketing Copilot — Gợi ý tiêu đề bài viết, tối ưu nội dung chuẩn SEO, phân loại chân dung khách hàng.'
      },
      {
        id: 'finance',
        title: 'Kế Toán Trưởng / Quản Lý Tài Chính',
        shortTitle: 'Tài chính - Kế toán',
        summary: 'Kiểm soát dòng tiền chặt chẽ; tự động đối soát hợp đồng bán ra với tiền về tài khoản ngân hàng không có độ trễ.',
        dataVisible: [
          'Sổ quỹ tiền mặt và số dư tài khoản ngân hàng',
          'Danh sách công nợ phải thu (AR) và phải trả (AP)',
          'Hợp đồng kinh doanh đã ký chờ xuất hóa đơn',
          'Đề xuất chi tiêu và hạn mức ngân sách phòng ban'
        ],
        actionsPermitted: [
          'Lập phiếu thu, phiếu chi và hóa đơn tài chính',
          'Ghi nhận trạng thái thanh toán đơn hàng',
          'Phát lệnh cảnh báo công nợ tự động',
          'Duyệt chi các khoản trong hạn mức được phân quyền'
        ],
        aiCopilot: 'AI Finance Copilot — Đối chiếu hóa đơn chứng từ, phát hiện công nợ quá hạn, dự báo dòng tiền ngắn hạn.'
      },
      {
        id: 'cskh',
        title: 'Trưởng Nhóm CSKH / Dịch Vụ Khách Hàng',
        shortTitle: 'Chăm sóc khách hàng',
        summary: 'Nhìn thấy toàn bộ lịch sử mua hàng, bảo hành và cam kết của Sales để xử lý sự cố nhanh chóng, chuẩn xác.',
        dataVisible: [
          'Toàn bộ lịch sử mua hàng & hợp đồng bảo hành',
          'Hàng đợi ticket khiếu nại và thời hạn SLA',
          'Nhật ký các lần hỗ trợ kỹ thuật trước đây',
          'Chỉ số hài lòng khách hàng (CSAT / NPS)'
        ],
        actionsPermitted: [
          'Tiếp nhận, gán và chuyển giao ticket kỹ thuật',
          'Cập nhật tiến độ xử lý khiếu nại',
          'Kích hoạt khảo sát tự động sau phục vụ',
          'Tạo cơ hội bán thêm/tái ký (Upsell / Renewal)'
        ],
        aiCopilot: 'AI CSKH Copilot — Tự động phân loại mức độ khẩn cấp của ticket, gợi ý câu trả lời theo đúng quy chuẩn.'
      },
      {
        id: 'hr',
        title: 'Quản Trị Nhân Sự / HR Lead',
        shortTitle: 'Nhân sự (HR)',
        summary: 'Quản lý tập trung hồ sơ nhân sự, chấm công tự động và gắn kết KPI cá nhân với hiệu quả doanh thu thực tế.',
        dataVisible: [
          'Hồ sơ nhân sự, hợp đồng lao động và chức danh',
          'Dữ liệu chấm công, xin nghỉ phép, đi muộn',
          'Bảng theo dõi mục tiêu KPI cá nhân và phòng ban',
          'Chi phí quỹ lương và kế hoạch tuyển dụng'
        ],
        actionsPermitted: [
          'Phê duyệt đơn nghỉ phép và giải trình chấm công',
          'Khởi tạo quy trình tuyển dụng và đánh giá',
          'Tổng hợp số liệu tính lương tự động',
          'Cập nhật cây sơ đồ tổ chức phòng ban'
        ],
        aiCopilot: 'AI HR Copilot — Sàng lọc CV ứng viên theo tiêu chí, tổng hợp dữ liệu công tự động, dự thảo thông báo nội bộ.'
      }
    ]
  },

  comparison: {
    badge: 'VẤN ĐỀ NỀN TẢNG CỦA DOANH NGHIỆP',
    title: 'Sự khác biệt cốt lõi: Ghép nối rời rạc vs. Hệ điều hành hợp nhất',
    description: 'Nhiều doanh nghiệp lầm tưởng rằng chuyển đổi số là mua thêm thật nhiều phần mềm. Thực tế, việc chắp vá các ứng dụng riêng lẻ chỉ tạo ra các “ốc đảo dữ liệu”, gia tăng chi phí ẩn và làm chậm nhịp vận hành.',
    beforeCardTitle: 'MÔ HÌNH PHẦN MỀM RỜI RẠC (SILOED APPS)',
    beforeCardBadge: 'TRƯỚC CHUYỂN ĐỔI',
    beforeCardDesc: 'Doanh nghiệp sử dụng nhiều công cụ riêng lẻ: Website bên thứ 3, CRM riêng, Phần mềm Kế toán riêng, Quản lý công việc trên Excel, Giao tiếp qua nhóm chat...',
    beforePoint1Strong: 'Dữ liệu phân tán:',
    beforePoint1Text: ' Mỗi phòng ban lưu trữ tập tin riêng, khó chia sẻ tự động và dễ phát sinh sai sót.',
    beforePoint2Strong: 'Nhập lại dữ liệu:',
    beforePoint2Text: ' Nhân sự tốn thời gian gõ lại thông tin qua các khâu, quy trình dễ đứt gãy.',
    beforePoint3Strong: 'Báo cáo chậm & khó truy vết:',
    beforePoint3Text: ' Dữ liệu tổng hợp thủ công có độ trễ, thiếu lịch sử thao tác xuyên suốt.',
    afterCardTitle: 'HỆ ĐIỀU HÀNH AI ENTERPRISE THỐNG NHẤT',
    afterCardBadge: 'SAU CHUYỂN ĐỔI',
    afterCardDesc: 'Hợp nhất các phân hệ chức năng trên một cơ sở dữ liệu chung. Luồng thông tin vận hành liên thông, kiểm soát theo phân quyền.',
    afterPoint1Strong: 'Dữ liệu tập trung:',
    afterPoint1Text: ' Một nguồn dữ liệu chuẩn hóa dùng chung cho khách hàng, hợp đồng và tài chính.',
    afterPoint2Strong: 'Workflow liên thông:',
    afterPoint2Text: ' Dữ liệu tự động chuyển tiếp giữa các phòng ban theo quy trình đã cấu hình.',
    afterPoint3Strong: 'Báo cáo & phân quyền rõ ràng:',
    afterPoint3Text: ' Số liệu phản ánh theo dữ liệu thực tế hệ thống; ghi nhận lịch sử thao tác.',
    tableHeading: 'Bảng đối chiếu 5 tiêu chí vận hành thực tế',
    tableDisclaimer: '* So sánh phân tích quy trình vận hành',
    tableColBefore: 'Mô hình phần mềm rời rạc:',
    tableColAfter: 'Hệ điều hành AI ENTERPRISE:',
    rows: [
      {
        dimension: 'Cấu trúc lưu trữ dữ liệu',
        beforeProblem: 'Dữ liệu nằm rải rác trên nhiều ứng dụng độc lập (CRM một nơi, Kế toán một nẻo, File Excel quản lý tác vụ, Zalo bàn giao việc). Khách hàng thay đổi thông tin chỉ cập nhật trên một phần mềm, các bộ phận khác không nắm được.',
        afterSolution: 'Một nguồn dữ liệu sự thật duy nhất (Single Source of Truth). Các phòng ban cùng truy cập và chia sẻ chung một cơ sở dữ liệu đã chuẩn hóa; dữ liệu cập nhật đồng bộ xuyên suốt theo phân quyền.',
        impactMetric: 'Dữ liệu tập trung, hạn chế phân mảnh'
      },
      {
        dimension: 'Thao tác nghiệp vụ & Nhập liệu',
        beforeProblem: 'Nhân viên phải nhập tay lặp lại thông tin cùng một khách hàng qua nhiều công cụ: từ biểu mẫu web sang CRM, từ hợp đồng sang phần mềm kế toán, từ phiếu thu sang nhóm chat nội bộ.',
        afterSolution: 'Dữ liệu luân chuyển tự động theo quy trình SOP chuẩn. Khách hàng điền biểu mẫu → Tạo Lead trên CRM → Ký hợp đồng tạo chứng từ kế toán → Kích hoạt chăm sóc khách hàng theo quy trình định sẵn.',
        impactMetric: 'Giảm đáng kể thao tác nhập liệu thủ công'
      },
      {
        dimension: 'Độ chính xác & Đối soát số liệu',
        beforeProblem: 'Số liệu giữa các bộ phận dễ phát sinh chênh lệch: Báo cáo doanh số ghi nhận của kinh doanh không trùng khớp với số tiền thực thu của kế toán; phát sinh mất nhiều thời gian đối soát.',
        afterSolution: 'Trạng thái hợp đồng và dòng tiền thực thu liên thông theo quy trình. Báo cáo doanh thu và công nợ đối soát dựa trên cùng một hệ thống dữ liệu, giảm thiểu sai lệch số liệu.',
        impactMetric: 'Hạn chế tối đa sai lệch số liệu đối soát'
      },
      {
        dimension: 'Tốc độ ra quyết định điều hành',
        beforeProblem: 'Lãnh đạo phải chờ đợi tổng hợp báo cáo thủ công qua nhiều cấp phòng ban vào cuối kỳ. Việc nắm bắt biến động chi phí hoặc sụt giảm doanh số thường có độ trễ.',
        afterSolution: 'Bảng điều khiển BI cập nhật theo dữ liệu thực tế hệ thống. Ban giám đốc chủ động theo dõi các chỉ số kinh doanh, tiến độ công việc và dòng tiền ngay trên giao diện điều hành.',
        impactMetric: 'Báo cáo cập nhật theo dữ liệu hệ thống'
      },
      {
        dimension: 'Ứng dụng AI & Quản trị dữ liệu',
        beforeProblem: 'Nhân sự tự ý sao chép dữ liệu khách hàng hoặc báo giá vào các công cụ AI công cộng bên ngoài. Khó kiểm soát phạm vi truy cập dữ liệu và thiếu cơ chế ghi nhận lịch sử thao tác.',
        afterSolution: 'Mạng lưới AI Copilot vận hành trong phạm vi dữ liệu được cấu hình của doanh nghiệp. Tác vụ tuân theo cơ chế Human-in-the-loop (con người phê duyệt) và ghi nhận nhật ký kiểm toán phục vụ truy vết.',
        impactMetric: 'Quyền và lịch sử thao tác rõ ràng'
      }
    ]
  },

  transactionFlow: {
    badge: 'DÒNG CHẢY DỮ LIỆU LIÊN HOÀN',
    disclaimer: 'Kịch bản & Dữ liệu minh họa',
    title: 'Một giao dịch xuyên suốt: Marketing → Sales → Finance → CSKH → BI',
    description: 'Xem cách dữ liệu của một hợp đồng dịch vụ mẫu được tự động chuyển tiếp và cập nhật liên thông qua 5 phân hệ theo đúng quy trình nghiệp vụ chuẩn.',
    stagePrefix: 'CHẶNG',
    flowNature: 'Luồng liên thông theo cấu hình quy trình',
    actionTitle: 'Thao tác thực tế tại chặng:',
    dataGeneratedTitle: 'Dữ liệu phát sinh & Ghi nhận:',
    aiAutomationTitle: 'AI & Động cơ tự động hóa:',
    handoffTitle: 'Tự động chuyển giao (Handoff):',
    steps: [
      {
        stepNumber: 1,
        stageName: 'Tiếp nhận Lead',
        scopeCode: 'Scope C',
        scopeTitle: 'Marketing Đa Kênh',
        role: 'Khách hàng tiềm năng & Marketing Lead',
        userAction: 'Khách hàng điền biểu mẫu tư vấn trên Website doanh nghiệp (Ví dụ giao dịch minh họa: 120.000.000 VNĐ).',
        dataGenerated: [
          'Mã Lead: #LD-8492 (Dữ liệu minh họa)',
          'Nguồn: Kênh tiếp thị được cấu hình',
          'Nhu cầu: Tối ưu quy trình & liên thông dữ liệu',
          'Quy mô tổ chức: 45 nhân sự'
        ],
        aiAutomationRole: 'AI Marketing hỗ trợ chấm điểm tiềm năng (Ví dụ minh họa: 94/100), hỗ trợ làm giàu thông tin và phân loại theo cấu hình.',
        handoffNext: 'Tự động tạo bản ghi khách hàng trên CRM và chuyển tiếp về hàng đợi tiếp nhận theo phân bổ định sẵn.'
      },
      {
        stepNumber: 2,
        stageName: 'Tư vấn & Ký hợp đồng',
        scopeCode: 'Scope B',
        scopeTitle: 'Kinh Doanh / CRM',
        role: 'Chuyên viên Kinh doanh (Account Executive)',
        userAction: 'NVKD nhận thông báo trên ứng dụng, liên hệ tư vấn, xuất báo giá mẫu từ hệ thống và gửi hợp đồng điện tử.',
        dataGenerated: [
          'Hợp đồng điện tử: #HD-2026-088 (Mẫu minh họa)',
          'Giá trị hợp đồng minh họa: 120.000.000 VNĐ',
          'Trạng thái: Khách hàng xác nhận ký số OTP',
          'Giai đoạn pipeline: Won (Đã chốt hợp đồng)'
        ],
        aiAutomationRole: 'AI Sales Copilot hỗ trợ trích xuất nội dung ghi chú cuộc gọi, tóm tắt yêu cầu và hỗ trợ điền thông tin vào hợp đồng mẫu.',
        handoffNext: 'Hợp đồng khi chuyển trạng thái "Đã ký" tự động tạo thông tin thu tiền chuyển tiếp sang phân hệ Kế toán.'
      },
      {
        stepNumber: 3,
        stageName: 'Thanh toán & Thu tiền',
        scopeCode: 'Scope E',
        scopeTitle: 'Tài Chính — Kế Toán',
        role: 'Kế toán thanh toán & Kế toán trưởng',
        userAction: 'Khách hàng chuyển khoản thanh toán đợt 1 (Ví dụ minh họa: 60.000.000 VNĐ) vào tài khoản doanh nghiệp.',
        dataGenerated: [
          'Phiếu thu điện tử: #PT-5521 (Mẫu minh họa)',
          'Số tiền thực thu minh họa: 60.000.000 VNĐ',
          'Theo dõi công nợ đợt tiếp theo theo hợp đồng',
          'Chứng từ kế toán cập nhật theo quy trình'
        ],
        aiAutomationRole: 'Hệ thống hỗ trợ đối soát thông tin giao dịch ngân hàng với mã hợp đồng theo quy tắc cấu hình, giảm thao tác rà soát thủ công.',
        handoffNext: 'Ghi nhận thanh toán thành công tự động chuyển tiếp thông tin bàn giao sang bộ phận Chăm sóc khách hàng & Triển khai.'
      },
      {
        stepNumber: 4,
        stageName: 'Onboarding & CSKH',
        scopeCode: 'Scope D',
        scopeTitle: 'Chăm Sóc Khách Hàng',
        role: 'Chuyên viên CSKH & Kỹ thuật triển khai',
        userAction: 'Đội ngũ CSKH tiếp nhận hồ sơ Customer 360 với toàn bộ thông tin đã thống nhất từ giai đoạn bán hàng.',
        dataGenerated: [
          'Ticket Onboarding: #TK-1044 (Mẫu minh họa)',
          'Thời hạn phản hồi hỗ trợ theo quy chế nội bộ',
          'Kế hoạch triển khai theo thỏa thuận hợp đồng',
          'Tài khoản định danh cấp cho khách hàng'
        ],
        aiAutomationRole: 'AI CSKH Copilot hỗ trợ soạn sẵn thông điệp chào mừng, liên kết hướng dẫn sử dụng và tài liệu dịch vụ theo mẫu.',
        handoffNext: 'Dữ liệu tiến độ triển khai liên tục đồng bộ về hồ sơ khách hàng và cập nhật lên báo cáo quản trị.'
      },
      {
        stepNumber: 5,
        stageName: 'Báo cáo & Phân tích BI',
        scopeCode: 'Scope J',
        scopeTitle: 'Báo Cáo & BI Thời Gian Thực',
        role: 'Ban Điều Hành & Tổng Giám Đốc (CEO)',
        userAction: 'Lãnh đạo mở giao diện điều hành và theo dõi các chỉ số tài chính, doanh số và tiến độ cập nhật theo dữ liệu hệ thống.',
        dataGenerated: [
          'Doanh số kỳ kinh doanh (Dữ liệu minh họa)',
          'Dòng tiền thực thu cập nhật theo chứng từ',
          'Chi phí tiếp thị ghi nhận theo hệ thống',
          'Tiến độ chỉ tiêu cập nhật theo kỳ báo cáo'
        ],
        aiAutomationRole: 'AI hỗ trợ cập nhật mô hình dự báo dòng tiền theo kỳ và tổng hợp dữ liệu biến động phục vụ phân tích điều hành.',
        handoffNext: 'Dữ liệu giao dịch được lưu trữ và tổng hợp phục vụ báo cáo và tối ưu hóa quy trình (Scope H & Scope J).'
      }
    ]
  },

  architecture: {
    badge: 'KIẾN TRÚC TỔNG THỂ 4 TẦNG',
    title: 'Bản đồ 11 Phân Hệ AI ENTERPRISE (Scope A → K)',
    description: 'Được thiết kế theo cấu trúc module linh hoạt: Doanh nghiệp có thể bắt đầu với 2–3 phân hệ ưu tiên nhất và kích hoạt thêm các phân hệ tiếp theo theo đúng lộ trình phát triển mà không bị xáo trộn hệ thống.',
    mapBadge: 'KIẾN TRÚC 4 TẦNG HỢP NHẤT',
    mapTitle: 'Sơ đồ định vị 11 phân hệ chức năng trên một cơ sở dữ liệu chung',
    mapDisclaimer: '* Bấm vào từng phân hệ để xem bảng năng lực chi tiết bên dưới',
    layer1Title: 'TẦNG 1: CỔNG TIẾP NHẬN & NHẬN DIỆN SỐ',
    layer1Count: '1 Phân hệ',
    layer2Title: 'TẦNG 2: QUẢN TRỊ KHÁCH HÀNG & DOANH THU',
    layer2Count: '3 Phân hệ',
    layer3Title: 'TẦNG 3: VẬN HÀNH & NGUỒN LỰC TỔ CHỨC',
    layer3Count: '4 Phân hệ',
    layer4Title: 'TẦNG 4: TRÍ TUỆ ĐIỀU HÀNH & NỀN TẢNG MỞ',
    layer4Count: '3 Phân hệ (Cân đối 3 cột)',
    modulePrefix: 'Phân hệ:',
    scopePrefix: 'SCOPE',
    capabilitiesTitle: 'Năng lực cốt lõi trọng tâm (Core Capabilities):',
    dataInTitle: 'Dữ liệu tiếp nhận (Data In):',
    dataOutTitle: 'Dữ liệu bàn giao (Data Out):',
    mobileAccordionTitle: 'Chi tiết 11 phân hệ (Bấm để xem năng lực):',
    mobileMainCapabilities: 'Năng lực chính:',
    modules: [
      {
        code: 'A',
        name: 'Website & Quản trị Website',
        layer: 'Tầng 1: Cổng Tiếp Nhận & Nhận Diện Số',
        layerNum: 1,
        tagline: 'Cổng thông tin thương hiệu, trang đích thu hút lead trực tuyến kết nối tức thời với lõi vận hành',
        keyCapabilities: [
          { title: 'Quản trị nội dung & Landing Page', desc: 'Dễ dàng cập nhật bài viết, hình ảnh, video và tạo trang đích chuyên biệt cho từng chiến dịch.' },
          { title: 'Biểu mẫu thu thập Lead thông minh', desc: 'Tự động kiểm tra tính hợp lệ của số điện thoại/email và phân loại nhu cầu ngay khi khách gửi.' },
          { title: 'Đồng bộ hóa tức thì về CRM (Scope B)', desc: 'Dữ liệu khách đăng ký tự động đẩy thẳng vào đường ống bán hàng không cần trung gian.' },
          { title: 'Đo lường chuyển đổi thời gian thực', desc: 'Theo dõi lưu lượng truy cập, tỷ lệ điền form và hành vi người dùng trực tiếp trên hệ thống.' }
        ],
        dataIn: 'Truy cập người dùng, dữ liệu biểu mẫu đăng ký tư vấn từ mạng xã hội, quảng cáo và tìm kiếm.',
        dataOut: 'Hồ sơ Lead chuẩn hóa chuyển tiếp tức thì sang Phân hệ Kinh doanh (Scope B) và Marketing (Scope C).',
        solutionLink: '/solutions/website',
        solutionLabel: 'Xem giải pháp Website & Cổng thông tin'
      },
      {
        code: 'B',
        name: 'Kinh Doanh / CRS / CRM',
        layer: 'Tầng 2: Quản Trị Khách Hàng & Doanh Thu',
        layerNum: 2,
        tagline: 'Quản trị hồ sơ khách hàng 360 độ, đường ống bán hàng đa kênh và hợp đồng điện tử',
        keyCapabilities: [
          { title: 'Hồ sơ khách hàng 360 độ (Customer 360)', desc: 'Lưu trữ toàn diện thông tin liên hệ, lịch sử tư vấn, giao dịch cũ và trạng thái quan tâm.' },
          { title: 'Quản lý Pipeline đa kênh trực quan', desc: 'Theo dõi tiến độ cơ hội bán hàng qua các giai đoạn từ tiếp cận, báo giá đến đàm phán.' },
          { title: 'Báo giá & Hợp đồng điện tử mẫu', desc: 'Tạo báo giá nhanh chóng từ thư viện sản phẩm cấu hình sẵn, kết nối ký số và tự động hóa quy trình gửi duyệt.' },
          { title: 'Tích hợp phân tích cuộc gọi thông minh', desc: 'Ghi âm và bóc băng cuộc gọi tư vấn, trích xuất nhu cầu và nhắc việc tự động cho NVKD.' }
        ],
        dataIn: 'Lead từ Website (Scope A) và Marketing (Scope C); thông tin nhu cầu và cuộc gọi tư vấn.',
        dataOut: 'Hợp đồng đã ký chuyển sang Kế toán (Scope E); thông tin cam kết chuyển sang CSKH (Scope D).',
        solutionLink: '/solutions/crm',
        solutionLabel: 'Xem giải pháp CRM & Kinh Doanh'
      },
      {
        code: 'C',
        name: 'Tiếp Thị & Marketing Đa Kênh',
        layer: 'Tầng 2: Quản Trị Khách Hàng & Doanh Thu',
        layerNum: 2,
        tagline: 'Vận hành chiến dịch đa kênh, tối ưu chi phí thu hút khách hàng (CAC) và tự động hóa nuôi dưỡng',
        keyCapabilities: [
          { title: 'Quản lý chiến dịch đa kênh tập trung', desc: 'Theo dõi ngân sách và hiệu quả quảng cáo từ Google, Meta, TikTok và mạng lưới đối tác.' },
          { title: 'Chấm điểm Lead tự động (Lead Scoring)', desc: 'Phân loại khách hàng tiềm năng dựa trên hành vi tương tác và mức độ phù hợp hồ sơ.' },
          { title: 'Kịch bản nuôi dưỡng tự động (Drip Campaign)', desc: 'Gửi chuỗi email, tin nhắn Zalo ZNS cá nhân hóa chăm sóc khách hàng theo giai đoạn.' },
          { title: 'Đo lường ROI & CAC theo doanh thu thực', desc: 'Liên thông với số liệu chốt đơn của Sales để tính toán chính xác chi phí trên một hợp đồng.' }
        ],
        dataIn: 'Chi phí chiến dịch tiếp thị; dữ liệu tương tác từ các kênh quảng cáo và mạng xã hội.',
        dataOut: 'Danh sách Lead tiềm năng đã được chấm điểm chất lượng chuyển giao cho đội ngũ Sales (Scope B).',
        solutionLink: '/solutions/marketing',
        solutionLabel: 'Xem giải pháp Marketing Đa Kênh'
      },
      {
        code: 'D',
        name: 'Chăm Sóc Khách Hàng (CSKH)',
        layer: 'Tầng 2: Quản Trị Khách Hàng & Doanh Thu',
        layerNum: 2,
        tagline: 'Tiếp nhận yêu cầu đa kênh, quản lý ticket khiếu nại theo thời hạn quy định và nâng cao trải nghiệm khách hàng',
        keyCapabilities: [
          { title: 'Hàng đợi Ticket hợp nhất đa kênh', desc: 'Gộp yêu cầu từ Fanpage, Zalo, Email, Website và Tổng đài vào một màn hình duy nhất.' },
          { title: 'Giám sát thời hạn xử lý theo quy định', desc: 'Tự động cảnh báo khi ticket sắp quá hạn thời gian phản hồi hoặc xử lý theo quy chế.' },
          { title: 'Quản lý bảo hành & Hợp đồng dịch vụ', desc: 'Theo dõi thời hạn hiệu lực, lịch bảo trì định kỳ và nhắc gia hạn hợp đồng tự động.' },
          { title: 'Khảo sát độ hài lòng khách hàng (CSAT/NPS)', desc: 'Tự động kích hoạt biểu mẫu đánh giá sau khi hoàn tất hỗ trợ, phát hiện sớm nguy cơ rời bỏ.' }
        ],
        dataIn: 'Hợp đồng bàn giao từ Sales (Scope B); yêu cầu hỗ trợ, thắc mắc và sự cố từ khách hàng.',
        dataOut: 'Cơ hội bán thêm (Upsell/Renewal) cho Sales; báo cáo chất lượng dịch vụ cho Lãnh đạo (Scope J).',
        solutionLink: '/solutions/customer-service',
        solutionLabel: 'Xem giải pháp Chăm Sóc Khách Hàng'
      },
      {
        code: 'E',
        name: 'Tài Chính — Kế Toán',
        layer: 'Tầng 3: Vận Hành & Nguồn Lực Tổ Chức',
        layerNum: 3,
        tagline: 'Kiểm soát dòng tiền thực thu thực chi, công nợ tự động đối soát và hóa đơn điện tử',
        keyCapabilities: [
          { title: 'Quản lý Sổ quỹ & Tài khoản ngân hàng', desc: 'Theo dõi số dư thực tế, thu chi minh bạch và đối chiếu tự động với biến động số dư.' },
          { title: 'Quản lý Công nợ phải thu (AR) & phải trả (AP)', desc: 'Tự động gửi thông báo nhắc nợ theo thỏa thuận hợp đồng, phân loại tuổi nợ chính xác.' },
          { title: 'Quy trình đề xuất & Phê duyệt chi trực tuyến', desc: 'Kiểm soát chặt chẽ các đề nghị tạm ứng, mua sắm theo định mức ngân sách từng phòng.' },
          { title: 'Hóa đơn điện tử & Dự báo dòng tiền', desc: 'Xuất hóa đơn từ đơn hàng và mô phỏng dự báo thu chi theo kỳ kinh doanh phục vụ điều hành.' }
        ],
        dataIn: 'Hợp đồng và đơn hàng từ Sales (Scope B); đề xuất chi phí từ HR (Scope F) và Marketing (Scope C).',
        dataOut: 'Trạng thái giải ngân, xác nhận thanh toán hợp đồng và chỉ số dòng tiền cho BI Dashboard (Scope J).',
        solutionLink: '/solutions/finance',
        solutionLabel: 'Xem giải pháp Tài Chính — Kế Toán'
      },
      {
        code: 'F',
        name: 'Quản Trị Nhân Sự (HR)',
        layer: 'Tầng 3: Vận Hành & Nguồn Lực Tổ Chức',
        layerNum: 3,
        tagline: 'Hồ sơ nhân sự tập trung, chấm công tự động, đối soát quỹ lương và đánh giá hiệu suất KPI',
        keyCapabilities: [
          { title: 'Hồ sơ nhân sự số hóa & Cây sơ đồ tổ chức', desc: 'Lưu trữ hợp đồng lao động, bằng cấp, lịch sử thăng tiến và quan hệ quản lý phân cấp.' },
          { title: 'Chấm công tự động & Đơn từ trực tuyến', desc: 'Đồng bộ máy chấm công/định vị GPS; duyệt đơn xin nghỉ phép, đi muộn trên điện thoại.' },
          { title: 'Bảng lương tự động hóa công thức', desc: 'Tính lương, bảo hiểm, thuế TNCN và hoa hồng kinh doanh chuẩn xác theo số liệu thực tế.' },
          { title: 'Đánh giá năng lực KPI / OKR định kỳ', desc: 'Liên kết hiệu suất làm việc cá nhân với dữ liệu thực thi công việc thực tế hàng ngày.' }
        ],
        dataIn: 'Dữ liệu chấm công; đề xuất tuyển dụng và đánh giá từ các phòng ban.',
        dataOut: 'Chi phí quỹ lương sang Kế toán (Scope E); năng suất nhân sự lên Dashboard BI (Scope J).',
        solutionLink: '/solutions/hr',
        solutionLabel: 'Xem giải pháp Quản Trị Nhân Sự'
      },
      {
        code: 'G',
        name: 'Công Việc — Dự Án — Vận Hành (SOP)',
        layer: 'Tầng 3: Vận Hành & Nguồn Lực Tổ Chức',
        layerNum: 3,
        tagline: 'Số hóa quy trình vận hành chuẩn (SOP), quản lý tiến độ dự án và tự động hóa luồng việc liên phòng',
        keyCapabilities: [
          { title: 'Bản đồ quy trình vận hành chuẩn (SOP)', desc: 'Chuẩn hóa từng bước thực hiện, phân định rõ người thực hiện, người duyệt và hạn xử lý.' },
          { title: 'Quản lý dự án theo tiến độ & Trách nhiệm (RACI)', desc: 'Trực quan hóa công việc theo dạng Kanban, Gantt chart; cảnh báo quá hạn tự động.' },
          { title: 'Phê duyệt đa cấp trực tuyến an toàn', desc: 'Luồng duyệt chứng từ, văn bản, đề xuất ngân sách thông suốt mọi lúc mọi nơi.' },
          { title: 'Tự động hóa liên phòng ban (Workflow Automation)', desc: 'Kích hoạt hành động tự động theo mô hình Trigger → Condition → Action → Approval.' }
        ],
        dataIn: 'Nhiệm vụ, dự án mới từ ban giám đốc hoặc đơn hàng ký kết cần triển khai sản xuất.',
        dataOut: 'Tiến độ hoàn thành công việc, báo cáo thời hạn xử lý quy trình cho toàn bộ tổ chức.',
        solutionLink: '/solutions/automation',
        solutionLabel: 'Xem giải pháp Tự Động Hóa & Vận Hành SOP'
      },
      {
        code: 'H',
        name: 'Kho Tri Thức Doanh Nghiệp (Wiki/RAG)',
        layer: 'Tầng 3: Vận Hành & Nguồn Lực Tổ Chức',
        layerNum: 3,
        tagline: 'Số hóa tài liệu chính sách, cẩm nang nghiệp vụ và cung cấp nguồn dữ liệu chuẩn cho AI Agent',
        keyCapabilities: [
          { title: 'Thư viện quy chế & Cẩm nang nghiệp vụ số', desc: 'Lưu trữ tài liệu đào tạo nội bộ, hướng dẫn kỹ thuật và bộ câu hỏi thường gặp (FAQ).' },
          { title: 'Tìm kiếm thông minh ngôn ngữ tự nhiên (RAG)', desc: 'Nhân viên đặt câu hỏi bằng tiếng Việt, hệ thống trích xuất chính xác câu trả lời từ tài liệu.' },
          { title: 'Kiểm soát phiên bản & Thẩm quyền truy cập', desc: 'Chỉ nhân sự được phân quyền mới có thể xem các tài liệu mật hoặc quy chế nhạy cảm.' },
          { title: 'Cơ sở tri thức huấn luyện cho AI Copilot', desc: 'Đảm bảo các trợ lý AI luôn đưa ra phản hồi đúng với quy định và văn hóa doanh nghiệp.' }
        ],
        dataIn: 'Tài liệu, quy định, hợp đồng mẫu, chính sách bán hàng từ các phòng ban nghiệp vụ.',
        dataOut: 'Cung cấp ngữ cảnh chuẩn xác (Grounding Context) cho AI Search / RAG và mạng lưới AI Copilot.',
        solutionLink: '/solutions/rag',
        solutionLabel: 'Xem giải pháp Kho Tri Thức & AI Search'
      },
      {
        code: 'I',
        name: 'AI & Mạng Lưới Trợ Lý Thông Minh',
        layer: 'Tầng 4: Trí Tuệ Điều Hành & Nền Tảng Mở',
        layerNum: 4,
        tagline: 'Mạng lưới AI Agent chuyên sâu theo từng vị trí phòng ban, vận hành có kiểm soát con người phê duyệt',
        keyCapabilities: [
          { title: 'Mạng lưới AI Copilot chuyên sâu từng vai trò', desc: 'Trợ lý AI CEO, Sales, Marketing, CSKH, HR, Finance, Voice, Workflow và RAG Search.' },
          { title: 'Cơ chế an toàn Human-in-the-loop', desc: 'AI phân tích và dự thảo phương án, các quyết định quan trọng bắt buộc có con người phê duyệt.' },
          { title: 'Bóc băng & Phân tích hội thoại giọng nói', desc: 'Chuyển đổi âm thanh cuộc gọi tiếng Việt thành văn bản, tự động tóm tắt và cập nhật CRM.' },
          { title: 'Huấn luyện an toàn trong không gian riêng', desc: 'Dữ liệu học tập nằm hoàn toàn trong phân vùng của doanh nghiệp, không chia sẻ ra ngoài.' }
        ],
        dataIn: 'Toàn bộ dữ liệu nghiệp vụ hợp lệ từ 10 phân hệ còn lại và kho tri thức (Scope H).',
        dataOut: 'Các bản dự thảo, đề xuất hành động, báo cáo phân tích và cảnh báo hỗ trợ nhân sự ra quyết định.',
        solutionLink: '/solutions/ai-agent',
        solutionLabel: 'Xem Mạng Lưới 9 Trợ Lý AI Chuyên Trách'
      },
      {
        code: 'J',
        name: 'Báo Cáo & Phân Tích BI Thời Gian Thực',
        layer: 'Tầng 4: Trí Tuệ Điều Hành & Nền Tảng Mở',
        layerNum: 4,
        tagline: 'Trung tâm thần kinh dữ liệu điều hành, trực quan hóa KPI/OKR và dự báo xu hướng dòng tiền',
        keyCapabilities: [
          { title: 'Executive Dashboard dành riêng cho CEO', desc: 'Tổng hợp mọi chỉ số sống còn của doanh nghiệp trên một màn hình duy nhất, theo dữ liệu hệ thống.' },
          { title: 'Báo cáo chuyên sâu theo từng phòng ban', desc: 'Bảng điều khiển phễu chuyển đổi Sales, tiến độ hợp đồng, thời gian phản hồi hỗ trợ của CSKH.' },
          { title: 'Đo lường tiến độ mục tiêu chiến lược OKR / KPI', desc: 'Theo dõi độ lệch so với kế hoạch năm và hỗ trợ đánh giá hiệu suất của toàn tổ chức.' },
          { title: 'Cảnh báo sớm các biến động bất thường', desc: 'Tự động phát hiện khi doanh thu tụt dốc ở một chi nhánh hoặc chi phí quảng cáo tăng vọt.' }
        ],
        dataIn: 'Dữ liệu phát sinh liên tục từ tất cả các phân hệ: Sales, Marketing, Kế toán, Nhân sự, Vận hành.',
        dataOut: 'Bức tranh sức khỏe toàn diện hỗ trợ Ban Giám Đốc ra quyết định chiến lược chính xác.',
        solutionLink: '/solutions/bi',
        solutionLabel: 'Xem giải pháp Báo Cáo & BI Thời Gian Thực'
      },
      {
        code: 'K',
        name: 'Hệ Thống & Tích Hợp Mở (Open Platform)',
        layer: 'Tầng 4: Trí Tuệ Điều Hành & Nền Tảng Mở',
        layerNum: 4,
        tagline: 'Kiến trúc bảo mật cấp doanh nghiệp, phân quyền RBAC đa tầng, kết nối API/Webhook và sao lưu dữ liệu',
        keyCapabilities: [
          { title: 'Phân quyền vai trò chi tiết (Granular RBAC)', desc: 'Kiểm soát nghiêm ngặt quyền Xem, Tạo, Sửa, Xóa và Xuất dữ liệu theo từng vị trí nhân sự.' },
          { title: 'Cổng kết nối API & Webhook mở chuẩn mực', desc: 'Dễ dàng tích hợp với cổng thanh toán ngân hàng, hóa đơn điện tử, đơn vị vận chuyển bên ngoài.' },
          { title: 'Nhật ký kiểm toán hệ thống (Audit Log)', desc: 'Hỗ trợ ghi nhận lịch sử đăng nhập, truy vấn và thay đổi dữ liệu theo cấu hình phục vụ đối soát và an ninh.' },
          { title: 'Cơ chế sao lưu & Khôi phục dữ liệu', desc: 'Dữ liệu được mã hóa truyền tải và sao lưu định kỳ, hỗ trợ duy trì hoạt động liên tục.' }
        ],
        dataIn: 'Nhật ký thao tác từ toàn bộ người dùng, tín hiệu webhook và yêu cầu API từ dịch vụ bên thứ ba.',
        dataOut: 'Cung cấp hạ tầng an ninh, kiểm soát phiên đăng nhập và bảo vệ dữ liệu cho toàn bộ 10 phân hệ.',
        solutionLink: '/resources',
        solutionLabel: 'Xem tài liệu Kiến trúc & Cam kết bảo mật'
      }
    ]
  },

  supervisedAi: {
    badge: 'AN TOÀN TRÍ TUỆ NHÂN TẠO',
    title: 'Cơ chế AI có kiểm soát: Human-in-the-loop (Con người phê duyệt)',
    description: 'AI trong doanh nghiệp không bao giờ được phép tự do quyết định vận mệnh tài chính hay ký kết hợp đồng. AI ENTERPRISE thiết lập cơ chế kiểm soát nghiêm ngặt: AI đóng vai trò phân tích và đề xuất, con người giữ quyền quyết định tối hậu.',
    flowHeading: 'Quy trình 6 bước vận hành có kiểm soát chuẩn mực',
    flowSubheading: 'Khóa chốt an toàn tại bước 4',
    col1Title: '1. Tác vụ AI tự động trong ranh giới an toàn',
    col1Subtitle: 'Hỗ trợ xử lý thông tin thông thường theo phạm vi quy trình được phân công',
    col2Title: '2. Chốt chặn bắt buộc con người phê duyệt',
    col2Subtitle: 'Bắt buộc có phê duyệt của nhân sự có thẩm quyền trước khi ban hành hoặc thực thi',
    steps: [
      {
        stepNum: 1,
        title: 'Đọc & Thu thập dữ liệu',
        actor: 'AI',
        actorLabel: 'AI Engine',
        description: 'Truy vấn ngữ cảnh nội bộ hợp lệ từ CRM, Kế toán hoặc Wiki quy chuẩn (không truy cập dữ liệu ngoài phạm vi phân quyền).',
        subtext: 'Theo cấu hình phân quyền'
      },
      {
        stepNum: 2,
        title: 'Phân tích & Đánh giá rủi ro',
        actor: 'AI',
        actorLabel: 'AI Engine',
        description: 'Đối chiếu với quy chuẩn SOP, chính sách chiết khấu và hạn mức ngân sách để nhận diện điểm bất thường hoặc rủi ro tiềm ẩn.',
        subtext: 'Đánh giá mức độ rủi ro'
      },
      {
        stepNum: 3,
        title: 'Soạn thảo bản đề xuất (Draft)',
        actor: 'AI',
        actorLabel: 'AI Copilot',
        description: 'Khởi tạo sẵn bản dự thảo báo giá, phiếu đề xuất chi tiêu hoặc nội dung email phản hồi chuẩn mực.',
        subtext: 'Chưa có hiệu lực thực thi'
      },
      {
        stepNum: 4,
        title: 'Chốt chặn: Con người phê duyệt',
        actor: 'HUMAN',
        actorLabel: 'Người có thẩm quyền',
        description: 'Cấp quản lý (Trưởng phòng/Kế toán trưởng/CEO) xem xét bản dự thảo, có thể chỉnh sửa, chấp thuận hoặc bác bỏ.',
        subtext: 'BẮT BUỘC PHÊ DUYỆT'
      },
      {
        stepNum: 5,
        title: 'Tự động hóa thực thi',
        actor: 'SYSTEM',
        actorLabel: 'Workflow Engine',
        description: 'Ngay khi có lệnh chấp thuận từ người duyệt, hệ thống tự động phát lệnh gửi email, xuất hóa đơn hoặc phân bổ ngân sách.',
        subtext: 'Thực thi chính xác theo lệnh'
      },
      {
        stepNum: 6,
        title: 'Ghi nhật ký kiểm toán (Audit Log)',
        actor: 'SYSTEM',
        actorLabel: 'Security Core',
        description: 'Hỗ trợ lưu lại lịch sử: AI đề xuất nội dung gì, ai là người bấm duyệt, thời điểm và kết quả thực thi theo cấu hình kiểm toán.',
        subtext: 'Phục vụ kiểm toán & truy vết'
      }
    ],
    autonomousTasks: [
      {
        name: 'Phân loại & Chấm điểm Lead',
        desc: 'Tự động chấm điểm độ nóng của khách hàng tiềm năng dựa trên dữ liệu biểu mẫu và lượt tương tác.'
      },
      {
        name: 'Bóc băng & Tóm tắt cuộc gọi',
        desc: 'Chuyển đổi âm thanh cuộc gọi tư vấn thành văn bản và trích xuất các ý chính vào CRM.'
      },
      {
        name: 'Gợi ý kịch bản & Dự thảo văn bản',
        desc: 'Soạn sẵn câu trả lời ticket hỗ trợ hoặc email chăm sóc khách hàng dựa trên cẩm nang Wiki.'
      },
      {
        name: 'Phát hiện cảnh báo biến động số liệu',
        desc: 'Tự động thông báo cho quản lý khi chi phí quảng cáo tăng đột biến hoặc ticket CSKH sắp quá hạn thời gian theo quy chế.'
      },
      {
        name: 'Đồng bộ hóa trạng thái liên phòng ban',
        desc: 'Chuyển trạng thái đơn hàng và gửi thông báo nhắc việc nội bộ cho nhân sự liên quan.'
      }
    ],
    strictApprovalTasks: [
      {
        name: 'Lệnh giải ngân & Chuyển tiền thực tế',
        desc: 'Mọi giao dịch chi tiền từ sổ quỹ hoặc tài khoản ngân hàng BẮT BUỘC có chữ ký duyệt của Kế toán trưởng và Ban Giám Đốc.'
      },
      {
        name: 'Áp dụng chiết khấu vượt trần quy định',
        desc: 'Báo giá có tỷ lệ giảm giá vượt thẩm quyền của nhân viên kinh doanh phải được Giám đốc Kinh doanh phê duyệt.'
      },
      {
        name: 'Ký kết hợp đồng pháp lý & Đối tác',
        desc: 'Hợp đồng kinh tế và văn bản cam kết pháp lý bắt buộc phải do người đại diện pháp luật ký duyệt số.'
      },
      {
        name: 'Xuất bản nội dung công khai ra ngoài',
        desc: 'Bài viết truyền thông, thông cáo báo chí hoặc chính sách giá mới trên Website phải qua bước biên tập và phê duyệt.'
      },
      {
        name: 'Cấp quyền truy cập & Thay đổi cấu hình',
        desc: 'Thay đổi vai trò quản trị viên, phân bổ quyền xem dữ liệu tài chính hoặc can thiệp cấu hình hệ thống.'
      }
    ]
  },

  deploymentPrinciples: {
    badge: 'NGUYÊN TẮC BẤT BIẾN',
    title: '6 Nguyên tắc triển khai cốt lõi của VMC Group',
    description: 'Các cam kết nền tảng đảm bảo hệ thống vừa có tính ổn định lâu dài theo chuẩn kiến trúc, vừa giữ trọn vẹn tính độc lập, bảo mật và quyền sở hữu dữ liệu của từng doanh nghiệp.',
    principlePrefix: 'Nguyên tắc',
    commitmentsTitle: 'Cam kết thực thi:',
    items: [
      {
        num: '01',
        title: 'Website riêng biệt cho từng doanh nghiệp',
        description: 'Mỗi khách hàng sở hữu một cổng thông tin và tên miền độc lập, mang trọn vẹn nhận diện thương hiệu, giao diện và cấu trúc tiếp nhận lead riêng biệt, không chạy chung giao diện hay phụ thuộc nền tảng công cộng.',
        highlights: [
          'Tên miền và nhận diện thương hiệu riêng theo cấu hình',
          'Tùy biến cấu trúc trang và biểu mẫu thu lead',
          'Đồng bộ trực tiếp vào CRM nội bộ không qua trung gian'
        ]
      },
      {
        num: '02',
        title: 'Người dùng riêng biệt & Bảo mật cao',
        description: 'Mỗi nhân sự được cấp tài khoản định danh riêng, xác thực an toàn và phân quyền theo vai trò (RBAC). Hạn chế việc dùng chung tài khoản để đảm bảo tính giải trình và truy vết theo quy chế.',
        highlights: [
          'Định danh cá nhân hóa cho từng vị trí phòng ban',
          'Phân quyền đặc quyền tối thiểu (Least Privilege)',
          'Ghi nhận trách nhiệm cá nhân trong nhật ký kiểm toán'
        ]
      },
      {
        num: '03',
        title: 'Dữ liệu phân tách & Quyền sở hữu của doanh nghiệp',
        description: 'Dữ liệu giữa các doanh nghiệp được phân tách theo tenant và phạm vi truy cập. Toàn bộ cơ sở dữ liệu khách hàng, tài chính và nghiệp vụ thuộc quyền sở hữu của doanh nghiệp theo thỏa thuận triển khai.',
        highlights: [
          'Dữ liệu được phân tách theo tenant và phạm vi truy cập',
          'Doanh nghiệp có quyền xuất (export) dữ liệu theo quy trình bàn giao',
          'Có thể áp dụng thỏa thuận bảo mật theo phạm vi triển khai và hợp đồng'
        ]
      },
      {
        num: '04',
        title: 'Quy trình và giao diện cấu hình linh hoạt',
        description: 'Hệ thống cho phép tùy biến trường dữ liệu, quy trình phê duyệt và các bước SOP theo đúng đặc thù ngành và văn hóa tổ chức mà không làm gãy vỡ kiến trúc lõi dùng chung.',
        highlights: [
          'Tùy biến trường thông tin và đường ống kinh doanh',
          'Cấu hình luồng phê duyệt đa cấp theo hạn mức',
          'Kế thừa tính toàn vẹn và độ ổn định của hệ thống lõi'
        ]
      },
      {
        num: '05',
        title: 'AI vận hành theo ngữ cảnh tổ chức',
        description: 'Mạng lưới AI Copilot hỗ trợ tra cứu từ kho tri thức nội bộ (SOP, cẩm nang nghiệp vụ, tài liệu sản phẩm) của doanh nghiệp. Dữ liệu được phân tách theo tenant, phạm vi truy cập và cấu hình của hệ thống. Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.',
        highlights: [
          'Truy vấn RAG trên cơ sở dữ liệu tri thức nội bộ được kiểm duyệt',
          'Bảo vệ thông tin kinh doanh và chính sách nội bộ theo phân quyền',
          'Giảm nguy cơ trả lời không có căn cứ bằng RAG và nguồn dữ liệu được kiểm soát'
        ]
      },
      {
        num: '06',
        title: 'Cùng sử dụng chung kiến trúc lõi được kiểm soát',
        description: 'Dù mỗi doanh nghiệp có dữ liệu và quy trình riêng, toàn bộ hệ thống đều vận hành trên kiến trúc lõi chuẩn mực của VMC Group. Đảm bảo tính ổn định cao, khả năng mở rộng quy mô và liên tục nhận các bản nâng cấp mới.',
        highlights: [
          'Nền tảng hạ tầng ổn định cấp doanh nghiệp',
          'Khả năng nâng cấp liên tục và cập nhật bảo mật',
          'Hỗ trợ ghi nhận nhật ký kiểm toán cho các hành động trọng yếu'
        ]
      }
    ]
  },

  security: {
    badge: 'AN NINH & QUẢN TRỊ DỮ LIỆU',
    title: 'Bảo mật cấp độ doanh nghiệp & Phân quyền đa tầng',
    description: 'Chúng tôi hiểu rằng cơ sở dữ liệu khách hàng, tài chính và bí quyết kinh doanh là tài sản sống còn. Kiến trúc AI ENTERPRISE được thiết kế theo tiêu chuẩn an ninh nghiêm ngặt với cơ chế kiểm soát truy cập và kiểm toán minh bạch.',
    diagramHeading: 'Sơ đồ chu trình kiểm soát quyền truy cập chuẩn mực',
    diagramSubheading: 'Cơ chế xác thực & ủy quyền 5 lớp',
    step1Num: '01',
    step1Title: '1. Định danh (User)',
    step1Desc: 'Xác thực tài khoản cá nhân độc lập với mật khẩu mạnh & OTP bảo vệ.',
    step2Num: '02',
    step2Title: '2. Vai trò (Role)',
    step2Desc: 'Gán vai trò chức danh: Ban giám đốc, Trưởng phòng, Chuyên viên, Kế toán.',
    step3Num: '03',
    step3Title: '3. Tài nguyên (Resource)',
    step3Desc: 'Dữ liệu đích: Khách hàng, Hợp đồng, Sổ quỹ, Đề xuất chi, Chỉ số KPI.',
    step4Num: '04',
    step4Title: '4. Hành động (Action)',
    step4Desc: 'Kiểm tra quyền: Xem (Read), Tạo (Create), Sửa (Update), Phê duyệt (Approve).',
    step5Num: '05',
    step5Title: '5. Nhật ký (Audit Log)',
    step5Desc: 'Lưu vết thao tác hỗ trợ kiểm toán: Ai, thời gian nào, tác động lên dữ liệu gì.',
    rbacHeading: 'Ma trận phân quyền vai trò mẫu (Role-Based Access Control)',
    rbacSubheading: 'Minh họa mức độ truy cập thực tế giữa 5 nhóm vai trò trên các nhóm tài nguyên cốt lõi',
    rbacBadge: 'RBAC Model',
    tableHeaderResource: 'Nhóm Tài Nguyên',
    tableHeaderCeo: 'CEO / Ban Lãnh Đạo',
    tableHeaderSalesLead: 'Trưởng Phòng Sales',
    tableHeaderSalesRep: 'Chuyên Viên Sales',
    tableHeaderChiefAccountant: 'Kế Toán Trưởng',
    tableHeaderSupportAgent: 'Chuyên Viên CSKH',
    approvalExampleTitle: 'Kịch bản minh họa: Quy trình phê duyệt đa cấp (Multi-level Approval)',
    approvalExampleScenario: 'Tình huống minh họa: Chiết khấu đơn hàng 18% (> Hạn mức 15%)',
    exampleStep1Badge: 'Bước 1',
    exampleStep1Title: 'NVKD lập đề xuất',
    exampleStep1Desc: 'Tạo báo giá và gửi yêu cầu chiết khấu 18% kèm lý do khách hàng cam kết ký hợp đồng 2 năm.',
    exampleStep2Badge: 'Bước 2',
    exampleStep2Title: 'Khóa tự động & Gán duyệt',
    exampleStep2Desc: 'Hệ thống phát hiện vượt trần 15%, tự động khóa lệnh xuất hợp đồng và gửi thông báo cho Trưởng phòng Sales.',
    exampleStep3Badge: 'Bước 3',
    exampleStep3Title: 'Trưởng phòng duyệt sơ bộ',
    exampleStep3Desc: 'Trưởng phòng kiểm tra tỷ suất lợi nhuận gộp, ký nháy đề xuất và chuyển tiếp lên Tổng Giám Đốc.',
    exampleStep4Badge: 'Bước 4 (Chốt)',
    exampleStep4Title: 'Tổng Giám Đốc ký số',
    exampleStep4Desc: 'CEO xem xét trên ứng dụng điện thoại và xác nhận bằng OTP. Báo giá tự động mở khóa gửi cho khách hàng.',
    rbacRows: [
      {
        resource: 'Hồ sơ Khách hàng & Lead (Customer 360)',
        ceo: 'Xem toàn bộ / Xuất báo cáo',
        salesLead: 'Xem toàn bộ / Phân bổ lead',
        salesRep: 'Xem khách phụ trách / Cập nhật',
        chiefAccountant: 'Xem thông tin thanh toán',
        supportAgent: 'Xem để hỗ trợ dịch vụ'
      },
      {
        resource: 'Báo giá & Hợp đồng thương mại',
        ceo: 'Phê duyệt toàn bộ',
        salesLead: 'Duyệt chiết khấu ≤ 15%',
        salesRep: 'Tạo dự thảo báo giá mẫu',
        chiefAccountant: 'Xem hợp đồng đã ký',
        supportAgent: 'Xem điều khoản bảo hành'
      },
      {
        resource: 'Sổ quỹ, Ngân hàng & Thu chi',
        ceo: 'Xem toàn bộ / Duyệt chi lớn',
        salesLead: 'Không được xem',
        salesRep: 'Không được xem',
        chiefAccountant: 'Quản lý thu chi / Lập hóa đơn',
        supportAgent: 'Không được xem'
      },
      {
        resource: 'Đề xuất tạm ứng & Ngân sách phòng',
        ceo: 'Duyệt ngân sách cấp cao',
        salesLead: 'Duyệt đề xuất của phòng',
        salesRep: 'Tạo đề xuất chi tiêu',
        chiefAccountant: 'Kiểm soát hạn mức / Chi tiền',
        supportAgent: 'Tạo đề xuất công cụ'
      },
      {
        resource: 'Báo cáo Doanh thu & Dòng tiền (BI)',
        ceo: 'Xem toàn bộ theo dữ liệu hệ thống',
        salesLead: 'Xem doanh số phòng kinh doanh',
        salesRep: 'Xem doanh số cá nhân',
        chiefAccountant: 'Xem báo cáo tài chính đầy đủ',
        supportAgent: 'Xem báo cáo hỗ trợ'
      },
      {
        resource: 'Cấu hình hệ thống & Audit Log',
        ceo: 'Xem toàn bộ nhật ký kiểm toán',
        salesLead: 'Không được xem',
        salesRep: 'Không được xem',
        chiefAccountant: 'Xem log chứng từ tài chính',
        supportAgent: 'Không được xem'
      }
    ],
    pillars: [
      {
        title: 'Mã hóa truyền tải và bảo vệ dữ liệu',
        desc: 'Mọi luồng dữ liệu truyền tải giữa người dùng và hệ thống đều được mã hóa bằng giao thức bảo mật TLS/HTTPS; dữ liệu lưu trữ tuân thủ các quy chuẩn an toàn.'
      },
      {
        title: 'Phân tách dữ liệu theo tổ chức',
        desc: 'Cơ sở dữ liệu của từng doanh nghiệp được phân tách theo tenant và cấu hình truy cập độc lập, đảm bảo dữ liệu thuộc quyền kiểm soát của doanh nghiệp.'
      },
      {
        title: 'Nguyên tắc đặc quyền tối thiểu (Least Privilege)',
        desc: 'Mỗi nhân sự chỉ được cấp quyền truy cập theo phạm vi vị trí công việc, giảm thiểu rủi ro truy cập hoặc trích xuất dữ liệu ngoài thẩm quyền.'
      },
      {
        title: 'Nhật ký kiểm toán hệ thống (Audit Log)',
        desc: 'Hệ thống hỗ trợ lưu vết các thao tác trọng yếu như đăng nhập, thay đổi trạng thái và xuất báo cáo với thông tin tài khoản và thời điểm thực hiện.'
      }
    ]
  },

  roadmapAndCta: {
    roadmapBadge: 'LỘ TRÌNH THỰC THI THỰC TẾ',
    roadmapTitle: 'Lộ trình triển khai tinh gọn theo giai đoạn',
    roadmapDescription: 'Thời gian thực tế phụ thuộc vào quy mô tổ chức, số lượng phân hệ lựa chọn và mức độ sẵn sàng của dữ liệu. Phương pháp triển khai theo từng chặng giúp doanh nghiệp từng bước đánh giá hiệu quả sau mỗi giai đoạn.',
    deliverablesTitle: 'Kết quả bàn giao (Deliverables):',
    ctaBadge: 'SẴN SÀNG CHO BƯỚC CHUYỂN MÌNH CÔNG NGHỆ?',
    ctaTitle: 'Khởi động chuyển đổi sang Hệ Điều Hành AI ENTERPRISE cho doanh nghiệp của bạn',
    ctaDescription: 'Trò chuyện trực tiếp cùng chuyên gia tư vấn kiến trúc giải pháp của VMC Group. Chúng tôi sẽ phân tích các điểm nghẽn hiện tại và xây dựng bản demo luồng vận hành thực tế dựa trên chính bài toán của bạn.',
    ctaBtnConsultation: 'Đăng ký tư vấn kiến trúc & Demo',
    ctaBtnCapabilities: 'Khảo sát năng lực hệ thống',
    trustBadge1: 'Không làm gián đoạn vận hành cũ',
    trustBadge2: 'Dữ liệu thuộc quyền sở hữu của doanh nghiệp',
    trustBadge3: 'Đồng hành hỗ trợ kỹ thuật & bàn giao chu đáo',
    phases: [
      {
        phase: 'Giai đoạn 01',
        duration: 'Chặng 1',
        title: 'Khảo sát & chuẩn hóa dữ liệu/quy trình',
        objective: 'Rà soát các điểm nghẽn và luồng trao đổi dữ liệu hiện tại, thống nhất kiến trúc mục tiêu và chuẩn hóa các danh mục cốt lõi.',
        deliverables: [
          'Bản đồ quy trình vận hành và tương tác dữ liệu',
          'Cấu trúc dữ liệu và ma trận phân quyền sơ bộ (RBAC)',
          'Kế hoạch triển khai và ưu tiên phân hệ'
        ]
      },
      {
        phase: 'Giai đoạn 02',
        duration: 'Chặng 2',
        title: 'Cấu hình hệ thống & tích hợp phân hệ ưu tiên',
        objective: 'Thiết lập môi trường, cấu hình các phân hệ trọng yếu ban đầu và kết nối các luồng dữ liệu nghiệp vụ chính.',
        deliverables: [
          'Cổng tiếp nhận và cơ sở dữ liệu phân hệ ưu tiên',
          'Quy trình biểu mẫu và phê duyệt theo cấu hình',
          'Kết nối trao đổi dữ liệu giữa các phân hệ được chọn'
        ]
      },
      {
        phase: 'Giai đoạn 03',
        duration: 'Chặng 3',
        title: 'Pilot & đào tạo nhân sự',
        objective: 'Chạy thử nghiệm trên phạm vi nhóm người dùng mục tiêu, cấu hình trợ lý AI theo kho tri thức và đào tạo người dùng thực tế.',
        deliverables: [
          'Môi trường chạy thử nghiệm và kịch bản nghiệp vụ',
          'Cơ sở tri thức (RAG) và ranh giới phê duyệt AI',
          'Tài liệu hướng dẫn và phiên đào tạo người dùng'
        ]
      },
      {
        phase: 'Giai đoạn 04',
        duration: 'Chặng 4',
        title: 'Go-live, tinh chỉnh & chuyển giao',
        objective: 'Đưa hệ thống vào vận hành chính thức, theo dõi bảng chỉ số điều hành và bàn giao quyền quản trị cho doanh nghiệp.',
        deliverables: [
          'Hệ thống chính thức vận hành trên môi trường thực',
          'Bảng chỉ số báo cáo quản trị BI theo dữ liệu hệ thống',
          'Bàn giao tài liệu vận hành và kế hoạch hỗ trợ kỹ thuật'
        ]
      }
    ]
  }
};
