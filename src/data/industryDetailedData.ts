export interface DailyOperationItem {
  time: string;
  title: string;
  actor: string;
  desc: string;
  systemAction: string;
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  isBottleneck: boolean;
  bottleneckNote?: string;
  systemSupport: string;
}

export interface ConfiguredModuleItem {
  scope: string;
  moduleName: string;
  inputData: string;
  coreProcess: string;
  outputData: string;
}

export interface AiSpecializedDemoData {
  title: string;
  problemContext: string;
  inputLabel: string;
  sampleInput: Record<string, string>;
  aiProcessing: string;
  aiOutput: {
    badge: string;
    summary: string;
    recommendations: string[];
    riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
    actionItems: string[];
  };
  disclaimer: string;
}

export interface TrackedKpiItem {
  metric: string;
  formula: string;
  frequency: string;
  targetBenchmark: string;
  businessImpact: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  timeline: string;
  focus: string;
  deliverables: string[];
}

export interface IndustryDetailedConfig {
  slug: 'trade' | 'service' | 'education' | 'real-estate' | 'manufacturing' | 'distribution' | 'construction' | 'technology';
  name: string;
  tagline: string;
  sectorCode: string;
  heroProblemSummary: string;
  operatingSnapshot: {
    dailyVolume: string;
    primaryChannels: string;
    keyConstraint: string;
    complianceNote: string;
  };
  dailyOperation: DailyOperationItem[];
  journeyVisualFlow: JourneyStep[];
  configuredModules: ConfiguredModuleItem[];
  aiSpecializedDemo: AiSpecializedDemoData;
  trackedKpis: TrackedKpiItem[];
  threeStageRoadmap: RoadmapPhase[];
}

