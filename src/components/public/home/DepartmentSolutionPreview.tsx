import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  TrendingUp, Megaphone, Headphones, Users, CreditCard,
  ShieldCheck, ArrowRight, CheckCircle2, Workflow, Clock,
  DollarSign, Activity, FileText
} from 'lucide-react';
import { useI18n } from '../../../i18n';

interface DeptConfig {
  id: string;
  slug: string;
  deptKey: 'sales' | 'marketing' | 'cs' | 'hr' | 'finance' | 'management';
  icon: React.ElementType;
}

const DEPT_CONFIGS: DeptConfig[] = [
  { id: 'sales', slug: 'sales', deptKey: 'sales', icon: TrendingUp },
  { id: 'marketing', slug: 'marketing', deptKey: 'marketing', icon: Megaphone },
  { id: 'cs', slug: 'customer-service', deptKey: 'cs', icon: Headphones },
  { id: 'hr', slug: 'hr', deptKey: 'hr', icon: Users },
  { id: 'finance', slug: 'finance', deptKey: 'finance', icon: CreditCard },
  { id: 'management', slug: 'management', deptKey: 'management', icon: ShieldCheck }
];

export const DepartmentSolutionPreview: React.FC = () => {
  const { navigate } = usePublicRouter();
  const { t, tRaw } = useI18n();
  const [activeTabId, setActiveTabId] = useState<string>(DEPT_CONFIGS[0].id);

  const activeConfig = DEPT_CONFIGS.find((d) => d.id === activeTabId) || DEPT_CONFIGS[0];
  const ActiveIcon = activeConfig.icon;

  const getDeptData = (config: DeptConfig) => {
    return {
      name: t(`home.departmentPreview.departments.${config.deptKey}.name`, ''),
      shortName: t(`home.departmentPreview.departments.${config.deptKey}.shortName`, ''),
      tagline: t(`home.departmentPreview.departments.${config.deptKey}.tagline`, ''),
      metricLabel: t(`home.departmentPreview.departments.${config.deptKey}.metricLabel`, ''),
      metricValue: t(`home.departmentPreview.departments.${config.deptKey}.metricValue`, ''),
      connected: t(`home.departmentPreview.departments.${config.deptKey}.connected`, ''),
      steps: tRaw<{ step: string; action: string }[]>(`home.departmentPreview.departments.${config.deptKey}.steps`, [])
    };
  };

  const activeDept = getDeptData(activeConfig);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4] bg-blue-50 dark:bg-blue-950/50 inline-block px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
          {t('home.departmentPreview.badge', 'LIÊN THÔNG PHÒNG BAN')}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          {t('home.departmentPreview.heading', 'Giải pháp chuyên biệt cho từng bộ phận, kết nối trong một thể thống nhất')}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {t('home.departmentPreview.description', 'Chọn từng phòng ban để xem trực quan quy trình nghiệp vụ được chuẩn hóa và tự động hóa như thế nào.')}
        </p>
      </div>

      {/* Tabs selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl max-w-4xl mx-auto">
        {DEPT_CONFIGS.map((dept) => {
          const isSelected = dept.id === activeTabId;
          const Icon = dept.icon;
          const deptData = getDeptData(dept);
          return (
            <button
              key={dept.id}
              type="button"
              onClick={() => setActiveTabId(dept.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{deptData.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Department Business Preview Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        {/* Top Info Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center font-bold shrink-0">
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] dark:text-white">
                {activeDept.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {activeDept.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shrink-0 self-start sm:self-auto">
            <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">
                {activeDept.metricLabel}
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                {activeDept.metricValue}
              </span>
            </div>
          </div>
        </div>

        {/* 4-Step Operational Flow for this department */}
        <div className="space-y-3">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {t('home.departmentPreview.sopFlowLabel', 'Luồng nghiệp vụ chuẩn hóa (SOP Flow):')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeDept.steps.map((wf, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#155EEF] dark:text-[#06B6D4]">
                    {wf.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {wf.action}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Inter-department connection & Deep Link */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {t('home.departmentPreview.connectionPointLabel', 'Điểm liên thông:')}
            </span>
            <span>{activeDept.connected}</span>
          </div>

          <button
            type="button"
            onClick={() => navigate(`/solutions/${activeConfig.slug}`)}
            className="inline-flex items-center gap-1.5 font-bold text-[#155EEF] dark:text-[#06B6D4] hover:underline cursor-pointer self-end sm:self-auto shrink-0"
          >
            <span>
              {t('home.departmentPreview.viewDetailCta', `Xem chi tiết giải pháp ${activeDept.shortName}`, {
                dept: activeDept.shortName
              })}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
