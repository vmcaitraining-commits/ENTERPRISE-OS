import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { departmentSolutions, needSolutions } from '../../../data/websiteContent';
import { NeedSolutionDetailView } from './NeedSolutionDetailView';
import {
  ArrowRight, CheckCircle2, AlertTriangle, Database, Workflow,
  Sparkles, BarChart3, ArrowLeftRight, ChevronRight, ShieldCheck, ArrowLeft
} from 'lucide-react';

export const SolutionsPage: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = usePublicRouter();

  // Determine active department or need from path (e.g. /solutions/sales, /solutions/crm)
  const segments = currentPath.split('/');
  const subSlug = segments[2]; // 'sales', 'marketing', 'crm', 'ai-agent', 'voice', etc.

  const activeDept = departmentSolutions.find((d) => d.slug === subSlug);
  const activeNeed = needSolutions.find((n) => n.slug === subSlug);

  // If a specific need solution is requested (e.g. /solutions/crm, /solutions/ai-agent, etc.)
  if (activeNeed) {
    return <NeedSolutionDetailView solution={activeNeed} />;
  }

  // If a specific department is requested
  if (activeDept) {
    return (
      <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
        {/* Sub-page Header */}
        <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-12 pb-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <button
              onClick={() => navigate('/solutions')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại danh mục Giải pháp</span>
            </button>

            <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
              GIẢI PHÁP PHÒNG BAN
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Giải pháp {activeDept.name}
            </h1>

            <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
              {activeDept.tagline}
            </p>

            <div className="pt-2">
              <button
                onClick={() => openConsultationModal('consultation')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Đăng ký tư vấn giải pháp {activeDept.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Detailed 6-Card Content Template */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Block 1: Vấn đề thường gặp */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">1. Những vấn đề vận hành thường gặp</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {activeDept.problems.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-rose-50/50 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-100 dark:border-rose-900/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                  <span className="leading-relaxed">{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 2: Dữ liệu quản lý */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
              <Database className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">2. Dữ liệu trọng yếu được quản lý tập trung</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activeDept.dataManaged.map((item, idx) => (
                <div key={idx} className="p-3 bg-blue-50/60 dark:bg-slate-900/60 rounded-xl border border-blue-100 dark:border-slate-800 text-xs font-semibold text-[#0B1F3A] dark:text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 3: Quy trình nghiệp vụ */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-[#06B6D4]">
              <Workflow className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">3. Quy trình nghiệp vụ chuẩn hóa (SOP)</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeDept.processes.map((proc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 relative">
                  <span className="text-xs font-mono font-bold text-[#06B6D4]">BƯỚC 0{idx + 1}</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{proc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Block 4: Trợ lý AI hỗ trợ (Supervised AI Copilot) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#070F1E] text-white border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-[#D9A62E]">
                <Sparkles className="w-5 h-5" />
                <h2 className="text-lg font-bold text-white">4. Trợ lý AI Copilot hỗ trợ {activeDept.name}</h2>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                KIỂM SOÁT PHÊ DUYỆT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-1">
                <span className="font-bold text-[#06B6D4] uppercase text-[10px]">Dữ liệu AI đọc:</span>
                <p className="text-slate-300 leading-relaxed">{activeDept.aiAssistance.reads}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-1">
                <span className="font-bold text-[#155EEF] dark:text-blue-400 uppercase text-[10px]">Năng lực phân tích:</span>
                <p className="text-slate-300 leading-relaxed">{activeDept.aiAssistance.analyzes}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-1">
                <span className="font-bold text-amber-400 uppercase text-[10px]">Đề xuất thông minh:</span>
                <p className="text-slate-300 leading-relaxed">{activeDept.aiAssistance.proposes}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-1">
                <span className="font-bold text-emerald-400 uppercase text-[10px]">Phạm vi thực thi tự động:</span>
                <p className="text-slate-300 leading-relaxed">{activeDept.aiAssistance.executes}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-900 text-rose-200 text-xs flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold uppercase tracking-wider text-[11px] text-rose-300">Ranh giới kiểm soát:</span>{' '}
                {activeDept.aiAssistance.requiresApproval}
              </div>
            </div>
          </div>

          {/* Block 5 & 6: Báo cáo & Liên thông */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reports */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <BarChart3 className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">5. Hệ thống Báo cáo thời gian thực</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeDept.reports.map((rep, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-100 dark:border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                    <span>{rep}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inter-department */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <ArrowLeftRight className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">6. Liên thông dữ liệu liên phòng ban</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeDept.interDepartmentConnection}
              </p>
              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 font-mono bg-emerald-50/50 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
                Trạng thái: Dữ liệu được đồng bộ hóa tức thời qua Unified Event Bus của AI ENTERPRISE.
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#155EEF] text-white text-center space-y-4">
            <h3 className="text-xl font-bold">
              Bạn muốn chuẩn hóa quy trình {activeDept.name}?
            </h3>
            <p className="text-xs text-slate-200 max-w-lg mx-auto leading-relaxed">
              Liên hệ cùng đội ngũ chuyên gia của VMC Group để nhận tư vấn cấu hình và lộ trình triển khai chi tiết cho doanh nghiệp.
            </p>
            <button
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3 bg-white text-[#0B1F3A] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Đăng ký tư vấn giải pháp
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If general /solutions overview
  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Overview Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            HỆ THỐNG GIẢI PHÁP
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Giải pháp Vận hành Doanh nghiệp
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Khám phá các giải pháp may đo được thiết kế chuyên sâu theo từng phòng ban và nhu cầu chuyển đổi vận hành thực tế của doanh nghiệp.
          </p>
        </div>
      </section>

      {/* Department Solutions List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white">1. Giải pháp theo Phòng ban</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Mỗi phòng ban sở hữu không gian làm việc chuyên biệt nhưng cùng chia sẻ dữ liệu trên một hệ thống thống nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentSolutions.map((dept) => (
            <div
              key={dept.id}
              onClick={() => navigate(`/solutions/${dept.slug}`)}
              className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#155EEF] dark:hover:border-[#06B6D4] hover:shadow-md transition-all cursor-pointer space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] group-hover:bg-[#155EEF] group-hover:text-white dark:group-hover:bg-[#06B6D4] dark:group-hover:text-[#0B1F3A] transition-colors flex items-center justify-center font-bold">
                  {dept.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{dept.tagline}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#155EEF] dark:text-[#06B6D4]">
                <span>Xem chi tiết giải pháp</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions by Need */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white">2. Giải pháp theo Nhu cầu chuyển đổi</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Tập trung giải quyết dứt điểm các bài toán công nghệ bức thiết nhất của doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {needSolutions.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/solutions/${item.slug}`)}
              className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#155EEF] dark:hover:border-[#06B6D4] hover:shadow-md transition-all cursor-pointer space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center font-bold text-xs group-hover:bg-[#155EEF] group-hover:text-white dark:group-hover:bg-[#06B6D4] dark:group-hover:text-[#0B1F3A] transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">{item.tagline}</p>
              </div>
              <div className="text-xs font-semibold text-[#155EEF] dark:text-[#06B6D4] pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span>Xem chi tiết giải pháp</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
