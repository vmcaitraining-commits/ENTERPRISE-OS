import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useEnterprise } from '../../../context/EnterpriseContext';
import {
  ShieldCheck, CheckCircle2, Globe, Sparkles, Target, Compass,
  Eye, FileText, ArrowRight, UserCheck, Users, Workflow, Layers, Check
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const { data } = useEnterprise();

  const companyName = data?.identity?.companyName?.value || 'VMC Group';
  const shortName = data?.identity?.shortName?.value || 'VMC';
  const representative = data?.identity?.representative?.value || 'Vũ Mạnh Cường';
  const region = data?.contact?.region?.value || 'Hà Nội, Việt Nam';
  const email = data?.contact?.email?.value || 'vmcaitraining@gmail.com';
  const market = data?.market?.currentMarket?.value || 'Toàn quốc — Việt Nam';
  const targetAudience = data?.market?.targetAudience?.value || 'Doanh nghiệp vừa và đang tăng trưởng (khoảng 20 – 500 nhân sự)';

  // Find strategic items
  const strat = data?.strategy || [];
  const vision = strat.find((s) => s.id === 'strat_vision')?.content;
  const diff = strat.find((s) => s.id === 'strat_diff')?.content;
  const promise = strat.find((s) => s.id === 'strat_promise')?.content;
  const commRules = strat.find((s) => s.id === 'strat_comm_rules')?.content;

  // Cac trong tam thuc thi su menh (chuyen hoa tu noi dung su menh da xac nhan)
  const missionFocusItems = [
    {
      number: '01',
      title: 'Vận hành thực tế bằng dữ liệu & AI',
      desc: 'Biến công nghệ, dữ liệu và AI thành năng lực vận hành thực tế của doanh nghiệp.'
    },
    {
      number: '02',
      title: 'Kiến trúc kết nối thống nhất',
      desc: 'Kết nối con người, dữ liệu, quy trình, phần mềm và AI trong một kiến trúc thống nhất.'
    },
    {
      number: '03',
      title: 'Chuẩn hóa & giảm thiểu thao tác thủ công',
      desc: 'Giảm các thao tác thủ công trong những quy trình có thể chuẩn hóa và tự động hóa.'
    },
    {
      number: '04',
      title: 'Nền tảng mở rộng bền vững',
      desc: 'Xây nền tảng có khả năng mở rộng, hạn chế việc doanh nghiệp phải ghép quá nhiều công cụ rời rạc.'
    }
  ];

  // Verifiable Working Methodology
  const workingMethodology = [
    {
      step: '01',
      name: 'Khảo sát & Phân tích hiện trạng thực tế',
      desc: 'Đánh giá quy trình vận hành, cấu trúc dữ liệu và các điểm nghẽn thực tế trước khi đề xuất kiến trúc.',
      deliverable: 'Báo cáo hiện trạng vận hành & Ma trận điểm nghẽn'
    },
    {
      step: '02',
      name: 'Thiết kế kiến trúc & Chuẩn hóa SOP',
      desc: 'Quy hoạch dòng chảy dữ liệu liên phòng ban và thiết lập quy chế phân quyền RBAC minh bạch.',
      deliverable: 'Blueprint Kiến trúc Hệ thống & Bản đồ Quy trình SOP'
    },
    {
      step: '03',
      name: 'Cấu hình nền tảng lõi & AI Trợ lý',
      desc: 'Thiết lập không gian dữ liệu riêng biệt cho từng doanh nghiệp, kết nối API và kích hoạt trợ lý AI.',
      deliverable: 'Hệ điều hành vận hành bàn giao theo tenant riêng biệt'
    },
    {
      step: '04',
      name: 'Tập huấn, Chuyển giao & Nghiệm thu',
      desc: 'Chuyển giao tài liệu hướng dẫn vận hành số, đào tạo người dùng cuối và bàn giao toàn quyền quản trị.',
      deliverable: 'Bộ tài liệu cẩm nang SOP số & Biên bản nghiệm thu'
    }
  ];

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            HỒ SƠ TỔ CHỨC
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Về {companyName}
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Kiến trúc sư hệ thống đồng hành cùng các doanh nghiệp Việt Nam xây dựng nền tảng vận hành bền vững bằng dữ liệu, công nghệ và trí tuệ nhân tạo.
          </p>
        </div>
      </section>

      {/* Main Corporate Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Unified Section: Bản chất & Định vị Doanh nghiệp */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <div className="flex items-center gap-3 text-[#155EEF] dark:text-[#06B6D4]">
            <Compass className="w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
              Bản chất & Định vị Doanh nghiệp
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed">
            <p>
              <strong>VMC Group</strong> là đơn vị thiết kế và triển khai <strong>kiến trúc hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI</strong>. Chúng tôi không định vị là một công ty thiết kế website đơn thuần hay đơn vị bán các công cụ chatbot riêng lẻ.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4] block">
                  Vai trò hướng tới
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Kiến trúc sư hệ thống doanh nghiệp AI — kết nối con người, dữ liệu, quy trình, phần mềm và AI thành một thể thống nhất cho doanh nghiệp Việt Nam.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                  Trọng tâm thực thi
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Tập trung vào khả năng vận hành thực tế, dữ liệu được chuẩn hóa, quy trình tự động hóa có con người kiểm soát và hiệu quả quản trị đo lường được.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tầm nhìn & Điểm khác biệt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1F3A] dark:bg-[#081120] text-white border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <Eye className="w-5 h-5 shrink-0" />
                <h3 className="text-lg font-bold text-white">Tầm nhìn Chiến lược</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {vision || 'Trở thành đơn vị tiên phong tại Việt Nam trong việc kiến tạo và chuyển giao hệ điều hành doanh nghiệp AI, giúp các doanh nghiệp vừa và đang tăng trưởng vận hành tự động, minh bạch và hiệu quả trên một nền tảng dữ liệu thống nhất.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-[#06B6D4]">
              Định hướng: Kiến trúc có thể tùy biến theo đặc thù ngành
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-5 h-5 shrink-0" />
                <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">Điểm khác biệt Cốt lõi</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {diff || 'Không bán thêm các công cụ rời rạc. VMC Group tiếp cận từ tầng kiến trúc nền tảng và dòng chảy vận hành xuyên suốt: một cơ sở dữ liệu, một chuẩn phân quyền, một quy trình SOP số và các trợ lý AI hỗ trợ có kiểm soát.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Giải pháp may đo theo năng lực thực tế của tổ chức</span>
            </div>
          </div>
        </div>

        {/* Cac trong tam thuc thi su menh */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase tracking-wider">
              CAM KẾT TRÁCH NHIỆM
            </div>
            <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Các Trọng Tâm Thực Thi Sứ Mệnh
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Nội dung sứ mệnh đã xác nhận của VMC Group trong việc chuyển đổi năng lực vận hành số và AI cho doanh nghiệp Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {missionFocusItems.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-mono font-bold text-sm flex items-center justify-center">
                  {item.number}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quy trình làm việc thực chứng & Đầu ra xác thực */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 dark:bg-[#070F1E] text-white border border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#06B6D4]">
              QUY TRÌNH & ĐẦU RA XÁC THỰC
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Phương Pháp Làm Việc & Đầu Ra Bàn Giao Cụ Thể
            </h2>
            <p className="text-xs text-slate-400">
              VMC Group cam kết chỉ thực hiện trên cơ sở khảo sát thực tế và bàn giao các tài liệu kỹ thuật có thể kiểm chứng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workingMethodology.map((m) => (
              <div key={m.step} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#06B6D4] font-bold">BƯỚC {m.step}</span>
                  <span className="text-slate-400">Quy trình chuẩn</span>
                </div>
                <h4 className="text-sm font-bold text-white">{m.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
                <div className="pt-2 border-t border-slate-700/60 text-xs text-emerald-300 flex items-start gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Đầu ra: {m.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Con người & Thông tin Tổ chức Xác thực */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <div className="flex items-center gap-3 text-[#0B1F3A] dark:text-white">
            <Users className="w-6 h-6 text-[#155EEF] dark:text-[#06B6D4] shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold">
              Thông Tin Tổ Chức & Đội Ngũ Thực Thi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Đại diện doanh nghiệp:</span>
              <div className="font-bold text-sm text-[#0B1F3A] dark:text-white">{representative}</div>
              <p className="text-[11px] text-slate-500">Chịu trách nhiệm kiến trúc & định hướng giải pháp</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Trụ sở hoạt động:</span>
              <div className="font-bold text-sm text-[#0B1F3A] dark:text-white">{region}</div>
              <p className="text-[11px] text-slate-500">Khu vực điều hành & trung tâm phát triển</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Thị trường phục vụ:</span>
              <div className="font-bold text-sm text-[#0B1F3A] dark:text-white">{market}</div>
              <p className="text-[11px] text-slate-500">Doanh nghiệp vừa & đang tăng trưởng</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 sm:col-span-2 lg:col-span-3 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Đối tượng doanh nghiệp mục tiêu:</span>
              <div className="font-bold text-sm text-[#0B1F3A] dark:text-white">{targetAudience}</div>
              <p className="text-[11px] text-slate-500">Đã có mô hình kinh doanh ổn định, cần số hóa luồng quy trình và loại bỏ tình trạng phân mảnh dữ liệu</p>
            </div>
          </div>
        </section>

        {/* Lời hứa & Nguyên tắc truyền thông trung thực */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">
              Nguyên Tắc Truyền Thông & Cam Kết Trung Thực
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {commRules || 'Kỷ luật truyền thông trung thực: Nói về kết quả vận hành trước, tính năng sau. Không phô trương công nghệ nếu không chứng minh được giá trị; không tự tạo số liệu thành công, đối tác, chứng nhận hoặc lịch sử hư cấu chưa được xác thực; ưu tiên các giá trị Kết nối, Thống nhất, Tự động hóa có kiểm soát và Dữ liệu minh bạch.'}
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => openConsultationModal('consultation')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>Đặt lịch trao đổi kiến trúc cùng VMC Group</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
