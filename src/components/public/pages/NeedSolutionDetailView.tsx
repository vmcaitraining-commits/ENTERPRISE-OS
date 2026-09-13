import React, { useState } from 'react';
import { NeedSolution } from '../../../types/website';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, Database,
  Workflow, Sparkles, Layers, BarChart3, ShieldCheck, Lock,
  ChevronRight, Users, Mic, Globe, Clock, FileCheck, HelpCircle,
  Calendar, Check, ChevronDown, ExternalLink, ArrowUpRight
} from 'lucide-react';
import {
  CrmVisuals,
  AiAgentVisuals,
  VoiceVisuals,
  AutomationVisuals,
  WebsiteVisuals,
  BiVisuals
} from '../solutions/needVisuals';

interface NeedSolutionDetailViewProps {
  solution: NeedSolution;
}

export const NeedSolutionDetailView: React.FC<NeedSolutionDetailViewProps> = ({ solution }) => {
  const { navigate, openConsultationModal } = usePublicRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Render the dedicated product walkthrough visual based on solution slug
  const renderNeedVisual = () => {
    switch (solution.slug) {
      case 'crm':
        return <CrmVisuals />;
      case 'ai-agent':
        return <AiAgentVisuals />;
      case 'voice':
        return <VoiceVisuals />;
      case 'automation':
        return <AutomationVisuals />;
      case 'website':
        return <WebsiteVisuals />;
      case 'bi':
        return <BiVisuals />;
      default:
        return null;
    }
  };

  // Specific FAQs tailored to each need solution
  const getFaqs = () => {
    switch (solution.slug) {
      case 'crm':
        return [
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
            a: 'Ngay khi trạng thái hợp đồng chuyển sang "Đã ký số", hệ thống tự động sinh hồ sơ thanh toán đợt 1 và dự thảo hóa đơn điện tử gửi sang phân hệ Kế toán, loại bỏ hoàn toàn việc nhắn tin giục thu tiền thủ công.'
          }
        ];
      case 'ai-agent':
        return [
          {
            q: 'AI Agent có tự ý gửi email hoặc phát ngôn ra bên ngoài doanh nghiệp không?',
            a: 'Tuyệt đối không. Mọi bản dự thảo (email, báo giá, thông báo) do AI Agent tạo ra đều phải qua bước kiểm tra và bấm nút phê duyệt của nhân sự có thẩm quyền (Human-in-the-Loop) trước khi phát hành.'
          },
          {
            q: 'Dữ liệu nội bộ của công ty có bị đem đi huấn luyện cho các mô hình AI công cộng không?',
            a: 'Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.'
          },
          {
            q: 'Sự khác biệt giữa trang này (/solutions/ai-agent) với danh mục /ai là gì?',
            a: 'Trang /solutions/ai-agent giải thích kiến trúc hạ tầng mạng lưới, phương pháp kết nối dữ liệu an toàn và cơ chế rào chắn kiểm soát; trong khi /ai là danh mục 9 vai trò Copilot tác nghiệp cụ thể theo từng vị trí làm việc.'
          }
        ];
      case 'voice':
        return [
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
        ];
      case 'automation':
        return [
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
        ];
      case 'website':
        return [
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
        ];
      case 'bi':
        return [
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
        ];
      default:
        return [];
    }
  };

  const faqs = getFaqs();

  // 5-step implementation roadmap
  const roadmapSteps = [
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
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* ========================================================================= */}
      {/* 1. HERO CÓ DEMO CHÍNH (KEY PRODUCT WALKTHROUGH DEMO) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-10 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb & Subtitle */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/solutions')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại danh mục Giải pháp</span>
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GIẢI PHÁP THEO NHU CẦU CHUYỂN ĐỔI</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Product Walkthrough
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {solution.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {solution.tagline}
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-3xl text-xs sm:text-sm text-blue-100/90 leading-relaxed flex items-start gap-2.5">
              <span className="font-bold text-[#06B6D4] shrink-0 uppercase tracking-wider text-xs mt-0.5">
                Giá trị cốt lõi:
              </span>
              <span>{solution.coreValue}</span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openConsultationModal('consultation')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Đăng ký tư vấn giải pháp {solution.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/ai-enterprise')}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/15"
              >
                <span>Xem Kiến trúc AI ENTERPRISE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Scope distinction callouts */}
            {solution.slug === 'crm' && (
              <div className="p-3.5 rounded-xl bg-blue-900/40 border border-blue-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-200">
                  <span className="font-semibold text-blue-300">Phân biệt phạm vi:</span> Trang này giới thiệu <strong>nền tảng công nghệ CRS / CRM</strong> (Customer 360, pipeline, liên thông đa kênh). Để xem quy trình tổ chức và kịch bản tác nghiệp cho <strong>đội ngũ kinh doanh</strong>, vui lòng xem Giải pháp Phòng Kinh doanh (Sales).
                </div>
                <button
                  onClick={() => navigate('/solutions/sales')}
                  className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Xem Giải pháp Phòng Sales</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {solution.slug === 'ai-agent' && (
              <div className="p-3.5 rounded-xl bg-purple-900/40 border border-purple-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-200">
                  <span className="font-semibold text-purple-300">Phân biệt phạm vi:</span> Trang này đặc tả <strong>kiến trúc giải pháp mạng lưới AI Agent</strong>, an toàn dữ liệu và cơ chế Human-in-the-Loop. Để xem <strong>danh mục chi tiết 9 Trợ lý AI Copilot</strong> theo từng chức danh cụ thể, vui lòng xem Danh mục AI Copilot.
                </div>
                <button
                  onClick={() => navigate('/ai')}
                  className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Xem Danh mục 9 AI Copilot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {solution.slug === 'voice' && (
              <div className="p-3.5 rounded-xl bg-cyan-900/40 border border-cyan-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-200">
                  <span className="font-semibold text-cyan-300">Phân biệt phạm vi:</span> Trang này đặc tả <strong>hệ thống AI Voice bóc băng & kiểm soát chất lượng cuộc gọi</strong> tích hợp CRM. Để xem vai trò và ranh giới tác nghiệp của <strong>Trợ lý AI Voice Copilot</strong> trong không gian làm việc, vui lòng xem hồ sơ AI Voice Copilot.
                </div>
                <button
                  onClick={() => navigate('/ai/voice')}
                  className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Hồ sơ AI Voice Copilot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* KEY VISUAL DEMO MOUNTED DIRECTLY IN HERO REGION */}
          <div className="pt-2">
            <div className="flex items-center justify-between pb-2 text-xs text-slate-400 font-mono">
              <span>TRỰC QUAN HÓA NGHIỆP VỤ (PRODUCT WALKTHROUGH DEMO)</span>
              <span>[Dữ liệu minh họa thực tế]</span>
            </div>
            {renderNeedVisual()}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ========================================================================= */}
        {/* 2. VẤN ĐỀ VÀ KẾT QUẢ MONG MUỐN (BEFORE & AFTER) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white">
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Vấn đề Thực tế & Kết quả Mong muốn Sau Chuyển đổi
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            So sánh trực diện giữa phương thức làm việc phân mảnh cũ và kết quả số hóa chuẩn mực:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* Before: Điểm nghẽn */}
            <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Trước khi triển khai (Điểm nghẽn vận hành)</span>
              </div>
              <div className="space-y-2.5">
                {solution.problems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After: Kết quả số hóa */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Sau khi triển khai (Kết quả số hóa chuẩn mực)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {solution.solutionOverview}
              </p>
              <div className="pt-2 border-t border-emerald-200/80 dark:border-emerald-900/60 space-y-2">
                <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase block">
                  Dữ liệu được chuẩn hóa & quản lý tập trung:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {solution.dataTypes.map((item, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-white dark:bg-slate-900/60 border border-emerald-100 dark:border-emerald-950 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WALKTHROUGH LUỒNG VẬN HÀNH (OPERATING WORKFLOW 5 BƯỚC) */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
                <Workflow className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  Walkthrough Luồng Vận Hành Chuẩn Hóa
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Dòng chảy công việc từ đầu vào dữ liệu, qua động cơ phân tích đến chốt chặn phê duyệt của con người.
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">[Chuẩn hóa SOP]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  BƯỚC 1
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">INPUT</span>
              </div>
              <h3 className="text-xs font-bold text-[#0B1F3A] dark:text-white">Dữ liệu đầu vào</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{solution.operatingWorkflow.input}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
                  BƯỚC 2
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">PROCESS</span>
              </div>
              <h3 className="text-xs font-bold text-[#0B1F3A] dark:text-white">Quy trình xử lý</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{solution.operatingWorkflow.process}</p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                  BƯỚC 3
                </span>
                <span className="text-[10px] font-mono font-bold text-indigo-400">AI / AUTO</span>
              </div>
              <h3 className="text-xs font-bold text-indigo-950 dark:text-indigo-200">AI & Tự động hóa</h3>
              <p className="text-xs text-indigo-900/80 dark:text-indigo-300/80 leading-relaxed">{solution.operatingWorkflow.aiAutomation}</p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300">
                  BƯỚC 4
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-500">CONTROL</span>
              </div>
              <h3 className="text-xs font-bold text-amber-950 dark:text-amber-200">Phê duyệt con người</h3>
              <p className="text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed">{solution.operatingWorkflow.humanControl}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300">
                  BƯỚC 5
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-400">OUTPUT</span>
              </div>
              <h3 className="text-xs font-bold text-emerald-950 dark:text-emerald-200">Kết quả & Lưu vết</h3>
              <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 leading-relaxed">{solution.operatingWorkflow.output}</p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TÍNH NĂNG CÓ PREVIEW (KEY FEATURES WITH PREVIEW) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white">
                <Layers className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
                  Các Tính Năng Cốt Lõi Có Preview
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Thiết kế thực dụng, đáp ứng trực diện bài toán nghiệp vụ của từng bộ phận:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
            {solution.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#155EEF] dark:text-[#06B6D4] font-extrabold text-xs flex items-center justify-center border border-blue-200 dark:border-blue-900">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span>Trạng thái: Sẵn sàng cấu hình</span>
                  <span className="text-emerald-600">✓ Tích hợp lõi</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. AI, TỰ ĐỘNG HÓA VÀ ĐIỂM PHÊ DUYỆT (HUMAN-IN-THE-LOOP) */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
                <Sparkles className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  Phạm Vi Trợ Lực Của AI & Ranh Giới Kiểm Soát Con Người
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Mô hình Human-in-the-Loop: AI chuẩn bị phương án, con người giữ quyền quyết định cuối cùng.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>Chốt Chặn Phê Duyệt Bắt Buộc</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-cyan-400 uppercase tracking-wider block">
                1. Dữ liệu AI được đọc (Read Context):
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {solution.aiAssistance.reads}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-cyan-400 uppercase tracking-wider block">
                2. Năng lực phân tích (Analyze):
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {solution.aiAssistance.analyzes}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-cyan-400 uppercase tracking-wider block">
                3. Đề xuất có cấu trúc (Propose):
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {solution.aiAssistance.proposes}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-cyan-400 uppercase tracking-wider block">
                4. Phạm vi tự động thực thi (Execute):
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {solution.aiAssistance.executes}
              </p>
            </div>

            {/* Human approval boundary */}
            <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 md:col-span-2 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
                <Lock className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  5. Điểm bắt buộc con người phê duyệt (Human Sign-off Gate):
                </span>
              </div>
              <p className="text-xs text-amber-950 dark:text-amber-200 font-medium leading-relaxed">
                {solution.aiAssistance.requiresApproval}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. TÍCH HỢP / LIÊN THÔNG THEO BẢN ĐỒ SCOPE A-K */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <Workflow className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  Liên Thông Phân Hệ Trong Kiến Trúc Hợp Nhất (Scope A–K)
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Không tạo ốc đảo dữ liệu biệt lập; mọi tương tác đều được đồng bộ tự động với các phân hệ lõi:
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Bản đồ A–K</span>
          </div>

          <div className="space-y-2.5 pt-1">
            {solution.systemConnections.map((conn, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{conn}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. CHỈ SỐ THEO DÕI (METRICS & REPORTS) */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
                <BarChart3 className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  Danh Mục Chỉ Số & Báo Cáo Đo Lường Hiệu Quả
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Các bảng điều khiển và chỉ số KPI được hệ thống tự động kết xuất thời gian thực:
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">[Dữ liệu minh họa]</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {solution.reportTypes.map((rep, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-start gap-3"
              >
                <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{rep}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. BẢO MẬT ĐẶC THÙ & LIÊN KẾT VỀ AI ENTERPRISE */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#070F1E] text-white shadow-md space-y-6 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <ShieldCheck className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-white">
                  Bảo Mật Đặc Thù Giải Pháp & Cơ Chế Kiểm Soát
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Quy chế kiểm soát dữ liệu và phân quyền được áp dụng riêng biệt cho {solution.name}:
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Zero-Trust Framework</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">1. Phân quyền RBAC</span>
              <p className="text-xs text-slate-300 leading-relaxed">{solution.securityAndGovernance.rbac}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">2. Nhật ký Audit Log</span>
              <p className="text-xs text-slate-300 leading-relaxed">{solution.securityAndGovernance.auditLog}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">3. Quy chế Phê duyệt</span>
              <p className="text-xs text-slate-300 leading-relaxed">{solution.securityAndGovernance.approvalMechanism}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">4. Phạm vi Dữ liệu</span>
              <p className="text-xs text-slate-300 leading-relaxed">{solution.securityAndGovernance.dataScope}</p>
            </div>
          </div>

          {/* DẪN VỀ KIẾN TRÚC BẢO MẬT CHUNG AI ENTERPRISE */}
          <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <strong className="text-white block">
                Cần tìm hiểu về Kiến trúc Bảo mật & Quản trị Tổng thể của Toàn Hệ Điều Hành?
              </strong>
              <p className="text-slate-300 text-[11px]">
                Xem chính sách an toàn dữ liệu, khả năng triển khai hạ tầng linh hoạt và tiêu chuẩn bảo mật tại trang AI ENTERPRISE.
              </p>
            </div>
            <button
              onClick={() => navigate('/ai-enterprise')}
              className="px-4 py-2 rounded-lg bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
            >
              <span>Xem Kiến trúc AI ENTERPRISE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. LỘ TRÌNH TRIỂN KHAI (5 GIAI ĐOẠN CHUẨN) */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white">
                <Calendar className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
                <h2 className="text-base sm:text-lg font-extrabold">
                  Lộ Trình Triển Khai Giải Pháp (5 Giai Đoạn)
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Quy trình triển khai có cấu trúc rõ ràng, giảm thiểu tối đa rủi ro gián đoạn vận hành:
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Thời gian: 4–6 Tuần</span>
          </div>

          <div className="space-y-3 pt-1">
            {roadmapSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white">
                        {item.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Có biên bản nghiệm thu
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. FAQ NGẮN THEO ĐÚNG GIẢI PHÁP */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            <HelpCircle className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
            <div>
              <h2 className="text-base sm:text-lg font-extrabold">
                Câu Hỏi Thường Gặp Về {solution.name}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Giải đáp trực tiếp những băn khoăn thực tế của doanh nghiệp trước khi triển khai:
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white dark:bg-[#0D182E] text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. CTA (CALL TO ACTION) */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1F3A] to-[#155EEF] text-white shadow-xl text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Sẵn sàng chuẩn hóa vận hành với {solution.name}?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Nhận tư vấn khảo sát hiện trạng và thiết kế lộ trình triển khai chi tiết phù hợp với quy mô doanh nghiệp của bạn.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-white text-[#0B1F3A] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Đăng ký tư vấn giải pháp
            </button>
            <button
              onClick={() => navigate('/ai-enterprise')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/20"
            >
              Khám phá Kiến trúc AI ENTERPRISE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
