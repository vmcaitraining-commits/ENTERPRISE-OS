import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  Sparkles, ArrowRight, ShieldCheck, Database,
  TrendingUp, Megaphone, Headphones, DollarSign, Users,
  CheckCircle2, ChevronRight, Eye, KeyRound, Bot
} from 'lucide-react';

interface RolePerspective {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  color: string;
  badgeBg: string;
  dataVisible: string[];
  actionsPermitted: string[];
  aiCopilot: string;
  summary: string;
}

const ROLE_PERSPECTIVES: RolePerspective[] = [
  {
    id: 'ceo',
    title: 'Ban Điều Hành / CEO',
    shortTitle: 'CEO & Lãnh đạo',
    icon: ShieldCheck,
    color: 'text-amber-500 dark:text-amber-400',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300',
    summary: 'Nắm bắt bức tranh tổng thể sức khỏe doanh nghiệp theo thời gian thực mà không cần đợi báo cáo tổng hợp cuối tháng.',
    dataVisible: [
      'Bảng chỉ số OKR / KPI toàn công ty',
      'Dòng tiền thực thu, thực chi và dự báo theo kỳ kinh doanh (Dữ liệu minh họa)',
      'Doanh số bán hàng & tiến độ hợp đồng',
      'Nhật ký kiểm toán các hoạt động trọng yếu (Audit Log)'
    ],
    actionsPermitted: [
      'Phê duyệt chiến lược và ngân sách lớn',
      'Phê duyệt chính sách hoa hồng & giá',
      'Trao quyền và phân quyền quản trị cao nhất',
      'Ký duyệt hợp đồng đối tác chiến lược'
    ],
    aiCopilot: 'AI CEO Copilot — Tóm tắt sức khỏe vận hành mỗi sáng, phát hiện bất thường dòng tiền.'
  },
  {
    id: 'sales',
    title: 'Giám Đốc Kinh Doanh / Sales Lead',
    shortTitle: 'Kinh doanh (Sales)',
    icon: TrendingUp,
    color: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300',
    summary: 'Quản lý toàn diện phễu khách hàng tiềm năng, lịch sử tương tác và tiến độ hợp đồng liên thông với kế toán.',
    dataVisible: [
      'Hồ sơ khách hàng 360 độ (Customer 360)',
      'Đường ống bán hàng (Sales Pipeline) đa kênh',
      'Lịch sử báo giá, hợp đồng & đơn hàng đã chốt',
      'Báo cáo doanh số cá nhân và đội ngũ'
    ],
    actionsPermitted: [
      'Tạo báo giá, xuất hợp đồng mẫu đã duyệt',
      'Phân bổ lead cho nhân viên kinh doanh',
      'Ghi nhận đơn hàng chuyển giao sang Kế toán',
      'Đề xuất mức chiết khấu cho khách hàng lớn'
    ],
    aiCopilot: 'AI Sales Copilot — Chấm điểm độ nóng lead, bóc băng cuộc gọi, gợi ý kịch bản chốt đơn.'
  },
  {
    id: 'marketing',
    title: 'Trưởng Phòng Tiếp Thị / Marketing Lead',
    shortTitle: 'Marketing',
    icon: Megaphone,
    color: 'text-purple-600 dark:text-purple-400',
    badgeBg: 'bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300',
    summary: 'Đo lường chi phí thu hút khách hàng (CAC) chuẩn xác nhờ liên thông dữ liệu trực tiếp với tỷ lệ chốt hợp đồng của Sales.',
    dataVisible: [
      'Nguồn lead và chi phí theo từng chiến dịch',
      'Tỷ lệ chuyển đổi qua các tầng phễu',
      'Dữ liệu tương tác trên Website và biểu mẫu',
      'Doanh thu thực tế mang về từ từng kênh tiếp thị'
    ],
    actionsPermitted: [
      'Khởi tạo và điều phối ngân sách chiến dịch',
      'Xuất bản trang đích (Landing Page) và form',
      'Thiết lập luồng nuôi dưỡng lead tự động',
      'Kết xuất báo cáo hiệu quả đa kênh'
    ],
    aiCopilot: 'AI Marketing Copilot — Gợi ý tiêu đề bài viết, tối ưu nội dung chuẩn SEO, phân loại chân dung khách hàng.'
  },
  {
    id: 'finance',
    title: 'Kế Toán Trưởng / Quản Lý Tài Chính',
    shortTitle: 'Tài chính - Kế toán',
    icon: DollarSign,
    color: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300',
    summary: 'Kiểm soát dòng tiền chặt chẽ; tự động đối soát hợp đồng bán ra với tiền về tài khoản ngân hàng không có độ trễ.',
    dataVisible: [
      'Sổ quỹ tiền mặt và số dư tài khoản ngân hàng',
      'Danh sách công nợ phải thu (AR) và phải trả (AP)',
      'Hợp đồng kinh doanh đã ký chờ xuất hóa đơn',
      'Đề xuất chi tiêu và hạn mức ngân sách phòng ban'
    ],
    actionsPermitted: [
      'Lập phiếu thu, phiếu chi và hóa đơn tài chính',
      'Ghi nhận trạng thái thanh toán đơn hàng',
      'Phát lệnh cảnh báo công nợ tự động',
      'Duyệt chi các khoản trong hạn mức được phân quyền'
    ],
    aiCopilot: 'AI Finance Copilot — Đối chiếu hóa đơn chứng từ, phát hiện công nợ quá hạn, dự báo dòng tiền ngắn hạn.'
  },
  {
    id: 'cskh',
    title: 'Trưởng Nhóm CSKH / Dịch Vụ Khách Hàng',
    shortTitle: 'Chăm sóc khách hàng',
    icon: Headphones,
    color: 'text-cyan-600 dark:text-cyan-400',
    badgeBg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300',
    summary: 'Nhìn thấy toàn bộ lịch sử mua hàng, bảo hành và cam kết của Sales để xử lý sự cố nhanh chóng, chuẩn xác.',
    dataVisible: [
      'Toàn bộ lịch sử mua hàng & hợp đồng bảo hành',
      'Hàng đợi ticket khiếu nại và thời hạn SLA',
      'Nhật ký các lần hỗ trợ kỹ thuật trước đây',
      'Chỉ số hài lòng khách hàng (CSAT / NPS)'
    ],
    actionsPermitted: [
      'Tiếp nhận, gán và chuyển giao ticket kỹ thuật',
      'Cập nhật tiến độ xử lý khiếu nại',
      'Kích hoạt khảo sát tự động sau phục vụ',
      'Tạo cơ hội bán thêm/tái ký (Upsell / Renewal)'
    ],
    aiCopilot: 'AI CSKH Copilot — Tự động phân loại mức độ khẩn cấp của ticket, gợi ý câu trả lời theo đúng quy chuẩn.'
  },
  {
    id: 'hr',
    title: 'Quản Trị Nhân Sự / HR Lead',
    shortTitle: 'Nhân sự (HR)',
    icon: Users,
    color: 'text-indigo-600 dark:text-indigo-400',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300',
    summary: 'Quản lý tập trung hồ sơ nhân sự, chấm công tự động và gắn kết KPI cá nhân với hiệu quả doanh thu thực tế.',
    dataVisible: [
      'Hồ sơ nhân sự, hợp đồng lao động và chức danh',
      'Dữ liệu chấm công, xin nghỉ phép, đi muộn',
      'Bảng theo dõi mục tiêu KPI cá nhân và phòng ban',
      'Chi phí quỹ lương và kế hoạch tuyển dụng'
    ],
    actionsPermitted: [
      'Phê duyệt đơn nghỉ phép và giải trình chấm công',
      'Khởi tạo quy trình tuyển dụng và đánh giá',
      'Tổng hợp số liệu tính lương tự động',
      'Cập nhật cây sơ đồ tổ chức phòng ban'
    ],
    aiCopilot: 'AI HR Copilot — Sàng lọc CV ứng viên theo tiêu chí, tổng hợp dữ liệu công tự động, dự thảo thông báo nội bộ.'
  }
];

