import React, { useState } from 'react';
import {
  XCircle, CheckCircle2, ArrowRight, Database, Workflow, BarChart3,
  Layers, AlertTriangle, Sparkles, RefreshCw
} from 'lucide-react';
import { useI18n } from '../../../i18n';

interface ComparisonDef {
  id: string;
  icon: React.ElementType;
  keyPrefix: 'dataSilos' | 'brokenProcess' | 'delayedDecisions';
}

const COMPARISON_DEFS: ComparisonDef[] = [
  { id: 'data_silos', icon: Database, keyPrefix: 'dataSilos' },
  { id: 'broken_process', icon: Workflow, keyPrefix: 'brokenProcess' },
  { id: 'delayed_decisions', icon: BarChart3, keyPrefix: 'delayedDecisions' }
];

export const BottlenecksBeforeAfter: React.FC = () => {
  const { t, tRaw } = useI18n();
  const [activeTabId, setActiveTabId] = useState<string>(COMPARISON_DEFS[0].id);

  const activeDef = COMPARISON_DEFS.find((c) => c.id === activeTabId) || COMPARISON_DEFS[0];

  const getComparisonData = (def: ComparisonDef) => {
    return {
      title: t(`home.bottlenecks.items.${def.keyPrefix}.title`, ''),
      category: t(`home.bottlenecks.items.${def.keyPrefix}.category`, ''),
      before: {
        status: t(`home.bottlenecks.items.${def.keyPrefix}.beforeStatus`, ''),
        flow: tRaw<string[]>(`home.bottlenecks.items.${def.keyPrefix}.beforeSteps`, []),
        consequence: t(`home.bottlenecks.items.${def.keyPrefix}.consequence`, '')
      },
      after: {
        status: t(`home.bottlenecks.items.${def.keyPrefix}.afterStatus`, ''),
        flow: tRaw<string[]>(`home.bottlenecks.items.${def.keyPrefix}.afterSteps`, []),
        benefit: t(`home.bottlenecks.items.${def.keyPrefix}.benefit`, '')
      }
    };
  };

  const current = getComparisonData(activeDef);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 inline-block px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800">
          {t('home.bottlenecks.badge', 'CHUYỂN ĐỔI VẬN HÀNH')}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          {t('home.bottlenecks.heading', 'Giải quyết 3 điểm nghẽn cốt lõi khiến doanh nghiệp chậm lại')}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          {t('home.bottlenecks.description', 'So sánh trực quan dòng chảy vận hành trước và sau khi chuẩn hóa trên nền tảng AI ENTERPRISE.')}
        </p>
      </div>

      {/* 3 Bottleneck Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {COMPARISON_DEFS.map((item) => {
          const isSelected = item.id === activeTabId;
          const Icon = item.icon;
          const data = getComparisonData(item);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTabId(item.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#0B1F3A] dark:bg-white text-white dark:text-[#0B1F3A] border-transparent shadow-md'
                  : 'bg-white dark:bg-[#0D182E] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{data.title}</span>
            </button>
          );
        })}
      </div>

      {/* Comparison Grid: BEFORE vs AFTER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left: BEFORE (Thực trạng phân mảnh) */}
        <div className="rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-100/80 dark:bg-rose-950/60 px-3 py-1 rounded-full">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>{t('home.bottlenecks.beforeTitle', 'TRƯỚC: PHÂN MẢNH & THỦ CÔNG')}</span>
              </div>
              <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 font-semibold">
                {current.before.status}
              </span>
            </div>

            {/* Visual Flow Before (Broken Links) */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {t('home.bottlenecks.beforeFlowLabel', 'Dòng dữ liệu đứt đoạn:')}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {current.before.flow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-rose-200/60 dark:border-rose-900/40 text-center text-xs font-medium text-slate-700 dark:text-slate-300 relative"
                  >
                    <span className="block truncate">{step}</span>
                    {idx < current.before.flow.length - 1 && (
                      <span className="text-rose-400 font-mono text-[10px] block mt-0.5">
                        {t('home.bottlenecks.brokenLinkText', '✕ đứt quãng')}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-900 dark:text-rose-200">
            <span className="font-bold block text-rose-700 dark:text-rose-400 mb-0.5">
              {t('home.bottlenecks.consequenceLabel', 'Hệ quả vận hành:')}
            </span>
            {current.before.consequence}
          </div>
        </div>

        {/* Right: AFTER (Hệ thống thống nhất với AI ENTERPRISE) */}
        <div className="rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-100/80 dark:bg-blue-950/60 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t('home.bottlenecks.afterTitle', 'SAU: THỐNG NHẤT VỚI AI ENTERPRISE')}</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                {current.after.status}
              </span>
            </div>

            {/* Visual Flow After (Connected Pipeline) */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                {t('home.bottlenecks.afterFlowLabel', 'Dòng chảy liên tục:')}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {current.after.flow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-blue-200 dark:border-blue-900/40 text-center text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    <span className="block truncate">{step}</span>
                    {idx < current.after.flow.length - 1 && (
                      <span className="text-emerald-500 font-mono text-[10px] block mt-0.5">
                        {t('home.bottlenecks.connectedLinkText', '➔ liên thông')}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-emerald-200 dark:border-emerald-900/50 text-xs text-slate-800 dark:text-slate-200">
            <span className="font-bold block text-emerald-700 dark:text-emerald-400 mb-0.5">
              {t('home.bottlenecks.benefitLabel', 'Kết quả đạt được:')}
            </span>
            {current.after.benefit}
          </div>
        </div>
      </div>
    </section>
  );
};
