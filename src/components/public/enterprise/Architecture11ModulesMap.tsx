import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  Globe, Users, Megaphone, Headphones, DollarSign, UserCheck,
  Workflow, BookOpen, Bot, BarChart3, Lock, ChevronRight,
  ArrowRight, CheckCircle2, Layers, Database, Sparkles, ChevronDown
} from 'lucide-react';

export interface ModuleDetail {
  code: string;
  name: string;
  layer: string;
  layerNum: number;
  tagline: string;
  icon: React.ElementType;
  color: string;
  bgLight: string;
  borderLight: string;
  keyCapabilities: { title: string; desc: string }[];
  dataIn: string;
  dataOut: string;
  solutionLink: string;
  solutionLabel: string;
}

export const MODULES_11: ModuleDetail[] = [
  {
    code: 'A',
    name: 'Website & Quản trị Website',
    layer: 'Tầng 1: Cổng Tiếp Nhận & Nhận Diện Số',
    layerNum: 1,
    tagline: 'Cổng thông tin thương hiệu, trang đích thu hút lead trực tuyến kết nối tức thời với lõi vận hành',
    icon: Globe,
    color: 'text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-50 dark:bg-blue-950/50',
    borderLight: 'border-blue-200 dark:border-blue-800',
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
    icon: Users,
    color: 'text-indigo-600 dark:text-indigo-400',
    bgLight: 'bg-indigo-50 dark:bg-indigo-950/50',
    borderLight: 'border-indigo-200 dark:border-indigo-800',
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
    icon: Megaphone,
    color: 'text-purple-600 dark:text-purple-400',
    bgLight: 'bg-purple-50 dark:bg-purple-950/50',
    borderLight: 'border-purple-200 dark:border-purple-800',
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
    icon: Headphones,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgLight: 'bg-cyan-50 dark:bg-cyan-950/50',
    borderLight: 'border-cyan-200 dark:border-cyan-800',
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
    icon: DollarSign,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/50',
    borderLight: 'border-emerald-200 dark:border-emerald-800',
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
    icon: UserCheck,
    color: 'text-amber-600 dark:text-amber-400',
    bgLight: 'bg-amber-50 dark:bg-amber-950/50',
    borderLight: 'border-amber-200 dark:border-amber-800',
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
    icon: Workflow,
    color: 'text-teal-600 dark:text-teal-400',
    bgLight: 'bg-teal-50 dark:bg-teal-950/50',
    borderLight: 'border-teal-200 dark:border-teal-800',
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
    icon: BookOpen,
    color: 'text-violet-600 dark:text-violet-400',
    bgLight: 'bg-violet-50 dark:bg-violet-950/50',
    borderLight: 'border-violet-200 dark:border-violet-800',
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
    icon: Bot,
    color: 'text-rose-600 dark:text-rose-400',
    bgLight: 'bg-rose-50 dark:bg-rose-950/50',
    borderLight: 'border-rose-200 dark:border-rose-800',
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
    icon: BarChart3,
    color: 'text-amber-500 dark:text-amber-400',
    bgLight: 'bg-amber-50 dark:bg-amber-950/50',
    borderLight: 'border-amber-200 dark:border-amber-800',
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
    icon: Lock,
    color: 'text-slate-700 dark:text-slate-300',
    bgLight: 'bg-slate-100 dark:bg-slate-800/60',
    borderLight: 'border-slate-300 dark:border-slate-700',
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
];

export const Architecture11ModulesMap: React.FC = () => {
  const { navigate } = usePublicRouter();
  const [selectedCode, setSelectedCode] = useState<string>('B');
  const [mobileExpandedCode, setMobileExpandedCode] = useState<string | null>('B');

  const selectedModule = MODULES_11.find((m) => m.code === selectedCode) || MODULES_11[1];

  return (
    <section id="architecture" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          KIẾN TRÚC TỔNG THỂ 4 TẦNG
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          Bản đồ 11 Phân Hệ AI ENTERPRISE (Scope A → K)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Được thiết kế theo cấu trúc module linh hoạt: Doanh nghiệp có thể bắt đầu với 2–3 phân hệ ưu tiên nhất và kích hoạt thêm các phân hệ tiếp theo theo đúng lộ trình phát triển mà không bị xáo trộn hệ thống.
        </p>
      </div>

      {/* 4-LAYER VISUAL ARCHITECTURE MAP */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 dark:bg-[#060D19] text-white border border-slate-800 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-wider">
              KIẾN TRÚC 4 TẦNG HỢP NHẤT
            </span>
            <h3 className="text-base font-bold text-white mt-0.5">
              Sơ đồ định vị 11 phân hệ chức năng trên một cơ sở dữ liệu chung
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            * Bấm vào từng phân hệ để xem bảng năng lực chi tiết bên dưới
          </span>
        </div>

        <div className="space-y-4">
          {/* LAYER 1: CỔNG TIẾP NHẬN & NHẬN DIỆN SỐ (1 Module: Scope A) */}
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-bold uppercase tracking-wider">
                TẦNG 1: CỔNG TIẾP NHẬN & NHẬN DIỆN SỐ
              </span>
              <span>1 Phân hệ</span>
            </div>
            <div className="grid grid-cols-1">
              <button
                type="button"
                onClick={() => setSelectedCode('A')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  selectedCode === 'A'
                    ? 'bg-[#155EEF] text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                    : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-mono font-bold text-xs">
                    A
                  </span>
                  <div>
                    <h4 className="text-xs font-bold">Scope A: Website và quản trị website</h4>
                    <p className="text-[11px] text-slate-300 line-clamp-1">
                      Cổng thông tin, nhận diện thương hiệu, trang đích thu hút lead trực tuyến
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-white/70" />
              </button>
            </div>
          </div>

          {/* LAYER 2: QUẢN TRỊ KHÁCH HÀNG & DOANH THU (3 Modules: B, C, D) */}
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-purple-400 font-bold uppercase tracking-wider">
                TẦNG 2: QUẢN TRỊ KHÁCH HÀNG & DOANH THU
              </span>
              <span>3 Phân hệ</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {['B', 'C', 'D'].map((code) => {
                const mod = MODULES_11.find((m) => m.code === code)!;
                const isSelected = selectedCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setSelectedCode(code)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#155EEF] text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                        : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-mono font-bold text-xs">
                        {code}
                      </span>
                      <span className="text-xs font-bold leading-tight line-clamp-1">
                        Scope {code}: {mod.name.split('/')[0]}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-white/70" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* LAYER 3: VẬN HÀNH & NGUỒN LỰC TỔ CHỨC (4 Modules: E, F, G, H) */}
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-bold uppercase tracking-wider">
                TẦNG 3: VẬN HÀNH & NGUỒN LỰC TỔ CHỨC
              </span>
              <span>4 Phân hệ</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {['E', 'F', 'G', 'H'].map((code) => {
                const mod = MODULES_11.find((m) => m.code === code)!;
                const isSelected = selectedCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setSelectedCode(code)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#155EEF] text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                        : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-mono font-bold text-xs">
                        {code}
                      </span>
                      <span className="text-xs font-bold leading-tight line-clamp-1">
                        Scope {code}: {mod.name.split('—')[0].split('(')[0]}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-white/70" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* LAYER 4: TRÍ TUỆ ĐIỀU HÀNH & NỀN TẢNG MỞ (3 Modules: I, J, K - CÂN ĐỐI 3 Ô, KHỐI K KHÔNG BỊ LẺ) */}
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-amber-400 font-bold uppercase tracking-wider">
                TẦNG 4: TRÍ TUỆ ĐIỀU HÀNH & NỀN TẢNG MỞ
              </span>
              <span>3 Phân hệ (Cân đối 3 cột)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {['I', 'J', 'K'].map((code) => {
                const mod = MODULES_11.find((m) => m.code === code)!;
                const isSelected = selectedCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setSelectedCode(code)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#155EEF] text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                        : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-mono font-bold text-xs">
                        {code}
                      </span>
                      <span className="text-xs font-bold leading-tight line-clamp-1">
                        Scope {code}: {mod.name.split('&')[0]}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-white/70" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP MODULE DETAIL INSPECTOR */}
      <div className="hidden lg:block bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-2xs space-y-6">
        {/* Header of Inspector */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl ${selectedModule.bgLight} border ${selectedModule.borderLight}`}>
              <selectedModule.icon className={`w-8 h-8 ${selectedModule.color}`} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#0B1F3A] dark:bg-slate-800 text-white border border-slate-700">
                  SCOPE {selectedModule.code}
                </span>
                <span className="text-xs font-semibold text-[#155EEF] dark:text-[#06B6D4]">
                  {selectedModule.layer}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] dark:text-white mt-1">
                Phân hệ: {selectedModule.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                {selectedModule.tagline}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate(selectedModule.solutionLink)}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 dark:bg-blue-950/60 hover:bg-[#155EEF] hover:text-white border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold rounded-xl transition-all shrink-0 cursor-pointer"
          >
            <span>{selectedModule.solutionLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-5 Key Capabilities Grid */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Năng lực cốt lõi trọng tâm (Core Capabilities):
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {selectedModule.keyCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#070E1B] border border-slate-200/80 dark:border-slate-800 space-y-1"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{cap.title}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-6 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Data In / Data Out Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
            <span className="font-bold text-[#155EEF] dark:text-[#06B6D4] block mb-1">
              Dữ liệu tiếp nhận (Data In):
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedModule.dataIn}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
            <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
              Dữ liệu bàn giao (Data Out):
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedModule.dataOut}
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE ACCORDION / STEPPER FOR 11 MODULES */}
      <div className="block lg:hidden space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          Chi tiết 11 phân hệ (Bấm để xem năng lực):
        </div>

        {MODULES_11.map((mod) => {
          const isExpanded = mobileExpandedCode === mod.code;
          return (
            <div
              key={mod.code}
              className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs transition-colors"
            >
              <button
                type="button"
                onClick={() => setMobileExpandedCode(isExpanded ? null : mod.code)}
                className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0B1F3A] dark:bg-slate-800 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {mod.code}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                      Scope {mod.code}: {mod.name}
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {mod.layer.split(':')[0]}
                    </span>
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {isExpanded && (
                <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-3">
                    {mod.tagline}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Năng lực chính:
                    </span>
                    <ul className="space-y-1.5">
                      {mod.keyCapabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong>{cap.title}:</strong> {cap.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate(mod.solutionLink)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-bold text-xs rounded-xl border border-blue-200 dark:border-blue-800"
                  >
                    <span>{mod.solutionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
