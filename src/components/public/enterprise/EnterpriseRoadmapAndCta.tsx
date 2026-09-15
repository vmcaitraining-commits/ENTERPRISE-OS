import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n';
import {
  CheckCircle2, ArrowRight,
  Clock, Sparkles, ChevronRight
} from 'lucide-react';

interface RoadmapPhase {
  phase: string;
  duration: string;
  title: string;
  objective: string;
  deliverables: string[];
}

export const EnterpriseRoadmapAndCta: React.FC = () => {
  const { navigate } = usePublicRouter();
  const { t, tRaw } = useI18n();

  const phases = tRaw<RoadmapPhase[]>('aiEnterprise.roadmapAndCta.phases') || [];

  return (
    <div className="space-y-16">
      {/* 4-PHASE ROADMAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            {t('aiEnterprise.roadmapAndCta.roadmapBadge')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('aiEnterprise.roadmapAndCta.roadmapTitle')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('aiEnterprise.roadmapAndCta.roadmapDescription')}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4 shadow-2xs hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800">
                    {p.phase}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                    {p.duration}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {p.objective}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  {t('aiEnterprise.roadmapAndCta.deliverablesTitle')}
                </span>
                <ul className="space-y-1">
                  {p.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1F3A] via-[#0D284F] to-[#081729] text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl">
          {/* Subtle Ambient Background Grids */}
          <div className="absolute inset-0 bg-[radial-gradient(#155EEF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/80 text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {t('aiEnterprise.roadmapAndCta.ctaBadge')}
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t('aiEnterprise.roadmapAndCta.ctaTitle')}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t('aiEnterprise.roadmapAndCta.ctaDescription')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#155EEF] hover:bg-blue-600 text-white font-bold text-sm shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer"
              >
                <span>{t('aiEnterprise.roadmapAndCta.ctaBtnConsultation')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('/capabilities')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>{t('aiEnterprise.roadmapAndCta.ctaBtnCapabilities')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Reassurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('aiEnterprise.roadmapAndCta.trustBadge1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('aiEnterprise.roadmapAndCta.trustBadge2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('aiEnterprise.roadmapAndCta.trustBadge3')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
