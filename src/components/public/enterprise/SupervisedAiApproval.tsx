import React from 'react';
import { useI18n } from '../../../i18n';
import {
  ShieldCheck, Bot, CheckCircle2, AlertOctagon, UserCheck
} from 'lucide-react';

interface ApprovalStep {
  stepNum: number;
  title: string;
  actor: 'AI' | 'HUMAN' | 'SYSTEM';
  actorLabel: string;
  description: string;
  subtext: string;
}

interface TaskItem {
  name: string;
  desc: string;
}

export const SupervisedAiApproval: React.FC = () => {
  const { t, tRaw } = useI18n();

  const steps = tRaw<ApprovalStep[]>('aiEnterprise.supervisedAi.steps') || [];
  const autonomousTasks = tRaw<TaskItem[]>('aiEnterprise.supervisedAi.autonomousTasks') || [];
  const strictTasks = tRaw<TaskItem[]>('aiEnterprise.supervisedAi.strictApprovalTasks') || [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          {t('aiEnterprise.supervisedAi.badge')}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          {t('aiEnterprise.supervisedAi.title')}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t('aiEnterprise.supervisedAi.description')}
        </p>
      </div>

      {/* 6-Step Visual Process Flow */}
      <div className="bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
            {t('aiEnterprise.supervisedAi.flowHeading')}
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            {t('aiEnterprise.supervisedAi.flowSubheading')}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {steps.map((step) => {
            const isHuman = step.actor === 'HUMAN';
            return (
              <div
                key={step.stepNum}
                className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 transition-all ${
                  isHuman
                    ? 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/80 ring-2 ring-amber-400/30 shadow-xs'
                    : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
                      isHuman ? 'bg-amber-500 text-white' : 'bg-[#155EEF] text-white'
                    }`}>
                      {step.stepNum}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isHuman
                        ? 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800'
                        : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    }`}>
                      {step.actorLabel}
                    </span>
                  </div>

                  <h4 className={`text-xs font-bold leading-tight ${isHuman ? 'text-amber-900 dark:text-amber-200' : 'text-[#0B1F3A] dark:text-white'}`}>
                    {step.title}
                  </h4>

                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                  {step.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two-Column Matrix: Autonomous Allowed vs. Strict Approval Required */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1: AI Autonomous in Boundaries */}
        <div className="p-6 rounded-3xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 space-y-4">
          <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4] border-b border-blue-200 dark:border-blue-900/60 pb-3">
            <Bot className="w-5 h-5 shrink-0" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {t('aiEnterprise.supervisedAi.col1Title')}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {t('aiEnterprise.supervisedAi.col1Subtitle')}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {autonomousTasks.map((task, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white dark:bg-[#0D182E] border border-blue-100 dark:border-blue-900/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{task.name}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-5 leading-relaxed">
                  {task.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Strict Human Approval Required */}
        <div className="p-6 rounded-3xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-700 dark:text-amber-400 border-b border-amber-200 dark:border-amber-900/60 pb-3">
            <AlertOctagon className="w-5 h-5 shrink-0" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {t('aiEnterprise.supervisedAi.col2Title')}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {t('aiEnterprise.supervisedAi.col2Subtitle')}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {strictTasks.map((task, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white dark:bg-[#0D182E] border border-amber-100 dark:border-amber-900/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                  <UserCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{task.name}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-5 leading-relaxed">
                  {task.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
