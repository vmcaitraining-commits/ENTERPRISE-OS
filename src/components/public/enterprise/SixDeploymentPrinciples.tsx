import React, { useMemo } from 'react';
import { useI18n } from '../../../i18n';
import {
  Globe, UserCheck, Database, Sliders, Bot, Layers,
  CheckCircle2, Sparkles
} from 'lucide-react';

const PRINCIPLE_ICONS = [
  Globe,
  UserCheck,
  Database,
  Sliders,
  Bot,
  Layers
];

export const SixDeploymentPrinciples: React.FC = () => {
  const { t, tRaw } = useI18n();

  const rawItems = tRaw<any[]>('aiEnterprise.deploymentPrinciples.items') || [];

  const principles = useMemo(() => {
    return rawItems.map((item, idx) => ({
      num: item.num || `0${idx + 1}`,
      title: item.title || '',
      description: item.description || '',
      icon: PRINCIPLE_ICONS[idx] || Layers,
      highlights: Array.isArray(item.highlights) ? item.highlights : []
    }));
  }, [rawItems]);

  return (
    <section id="principles" className="scroll-mt-28 bg-slate-900 dark:bg-[#060D19] text-white py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {t('aiEnterprise.deploymentPrinciples.badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t('aiEnterprise.deploymentPrinciples.title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t('aiEnterprise.deploymentPrinciples.description')}
          </p>
        </div>

        {/* 6 Reconstructed Rich Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((pr) => {
            const Icon = pr.icon;
            return (
              <div
                key={pr.num}
                className="p-6 rounded-3xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-colors shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#06B6D4]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800">
                        {t('aiEnterprise.deploymentPrinciples.principlePrefix')} {pr.num}
                      </span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-700/60 text-[#06B6D4]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {pr.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pr.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    {t('aiEnterprise.deploymentPrinciples.commitmentsTitle')}
                  </span>
                  <ul className="space-y-1">
                    {pr.highlights.map((h: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
