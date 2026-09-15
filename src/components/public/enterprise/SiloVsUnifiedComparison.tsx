import React from 'react';
import { useI18n } from '../../../i18n';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  beforeProblem: string;
  afterSolution: string;
  impactMetric: string;
}

export const SiloVsUnifiedComparison: React.FC = () => {
  const { t, tRaw } = useI18n();
  const rows = tRaw<ComparisonRow[]>('aiEnterprise.comparison.rows') || [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" />
          {t('aiEnterprise.comparison.badge')}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          {t('aiEnterprise.comparison.title')}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t('aiEnterprise.comparison.description')}
        </p>
      </div>

      {/* Side-by-Side Visual Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: The Fragmented Reality (Before) */}
        <div className="p-6 rounded-3xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-5">
          <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/60 pb-3">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-base">
              <XCircle className="w-5 h-5 shrink-0" />
              <span>{t('aiEnterprise.comparison.beforeCardTitle')}</span>
            </div>
            <span className="text-[11px] font-mono font-bold text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded">
              {t('aiEnterprise.comparison.beforeCardBadge')}
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('aiEnterprise.comparison.beforeCardDesc')}
          </p>

          <div className="space-y-2.5 text-xs text-rose-950 dark:text-rose-200">
            <div className="flex items-start gap-2 bg-white/80 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200/80 dark:border-rose-900/40">
              <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>{t('aiEnterprise.comparison.beforePoint1Strong')}</strong>
                {t('aiEnterprise.comparison.beforePoint1Text')}
              </span>
            </div>
            <div className="flex items-start gap-2 bg-white/80 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200/80 dark:border-rose-900/40">
              <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>{t('aiEnterprise.comparison.beforePoint2Strong')}</strong>
                {t('aiEnterprise.comparison.beforePoint2Text')}
              </span>
            </div>
            <div className="flex items-start gap-2 bg-white/80 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200/80 dark:border-rose-900/40">
              <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>
                <strong>{t('aiEnterprise.comparison.beforePoint3Strong')}</strong>
                {t('aiEnterprise.comparison.beforePoint3Text')}
              </span>
            </div>
          </div>
        </div>

        {/* Right: The Unified AI Enterprise Model (After) */}
        <div className="p-6 rounded-3xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 space-y-5">
          <div className="flex items-center justify-between border-b border-blue-200 dark:border-blue-900/60 pb-3">
            <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{t('aiEnterprise.comparison.afterCardTitle')}</span>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">
              {t('aiEnterprise.comparison.afterCardBadge')}
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('aiEnterprise.comparison.afterCardDesc')}
          </p>

          <div className="space-y-2.5 text-xs text-blue-950 dark:text-blue-200">
            <div className="flex items-start gap-2 bg-white/80 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-200/80 dark:border-blue-900/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>{t('aiEnterprise.comparison.afterPoint1Strong')}</strong>
                {t('aiEnterprise.comparison.afterPoint1Text')}
              </span>
            </div>
            <div className="flex items-start gap-2 bg-white/80 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-200/80 dark:border-blue-900/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>{t('aiEnterprise.comparison.afterPoint2Strong')}</strong>
                {t('aiEnterprise.comparison.afterPoint2Text')}
              </span>
            </div>
            <div className="flex items-start gap-2 bg-white/80 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-200/80 dark:border-blue-900/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>{t('aiEnterprise.comparison.afterPoint3Strong')}</strong>
                {t('aiEnterprise.comparison.afterPoint3Text')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed 5-Dimension Matrix Table */}
      <div className="bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
            {t('aiEnterprise.comparison.tableHeading')}
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            {t('aiEnterprise.comparison.tableDisclaimer')}
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
          {rows.map((row, idx) => (
            <div key={idx} className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
              <div className="lg:col-span-3 space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</div>
                <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">{row.dimension}</h4>
                <div className="inline-block text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                  {row.impactMetric}
                </div>
              </div>

              {/* Problem Column */}
              <div className="lg:col-span-4 p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  {t('aiEnterprise.comparison.tableColBefore')}
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {row.beforeProblem}
                </p>
              </div>

              {/* Solution Column */}
              <div className="lg:col-span-5 p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {t('aiEnterprise.comparison.tableColAfter')}
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {row.afterSolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
