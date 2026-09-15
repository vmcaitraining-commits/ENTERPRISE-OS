import React, { useState } from 'react';
import { AiSpecializedDemoData } from '../../../data/industryDetailedData';
import { useI18n } from '../../../i18n';
import { Sparkles, CheckCircle2, ShieldCheck, Terminal, ArrowRight, RefreshCw } from 'lucide-react';

interface IndustryAiDemoProps {
  demoData: AiSpecializedDemoData;
  industryName: string;
}

export const IndustryAiDemo: React.FC<IndustryAiDemoProps> = ({ demoData, industryName }) => {
  const { t } = useI18n();
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasRun, setHasRun] = useState(true);

  const handleSimulate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setHasRun(true);
    }, 450);
  };

  const getRiskBadge = (level: 'LOW' | 'MEDIUM' | 'HIGH') => {
    switch (level) {
      case 'HIGH':
        return <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">{t('industries.visuals.aiDemo.riskLevel.high')}</span>;
      case 'MEDIUM':
        return <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">{t('industries.visuals.aiDemo.riskLevel.medium')}</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">{t('industries.visuals.aiDemo.riskLevel.low')}</span>;
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-8 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            {t('industries.visuals.aiDemo.badge')}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            {demoData.title}
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            {demoData.problemContext}
          </p>
        </div>

        <button
          type="button"
          onClick={handleSimulate}
          disabled={isProcessing}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-medium text-sm transition-all shadow-md shadow-indigo-900/30 shrink-0 cursor-pointer disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              {t('industries.visuals.aiDemo.processingText')}
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-indigo-200" />
              {t('industries.visuals.aiDemo.runSimulation')}
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Input Data Context */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-5 border border-slate-800/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                {demoData.inputLabel}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {t('industries.visuals.aiDemo.liveState')}
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {Object.entries(demoData.sampleInput).map(([key, val]) => (
                <div key={key} className="bg-slate-900/70 p-2.5 rounded border border-slate-800/60">
                  <span className="text-slate-400 block mb-1 text-[11px]">{key}:</span>
                  <span className="text-slate-100 font-medium break-words leading-relaxed">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
            {demoData.aiProcessing}
          </div>
        </div>

        {/* Right Column: AI Output Results */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-5 border border-slate-800/80 flex flex-col justify-between">
          {isProcessing ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="text-sm text-slate-300 font-medium">{t('industries.visuals.aiDemo.processingWait')}</div>
              <div className="text-xs text-slate-500 font-mono">{demoData.aiProcessing}</div>
            </div>
          ) : hasRun ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {demoData.aiOutput.badge}
                </span>
                {getRiskBadge(demoData.aiOutput.riskLevel)}
              </div>

              {/* Summary note */}
              <div className="p-3.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-slate-200 text-sm leading-relaxed">
                <strong className="text-white block mb-1 font-semibold">{t('industries.visuals.aiDemo.summaryHeading')}</strong>
                {demoData.aiOutput.summary}
              </div>

              {/* Recommendations list */}
              <div>
                <h5 className="text-xs font-mono uppercase text-slate-400 mb-2 tracking-wider">
                  {t('industries.visuals.aiDemo.recommendationsHeading')}
                </h5>
                <ul className="space-y-2">
                  {demoData.aiOutput.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-900/60 p-2.5 rounded border border-slate-800/60">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action items for operational compliance */}
              <div>
                <h5 className="text-xs font-mono uppercase text-slate-400 mb-2 tracking-wider">
                  {t('industries.visuals.aiDemo.actionItemsHeading')}
                </h5>
                <div className="space-y-1.5">
                  {demoData.aiOutput.actionItems.map((act, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-emerald-300/90 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 italic">
            * {demoData.disclaimer}
          </div>
        </div>
      </div>
    </div>
  );
};