export const HeroSingleDataMultiRole: React.FC = () => {
  const { navigate, openConsultationModal } = usePublicRouter();
  const [selectedRole, setSelectedRole] = useState<RolePerspective>(ROLE_PERSPECTIVES[0]);

  const handleAnchorClick = (anchorId: string) => {
    navigate(`/ai-enterprise#${anchorId}`, { scrollToTop: false });
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/60 dark:from-[#060D19] dark:via-[#070E1B] dark:to-[#070E1B] border-b border-slate-200 dark:border-slate-800">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1f3a0a_1px,transparent_1px),linear-gradient(to_bottom,#0b1f3a0a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Header Block */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4]" />
            HỆ ĐIỀU HÀNH DOANH NGHIỆP HỢP NHẤT
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-[1.15]">
            AI ENTERPRISE — Kiến trúc{' '}
            <span className="text-[#155EEF] dark:text-[#3B82F6]">Một Dữ Liệu</span>,{' '}
            <span className="text-[#06B6D4]">Nhiều Vai Trò</span> vận hành.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Thay vì duy trì hàng loạt phần mềm rời rạc với dữ liệu phân mảnh, AI ENTERPRISE tổ chức toàn bộ hoạt động của doanh nghiệp xoay quanh <strong>một nguồn dữ liệu sự thật duy nhất</strong> — mỗi phòng ban có không gian làm việc chuyên biệt theo đúng thẩm quyền.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <button
              type="button"
              onClick={() => openConsultationModal('consultation')}
              className="flex items-center gap-2 px-6 py-3.5 bg-[#155EEF] hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Đăng ký tư vấn kiến trúc</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openConsultationModal('assessment')}
              className="flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-[#0E1A30] hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-[#0B1F3A] dark:text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              <span>Đăng ký đánh giá mức độ sẵn sàng AI</span>
            </button>
          </div>

          {/* Quick Anchor Bar (Accessible links with real URLs) */}
          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium">Chuyển nhanh đến:</span>
            <a
              href="/ai-enterprise#architecture"
              onClick={(e) => { e.preventDefault(); handleAnchorClick('architecture'); }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-800 text-[#155EEF] dark:text-[#06B6D4] hover:border-blue-300 dark:hover:border-slate-600 font-semibold transition-colors"
            >
              <span>#architecture (11 Phân hệ)</span>
            </a>
            <a
              href="/ai-enterprise#principles"
              onClick={(e) => { e.preventDefault(); handleAnchorClick('principles'); }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-800 text-[#155EEF] dark:text-[#06B6D4] hover:border-blue-300 dark:hover:border-slate-600 font-semibold transition-colors"
            >
              <span>#principles (6 Nguyên tắc)</span>
            </a>
            <a
              href="/ai-enterprise#security"
              onClick={(e) => { e.preventDefault(); handleAnchorClick('security'); }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-800 text-[#155EEF] dark:text-[#06B6D4] hover:border-blue-300 dark:hover:border-slate-600 font-semibold transition-colors"
            >
              <span>#security (Bảo mật & Phân quyền)</span>
            </a>
          </div>
        </div>

        {/* INTERACTIVE DIAGRAM: "MỘT DỮ LIỆU — NHIỀU VAI TRÒ" */}
        <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4]">
                MÔ HÌNH THỰC THI
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">
                Sơ đồ phân quyền truy cập: Một Lõi Dữ Liệu phục vụ 6 Góc Nhìn Chuyên Biệt
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              <span>* Kịch bản & Dữ liệu minh họa</span>
            </div>
          </div>

          {/* Role Selection Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {ROLE_PERSPECTIVES.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole.id === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 dark:bg-blue-950/70 border-[#155EEF] dark:border-[#3B82F6] shadow-2xs'
                      : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-1.5 ${isSelected ? 'bg-white dark:bg-[#0E1A30] shadow-2xs' : 'bg-white/60 dark:bg-slate-800/60'}`}>
                    <Icon className={`w-4 h-4 ${role.color}`} />
                  </div>
                  <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-[#155EEF] dark:text-[#06B6D4]' : 'text-slate-700 dark:text-slate-300'}`}>
                    {role.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Dual-Side Inspector: Data Core vs. Selected Role Perspective */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 items-stretch">
            {/* Center Core: Unified Database Representation */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#0A162B] text-white space-y-4 flex flex-col justify-between border border-slate-700/60 shadow-inner">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#155EEF]/30 border border-[#155EEF]/50 text-[#06B6D4] text-[11px] font-mono font-bold">
                  <Database className="w-3.5 h-3.5" />
                  UNIFIED DATA CORE
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  Cơ Sở Dữ Liệu Doanh Nghiệp Thống Nhất
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Lưu trữ tập trung mọi thực thể: Khách hàng, Đơn hàng, Hợp đồng, Phiếu thu, Tác vụ và Lịch sử tương tác.
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-700/80 pt-3 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Trạng thái kết nối:</span>
                  <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Đồng bộ thời gian thực
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Mô hình lưu trữ:</span>
                  <span className="text-slate-200 font-medium">Phân tách theo tenant và phân quyền</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Nguyên tắc:</span>
                  <span className="text-[#06B6D4] font-medium">Single Source of Truth</span>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Role View Scope & Permissions */}
            <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1B] border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-xl bg-white dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-700 shadow-2xs`}>
                    <selectedRole.icon className={`w-5 h-5 ${selectedRole.color}`} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0B1F3A] dark:text-white">
                      Không gian làm việc: {selectedRole.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {selectedRole.summary}
                    </p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${selectedRole.badgeBg}`}>
                  Phân quyền RBAC chuẩn
                </span>
              </div>

              {/* Two columns: View Scope vs. Actions Permitted */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    <Eye className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4]" />
                    <span>Dữ liệu được truy cập (View Scope):</span>
                  </div>
                  <ul className="space-y-1.5">
                    {selectedRole.dataVisible.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-[#0E1A30] p-2 rounded-lg border border-slate-200/80 dark:border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    <KeyRound className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Hành động được phép (Action Scope):</span>
                  </div>
                  <ul className="space-y-1.5">
                    {selectedRole.actionsPermitted.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-[#0E1A30] p-2 rounded-lg border border-slate-200/80 dark:border-slate-800">
                        <ChevronRight className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                        <span className="leading-snug">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Assigned AI Copilot Banner */}
              <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 flex items-start gap-2.5 text-xs">
                <Bot className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0B1F3A] dark:text-white">Trợ lý AI đồng hành: </span>
                  <span className="text-slate-600 dark:text-slate-300">{selectedRole.aiCopilot}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
