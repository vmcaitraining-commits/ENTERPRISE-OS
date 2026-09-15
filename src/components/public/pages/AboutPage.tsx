import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { useI18n } from '../../../i18n/I18nContext';
import {
  ShieldCheck, CheckCircle2, Compass,
  Eye, Sparkles, ArrowRight, Users, Check
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const { data } = useEnterprise();
  const { t, locale } = useI18n();

  const companyName = data?.identity?.companyName?.value || 'VMC Group';
  const representative = data?.identity?.representative?.value || t('about.repNameDefault');
  const region = locale === 'en' ? t('about.regionDefault') : (data?.contact?.region?.value || t('about.regionDefault'));
  const market = locale === 'en' ? t('about.marketDefault') : (data?.market?.currentMarket?.value || t('about.marketDefault'));
  const targetAudience = locale === 'en' ? t('about.targetAudienceDefault') : (data?.market?.targetAudience?.value || t('about.targetAudienceDefault'));

  // Strategic items
  const strat = data?.strategy || [];
  const stratVision = strat.find((s) => s.id === 'strat_vision')?.content;
  const stratDiff = strat.find((s) => s.id === 'strat_diff')?.content;
  const stratCommRules = strat.find((s) => s.id === 'strat_comm_rules')?.content;

  const vision = locale === 'en' ? t('about.visionDefault') : (stratVision || t('about.visionDefault'));
  const diff = locale === 'en' ? t('about.diffDefault') : (stratDiff || t('about.diffDefault'));
  const commRules = locale === 'en' ? t('about.commRulesDefault') : (stratCommRules || t('about.commRulesDefault'));

  const missionFocusItems = [
    {
      number: '01',
      title: t('about.missionItem1Title'),
      desc: t('about.missionItem1Desc')
    },
    {
      number: '02',
      title: t('about.missionItem2Title'),
      desc: t('about.missionItem2Desc')
    },
    {
      number: '03',
      title: t('about.missionItem3Title'),
      desc: t('about.missionItem3Desc')
    },
    {
      number: '04',
      title: t('about.missionItem4Title'),
      desc: t('about.missionItem4Desc')
    }
  ];

  const workingMethodology = [
    {
      step: '01',
      name: t('about.method1Title'),
      desc: t('about.method1Desc'),
      deliverable: t('about.method1Deliverable')
    },
    {
      step: '02',
      name: t('about.method2Title'),
      desc: t('about.method2Desc'),
      deliverable: t('about.method2Deliverable')
    },
    {
      step: '03',
      name: t('about.method3Title'),
      desc: t('about.method3Desc'),
      deliverable: t('about.method3Deliverable')
    },
    {
      step: '04',
      name: t('about.method4Title'),
      desc: t('about.method4Desc'),
      deliverable: t('about.method4Deliverable')
    }
  ];

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            {t('about.badge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('about.title', { company: companyName })}
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Corporate Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Unified Section: Nature & Positioning */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <div className="flex items-center gap-3 text-[#155EEF] dark:text-[#06B6D4]">
            <Compass className="w-6 h-6 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
              {t('about.natureBadge')}
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed">
            <p>
              {t('about.natureP1', { company: companyName })}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4] block">
                  {t('about.roleHeading')}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {t('about.roleDesc')}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                  {t('about.focusHeading')}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {t('about.focusDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Differentiation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0B1F3A] dark:bg-[#081120] text-white border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <Eye className="w-5 h-5 shrink-0" />
                <h3 className="text-lg font-bold text-white">{t('about.visionHeading')}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {vision}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-[#06B6D4]">
              {t('about.visionSubtag')}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-5 h-5 shrink-0" />
                <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">{t('about.diffHeading')}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {diff}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('about.diffCheck')}</span>
            </div>
          </div>
        </div>

        {/* Mission Focus */}
        <section className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase tracking-wider">
              {t('about.missionBadge')}
            </div>
            <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              {t('about.missionHeading')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {t('about.missionSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {missionFocusItems.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-mono font-bold text-sm flex items-center justify-center">
                  {item.number}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology & Deliverables */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 dark:bg-[#070F1E] text-white border border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#06B6D4]">
              {t('about.methodBadge')}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {t('about.methodHeading')}
            </h2>
            <p className="text-xs text-slate-400">
              {t('about.methodSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workingMethodology.map((m) => (
              <div key={m.step} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#06B6D4] font-bold">{t('about.methodStepLabel', { step: m.step })}</span>
                  <span className="text-slate-400">{t('about.methodStandardLabel')}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{m.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
                <div className="pt-2 border-t border-slate-700/60 text-xs text-emerald-300 flex items-start gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{t('about.methodDeliverableLabel', { deliverable: m.deliverable })}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Organization Information */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          <div className="flex items-center gap-3 text-[#0B1F3A] dark:text-white">
            <Users className="w-6 h-6 text-[#155EEF] dark:text-[#06B6D4] shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold">
              {t('about.orgHeading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 font-medium">{t('about.repLabel')}</span>
              <div className="font-bold text-sm text-[#0B1F3A] dark:text-white">{representative}</div>
              <p className="text-[11px] text-slate-500">{t('about.repRole')}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 font-medium">{t('about.regionLabel')}</span>
              <div className="font-bold text-sm text-[#0B1F3A] dark:text-white">{region}</div>
              <p className="text-[11px] text-slate-500">{t('about.regionDesc')}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 font-medium">{t('about.marketLabel')}</span>
              <div className="font-bold text-sm text-[#0B1F3A] dark:text-white">{market}</div>
              <p className="text-[11px] text-slate-500">{t('about.marketDesc')}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 sm:col-span-2 lg:col-span-3 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 font-medium">{t('about.targetAudienceLabel')}</span>
              <div className="font-bold text-sm text-[#0B1F3A] dark:text-white">{targetAudience}</div>
              <p className="text-[11px] text-slate-500">{t('about.targetAudienceDesc')}</p>
            </div>
          </div>
        </section>

        {/* Communication Discipline */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">
              {t('about.commHeading')}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {commRules}
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => openConsultationModal('consultation')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>{t('about.ctaButton')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
