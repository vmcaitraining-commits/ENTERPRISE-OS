import React, { useMemo } from 'react';
import { useI18n } from '../../../i18n';
import {
  ShieldCheck, Lock, Users, KeyRound, Database,
  UserCheck, History, Sliders
} from 'lucide-react';

interface RbacRow {
  resource: string;
  ceo: string;
  salesLead: string;
  salesRep: string;
  chiefAccountant: string;
  supportAgent: string;
}

const PILLAR_ICONS = [Lock, Database, KeyRound, History];
const PILLAR_COLORS = [
  'text-[#155EEF] dark:text-[#06B6D4]',
  'text-indigo-600 dark:text-indigo-400',
  'text-amber-600 dark:text-amber-400',
  'text-emerald-600 dark:text-emerald-400'
];

export const SecurityAndGovernanceMatrix: React.FC = () => {
  const { t, tRaw } = useI18n();

  const rbacRows = tRaw<RbacRow[]>('aiEnterprise.security.rbacRows') || [];
  const rawPillars = tRaw<any[]>('aiEnterprise.security.pillars') || [];

  const pillars = useMemo(() => {
    return rawPillars.map((p, idx) => ({
      title: p.title || '',
      desc: p.desc || '',
      icon: PILLAR_ICONS[idx] || Lock,
      color: PILLAR_COLORS[idx] || PILLAR_COLORS[0]
    }));
  }, [rawPillars]);

  return (
    <section id="security" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          {t('aiEnterprise.security.badge')}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          {t('aiEnterprise.security.title')}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t('aiEnterprise.security.description')}
        </p>
      </div>

      {/* SƠ ĐỒ NGUYÊN LÝ PHÂN QUYỀN: User → Role → Resource → Action → Audit */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#070E1B] border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
            {t('aiEnterprise.security.diagramHeading')}
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {t('aiEnterprise.security.diagramSubheading')}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
          {/* 1. User */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">01</span>
              <UserCheck className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
            </div>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('aiEnterprise.security.step1Title')}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aiEnterprise.security.step1Desc')}
            </p>
          </div>

          {/* 2. Role */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">02</span>
              <Users className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
            </div>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('aiEnterprise.security.step2Title')}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aiEnterprise.security.step2Desc')}
            </p>
          </div>

          {/* 3. Resource */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">03</span>
              <Database className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
            </div>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('aiEnterprise.security.step3Title')}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aiEnterprise.security.step3Desc')}
            </p>
          </div>

          {/* 4. Action */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">04</span>
              <KeyRound className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
            </div>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('aiEnterprise.security.step4Title')}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aiEnterprise.security.step4Desc')}
            </p>
          </div>

          {/* 5. Audit Log */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">05</span>
              <History className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">{t('aiEnterprise.security.step5Title')}</h4>
            <p className="text-[11px] text-emerald-800/80 dark:text-emerald-300 leading-relaxed">
              {t('aiEnterprise.security.step5Desc')}
            </p>
          </div>
        </div>
      </div>

      {/* MA TRẬN PHÂN QUYỀN MẪU (RBAC MATRIX TABLE) */}
      <div className="bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs space-y-4">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
              {t('aiEnterprise.security.rbacHeading')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t('aiEnterprise.security.rbacSubheading')}
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950 text-[#155EEF] dark:text-[#06B6D4] border border-blue-200 dark:border-blue-800">
            {t('aiEnterprise.security.rbacBadge')}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-[#0B1F3A] dark:text-slate-200 font-bold">
                <th className="p-4 pl-6 min-w-[220px]">{t('aiEnterprise.security.tableHeaderResource')}</th>
                <th className="p-4 min-w-[140px]">{t('aiEnterprise.security.tableHeaderCeo')}</th>
                <th className="p-4 min-w-[140px]">{t('aiEnterprise.security.tableHeaderSalesLead')}</th>
                <th className="p-4 min-w-[140px]">{t('aiEnterprise.security.tableHeaderSalesRep')}</th>
                <th className="p-4 min-w-[140px]">{t('aiEnterprise.security.tableHeaderChiefAccountant')}</th>
                <th className="p-4 min-w-[140px] pr-6">{t('aiEnterprise.security.tableHeaderSupportAgent')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70">
              {rbacRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 pl-6 font-semibold text-[#0B1F3A] dark:text-white">
                    {row.resource}
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-medium text-[11px]">
                      {row.ceo}
                    </span>
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                      {row.salesLead}
                    </span>
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                      {row.salesRep}
                    </span>
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-medium text-[11px]">
                      {row.chiefAccountant}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                      {row.supportAgent}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VÍ DỤ QUY TRÌNH PHÊ DUYỆT ĐA CẤP THỰC TẾ (MULTI-LEVEL APPROVAL) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/30 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-6">
        <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-3">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>{t('aiEnterprise.security.approvalExampleTitle')}</span>
          </div>
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/80 text-amber-800 dark:text-amber-200">
            {t('aiEnterprise.security.approvalExampleScenario')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-amber-200/80 dark:border-amber-900/40 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-400">{t('aiEnterprise.security.exampleStep1Badge')}</span>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('aiEnterprise.security.exampleStep1Title')}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aiEnterprise.security.exampleStep1Desc')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-amber-200/80 dark:border-amber-900/40 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-400">{t('aiEnterprise.security.exampleStep2Badge')}</span>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('aiEnterprise.security.exampleStep2Title')}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aiEnterprise.security.exampleStep2Desc')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-amber-200/80 dark:border-amber-900/40 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-400">{t('aiEnterprise.security.exampleStep3Badge')}</span>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('aiEnterprise.security.exampleStep3Title')}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aiEnterprise.security.exampleStep3Desc')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-emerald-300 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/30 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">{t('aiEnterprise.security.exampleStep4Badge')}</span>
            <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">{t('aiEnterprise.security.exampleStep4Title')}</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aiEnterprise.security.exampleStep4Desc')}
            </p>
          </div>
        </div>
      </div>

      {/* 4 TRỤ CỘT BẢO MẬT CHUẨN MỰC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs"
            >
              <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 w-fit ${pillar.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white leading-snug">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
