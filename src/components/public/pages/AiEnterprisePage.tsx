import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useEnterprise } from '../../../context/EnterpriseContext';
import {
  Sparkles, Layers, Database, ShieldCheck, CheckCircle2,
  ArrowRight, Shield, Cpu, Workflow, BarChart3, Globe, Users, Headphones, Lock, Check
} from 'lucide-react';

export const AiEnterprisePage: React.FC = () => {
  const { navigate, openConsultationModal } = usePublicRouter();
  const { data } = useEnterprise();

  const coreProduct = data?.coreProduct;
  const scopes = coreProduct?.scopes || [];
  const principles = coreProduct?.deploymentPrinciples || [];

  return (
    <div className="space-y-20 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#155EEF]/30 border border-[#155EEF]/50 text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            NỀN TẢNG HỆ ĐIỀU HÀNH DOANH NGHIỆP
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            AI ENTERPRISE — Hệ điều hành doanh nghiệp bằng AI
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            AI ENTERPRISE không chỉ là một công cụ riêng lẻ mà là một hệ điều hành thống nhất (Unified Enterprise Operating System) kết nối toàn bộ hoạt động từ tiếp thị, bán hàng, chăm sóc, nhân sự, tài chính đến điều hành trên một cơ sở dữ liệu duy nhất.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="flex items-center gap-2 px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <span>Đăng ký tư vấn kiến trúc</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => openConsultationModal('assessment')}
              className="flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              <span>Đánh giá mức độ sẵn sàng AI</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: VẤN ĐỀ AI ENTERPRISE GIẢI QUYẾT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-blue-400">
            VẤN ĐỀ CỐT LÕI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Chấm dứt sự đứt gãy giữa các phần mềm rời rạc
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Khi doanh nghiệp mua sắm nhiều phần mềm rời rạc từ các nhà cung cấp khác nhau, họ phải trả giá bằng sự phân mảnh dữ liệu, nhân viên phải nhập tay lặp lại, và lãnh đạo không thể có được một báo cáo dòng tiền chuẩn xác theo thời gian thực.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">Một Nguồn Dữ Liệu Sự Thật (Single Source of Truth)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Mọi phòng ban từ Sales, Marketing, CSKH đến Kế toán cùng nhìn vào một cơ sở dữ liệu duy nhất, không còn sự vênh lệch thông tin hay số liệu ảo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-[#06B6D4] flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">Quy Trình Tự Động Hóa Thông Suốt (End-to-End Workflow)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Đơn hàng ký xong trên CRM tự động sinh phiếu thu cho Kế toán và mở ticket bàn giao cho Vận hành mà không cần nhân viên phải gửi email nội bộ.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">AI Đồng Hành Có Phê Duyệt (Supervised AI Copilot)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Mỗi nhân viên có một trợ lý AI phân tích số liệu và soạn thảo sẵn công việc, nhưng mọi lệnh chuyển tiền hay xuất bản đều cần con người phê duyệt.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: 11 PHÂN HỆ LÕI (SCOPE A -> K) */}
      <section id="architecture" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
            KIẾN TRÚC TỔNG THỂ
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            11 Phân hệ chức năng hợp nhất
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Hệ thống được thiết kế theo cấu trúc module linh hoạt. Doanh nghiệp có thể bắt đầu với các phân hệ ưu tiên nhất và mở rộng dần theo lộ trình tăng trưởng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scopes.map((scope) => (
            <div
              key={scope.code}
              className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#155EEF] dark:hover:border-[#06B6D4] transition-colors space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-white bg-[#0B1F3A] dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                    {scope.code}
                  </span>
                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">{scope.name}</h3>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">PHÂN HỆ LÕI</span>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Chức năng chính bao gồm:
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {scope.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF] dark:bg-[#06B6D4] shrink-0 mt-1.5"></span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: 6 NGUYÊN TẮC TRIỂN KHAI */}
      <section id="principles" className="bg-slate-900 dark:bg-[#060D19] text-white py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
              NGUYÊN TẮC NỀN TẢNG
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              6 Nguyên tắc triển khai cốt lõi của VMC Group
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Các nguyên tắc bất biến đảm bảo hệ thống vận hành bền vững, an toàn dữ liệu và tối ưu chi phí đầu tư cho doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((pr, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-[#06B6D4]">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Nguyên tắc 0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white">{pr.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: BẢO MẬT & PHÂN QUYỀN */}
      <section id="security" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 inline-block px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            AN NINH DỮ LIỆU
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Phân quyền đa tầng & Bảo mật cấp độ doanh nghiệp
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Chúng tôi hiểu rằng dữ liệu khách hàng, tài chính và bí quyết vận hành là tài sản sống còn của bạn. Kiến trúc của AI ENTERPRISE đặt an toàn lên hàng đầu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <Lock className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Phân quyền RBAC</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kiểm soát chi tiết quyền xem, tạo, sửa, xóa và xuất dữ liệu theo từng phòng ban và cấp bậc nhân sự.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <Database className="w-5 h-5 text-[#06B6D4]" />
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Không gian dữ liệu riêng</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Doanh nghiệp sở hữu 100% cơ sở dữ liệu. Không dùng chung cơ sở dữ liệu với bất kỳ khách hàng nào khác.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Nhật ký Audit Log</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Lưu vết mọi thay đổi dữ liệu, thời điểm truy cập và tài khoản thao tác để dễ dàng kiểm toán và đối soát.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <Workflow className="w-5 h-5 text-[#D9A62E]" />
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Phê duyệt đa cấp</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Các quyết định tài chính và xuất bản dữ liệu luôn đòi hỏi sự xác nhận của người có thẩm quyền.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1F3A] dark:bg-[#0A162B] text-white text-center space-y-6 border border-slate-800">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Sẵn sàng nâng cấp hệ thống vận hành doanh nghiệp?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Đặt lịch làm việc cùng Kiến trúc sư của VMC Group để nhận bản thiết kế giải pháp sơ bộ phù hợp với quy mô hiện tại.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Đăng ký tư vấn trực tiếp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
