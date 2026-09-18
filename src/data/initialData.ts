import { EnterpriseData } from '../types/enterprise';

export const initialEnterpriseData: EnterpriseData = {
  version: 'V1.0',
  profileStatus: 'ĐANG HOÀN THIỆN',
  lastUpdated: '2026-09-12 08:30',
  identity: {
    companyName: {
      id: 'identity_companyName',
      label: 'Tên doanh nghiệp',
      value: 'VMC Group',
      status: 'Đã xác nhận',
      notes: 'Tên định danh chính thức khởi tạo',
      verifiedAt: '2026-09-12'
    },
    brandName: {
      id: 'identity_brandName',
      label: 'Tên thương hiệu',
      value: 'VMC Group',
      status: 'Đã xác nhận',
      notes: 'Thương hiệu chủ đạo',
      verifiedAt: '2026-09-12'
    },
    shortName: {
      id: 'identity_shortName',
      label: 'Tên viết tắt',
      value: 'VMC',
      status: 'Đã xác nhận',
      notes: 'Viết tắt chuẩn',
      verifiedAt: '2026-09-12'
    },
    representative: {
      id: 'identity_representative',
      label: 'Người đại diện',
      value: 'Vũ Mạnh Cường',
      status: 'Đã xác nhận',
      notes: 'Đại diện khởi tạo hệ thống',
      verifiedAt: '2026-09-12'
    }
  },
  legal: {
    legalName: {
      id: 'legal_legalName',
      label: 'Tên pháp lý',
      value: 'Chưa xác lập chính thức (Hiện sử dụng thương hiệu VMC Group. Khi có hồ sơ pháp lý chính thức sẽ cập nhật theo đúng tên đăng ký)',
      status: 'Cần bổ sung',
      notes: 'Chưa có hồ sơ pháp lý chính thức'
    },
    businessCode: {
      id: 'legal_businessCode',
      label: 'Mã số doanh nghiệp',
      value: 'Chưa có',
      status: 'Chưa cập nhật',
      notes: 'Đang chuẩn bị hồ sơ đăng ký kinh doanh'
    },
    taxCode: {
      id: 'legal_taxCode',
      label: 'Mã số thuế',
      value: 'Chưa có',
      status: 'Chưa cập nhật',
      notes: 'Chờ mã số pháp nhân chính thức'
    }
  },
  contact: {
    website: {
      id: 'contact_website',
      label: 'Website chính thức',
      value: 'vmcgroup.com',
      status: 'Đã xác nhận',
      notes: 'Cổng thông tin trực tuyến chính thức',
      verifiedAt: '2026-09-12'
    },
    domain: {
      id: 'contact_domain',
      label: 'Tên miền chính thức',
      value: 'vmcgroup.com',
      status: 'Đã xác nhận',
      notes: 'Tên miền lõi của tập đoàn',
      verifiedAt: '2026-09-12'
    },
    email: {
      id: 'contact_email',
      label: 'Email doanh nghiệp',
      value: 'vmcaitraining@gmail.com',
      status: 'Đã xác nhận',
      notes: 'Hòm thư liên hệ công tác & đào tạo',
      verifiedAt: '2026-09-12'
    },
    phone: {
      id: 'contact_phone',
      label: 'Số điện thoại',
      value: '09632432052',
      status: 'Cần bổ sung',
      notes: 'Cần kiểm tra lại định dạng trước khi công khai chính thức'
    },
    address: {
      id: 'contact_address',
      label: 'Địa chỉ trụ sở chi tiết',
      value: 'Chưa cập nhật',
      status: 'Chưa cập nhật',
      notes: 'Đang cập nhật địa điểm văn phòng chính thức'
    },
    region: {
      id: 'contact_region',
      label: 'Khu vực hoạt động hiện tại',
      value: 'Hà Nội, Việt Nam',
      status: 'Đã xác nhận',
      notes: 'Trụ sở chính tại thủ đô Hà Nội',
      verifiedAt: '2026-09-12'
    }
  },
  market: {
    currentMarket: {
      id: 'market_current',
      label: 'Thị trường hoạt động',
      value: 'Toàn quốc — Việt Nam',
      status: 'Đã xác nhận',
      notes: 'Phủ sóng doanh nghiệp trên cả nước',
      verifiedAt: '2026-09-12'
    },
    expansionOrientation: {
      id: 'market_expansion',
      label: 'Định hướng thị trường',
      value: 'Sau khi hoàn thiện mô hình sản phẩm, công nghệ lõi và khả năng triển khai ổn định tại Việt Nam, VMC Group định hướng từng bước mở rộng ra thị trường quốc tế.',
      status: 'Đã xác nhận',
      notes: 'Chiến lược phát triển dài hạn',
      verifiedAt: '2026-09-12'
    }
  },
  strategy: [
    {
      id: 'strat_nature',
      title: 'Bản chất doanh nghiệp',
      content: 'VMC Group là đơn vị xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI.',
      details: [
        'VMC Group không định vị đơn thuần là: Công ty thiết kế website, công ty làm chatbot, công ty phần mềm, đơn vị cung cấp CRM, đơn vị đào tạo AI, đơn vị tự động hóa riêng lẻ.',
        'Vai trò hướng tới: Đơn vị thiết kế và triển khai kiến trúc doanh nghiệp AI, kết nối con người, dữ liệu, quy trình, phần mềm và AI thành một hệ thống vận hành thống nhất.',
        'Trọng tâm: Không tập trung vào số lượng công cụ doanh nghiệp sử dụng; tập trung vào khả năng vận hành thực tế, dữ liệu được kết nối, quy trình được chuẩn hóa, tự động hóa được kiểm soát và hiệu quả quản trị được nâng cao.'
      ],
      status: 'Đã xác nhận'
    },
    {
      id: 'strat_positioning',
      title: 'Định vị doanh nghiệp',
      content: 'VMC Group — Xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI.',
      details: [
        'Vai trò: Kiến trúc sư hệ thống doanh nghiệp AI cho doanh nghiệp Việt Nam.',
        'Xây dựng kiến trúc lõi dùng chung, cho phép cấu hình theo từng doanh nghiệp.',
        'Tùy biến theo ngành, quy mô, quy trình và dữ liệu riêng.',
        'Có khả năng triển khai lặp lại, nâng cấp liên tục và thương mại hóa cho nhiều doanh nghiệp.'
      ],
      status: 'Đã xác nhận'
    },
    {
      id: 'strat_vision',
      title: 'Tầm nhìn',
      content: 'Trở thành đơn vị tiên phong xây dựng hệ thống doanh nghiệp AI-native tại Việt Nam.',
      details: [
        'Giúp doanh nghiệp chuyển đổi từ: Dữ liệu phân mảnh, phòng ban vận hành rời rạc, nhiều thao tác thủ công, nhiều phần mềm không kết nối, thông tin khó kiểm soát, người quản lý thiếu dữ liệu ra quyết định.',
        'Sang mô hình: Hệ thống thống nhất, dữ liệu kết nối, quy trình chuẩn hóa, tự động hóa, AI hỗ trợ phân tích, AI hỗ trợ ra quyết định, AI có khả năng thực thi trong giới hạn được kiểm soát.',
        'Định hướng dài hạn: Xây dựng kiến trúc có thể tái sử dụng và tùy biến theo ngành.'
      ],
      status: 'Đã xác nhận'
    },
    {
      id: 'strat_mission',
      title: 'Sứ mệnh',
      content: 'Kiến tạo 4 trụ cột sứ mệnh chuyển đổi năng lực vận hành số và AI cho doanh nghiệp.',
      details: [
        'Sứ mệnh 1: Biến công nghệ, dữ liệu và AI thành năng lực vận hành thực tế của doanh nghiệp.',
        'Sứ mệnh 2: Kết nối con người, dữ liệu, quy trình, phần mềm và AI trong một kiến trúc thống nhất.',
        'Sứ mệnh 3: Giảm các thao tác thủ công trong những quy trình có thể chuẩn hóa và tự động hóa.',
        'Sứ mệnh 4: Xây nền tảng có khả năng mở rộng, hạn chế việc doanh nghiệp phải ghép quá nhiều công cụ rời rạc.'
      ],
      status: 'Đã xác nhận'
    },
    {
      id: 'strat_diff',
      title: 'Điểm khác biệt',
      content: 'Không bán thêm một công cụ rời rạc — Xây dựng một hệ thống doanh nghiệp vận hành thống nhất.',
      details: [
        'Doanh nghiệp có thể: Nhìn thấy dữ liệu, kết nối dữ liệu, quản lý người dùng, điều hành phòng ban, chuẩn hóa quy trình, tự động hóa, sử dụng AI, phân tích, ra quyết định, thực thi có kiểm soát.',
        'Khác biệt cốt lõi: Tiếp cận từ tầng kiến trúc nền tảng và dòng chảy vận hành xuyên suốt chứ không giải quyết chắp vá ngọn.'
      ],
      status: 'Đã xác nhận'
    },
    {
      id: 'strat_promise',
      title: 'Lời hứa thương hiệu',
      content: 'VMC biến AI từ một công cụ thành một năng lực vận hành thực tế của doanh nghiệp.',
      details: [
        'Kết quả khách hàng cần cảm nhận: Doanh nghiệp có thể nhìn thấy, kết nối và điều hành các hoạt động quan trọng trong một hệ thống thống nhất.',
        'VMC Group không hứa AI thay thế hoàn toàn con người.',
        'AI được sử dụng để: Tăng năng lực nhân sự, giảm thao tác thủ công, tự động hóa, phân tích dữ liệu, hỗ trợ ra quyết định, thực thi có kiểm soát.'
      ],
      status: 'Đã xác nhận'
    },
    {
      id: 'strat_message',
      title: 'Thông điệp thương hiệu',
      content: 'Hệ thống thông điệp cốt lõi phân tầng từ tập đoàn đến sản phẩm và định vị.',
      details: [
        'Thông điệp cấp doanh nghiệp: VMC Group — Xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI.',
        'Thông điệp sản phẩm: AI ENTERPRISE — Hệ điều hành doanh nghiệp bằng AI.',
        'Thông điệp khác biệt: Biến AI từ một công cụ thành một năng lực vận hành thực tế của doanh nghiệp.',
        'Cảm nhận mục tiêu: Doanh nghiệp có thể nhìn thấy, kết nối và điều hành các hoạt động quan trọng trong một hệ thống thống nhất.'
      ],
      status: 'Đã xác nhận'
    },
    {
      id: 'strat_comm_rules',
      title: 'Nguyên tắc truyền thông',
      content: 'Kỷ luật truyền thông trung thực, dựa trên kết quả vận hành và dữ liệu thực chứng.',
      details: [
        'Nói về kết quả vận hành trước, tính năng sau.',
        'Không phô trương công nghệ nếu không chứng minh được giá trị.',
        'Không tự tuyên bố số liệu thành công chưa được xác nhận.',
        'Không tự tạo khách hàng, đối tác, chứng nhận hoặc case study.',
        'Không công bố năng lực chưa được xác nhận.',
        'Ưu tiên các thông điệp: Kết nối, Thống nhất, Tự động hóa, Kiểm soát, Dữ liệu, Hiệu quả.'
      ],
      status: 'Đã xác nhận'
    }
  ],
  coreProduct: {
    name: 'AI ENTERPRISE',
    tagline: 'Hệ điều hành doanh nghiệp bằng AI',
    role: 'AI ENTERPRISE là nền tảng lõi của VMC Group để xây dựng, quản trị và vận hành hệ thống doanh nghiệp bằng dữ liệu, công nghệ và AI. Vừa là hệ thống nội bộ của VMC Group, vừa là sản phẩm thương mại hóa cho khách hàng doanh nghiệp.',
    deploymentPrinciples: [
      'Website riêng cho từng doanh nghiệp.',
      'Người dùng riêng biệt và bảo mật cao.',
      'Dữ liệu độc lập và sở hữu riêng.',
      'Quy trình và giao diện cấu hình linh hoạt.',
      'AI riêng biệt được huấn luyện theo ngữ cảnh tổ chức.',
      'Cùng sử dụng chung kiến trúc lõi được kiểm soát của AI ENTERPRISE.'
    ],
    scopes: [
      {
        id: 'scope_a',
        code: 'A',
        name: 'Website và quản trị website',
        description: 'Cổng thông tin & thu hút khách hàng trực tuyến kết nối trực tiếp với lõi',
        items: ['Website doanh nghiệp', 'Nội dung', 'Hình ảnh', 'Video', 'Landing page', 'Biểu mẫu', 'Thu lead', 'Quản lý nhiều phiên bản giao diện', 'Quản trị website từ hệ thống Admin']
      },
      {
        id: 'scope_b',
        code: 'B',
        name: 'Kinh doanh / CRS / CRM',
        description: 'Quản trị khách hàng, pipeline kinh doanh và chuyển đổi doanh thu',
        items: ['Khách hàng', 'Lead', 'Pipeline', 'Cuộc gọi', 'Tư vấn', 'Báo giá', 'Hợp đồng', 'Đơn hàng', 'Doanh thu', 'Customer 360', 'Lịch sử tương tác']
      },
      {
        id: 'scope_c',
        code: 'C',
        name: 'Marketing',
        description: 'Vận hành chiến dịch đa kênh và đo lường chuyển đổi thông minh',
        items: ['Chiến dịch', 'Nguồn khách hàng', 'Nội dung', 'Biểu mẫu', 'Dữ liệu Marketing', 'Phân tích hiệu quả', 'Tự động hóa']
      },
      {
        id: 'scope_d',
        code: 'D',
        name: 'Chăm sóc khách hàng',
        description: 'Tối ưu trải nghiệm hậu mãi, giữ chân và gia tăng giá trị trọn đời',
        items: ['Lịch sử chăm sóc', 'Hội thoại', 'Ticket', 'Bảo hành', 'Khiếu nại', 'Gia hạn', 'Upsale', 'Mức độ hài lòng']
      },
      {
        id: 'scope_e',
        code: 'E',
        name: 'Tài chính — Kế toán',
        description: 'Kiểm soát dòng tiền, công nợ và báo cáo tài chính minh bạch',
        items: ['Thu', 'Chi', 'Quỹ', 'Ngân hàng', 'Hóa đơn', 'Công nợ', 'Doanh thu', 'Báo cáo']
      },
      {
        id: 'scope_f',
        code: 'F',
        name: 'Nhân sự',
        description: 'Quản trị vòng đời nhân sự, chấm công và đánh giá hiệu suất',
        items: ['Nhân viên', 'Tuyển dụng', 'Chấm công', 'Điểm danh', 'Đơn nghỉ', 'Đơn đi muộn', 'KPI', 'Đào tạo', 'Đánh giá']
      },
      {
        id: 'scope_g',
        code: 'G',
        name: 'Công việc — Dự án — Vận hành',
        description: 'Chuẩn hóa quy trình làm việc, SOP và phối hợp liên phòng ban',
        items: ['Kế hoạch', 'Task', 'Quy trình', 'SOP', 'Phê duyệt', 'Tiến độ', 'Trách nhiệm', 'Họp', 'Trao đổi nội bộ']
      },
      {
        id: 'scope_h',
        code: 'H',
        name: 'Tri thức doanh nghiệp',
        description: 'Số hóa tri thức, tài liệu và quy chuẩn đào tạo nội bộ',
        items: ['Tài liệu', 'Wiki', 'FAQ', 'SOP', 'Prompt', 'BCM', 'Khóa đào tạo nội bộ', 'Kho kiến thức']
      },
      {
        id: 'scope_i',
        code: 'I',
        name: 'AI & Trợ lý thông minh',
        description: 'Mạng lưới AI Agent chuyên sâu theo từng vai trò nghiệp vụ',
        items: ['AI CEO', 'AI Kinh doanh', 'AI Marketing', 'AI CSKH', 'AI Nhân sự', 'AI Tài chính', 'AI Website', 'AI Voice', 'AI Workflow', 'AI Assistant', 'AI Agent', 'AI Search', 'RAG']
      },
      {
        id: 'scope_j',
        code: 'J',
        name: 'Báo cáo và phân tích',
        description: 'Hệ thống BI thời gian thực hỗ trợ ra quyết định dựa trên dữ liệu',
        items: ['Dashboard', 'KPI', 'OKR', 'BI', 'Doanh thu', 'Hiệu quả Marketing', 'Hiệu quả Sale', 'Hiệu quả CSKH', 'Hiệu quả nhân sự', 'Hiệu quả tài chính', 'Hiệu quả website', 'Hiệu quả AI', 'Hiệu quả tự động hóa', 'Dự báo', 'Báo cáo tùy chỉnh']
      },
      {
        id: 'scope_k',
        code: 'K',
        name: 'Hệ thống & Tích hợp',
        description: 'Kiến trúc bảo mật cấp doanh nghiệp, phân quyền và khả năng mở rộng',
        items: ['API', 'Webhook', 'Tích hợp dịch vụ bên thứ ba', 'Phân quyền', 'Bảo mật', 'Nhật ký', 'Audit Log', 'Truy vết', 'Sao lưu', 'Khôi phục']
      }
    ]
  },
  ecosystem: [
    { id: 'eco_1', name: 'AI ENTERPRISE', tagline: 'Nền tảng vận hành doanh nghiệp bằng AI', description: 'Kiến trúc lõi thống nhất kết nối toàn diện dữ liệu và phòng ban.', status: 'Đã xác nhận' },
    { id: 'eco_2', name: 'Triển khai AI doanh nghiệp', tagline: 'Dịch vụ kiến trúc và chuyển đổi', description: 'Khảo sát, phân tích, thiết kế kiến trúc, cấu hình và triển khai chuyên nghiệp.', status: 'Đã xác nhận' },
    { id: 'eco_3', name: 'Tự động hóa doanh nghiệp', tagline: 'Vận hành tối ưu quy trình', description: 'Xây dựng workflow tự động, tích hợp đa nền tảng và AI Agent thực thi.', status: 'Đã xác nhận' },
    { id: 'eco_4', name: 'Website doanh nghiệp', tagline: 'Cổng thông tin AI kết nối trực tiếp', description: 'Website kết nối trực tiếp với hệ thống lõi và dữ liệu doanh nghiệp.', status: 'Đã xác nhận' },
    { id: 'eco_5', name: 'CRS / CRM doanh nghiệp', tagline: 'Quản trị khách hàng 360 độ', description: 'Quản trị khách hàng, lead, pipeline và xuyên suốt hành trình trải nghiệm.', status: 'Đã xác nhận' },
    { id: 'eco_6', name: 'AI Agent doanh nghiệp', tagline: 'Trợ lý nghiệp vụ chuyên sâu', description: 'Trợ lý AI và Agent theo từng phòng ban, vai trò và nghiệp vụ thực tế.', status: 'Đã xác nhận' },
    { id: 'eco_7', name: 'Tư vấn kiến trúc AI', tagline: 'Hoạch định chiến lược hệ thống', description: 'Thiết kế mô hình dữ liệu, quy trình, kiến trúc AI và lộ trình chuyển đổi.', status: 'Đã xác nhận' },
    { id: 'eco_8', name: 'Tích hợp hệ thống', tagline: 'Mở rộng liên kết linh hoạt', description: 'Kết nối API, webhook, đồng bộ dữ liệu và dịch vụ chuyên ngành của bên thứ ba.', status: 'Đã xác nhận' },
    { id: 'eco_9', name: 'Đào tạo và chuyển giao', tagline: 'Nâng cao năng lực tổ chức', description: 'Đào tạo chuyên sâu cho người dùng cuối, quản trị viên và đội ngũ vận hành.', status: 'Đã xác nhận' }
  ],
  customerAndMarket: {
    primaryTarget: 'Doanh nghiệp vừa và đang tăng trưởng, đã có hoạt động kinh doanh thực tế nhưng bắt đầu gặp giới hạn về con người, dữ liệu, quy trình, công nghệ, khả năng quản trị và khả năng phối hợp giữa các phòng ban.',
    referenceScale: 'Khoảng 20 – 500 nhân sự',
    referenceRevenue: 'Khoảng 10 – 500+ tỷ đồng/năm (Mức tham chiếu thương mại, không phải điều kiện bắt buộc)',
    suitableCharacteristics: [
      'Có nhu cầu cải tiến vận hành thực chất.',
      'Có ngân sách chuyển đổi công nghệ và AI.',
      'Có người chịu trách nhiệm dẫn dắt dự án từ phía lãnh đạo.',
      'Chấp nhận chuẩn hóa dữ liệu và quy trình nghiệp vụ.',
      'Có mong muốn ứng dụng AI vào thực tế sản xuất kinh doanh.',
      'Có nhu cầu kết nối nhiều phòng ban trên một hệ thống duy nhất.'
    ],
    priorityIndustries: [
      'Thương mại',
      'Dịch vụ',
      'Giáo dục',
      'Bất động sản',
      'Sản xuất',
      'Phân phối',
      'Xây dựng',
      'Doanh nghiệp công nghệ'
    ],
    nonPriorityCustomers: [
      'Chỉ cần website giá rẻ, đơn giản.',
      'Chỉ cần chatbot đơn giản, không tích hợp quy trình.',
      'Không có người chịu trách nhiệm triển khai và điều phối.',
      'Không muốn chuẩn hóa nghiệp vụ nội bộ.',
      'Muốn AI tự động thực hiện hành động rủi ro mà không có cơ chế kiểm soát.',
      'Yêu cầu trái pháp luật hoặc vi phạm đạo đức kinh doanh.',
      'Yêu cầu xâm phạm hoặc sử dụng sai lệch dữ liệu riêng tư.'
    ],
    implementationSteps: [
      'Bước 1: Khảo sát hiện trạng doanh nghiệp',
      'Bước 2: Phân tích mô hình kinh doanh và quy trình nghiệp vụ',
      'Bước 3: Thiết kế kiến trúc hệ thống dữ liệu & AI',
      'Bước 4: Cấu hình các lõi chức năng cần sử dụng',
      'Bước 5: Thiết lập dữ liệu, tài khoản và phân quyền người dùng',
      'Bước 6: Tích hợp hệ thống hiện có qua API / Webhook',
      'Bước 7: Thiết lập AI Agent và ranh giới quyền AI',
      'Bước 8: Thiết kế / cấu hình website và cổng tiếp nhận',
      'Bước 9: Kiểm thử nghiệp vụ và an toàn bảo mật',
      'Bước 10: Đào tạo người dùng và chuyển giao quản trị',
      'Bước 11: Vận hành chính thức (Go-Live)',
      'Bước 12: Bảo trì, giám sát hiệu năng và nâng cấp liên tục'
    ],
    pricingModel: 'Hiện chưa có bảng giá chính thức. VMC Group không định hướng công khai một mức giá duy nhất vì AI ENTERPRISE là giải pháp doanh nghiệp may đo theo kiến trúc lõi. Giá phụ thuộc vào quy mô, số lượng người dùng, số module kích hoạt, khối lượng dữ liệu, mức tùy biến, mức độ tự động hóa và phạm vi chuyển giao. CTA: Nhận tư vấn và xây dựng cấu hình phù hợp.'
  },
  brandColors: [
    { id: 'col_1', name: 'Deep Navy', hex: '#0B1F3A', role: 'Primary', description: 'Màu chính — Sang trọng, vững chãi, uy tín doanh nghiệp', usageRatio: '20%' },
    { id: 'col_2', name: 'Royal Blue', hex: '#155EEF', role: 'Secondary', description: 'Màu công nghệ — Hiện đại, kết nối, năng động', usageRatio: '20%' },
    { id: 'col_3', name: 'Electric Cyan', hex: '#06B6D4', role: 'AI', description: 'Màu AI — Trí tuệ nhân tạo, đổi mới sáng tạo, bứt phá', usageRatio: '7%' },
    { id: 'col_4', name: 'VMC Gold', hex: '#D9A62E', role: 'Accent', description: 'Màu nhấn cao cấp — Tinh tế, thịnh vượng, điểm nhấn tinh gọn', usageRatio: '3%' },
    { id: 'col_5', name: 'Ice White', hex: '#F8FAFC', role: 'Background', description: 'Màu nền chính — Tinh khiết, thoáng đãng, dễ chịu thị giác', usageRatio: '70%' },
    { id: 'col_6', name: 'Surface White', hex: '#FFFFFF', role: 'Surface', description: 'Màu bề mặt Card / Modal / Container', usageRatio: 'Nền container' },
    { id: 'col_7', name: 'Slate Dark', hex: '#0F172A', role: 'Text', description: 'Màu chữ chính — Đảm bảo độ tương phản WCAG AA cao nhất', usageRatio: 'Tiêu đề & Body' },
    { id: 'col_8', name: 'Cool Gray', hex: '#64748B', role: 'Text', description: 'Màu chữ phụ và chú thích nhãn phụ', usageRatio: 'Subtitle' },
    { id: 'col_9', name: 'Border Gray', hex: '#E2E8F0', role: 'Border', description: 'Màu đường viền phân tách các khối', usageRatio: 'Đường phân cách' },
    { id: 'col_10', name: 'Emerald Success', hex: '#16A34A', role: 'Success', description: 'Trạng thái thành công / Đã xác nhận / Hoàn tất', usageRatio: 'Thông báo' },
    { id: 'col_11', name: 'Amber Warning', hex: '#F59E0B', role: 'Warning', description: 'Cảnh báo / Chờ duyệt / Cần lưu ý', usageRatio: 'Cảnh báo' },
    { id: 'col_12', name: 'Rose Danger', hex: '#DC2626', role: 'Danger', description: 'Nguy hiểm / Thiếu dữ liệu / Lỗi', usageRatio: 'Lỗi' }
  ],
  brandLogos: [
    {
      id: 'logo_1',
      title: 'Logo chính thức',
      type: 'Logo chính',
      status: 'Đã xác nhận',
      format: 'SVG Vector',
      url: '/brand/logo/vmc-logo-primary.svg',
      usageNote: 'Logo chuẩn chính thức của VMC Group, sử dụng cho các tài liệu, nền tảng và điểm chạm thương hiệu chính.'
    },
    {
      id: 'logo_2',
      title: 'Logo bố cục ngang',
      type: 'Logo ngang',
      status: 'Đã xác nhận',
      format: 'SVG Vector',
      url: '/brand/logo/vmc-logo-horizontal.svg',
      usageNote: 'Dành cho thanh điều hướng Header, Navbar, tài liệu văn bản ngang'
    },
    {
      id: 'logo_3',
      title: 'Biểu tượng thương hiệu (Symbol)',
      type: 'Logo biểu tượng',
      status: 'Đã xác nhận',
      format: 'SVG Vector',
      url: '/brand/logo/vmc-symbol.svg',
      usageNote: 'Avatar, App Icon, dấu ấn thương hiệu và mạng xã hội'
    },
    {
      id: 'logo_4',
      title: 'Logo nền sáng',
      type: 'Logo nền sáng',
      status: 'Đã xác nhận',
      format: 'SVG Vector',
      url: '/brand/logo/vmc-logo-light.svg',
      usageNote: 'Hiển thị trên nền trắng hoặc sáng màu (#F8FAFC, #FFFFFF)'
    },
    {
      id: 'logo_5',
      title: 'Logo nền tối',
      type: 'Logo nền tối',
      status: 'Đã xác nhận',
      format: 'SVG Vector',
      url: '/brand/logo/vmc-logo-dark.svg',
      usageNote: 'Hiển thị trên nền tối hoặc Navy (#0B1F3A, #0F172A)'
    },
    {
      id: 'logo_6',
      title: 'Logo đơn sắc',
      type: 'Logo trắng',
      status: 'Đã xác nhận',
      format: 'SVG Vector',
      url: '/brand/logo/vmc-logo-monochrome.svg',
      usageNote: 'In ấn đơn sắc, ấn phẩm khắc laser, quà tặng doanh nghiệp'
    },
    {
      id: 'logo_7',
      title: 'Favicon & App Icon',
      type: 'Favicon',
      status: 'Đã xác nhận',
      format: 'SVG Vector',
      url: '/brand/logo/vmc-symbol.svg',
      usageNote: 'Hiển thị trên tab trình duyệt và bookmark'
    }
  ],
  activeWebsiteLogoId: 'logo_1',
  typography: [
    { level: 'Heading', fontFamily: 'Be Vietnam Pro', weight: 'Bold / ExtraBold (700 – 800)', size: '24px – 36px', usage: 'Tiêu đề trang lớn, banner chính, tiêu đề cấp 1' },
    { level: 'Subheading', fontFamily: 'Be Vietnam Pro', weight: 'SemiBold (600 – 700)', size: '18px – 22px', usage: 'Tiêu đề module, tiêu đề card, section' },
    { level: 'Body', fontFamily: 'Be Vietnam Pro', weight: 'Regular / Medium (400 – 500)', size: '15px – 16px', usage: 'Văn bản nội dung, mô tả, trường thông tin' },
    { level: 'Caption', fontFamily: 'Be Vietnam Pro', weight: 'Regular / Medium (400)', size: '12px – 13px', usage: 'Nhãn phụ, ghi chú trạng thái, chú thích nhỏ' },
    { level: 'Number', fontFamily: 'Be Vietnam Pro', weight: 'SemiBold / Bold (600 – 700)', size: '20px – 32px', usage: 'Chỉ số đo lường, Dashboard KPI, số liệu thống kê' }
  ],
  brandPersonality: [
    'Hiện đại (Modern & Forward-thinking)',
    'Khoa học (Scientific & Methodical)',
    'Công nghệ (Tech-driven)',
    'Chuyên nghiệp (Professional & Rigorous)',
    'Tin cậy (Trustworthy & Accountable)',
    'Cao cấp (Enterprise Premium)',
    'Dễ sử dụng (Intuitive & Ergonomic)'
  ],
  designPrinciples: [
    'Tối giản nhưng không đơn điệu — Mọi chi tiết đều có công năng rõ ràng.',
    'Khoa học nhưng không khô cứng — Bố cục mạch lạc, trực quan và dễ tiếp nhận.',
    'Công nghệ nhưng không phô trương — Không lạm dụng hiệu ứng neon hay thị giác hào nhoáng.',
    'Cao cấp nhưng vẫn dễ sử dụng — Trải nghiệm vận hành thuận tiện cho người dùng doanh nghiệp.',
    'Ưu tiên giao diện sáng (Light Theme) — Tạo sự sạch sẽ, chuẩn mực và thông thoáng cho dữ liệu lớn.',
    'Tỷ lệ màu chuẩn: 70% Trắng/Xám sáng — 20% Deep Navy & Royal Blue — 7% Electric Cyan — 3% VMC Gold điểm nhấn.'
  ],
  aiRules: [
    'AI không được tự tạo sự thật doanh nghiệp.',
    'AI không được tự bịa: Giá, chính sách, doanh thu, khách hàng, đối tác, chứng nhận, năng lực, tính năng, cam kết.',
    'AI phải sử dụng dữ liệu có nguồn kiểm chứng rõ ràng.',
    'AI chỉ được truy cập dữ liệu trong phạm vi quyền được cấp.',
    'Quy trình thay đổi quan trọng: AI đề xuất → Kiểm tra đối chiếu → Con người phê duyệt → Thực thi → Ghi nhật ký audit.',
    'Mọi AI Agent phải bị giới hạn nghiêm ngặt bởi vai trò, quyền hạn, phạm vi dữ liệu và phạm vi thao tác.'
  ],
  dataRules: [
    'Mỗi bản ghi dữ liệu quan trọng phải có đầy đủ: Mã dữ liệu, tên, nội dung, nguồn, trạng thái, phiên bản, ngày cập nhật, người cập nhật, ngày hiệu lực, ngày hết hiệu lực, phạm vi sử dụng, mức độ quan trọng, ghi chú.',
    'Dữ liệu quan trọng phải truy vết được nguồn gốc và lịch sử chỉnh sửa.',
    'Dữ liệu hết hiệu lực phải được đánh dấu trạng thái, không tự động xóa âm thầm.',
    'Dữ liệu dùng cho AI huấn luyện và suy luận phải được kiểm soát chặt chẽ về nguồn và phiên bản.'
  ],
  dataPolicies: [
    'Doanh nghiệp sở hữu hoàn toàn dữ liệu của mình: VMC Group cung cấp hệ thống, kiến trúc, công nghệ và dịch vụ triển khai — Tuyệt đối không xây dựng mô hình cố tình khóa (lock-in) dữ liệu khách hàng.',
    'Nguyên tắc dữ liệu đa khách hàng (Multi-tenant): Mỗi doanh nghiệp triển khai trên AI ENTERPRISE phải có không gian dữ liệu riêng biệt. Tuyệt đối không sử dụng dữ liệu của doanh nghiệp A để trả lời hoặc phục vụ doanh nghiệp B.',
    'Cơ chế bảo mật toàn diện: Phân tách dữ liệu vật lý/logic, phân quyền nhiều lớp, nhật ký truy cập, nhật ký AI, nhật ký API, truy vết audit log, sao lưu định kỳ và khôi phục sự cố.'
  ],
  missingDataItems: [
    { id: 1, title: 'Tên pháp nhân chính thức', category: 'Pháp lý', priority: 'Cao', status: 'Chưa có', note: 'Chờ hoàn tất hồ sơ đăng ký doanh nghiệp' },
    { id: 2, title: 'Mã số doanh nghiệp', category: 'Pháp lý', priority: 'Cao', status: 'Chưa có', note: 'Theo giấy chứng nhận đăng ký kinh doanh' },
    { id: 3, title: 'Mã số thuế', category: 'Pháp lý', priority: 'Cao', status: 'Chưa có', note: 'Theo thông tin cơ quan thuế' },
    { id: 4, title: 'Địa chỉ trụ sở chi tiết', category: 'Liên hệ', priority: 'Cao', status: 'Chưa có', note: 'Cần cập nhật số nhà, đường, quận, phường' },
    { id: 5, title: 'Xác nhận lại số điện thoại', category: 'Liên hệ', priority: 'Cao', status: 'Đang xử lý', note: 'Kiểm tra chuẩn định dạng 10 số trước khi công khai' },
    { id: 6, title: 'Bộ logo chuẩn đa định dạng', category: 'Thương hiệu', priority: 'Trung bình', status: 'Đang xử lý', note: 'Tạm dùng logo V1, đang xuất SVG/vector chuẩn' },
    { id: 7, title: 'Bộ nhận diện thương hiệu chính thức (Brand Guidelines)', category: 'Thương hiệu', priority: 'Trung bình', status: 'Chưa có', note: 'Sổ tay hướng dẫn sử dụng thương hiệu' },
    { id: 8, title: 'Danh mục sản phẩm / dịch vụ thực tế chi tiết', category: 'Sản phẩm', priority: 'Cao', status: 'Chưa có', note: 'Đặc tả chi tiết từng gói giải pháp' },
    { id: 9, title: 'Giá và mô hình báo giá thực tế', category: 'Kinh doanh', priority: 'Cao', status: 'Chưa có', note: 'Bảng giá tham chiếu theo quy mô và module' },
    { id: 10, title: 'Chính sách triển khai cho khách hàng', category: 'Vận hành', priority: 'Trung bình', status: 'Chưa có', note: 'Cam kết SLA, thời gian và mốc nghiệm thu' },
    { id: 11, title: 'Chính sách bảo trì hệ thống', category: 'Kỹ thuật', priority: 'Trung bình', status: 'Chưa có', note: 'Định kỳ kiểm tra, sao lưu và tối ưu' },
    { id: 12, title: 'Chính sách bảo hành sản phẩm', category: 'Kỹ thuật', priority: 'Trung bình', status: 'Chưa có', note: 'Thời hạn bảo hành lỗi phần mềm' },
    { id: 13, title: 'Chính sách nâng cấp phiên bản', category: 'Sản phẩm', priority: 'Thấp', status: 'Chưa có', note: 'Lộ trình cập nhật tính năng định kỳ' },
    { id: 14, title: 'Case study được phép công khai', category: 'Marketing', priority: 'Trung bình', status: 'Chưa có', note: 'Chỉ công bố khi khách hàng ký chấp thuận' },
    { id: 15, title: 'Danh sách khách hàng được phép công khai', category: 'Marketing', priority: 'Trung bình', status: 'Chưa có', note: 'Tuyệt đối không tự bịa thông tin' },
    { id: 16, title: 'Đối tác chiến lược được phép công bố', category: 'Đối tác', priority: 'Trung bình', status: 'Chưa có', note: 'Cần văn bản xác nhận hợp tác' },
    { id: 17, title: 'Cơ cấu tổ chức doanh nghiệp chính thức', category: 'Tổ chức', priority: 'Thấp', status: 'Chưa có', note: 'Sơ đồ khối các phòng ban' },
    { id: 18, title: 'Danh sách người có quyền phê duyệt thay đổi', category: 'Quản trị', priority: 'Cao', status: 'Chưa có', note: 'Phân cấp quyền admin & duyệt dữ liệu' },
    { id: 19, title: 'Mục tiêu doanh thu năm tài chính', category: 'Chiến lược', priority: 'Thấp', status: 'Chưa có', note: 'Kế hoạch mục tiêu nội bộ' },
    { id: 20, title: 'Mục tiêu tăng trưởng thị phần', category: 'Chiến lược', priority: 'Thấp', status: 'Chưa có', note: 'KPI tăng trưởng khách hàng' },
    { id: 21, title: 'Danh mục dữ liệu AI được phép đọc', category: 'Quản trị AI', priority: 'Cao', status: 'Chưa có', note: 'Phân loại tài liệu RAG nội bộ' },
    { id: 22, title: 'Danh mục dữ liệu AI được phép sửa', category: 'Quản trị AI', priority: 'Cao', status: 'Chưa có', note: 'Giới hạn chặt chẽ phạm vi ghi của AI' },
    { id: 23, title: 'Danh mục hành động AI được phép thực thi', category: 'Quản trị AI', priority: 'Cao', status: 'Chưa có', note: 'Nguyên tắc an toàn AI Agent' },
    { id: 24, title: 'Yêu cầu bảo mật và tiêu chuẩn riêng', category: 'Bảo mật', priority: 'Cao', status: 'Chưa có', note: 'Tiêu chuẩn bảo vệ dữ liệu cá nhân & đám mây' }
  ]
};
