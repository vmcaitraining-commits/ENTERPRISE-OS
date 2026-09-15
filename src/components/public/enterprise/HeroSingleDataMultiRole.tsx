import React, { useState, useMemo } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n';
import {
  Sparkles, ArrowRight, ShieldCheck, Database,
  TrendingUp, Megaphone, Headphones, DollarSign, Users,
  CheckCircle2, ChevronRight, Eye, KeyRound, Bot
} from 'lucide-react';

interface RoleMeta {
  id: string;
  icon: React.ElementType;
  color: string;
  badgeBg: string;
}

const ROLE_METAS: RoleMeta[] = [
  {
    id: 'ceo',
    icon: ShieldCheck,
    color: 'text-amber-500 dark:text-amber-400',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300'
  },
  {
    id: 'sales',
    icon: TrendingUp,
    color: 'text-blue-600 dark:text-blue-400',
    badgeBg: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
  },
  {
    id: 'marketing',
    icon: Megaphone,
    color: 'text-rose-600 dark:text-rose-400',
    badgeBg: 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300'
  },
  {
    id: 'finance',
    icon: DollarSign,
    color: 'text-emerald-600 dark:text-emerald-400',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
  },
  {
    id: 'cskh',
    icon: Headphones,
    color: 'text-cyan-600 dark:text-cyan-400',
    badgeBg: 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300'
  },
  {
    id: 'hr',
    icon: Users,
    color: 'text-indigo-600 dark:text-indigo-400',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
  }
];

