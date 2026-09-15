import React from 'react';
import {
  Compass, Workflow, Sliders, CheckCircle2, Rocket,
  Shield, FileCheck, Layers, ArrowRight
} from 'lucide-react';
import { useI18n } from '../../../i18n';

interface PhaseConfig {
  phaseNum: number;
  keyPrefix: 'phase1' | 'phase2' | 'phase3' | 'phase4' | 'phase5';
}

const PHASE_CONFIGS: PhaseConfig[] = [
  { phaseNum: 1, keyPrefix: 'phase1' },
  { phaseNum: 2, keyPrefix: 'phase2' },
  { phaseNum: 3, keyPrefix: 'phase3' },
  { phaseNum: 4, keyPrefix: 'phase4' },
  { phaseNum: 5, keyPrefix: 'phase5' }
];

interface CommitmentConfig {
  keyPrefix: 'agile' | 'training' | 'ownership';
  icon: React.ElementType;
}

const COMMITMENT_CONFIGS: CommitmentConfig[] = [
  { keyPrefix: 'agile', icon: Layers },
  { keyPrefix: 'training', icon: FileCheck },
  { keyPrefix: 'ownership', icon: Shield }
];

export const RoadmapAndCommitments: React.FC = () => {
  const { t } = useI18n();

  const getPhaseData = (cfg: PhaseConfig) => {
    return {
      timeframe: t(`home.roadmap.phases.${cfg.keyPrefix}.timeframe`, ''),
      name: t(`home.roadmap.phases.${cfg.keyPrefix}.name`, ''),
      focus: t(`home.roadmap.phases.${cfg.keyPrefix}.focus`, ''),
      output: t(`home.roadmap.phases.${cfg.keyPrefix}.output`, '')
    };
  };

  const getCommitmentData = (cfg: CommitmentConfig) => {
    return {
      title: t(`home.roadmap.commitments.${cfg.keyPrefix}.title`, ''),
      desc: t(`home.roadmap.commitments.${cfg.keyPrefix}.desc`, '')
    };
  };

  return (
    <section className="bg-slate-50 dark:bg-[#070E1B] py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 inline-block px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            {t('home.roadmap.badge', 'LỘ TRÌNH ĐỒNG HÀNH')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('home.roadmap.heading', 'Lộ trình triển khai 5 giai đoạn thực tế và minh bạch')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('home.roadmap.description', 'Phương pháp triển khai cuốn chiếu giúp doanh nghiệp nhanh chóng đưa từng bộ phận vào vận hành có kiểm soát, giảm thiểu xáo trộn nội bộ.')}
          </p>
        </div>

        {/* 5-Phase Horizontal / Responsive Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {PHASE_CONFIGS.map((phase) => {
            const data = getPhaseData(phase);
            return (
              <div
                key={phase.phaseNum}
                className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between shadow-2xs relative"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-6 h-6 rounded-full bg-[#155EEF] text-white text-xs font-bold flex items-center justify-center font-mono">
                      {phase.phaseNum}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-semibold">
                      {data.timeframe}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#0B1F3A] dark:text-white leading-snug">
                      {data.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                      {data.focus}
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 block text-[10px] uppercase">
                    {t('home.roadmap.deliverableLabel', 'Kết quả bàn giao:')}
                  </span>
                  <span className="line-clamp-2">{data.output}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Real-world Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          {COMMITMENT_CONFIGS.map((c, idx) => {
            const Icon = c.icon;
            const data = getCommitmentData(c);
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                    {data.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
