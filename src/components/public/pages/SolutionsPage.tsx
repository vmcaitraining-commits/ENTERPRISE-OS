import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { departmentSolutions, needSolutions } from '../../../data/websiteContent';
import { NeedSolutionDetailView } from './NeedSolutionDetailView';
import { DepartmentSolutionDetailView } from '../solutions/DepartmentSolutionDetailView';
import { PublicLink } from '../PublicLink';
import {
  ArrowRight, CheckCircle2, ChevronRight, Sparkles,
  Building2, Target, Layers, Filter, Compass, Users,
  TrendingUp, Headphones, CreditCard, ShieldCheck
} from 'lucide-react';

export const SolutionsPage: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = usePublicRouter();
  const [filterMode, setFilterMode] = useState<'all' | 'department' | 'need'>('all');

  // Determine active department or need from path (e.g. /solutions/sales, /solutions/crm)
  const segments = currentPath.split('/');
  const subSlug = segments[2]; // 'sales', 'marketing', 'crm', 'ai-agent', 'voice', etc.

  const activeDept = departmentSolutions.find((d) => d.slug === subSlug);
  const activeNeed = needSolutions.find((n) => n.slug === subSlug);

  // If a specific need solution is requested (e.g. /solutions/crm, /solutions/ai-agent, etc.)
  if (activeNeed) {
    return <NeedSolutionDetailView solution={activeNeed} />;
  }

  // If a specific department is requested (e.g. /solutions/sales, /solutions/marketing, etc.)
  if (activeDept) {
    return <DepartmentSolutionDetailView solution={activeDept} />;
  }

  // Helper to map department icon
  const getDeptIcon = (slug: string) => {
    switch (slug) {
      case 'sales':
        return <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'marketing':
        return <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'customer-service':
        return <Headphones className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'hr':
        return <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'finance':
        return <CreditCard className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'management':
        return <Compass className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Building2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
    }
  };

  const totalCount = departmentSolutions.length + needSolutions.length;
  const deptCount = departmentSolutions.length;
  const needCount = needSolutions.length;

  // Overview /solutions page
  return (
    <div className="space-y-12 sm:space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Overview Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-14 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            HỆ THỐNG GIẢI PHÁP CHUYÊN SÂU
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Giải pháp Vận hành Doanh nghiệp
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Khám phá {deptCount} bộ giải pháp chuyên biệt theo Phòng ban và {needCount} gói giải pháp theo Nhu cầu chuyển đổi, vận hành trên nền tảng dữ liệu hợp nhất AI Enterprise.
          </p>

          {/* Filter Bar / Selector */}
          <div className="pt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Lọc giải pháp:
            </span>
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              Tất cả ({totalCount} giải pháp)
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('department')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'department'
                  ? 'bg-[#155EEF] text-white shadow-xs'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              Theo Phòng ban ({deptCount} giải pháp)
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('need')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'need'
                  ? 'bg-[#06B6D4] text-[#0B1F3A] shadow-xs'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              Theo Nhu cầu chuyển đổi ({needCount} giải pháp)
            </button>
          </div>
        </div>
      </section>

      {/* DEPARTMENT SOLUTIONS */}
      {(filterMode === 'all' || filterMode === 'department') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
                <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white">
                  1. Giải pháp theo Phòng ban
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Visual nghiệp vụ riêng, quy trình chuẩn hóa và trợ lý AI Copilot có kiểm soát cho từng khối chức năng.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded-md">
              {deptCount} Phòng ban
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentSolutions.map((dept) => (
              <PublicLink
                key={dept.id}
                href={`/solutions/${dept.slug}`}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#155EEF] dark:hover:border-[#06B6D4] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      {getDeptIcon(dept.slug)}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      /solutions/{dept.slug}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                      {dept.tagline}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Dữ liệu trọng yếu:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {dept.dataManaged.slice(0, 3).map((d, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#155EEF] dark:text-[#06B6D4]">
                  <span>Xem màn hình nghiệp vụ & SOP</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </PublicLink>
            ))}
          </div>
        </section>
      )}

      {/* SOLUTIONS BY NEED */}
      {(filterMode === 'all' || filterMode === 'need') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white">
                  2. Giải pháp theo Nhu cầu chuyển đổi
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Giải quyết dứt điểm các bài toán công nghệ bức thiết: Tự động hóa, Quản trị tri thức, Trợ lý ảo, Tổng đài AI.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-700 bg-cyan-50 dark:bg-cyan-950 px-2.5 py-1 rounded-md">
              {needCount} Giải pháp
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {needSolutions.map((item) => (
              <PublicLink
                key={item.id}
                href={`/solutions/${item.slug}`}
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
              </PublicLink>
            ))}
          </div>
        </section>
      )}

      {/* Cross-link to AI Enterprise Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B1F3A] via-[#0d274c] to-[#155EEF] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#06B6D4] font-bold">
              KIẾN TRÚC MỘT DỮ LIỆU — NHIỀU VAI TRÒ
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Khám phá cách 11 phân hệ và 6 phòng ban liên thông không điểm nghẽn
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mọi phòng ban đều truy xuất chung một nguồn sự thật duy nhất (Single Source of Truth), phân quyền đa tầng và kiểm soát chặt chẽ bởi con người.
            </p>
          </div>
          <PublicLink
            href="/ai-enterprise"
            className="shrink-0 px-6 py-3 bg-white text-[#0B1F3A] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Xem Tổng quan AI Enterprise</span>
            <ArrowRight className="w-4 h-4" />
          </PublicLink>
        </div>
      </section>
    </div>
  );
};

