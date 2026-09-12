import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useEnterprise } from '../../../context/EnterpriseContext';
import {
  departmentSolutions, industriesSolutions, aiAgentProfiles,
  implementationPhases, securityPillars, integrationsData
} from '../../../data/websiteContent';
import {
  ArrowRight, Sparkles, CheckCircle2, Shield, Layers, Database, Lock,
  TrendingUp, Megaphone, Headphones, Users, CreditCard, ShieldCheck,
  Cpu, Workflow, Server, ChevronRight, Activity, ArrowUpRight, Zap,
  BarChart3, Globe, Mic, Check
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openConsultationModal } = usePublicRouter();
  const { data } = useEnterprise();

  const companyName = data?.identity?.companyName?.value || 'VMC Group';

  return (
    <div className="space-y-24 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40 dark:from-[#081225] dark:via-[#070E1B] dark:to-[#070E1B] border-b border-slate-200 dark:border-slate-800">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1f3a0a_1px,transparent_1px),linear-gradient(to_bottom,#0b1f3a0a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#155EEF] dark:bg-[#06B6D4] animate-pulse"></span>
                VMC GROUP • KIẾN TRÚC DOANH NGHIỆP AI
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-[1.15]">
                Xây dựng hệ thống doanh nghiệp vận hành bằng{' '}
                <span className="text-[#155EEF] dark:text-[#3B82F6]">dữ liệu</span>, công nghệ và{' '}
                <span className="text-[#06B6D4]">AI</span>.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Nền tảng điều hành thống nhất kết nối Website, Không gian làm việc, Quản trị, CRM, Quy trình, Dữ liệu và các Trợ lý AI thành một thể hoàn chỉnh.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openConsultationModal('consultation')}
                  className="flex items-center gap-2.5 px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/15 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Đăng ký tư vấn giải pháp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/ai-enterprise')}
                  className="flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-[#0E1A30] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#0B1F3A] dark:text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
                >
                  <span>Khám phá AI ENTERPRISE</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Micro proof points */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Dữ liệu thuộc sở hữu riêng 100%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>AI hoạt động có phê duyệt con người</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Kiến trúc mở chuẩn API/Webhook</span>
                </div>
              </div>
            </div>

            {/* Right: Realistic AI ENTERPRISE OS Visual Architecture Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#0B1F3A] dark:bg-[#070F1E] p-5 shadow-2xl border border-slate-800 text-white space-y-4">
                {/* Header bar of the OS window */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 font-mono text-[11px] text-slate-400">vmc-enterprise-os // live</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-[#06B6D4] bg-[#06B6D4]/10 px-2 py-0.5 rounded-md border border-[#06B6D4]/20 font-mono">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>SYNCHRONIZED</span>
                  </div>
                </div>

                {/* Central OS Topology Diagram */}
                <div className="space-y-3 pt-1">
                  {/* Outer Layer: External Gateways */}
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase">Cổng tiếp nhận bên ngoài:</span>
                    <span className="text-[11px] text-white font-mono bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">
                      Website • Biểu mẫu • Cổng kết nối • API
                    </span>
                  </div>

                  {/* Core Hub: Unified Data & RBAC */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#155EEF]/20 to-[#0B1F3A] border border-[#155EEF]/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-[#06B6D4]" />
                        <span className="font-bold text-xs text-white">LÕI DỮ LIỆU & QUẢN TRỊ TRUNG TÂM</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">ISOLATED TENANT</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono pt-1 text-slate-300">
                      <div className="bg-slate-900/60 p-1.5 rounded text-center border border-slate-800">
                        Kinh doanh (CRM)
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded text-center border border-slate-800">
                        Marketing Phễu
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded text-center border border-slate-800">
                        Hỗ trợ CSKH
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded text-center border border-slate-800">
                        Nhân sự & Công
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded text-center border border-slate-800">
                        Tài chính & Sổ
                      </div>
                      <div className="bg-slate-900/60 p-1.5 rounded text-center border border-slate-800">
                        Quy trình SOP
                      </div>
                    </div>
                  </div>

                  {/* Intelligence Layer: AI & Workflow Copilot */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#D9A62E]" />
                        <span className="font-bold text-[11px] text-white">MẠNG LƯỚI AI TRỢ LÝ PHÒNG BAN</span>
                      </div>
                      <span className="text-[10px] text-amber-300 font-mono">HUMAN-IN-THE-LOOP</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Đọc dữ liệu nội bộ • Phân tích xu hướng • Đề xuất hành động • Thực thi có phê duyệt.
                    </p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>AUDIT LOG: ENFORCED</span>
                  <span>ZERO UNCHECKED AI ACTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VẤN ĐỀ DOANH NGHIỆP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 inline-block px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800">
            THỰC TRẠNG VẬN HÀNH
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Khi quy mô tăng lên, vì sao doanh nghiệp lại vận hành chậm lại?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Hầu hết các doanh nghiệp không thiếu phần mềm, mà thiếu sự kết nối thống nhất giữa các phòng ban.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Dữ liệu phân mảnh, thất thoát',
              desc: 'Khách hàng ở file Excel cá nhân của Sales, tương tác ở Zalo, tài chính ở sổ kế toán, quy trình ở nhóm chat nội bộ.',
              icon: Database
            },
            {
              title: 'Phòng ban rời rạc, đổ lỗi',
              desc: 'Marketing chuyển lead nhưng Sales bảo không chất lượng; Sales chốt đơn nhưng Vận hành không có đủ thông tin thực thi.',
              icon: Users
            },
            {
              title: 'Quy trình thủ công, phụ thuộc',
              desc: 'Mọi bước xử lý phải nhắc nhở bằng miệng hoặc nhắn tin riêng. Khi nhân sự chủ chốt nghỉ việc, công việc bị gián đoạn.',
              icon: Workflow
            },
            {
              title: 'Nhiều phần mềm không kết nối',
              desc: 'Mua quá nhiều công cụ SaaS độc lập, nhân viên phải nhập liệu lặp lại giữa nhiều màn hình, chi phí license tăng cao.',
              icon: Layers
            },
            {
              title: 'Khó kiểm soát rủi ro bảo mật',
              desc: 'Không có cơ chế phân quyền rõ ràng, thiếu nhật ký truy vết (Audit Log) khi xảy ra sai sót dữ liệu hoặc rò rỉ thông tin.',
              icon: Lock
            },
            {
              title: 'Thiếu dữ liệu để ra quyết định',
              desc: 'Lãnh đạo phải chờ đợi báo cáo tổng hợp thủ công cuối tháng, không nắm bắt được chỉ số dòng tiền và hiệu năng theo thời gian thực.',
              icon: ShieldCheck
            }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: AI ENTERPRISE — HỆ ĐIỀU HÀNH DOANH NGHIỆP */}
      <section className="bg-[#0B1F3A] dark:bg-[#060D19] text-white py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              SẢN PHẨM LÕI
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI ENTERPRISE — Hệ điều hành doanh nghiệp bằng AI
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Không phải là một phần mềm đơn lẻ hay một công cụ chatbot riêng biệt. AI ENTERPRISE là nền tảng điều hành toàn diện gồm 11 phân hệ lõi được kiến trúc chuẩn mực để vận hành cả tổ chức.
            </p>
          </div>

          {/* 11 Scopes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: 'Scope A', name: 'Website Doanh nghiệp', desc: 'Cổng thông tin thương hiệu, tối ưu chuyển đổi, tiếp nhận yêu cầu tự động.' },
              { code: 'Scope B', name: 'Kinh doanh & CRM', desc: 'Quản trị khách hàng 360 độ, quản lý phễu cơ hội và đường ống chốt hợp đồng.' },
              { code: 'Scope C', name: 'Marketing Đa Kênh', desc: 'Đo lường chi phí trên mỗi lead thực tế, quản lý chiến dịch và nội dung.' },
              { code: 'Scope D', name: 'Chăm sóc khách hàng (CSKH)', desc: 'Hệ thống Ticket hỗ trợ, quản lý SLA, theo dõi mức độ hài lòng CSAT.' },
              { code: 'Scope E', name: 'Tài chính — Kế toán', desc: 'Kiểm soát dòng tiền thu chi, hóa đơn, công nợ và đối soát ngân sách.' },
              { code: 'Scope F', name: 'Nhân sự & Đào tạo', desc: 'Hồ sơ nhân sự, bảng chấm công, theo dõi chỉ số KPI và lộ trình phát triển.' },
              { code: 'Scope G', name: 'Công việc, Dự án & SOP', desc: 'Chuẩn hóa quy trình vận hành chuẩn, giao việc tự động và kiểm soát tiến độ.' },
              { code: 'Scope H', name: 'Tri thức Doanh nghiệp', desc: 'Kho tài liệu, quy chế, biểu mẫu và hướng dẫn nghiệp vụ tập trung.' },
              { code: 'Scope I', name: 'AI & Trợ lý Thông minh', desc: 'Mạng lưới AI Agent hỗ trợ từng vai trò, phân tích và thực thi có phê duyệt.' },
              { code: 'Scope J', name: 'Báo cáo & Phân tích (BI)', desc: 'Bảng điều khiển trực quan đo lường hiệu năng và sức khỏe doanh nghiệp.' },
              { code: 'Scope K', name: 'Hệ thống & Tích hợp Mở', desc: 'Kiến trúc bảo mật đa tầng, Open API, Webhook và kiểm toán Audit Log.' }
            ].map((scope, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-slate-800 hover:border-[#155EEF]/60 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#06B6D4] font-bold">{scope.code}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]"></span>
                </div>
                <h4 className="text-sm font-bold text-white">{scope.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{scope.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
            <span className="text-xs text-slate-400">
              Mỗi doanh nghiệp là một không gian dữ liệu độc lập, sở hữu toàn quyền và có thể kích hoạt từng module theo lộ trình.
            </span>
            <button
              onClick={() => navigate('/ai-enterprise')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
            >
              <span>Xem chi tiết kiến trúc AI ENTERPRISE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: MỘT HỆ THỐNG, NHIỀU PHÒNG BAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 inline-block px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            LIÊN THÔNG VẬN HÀNH
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Một hệ thống duy nhất cho toàn bộ các phòng ban
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Khi dữ liệu phát sinh ở một phòng ban, các phòng ban liên quan tự động nhận được thông tin mà không cần sao chép thủ công.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentSolutions.map((dept) => {
            return (
              <div
                key={dept.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center font-bold">
                      {dept.name.charAt(0)}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">PHÒNG BAN</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">{dept.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{dept.tagline}</p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Dữ liệu quản lý chính:
                    </div>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      {dept.dataManaged.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF] dark:bg-[#06B6D4] shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => navigate(`/solutions/${dept.slug}`)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#155EEF] dark:text-[#06B6D4] hover:text-[#0B1F3A] dark:hover:text-white py-1 cursor-pointer group"
                  >
                    <span>Xem giải pháp chi tiết</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: AI TRONG DOANH NGHIỆP — TRIẾT LÝ VẬN HÀNH THỰC TẾ */}
      <section className="bg-slate-50 dark:bg-[#081225] border-y border-slate-200 dark:border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#06B6D4] bg-cyan-50 dark:bg-cyan-950/50 inline-block px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-800">
              TRIẾT LÝ ỨNG DỤNG AI THỰC CHẤT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              AI không tự do hành động — AI phục vụ con người theo thẩm quyền
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              VMC Group xây dựng các AI Copilot chuyên sâu theo từng vai trò cụ thể. AI đọc dữ liệu nội bộ, đưa ra phân tích và đề xuất phương án tối ưu, nhưng mọi quyết định trọng yếu luôn cần sự phê duyệt của con người.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAgentProfiles.slice(0, 6).map((agent) => (
              <div
                key={agent.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-full">
                      {agent.role}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">ROLE-BASED</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">{agent.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{agent.tagline}</p>

                  <div className="space-y-2 pt-2 text-xs">
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Dữ liệu đọc:</span>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 line-clamp-2">
                        {agent.dataRead.join(', ')}
                      </p>
                    </div>

                    <div className="bg-amber-50/70 dark:bg-amber-950/40 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-[11px]">
                      <span className="font-bold">Cần phê duyệt:</span>{' '}
                      {agent.approvalRequired[0]}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => navigate(`/ai/${agent.slug}`)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#155EEF] dark:text-[#06B6D4] hover:text-[#0B1F3A] dark:hover:text-white py-1 cursor-pointer"
                  >
                    <span>Tìm hiểu cơ chế hoạt động</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => navigate('/ai')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#0D182E] hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#0B1F3A] dark:text-white text-xs font-bold rounded-xl shadow-2xs transition-colors cursor-pointer"
            >
              <span>Xem tất cả các Trợ lý AI và Cơ chế Kiểm soát</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: GIẢI PHÁP THEO NGÀNH ƯU TIÊN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D9A62E] bg-amber-50 dark:bg-amber-950/50 inline-block px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800">
            NGÀNH NGHỀ THÍCH ỨNG
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Giải pháp may đo theo đặc thù từng ngành nghề
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Mỗi ngành có quy trình và điểm nghẽn riêng. AI ENTERPRISE cấu hình linh hoạt theo mô hình kinh doanh cụ thể của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industriesSolutions.map((ind) => (
            <div
              key={ind.id}
              onClick={() => navigate(`/industries/${ind.slug}`)}
              className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 hover:border-[#155EEF] dark:hover:border-[#06B6D4] hover:shadow-md transition-all cursor-pointer space-y-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-[#155EEF] group-hover:text-white dark:group-hover:bg-[#06B6D4] dark:group-hover:text-[#0B1F3A] transition-colors flex items-center justify-center font-bold text-sm">
                {ind.name.charAt(0)}
              </div>
              <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {ind.tagline}
              </p>
              <div className="pt-2 flex items-center text-xs font-semibold text-[#155EEF] dark:text-[#06B6D4] gap-1 group-hover:translate-x-1 transition-transform">
                <span>Khám phá lộ trình</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: KIẾN TRÚC KẾT NỐI HỆ THỐNG */}
      <section className="bg-[#0B1F3A] dark:bg-[#070F1E] text-white py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#06B6D4] bg-[#06B6D4]/10 inline-block px-3 py-1 rounded-full border border-[#06B6D4]/20">
              MỞ RỘNG KHÔNG GIỚI HẠN
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tích hợp hoàn hảo với hệ sinh thái công nghệ có sẵn
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Không bắt buộc phải thay thế toàn bộ công cụ bạn đang dùng. AI ENTERPRISE kết nối và đồng bộ hai chiều thông qua API và Webhook chuẩn mực.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationsData.capabilities.map((integ, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#155EEF]/20 text-[#06B6D4] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <span className="text-[10px] font-mono text-[#06B6D4] bg-[#06B6D4]/10 px-2 py-0.5 rounded border border-[#06B6D4]/30">
                    {integ.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">{integ.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{integ.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: 6 NGUYÊN TẮC TRIỂN KHAI VMC GROUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 inline-block px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            CAM KẾT THỰC THI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            6 Nguyên tắc cốt lõi khi xây dựng hệ thống
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Bộ chuẩn mực mà VMC Group tuân thủ tuyệt đối trong mọi dự án triển khai cho khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: '1. Dữ liệu là tài sản riêng của doanh nghiệp',
              desc: 'Doanh nghiệp sở hữu 100% cơ sở dữ liệu. Không chia sẻ dữ liệu cho bên thứ ba, không dùng dữ liệu nội bộ để huấn luyện mô hình chung bên ngoài.'
            },
            {
              title: '2. Bảo mật đa lớp và phân quyền chi tiết',
              desc: 'Mỗi nhân sự chỉ thấy đúng dữ liệu thuộc thẩm quyền (RBAC). Mọi thao tác đều được lưu vết trong Audit Log không thể xóa sửa.'
            },
            {
              title: '3. Quy trình chuẩn trước, công nghệ theo sau',
              desc: 'Không đưa công nghệ vào một mớ hỗn độn. VMC Group cùng doanh nghiệp chuẩn hóa quy trình SOP trước khi cấu hình tự động hóa.'
            },
            {
              title: '4. AI hỗ trợ con người, không hành động tùy tiện',
              desc: 'AI hoạt động trong giới hạn quyền hạn được cấp. Các tác vụ tài chính, gửi thư đại trà, xóa dữ liệu luôn yêu cầu con người phê duyệt.'
            },
            {
              title: '5. Triển khai cuốn chiếu, thấy kết quả ngay',
              desc: 'Chia nhỏ thành các giai đoạn 2-4 tuần để bàn giao sử dụng từng phân hệ, không để doanh nghiệp phải chờ đợi 6 tháng mới thấy sản phẩm.'
            },
            {
              title: '6. Chuyển giao toàn diện & đồng hành dài hạn',
              desc: 'Cung cấp tài liệu SOP, video hướng dẫn chi tiết và đào tạo nhân sự trực tiếp để doanh nghiệp làm chủ hệ thống sau bàn giao.'
            }
          ].map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3"
            >
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Check className="w-4 h-4 stroke-[3]" />
                <span className="font-bold text-xs">NGUYÊN TẮC {idx + 1}</span>
              </div>
              <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white leading-snug">{principle.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: BẢO MẬT & NIỀM TIN */}
      <section className="bg-slate-50 dark:bg-[#081225] border-y border-slate-200 dark:border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                AN NINH DỮ LIỆU
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
                An toàn tuyệt đối cho dữ liệu trọng yếu của doanh nghiệp
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Hệ thống tuân thủ các tiêu chuẩn bảo mật dữ liệu cấp doanh nghiệp, đảm bảo tính toàn vẹn và bảo mật cao nhất trong mọi hoàn cảnh.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityPillars.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{sec.title}</h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{sec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CALL TO ACTION CUỐI CÙNG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0B1F3A] via-[#155EEF] to-[#0B1F3A] p-8 sm:p-12 text-white overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              KHỞI ĐỘNG HỆ ĐIỀU HÀNH
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Sẵn sàng xây dựng hệ thống doanh nghiệp thế hệ mới?
            </h2>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Đặt lịch làm việc 45 phút cùng Kiến trúc sư hệ thống VMC Group để nhận bản phân tích hiện trạng và phương án kết nối phòng ban may đo cho doanh nghiệp của bạn.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openConsultationModal('booking')}
                className="flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#0B1F3A] font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                <span>Đặt lịch tư vấn kiến trúc 1:1</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openConsultationModal('assessment')}
                className="flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                <span>Làm bài khảo sát sẵn sàng AI</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
