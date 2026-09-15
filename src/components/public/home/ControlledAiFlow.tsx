import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  Sparkles, Database, Brain, FileText, UserCheck, Play,
  ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, AlertCircle
} from 'lucide-react';
import { useI18n } from '../../../i18n';

interface ExampleConfig {
  id: string;
  keyPrefix: 'salesDiscount' | 'csRefund' | 'financeCashflow';
}

const EXAMPLE_CONFIGS: ExampleConfig[] = [
  { id: 'sales_discount', keyPrefix: 'salesDiscount' },
  { id: 'cs_refund', keyPrefix: 'csRefund' },
  { id: 'finance_cashflow', keyPrefix: 'financeCashflow' }
];

export const ControlledAiFlow: React.FC = () => {
  const { navigate } = usePublicRouter();
  const { t, tRaw } = useI18n();
  const [activeExampleId, setActiveExampleId] = useState<string>(EXAMPLE_CONFIGS[0].id);

  const activeConfig = EXAMPLE_CONFIGS.find((e) => e.id === activeExampleId) || EXAMPLE_CONFIGS[0];

  const getExampleData = (cfg: ExampleConfig) => {
    return {
      tabLabel: t(`home.controlledAi.examples.${cfg.keyPrefix}.tabLabel`, ''),
      roleTitle: t(`home.controlledAi.examples.${cfg.keyPrefix}.roleTitle`, ''),
      scenario: t(`home.controlledAi.examples.${cfg.keyPrefix}.scenario`, ''),
      humanRule: t(`home.controlledAi.examples.${cfg.keyPrefix}.humanRule`, ''),
      steps: tRaw<{
        title: string;
        description: string;
        subDetail: string;
      }[]>(`home.controlledAi.examples.${cfg.keyPrefix}.steps`, [])
    };
  };

  const activeData = getExampleData(activeConfig);

  return (
    <section className="bg-slate-50 dark:bg-[#081225] border-y border-slate-200 dark:border-slate-800 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-cyan-200 dark:border-cyan-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t('home.controlledAi.badge', 'TRIẾT LÝ HUMAN-IN-THE-LOOP')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('home.controlledAi.heading', 'AI không tự ý hành động — Con người luôn giữ quyền quyết định')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('home.controlledAi.description', 'Mọi thao tác của Trợ lý AI đều tuân thủ luồng kiểm soát 6 bước nghiêm ngặt: Đọc dữ liệu, phân tích và soạn thảo đề xuất, nhưng bắt buộc có sự phê duyệt của con người trước khi thực thi.')}
          </p>
        </div>

        {/* 3 Interactive Scenario Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {EXAMPLE_CONFIGS.map((cfg) => {
            const isSelected = cfg.id === activeExampleId;
            const data = getExampleData(cfg);
            return (
              <button
                key={cfg.id}
                type="button"
                onClick={() => setActiveExampleId(cfg.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0B1F3A] dark:bg-white text-white dark:text-[#0B1F3A] border-transparent shadow-sm'
                    : 'bg-white dark:bg-[#0D182E] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                {data.tabLabel}
              </button>
            );
          })}
        </div>

        {/* The 6-Step Workflow Visual Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          {/* Active Scenario Title */}
          <div className="pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#155EEF] dark:text-[#06B6D4] font-bold uppercase tracking-wider">
                {t('home.controlledAi.contextBadge', 'TÌNH HUỐNG THỰC TẾ')}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] dark:text-white">
                {activeData.roleTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('home.controlledAi.scenarioPrefix', 'Bối cảnh:')} {activeData.scenario}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-semibold self-start sm:self-auto">
              <UserCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>{t('home.controlledAi.humanApprovalGuard', 'Chốt chặn con người bắt buộc')}</span>
            </div>
          </div>

          {/* The 6 Sequential Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {activeData.steps.map((st, idx) => {
              const isApprovalStep = idx === 3;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border text-xs space-y-2 flex flex-col justify-between ${
                    isApprovalStep
                      ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800/80 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-bold uppercase ${
                          isApprovalStep
                            ? 'text-amber-700 dark:text-amber-400'
                            : 'text-[#155EEF] dark:text-[#06B6D4]'
                        }`}
                      >
                        {st.title}
                      </span>
                      {isApprovalStep && (
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                      )}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    {st.subDetail}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Rule Statement */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <AlertCircle className="w-4 h-4 text-[#155EEF] shrink-0" />
              <span>{activeData.humanRule}</span>
            </div>

            <button
              type="button"
              onClick={() => navigate('/ai')}
              className="inline-flex items-center gap-1 font-bold text-[#155EEF] dark:text-[#06B6D4] hover:underline shrink-0 cursor-pointer"
            >
              <span>{t('home.controlledAi.viewAllAiCta', 'Xem tất cả Trợ lý AI')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
