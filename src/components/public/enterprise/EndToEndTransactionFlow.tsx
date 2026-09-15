import React, { useState, useMemo } from 'react';
import { useI18n } from '../../../i18n';
import {
  ArrowRight, Megaphone, TrendingUp, DollarSign,
  Headphones, BarChart3, Clock, FileCheck, Sparkles
} from 'lucide-react';

interface StepMeta {
  stepNumber: number;
  icon: React.ElementType;
  color: string;
  bgLight: string;
  borderLight: string;
}

const STEP_METAS: StepMeta[] = [
  {
    stepNumber: 1,
    icon: Megaphone,
    color: 'text-purple-600 dark:text-purple-400',
    bgLight: 'bg-purple-50 dark:bg-purple-950/40',
    borderLight: 'border-purple-200 dark:border-purple-800'
  },
  {
    stepNumber: 2,
    icon: TrendingUp,
    color: 'text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-50 dark:bg-blue-950/40',
    borderLight: 'border-blue-200 dark:border-blue-800'
  },
  {
    stepNumber: 3,
    icon: DollarSign,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/40',
    borderLight: 'border-emerald-200 dark:border-emerald-800'
  },
  {
    stepNumber: 4,
    icon: Headphones,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgLight: 'bg-cyan-50 dark:bg-cyan-950/40',
    borderLight: 'border-cyan-200 dark:border-cyan-800'
  },
  {
    stepNumber: 5,
    icon: BarChart3,
    color: 'text-amber-600 dark:text-amber-400',
    bgLight: 'bg-amber-50 dark:bg-amber-950/40',
    borderLight: 'border-amber-200 dark:border-amber-800'
  }
];

export const EndToEndTransactionFlow: React.FC = () => {
  const { t, tRaw } = useI18n();
  const [activeStep, setActiveStep] = useState<number>(1);

  const rawSteps = tRaw<any[]>('aiEnterprise.transactionFlow.steps') || [];

  const steps = useMemo(() => {
    return STEP_METAS.map((meta, idx) => {
      const data = rawSteps.find((s) => s.stepNumber === meta.stepNumber) || rawSteps[idx] || {};
      return {
        stepNumber: meta.stepNumber,
        stageName: data.stageName || '',
        scopeCode: data.scopeCode || '',
        scopeTitle: data.scopeTitle || '',
        icon: meta.icon,
        color: meta.color,
        bgLight: meta.bgLight,
        borderLight: meta.borderLight,
        role: data.role || '',
        userAction: data.userAction || '',
        dataGenerated: Array.isArray(data.dataGenerated) ? data.dataGenerated : [],
        aiAutomationRole: data.aiAutomationRole || '',
        handoffNext: data.handoffNext || ''
      };
    });
  }, [rawSteps]);

  const currentStep = useMemo(() => {
    return steps.find((s) => s.stepNumber === activeStep) || steps[0];
  }, [steps, activeStep]);

  return (
    <section className="bg-slate-50 dark:bg-[#070E1B] py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              {t('aiEnterprise.transactionFlow.badge')}
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              {t('aiEnterprise.transactionFlow.disclaimer')}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('aiEnterprise.transactionFlow.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('aiEnterprise.transactionFlow.description')}
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((step) => {
            const isActive = activeStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStep(step.stepNumber)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-white dark:bg-[#0D182E] border-[#155EEF] dark:border-[#3B82F6] shadow-sm ring-2 ring-[#155EEF]/20 dark:ring-blue-500/20'
                    : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center font-mono ${
                    isActive ? 'bg-[#155EEF] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    {step.scopeCode}
                  </span>
                </div>

                <div>
                  <h3 className={`text-xs font-bold ${isActive ? 'text-[#155EEF] dark:text-[#06B6D4]' : 'text-[#0B1F3A] dark:text-slate-200'}`}>
                    {step.stageName}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {step.scopeTitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        {currentStep && (
          <div className="bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl ${currentStep.bgLight} border ${currentStep.borderLight}`}>
                  <currentStep.icon className={`w-6 h-6 ${currentStep.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                      {t('aiEnterprise.transactionFlow.stagePrefix')} 0{currentStep.stepNumber} • {currentStep.scopeCode}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">| {currentStep.role}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A] dark:text-white mt-1">
                    {currentStep.stageName}: {currentStep.scopeTitle}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t('aiEnterprise.transactionFlow.flowNature')}</span>
              </div>
            </div>

            {/* User Action Description */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {t('aiEnterprise.transactionFlow.actionTitle')}
              </div>
              <p className="text-sm font-medium text-[#0B1F3A] dark:text-slate-200 leading-relaxed">
                {currentStep.userAction}
              </p>
            </div>

            {/* 3-Column Grid: Data Generated, AI Copilot Role, Next Handoff */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* 1. Dữ liệu phát sinh */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#070E1B] border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white">
                  <FileCheck className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                  <span>{t('aiEnterprise.transactionFlow.dataGeneratedTitle')}</span>
                </div>
                <ul className="space-y-1.5">
                  {currentStep.dataGenerated.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF] dark:bg-[#06B6D4] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Trợ lý AI & Tự động hóa */}
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4]">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('aiEnterprise.transactionFlow.aiAutomationTitle')}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentStep.aiAutomationRole}
                </p>
              </div>

              {/* 3. Bàn giao sang chặng tiếp theo */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60 space-y-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  <ArrowRight className="w-4 h-4" />
                  <span>{t('aiEnterprise.transactionFlow.handoffTitle')}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentStep.handoffNext}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
