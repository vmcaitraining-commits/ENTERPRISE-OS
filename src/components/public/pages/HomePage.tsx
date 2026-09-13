import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { HeroWorkflowDemo } from '../home/HeroWorkflowDemo';
import { BottlenecksBeforeAfter } from '../home/BottlenecksBeforeAfter';
import { ArchitectureMap11Modules } from '../home/ArchitectureMap11Modules';
import { DepartmentSolutionPreview } from '../home/DepartmentSolutionPreview';
import { ControlledAiFlow } from '../home/ControlledAiFlow';
import { IndustrySolutionsGrid } from '../home/IndustrySolutionsGrid';
import { IntegrationAndSecurityHub } from '../home/IntegrationAndSecurityHub';
import { RoadmapAndCommitments } from '../home/RoadmapAndCommitments';
import { FinalCtaSection } from '../home/FinalCtaSection';

export const HomePage: React.FC = () => {
  const { navigate, openConsultationModal } = usePublicRouter();

  return (
    <div className="space-y-20 sm:space-y-24 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* 1. HERO + DEMO LUỒNG VẬN HÀNH */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 dark:from-[#081225] dark:via-[#070E1B] dark:to-[#070E1B] border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1f3a0a_1px,transparent_1px),linear-gradient(to_bottom,#0b1f3a0a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#155EEF] dark:bg-[#06B6D4] animate-pulse" />
                VMC GROUP • KIẾN TRÚC DOANH NGHIỆP AI
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-[1.15]">
                Xây dựng hệ thống doanh nghiệp vận hành bằng{' '}
                <span className="text-[#155EEF] dark:text-[#3B82F6]">dữ liệu</span>, công nghệ và{' '}
                <span className="text-[#06B6D4]">AI</span>.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Kết nối dữ liệu, quy trình và các phòng ban vào một hệ điều hành thống nhất — giúp doanh nghiệp vận hành tinh gọn, tăng tốc độ xử lý và ra quyết định chính xác.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={() => openConsultationModal('consultation')}
                  className="flex items-center gap-2 px-6 py-3.5 bg-[#155EEF] hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Đăng ký tư vấn giải pháp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/ai-enterprise')}
                  className="flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-[#0E1A30] hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-[#0B1F3A] dark:text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
                >
                  <span>Khám phá AI ENTERPRISE</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
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

            {/* Right: Realistic Business Operation Flow Simulation */}
            <div className="lg:col-span-5">
              <HeroWorkflowDemo />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ĐIỂM NGHẼN TRƯỚC / SAU (BEFORE / AFTER) */}
      <BottlenecksBeforeAfter />

      {/* 3. BẢN ĐỒ AI ENTERPRISE 11 PHÂN HỆ (4 LAYERS) */}
      <ArchitectureMap11Modules />

      {/* 4. PREVIEW GIẢI PHÁP THEO PHÒNG BAN (TABS) */}
      <DepartmentSolutionPreview />

      {/* 5. AI CÓ KIỂM SOÁT (HUMAN-IN-THE-LOOP FLOW) */}
      <ControlledAiFlow />

      {/* 6. GIẢI PHÁP THEO NGÀNH (COMPACT 8 CARDS) */}
      <IndustrySolutionsGrid />

      {/* 7. TÍCH HỢP VÀ BẢO MẬT (HUB & SPOKE + 4 PILLARS) */}
      <IntegrationAndSecurityHub />

      {/* 8. LỘ TRÌNH TRIỂN KHAI + MINH CHỨNG PHÙ HỢP */}
      <RoadmapAndCommitments />

      {/* 9. CTA CUỐI TRANG */}
      <FinalCtaSection />
    </div>
  );
};