export const detailedIndustriesData: Record<string, IndustryDetailedConfig> = {
  trade: {
    slug: 'trade',
    name: 'Thương mại & Bán lẻ',
    tagline: 'Hợp nhất đơn hàng đa kênh, cấu hình luồng dữ liệu kho chi nhánh và cá nhân hóa trải nghiệm khách mua',
    sectorCode: 'IND-TRD-01',
    heroProblemSummary: 'Doanh nghiệp bán lẻ thường mắc kẹt ở tình trạng dữ liệu khách hàng bị xé nhỏ trên nhiều kênh (cửa hàng, website, sàn TMĐT, fanpage). Đơn hàng phát sinh dồn dập khiến kho không cập nhật kịp dẫn đến bán âm tồn, giao chậm và bỏ sót cơ hội chăm sóc khách hàng quay lại.',
    operatingSnapshot: {
      dailyVolume: '300 - 3.000 đơn hàng/ngày [Kịch bản mô phỏng]',
      primaryChannels: 'Cửa hàng trực tiếp, Website, Sàn TMĐT, Mạng xã hội',
      keyConstraint: 'Cơ chế đồng bộ tồn kho hoặc kết nối với phần mềm kho/WMS của doanh nghiệp',
      complianceNote: 'Tuân thủ quản lý hóa đơn điện tử từng đơn và bảo mật thông tin người mua'
    },
    dailyOperation: [
      {
        time: '07:30',
        title: 'Quét và tiếp nhận đơn hàng đêm từ đa kênh',
        actor: 'Trưởng ca Kho vận & Sales Online',
        desc: 'Quy trình tiếp nhận đơn gom các đơn hàng phát sinh từ sàn TMĐT, website và chatbox về bảng quản trị trung tâm khi có kết nối API.',
        systemAction: 'Kịch bản ứng dụng: Cấu hình quy tắc cập nhật số lượng tồn khả dụng tạm thời để hỗ trợ các kênh bán.'
      },
      {
        time: '09:30',
        title: 'Đồng bộ tồn kho chi nhánh & Phân bổ điểm xuất hàng',
        actor: 'Bộ phận Điều phối Kho',
        desc: 'Kịch bản đề xuất phân bổ đơn hàng cho chi nhánh phù hợp nhằm hỗ trợ rút ngắn thời gian giao hàng.',
        systemAction: 'Minh họa quy trình: Hỗ trợ tạo danh sách nhặt hàng (Pick-list) theo mã SKU phục vụ nhân sự kho chi nhánh.'
      },
      {
        time: '14:00',
        title: 'Bàn giao đơn vị vận chuyển & Cập nhật mã vận đơn',
        actor: 'Nhân viên đóng gói & Đơn vị 3PL',
        desc: 'Quét mã vạch kiện hàng, xuất biên bản bàn giao cho shipper và kích hoạt trạng thái Đang giao.',
        systemAction: 'Minh họa quy trình: Hỗ trợ luồng tin nhắn SMS Brandname/Zalo ZNS thông báo mã vận đơn khi tích hợp cổng đối tác.'
      },
      {
        time: '17:30',
        title: 'Đối soát trạng thái giao hàng COD & Ghi nhận doanh thu',
        actor: 'Kế toán Bán hàng',
        desc: 'Đối soát các đơn giao thành công, đơn chuyển hoàn và tiền COD từ các hãng vận chuyển đối tác.',
        systemAction: 'Kịch bản ứng dụng: Đối soát số dư đối tác vận chuyển và cập nhật vào báo cáo Scope E theo cấu hình.'
      },
      {
        time: '20:30',
        title: 'Phân tích giỏ hàng trong ngày & Kích hoạt kịch bản tái mua',
        actor: 'Marketing / CSKH',
        desc: 'Rà soát các khách hàng đã nhận hàng thành công sau 3-7 ngày để gửi khảo sát hài lòng và voucher chăm sóc.',
        systemAction: 'Kịch bản AI minh họa: AI đọc dữ liệu mua sắm được cấp quyền để đề xuất danh sách khách hàng tiềm năng tái mua.'
      }
    ],
    journeyVisualFlow: [
      {
        stepNumber: 1,
        title: 'Đa kênh',
        subtitle: 'Store, Web, Sàn, Social',
        isBottleneck: false,
        systemSupport: 'Tiếp nhận webhook sự kiện đơn hàng và tin nhắn tập trung về cổng Scope A & B khi kết nối tích hợp.'
      },
      {
        stepNumber: 2,
        title: 'Đơn hàng',
        subtitle: 'Xác thực & Khóa tồn kho',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Nhân viên nhập thủ công giữa các sàn, chậm trễ 15-30 phút khiến tồn kho thực tế bị lệch.',
        systemSupport: 'Khả năng cấu hình: Hỗ trợ luồng bóc tách dữ liệu đơn hàng, gắn mã nguồn UTM và phân luồng trạng thái.'
      },
      {
        stepNumber: 3,
        title: 'Tồn kho',
        subtitle: 'Kiểm tra khả dụng & Điều chuyển',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Không có số liệu tồn kho khả dụng thời gian thực giữa các kho nhánh, dễ nhận đơn ảo.',
        systemSupport: 'Khả năng triển khai: Cấu hình quy tắc đồng bộ dữ liệu kho hoặc kết nối API với hệ thống WMS/kênh bán của doanh nghiệp.'
      },
      {
        stepNumber: 4,
        title: 'Giao hàng',
        subtitle: 'Bàn giao 3PL & Theo dõi COD',
        isBottleneck: false,
        systemSupport: 'Minh họa quy trình: Hỗ trợ kết nối API đơn vị vận chuyển, xuất mã vận đơn và cập nhật trạng thái giao nhận.'
      },
      {
        stepNumber: 5,
        title: 'Tái mua',
        subtitle: 'Chăm sóc, Loyalty & Upsell',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Bán xong là mất dấu khách hàng; không đo lường được chu kỳ tiêu dùng để nhắc mua lại.',
        systemSupport: 'Khả năng cấu hình: Lưu vết lịch sử tương tác và thiết lập kịch bản gửi tin nhắn chăm sóc định kỳ.'
      }
    ],
    configuredModules: [
      {
        scope: 'Scope B',
        moduleName: 'CRS / CRM Bán lẻ & Quản Lý Đơn Hàng',
        inputData: 'Hồ sơ người mua, số điện thoại, lịch sử đơn hàng, địa chỉ giao nhận.',
        coreProcess: 'Cấu hình luồng quản lý thông tin khách mua, lưu trữ lịch sử giao dịch và phân nhóm khách hàng theo quy tắc.',
        outputData: 'Thẻ khách hàng tập trung và danh sách đơn hàng đã phân bổ cho chi nhánh xử lý.'
      },
      {
        scope: 'Scope A',
        moduleName: 'Website & Cổng Tiếp Nhận Lead',
        inputData: 'Lưu lượng truy cập, hành vi xem sản phẩm, form đăng ký nhận ưu đãi.',
        coreProcess: 'Tiếp nhận thông tin từ form đăng ký, hỗ trợ ghi nhận dữ liệu giỏ hàng và gửi thông báo theo kịch bản.',
        outputData: 'Dữ liệu khách tiềm năng chuyển vào phễu bán hàng của CRM theo cấu hình luồng.'
      },
      {
        scope: 'Scope C',
        moduleName: 'Marketing Tự Động & Chăm Sóc Khách Hàng',
        inputData: 'Sản phẩm đã mua, thời gian hoàn thành đơn, điểm tích lũy thành viên.',
        coreProcess: 'Cấu hình kịch bản tin nhắn cảm ơn, hướng dẫn sử dụng và gợi ý sản phẩm phù hợp.',
        outputData: 'Quy trình chăm sóc khách hàng theo kịch bản định sẵn của doanh nghiệp.'
      },
      {
        scope: 'Scope J',
        moduleName: 'Báo Cáo & BI Phân Tích Bán Lẻ',
        inputData: 'Dữ liệu bán hàng theo ngày, kênh bán, cơ cấu sản phẩm và tỷ lệ hoàn đơn.',
        coreProcess: 'Trực quan hóa chỉ số doanh thu, cơ cấu đơn hàng và tỷ lệ mua lại dựa trên dữ liệu tích hợp.',
        outputData: 'Dashboard biểu đồ trực quan phục vụ chủ doanh nghiệp theo dõi và ra quyết định.'
      }
    ],
    aiSpecializedDemo: {
      title: 'Kịch bản AI minh họa: Gợi Ý Gói Bán Kèm & Cảnh Báo Tồn Kho An Toàn',
      problemContext: '[Kịch bản mô phỏng] Một khách hàng vừa thêm vào giỏ sản phẩm "Nồi chiên không dầu cao cấp". AI đọc dữ liệu được cấp quyền để gợi ý phụ kiện và đối chiếu ngưỡng tồn an toàn theo rule cấu hình.',
      inputLabel: 'Dữ liệu mô phỏng [Kịch bản minh họa]:',
      sampleInput: {
        'Mã đơn': 'ORD-TRD-8821 [Minh họa]',
        'Sản phẩm chính': 'Nồi chiên không dầu 6.5L Inox',
        'Kênh bán': 'Website Doanh Nghiệp (Direct)',
        'Khách hàng': 'Nguyễn Thu Trang (Khách cũ - Đã mua 2 đơn)',
        'Tồn kho hiện tại': 'Kho Hà Nội: 14 chiếc | Kho Đà Nẵng: 3 chiếc | Kho TP.HCM: 22 chiếc'
      },
      aiProcessing: 'AI đọc dữ liệu đơn hàng và định mức kho được cấp quyền, đối chiếu quy tắc cấu hình để đưa ra khuyến nghị...',
      aiOutput: {
        badge: 'Kịch bản AI minh họa: Đề xuất hỗ trợ bán hàng',
        summary: 'AI nhận diện khả năng mua kèm phụ kiện dựa trên quy tắc cấu hình và cảnh báo kho Đà Nẵng chạm ngưỡng an toàn tham chiếu.',
        recommendations: [
          'Gợi ý Combo: Giấy nến lót nồi chiên 100 tờ (+65.000đ) - Tồn kho tham khảo sẵn sàng 340 tệp.',
          'Gợi ý bảo hành mở rộng: Gói đổi mới 24 tháng (+180.000đ) - Đề xuất áp dụng với nhóm khách quen.'
        ],
        riskLevel: 'LOW',
        actionItems: [
          'Đề xuất nhân viên trực chat gửi nút chọn Combo cho khách trước khi xác nhận đơn.',
          'Gợi ý tạo phiếu đề xuất điều chuyển nội bộ giữa các kho để bù đắp đơn cuối tuần.'
        ]
      },
      disclaimer: 'Kịch bản AI minh họa phân tích trên dữ liệu giả lập. AI chỉ đọc dữ liệu được cấp quyền, phân tích và đề xuất trong phạm vi được cấu hình; quyết định thực tế do nhân sự phê duyệt.'
    },
    trackedKpis: [
      {
        metric: 'Tỷ lệ đơn hàng hủy do lệch kho (Out-of-Stock Cancellation)',
        formula: '(Số đơn hủy do hết hàng / Tổng đơn tiếp nhận) × 100% [Công thức tham khảo]',
        frequency: 'Theo dõi hàng ngày',
        targetBenchmark: '< 1.0% [Mục tiêu tham khảo]',
        businessImpact: 'Giảm thiểu tình trạng hủy đơn và nâng cao độ tin cậy của khách hàng.'
      },
      {
        metric: 'Tỷ lệ khách hàng mua lại (Repeat Purchase Rate)',
        formula: '(Số khách hàng có ≥ 2 đơn / Tổng số khách hàng tích lũy) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá hàng tháng',
        targetBenchmark: '25% - 40% [Mục tiêu tham khảo]',
        businessImpact: 'Tăng trưởng giá trị vòng đời khách hàng và tối ưu hiệu quả chi phí tiếp thị.'
      },
      {
        metric: 'Thời gian xử lý & xuất kho (Order Lead Time)',
        formula: 'Thời gian từ lúc tiếp nhận đơn đến khi bàn giao đơn vị vận chuyển [Đo lường tham khảo]',
        frequency: 'Theo dõi theo ca',
        targetBenchmark: '< 4 giờ làm việc [Mục tiêu tham khảo]',
        businessImpact: 'Rút ngắn thời gian hoàn tất đơn hàng và nâng cao mức độ hài lòng của khách mua.'
      }
    ],
    threeStageRoadmap: [
      {
        phase: 'Giai đoạn 1 (Tuần 1 - 3)',
        title: 'Khảo sát danh mục & Cấu hình hợp nhất đơn hàng đa kênh',
        timeline: 'Tuần 1 - Tuần 3',
        focus: 'Đưa thông tin sản phẩm, mã SKU và luồng đơn hàng từ các kênh về màn hình điều hành CRM theo cấu hình.',
        deliverables: [
          'Chuẩn hóa danh mục sản phẩm và bảng giá tham chiếu',
          'Cấu hình cổng nhận đơn đa kênh khi có API kết nối (Web, Sàn, Chatbox)',
          'Mẫu phiếu nhặt hàng và thông tin vận đơn chuẩn hóa'
        ]
      },
      {
        phase: 'Giai đoạn 2 (Tuần 4 - 7)',
        title: 'Cấu hình quy tắc tồn kho & Luồng kiểm soát giao nhận',
        timeline: 'Tuần 4 - Tuần 7',
        focus: 'Thiết lập quy tắc cảnh báo tồn kho an toàn, hỗ trợ luồng đối soát giao nhận và doanh thu COD.',
        deliverables: [
          'Quy tắc cảnh báo tồn kho an toàn có thể cấu hình theo điểm kho',
          'Luồng đối soát số dư đối tác vận chuyển định kỳ',
          'Phân quyền tài khoản theo vai trò nhân viên kho và bán hàng'
        ]
      },
      {
        phase: 'Giai đoạn 3 (Tuần 8 - 12)',
        title: 'Kích hoạt kịch bản chăm sóc & Báo cáo phân tích BI',
        timeline: 'Tuần 8 - Tuần 12',
        focus: 'Ứng dụng kịch bản nuôi dưỡng khách cũ, chấm điểm khách hàng tiềm năng và cấu hình dashboard phân tích.',
        deliverables: [
          'Kịch bản tin nhắn sau bán hàng và khảo sát CSAT theo quy tắc cấu hình',
          'Bảng điều khiển BI trực quan hóa số liệu bán lẻ theo nhóm hàng',
          'Tài liệu hướng dẫn vận hành SOP chuyển giao cho doanh nghiệp'
        ]
      }
    ]
  },

  service: {
    slug: 'service',
    name: 'Dịch vụ chuyên nghiệp',
    tagline: 'Quản lý lịch tư vấn, kiểm soát phạm vi hợp đồng dịch vụ và chuẩn hóa quy trình nghiệm thu bàn giao',
    sectorCode: 'IND-SRV-02',
    heroProblemSummary: 'Công ty tư vấn, thiết kế, luật và dịch vụ kỹ thuật thường gặp khó khăn trong việc theo dõi khối lượng công việc thực tế của từng chuyên gia. Lịch hẹn tư vấn dễ bị trùng, phạm vi công việc bị khách hàng yêu cầu thêm ngoài hợp đồng nhưng không được ghi nhận, dẫn đến chậm tiến độ nghiệm thu và đọng công nợ.',
    operatingSnapshot: {
      dailyVolume: '10 - 50 hợp đồng dịch vụ đang triển khai song song [Kịch bản mô phỏng]',
      primaryChannels: 'Lịch hẹn tư vấn 1-1, Họp dự án trực tuyến, Biên bản nghiệm thu',
      keyConstraint: 'Kiểm soát chặt chẽ phạm vi thỏa thuận (Scope of Work) theo kịch bản cấu hình tránh phát sinh không tính phí',
      complianceNote: 'Lưu vết biên bản họp và chữ ký xác nhận từng mốc nghiệm thu kỹ thuật'
    },
    dailyOperation: [
      {
        time: '08:30',
        title: 'Rà soát lịch hẹn tư vấn và tải công việc của chuyên gia',
        actor: 'Trưởng phòng Nghiệp vụ',
        desc: 'Kiểm tra lịch tư vấn trong ngày của các chuyên viên, rà soát hồ sơ yêu cầu sơ bộ của khách hàng.',
        systemAction: 'Minh họa quy trình: Hỗ trợ gửi thông báo nhắc lịch họp kèm đường dẫn tài liệu khảo sát theo cấu hình.'
      },
      {
        time: '10:00',
        title: 'Họp tư vấn chuyên sâu & Thu thập yêu cầu chi tiết',
        actor: 'Chuyên gia tư vấn & Đại diện khách hàng',
        desc: 'Lắng nghe nhu cầu thực tế, xác định mục tiêu và phạm vi cung cấp dịch vụ (Scope of Work).',
        systemAction: 'Kịch bản ứng dụng: Ghi nhận tóm tắt nội dung trao đổi và danh mục các đầu việc cần làm vào hồ sơ cơ hội CRM.'
      },
      {
        time: '13:30',
        title: 'Lập đề xuất dịch vụ & Trình ký hợp đồng điện tử',
        actor: 'Bộ phận Kinh doanh Dịch vụ',
        desc: 'Xuất hợp đồng dịch vụ theo biểu mẫu pháp lý chuẩn, quy định rõ ràng số lần chỉnh sửa và mốc thanh toán.',
        systemAction: 'Minh họa quy trình: Hỗ trợ luồng gửi hợp đồng cho cấp quản lý phê duyệt điều khoản thanh toán trước khi gửi khách hàng.'
      },
      {
        time: '15:30',
        title: 'Phân bổ nhân sự thực thi & Khởi tạo dự án triển khai',
        actor: 'Quản lý Dự án (PM)',
        desc: 'Tách hợp đồng thành các gói công việc cụ thể, gán trách nhiệm thực hiện và thời hạn hoàn thành.',
        systemAction: 'Kịch bản ứng dụng: Hỗ trợ tạo danh mục task trên phân hệ Scope G và thông báo đến các thành viên phụ trách.'
      },
      {
        time: '18:00',
        title: 'Lập biên bản nghiệm thu giai đoạn & Đối soát phát sinh',
        actor: 'Trưởng nhóm Dự án & Khách hàng',
        desc: 'Ký xác nhận hoàn thành giai đoạn 1, ghi nhận các yêu cầu phát sinh ngoài hợp đồng vào phụ lục.',
        systemAction: 'Minh họa quy trình: Hỗ trợ chuyển thông tin nghiệm thu sang phân hệ Kế toán/tài chính để xuất hóa đơn và đối soát thanh toán.'
      }
    ],
    journeyVisualFlow: [
      {
        stepNumber: 1,
        title: 'Lịch tư vấn',
        subtitle: 'Tiếp nhận & Sắp xếp chuyên gia',
        isBottleneck: false,
        systemSupport: 'Khả năng cấu hình: Cổng đăng ký lịch tư vấn trực tuyến, cấu hình khung giờ chuyên gia bận khi kết nối lịch làm việc.'
      },
      {
        stepNumber: 2,
        title: 'Hợp đồng',
        subtitle: 'Chốt phạm vi & Điều khoản thanh toán',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Soạn thảo hợp đồng thủ công dễ sót điều khoản giới hạn số lần sửa đổi hoặc mốc bàn giao.',
        systemSupport: 'Khả năng triển khai: Thư viện mẫu hợp đồng chuẩn hóa; kiểm soát điều khoản thanh toán theo từng mốc công việc cấu hình.'
      },
      {
        stepNumber: 3,
        title: 'Phân bổ người',
        subtitle: 'Gán task theo năng lực & Giờ công',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Giao việc qua tin nhắn rời rạc, không theo dõi được chuyên gia nào đang quá tải hoặc chậm việc.',
        systemSupport: 'Minh họa quy trình: Bảng phân bổ tải công việc trực quan; theo dõi giờ công thực tế so với định mức dự toán khi nhập liệu.'
      },
      {
        stepNumber: 4,
        title: 'Nghiệm thu',
        subtitle: 'Bàn giao, Xác nhận & Thu phí',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Khách hàng chậm ký nghiệm thu do tranh cãi về phạm vi phát sinh, dẫn đến đọng vốn.',
        systemSupport: 'Khả năng cấu hình: Biên bản nghiệm thu điện tử lưu vết chi tiết từng hạng mục công việc đã thực hiện.'
      }
    ],
    configuredModules: [
      {
        scope: 'Scope B',
        moduleName: 'CRM Quản Trị Cơ Hội & Lịch Hẹn',
        inputData: 'Thông tin doanh nghiệp đối tác, người liên hệ, nhu cầu khảo sát và lịch sử trao đổi.',
        coreProcess: 'Cấu hình theo dõi tiến trình đàm phán hợp đồng, phân loại độ chín của cơ hội dịch vụ và hỗ trợ xếp lịch họp khi tích hợp.',
        outputData: 'Hồ sơ khách hàng dịch vụ đầy đủ và thông báo lịch hẹn được cập nhật vào lịch làm việc.'
      },
      {
        scope: 'Scope G',
        moduleName: 'Quản Trị Tiến Độ Task & Dự Án',
        inputData: 'Hạng mục hợp đồng, nhân sự phụ trách, thời hạn hoàn thành cam kết.',
        coreProcess: 'Cấu hình chia nhỏ hợp đồng thành các mốc tiến độ (Milestones); hỗ trợ giám sát thời gian hoàn thành task của từng cá nhân.',
        outputData: 'Bảng trạng thái tiến độ dự án phục vụ báo cáo định kỳ cho khách hàng.'
      },
      {
        scope: 'Scope D',
        moduleName: 'Tiếp Nhận Ticket & Phản Hồi',
        inputData: 'Yêu cầu hỗ trợ sau bàn giao, phản hồi chất lượng chuyên gia, yêu cầu điều chỉnh tài liệu.',
        coreProcess: 'Tập trung các yêu cầu phát sinh vào một cổng duy nhất, phân loại theo độ khẩn cấp và giao người xử lý theo quy tắc.',
        outputData: 'Báo cáo chất lượng cung cấp dịch vụ và lịch sử phản hồi minh bạch.'
      },
      {
        scope: 'Scope H',
        moduleName: 'Kho Tri Thức & Biểu Mẫu Chuẩn',
        inputData: 'Biểu mẫu hợp đồng dịch vụ, quy chế tính chi phí phát sinh, tài liệu đào tạo nội bộ.',
        coreProcess: 'Lưu trữ phiên bản chính thức các tài liệu nghiệp vụ, phân quyền cho nhân viên truy cập đúng cấp độ.',
        outputData: 'Đảm bảo toàn bộ đội ngũ áp dụng chung một chuẩn mực làm việc chuyên nghiệp.'
      }
    ],
    aiSpecializedDemo: {
      title: 'Kịch bản AI minh họa: Hỗ Trợ Rà Soát Lệch Phạm Vi Hợp Đồng & Tóm Tắt Họp Tư Vấn',
      problemContext: '[Kịch bản mô phỏng] Sau buổi họp tư vấn triển khai, khách hàng đề xuất bổ sung thêm 3 báo cáo phân tích chuyên sâu không nằm trong thỏa thuận ban đầu. AI đọc dữ liệu được cấp quyền để nhận diện sự chênh lệch so với phạm vi thỏa thuận ban đầu.',
      inputLabel: 'Biên bản tóm tắt nội dung trao đổi sau cuộc họp [Kịch bản minh họa]:',
      sampleInput: {
        'Hợp đồng gốc': 'HD-SRV-2026/04 [Minh họa] - Tư vấn tái cấu trúc quy trình bán hàng',
        'Phạm vi ban đầu': '01 Bộ tài liệu SOP bán hàng + 02 Buổi tập huấn nhân viên (Tối đa 15 người)',
        'Yêu cầu mới từ khách': 'Khách muốn thêm 03 Báo cáo BI động theo tuần và hỗ trợ trực tiếp tại văn phòng trong 30 ngày',
        'Ghi chú chuyên viên': 'Đại diện khách hàng đề xuất đưa vào phạm vi hợp đồng hiện tại mà không tăng phí'
      },
      aiProcessing: 'AI đọc dữ liệu yêu cầu mới và phạm vi công việc được cấp quyền, đối chiếu quy tắc cấu hình để đưa ra khuyến nghị...',
      aiOutput: {
        badge: 'Kịch bản AI minh họa: Cảnh báo lệch phạm vi (Scope Creep)',
        summary: 'AI nhận diện 02 hạng mục mới nằm ngoài phạm vi thỏa thuận ban đầu của Hợp đồng HD-SRV-2026/04 theo quy tắc cấu hình.',
        recommendations: [
          'Hạng mục vượt phạm vi: Xây dựng 03 Báo cáo BI động (Ước tính thêm 40 giờ kỹ thuật tham khảo).',
          'Hạng mục vượt phạm vi: Onsite 30 ngày làm việc (Vượt quá 02 buổi tập huấn cam kết).'
        ],
        riskLevel: 'HIGH',
        actionItems: [
          'Gợi ý soạn thảo dự thảo Phụ lục Hợp đồng số 01 kèm đơn giá bổ sung theo định mức tham khảo.',
          'Gợi ý trưởng nhóm gửi email phản hồi khách hàng theo mẫu chuẩn mực, tách biệt giai đoạn 1 và giai đoạn 2.'
        ]
      },
      disclaimer: 'Kịch bản AI minh họa phân tích trên dữ liệu giả lập. AI chỉ đọc dữ liệu được cấp quyền, phân tích và đề xuất trong phạm vi được cấu hình; quyết định thực tế do nhân sự phê duyệt.'
    },
    trackedKpis: [
      {
        metric: 'Tỷ lệ hoàn thành mốc nghiệm thu đúng hạn (Milestone On-Time)',
        formula: '(Số mốc nghiệm thu đúng hạn / Tổng số mốc cam kết) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá hàng tuần',
        targetBenchmark: '≥ 90% [Mục tiêu tham khảo]',
        businessImpact: 'Giữ vững dòng tiền thanh toán và uy tín cam kết với khách hàng doanh nghiệp.'
      },
      {
        metric: 'Tỷ lệ giờ công sinh doanh thu (Billable Utilization Rate)',
        formula: '(Tổng số giờ tính phí cho khách / Tổng số giờ làm việc thực tế) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá theo tháng',
        targetBenchmark: '65% - 75% [Mục tiêu tham khảo]',
        businessImpact: 'Tối ưu hóa chi phí nhân sự chuyên gia và nâng cao biên lợi nhuận của từng dự án.'
      },
      {
        metric: 'Mức độ hài lòng của khách hàng sau dự án (CSAT)',
        formula: 'Điểm đánh giá trung bình theo thang 5 sao sau biên bản nghiệm thu cuối cùng [Đo lường tham khảo]',
        frequency: 'Theo dõi theo từng dự án',
        targetBenchmark: '≥ 4.7 / 5.0 [Mục tiêu tham khảo]',
        businessImpact: 'Tạo nguồn khách hàng giới thiệu tự nhiên (Referral) và hợp đồng gia hạn dịch vụ hàng năm.'
      }
    ],
    threeStageRoadmap: [
      {
        phase: 'Giai đoạn 1 (Tuần 1 - 3)',
        title: 'Khảo sát quy trình & Chuẩn hóa hợp đồng dịch vụ',
        timeline: 'Tuần 1 - Tuần 3',
        focus: 'Đưa lịch tư vấn, danh sách chuyên gia và biểu mẫu đề xuất dịch vụ lên hệ thống tập trung theo cấu hình.',
        deliverables: [
          'Cổng đặt lịch hẹn tư vấn và luồng phân công chuyên gia theo kịch bản',
          'Thư viện biểu mẫu hợp đồng dịch vụ chuẩn hóa',
          'Khung giá dịch vụ và chính sách thanh toán theo mốc cấu hình'
        ]
      },
      {
        phase: 'Giai đoạn 2 (Tuần 4 - 7)',
        title: 'Cấu hình tiến độ thực thi & Kiểm soát mốc nghiệm thu',
        timeline: 'Tuần 4 - Tuần 7',
        focus: 'Triển khai công cụ giao việc theo dự án, ghi nhận giờ công và liên kết mốc nghiệm thu với đối soát thanh toán.',
        deliverables: [
          'Quy trình giao việc và theo dõi tiến độ từng hợp đồng',
          'Biên bản nghiệm thu điện tử và luồng duyệt nội bộ',
          'Cổng tiếp nhận yêu cầu hỗ trợ và phản hồi của khách'
        ]
      },
      {
        phase: 'Giai đoạn 3 (Tuần 8 - 12)',
        title: 'Kích hoạt kịch bản AI rà soát & Báo cáo hiệu suất',
        timeline: 'Tuần 8 - Tuần 12',
        focus: 'Ứng dụng AI hỗ trợ rà soát lệch phạm vi công việc, tóm tắt nội dung họp và phân tích tỷ suất sinh lời gói dịch vụ.',
        deliverables: [
          'Kịch bản AI hỗ trợ tóm tắt biên bản họp và phát hiện điểm nghẽn dự án',
          'Dashboard BI hiệu suất nhân sự và phân tích doanh thu dịch vụ',
          'Quy chế quản trị tri thức kinh nghiệm sau mỗi dự án'
        ]
      }
    ]
  },

  education: {
    slug: 'education',
    name: 'Giáo dục & Đào tạo',
    tagline: 'Quản lý phễu tuyển sinh thông minh, điều phối lịch giảng dạy và số hóa tài liệu học tập',
    sectorCode: 'IND-EDU-03',
    heroProblemSummary: 'Các trung tâm đào tạo, học viện và tổ chức giáo dục thường đối mặt với lượng lead đăng ký đổ về dồn dập vào mùa cao điểm tuyển sinh. Nếu không phân bổ và liên hệ kịp thời, học viên sẽ chọn đơn vị khác. Bên cạnh đó, việc xếp lớp, theo dõi học phí phân kỳ và quản lý học liệu bằng file rời rạc thường gây thất thoát và tốn nhiều công sức.',
    operatingSnapshot: {
      dailyVolume: '100 - 1.000 lead tuyển sinh/tháng tùy theo đợt khai giảng [Kịch bản mô phỏng]',
      primaryChannels: 'Landing page quảng cáo, Form sự kiện, Tư vấn qua điện thoại, Nhóm hỗ trợ lớp',
      keyConstraint: 'Quy tắc phân bổ tư vấn viên trong vòng 15 phút đầu tiên theo cấu hình luồng',
      complianceNote: 'Bảo mật hồ sơ cá nhân của học viên và hóa đơn điện tử học phí theo quy định'
    },
    dailyOperation: [
      {
        time: '08:00',
        title: 'Tiếp nhận và phân luồng lead tuyển sinh sáng sớm',
        actor: 'Trưởng nhóm Tư vấn Tuyển sinh',
        desc: 'Kịch bản đề xuất phân loại mức độ quan tâm của lead dựa trên khóa học đăng ký và thời gian để lại thông tin.',
        systemAction: 'Minh họa quy trình: Hỗ trợ phân bổ theo ca trực cho các tư vấn viên theo cấu hình quy tắc.'
      },
      {
        time: '09:30',
        title: 'Tư vấn lộ trình học tập & Xếp lịch kiểm tra đầu vào',
        actor: 'Tư vấn viên (Admissions Consultant)',
        desc: 'Gọi điện tìm hiểu trình độ hiện tại, mục tiêu học tập và xếp lịch làm bài đánh giá năng lực.',
        systemAction: 'Kịch bản ứng dụng: Hỗ trợ gửi tin nhắn xác nhận kèm đường dẫn làm bài đánh giá năng lực theo kịch bản cấu hình.'
      },
      {
        time: '11:30',
        title: 'Điều phối xếp lớp & Gán giảng viên phụ trách',
        actor: 'Bộ phận Học vụ (Academic Affairs)',
        desc: 'Dựa trên kết quả bài đánh giá và khung giờ đăng ký của học viên để đối chiếu với danh sách lớp mở theo kế hoạch.',
        systemAction: 'Minh họa quy trình: Hỗ trợ kiểm tra chỉ tiêu sĩ số phòng học hoặc lớp trực tuyến theo định mức cấu hình.'
      },
      {
        time: '14:00',
        title: 'Ghi nhận điểm danh & Cảnh báo học viên vắng mặt',
        actor: 'Trợ giảng (TA) / Giảng viên',
        desc: 'Ghi nhận trạng thái tham gia buổi học và các trường hợp vắng mặt vào bảng theo dõi Scope G.',
        systemAction: 'Kịch bản ứng dụng: Hỗ trợ kích hoạt kịch bản gửi tin nhắn hỏi thăm và liên kết bài học ghi lại cho học viên vắng có phép.'
      },
      {
        time: '17:00',
        title: 'Nhắc lịch đóng học phí phân kỳ & Khảo sát chất lượng',
        actor: 'Kế toán Học vụ',
        desc: 'Rà soát danh sách học viên đến hạn đóng học phí đợt tiếp theo trước khi kết thúc học phần.',
        systemAction: 'Minh họa quy trình: Hỗ trợ thông báo nhắc lịch học phí định kỳ qua tin nhắn theo cấu hình mốc thanh toán.'
      }
    ],
    journeyVisualFlow: [
      {
        stepNumber: 1,
        title: 'Lead tuyển sinh',
        subtitle: 'Quảng cáo, Form, Sự kiện',
        isBottleneck: false,
        systemSupport: 'Tiếp nhận webhook thông tin đăng ký từ landing page, fanpage và website vào CRM khi có kết nối.'
      },
      {
        stepNumber: 2,
        title: 'Tư vấn',
        subtitle: 'Khảo sát nhu cầu & Phân loại',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Tư vấn viên gọi chậm quá 2 tiếng khiến tỷ lệ kết nối thành công giảm hơn 50%.',
        systemSupport: 'Khả năng cấu hình: Thiết lập quy tắc chấm điểm mức độ quan tâm và phân bổ theo ca trực của nhân sự.'
      },
      {
        stepNumber: 3,
        title: 'Xếp lớp',
        subtitle: 'Ghép lịch, Phòng & Giảng viên',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Trùng lịch giảng viên hoặc phân lớp không đồng đều trình độ gây khiếu nại.',
        systemSupport: 'Minh họa quy trình: Hỗ trợ bảng điều phối lịch học và cảnh báo trùng lịch giảng viên theo dữ liệu nhập.'
      },
      {
        stepNumber: 4,
        title: 'Học',
        subtitle: 'Giảng dạy, Điểm danh & Tài liệu',
        isBottleneck: false,
        systemSupport: 'Khả năng triển khai: Kho tài liệu số hóa tập trung phân quyền theo nhóm lớp; có thể tích hợp với hệ thống LMS sẵn có của đơn vị đào tạo.'
      },
      {
        stepNumber: 5,
        title: 'Học phí',
        subtitle: 'Đối soát đợt thu & Xuất hóa đơn',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Theo dõi học phí bằng sổ tay dẫn đến sai lệch công nợ và tranh chấp với phụ huynh.',
        systemSupport: 'Minh họa quy trình: Hỗ trợ theo dõi các đợt thu học phí theo mốc và ghi nhận trạng thái thanh toán khi tích hợp cổng đối soát.'
      },
      {
        stepNumber: 6,
        title: 'Phản hồi',
        subtitle: 'Khảo sát CSAT & Tái đăng ký',
        isBottleneck: false,
        systemSupport: 'Khả năng cấu hình: Thiết lập kịch bản gửi biểu mẫu khảo sát chất lượng giảng dạy và gợi ý khóa học tiếp theo.'
      }
    ],
    configuredModules: [
      {
        scope: 'Scope B',
        moduleName: 'CRM Tuyển Sinh & Quản Lý Học Viên',
        inputData: 'Hồ sơ ứng viên, khóa học quan tâm, số điện thoại, kết quả bài test đầu vào.',
        coreProcess: 'Cấu hình quản lý hành trình từ khi còn là lead đến khi nhập học; lưu trữ hồ sơ học viên theo quy trình.',
        outputData: 'Danh sách học viên theo từng lớp và tiến độ chăm sóc của từng tư vấn viên.'
      },
      {
        scope: 'Scope H',
        moduleName: 'Kho Tri Thức & Học Liệu Số',
        inputData: 'Giáo trình điện tử, video bài giảng, cẩm nang nghiệp vụ và đề thi mẫu.',
        coreProcess: 'Tổ chức kho tài nguyên đào tạo có cấu trúc, tìm kiếm nhanh và phân quyền truy cập theo cấp độ.',
        outputData: 'Học viên và giảng viên tiếp cận đúng tài liệu cần thiết theo phân quyền tài khoản.'
      },
      {
        scope: 'Scope E',
        moduleName: 'Quản Lý Học Phí & Thu Chi Phân Kỳ',
        inputData: 'Chính sách học phí, học bổng ưu đãi, lịch thanh toán từng đợt của học viên.',
        coreProcess: 'Cấu hình theo dõi kế hoạch thu học phí nhiều đợt, hỗ trợ đối chiếu thông tin chuyển khoản và cập nhật trạng thái đóng phí.',
        outputData: 'Báo cáo doanh thu đào tạo và danh sách học viên đến hạn thanh toán cần liên hệ.'
      },
      {
        scope: 'Scope D',
        moduleName: 'Chăm Sóc Học Viên & Hỗ Trợ Học Vụ',
        inputData: 'Yêu cầu bảo lưu, đổi lịch học, đánh giá chất lượng buổi giảng và khiếu nại dịch vụ.',
        coreProcess: 'Tiếp nhận yêu cầu học vụ qua cổng tập trung, phân luồng đến bộ phận có thẩm quyền xử lý theo quy định.',
        outputData: 'Học viên được phản hồi thông tin kịp thời, nâng cao sự gắn kết với trung tâm.'
      }
    ],
    aiSpecializedDemo: {
      title: 'Kịch bản AI minh họa: Gợi Ý Xếp Lớp & Đánh Giá Ý Định Học Viên',
      problemContext: '[Kịch bản mô phỏng] Một học viên vừa làm bài kiểm tra tiếng Anh sơ bộ và bày tỏ mong muốn học vào buổi tối trong tuần. AI đọc dữ liệu được cấp quyền để phân tích mức độ ưu tiên và gợi ý 2 lớp học có lịch phù hợp trong danh mục.',
      inputLabel: 'Dữ liệu học viên mô phỏng [Kịch bản minh họa]:',
      sampleInput: {
        'Họ tên': 'Trần Hoàng Long [Dữ liệu mô phỏng]',
        'Khóa học đăng ký': 'IELTS Chuyên Sâu Mục Tiêu 6.5',
        'Kết quả bài test': 'Listening: 5.0 | Reading: 5.5 | Viết: 4.5 (Tổng thể tham khảo: Band 5.0)',
        'Khung giờ rảnh': 'Tối Thứ 3 - Thứ 5 - Thứ 7 (Sau 18:30)',
        'Mục tiêu thời gian': 'Cần chứng chỉ trước tháng 12 để nộp hồ sơ du học'
      },
      aiProcessing: 'AI đọc thông tin đầu vào và lịch lớp mở được cấp quyền, đối chiếu quy tắc cấu hình để đưa ra gợi ý...',
      aiOutput: {
        badge: 'Kịch bản AI minh họa: Gợi ý tư vấn tuyển sinh',
        summary: 'AI nhận diện học viên có nhu cầu cấp bách do mốc thời gian rõ ràng. Đề xuất phân khúc Pre-IELTS theo quy tắc cấu hình.',
        recommendations: [
          'Lớp đề xuất 1: IELTS-K42 (Khai giảng tham khảo 18/09) - Lịch học T3/T5/T7 (19:00 - 21:00) - Sĩ số khả dụng tham khảo 3 chỗ.',
          'Lớp đề xuất 2: IELTS-FastTrack (Khai giảng tham khảo 22/09) - Tăng tốc 4 buổi/tuần theo mục tiêu gấp.'
        ],
        riskLevel: 'LOW',
        actionItems: [
          'Gợi ý tư vấn viên liên hệ với kịch bản tập trung vào mốc thời gian hoàn thành mục tiêu du học.',
          'Gợi ý gửi tài liệu lộ trình tham khảo vào kênh tương tác của học viên kèm chính sách ưu đãi.'
        ]
      },
      disclaimer: 'Kịch bản AI minh họa phân tích trên dữ liệu giả lập. AI chỉ đọc dữ liệu được cấp quyền, phân tích và đề xuất trong phạm vi được cấu hình; quyết định thực tế do nhân sự phê duyệt.'
    },
    trackedKpis: [
      {
        metric: 'Tỷ lệ chuyển đổi Lead sang Học viên (Lead-to-Student Rate)',
        formula: '(Số học viên đăng ký nhập học / Tổng số lead hợp lệ tiếp nhận) × 100% [Công thức tham khảo]',
        frequency: 'Theo dõi theo chiến dịch',
        targetBenchmark: '15% - 25% [Mục tiêu tham khảo]',
        businessImpact: 'Tối ưu hóa ngân sách tiếp thị số và đánh giá năng lực của đội ngũ tư vấn tuyển sinh.'
      },
      {
        metric: 'Tỷ lệ học viên hoàn thành khóa học (Course Completion Rate)',
        formula: '(Số học viên tham gia ≥ 80% số buổi / Tổng số học viên nhập học) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá theo khóa học',
        targetBenchmark: '≥ 85% [Mục tiêu tham khảo]',
        businessImpact: 'Thước đo chất lượng giảng dạy thực chất và tiền đề cho tỷ lệ tái đăng ký lên trình độ tiếp theo.'
      },
      {
        metric: 'Tỷ lệ thu học phí đúng hạn (Tuition On-Time Collection)',
        formula: '(Số tiền học phí thu đúng hạn / Tổng học phí đến hạn theo hợp đồng) × 100% [Công thức tham khảo]',
        frequency: 'Theo dõi hàng tháng',
        targetBenchmark: '≥ 95% [Mục tiêu tham khảo]',
        businessImpact: 'Bảo đảm cân đối chi trả thù lao giảng viên và chi phí mặt bằng cơ sở vật chất.'
      }
    ],
    threeStageRoadmap: [
      {
        phase: 'Giai đoạn 1 (Tuần 1 - 3)',
        title: 'Khảo sát phễu & Hợp nhất dữ liệu tuyển sinh',
        timeline: 'Tuần 1 - Tuần 3',
        focus: 'Gom lead từ các kênh quảng cáo về giao diện CRM theo cấu hình; thiết lập quy tắc chia lead theo ca trực.',
        deliverables: [
          'Kết nối form landing page và các trang truyền thông khi có webhook',
          'Cấu hình phễu tuyển sinh với các trạng thái rõ ràng',
          'Mẫu tin nhắn xác nhận đăng ký và lịch hẹn theo kịch bản cấu hình'
        ]
      },
      {
        phase: 'Giai đoạn 2 (Tuần 4 - 7)',
        title: 'Cấu hình quản lý lớp học & Luồng theo dõi học phí',
        timeline: 'Tuần 4 - Tuần 7',
        focus: 'Triển khai công cụ theo dõi lớp học, ghi nhận điểm danh và thiết lập mốc theo dõi các đợt đóng học phí.',
        deliverables: [
          'Bảng quản lý danh mục lớp học, giảng viên và phòng học',
          'Cơ chế nhắc lịch học phí theo kịch bản tin nhắn cấu hình',
          'Kho học liệu số phân quyền theo từng môn học'
        ]
      },
      {
        phase: 'Giai đoạn 3 (Tuần 8 - 12)',
        title: 'Kích hoạt kịch bản AI tư vấn & Báo cáo tuyển sinh',
        timeline: 'Tuần 8 - Tuần 12',
        focus: 'Ứng dụng AI phân loại mức độ quan tâm của lead, gợi ý lớp học phù hợp và cấu hình dashboard phân tích.',
        deliverables: [
          'Kịch bản AI hỗ trợ đánh giá nhu cầu học tập của học viên mới',
          'Dashboard BI phân tích chi phí tuyển sinh trên từng học viên (CAC)',
          'Tài liệu hướng dẫn quy trình vận hành cho khối Học vụ và Tuyển sinh'
        ]
      }
    ]
  },

  'real-estate': {
    slug: 'real-estate',
    name: 'Bất động sản',
    tagline: 'Bảo mật giỏ hàng dự án, phân quyền nguồn khách minh bạch và kiểm soát quy trình đặt cọc',
    sectorCode: 'IND-RES-04',
    heroProblemSummary: 'Doanh nghiệp môi giới và phân phối bất động sản thường đau đầu vì tranh chấp nguồn khách hàng giữa các chuyên viên kinh doanh. Giỏ hàng sản phẩm (căn hộ, đất nền) cập nhật chậm qua file Excel dẫn đến tình trạng hai chuyên viên cùng tư vấn hoặc cùng chốt một căn, gây mất uy tín với chủ đầu tư và khách hàng.',
    operatingSnapshot: {
      dailyVolume: 'Hàng trăm sản phẩm trong giỏ hàng phân phối [Kịch bản mô phỏng]',
      primaryChannels: 'Hội thảo mở bán, Khách tiếp cận trực tiếp, Môi giới liên kết, Website dự án',
      keyConstraint: 'Cơ chế phân quyền bảo mật dữ liệu chủ sở hữu và chống tranh chấp nguồn khách theo quy tắc cấu hình',
      complianceNote: 'Tuân thủ quy trình thỏa thuận giữ chỗ, đặt cọc và nhật ký kiểm toán (Audit Trail)'
    },
    dailyOperation: [
      {
        time: '08:00',
        title: 'Cập nhật bảng hàng và trạng thái căn trống thời gian thực',
        actor: 'Bộ phận Admin Giỏ Hàng',
        desc: 'Rà soát danh mục các căn hết hạn giữ chỗ theo mốc thời gian quy định để cập nhật trạng thái Khả dụng.',
        systemAction: 'Minh họa quy trình: Hỗ trợ cập nhật màu sắc sơ đồ mặt bằng (Block/Floor) trên bảng quản trị Scope B.'
      },
      {
        time: '10:00',
        title: 'Đăng ký bảo vệ quyền nguồn khách hàng tiềm năng',
        actor: 'Chuyên viên Môi giới (Broker)',
        desc: 'Nhập thông tin liên hệ và nhu cầu của khách vào CRM để thiết lập thời hạn phụ trách theo quy định nội bộ.',
        systemAction: 'Kịch bản ứng dụng: Cấu hình quy tắc kiểm tra trùng lặp số điện thoại đã lưu trong hệ thống.'
      },
      {
        time: '11:30',
        title: 'Khớp nhu cầu khách hàng với giỏ hàng khả dụng',
        actor: 'Chuyên viên Môi giới & Khách mua',
        desc: 'Lọc nhanh các sản phẩm đáp ứng tiêu chí về tầm tài chính, hướng cửa, tầng và tiến độ thanh toán trong danh mục.',
        systemAction: 'Minh họa quy trình: Hỗ trợ xuất bảng tính dòng tiền và chính sách chiết khấu tham khảo theo biểu mẫu.'
      },
      {
        time: '14:30',
        title: 'Thực hiện thao tác giữ chỗ (Lock căn) có thời hạn',
        actor: 'Trưởng nhóm Bán hàng & Admin',
        desc: 'Khi khách chọn được sản phẩm, môi giới kích hoạt lệnh giữ chỗ có thời hạn để chuẩn bị hoàn tất thủ tục.',
        systemAction: 'Minh họa quy trình: Hỗ trợ chuyển trạng thái căn sang Đang giữ chỗ và cập nhật quyền hiển thị cho đội ngũ.'
      },
      {
        time: '17:00',
        title: 'Xác nhận chuyển cọc & Soạn thảo thỏa thuận đặt cọc',
        actor: 'Kế toán Bán hàng & Pháp chế',
        desc: 'Kiểm tra thông tin chuyển khoản đặt cọc theo quy trình, lập phiếu thu và biên bản thỏa thuận theo mẫu.',
        systemAction: 'Kịch bản ứng dụng: Cập nhật trạng thái căn sang Đã ký cọc và hỗ trợ ghi nhận số liệu hoa hồng dự kiến theo cấu hình.'
      }
    ],
    journeyVisualFlow: [
      {
        stepNumber: 1,
        title: 'Giỏ hàng',
        subtitle: 'Sơ đồ mặt bằng & Tình trạng căn',
        isBottleneck: false,
        systemSupport: 'Khả năng cấu hình: Quản trị danh mục sản phẩm tập trung, hỗ trợ hiển thị các trạng thái: Trống, Giữ chỗ, Đã cọc, Đã ký HĐ.'
      },
      {
        stepNumber: 2,
        title: 'Khớp nhu cầu',
        subtitle: 'Lọc tài chính, Hướng & Pháp lý',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Môi giới tìm kiếm thủ công trong hàng trăm file Excel, mất cơ hội tư vấn khi khách đang cần gấp.',
        systemSupport: 'Khả năng triển khai: Cấu hình bộ lọc đa tiêu chí; hỗ trợ công thức tính toán dòng tiền tham khảo.'
      },
      {
        stepNumber: 3,
        title: 'Quyền nguồn khách',
        subtitle: 'Chống trùng & Phân quyền bảo mật',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Tranh chấp nội bộ gay gắt khi hai môi giới cùng chăm sóc một khách do thiếu cơ chế khóa nguồn.',
        systemSupport: 'Khả năng cấu hình: Thiết lập quy tắc kiểm tra trùng số điện thoại và chuyển quyền chăm sóc khi quá hạn.'
      },
      {
        stepNumber: 4,
        title: 'Cọc / Hợp đồng',
        subtitle: 'Khóa căn, Nhận tiền & Pháp lý',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Căn đã có người cọc nhưng chưa cập nhật kịp, dẫn đến sự cố bán đè gây khiếu kiện.',
        systemSupport: 'Minh họa quy trình: Hỗ trợ cơ chế khóa trạng thái căn tạm thời qua phân hệ Scope B và lưu vết lịch sử thao tác.'
      }
    ],
    configuredModules: [
      {
        scope: 'Scope B',
        moduleName: 'CRM Quản Trị Cơ Hội & Danh Mục Sản Phẩm',
        inputData: 'Danh mục dự án, tòa, căn hộ, giá bán tham chiếu, chính sách chiết khấu, hồ sơ khách mua.',
        coreProcess: 'Cấu hình quản trị danh mục sản phẩm theo sơ đồ; hỗ trợ thiết lập quy tắc bảo vệ nguồn khách theo quy chế doanh nghiệp.',
        outputData: 'Bảng hàng minh bạch, hạn chế bán trùng và ghi nhận doanh số cho từng chuyên viên.'
      },
      {
        scope: 'Scope A',
        moduleName: 'Cổng Thông Tin Dự Án & Đăng Ký Xem Nhà',
        inputData: 'Thông tin dự án, mặt bằng căn mẫu, form đăng ký tải bảng giá và đăng ký tham quan.',
        coreProcess: 'Tiếp nhận thông tin khách quan tâm từ các chiến dịch, hỗ trợ phân luồng về CRM theo chi nhánh/sàn trực.',
        outputData: 'Thông tin khách hàng được chuyển vào CRM hỗ trợ nhân viên liên hệ tư vấn.'
      },
      {
        scope: 'Scope K',
        moduleName: 'Audit Log & Kiểm Soát Phân Quyền Dữ Liệu',
        inputData: 'Lịch sử xem số điện thoại khách hàng, thao tác trích xuất danh sách, lệnh cập nhật trạng thái.',
        coreProcess: 'Lưu vết lịch sử truy cập thông tin liên hệ và các thao tác cập nhật trạng thái quan trọng.',
        outputData: 'Báo cáo kiểm soát an toàn thông tin phục vụ ban lãnh đạo kiểm tra tuân thủ nội bộ.'
      },
      {
        scope: 'Scope J',
        moduleName: 'Báo Cáo Phân Tích Tiến Độ Hấp Thụ',
        inputData: 'Số lượng sản phẩm đã chốt, phân khúc giá được quan tâm, doanh số theo từng nhóm kinh doanh.',
        coreProcess: 'Tổng hợp tỷ lệ sản phẩm đã giao dịch và hiệu suất đội ngũ dựa trên dữ liệu ghi nhận.',
        outputData: 'Hỗ trợ chủ đầu tư và đại lý theo dõi tiến độ phân phối theo từng giai đoạn.'
      }
    ],
    aiSpecializedDemo: {
      title: 'Kịch bản AI minh họa: Gợi Ý Khớp Giỏ Hàng & Kiểm Tra Trùng Nguồn Khách',
      problemContext: '[Kịch bản mô phỏng] Chuyên viên kinh doanh tiếp nhận một khách hàng cần tìm căn hộ đầu tư tài chính 1.2 tỷ. AI đọc dữ liệu được cấp quyền để đề xuất sản phẩm phù hợp trong danh mục và kiểm tra quy tắc trùng số.',
      inputLabel: 'Yêu cầu của khách hàng [Dữ liệu mô phỏng]:',
      sampleInput: {
        'Số điện thoại khách': '0912.xxx.789 [Dữ liệu mô phỏng mã hóa]',
        'Mục tiêu mua': 'Đầu tư cho thuê dòng tiền',
        'Tài chính sẵn có': '1.2 - 1.5 tỷ đồng (Nhu cầu vay tham khảo 50%)',
        'Tiêu chí căn hộ': '2 Phòng ngủ | Ban công Đông Nam | Dự án bàn giao trong năm',
        'Môi giới đăng ký': 'Lê Văn Nam (Sàn Kinh doanh 02)'
      },
      aiProcessing: 'AI đọc dữ liệu sản phẩm và quy tắc kiểm tra trùng được cấp quyền để đưa ra gợi ý...',
      aiOutput: {
        badge: 'Kịch bản AI minh họa: Đề xuất khớp nhu cầu',
        summary: 'AI đối chiếu số điện thoại chưa ghi nhận phụ trách trong 90 ngày theo rule cấu hình. Gợi ý 2 sản phẩm tham khảo phù hợp.',
        recommendations: [
          'Sản phẩm khớp tham khảo 1: Căn A-1408 (Block Sapphire) - 68m2 - Giá 2.8 tỷ (Vốn tự có tham khảo 1.15 tỷ) - View nội khu.',
          'Sản phẩm khớp tham khảo 2: Căn B-0902 (Block Diamond) - 65m2 - Giá 2.65 tỷ (Vốn tự có tham khảo 1.05 tỷ) - Chính sách chiết khấu 4%.'
        ],
        riskLevel: 'LOW',
        actionItems: [
          'Gợi ý ghi nhận quyền phụ trách khách hàng trong thời hạn quy định theo chính sách sàn.',
          'Gợi ý xuất bảng tính dòng tiền vay ngân hàng tham khảo gửi cho môi giới tư vấn.'
        ]
      },
      disclaimer: 'Kịch bản AI minh họa phân tích trên dữ liệu giả lập. AI chỉ đọc dữ liệu được cấp quyền, phân tích và đề xuất trong phạm vi được cấu hình; quyết định thực tế do nhân sự phê duyệt.'
    },
    trackedKpis: [
      {
        metric: 'Tỷ lệ trùng lặp nguồn khách nội bộ (Duplicate Lead Conflict)',
        formula: '(Số vụ tranh chấp nguồn khách phát sinh / Tổng số giao dịch) × 100% [Công thức tham khảo]',
        frequency: 'Theo dõi liên tục',
        targetBenchmark: '0% [Mục tiêu tham khảo nhờ quy tắc cấu hình]',
        businessImpact: 'Giảm thiểu mâu thuẫn nội bộ, xây dựng môi trường làm việc rõ ràng và minh bạch.'
      },
      {
        metric: 'Tốc độ cập nhật trạng thái giữ chỗ (Lock-in Speed)',
        formula: 'Thời gian từ lúc đạt thỏa thuận đến khi căn được cập nhật trạng thái trên hệ thống [Đo lường tham khảo]',
        frequency: 'Đo lường từng giao dịch',
        targetBenchmark: '< 60 giây [Mục tiêu tham khảo]',
        businessImpact: 'Hạn chế rủi ro bán trùng sản phẩm giữa các nhóm kinh doanh trong đợt mở bán.'
      },
      {
        metric: 'Tỷ lệ chuyển đổi từ giữ chỗ sang ký hợp đồng (Conversion Rate)',
        formula: '(Số căn ký hợp đồng mua bán thành công / Số căn đã giữ chỗ) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá theo đợt mở bán',
        targetBenchmark: '≥ 75% [Mục tiêu tham khảo]',
        businessImpact: 'Đo lường mức độ phù hợp của tệp khách hàng và hiệu quả tư vấn của đội ngũ.'
      }
    ],
    threeStageRoadmap: [
      {
        phase: 'Giai đoạn 1 (Tuần 1 - 3)',
        title: 'Khảo sát danh mục & Cấu hình quy tắc nguồn khách',
        timeline: 'Tuần 1 - Tuần 3',
        focus: 'Đưa dữ liệu bảng hàng lên sơ đồ danh mục Scope B; thiết lập quy tắc kiểm tra trùng số điện thoại theo quy chế.',
        deliverables: [
          'Sơ đồ danh mục sản phẩm trực quan với mã màu trạng thái',
          'Cấu hình cơ chế phân quyền và thời hạn phụ trách nguồn khách',
          'Phân quyền tài khoản cho lãnh đạo sàn và môi giới'
        ]
      },
      {
        phase: 'Giai đoạn 2 (Tuần 4 - 7)',
        title: 'Cấu hình quy trình cọc & Tích hợp cổng thông tin',
        timeline: 'Tuần 4 - Tuần 7',
        focus: 'Thiết lập quy trình chuyển trạng thái giữ chỗ có thời hạn, phê duyệt phiếu thu và liên kết thông tin ra website.',
        deliverables: [
          'Luồng duyệt giữ chỗ và đặt cọc theo quy trình nội bộ',
          'Biểu mẫu thỏa thuận đặt cọc và chính sách tham khảo chuẩn hóa',
          'Nhật ký kiểm toán truy xuất thông tin nhạy cảm (Audit Log)'
        ]
      },
      {
        phase: 'Giai đoạn 3 (Tuần 8 - 12)',
        title: 'Kích hoạt kịch bản AI gợi ý & Báo cáo tiến độ',
        timeline: 'Tuần 8 - Tuần 12',
        focus: 'Ứng dụng AI hỗ trợ khớp nhu cầu với sản phẩm, hỗ trợ tính toán bảng chiết khấu và theo dõi doanh số hoa hồng.',
        deliverables: [
          'Kịch bản AI hỗ trợ gợi ý căn hộ phù hợp tiêu chí tài chính của khách',
          'Dashboard BI phân tích tốc độ phân phối danh mục theo phân khúc',
          'Cấu hình chính sách tính hoa hồng dự kiến cho đội ngũ kinh doanh'
        ]
      }
    ]
  },

  manufacturing: {
    slug: 'manufacturing',
    name: 'Sản xuất & Gia công',
    tagline: 'Theo dõi lệnh sản xuất, chuẩn hóa quy trình kiểm tra chất lượng KCS và giám sát tiến độ xuất xưởng',
    sectorCode: 'IND-MFG-05',
    heroProblemSummary: 'Doanh nghiệp sản xuất và xưởng gia công cơ khí, bao bì, may mặc thường gặp tình trạng ngắt kết nối giữa phòng Kinh doanh và Phân xưởng sản xuất. Kinh doanh nhận đơn nhưng xưởng thiếu nguyên vật liệu; tiến độ từng công đoạn ghi chép trên giấy khiến không ai nắm được chính xác khi nào hàng hoàn thành để giao cho khách.',
    operatingSnapshot: {
      dailyVolume: 'Hàng chục lệnh sản xuất (PO/MO) vận hành đồng thời trên các chuyền [Kịch bản mô phỏng]',
      primaryChannels: 'Đơn hàng B2B, Hợp đồng gia công, Phiếu chuyển giao công đoạn, Biên bản KCS',
      keyConstraint: 'Theo dõi tỷ lệ giao hàng đúng hạn (OTIF) và kiểm soát tỷ lệ phế phẩm từng khâu theo quy định',
      complianceNote: 'Lưu vết lịch sử kiểm tra chất lượng của từng lô hàng theo tiêu chuẩn ISO/SOP nội bộ'
    },
    dailyOperation: [
      {
        time: '07:00',
        title: 'Họp giao ca đầu ngày & Rà soát kế hoạch xưởng',
        actor: 'Quản đốc Phân xưởng & Trưởng ca',
        desc: 'Kiểm tra quân số từng chuyền, đối chiếu lệnh sản xuất cần hoàn thành trong ngày với tồn kho vật tư.',
        systemAction: 'Minh họa quy trình: Hỗ trợ hiển thị bảng tiến độ xưởng để công nhân nắm thông tin sản lượng dự kiến.'
      },
      {
        time: '09:00',
        title: 'Tiếp nhận lệnh sản xuất mới từ Phòng Kinh doanh',
        actor: 'Bộ phận Kế hoạch Sản xuất',
        desc: 'Chuyển đơn đặt hàng đã chốt của khách thành Lệnh sản xuất (MO), xác định định mức nguyên phụ liệu.',
        systemAction: 'Minh họa quy trình: Hỗ trợ đối chiếu số lượng vật tư khả dụng theo dữ liệu nhập; tạo phiếu đề xuất khi cần.'
      },
      {
        time: '11:30',
        title: 'Ghi nhận sản lượng hoàn thành từng công đoạn',
        actor: 'Tổ trưởng chuyền sản xuất',
        desc: 'Ghi nhận số lượng bán thành phẩm đã hoàn thành qua các công đoạn (Cắt, Uốn, Hàn, Sơn) vào bảng theo dõi Scope G.',
        systemAction: 'Kịch bản ứng dụng: Hỗ trợ tính toán tỷ lệ hoàn thành so với kế hoạch và hiển thị cảnh báo khi chậm tiến độ.'
      },
      {
        time: '14:30',
        title: 'Kiểm tra chất lượng KCS & Phân loại lỗi sản phẩm',
        actor: 'Nhân viên Kiểm soát Chất lượng (KCS/QC)',
        desc: 'Ghi nhận thông số kỹ thuật, số lượng đạt chuẩn và phân loại nguyên nhân lỗi theo biểu mẫu kiểm định.',
        systemAction: 'Minh họa quy trình: Lưu trữ biên bản KCS điện tử; hỗ trợ gửi thông báo khi tỷ lệ lỗi vượt ngưỡng định mức cấu hình.'
      },
      {
        time: '17:00',
        title: 'Đóng gói, dán tem nhãn tiêu chuẩn & Hoàn tất xuất xưởng',
        actor: 'Bộ phận Đóng gói & Thủ kho Thành phẩm',
        desc: 'Đóng kiện theo quy cách của khách, dán tem truy xuất nguồn gốc lô hàng và chuẩn bị bàn giao vận chuyển.',
        systemAction: 'Kịch bản ứng dụng: Cập nhật trạng thái hoàn thành vào Scope B để kinh doanh có thông tin phối hợp giao hàng.'
      }
    ],
    journeyVisualFlow: [
      {
        stepNumber: 1,
        title: 'Đơn hàng',
        subtitle: 'Tiếp nhận yêu cầu kỹ thuật & Chốt PO',
        isBottleneck: false,
        systemSupport: 'Tiếp nhận đơn hàng B2B, hỗ trợ đính kèm bản vẽ kỹ thuật và quy cách gia công vào hồ sơ Scope B.'
      },
      {
        stepNumber: 2,
        title: 'Kế hoạch',
        subtitle: 'Lập lệnh sản xuất & Tính toán vật tư',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Kế hoạch làm trên giấy tờ, không kiểm tra kịp vật tư dẫn đến xưởng phải dừng máy chờ nguyên liệu.',
        systemSupport: 'Khả năng cấu hình: Hỗ trợ đối chiếu định mức vật tư tham khảo và lập lịch sản xuất theo dữ liệu cấu hình.'
      },
      {
        stepNumber: 3,
        title: 'Sản xuất',
        subtitle: 'Điều phối chuyền & Cập nhật công đoạn',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Không nắm được công đoạn nào đang bị tắc nghẽn, thông tin tiến độ bị trễ so với thực tế 1-2 ngày.',
        systemSupport: 'Minh họa quy trình: Bảng theo dõi tiến độ công đoạn trực quan; hỗ trợ ghi nhận sản lượng qua từng khâu.'
      },
      {
        stepNumber: 4,
        title: 'KCS',
        subtitle: 'Kiểm tra chất lượng & Phân tích lỗi',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Ghi sổ KCS thủ công, khi phát hiện lỗi thì cả lô hàng lớn đã bị hỏng, lãng phí chi phí vật liệu.',
        systemSupport: 'Khả năng triển khai: Biểu mẫu kiểm định KCS số hóa; hỗ trợ gửi thông báo khi tỷ lệ sai sót vượt ngưỡng cấu hình.'
      },
      {
        stepNumber: 5,
        title: 'Xuất xưởng',
        subtitle: 'Đóng gói, Bàn giao & Giao hàng',
        isBottleneck: false,
        systemSupport: 'Minh họa quy trình: Hỗ trợ xuất biểu mẫu biên bản bàn giao và cập nhật ngày giao hàng trên hệ thống.'
      }
    ],
    configuredModules: [
      {
        scope: 'Scope G',
        moduleName: 'Quản Lý Quy Trình Công Đoạn & Lệnh Sản Xuất',
        inputData: 'Lệnh sản xuất, danh mục công đoạn, định mức thời gian của từng khâu, định mức vật tư.',
        coreProcess: 'Cấu hình theo dõi trạng thái hoàn thành của từng lô hàng; hỗ trợ ghi nhận thời gian máy chạy và sự cố dừng chuyền.',
        outputData: 'Bảng tiến độ tổng thể của toàn xưởng giúp phát hiện các điểm có nguy cơ chậm tiến độ.'
      },
      {
        scope: 'Scope B',
        moduleName: 'CRM Đơn Hàng B2B & Hợp Đồng Gia Công',
        inputData: 'Hồ sơ đối tác đặt hàng, thời hạn giao hàng cam kết, quy cách đóng gói và điều khoản thanh toán.',
        coreProcess: 'Cung cấp góc nhìn xuyên suốt từ khi ghi nhận đơn hàng đến khi xuất xưởng, hỗ trợ nhân viên kinh doanh tra cứu tiến độ.',
        outputData: 'Nhân viên kinh doanh nắm bắt thông tin để phối hợp thời gian giao nhận với khách hàng.'
      },
      {
        scope: 'Scope E',
        moduleName: 'Kiểm Soát Chi Phí Vật Tư & Hao Hụt',
        inputData: 'Số lượng vật tư xuất kho, sản lượng thành phẩm nhập kho, tỷ lệ phế phẩm thu hồi.',
        coreProcess: 'Cấu hình đối chiếu tỷ lệ hao hụt thực tế so với định mức kỹ thuật ban đầu, hỗ trợ kiểm soát chi phí gia công.',
        outputData: 'Báo cáo giá thành sản xuất tạm tính của từng đơn hàng phục vụ tính lãi lỗ.'
      },
      {
        scope: 'Scope J',
        moduleName: 'Báo Cáo Hiệu Năng Xưởng & Tỷ Lệ Giao Đúng Hạn',
        inputData: 'Thời gian hoàn thành đơn, sản lượng thực tế theo ca, tỷ lệ đơn hàng đạt chuẩn KCS lần đầu.',
        coreProcess: 'Tổng hợp chỉ số năng suất chuyền và tỷ lệ giao hàng đúng hạn đủ số lượng (OTIF) dựa trên dữ liệu báo cáo.',
        outputData: 'Bảng điều khiển trực quan giúp ban điều hành theo dõi năng lực sản xuất thực tế.'
      }
    ],
    aiSpecializedDemo: {
      title: 'Kịch bản AI minh họa: Gợi Ý Điều Phối Công Đoạn & Dự Báo Trễ Hạn',
      problemContext: '[Kịch bản mô phỏng] Đơn hàng sản xuất 5.000 chi tiết máy xuất khẩu đang thực hiện tại xưởng. Công đoạn gia công CNC bị chậm 3.5 giờ do bảo trì máy đột xuất. AI đọc dữ liệu được cấp quyền để phân tích tác động dây chuyền và tính toán lại lịch xuất xưởng tham khảo.',
      inputLabel: 'Dữ liệu vận hành lô hàng mô phỏng [Kịch bản minh họa]:',
      sampleInput: {
        'Mã lệnh sản xuất': 'MO-2026-0581 [Kịch bản mô phỏng]',
        'Sản lượng mục tiêu': '5.000 chi tiết kim loại chuẩn',
        'Tiến độ cam kết': 'Xuất xưởng ngày 15/09 (Còn 48 giờ)',
        'Trạng thái hiện tại': 'Công đoạn Cắt: 100% | CNC: 62% (Máy 03 dừng bảo trì 3.5h) | Mạ: 0% | KCS: 0%',
        'Tỷ lệ lỗi KCS sơ bộ': '1.2% (Trong giới hạn cho phép < 2.0%)'
      },
      aiProcessing: 'AI đọc dữ liệu tiến độ và công suất máy được cấp quyền để phân tích thời gian chu kỳ...',
      aiOutput: {
        badge: 'Kịch bản AI minh họa: Phân tích nguy cơ chậm tiến độ',
        summary: 'AI nhận định sự cố dừng máy có thể khiến các công đoạn sau bị dồn toa, ước tính nguy cơ chậm 6 giờ nếu không điều chỉnh.',
        recommendations: [
          'Gợi ý điều phối tham khảo: Cân nhắc chuyển khoảng 800 chi tiết sang Máy CNC 05 (Đang trống lịch ca đêm).',
          'Phương án nhân sự tham khảo: Bố trí thêm 02 nhân sự khâu Đóng gói trong ca sáng ngày 15/09.'
        ],
        riskLevel: 'HIGH',
        actionItems: [
          'Quản đốc xem xét và quyết định phương án điều chuyển máy để bù đắp sản lượng thiếu hụt.',
          'Cập nhật thông tin nội bộ cho phòng Kinh doanh theo dõi mốc hoàn thành mới.'
        ]
      },
      disclaimer: 'Kịch bản AI minh họa phân tích trên dữ liệu giả lập. AI chỉ đọc dữ liệu được cấp quyền, phân tích và đề xuất trong phạm vi được cấu hình; quyết định thực tế do nhân sự phê duyệt.'
    },
    trackedKpis: [
      {
        metric: 'Tỷ lệ giao hàng đúng hạn và đủ số lượng (OTIF - On-Time In-Full)',
        formula: '(Số đơn hàng hoàn thành đúng hạn & chuẩn quy cách / Tổng số đơn hàng) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá hàng tuần',
        targetBenchmark: '≥ 95% [Mục tiêu tham khảo]',
        businessImpact: 'Bảo vệ uy tín cung ứng dài hạn và hạn chế tranh chấp về tiến độ giao hàng.'
      },
      {
        metric: 'Tỷ lệ chất lượng đạt chuẩn ngay lần đầu (First Pass Yield - FPY)',
        formula: '(Số sản phẩm đạt chuẩn KCS không cần sửa chữa / Tổng sản phẩm sản xuất) × 100% [Công thức tham khảo]',
        frequency: 'Theo dõi theo ca',
        targetBenchmark: '≥ 96.5% [Mục tiêu tham khảo]',
        businessImpact: 'Hạn chế lãng phí nguyên vật liệu, nhân công sửa lỗi và tối ưu hóa năng suất chuyền.'
      },
      {
        metric: 'Thời gian chu kỳ sản xuất bình quân (Manufacturing Cycle Time)',
        formula: 'Thời gian trung bình từ khi xuất kho nguyên liệu đến khi hoàn thành đóng gói thành phẩm [Công thức tham khảo]',
        frequency: 'Theo dõi theo lô',
        targetBenchmark: 'Rút ngắn 15% - 20% [Mục tiêu tham khảo]',
        businessImpact: 'Tăng tốc độ quay vòng vốn lưu động và năng lực đáp ứng các đơn hàng gấp.'
      }
    ],
    threeStageRoadmap: [
      {
        phase: 'Giai đoạn 1 (Tuần 1 - 3)',
        title: 'Khảo sát lệnh sản xuất & Chuẩn hóa quy trình công đoạn',
        timeline: 'Tuần 1 - Tuần 3',
        focus: 'Cấu hình đơn đặt hàng và quy trình công đoạn của từng sản phẩm lên Scope G; thay thế ghi chép rời rạc.',
        deliverables: [
          'Biểu mẫu lệnh sản xuất (MO) và danh mục định mức nguyên liệu (BOM mẫu)',
          'Quy trình ghi nhận sản lượng hoàn thành theo từng ca làm việc',
          'Liên thông thông tin từ phòng Kinh doanh sang xưởng'
        ]
      },
      {
        phase: 'Giai đoạn 2 (Tuần 4 - 7)',
        title: 'Cấu hình biểu mẫu KCS & Bảng theo dõi tiến độ',
        timeline: 'Tuần 4 - Tuần 7',
        focus: 'Triển khai biểu mẫu KCS điện tử; thiết lập màn hình giám sát tiến độ công đoạn theo dữ liệu nhập.',
        deliverables: [
          'Biểu mẫu kiểm tra KCS điện tử phân loại nguyên nhân lỗi',
          'Bảng Kanban theo dõi tiến độ từng lô hàng theo thời gian thực',
          'Quy trình xuất kho thành phẩm và đối soát chi phí vật tư'
        ]
      },
      {
        phase: 'Giai đoạn 3 (Tuần 8 - 12)',
        title: 'Kích hoạt kịch bản AI cảnh báo & Báo cáo hiệu năng',
        timeline: 'Tuần 8 - Tuần 12',
        focus: 'Ứng dụng AI phân tích nguy cơ chậm tiến độ, gợi ý phương án điều chuyển và cấu hình dashboard phân tích.',
        deliverables: [
          'Kịch bản AI hỗ trợ dự báo rủi ro chậm tiến độ và gợi ý điều phối',
          'Dashboard BI phân tích tỷ lệ OTIF và hao hụt nguyên vật liệu',
          'Tài liệu hướng dẫn vận hành cho quản đốc và bộ phận kế hoạch'
        ]
      }
    ]
  },

  distribution: {
    slug: 'distribution',
    name: 'Phân phối & Bán buôn',
    tagline: 'Quản trị mạng lưới đại lý, kiểm soát bảng giá theo phân hạng và khóa xuất hàng khi chạm hạn mức công nợ',
    sectorCode: 'IND-DIS-06',
    heroProblemSummary: 'Doanh nghiệp phân phối hàng tiêu dùng, vật tư và thiết bị thường đau đầu vì chính sách giá và chiết khấu phức tạp theo từng cấp đại lý (Đại lý cấp 1, cấp 2, nhà phân phối độc quyền). Nhân viên nhận đơn qua điện thoại hoặc Zalo dễ áp nhầm bảng giá, đồng thời kho vẫn xuất hàng cho các đại lý đã nợ quá hạn gối đầu, gây rủi ro thất thoát vốn nghiêm trọng.',
    operatingSnapshot: {
      dailyVolume: 'Vận hành mạng lưới từ 50 đến hơn 1.000 đại lý, cửa hàng phân phối [Kịch bản mô phỏng]',
      primaryChannels: 'Đơn đặt hàng định kỳ, Nhân viên kinh doanh tuyến (Sales Thị trường), Cổng B2B',
      keyConstraint: 'Kiểm soát hạn mức công nợ gối đầu và hỗ trợ dừng xuất hàng theo quy tắc cấu hình',
      complianceNote: 'Tuân thủ hợp đồng đại lý, quy chế thưởng doanh số lũy kế và đối soát công nợ định kỳ'
    },
    dailyOperation: [
      {
        time: '08:00',
        title: 'Tiếp nhận đơn đặt hàng định kỳ từ mạng lưới đại lý',
        actor: 'Nhân viên Kinh doanh Tuyến / Admin Bán hàng',
        desc: 'Thu thập danh sách đặt hàng từ các đại lý gửi qua cổng đặt hàng B2B hoặc nhân viên phụ trách tuyến.',
        systemAction: 'Minh họa quy trình: Hỗ trợ áp đúng bảng giá và tỷ lệ chiết khấu tương ứng với phân hạng đại lý theo cấu hình.'
      },
      {
        time: '09:30',
        title: 'Kiểm tra hạn mức công nợ & Trạng thái thanh toán',
        actor: 'Kế toán Công nợ Phân phối',
        desc: 'Kiểm tra dư nợ hiện tại của đại lý, so sánh với hạn mức nợ được duyệt trong hợp đồng và số ngày nợ quá hạn.',
        systemAction: 'Kịch bản ứng dụng: Cấu hình quy tắc cảnh báo hoặc tạm dừng chuyển lệnh xuất khi đại lý vượt hạn mức nợ hoặc quá hạn theo quy định.'
      },
      {
        time: '11:30',
        title: 'Phê duyệt lệnh xuất kho liên phòng ban (Workflow Approval)',
        actor: 'Giám đốc Kinh doanh / Kế toán trưởng',
        desc: 'Rà soát các đơn hàng có trường hợp đặc biệt cần xin bảo lãnh nợ hoặc phê duyệt ngoại lệ có kiểm soát.',
        systemAction: 'Minh họa quy trình: Lưu vết lý do phê duyệt vào Audit Log và gửi thông báo lệnh xuất kho hợp lệ về kho trung tâm.'
      },
      {
        time: '14:30',
        title: 'Lập lệnh điều xe & Xuất kho giao đại lý theo tuyến',
        actor: 'Điều phối Vận tải & Thủ kho',
        desc: 'Gom đơn theo tuyến giao hàng địa lý (Tuyến Miền Tây, Tuyến Nội Thành), xuất hóa đơn và bàn giao hàng.',
        systemAction: 'Minh họa quy trình: Cập nhật trạng thái Đang giao hàng kèm biên bản giao nhận có chữ ký đại lý.'
      },
      {
        time: '17:30',
        title: 'Đối soát công nợ gối đầu & Tính thưởng doanh số lũy kế',
        actor: 'Kế toán Phân phối',
        desc: 'Ghi nhận các khoản thanh toán chuyển khoản trong ngày của đại lý, gạch nợ theo từng hóa đơn.',
        systemAction: 'Kịch bản ứng dụng: Cập nhật bảng thành tích doanh số lũy kế tháng/quý để chuẩn bị mức chiết khấu bậc thang theo cấu hình.'
      }
    ],
    journeyVisualFlow: [
      {
        stepNumber: 1,
        title: 'Mạng lưới đại lý',
        subtitle: 'Phân loại cấp 1, 2 & Tuyến bán hàng',
        isBottleneck: false,
        systemSupport: 'Khả năng cấu hình: Hồ sơ đại lý 360 độ: hợp đồng phân phối, hạn mức nợ được cấp, lịch sử mua và doanh số lũy kế.'
      },
      {
        stepNumber: 2,
        title: 'Bảng giá / Hạng',
        subtitle: 'Áp dụng chính sách chiết khấu chuẩn',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Nhân viên áp nhầm bảng giá do báo giá qua miệng hoặc tin nhắn, gây thất thoát lợi nhuận.',
        systemSupport: 'Khả năng cấu hình: Thiết lập bảng giá theo cấp bậc; hạn chế việc chỉnh sửa giá bán tùy tiện khi chưa có phê duyệt.'
      },
      {
        stepNumber: 3,
        title: 'Hạn mức công nợ',
        subtitle: 'Rà soát số dư nợ & Ngày quá hạn',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Vượt trần nợ hoặc nợ quá hạn nhiều tháng nhưng vẫn cho xuất hàng do không có cơ chế chặn.',
        systemSupport: 'Khả năng cấu hình: Cấu hình quy tắc cảnh báo hạn mức nợ (Credit Limit Rule) và phát tín hiệu cảnh báo trước khi chuyển lệnh.'
      },
      {
        stepNumber: 4,
        title: 'Duyệt xuất hàng',
        subtitle: 'Liên thông Bán hàng - Kế toán - Kho',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Ký duyệt giấy tờ thủ công mất cả ngày, xe tải chờ ở cửa kho làm chậm trễ tiến độ giao.',
        systemSupport: 'Minh họa quy trình: Hỗ trợ luồng phê duyệt lệnh xuất hàng trực tuyến theo phân quyền người dùng.'
      }
    ],
    configuredModules: [
      {
        scope: 'Scope B',
        moduleName: 'CRM Quản Trị Kênh Đại Lý & Đơn Hàng B2B',
        inputData: 'Danh sách đại lý, cấp bậc phân hạng (Vàng, Bạc, Đồng), hạn mức tín dụng, địa chỉ điểm bán.',
        coreProcess: 'Cấu hình tính chiết khấu theo chính sách hợp đồng; lưu trữ toàn bộ lịch sử đơn đặt hàng của mạng lưới.',
        outputData: 'Đơn đặt hàng B2B chính xác về chủng loại, giá cả và điều khoản thanh toán.'
      },
      {
        scope: 'Scope E',
        moduleName: 'Kiểm Soát Hạn Mức Tín Dụng & Khóa Nợ Theo Cấu Hình',
        inputData: 'Hóa đơn xuất bán, số tiền đã thanh toán, thời hạn nợ cam kết (30 ngày, 45 ngày).',
        coreProcess: 'Cấu hình theo dõi dư nợ sau mỗi giao dịch; hỗ trợ thiết lập quy tắc dừng tạo đơn mới khi đại lý vi phạm cam kết nợ.',
        outputData: 'Hỗ trợ kiểm soát dòng tiền phân phối và giảm thiểu nguy cơ nợ quá hạn kéo dài.'
      },
      {
        scope: 'Scope D',
        moduleName: 'Chăm Sóc Đại Lý & Quản Lý Đổi Trả / Bảo Hành',
        inputData: 'Yêu cầu đổi trả hàng móp méo, khiếu nại chất lượng lô hàng, yêu cầu hỗ trợ tài liệu tiếp thị.',
        coreProcess: 'Tiếp nhận ticket bảo hành/đổi trả, phân loại trách nhiệm kho vận hay nhà sản xuất để xử lý theo quy trình.',
        outputData: 'Mối quan hệ hợp tác với mạng lưới đại lý được duy trì chuyên nghiệp và rõ ràng.'
      },
      {
        scope: 'Scope J',
        moduleName: 'Báo Cáo Phân Tích Doanh Số & Độ Phủ Thị Trường',
        inputData: 'Doanh thu theo vùng miền, sản lượng tiêu thụ từng mặt hàng, tần suất đặt hàng của đại lý.',
        coreProcess: 'Tổng hợp dữ liệu giúp phát hiện các đại lý sụt giảm sản lượng bất thường so với cùng kỳ để kích hoạt đội ngũ thị trường chăm sóc.',
        outputData: 'Dashboard phân tích thị phần giúp giám đốc bán hàng điều chỉnh chỉ tiêu kinh doanh.'
      }
    ],
    aiSpecializedDemo: {
      title: 'Kịch bản AI minh họa: Đánh Giá Rủi Ro Nợ Đại Lý & Xác Thực Chiết Khấu',
      problemContext: '[Kịch bản mô phỏng] Đại lý Minh Phát (Cấp 1 - Khu vực Cần Thơ) gửi đơn đặt hàng trị giá 250 triệu đồng. Dư nợ hiện tại của đại lý là 420 triệu (Hạn mức trần: 500 triệu). Đơn hàng mới sẽ khiến tổng dư nợ vượt trần 170 triệu đồng. AI đọc dữ liệu được cấp quyền để đánh giá rủi ro và gợi ý phương án xử lý.',
      inputLabel: 'Dữ liệu đơn hàng và lịch sử công nợ đại lý [Kịch bản mô phỏng]:',
      sampleInput: {
        'Đại lý': 'NPP Minh Phát - Cần Thơ (Phân hạng: Vàng) [Dữ liệu mô phỏng]',
        'Giá trị đơn mới': '250.000.000 VNĐ (Chiết khấu tham khảo 18% theo hạng Vàng)',
        'Dư nợ hiện tại': '420.000.000 VNĐ (Hạn mức tín dụng được duyệt: 500.000.000 VNĐ)',
        'Trạng thái nợ cũ': 'Có 01 hóa đơn 85 triệu đã quá hạn thanh toán 4 ngày',
        'Lịch sử uy tín': 'Đã đồng hành 3 năm, doanh số lũy kế năm đạt 3.8 tỷ'
      },
      aiProcessing: 'AI đọc dữ liệu công nợ và quy tắc tín dụng được cấp quyền để phân tích rủi ro...',
      aiOutput: {
        badge: 'Kịch bản AI minh họa: Cảnh báo vượt hạn mức nợ',
        summary: 'Đơn hàng khiến tổng nợ đạt 670 triệu (Vượt hạn mức 170 triệu) kèm hóa đơn quá hạn 4 ngày. AI gợi ý chuyển trạng thái cần xét duyệt.',
        recommendations: [
          'Phương án tham khảo 1: Đề nghị đại lý thanh toán hóa đơn quá hạn 85 triệu + 85 triệu tiền hàng trước khi xuất kho.',
          'Phương án tham khảo 2: Trình cấp có thẩm quyền xem xét phê duyệt ngoại lệ bảo lãnh tạm thời trong 7 ngày.'
        ],
        riskLevel: 'HIGH',
        actionItems: [
          'Gợi ý kế toán liên hệ gửi bảng đối soát công nợ chi tiết cho đại lý.',
          'Tạm dừng lệnh in phiếu xuất kho đối với đơn này cho đến khi có phê duyệt hợp lệ.'
        ]
      },
      disclaimer: 'Kịch bản AI minh họa phân tích trên dữ liệu giả lập. AI chỉ đọc dữ liệu được cấp quyền, phân tích và đề xuất trong phạm vi được cấu hình; quyết định thực tế do nhân sự phê duyệt.'
    },
    trackedKpis: [
      {
        metric: 'Kỳ thu tiền bình quân (Days Sales Outstanding - DSO)',
        formula: '(Tổng các khoản phải thu đại lý / Tổng doanh số bán chịu) × Số ngày trong kỳ [Công thức tham khảo]',
        frequency: 'Đánh giá hàng tháng',
        targetBenchmark: '30 - 45 ngày [Mục tiêu tham khảo]',
        businessImpact: 'Tối ưu hóa vòng quay vốn lưu động và giảm thiểu chi phí lãi vay phục vụ hàng tồn kho.'
      },
      {
        metric: 'Tỷ lệ đơn hàng xuất kho chuẩn chính sách giá (Price Compliance)',
        formula: '(Số đơn xuất đúng giá và chiết khấu được duyệt / Tổng số đơn hàng) × 100% [Công thức tham khảo]',
        frequency: 'Theo dõi liên tục',
        targetBenchmark: '100% [Mục tiêu tham khảo nhờ quy tắc cấu hình]',
        businessImpact: 'Hạn chế rủi ro áp sai chiết khấu nội bộ và bảo vệ biên lợi nhuận phân phối.'
      },
      {
        metric: 'Tỷ lệ duy trì đặt hàng định kỳ của đại lý (Dealer Retention Rate)',
        formula: '(Số đại lý có phát sinh đơn trong tháng / Tổng số đại lý ký hợp đồng) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá hàng tháng',
        targetBenchmark: '≥ 85% [Mục tiêu tham khảo]',
        businessImpact: 'Duy trì độ phủ thương hiệu tại các điểm bán lẻ và bảo vệ thị phần trước đối thủ cạnh tranh.'
      }
    ],
    threeStageRoadmap: [
      {
        phase: 'Giai đoạn 1 (Tuần 1 - 3)',
        title: 'Khảo sát danh mục đại lý & Cấu hình bảng giá phân hạng',
        timeline: 'Tuần 1 - Tuần 3',
        focus: 'Đưa dữ liệu mạng lưới đại lý lên giao diện Scope B; cấu hình chính sách chiết khấu cố định theo cấp bậc.',
        deliverables: [
          'Cơ sở dữ liệu đại lý tập trung kèm phân hạng rõ ràng',
          'Khóa bảng giá theo quy tắc cấu hình, hạn chế sửa tay tùy tiện',
          'Cấu hình cổng tiếp nhận đơn hàng cho nhân viên tuyến'
        ]
      },
      {
        phase: 'Giai đoạn 2 (Tuần 4 - 7)',
        title: 'Cấu hình hạn mức nợ & Quy trình duyệt xuất kho',
        timeline: 'Tuần 4 - Tuần 7',
        focus: 'Thiết lập quy tắc cảnh báo khi vượt trần nợ; số hóa luồng duyệt lệnh xuất hàng liên phòng ban.',
        deliverables: [
          'Cơ chế kiểm soát hạn mức nợ và cảnh báo quá hạn theo cấu hình',
          'Quy trình duyệt lệnh xuất kho đa cấp theo phân quyền người dùng',
          'Biên bản đối soát công nợ định kỳ theo biểu mẫu chuẩn'
        ]
      },
      {
        phase: 'Giai đoạn 3 (Tuần 8 - 12)',
        title: 'Kích hoạt kịch bản AI cảnh báo & Báo cáo thị phần',
        timeline: 'Tuần 8 - Tuần 12',
        focus: 'Ứng dụng AI phát hiện đại lý giảm tần suất mua sắm, hỗ trợ tính toán thưởng doanh số bậc thang và cấu hình dashboard BI.',
        deliverables: [
          'Kịch bản AI hỗ trợ phát hiện sớm rủi ro sụt giảm tần suất đặt hàng',
          'Dashboard BI phân tích độ phủ và sản lượng theo khu vực',
          'Tài liệu hướng dẫn vận hành hệ thống phân phối cho nhân sự'
        ]
      }
    ]
  },

  construction: {
    slug: 'construction',
    name: 'Xây dựng & Thi công',
    tagline: 'Quản trị tiến độ dự án công trình, số hóa nhật ký hiện trường và kiểm soát hồ sơ nghiệm thu thanh toán',
    sectorCode: 'IND-CST-07',
    heroProblemSummary: 'Các nhà thầu xây dựng, đơn vị thi công hoàn thiện và cơ điện thường gặp khó khăn trong việc kết nối thông tin giữa công trường và văn phòng điều hành. Nhật ký thi công ghi chép qua loa trên giấy tờ; vật tư cấp ra công trường dễ thất thoát; biên bản nghiệm thu giai đoạn chậm ký kết dẫn đến tình trạng đọng vốn thanh toán kéo dài nhiều tháng.',
    operatingSnapshot: {
      dailyVolume: '3 - 20 dự án công trình thi công trải dài ở nhiều địa phương [Kịch bản mô phỏng]',
      primaryChannels: 'Nhật ký công trường điện tử, Báo cáo tiến độ ảnh chụp, Biên bản nghiệm thu hiện trường',
      keyConstraint: 'Theo dõi khối lượng hoàn thành thực tế so với biểu đồ tiến độ Gantt theo cấu hình',
      complianceNote: 'Tuân thủ hồ sơ chất lượng công trình, tiêu chuẩn an toàn lao động và hồ sơ hoàn công'
    },
    dailyOperation: [
      {
        time: '06:30',
        title: 'Điểm danh quân số & Huấn luyện an toàn đầu giờ (Toolbox Talk)',
        actor: 'Chỉ huy trưởng Công trường / Kỹ sư An toàn',
        desc: 'Kiểm tra quân số các tổ đội nhà thầu phụ, phổ biến quy định an toàn lao động và phân bổ nhiệm vụ thi công.',
        systemAction: 'Minh họa quy trình: Ghi nhận số lượng nhân công thực tế có mặt trên công trường vào bảng theo dõi Scope G.'
      },
      {
        time: '08:30',
        title: 'Tiếp nhận vật tư về công trường & Kiểm tra quy cách',
        actor: 'Kỹ sư Vật tư & Thủ kho Công trường',
        desc: 'Kiểm tra phiếu xuất kho, chứng chỉ chất lượng xuất xưởng (CO/CQ) của vật tư (thép, xi măng, cáp điện).',
        systemAction: 'Minh họa quy trình: Hỗ trợ lưu trữ hình ảnh nghiệm thu vật tư và số lượng nhập kho vào bảng theo dõi dự án.'
      },
      {
        time: '11:30',
        title: 'Ghi chép nhật ký công trường điện tử buổi sáng',
        actor: 'Kỹ sư Giám sát Thi công',
        desc: 'Cập nhật tình hình thời tiết, thiết bị hoạt động, công việc đang triển khai tại từng phân đoạn theo biểu mẫu số hóa.',
        systemAction: 'Kịch bản ứng dụng: Tải hình ảnh hiện trường đính kèm ghi chú thời gian và vị trí vào hồ sơ dự án theo cấu hình.'
      },
      {
        time: '15:00',
        title: 'Nghiệm thu công việc xây dựng cùng Tư vấn Giám sát',
        actor: 'Chỉ huy phó & Đại diện Tư vấn Giám sát (TVGS)',
        desc: 'Kiểm tra cao độ, kích thước hình học và độ liên kết trước khi chuyển bước thi công (đổ bê tông, đóng trần).',
        systemAction: 'Minh họa quy trình: Ký biên bản nghiệm thu nội bộ trên thiết bị di động; lưu vết phục vụ hồ sơ thanh toán giai đoạn.'
      },
      {
        time: '17:30',
        title: 'Tập hợp khối lượng ngày & Đề xuất tạm ứng cho thầu phụ',
        actor: 'Chỉ huy trưởng & Kế toán Công trình',
        desc: 'Tổng hợp khối lượng thi công đạt yêu cầu trong ngày, rà soát đề xuất cấp vật tư cho ngày kế tiếp.',
        systemAction: 'Kịch bản ứng dụng: Cập nhật thông tin tóm tắt về phòng Kỹ thuật và hiển thị tiến độ trên biểu đồ Gantt.'
      }
    ],
    journeyVisualFlow: [
      {
        stepNumber: 1,
        title: 'Gantt hạng mục',
        subtitle: 'Bóc tách khối lượng & Lịch thi công',
        isBottleneck: false,
        systemSupport: 'Khả năng cấu hình: Thiết lập tiến độ tổng thể và tiến độ chi tiết theo từng hạng mục công việc trên biểu đồ Gantt Scope G.'
      },
      {
        stepNumber: 2,
        title: 'Nhật ký công trường',
        subtitle: 'Ảnh hiện trường, Nhân công & Thời tiết',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Ghi chép giấy tờ thất lạc hoặc ghi hồi tố sai sự thật, văn phòng không nắm được hiện trạng thực.',
        systemSupport: 'Khả năng triển khai: Nhật ký thi công số hóa; hỗ trợ đính kèm hình ảnh hiện trường và ghi chú thời gian, địa điểm theo dữ liệu nhập.'
      },
      {
        stepNumber: 3,
        title: 'Nghiệm thu',
        subtitle: 'Xác nhận TVGS & Chuyển bước',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Chậm nghiệm thu công việc khiến các tổ đội sau phải ngồi chờ, gây lãng phí chi phí nhân công.',
        systemSupport: 'Minh họa quy trình: Hỗ trợ gửi thông báo mời nghiệm thu theo lịch và lưu trữ biên bản kỹ thuật số hóa.'
      },
      {
        stepNumber: 4,
        title: 'Hồ sơ',
        subtitle: 'Biên bản khối lượng & Bản vẽ hoàn công',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Đến cuối kỳ mới làm hồ sơ thanh toán, thiếu chứng từ làm chậm tiến độ giải ngân hàng tháng trời.',
        systemSupport: 'Minh họa quy trình: Hỗ trợ tập hợp các biên bản nghiệm thu thành danh mục hồ sơ thanh toán theo biểu mẫu quy định.'
      },
      {
        stepNumber: 5,
        title: 'Thanh toán',
        subtitle: 'Giải ngân thầu phụ & Dòng tiền dự án',
        isBottleneck: false,
        systemSupport: 'Khả năng cấu hình: Theo dõi hạn mức tạm ứng và thanh toán thực tế của từng nhà thầu phụ theo dữ liệu hợp đồng.'
      }
    ],
    configuredModules: [
      {
        scope: 'Scope G',
        moduleName: 'Quản Lý Tiến Độ Dự Án & Nhật Ký Công Trường',
        inputData: 'Hạng mục dự toán, mốc tiến độ hợp đồng, nhật ký thời tiết, quân số công nhân, vật tư sử dụng.',
        coreProcess: 'Cấu hình theo dõi tiến độ thi công thực tế so với kế hoạch ban đầu; hỗ trợ lưu trữ hình ảnh hiện trường.',
        outputData: 'Biểu đồ tiến độ Gantt cập nhật định kỳ giúp ban điều hành theo dõi diễn biến công trường.'
      },
      {
        scope: 'Scope H',
        moduleName: 'Quản Lý Hồ Sơ Kỹ Thuật, Bản Vẽ & Tiêu Chuẩn',
        inputData: 'Bản vẽ thiết kế thi công (Shopdrawing), biên bản nghiệm thu mẫu, chứng chỉ vật tư CO/CQ.',
        coreProcess: 'Tổ chức và phân quyền truy cập hồ sơ bản vẽ mới nhất, hỗ trợ hiện trường tra cứu tài liệu kỹ thuật.',
        outputData: 'Hạn chế tình trạng thi công nhầm theo phiên bản bản vẽ chưa cập nhật.'
      },
      {
        scope: 'Scope E',
        moduleName: 'Kiểm Soát Dòng Tiền & Tạm Ứng Nhà Thầu Phụ',
        inputData: 'Hợp đồng giao khoán thầu phụ, biên bản nghiệm thu khối lượng hoàn thành, đề xuất tạm ứng.',
        coreProcess: 'Cấu hình đối chiếu khối lượng đề nghị thanh toán với khối lượng đã được nghiệm thu thực tế trước khi duyệt chi.',
        outputData: 'Hỗ trợ kiểm soát rủi ro thanh toán vượt quá khối lượng đã nghiệm thu.'
      },
      {
        scope: 'Scope J',
        moduleName: 'Báo Cáo Chi Phí Thực Tế So Với Dự Toán (Budget Variance)',
        inputData: 'Ngân sách dự toán ban đầu của từng gói thầu, chi phí nhân công, vật tư và máy thi công thực tế.',
        coreProcess: 'Tổng hợp độ lệch chi phí (Cost Overrun) của từng hạng mục dựa trên dữ liệu nhập để cảnh báo thâm hụt ngân sách.',
        outputData: 'Bảng điều khiển chi phí tạm tính giúp ban giám đốc theo dõi dòng tiền công trình.'
      }
    ],
    aiSpecializedDemo: {
      title: 'Kịch bản AI minh họa: Đối Soát Nhật Ký Hiện Trường & Phân Tích Rủi Ro Tiến Độ',
      problemContext: '[Kịch bản mô phỏng] Dự án "Tòa nhà Văn phòng SkyTower" đang ở giai đoạn thi công sàn tầng 8. Thời tiết mưa liên tục 3 ngày kèm sự cố chậm giao thép sàn. AI đọc dữ liệu nhật ký và kế hoạch được cấp quyền để phân tích rủi ro mốc nghiệm thu.',
      inputLabel: 'Dữ liệu báo cáo công trường mô phỏng [Kịch bản minh họa]:',
      sampleInput: {
        'Dự án': 'SkyTower Plaza - Hạng mục Kết cấu Sàn Tầng 8 [Dữ liệu mô phỏng]',
        'Mốc cam kết': 'Đổ bê tông ngày 14/09 (Dự kiến tham khảo 20:00)',
        'Nhật ký hiện trường': 'Mưa to gián đoạn 14 giờ công | Thép sàn về trễ 1 ngày so với tiến độ',
        'Tiến độ thực tế': 'Gia công cốt thép đạt 45% (Chậm 30% so với kế hoạch mốc)',
        'Nhà thầu phụ': 'Đội thi công Cốt thép Toàn Thắng (Quân số: 18 công nhân)'
      },
      aiProcessing: 'AI đọc dữ liệu nhật ký thi công và tiến độ được cấp quyền để đối chiếu năng lực...',
      aiOutput: {
        badge: 'Kịch bản AI minh họa: Cảnh báo nguy cơ chậm tiến độ',
        summary: 'AI nhận diện nguy cơ hạng mục cốt thép có thể không kịp hoàn tất trước mốc cam kết do ảnh hưởng thời tiết và thiếu hụt nhân lực.',
        recommendations: [
          'Gợi ý điều phối tham khảo: Xem xét yêu cầu tăng cường thêm khoảng 08 thợ uốn thép trong ca tiếp theo.',
          'Giải pháp kỹ thuật tham khảo: Trao đổi với Tư vấn Giám sát phương án chia phân đoạn nghiệm thu cục bộ.'
        ],
        riskLevel: 'HIGH',
        actionItems: [
          'Chỉ huy trưởng đánh giá tình hình và đưa ra phương án chỉ đạo đối với đội thi công.',
          'Cập nhật tiến độ điều chỉnh trên biểu đồ Gantt để các bộ phận liên quan có thông tin phối hợp.'
        ]
      },
      disclaimer: 'Kịch bản AI minh họa phân tích trên dữ liệu giả lập. AI chỉ đọc dữ liệu được cấp quyền, phân tích và đề xuất trong phạm vi được cấu hình; quyết định thực tế do nhân sự phê duyệt.'
    },
    trackedKpis: [
      {
        metric: 'Tỷ lệ mốc nghiệm thu hoàn thành đúng tiến độ (Milestone Schedule Adherence)',
        formula: '(Số mốc hoàn thành đúng hoặc trước thời hạn cam kết / Tổng số mốc tiến độ) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá hàng tuần',
        targetBenchmark: '≥ 92% [Mục tiêu tham khảo]',
        businessImpact: 'Hạn chế phạt chậm tiến độ theo hợp đồng và giữ uy tín với chủ đầu tư.'
      },
      {
        metric: 'Độ lệch chi phí thực tế so với ngân sách dự toán (Cost Variance)',
        formula: '((Chi phí thực tế phát sinh - Ngân sách dự toán được duyệt) / Ngân sách dự toán) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá định kỳ theo tháng',
        targetBenchmark: '≤ ± 3.0% [Mục tiêu tham khảo]',
        businessImpact: 'Bảo toàn biên lợi nhuận của dự án thi công và kiểm soát vật tư tại công trường.'
      },
      {
        metric: 'Thời gian hoàn thiện hồ sơ nghiệm thu thanh toán (Billing Cycle Time)',
        formula: 'Thời gian từ khi công việc hoàn thành tại hiện trường đến khi hồ sơ được hoàn tất bàn giao [Công thức tham khảo]',
        frequency: 'Theo dõi theo đợt thanh toán',
        targetBenchmark: '< 5 ngày làm việc [Mục tiêu tham khảo]',
        businessImpact: 'Rút ngắn thời gian thu hồi vốn lưu động và chủ động kế hoạch thanh toán cho thầu phụ.'
      }
    ],
    threeStageRoadmap: [
      {
        phase: 'Giai đoạn 1 (Tuần 1 - 3)',
        title: 'Khảo sát dự án & Chuẩn hóa nhật ký công trường điện tử',
        timeline: 'Tuần 1 - Tuần 3',
        focus: 'Đưa cấu trúc biểu đồ tiến độ Gantt lên Scope G; triển khai biểu mẫu ghi chép nhật ký công trường số hóa.',
        deliverables: [
          'Biểu đồ tiến độ Gantt chuẩn hóa theo từng công trình',
          'Biểu mẫu ghi chép nhật ký công trường đính kèm ảnh và vị trí',
          'Kho lưu trữ bản vẽ thiết kế thi công (Shopdrawing) số hóa'
        ]
      },
      {
        phase: 'Giai đoạn 2 (Tuần 4 - 7)',
        title: 'Cấu hình quy trình nghiệm thu & Luồng phê duyệt tạm ứng',
        timeline: 'Tuần 4 - Tuần 7',
        focus: 'Thiết lập quy trình nghiệm thu vật tư đầu vào; liên thông khối lượng thi công thực tế với luồng thanh toán thầu phụ.',
        deliverables: [
          'Biên bản nghiệm thu kỹ thuật điện tử lưu vết số hóa',
          'Quy trình phê duyệt đề xuất vật tư và thanh toán theo phân quyền',
          'Theo dõi chi phí thực tế so với dự toán hạng mục'
        ]
      },
      {
        phase: 'Giai đoạn 3 (Tuần 8 - 12)',
        title: 'Kích hoạt kịch bản AI cảnh báo & Báo cáo tài chính dự án',
        timeline: 'Tuần 8 - Tuần 12',
        focus: 'Ứng dụng AI phân tích rủi ro chậm mốc từ dữ liệu nhật ký, hỗ trợ lập danh mục hồ sơ nghiệm thu và dashboard BI.',
        deliverables: [
          'Kịch bản AI hỗ trợ phân tích nhật ký hiện trường và cảnh báo sai lệch',
          'Dashboard BI tài chính dự án và dòng tiền tạm ứng',
          'Tài liệu hướng dẫn quy trình nghiệm thu và thanh quyết toán chuẩn mực'
        ]
      }
    ]
  },

  technology: {
    slug: 'technology',
    name: 'Doanh nghiệp Công nghệ',
    tagline: 'Vận hành tinh gọn Agile, chuẩn hóa kho tri thức kỹ thuật và hỗ trợ khách hàng liên tục có kiểm soát',
    sectorCode: 'IND-TEC-08',
    heroProblemSummary: 'Công ty công nghệ, phần mềm SaaS và dịch vụ số thường sử dụng quá nhiều công cụ rời rạc (Slack, Jira, Trello, Google Drive, Zendesk). Dữ liệu khách hàng bị phân tán, đội ngũ hỗ trợ kỹ thuật không nắm rõ lịch sử hợp đồng; tài liệu API và quy chế kỹ thuật không được đồng bộ khiến nhân viên mới mất nhiều thời gian tra cứu và giải quyết ticket chậm trễ.',
    operatingSnapshot: {
      dailyVolume: 'Hàng trăm lượt hỗ trợ kỹ thuật, yêu cầu tính năng và các chu kỳ Sprint phát triển [Kịch bản mô phỏng]',
      primaryChannels: 'Cổng tiếp nhận Ticket khách hàng, Kênh thảo luận nội bộ, Kho tài liệu API/SOP',
      keyConstraint: 'Theo dõi thời gian phản hồi sự cố (SLA) và phân quyền bảo mật dữ liệu theo cấu hình',
      complianceNote: 'Tuân thủ tiêu chuẩn an toàn thông tin, bảo vệ dữ liệu người dùng và quản lý phiên bản Release'
    },
    dailyOperation: [
      {
        time: '09:00',
        title: 'Họp Standup buổi sáng & Rà soát ticket khẩn cấp',
        actor: 'Trưởng nhóm Kỹ thuật (Tech Lead) & Đội ngũ Hỗ trợ',
        desc: 'Rà soát các sự cố kỹ thuật (Incident) phát sinh trong đêm, phân loại mức độ khẩn cấp theo cam kết SLA.',
        systemAction: 'Minh họa quy trình: Hỗ trợ phân luồng ticket P1/P2 cho kỹ sư trực ca và theo dõi mốc thời gian cam kết SLA theo cấu hình.'
      },
      {
        time: '10:30',
        title: 'Phân loại yêu cầu tính năng & Đưa vào Product Backlog',
        actor: 'Quản lý Sản phẩm (Product Manager)',
        desc: 'Lọc các phản hồi từ khách hàng doanh nghiệp B2B, đánh giá mức độ ưu tiên để lên kế hoạch cho Sprint tiếp theo.',
        systemAction: 'Minh họa quy trình: Gắn liên kết giữa hồ sơ khách hàng trên CRM với các thẻ công việc kỹ thuật trên Scope G.'
      },
      {
        time: '14:00',
        title: 'Tra cứu tài liệu kỹ thuật & Triển khai giải pháp hỗ trợ',
        actor: 'Kỹ sư Giải pháp (Solutions Engineer)',
        desc: 'Sử dụng AI Search/RAG để truy vấn cú pháp API, mã lỗi hệ thống và tài liệu kiến trúc nội bộ.',
        systemAction: 'Kịch bản ứng dụng: Trợ lý AI hỗ trợ tra cứu và trích xuất đoạn văn bản liên quan từ Wiki kỹ thuật kèm đường dẫn tài liệu nguồn để kỹ sư đối chiếu.'
      },
      {
        time: '16:30',
        title: 'Kiểm thử hoàn tất & Xuất bản tài liệu Release Note',
        actor: 'Đội ngũ QA & Technical Writer',
        desc: 'Nghiệm thu bản vá lỗi hoặc tính năng mới, soạn thảo thông báo cập nhật phiên bản cho khách hàng.',
        systemAction: 'Minh họa quy trình: Hỗ trợ tạo và gửi thông báo Release Note đến các khách hàng đang sử dụng phân hệ liên quan.'
      },
      {
        time: '18:00',
        title: 'Đánh giá chỉ số SLA ngày & Tỷ lệ giải quyết sự cố',
        actor: 'Trưởng phòng CSKH & Vận hành',
        desc: 'Tổng kết tỷ lệ ticket xử lý trong hạn cam kết, rà soát các trường hợp phức tạp cần bổ sung vào kho tri thức.',
        systemAction: 'Minh họa quy trình: Ghi nhận bài học kinh nghiệm mới vào cẩm nang xử lý sự cố (Troubleshooting Guide) theo cấu hình.'
      }
    ],
    journeyVisualFlow: [
      {
        stepNumber: 1,
        title: 'Ticket khách hàng',
        subtitle: 'Cổng hỗ trợ, Email & Tin nhắn',
        isBottleneck: false,
        systemSupport: 'Minh họa quy trình: Tiếp nhận tập trung yêu cầu qua cổng ticket, hỗ trợ phân loại mức độ ưu tiên theo cấu hình.'
      },
      {
        stepNumber: 2,
        title: 'Backlog',
        subtitle: 'Phân loại lỗi, Tính năng & Ưu tiên',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Yêu cầu của khách hàng bị trôi trong các nhóm chat nội bộ, không ai theo dõi trạng thái giải quyết.',
        systemSupport: 'Khả năng cấu hình: Chuyển đổi ticket thành thẻ công việc trên Product Backlog, liên kết với dữ liệu khách hàng.'
      },
      {
        stepNumber: 3,
        title: 'Release',
        subtitle: 'Kiểm thử, Đóng gói & Triển khai',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Triển khai tính năng mới nhưng không thông báo kịp cho bộ phận Kinh doanh và CSKH, gây bối rối khi khách hỏi.',
        systemSupport: 'Khả năng quy trình: Hỗ trợ phê duyệt phiên bản phát hành và xuất bản nhật ký thay đổi (Changelog) theo quy chuẩn.'
      },
      {
        stepNumber: 4,
        title: 'Thông báo; API & Tri thức có nguồn',
        subtitle: 'RAG Search, Wiki kỹ thuật & Hỗ trợ',
        isBottleneck: true,
        bottleneckNote: 'Điểm nghẽn: Nhân viên hỗ trợ trả lời thiếu nhất quán do tài liệu API và SOP phân tán ở nhiều file tài liệu cũ.',
        systemSupport: 'Kịch bản ứng dụng: Cơ sở tri thức Wiki tập trung tích hợp trợ lý AI tra cứu ngữ nghĩa tự nhiên có trích dẫn nguồn đối chiếu.'
      }
    ],
    configuredModules: [
      {
        scope: 'Scope K',
        moduleName: 'Kiến Trúc Tích Hợp Mở API & Webhook',
        inputData: 'Payload sự kiện từ các ứng dụng nội bộ và dịch vụ bên thứ ba, token xác thực, log truy xuất.',
        coreProcess: 'Cấu hình kết nối các dịch vụ bên ngoài vào nền tảng thông qua API và Webhook; quản lý phân quyền truy cập.',
        outputData: 'Luồng dữ liệu đồng bộ giữa các hệ thống kỹ thuật theo cấu hình tích hợp.'
      },
      {
        scope: 'Scope H',
        moduleName: 'Kho Tri Thức Wiki Kỹ Thuật & Tài Liệu API',
        inputData: 'Tài liệu kiến trúc hệ thống, hướng dẫn tích hợp API, cẩm nang xử lý sự cố và quy chế bảo mật.',
        coreProcess: 'Tổ chức kho tri thức công nghệ có cấu trúc, hỗ trợ tìm kiếm ngôn ngữ tự nhiên và quản lý phiên bản.',
        outputData: 'Kỹ sư và nhân sự hỗ trợ tra cứu tài liệu và quy chuẩn kỹ thuật nhanh chóng.'
      },
      {
        scope: 'Scope D',
        moduleName: 'Hệ Thống Quản Trị Ticket Hỗ Trợ & Cam Kết SLA',
        inputData: 'Yêu cầu hỗ trợ của người dùng, mức độ khẩn cấp (P1 đến P4), thời gian phản hồi cam kết.',
        coreProcess: 'Cấu hình phân bổ ticket theo năng lực chuyên môn của kỹ sư và theo dõi thời gian cam kết giải quyết.',
        outputData: 'Khách hàng nhận được phản hồi nhanh chóng, minh bạch và chuyên nghiệp.'
      },
      {
        scope: 'Scope J',
        moduleName: 'Báo Cáo Sức Khỏe Dịch Vụ Số & Tỷ Lệ Duy Trì (NRR)',
        inputData: 'Số lượng người dùng hoạt động, tỷ lệ tuân thủ cam kết SLA, doanh thu định kỳ hàng tháng (MRR).',
        coreProcess: 'Tổng hợp chỉ số duy trì doanh thu thuần (Net Revenue Retention) và mức độ hài lòng của khách hàng doanh nghiệp từ dữ liệu ghi nhận.',
        outputData: 'Báo cáo chỉ số vận hành hỗ trợ ban lãnh đạo theo dõi định kỳ.'
      }
    ],
    aiSpecializedDemo: {
      title: 'Kịch bản AI minh họa: Phân Loại Ticket & Trợ Lý RAG Tra Cứu Tài Liệu Kỹ Thuật',
      problemContext: '[Kịch bản mô phỏng] Khách hàng gửi thông báo lỗi: "Hệ thống trả về mã 429 Too Many Requests khi gọi endpoint đồng bộ đơn hàng". AI đọc nội dung ticket và tài liệu API được cấp quyền để gợi ý phân loại và trích dẫn quy chuẩn xử lý.',
      inputLabel: 'Nội dung ticket gửi từ khách hàng doanh nghiệp [Kịch bản mô phỏng]:',
      sampleInput: {
        'Khách hàng': 'Logix Platform (Gói hợp đồng: Enterprise SaaS) [Dữ liệu mô phỏng]',
        'Mô tả lỗi': 'Gặp lỗi HTTP 429 khi chạy script đồng bộ 5.000 đơn hàng lúc 14:00. Luồng xử lý bị ngắt quãng.',
        'Môi trường': 'Production API Gateway (v2.4.1)',
        'Người gửi': 'Nguyễn Hoàng Minh - Trưởng nhóm Tích hợp Đối tác'
      },
      aiProcessing: 'AI đọc nội dung lỗi và đối chiếu với tài liệu quy chuẩn API Rate Limit trong Scope H được cấp quyền...',
      aiOutput: {
        badge: 'Kịch bản AI minh họa: Phân loại sự cố API Rate Limit',
        summary: 'Tài khoản Enterprise có ngưỡng giới hạn 120 requests/phút theo tài liệu. Khách hàng đang thực hiện gửi đồng thời vượt ngưỡng quy định.',
        recommendations: [
          'Trích dẫn tài liệu nguồn: [Docs/API/V2-Rate-Limiting.md#Section-4.2] - Cơ chế Exponential Backoff & Retry.',
          'Gợi ý giải pháp kỹ thuật tham khảo: Hướng dẫn khách hàng sử dụng Bulk Endpoint (/api/v2/orders/batch) cho phép gửi tối đa 500 đơn/lần gọi.'
        ],
        riskLevel: 'MEDIUM',
        actionItems: [
          'Gợi ý dự thảo câu trả lời kỹ thuật vào ô phản hồi của ticket để kỹ sư rà soát trước khi gửi.',
          'Gợi ý kỹ sư xem xét nâng tạm thời Rate Limit trong 24 giờ nếu khách hàng đang trong đợt chuyển đổi dữ liệu lớn.'
        ]
      },
      disclaimer: 'Kịch bản AI minh họa phân tích trên dữ liệu giả lập. AI chỉ đọc tài liệu được cấp quyền, trích xuất đoạn văn bản có nguồn đối chiếu và đề xuất phương án; việc xử lý kỹ thuật do kỹ sư quyết định.'
    },
    trackedKpis: [
      {
        metric: 'Thời gian phản hồi lần đầu (First Response Time - FRT)',
        formula: 'Thời gian từ khi khách tạo ticket đến khi nhận được phản hồi đầu tiên của kỹ sư [Công thức tham khảo]',
        frequency: 'Theo dõi thời gian thực',
        targetBenchmark: '< 15 phút (cho sự cố P1/P2) [Mục tiêu tham khảo]',
        businessImpact: 'Giữ vững sự tin cậy của đối tác doanh nghiệp đối với dịch vụ công nghệ then chốt.'
      },
      {
        metric: 'Tỷ lệ giải quyết sự cố trong hạn cam kết (SLA Resolution Compliance)',
        formula: '(Số ticket giải quyết đúng thời hạn cam kết / Tổng số ticket tiếp nhận) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá hàng tuần',
        targetBenchmark: '≥ 98.0% [Mục tiêu tham khảo]',
        businessImpact: 'Tuân thủ hợp đồng dịch vụ cấp cao (SLA Agreement) và tránh rủi ro phạt hợp đồng.'
      },
      {
        metric: 'Tỷ lệ duy trì doanh thu thuần (Net Revenue Retention - NRR)',
        formula: '((Doanh thu định kỳ đầu kỳ + Doanh thu mở rộng - Doanh thu sụt giảm) / Doanh thu đầu kỳ) × 100% [Công thức tham khảo]',
        frequency: 'Đánh giá hàng quý',
        targetBenchmark: '≥ 110% [Mục tiêu tham khảo]',
        businessImpact: 'Chỉ số tham khảo phản ánh mức độ mở rộng của doanh nghiệp công nghệ.'
      }
    ],
    threeStageRoadmap: [
      {
        phase: 'Giai đoạn 1 (Tuần 1 - 3)',
        title: 'Hợp nhất cổng hỗ trợ ticket & Chuẩn hóa cam kết SLA',
        timeline: 'Tuần 1 - Tuần 3',
        focus: 'Đưa kênh tiếp nhận yêu cầu kỹ thuật về một hệ thống ticket tập trung; phân loại mức độ ưu tiên theo SLA.',
        deliverables: [
          'Cổng ticket hỗ trợ khách hàng B2B chuyên nghiệp',
          'Khung cam kết thời gian phản hồi SLA theo gói dịch vụ',
          'Quy trình phân luồng sự cố khẩn cấp cho đội ngũ kỹ thuật'
        ]
      },
      {
        phase: 'Giai đoạn 2 (Tuần 4 - 7)',
        title: 'Số hóa kho tri thức kỹ thuật & Liên thông với Product Backlog',
        timeline: 'Tuần 4 - Tuần 7',
        focus: 'Xây dựng kho Wiki kỹ thuật nội bộ; liên kết phản hồi khách hàng với quy trình phát triển tính năng mới.',
        deliverables: [
          'Hệ thống Wiki kỹ thuật và cẩm nang xử lý lỗi SOP',
          'Quy trình quản lý phiên bản phát hành (Release Note & Changelog)',
          'Kết nối API & Webhook liên thông các công cụ hiện có'
        ]
      },
      {
        phase: 'Giai đoạn 3 (Tuần 8 - 12)',
        title: 'Ứng dụng AI Search RAG & Dashboard sức khỏe dịch vụ',
        timeline: 'Tuần 8 - Tuần 12',
        focus: 'Kích hoạt AI hỗ trợ tra cứu tài liệu kỹ thuật có trích dẫn nguồn văn bản và bảng điều khiển phân tích NRR.',
        deliverables: [
          'Trợ lý AI RAG tra cứu tài liệu API và SOP có trích dẫn nguồn',
          'Dashboard BI phân tích chỉ số SLA và doanh thu định kỳ MRR',
          'Chuyển giao tài liệu quy trình vận hành dựa trên dữ liệu'
        ]
      }
    ]
  }
};