export const HeroSingleDataMultiRole: React.FC = () => {
  const { navigate, openConsultationModal } = usePublicRouter();
  const { t, tRaw } = useI18n();
  const [selectedRoleId, setSelectedRoleId] = useState<string>('ceo');

  const translatedRoles = tRaw<any[]>('aiEnterprise.hero.roles') || [];

  const roles = useMemo(() => {
    return ROLE_METAS.map((meta, idx) => {
      const data = translatedRoles.find((r) => r.id === meta.id) || translatedRoles[idx] || {};
      return {
        id: meta.id,
        icon: meta.icon,
        color: meta.color,
        badgeBg: meta.badgeBg,
        title: data.title || '',
        shortTitle: data.shortTitle || '',
        summary: data.summary || '',
        dataVisible: Array.isArray(data.dataVisible) ? data.dataVisible : [],
        actionsPermitted: Array.isArray(data.actionsPermitted) ? data.actionsPermitted : [],
        aiCopilot: data.aiCopilot || ''
      };
    });
  }, [translatedRoles]);

  const selectedRole = useMemo(() => {
    return roles.find((r) => r.id === selectedRoleId) || roles[0];
  }, [roles, selectedRoleId]);

  const handleAnchorClick = (anchorId: string) => {
    navigate(`/ai-enterprise#${anchorId}`, { scrollToTop: false });
  };

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/60 dark:from-[#060D19] dark:via-[#070E1B] dark:to-[#070E1B] border-b border-slate-200 dark:border-slate-800">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1f3a0a_1px,transparent_1px),linear-gradient(to_bottom,#0b1f3a0a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Top Header Block */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4]" />
            {t('aiEnterprise.hero.badge')}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-[1.15]">
            {t('aiEnterprise.hero.titlePart1')}
            <span className="text-[#155EEF] dark:text-[#3B82F6]">{t('aiEnterprise.hero.titleOneData')}</span>
            {t('aiEnterprise.hero.titleSeparator')}
            <span className="text-[#06B6D4]">{t('aiEnterprise.hero.titleManyRoles')}</span>
            {t('aiEnterprise.hero.titlePart2')}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {t('aiEnterprise.hero.description')}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <button
              type="button"
              onClick={() => openConsultationModal('consultation')}
              className="flex items-center gap-2 px-6 py-3.5 bg-[#155EEF] hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
            >
              <span>{t('aiEnterprise.hero.ctaConsultation')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openConsultationModal('assessment')}
              className="flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-[#0E1A30] hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-[#0B1F3A] dark:text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
            >
              <span>{t('aiEnterprise.hero.ctaAssessment')}</span>
            </button>
          </div>

          {/* Quick Anchor Bar (Accessible links with real URLs) */}
          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium">{t('aiEnterprise.hero.quickNav')}</span>
            <a
              href="/ai-enterprise#architecture"
              onClick={(e) => { e.preventDefault(); handleAnchorClick('architecture'); }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-800 text-[#155EEF] dark:text-[#06B6D4] hover:border-blue-300 dark:hover:border-slate-600 font-semibold transition-colors"
            >
              <span>{t('aiEnterprise.hero.anchorArchitecture')}</span>
            </a>
            <a
              href="/ai-enterprise#principles"
              onClick={(e) => { e.preventDefault(); handleAnchorClick('principles'); }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-800 text-[#155EEF] dark:text-[#06B6D4] hover:border-blue-300 dark:hover:border-slate-600 font-semibold transition-colors"
            >
              <span>{t('aiEnterprise.hero.anchorPrinciples')}</span>
            </a>
            <a
              href="/ai-enterprise#security"
              onClick={(e) => { e.preventDefault(); handleAnchorClick('security'); }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-800 text-[#155EEF] dark:text-[#06B6D4] hover:border-blue-300 dark:hover:border-slate-600 font-semibold transition-colors"
            >
              <span>{t('aiEnterprise.hero.anchorSecurity')}</span>
            </a>
          </div>
        </div>

        {/* INTERACTIVE DIAGRAM: "MỘT DỮ LIỆU — NHIỀU VAI TRÒ" */}
        <div className="bg-white dark:bg-[#0B1528] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4]">
                {t('aiEnterprise.hero.diagramBadge')}
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">
                {t('aiEnterprise.hero.diagramTitle')}
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              <span>{t('aiEnterprise.hero.diagramDisclaimer')}</span>
            </div>
          </div>

          {/* Role Selection Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole?.id === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRoleId(role.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 dark:bg-blue-950/70 border-[#155EEF] dark:border-[#3B82F6] shadow-2xs'
                      : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className={`p-2 rounded-lg mb-1.5 ${isSelected ? 'bg-white dark:bg-[#0E1A30] shadow-2xs' : 'bg-white/60 dark:bg-slate-800/60'}`}>
                    <Icon className={`w-4 h-4 ${role.color}`} />
                  </div>
                  <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-[#155EEF] dark:text-[#06B6D4]' : 'text-slate-700 dark:text-slate-300'}`}>
                    {role.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Dual-Side Inspector: Data Core vs. Selected Role Perspective */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 items-stretch">
            {/* Center Core: Unified Database Representation */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#0A162B] text-white space-y-4 flex flex-col justify-between border border-slate-700/60 shadow-inner">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#155EEF]/30 border border-[#155EEF]/50 text-[#06B6D4] text-[11px] font-mono font-bold">
                  <Database className="w-3.5 h-3.5" />
                  {t('aiEnterprise.hero.coreBadge')}
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {t('aiEnterprise.hero.coreTitle')}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t('aiEnterprise.hero.coreDescription')}
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-700/80 pt-3 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>{t('aiEnterprise.hero.coreStatusLabel')}</span>
                  <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {t('aiEnterprise.hero.coreStatusValue')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>{t('aiEnterprise.hero.coreStorageLabel')}</span>
                  <span className="text-slate-200 font-medium">{t('aiEnterprise.hero.coreStorageValue')}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>{t('aiEnterprise.hero.corePrincipleLabel')}</span>
                  <span className="text-[#06B6D4] font-medium">{t('aiEnterprise.hero.corePrincipleValue')}</span>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Role View Scope & Permissions */}
            {selectedRole && (
              <div className="lg:col-span-8 p-5 rounded-2xl bg-slate-50 dark:bg-[#070E1B] border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white dark:bg-[#0E1A30] border border-slate-200 dark:border-slate-700 shadow-2xs">
                      <selectedRole.icon className={`w-5 h-5 ${selectedRole.color}`} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0B1F3A] dark:text-white">
                        {t('aiEnterprise.hero.workspacePrefix')} {selectedRole.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {selectedRole.summary}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${selectedRole.badgeBg}`}>
                    {t('aiEnterprise.hero.rbacBadge')}
                  </span>
                </div>

                {/* Two columns: View Scope vs. Actions Permitted */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      <Eye className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4]" />
                      <span>{t('aiEnterprise.hero.viewScopeTitle')}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {selectedRole.dataVisible.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-[#0E1A30] p-2 rounded-lg border border-slate-200/80 dark:border-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      <KeyRound className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>{t('aiEnterprise.hero.actionScopeTitle')}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {selectedRole.actionsPermitted.map((act: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-[#0E1A30] p-2 rounded-lg border border-slate-200/80 dark:border-slate-800">
                          <ChevronRight className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                          <span className="leading-snug">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Assigned AI Copilot Banner */}
                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 flex items-start gap-2.5 text-xs">
                  <Bot className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0B1F3A] dark:text-white">{t('aiEnterprise.hero.copilotLabel')} </span>
                    <span className="text-slate-600 dark:text-slate-300">{selectedRole.aiCopilot}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
