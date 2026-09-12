import { EnterpriseData } from '../types/enterprise';
import { DepartmentSolution, IndustrySolution, AiAgentProfile, NeedSolution } from '../types/website';

export const departmentSolutions: DepartmentSolution[] = [
  {
    id: 'dept_sales',
    slug: 'sales',
    name: 'Kinh doanh (Sales)',
    tagline: 'Quản trị khách hàng, pipeline kinh doanh và chuyển đổi doanh thu đa kênh',
    iconName: 'TrendingUp',
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
  {
    id: 'dept_marketing',
    slug: 'marketing',
    name: 'Marketing',
    tagline: 'Vận hành chiến dịch đa kênh, đo lường ROI và nuôi dưỡng khách hàng tiềm năng',
    iconName: 'Megaphone',
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
  {
    id: 'dept_cs',
    slug: 'customer-service',
    name: 'Chăm sóc khách hàng (CSKH)',
    tagline: 'Tối ưu trải nghiệm hậu mãi, hỗ trợ nhanh chóng và gia tăng vòng đời khách hàng',
    iconName: 'Headphones',
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
  {
    id: 'dept_hr',
    slug: 'hr',
    name: 'Nhân sự & Đào tạo',
    tagline: 'Quản trị vòng đời nhân sự, chấm công, hiệu suất và phát triển năng lực nội bộ',
    iconName: 'Users',
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
  {
    id: 'dept_finance',
    slug: 'finance',
    name: 'Tài chính — Kế toán',
    tagline: 'Kiểm soát dòng tiền, công nợ, ngân sách và báo cáo tài chính minh bạch thời gian thực',
    iconName: 'CreditCard',
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
  {
    id: 'dept_management',
    slug: 'management',
    name: 'Điều hành doanh nghiệp',
    tagline: 'Hệ thống điều hành trung tâm, chuẩn hóa SOP và phân tích dữ liệu toàn diện cho lãnh đạo',
    iconName: 'ShieldCheck',
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
];

export const industriesSolutions: IndustrySolution[] = [
  {
    id: 'ind_trade',
    slug: 'trade',
    name: 'Thương mại & Bán lẻ',
    tagline: 'Kết nối bán hàng đa kênh, kiểm soát tồn kho và cá nhân hóa trải nghiệm khách mua',
    iconName: 'ShoppingBag',
    characteristics: [
      'Giao dịch phát sinh liên tục với khối lượng đơn hàng lớn.',
      'Khách hàng mua qua nhiều kênh: Cửa hàng, Website, Sàn TMĐT, Mạng xã hội.',
      'Yêu cầu phản hồi nhanh, báo giá chuẩn và giao hàng chính xác.'
    ],
    operatingProblems: [
      'Dữ liệu khách hàng trên các kênh bị phân mảnh, khó quản lý tổng thể.',
      'Không kịp thời chăm sóc khách hàng cũ dẫn đến tỷ lệ mua lại thấp.',
      'Chênh lệch tồn kho và đối soát thanh toán mất nhiều thời gian.'
    ],
    suitableModules: [
      'Scope B: CRS / CRM Thương mại & Đơn hàng',
      'Scope A: Website bán hàng & Cổng tiếp nhận Lead',
      'Scope C: Marketing tự động nuôi dưỡng khách mua',
      'Scope J: Báo cáo phân tích doanh thu theo mặt hàng'
    ],
    aiCapabilities: [
      'AI đề xuất sản phẩm kèm theo (Cross-sell/Upsell) cho nhân viên tư vấn',
      'AI phân loại khách hàng tiềm năng và dự báo mặt hàng sắp hết hàng',
      'Tự động gửi thông báo trạng thái đơn hàng và khảo sát hài lòng'
    ],
    deploymentRoadmap: [
      'Chuẩn hóa danh mục sản phẩm và dữ liệu khách hàng',
      'Thiết lập luồng xử lý đơn hàng từ đa kênh về một CRM',
      'Cấu hình kịch bản CSKH tự động và báo cáo doanh số'
    ]
  },
  {
    id: 'ind_service',
    slug: 'service',
    name: 'Dịch vụ chuyên nghiệp',
    tagline: 'Quản lý lịch hẹn, theo dõi tiến độ hợp đồng dịch vụ và chăm sóc khách hàng chuyên sâu',
    iconName: 'Briefcase',
    characteristics: [
      'Sản phẩm vô hình, chất lượng phụ thuộc lớn vào quy trình và nhân sự thực thi.',
      'Chu kỳ bán hàng và tư vấn có thể kéo dài qua nhiều bước trao đổi.',
      'Uy tín thương hiệu và sự hài lòng của khách hàng là yếu tố sống còn.'
    ],
    operatingProblems: [
      'Sót lịch hẹn tư vấn hoặc chăm sóc khách hàng không đều đặn.',
      'Khó đo lường thời gian và chi phí thực tế dành cho từng hợp đồng dịch vụ.',
      'Tài liệu dự án lưu trữ lộn xộn, bàn giao giữa các nhân sự dễ thiếu sót.'
    ],
    suitableModules: [
      'Scope B: CRM quản trị cơ hội và lịch hẹn tư vấn',
      'Scope G: Quản lý công việc, Task và tiến độ cung cấp dịch vụ',
      'Scope D: Ticket tiếp nhận yêu cầu và phản hồi khách hàng',
      'Scope H: Kho tri thức SOP và tài liệu biểu mẫu chuẩn'
    ],
    aiCapabilities: [
      'AI nhắc nhở lịch hẹn và tóm tắt biên bản cuộc họp tư vấn',
      'AI hỗ trợ soạn thảo đề xuất dịch vụ theo mẫu chuẩn hóa',
      'Theo dõi thời hạn hoàn thành các giai đoạn nghiệm thu'
    ],
    deploymentRoadmap: [
      'Số hóa quy trình tư vấn và biểu mẫu cung cấp dịch vụ',
      'Cấu hình luồng phê duyệt và quản lý tiến độ task',
      'Đào tạo nhân sự sử dụng CRM và hệ thống ticket'
    ]
  },
  {
    id: 'ind_education',
    slug: 'education',
    name: 'Giáo dục & Đào tạo',
    tagline: 'Quản lý học viên, tuyển sinh thông minh, lịch học và số hóa kho tri thức đào tạo',
    iconName: 'GraduationCap',
    characteristics: [
      'Mùa vụ tuyển sinh rõ rệt với lượng lead đổ về theo đợt cao điểm.',
      'Cần quy trình chăm sóc, tư vấn chuyên môn sâu để chốt khóa học.',
      'Đòi hỏi hệ thống theo dõi quá trình học tập, điểm danh và kết quả học viên.'
    ],
    operatingProblems: [
      'Tư vấn viên không gọi kịp lead nóng trong đợt tuyển sinh cao điểm.',
      'Quản lý lịch giảng dạy, điểm danh và học phí học viên thủ công.',
      'Tài liệu bài giảng, video khóa học chưa được quản trị tập trung.'
    ],
    suitableModules: [
      'Scope B: CRM Tuyển sinh & Phân bổ Lead học viên',
      'Scope H: Tri thức doanh nghiệp & Kho học liệu số',
      'Scope E: Quản lý học phí và đối soát thu chi',
      'Scope D: Chăm sóc học viên & Khảo sát phản hồi sau khóa học'
    ],
    aiCapabilities: [
      'AI tư vấn sơ bộ lộ trình học tập phù hợp theo nguyện vọng',
      'Tự động phân bổ lead cho tư vấn viên theo ca trực ngay lập tức',
      'Gửi nhắc nhở lịch học và hạn đóng học phí tự động'
    ],
    deploymentRoadmap: [
      'Xây dựng phễu tuyển sinh và kịch bản tư vấn học viên',
      'Số hóa tài liệu đào tạo và phân quyền truy cập',
      'Tích hợp thông báo qua email/tin nhắn cho học viên'
    ]
  },
  {
    id: 'ind_realestate',
    slug: 'real-estate',
    name: 'Bất động sản',
    tagline: 'Bảo mật giỏ hàng, quản lý nguồn khách và hỗ trợ môi giới chốt giao dịch minh bạch',
    iconName: 'Building',
    characteristics: [
      'Giá trị giao dịch rất lớn, chu kỳ cân nhắc và ra quyết định kéo dài.',
      'Nhiều môi giới cùng tiếp cận nguồn hàng, đòi hỏi phân quyền chặt chẽ.',
      'Yêu cầu bảo mật thông tin chủ nhà và khách hàng tiềm năng cao.'
    ],
    operatingProblems: [
      'Tranh chấp nguồn khách và thông tin sản phẩm giữa các chuyên viên.',
      'Môi giới làm việc phân tán, khó kiểm soát chất lượng tư vấn và tiến độ.',
      'Thủ tục pháp lý, cọc và hợp đồng phức tạp, dễ xảy ra nhầm lẫn.'
    ],
    suitableModules: [
      'Scope B: CRM Bất động sản & Phân quyền bảo mật dữ liệu',
      'Scope A: Website dự án & Cổng tiếp nhận nhu cầu mua/thuê',
      'Scope K: Audit Log kiểm soát quyền truy cập thông tin nhạy cảm',
      'Scope J: Báo cáo chuyển đổi giao dịch theo dự án'
    ],
    aiCapabilities: [
      'AI phân tích khớp nhu cầu khách mua với giỏ hàng khả dụng',
      'AI hỗ trợ soạn thảo hợp đồng đặt cọc theo mẫu pháp lý chuẩn',
      'Cảnh báo khi có hành vi trích xuất dữ liệu khách hàng số lượng lớn'
    ],
    deploymentRoadmap: [
      'Thiết lập cấu trúc phân quyền bảo mật giỏ hàng',
      'Cấu hình CRM quản lý tương tác và nguồn lead dự án',
      'Kiểm thử ranh giới bảo mật và tập huấn cho đội ngũ kinh doanh'
    ]
  },
  {
    id: 'ind_manufacturing',
    slug: 'manufacturing',
    name: 'Sản xuất & Gia công',
    tagline: 'Theo dõi đơn hàng sản xuất, kiểm soát nguyên vật liệu và chuẩn hóa quy trình xuất xưởng',
    iconName: 'Factory',
    characteristics: [
      'Quy trình vận hành gồm nhiều khâu: Đặt hàng, sản xuất, KCS, đóng gói, xuất kho.',
      'Phối hợp chặt chẽ giữa bộ phận Kinh doanh và Nhà xưởng sản xuất.',
      'Yêu cầu cao về việc đúng tiến độ giao hàng và quản soát chi phí.'
    ],
    operatingProblems: [
      'Kinh doanh không nắm được tiến độ sản xuất để báo chính xác cho khách.',
      'Quy trình kiểm tra chất lượng (KCS) ghi giấy tờ dễ thất lạc dữ liệu.',
      'Chậm trễ trong khâu duyệt lệnh sản xuất và nguyên vật liệu.'
    ],
    suitableModules: [
      'Scope G: Quản lý kế hoạch công việc và quy trình sản xuất',
      'Scope B: CRM quản trị hợp đồng gia công & đơn hàng B2B',
      'Scope E: Kiểm soát chi phí nguyên vật liệu và công nợ nhà cung cấp',
      'Scope J: Dashboard năng suất xưởng và tỷ lệ đơn đúng hạn'
    ],
    aiCapabilities: [
      'AI phát hiện điểm nghẽn trong dây chuyền sản xuất qua thời gian hoàn thành task',
      'Dự báo nguy cơ chậm tiến độ để phòng điều hành kịp thời can thiệp',
      'Tự động tổng hợp báo cáo tiến độ đơn hàng cho bộ phận kinh doanh'
    ],
    deploymentRoadmap: [
      'Khảo sát các công đoạn sản xuất và xây dựng quy trình SOP',
      'Cấu hình phần mềm theo dõi trạng thái đơn hàng theo thời gian thực',
      'Chuyển giao cho quản đốc phân xưởng và bộ phận kế hoạch'
    ]
  },
  {
    id: 'ind_distribution',
    slug: 'distribution',
    name: 'Phân phối & Bán buôn',
    tagline: 'Quản lý mạng lưới đại lý, chính sách chiết khấu, công nợ và đơn đặt hàng định kỳ',
    iconName: 'Truck',
    characteristics: [
      'Khách hàng là đại lý, nhà phân phối cấp 1, cấp 2 với chu kỳ mua lặp lại.',
      'Chính sách giá và chiết khấu phức tạp theo từng cấp đại lý và doanh số.',
      'Công nợ gối đầu lớn đòi hỏi theo dõi hạn mức thanh toán sát sao.'
    ],
    operatingProblems: [
      'Nhầm lẫn bảng giá chiết khấu khi đại lý đặt hàng qua điện thoại/Zalo.',
      'Vượt hạn mức công nợ nhưng vẫn xuất hàng do thiếu kiểm soát liên thông.',
      'Không theo dõi được tần suất đặt hàng để kịp thời chăm sóc đại lý giảm doanh số.'
    ],
    suitableModules: [
      'Scope B: CRM Quản lý Đại lý & Cổng đặt hàng đại lý (B2B Portal)',
      'Scope E: Kiểm soát hạn mức công nợ và tự động khóa xuất hàng khi quá hạn',
      'Scope D: Chăm sóc đại lý định kỳ và xử lý khiếu nại đổi trả',
      'Scope J: Báo cáo phân tích doanh thu theo vùng thị trường'
    ],
    aiCapabilities: [
      'AI cảnh báo đại lý giảm tần suất đặt hàng bất thường so với cùng kỳ',
      'Tự động áp dụng chính sách chiết khấu theo phân hạng đại lý',
      'Gửi nhắc nợ đối soát công nợ tự động theo chu kỳ thanh toán'
    ],
    deploymentRoadmap: [
      'Chuẩn hóa chính sách đại lý và danh mục bảng giá chiết khấu',
      'Thiết lập quy tắc khóa nợ và duyệt xuất hàng liên phòng ban',
      'Hướng dẫn nhân viên kinh doanh quản lý tuyến đại lý trên hệ thống'
    ]
  },
  {
    id: 'ind_construction',
    slug: 'construction',
    name: 'Xây dựng & Thi công',
    tagline: 'Quản lý dự án công trình, hồ sơ thầu, nghiệm thu giai đoạn và giải ngân thanh toán',
    iconName: 'HardHat',
    characteristics: [
      'Dự án kéo dài nhiều tháng/năm với giá trị lớn và nhiều bên liên quan.',
      'Địa điểm thi công phân tán ngoài hiện trường xa văn phòng điều hành.',
      'Hồ sơ pháp lý, biên bản nghiệm thu và thanh toán phân kỳ phức tạp.'
    ],
    operatingProblems: [
      'Thông tin từ công trường phản hồi về văn phòng trung tâm chậm trễ.',
      'Hồ sơ nghiệm thu chậm hoàn thiện dẫn đến đọng vốn thanh toán kéo dài.',
      'Khó kiểm soát chi phí thực tế so với dự toán ban đầu của từng hạng mục.'
    ],
    suitableModules: [
      'Scope G: Quản lý tiến độ dự án, mốc nghiệm thu và nhật ký công trường',
      'Scope E: Quản trị dòng tiền công trình, tạm ứng và thanh toán nhà thầu phụ',
      'Scope H: Quản lý hồ sơ bản vẽ, tiêu chuẩn kỹ thuật và biên bản kiểm định',
      'Scope J: Báo cáo lãi/lỗ tạm tính theo từng công trình'
    ],
    aiCapabilities: [
      'AI đối soát tiến độ thi công thực tế với kế hoạch cam kết',
      'Cảnh báo vượt ngân sách dự toán theo từng hạng mục vật tư',
      'Hỗ trợ lập biên bản nghiệm thu theo mẫu chuẩn hóa'
    ],
    deploymentRoadmap: [
      'Thiết lập cấu trúc dự án mẫu với các mốc nghiệm thu chuẩn',
      'Cấu hình quy trình phê duyệt đề xuất vật tư và tạm ứng công trường',
      'Triển khai cho ban chỉ huy công trình và phòng kỹ thuật'
    ]
  },
  {
    id: 'ind_technology',
    slug: 'technology',
    name: 'Doanh nghiệp Công nghệ',
    tagline: 'Vận hành linh hoạt (Agile), chuẩn hóa tài liệu kỹ thuật, chăm sóc khách hàng và mở rộng nhanh',
    iconName: 'Cpu',
    characteristics: [
      'Tốc độ thay đổi nhanh, yêu cầu năng lực thích ứng và tự động hóa cao độ.',
      'Sản phẩm công nghệ đòi hỏi đội ngũ hỗ trợ kỹ thuật có chuyên môn sâu.',
      'Dữ liệu và quy trình là tài sản cốt lõi, cần bảo mật tối đa.'
    ],
    operatingProblems: [
      'Sử dụng quá nhiều công cụ SaaS rời rạc gây phân mảnh dữ liệu và chi phí cao.',
      'Thiếu cầu nối thông tin giữa bộ phận Kinh doanh và đội ngũ Kỹ thuật sản phẩm.',
      'Khó chuẩn hóa tri thức khi đội ngũ nhân sự mở rộng quy mô nhanh chóng.'
    ],
    suitableModules: [
      'Scope K: Kiến trúc tích hợp mở API & Webhook',
      'Scope I: Mạng lưới AI Agent chuyên sâu theo từng vai trò',
      'Scope H: Quản trị tri thức Wiki, tài liệu API và SOP nội bộ',
      'Scope J: Báo cáo chỉ số tăng trưởng người dùng và hiệu năng hệ thống'
    ],
    aiCapabilities: [
      'AI hỗ trợ tra cứu tài liệu kỹ thuật nội bộ (RAG Search)',
      'Tự động hóa luồng tiếp nhận lỗi (Bug Report) từ khách hàng vào quy trình xử lý',
      'Phân tích hành vi sử dụng sản phẩm để gợi ý cải tiến tính năng'
    ],
    deploymentRoadmap: [
      'Tích hợp các hệ thống kỹ thuật hiện có qua API / Webhook',
      'Cấu hình AI Agent hỗ trợ tra cứu dữ liệu và xử lý quy trình',
      'Thiết lập văn hóa vận hành dựa trên số liệu thời gian thực'
    ]
  }
];

export const aiAgentProfiles: AiAgentProfile[] = [
  {
    id: 'ai_ceo',
    slug: 'ceo',
    name: 'AI CEO / Executive Assistant',
    role: 'Trợ lý Điều hành & Phân tích Chiến lược',
    tagline: 'Tổng hợp dữ liệu toàn doanh nghiệp, cảnh báo rủi ro sớm và đề xuất kịch bản điều hành cho Lãnh đạo',
    iconName: 'Crown',
    definition: 'AI CEO là trợ lý thông minh dành cho Ban Lãnh đạo, có khả năng đọc dữ liệu tổng hợp từ tất cả các phòng ban trong AI ENTERPRISE để cung cấp bức tranh toàn cảnh về sức khỏe doanh nghiệp, phát hiện điểm nghẽn và gợi ý hành động chiến lược.',
    businessProblem: [
      'Lãnh đạo mất nhiều giờ tổng hợp báo cáo thủ công từ các trưởng phòng.',
      'Không phát hiện kịp các biến động bất thường về doanh số, chi phí hay nhân sự.',
      'Khó đối chiếu dữ liệu chéo giữa các bộ phận để tìm ra nguyên nhân gốc rễ.'
    ],
    dataRead: [
      'Báo cáo doanh thu, chi phí và dòng tiền từ khối Tài chính',
      'Chỉ số phễu chuyển đổi và tiến độ chốt hợp đồng từ khối Kinh doanh',
      'Tỷ lệ hoàn thành công việc và điểm số KPI từ khối Nhân sự & Vận hành',
      'Mức độ hài lòng của khách hàng và thời gian xử lý ticket từ CSKH'
    ],
    analysisCapability: [
      'Phân tích xu hướng biến động doanh số so với cùng kỳ và so với mục tiêu OKR',
      'Đánh giá hiệu suất phối hợp giữa các phòng ban và phát hiện khâu ách tắc',
      'Mô phỏng tác động tài chính khi thay đổi các biến số kinh doanh trọng yếu'
    ],
    proposals: [
      'Gợi ý điều chỉnh phân bổ ngân sách sang kênh marketing có ROI cao hơn',
      'Cảnh báo sớm nguy cơ thiếu hụt dòng tiền trong 45 ngày tới',
      'Đề xuất tái cấu trúc quy trình xử lý đơn hàng đang bị chậm ở khâu phê duyệt'
    ],
    executionScope: [
      'Tự động gửi bản tin điều hành tóm tắt (Morning Executive Brief) mỗi sáng',
      'Gửi thông báo triệu tập cuộc họp khẩn cấp kèm dữ liệu phân tích liên quan',
      'Tổng hợp bảng so sánh tiến độ thực hiện mục tiêu chiến lược của các khối'
    ],
    approvalRequired: [
      'BẮT BUỘC lãnh đạo phê duyệt: Mọi thay đổi về mục tiêu chiến lược, phân bổ ngân sách lớn, điều chỉnh chính sách toàn công ty và sa thải/bổ nhiệm nhân sự chủ chốt.'
    ],
    expectedResults: [
      'Giảm 80% thời gian tổng hợp báo cáo điều hành cho lãnh đạo',
      'Tăng tốc độ ra quyết định chiến lược dựa trên dữ liệu thực tế',
      'Phát hiện và ngăn chặn rủi ro vận hành sớm trước khi phát sinh hậu quả lớn'
    ]
  },
  {
    id: 'ai_sales',
    slug: 'sales',
    name: 'AI Kinh doanh (Sales Copilot)',
    role: 'Trợ lý Bán hàng & Quản trị Lead',
    tagline: 'Chấm điểm lead tiềm năng, gợi ý kịch bản tư vấn và tự động hóa theo đuổi cơ hội kinh doanh',
    iconName: 'TrendingUp',
    definition: 'AI Kinh doanh đồng hành cùng đội ngũ Sales, tự động đọc dữ liệu tương tác để gợi ý phương án tiếp cận tối ưu cho từng khách hàng, soạn thảo báo giá chuẩn và nhắc nhở thời điểm vàng để chốt hợp đồng.',
    businessProblem: [
      'Nhân viên bán hàng bỏ sót lead hoặc tiếp cận chậm khi khách hàng còn nóng.',
      'Tư vấn viên thiếu thông tin về nhu cầu thực tế của khách, dẫn đến tỷ lệ chốt thấp.',
      'Mất quá nhiều thời gian cho việc soạn thảo báo giá và cập nhật CRM.'
    ],
    dataRead: [
      'Dữ liệu hồ sơ khách hàng và lịch sử tương tác trước đây',
      'Nguồn gốc lead và hành vi tìm hiểu trên website',
      'Danh mục sản phẩm, chính sách giá và chương trình khuyến mãi hiện hành',
      'Lịch sử các thương vụ thành công tương tự trong quá khứ'
    ],
    analysisCapability: [
      'Chấm điểm mức độ tiềm năng (Lead Scoring) dựa trên hành vi và thông tin',
      'Phân tích thời điểm khách hàng có khả năng phản hồi cao nhất trong ngày',
      'Nhận diện các dấu hiệu khách hàng chuẩn bị bỏ đi (Deal Churn Risk)'
    ],
    proposals: [
      'Gợi ý gói giải pháp phù hợp nhất với quy mô và ngân sách của khách hàng',
      'Đề xuất kịch bản phản hồi cho các câu hỏi khó và phản bác về giá',
      'Gợi ý thời điểm gửi email theo đuổi (Follow-up) mang lại hiệu quả cao'
    ],
    executionScope: [
      'Tự động soạn thảo bản nháp báo giá theo biểu mẫu chuẩn',
      'Cập nhật trạng thái lead trong CRM sau khi có tương tác',
      'Gửi thông báo nhắc nhở cuộc gọi/lịch hẹn cho nhân viên kinh doanh'
    ],
    approvalRequired: [
      'BẮT BUỘC phê duyệt: Mức chiết khấu ngoài khung chuẩn, phát hành hợp đồng kinh doanh chính thức, và hủy bỏ hồ sơ khách hàng tiềm năng lớn.'
    ],
    expectedResults: [
      'Rút ngắn 50% thời gian phản hồi lead mới đổ về',
      'Tăng 25% tỷ lệ chuyển đổi từ cơ hội sang hợp đồng thành công',
      'Giảm 70% thời gian thao tác giấy tờ hành chính của nhân viên bán hàng'
    ]
  },
  {
    id: 'ai_marketing',
    slug: 'marketing',
    name: 'AI Marketing (Growth Assistant)',
    role: 'Trợ lý Tăng trưởng & Tối ưu Chiến dịch',
    tagline: 'Phân tích dữ liệu chuyển đổi, tối ưu thông điệp truyền thông và tự động hóa hành trình nuôi dưỡng lead',
    iconName: 'Megaphone',
    definition: 'AI Marketing phân tích dữ liệu hiệu quả từ đa kênh truyền thông để gợi ý tối ưu ngân sách, kiểm soát thông điệp đúng định vị thương hiệu và tự động nuôi dưỡng khách hàng tiềm năng qua các luồng tương tác thông minh.',
    businessProblem: [
      'Khó xác định kênh quảng cáo nào thực sự mang lại khách hàng trả tiền.',
      'Nội dung truyền thông không đồng nhất với quy chuẩn thương hiệu.',
      'Thiếu nhân lực để tạo ra nội dung chăm sóc đều đặn cho từng nhóm đối tượng.'
    ],
    dataRead: [
      'Số liệu traffic, tỷ lệ click, chi phí quảng cáo từng kênh',
      'Dữ liệu chuyển đổi từ Form đăng ký sang cơ hội của Sales',
      'Quy chuẩn nhận diện thương hiệu và nguyên tắc truyền thông từ Admin',
      'Hành vi xem trang và tương tác nội dung của người dùng'
    ],
    analysisCapability: [
      'Tính toán chính xác chi phí trên mỗi khách hàng thực tế (CAC) theo kênh',
      'Đánh giá mức độ tuân thủ quy chuẩn truyền thông của các bản thảo nội dung',
      'Phân nhóm khách hàng theo sở thích và mối quan tâm để cá nhân hóa'
    ],
    proposals: [
      'Đề xuất dịch chuyển ngân sách sang các từ khóa và kênh có tỷ lệ chốt cao',
      'Gợi ý điều chỉnh thông điệp tiêu đề landing page để tăng tỷ lệ điền form',
      'Đề xuất kịch bản email nuôi dưỡng khách hàng theo từng giai đoạn nhận thức'
    ],
    executionScope: [
      'Tự động gắn thẻ phân loại (Tag) khách hàng tiềm năng theo hành vi',
      'Gửi email chào mừng và tài liệu theo luồng tự động đã được duyệt',
      'Tổng hợp báo cáo hiệu quả chiến dịch hàng tuần'
    ],
    approvalRequired: [
      'BẮT BUỘC phê duyệt: Xuất bản bài viết/video lên các kênh truyền thông chính thức, kích hoạt chiến dịch quảng cáo mới và phê duyệt ngân sách Marketing.'
    ],
    expectedResults: [
      'Tối ưu 20-30% chi phí tìm kiếm khách hàng mới (CAC)',
      '100% nội dung truyền thông tuân thủ đúng định vị thương hiệu của VMC',
      'Tăng gấp đôi số lượng tương tác chất lượng trên các cổng tiếp nhận'
    ]
  },
  {
    id: 'ai_cs',
    slug: 'customer-service',
    name: 'AI Chăm sóc khách hàng (Service Copilot)',
    role: 'Trợ lý Hỗ trợ Hậu mãi & Xử lý Ticket',
    tagline: 'Tra cứu tri thức nội bộ tức thì, phân loại ticket thông minh và gợi ý câu trả lời chuẩn xác',
    iconName: 'Headphones',
    definition: 'AI CSKH kết nối trực tiếp với Kho tri thức doanh nghiệp (Knowledge Base) để trợ giúp chuyên viên CSKH trả lời khách hàng nhanh chóng, phân loại mức độ khẩn cấp và không để bất kỳ yêu cầu nào bị bỏ quên.',
    businessProblem: [
      'Khách hàng phải chờ đợi lâu để nhận được câu trả lời cho các thắc mắc phổ biến.',
      'Nhân viên mới trả lời sai lệch chính sách bảo hành hoặc quy trình xử lý.',
      'Không có bức tranh tổng hợp về những lỗi/vấn đề khách hàng gặp phải nhiều nhất.'
    ],
    dataRead: [
      'Kho tri thức doanh nghiệp: FAQ, quy trình SOP, chính sách bảo hành',
      'Nội dung tin nhắn, email và ghi chú yêu cầu của khách hàng',
      'Thông tin hợp đồng và gói dịch vụ khách hàng đang sử dụng',
      'Lịch sử các ticket hỗ trợ tương tự đã được giải quyết thành công'
    ],
    analysisCapability: [
      'Phân loại mức độ khẩn cấp của ticket và sắc thái cảm xúc của khách hàng',
      'Tìm kiếm câu trả lời chuẩn xác nhất từ kho tri thức nội bộ',
      'Nhận diện các vấn đề lặp đi lặp lại để cảnh báo cho đội ngũ kỹ thuật'
    ],
    proposals: [
      'Gợi ý câu trả lời mẫu hoàn chỉnh cho chuyên viên CSKH kiểm tra và gửi đi',
      'Đề xuất phương án bồi thường/khắc phục phù hợp với chính sách công ty',
      'Gợi ý bài viết hướng dẫn tự xử lý gửi cho khách hàng'
    ],
    executionScope: [
      'Tự động tiếp nhận và tạo ticket với đúng danh mục phân loại',
      'Gửi thông báo xác nhận đã tiếp nhận yêu cầu và thời gian phản hồi dự kiến',
      'Gửi khảo sát đánh giá độ hài lòng (CSAT) sau khi ticket được đóng'
    ],
    approvalRequired: [
      'BẮT BUỘC phê duyệt: Mọi phản hồi chính thức cho các khiếu nại nghiêm trọng, chính sách bồi thường tài chính, và các cam kết ngoài hợp đồng.'
    ],
    expectedResults: [
      'Giảm 60% thời gian phản hồi yêu cầu của khách hàng',
      'Đảm bảo 100% câu trả lời tuân thủ đúng chính sách đã công bố',
      'Nâng cao chỉ số hài lòng khách hàng (CSAT) lên trên 90%'
    ]
  },
  {
    id: 'ai_hr',
    slug: 'hr',
    name: 'AI Nhân sự (HR Copilot)',
    role: 'Trợ lý Quản trị Nhân sự & Đào tạo',
    tagline: 'Tự động hóa thủ tục hành chính, theo dõi đánh giá hiệu suất và cá nhân hóa lộ trình đào tạo nội bộ',
    iconName: 'Users',
    definition: 'AI Nhân sự giải phóng phòng HCNS khỏi các công việc giấy tờ lặp đi lặp lại, hỗ trợ sàng lọc hồ sơ ứng viên, tổng hợp bảng chấm công và theo dõi tiến độ đào tạo nâng cao kỹ năng cho đội ngũ.',
    businessProblem: [
      'Tốn nhiều ngày cuối tháng để đối soát công, đơn từ và phép năm.',
      'Quy trình hội nhập nhân viên mới thiếu tính chuẩn hóa, mất nhiều thời gian kèm cặp.',
      'Khó theo dõi sát sao sự tiến bộ và lỗ hổng kỹ năng của từng nhân sự.'
    ],
    dataRead: [
      'Dữ liệu máy chấm công, đơn xin phép và nhật ký làm việc',
      'Quy chế công ty, chính sách phúc lợi và mô tả công việc (JD)',
      'Kết quả đánh giá KPI/OKR định kỳ của các phòng ban',
      'Lộ trình và kết quả các bài kiểm tra đào tạo nội bộ'
    ],
    analysisCapability: [
      'Tự động rà soát sự bất thường trong bảng chấm công (thiếu giờ, sai ca)',
      'Phân tích mức độ phù hợp của hồ sơ ứng viên so với tiêu chuẩn tuyển dụng',
      'Nhận diện các khoảng trống kỹ năng của nhân sự so với yêu cầu vị trí'
    ],
    proposals: [
      'Đề xuất danh sách ứng viên phù hợp nhất cho vòng phỏng vấn chuyên môn',
      'Gợi ý các khóa học nội bộ cần bổ sung cho từng phòng ban',
      'Cảnh báo các trường hợp nhân sự có dấu hiệu quá tải hoặc giảm sút năng suất'
    ],
    executionScope: [
      'Gửi nhắc nhở tự động cho nhân viên nộp đơn bổ sung công/phép đúng hạn',
      'Tự động gửi tài liệu hội nhập (Onboarding Kit) cho nhân sự mới',
      'Tổng hợp bảng công sơ bộ vào ngày 28 hàng tháng cho kế toán'
    ],
    approvalRequired: [
      'BẮT BUỘC phê duyệt: Quyết định tuyển dụng chính thức, điều chỉnh lương/thưởng, xử lý kỷ luật và phê duyệt kết quả đánh giá năng lực cuối năm.'
    ],
    expectedResults: [
      'Giảm 75% thời gian xử lý thủ tục chấm công và đơn từ hành chính',
      'Chuẩn hóa 100% quy trình hội nhập cho mọi nhân sự mới gia nhập',
      'Minh bạch hóa dữ liệu đánh giá hiệu suất, tạo động lực cho nhân tài'
    ]
  },
  {
    id: 'ai_finance',
    slug: 'finance',
    name: 'AI Tài chính (Finance Copilot)',
    role: 'Trợ lý Kế toán & Kiểm soát Ngân sách',
    tagline: 'Phát hiện sai lệch đối soát, dự báo dòng tiền và cảnh báo rủi ro công nợ thời gian thực',
    iconName: 'CreditCard',
    definition: 'AI Tài chính giám sát dòng chảy thu chi của doanh nghiệp 24/7, tự động đối soát chứng từ thanh toán với đơn hàng, cảnh báo sớm các nguy cơ thâm hụt ngân sách và nhắc nhở thu hồi nợ đúng hẹn.',
    businessProblem: [
      'Đối soát thủ công giữa tài khoản ngân hàng và đơn hàng mất nhiều thời gian, dễ nhầm.',
      'Công nợ bị quá hạn mà không có cơ chế cảnh báo tự động kịp thời.',
      'Lãnh đạo thiếu số liệu dự báo dòng tiền chính xác cho kế hoạch đầu tư sắp tới.'
    ],
    dataRead: [
      'Dữ liệu biến động số dư ngân hàng và sổ quỹ tiền mặt',
      'Hóa đơn, hợp đồng mua bán và biên bản nghiệm thu từ Sales',
      'Bảng phân bổ ngân sách dự toán của từng phòng ban',
      'Lịch sử thanh toán và thói quen trả nợ của từng đối tác'
    ],
    analysisCapability: [
      'Tự động ghép nối giao dịch ngân hàng với mã đơn hàng tương ứng',
      'Phân tích tuổi nợ và xếp hạng rủi ro tín dụng của khách hàng',
      'Mô phỏng dòng tiền thu - chi trong 30, 60 và 90 ngày tới'
    ],
    proposals: [
      'Đề xuất lịch nhắc nợ phù hợp cho từng khách hàng để tối đa hóa thu hồi',
      'Cảnh báo khi một phòng ban có nguy cơ chi vượt dự toán ngân sách quý',
      'Gợi ý tối ưu các khoản chi phí định kỳ có dấu hiệu lãng phí'
    ],
    executionScope: [
      'Tự động tạo phiếu thu nháp khi hệ thống ghi nhận tiền về tài khoản',
      'Gửi email sao kê công nợ định kỳ theo thỏa thuận với khách hàng',
      'Cập nhật trạng thái thanh toán của đơn hàng ngay khi tiền vào tài khoản'
    ],
    approvalRequired: [
      'BẮT BUỘC phê duyệt: Mọi lệnh chuyển tiền ra khỏi tài khoản, quyết định gia hạn nợ đặc biệt, điều chỉnh định mức ngân sách và xóa nợ khó đòi.'
    ],
    expectedResults: [
      'Rút ngắn 90% thời gian đối soát đơn hàng và thanh toán ngân hàng',
      'Giảm 35% tỷ lệ nợ quá hạn nhờ cơ chế nhắc nợ đúng thời điểm',
      'Nắm bắt bức tranh dòng tiền chính xác từng ngày phục vụ ra quyết định'
    ]
  },
  {
    id: 'ai_voice',
    slug: 'voice',
    name: 'AI Voice & Cuộc gọi thông minh',
    role: 'Hệ thống Thoại Tự động Có Kiểm soát',
    tagline: 'Xác nhận lịch hẹn, nhắc thông tin định kỳ và chuyển tiếp thông minh đến nhân sự chuyên trách',
    iconName: 'Mic',
    definition: 'AI Voice là giải pháp gọi thoại thông minh tuân thủ nguyên tắc vận hành an toàn: Chỉ thực hiện các cuộc gọi mang tính chất thông báo chuẩn mực, xác nhận thông tin đơn hàng/lịch hẹn đã định trước và chuyển tiếp ngay đến nhân viên khi có yêu cầu phức tạp.',
    businessProblem: [
      'Nhân viên phải gọi hàng trăm cuộc mỗi ngày chỉ để xác nhận đơn hoặc nhắc lịch hẹn.',
      'Cuộc gọi từ khách hàng ngoài khung giờ làm việc không được tiếp nhận kịp thời.',
      'Chất lượng giọng nói và sự kiên nhẫn của nhân viên biến động theo thời gian làm việc.'
    ],
    dataRead: [
      'Danh sách khách hàng cần xác nhận lịch hẹn hoặc đơn hàng',
      'Kịch bản cuộc gọi được phê duyệt trước từ Ban Lãnh đạo',
      'Lịch trực khả dụng của đội ngũ chuyên viên tư vấn',
      'Kết quả phản hồi của khách hàng trong cuộc gọi'
    ],
    analysisCapability: [
      'Nhận diện giọng nói tiếng Việt tự nhiên và phân tích ý định của khách hàng',
      'Xác định khi nào khách hàng có thắc mắc phức tạp cần gặp nhân viên trực tiếp',
      'Chuyển đổi nội dung cuộc gọi thành văn bản (Speech-to-Text) để lưu vào CRM'
    ],
    proposals: [
      'Đề xuất khung giờ gọi lại phù hợp nếu khách hàng bận không nghe máy',
      'Gợi ý cải tiến kịch bản thoại nếu tỷ lệ khách tắt máy sớm ở một câu hỏi cao'
    ],
    executionScope: [
      'Thực hiện cuộc gọi tự động nhắc lịch hẹn khám, hẹn họp hoặc giao hàng',
      'Ghi nhận lựa chọn của khách hàng (Đồng ý, Đổi giờ, Hủy) và cập nhật CRM',
      'Tự động chuyển máy đến chuyên viên trực tổng đài khi khách yêu cầu'
    ],
    approvalRequired: [
      'BẮT BUỘC phê duyệt: Mọi kịch bản cuộc gọi mới, chính sách gọi tự động và danh sách khách hàng được phép liên hệ.'
    ],
    expectedResults: [
      'Giảm 80% công sức gọi điện xác nhận lịch hẹn của đội ngũ nhân viên',
      'Tỷ lệ xác nhận lịch hẹn thành công đạt trên 85%',
      'Toàn bộ lịch sử trao đổi được số hóa và lưu trữ minh bạch trong hồ sơ CRM'
    ]
  },
  {
    id: 'ai_workflow',
    slug: 'workflow',
    name: 'AI Workflow & Automation',
    role: 'Động cơ Tự động hóa Quy trình Nghiệp vụ',
    tagline: 'Kết nối dòng chảy dữ liệu giữa các phòng ban, tự động kích hoạt tác vụ và giám sát tiến độ theo SOP',
    iconName: 'Workflow',
    definition: 'AI Workflow đóng vai trò như hệ tuần hoàn của doanh nghiệp, đảm bảo dữ liệu khi phát sinh ở một khâu sẽ tự động kích hoạt hành động chuẩn mực ở khâu kế tiếp theo đúng quy trình nghiệp vụ (SOP) đã được phê duyệt.',
    businessProblem: [
      'Quy trình bị đứt gãy khi chuyển giao giữa các phòng ban (Sales sang Vận hành, Vận hành sang Kế toán).',
      'Nhân viên quên các bước bắt buộc trong quy trình SOP do làm thủ công.',
      'Khó truy vết trách nhiệm khi xảy ra sai sót hoặc chậm trễ tiến độ.'
    ],
    dataRead: [
      'Sơ đồ quy trình vận hành chuẩn (SOP) của doanh nghiệp',
      'Trạng thái các nhiệm vụ, đơn hàng, hợp đồng trong hệ thống',
      'Quy tắc phân công trách nhiệm và thời hạn cam kết (SLA)',
      'Nhật ký thao tác của người dùng trên toàn bộ các phân hệ'
    ],
    analysisCapability: [
      'Kiểm tra tính đầy đủ của dữ liệu trước khi cho phép chuyển sang bước kế tiếp',
      'Đo lường thời gian xử lý thực tế ở từng bước quy trình so với định mức',
      'Phát hiện các điểm tắc nghẽn thường xuyên xảy ra trong dòng chảy công việc'
    ],
    proposals: [
      'Đề xuất tinh gọn các bước trung gian không mang lại giá trị gia tăng',
      'Gợi ý tái phân bổ khối lượng công việc khi một nhân sự bị quá tải',
      'Cảnh báo khi một quy trình sắp trễ hạn cam kết với khách hàng'
    ],
    executionScope: [
      'Tự động giao việc cho nhân sự phụ trách tiếp theo khi bước trước hoàn thành',
      'Tự động gửi thông báo nhắc việc đa kênh (Hệ thống, Email, Ứng dụng)',
      'Khóa thao tác và yêu cầu bổ sung thông tin nếu vi phạm quy định SOP'
    ],
    approvalRequired: [
      'BẮT BUỘC phê duyệt: Mọi sự thay đổi về cấu trúc quy trình nghiệp vụ, ngoại lệ bỏ qua bước kiểm tra và phê duyệt vượt cấp.'
    ],
    expectedResults: [
      'Loại bỏ hoàn toàn tình trạng đùn đẩy trách nhiệm giữa các phòng ban',
      'Rút ngắn 40% thời gian luân chuyển hồ sơ và hoàn thành đơn hàng',
      'Đảm bảo 100% công việc được thực thi chuẩn mực theo quy chuẩn chất lượng'
    ]
  },
  {
    id: 'ai_rag',
    slug: 'rag',
    name: 'AI Search & RAG Tri thức nội bộ',
    role: 'Hệ thống Tra cứu Tri thức Doanh nghiệp Chính xác',
    tagline: 'Hỏi đáp dữ liệu nội bộ không ảo giác, trích dẫn chính xác nguồn tài liệu và bảo mật phân quyền nghiêm ngặt',
    iconName: 'Search',
    definition: 'AI Search ứng dụng công nghệ Retrieval-Augmented Generation (RAG) để giúp nhân sự tra cứu thông tin trong hàng ngàn tài liệu, quy chế, hợp đồng nội bộ trong vài giây, với cam kết tuyệt đối: Chỉ trả lời dựa trên tài liệu thực tế, luôn trích dẫn nguồn và tuân thủ quyền hạn của người hỏi.',
    businessProblem: [
      'Nhân viên mất hàng giờ tìm kiếm tài liệu, biểu mẫu, quy trình cũ trong ổ đĩa chia sẻ.',
      'Nhân sự hỏi đi hỏi lại những câu hỏi chính sách đã có trong quy chế.',
      'Nguy cơ rò rỉ tài liệu mật khi không có cơ chế phân quyền tra cứu thông minh.'
    ],
    dataRead: [
      'Kho tài liệu nội bộ: Quy chế, quy chuẩn SOP, hợp đồng mẫu, thông tư',
      'Kho tri thức đào tạo, tài liệu kỹ thuật và biên bản sản phẩm',
      'Phân quyền tài khoản của người dùng đang gửi câu hỏi tra cứu'
    ],
    analysisCapability: [
      'Tìm kiếm theo ngữ nghĩa (Semantic Search) thay vì chỉ tìm theo từ khóa chính xác',
      'Đối chiếu quyền hạn của người hỏi với cấp độ bảo mật của tài liệu trước khi trả lời',
      'Trích xuất đoạn văn bản liên quan trực tiếp đến câu hỏi của người dùng'
    ],
    proposals: [
      'Gợi ý các tài liệu liên quan mật thiết đến chủ đề nhân sự đang tìm hiểu',
      'Cảnh báo khi phát hiện tài liệu nội bộ đã hết hạn hiệu lực hoặc có bản cập nhật mới'
    ],
    executionScope: [
      'Trả lời chính xác thắc mắc kèm đường link trích dẫn đến đúng trang tài liệu gốc',
      'Từ chối trả lời và thông báo không đủ thẩm quyền nếu tài liệu có tính bảo mật cao',
      'Ghi nhật ký tra cứu để quản trị viên biết nhân sự đang quan tâm chủ đề gì'
    ],
    approvalRequired: [
      'BẮT BUỘC phê duyệt: Cấp quyền nạp tài liệu mới vào kho tri thức AI và điều chỉnh phân hạng bảo mật của tài liệu mật.'
    ],
    expectedResults: [
      'Rút ngắn 90% thời gian tra cứu chính sách và quy trình nội bộ',
      'Triệt tiêu hoàn toàn hiện tượng AI bịa đặt thông tin nhờ cơ chế RAG có kiểm chứng',
      'Bảo vệ 100% dữ liệu mật theo phân quyền vai trò doanh nghiệp'
    ]
  }
];

export const capabilitiesList = [
  {
    id: 'cap_1',
    title: 'Kiến trúc Doanh nghiệp AI',
    tagline: 'Thiết kế tổng thể hệ thống vận hành AI-native',
    description: 'Xây dựng bản vẽ kiến trúc kết nối con người, quy trình, dữ liệu và công nghệ thành một thể thống nhất, loại bỏ tình trạng chắp vá công cụ.',
    iconName: 'Layers'
  },
  {
    id: 'cap_2',
    title: 'Triển khai AI ENTERPRISE',
    tagline: 'May đo hệ điều hành doanh nghiệp theo đặc thù',
    description: 'Khảo sát hiện trạng, phân tích nghiệp vụ, cấu hình các lõi chức năng và đồng hành chuyển đổi toàn diện cho khách hàng doanh nghiệp.',
    iconName: 'Server'
  },
  {
    id: 'cap_3',
    title: 'CRS / CRM Doanh nghiệp',
    tagline: 'Quản trị khách hàng và quan hệ đối tác 360 độ',
    description: 'Thiết lập hệ thống quản lý lead, pipeline kinh doanh, chăm sóc khách hàng và lịch sử tương tác xuyên suốt hành trình trải nghiệm.',
    iconName: 'Users'
  },
  {
    id: 'cap_4',
    title: 'Website Doanh nghiệp Thông minh',
    tagline: 'Cổng thông tin trực tuyến kết nối trực tiếp với lõi',
    description: 'Xây dựng website chuẩn thương hiệu, tối ưu chuyển đổi, kết nối dữ liệu trực tiếp với hệ thống CRM và các trợ lý AI tiếp nhận thông tin.',
    iconName: 'Globe'
  },
  {
    id: 'cap_5',
    title: 'Tự động hóa Quy trình (Workflow)',
    tagline: 'Chuẩn hóa và tự động hóa các dòng chảy nghiệp vụ',
    description: 'Thiết kế quy trình SOP số, tự động kích hoạt tác vụ liên phòng ban, loại bỏ thao tác thủ công lặp lại và giảm thiểu sai sót con người.',
    iconName: 'Zap'
  },
  {
    id: 'cap_6',
    title: 'Tích hợp Hệ thống (Integration)',
    tagline: 'Mở rộng liên kết qua API, Webhook chuẩn quốc tế',
    description: 'Có khả năng tích hợp linh hoạt với các hệ sinh thái dịch vụ bên thứ ba (Google Workspace, Zalo, Email, Cổng thanh toán, Cơ sở dữ liệu riêng).',
    iconName: 'Cpu'
  },
  {
    id: 'cap_7',
    title: 'Data & Business Intelligence (BI)',
    tagline: 'Hệ thống báo cáo thời gian thực hỗ trợ ra quyết định',
    description: 'Xây dựng Dashboard trực quan đo lường hiệu quả vận hành, doanh thu, năng suất và dự báo tăng trưởng dựa trên dữ liệu thực chứng.',
    iconName: 'BarChart3'
  },
  {
    id: 'cap_8',
    title: 'Đào tạo & Chuyển giao Năng lực',
    tagline: 'Nâng cao năng lực ứng dụng công nghệ và AI cho đội ngũ',
    description: 'Chuyển giao tri thức vận hành, đào tạo người dùng cuối và quản trị viên, giúp doanh nghiệp làm chủ hệ thống dài hạn.',
    iconName: 'GraduationCap'
  }
];

export const implementationPhases = [
  {
    phase: 1,
    name: 'Khảo sát hiện trạng doanh nghiệp',
    duration: 'Giai đoạn 1',
    description: 'Khảo sát cấu trúc tổ chức, hiện trạng công nghệ, các điểm nghẽn vận hành và mục tiêu chiến lược của doanh nghiệp.',
    deliverables: ['Báo cáo đánh giá hiện trạng vận hành', 'Danh mục điểm nghẽn và mục tiêu chuyển đổi']
  },
  {
    phase: 2,
    name: 'Phân tích mô hình & quy trình nghiệp vụ',
    duration: 'Giai đoạn 2',
    description: 'Rà soát quy trình kinh doanh, marketing, CSKH, tài chính, nhân sự để chuẩn hóa thành các dòng chảy dữ liệu rõ ràng.',
    deliverables: ['Bản đồ quy trình nghiệp vụ (SOP Map)', 'Mô hình luân chuyển dữ liệu liên phòng ban']
  },
  {
    phase: 3,
    name: 'Thiết kế kiến trúc hệ thống & AI',
    duration: 'Giai đoạn 3',
    description: 'Lựa chọn các phân hệ lõi của AI ENTERPRISE, thiết lập cấu trúc dữ liệu riêng, phân quyền bảo mật và ranh giới quyền AI.',
    deliverables: ['Bản thiết kế kiến trúc hệ thống chi tiết', 'Quy chế phân quyền và ranh giới an toàn AI']
  },
  {
    phase: 4,
    name: 'Cấu hình & Tích hợp phân hệ',
    duration: 'Giai đoạn 4',
    description: 'Cấu hình các module Website, CRM, Marketing, Tài chính, Nhân sự và kết nối các điểm tiếp nhận qua API / Webhook an toàn.',
    deliverables: ['Hệ thống AI ENTERPRISE được cấu hình hoàn chỉnh', 'Các cổng tiếp nhận dữ liệu kết nối thông suốt']
  },
  {
    phase: 5,
    name: 'Kiểm thử, Đào tạo & Chuyển giao',
    duration: 'Giai đoạn 5',
    description: 'Kiểm thử thực tế toàn diện, tập huấn chuyên sâu cho từng vị trí phòng ban và chuyển giao quyền quản trị hệ thống.',
    deliverables: ['Biên bản nghiệm thu kiểm thử hệ thống', 'Bộ tài liệu đào tạo và video hướng dẫn vận hành']
  },
  {
    phase: 6,
    name: 'Vận hành chính thức (Go-Live) & Nâng cấp',
    duration: 'Giai đoạn 6',
    description: 'Đưa hệ thống vào vận hành thực tế, giám sát chỉ số ổn định, bảo trì định kỳ và hỗ trợ nâng cấp liên tục theo sự phát triển.',
    deliverables: ['Cam kết bảo trì và hỗ trợ vận hành (SLA)', 'Lộ trình cập nhật phiên bản tính năng định kỳ']
  }
];

export const securityPillars = [
  {
    id: 'sec_1',
    title: 'Phân quyền đa tầng (Multi-layered RBAC)',
    description: 'Phân quyền chặt chẽ theo phòng ban, vai trò và phạm vi dữ liệu. Nhân sự chỉ xem và thao tác trên đúng dữ liệu được cấp thẩm quyền.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'sec_2',
    title: 'Dữ liệu sở hữu riêng (Isolated Data Space)',
    description: 'Doanh nghiệp sở hữu hoàn toàn dữ liệu của mình. Mỗi doanh nghiệp là một không gian độc lập, tuyệt đối không chia sẻ hay dùng chung chéo.',
    iconName: 'Database'
  },
  {
    id: 'sec_3',
    title: 'AI hoạt động trong giới hạn quyền hạn',
    description: 'Mọi AI Agent bị giới hạn nghiêm ngặt theo thẩm quyền tài khoản của người gọi lệnh. AI không thể vượt quyền hay xem dữ liệu không được phép.',
    iconName: 'Lock'
  },
  {
    id: 'sec_4',
    title: 'Nhật ký kiểm toán toàn diện (Full Audit Log)',
    description: 'Mọi hành động thêm, sửa, xóa, duyệt và truy cập dữ liệu đều được ghi vết thời gian, địa chỉ IP và định danh người thực hiện để đối soát.',
    iconName: 'FileText'
  },
  {
    id: 'sec_5',
    title: 'Cơ chế Phê duyệt Con người (Human-in-the-Loop)',
    description: 'AI chỉ giữ vai trò đề xuất, phân tích và hỗ trợ. Mọi quyết định tài chính, xuất bản nội dung hoặc thay đổi chính sách đều cần con người phê duyệt.',
    iconName: 'UserCheck'
  },
  {
    id: 'sec_6',
    title: 'Sao lưu định kỳ & Phục hồi sau thảm họa',
    description: 'Cơ chế sao lưu dữ liệu tự động định kỳ, lưu trữ đa vùng và quy trình khôi phục nhanh chóng đảm bảo tính liên tục của hoạt động kinh doanh.',
    iconName: 'RefreshCw'
  }
];

export const integrationsData = {
  philosophy: 'Kiến trúc mở (Open Architecture) cho phép doanh nghiệp kết nối linh hoạt với hệ sinh thái công nghệ hiện hữu.',
  capabilities: [
    { name: 'RESTful API & Webhook', status: 'Sẵn sàng theo kiến trúc', desc: 'Kết nối hai chiều với mọi phần mềm có hỗ trợ API chuẩn.' },
    { name: 'Hệ thống Email Doanh nghiệp', status: 'Có khả năng tích hợp', desc: 'Đồng bộ gửi/nhận thông báo và bản tin qua giao thức SMTP/IMAP/API.' },
    { name: 'Nền tảng Google Workspace', status: 'Có khả năng tích hợp', desc: 'Đồng bộ lịch hẹn, trang tính và tài liệu làm việc chung.' },
    { name: 'Hệ sinh thái Zalo / Tin nhắn', status: 'Có khả năng tích hợp', desc: 'Tiếp nhận tin nhắn khách hàng và gửi thông báo trạng thái đơn hàng.' },
    { name: 'Cổng thanh toán & Ngân hàng', status: 'Có khả năng tích hợp', desc: 'Nhận Webhook biến động số dư và hỗ trợ đối soát đơn hàng tự động.' },
    { name: 'Cơ sở dữ liệu riêng (PostgreSQL, MySQL)', status: 'Có khả năng tích hợp', desc: 'Kết nối và trích xuất dữ liệu từ các kho dữ liệu hiện có của doanh nghiệp.' }
  ]
};

export const resourcesFaq = [
  {
    q: 'VMC Group là ai và định vị như thế nào?',
    a: 'VMC Group là đơn vị xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI. Chúng tôi không định vị là công ty làm website đơn thuần hay bán thêm một công cụ chatbot riêng lẻ, mà đóng vai trò là kiến trúc sư thiết kế và triển khai một hệ điều hành thống nhất cho doanh nghiệp.'
  },
  {
    q: 'AI ENTERPRISE khác gì so với việc mua nhiều phần mềm rời rạc?',
    a: 'Thay vì doanh nghiệp phải mua CRM riêng, phần mềm nhân sự riêng, kế toán riêng rồi loay hoay tìm cách ghép nối với nhiều chi phí và dữ liệu phân mảnh, AI ENTERPRISE cung cấp một kiến trúc lõi thống nhất: một cơ sở dữ liệu, một chuẩn phân quyền, một luồng quy trình và các trợ lý AI thông minh xuyên suốt.'
  },
  {
    q: 'Doanh nghiệp nào phù hợp với giải pháp của VMC Group?',
    a: 'Doanh nghiệp vừa và đang tăng trưởng (khoảng 20 – 500 nhân sự), đã có hoạt động kinh doanh thực tế nhưng bắt đầu gặp giới hạn về con người, dữ liệu, quy trình và sự phối hợp liên phòng ban; có tinh thần chuẩn hóa vận hành và mong muốn ứng dụng công nghệ thực chất.'
  },
  {
    q: 'Triết lý ứng dụng AI của VMC Group là gì?',
    a: 'VMC Group tuân thủ nguyên tắc: AI không tự do hành động. AI hoạt động dựa trên dữ liệu, vai trò, quyền hạn, phê duyệt của con người và nhật ký audit log minh bạch. AI là năng lực vận hành gia tăng sức mạnh cho con người chứ không thay thế hoàn toàn con người.'
  },
  {
    q: 'Chi phí triển khai AI ENTERPRISE được tính như thế nào?',
    a: 'Hiện chưa có một bảng giá cố định duy nhất vì AI ENTERPRISE là giải pháp doanh nghiệp may đo theo kiến trúc lõi. Chi phí phụ thuộc vào quy mô nhân sự, số lượng module kích hoạt, khối lượng dữ liệu, mức độ tùy biến và phạm vi chuyển giao. Vui lòng đăng ký tư vấn để nhận cấu hình giải pháp tối ưu.'
  },
  {
    q: 'Dữ liệu của doanh nghiệp có được bảo mật an toàn không?',
    a: 'Doanh nghiệp sở hữu hoàn toàn 100% dữ liệu của mình. Hệ thống áp dụng kiến trúc phân tách không gian dữ liệu riêng biệt cho từng doanh nghiệp, mã hóa lưu trữ, phân quyền đa tầng và nhật ký audit log truy vết mọi thao tác.'
  }
];

export const needSolutions: NeedSolution[] = [
  {
    id: 'need_crm',
    slug: 'crm',
    name: 'CRS / CRM Doanh nghiệp',
    tagline: 'Nền tảng quản trị khách hàng toàn diện, phễu cơ hội và vòng đời giao dịch thống nhất',
    iconName: 'Users',
    coreValue: 'Chuyển hóa dữ liệu khách hàng từ tài sản cá nhân phân tán thành tài sản số hóa tập trung của tổ chức; liên kết liền mạch từ tiếp thị, bán hàng, đơn hàng đến dòng tiền.',
    problems: [
      'Dữ liệu khách hàng phân mảnh qua file Excel, tin nhắn Zalo cá nhân, sổ tay, gây nguy cơ mất mát khi thay đổi nhân sự.',
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
      { title: 'Phân quyền dữ liệu kinh doanh', description: 'Phân quyền xem và thao tác theo phòng ban, nhóm kinh doanh hoặc phụ trách cá nhân, ngăn ngừa rò rỉ dữ liệu.' }
    ],
    aiAssistance: {
      reads: 'Đọc lịch sử mua hàng, nội dung ghi chú tương tác, trạng thái phễu cơ hội và tiến độ xử lý lead của tư vấn viên.',
      analyzes: 'Phân tích mức độ quan tâm của khách hàng, tần suất tương tác, tỷ lệ rớt lead ở từng bước và hiệu suất của tư vấn viên.',
      proposes: 'Gợi ý thời điểm phù hợp để liên hệ lại, kịch bản xử lý từ chối và sản phẩm/dịch vụ phù hợp để tư vấn gia tăng.',
      executes: 'Tự động phân loại lead, cập nhật thẻ phân nhóm, kích hoạt thông báo nhắc việc và gửi thư xác nhận lịch hẹn (khi có cấu hình).',
      requiresApproval: 'Bắt buộc phê duyệt đối với các báo giá có chiết khấu ngoài khung quy định, chuyển giao tài khoản trọng yếu, hoặc hủy/xóa hồ sơ khách hàng.'
    },
    systemConnections: [
      'Kết nối Phân hệ Website (Scope A): Nhận dữ liệu đăng ký và form lead tức thì theo thời gian thực.',
      'Kết nối Phân hệ Tài chính - Kế toán (Scope E): Đối soát thanh toán, hợp đồng và tình trạng xuất hóa đơn.',
      'Kết nối Phân hệ CSKH (Scope C): Chuyển giao thông tin khách hàng sau khi chốt hợp đồng để chăm sóc liên tục.',
      'Kết nối Phân hệ Báo cáo & BI (Scope H): Cung cấp chỉ số doanh thu phễu và tỷ lệ chuyển đổi cho ban lãnh đạo.'
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
    }
  },
  {
    id: 'need_ai_agent',
    slug: 'ai-agent',
    name: 'Mạng lưới AI Agent Chuyên trách',
    tagline: 'Hệ thống 9 trợ lý AI đồng hành theo từng vị trí nghiệp vụ, vận hành có kiểm soát và phê duyệt của con người',
    iconName: 'Sparkles',
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
      { title: 'AI Search / RAG Tri thức nội bộ', description: 'Truy vấn tức thì mọi quy chế, chính sách, tài liệu sản phẩm theo ngữ nghĩa tự nhiên với độ chính xác cao.' }
    ],
    aiAssistance: {
      reads: 'Chỉ đọc các tài liệu và trường dữ liệu đã được cấu hình trong phạm vi quyền hạn của từng Agent.',
      analyzes: 'Xu hướng biến động chỉ số, sự sai lệch so với quy trình chuẩn, nội dung văn bản và ngữ cảnh câu hỏi.',
      proposes: 'Bản nháp email, tóm tắt báo cáo điều hành, giải pháp xử lý sự vụ, danh mục việc cần làm ưu tiên.',
      executes: 'Tổng hợp dữ liệu, lập bảng so sánh, định dạng văn bản, tạo bản ghi nháp trên hệ thống.',
      requiresApproval: 'Bắt buộc phê duyệt đối với bất kỳ hành động nào tác động ra bên ngoài (gửi thư cho khách, xuất quỹ, thay đổi chính sách, ký duyệt hồ sơ).'
    },
    systemConnections: [
      'Kết nối toàn diện 11 phân hệ lõi của AI ENTERPRISE từ Website đến Bảo mật.',
      'Giao diện tích hợp trực tiếp trong Không gian làm việc (Workspace) của từng cán bộ nhân viên.',
      'Kết nối với cơ chế phân quyền trung tâm (Scope K) để kiểm soát dữ liệu đầu vào.'
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
      dataScope: 'Dữ liệu huấn luyện và truy xuất được cô lập tuyệt đối, không chia sẻ cho các mô hình AI công cộng bên ngoài.'
    }
  },
  {
    id: 'need_voice',
    slug: 'voice',
    name: 'AI Voice Cuộc gọi Thông minh',
    tagline: 'Giải pháp ghi nhận, bóc băng hội thoại và hỗ trợ phân tích tương tác thoại đa kênh trong hoạt động kinh doanh & CSKH',
    iconName: 'Mic',
    coreValue: 'Số hóa dữ liệu cuộc gọi thoại thành văn bản có cấu trúc, giúp doanh nghiệp quản lý chất lượng tư vấn, thấu hiểu nhu cầu khách hàng và tự động cập nhật hệ thống CRM.',
    problems: [
      'Nội dung cuộc gọi giữa nhân viên và khách hàng thường bị thất thoát sau khi cúp máy, quản lý không nắm được cam kết thực tế.',
      'Nhân viên mất 15-30 phút sau mỗi cuộc gọi dài để nhớ lại và gõ ghi chú tóm tắt vào hệ thống CRM, dễ sót thông tin quan trọng.',
      'Khó đánh giá chất lượng tư vấn của đội ngũ một cách khách quan; thường chỉ phát hiện vấn đề khi khách hàng đã khiếu nại.',
      'Nhân sự mới gặp khó khăn trong việc nắm bắt kịch bản xử lý các tình huống phức tạp trong khi đang đàm thoại.'
    ],
    solutionOverview: 'AI Voice là phân hệ định hướng tích hợp sâu vào quy trình tổng đài thoại của doanh nghiệp: tự động chuyển âm thanh thành văn bản (Speech-to-Text), phân tích cảm xúc, trích xuất nhu cầu trọng tâm, soạn bản tóm tắt (Post-call Summary) và gợi ý bước hành động kế tiếp.',
    dataTypes: [
      'Tệp ghi âm cuộc gọi (được mã hóa và lưu trữ an toàn)',
      'Bản bóc băng hội thoại đầy đủ (Call Transcript phân tách từng người nói)',
      'Bản tóm tắt cuộc gọi (Nội dung chính, Nhu cầu khách hàng, Thỏa thuận đạt được, Việc cần làm)',
      'Chỉ số đánh giá cuộc gọi (Thời lượng, Cảm xúc khách hàng, Mức độ tuân thủ kịch bản tư vấn)'
    ],
    operatingWorkflow: {
      input: 'Cuộc gọi thoại giữa nhân sự và khách hàng kết thúc (hoặc luồng âm thanh thời gian thực).',
      process: 'Công nghệ chuyển đổi giọng nói sang văn bản tiếng Việt bóc băng chi tiết từng câu thoại.',
      aiAutomation: 'AI phân tích nội dung, trích xuất các ý chính, nhận diện cảm xúc và tự động tạo bản tóm tắt giao dịch.',
      humanControl: 'Nhân viên phụ trách kiểm tra lại bản tóm tắt, bổ sung chi tiết (nếu có) và xác nhận lưu vào hồ sơ CRM.',
      output: 'Hồ sơ Customer 360 trên CRS/CRM được cập nhật tức thì với toàn bộ lịch sử tương tác và nhiệm vụ follow-up tiếp theo.'
    },
    keyFeatures: [
      { title: 'Tự động bóc băng hội thoại (Speech-to-Text)', description: 'Chuyển đổi âm thanh cuộc gọi tiếng Việt sang văn bản có cấu trúc, phân tách rõ lời thoại của tư vấn viên và khách hàng.' },
      { title: 'Tóm tắt nội dung sau cuộc gọi (Post-call Summary)', description: 'AI tự động trích xuất các điểm cốt lõi: nhu cầu chính, ngân sách dự kiến, các rào cản từ chối và thỏa thuận đã đạt.' },
      { title: 'Gợi ý hành động kế tiếp (Next Best Action)', description: 'Đề xuất thời gian gọi lại, tài liệu báo giá cần gửi hoặc kích hoạt yêu cầu hỗ trợ kỹ thuật theo nội dung trao đổi.' },
      { title: 'Phân tích cảm xúc & Đánh giá chất lượng', description: 'Định hướng nhận diện mức độ hài lòng của khách hàng và rà soát việc tuân thủ các quy tắc ứng xử chuẩn mực.' },
      { title: 'Đồng bộ tự động vào Timeline CRM', description: 'Gắn trực tiếp bản ghi và tóm tắt vào hồ sơ khách hàng tương ứng, không cần sao chép thủ công.' }
    ],
    aiAssistance: {
      reads: 'Tệp ghi âm cuộc gọi và dữ liệu hồ sơ khách hàng hiện có trên hệ thống.',
      analyzes: 'Từ khóa chính, ngữ điệu, cảm xúc tích cực/tiêu cực, các cam kết về giá hoặc tiến độ xuất hiện trong hội thoại.',
      proposes: 'Bản tóm tắt cuộc gọi, danh mục các việc cần thực hiện tiếp theo (Follow-up Tasks) và kịch bản gửi tin nhắn/email tiếp nối.',
      executes: 'Soạn thảo bản tóm tắt nháp và gắn vào hồ sơ khách hàng trên giao diện CRM.',
      requiresApproval: 'Nhân viên xác nhận nội dung tóm tắt trước khi chính thức lưu vào lịch sử giao dịch vĩnh viễn; việc kích hoạt cuộc gọi tự động (nếu triển khai) phải tuân thủ nghiêm ngặt quy định pháp luật.'
    },
    systemConnections: [
      'Kết nối trực tiếp Phân hệ CRS / CRM (Scope B): Cập nhật Customer 360 và lịch sử tương tác.',
      'Kết nối Phân hệ CSKH (Scope C): Quản lý chất lượng phục vụ và xử lý khiếu nại.',
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
    }
  },
  {
    id: 'need_automation',
    slug: 'automation',
    name: 'Tự động hóa Quy trình (Workflow Automation)',
    tagline: 'Động cơ tự động hóa quy trình nghiệp vụ liên phòng ban theo chuẩn SOP, giảm thiểu tối đa thao tác thủ công',
    iconName: 'Workflow',
    coreValue: 'Kết nối các bước công việc rời rạc giữa các bộ phận thành một chuỗi vận hành tự động, thông suốt, có điều kiện kích hoạt, cơ chế phê duyệt và nhật ký kiểm soát rõ ràng.',
    problems: [
      'Quy trình chuyển giao công việc giữa các phòng ban bị tắc nghẽn (kinh doanh ký hợp đồng xong phải nhắc kế toán bằng tay, kế toán xuất hóa đơn xong phải tự nhắn cho kho).',
      'Nhân viên tốn nhiều giờ mỗi ngày cho các thao tác lặp đi lặp lại: nhập liệu từ kênh này sang kênh khác, gửi email xác nhận, gán việc thủ công.',
      'Quy trình phê duyệt (nghỉ phép, tạm ứng, duyệt hợp đồng, duyệt chiết khấu) bị chậm trễ do qua nhiều kênh chat và giấy tờ.',
      'Khó phát hiện nút thắt cổ chai: Quản lý không biết hồ sơ đang kẹt ở bàn ai và chậm trễ bao lâu so với quy định SOP.'
    ],
    solutionOverview: 'Phân hệ Tự động hóa Quy trình của AI ENTERPRISE thiết lập dòng chảy công việc chuẩn mực theo mô hình: Kích hoạt (Trigger) → Điều kiện (Condition) → Hành động (Action) → Phê duyệt (Approval) → Kết quả (Result) → Nhật ký (Log). Giúp doanh nghiệp vận hành nhịp nhàng như một cỗ máy chính xác.',
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
      { title: 'Nhật ký thực thi minh bạch (Execution Log)', description: 'Theo dõi chi tiết từng giây: ai đã làm gì, ở bước nào, kết quả ra sao và lý do từ chối (nếu có).' }
    ],
    aiAssistance: {
      reads: 'Quy chế quy trình nội bộ, dữ liệu phiếu yêu cầu và lịch sử phê duyệt các trường hợp tương tự.',
      analyzes: 'Mức độ tuân thủ quy định SOP, phát hiện các điểm sai sót trong hồ sơ đầu vào và đo lường thời gian xử lý qua các khâu.',
      proposes: 'Gợi ý phân bổ việc cho nhân sự đang có khối lượng công việc phù hợp, đề xuất duyệt nhanh các hồ sơ chuẩn mực định kỳ.',
      executes: 'Tự động gán nhãn, chuyển bước quy trình, tạo thông báo nhắc hẹn và cập nhật trạng thái cơ sở dữ liệu.',
      requiresApproval: 'Mọi điểm chốt chặn tài chính, pháp lý hoặc điều chỉnh quyền hạn nhân sự đều bắt buộc phải có sự phê duyệt trực tiếp của con người.'
    },
    systemConnections: [
      'Liên kết trực tiếp với Phân hệ Quy trình & Vận hành (Scope D).',
      'Kết nối Phân hệ Nhân sự (Scope F) để xác định cây phân cấp báo cáo và phân quyền duyệt.',
      'Kết nối Phân hệ CRS/CRM (Scope B) và Tài chính (Scope E) cho các luồng xử lý giao dịch.'
    ],
    reportTypes: [
      'Báo cáo thời gian hoàn thành trung bình của từng loại quy trình',
      'Báo cáo các điểm nghẽn (Bottlenecks) và khâu thường xuyên bị trễ hạn',
      'Báo cáo số lượng hồ sơ được xử lý tự động so với xử lý thủ công'
    ],
    securityAndGovernance: {
      rbac: 'Phân quyền chặt chẽ ai được phép tạo luồng, ai được quyền duyệt và ai chỉ được quyền xem tiến độ.',
      auditLog: 'Lưu giữ vĩnh viễn mọi hành động duyệt/hủy duyệt cùng mốc thời gian chính xác để phục vụ hậu kiểm.',
      approvalMechanism: 'Không có bất kỳ quy trình tự động nào được phép tự ý bỏ qua các chốt chặn phê duyệt đã được quy định trong chính sách công ty.',
      dataScope: 'Hồ sơ công việc chỉ hiển thị cho các cá nhân và bộ phận nằm trong chuỗi trách nhiệm của quy trình đó.'
    }
  },
  {
    id: 'need_website',
    slug: 'website',
    name: 'Website Doanh nghiệp Hợp nhất Lõi',
    tagline: 'Cổng thông tin & thương hiệu trực tuyến kết nối trực tiếp với CRM, tự động đồng bộ phễu khách hàng',
    iconName: 'Globe',
    coreValue: 'Website không đơn thuần là một trang giới thiệu tĩnh, mà là cửa ngõ số kết nối trực tiếp với hệ điều hành doanh nghiệp, thu hút và chuyển hóa lead trực tiếp vào đường ống bán hàng.',
    problems: [
      'Website làm bằng một nền tảng bên ngoài, khi có khách đăng ký thì thông tin chỉ gửi về email cá nhân hoặc lưu vào một bảng tính tách rời, rất dễ bị bỏ quên.',
      'Mất từ vài giờ đến vài ngày để nhân viên kinh doanh tiếp cận lead mới từ website, làm giảm mạnh cơ hội chốt giao dịch.',
      'Nội dung, hình ảnh, thông điệp trên website khó cập nhật; mỗi lần sửa đổi phải phụ thuộc hoàn toàn vào đơn vị thiết kế web thuê ngoài.',
      'Không đo lường được hiệu quả thực sự: Không biết khách hàng truy cập từ chiến dịch nào và sau đó có trở thành hợp đồng hay không.'
    ],
    solutionOverview: 'Trong kiến trúc AI ENTERPRISE, Phân hệ Website (Scope A) được xây dựng hợp nhất với hệ thống quản trị: mọi biểu mẫu đăng ký, thông tin liên hệ và lượt tương tác đều được đồng bộ thời gian thực vào CRS/CRM, kích hoạt ngay lập tức quy trình chăm sóc khách hàng.',
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
      humanControl: 'Tư vấn viên nhận thông báo ngay lập tức trên Workspace và tiếp nhận chăm sóc theo quy trình.',
      output: 'Dữ liệu được lưu trữ an toàn trong hồ sơ Customer 360, hình thành hành trình khách hàng từ lần chạm đầu tiên.'
    },
    keyFeatures: [
      { title: 'Đồng bộ biểu mẫu trực tiếp vào CRS / CRM', description: 'Khách hàng gửi yêu cầu tư vấn là dữ liệu có mặt ngay trên hệ thống nội bộ, không qua các bước trung gian thủ công.' },
      { title: 'Quản trị nội dung & Nhận diện tập trung', description: 'Đồng bộ thông tin doanh nghiệp, tầm nhìn, dịch vụ trực tiếp từ phân hệ quản trị Admin của AI ENTERPRISE.' },
      { title: 'Hỗ trợ cấu hình Landing Page chuyên biệt', description: 'Dễ dàng triển khai các trang chuyên đề phục vụ chiến dịch giới thiệu giải pháp theo từng ngành nghề hoặc sự kiện.' },
      { title: 'Tối ưu trải nghiệm hiển thị đa thiết bị', description: 'Giao diện tương thích hoàn hảo trên máy tính để bàn, máy tính bảng và điện thoại di động với tốc độ tải nhanh chóng.' },
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
      'Kết nối trực tiếp Phân hệ Quản trị Admin: Quản lý thông tin doanh nghiệp và nhận diện thương hiệu.',
      'Kết nối Phân hệ CRS/CRM (Scope B): Đẩy dữ liệu lead và kích hoạt đường ống bán hàng tức thì.',
      'Kết nối Phân hệ Marketing (Scope B): Đo lường tỷ lệ chuyển đổi của các chiến dịch trực tuyến.'
    ],
    reportTypes: [
      'Báo cáo số lượng lượt đăng ký biểu mẫu theo ngày/tuần/tháng',
      'Báo cáo tỷ lệ chuyển đổi từ khách truy cập thành lead tiềm năng',
      'Báo cáo các trang nội dung và giải pháp được quan tâm nhiều nhất'
    ],
    securityAndGovernance: {
      rbac: 'Phân chia quyền hạn rõ ràng: Biên tập viên soạn thảo nội dung, Quản trị viên duyệt xuất bản, Nhân sự kinh doanh chỉ nhận dữ liệu lead.',
      auditLog: 'Lưu vết mọi thay đổi về nội dung, cấu hình biểu mẫu và lịch sử xuất bản của các trang.',
      approvalMechanism: 'Cơ chế kiểm duyệt nội dung trước khi công khai (Publishing Workflow) ngăn ngừa lỗi thông tin.',
      dataScope: 'Dữ liệu khách hàng đăng ký trên website được mã hóa truyền tải và bảo vệ theo chuẩn an toàn thông tin.'
    }
  },
  {
    id: 'need_bi',
    slug: 'bi',
    name: 'Báo cáo & BI Thời gian thực',
    tagline: 'Trung tâm dữ liệu điều hành đa chiều, trực quan hóa chỉ số KPI/OKR và dự báo xu hướng vận hành',
    iconName: 'BarChart3',
    coreValue: 'Xóa bỏ việc chờ đợi báo cáo tổng hợp cuối tháng bằng văn bản Excel thủ công; cung cấp cho nhà lãnh đạo cái nhìn thời gian thực về sức khỏe doanh nghiệp để ra quyết định dựa trên dữ liệu chuẩn xác.',
    problems: [
      'Lãnh đạo phải đợi 1-2 tuần sau khi hết tháng mới có số liệu tổng hợp từ các phòng ban, khiến các quyết định điều hành luôn bị chậm trễ.',
      'Số liệu giữa các phòng ban bị vênh nhau (Doanh số kinh doanh báo một đằng, số liệu kế toán thu về một nẻo, tồn kho thực tế lại khác).',
      'Mất nhiều công sức nhân sự chỉ để cắt dán số liệu từ nhiều file Excel rời rạc vào một trang chiếu để họp.',
      'Thiếu khả năng cảnh báo sớm: Khi phát hiện doanh thu sụt giảm hoặc chi phí vượt định mức thì hậu quả đã xảy ra.'
    ],
    solutionOverview: 'Phân hệ Báo cáo & BI (Scope H) trong AI ENTERPRISE đóng vai trò là trung tâm thần kinh dữ liệu: kết nối dòng chảy thông tin từ tất cả 11 phân hệ, tự động tính toán các chỉ số đo lường hiệu quả (KPIs), hiển thị bảng điều khiển trực quan và đưa ra cảnh báo kịp thời.',
    dataTypes: [
      'Dữ liệu chỉ số kinh doanh & doanh thu (Doanh số theo kỳ, Giá trị trung bình đơn, Tỷ lệ chốt)',
      'Dữ liệu chỉ số vận hành & năng suất (Số lượng tác vụ hoàn thành, Thời gian xử lý quy trình SLA)',
      'Dữ liệu chỉ số tài chính (Doanh thu đã thu, Công nợ phải thu, Chi phí vận hành cơ bản)',
      'Dữ liệu chỉ số nhân sự (Quy mô nhân sự, Tỷ lệ biến động, Năng suất làm việc bình quân)',
      'Dữ liệu hiệu quả ứng dụng AI & Tự động hóa (Số tác vụ tự động thực hiện, Tỷ lệ người dùng chấp thuận đề xuất)'
    ],
    operatingWorkflow: {
      input: 'Dữ liệu phát sinh liên tục từ các hoạt động thực tế: đơn hàng tạo mới, cuộc gọi hoàn tất, phiếu duyệt được ký, chứng từ được xuất.',
      process: 'Động cơ dữ liệu tự động làm sạch, tổng hợp theo thời gian thực và đồng bộ vào các khối chỉ số quản trị.',
      aiAutomation: 'AI phát hiện các biến động bất thường (doanh số giảm đột ngột ở một nhóm ngành, chi phí tăng cao bất thường) và tạo thông báo.',
      humanControl: 'Nhà quản lý xem xét bảng điều khiển, đào sâu (drill-down) vào các dữ liệu thành phần và đưa ra quyết định chỉ đạo.',
      output: 'Báo cáo điều hành tự động cập nhật liên tục, không cần chờ nhân viên tổng hợp thủ công.'
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
      'Tổng hợp dữ liệu từ toàn bộ các Phân hệ chức năng của AI ENTERPRISE (Scope B, C, D, E, F, G).',
      'Kết nối với Không gian làm việc của lãnh đạo (Executive Workspace) để hiển thị báo cáo điều hành.',
      'Cung cấp số liệu nền tảng cho Trợ lý AI CEO phân tích và đưa ra khuyến nghị.'
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
      dataScope: 'Toàn bộ dữ liệu báo cáo được tính toán trực tiếp từ cơ sở dữ liệu riêng của doanh nghiệp, cam kết bảo mật tuyệt đối.'
    }
  }
];
