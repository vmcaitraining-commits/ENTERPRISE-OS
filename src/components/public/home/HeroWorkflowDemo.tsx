import React, { useState, useEffect } from 'react';
import {
  Globe, Database, Users, CheckSquare, CreditCard, BarChart3,
  ArrowRight, Shield, CheckCircle2, ChevronRight, Activity, Clock
} from 'lucide-react';
import { useI18n } from '../../../i18n';

interface StepDefinition {
  id: string;
  stepNumber: number;
  icon: React.ElementType;
  keyPrefix: 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6';
  tagType: 'auto' | 'approval' | 'audit';
}

const STEP_DEFINITIONS: StepDefinition[] = [
  { id: 'step_form', stepNumber: 1, icon: Globe, keyPrefix: 'step1', tagType: 'auto' },
  { id: 'step_crm', stepNumber: 2, icon: Database, keyPrefix: 'step2', tagType: 'auto' },
  { id: 'step_sales', stepNumber: 3, icon: Users, keyPrefix: 'step3', tagType: 'auto' },
  { id: 'step_approval', stepNumber: 4, icon: CheckSquare, keyPrefix: 'step4', tagType: 'approval' },
  { id: 'step_finance_cs', stepNumber: 5, icon: CreditCard, keyPrefix: 'step5', tagType: 'audit' },
  { id: 'step_bi', stepNumber: 6, icon: BarChart3, keyPrefix: 'step6', tagType: 'auto' }
];

export const HeroWorkflowDemo: React.FC = () => {
  const { t } = useI18n();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto cycle through steps if not manually paused by user hover/click
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % STEP_DEFINITIONS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentDef = STEP_DEFINITIONS[activeStepIndex];
  const CurrentIcon = currentDef.icon;

  const getStepData = (def: StepDefinition) => {
    return {
      label: t(`home.workflowDemo.steps.${def.keyPrefix}.label`, ''),
      shortRole: t(`home.workflowDemo.steps.${def.keyPrefix}.shortRole`, ''),
      action: t(`home.workflowDemo.steps.${def.keyPrefix}.action`, ''),
      event: t(`home.workflowDemo.steps.${def.keyPrefix}.event`, ''),
      details: t(`home.workflowDemo.steps.${def.keyPrefix}.details`, ''),
      tag: t(`home.workflowDemo.steps.${def.keyPrefix}.tag`, '')
    };
  };

  const currentData = getStepData(currentDef);

  return (
    <div
      className="relative rounded-2xl bg-[#0B1F3A] dark:bg-[#070F1E] border border-slate-700/80 shadow-2xl p-5 text-white space-y-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* OS Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-2 font-mono text-[11px] text-slate-400">
            {t('home.workflowDemo.osFileName', 'luong-van-hanh-doanh-nghiep.os')}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-medium">
          <Activity className="w-3 h-3 text-amber-400 animate-pulse" />
          <span>{t('home.workflowDemo.demoTag', 'Minh họa vận hành')}</span>
        </div>
      </div>

      {/* Horizontal Mini-Steppers */}
      <div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-2">
          <span>{t('home.workflowDemo.journeyTitle', 'Hành trình dữ liệu liên phòng ban:')}</span>
          <span className="font-mono text-[#06B6D4]">
            {t('home.workflowDemo.stepCount', `Bước ${activeStepIndex + 1}/6`, { current: activeStepIndex + 1 })}
          </span>
        </div>
        
        <div className="grid grid-cols-6 gap-1 sm:gap-1.5">
          {STEP_DEFINITIONS.map((step, idx) => {
            const isCurrent = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;
            const data = getStepData(step);
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  setActiveStepIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`text-left p-1.5 sm:p-2 rounded-lg transition-all cursor-pointer border text-[10px] sm:text-[11px] ${
                  isCurrent
                    ? 'bg-[#155EEF] border-blue-400 text-white font-bold shadow-sm shadow-blue-500/40'
                    : isCompleted
                    ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-slate-400'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="font-mono text-[9px] opacity-80">0{step.stepNumber}</span>
                  {isCompleted && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0 ml-auto hidden sm:block" />}
                </div>
                <div className="truncate font-medium text-[10px] sm:text-[11px] mt-0.5">
                  {data.label.split('/')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Real-time Business Simulation Card */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900/90 to-[#0B1F3A] border border-slate-700/80 space-y-3 min-h-[160px] flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#155EEF]/20 text-[#06B6D4] border border-[#155EEF]/40 flex items-center justify-center shrink-0">
                <CurrentIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#06B6D4] uppercase tracking-wider font-semibold">
                    {t('home.workflowDemo.stepPrefix', `Bước 0${currentDef.stepNumber}`, { num: currentDef.stepNumber })}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">• {currentData.shortRole}</span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">{currentData.label}</h4>
              </div>
            </div>

            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                currentDef.tagType === 'approval'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : currentDef.tagType === 'audit'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
              }`}
            >
              {currentData.tag}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">{currentData.action}</p>
        </div>

        {/* Data payload simulated block */}
        <div className="p-2.5 rounded-lg bg-black/40 border border-slate-800 font-mono text-[11px] space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
            <span className="text-[10px] text-slate-400 font-semibold uppercase">
              {t('home.workflowDemo.dataMovementLabel', 'Dữ liệu luân chuyển:')}
            </span>
          </div>
          <div className="text-slate-200 font-medium truncate">{currentData.event}</div>
          <div className="text-slate-400 text-[10px] truncate">{currentData.details}</div>
        </div>
      </div>

      {/* Step Connection Bar */}
      <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[10px]">
            {t('home.workflowDemo.closedLoopGuard', 'Dữ liệu liên thông khép kín, kiểm soát quyền theo vai trò')}
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setActiveStepIndex((prev) => (prev + 1) % STEP_DEFINITIONS.length);
            setIsAutoPlaying(false);
          }}
          className="inline-flex items-center gap-1 text-[11px] text-[#06B6D4] hover:text-white font-medium transition-colors cursor-pointer"
        >
          <span>{t('home.workflowDemo.nextStepButton', 'Bước kế')}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
