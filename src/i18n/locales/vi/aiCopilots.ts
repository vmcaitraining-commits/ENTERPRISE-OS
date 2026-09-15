import { TranslationDictionary } from '../../types';

const viAiCopilots: TranslationDictionary = {
  detail: {
    backToNetwork: 'Quay lại Mạng lưới 9 AI Copilot',
    heroBadge: 'Chuyên môn Nghiệp vụ • {roleTitle}',
    targetAudienceLabel: 'Đối tượng phục vụ:',
    outputPreviewLabel: 'Bản xem trước Output thực tế của {name}:',
    simulatedDataNote: 'Dữ liệu mô phỏng theo nghiệp vụ thực tế',
    beforeAfterBadge: 'So sánh quy trình',
    beforeAfterTitle: 'Thay Đổi Quy Trình Trước & Sau Khi Có Copilot',
    beforeAfterDesc: 'Chuyển dịch thời gian của nhân sự từ việc tìm kiếm, sao chép thủ công sang việc kiểm soát và ra quyết định.',
    beforeTitle: 'Trước khi có Copilot (Thủ công)',
    bottleneckLabel: 'Nút thắt:',
    afterTitle: 'Sau khi có Copilot (AI hỗ trợ)',
    humanRoleLabel: 'Vai trò con người:',
    dataSourcesBadge: 'Cơ sở dữ liệu thực thi',
    dataSourcesTitle: 'Nguồn Dữ Liệu & Phương Thức Đồng Bộ',
    dataTypeLabel: 'Loại dữ liệu:',
    transparencyNotice: 'Lưu ý minh bạch:',
    governanceBadge: 'Bảo mật & Ranh giới',
    governanceTitle: 'Quyền Truy Cập Dữ Liệu & Kiểm Soát Phân Quyền (RBAC)',
    governanceDesc: 'Dữ liệu được phân tách theo tenant, phạm vi truy cập và cấu hình của hệ thống. Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.',
    allowedDataTitle: 'Dữ liệu AI được phép đọc (Chỉ đọc - Read-only):',
    prohibitedDataTitle: 'Dữ liệu ngoài phạm vi truy cập (Không thuộc quyền đọc):',
    rbacRulesTitle: 'Nguyên tắc phân quyền theo vai trò (RBAC):',
    auditTrailTitle: 'Cơ chế ghi nhật ký kiểm toán (Audit Trail):',
    auditTrailDesc: 'Các hoạt động quan trọng có thể được ghi nhận vào nhật ký kiểm toán theo cấu hình hệ thống, phục vụ truy vết và đối soát.',
    hitlBadge: 'Human-in-the-Loop',
    hitlTitle: 'Phân Định Tác Vụ Tự Động & Điểm Chốt Chặn Bắt Buộc Phê Duyệt',
    hitlDesc: 'AI xử lý các tác vụ lặp lại ít rủi ro; mọi quyết định tài chính, nhân sự hoặc phát hành ra bên ngoài đều bắt buộc có con người kiểm tra.',
    safeAutomationTitle: 'Tác vụ AI tự động thực thi (Safe Automation)',
    systemOutputLabel: 'Đầu ra hệ thống:',
    approvalGatesTitle: 'Điểm chốt chặn bắt buộc phê duyệt (Approval Gates)',
    approverLabel: 'Duyệt bởi:',
    reasonLabel: 'Lý do bắt buộc:',
    rejectedActionLabel: 'Nếu từ chối:',
    pilotMetricsBadge: 'Đo lường khoa học',
    pilotMetricsTitle: 'Bộ Chỉ Số Mục Tiêu Đo Lường Thử Nghiệm Pilot [Tham Khảo]',
    pilotMetricsDesc: 'Các chỉ số và mốc đánh giá dưới đây là chỉ số mục tiêu pilot tham khảo, được thiết lập để đo lường trong giai đoạn thử nghiệm có kiểm soát, không phải cam kết hiệu năng thương mại cố định.',
    frequencyLabel: 'Kỳ đo:',
    formulaLabel: 'Công thức:',
    metricDataSourceLabel: 'Nguồn dữ liệu:',
    targetBenchmarkLabel: '[Mục tiêu pilot tham khảo]:',
    pilotRoadmapBadge: 'Lộ trình triển khai',
    pilotRoadmapTitle: 'Cách Triển Khai Một Pilot Nhỏ ({duration})',
    pilotRoadmapDesc: 'Khuyến nghị phạm vi hẹp để kiểm soát rủi ro và đo lường kết quả thực tế trước khi nhân rộng toàn doanh nghiệp.',
    deploymentPolicyLabel: 'Chính sách triển khai:',
    deploymentPolicyText: 'Pilot theo giai đoạn. Thời lượng phụ thuộc phạm vi dữ liệu, mức độ tích hợp, yêu cầu bảo mật và tiêu chí nghiệm thu của từng doanh nghiệp.',
    recommendedScopeLabel: 'Phạm vi khuyến nghị:',
    deliverableLabel: 'Bàn giao:',
    goNoGoTitle: 'Tiêu chí nghiệm thu Pilot (Go / No-Go Criteria)',
    goNoGoDesc: 'Dự án chỉ được quyết định nhân rộng chính thức khi thỏa mãn 100% các điều kiện an toàn sau:',
    ctaTitle: 'Sẵn Sàng Triển Khai Pilot Thử Nghiệm Cho {name}?',
    ctaDesc: 'Chuyên gia chuyển đổi số VMC sẽ cùng đội ngũ của bạn khảo sát dữ liệu nguồn, thiết lập các chốt chặn an toàn và đồng hành triển khai pilot theo giai đoạn phù hợp với thực tế doanh nghiệp.',
    ctaSurveyBtn: 'Đăng ký khảo sát Pilot',
    ctaOtherCopilotsBtn: 'Xem 8 Copilot khác',
    stepPrefix: 'Giai đoạn'
  },
  visuals: {
    ceo: {
      simulatedHeader: '[Kịch bản minh họa] Hỗ trợ tổng hợp 07:30 AM khi kết nối dữ liệu',
      reconciledSubheader: 'Đối soát từ 4 phân hệ khi được cấu hình',
      simulatedBadge: '[Dữ liệu minh họa]',
      title: 'Bản Tin Điều Hành Sáng (Morning Executive Brief)',
      rbacNotice: 'Phân quyền bảo mật: Chỉ dành cho Ban Tổng Giám Đốc',
      kpis: {
        revenue: {
          label: 'Doanh thu MTD [Minh họa]',
          value: '3.82 / 4.15 Tỷ',
          note: 'Đạt 92.0% kế hoạch tháng'
        },
        cashflow: {
          label: 'Dòng tiền D+21 [Minh họa]',
          value: '- 420 Triệu VNĐ',
          note: 'Cảnh báo thiếu hụt ngắn hạn'
        },
        sla: {
          label: 'SLA Công việc [Minh họa]',
          value: '94.2% Đúng hạn',
          note: '380/403 tác vụ tuần'
        },
        anomalies: {
          label: 'Bất thường cần quyết định [Minh họa]',
          value: '02 Điểm chốt',
          note: 'Cần Lãnh đạo chỉ đạo'
        }
      },
      anomaliesListTitle: 'Danh sách điểm bất thường [Kịch bản & dữ liệu minh họa]:',
      clickInstruction: 'Bấm để xem chi tiết & duyệt phương án',
      riskWarningBadge: 'Cảnh báo rủi ro [Minh họa]',
      impactLabel: 'Tác động:',
      anomalies: [
        {
          id: 1,
          title: 'Hợp đồng XL-088 (KĐT Nam An) chậm tiến độ 3 ngày',
          impact: 'Dòng tiền 650 Triệu VNĐ bị dời lịch thu sang kỳ sau',
          department: 'Ban Quản lý Dự án & Kế toán',
          suggestedAction: 'Triệu tập cuộc họp 15 phút với Giám đốc Ban QLDA & Kế toán trưởng lúc 09:30',
          actionKey: 'meet'
        },
        {
          id: 2,
          title: 'Chi phí quảng cáo Meta tăng 18% nhưng tỷ lệ form giảm 6%',
          impact: 'Chi phí CAC tuần tạm tính tăng từ 210k lên 275k/lead',
          department: 'Phòng Marketing',
          suggestedAction: 'Yêu cầu Trưởng phòng Marketing rà soát lại target tệp khách hàng trước 11:30',
          actionKey: 'review'
        }
      ],
      proposedActionHeader: 'Đề xuất hành động từ kịch bản AI minh họa (để Lãnh đạo phê duyệt):',
      approvalCheckpointNotice: 'Điểm chốt chặn: AI không tự phát thông báo. Chỉ gửi khi Tổng Giám đốc xác nhận.',
      dismissBtn: 'Bỏ qua',
      approveBtn: 'Phê duyệt gửi thông báo',
      approvedNotice: 'Đã gửi thông báo triệu tập họp đến 2 phòng ban',
      dismissedNotice: 'Đã ghi nhận bỏ qua cảnh báo này'
    },
    sales: {
      hotLeadBadge: 'Hot Lead • 92/100',
      simulatedIntake: '[Kịch bản minh họa] Tiếp nhận qua Webhook',
      simulatedBadge: '[Dữ liệu minh họa]',
      companyName: 'Cty Cổ phần Kỹ thuật Xây dựng Thăng Long',
      contactPerson: 'Trần Hữu Đức (Giám đốc Điều hành)',
      companyScale: '60 nhân sự / Ngành Xây lắp',
      phone: '0983.xxx.888',
      tabs: {
        score: 'Lý do chấm điểm [Minh họa]',
        quote: 'Báo giá nháp [Minh họa]',
        email: 'Email nháp [Minh họa]'
      },
      scoreTab: {
        title: '3 Căn cứ chấm điểm 92/100 [Kịch bản & dữ liệu minh họa]:',
        reasons: [
          {
            num: '1.',
            label: 'Hành vi website:',
            desc: '5 lần truy cập trang Bảng giá trong 48h, đã tải brochure giải pháp quản lý công trường.'
          },
          {
            num: '2.',
            label: 'Chân dung chuẩn:',
            desc: 'Quy mô 60 nhân sự, chức danh đăng ký là Giám đốc Điều hành (Cấp ra quyết định cuối cùng).'
          },
          {
            num: '3.',
            label: 'Mức độ gấp:',
            desc: 'Chọn mốc thời gian muốn triển khai là "Trong tháng này" và để lại số điện thoại cá nhân chính xác.'
          }
        ],
        mainNeedLabel: 'Nhu cầu chính ghi nhận:',
        mainNeedValue: 'Kiểm soát vượt dự toán vật tư tại 4 công trình đang thi công đồng thời.',
        suggestedPackageLabel: 'Gói giải pháp AI gợi ý [Tham khảo]:',
        suggestedPackageValue: 'ERP Xây lắp Standard (50 User) + Module Kho công trường & Dự toán.'
      },
      quoteTab: {
        title: 'Bản thảo báo giá #BG-2026-TL01 [Dữ liệu minh họa]',
        framework: 'Khung giá niêm yết chuẩn VMC',
        items: [
          { name: '1. Bản quyền Cloud ERP Xây Lắp (50 Tài khoản / 12 tháng)', price: '120.000.000 VNĐ' },
          { name: '2. Module Quản trị Kho vật tư & Dự toán công trình', price: '45.000.000 VNĐ' },
          { name: '3. Dịch vụ Setup, Chuẩn hóa SOP & Đào tạo theo giai đoạn', price: '35.000.000 VNĐ' }
        ],
        totalLabel: 'Tổng cộng dự kiến [Minh họa] (Chưa VAT):',
        totalValue: '200.000.000 VNĐ',
        discountNote: '* Báo giá áp dụng chiết khấu 0% theo đúng thẩm quyền cấp chuyên viên. Mức chiết khấu thêm cần Giám đốc Bán hàng phê duyệt.'
      },
      emailTab: {
        toLabel: 'Gửi đến:',
        toEmail: 'ductran@thanglongcons.vn',
        subjectLabel: 'Tiêu đề:',
        subjectValue: 'Giải pháp kiểm soát vượt dự toán vật tư cho Thăng Long Cons - VMC Group',
        greeting: 'Kính gửi Anh Trần Hữu Đức - Giám đốc Điều hành Thăng Long Cons,',
        paragraph1: 'Em là Hoàng từ VMC Group. Em nhận thấy anh đang tìm kiếm giải pháp kiểm soát vượt dự toán vật tư tại các công trường thi công của công ty...',
        paragraph2: 'Em xin gửi đính kèm bản thảo sơ bộ giải pháp ERP Xây Lắp (50 người dùng) đã bao gồm phân hệ quản lý kho công trình mà anh quan tâm. Em có thể gọi trao đổi nhanh 10 phút với anh vào 14:00 chiều nay được không ạ?'
      },
      checkpointNotice: 'Điểm chốt chặn: AI không tự phát hành báo giá hay email. Sales kiểm tra và bấm gửi.',
      submitBtn: 'Chuyên viên duyệt & Gửi email',
      submittedNotice: 'Đã gửi email và lưu vết vào CRM'
    },
    marketing: {
      reportBadge: 'Báo cáo hiệu quả kênh [Minh họa]',
      reconciledNotice: 'Đối chiếu chi phí vs CRM khi được cấu hình',
      simulatedBadge: '[Dữ liệu minh họa]',
      title: 'So Sánh Hiệu Quả Kênh & Hàng Đợi Duyệt Nội Dung',
      tableSectionTitle: '1. So sánh chi phí tìm kiếm khách hàng (CAC) và tỷ lệ tạo hợp đồng [Minh họa]:',
      scenarioNote: 'Dữ liệu kịch bản minh họa',
      tableHeaders: {
        channel: 'Kênh quảng cáo',
        spend: 'Chi tiêu',
        validLeads: 'Lead hợp lệ',
        cac: 'Chi phí / Lead (CAC)',
        conversion: 'Chuyển đổi Deal',
        recommendation: 'Đề xuất AI'
      },
      channels: [
        {
          name: 'Google Search Ads',
          spend: '45.0 Triệu',
          validLeads: 243,
          cac: '185.000 VNĐ',
          conversionToDeal: '28.4%',
          trend: 'up',
          recommendation: 'Tăng +20M ngân sách'
        },
        {
          name: 'Meta Ads (Facebook)',
          spend: '52.0 Triệu',
          validLeads: 168,
          cac: '310.000 VNĐ',
          conversionToDeal: '14.2%',
          trend: 'down',
          recommendation: 'Giảm -20M ngân sách'
        },
        {
          name: 'TikTok Video Ads',
          spend: '18.0 Triệu',
          validLeads: 42,
          cac: '428.000 VNĐ',
          conversionToDeal: '8.1%',
          trend: 'down',
          recommendation: 'Tối ưu lại tệp & creative'
        }
      ],
      budgetProposal: {
        title: 'Đề xuất phân bổ ngân sách [Kịch bản tham khảo]:',
        desc: 'Dịch chuyển 20.000.000 VNĐ từ Meta sang Google Search để gia tăng lead chuyển đổi cao [Kịch bản minh họa].',
        approveBtn: 'Duyệt đề xuất ngân sách',
        approvedNotice: 'Đã duyệt kịch bản ngân sách'
      },
      queueSectionTitle: '2. Hàng đợi kiểm duyệt nội dung (Content Approval Queue) [Minh họa]:',
      queuePendingCount: '2 bài viết mẫu đang chờ Trưởng phòng duyệt',
      lengthLabel: 'Độ dài:',
      reviewNotesLabel: 'Ghi chú rà soát:',
      approvePostBtn: 'Duyệt xuất bản',
      approvedPostNotice: 'Đã duyệt xuất bản',
      contentQueue: [
        {
          id: 1,
          title: '5 Dấu hiệu doanh nghiệp cần chuẩn hóa SOP trước khi mua ERP',
          channel: 'Website Blog & LinkedIn',
          wordCount: '1.450 từ',
          complianceScore: '98/100 (Đạt chuẩn)',
          complianceNotes: 'Đã bỏ các từ khẳng định tuyệt đối, đúng nhận diện thương hiệu VMC.',
          status: 'pending'
        },
        {
          id: 2,
          title: 'Hướng dẫn kiểm soát vượt dự toán công trình xây lắp',
          channel: 'Ebook & Tải tài liệu',
          wordCount: '3.200 từ',
          complianceScore: '92/100 (Cần lưu ý)',
          complianceNotes: 'Có trích dẫn 1 số liệu chi phí, cần Kế toán trưởng ký xác nhận.',
          status: 'pending'
        }
      ],
      checkpointNotice: 'Điểm chốt chặn: AI không tự xuất bản bài viết lên blog hay thay đổi số tiền trên tài khoản quảng cáo.'
    },
    customerService: {
      ticketTitle: 'Ticket #CS-8492: Khiếu nại tiến độ giao linh kiện',
      priorityBadge: 'Ưu tiên P2 (Khẩn cấp)',
      simulatedBadge: '[Dữ liệu minh họa]',
      customerLabel: 'Khách hàng: Nguyễn Hoàng Nam',
      orderLabel: 'Đơn hàng: #LK-992 (24.500.000 VNĐ)',
      sentimentLabel: 'Sắc thái theo kịch bản: Bức xúc [Gợi ý tham khảo]',
      intakeTime: '[Minh họa] Tiếp nhận: 14:20 (Chờ 4 phút)',
      complaintHeader: 'Nội dung khách hàng gửi qua Web Portal [Kịch bản minh họa]:',
      complaintQuote: '"Đơn linh kiện hẹn giao từ hôm qua mà nay vẫn chưa thấy đâu, gọi tổng đài không ai nhấc máy. Công trình của bên tôi đang bị đình trệ, nếu chiều nay không giao kịp tôi sẽ hủy toàn bộ hợp đồng và yêu cầu bồi thường!"',
      citationHeader: 'Căn cứ quy chế trích dẫn [Mô phỏng nguồn tài liệu]:',
      viewOriginal: 'Xem tài liệu gốc',
      citationContent: 'Trích từ SOP-CS-04 (Quy chế Chăm sóc & Xử lý Khiếu nại, Mục 3.2 - Điều khoản Giao trễ do bất khả kháng): Trường hợp hàng trễ từ 24h-48h, nhân viên hỗ trợ được phép áp dụng chính sách: Miễn phí cước vận chuyển và tặng voucher ưu đãi 10% cho đơn hàng kế tiếp.',
      suggestedResponseHeader: 'Câu trả lời AI gợi ý theo kịch bản [Đề xuất tham khảo để chuyên viên duyệt]:',
      saveEditBtn: 'Lưu chỉnh sửa',
      editBtn: 'Chỉnh sửa câu chữ',
      defaultResponseText: `Chào anh Nguyễn Hoàng Nam,\n\nVMC Group chân thành xin lỗi anh về việc kiện hàng linh kiện #LK-992 bị trễ 2 ngày so với kế hoạch ban đầu do ảnh hưởng thời tiết tại kho trung chuyển Đà Nẵng.\n\nHiện kiện hàng đã về đến bưu cục quận Cầu Giấy và nhân viên giao vận đang liên hệ để giao tận tay anh trước 16:30 chiều nay.\n\nTheo Quy chế Dịch vụ VMC (SOP-CS-04, điều 3.2), VMC xin gửi tặng anh mã voucher giảm giá 10% [VMC-CARE10] cho đơn hàng tiếp theo cùng miễn phí toàn bộ cước vận chuyển của đơn hàng này. Rất mong anh thông cảm cho sự bất tiện vừa qua ạ!`,
      checkpointNotice: 'Điểm chốt chặn: Nhân viên CSKH bắt buộc kiểm tra mã vận đơn trước khi duyệt gửi. AI không tự trả lời khách.',
      submitBtn: 'Chuyên viên duyệt & Gửi phản hồi',
      submittedNotice: 'Đã gửi phản hồi cho khách hàng lúc 14:24 (SLA 4 phút)'
    },
    hr: {
      badge: 'Quản trị Nhân sự & Hiệu suất [Minh họa]',
      subnote: 'Kỳ công kịch bản mô phỏng',
      simulatedBadge: '[Dữ liệu minh họa]',
      title: 'Bảng Ngoại Lệ Chấm Công, Onboarding & Khoảng Trống Kỹ Năng',
      tabs: {
        exceptions: 'Bảng công ngoại lệ (3) [Minh họa]',
        onboarding: 'Onboarding [Minh họa]',
        skillgap: 'Khoảng trống kỹ năng [Minh họa]'
      },
      exceptionsSection: {
        subtitle: 'Phát hiện 3 trường hợp bất thường cần nhân sự bổ sung minh chứng:',
        deadlineNotice: 'Hạn chốt giải trình: 25 hàng tháng',
        datePrefix: 'Ngày:',
        aiSuggestionPrefix: 'Đề xuất AI:',
        remindBtn: 'Nhắc nộp giải trình',
        remindedBtn: 'Đã gửi tin nhắn nhắc',
        items: [
          {
            id: 1,
            name: 'Nguyễn Văn An',
            dept: 'Ban Quản lý Dự án',
            date: '05/09/2026',
            issue: 'Thiếu dữ liệu giờ ra (Check-out)',
            suggestedAction: 'Gửi tin nhắn nhắc nộp đơn giải trình quên chấm công'
          },
          {
            id: 2,
            name: 'Trần Thị Bích',
            dept: 'Phòng Kế toán',
            date: '08/09/2026',
            issue: 'Vào muộn 28 phút (Chưa có đơn xin phép)',
            suggestedAction: 'Nhắc bổ sung đơn công tác ngoại kiểm'
          },
          {
            id: 3,
            name: 'Phạm Minh Đức',
            dept: 'Phòng Kinh doanh',
            date: '09/09/2026',
            issue: 'Vắng mặt cả ngày (Chưa duyệt phép)',
            suggestedAction: 'Báo động Trưởng phòng xác nhận lý do'
          }
        ]
      },
      onboardingSection: {
        employeeName: 'Lê Hoàng Nam - Kỹ sư Triển khai ERP (Mới vào 12 ngày)',
        mentor: 'Mentor phụ trách: Vũ Tuấn Minh (Trưởng nhóm Triển khai)',
        progressBadge: 'Tiến độ: 3/5 bước (Đúng hạn)',
        steps: [
          { step: 1, title: 'Ký hợp đồng & Nhận trang thiết bị làm việc', date: 'Ngày 1', status: 'completed' },
          { step: 2, title: 'Hoàn thành khóa học văn hóa & quy chế công ty', date: 'Ngày 3', status: 'completed' },
          { step: 3, title: 'Gặp gỡ Mentor & Thiết lập mục tiêu thử việc (KPIs)', date: 'Ngày 7', status: 'completed' },
          { step: 4, title: 'Đánh giá tiến độ thử việc mốc 30 ngày', date: 'Ngày 30', status: 'active' },
          { step: 5, title: 'Hội đồng nhân sự nghiệm thu thử việc chính thức', date: 'Ngày 60', status: 'upcoming' }
        ]
      },
      skillgapSection: {
        subtitle: 'Đối chiếu năng lực thực tế qua KPI so với Khung năng lực chuẩn (Skill Matrix):',
        gapPrefix: 'Chênh lệch:',
        currentPrefix: 'Hiện tại:',
        benchmarkPrefix: 'Chuẩn yêu cầu:',
        items: [
          { skill: 'Kỹ năng đàm phán hợp đồng lớn (B2B)', dept: 'Kinh doanh', current: 65, benchmark: 90, gap: '-25%' },
          { skill: 'Sử dụng công cụ quản lý dự án Jira/SOP', dept: 'Kỹ thuật', current: 78, benchmark: 85, gap: '-7%' },
          { skill: 'Kiểm soát tuân thủ thuế & hóa đơn điện tử', dept: 'Kế toán', current: 88, benchmark: 90, gap: '-2%' }
        ]
      },
      checkpointNotice: 'Điểm chốt chặn: AI không tự ý trừ lương hay quyết định sa thải. Chuyên viên C&B chốt công và Lãnh đạo ký duyệt.'
    },
    finance: {
      badge: 'Đối soát giao dịch ngân hàng [Minh họa]',
      subnote: 'Mô phỏng đồng bộ dữ liệu ngân hàng khi được cấu hình',
      simulatedBadge: '[Dữ liệu minh họa]',
      title: 'Ghép Nối Giao Dịch, Xử Lý Ngoại Lệ & Dự Báo Dòng Tiền',
      tabs: {
        reconcile: 'Ghép nối giao dịch [Minh họa]',
        forecast: 'Dự báo dòng tiền [Minh họa]'
      },
      matched: {
        header: 'Giao dịch gợi ý khớp [Kịch bản & dữ liệu minh họa]:',
        confidence: 'Độ tin cậy mô phỏng: 99.8%',
        bankStatementLabel: 'Sao kê ngân hàng:',
        bankStatementAmount: '+ 45.000.000 VNĐ',
        bankStatementNote: '"CTY TNHH TM BINH MINH TT TIEN HOP DONG HD-2026-091"',
        crmOrderLabel: 'Đơn hàng trên CRM:',
        crmOrderName: 'Hợp đồng #HD-2026-091',
        crmOrderNote: 'Giá trị cần thanh toán: 45.000.000 VNĐ (Khớp chính xác)',
        aiSuggestion: 'Đề xuất AI: Gợi ý lập phiếu thu nháp để kế toán kiểm tra & duyệt.',
        confirmReceiptBtn: 'Xác nhận tạo phiếu thu',
        receiptCreated: 'Đã tạo phiếu thu #PT-0912-01'
      },
      exception: {
        header: 'Giao dịch ngoại lệ [Kịch bản minh họa - Cần kế toán xử lý]:',
        varianceAmount: 'Lệch số tiền: - 250.000 VNĐ',
        bankStatementLabel: 'Sao kê ngân hàng:',
        bankStatementAmount: '+ 12.250.000 VNĐ',
        bankStatementNote: '"AN PHAT CK MUA HANG SO 8821"',
        originalInvoiceLabel: 'Hóa đơn gốc #8821:',
        originalInvoiceAmount: '12.500.000 VNĐ',
        originalInvoiceNote: 'Thiếu 250.000 VNĐ (Khả năng khách tự trừ phí bank hoặc chiết khấu)',
        checkpointWarning: 'Chốt chặn an toàn: AI không tự gán phiếu thu khi số tiền không khớp tuyệt đối.',
        manualActionBtn: 'Xử lý thủ công & Gửi yêu cầu Sales'
      },
      forecast: {
        header: 'Dự báo dòng tiền [Kịch bản mô phỏng minh họa tham khảo]',
        subnote: 'Kịch bản mô phỏng phân tích độ nhạy (khi được cấu hình kết nối đầy đủ dữ liệu)',
        baseScenario: {
          label: 'Kịch bản Cơ sở [Minh họa]:',
          amount: '+ 520 Triệu VNĐ',
          assumption: 'Giả định 90% khách hàng trả đúng hạn cam kết'
        },
        conservativeScenario: {
          label: 'Kịch bản Thận trọng [Minh họa]:',
          amount: '+ 180 Triệu VNĐ',
          assumption: 'Giả định 2 hợp đồng xây lắp trễ thêm 15 ngày'
        },
        optimisticScenario: {
          label: 'Kịch bản Tích cực [Minh họa]:',
          amount: '+ 780 Triệu VNĐ',
          assumption: 'Giả định thu hồi công nợ cũ trước 30/09'
        },
        recommendationStrong: 'Khuyến nghị tham khảo theo kịch bản AI mô phỏng:',
        recommendationText: 'Quỹ tiền mặt an toàn trong 21 ngày tới. Tuy nhiên ngày 25/09 có khoản chi lương 450 triệu và thuế VAT 120 triệu; đề xuất Kế toán trưởng đôn đốc thu hồi 2 khoản nợ của Cty Nam An trước ngày 22/09.'
      },
      checkpointNotice: 'Ranh giới an toàn: AI chỉ đọc sao kê và soạn phiếu thu nháp. AI TUYỆT ĐỐI KHÔNG CÓ QUYỀN chuyển tiền hay can thiệp số dư.'
    },
    voice: {
      badgeControlled: 'Có Kiểm Soát',
      badgeIllustrative: '[Kịch bản minh họa]',
      title: 'Mô Phỏng Cây Hội Thoại Thoại AI (Dialogue Flow)',
      subnote: 'Kịch bản mô phỏng: Nhắc lịch bảo dưỡng • Đổi giờ • Chuyển tiếp khi hỏi khó',
      progressLabel: 'Diễn biến:',
      speakers: {
        ai: 'Trợ lý Voice AI VMC',
        user: 'Khách hàng (Lê Tuấn Anh)',
        transfer: 'Chốt chặn: Hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng'
      },
      steps: [
        {
          type: 'Nhắc lịch tự động',
          text: 'Dạ em chào anh Tuấn Anh từ Trung tâm Dịch vụ Kỹ thuật VMC ạ. Em gọi để xin xác nhận lịch bảo dưỡng xe định kỳ của anh lúc 14:00 chiều nay tại xưởng Cầu Giấy ạ.',
          actionPrompt: 'Khách hàng trả lời xin dời lịch hẹn...'
        },
        {
          type: 'Yêu cầu dời lịch hẹn',
          text: 'Chiều nay 2 giờ anh đang dở cuộc họp với đối tác rồi. Dời sang tầm 4 rưỡi chiều nay có còn kỹ thuật viên làm việc không em?',
          actionPrompt: 'AI kiểm tra khoang xưởng và khung giờ khả dụng...'
        },
        {
          type: 'Xác nhận dời giờ thành công',
          text: 'Dạ xưởng bên em phục vụ đến 18:30 ạ. Em đã chuyển lịch hẹn của anh sang 16:30 chiều nay thành công rồi ạ. Khi đến anh chỉ cần đọc số điện thoại là kỹ thuật tiếp nhận ngay.',
          actionPrompt: 'Khách hàng bất ngờ hỏi câu hỏi kỹ thuật chuyên sâu...'
        },
        {
          type: 'Thắc mắc kỹ thuật an toàn ngoài kịch bản',
          text: 'À em ơi, tiện cho anh hỏi xe anh mấy hôm nay lúc đạp phanh nghe tiếng rít két két rất to, cái đấy kiểm tra lâu không và có phải thay đĩa phanh luôn không?',
          actionPrompt: 'Kích hoạt quy tắc chốt chặn: Hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng'
        },
        {
          type: 'Chuyển tiếp sang Nhân viên (khi được cấu hình)',
          text: 'Dạ về sự cố an toàn phanh xe, em xin phép giữ máy để chuyển tiếp cuộc gọi đến Kỹ sư Trưởng Tuấn Minh hỗ trợ tư vấn chuẩn xác cho anh ngay ạ!',
          actionPrompt: 'Kỹ sư tiếp nhận cuộc gọi trên máy nhánh kèm tóm tắt ngữ cảnh'
        }
      ],
      completeCallNotice: 'Đã hoàn tất cuộc gọi: Cố vấn kỹ thuật đã tiếp quản thành công.',
      btnContinue: 'Tiếp tục hội thoại',
      btnReset: 'Xem lại từ đầu',
      checkpointNotice: 'Quy tắc cốt lõi: Voice AI không tự suy diễn kỹ thuật hoặc giá bán ngoài kịch bản; luôn chuyển giao cho con người khi gặp câu hỏi mở.'
    },
    workflow: {
      badgeBottleneck: 'Phát hiện điểm nghẽn [Kịch bản mô phỏng]',
      badgeProcess: 'Quy trình Xử lý Đơn hàng B2B mô phỏng',
      badgeIllustrative: '[Dữ liệu minh họa]',
      title: 'Dòng Chảy Quy Trình & Đề Xuất Tái Phân Bổ Nguồn Lực',
      progressTitle: 'Tiến độ luân chuyển hồ sơ qua 5 phòng ban:',
      progressAlert: 'Ùn ứ tại Bước 3 (Kế toán)',
      stepTimeLabel: 'Thời gian:',
      stepSlaPrefix: 'Định mức SLA:',
      steps: [
        {
          step: 1,
          title: 'Tạo đơn hàng B2B',
          dept: 'Kinh doanh',
          timeSpent: '25 phút',
          slaLimit: '2 giờ'
        },
        {
          step: 2,
          title: 'Duyệt bảng giá & Chiết khấu',
          dept: 'Trưởng phòng Sales',
          timeSpent: '1.2 giờ',
          slaLimit: '4 giờ'
        },
        {
          step: 3,
          title: 'Thẩm định công nợ & Hạn mức',
          dept: 'Kế toán Công nợ',
          timeSpent: '18.5 giờ',
          slaLimit: '5 giờ',
          details: '7 đơn hàng (trị giá 450M) đang ùn ứ do Chuyên viên thẩm định chính nghỉ ốm đột xuất.'
        },
        {
          step: 4,
          title: 'Lệnh xuất kho & Soạn hàng',
          dept: 'Bộ phận Kho',
          timeSpent: 'Chờ bước 3',
          slaLimit: '3 giờ'
        },
        {
          step: 5,
          title: 'Bàn giao vận chuyển & Ký nhận',
          dept: 'Đội xe / Logistics',
          timeSpent: 'Chờ xuất kho',
          slaLimit: '24 giờ'
        }
      ],
      suggestion: {
        title: 'Đề xuất tự động từ AI Workflow:',
        description: 'Tạm thời kích hoạt quyền duyệt phụ cho Phó phòng Kế toán (Chị Mai Lan) đối với các đơn hàng dưới 50.000.000 VNĐ để giải tỏa ngay 5/7 đơn đang bị ách tắc.',
        subApproverName: 'Phó phòng Kế toán (Chị Mai Lan)',
        btnApprove: 'Chấp thuận ủy quyền phụ',
        approvedStatus: 'Đã ủy quyền: Đang thông luồng 5 đơn hàng'
      },
      checkpointNotice: 'Điểm chốt chặn: AI chỉ phát hiện điểm nghẽn và đưa ra giải pháp đề xuất. Thao tác ủy quyền bắt buộc do Trưởng phòng phê duyệt.'
    },
    rag: {
      badgeCategory: 'Tra cứu Tri thức Nội bộ (Enterprise RAG)',
      subnote: 'Mô phỏng tìm kiếm ngữ nghĩa theo tài liệu chính thức',
      badgeIllustrative: '[Kịch bản minh họa]',
      title: 'Câu Hỏi → Đoạn Nguồn → Câu Trả Lời (Kèm Trường Hợp Ngoại Lệ)',
      scenarios: {
        standard: '1. Có nguồn chuẩn [Minh họa]',
        missing: '2. Thiếu nguồn [Minh họa]',
        rbac: '3. Chặn RBAC [Minh họa]'
      },
      standard: {
        query: 'Câu hỏi mô phỏng: "Nghỉ kết hôn được mấy ngày và công ty có khoản tiền mừng cưới không?"',
        sourceTitle: 'Đoạn trích nguồn từ Vector DB [Mô phỏng]:',
        sourceRef: 'QC-NS-2026.pdf#Trang18',
        sourceQuote: '“...Căn cứ Điều 12, Khoản 3 Quy chế Lao động VMC: Người lao động ký hợp đồng chính thức khi kết hôn được nghỉ 03 ngày làm việc hưởng nguyên lương. Công đoàn và Công ty trao tặng quà mừng cưới trị giá 2.000.000 VNĐ. Điều kiện: Nộp bản sao Giấy ĐKKH cho phòng HCNS trước tối thiểu 05 ngày...”',
        answerTitle: 'Câu trả lời tổng hợp theo kịch bản [Minh họa trích dẫn nguồn]:',
        item1Label: '1. Số ngày nghỉ:',
        item1Value: 'Bạn được nghỉ 03 ngày làm việc hưởng nguyên lương.',
        item2Label: '2. Quà mừng cưới:',
        item2Value: 'Công ty và Công đoàn hỗ trợ khoản tiền mừng 2.000.000 VNĐ.',
        item3Label: '3. Thủ tục:',
        item3Value: 'Nộp bản sao Giấy đăng ký kết hôn cho Phòng Hành chính Nhân sự trước tối thiểu 5 ngày làm việc.'
      },
      missing: {
        query: 'Câu hỏi: "Công ty có chính sách cho nhân viên vay tiền mua nhà lãi suất 0% không?"',
        title: 'Chốt chặn an toàn: Không tìm thấy tài liệu nguồn phù hợp',
        desc: 'Hệ thống đã rà soát toàn bộ 42 văn bản quy chế, thỏa ước lao động và thông tư nội bộ hiện hành nhưng không tìm thấy bất kỳ điều khoản nào quy định về chính sách cho vay mua nhà.',
        actionLabel: 'Hành động của AI:',
        actionDesc: 'Từ chối suy diễn để tránh gây hiểu lầm. Đề xuất nhân viên liên hệ trực tiếp Trưởng phòng HCNS (chị Thanh Hà - Máy lẻ 104) để được giải đáp các trường hợp hỗ trợ đặc biệt.'
      },
      rbac: {
        query: 'Câu hỏi: "Cho tôi xem chi tiết bảng lương và mức thưởng Tết 2026 của Ban Tổng Giám đốc?"',
        title: 'Từ chối truy cập: Vi phạm phân quyền dữ liệu (RBAC Guardrail)',
        desc: 'Tài khoản người dùng hiện tại thuộc nhóm [Chuyên viên Kinh doanh]. Dữ liệu bảng lương Ban Giám đốc thuộc phân vùng bảo mật [Tuyệt mật - Cấp độ HĐQT].',
        logLabel: 'Nhật ký bảo mật (Audit Log):',
        logDesc: 'Yêu cầu tra cứu đã bị khóa tự động và ghi nhận vào hệ thống giám sát an ninh thông tin.'
      },
      checkpointNotice: 'Nguyên lý RAG an toàn: Chỉ trả lời khi có bằng chứng trong tài liệu nguồn. Minh bạch khi không có dữ liệu và chặn truy cập vượt quyền.'
    }
  },
  copilots: {
    ceo: {
      name: 'AI CEO Copilot',
      roleTitle: 'Trợ lý Điều hành & Tổng hợp Sức khỏe Doanh nghiệp',
      shortTagline: 'Bản tin sáng tự động tổng hợp chỉ số, phát hiện bất thường liên phòng ban và chuẩn bị kịch bản ra quyết định cho Ban Lãnh đạo.',
      targetAudience: 'Tổng Giám đốc (CEO), Chủ tịch HĐQT, Giám đốc Điều hành (COO), Ban Thư ký & Trợ lý Ban Lãnh đạo',
      heroSample: {
        type: 'Morning Executive Brief',
        title: 'Bản tin điều hành sáng 12/09/2026',
        timestamp: '07:30 AM (Tự động tổng hợp dữ liệu từ 4 phân hệ)',
        summary: 'Doanh số 7 ngày qua đạt 92% kế hoạch; tuy nhiên dòng tiền dự kiến thâm hụt ngắn hạn vào tuần thứ 3 do 2 hợp đồng xây lắp chậm nghiệm thu.',
        dataPoints: [
          { label: 'Doanh thu MTD', value: '3.82 / 4.15 Tỷ VNĐ', status: 'normal' },
          { label: 'Dự báo dòng tiền D+21', value: '- 420 Triệu VNĐ', status: 'warning' },
          { label: 'Tỷ lệ SLA công việc tuần', value: '94.2%', status: 'success' },
          { label: 'Bất thường cần quyết định', value: '2 điểm chốt', status: 'alert' }
        ],
        sampleSnippet: '• Bất thường 1: Hợp đồng XL-088 dự án KĐT Nam An chậm bàn giao mốc 2 (3 ngày), ảnh hưởng dòng tiền về 650tr.\n• Bất thường 2: Chi phí quảng cáo kênh Meta tuần này tăng 18% nhưng tỷ lệ form hợp lệ giảm 6% so với tuần trước.\n• Đề xuất hành động: Triệu tập cuộc họp 15 phút giữa Giám đốc Dự án và Kế toán trưởng lúc 09:30.',
        actionRequired: 'Lãnh đạo bấm "Xác nhận gửi thông báo họp 09:30" hoặc "Bỏ qua".'
      },
      beforeAfter: [
        {
          task: 'Tổng hợp báo cáo điều hành toàn công ty',
          before: {
            process: 'Trợ lý gọi điện, nhắc 5 trưởng bộ phận nộp slide và file Excel rải rác; mất 4-6 giờ ghép số liệu thủ công vào chiều muộn thứ 6.',
            timeSpent: '6 - 8 giờ/tuần',
            painPoint: 'Dữ liệu giữa Kế toán và Sales thường lệch nhau, lãnh đạo nhận báo cáo trễ.'
          },
          after: {
            process: 'AI đọc trực tiếp database CRM, ERP, HRM và tạo Morning Brief tự động lúc 07:30 mỗi ngày với đối chiếu chéo tự động.',
            timeSpent: '5 - 10 phút đọc/ngày',
            humanRole: 'Lãnh đạo dành 100% thời gian để phân tích nguyên nhân và đưa ra chỉ đạo.'
          }
        },
        {
          task: 'Phát hiện rủi ro dòng tiền và tiến độ',
          before: {
            process: 'Chỉ phát hiện thâm hụt khi kế toán thông báo thiếu tiền thanh toán lương/nhà cung cấp vào ngày 25 hàng tháng.',
            timeSpent: 'Bị động theo tháng',
            painPoint: 'Không có thời gian trở tay, phải huy động vốn vay khẩn cấp hoặc xin gia hạn nợ.'
          },
          after: {
            process: 'AI quét lịch nghiệm thu, công nợ phải thu và chi phí định kỳ, cảnh báo trước 21-30 ngày khi có nguy cơ lệch ngân sách.',
            timeSpent: 'Cảnh báo thời gian thực',
            humanRole: 'Lãnh đạo duyệt phương án điều hòa dòng tiền hoặc chỉ đạo đôn đốc nghiệm thu.'
          }
        },
        {
          task: 'Chuẩn bị kịch bản họp giao ban tuần',
          before: {
            process: 'Cuộc họp kéo dài 3 tiếng do tranh luận về con số nào đúng, trưởng phòng giải trình mất thời gian.',
            timeSpent: '3 - 4 giờ họp/tuần',
            painPoint: 'Họp xong không có biên bản tóm tắt cam kết rõ ràng, việc trôi đi không ai theo dõi.'
          },
          after: {
            process: 'AI trích xuất sẵn danh sách 3 điểm nghẽn trọng yếu, các mốc cam kết sắp đến hạn và gợi ý phân bổ hành động.',
            timeSpent: '45 - 60 phút họp tập trung',
            humanRole: 'Lãnh đạo chốt quyết định; AI tự động ghi nhận đầu việc vào hệ thống theo dõi SLA.'
          }
        }
      ],
      demoSpec: {
        title: 'Kịch bản điều hành: Báo cáo Morning Brief & Cảnh báo bất thường',
        sourceDescription: 'Dữ liệu được đọc từ CRM (đơn hàng, phễu lead), Phân hệ Tài chính (sổ quỹ, công nợ) và Phân hệ Dự án/SOP (tiến độ task).',
        dataSources: [
          { name: 'Core CRM Database', type: 'Đơn hàng, hợp đồng, trạng thái lead', syncMode: 'Webhook tức thời' },
          { name: 'Phân hệ Kế toán/Ngân hàng', type: 'Sao kê số dư, danh mục nợ phải thu', syncMode: 'Đồng bộ định kỳ 1 giờ' },
          { name: 'Phân hệ Dự án & Task SOP', type: 'Mốc nghiệm thu, tỷ lệ quá hạn task', syncMode: 'Truy vấn thời gian thực' }
        ],
        disclaimer: 'Kịch bản mô phỏng trên dữ liệu giả lập doanh nghiệp quy mô 80 nhân sự. AI không tự quyết định thay lãnh đạo.'
      },
      governance: {
        allowedData: [
          'Báo cáo doanh số và tiến độ tổng hợp theo phòng ban',
          'Tổng hợp số dư dòng tiền và kế hoạch thu/chi dự kiến',
          'Tỷ lệ hoàn thành công việc và chỉ số SLA cấp độ nhóm',
          'Chỉ số CSAT và khiếu nại khách hàng cấp độ tổng thể'
        ],
        prohibitedData: [
          'Chi tiết tiền lương, thưởng cá nhân của từng nhân viên (nếu chưa cấu hình ngoại lệ)',
          'Mật khẩu, mã token tài khoản ngân hàng hoặc tài khoản giao dịch điện tử',
          'Dữ liệu hồ sơ bệnh án hoặc đời tư cá nhân của nhân sự',
          'Hồ sơ đấu thầu bảo mật ngoài phạm vi được chỉ định'
        ],
        rbacRules: [
          'Chỉ tài khoản thuộc nhóm Ban Tổng Giám đốc (CEO, Chairman) và Trợ lý được cấp quyền mới có thể truy cập Morning Brief.',
          'Mọi câu hỏi yêu cầu AI phân tích dữ liệu phòng ban cụ thể phải tuân thủ quyền hạn phân cấp trong sơ đồ tổ chức.',
          'AI từ chối thực hiện các lệnh can thiệp ghi dữ liệu (Write) vào hệ thống tài chính gốc.'
        ],
        auditLogMechanisms: [
          'Ghi nhật ký mọi bản tin Morning Brief được sinh ra (thời gian, dữ liệu nguồn, mô hình sử dụng).',
          'Lưu vết câu lệnh tra cứu dữ liệu của người dùng kèm địa chỉ IP và phiên đăng nhập.',
          'Lưu vết mọi hành động phê duyệt hoặc từ chối đề xuất của Lãnh đạo.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Quét và đối soát chéo số liệu giữa CRM và Kế toán', boundary: 'Chỉ đọc dữ liệu', systemOutput: 'Bảng đối chiếu chênh lệch' },
          { task: 'Biên soạn bản tin Morning Brief định kỳ 07:30 sáng', boundary: 'Chỉ tổng hợp nội dung', systemOutput: 'Bản tin dạng thẻ trên Dashboard' },
          { task: 'Phát hiện mốc tiến độ dự án trễ hạn trên 48h', boundary: 'Theo quy tắc cảnh báo', systemOutput: 'Gắn cờ cảnh báo đỏ trong báo cáo' },
          { task: 'Dự thảo lịch họp giao ban và thông báo triệu tập', boundary: 'Chỉ tạo bản nháp', systemOutput: 'Mẫu thông báo sẵn sàng duyệt' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Phát hành thông báo họp khẩn toàn công ty', reason: 'Tránh gây hoang mang hoặc gián đoạn vận hành', approverRole: 'Tổng Giám đốc (CEO)', actionIfRejected: 'Hủy thông báo, giữ trao đổi nội bộ hẹp' },
          { checkpoint: 'Điều chỉnh hạn mức ngân sách phòng ban', reason: 'Tác động trực tiếp đến cam kết chi phí', approverRole: 'HĐQT / Ban Giám đốc', actionIfRejected: 'Giữ nguyên hạn mức ngân sách hiện hành' },
          { checkpoint: 'Thay đổi chỉ tiêu OKR/KPI trong kỳ', reason: 'Ảnh hưởng chính sách đãi ngộ và lộ trình công ty', approverRole: 'Ban Điều hành', actionIfRejected: 'Tiếp tục áp dụng bộ chỉ tiêu cũ' }
        ]
      },
      metrics: [
        { name: 'Thời gian chuẩn bị báo cáo tuần', formula: 'Tổng số giờ trợ lý/trưởng phòng dùng để tạo slide & số liệu mỗi tuần', dataSource: 'Khảo sát chấm công & nhật ký công việc', frequency: 'Hàng tuần', targetBenchmark: 'Giảm 50% - 70% thời gian tổng hợp thủ công' },
        { name: 'Thời gian phát hiện bất thường dòng tiền', formula: 'Khoảng cách ngày từ khi có dấu hiệu lệch tiến độ đến khi lãnh đạo nhận cảnh báo', dataSource: 'Hệ thống cảnh báo rủi ro vs Nhật ký phát sinh', frequency: 'Theo chu kỳ giao dịch', targetBenchmark: 'Cảnh báo trước 21 - 30 ngày' },
        { name: 'Tỷ lệ họp giao ban kết thúc đúng nghị trình', formula: '(Số cuộc họp hoàn tất trong 60 phút / Tổng số cuộc họp) × 100%', dataSource: 'Lịch Calendar và Biên bản họp', frequency: 'Hàng tháng', targetBenchmark: '≥ 85% cuộc họp giải quyết trúng trọng tâm' }
      ],
      pilotPlan: {
        recommendedScope: 'Áp dụng cho Ban Lãnh đạo (CEO + 2 Phó TGĐ) và 3 phòng ban cốt lõi (Kinh doanh, Kế toán, Vận hành).',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Kết nối nguồn dữ liệu sạch', activities: ['Chuẩn hóa định dạng báo cáo tuần hiện có', 'Cấp quyền API chỉ đọc (Read-only) cho CRM và Kế toán', 'Thiết lập danh mục chỉ số sức khỏe trọng yếu (8 chỉ số)'], deliverable: 'Kết nối an toàn 2 nguồn dữ liệu chính' },
          { week: 'Giai đoạn 2', phase: 'Cấu hình ngưỡng cảnh báo', activities: ['Thiết lập quy tắc dung sai lệch ngân sách (±10%)', 'Tùy biến khung giờ gửi Morning Brief (07:30)', 'Thử nghiệm sinh báo cáo song song với báo cáo thủ công'], deliverable: 'Bản Morning Brief đầu tiên chạy thử nghiệm' },
          { week: 'Giai đoạn 3', phase: 'Vận hành thử nghiệm cùng Trợ lý', activities: ['Trợ lý lãnh đạo rà soát đối chiếu nội dung do AI tóm tắt', 'Ghi nhận 3 trường hợp cảnh báo sai lệch hoặc thiếu ngữ cảnh', 'Tinh chỉnh prompt trích xuất và quy tắc gom nhóm'], deliverable: 'Độ chính xác số liệu đối chiếu đạt ≥ 95%' },
          { week: 'Giai đoạn 4', phase: 'Đánh giá & Chuyển giao chính thức', activities: ['Tổ chức buổi họp đánh giá hiệu quả với Ban Giám đốc', 'Bàn giao tài liệu hướng dẫn và quy trình phê duyệt', 'Quyết định mở rộng kết nối thêm phân hệ Nhân sự & Dự án'], deliverable: 'Biên bản nghiệm thu giai đoạn Pilot' }
        ],
        goNoGoCriteria: [
          'Số liệu tài chính và doanh số trong Morning Brief khớp 100% với sổ kế toán đối chiếu.',
          'Lãnh đạo tiết kiệm được ít nhất 3 giờ mỗi tuần trong khâu nắm bắt tình hình hoạt động.',
          '0% sự cố rò rỉ dữ liệu ngoài nhóm người dùng được phân quyền.'
        ]
      }
    },
    sales: {
      name: 'AI Sales Copilot',
      roleTitle: 'Trợ lý Bán hàng & Quản trị Tiềm năng',
      shortTagline: 'Chấm điểm lead theo dữ liệu hành vi, giải thích rõ lý do chấm điểm và tự động chuẩn bị email / báo giá nháp để chuyên viên duyệt.',
      targetAudience: 'Giám đốc Kinh doanh (CSO), Trưởng nhóm Bán hàng, Chuyên viên Tư vấn & Đại diện Kinh doanh (BDR/AE)',
      heroSample: {
        type: 'Lead Evaluation & Draft Proposal',
        title: 'Đánh giá Lead: Cty Cổ phần Kỹ thuật Xây dựng Thăng Long',
        timestamp: '10:15 AM (Đổ về từ landing page giải pháp ERP)',
        summary: 'Điểm tiềm năng: 92/100 (Hot Lead). Khách hàng tìm hiểu giải pháp cho 45 người dùng, ngân sách dự kiến 200-300 triệu.',
        dataPoints: [
          { label: 'Điểm Lead', value: '92 / 100', status: 'success' },
          { label: 'Hành vi trên web', value: '5 lần xem bảng giá, 1 tải brochure', status: 'normal' },
          { label: 'Ngành nghề & Quy mô', value: 'Xây lắp / 60 nhân sự', status: 'normal' },
          { label: 'Tác vụ kế tiếp', value: 'Gửi báo giá nháp & gọi xác nhận', status: 'alert' }
        ],
        sampleSnippet: '• Lý do chấm điểm: Người ra quyết định là Giám đốc Điều hành, đã điền đầy đủ số điện thoại và email doanh nghiệp, nhu cầu triển khai trong Quý 4.\n• Báo giá nháp đã tạo: Gói Standard 50 User + 2 Module Quản lý Dự án & Kho vật tư.\n• Email nháp đã soạn: Đề cập đúng bài toán kiểm soát chi phí công trường khách hàng đang tìm kiếm.',
        actionRequired: 'Chuyên viên Sales bấm "Kiểm tra email nháp & Báo giá" trước khi nhấn gửi.'
      },
      beforeAfter: [
        {
          task: 'Phân loại và phản hồi lead mới đổ về',
          before: {
            process: 'Sales mở Excel/Google Sheets nhận lead, mất 2-4 tiếng mới gọi điện, không biết khách quan tâm chính xác tính năng gì.',
            timeSpent: '2 - 4 giờ từ khi khách đăng ký',
            painPoint: 'Khách hàng nguội đi, tỷ lệ bắt máy giảm, tư vấn lan man không đúng nhu cầu.'
          },
          after: {
            process: 'AI phân tích lịch sử click, ngành nghề, chấm điểm độ nóng và đẩy thông báo cho Sales phụ trách trong vòng 60 giây.',
            timeSpent: '< 5 phút tiếp cận',
            humanRole: 'Sales nắm trọn ngữ cảnh, gọi điện tư vấn đúng vấn đề trọng tâm của khách.'
          }
        },
        {
          task: 'Soạn thảo báo giá sơ bộ và đề xuất giải pháp',
          before: {
            process: 'Sales mở file Word/Excel mẫu, copy paste tên công ty, tự tính số lượng user, dễ sai giá chiết khấu hoặc sót module.',
            timeSpent: '30 - 45 phút/báo giá',
            painPoint: 'Chậm trễ gửi báo giá cho khách, sai sót giá bán dẫn đến khiếu nại nội bộ.'
          },
          after: {
            process: 'AI tự động điền thông tin vào form chuẩn, áp dụng đúng bảng giá niêm yết và tạo bản PDF nháp kèm email.',
            timeSpent: '2 phút rà soát',
            humanRole: 'Sales kiểm tra số lượng và ký duyệt xuất gửi; AI không tự ý phát hành.'
          }
        },
        {
          task: 'Theo đuổi cơ hội (Follow-up) sau buổi gặp',
          before: {
            process: 'Sales ghi nhớ trong đầu hoặc dán giấy nhớ, dễ quên lịch gọi lại sau 3-5 ngày khi khách đang cân nhắc.',
            timeSpent: 'Hay quên hoặc làm thất thường',
            painPoint: 'Tỷ lệ rơi rụng cơ hội (Deal Drop) cao do thiếu sự chăm sóc đều đặn.'
          },
          after: {
            process: 'AI gợi ý kịch bản follow-up theo tiến độ thương vụ và nhắc lịch trên màn hình làm việc của chuyên viên.',
            timeSpent: 'Nhắc đúng thời điểm vàng',
            humanRole: 'Chuyên viên thực hiện cuộc gọi hoặc gửi tin nhắn chăm sóc đã được cá nhân hóa.'
          }
        }
      ],
      demoSpec: {
        title: 'Demo thực tế: Thẻ Lead thông minh & Email / Báo giá nháp',
        sourceDescription: 'Dữ liệu tổng hợp từ biểu mẫu đăng ký, hành vi click trên website và danh mục chính sách giá trong hệ thống CRM.',
        dataSources: [
          { name: 'Website Lead Intake Webhook', type: 'Form đăng ký, IP, thời gian lưu trang', syncMode: 'Tức thời' },
          { name: 'CRM Contact History', type: 'Lịch sử cuộc gọi, ghi chú tương tác cũ', syncMode: 'Truy vấn tức thời' },
          { name: 'Chính sách giá & Chiết khấu', type: 'Bảng giá niêm yết từ ban giám đốc', syncMode: 'Cập nhật theo quyết định' }
        ],
        disclaimer: 'Báo giá và email chỉ là bản nháp nội bộ. Hệ thống không bao giờ tự động gửi báo giá cho khách hàng nếu chưa có chữ ký duyệt của nhân viên kinh doanh.'
      },
      governance: {
        allowedData: [
          'Dữ liệu hồ sơ khách hàng tiềm năng và thông tin liên hệ công khai',
          'Lịch sử truy cập trang web và tài liệu khách hàng đã tải về',
          'Danh mục sản phẩm, bảng giá niêm yết và khung chiết khấu được duyệt',
          'Ghi chú cuộc họp và trạng thái thương vụ trong pipeline bán hàng'
        ],
        prohibitedData: [
          'Thông tin thẻ tín dụng hoặc mật khẩu cá nhân của khách hàng',
          'Dữ liệu thương vụ của nhân viên kinh doanh khác (nếu cấu hình phân vùng dữ liệu kín)',
          'Chi phí giá vốn nội bộ (COGS) không được phân quyền cho cấp chuyên viên',
          'Tự ý điều chỉnh mức chiết khấu vượt quá trần quy định của công ty'
        ],
        rbacRules: [
          'Chuyên viên chỉ nhìn thấy lead được phân bổ cho bản thân hoặc nhóm của mình.',
          'Trưởng phòng kinh doanh có quyền xem toàn bộ pipeline và điều phối lại lead.',
          'Mọi thay đổi giá bán ngoài biểu mẫu niêm yết bắt buộc phải chuyển trạng thái Pending Approval lên Giám đốc Kinh doanh.'
        ],
        auditLogMechanisms: [
          'Ghi nhận thời điểm lead đổ về, thuật toán chấm điểm và lý do cho điểm.',
          'Lưu lịch sử mọi bản nháp email và báo giá do AI sinh ra.',
          'Lưu vết nhân viên nào đã nhấn nút gửi báo giá và mức chiết khấu áp dụng.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Trích xuất thông tin khách hàng từ Form đăng ký', boundary: 'Đọc và điền vào CRM', systemOutput: 'Hồ sơ Lead hoàn chỉnh' },
          { task: 'Chấm điểm độ nóng của lead dựa trên quy tắc', boundary: 'Theo ma trận tính điểm', systemOutput: 'Điểm số 0-100 kèm 3 lý do giải thích' },
          { task: 'Soạn thảo bản nháp báo giá sơ bộ', boundary: 'Chỉ tạo bản nháp trên form chuẩn', systemOutput: 'Bản PDF nháp và email tương ứng' },
          { task: 'Gợi ý lịch nhắc gọi lại sau 3 ngày', boundary: 'Đẩy vào lịch làm việc', systemOutput: 'Task nhắc nhở trên giao diện' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Gửi báo giá chính thức cho khách hàng', reason: 'Cam kết pháp lý về giá cả và phạm vi dịch vụ', approverRole: 'Chuyên viên Sales phụ trách', actionIfRejected: 'Chỉnh sửa lại số lượng, đơn giá' },
          { checkpoint: 'Áp dụng mức chiết khấu vượt khung (VD > 10%)', reason: 'Tác động đến biên lợi nhuận của công ty', approverRole: 'Giám đốc Kinh doanh', actionIfRejected: 'Yêu cầu bán theo đúng giá niêm yết' },
          { checkpoint: 'Đóng (Close/Lost) một cơ hội kinh doanh lớn', reason: 'Tránh bỏ sót cơ hội có thể cứu vãn', approverRole: 'Trưởng nhóm kinh doanh', actionIfRejected: 'Chuyển cho chuyên viên khác chăm sóc tiếp' }
        ]
      },
      metrics: [
        { name: 'Thời gian phản hồi lead lần đầu (Speed to Lead)', formula: 'Thời gian từ lúc khách gửi form đến khi nhân viên thực hiện cuộc gọi/email đầu tiên', dataSource: 'CRM Timestamps', frequency: 'Hàng ngày', targetBenchmark: 'Rút ngắn xuống < 15 phút (so với 2-4 giờ)' },
        { name: 'Tỷ lệ hoàn thiện hồ sơ lead', formula: '(Số lead có đầy đủ thông tin phân loại / Tổng số lead tiếp nhận) × 100%', dataSource: 'Báo cáo chất lượng dữ liệu CRM', frequency: 'Hàng tuần', targetBenchmark: '≥ 90% lead có đủ dữ liệu nhu cầu' },
        { name: 'Tỷ lệ chuyển đổi Lead thành Cuộc hẹn tư vấn', formula: '(Số cuộc hẹn thành công / Tổng số lead được chấm điểm Hot) × 100%', dataSource: 'Pipeline phễu bán hàng', frequency: 'Hàng tháng', targetBenchmark: 'Chỉ số đo lường cải thiện trong kỳ pilot' }
      ],
      pilotPlan: {
        recommendedScope: 'Áp dụng thử nghiệm cho 1 nhóm kinh doanh (3-5 nhân sự) phụ trách 1 dòng sản phẩm chủ lực.',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Xây dựng ma trận chấm điểm Lead', activities: ['Định nghĩa tiêu chí Lead chất lượng (Ngành, quy mô, ngân sách)', 'Kết nối webhook từ 1 landing page trọng điểm', 'Cài đặt tài khoản cho 3 nhân viên kinh doanh'], deliverable: 'Ma trận tính điểm được Giám đốc Kinh doanh duyệt' },
          { week: 'Giai đoạn 2', phase: 'Thử nghiệm phân loại & Soạn nháp', activities: ['Lead đổ về được AI chấm điểm và chuẩn bị email nháp', 'Sales rà soát và đánh giá mức độ phù hợp của bản nháp', 'Tinh chỉnh câu từ trong email mẫu theo giọng điệu công ty'], deliverable: 'Tỷ lệ bản nháp được Sales sử dụng đạt ≥ 70%' },
          { week: 'Giai đoạn 3', phase: 'Đo lường thời gian phản hồi', activities: ['Bật thông báo đẩy nhắc nhở khi có lead điểm cao', 'Theo dõi thời gian từ lúc có lead đến khi cuộc gọi phát sinh', 'Họp phản hồi nhanh 15 phút mỗi sáng với nhóm thử nghiệm'], deliverable: 'Thời gian phản hồi trung bình < 20 phút' },
          { week: 'Giai đoạn 4', phase: 'Tổng kết & Chuẩn hóa tài liệu', activities: ['So sánh tỷ lệ chốt hẹn của nhóm thử nghiệm so với nhóm đối chứng', 'Hoàn thiện tài liệu hướng dẫn sử dụng cho toàn bộ đội ngũ', 'Kế hoạch triển khai diện rộng cho toàn bộ phòng kinh doanh'], deliverable: 'Báo cáo tổng kết Pilot gửi Ban Giám đốc' }
        ],
        goNoGoCriteria: [
          'Nhân viên kinh doanh giảm được ít nhất 20 phút cho mỗi hồ sơ báo giá.',
          'Không có trường hợp nào AI tự ý gửi email hoặc báo giá sai cho khách hàng.',
          'Nhóm Sales tham gia đánh giá mức độ hữu ích đạt ≥ 4/5 sao.'
        ]
      }
    },
    marketing: {
      name: 'AI Marketing Copilot',
      roleTitle: 'Trợ lý Tăng trưởng & Tối ưu Chiến dịch',
      shortTagline: 'So sánh hiệu quả chuyển đổi đa kênh, đề xuất phương án phân bổ ngân sách tối ưu và quản lý hàng đợi nội dung chờ duyệt.',
      targetAudience: 'Giám đốc Tiếp thị (CMO), Trưởng phòng Marketing, Chuyên viên Tối ưu Chiến dịch (Media Buyer), Content Creator',
      heroSample: {
        type: 'Channel Efficiency & Content Approval Queue',
        title: 'Báo cáo hiệu quả kênh & Hàng đợi xuất bản nội dung',
        timestamp: '08:00 AM (Dữ liệu tuần 36/2026)',
        summary: 'Kênh Google Ads Search đang mang lại CAC thấp nhất (185.000đ/lead hợp lệ); đề xuất tái phân bổ 20 triệu từ kênh hiển thị sang tìm kiếm.',
        dataPoints: [
          { label: 'Google Search CAC', value: '185.000 VNĐ', status: 'success' },
          { label: 'Meta Ads CAC', value: '310.000 VNĐ', status: 'warning' },
          { label: 'Đề xuất phân bổ ngân sách', value: '+ 20 Triệu vào Search', status: 'normal' },
          { label: 'Bài viết chờ duyệt', value: '3 bài trong hàng đợi', status: 'alert' }
        ],
        sampleSnippet: '• So sánh kênh: Google Search có tỷ lệ chuyển đổi từ Lead sang Cơ hội đạt 28% (Meta đạt 14%).\n• Đề xuất điều chỉnh: Giảm ngân sách chiến dịch nhận thức trên Meta, tăng ngân sách cho cụm từ khóa "giải pháp phần mềm quản trị".\n• Hàng đợi duyệt nội dung: Bài blog "5 dấu hiệu doanh nghiệp cần chuẩn hóa SOP" đã được AI kiểm tra tuân thủ nguyên tắc thương hiệu.',
        actionRequired: 'Trưởng phòng Marketing bấm "Phê duyệt bài viết" và "Duyệt kịch bản ngân sách tuần".'
      },
      beforeAfter: [
        {
          task: 'Phân tích chi phí tìm kiếm khách hàng (CAC) đa kênh',
          before: {
            process: 'Chuyên viên tải báo cáo từ Facebook Ads, Google Ads, TikTok Ads về Excel, đối chiếu thủ công với số lead trong CRM.',
            timeSpent: '4 - 6 giờ/tuần',
            painPoint: 'Chỉ nhìn được số lead ảo, không biết kênh nào thực sự tạo ra hợp đồng ký kết.'
          },
          after: {
            process: 'AI tự động liên kết chi phí quảng cáo với dữ liệu hợp đồng thực thu từ CRM, tính toán CAC thực tế theo từng kênh.',
            timeSpent: 'Xem tức thì trên Dashboard',
            humanRole: 'Marketer tập trung phân tích hành vi khách hàng và tối ưu thông điệp sáng tạo.'
          }
        },
        {
          task: 'Kiểm duyệt tính đồng nhất của nội dung truyền thông',
          before: {
            process: 'Trưởng phòng đọc từng bài viết, sửa lỗi chính tả, kiểm tra xem có vi phạm cam kết tuyệt đối hay sai tone thương hiệu không.',
            timeSpent: '2 - 3 giờ/ngày',
            painPoint: 'Nội dung dễ bị lọt lỗi xưng hô, dùng từ ngữ cam kết quá đà hoặc sai thông điệp định vị.'
          },
          after: {
            process: 'AI quét bản thảo theo bộ quy chuẩn thương hiệu, gắn cờ cảnh báo các từ ngữ nhạy cảm và xếp vào hàng đợi chờ duyệt.',
            timeSpent: '10 phút rà soát điểm cờ',
            humanRole: 'Trưởng phòng chỉ cần kiểm tra các điểm được đánh dấu và bấm phê duyệt xuất bản.'
          }
        },
        {
          task: 'Nuôi dưỡng khách hàng tiềm năng qua Email / Zalo',
          before: {
            process: 'Gửi email hàng loạt cho toàn bộ danh sách, thông điệp chung chung không phân hóa theo ngành nghề.',
            timeSpent: 'Mất nhiều công nhưng mở thấp',
            painPoint: 'Tỷ lệ hủy đăng ký cao, khách hàng cảm thấy bị làm phiền bởi thông tin không liên quan.'
          },
          after: {
            process: 'AI phân nhóm khách hàng theo ngành và hành vi, gợi ý kịch bản nuôi dưỡng phù hợp theo từng giai đoạn nhận thức.',
            timeSpent: 'Kịch bản cấu hình sẵn',
            humanRole: 'Đội ngũ Marketing duyệt kịch bản thông điệp trước khi kích hoạt luồng gửi.'
          }
        }
      ],
      demoSpec: {
        title: 'Demo thực tế: Bảng so sánh kênh, Đề xuất ngân sách & Hàng đợi duyệt bài',
        sourceDescription: 'Dữ liệu kết nối từ báo cáo chi phí quảng cáo và dữ liệu chuyển đổi thực tế từ hệ thống CRM của doanh nghiệp.',
        dataSources: [
          { name: 'Kênh Quảng cáo (Google / Meta API)', type: 'Chi phí, lượt hiển thị, click', syncMode: 'Đồng bộ hàng ngày' },
          { name: 'CRM Conversion Funnel', type: 'Lead hợp lệ, cơ hội, doanh số đã chốt', syncMode: 'Truy vấn liên tục' },
          { name: 'Brand Guidelines Database', type: 'Quy chuẩn nhận diện, từ khóa cấm', syncMode: 'Cập nhật từ Ban Truyền thông' }
        ],
        disclaimer: 'AI không có quyền tự ý thay đổi ngân sách trên tài khoản quảng cáo hoặc tự động xuất bản bài viết lên fanpage/website. Mọi hành động đều cần con người phê duyệt.'
      },
      governance: {
        allowedData: [
          'Số liệu traffic, chi phí quảng cáo, số lượt click và lượt điền form từ các kênh',
          'Tỷ lệ chuyển đổi phễu kinh doanh (từ lead sang hợp đồng) ở cấp độ tổng hợp',
          'Bộ tài liệu quy chuẩn thương hiệu, danh mục thông điệp và hình ảnh được duyệt',
          'Bản thảo bài viết blog, email marketing, kịch bản video ở trạng thái nháp'
        ],
        prohibitedData: [
          'Mật khẩu tài khoản quảng cáo hoặc phương thức thanh toán thẻ của công ty',
          'Thông tin cá nhân nhạy cảm của người dùng khi chưa có sự đồng ý',
          'Dữ liệu tài chính bảo mật ngoài phạm vi ngân sách tiếp thị được giao',
          'Tự ý kích hoạt các chiến dịch quảng cáo ngoài ngân sách được phân bổ'
        ],
        rbacRules: [
          'Chuyên viên nội dung có quyền tạo bản nháp và gửi vào hàng đợi phê duyệt.',
          'Trưởng phòng Marketing có quyền duyệt nội dung và đề xuất phân bổ ngân sách.',
          'Giám đốc Tiếp thị (CMO) là người phê duyệt ngân sách tổng thể hàng tháng.'
        ],
        auditLogMechanisms: [
          'Lưu lịch sử các đề xuất ngân sách do AI đưa ra kèm lý do tính toán.',
          'Lưu lại toàn bộ lịch sử chỉnh sửa bản thảo và ai là người bấm duyệt xuất bản.',
          'Nhật ký đối soát chi phí quảng cáo với hóa đơn thuế.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Tính toán chi phí CAC theo từng nguồn lead', boundary: 'Đối soát số liệu', systemOutput: 'Bảng xếp hạng hiệu quả kênh' },
          { task: 'Quét bản thảo tìm từ ngữ vi phạm quy chuẩn thương hiệu', boundary: 'Theo từ khóa định sẵn', systemOutput: 'Gắn cờ các câu cần chỉnh sửa' },
          { task: 'Soạn thảo kịch bản email chăm sóc theo chủ đề', boundary: 'Chỉ tạo bản nháp', systemOutput: 'Bản thảo email trong hàng đợi' },
          { task: 'Tổng hợp báo cáo hiệu quả chiến dịch hàng tuần', boundary: 'Tự động lúc 08:00 thứ 2', systemOutput: 'Báo cáo trực quan trên dashboard' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Xuất bản bài viết/video lên kênh truyền thông chính thức', reason: 'Bảo vệ uy tín và hình ảnh thương hiệu công ty', approverRole: 'Trưởng phòng Marketing', actionIfRejected: 'Chuyển về cho người viết chỉnh sửa' },
          { checkpoint: 'Dịch chuyển ngân sách giữa các kênh quảng cáo', reason: 'Tác động trực tiếp đến dòng tiền và kế hoạch tiếp thị', approverRole: 'Giám đốc Tiếp thị (CMO)', actionIfRejected: 'Giữ nguyên phân bổ ngân sách ban đầu' },
          { checkpoint: 'Kích hoạt chiến dịch gửi email/tin nhắn hàng loạt', reason: 'Tránh rơi vào spam và vi phạm chính sách gửi tin', approverRole: 'Trưởng nhóm Digital Marketing', actionIfRejected: 'Điều chỉnh danh sách người nhận' }
        ]
      },
      metrics: [
        { name: 'Độ chính xác đo lường CAC theo kênh', formula: 'Mức độ khớp giữa chi phí quảng cáo ghi nhận và số hợp đồng thực thu', dataSource: 'Đối chiếu chéo CRM & Kế toán', frequency: 'Hàng tháng', targetBenchmark: '100% dữ liệu chi phí được phân bổ đúng kênh' },
        { name: 'Tỷ lệ nội dung nháp tuân thủ quy chuẩn thương hiệu', formula: '(Số bài viết không vi phạm lỗi từ ngữ cấm / Tổng số bài viết) × 100%', dataSource: 'Nhật ký kiểm duyệt nội dung', frequency: 'Hàng tuần', targetBenchmark: '≥ 95% bài viết trong hàng đợi chuẩn chỉnh' },
        { name: 'Thời gian tổng hợp báo cáo tuần của Marketing', formula: 'Tổng số giờ chuyên viên dùng để làm báo cáo hiệu quả kênh', dataSource: 'Khảo sát nhân sự', frequency: 'Hàng tuần', targetBenchmark: 'Rút ngắn từ 4-6 giờ xuống còn 30 phút' }
      ],
      pilotPlan: {
        recommendedScope: 'Triển khai cho kênh Website Blog và 2 kênh quảng cáo chính (Google Search & Meta Ads).',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Nạp quy chuẩn thương hiệu & Kết nối dữ liệu', activities: ['Đưa bộ Brand Guideline và danh mục từ khóa cấm vào AI', 'Kết nối API báo cáo chi phí từ Google & Meta', 'Khởi tạo hàng đợi phê duyệt nội dung'], deliverable: 'Hàng đợi kiểm duyệt nội dung sẵn sàng hoạt động' },
          { week: 'Giai đoạn 2', phase: 'Thử nghiệm kiểm duyệt bản thảo', activities: ['Các chuyên viên content đưa 10 bài viết mẫu qua hệ thống', 'AI quét lỗi câu từ và gắn nhãn theo mức độ rủi ro', 'Trưởng phòng rà soát và đánh giá độ chuẩn xác'], deliverable: 'Quy trình duyệt bài 1 chạm được chuẩn hóa' },
          { week: 'Giai đoạn 3', phase: 'Thử nghiệm tính toán CAC theo phễu', activities: ['Đối chiếu số lead đổ về từ từng chiến dịch với CRM', 'AI đưa ra bản đề xuất tái phân bổ ngân sách đầu tiên', 'Họp đánh giá tính khả thi của đề xuất phân bổ'], deliverable: 'Bản phân tích hiệu quả kênh có dữ liệu kiểm chứng' },
          { week: 'Giai đoạn 4', phase: 'Đánh giá & Ban hành quy trình', activities: ['Đo lường thời gian tiết kiệm của đội ngũ Marketing', 'Ban hành SOP vận hành nội dung có AI hỗ trợ', 'Mở rộng thử nghiệm cho các kênh Zalo và Email Automation'], deliverable: 'Biên bản nghiệm thu Pilot phòng Marketing' }
        ],
        goNoGoCriteria: [
          'Không có bất kỳ bài viết nào có từ ngữ cấm được xuất bản ra ngoài.',
          'Số liệu báo cáo chi phí khớp với sao kê thẻ tín dụng thanh toán quảng cáo.',
          'Đội ngũ Marketing tiết kiệm được ít nhất 50% thời gian tổng hợp số liệu.'
        ]
      }
    },
    'customer-service': {
      name: 'AI Chăm sóc Khách hàng (CSKH Copilot)',
      roleTitle: 'Trợ lý Xử lý Yêu cầu & Hỗ trợ Hậu mãi',
      shortTagline: 'Tiếp nhận ticket, phân loại mức độ khẩn cấp, gợi ý câu trả lời chuẩn xác có trích dẫn nguồn tài liệu SOP và chờ nhân viên duyệt gửi.',
      targetAudience: 'Giám đốc Trải nghiệm Khách hàng (CXO), Trưởng phòng CSKH, Chuyên viên Hỗ trợ Kỹ thuật & Chăm sóc Hậu mãi',
      heroSample: {
        type: 'Ticket Analysis & Sourced Response Draft',
        title: 'Ticket #8492: Khiếu nại tiến độ giao hàng & Đổi trả linh kiện',
        timestamp: '14:20 PM (Gửi từ Cổng hỗ trợ khách hàng)',
        summary: 'Khách hàng bức xúc vì đơn hàng giao chậm 2 ngày so với thỏa thuận; AI phân loại mức độ Ưu tiên cao (P2) và soạn câu trả lời kèm chính sách bồi hoàn.',
        dataPoints: [
          { label: 'Phân loại', value: 'Khiếu nại giao trễ / Khẩn cấp P2', status: 'alert' },
          { label: 'Sắc thái khách hàng', value: 'Bức xúc, cần phản hồi gấp', status: 'warning' },
          { label: 'Tài liệu nguồn trích dẫn', value: 'SOP-CS-04 (Mục 3.2: Chính sách đền bù giao trễ)', status: 'normal' },
          { label: 'Đề xuất giải quyết', value: 'Miễn phí vận chuyển + Voucher 10%', status: 'success' }
        ],
        sampleSnippet: '• Nguồn trích dẫn: Theo Quy chế Dịch vụ VMC (SOP-CS-04, điều 3.2 ban hành ngày 15/01/2026), trường hợp hàng trễ trên 24h do lỗi vận chuyển, khách được tặng voucher giảm 10% cho đơn tiếp theo.\n• Câu trả lời mẫu: Đã soạn thảo đầy đủ lời xin lỗi chân thành, giải thích nguyên nhân khách quan và thông báo thời gian nhận hàng mới (16:30 chiều nay).\n• Trạng thái: Chờ nhân viên CSKH kiểm tra thông tin vận đơn trước khi bấm gửi.',
        actionRequired: 'Nhân viên CSKH kiểm tra mã vận đơn và nhấn "Duyệt & Gửi phản hồi" hoặc "Chỉnh sửa nội dung".'
      },
      beforeAfter: [
        {
          task: 'Tra cứu chính sách bảo hành & quy trình xử lý lỗi',
          before: {
            process: 'Nhân viên mới phải mở nhiều file Word quy chế hoặc hỏi nhóm chat nội bộ; câu trả lời mỗi người một kiểu.',
            timeSpent: '10 - 20 phút/ticket',
            painPoint: 'Khách hàng chờ đợi lâu, nhân viên trả lời sai chính sách dẫn đến tranh chấp kéo dài.'
          },
          after: {
            process: 'AI đọc cơ sở dữ liệu tri thức nội bộ và hiển thị ngay đoạn văn bản quy định liên quan kèm đường dẫn nguồn tài liệu.',
            timeSpent: '< 30 giây tra cứu',
            humanRole: 'Nhân viên xác nhận nội dung đúng ngữ cảnh và áp dụng cho trường hợp cụ thể.'
          }
        },
        {
          task: 'Soạn thảo câu trả lời cho các thắc mắc phổ biến',
          before: {
            process: 'Nhân viên gõ tay từng câu trả lời hoặc tìm file ghi chú cũ để copy, câu từ không chuẩn mực khi áp lực công việc cao.',
            timeSpent: '5 - 10 phút/câu trả lời',
            painPoint: 'Văn phong thiếu chuyên nghiệp, dễ xảy ra cãi vã với khách hàng khó tính.'
          },
          after: {
            process: 'AI chuẩn bị sẵn câu trả lời đầy đủ, lịch sự, đúng trọng tâm câu hỏi dựa trên các phản hồi đã được phê duyệt chuẩn.',
            timeSpent: '1 phút đọc lại và duyệt',
            humanRole: 'Nhân viên chỉ cần rà soát tên khách, số đơn và bấm nút gửi.'
          }
        },
        {
          task: 'Phân loại mức độ nghiêm trọng của khiếu nại',
          before: {
            process: 'Ticket đổ về một hòm thư chung, xử lý theo thứ tự đến trước làm trước, dẫn đến việc khiếu nại nghiêm trọng bị tồn đọng.',
            timeSpent: 'Trễ hạn xử lý khiếu nại lớn',
            painPoint: 'Khách hàng VIP bức xúc vì sự cố nghiêm trọng không được cấp quản lý can thiệp kịp thời.'
          },
          after: {
            process: 'AI quét từ khóa và cảm xúc, gắn nhãn P1/P2/P3 ngay khi tiếp nhận và tự động cảnh báo cho Trưởng phòng nếu ticket quá hạn.',
            timeSpent: 'Phân loại tức thời',
            humanRole: 'Cán bộ quản lý can thiệp ngay vào các trường hợp nhạy cảm trước khi sự cố bùng phát.'
          }
        }
      ],
      demoSpec: {
        title: 'Demo thực tế: Ticket khiếu nại, Câu trả lời có trích nguồn & Nút duyệt gửi',
        sourceDescription: 'Dữ liệu được nạp từ Cổng hỗ trợ khách hàng, Kho quy trình SOP chăm sóc và lịch sử xử lý ticket trong hệ thống.',
        dataSources: [
          { name: 'Hệ thống Ticket CSKH', type: 'Nội dung tin nhắn, email, thời gian gửi', syncMode: 'Webhook tức thời' },
          { name: 'Kho tri thức CSKH (Knowledge Base)', type: 'Chính sách bảo hành, đổi trả, bảng giá sửa chữa', syncMode: 'Đã xác thực phiên bản' },
          { name: 'Lịch sử đơn hàng khách hàng', type: 'Mã đơn, ngày giao, trạng thái thanh toán', syncMode: 'Liên kết CRM' }
        ],
        disclaimer: 'AI gợi ý câu trả lời dựa trên tài liệu nội bộ đã được số hóa. Mọi câu trả lời chính thức gửi tới khách hàng đều phải qua thao tác xác nhận của nhân viên hỗ trợ.'
      },
      governance: {
        allowedData: [
          'Nội dung tin nhắn, thư điện tử và ghi chú khiếu nại của khách hàng',
          'Kho quy chuẩn SOP dịch vụ khách hàng, chính sách bảo hành đã công bố',
          'Lịch sử đơn hàng và gói dịch vụ khách hàng đang sử dụng',
          'Các câu trả lời mẫu đã được Ban Giám đốc phê duyệt ban hành'
        ],
        prohibitedData: [
          'Tự ý cam kết bồi thường tiền mặt vượt quá định mức quy định',
          'Thông tin tài chính nội bộ, biên độ lợi nhuận của sản phẩm',
          'Dữ liệu cá nhân nhạy cảm của khách hàng khác',
          'Tự ý hủy hợp đồng hoặc thay đổi điều khoản cam kết dịch vụ'
        ],
        rbacRules: [
          'Chuyên viên CSKH có quyền xem ticket được giao và chỉnh sửa câu trả lời nháp.',
          'Trưởng nhóm CSKH có quyền duyệt các trường hợp bồi thường trong hạn mức cho phép.',
          'Giám đốc Dịch vụ khách hàng phê duyệt các khiếu nại cấp độ P1 ảnh hưởng đến pháp lý.'
        ],
        auditLogMechanisms: [
          'Lưu vết câu hỏi của khách hàng và văn bản quy định mà AI đã trích dẫn.',
          'Lưu thời gian nhân viên phản hồi và nội dung chỉnh sửa so với bản AI gợi ý.',
          'Lưu điểm đánh giá CSAT của khách hàng sau mỗi phiên hỗ trợ.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Tiếp nhận và gán mã số ticket theo kênh', boundary: 'Đồng bộ hệ thống', systemOutput: 'Mã Ticket mới trong hàng đợi' },
          { task: 'Phân tích mức độ khẩn cấp (P1, P2, P3)', boundary: 'Dựa trên từ khóa và ngữ cảnh', systemOutput: 'Gắn nhãn mức độ ưu tiên' },
          { task: 'Trích xuất điều khoản chính sách liên quan', boundary: 'Tra cứu cơ sở tri thức', systemOutput: 'Đoạn trích dẫn kèm số trang SOP' },
          { task: 'Soạn thảo câu trả lời phản hồi nháp', boundary: 'Chỉ tạo bản nháp trên giao diện', systemOutput: 'Văn bản phản hồi chờ nhân viên duyệt' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Gửi câu trả lời cho khách hàng', reason: 'Đảm bảo sự chuẩn xác và yếu tố đồng cảm của con người', approverRole: 'Chuyên viên CSKH', actionIfRejected: 'Gõ lại câu trả lời theo ý chuyên viên' },
          { checkpoint: 'Áp dụng chính sách đền bù / hoàn tiền', reason: 'Tác động trực tiếp đến chi phí vận hành', approverRole: 'Trưởng phòng CSKH', actionIfRejected: 'Từ chối đền bù, giải thích lý do' },
          { checkpoint: 'Đóng ticket khiếu nại dịch vụ nghiêm trọng', reason: 'Đảm bảo khách hàng đã thực sự hài lòng', approverRole: 'Trưởng nhóm CSKH', actionIfRejected: 'Tiếp tục theo dõi và hỗ trợ bổ sung' }
        ]
      },
      metrics: [
        { name: 'Thời gian phản hồi đầu tiên (First Response Time)', formula: 'Thời gian từ khi ticket tạo đến khi có phản hồi chính thức đầu tiên', dataSource: 'Hệ thống Ticket CSKH', frequency: 'Hàng ngày', targetBenchmark: 'Mục tiêu pilot rút ngắn xuống < 5 phút (so với 25 phút)' },
        { name: 'Tỷ lệ câu trả lời gợi ý được nhân viên chấp thuận', formula: '(Số phản hồi dùng bản nháp AI / Tổng số phản hồi gửi đi) × 100%', dataSource: 'Nhật ký thao tác nhân viên', frequency: 'Hàng tuần', targetBenchmark: '≥ 80% câu trả lời gợi ý chuẩn xác' },
        { name: 'Điểm hài lòng khách hàng (CSAT)', formula: 'Điểm đánh giá trung bình theo thang 5 sao sau khi đóng ticket', dataSource: 'Khảo sát tự động sau phiên chat/ticket', frequency: 'Hàng tháng', targetBenchmark: 'Chỉ số mục tiêu cần đo đạt ≥ 4.5 / 5.0' }
      ],
      pilotPlan: {
        recommendedScope: 'Áp dụng thử nghiệm cho 1 kênh tiếp nhận (Web Chat hoặc Email hỗ trợ) với 3 chuyên viên CSKH.',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Số hóa kho tài liệu chính sách', activities: ['Tập hợp 15 quy trình SOP và chính sách bảo hành phổ biến nhất', 'Kiểm tra tính cập nhật của các tài liệu trước khi nạp vào AI', 'Thiết lập các mức phân loại ticket P1, P2, P3'], deliverable: 'Kho dữ liệu CSKH chuẩn hóa được nghiệm thu' },
          { week: 'Giai đoạn 2', phase: 'Chạy thử nghiệm gợi ý câu trả lời', activities: ['Ticket thực tế đổ về được AI đề xuất câu trả lời nội bộ', 'Nhân viên đánh giá mức độ chính xác của tài liệu trích dẫn', 'Điều chỉnh cách xưng hô và văn phong phản hồi'], deliverable: 'Độ chính xác trích dẫn nguồn đạt ≥ 90%' },
          { week: 'Giai đoạn 3', phase: 'Bật cơ chế 1 chạm duyệt gửi', activities: ['Nhân viên thao tác duyệt gửi trực tiếp từ giao diện Copilot', 'Theo dõi thời gian xử lý trung bình trên mỗi ticket', 'Ghi nhận phản hồi của khách hàng về tốc độ hỗ trợ'], deliverable: 'Thời gian xử lý giảm tối thiểu 40%' },
          { week: 'Giai đoạn 4', phase: 'Tổng kết và mở rộng phạm vi', activities: ['Đánh giá chỉ số CSAT và tỷ lệ sử dụng của nhân viên', 'Bổ sung các kịch bản khó và ngoại lệ vào kho tri thức', 'Kế hoạch triển khai cho toàn bộ đội ngũ tổng đài và fanpage'], deliverable: 'Báo cáo tổng kết Pilot gửi Ban Lãnh đạo' }
        ],
        goNoGoCriteria: [
          '0% trường hợp AI tự động gửi câu trả lời mà không có nhân viên bấm duyệt.',
          'Tỷ lệ nhân viên đánh giá câu trả lời gợi ý có ích đạt trên 85%.',
          'Thời gian xử lý ticket trung bình giảm ít nhất 30% trong kỳ đo.'
        ]
      }
    },
    hr: {
      name: 'AI HR Copilot',
      roleTitle: 'Trợ lý Nhân sự & Quản trị Hiệu suất',
      shortTagline: 'Tự động rà soát bảng chấm công tìm các dòng ngoại lệ, theo dõi danh mục hội nhập nhân sự mới và phát hiện khoảng trống kỹ năng.',
      targetAudience: 'Giám đốc Nhân sự (CHRO), Trưởng phòng HCNS, Chuyên viên Tuyển dụng & C&B, Cán bộ Đào tạo nội bộ',
      heroSample: {
        type: 'Timesheet Exceptions & Skill Gap Dashboard',
        title: 'Rà soát bảng chấm công kỳ lương & Khoảng trống kỹ năng',
        timestamp: '09:00 AM (Dữ liệu kỳ công từ 01/09 đến 10/09/2026)',
        summary: 'Phát hiện 4 trường hợp ngoại lệ chấm công (quên quẹt vân tay, đi công tác đột xuất chưa nộp đơn bổ sung); Onboarding nhân sự mới đạt 4/5 bước.',
        dataPoints: [
          { label: 'Tổng nhân sự rà soát', value: '82 nhân sự', status: 'normal' },
          { label: 'Ngoại lệ cần xử lý', value: '4 trường hợp', status: 'alert' },
          { label: 'Tiến độ Onboarding mới', value: '4 / 5 bước hoàn tất', status: 'success' },
          { label: 'Khoảng trống kỹ năng', value: 'Kỹ năng đàm phán (Sales)', status: 'warning' }
        ],
        sampleSnippet: '• Ngoại lệ công 1: Nguyễn Văn An (Phòng Dự án) thiếu dữ liệu chấm công ngày 05/09; AI đề xuất gửi tin nhắn nhắc nộp đơn xác nhận công tác.\n• Ngoại lệ công 2: Trần Thị Bích (Kế toán) ghi nhận 2 lần vào muộn chưa có giải trình.\n• Onboarding nhân viên mới: Lê Hoàng Nam (Kỹ sư phần mềm) đã hoàn thành ký hợp đồng, nhận máy tính, học văn hóa; còn thiếu mốc đánh giá thử việc 30 ngày.',
        actionRequired: 'Chuyên viên C&B bấm "Gửi thông báo nhắc bổ sung đơn" cho 4 nhân sự liên quan.'
      },
      beforeAfter: [
        {
          task: 'Đối soát bảng chấm công và đơn từ cuối tháng',
          before: {
            process: 'Chuyên viên C&B mất 3 ngày cuối tháng mở file máy chấm công, dò từng dòng xem ai quên quẹt thẻ, gửi email giục nộp đơn giấy.',
            timeSpent: '16 - 24 giờ/kỳ lương',
            painPoint: 'Dễ nhầm lẫn công phép, tính sai lương gây bức xúc cho nhân viên, chốt lương bị chậm trễ.'
          },
          after: {
            process: 'AI quét dữ liệu máy chấm công hàng ngày, tự động phát hiện các dòng ngoại lệ và gửi thông báo nhắc nhân viên bổ sung đơn điện tử.',
            timeSpent: '1 - 2 giờ rà soát tổng',
            humanRole: 'Chuyên viên chỉ duyệt các đơn giải trình đặc biệt và khóa bảng công chốt số.'
          }
        },
        {
          task: 'Quy trình hội nhập nhân viên mới (Onboarding)',
          before: {
            process: 'Nhân sự gửi tài liệu rời rạc qua Zalo/Email; người kèm cặp quên các mốc đánh giá thử việc 30 ngày, 60 ngày.',
            timeSpent: 'Phụ thuộc trí nhớ của nhân sự',
            painPoint: 'Nhân viên mới bỡ ngỡ, cảm giác thiếu chuyên nghiệp, tỷ lệ nghỉ việc trong thời gian thử việc cao.'
          },
          after: {
            process: 'AI kích hoạt checklist 5 bước chuẩn hóa, tự động gửi tài liệu theo tiến độ và nhắc lịch đánh giá thử việc cho quản lý trực tiếp.',
            timeSpent: 'Tự động hóa theo lịch trình',
            humanRole: 'Quản lý trực tiếp tập trung vào hướng dẫn chuyên môn và đánh giá văn hóa thực tế.'
          }
        },
        {
          task: 'Nhận diện khoảng trống kỹ năng (Skill Gap)',
          before: {
            process: 'Chỉ phát hiện nhân viên thiếu kỹ năng khi xảy ra sự cố lớn hoặc sau đợt đánh giá cuối năm mang tính cảm tính.',
            timeSpent: 'Đánh giá 1 lần/năm',
            painPoint: 'Đào tạo không trúng nhu cầu, tốn chi phí nhưng không cải thiện được năng suất làm việc.'
          },
          after: {
            process: 'AI đối chiếu kết quả thực hiện công việc (KPI) với bộ tiêu chuẩn chức danh, chỉ ra các kỹ năng đang bị hổng của từng nhóm.',
            timeSpent: 'Theo dõi định kỳ quý',
            humanRole: 'Trưởng phòng đào tạo thiết kế khóa học trúng đích cho đúng đối tượng cần nâng cao.'
          }
        }
      ],
      demoSpec: {
        title: 'Demo thực tế: Bảng ngoại lệ chấm công, Onboarding Checklist & Skill Gap',
        sourceDescription: 'Dữ liệu kết nối từ máy chấm công vân tay, phần mềm quản lý đơn từ nghỉ phép và hệ thống đánh giá kỹ năng nội bộ.',
        dataSources: [
          { name: 'Máy chấm công / Phân hệ Chấm công', type: 'Giờ vào, giờ ra, số phút trễ', syncMode: 'Đồng bộ hàng ngày' },
          { name: 'Cổng gửi đơn điện tử (Phép/Công tác)', type: 'Đơn từ đã duyệt, đơn chờ xử lý', syncMode: 'Truy vấn liên tục' },
          { name: 'Hồ sơ năng lực nhân sự (Skill Matrix)', type: 'Khung năng lực vị trí, điểm đánh giá', syncMode: 'Định kỳ hàng quý' }
        ],
        disclaimer: 'AI không tự ý trừ công hoặc tính giảm lương của nhân viên. Bảng ngoại lệ chỉ mang tính chất rà soát nhắc nhở để nhân sự bổ sung minh chứng hợp lệ.'
      },
      governance: {
        allowedData: [
          'Dữ liệu giờ vào/ra từ máy chấm công và nhật ký đơn phép đã được phê duyệt',
          'Hồ sơ hội nhập nhân sự: tiến độ nộp hồ sơ, kết quả bài thi kiểm tra đầu vào',
          'Bảng mô tả công việc (JD), khung năng lực chuẩn của từng chức danh',
          'Chỉ số hoàn thành công việc (KPI) tổng hợp theo phòng ban'
        ],
        prohibitedData: [
          'Chi tiết tiền lương, tài khoản ngân hàng cá nhân, số thuế thu nhập cá nhân',
          'Hồ sơ sức khỏe, bệnh án hoặc hoàn cảnh gia đình riêng tư của nhân viên',
          'Nội dung tin nhắn trao đổi cá nhân giữa các nhân sự',
          'Tự ý ra quyết định sa thải, kỷ luật hoặc điều chuyển nhân sự'
        ],
        rbacRules: [
          'Nhân viên chỉ xem được dữ liệu công và checklist hội nhập của chính bản thân mình.',
          'Trưởng phòng xem được báo cáo tổng hợp chuyên cần của nhân sự trong phòng mình phụ trách.',
          'Chuyên viên C&B và Giám đốc Nhân sự mới có quyền truy cập toàn bộ bảng đối soát công ty.'
        ],
        auditLogMechanisms: [
          'Lưu vết mọi lần chỉnh sửa dữ liệu chấm công (ai sửa, lý do sửa, thời gian sửa).',
          'Ghi nhận lịch sử gửi thông báo nhắc nhở nộp đơn cho nhân viên.',
          'Lưu lịch sử đánh giá kỹ năng và người ký duyệt kết quả thử việc.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Đối chiếu giờ quẹt thẻ với khung giờ làm việc quy định', boundary: 'Theo lịch ca làm việc', systemOutput: 'Bảng danh sách các dòng thiếu dữ liệu' },
          { task: 'Gửi tin nhắn nhắc nhân sự bổ sung đơn giải trình', boundary: 'Chỉ gửi nội bộ', systemOutput: 'Thông báo trên app/hệ thống' },
          { task: 'Tự động kích hoạt checklist Onboarding khi có nhân sự mới', boundary: 'Khi tạo hồ sơ nhân viên', systemOutput: 'Lộ trình 5 bước trên tài khoản mới' },
          { task: 'Tổng hợp tỷ lệ hoàn thành KPI so với chuẩn năng lực', boundary: 'Tính toán định kỳ', systemOutput: 'Biểu đồ khoảng trống kỹ năng nhóm' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Chốt bảng lương và dữ liệu công cuối tháng', reason: 'Tác động trực tiếp đến chi trả thu nhập người lao động', approverRole: 'Giám đốc Nhân sự & Kế toán trưởng', actionIfRejected: 'Yêu cầu đối soát lại các điểm khiếu nại' },
          { checkpoint: 'Phê duyệt kết quả thử việc chính thức', reason: 'Quyết định pháp lý về hợp đồng lao động', approverRole: 'Tổng Giám đốc / Giám đốc Nhân sự', actionIfRejected: 'Gia hạn thử việc hoặc chấm dứt hợp đồng' },
          { checkpoint: 'Ban hành kế hoạch đào tạo có phát sinh chi phí', reason: 'Sử dụng ngân sách đào tạo của doanh nghiệp', approverRole: 'Ban Giám đốc', actionIfRejected: 'Điều chỉnh phạm vi hoặc hình thức đào tạo' }
        ]
      },
      metrics: [
        { name: 'Thời gian chốt bảng chấm công hàng tháng', formula: 'Tổng số giờ chuyên viên C&B cần để hoàn thiện bảng công đối soát', dataSource: 'Nhật ký công việc phòng HCNS', frequency: 'Hàng tháng', targetBenchmark: 'Rút ngắn từ 3 ngày xuống còn 4 giờ làm việc' },
        { name: 'Tỷ lệ đơn giải trình nộp đúng hạn', formula: '(Số đơn giải trình nộp trước ngày 25 / Tổng số ngoại lệ phát sinh) × 100%', dataSource: 'Hệ thống quản lý đơn từ', frequency: 'Hàng tháng', targetBenchmark: '≥ 95% đơn từ được giải quyết trước kỳ khóa sổ' },
        { name: 'Tỷ lệ nhân viên mới hoàn thành 100% checklist hội nhập', formula: '(Số nhân sự mới hoàn tất 5 bước / Tổng số tuyển mới) × 100%', dataSource: 'Onboarding Tracking System', frequency: 'Hàng quý', targetBenchmark: 'Chỉ số đo lường mục tiêu đạt 100%' }
      ],
      pilotPlan: {
        recommendedScope: 'Áp dụng cho khối Văn phòng (30-50 nhân sự) để kiểm thử luồng đối soát chấm công và onboarding.',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Đồng bộ máy chấm công & Quy tắc ca', activities: ['Cấu hình quy định giờ vào/ra, mức cho phép trễ (15 phút)', 'Đồng bộ dữ liệu máy chấm công 1 tuần gần nhất', 'Nạp biểu mẫu Onboarding chuẩn cho vị trí văn phòng'], deliverable: 'Kết nối máy chấm công và quy tắc ca thành công' },
          { week: 'Giai đoạn 2', phase: 'Chạy thử rà soát ngoại lệ', activities: ['AI quét dữ liệu và đưa ra danh sách các dòng thiếu giờ', 'Gửi thông báo thử nghiệm cho 5 nhân sự quên quẹt thẻ', 'Đo lường thời gian nhân sự phản hồi bổ sung đơn'], deliverable: 'Quy trình nhắc nộp đơn tự động vận hành trơn tru' },
          { week: 'Giai đoạn 3', phase: 'Thử nghiệm Onboarding 2 nhân sự mới', activities: ['Tạo tài khoản nhân viên mới và kích hoạt checklist tự động', 'Hệ thống gửi tài liệu văn hóa và quy chế từng ngày', 'Nhắc nhở quản lý lịch gặp mặt đánh giá sau 7 ngày đầu'], deliverable: 'Checklist hoàn tất đúng tiến độ 100%' },
          { week: 'Giai đoạn 4', phase: 'Đối soát bảng công kỳ lương đầu tiên', activities: ['Chuyên viên C&B dùng bản tóm tắt của AI để chốt công', 'So sánh thời gian chốt công với các tháng trước', 'Báo cáo hiệu quả lên Giám đốc Nhân sự'], deliverable: 'Bảng công chốt sớm hơn 2 ngày so với thường lệ' }
        ],
        goNoGoCriteria: [
          'Số ngày công và giờ làm việc tính toán khớp 100% với dữ liệu máy quét gốc.',
          '0% khiếu nại về việc tính sai ngày phép hoặc trừ công oan.',
          'Nhân viên đánh giá giao diện nhận thông báo nhắc nhở thân thiện, dễ thao tác.'
        ]
      }
    },
    finance: {
      name: 'AI Finance Copilot',
      roleTitle: 'Trợ lý Kế toán & Kiểm soát Dòng tiền',
      shortTagline: 'Tự động ghép nối giao dịch ngân hàng với mã hóa đơn/đơn hàng, phát hiện các giao dịch ngoại lệ và dự báo dòng tiền kèm dải băng bất định.',
      targetAudience: 'Giám đốc Tài chính (CFO), Kế toán trưởng, Chuyên viên Kế toán Công nợ, Chuyên viên Kế toán Thu - Chi',
      heroSample: {
        type: 'Bank Reconciliation & Cashflow Forecast',
        title: 'Đối soát giao dịch ngân hàng & Dự báo dòng tiền 30 ngày',
        timestamp: '16:00 PM (Dữ liệu giao dịch ngày 12/09/2026)',
        summary: 'Khớp thành công 18/19 giao dịch ngân hàng trong ngày; phát hiện 1 giao dịch ngoại lệ lệch số tiền; dự báo dòng tiền 30 ngày có dải băng thận trọng.',
        dataPoints: [
          { label: 'Giao dịch trong ngày', value: '18 / 19 khớp cú pháp', status: 'success' },
          { label: 'Giao dịch ngoại lệ', value: '1 khoản lệch 250.000đ', status: 'alert' },
          { label: 'Số dư khả dụng hiện tại', value: '1.42 Tỷ VNĐ', status: 'normal' },
          { label: 'Dự báo dòng tiền D+30', value: 'Dương 380 - 620 Triệu VNĐ', status: 'normal' }
        ],
        sampleSnippet: '• Giao dịch khớp mẫu: Giao dịch 45.000.000đ từ Techcombank khớp đúng mã đơn HD-2026-091 của Cty Bình Minh; AI đề xuất tạo phiếu thu nháp.\n• Ngoại lệ cần duyệt: Giao dịch 12.250.000đ từ Cty An Phát, đơn hàng ghi 12.500.000đ (lệch thiếu 250.000đ do trừ phí chuyển khoản).\n• Dự báo dòng tiền: Phân tích kịch bản cơ sở (Dự kiến thu 1.8 tỷ, chi 1.45 tỷ) và kịch bản thận trọng nếu 1 khoản nợ lớn bị trễ 15 ngày.',
        actionRequired: 'Kế toán viên nhấn "Xác nhận tạo phiếu thu" cho 18 món và "Xử lý thủ công" khoản lệch 250k.'
      },
      beforeAfter: [
        {
          task: 'Đối soát sao kê ngân hàng với đơn hàng',
          before: {
            process: 'Kế toán mở ứng dụng ngân hàng tải file Excel sao kê, đọc từng dòng nội dung chuyển khoản, gõ tìm trên CRM để đánh dấu "Đã thanh toán".',
            timeSpent: '2 - 3 giờ mỗi ngày',
            painPoint: 'Nội dung chuyển khoản viết tắt, thiếu mã đơn, mất nhiều thời gian gọi điện cho Sales hỏi xem tiền của khách nào.'
          },
          after: {
            process: 'AI phân tích cú pháp chuyển khoản, đối chiếu số tiền và tên người gửi với danh sách đơn hàng đang chờ thanh toán, tự động ghép cặp 80-90% giao dịch.',
            timeSpent: '10 - 15 phút kiểm tra ngoại lệ',
            humanRole: 'Kế toán chỉ cần xác nhận các cặp đã ghép và xử lý các trường hợp viết sai thông tin.'
          }
        },
        {
          task: 'Phát hiện nguy cơ công nợ quá hạn',
          before: {
            process: 'Chỉ rà soát công nợ vào ngày cuối tháng hoặc khi khách hàng quá hạn quá lâu dẫn đến nguy cơ nợ xấu khó đòi.',
            timeSpent: 'Bị động cuối kỳ',
            painPoint: 'Tiền bị chiếm dụng vốn, công nợ tồn đọng không rõ nguyên nhân do ai theo dõi.'
          },
          after: {
            process: 'AI phân tích lịch sử trả nợ, tự động gửi cảnh báo trước 7 ngày khi khoản nợ sắp đến hạn và xếp hạng rủi ro tín dụng của từng đối tác.',
            timeSpent: 'Cảnh báo tự động',
            humanRole: 'Chuyên viên kế toán công nợ phối hợp với Sales gửi thông báo đối soát sớm.'
          }
        },
        {
          task: 'Lập dự báo dòng tiền phục vụ kế hoạch chi trả',
          before: {
            process: 'Lập file Excel phức tạp, giả định doanh thu về đúng 100% dẫn đến khi khách trễ thanh toán thì quỹ tiền mặt bị thủng đột ngột.',
            timeSpent: 'Mất cả tuần lập báo cáo',
            painPoint: 'Không có vùng bất định (Confidence Interval), lãnh đạo đưa ra quyết định đầu tư mạo hiểm.'
          },
          after: {
            process: 'AI mô phỏng dòng tiền theo 2 kịch bản (Cơ sở và Thận trọng), hiển thị dải băng biến thiên dựa trên thói quen trả nợ thực tế trong quá khứ.',
            timeSpent: 'Cập nhật tự động theo ngày',
            humanRole: 'Giám đốc Tài chính chủ động điều tiết lịch thanh toán cho nhà cung cấp một cách an toàn.'
          }
        }
      ],
      demoSpec: {
        title: 'Demo thực tế: Ghép giao dịch ngân hàng, Xử lý ngoại lệ & Dự báo dòng tiền',
        sourceDescription: 'Dữ liệu được đọc từ sao kê tài khoản ngân hàng doanh nghiệp (chỉ đọc), phần mềm kế toán và đơn hàng CRM.',
        dataSources: [
          { name: 'Dữ liệu Biến động số dư Ngân hàng', type: 'Số tiền, ngày giờ, nội dung chuyển khoản', syncMode: 'API Ngân hàng / Sao kê định kỳ' },
          { name: 'Danh mục Đơn hàng & Hóa đơn CRM', type: 'Mã đơn, giá trị, thời hạn thanh toán', syncMode: 'Đồng bộ thời gian thực' },
          { name: 'Bảng phân bổ chi phí định kỳ', type: 'Lương, tiền thuê văn phòng, thuế, công nợ NCC', syncMode: 'Kế hoạch ngân sách đã duyệt' }
        ],
        disclaimer: 'Hệ thống AI chỉ có quyền ĐỌC dữ liệu số dư và lập phiếu thu/chi NHÁP. AI TUYỆT ĐỐI KHÔNG CÓ QUYỀN thực hiện lệnh chuyển tiền ra khỏi tài khoản hoặc can thiệp số dư ngân hàng.'
      },
      governance: {
        allowedData: [
          'Dữ liệu biến động số dư và nội dung chuyển khoản từ tài khoản công ty',
          'Danh mục hóa đơn bán hàng, hợp đồng kinh tế và lịch thanh toán cam kết',
          'Bảng ngân sách dự toán đã được Ban Giám đốc phê duyệt cho các phòng ban',
          'Lịch sử thanh toán và thời gian trả nợ trung bình của các khách hàng'
        ],
        prohibitedData: [
          'Mã OTP, mật khẩu đăng nhập tài khoản ngân hàng hoặc chữ ký số Token',
          'Tài khoản cá nhân của lãnh đạo hoặc nhân viên ngoài tài khoản công ty',
          'Tự ý ký duyệt lệnh thanh toán hoặc phát hành ủy nhiệm chi',
          'Tự ý điều chỉnh số liệu trên sổ sách kế toán thuế chính thức'
        ],
        rbacRules: [
          'Kế toán viên chỉ được xem và thao tác đối soát trên các tài khoản được phân công.',
          'Kế toán trưởng phê duyệt các phiếu thu/chi nháp trước khi đồng bộ vào sổ cái.',
          'Giám đốc Tài chính (CFO) là người có thẩm quyền duy nhất duyệt kịch bản dự báo dòng tiền trình CEO.'
        ],
        auditLogMechanisms: [
          'Lưu vết mọi giao dịch được ghép nối (thời gian, mã giao dịch, độ khớp cú pháp).',
          'Lưu lịch sử người dùng xác nhận hoặc hủy bỏ gợi ý ghép cặp của AI.',
          'Lưu vết mọi thay đổi trong giả định dự báo dòng tiền 30 ngày.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Phân tích cú pháp nội dung chuyển khoản tìm mã đơn hàng', boundary: 'Khớp chuỗi thông minh', systemOutput: 'Gợi ý ghép cặp giao dịch với hóa đơn' },
          { task: 'Phát hiện các giao dịch chênh lệch số tiền (ngoại lệ)', boundary: 'So sánh số học chính xác', systemOutput: 'Cảnh báo cờ đỏ kèm số tiền lệch' },
          { task: 'Soạn thảo bản nháp phiếu thu tiền', boundary: 'Chỉ tạo bản nháp', systemOutput: 'Phiếu thu chờ kế toán bấm duyệt' },
          { task: 'Vẽ biểu đồ dự báo dòng tiền 30 ngày kèm dải bất định', boundary: 'Mô phỏng thống kê', systemOutput: 'Biểu đồ trực quan trên giao diện' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Phê duyệt phiếu thu/chi vào sổ kế toán chính thức', reason: 'Tính pháp lý của chứng từ kế toán', approverRole: 'Kế toán trưởng', actionIfRejected: 'Yêu cầu kế toán viên kiểm tra lại chứng từ gốc' },
          { checkpoint: 'Xử lý các khoản tiền về không rõ nguồn gốc hoặc bị lệch', reason: 'Tránh ghi nhận sai công nợ hoặc rủi ro pháp lý', approverRole: 'Kế toán trưởng & Sales liên quan', actionIfRejected: 'Treo tạm giữ và liên hệ khách hàng xác minh' },
          { checkpoint: 'Thực hiện lệnh chuyển tiền thanh toán cho nhà cung cấp', reason: 'An toàn tài sản tiền mặt của doanh nghiệp', approverRole: 'Chủ tài khoản (Tổng Giám đốc / CFO)', actionIfRejected: 'Dừng lệnh chuyển khoản' }
        ]
      },
      metrics: [
        { name: 'Thời gian đối soát ngân hàng hàng ngày', formula: 'Số phút kế toán cần để hoàn tất đối chiếu biến động số dư trong ngày', dataSource: 'Nhật ký công việc kế toán', frequency: 'Hàng ngày', targetBenchmark: 'Rút ngắn từ 120 phút xuống còn 15 phút' },
        { name: 'Tỷ lệ ghép nối giao dịch tự động chính xác', formula: '(Số giao dịch ghép đúng không cần chỉnh / Tổng số giao dịch) × 100%', dataSource: 'Báo cáo đối soát hệ thống', frequency: 'Hàng tuần', targetBenchmark: '≥ 85% giao dịch được ghép tự động chuẩn xác' },
        { name: 'Độ lệch dự báo dòng tiền 14 ngày so với thực tế', formula: '|Dòng tiền thực tế - Dòng tiền dự báo kịch bản cơ sở| / Dòng tiền thực tế', dataSource: 'Đối chiếu dòng tiền thực thu/chi', frequency: 'Hàng tháng', targetBenchmark: 'Dung sai nằm trong dải bất định (≤ ± 8%)' }
      ],
      pilotPlan: {
        recommendedScope: 'Áp dụng cho 1 tài khoản ngân hàng giao dịch chính và danh mục đơn hàng của 1 chi nhánh.',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Chuẩn hóa cú pháp đơn & Nạp sao kê mẫu', activities: ['Quy định chuẩn cú pháp chuyển khoản gửi cho khách (Mã đơn - Tên)', 'Nạp 100 giao dịch lịch sử để AI học các dạng viết tắt phổ biến', 'Phân quyền tài khoản cho 2 chuyên viên kế toán'], deliverable: 'Quy tắc nhận diện cú pháp được kiểm thử' },
          { week: 'Giai đoạn 2', phase: 'Thử nghiệm đối soát song song', activities: ['Hàng ngày tải sao kê và cho AI chạy gợi ý ghép cặp', 'Kế toán viên đối chiếu độc lập và ghi nhận các ca nhận diện sai', 'Tinh chỉnh thuật toán phân tách chuỗi ký tự tiếng Việt'], deliverable: 'Độ chính xác ghép cặp đạt ≥ 80%' },
          { week: 'Giai đoạn 3', phase: 'Vận hành tạo phiếu thu nháp 1 chạm', activities: ['Kế toán kiểm tra giao dịch khớp và bấm 1 chạm tạo phiếu thu', 'Xử lý 5 trường hợp ngoại lệ chuyển thiếu tiền hoặc sai mã', 'Khởi tạo mô hình dự báo dòng tiền 30 ngày thử nghiệm'], deliverable: 'Tiết kiệm 80% thời gian gõ phiếu thu thủ công' },
          { week: 'Giai đoạn 4', phase: 'Đánh giá mô hình dự báo & Nghiệm thu', activities: ['So sánh số dư dự báo tuần trước với số dư thực tế trong tài khoản', 'Trình diễn báo cáo dòng tiền cho Giám đốc Tài chính', 'Ban hành quy trình vận hành kế toán có Copilot hỗ trợ'], deliverable: 'Biên bản nghiệm thu Pilot phòng Kế toán' }
        ],
        goNoGoCriteria: [
          '100% phiếu thu tạo ra có số tiền khớp chính xác với sao kê ngân hàng.',
          'Không có bất kỳ trường hợp nào nhầm lẫn tiền của khách hàng này sang khách hàng khác.',
          'Kế toán trưởng xác nhận tính an toàn: AI không can thiệp vào tài khoản gốc.'
        ]
      }
    },
    voice: {
      name: 'AI Voice Copilot',
      roleTitle: 'Hệ thống Thoại Tự động Có Kiểm soát',
      shortTagline: 'Cây hội thoại thông minh nhắc lịch hẹn, hỗ trợ đổi giờ và hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng khi gặp thắc mắc chuyên sâu.',
      targetAudience: 'Giám đốc Vận hành (COO), Trưởng phòng Tổng đài (Call Center Manager), Đội ngũ Tiếp nhận Lịch hẹn & CSKH qua Điện thoại',
      heroSample: {
        type: 'Controlled Voice Tree & Human Transfer',
        title: 'Kịch bản cuộc gọi: Nhắc lịch bảo dưỡng định kỳ xe ô tô',
        timestamp: '11:00 AM (Cuộc gọi mã #V-7819 tới khách hàng Lê Tuấn Anh)',
        summary: 'Khách hàng nghe máy, đồng ý lịch bảo dưỡng nhưng xin dời từ 14:00 sang 16:30; khi khách hỏi chi tiết về tiếng kêu động cơ, AI lập tức chuyển tiếp đến Cố vấn Kỹ thuật.',
        dataPoints: [
          { label: 'Trạng thái cuộc gọi', value: 'Hoàn thành (2 phút 15 giây)', status: 'success' },
          { label: 'Ý định khách hàng', value: 'Đổi giờ hẹn + Hỏi kỹ thuật', status: 'normal' },
          { label: 'Kết quả cập nhật', value: 'Dời sang 16:30 ngày 12/09', status: 'normal' },
          { label: 'Chuyển tiếp nhân viên', value: 'Đã chuyển máy tới Kỹ sư Tuấn', status: 'alert' }
        ],
        sampleSnippet: '• Lời thoại AI: "Dạ em chào anh Tuấn Anh từ Trung tâm Dịch vụ VMC. Em gọi để xác nhận lịch bảo dưỡng xe của anh lúc 14:00 chiều nay ạ..."\n• Khách phản hồi: "Chiều nay anh bận, chuyển sang 4 rưỡi được không? Với xe anh gần đây phanh có tiếng kêu két két thì kiểm tra mất bao lâu?"\n• Xử lý thông minh: AI xác nhận dời lịch sang 16:30 thành công; nhận diện câu hỏi về tiếng kêu phanh là vấn đề an toàn kỹ thuật -> hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng.',
        actionRequired: 'Cố vấn kỹ thuật tiếp nhận cuộc gọi chuyển tiếp kèm toàn bộ tóm tắt ngữ cảnh trên màn hình.'
      },
      beforeAfter: [
        {
          task: 'Gọi điện xác nhận lịch hẹn thủ công',
          before: {
            process: 'Nhân viên tổng đài phải bấm số gọi từng khách trong danh sách hàng trăm người mỗi ngày, lặp đi lặp lại cùng một nội dung thông báo.',
            timeSpent: '4 - 6 giờ/nhân viên/ngày',
            painPoint: 'Tốn nhân lực vào tác vụ cơ bắp, nhân viên kiệt sức, giọng nói mệt mỏi vào cuối ngày, tỷ lệ gọi sót cao.'
          },
          after: {
            process: 'AI thực hiện các cuộc gọi nhắc lịch có kịch bản chuẩn hóa, giọng đọc tự nhiên, ghi nhận chính xác phản hồi đồng ý hoặc dời lịch.',
            timeSpent: 'Tự động chạy theo lịch hẹn',
            humanRole: 'Nhân viên chỉ can thiệp khi khách hàng có yêu cầu đặc biệt hoặc cần tư vấn sâu.'
          }
        },
        {
          task: 'Xử lý tình huống khách hỏi câu hỏi khó ngoài kịch bản',
          before: {
            process: 'Nếu dùng IVR bấm phím cổ điển thì khách bức xúc vì máy móc; nếu dùng bot tự do thì bot trả lời bịa đặt nguy hiểm.',
            timeSpent: 'Khách dễ cúp máy và bức xúc',
            painPoint: 'Làm tổn hại hình ảnh thương hiệu nếu AI phát ngôn sai lệch về kỹ thuật hoặc giá bán.'
          },
          after: {
            process: 'Quy tắc chốt chặn nghiêm ngặt: Khi phát hiện câu hỏi ngoài kịch bản định sẵn, AI hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng.',
            timeSpent: 'Hỗ trợ chuyển cuộc gọi theo kịch bản',
            humanRole: 'Nhân viên chuyên môn tiếp quản cuộc gọi và giải đáp thấu đáo cho khách.'
          }
        },
        {
          task: 'Ghi chép và cập nhật kết quả cuộc gọi vào CRM',
          before: {
            process: 'Sau cuộc gọi, nhân viên phải gõ tay ghi chú vào CRM, thường làm sơ sài do vội bấm số tiếp theo.',
            timeSpent: '2 - 3 phút ghi chép/cuộc',
            painPoint: 'Mất mát thông tin quan trọng, người ca sau không biết khách đã trao đổi những gì.'
          },
          after: {
            process: 'Hệ thống tự động bóc băng (Speech-to-Text), tóm tắt 3 ý chính và cập nhật ngay trạng thái lịch hẹn vào hồ sơ khách hàng.',
            timeSpent: 'Đồng bộ tức thời',
            humanRole: 'Toàn bộ đội ngũ nhìn thấy dữ liệu tương tác minh bạch, xuyên suốt.'
          }
        }
      ],
      demoSpec: {
        title: 'Demo thực tế: Cây hội thoại nhắc lịch, Đổi giờ hẹn & Chuyển tiếp nhân viên',
        sourceDescription: 'Mô phỏng luồng thoại tương tác thực tế tuân thủ nguyên tắc an toàn: Có kịch bản định sẵn, nhận diện ý định tiếng Việt và có chốt chặn chuyển giao con người.',
        dataSources: [
          { name: 'Danh sách Lịch hẹn CRM', type: 'Tên khách, số điện thoại, giờ hẹn, loại dịch vụ', syncMode: 'Đọc dữ liệu lịch biểu' },
          { name: 'Kịch bản thoại đã được duyệt', type: 'Khung lời thoại, câu hỏi thường gặp, quy tắc phản hồi', syncMode: 'Cố định theo kịch bản' },
          { name: 'Trạng thái khả dụng của Nhân viên trực', type: 'Danh bạ nội bộ, trạng thái online/offline', syncMode: 'Real-time SIP/WebRTC' }
        ],
        disclaimer: 'AI Voice chỉ áp dụng cho các cuộc gọi thông báo, nhắc lịch có kịch bản đã được Ban Giám đốc phê duyệt. Không áp dụng cho các cuộc gọi đòi nợ, quảng cáo spam hoặc tư vấn pháp lý.'
      },
      governance: {
        allowedData: [
          'Thông tin lịch hẹn, thời gian, địa điểm và mã dịch vụ của khách hàng',
          'Kịch bản lời thoại đã được Ban Giám đốc và Phòng Pháp chế phê duyệt',
          'Danh bạ máy lẻ và lịch trực của đội ngũ chuyên viên tư vấn',
          'Bản ghi âm cuộc gọi và bản bóc băng văn bản phục vụ quản lý chất lượng'
        ],
        prohibitedData: [
          'Không yêu cầu khách cung cấp mật khẩu, mã OTP hoặc thông tin thẻ ngân hàng qua cuộc gọi',
          'Không tự ý cam kết chính sách giá hoặc giảm giá ngoài kịch bản được nạp',
          'Không gọi điện ngoài khung giờ quy định của pháp luật (chỉ gọi từ 08:30 - 18:00)',
          'Không tiếp tục cuộc gọi nếu khách hàng bày tỏ sự phiền hà hoặc từ chối nghe'
        ],
        rbacRules: [
          'Chỉ có Trưởng phòng Tổng đài mới có quyền chỉnh sửa và kích hoạt kịch bản thoại mới.',
          'Nhân viên trực tổng đài nhận các cuộc gọi chuyển tiếp tương ứng với chuyên môn của mình.',
          'Quản trị viên hệ thống có quyền cấu hình danh sách chặn (Blacklist) các số không muốn nhận cuộc gọi.'
        ],
        auditLogMechanisms: [
          'Lưu trữ file ghi âm và bản bóc băng văn bản theo cấu hình lưu trữ và quy định doanh nghiệp.',
          'Ghi nhận tỷ lệ nhận diện ý định đúng và các trường hợp phải chuyển tiếp nhân viên.',
          'Lưu vết người phê duyệt kịch bản và thời gian bắt đầu/kết thúc chiến dịch gọi.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Thực hiện cuộc gọi nhắc lịch theo danh sách định sẵn', boundary: 'Theo khung giờ cho phép', systemOutput: 'Cuộc gọi thoại tự động' },
          { task: 'Nhận diện giọng nói và phân loại câu trả lời (Đồng ý/Dời lịch)', boundary: 'Xử lý ngôn ngữ tự nhiên', systemOutput: 'Ghi nhận lựa chọn của khách' },
          { task: 'Tự động bóc băng cuộc gọi thành văn bản', boundary: 'Chuyển đổi âm thanh sang chữ', systemOutput: 'Bản bóc băng lưu trong CRM' },
          { task: 'Cập nhật trạng thái lịch hẹn mới vào CRM', boundary: 'Theo kết quả xác nhận', systemOutput: 'Thay đổi trạng thái lịch biểu' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Ban hành kịch bản cuộc gọi mới', reason: 'Đảm bảo văn phong chuẩn mực và tuân thủ quy định pháp luật', approverRole: 'Giám đốc Vận hành & Trưởng phòng CSKH', actionIfRejected: 'Yêu cầu viết lại kịch bản' },
          { checkpoint: 'Xử lý các trường hợp khách hàng phản ánh tiêu cực', reason: 'Bảo vệ mối quan hệ với khách hàng', approverRole: 'Trưởng nhóm CSKH', actionIfRejected: 'Giao chuyên viên cấp cao gọi điện chăm sóc lại' },
          { checkpoint: 'Phê duyệt danh sách số điện thoại chạy chiến dịch gọi', reason: 'Tránh gọi trùng hoặc gọi sai đối tượng', approverRole: 'Trưởng phòng Kinh doanh / CSKH', actionIfRejected: 'Lọc lại danh sách khách hàng hợp lệ' }
        ]
      },
      metrics: [
        { name: 'Tỷ lệ xác nhận lịch hẹn thành công', formula: '(Số cuộc gọi khách xác nhận hoặc dời lịch / Tổng số cuộc gọi kết nối) × 100%', dataSource: 'Báo cáo tổng đài AI', frequency: 'Hàng ngày', targetBenchmark: 'Mục tiêu pilot đạt ≥ 80% cuộc gọi thành công' },
        { name: 'Khả năng chuyển tiếp sang nhân viên khi có yêu cầu', formula: 'Tỷ lệ cuộc gọi cần trợ giúp được điều hướng thành công sang máy nhân viên', dataSource: 'Hệ thống chuyển mạch SIP', frequency: 'Theo từng cuộc gọi', targetBenchmark: 'Hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng [Mục tiêu tham khảo]' },
        { name: 'Độ chính xác bóc băng nội dung cuộc gọi', formula: '(Số từ nhận diện đúng ngữ cảnh / Tổng số từ trong bản bóc băng) × 100%', dataSource: 'Kiểm tra ngẫu nhiên 50 cuộc gọi/tuần', frequency: 'Hàng tuần', targetBenchmark: 'Đạt ≥ 92% độ chính xác tiếng Việt' }
      ],
      pilotPlan: {
        recommendedScope: 'Áp dụng cho 1 chiến dịch cụ thể: Nhắc lịch hẹn chăm sóc / bảo dưỡng với 50-100 khách hàng mỗi ngày.',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Xây dựng kịch bản & Thử nghiệm giọng đọc', activities: ['Soạn thảo lời thoại ngắn gọn (< 45 giây), thân thiện', 'Lựa chọn giọng đọc tiếng Việt tự nhiên (Nam/Nữ miền Bắc/Nam)', 'Thiết lập các nhánh rẽ: Đồng ý, Xin dời lịch, Bận gọi lại sau'], deliverable: 'Kịch bản thoại hoàn chỉnh được Ban Giám đốc duyệt' },
          { week: 'Giai đoạn 2', phase: 'Thử nghiệm nội bộ với nhân viên', activities: ['Thực hiện 30 cuộc gọi thử nghiệm tới số điện thoại của nhân viên', 'Đánh giá khả năng nhận diện khi nói nhanh, nói ngọng hoặc ồn ào', 'Kiểm tra luồng hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng'], deliverable: 'Tỷ lệ nhận diện ý định nội bộ đạt ≥ 90%' },
          { week: 'Giai đoạn 3', phase: 'Chạy thử nghiệm pilot với 30 khách/ngày', activities: ['Bật chiến dịch gọi nhắc lịch hẹn cho khách hàng thân thiết', 'Có nhân viên trực sẵn sàng tiếp nhận cuộc gọi chuyển tiếp', 'Ghi nhận phản hồi của khách hàng về trải nghiệm nghe máy'], deliverable: 'Không có phản ánh tiêu cực từ khách hàng' },
          { week: 'Giai đoạn 4', phase: 'Đo lường & Tối ưu kịch bản', activities: ['Phân tích tỷ lệ cúp máy sớm ở từng câu thoại để rút gọn', 'Đo lường thời gian tiết kiệm cho nhân viên lễ tân/tổng đài', 'Bàn giao quy trình vận hành cho đội ngũ Call Center'], deliverable: 'Báo cáo tổng kết Pilot nghiệm thu hệ thống thoại' }
        ],
        goNoGoCriteria: [
          '100% cuộc gọi có thắc mắc ngoài kịch bản được chuyển giao thành công cho nhân viên trực.',
          'Tỷ lệ khách hàng tắt máy ngay trong 5 giây đầu dưới 15%.',
          'Tất cả thông tin đổi lịch được đồng bộ chính xác vào CRM mà không bị trùng lịch.'
        ]
      }
    },
    workflow: {
      slug: 'workflow',
      name: 'AI Workflow Copilot',
      roleTitle: 'Trợ lý Tự động hóa Quy trình Nghiệp vụ (SOP)',
      shortTagline: 'Giám sát dòng chảy công việc liên phòng ban, phát hiện điểm nghẽn thời gian thực và đề xuất phương án tái phân bổ nguồn lực.',
      targetAudience: 'Giám đốc Vận hành (COO), Trưởng phòng Quản lý Chất lượng (QA/QC), Trưởng các bộ phận có quy trình phối hợp liên phòng',
      heroSample: {
        type: 'Process Bottleneck & Resource Reallocation',
        title: 'Giám sát luồng: Xử lý Đơn hàng Doanh nghiệp B2B (SOP-OP-12)',
        timestamp: '15:30 PM (Quét 42 đơn hàng đang trong luồng xử lý)',
        summary: 'Phát hiện điểm nghẽn nghiêm trọng tại bước "Kế toán thẩm định công nợ" với thời gian chờ trung bình 18.5 giờ (vượt 250% định mức SLA 5 giờ).',
        dataPoints: [
          { label: 'Quy trình giám sát', value: 'SOP-OP-12 (5 bước liên phòng)', status: 'normal' },
          { label: 'Điểm nghẽn phát hiện', value: 'Bước 3: Thẩm định nợ (Kế toán)', status: 'alert' },
          { label: 'Thời gian trễ hạn SLA', value: '18.5h (Định mức 5h)', status: 'warning' },
          { label: 'Đơn hàng bị ách tắc', value: '7 đơn hàng giá trị 450tr', status: 'alert' }
        ],
        sampleSnippet: '• Phân tích nguyên nhân gốc rễ: Chuyên viên thẩm định chính đang nghỉ phép; quyền duyệt phụ chưa được kích hoạt cho người thay thế.\n• Tác động dây chuyền: Bộ phận Kho không thể xuất hàng, đội xe giao hàng phải chờ đợi, nguy cơ trễ cam kết với khách hàng.\n• Đề xuất tự động: Tạm thời chuyển quyền thẩm định các đơn dưới 50 triệu cho Phó phòng Kế toán và gửi thông báo khẩn qua hệ thống.',
        actionRequired: 'Trưởng phòng Kế toán bấm "Đồng ý ủy quyền phụ" để thông luồng xử lý 7 đơn hàng.'
      },
      beforeAfter: [
        {
          task: 'Theo dõi tiến độ xử lý hồ sơ liên phòng ban',
          before: {
            process: 'Sales phải chạy sang bàn Kế toán hỏi xem hồ sơ đã duyệt chưa, Kế toán lại gọi sang Kho; công việc bị đùn đẩy trách nhiệm.',
            timeSpent: 'Mất nhiều giờ giục việc mỗi ngày',
            painPoint: 'Hồ sơ nằm chết trên bàn một người không ai biết, khi khách giục mới nháo nhác đi tìm.'
          },
          after: {
            process: 'AI giám sát trạng thái từng bước trên luồng trực quan; tự động kích hoạt tác vụ tiếp theo ngay khi bước trước hoàn thành.',
            timeSpent: 'Luân chuyển tức thời',
            humanRole: 'Mỗi nhân viên chỉ cần tập trung làm tốt phần việc trong danh sách nhiệm vụ của mình.'
          }
        },
        {
          task: 'Phát hiện và xử lý điểm nghẽn quy trình',
          before: {
            process: 'Chỉ nhận ra quy trình chậm khi khách hàng phàn nàn hoặc báo cáo tháng cho thấy doanh số bị ứ đọng.',
            timeSpent: 'Phát hiện trễ hàng tuần',
            painPoint: 'Không rõ khâu nào làm chậm, các bộ phận đổ lỗi cho nhau.'
          },
          after: {
            process: 'AI đo lường thời gian thực tế ở từng bước so với định mức SLA, tự động phát hiện khâu ùn ứ và cảnh báo người phụ trách.',
            timeSpent: 'Cảnh báo thời gian thực',
            humanRole: 'Cán bộ quản lý can thiệp điều phối nhân sự ngay khi có dấu hiệu nghẽn.'
          }
        },
        {
          task: 'Kiểm tra tính tuân thủ quy chuẩn SOP',
          before: {
            process: 'Nhân viên bỏ qua các bước kiểm tra chất lượng (KCS) hoặc thiếu chữ ký biên bản để làm cho nhanh.',
            timeSpent: 'Khó kiểm soát tuân thủ',
            painPoint: 'Sai sót sản phẩm lọt đến tay khách hàng, gây thiệt hại uy tín và chi phí đền bù.'
          },
          after: {
            process: 'Hệ thống tự động khóa bước tiếp theo nếu các trường thông tin bắt buộc hoặc file đính kèm chưa được tải lên đầy đủ.',
            timeSpent: 'Chốt chặn tự động',
            humanRole: 'Đảm bảo 100% hồ sơ hoàn thành đúng chuẩn chất lượng đã cam kết.'
          }
        }
      ],
      demoSpec: {
        title: 'Demo thực tế: Sơ đồ luồng xử lý, Cảnh báo điểm nghẽn & Đề xuất tái phân bổ',
        sourceDescription: 'Dữ liệu được trích xuất từ nhật ký luân chuyển công việc (Workflow Engine) và thời gian xử lý thực tế của các phòng ban.',
        dataSources: [
          { name: 'Quy trình SOP Doanh nghiệp', type: 'Các bước, người phụ trách, thời hạn cam kết SLA', syncMode: 'Cấu hình quy trình' },
          { name: 'Nhật ký thực thi công việc (Task Log)', type: 'Thời điểm bắt đầu, thời điểm hoàn tất, người thực hiện', syncMode: 'Ghi nhận thời gian thực' },
          { name: 'Phân công nhân sự & Lịch trực', type: 'Nhân sự khả dụng, tình trạng nghỉ phép', syncMode: 'Đồng bộ HRM' }
        ],
        disclaimer: 'AI gợi ý phương án điều phối và tái phân bổ công việc. Quyết định ủy quyền hoặc thay đổi người phụ trách bắt buộc phải do Trưởng bộ phận hoặc Quản lý quy trình phê duyệt.'
      },
      governance: {
        allowedData: [
          'Sơ đồ quy trình nghiệp vụ (SOP) và quy tắc định tuyến công việc',
          'Thời gian tiếp nhận, xử lý và hoàn tất các nhiệm vụ trong hệ thống',
          'Tình trạng quá hạn của các đầu việc so với chỉ tiêu SLA định trước',
          'Khối lượng công việc đang tồn đọng trên từng cá nhân và bộ phận'
        ],
        prohibitedData: [
          'Nội dung chi tiết tài liệu mật không liên quan đến tiến độ quy trình',
          'Tự ý bỏ qua các bước kiểm soát bắt buộc về an toàn hoặc tài chính',
          'Tự ý thay đổi cấu trúc quy trình mà chưa có văn bản ban hành',
          'Xóa hoặc can thiệp sửa đổi nhật ký thời gian thao tác của nhân viên'
        ],
        rbacRules: [
          'Nhân viên chỉ có quyền cập nhật trạng thái các nhiệm vụ được giao cho mình.',
          'Trưởng phòng có quyền tái phân bổ công việc trong nội bộ phòng ban.',
          'Giám đốc Vận hành (COO) là người phê duyệt mọi sửa đổi về cấu trúc quy trình SOP.'
        ],
        auditLogMechanisms: [
          'Ghi vết thời điểm chuyển giao công việc giữa các phòng ban với độ chính xác đến từng giây.',
          'Lưu lịch sử cảnh báo điểm nghẽn và các đề xuất tái phân bổ do AI đưa ra.',
          'Lưu vết ai là người phê duyệt ngoại lệ hoặc bỏ qua bước kiểm tra.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Tự động kích hoạt bước kế tiếp khi bước trước hoàn thành', boundary: 'Theo sơ đồ quy trình', systemOutput: 'Giao việc cho nhân sự tiếp theo' },
          { task: 'Đo lường thời gian thực hiện so với định mức SLA', boundary: 'Đếm thời gian tự động', systemOutput: 'Gắn cờ cảnh báo nếu sắp trễ hạn' },
          { task: 'Phát hiện điểm nghẽn tập trung nhiều hồ sơ tồn đọng', boundary: 'Phân tích số liệu hàng đợi', systemOutput: 'Cảnh báo điểm nghẽn trên dashboard' },
          { task: 'Gợi ý người thay thế khi nhân sự chính vắng mặt', boundary: 'Dựa trên ma trận phân quyền', systemOutput: 'Đề xuất ủy quyền tạm thời' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Phê duyệt ngoại lệ bỏ qua bước kiểm tra', reason: 'Rủi ro về chất lượng và an toàn quy trình', approverRole: 'Trưởng phòng Quản lý Chất lượng (QA/QC)', actionIfRejected: 'Bắt buộc thực hiện đầy đủ bước kiểm tra' },
          { checkpoint: 'Ủy quyền duyệt việc cho nhân sự thay thế', reason: 'Trách nhiệm pháp lý và thẩm quyền ký duyệt', approverRole: 'Trưởng phòng bộ phận liên quan', actionIfRejected: 'Giữ nguyên người phụ trách ban đầu' },
          { checkpoint: 'Thay đổi thời hạn định mức SLA của quy trình', reason: 'Tác động đến cam kết dịch vụ với khách hàng', approverRole: 'Giám đốc Vận hành (COO)', actionIfRejected: 'Áp dụng định mức thời gian cũ' }
        ]
      },
      metrics: [
        { name: 'Thời gian chu kỳ quy trình (Cycle Time)', formula: 'Tổng thời gian từ khi khởi tạo hồ sơ đến khi hoàn thành bước cuối cùng', dataSource: 'Workflow Timestamps', frequency: 'Hàng tuần', targetBenchmark: 'Rút ngắn 30% - 50% thời gian chu kỳ' },
        { name: 'Tỷ lệ hoàn thành công việc đúng hạn SLA', formula: '(Số nhiệm vụ hoàn thành đúng hạn / Tổng số nhiệm vụ) × 100%', dataSource: 'Báo cáo SLA hệ thống', frequency: 'Hàng tuần', targetBenchmark: 'Chỉ số mục tiêu pilot đạt ≥ 92%' },
        { name: 'Thời gian phát hiện và xử lý điểm nghẽn', formula: 'Khoảng cách từ khi điểm nghẽn hình thành đến khi có hành động điều phối', dataSource: 'Audit Log quy trình', frequency: 'Theo sự cố phát sinh', targetBenchmark: 'Cảnh báo và xử lý trong vòng < 2 giờ' }
      ],
      pilotPlan: {
        recommendedScope: 'Áp dụng cho 1 quy trình phối hợp liên phòng cốt lõi: Quy trình Duyệt & Xuất hàng B2B (Sales -> Kế toán -> Kho).',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Mô hình hóa quy trình SOP hiện tại', activities: ['Vẽ lại 5 bước luân chuyển hồ sơ thực tế', 'Thiết lập định mức thời gian SLA cho từng bước (VD: Duyệt giá: 2h, Thẩm định nợ: 4h)', 'Gán phân quyền nhân sự chính và nhân sự dự phòng'], deliverable: 'Sơ đồ luồng số hóa được các Trưởng phòng ký duyệt' },
          { week: 'Giai đoạn 2', phase: 'Cấu hình thông báo tự động', activities: ['Kích hoạt cơ chế tự động gửi thông báo khi có việc đến tay', 'Cấu hình cảnh báo màu vàng khi hết 70% thời gian SLA', 'Thử nghiệm luân chuyển 20 đơn hàng đầu tiên'], deliverable: 'Hệ thống thông báo hoạt động ổn định' },
          { week: 'Giai đoạn 3', phase: 'Kích hoạt phát hiện điểm nghẽn', activities: ['Theo dõi biểu đồ nhiệt các điểm ùn ứ công việc', 'Thử nghiệm cơ chế đề xuất tái phân bổ khi nhân sự quá tải', 'Họp liên phòng đánh giá các tình huống bị nghẽn'], deliverable: 'Xử lý thành công 3 tình huống nghẽn hồ sơ' },
          { week: 'Giai đoạn 4', phase: 'Đánh giá rút ngắn thời gian chu kỳ', activities: ['So sánh thời gian hoàn thành đơn hàng so với trước khi có Copilot', 'Hoàn thiện tài liệu hướng dẫn và báo cáo hiệu quả', 'Kế hoạch nhân rộng cho các quy trình Mua hàng và Tuyển dụng'], deliverable: 'Biên bản nghiệm thu Pilot quy trình liên phòng' }
        ],
        goNoGoCriteria: [
          'Thời gian luân chuyển hồ sơ trung bình giảm ít nhất 30%.',
          '0% hồ sơ bị thất lạc hoặc trôi việc mà không rõ trách nhiệm thuộc về ai.',
          'Các bộ phận liên quan xác nhận giảm thiểu tối đa các cuộc gọi giục việc.'
        ]
      }
    },
    rag: {
      name: 'AI Search & RAG Tri thức Nội bộ',
      roleTitle: 'Hệ thống Tra cứu Tri thức Doanh nghiệp Có Kiểm chứng',
      shortTagline: 'Hỏi đáp dữ liệu nội bộ dựa trên tài liệu thực tế được cấp quyền, trích dẫn chính xác nguồn và minh bạch trường hợp thiếu nguồn hoặc không đủ quyền.',
      targetAudience: 'Toàn thể Cán bộ Nhân viên, Trợ lý Ban Lãnh đạo, Chuyên viên Pháp chế, Chuyên viên Đào tạo & Kỹ thuật',
      heroSample: {
        type: 'Semantic Search & Grounded Citation',
        title: 'Hỏi đáp chính sách: Thời gian nghỉ phép kết hôn & Trợ cấp cưới',
        timestamp: '16:45 PM (Tra cứu từ Chuyên viên Kinh doanh)',
        summary: 'Truy vấn chính sách thành công: Trích xuất chính xác 2 điều khoản trong Quy chế Nhân sự nội bộ kèm số trang, ngày ban hành và đường link tài liệu gốc.',
        dataPoints: [
          { label: 'Câu hỏi truy vấn', value: 'Nghỉ kết hôn được mấy ngày và có trợ cấp không?', status: 'normal' },
          { label: 'Độ tin cậy trích dẫn', value: 'Dựa trên tài liệu gốc [Minh họa]', status: 'success' },
          { label: 'Tài liệu nguồn', value: 'Quy chế Nội bộ VMC-2026 (Trang 18, Điều 12.3)', status: 'normal' },
          { label: 'Quyền hạn người hỏi', value: 'Hợp lệ (Tài liệu công khai nội bộ)', status: 'normal' }
        ],
        sampleSnippet: '• Câu trả lời có kiểm chứng: Theo Điều 12.3 Quy chế Lao động VMC (ban hành 02/01/2026):\n1. Nhân viên chính thức kết hôn được nghỉ 03 ngày hưởng nguyên lương.\n2. Công ty tặng quà cưới trị giá 2.000.000 VNĐ từ Quỹ Phúc lợi Công đoàn.\n• Yêu cầu thủ tục: Nộp bản sao Giấy đăng ký kết hôn cho phòng HCNS trước tối thiểu 05 ngày làm việc.\n• Nguồn đối chiếu: [Xem tài liệu gốc: QC-NS-2026.pdf#page=18].',
        actionRequired: 'Người dùng có thể bấm vào đường link để xem trực tiếp trang 18 trong tài liệu gốc.'
      },
      beforeAfter: [
        {
          task: 'Tìm kiếm biểu mẫu và quy định nội bộ',
          before: {
            process: 'Nhân viên tìm kiếm trong hàng chục thư mục Google Drive/ổ đĩa mạng, tải nhầm biểu mẫu cũ đã hết hiệu lực.',
            timeSpent: '15 - 30 phút/lần tìm',
            painPoint: 'Dùng nhầm hợp đồng cũ hoặc làm sai thủ tục quy định, phải làm lại từ đầu.'
          },
          after: {
            process: 'Nhân viên gõ câu hỏi bằng ngôn ngữ tự nhiên; AI trả lời trúng đích kèm đường link mở đúng biểu mẫu mới nhất có hiệu lực.',
            timeSpent: '< 5 giây',
            humanRole: 'Nhân viên tải biểu mẫu chuẩn và tự tin thực hiện đúng quy định.'
          }
        },
        {
          task: 'Kiểm tra tính có cơ sở của câu trả lời AI (Chống bịa đặt)',
          before: {
            process: 'Nếu dùng AI công cộng thông thường, mô hình có thể tạo ra thông tin không có thật trong chính sách công ty.',
            timeSpent: 'Nguy cơ thông tin giả mạo',
            painPoint: 'Hiểu sai chính sách pháp lý hoặc kỹ thuật, gây hậu quả nghiêm trọng trong vận hành.'
          },
          after: {
            process: 'Công nghệ RAG chỉ hỗ trợ trả lời dựa trên các đoạn văn bản trích xuất được từ kho dữ liệu đã kiểm duyệt; không có tài liệu là từ chối trả lời.',
            timeSpent: 'Minh bạch trích dẫn',
            humanRole: 'Người đọc dễ dàng đối chiếu lại văn bản gốc để xác thực tính chính xác.'
          }
        },
        {
          task: 'Bảo mật phân quyền khi tra cứu tài liệu mật',
          before: {
            process: 'Ổ đĩa chia sẻ dễ bị phân quyền lỏng lẻo, nhân viên vô tình đọc được bảng lương hoặc hồ sơ đấu thầu bảo mật.',
            timeSpent: 'Nguy cơ lộ lọt dữ liệu cao',
            painPoint: 'Vi phạm quy định bảo mật thông tin nội bộ của doanh nghiệp.'
          },
          after: {
            process: 'AI đối chiếu quyền hạn (RBAC) của người hỏi trước khi truy vấn; nếu không đủ thẩm quyền, hệ thống lịch sự từ chối cung cấp.',
            timeSpent: 'Kiểm soát quyền tức thời',
            humanRole: 'Bảo vệ các bí mật kinh doanh và dữ liệu nhạy cảm của công ty.'
          }
        }
      ],
      demoSpec: {
        title: 'Demo thực tế: Câu hỏi → Đoạn nguồn → Câu trả lời (Kèm trường hợp thiếu nguồn & Không đủ quyền)',
        sourceDescription: 'Dữ liệu được nạp từ Kho tài liệu quy chế, sổ tay nhân sự, tài liệu kỹ thuật và hợp đồng mẫu của doanh nghiệp.',
        dataSources: [
          { name: 'Kho Quy chế & Thông tư nội bộ', type: 'Tài liệu PDF, Word đã phê duyệt ban hành', syncMode: 'Nạp định kỳ khi có bản mới' },
          { name: 'Sổ tay Kỹ thuật & Sản phẩm', type: 'Hướng dẫn sử dụng, thông số kỹ thuật', syncMode: 'Đã gắn thẻ phân quyền' },
          { name: 'Hệ thống Phân quyền Người dùng (RBAC)', type: 'Cấp bậc nhân viên, phòng ban, quyền truy cập', syncMode: 'Xác thực tài khoản SSO' }
        ],
        disclaimer: 'Hệ thống RAG tuân thủ nguyên tắc nghiêm ngặt: Chỉ hỗ trợ tổng hợp khi tìm thấy bằng chứng trong tài liệu nguồn. Nếu không có dữ liệu hoặc người hỏi không đủ quyền hạn, hệ thống sẽ thông báo rõ ràng thay vì tự suy diễn.'
      },
      governance: {
        allowedData: [
          'Quy chế lao động, chính sách phúc lợi và sổ tay văn hóa doanh nghiệp công khai',
          'Tài liệu quy trình vận hành chuẩn (SOP) của phòng ban người dùng đang làm việc',
          'Tài liệu đào tạo sản phẩm, danh mục bảng giá niêm yết được phép lưu hành',
          'Các biểu mẫu hành chính, mẫu đề xuất, mẫu nghiệm thu chuẩn của công ty'
        ],
        prohibitedData: [
          'Hồ sơ lương, thưởng và đánh giá hiệu suất của nhân viên khác',
          'Hồ sơ tài chính mật, báo cáo thuế kiểm toán nội bộ chưa công bố',
          'Biên bản họp kín của Hội đồng Quản trị và Ban Kiểm soát',
          'Mã nguồn sản phẩm hoặc tài liệu sở hữu trí tuệ cấp độ Tuyệt mật'
        ],
        rbacRules: [
          'Người dùng ở cấp nhân viên chỉ tra cứu được các tài liệu thuộc cấp độ Công khai Nội bộ (Internal Public).',
          'Trưởng phòng tra cứu được thêm tài liệu chuyên môn nội bộ phòng ban mình phụ trách.',
          'Ban Giám đốc có quyền tra cứu toàn bộ kho tài liệu doanh nghiệp.'
        ],
        auditLogMechanisms: [
          'Ghi nhật ký mọi câu hỏi tra cứu, người hỏi, thời gian và địa chỉ IP.',
          'Lưu vết các tài liệu nguồn đã được trích xuất cho mỗi câu trả lời.',
          'Cảnh báo cho quản trị viên khi có tài khoản cố tình tra cứu tài liệu mật vượt thẩm quyền nhiều lần.'
        ]
      },
      taskDivision: {
        automatedTasks: [
          { task: 'Chuyển đổi tài liệu PDF/Word thành các đoạn vector ngữ nghĩa', boundary: 'Chỉ xử lý tài liệu được nạp', systemOutput: 'Cơ sở tri thức Vector Database' },
          { task: 'Tìm kiếm các đoạn văn bản có độ tương đồng ngữ nghĩa cao nhất', boundary: 'Theo quyền hạn của tài khoản', systemOutput: '2-3 đoạn trích dẫn nguồn liên quan' },
          { task: 'Tổng hợp câu trả lời dựa trên đoạn trích nguồn', boundary: 'Không suy diễn ngoài tài liệu', systemOutput: 'Câu trả lời kèm link tài liệu gốc' },
          { task: 'Từ chối trả lời nếu không tìm thấy dữ liệu nguồn phù hợp', boundary: 'Theo quy tắc an toàn', systemOutput: 'Thông báo: Không tìm thấy tài liệu nguồn' }
        ],
        mandatoryApprovals: [
          { checkpoint: 'Phê duyệt nạp tài liệu mới vào cơ sở tri thức AI', reason: 'Đảm bảo tài liệu đưa vào là văn bản chính thức và chuẩn xác', approverRole: 'Trưởng phòng Pháp chế / HCNS', actionIfRejected: 'Loại bỏ tài liệu khỏi danh mục nạp' },
          { checkpoint: 'Phân loại cấp độ bảo mật cho tài liệu (Mật / Nội bộ)', reason: 'Quyết định phạm vi ai được phép đọc', approverRole: 'Chủ sở hữu tài liệu (Trưởng phòng ban hành)', actionIfRejected: 'Giữ cấp độ bảo mật cao nhất mặc định' },
          { checkpoint: 'Hủy bỏ hoặc cập nhật tài liệu đã hết hiệu lực', reason: 'Tránh AI trích dẫn các quy định cũ đã bị thay thế', approverRole: 'Ban Thư ký / Quản trị viên tri thức', actionIfRejected: 'Gắn cờ tài liệu đang được rà soát' }
        ]
      },
      metrics: [
        { name: 'Thời gian tra cứu thông tin nội bộ', formula: 'Số phút nhân viên cần để tìm được câu trả lời cho một thắc mắc quy chế', dataSource: 'Khảo sát người dùng', frequency: 'Hàng tháng', targetBenchmark: 'Rút ngắn từ 15-20 phút xuống còn dưới 30 giây' },
        { name: 'Tỷ lệ câu trả lời có trích dẫn nguồn kiểm chứng', formula: '(Số câu trả lời có kèm link tài liệu gốc / Tổng số câu trả lời) × 100%', dataSource: 'Audit Log hệ thống RAG', frequency: 'Hàng tuần', targetBenchmark: 'Kiểm soát mục tiêu đạt ≥ 98%' },
        { name: 'Tỷ lệ an toàn bảo mật phân quyền RBAC', formula: '(Số vụ rò rỉ dữ liệu mật / Tổng số truy vấn) × 100%', dataSource: 'Báo cáo an ninh thông tin', frequency: 'Liên tục', targetBenchmark: 'Không ghi nhận sự cố rò rỉ tài liệu ngoài phân quyền' }
      ],
      pilotPlan: {
        recommendedScope: 'Áp dụng thử nghiệm cho bộ 20 tài liệu Quy chế Nhân sự & Sổ tay Văn hóa cho toàn bộ nhân viên công ty.',
        duration: 'Pilot theo giai đoạn',
        pilotSteps: [
          { week: 'Giai đoạn 1', phase: 'Số hóa & Làm sạch kho tài liệu', activities: ['Tập hợp các tài liệu quy chế có hiệu lực hiện hành', 'Chuyển đổi sang định dạng chuẩn và đánh số trang rõ ràng', 'Cấu hình phân quyền tài khoản cho nhóm thử nghiệm'], deliverable: '20 tài liệu được nạp và gắn thẻ bảo mật' },
          { week: 'Giai đoạn 2', phase: 'Kiểm thử câu hỏi đối chiếu (Benchmark)', activities: ['Đội ngũ thử nghiệm đặt 50 câu hỏi từ dễ đến khó', 'Rà soát xem AI có trích dẫn đúng trang và đúng điều khoản không', 'Kiểm thử trường hợp câu hỏi bẫy không có trong tài liệu'], deliverable: 'Tỷ lệ trả lời có trích nguồn đúng đạt ≥ 95%' },
          { week: 'Giai đoạn 3', phase: 'Mở cho toàn thể nhân sự thử nghiệm', activities: ['Mở cổng tra cứu trên thanh công cụ làm việc', 'Theo dõi nhật ký các câu hỏi nhân sự quan tâm nhiều nhất', 'Bổ sung tài liệu giải đáp cho các chủ đề chưa có trong kho'], deliverable: 'Ghi nhận trên 200 lượt tra cứu hợp lệ' },
          { week: 'Giai đoạn 4', phase: 'Đánh giá & Mở rộng sang tài liệu kỹ thuật', activities: ['Đo lường mức độ hài lòng của nhân viên khi tra cứu', 'Bổ sung thêm tài liệu kỹ thuật và tài liệu bán hàng', 'Bàn giao quy trình cập nhật tài liệu cho phòng HCNS'], deliverable: 'Biên bản nghiệm thu Pilot hệ thống RAG' }
        ],
        goNoGoCriteria: [
          'Câu trả lời đều có trích dẫn link đến tài liệu nguồn cụ thể.',
          'Không có sự cố nhân viên cấp dưới đọc được tài liệu mật của cấp quản lý.',
          'Tỷ lệ nhân viên đánh giá hài lòng với tốc độ và độ chính xác đạt trên 90%.'
        ]
      }
    }
  }
};

export default viAiCopilots;
