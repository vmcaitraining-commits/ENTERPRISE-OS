import { TranslationDictionary } from '../../types';

const viSolutions: TranslationDictionary = {
  overview: {
    badge: 'HỆ THỐNG GIẢI PHÁP CHUYÊN SÂU',
    title: 'Giải pháp Vận hành Doanh nghiệp',
    description: 'Khám phá {deptCount} bộ giải pháp chuyên biệt theo Phòng ban và {needCount} gói giải pháp theo Nhu cầu chuyển đổi, vận hành trên nền tảng dữ liệu hợp nhất AI Enterprise.',
    filterLabel: 'Lọc giải pháp:',
    filterAll: 'Tất cả ({totalCount} giải pháp)',
    filterDept: 'Theo Phòng ban ({deptCount} giải pháp)',
    filterNeed: 'Theo Nhu cầu chuyển đổi ({needCount} giải pháp)',
    deptSectionTitle: '1. Giải pháp theo Phòng ban',
    deptSectionDesc: 'Visual nghiệp vụ riêng, quy trình chuẩn hóa và trợ lý AI Copilot có kiểm soát cho từng khối chức năng.',
    deptCountBadge: '{count} Phòng ban',
    dataManagedLabel: 'Dữ liệu trọng yếu:',
    deptCardCta: 'Xem màn hình nghiệp vụ & SOP',
    needSectionTitle: '2. Giải pháp theo Nhu cầu chuyển đổi',
    needSectionDesc: 'Giải quyết dứt điểm các bài toán công nghệ bức thiết: Tự động hóa, Quản trị tri thức, Trợ lý ảo, Tổng đài AI.',
    needCountBadge: '{count} Giải pháp',
    needCardCta: 'Xem chi tiết giải pháp',
    crosslinkBadge: 'KIẾN TRÚC MỘT DỮ LIỆU — NHIỀU VAI TRÒ',
    crosslinkTitle: 'Khám phá cách 11 phân hệ và 6 phòng ban liên thông không điểm nghẽn',
    crosslinkDesc: 'Mọi phòng ban đều truy xuất chung một nguồn sự thật duy nhất (Single Source of Truth), phân quyền đa tầng và kiểm soát chặt chẽ bởi con người.',
    crosslinkCta: 'Xem Tổng quan AI Enterprise'
  },

  departmentDetail: {
    backToAll: 'Tất cả giải pháp',
    deptBreadcrumb: 'Phòng ban',
    badge: 'GIẢI PHÁP PHÒNG BAN CHUYÊN SÂU',
    titlePrefix: 'Giải pháp',
    ctaConsultation: 'Đăng ký tư vấn giải pháp {name}',
    ctaArchitecture: 'Xem Kiến trúc hợp nhất AI Enterprise',
    salesScopeTitle: 'Phân biệt phạm vi:',
    salesScopeText: 'Trang này tập trung vào quy trình đội ngũ kinh doanh (Sales), chỉ tiêu doanh số và chốt đơn. Nếu tìm kiếm phân hệ nền tảng kỹ thuật CRM & Cơ sở dữ liệu khách hàng 360, vui lòng xem giải pháp công nghệ CRS/CRM.',
    salesScopeLink: 'Khám phá CRS / CRM Doanh nghiệp',
    problemsTitle: 'Điểm nghẽn vận hành trước khi chuẩn hóa',
    problemsSubtitle: 'Rủi ro thất thoát dữ liệu & giảm tốc độ ra quyết định',
    problemsConclusion: 'Kết luận: Dữ liệu bị phân tán tạo nên các ốc đảo thông tin (Silo), buộc nhân sự phải nhập tay lặp lại và báo cáo thủ công.',
    sopTitle: 'Quy trình vận hành chuẩn hóa (SOP)',
    sopSubtitle: 'Tự động hóa luồng tiếp nhận, xử lý và bàn giao',
    sopStage: 'CHẶNG 0{index}',
    sopStatus: 'Trạng thái: Tự động lưu vết Audit Log',
    visualsTitle: 'Màn hình dữ liệu nghiệp vụ mẫu',
    visualsSubtitle: 'Giao diện tương tác chuẩn mực thiết kế riêng cho {name}',
    copilotTitle: 'Trợ lý AI Copilot chuyên trách {name}',
    copilotBadge: 'CƠ CHẾ HUMAN-IN-THE-LOOP',
    copilotReads: '1. Dữ liệu AI đọc & phân quyền:',
    copilotAnalyzes: '2. Năng lực phân tích nghiệp vụ:',
    copilotProposes: '3. Đề xuất kịch bản thông minh:',
    copilotExecutes: '4. Phạm vi tự động thực thi:',
    copilotApproval: 'Chốt chặn bắt buộc con người phê duyệt:',
    reportsTitle: 'Báo cáo & Chỉ số hiệu quả then chốt (KPI/BI)',
    reportsSubtitle: 'Nhảy số theo dữ liệu thực tế phát sinh',
    handoffTitle: 'Bàn giao dữ liệu liên phòng ban',
    handoffBus: 'Unified Event Bus',
    handoffNote: 'Dữ liệu được chuyển tiếp tức thời qua giao thức bảo mật nội bộ, loại bỏ hoàn toàn tình trạng trễ thông tin và đối soát thủ công.',
    ctaReady: 'Sẵn sàng chuẩn hóa quy trình {name}?',
    ctaDesc: 'Đội ngũ chuyên gia VMC Group sẵn sàng đồng hành khảo sát hiện trạng dữ liệu và thiết lập lộ trình phân kỳ triển khai thực tế cho doanh nghiệp bạn.',
    ctaConsultationBtn: 'Đăng ký tư vấn giải pháp {name}',
    ctaScheduleBtn: 'Đặt lịch khảo sát hiện trạng'
  },

  needDetail: {
    backToSolutions: 'Quay lại danh mục Giải pháp',
    badge: 'GIẢI PHÁP THEO NHU CẦU CHUYỂN ĐỔI',
    productWalkthrough: 'Product Walkthrough',
    coreValueLabel: 'Giá trị cốt lõi:',
    ctaConsultation: 'Đăng ký tư vấn giải pháp {name}',
    ctaArchitecture: 'Xem Kiến trúc AI ENTERPRISE',
    crmDistinctionTitle: 'Phân biệt phạm vi:',
    crmDistinctionText: 'Trang này giới thiệu nền tảng công nghệ CRS / CRM (Customer 360, pipeline, liên thông đa kênh). Để xem quy trình tổ chức và kịch bản tác nghiệp cho đội ngũ kinh doanh, vui lòng xem Giải pháp Phòng Kinh doanh (Sales).',
    crmDistinctionLink: 'Xem Giải pháp Phòng Sales',
    aiAgentDistinctionTitle: 'Phân biệt phạm vi:',
    aiAgentDistinctionText: 'Trang này đặc tả kiến trúc giải pháp mạng lưới AI Agent, an toàn dữ liệu và cơ chế Human-in-the-Loop. Để xem danh mục chi tiết 9 Trợ lý AI Copilot theo từng chức danh cụ thể, vui lòng xem Danh mục AI Copilot.',
    aiAgentDistinctionLink: 'Khám phá 9 Trợ lý AI Copilot',
    voiceDistinctionTitle: 'Phân biệt giải pháp:',
    voiceDistinctionText: 'Trang này đặc tả giải pháp công nghệ bóc băng âm thanh (STT) và phân tích chất lượng cuộc gọi. Để xem vai trò trợ lý gọi điện nhắc lịch tự động, vui lòng xem Trợ lý AI Voice chuyên trách.',
    voiceDistinctionLink: 'Xem Trợ lý AI Voice',
    automationDistinctionTitle: 'Phân biệt quy trình:',
    automationDistinctionText: 'Trang này đặc tả động cơ tự động hóa quy trình nghiệp vụ tổng thể (Workflow Engine). Để xem quy trình chuẩn hóa của từng phòng ban, vui lòng xem danh mục Giải pháp theo Phòng ban.',
    automationDistinctionLink: 'Xem Giải pháp Phòng ban',
    interactiveDemoTitle: 'Màn hình tương tác & Luồng dữ liệu nghiệp vụ',
    interactiveDemoSubtitle: 'Trải nghiệm quy trình xử lý thực tế mô phỏng trên nền tảng',
    problemsTitle: 'Thách thức & Điểm nghẽn cần giải quyết',
    problemsSubtitle: 'Những rào cản cản trở sự bứt phá và gia tăng chi phí vận hành',
    overviewTitle: 'Tổng quan Giải pháp & Nguyên lý vận hành',
    dataTypesTitle: 'Các loại dữ liệu được số hóa & quản trị',
    workflowTitle: 'Luồng vận hành chuẩn hóa (Workflow SOP)',
    workflowSubtitle: 'Quy trình khép kín từ dữ liệu đầu vào đến kết quả bàn giao',
    workflowInput: 'Dữ liệu đầu vào (Input)',
    workflowProcess: 'Xử lý chuẩn hóa (Process)',
    workflowAi: 'AI & Tự động hóa (Automation)',
    workflowHuman: 'Kiểm soát con người (Human Control)',
    workflowOutput: 'Kết quả đầu ra (Output)',
    featuresTitle: 'Tính năng trọng yếu & Năng lực công nghệ',
    featuresSubtitle: 'Các khối chức năng chuyên sâu cấu thành giải pháp toàn diện',
    aiSectionTitle: 'Vai trò Trợ lý AI & Cơ chế Phê duyệt (Human-in-the-Loop)',
    aiSectionSubtitle: 'AI phân tích và đề xuất — Con người kiểm soát và ra quyết định cuối cùng',
    aiReads: '1. Dữ liệu AI đọc & truy xuất',
    aiAnalyzes: '2. Năng lực phân tích chuyên sâu',
    aiProposes: '3. Đề xuất kịch bản thông minh',
    aiExecutes: '4. Tự động hóa thực thi (khi cấu hình)',
    aiApprovalRequired: 'Chốt chặn phê duyệt bắt buộc (Human Oversight):',
    connectionsTitle: 'Liên thông Kiến trúc Lõi AI ENTERPRISE',
    connectionsSubtitle: 'Kết nối liền mạch với các phân hệ khác trong hệ sinh thái 11 phân hệ',
    reportsTitle: 'Báo cáo & Chỉ số Quản trị Trọng yếu (KPI/BI)',
    reportsSubtitle: 'Đo lường hiệu quả vận hành dựa trên số liệu thực tế',
    securityTitle: 'An toàn, Bảo mật & Quản trị Dữ liệu',
    securitySubtitle: 'Thiết lập tiêu chuẩn an ninh thông tin và phân quyền nghiêm ngặt',
    secRbac: 'Phân quyền RBAC đa tầng',
    secAudit: 'Nhật ký kiểm toán (Audit Log)',
    secApproval: 'Cơ chế duyệt đa cấp',
    secScope: 'Phạm vi dữ liệu riêng biệt',
    faqTitle: 'Câu hỏi Thường gặp về Giải pháp',
    faqSubtitle: 'Giải đáp các băn khoăn về kỹ thuật, dữ liệu và triển khai thực tế',
    roadmapTitle: 'Lộ trình Triển khai Chuẩn 5 Giai đoạn',
    roadmapSubtitle: 'Quy trình tinh gọn, giảm thiểu xáo trộn vận hành và đảm bảo bàn giao đúng tiến độ',
    roadmapSteps: [
      {
        step: 'Giai đoạn 1',
        duration: 'Tuần 1',
        title: 'Khảo sát hiện trạng & Xác định phạm vi (Scope Definition)',
        desc: 'Phân tích các điểm nghẽn thực tế, rà soát quy trình SOP hiện hành và thiết lập bộ chỉ tiêu KPI kỳ vọng của doanh nghiệp.'
      },
      {
        step: 'Giai đoạn 2',
        duration: 'Tuần 2',
        title: 'Chuẩn hóa cấu trúc & Làm sạch dữ liệu nguồn (Data Readiness)',
        desc: 'Thiết kế cấu trúc bảng dữ liệu, chuẩn hóa danh mục khách hàng/chứng từ và thiết lập chính sách phân quyền RBAC.'
      },
      {
        step: 'Giai đoạn 3',
        duration: 'Tuần 3',
        title: 'Cấu hình luồng nghiệp vụ & Tích hợp phân hệ (Integration)',
        desc: 'Thiết lập các kịch bản tự động hóa, cấu hình rào chắn AI Guardrails và kết nối liên thông với các phân hệ liên quan.'
      },
      {
        step: 'Giai đoạn 4',
        duration: 'Tuần 4',
        title: 'Đào tạo nhân sự & Chạy thử nghiệm có giám sát (Pilot Run)',
        desc: 'Tập huấn cán bộ nhân viên theo từng vai trò, vận hành song song thử nghiệm và rà soát các chốt chặn phê duyệt thực tế.'
      },
      {
        step: 'Giai đoạn 5',
        duration: 'Tuần 5+',
        title: 'Bàn giao chính thức & Bảo hành tối ưu hóa liên tục',
        desc: 'Nghiệm thu đưa vào vận hành chính thức, thiết lập cơ chế giám sát SLA và định kỳ đánh giá hiệu quả số hóa.'
      }
    ],
    ctaTitle: 'Sẵn sàng chuyển đổi số cùng {name}?',
    ctaDesc: 'Liên hệ chuyên gia VMC Group để nhận bản demo chi tiết, tư vấn kiến trúc kỹ thuật và khảo sát bài toán thực tế của tổ chức.',
    ctaConsultationBtn: 'Đăng ký tư vấn giải pháp {name}',
    ctaTrialBtn: 'Đặt lịch tư vấn chuyên sâu'
  },

  departments: {
    sales: {
      name: 'Kinh doanh (Sales)',
      tagline: 'Quản trị khách hàng, pipeline kinh doanh và chuyển đổi doanh thu đa kênh',
      problems: [
        'Dữ liệu khách hàng và lead bị phân tán giữa tin nhắn, file excel cá nhân và sổ tay.',
        'Nhân viên nghỉ việc kéo theo nguy cơ mất dữ liệu và gián đoạn liên hệ khách hàng.',
        'Khó kiểm soát tiến độ xử lý lead, tỷ lệ chuyển đổi và chất lượng cuộc gọi/tư vấn.',
        'Báo giá, hợp đồng và đối soát doanh thu chậm trễ, thủ công.'
      ],
      dataManaged: [
        'Hồ sơ khách hàng 360 độ',
        'Danh sách Lead & Nguồn khách hàng',
        'Đường ống bán hàng (Sales Pipeline)',
        'Lịch sử cuộc gọi, ghi chú tư vấn',
        'Báo giá, đơn hàng & hợp đồng kinh doanh',
        'Doanh thu và tiến độ thanh toán'
      ],
      processes: [
        'Tiếp nhận lead tự động từ Website, Biểu mẫu và các kênh kết nối số',
        'Phân bổ lead thông minh theo năng lực & ca trực của Sales',
        'Theo dõi tương tác, nhắc hẹn và hỗ trợ soạn thảo báo giá',
        'Chốt đơn hàng, lập hợp đồng và chuyển tiếp bàn giao cho CSKH/Vận hành'
      ],
      aiAssistance: {
        reads: 'Đọc thông tin lead, lịch sử tương tác, trạng thái giao dịch và nhu cầu trao đổi trước đó.',
        analyzes: 'Phân tích xác suất chốt đơn, mức độ tiềm năng của lead và phản hồi của khách hàng.',
        proposes: 'Đề xuất kịch bản phản hồi tối ưu, thời điểm theo đuổi và gói sản phẩm phù hợp.',
        executes: 'Tự động gửi email xác nhận, cập nhật trạng thái pipeline, tạo nhắc nhở lịch hẹn.',
        requiresApproval: 'BẮT BUỘC phê duyệt: Mức chiết khấu đặc biệt, xuất hợp đồng chính thức và hủy lead lớn.'
      },
      reports: [
        'Báo cáo doanh số theo cá nhân & đội ngũ thời gian thực',
        'Tỷ lệ chuyển đổi qua từng phễu bán hàng (Funnel Conversion)',
        'Thời gian phản hồi lead trung bình (Lead Response Time)',
        'Dự báo doanh thu tháng/quý (Sales Forecasting)'
      ],
      interDepartmentConnection: 'Dữ liệu kinh doanh liên thông ngay lập tức sang Tài chính (hóa đơn, công nợ) và CSKH (hợp đồng, bảo hành).'
    },
    marketing: {
      name: 'Marketing',
      tagline: 'Vận hành chiến dịch đa kênh, đo lường ROI và nuôi dưỡng khách hàng tiềm năng',
      problems: [
        'Chi nhiều tiền quảng cáo nhưng không đo lường được chi phí thực tế trên từng lead chất lượng.',
        'Dữ liệu phản hồi từ phòng Sales không quay lại Marketing để tối ưu thông điệp.',
        'Nội dung truyền thông rời rạc, thiếu sự đồng bộ với định vị doanh nghiệp.',
        'Quy trình nuôi dưỡng khách hàng tiềm năng (Nurturing) làm thủ công hoặc bỏ ngỏ.'
      ],
      dataManaged: [
        'Chiến dịch quảng cáo & Kênh truyền thông',
        'Chi phí Marketing & ROI từng kênh',
        'Kho nội dung, bài viết, hình ảnh, tài nguyên',
        'Form đăng ký & hành vi người dùng trên website',
        'Dữ liệu tương tác qua email, fanpage, zalo'
      ],
      processes: [
        'Lên kế hoạch và phân bổ ngân sách chiến dịch',
        'Tạo landing page, biểu mẫu thu thập dữ liệu tự động',
        'Gắn thẻ phân loại (Tagging) và chấm điểm tiềm năng lead',
        'Đo lường hiệu quả chuyển đổi từ lead sang hợp đồng của Sales'
      ],
      aiAssistance: {
        reads: 'Đọc dữ liệu truy cập website, phản hồi của khách hàng và hiệu quả các chiến dịch trong quá khứ.',
        analyzes: 'Phân tích kênh có tỷ lệ chuyển đổi cao nhất, chi phí trên mỗi cơ hội bán hàng.',
        proposes: 'Gợi ý chủ đề nội dung, tối ưu tiêu đề landing page và thời điểm gửi bản tin chăm sóc.',
        executes: 'Phân loại tag khách hàng tự động, đồng bộ lead từ form vào CRM theo thời gian thực.',
        requiresApproval: 'BẮT BUỘC phê duyệt: Xuất bản nội dung công khai, phê duyệt ngân sách quảng cáo.'
      },
      reports: [
        'Chi phí trên mỗi Lead chất lượng (CPL) và Khách hàng (CAC)',
        'Tỷ lệ chuyển đổi traffic → lead → cơ hội → doanh số',
        'Hiệu quả từng kênh: Website, Google, Mạng xã hội, Đối tác',
        'Chỉ số tương tác nội dung & vòng đời thương hiệu'
      ],
      interDepartmentConnection: 'Đồng bộ lead trực tiếp vào Pipeline của Sales không trễ một giây; nhận dữ liệu doanh số để tính chính xác ROI.'
    },
    'customer-service': {
      name: 'Chăm sóc khách hàng (CSKH)',
      tagline: 'Tối ưu trải nghiệm hậu mãi, hỗ trợ nhanh chóng và gia tăng vòng đời khách hàng',
      problems: [
        'Yêu cầu hỗ trợ của khách hàng bị sót trên nhiều kênh tin nhắn, điện thoại, email.',
        'Nhân viên CSKH không nắm được lịch sử mua hàng, dẫn đến trả lời vòng vo.',
        'Chậm xử lý khiếu nại làm giảm uy tín thương hiệu.',
        'Không có dữ liệu đo lường mức độ hài lòng và tỷ lệ gia hạn/tái mua hàng.'
      ],
      dataManaged: [
        'Hệ thống Ticket hỗ trợ & khiếu nại',
        'Lịch sử bảo hành, bảo trì, hỗ trợ kỹ thuật',
        'Đánh giá mức độ hài lòng (CSAT, NPS)',
        'Hạn hợp đồng, lịch trình chăm sóc định kỳ',
        'Tri thức hỗ trợ (Knowledge Base, FAQ)'
      ],
      processes: [
        'Tiếp nhận yêu cầu đa kênh và tạo Ticket tự động',
        'Điều phối Ticket đến đúng chuyên viên phụ trách theo SLA',
        'Theo dõi tiến độ xử lý và phản hồi khách hàng theo quy chuẩn',
        'Khảo sát ý kiến sau khi đóng ticket và chăm sóc tái tục'
      ],
      aiAssistance: {
        reads: 'Đọc nội dung ticket, hợp đồng, lịch sử giao dịch và tài liệu tri thức (FAQ/SOP).',
        analyzes: 'Xác định mức độ khẩn cấp, sắc thái cảm xúc của khách hàng và nguyên nhân cốt lõi.',
        proposes: 'Đề xuất câu trả lời chuẩn xác dựa trên kho tri thức nội bộ đã phê duyệt.',
        executes: 'Tự động gửi thông báo trạng thái xử lý cho khách hàng, nhắc nhở SLA sắp quá hạn.',
        requiresApproval: 'BẮT BUỘC phê duyệt: Chính sách bồi thường, gia hạn hợp đồng đặc biệt, đóng ticket tranh chấp.'
      },
      reports: [
        'Thời gian phản hồi đầu tiên (FRT) & Thời gian xử lý (TTR)',
        'Tỷ lệ giải quyết trong cam kết SLA',
        'Điểm số hài lòng của khách hàng (CSAT)',
        'Tỷ lệ gia hạn hợp đồng và khách hàng trung thành'
      ],
      interDepartmentConnection: 'Chuyển tiếp cơ hội upsale sang phòng Kinh doanh; chuyển phản ánh chất lượng cho Ban Điều hành và Kỹ thuật.'
    },
    hr: {
      name: 'Nhân sự & Đào tạo',
      tagline: 'Quản trị vòng đời nhân sự, chấm công, hiệu suất và phát triển năng lực nội bộ',
      problems: [
        'Chấm công, tính phép, đơn từ làm thủ công tốn thời gian và dễ sai sót.',
        'Đánh giá KPI mang tính cảm tính, thiếu dữ liệu vận hành thực tế.',
        'Tài liệu đào tạo và quy trình làm việc (SOP) phân tán, nhân viên mới khó hòa nhập.',
        'Khó giữ chân nhân tài và thiếu bức tranh tổng quan về nguồn lực nhân sự.'
      ],
      dataManaged: [
        'Hồ sơ nhân viên & Hợp đồng lao động',
        'Dữ liệu chấm công, ngày phép, đơn đi muộn/về sớm',
        'Chỉ số đánh giá hiệu suất (KPI/OKR)',
        'Lộ trình đào tạo, khóa học nội bộ',
        'Kế hoạch tuyển dụng & Ứng viên'
      ],
      processes: [
        'Quy trình tuyển dụng và hội nhập nhân sự mới (Onboarding)',
        'Duyệt đơn từ trực tuyến (Nghỉ phép, công tác, bổ sung công)',
        'Theo dõi chỉ số KPI tự động gắn với kết quả công việc',
        'Tổ chức đào tạo nội bộ và sát hạch chuyên môn định kỳ'
      ],
      aiAssistance: {
        reads: 'Đọc bảng chấm công, tiến độ công việc, đơn từ nội bộ và lộ trình đào tạo.',
        analyzes: 'Phân tích tỷ lệ đi làm đầy đủ, phát hiện lệch hiệu suất so với mục tiêu KPI.',
        proposes: 'Gợi ý bài tập đào tạo phù hợp với kỹ năng còn thiếu của từng nhân sự.',
        executes: 'Gửi nhắc nhở nộp báo cáo định kỳ, tổng hợp bảng công tự động cuối tháng.',
        requiresApproval: 'BẮT BUỘC phê duyệt: Quyết định khen thưởng, kỷ luật, điều chỉnh lương và phê duyệt nghỉ phép dài ngày.'
      },
      reports: [
        'Tỷ lệ chuyên cần và biến động nhân sự (Turnover Rate)',
        'Bảng xếp hạng hiệu suất làm việc theo phòng ban',
        'Chi phí tuyển dụng và thời gian tuyển dụng trung bình',
        'Tiến độ hoàn thành các khóa đào tạo nội bộ'
      ],
      interDepartmentConnection: 'Cung cấp dữ liệu công và lương cho phòng Tài chính; đồng bộ chỉ số KPI từ phòng Kinh doanh và Vận hành.'
    },
    finance: {
      name: 'Tài chính — Kế toán',
      tagline: 'Kiểm soát dòng tiền, công nợ, ngân sách và báo cáo tài chính minh bạch thời gian thực',
      problems: [
        'Dòng tiền thu chi không được đối soát ngay lập tức với đơn hàng thực tế.',
        'Công nợ khách hàng dây dưa vì thiếu cảnh báo hạn thanh toán tự động.',
        'Người quản lý phải đợi kế toán làm báo cáo cuối tháng mới có số liệu ra quyết định.',
        'Dễ thất thoát hoặc chi tiêu vượt ngân sách do thiếu quy trình duyệt đa cấp.'
      ],
      dataManaged: [
        'Sổ quỹ tiền mặt & Tài khoản ngân hàng',
        'Phiếu thu, phiếu chi, hóa đơn tài chính',
        'Công nợ phải thu (AR) và phải trả (AP)',
        'Ngân sách dự toán từng phòng ban',
        'Báo cáo doanh thu, chi phí và lợi nhuận'
      ],
      processes: [
        'Phê duyệt đề xuất chi tiêu trực tuyến theo thẩm quyền hạn mức',
        'Đối chiếu thanh toán đơn hàng từ Kinh doanh với tài khoản ngân hàng',
        'Gửi thông báo nhắc nợ tự động theo mốc thời gian thỏa thuận',
        'Tổng hợp báo cáo dòng tiền và cân đối tài chính định kỳ'
      ],
      aiAssistance: {
        reads: 'Đọc dòng tiền thu chi, lịch sử thanh toán, hợp đồng và hóa đơn đối ứng.',
        analyzes: 'Phân tích dự báo dòng tiền trong 30-90 ngày tới, nhận diện khách hàng có rủi ro nợ xấu.',
        proposes: 'Cảnh báo nguy cơ thiếu hụt ngân sách cục bộ và gợi ý phương án điều hòa dòng tiền.',
        executes: 'Tự động tạo lệnh nhắc nợ định kỳ theo mẫu đã duyệt, phân loại chi phí vào đúng khoản mục.',
        requiresApproval: 'BẮT BUỘC phê duyệt: Mọi lệnh giải ngân thực tế, xóa nợ xấu, và điều chỉnh hạn mức ngân sách.'
      },
      reports: [
        'Báo cáo Dòng tiền lưu chuyển (Cash Flow) theo ngày/tuần',
        'Tuổi nợ và bảng theo dõi công nợ chi tiết (Aging Report)',
        'So sánh Chi phí thực tế so với Dự toán ngân sách',
        'Báo cáo Kết quả kinh doanh tạm tính theo thời gian thực'
      ],
      interDepartmentConnection: 'Nhận dữ liệu hợp đồng từ Sales để lập hóa đơn; nhận đề xuất chi phí từ HR/Marketing để kiểm soát ngân sách.'
    },
    management: {
      name: 'Điều hành doanh nghiệp',
      tagline: 'Hệ thống điều hành trung tâm, chuẩn hóa SOP và phân tích dữ liệu toàn diện cho lãnh đạo',
      problems: [
        'Lãnh đạo thiếu bức tranh tổng thể, phải hỏi từng trưởng phòng để biết tình hình.',
        'Quy trình phối hợp giữa các phòng ban bị ách tắc, đổ lỗi lẫn nhau khi có sự cố.',
        'Quyết định chiến lược dựa trên cảm tính thay vì số liệu thực chứng.',
        'Tri thức vận hành phụ thuộc vào một vài cá nhân, thiếu hệ thống chuẩn hóa (SOP).'
      ],
      dataManaged: [
        'Mục tiêu chiến lược OKR & KPI toàn công ty',
        'Quy trình vận hành chuẩn (SOP) & Chính sách tổ chức',
        'Nhật ký hoạt động toàn hệ thống (System Audit Log)',
        'Báo cáo tổng hợp đa phòng ban',
        'Kho tri thức và quyết định điều hành'
      ],
      processes: [
        'Thiết lập mục tiêu và phân bổ chỉ tiêu xuống các khối phòng ban',
        'Theo dõi tiến độ thực hiện dự án và các điểm nghẽn vận hành',
        'Phê duyệt các quyết định vượt thẩm quyền trực tuyến an toàn',
        'Đánh giá định kỳ dựa trên dữ liệu thời gian thực'
      ],
      aiAssistance: {
        reads: 'Đọc dữ liệu tổng hợp từ toàn bộ các phân hệ: Kinh doanh, Marketing, CSKH, Nhân sự, Tài chính.',
        analyzes: 'Nhận diện điểm nghẽn quy trình giữa các phòng ban, phát hiện các chỉ số biến động bất thường.',
        proposes: 'Đề xuất các kịch bản hành động, tối ưu phân bổ nguồn lực và tinh gọn quy trình làm việc.',
        executes: 'Tổng hợp báo cáo điều hành nhanh mỗi sáng (Morning Executive Briefing).',
        requiresApproval: 'BẮT BUỘC phê duyệt: Mọi thay đổi chính sách, chiến lược, phân quyền quản trị cao nhất.'
      },
      reports: [
        'Executive Dashboard tổng quan sức khỏe doanh nghiệp',
        'Bản đồ tiến độ hoàn thành mục tiêu chiến lược OKR',
        'Chỉ số hiệu năng vận hành và thời gian quay vòng quy trình',
        'Báo cáo cảnh báo rủi ro vận hành sớm'
      ],
      interDepartmentConnection: 'Là trung tâm kết nối và điều phối dữ liệu của toàn bộ 5 khối phòng ban còn lại.'
    }
  },

  needs: {
    crm: {
      name: 'CRS / CRM Doanh nghiệp',
      tagline: 'Nền tảng quản trị khách hàng toàn diện, phễu cơ hội và vòng đời giao dịch thống nhất',
      coreValue: 'Chuyển hóa dữ liệu khách hàng từ tài sản cá nhân phân tán thành tài sản số hóa tập trung của tổ chức; liên kết liền mạch từ tiếp thị, bán hàng, đơn hàng đến dòng tiền.',
      problems: [
        'Dữ liệu khách hàng phân mảnh qua file Excel, tin nhắn cá nhân, sổ tay, gây nguy cơ mất mát khi thay đổi nhân sự.',
        'Không có góc nhìn Customer 360: Đội ngũ bán hàng không biết lịch sử CSKH, CSKH không nắm rõ điều khoản hợp đồng đã ký.',
        'Phễu bán hàng (Pipeline) bị tắc nghẽn nhưng cấp quản lý không phát hiện được lead đang bị nghẽn ở giai đoạn nào.',
        'Thiếu sự kết nối giữa hồ sơ hợp đồng, đơn hàng phát sinh và đối soát doanh thu thực tế với bộ phận kế toán.'
      ],
      solutionOverview: 'AI ENTERPRISE cung cấp phân hệ CRS / CRM chuẩn hóa toàn bộ vòng đời khách hàng (Customer Journey): từ lúc tiếp nhận lead, phân bổ cho tư vấn viên, theo dõi tiến trình báo giá - đàm phán, chốt hợp đồng, đến chăm sóc sau bán và theo dõi doanh thu thực tế.',
      dataTypes: [
        'Hồ sơ Customer 360 (Thông tin tổ chức, người đại diện, nhu cầu, phân nhóm khách hàng)',
        'Dữ liệu Lead & Phân loại nguồn gốc (Website, Biểu mẫu, Sự kiện, Chiến dịch)',
        'Đường ống Pipeline & Giai đoạn chuyển đổi (Tiếp cận, Đánh giá nhu cầu, Báo giá, Đàm phán, Ký kết)',
        'Hồ sơ Hợp đồng, Đơn hàng, Lịch sử thanh toán & Doanh thu liên kết',
        'Nhật ký tương tác (Interaction Timeline: Cuộc gọi, Ghi chú tư vấn, Email, Lịch hẹn)'
      ],
      operatingWorkflow: {
        input: 'Khách hàng đăng ký qua website, biểu mẫu số, chiến dịch tiếp thị hoặc nhập liệu trực tiếp từ chuyên viên.',
        process: 'Chuẩn hóa định dạng, kiểm tra trùng lặp, chấm điểm tiềm năng và tự động phân bổ lead cho nhân sự theo quy tắc chuyên môn.',
        aiAutomation: 'AI phân tích nhu cầu, gợi ý kịch bản tư vấn, tự động tạo lịch nhắc việc follow-up và dự báo xác suất chuyển đổi.',
        humanControl: 'Chuyên viên tư vấn trực tiếp trao đổi với khách hàng, điều chỉnh báo giá theo thực tế và trình duyệt các điều khoản hợp đồng.',
        output: 'Hợp đồng được ký kết, đơn hàng khởi tạo, dữ liệu tự động đồng bộ sang bộ phận kế toán và kích hoạt quy trình CSKH.'
      },
      keyFeatures: [
        { title: 'Hồ sơ Customer 360', description: 'Góc nhìn tập trung toàn diện về lịch sử giao dịch, ghi chú liên hệ, đơn hàng và các yêu cầu hỗ trợ.' },
        { title: 'Đường ống Pipeline đa luồng', description: 'Trực quan hóa các giai đoạn bán hàng, cảnh báo lead quá hạn chưa tương tác và dự phóng doanh thu theo phễu.' },
        { title: 'Quản lý Báo giá & Hợp đồng', description: 'Khởi tạo báo giá theo biểu mẫu chuẩn, theo dõi trạng thái duyệt giá và lưu trữ hợp đồng gắn liền với hồ sơ khách hàng.' },
        { title: 'Dòng thời gian tương tác (Timeline)', description: 'Ghi nhận chi tiết mọi điểm chạm: cuộc gọi, nội dung trao đổi, biên bản làm việc và nhiệm vụ tiếp theo.' },
        { title: 'Phân quyền dữ liệu kinh doanh', description: 'Phân quyền xem và thao tác theo phòng ban, nhóm kinh doanh hoặc phụ trách cá nhân, hỗ trợ bảo mật thông tin nội bộ.' }
      ],
      aiAssistance: {
        reads: 'Đọc lịch sử mua hàng, nội dung ghi chú tương tác, trạng thái phễu cơ hội và tiến độ xử lý lead của tư vấn viên.',
        analyzes: 'Phân tích mức độ quan tâm của khách hàng, tần suất tương tác, tỷ lệ rớt lead ở từng bước và hiệu suất của tư vấn viên.',
        proposes: 'Gợi ý thời điểm phù hợp để liên hệ lại, kịch bản xử lý từ chối và sản phẩm/dịch vụ phù hợp để tư vấn gia tăng.',
        executes: 'Tự động phân loại lead, cập nhật thẻ phân nhóm, kích hoạt thông báo nhắc việc và gửi thư xác nhận lịch hẹn (khi có cấu hình).',
        requiresApproval: 'Bắt buộc phê duyệt đối với các báo giá có chiết khấu ngoài khung quy định, chuyển giao tài khoản trọng yếu, hoặc hủy/xóa hồ sơ khách hàng.'
      },
      systemConnections: [
        'Kết nối Phân hệ Website & Cổng thông tin (Scope A): Hỗ trợ nhận dữ liệu đăng ký và form lead theo luồng đồng bộ API.',
        'Kết nối Phân hệ Kế toán & Quản trị tài chính (Scope E): Đối soát thanh toán, hợp đồng và tình trạng xuất hóa đơn.',
        'Kết nối Phân hệ Chăm sóc khách hàng & Dịch vụ (Scope D): Chuyển giao thông tin khách hàng sau khi chốt hợp đồng để chăm sóc liên tục.',
        'Kết nối Phân hệ Báo cáo & Business Intelligence (Scope J): Cung cấp chỉ số doanh thu phễu và tỷ lệ chuyển đổi cho ban lãnh đạo.'
      ],
      reportTypes: [
        'Báo cáo số lượng và cơ cấu nguồn gốc lead theo thời gian',
        'Báo cáo tỷ lệ chuyển đổi qua các giai đoạn trong Pipeline',
        'Báo cáo doanh số và tiến độ thực hiện chỉ tiêu cá nhân/đội ngũ',
        'Báo cáo thời gian phản hồi trung bình và tần suất chăm sóc lead'
      ],
      securityAndGovernance: {
        rbac: 'Phân cấp quyền truy cập theo vai trò: Nhân viên chỉ xem khách hàng được phân công, Trưởng nhóm quản lý toàn team, Ban giám đốc xem toàn diện.',
        auditLog: 'Ghi nhận đầy đủ lịch sử: ai đã sửa thông tin khách hàng, ai xuất file dữ liệu, thay đổi trạng thái hợp đồng vào thời gian nào.',
        approvalMechanism: 'Cơ chế duyệt đa cấp đối với các trường hợp cấp chiết khấu ngoài khung quy định hoặc chuyển giao tài khoản khách hàng lớn.',
        dataScope: 'Toàn bộ cơ sở dữ liệu khách hàng lưu trữ độc lập trong không gian dữ liệu riêng của doanh nghiệp, không chia sẻ với bên thứ ba.'
      },
      faqs: [
        {
          q: 'Hệ thống CRS / CRM có hỗ trợ nhập dữ liệu khách hàng cũ từ Excel hoặc hệ thống khác không?',
          a: 'Có. AI ENTERPRISE cung cấp công cụ làm sạch, đối soát trùng lặp và nhập liệu tự động từ các file bảng tính (Excel/CSV) hoặc qua cổng API chuẩn hóa, đảm bảo toàn vẹn dữ liệu lịch sử.'
        },
        {
          q: 'Nhân viên kinh doanh có xem được khách hàng của đồng nghiệp khác không?',
          a: 'Hệ thống áp dụng cơ chế phân quyền RBAC nghiêm ngặt: Nhân viên chỉ nhìn thấy và chăm sóc khách hàng được phân công phụ trách; Trưởng bộ phận quản lý nhóm; Ban Giám đốc có bức tranh toàn diện.'
        },
        {
          q: 'CRM kết nối với Phân hệ Kế toán (Scope E) như thế nào khi chốt hợp đồng?',
          a: 'Ngay khi trạng thái hợp đồng chuyển sang "Đã ký số", hệ thống tự động sinh hồ sơ thanh toán đợt 1 và dự thảo hóa đơn điện tử gửi sang phân hệ Kế toán, hỗ trợ loại bỏ việc nhắn tin giục thu tiền thủ công.'
        }
      ]
    },
    'ai-agent': {
      name: 'Mạng lưới AI Agent Chuyên trách',
      tagline: 'Hệ thống 9 trợ lý AI đồng hành theo từng vị trí nghiệp vụ, vận hành có kiểm soát và phê duyệt của con người',
      coreValue: 'AI không hoạt động độc lập tự do mà đóng vai trò là Copilot chuyên trách: đọc dữ liệu được phân quyền, phân tích sâu, đề xuất hành động và chỉ thực thi khi được con người phê duyệt.',
      problems: [
        'Ứng dụng các chatbot AI chung chung bên ngoài không hiểu dữ liệu nội bộ và không gắn với quy trình nghiệp vụ của doanh nghiệp.',
        'Lo ngại AI tự ý thực hiện hành động sai lệch hoặc phát ngôn không kiểm soát gây rủi ro uy tín và bảo mật.',
        'Nhân sự các phòng ban tốn nhiều thời gian cho việc tổng hợp dữ liệu, tra cứu quy định và viết báo cáo thủ công.',
        'Thiếu cơ chế phân quyền dữ liệu cho AI, tiềm ẩn nguy cơ lộ thông tin nội bộ nhạy cảm giữa các bộ phận.'
      ],
      solutionOverview: 'AI ENTERPRISE triển khai mạng lưới gồm 9 AI Agent chuyên môn hóa (AI CEO, AI Sales, AI Marketing, AI CSKH, AI HR, AI Finance, AI Voice, AI Workflow, AI Search/RAG). Mỗi Agent hoạt động trong không gian dữ liệu, quyền hạn và ranh giới kiểm soát chặt chẽ.',
      dataTypes: [
        'Dữ liệu chỉ số vận hành toàn công ty (KPI, OKR, tài chính, nhân sự, dự án)',
        'Kho tài liệu chính sách, quy chế và quy trình vận hành chuẩn (SOP)',
        'Dữ liệu nghiệp vụ chuyên sâu theo từng phân hệ chức năng tương ứng',
        'Nhật ký các quyết định, đề xuất và phản hồi của người dùng đối với AI'
      ],
      operatingWorkflow: {
        input: 'Yêu cầu nghiệp vụ từ người dùng hoặc sự kiện hệ thống (kết thúc ngày làm việc, phát sinh cảnh báo, lead mới đến).',
        process: 'AI Agent tra cứu cơ sở tri thức nội bộ và truy xuất dữ liệu trong phạm vi được cấp phép.',
        aiAutomation: 'Thực hiện tính toán, đối chiếu quy định, phát hiện điểm bất thường và soạn thảo bản đề xuất hành động.',
        humanControl: 'Người có thẩm quyền xem xét bản đề xuất, chỉnh sửa nếu cần và bấm nút Phê duyệt hoặc Từ chối.',
        output: 'Hành động được thực thi chính xác (gửi báo cáo, cập nhật trạng thái, phân công việc) và ghi vết vào Audit Log.'
      },
      keyFeatures: [
        { title: 'AI CEO — Trợ lý Điều hành Cấp cao', description: 'Tổng hợp bức tranh đa chiều từ mọi phòng ban, phát hiện nút thắt dòng tiền, tiến độ và cảnh báo rủi ro vận hành.' },
        { title: 'AI Sales & AI Marketing Copilot', description: 'Phân tích chân dung khách hàng, chấm điểm cơ hội, đề xuất thông điệp tiếp cận và tối ưu chi phí thu hút lead.' },
        { title: 'AI CSKH & AI Voice', description: 'Gợi ý giải pháp xử lý khiếu nại, phân tích cảm xúc cuộc gọi và hỗ trợ nhân viên phản hồi đúng chuẩn mực tổ chức.' },
        { title: 'AI HR & AI Finance', description: 'Đối soát công chuẩn hóa, sàng lọc hồ sơ ứng viên, rà soát tính hợp lệ của đề nghị thanh toán và đối chiếu thu chi.' },
        { title: 'AI Search / RAG Tri thức nội bộ', description: 'Hỗ trợ tra cứu nhanh các quy chế, chính sách, tài liệu sản phẩm theo ngữ nghĩa tự nhiên trong phạm vi tài liệu được cấp quyền.' }
      ],
      aiAssistance: {
        reads: 'Chỉ đọc các tài liệu và trường dữ liệu đã được cấu hình trong phạm vi quyền hạn của từng Agent.',
        analyzes: 'Xu hướng biến động chỉ số, sự sai lệch so với quy trình chuẩn, nội dung văn bản và ngữ cảnh câu hỏi.',
        proposes: 'Bản nháp email, tóm tắt báo cáo điều hành, giải pháp xử lý sự vụ, danh mục việc cần làm ưu tiên.',
        executes: 'Tổng hợp dữ liệu, lập bảng so sánh, định dạng văn bản, tạo bản ghi nháp trên hệ thống.',
        requiresApproval: 'Bắt buộc phê duyệt đối với bất kỳ hành động nào tác động ra bên ngoài (gửi thư cho khách, xuất quỹ, thay đổi chính sách, ký duyệt hồ sơ).'
      },
      systemConnections: [
        'Định tuyến và kết nối toàn diện 11 phân hệ lõi của AI ENTERPRISE (Scope A đến Scope K).',
        'Tích hợp trực tiếp vào Không gian làm việc cá nhân (Workspace) theo từng phân quyền chức danh.',
        'Kết nối chặt chẽ với Hệ thống Phân quyền đa tầng, Kiểm toán & Bảo mật (Scope K) để cô lập dữ liệu đầu vào.'
      ],
      reportTypes: [
        'Báo cáo tần suất sử dụng và loại tác vụ của từng AI Agent',
        'Báo cáo tỷ lệ phê duyệt / chỉnh sửa / từ chối đề xuất của AI',
        'Báo cáo thời gian tiết kiệm được trong các quy trình nghiệp vụ chuẩn'
      ],
      securityAndGovernance: {
        rbac: 'Mỗi AI Agent kế thừa chính xác phân quyền của người đang đăng nhập, không thể đọc dữ liệu vượt quyền người dùng.',
        auditLog: 'Mọi câu hỏi, câu trả lời, đề xuất và hành động của AI đều được lưu vết đầy đủ trong nhật ký hệ thống.',
        approvalMechanism: 'Nguyên tắc Human-in-the-loop bắt buộc: con người là mắt xích quyết định cuối cùng trước khi hành động diễn ra.',
        dataScope: 'Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.'
      },
      faqs: [
        {
          q: 'AI Agent có tự ý gửi email hoặc phát ngôn ra bên ngoài doanh nghiệp không?',
          a: 'Không. Mọi bản dự thảo (email, báo giá, thông báo) do AI Agent tạo ra đều phải qua bước kiểm tra và bấm nút phê duyệt của nhân sự có thẩm quyền (Human-in-the-Loop) trước khi phát hành.'
        },
        {
          q: 'Dữ liệu nội bộ của công ty có bị đem đi huấn luyện cho các mô hình AI công cộng không?',
          a: 'Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.'
        },
        {
          q: 'Sự khác biệt giữa trang này (/solutions/ai-agent) với danh mục /ai là gì?',
          a: 'Trang /solutions/ai-agent giải thích kiến trúc hạ tầng mạng lưới, phương pháp kết nối dữ liệu và cơ chế rào chắn kiểm soát; trong khi /ai là danh mục 9 vai trò Copilot tác nghiệp cụ thể theo từng vị trí làm việc.'
        }
      ]
    },
    voice: {
      name: 'AI Voice Bóc băng & Phân tích Cuộc gọi',
      tagline: 'Giải pháp ghi âm, bóc băng hội thoại đa người nói và hỗ trợ tạo tóm tắt, trích xuất việc cần làm vào CRM',
      coreValue: 'Số hóa dữ liệu cuộc gọi thoại thành văn bản có cấu trúc, giúp doanh nghiệp quản trị chất lượng tư vấn, thấu hiểu nhu cầu khách hàng và hỗ trợ cập nhật hệ thống CRM thuận tiện.',
      problems: [
        'Nội dung cuộc gọi giữa nhân viên và khách hàng thường bị thất thoát sau khi cúp máy, quản lý không nắm được cam kết thực tế.',
        'Nhân viên mất nhiều thời gian sau mỗi cuộc gọi dài để nhớ lại và gõ ghi chú tóm tắt vào hệ thống CRM, dễ sót thông tin quan trọng.',
        'Khó đánh giá chất lượng tư vấn của đội ngũ một cách khách quan; thường chỉ phát hiện vấn đề khi khách hàng đã khiếu nại.',
        'Nhân sự mới gặp khó khăn trong việc nắm bắt kịch bản xử lý các tình huống phức tạp trong khi đang đàm thoại.'
      ],
      solutionOverview: 'AI Voice là giải pháp hỗ trợ phân tích và kiểm soát chất lượng cuộc gọi: hỗ trợ chuyển đổi âm thanh thành văn bản tiếng Việt có cấu trúc, phân tách người nói, nhận diện sắc thái hội thoại, trích xuất điểm chính, soạn bản tóm tắt gợi ý (Post-call Summary) và đề xuất nhiệm vụ sang CRM.',
      dataTypes: [
        'Tệp ghi âm cuộc gọi (được mã hóa và lưu trữ an toàn)',
        'Bản bóc băng hội thoại đầy đủ (Call Transcript phân tách từng người nói)',
        'Bản tóm tắt cuộc gọi (Nội dung chính, Nhu cầu khách hàng, Thỏa thuận đạt được, Việc cần làm)',
        'Chỉ số đánh giá cuộc gọi (Thời lượng, Sắc thái hội thoại, Mức độ tuân thủ kịch bản tư vấn)'
      ],
      operatingWorkflow: {
        input: 'Cuộc gọi thoại giữa nhân sự và khách hàng kết thúc (hoặc luồng âm thanh thời gian thực).',
        process: 'Công nghệ chuyển đổi giọng nói sang văn bản tiếng Việt bóc băng chi tiết từng câu thoại.',
        aiAutomation: 'AI phân tích nội dung, trích xuất các ý chính, nhận diện sắc thái và hỗ trợ tạo bản tóm tắt gợi ý.',
        humanControl: 'Nhân viên phụ trách kiểm tra lại bản tóm tắt, bổ sung chi tiết (nếu có) và xác nhận lưu vào hồ sơ CRM.',
        output: 'Hồ sơ Customer 360 trên CRS/CRM được cập nhật theo quy trình xác nhận với lịch sử tương tác và nhiệm vụ đề xuất tiếp theo.'
      },
      keyFeatures: [
        { title: 'Tự động bóc băng hội thoại (Speech-to-Text)', description: 'Chuyển đổi âm thanh cuộc gọi tiếng Việt sang văn bản có cấu trúc, phân tách rõ lời thoại của tư vấn viên và khách hàng.' },
        { title: 'Tóm tắt nội dung sau cuộc gọi (Post-call Summary)', description: 'AI hỗ trợ trích xuất các điểm cốt lõi: nhu cầu chính, ngân sách dự kiến, các rào cản từ chối và thỏa thuận đã đạt.' },
        { title: 'Gợi ý hành động kế tiếp (Next Best Action)', description: 'Đề xuất thời gian gọi lại, tài liệu báo giá cần gửi hoặc kích hoạt yêu cầu hỗ trợ kỹ thuật theo nội dung trao đổi.' },
        { title: 'Nhận diện sắc thái & Đánh giá tuân thủ quy trình', description: 'Hỗ trợ nhận diện sắc thái trao đổi và rà soát việc tuân thủ các quy chuẩn giao tiếp theo kịch bản SOP.' },
        { title: 'Đồng bộ tự động vào Timeline CRM', description: 'Gắn trực tiếp bản ghi và tóm tắt vào hồ sơ khách hàng tương ứng, không cần sao chép thủ công.' }
      ],
      aiAssistance: {
        reads: 'Tệp ghi âm cuộc gọi và dữ liệu hồ sơ khách hàng hiện có trên hệ thống.',
        analyzes: 'Từ khóa chính, ngữ cảnh hội thoại, sắc thái trao đổi thuận lợi hoặc cần lưu ý, các cam kết về giá hoặc tiến độ xuất hiện trong hội thoại.',
        proposes: 'Bản tóm tắt cuộc gọi, danh mục các việc cần thực hiện tiếp theo (Follow-up Tasks) và kịch bản gửi tin nhắn/email tiếp nối.',
        executes: 'Soạn thảo bản tóm tắt nháp và gắn vào hồ sơ khách hàng trên giao diện CRM.',
        requiresApproval: 'Nhân viên xác nhận nội dung tóm tắt trước khi chính thức lưu vào lịch sử giao dịch; việc kích hoạt cuộc gọi tự động (nếu triển khai) phải tuân thủ nghiêm ngặt quy định pháp luật.'
      },
      systemConnections: [
        'Kết nối trực tiếp Phân hệ CRS / CRM & Bán hàng (Scope B): Cập nhật Customer 360 và lịch sử tương tác.',
        'Kết nối Phân hệ Chăm sóc khách hàng & Dịch vụ (Scope D): Quản lý chất lượng phục vụ và xử lý khiếu nại.',
        'Định hướng tích hợp với các hệ thống tổng đài SIP/VoIP nội bộ của doanh nghiệp theo chuẩn API.'
      ],
      reportTypes: [
        'Báo cáo số lượng và tổng thời lượng cuộc gọi theo ngày/tuần/tháng',
        'Báo cáo phân loại nhu cầu khách hàng theo các chủ đề xuất hiện nhiều nhất',
        'Báo cáo phân bổ cảm xúc cuộc gọi của từng nhóm phụ trách'
      ],
      securityAndGovernance: {
        rbac: 'Chỉ quản lý bộ phận và nhân sự trực tiếp phụ trách mới có quyền nghe lại ghi âm hoặc đọc bản bóc băng cuộc gọi.',
        auditLog: 'Ghi nhật ký mỗi khi có thao tác truy cập, phát lại hoặc tải xuống tệp ghi âm.',
        approvalMechanism: 'Mọi thay đổi thông tin quan trọng trong hồ sơ CRM xuất phát từ cuộc gọi đều phải qua xác nhận của nhân sự.',
        dataScope: 'Dữ liệu âm thanh được lưu trữ phân tách độc lập, có tùy chọn xóa định kỳ theo chính sách lưu trữ bảo mật của doanh nghiệp.'
      },
      faqs: [
        {
          q: 'AI Voice tại trang này có tự động gọi điện làm phiền khách hàng không?',
          a: 'Không. Giải pháp tại /solutions/voice là công nghệ bóc băng (Speech-to-Text) và phân tích chất lượng cuộc gọi đã phát sinh; hoàn toàn khác với vai trò trợ lý gọi nhắc lịch có kiểm soát tại /ai/voice.'
        },
        {
          q: 'Độ chính xác bóc băng tiếng Việt được đánh giá như thế nào?',
          a: 'Hiệu quả bóc băng phụ thuộc vào chất lượng âm thanh và môi trường đàm thoại thực tế. Các chỉ số hiển thị trên giao diện là dữ liệu mô phỏng phục vụ minh họa luồng xử lý tách người nói và nhận diện thuật ngữ kinh doanh.'
        },
        {
          q: 'Tệp ghi âm cuộc gọi được lưu trữ và bảo vệ như thế nào?',
          a: 'Mọi tệp ghi âm được mã hóa 256-bit tại cơ sở dữ liệu riêng, chỉ nhân sự phụ trách và quản lý trực tiếp mới có quyền truy cập; mọi thao tác nghe lại đều được ghi nhật ký kiểm toán (Audit Log).'
        }
      ]
    },
    automation: {
      name: 'Tự động hóa Quy trình (Workflow Automation)',
      tagline: 'Động cơ tự động hóa quy trình nghiệp vụ liên phòng ban theo chuẩn SOP, giảm thiểu tối đa thao tác thủ công',
      coreValue: 'Kết nối các bước công việc rời rạc giữa các bộ phận thành một chuỗi vận hành tự động, thông suốt, có điều kiện kích hoạt, cơ chế phê duyệt và nhật ký kiểm soát rõ ràng.',
      problems: [
        'Quy trình chuyển giao công việc giữa các phòng ban bị tắc nghẽn (kinh doanh ký hợp đồng xong phải nhắc kế toán bằng tay, kế toán xuất hóa đơn xong phải tự nhắn cho kho).',
        'Nhân viên tốn nhiều giờ mỗi ngày cho các thao tác lặp đi lặp lại: nhập liệu từ kênh này sang kênh khác, gửi email xác nhận, gán việc thủ công.',
        'Quy trình phê duyệt (nghỉ phép, tạm ứng, duyệt hợp đồng, duyệt chiết khấu) bị chậm trễ do qua nhiều kênh chat và giấy tờ.',
        'Khó phát hiện nút thắt cổ chai: Quản lý không biết hồ sơ đang kẹt ở bàn ai và chậm trễ bao lâu so với quy định SOP.'
      ],
      solutionOverview: 'Phân hệ Tự động hóa Quy trình của AI ENTERPRISE thiết lập dòng chảy công việc chuẩn mực theo mô hình: Kích hoạt (Trigger) → Điều kiện (Condition) → Hành động (Action) → Phê duyệt (Approval) → Kết quả (Result) → Nhật ký (Log). Giúp doanh nghiệp vận hành nhịp nhàng, có kiểm soát và rõ ràng trách nhiệm liên phòng ban.',
      dataTypes: [
        'Định nghĩa quy trình SOP (Danh sách bước, Người phụ trách, Thời hạn SLA, Điều kiện rẽ nhánh)',
        'Trạng thái các luồng công việc đang chạy (Đang xử lý, Chờ duyệt, Hoàn thành, Bị từ chối)',
        'Dữ liệu kích hoạt (Lead mới, Đơn hàng mới, Thanh toán hoàn tất, Hết hạn hợp đồng)',
        'Biên bản kiểm tra và nhật ký lịch sử thực thi quy trình (Audit Trail)'
      ],
      operatingWorkflow: {
        input: 'Sự kiện kích hoạt (Trigger): Khách ký hợp đồng, nhân viên gửi đơn tạm ứng, lead mới đăng ký.',
        process: 'Hệ thống kiểm tra điều kiện (Condition): Giá trị hợp đồng có trên hạn mức? Phòng ban nào phụ trách?',
        aiAutomation: 'Tự động tạo tác vụ, điền sẵn biểu mẫu, phân bổ cho đúng người và gửi thông báo nhắc việc.',
        humanControl: 'Cấp quản lý có thẩm quyền xem xét hồ sơ và nhấn Phê duyệt hoặc yêu cầu chỉnh sửa (Approval).',
        output: 'Kết quả được cập nhật đồng thời sang các phân hệ liên quan (kế toán xuất chứng từ, nhân sự ghi nhận, email xác nhận được gửi) và ghi vết vào Log.'
      },
      keyFeatures: [
        { title: 'Động cơ quy trình Trigger - Condition - Action', description: 'Cấu hình linh hoạt các kịch bản tự động hóa từ đơn giản đến phức tạp mà không cần can thiệp mã nguồn.' },
        { title: 'Quy trình Phê duyệt Đa cấp (Multi-level Approval)', description: 'Hỗ trợ duyệt tuần tự hoặc song song, cấu hình ngưỡng thẩm quyền theo giá trị tài chính hoặc cấp bậc nhân sự.' },
        { title: 'Tự động luân chuyển hồ sơ liên phòng ban', description: 'Dữ liệu từ Sales tự động kích hoạt tiến trình sang Kế toán, Kho và CSKH ngay khi trạng thái thay đổi.' },
        { title: 'Kiểm soát SLA & Cảnh báo trễ hạn', description: 'Tự động gửi thông báo nhắc nhở khi công việc sắp đến hạn hoặc chuyển quyền xử lý cho cấp cao hơn khi quá hạn quy định.' },
        { title: 'Nhật ký thực thi minh bạch (Execution Log)', description: 'Theo dõi chi tiết mốc thời gian: ai đã làm gì, ở bước nào, kết quả ra sao và lý do từ chối (nếu có).' }
      ],
      aiAssistance: {
        reads: 'Quy chế quy trình nội bộ, dữ liệu phiếu yêu cầu và lịch sử phê duyệt các trường hợp tương tự.',
        analyzes: 'Mức độ tuân thủ quy định SOP, phát hiện các điểm sai sót trong hồ sơ đầu vào và đo lường thời gian xử lý qua các khâu.',
        proposes: 'Gợi ý phân bổ việc cho nhân sự đang có khối lượng công việc phù hợp, đề xuất duyệt nhanh các hồ sơ chuẩn mực định kỳ.',
        executes: 'Tự động gán nhãn, chuyển bước quy trình, tạo thông báo nhắc hẹn và cập nhật trạng thái cơ sở dữ liệu.',
        requiresApproval: 'Mọi điểm chốt chặn tài chính, pháp lý hoặc điều chỉnh quyền hạn nhân sự đều bắt buộc phải có sự phê duyệt trực tiếp của con người.'
      },
      systemConnections: [
        'Liên kết trực tiếp với Phân hệ Quản lý công việc & Quy trình (Scope G).',
        'Kết nối Phân hệ Quản trị nhân sự & Đào tạo (Scope F) để xác định cây phân cấp báo cáo và phân quyền duyệt.',
        'Kết nối Phân hệ CRS/CRM & Bán hàng (Scope B) và Kế toán & Quản trị tài chính (Scope E) cho các luồng xử lý giao dịch.'
      ],
      reportTypes: [
        'Báo cáo thời gian hoàn thành trung bình của từng loại quy trình',
        'Báo cáo các điểm nghẽn (Bottlenecks) và khâu thường xuyên bị trễ hạn',
        'Báo cáo số lượng hồ sơ được xử lý tự động so với xử lý thủ công'
      ],
      securityAndGovernance: {
        rbac: 'Phân quyền chặt chẽ ai được phép tạo luồng, ai được quyền duyệt và ai chỉ được quyền xem tiến độ.',
        auditLog: 'Lưu giữ nhật ký kiểm toán cho các hành động duyệt/hủy duyệt cùng mốc thời gian phục vụ công tác hậu kiểm.',
        approvalMechanism: 'Không có bất kỳ quy trình tự động nào được phép tự ý bỏ qua các chốt chặn phê duyệt đã được quy định trong chính sách công ty.',
        dataScope: 'Hồ sơ công việc chỉ hiển thị cho các cá nhân và bộ phận nằm trong chuỗi trách nhiệm của quy trình đó.'
      },
      faqs: [
        {
          q: 'Khi quy trình gặp ngoại lệ (Exception), hệ thống sẽ xử lý như thế nào?',
          a: 'Động cơ quy trình sẽ tự động kích hoạt nhánh xử lý ngoại lệ: tạm dừng bước tự động, gắn cờ cảnh báo màu đỏ và thông báo trực tiếp đến cấp quản lý có thẩm quyền cao hơn để xem xét can thiệp.'
        },
        {
          q: 'Doanh nghiệp có thể tự cấu hình thêm quy trình mới mà không cần lập trình không?',
          a: 'Có. Giao diện trực quan cho phép định nghĩa các quy tắc Trigger - Condition - Action theo đúng văn bản SOP nội bộ của doanh nghiệp mà không cần can thiệp mã nguồn.'
        },
        {
          q: 'Cấp quản lý có thể phê duyệt hồ sơ trên điện thoại di động không?',
          a: 'Có. Mọi yêu cầu phê duyệt đều gửi thông báo tức thì đến ứng dụng Workspace trên cả máy tính và thiết bị di động, người duyệt xem tóm tắt hồ sơ và bấm duyệt nhanh chỉ trong vài giây.'
        }
      ]
    },
    website: {
      name: 'Website Doanh nghiệp Hợp nhất Lõi',
      tagline: 'Cổng thông tin & thương hiệu trực tuyến kết nối trực tiếp với CRM, hỗ trợ đồng bộ phễu khách hàng',
      coreValue: 'Website không đơn thuần là một trang giới thiệu tĩnh, mà là cửa ngõ số kết nối trực tiếp với hệ điều hành doanh nghiệp, thu hút và chuyển hóa lead trực tiếp vào đường ống bán hàng.',
      problems: [
        'Website làm bằng một nền tảng bên ngoài, khi có khách đăng ký thì thông tin chỉ gửi về email cá nhân hoặc lưu vào một bảng tính tách rời, rất dễ bị bỏ quên.',
        'Mất từ vài giờ đến vài ngày để nhân viên kinh doanh tiếp cận lead mới từ website, làm giảm mạnh cơ hội chốt giao dịch.',
        'Nội dung, hình ảnh, thông điệp trên website khó cập nhật; mỗi lần sửa đổi phải phụ thuộc hoàn toàn vào đơn vị thiết kế web thuê ngoài.',
        'Không đo lường được hiệu quả thực sự: Không biết khách hàng truy cập từ chiến dịch nào và sau đó có trở thành hợp đồng hay không.'
      ],
      solutionOverview: 'Trong kiến trúc AI ENTERPRISE, Phân hệ Website (Scope A) được xây dựng kết nối chặt chẽ với hệ thống quản trị: các biểu mẫu đăng ký, thông tin liên hệ và lượt tương tác được hỗ trợ đồng bộ theo luồng API vào CRS/CRM để kích hoạt quy trình chăm sóc khách hàng.',
      dataTypes: [
        'Thông tin thương hiệu, hồ sơ doanh nghiệp và nhận diện số (Logo, Màu sắc, Phông chữ)',
        'Kho nội dung, bài viết, tài liệu sản phẩm và hình ảnh/video chính thống',
        'Dữ liệu biểu mẫu đăng ký, khảo sát và phiếu yêu cầu tư vấn',
        'Dữ liệu phiên bản giao diện website và các trang landing page chiến dịch'
      ],
      operatingWorkflow: {
        input: 'Khách truy cập vào website doanh nghiệp, xem thông tin và điền biểu mẫu liên hệ hoặc đăng ký tư vấn.',
        process: 'Hệ thống xác thực dữ liệu đầu vào, ngăn chặn spam, gán nhãn nguồn gốc chiến dịch (UTM tags).',
        aiAutomation: 'AI hỗ trợ kiểm tra tính hợp lệ của thông tin, phân loại sơ bộ ngành nghề/nhu cầu của khách và đẩy vào CRS.',
        humanControl: 'Tư vấn viên nhận thông báo trên Workspace theo cấu hình hàng đợi và tiếp nhận chăm sóc theo quy trình.',
        output: 'Dữ liệu được lưu trữ an toàn trong hồ sơ Customer 360, hình thành hành trình khách hàng từ lần chạm đầu tiên.'
      },
      keyFeatures: [
        { title: 'Đồng bộ biểu mẫu trực tiếp vào CRS / CRM', description: 'Hỗ trợ đồng bộ thông tin đăng ký vào hệ thống nội bộ, giảm thiểu các bước sao chép trung gian thủ công.' },
        { title: 'Quản trị nội dung & Nhận diện tập trung', description: 'Đồng bộ thông tin doanh nghiệp, tầm nhìn, dịch vụ trực tiếp từ phân hệ quản trị Admin của AI ENTERPRISE.' },
        { title: 'Hỗ trợ cấu hình Landing Page chuyên biệt', description: 'Dễ dàng triển khai các trang chuyên đề phục vụ chiến dịch giới thiệu giải pháp theo từng ngành nghề hoặc sự kiện.' },
        { title: 'Tối ưu trải nghiệm hiển thị đa thiết bị', description: 'Giao diện tương thích trên máy tính để bàn, máy tính bảng và điện thoại di động với tốc độ tải nhanh chóng.' },
        { title: 'Định hướng tích hợp Trợ lý AI giải đáp website', description: 'Khả năng hỗ trợ khách truy cập tra cứu thông tin sản phẩm và chính sách dựa trên cơ sở dữ liệu tri thức chính thức.' }
      ],
      aiAssistance: {
        reads: 'Kho tài liệu thông tin doanh nghiệp, câu hỏi thường gặp (FAQ) và nội dung biểu mẫu khách hàng gửi tới.',
        analyzes: 'Nội dung nhu cầu khách hàng mô tả trong form đăng ký để phân loại mức độ tiềm năng và gợi ý phòng ban phụ trách.',
        proposes: 'Gợi ý bản nháp nội dung bài viết, tối ưu tiêu đề chuẩn SEO và tinh chỉnh lời kêu gọi hành động (CTA).',
        executes: 'Tự động phân luồng lead từ website về đúng hàng đợi của đội ngũ bán hàng tương ứng.',
        requiresApproval: 'Mọi nội dung xuất bản mới lên website hoặc các thay đổi về giá/chính sách đều phải được quản trị viên duyệt trước khi công khai.'
      },
      systemConnections: [
        'Kết nối trực tiếp Phân hệ Quản trị, Phân quyền & Bảo mật hệ thống (Scope K): Quản lý cấu hình doanh nghiệp và nhận diện thương hiệu.',
        'Kết nối Phân hệ CRS / CRM & Bán hàng (Scope B): Hỗ trợ chuyển tiếp dữ liệu lead vào đường ống bán hàng theo phân luồng.',
        'Kết nối Phân hệ Tiếp thị số & Chiến dịch (Scope C): Đo lường tỷ lệ chuyển đổi của các chiến dịch trực tuyến.'
      ],
      reportTypes: [
        'Báo cáo số lượng lượt đăng ký biểu mẫu theo ngày/tuần/tháng',
        'Báo cáo tỷ lệ chuyển đổi từ khách truy cập thành lead tiềm năng',
        'Báo cáo các trang nội dung và giải pháp được quan tâm nhiều nhất'
      ],
      securityAndGovernance: {
        rbac: 'Phân chia quyền hạn rõ ràng: Biên tập viên soạn thảo nội dung, Quản trị viên duyệt xuất bản, Nhân sự kinh doanh chỉ nhận dữ liệu lead.',
        auditLog: 'Lưu vết mọi thay đổi về nội dung, cấu hình biểu mẫu và lịch sử xuất bản của các trang.',
        approvalMechanism: 'Cơ chế kiểm duyệt nội dung trước khi công khai (Publishing Workflow) hỗ trợ hạn chế lỗi thông tin.',
        dataScope: 'Dữ liệu khách hàng đăng ký trên website được mã hóa truyền tải và bảo vệ theo chuẩn an toàn thông tin.'
      },
      faqs: [
        {
          q: 'Website có tải nhanh và chuẩn SEO Google không?',
          a: 'Có. Website được xây dựng theo kiến trúc hiện đại, tối ưu chỉ số Core Web Vitals, chuẩn thẻ meta SEO và tương thích hiển thị mượt mà trên mọi kích cỡ màn hình máy tính và di động.'
        },
        {
          q: 'Khi khách hàng điền form trên website, sau bao lâu thì kinh doanh nhận được?',
          a: 'Dữ liệu form được hỗ trợ đồng bộ nhanh qua API / webhook vào đường ống bán hàng của CRM (Scope B) theo luồng sự kiện, kèm theo thông số phân tích nguồn chiến dịch UTM để phân luồng tiếp nhận.'
        },
        {
          q: 'Doanh nghiệp có thể tự cập nhật nội dung, banner bài viết trên website không?',
          a: 'Hoàn toàn chủ động. Toàn bộ nội dung, hình ảnh, bài viết giới thiệu giải pháp được cập nhật trực tiếp thông qua Phân hệ Quản trị Admin mà không cần phụ thuộc vào đơn vị thiết kế ngoài.'
        }
      ]
    },
    bi: {
      name: 'Báo cáo & BI Thời gian thực',
      tagline: 'Trung tâm dữ liệu điều hành đa chiều, trực quan hóa chỉ số KPI/OKR và dự báo xu hướng vận hành',
      coreValue: 'Giảm thiểu việc chờ đợi báo cáo tổng hợp cuối tháng bằng văn bản Excel thủ công; hỗ trợ nhà lãnh đạo theo dõi các chỉ số sức khỏe doanh nghiệp đa chiều theo luồng dữ liệu định kỳ và tức thời để ra quyết định dựa trên số liệu.',
      problems: [
        'Lãnh đạo phải đợi thời gian dài sau khi hết kỳ mới có số liệu tổng hợp từ các phòng ban, khiến các quyết định điều hành có thể bị chậm trễ.',
        'Số liệu giữa các phòng ban bị vênh nhau (Doanh số kinh doanh báo một đằng, số liệu kế toán thu về một nẻo, tồn kho thực tế lại khác).',
        'Mất nhiều công sức nhân sự chỉ để cắt dán số liệu từ nhiều file Excel rời rạc vào một trang chiếu để họp.',
        'Thiếu khả năng cảnh báo sớm: Khi phát hiện doanh thu sụt giảm hoặc chi phí vượt định mức thì hậu quả đã xảy ra.'
      ],
      solutionOverview: 'Phân hệ Báo cáo & Business Intelligence (Scope J) trong AI ENTERPRISE đóng vai trò là trung tâm dữ liệu điều hành: kết nối dòng chảy thông tin từ các phân hệ, hỗ trợ tính toán các chỉ số đo lường hiệu quả (KPIs), hiển thị bảng điều khiển trực quan và đưa ra cảnh báo kịp thời.',
      dataTypes: [
        'Dữ liệu chỉ số kinh doanh & doanh thu (Doanh số theo kỳ, Giá trị trung bình đơn, Tỷ lệ chốt)',
        'Dữ liệu chỉ số vận hành & năng suất (Số lượng tác vụ hoàn thành, Thời gian xử lý quy trình SLA)',
        'Dữ liệu chỉ số tài chính (Doanh thu đã thu, Công nợ phải thu, Chi phí vận hành cơ bản)',
        'Dữ liệu chỉ số nhân sự (Quy mô nhân sự, Tỷ lệ biến động, Năng suất làm việc bình quân)',
        'Dữ liệu hiệu quả ứng dụng AI & Tự động hóa (Số tác vụ tự động thực hiện, Tỷ lệ người dùng chấp thuận đề xuất)'
      ],
      operatingWorkflow: {
        input: 'Dữ liệu phát sinh liên tục từ các hoạt động thực tế: đơn hàng tạo mới, cuộc gọi hoàn tất, phiếu duyệt được ký, chứng từ được xuất.',
        process: 'Động cơ dữ liệu hỗ trợ làm sạch, tổng hợp theo luồng phát sinh và đồng bộ vào các khối chỉ số quản trị.',
        aiAutomation: 'AI phát hiện các biến động bất thường (doanh số giảm đột ngột ở một nhóm ngành, chi phí tăng cao bất thường) và tạo thông báo.',
        humanControl: 'Nhà quản lý xem xét bảng điều khiển, đào sâu (drill-down) vào các dữ liệu thành phần và đưa ra quyết định chỉ đạo.',
        output: 'Báo cáo điều hành được hỗ trợ cập nhật theo luồng dữ liệu phát sinh, giảm thiểu công tác tổng hợp thủ công.'
      },
      keyFeatures: [
        { title: 'Bảng điều khiển Tổng quan (Executive Dashboard)', description: 'Hiển thị các chỉ số trọng yếu nhất của toàn doanh nghiệp trên một màn hình duy nhất dành cho cấp lãnh đạo.' },
        { title: 'Báo cáo Chuyên sâu theo Phòng ban', description: 'Các bảng điều khiển chuyên biệt cho từng giám đốc chức năng: Bán hàng, Tiếp thị, Chăm sóc khách hàng, Nhân sự, Tài chính.' },
        { title: 'Theo dõi Mục tiêu & Kết quả then chốt (KPI / OKR)', description: 'Liên kết mục tiêu chiến lược với số liệu thực thi hàng ngày, đánh giá tiến độ hoàn thành theo thời gian thực.' },
        { title: 'Đo lường Hiệu quả AI & Tự động hóa', description: 'Báo cáo minh bạch về số lượng công việc được giảm tải nhờ quy trình tự động và trợ lý AI trong tổ chức.' },
        { title: 'Cảnh báo Bất thường & Xu hướng', description: 'Tự động gắn cờ các chỉ số vượt ngưỡng an toàn hoặc có dấu hiệu suy giảm để can thiệp kịp thời.' }
      ],
      aiAssistance: {
        reads: 'Toàn bộ cơ sở dữ liệu chỉ số tổng hợp được cấp phép từ các phân hệ trong hệ điều hành.',
        analyzes: 'Mối tương quan giữa các biến số (chi phí quảng cáo và số lượng hợp đồng chốt được), tốc độ tăng trưởng và độ lệch so với kế hoạch.',
        proposes: 'Tóm tắt tình hình vận hành định kỳ dạng văn bản ngắn gọn, chỉ ra các nguyên nhân tiềm ẩn đằng sau các biến động số liệu.',
        executes: 'Tự động kết xuất biểu đồ, cập nhật bảng điều khiển và gửi bản tin tóm tắt số liệu định kỳ theo lịch hẹn.',
        requiresApproval: 'Mọi hành động can thiệp điều chỉnh ngân sách hay chính sách căn cứ trên số liệu đều thuộc thẩm quyền của ban giám đốc.'
      },
      systemConnections: [
        'Tổng hợp dữ liệu từ các Phân hệ chức năng của AI ENTERPRISE (Scope A, B, C, D, E, F, G, H, I, K).',
        'Kết nối với Không gian làm việc của lãnh đạo (Executive Workspace) để hiển thị báo cáo điều hành.',
        'Cung cấp số liệu nền tảng cho Trợ lý AI CEO (Scope I) phân tích và đưa ra khuyến nghị.'
      ],
      reportTypes: [
        'Báo cáo Doanh thu & Phễu bán hàng thời gian thực',
        'Báo cáo Hiệu suất Chăm sóc khách hàng và Tỷ lệ xử lý khiếu nại',
        'Báo cáo Tiến độ thực hiện Mục tiêu OKR / KPI của các bộ phận',
        'Báo cáo Thống kê Năng suất vận hành và Tự động hóa quy trình'
      ],
      securityAndGovernance: {
        rbac: 'Phân quyền truy cập báo cáo theo cấp bậc quản lý nghiêm ngặt; mỗi cấp chỉ được xem số liệu trong phạm vi quản lý của mình.',
        auditLog: 'Ghi nhật ký mọi lượt xem báo cáo chiến lược và lượt xuất dữ liệu thống kê ra khỏi hệ thống.',
        approvalMechanism: 'Các bảng chỉ tiêu và công thức tính toán KPI/OKR được phê duyệt chính thức bởi Ban điều hành.',
        dataScope: 'Toàn bộ dữ liệu báo cáo được tính toán trực tiếp từ cơ sở dữ liệu riêng của doanh nghiệp, đảm bảo an toàn thông tin theo chính sách quản trị.'
      },
      faqs: [
        {
          q: 'Dữ liệu trên báo cáo BI có cập nhật theo thời gian thực không?',
          a: 'Có. Hệ thống hỗ trợ tính toán và cập nhật biểu đồ theo luồng dữ liệu phát sinh khi giao dịch, chứng từ hoặc tác vụ CSKH được ghi nhận, giúp giảm thiểu độ trễ so với phương pháp tổng hợp thủ công.'
        },
        {
          q: 'Có thể xuất dữ liệu từ bảng điều khiển BI ra file Excel hoặc PDF không?',
          a: 'Có. Hệ thống hỗ trợ xuất báo cáo định dạng Excel, CSV hoặc bản in PDF tiêu chuẩn phục vụ các buổi họp điều hành; mọi thao tác xuất file đều được lưu vết trong Audit Log.'
        },
        {
          q: 'Doanh nghiệp có thể tùy biến công thức tính toán chỉ tiêu KPI / OKR riêng không?',
          a: 'Có. Ban Lãnh đạo có thể cấu hình công thức trọng số, ngưỡng chỉ tiêu và chu kỳ đánh giá phù hợp với chính sách quản trị của từng giai đoạn phát triển.'
        }
      ]
    }
  },

  visuals: {
    common: {
      illustrativeData: '[Dữ liệu minh họa]',
      illustrativeScenario: '[Kịch bản minh họa]',
      deviceVisualization: '[Trực quan hóa thiết bị]',
      encryptionNotice: 'Mã hóa tệp ghi âm 256-bit',
      roleBasedAccess: 'Phân quyền xem theo chức danh',
      stepPrefix: 'Bước',
      status: 'Trạng thái'
    },
    sales: {
      tabPipeline: '1. Kanban Pipeline',
      tabCustomer360: '2. Customer 360',
      tabFunnel: '3. Phễu chuyển đổi (Funnel)',
      tabHandoff: '4. Liên thông Hợp đồng → Kế toán → CSKH',
      pipelineTitle: 'Đường ống cơ hội bán hàng (Sales Opportunity Pipeline)',
      pipelineSubtitle: 'Theo dõi tiến độ từ lúc tiếp nhận lead đến khi chốt hợp đồng và chuyển giao',
      pipelineTotalLabel: 'Tổng giá trị đường ống:',
      colApproach: 'Tiếp cận & Đánh giá',
      colQuote: 'Khảo sát & Báo giá',
      colNegotiation: 'Đàm phán hợp đồng',
      colWon: 'Đã chốt & Bàn giao',
      customer360Title: 'Góc nhìn khách hàng 360° (Customer 360)',
      customer360Subtitle: 'Hồ sơ pháp nhân, hạn mức tín dụng và dòng thời gian tương tác',
      customerVipBadge: 'Khách hàng trọng yếu',
      customerIndustry: 'Sản xuất công nghiệp & Phân phối hóa chất',
      statTotalRevenue: 'Doanh số lũy kế',
      statOpenOrders: 'Hợp đồng đang thực hiện',
      statDebt: 'Công nợ hiện hành',
      statHealth: 'Chỉ số sức khỏe tài khoản',
      statHealthVal: 'Rất tốt (CSAT 9.4/10)',
      timelineTitle: 'Dòng thời gian tương tác gần nhất',
      funnelTitle: 'Phễu chuyển đổi toàn trình (Sales Funnel)',
      funnelSubtitle: 'Phân tích tỷ lệ rơi rụng qua từng chặng và thời gian trung bình đóng deal',
      handoffTitle: 'Quy trình liên thông: Bán hàng → Tài chính → Chăm sóc khách hàng',
      handoffSubtitle: 'Dữ liệu chuyển đổi tức thời qua Event Bus không cần gửi email thông báo thủ công',
      step1Title: 'Chốt hợp đồng & Ký số',
      step2Title: 'Kế toán tự động nhận chứng từ',
      step3Title: 'CSKH kích hoạt hồ sơ bảo hành',
      step4Title: 'Ban Giám đốc duyệt doanh thu'
    },
    marketing: {
      tabFunnel: '1. Phễu Nguồn → Lead → Doanh thu',
      tabChannels: '2. Hiệu quả kênh (CAC & CPL)',
      tabCalendar: '3. Lịch nội dung & Chiến dịch',
      tabNurturing: '4. Chuỗi nuôi dưỡng (Nurturing)',
      funnelTitle: 'Liên thông phễu: Từ ngân sách tiếp thị đến doanh thu thực tế',
      funnelSubtitle: 'Đo lường doanh thu đóng được từ mỗi đồng chi phí tiếp thị mà không cần đối soát thủ công',
      roiLabel: 'ROI toàn kênh: 380%',
      channelsTitle: 'Bảng xếp hạng hiệu quả kênh tiếp thị',
      channelsSubtitle: 'So sánh chi phí trên một lead (CPL) và chi phí thu hút một khách hàng trả tiền (CAC)',
      calendarTitle: 'Lịch chiến dịch & Kế hoạch xuất bản nội dung',
      calendarSubtitle: 'Điều phối đa kênh từ bài viết website, email nuôi dưỡng đến hội thảo chuyên đề',
      nurturingTitle: 'Quy trình nuôi dưỡng khách hàng tự động theo kịch bản',
      nurturingSubtitle: 'Phân nhóm lead theo hành vi và gửi thông điệp cá nhân hóa đúng thời điểm'
    },
    customerService: {
      tabInbox: '1. Hộp thư Hỗ trợ & Ticket Queue',
      tabSla: '2. Đồng hồ đo hạn cam kết SLA',
      tabTimeline: '3. Dòng thời gian giải quyết sự cố',
      tabCsat: '4. Phân bố mức độ hài lòng (CSAT)',
      inboxTitle: 'Hàng đợi Ticket hợp nhất đa kênh (Omnichannel Inbox)',
      inboxSubtitle: 'Tự động phân loại yêu cầu từ Email, Website, Cổng hỗ trợ và Cuộc gọi',
      slaTitle: 'Đồng hồ đo hạn cam kết dịch vụ (SLA Breaches Countdown)',
      slaSubtitle: 'Cảnh báo màu sắc và tự động leo thang khi ticket sắp chạm ngưỡng vi phạm cam kết',
      timelineTitle: 'Nhật ký xử lý khiếu nại khách hàng tiêu biểu',
      timelineSubtitle: 'Minh bạch từng bước tiếp nhận, chẩn đoán, sửa lỗi và gửi thư xin lỗi kèm quà tặng',
      csatTitle: 'Khảo sát chỉ số hài lòng khách hàng (CSAT & NPS)',
      csatSubtitle: 'Đo lường cảm nhận sau khi đóng ticket và tỷ lệ khách hàng quay lại mua tiếp'
    },
    hr: {
      tabAttendance: '1. Lịch công & Đơn nghỉ phép',
      tabOnboarding: '2. Checklist Onboarding nhân sự',
      tabSkillMatrix: '3. Ma trận kỹ năng (Skill Matrix)',
      tabTraining: '4. Lộ trình đào tạo nội bộ',
      attendanceTitle: 'Bảng chấm công & Đơn từ hành chính trực tuyến',
      attendanceSubtitle: 'Dữ liệu quẹt vân tay / nhận diện khuôn mặt đồng bộ tức thời với lịch công chuẩn',
      onboardingTitle: 'Quy trình hội nhập nhân viên mới (Onboarding 30 ngày)',
      onboardingSubtitle: 'Tự động giao tài khoản, máy tính, tài liệu đào tạo và phân công người hướng dẫn (Mentor)',
      skillMatrixTitle: 'Ma trận đánh giá năng lực & Kỹ năng cốt lõi',
      skillMatrixSubtitle: 'So sánh năng lực thực tế với khung tiêu chuẩn chức danh công việc',
      trainingTitle: 'Lộ trình khóa học nghiệp vụ & Đào tạo hội nhập',
      trainingSubtitle: 'Theo dõi tỷ lệ hoàn thành các học phần SOP và bài kiểm tra trắc nghiệm định kỳ'
    },
    finance: {
      tabCashflow: '1. Dòng tiền lưu chuyển (Cash-flow)',
      tabAging: '2. Báo cáo tuổi nợ (Aging Report)',
      tabBudget: '3. Dự toán vs Thực tế (Budget vs Actual)',
      tabReconciliation: '4. Đối soát giao dịch ngân hàng & Hóa đơn',
      cashflowTitle: 'Bảng theo dõi dòng tiền thu — chi thời gian thực',
      cashflowSubtitle: 'Dự báo số dư khả dụng trong 30-60 ngày tới dựa trên các khoản phải thu và chi định kỳ',
      agingTitle: 'Báo cáo phân loại tuổi nợ khách hàng (Aging Analysis)',
      agingSubtitle: 'Tự động gửi cảnh báo và gắn cờ hạn chế bán hàng khi khách nợ quá hạn 45 ngày',
      budgetTitle: 'Kiểm soát hạn mức ngân sách phòng ban',
      budgetSubtitle: 'So sánh chi phí thực chi so với dự toán được ban giám đốc phê duyệt đầu năm',
      reconciliationTitle: 'Đối soát tự động giữa sao kê ngân hàng và hóa đơn điện tử',
      reconciliationSubtitle: 'AI khớp nối số tiền, mã hợp đồng và tên người thụ hưởng với độ chính xác cao'
    },
    management: {
      tabCockpit: '1. Executive Cockpit (Bảng điều hành)',
      tabOkr: '2. Cây Mục tiêu chiến lược OKR',
      tabExceptions: '3. Hàng đợi Ngoại lệ cần duyệt',
      tabMorningBrief: '4. Bản tin Morning Brief có trích dẫn nguồn',
      cockpitTitle: 'Bảng điều khiển điều hành trung tâm (Executive Cockpit)',
      cockpitSubtitle: 'Tổng hợp chỉ số sức khỏe từ cả 5 khối phòng ban: Doanh thu, Chi phí, Khách hàng, Nhân sự',
      okrTitle: 'Bản đồ mục tiêu chiến lược và kết quả then chốt (Company OKR)',
      okrSubtitle: 'Liên kết mục tiêu cấp công ty xuống các phòng ban và cá nhân phụ trách',
      exceptionsTitle: 'Hàng đợi các trường hợp ngoại lệ cần phê duyệt khẩn',
      exceptionsSubtitle: 'Các đề xuất chiết khấu lớn, tuyển dụng vượt biên chế, chi tiêu vượt định mức',
      morningBriefTitle: 'Bản tin điều hành buổi sáng tổng hợp bởi AI (Executive Morning Brief)',
      morningBriefSubtitle: 'Tóm lược các số liệu biến động trong 24h qua và gợi ý hành động cần ưu tiên'
    },
    crm: {
      headerCompany: 'Công ty Cổ phần Công nghệ An Phát (AP Tech)',
      headerVipBadge: 'Khách hàng VIP',
      headerCode: 'Mã: KH-2026-0842',
      headerReps: 'Đại diện: Ông Nguyễn Văn Hùng (Giám đốc Vận hành) • Phụ trách: Trần Thị Mai (Sales Lead)',
      statRevenueLabel: 'Doanh thu tích lũy',
      statRelationLabel: 'Trạng thái quan hệ',
      statRelationVal: 'Tương tác tích cực',
      tabTimeline: 'Dòng thời gian tương tác',
      tabContracts: 'Hợp đồng & Báo giá',
      tabBilling: 'Thanh toán & Kế toán (Scope E)',
      tabService: 'Bảo hành & CSKH (Scope D)',
      pipelineHeader: 'Đường ống Pipeline đa luồng (Bán hàng & Đơn hàng B2B)',
      pipelineSubtitle: 'Trực quan hóa từng giai đoạn từ lúc tiếp nhận lead đến khi chốt hợp đồng và chuyển giao'
    },
    aiAgent: {
      title: 'Mô phỏng Vận hành 9 AI Agent Chuyên trách',
      subtitle: 'Quy trình khép kín: Đọc dữ liệu phân quyền → Phân tích nghiệp vụ → Đề xuất kịch bản → Con người phê duyệt',
      step1Title: '1. Cán bộ nhân viên (User)',
      step1Badge: 'Tác nhân kích hoạt',
      step1Desc: 'Người dùng gửi câu hỏi nghiệp vụ hoặc lệnh tác vụ từ Workspace (VD: "Soạn thảo biên bản đối soát hợp đồng cho khách hàng An Phát").',
      step2Title: '2. AI Agent chuyên trách',
      step2Badge: 'Phân giải ngữ nghĩa',
      step2Desc: 'Agent bóc tách ý định (Intent), xác định phân hệ liên quan (Scope B CRM + Scope E Kế toán) và ranh giới quyền hạn được giao.',
      step3Title: '3. Dữ liệu được cấp (RBAC)',
      step3Badge: 'Cô lập dữ liệu cục bộ',
      step3Desc: 'Hệ thống kiểm tra Token phân quyền: Agent CHỈ được nạp dữ liệu khách hàng An Phát mà nhân viên này phụ trách; hỗ trợ hạn chế rò rỉ dữ liệu ngoài phạm vi.',
      step4Title: '4. Đề xuất có cấu trúc',
      step4Badge: 'Dự thảo giải pháp',
      step4Desc: 'Agent tổng hợp thông tin, tính toán số liệu và soạn thảo bản đề xuất hoàn chỉnh dạng nháp gửi đến màn hình người có thẩm quyền.',
      proposalCardTitle: 'Bản Dự thảo Đề xuất của AI Agent (Cần Phê Duyệt)',
      proposalCardSubtitle: 'Trích xuất từ Scope B (Hợp đồng #HD-2026-04) và Scope E (Ủy nhiệm chi ngân hàng)',
      btnApprove: 'Phê duyệt & Xuất bản',
      btnReject: 'Từ chối / Yêu cầu sửa',
      approvedAlert: 'Đã phê duyệt thành công! Hành động đã được thực thi và ghi vào Audit Log.',
      rejectedAlert: 'Đã từ chối bản đề xuất. Yêu cầu sửa đổi đã được phản hồi cho AI Agent.'
    },
    voice: {
      badgeFlow: 'Luồng Phân Tích & Bóc Băng Cuộc Gọi',
      titleFlow: 'Luồng Xử Lý Nghiệp Vụ: Waveform → Transcript tách người nói → AI Summary gợi ý → Task CRM theo xác nhận',
      callInfoTitle: 'Ghi âm cuộc gọi tư vấn giải pháp CRM',
      customerName: 'Khách hàng: Anh Minh — Giám đốc Vận hành TechCorp',
      callDuration: 'Thời lượng: 06 phút 42 giây • Đã tách 2 kênh âm thanh',
      transcriptTitle: 'Bản bóc băng hội thoại đầy đủ (Speech-to-Text tách người nói)',
      summaryTitle: 'Bản tóm tắt tự động gợi ý bởi AI (Post-Call Summary)',
      summaryReq: 'Nhu cầu chính:',
      summaryReqVal: 'Triển khai CRM cho đội ngũ 35 nhân sự kinh doanh và tích hợp với phần mềm kế toán.',
      summaryBudget: 'Ngân sách dự kiến:',
      summaryBudgetVal: '200 - 300 triệu VNĐ, phân kỳ thanh toán 2 đợt.',
      summaryNext: 'Hành động tiếp theo đề xuất:',
      summaryNextVal: 'Gửi bảng báo giá chi tiết và lên lịch demo tính năng vào thứ Năm tới.',
      btnCreateTask: 'Tạo công việc CRM từ tóm tắt này',
      taskCreatedSuccess: 'Đã tạo công việc theo dõi trên CRM thành công!'
    },
    automation: {
      badgeCanvas: 'Visual Workflow Canvas',
      titleCanvas: 'Luồng Xử Lý Nghiệp Vụ: Trigger → Condition (Rẽ nhánh) → Action → Approval → Result → Audit Log',
      btnBranchHigh: 'Nhánh >100 Triệu (Duyệt CFO)',
      btnBranchStd: 'Nhánh Chuẩn (<100 Triệu)',
      btnBranchException: 'Nhánh Ngoại lệ (Cảnh báo rủi ro)',
      stepTrigger: 'Trigger: Đơn hàng mới phát sinh',
      stepTriggerDesc: 'Nhân viên kinh doanh tạo đơn hàng từ CRM với tổng giá trị 150.000.000 đ',
      stepCondition: 'Condition: Kiểm tra giá trị',
      stepConditionDesc: 'Giá trị > 100 Triệu → Kích hoạt quy trình phê duyệt cấp Trưởng phòng & Giám đốc tài chính',
      stepAction: 'Action: Tạo phiếu duyệt tài chính',
      stepActionDesc: 'Tự động gửi thông báo đến Giám đốc Tài chính kèm bảng phân tích biên lợi nhuận',
      stepApproval: 'Approval: Con người phê duyệt',
      stepApprovalDesc: 'Chốt chặn bắt buộc: Chờ chữ ký số điện tử của CFO trước khi phát hành hợp đồng',
      stepResult: 'Result: Hoàn tất & Bàn giao',
      stepResultDesc: 'Hệ thống tự động xuất chứng từ kế toán và gửi thông báo cho khách hàng'
    },
    website: {
      badgePortal: 'Website Hợp Nhất Lõi',
      titlePortal: 'Luồng Chuyển Hóa: Form Đăng Ký → Phân Tách UTM → Đồng Bộ API Vào CRM (Scope B)',
      btnDesktop: 'Máy tính (Desktop)',
      btnMobile: 'Di động (Mobile)',
      formTitle: 'Biểu mẫu Đăng ký Tư vấn Giải pháp Doanh nghiệp',
      formName: 'Họ và tên',
      formEmail: 'Email doanh nghiệp',
      formCompany: 'Tên công ty',
      formNeed: 'Giải pháp quan tâm',
      formBtnSubmit: 'Gửi yêu cầu tư vấn',
      syncAlertSuccess: 'Dữ liệu đã được hỗ trợ đồng bộ trực tiếp vào CRM (Scope B) theo luồng sự kiện!'
    },
    bi: {
      badgeBi: 'Kiến Trúc BI 3 Tầng Điều Hành',
      titleBi: 'Mô Phỏng Trực Quan Hóa: KPI Điểm Số → Phân Tích Xu Hướng → Hỗ Trợ Truy Xuất Bản Ghi Nguồn',
      tier1Title: 'TẦNG 1: EXECUTIVE KPI SCORECARD (CHỈ SỐ TỔNG THỂ TOÀN CÔNG TY)',
      tier2Title: 'TẦNG 2: PHÂN TÍCH THEO PHÒNG BAN & XU HƯỚNG TĂNG TRƯỞNG',
      tier3Title: 'TẦNG 3: TRUY XUẤT BẢN GHI NGUỒN & NHẬT KÝ CHI TIẾT (DRILL-DOWN)',
      statRevenue: 'Doanh thu tháng này',
      statMargin: 'Biên lợi nhuận gộp',
      statPipeline: 'Giá trị Pipeline',
      statCsat: 'Chỉ số CSAT khách hàng'
    }
  }
};

export default viSolutions;
