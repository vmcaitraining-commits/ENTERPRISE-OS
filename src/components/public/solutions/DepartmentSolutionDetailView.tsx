import React, { useState } from 'react';
import { DepartmentSolution } from '../../../types/website';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { PublicLink } from '../PublicLink';
import { departmentSolutions } from '../../../data/websiteContent';
import { SalesVisuals } from './departmentVisuals/SalesVisuals';
import { MarketingVisuals } from './departmentVisuals/MarketingVisuals';
import { CustomerServiceVisuals } from './departmentVisuals/CustomerServiceVisuals';
import { HrVisuals } from './departmentVisuals/HrVisuals';
import { FinanceVisuals } from './departmentVisuals/FinanceVisuals';
import { ManagementVisuals } from './departmentVisuals/ManagementVisuals';
import {
  ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, Database,
  Workflow, Sparkles, BarChart3, ArrowLeftRight, ChevronRight,
  ShieldCheck, ChevronDown, ChevronUp, Layers, ExternalLink
} from 'lucide-react';

interface DepartmentSolutionDetailViewProps {
  solution: DepartmentSolution;
}

export const DepartmentSolutionDetailView: React.FC<DepartmentSolutionDetailViewProps> = ({ solution }) => {
  const { navigate, openConsultationModal } = usePublicRouter();
  const [expandedSopIndex, setExpandedSopIndex] = useState<number | null>(null);

  // Render department-specific visual component
  const renderDepartmentVisual = () => {
    switch (solution.slug) {
      case 'sales':
        return <SalesVisuals />;
      case 'marketing':
        return <MarketingVisuals />;
      case 'customer-service':
        return <CustomerServiceVisuals />;
      case 'hr':
        return <HrVisuals />;
      case 'finance':
        return <FinanceVisuals />;
      case 'management':
        return <ManagementVisuals />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* 1. HERO + PREVIEW NGHIỆP VỤ */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-10 pb-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
            <PublicLink
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-[#06B6D4] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tất cả giải pháp</span>
            </PublicLink>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">Phòng ban</span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold">{solution.name}</span>
          </div>

          {/* Department switcher pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {departmentSolutions.map((dept) => {
              const isCurrent = dept.slug === solution.slug;
              return (
                <PublicLink
                  key={dept.id}
                  href={`/solutions/${dept.slug}`}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    isCurrent
                      ? 'bg-[#155EEF] text-white shadow-xs'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {dept.name}
                </PublicLink>
              );
            })}
          </div>

          <div className="space-y-3 pt-2">
            <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
              GIẢI PHÁP PHÒNG BAN CHUYÊN SÂU
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Giải pháp {solution.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {solution.tagline}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Đăng ký tư vấn giải pháp {solution.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <PublicLink
              href="/ai-enterprise#architecture"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/15"
            >
              <span>Xem Kiến trúc hợp nhất AI Enterprise</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </PublicLink>
          </div>

          {/* Scope distinction callout for Sales vs CRM */}
          {solution.slug === 'sales' && (
            <div className="p-3.5 rounded-xl bg-blue-900/40 border border-blue-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-200">
                <span className="font-semibold text-blue-300">Phân biệt phạm vi:</span> Trang này tập trung vào <strong>quy trình đội ngũ kinh doanh (Sales)</strong>, chỉ tiêu doanh số và chốt đơn. Nếu tìm kiếm phân hệ <strong>nền tảng kỹ thuật CRM & Cơ sở dữ liệu khách hàng 360</strong>, vui lòng xem giải pháp công nghệ CRS/CRM.
              </div>
              <PublicLink
                href="/solutions/crm"
                className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-white transition-colors"
              >
                <span>Khám phá CRS / CRM Doanh nghiệp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </PublicLink>
            </div>
          )}
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">

        {/* 2. ĐIỂM NGHẼN TRƯỚC KHI TRIỂN KHAI */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                Điểm nghẽn vận hành trước khi chuẩn hóa
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Rủi ro thất thoát dữ liệu & giảm tốc độ ra quyết định
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            {solution.problems.map((prob, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-rose-50/50 dark:bg-rose-950/40 p-4 rounded-xl border border-rose-100 dark:border-rose-900/60"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {prob}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
            <span><strong>Kết luận:</strong> Dữ liệu bị phân tán tạo nên các ốc đảo thông tin (Silo), buộc nhân sự phải nhập tay lặp lại và báo cáo thủ công.</span>
          </div>
        </section>

        {/* 3. WORKFLOW / SOP CHÍNH */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-[#06B6D4]">
              <Workflow className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                Quy trình vận hành chuẩn hóa (SOP)
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Tự động hóa luồng tiếp nhận, xử lý và bàn giao
            </span>
          </div>

          {/* SOP Steps Grid / Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
            {solution.processes.map((proc, idx) => {
              const isExpanded = expandedSopIndex === idx;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">
                        CHẶNG 0{idx + 1}
                      </span>
                      <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                      {proc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 text-[11px] text-slate-500">
                    Trạng thái: Tự động lưu vết Audit Log
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. DỮ LIỆU ĐƯỢC QUẢN LÝ TRONG MÀN HÌNH MẪU (VISUAL NGHIỆP VỤ RIÊNG) */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
              <Database className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                Màn hình dữ liệu nghiệp vụ mẫu
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Giao diện tương tác chuẩn mực thiết kế riêng cho {solution.name}
            </span>
          </div>

          {/* Department-specific operational visual */}
          {renderDepartmentVisual()}
        </section>

        {/* 5. AI COPILOT HỖ TRỢ & BƯỚC CON NGƯỜI PHÊ DUYỆT */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#070F1E] text-white border border-slate-800 space-y-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-[#D9A62E]">
              <Sparkles className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Trợ lý AI Copilot chuyên trách {solution.name}
              </h2>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800 font-semibold">
              CƠ CHẾ HUMAN-IN-THE-LOOP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-[#06B6D4] uppercase text-[10px] tracking-wider block">
                1. Dữ liệu AI đọc & phân quyền:
              </span>
              <p className="text-slate-300 leading-relaxed">{solution.aiAssistance.reads}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-[#155EEF] dark:text-blue-400 uppercase text-[10px] tracking-wider block">
                2. Năng lực phân tích nghiệp vụ:
              </span>
              <p className="text-slate-300 leading-relaxed">{solution.aiAssistance.analyzes}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-amber-400 uppercase text-[10px] tracking-wider block">
                3. Đề xuất kịch bản thông minh:
              </span>
              <p className="text-slate-300 leading-relaxed">{solution.aiAssistance.proposes}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-1.5">
              <span className="font-bold text-emerald-400 uppercase text-[10px] tracking-wider block">
                4. Phạm vi tự động thực thi:
              </span>
              <p className="text-slate-300 leading-relaxed">{solution.aiAssistance.executes}</p>
            </div>
          </div>

          {/* Human-in-the-loop checkpoint */}
          <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-900 text-rose-200 text-xs flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold uppercase tracking-wider text-[11px] text-rose-300 block">
                Chốt chặn bắt buộc con người phê duyệt:
              </span>
              <p className="leading-relaxed">{solution.aiAssistance.requiresApproval}</p>
            </div>
          </div>
        </section>

        {/* 6. BÁO CÁO & CHỈ SỐ KPI VẬN HÀNH */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400">
              <BarChart3 className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                Báo cáo & Chỉ số hiệu quả then chốt (KPI/BI)
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              Nhảy số theo dữ liệu thực tế phát sinh
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {solution.reports.map((rep, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 flex items-start gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {rep}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. BÀN GIAO DỮ LIỆU LIÊN PHÒNG BAN */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400">
              <ArrowLeftRight className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                Bàn giao dữ liệu liên phòng ban
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900">
              Unified Event Bus
            </span>
          </div>

          <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200/80 dark:border-emerald-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
            <p>{solution.interDepartmentConnection}</p>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-emerald-200/50 dark:border-emerald-900/30">
              Dữ liệu được chuyển tiếp tức thời qua giao thức bảo mật nội bộ, loại bỏ hoàn toàn tình trạng trễ thông tin và đối soát thủ công.
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B1F3A] via-[#0d274c] to-[#155EEF] text-white text-center space-y-5 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Sẵn sàng chuẩn hóa quy trình {solution.name}?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            Đội ngũ chuyên gia VMC Group sẵn sàng đồng hành khảo sát hiện trạng dữ liệu và thiết lập lộ trình phân kỳ triển khai thực tế cho doanh nghiệp bạn.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3 bg-white text-[#0B1F3A] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Đăng ký tư vấn giải pháp {solution.name}
            </button>
            <PublicLink
              href="/contact"
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/20"
            >
              Đặt lịch khảo sát hiện trạng
            </PublicLink>
          </div>
        </section>
      </div>
    </div>
  );
};
