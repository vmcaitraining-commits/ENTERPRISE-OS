import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  ShoppingBag, Briefcase, GraduationCap, Building2,
  Factory, Truck, HardHat, Cpu, ArrowRight, ChevronRight
} from 'lucide-react';
import { useI18n } from '../../../i18n';

interface IndustryConfig {
  id: string;
  slug: string;
  keyPrefix: 'trade' | 'service' | 'education' | 'realEstate' | 'manufacturing' | 'distribution' | 'construction' | 'technology';
  icon: React.ElementType;
}

const INDUSTRY_CONFIGS: IndustryConfig[] = [
  { id: 'ind_trade', slug: 'trade', keyPrefix: 'trade', icon: ShoppingBag },
  { id: 'ind_service', slug: 'service', keyPrefix: 'service', icon: Briefcase },
  { id: 'ind_education', slug: 'education', keyPrefix: 'education', icon: GraduationCap },
  { id: 'ind_real_estate', slug: 'real-estate', keyPrefix: 'realEstate', icon: Building2 },
  { id: 'ind_manufacturing', slug: 'manufacturing', keyPrefix: 'manufacturing', icon: Factory },
  { id: 'ind_distribution', slug: 'distribution', keyPrefix: 'distribution', icon: Truck },
  { id: 'ind_construction', slug: 'construction', keyPrefix: 'construction', icon: HardHat },
  { id: 'ind_technology', slug: 'technology', keyPrefix: 'technology', icon: Cpu }
];

export const IndustrySolutionsGrid: React.FC = () => {
  const { navigate } = usePublicRouter();
  const { t } = useI18n();

  const getIndustryData = (cfg: IndustryConfig) => {
    return {
      name: t(`home.industries.items.${cfg.keyPrefix}.name`, ''),
      problemStatement: t(`home.industries.items.${cfg.keyPrefix}.problemStatement`, ''),
      tag: t(`home.industries.items.${cfg.keyPrefix}.tag`, '')
    };
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 inline-block px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
            {t('home.industries.badge', 'MAY ĐO THEO NGÀNH')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('home.industries.heading', 'Giải pháp chuyên sâu cho 8 lĩnh vực kinh doanh trọng điểm')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('home.industries.description', 'Mỗi ngành nghề có đặc thù vận hành riêng biệt. AI ENTERPRISE được cấu hình sẵn các mẫu quy trình SOP và bộ trường dữ liệu phù hợp.')}
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/industries/trade')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#155EEF] dark:text-[#06B6D4] hover:underline cursor-pointer shrink-0 self-start md:self-auto"
        >
          <span>{t('home.industries.exploreAllCta', 'Khám phá toàn bộ ngành')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 8 Compact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INDUSTRY_CONFIGS.map((ind) => {
          const Icon = ind.icon;
          const data = getIndustryData(ind);
          return (
            <div
              key={ind.id}
              onClick={() => navigate(`/industries/${ind.slug}`)}
              className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center transition-transform group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                    {data.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors">
                    {data.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1 line-clamp-2">
                    {data.problemStatement}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4]">
                <span>{t('home.industries.viewSolutionCta', 'Xem giải pháp ngành')}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
