import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n';
import { detailedIndustriesData, IndustryDetailedConfig } from '../../../data/industryDetailedData';
import { IndustryDetailView } from './IndustryDetailView';
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Building,
  Briefcase,
  GraduationCap,
  Home,
  Factory,
  Truck,
  HardHat,
  Code2,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

const industryVisualIcons: Record<string, React.ReactNode> = {
  trade: <Building className="w-6 h-6 text-amber-500" />,
  service: <Briefcase className="w-6 h-6 text-blue-500" />,
  education: <GraduationCap className="w-6 h-6 text-emerald-500" />,
  'real-estate': <Home className="w-6 h-6 text-violet-500" />,
  manufacturing: <Factory className="w-6 h-6 text-orange-500" />,
  distribution: <Truck className="w-6 h-6 text-cyan-500" />,
  construction: <HardHat className="w-6 h-6 text-yellow-500" />,
  technology: <Code2 className="w-6 h-6 text-indigo-500" />
};

export const IndustriesPage: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = usePublicRouter();
  const { t, tRaw } = useI18n();

  const segments = currentPath.split('/');
  const indSlug = segments[2]; // 'trade', 'service', etc.

  // If URL matches one of the 8 industry sub-routes, render the dedicated IndustryDetailView
  if (indSlug && detailedIndustriesData[indSlug]) {
    return <IndustryDetailView industrySlug={indSlug} />;
  }

  const localizedSectors = tRaw<Record<string, IndustryDetailedConfig>>('industries.sectors') || detailedIndustriesData;
  const allIndustries = Object.keys(detailedIndustriesData).map((slug) => {
    const loc = localizedSectors?.[slug];
    const fallback = detailedIndustriesData[slug];
    return {
      slug,
      name: loc?.name || fallback.name,
      tagline: loc?.tagline || fallback.tagline,
      sectorCode: loc?.sectorCode || fallback.sectorCode,
      journeyVisualFlow: loc?.journeyVisualFlow || fallback.journeyVisualFlow
    };
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 space-y-16 pb-24">
      {/* Overview Hero Section */}
      <section className="relative pt-16 pb-20 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t('industries.overview.badge')}</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">{t('industries.overview.badgeSubtitle')}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t('industries.overview.title')} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
              {t('industries.overview.titleHighlight')}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {t('industries.overview.subtitle')}
          </p>
        </div>
      </section>

      {/* 8 Industry Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t('industries.overview.sectionHeader')}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {t('industries.overview.sectionSubheader')}
            </p>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
            {t('industries.overview.sectorCounter')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allIndustries.map((ind) => {
            const flowSummary = ind.journeyVisualFlow.map((s: { title: string }) => s.title).join(' → ');

            return (
              <div
                key={ind.slug}
                onClick={() => navigate(`/industries/${ind.slug}`)}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/60 hover:bg-slate-900 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-lg shadow-black/40 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:border-indigo-500/40 transition-colors">
                      {industryVisualIcons[ind.slug]}
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                      {ind.sectorCode}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {ind.tagline}
                    </p>
                  </div>

                  {/* Visual Flow Teaser */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                      {t('industries.overview.flowLabel')}
                    </span>
                    <div className="text-xs font-mono text-emerald-300/90 line-clamp-2">
                      {flowSummary}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>{t('industries.overview.exploreCardLink')}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Unlisted Industry Survey Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-medium">
              <HelpCircle className="w-3.5 h-3.5" />
              {t('industries.overview.survey.badge')}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {t('industries.overview.survey.title')}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t('industries.overview.survey.description')}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('industries.overview.survey.ndaBadge')}</span>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => openConsultationModal('assessment', t('industries.overview.survey.preselectedOption'))}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-950/50 cursor-pointer"
            >
              <span>{t('industries.overview.survey.ctaButton')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
