import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { industriesSolutions } from '../../../data/websiteContent';
import {
  ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Layers,
  Sparkles, Calendar, ChevronRight
} from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = usePublicRouter();

  const segments = currentPath.split('/');
  const indSlug = segments[2]; // 'trade', 'service', etc.

  const activeInd = industriesSolutions.find((i) => i.slug === indSlug);

  // If viewing a specific industry detail page
  if (activeInd) {
    return (
      <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
        {/* Industry Detail Header */}
        <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-12 pb-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <button
              onClick={() => navigate('/industries')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại danh sách Ngành nghề</span>
            </button>

            <div className="inline-block px-3 py-1 rounded-md bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold uppercase tracking-wider border border-[#D9A62E]/30">
              GIẢI PHÁP THEO NGÀNH
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Giải pháp cho ngành {activeInd.name}
            </h1>

            <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
              {activeInd.tagline}
            </p>

            <div className="pt-2">
              <button
                onClick={() => openConsultationModal('consultation')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Đăng ký tư vấn giải pháp ngành {activeInd.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 5 Blocks for Industry */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Block 1 & 2: Đặc thù & Vấn đề */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">1. Đặc thù vận hành của ngành</h3>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeInd.characteristics.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF] dark:bg-[#06B6D4] shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">2. Những điểm nghẽn thường gặp</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeInd.operatingProblems.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-rose-50/50 dark:bg-rose-950/40 p-2.5 rounded-lg border border-rose-100 dark:border-rose-900/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Block 3: Phân hệ phù hợp */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
              <Layers className="w-5 h-5" />
              <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">3. Các phân hệ AI ENTERPRISE đề xuất ứng dụng</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeInd.suitableModules.map((mod, idx) => (
                <div key={idx} className="p-3 bg-blue-50/50 dark:bg-slate-900/60 rounded-xl border border-blue-100 dark:border-slate-800 text-xs font-semibold text-[#0B1F3A] dark:text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] shrink-0" />
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 4: Ứng dụng AI */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#070F1E] text-white border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-[#D9A62E]">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">4. Ứng dụng AI giải quyết bài toán ngành</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeInd.aiCapabilities.map((aiCap, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 text-xs text-slate-300 space-y-2">
                  <span className="text-[10px] font-mono text-[#06B6D4] font-bold">NĂNG LỰC 0{idx + 1}</span>
                  <p className="leading-relaxed">{aiCap}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Block 5: Lộ trình triển khai */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <Calendar className="w-5 h-5" />
              <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">5. Lộ trình triển khai khuyến nghị</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeInd.deploymentRoadmap.map((road, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">GIAI ĐOẠN {idx + 1}</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{road}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#155EEF] text-white text-center space-y-4 shadow-lg">
            <h3 className="text-xl font-bold">
              Xây dựng giải pháp vận hành cho doanh nghiệp ngành {activeInd.name}
            </h3>
            <p className="text-xs text-slate-200 max-w-lg mx-auto leading-relaxed">
              Đăng ký để được các chuyên gia kiến trúc của VMC Group tư vấn chi tiết mô hình phù hợp với doanh nghiệp của bạn.
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

  // General /industries Overview
  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold uppercase tracking-wider border border-[#D9A62E]/30">
            NGÀNH NGHỀ TRỌNG TÂM
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Giải pháp Theo Ngành Ưu Tiên
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            VMC Group nghiên cứu và đúc kết cấu hình kiến trúc tối ưu cho 8 nhóm ngành kinh doanh cốt lõi tại thị trường Việt Nam.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesSolutions.map((ind) => (
            <div
              key={ind.id}
              onClick={() => navigate(`/industries/${ind.slug}`)}
              className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#155EEF] dark:hover:border-[#06B6D4] hover:shadow-md transition-all cursor-pointer space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-[#D9A62E] group-hover:bg-[#155EEF] group-hover:text-white dark:group-hover:bg-[#06B6D4] dark:group-hover:text-[#0B1F3A] transition-colors flex items-center justify-center font-bold">
                  {ind.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {ind.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#155EEF] dark:text-[#06B6D4]">
                <span>Xem chi tiết ngành</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
