import React, { useState, useMemo } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n';
import {
  Globe, Users, Megaphone, Headphones, DollarSign, UserCheck,
  Workflow, BookOpen, Bot, BarChart3, Lock, ChevronRight,
  ArrowRight, CheckCircle2, Layers, ChevronDown
} from 'lucide-react';

interface ModuleMeta {
  code: string;
  layerNum: number;
  icon: React.ElementType;
  color: string;
  bgLight: string;
  borderLight: string;
  solutionLink: string;
}

const MODULE_METAS: ModuleMeta[] = [
  { code: 'A', layerNum: 1, icon: Globe, color: 'text-blue-600 dark:text-blue-400', bgLight: 'bg-blue-50 dark:bg-blue-950/50', borderLight: 'border-blue-200 dark:border-blue-800', solutionLink: '/solutions/website' },
  { code: 'B', layerNum: 2, icon: Users, color: 'text-blue-600 dark:text-blue-400', bgLight: 'bg-blue-50 dark:bg-blue-950/50', borderLight: 'border-blue-200 dark:border-blue-800', solutionLink: '/solutions/crs' },
  { code: 'C', layerNum: 2, icon: Megaphone, color: 'text-purple-600 dark:text-purple-400', bgLight: 'bg-purple-50 dark:bg-purple-950/50', borderLight: 'border-purple-200 dark:border-purple-800', solutionLink: '/solutions/marketing' },
  { code: 'D', layerNum: 2, icon: Headphones, color: 'text-cyan-600 dark:text-cyan-400', bgLight: 'bg-cyan-50 dark:bg-cyan-950/50', borderLight: 'border-cyan-200 dark:border-cyan-800', solutionLink: '/solutions/cskh' },
  { code: 'E', layerNum: 3, icon: DollarSign, color: 'text-emerald-600 dark:text-emerald-400', bgLight: 'bg-emerald-50 dark:bg-emerald-950/50', borderLight: 'border-emerald-200 dark:border-emerald-800', solutionLink: '/solutions/finance' },
  { code: 'F', layerNum: 3, icon: UserCheck, color: 'text-indigo-600 dark:text-indigo-400', bgLight: 'bg-indigo-50 dark:bg-indigo-950/50', borderLight: 'border-indigo-200 dark:border-indigo-800', solutionLink: '/solutions/hrm' },
  { code: 'G', layerNum: 3, icon: Workflow, color: 'text-amber-600 dark:text-amber-400', bgLight: 'bg-amber-50 dark:bg-amber-950/50', borderLight: 'border-amber-200 dark:border-amber-800', solutionLink: '/solutions/internal' },
  { code: 'H', layerNum: 3, icon: BookOpen, color: 'text-teal-600 dark:text-teal-400', bgLight: 'bg-teal-50 dark:bg-teal-950/50', borderLight: 'border-teal-200 dark:border-teal-800', solutionLink: '/solutions/training' },
  { code: 'I', layerNum: 4, icon: Bot, color: 'text-sky-600 dark:text-sky-400', bgLight: 'bg-sky-50 dark:bg-sky-950/50', borderLight: 'border-sky-200 dark:border-sky-800', solutionLink: '/copilots' },
  { code: 'J', layerNum: 4, icon: BarChart3, color: 'text-orange-600 dark:text-orange-400', bgLight: 'bg-orange-50 dark:bg-orange-950/50', borderLight: 'border-orange-200 dark:border-orange-800', solutionLink: '/solutions/bi' },
  { code: 'K', layerNum: 4, icon: Lock, color: 'text-rose-600 dark:text-rose-400', bgLight: 'bg-rose-50 dark:bg-rose-950/50', borderLight: 'border-rose-200 dark:border-rose-800', solutionLink: '/resources' },
];

export const Architecture11ModulesMap: React.FC = () => {
  const { navigate } = usePublicRouter();
  const { t, tRaw } = useI18n();
  const [selectedCode, setSelectedCode] = useState<string>('B');
  const [mobileExpandedCode, setMobileExpandedCode] = useState<string | null>('B');

  const rawModules = tRaw<any[]>('aiEnterprise.architecture.modules') || [];

  const modules = useMemo(() => {
    return MODULE_METAS.map((meta, idx) => {
      const data = rawModules.find((m) => m.code === meta.code) || rawModules[idx] || {};
      return {
        code: meta.code,
        name: data.name || '',
        layer: data.layer || '',
        layerNum: meta.layerNum,
        tagline: data.tagline || '',
        icon: meta.icon,
        color: meta.color,
        bgLight: meta.bgLight,
        borderLight: meta.borderLight,
        keyCapabilities: Array.isArray(data.keyCapabilities) ? data.keyCapabilities : [],
        dataIn: data.dataIn || '',
        dataOut: data.dataOut || '',
        solutionLink: meta.solutionLink,
        solutionLabel: data.solutionLabel || ''
      };
    });
  }, [rawModules]);

  const selectedModule = useMemo(() => {
    return modules.find((m) => m.code === selectedCode) || modules[1];
  }, [modules, selectedCode]);

  return (
    <section id="architecture" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          {t('aiEnterprise.architecture.badge')}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          {t('aiEnterprise.architecture.title')}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t('aiEnterprise.architecture.description')}
        </p>
      </div>

      {/* 4-LAYER VISUAL ARCHITECTURE MAP */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 dark:bg-[#060D19] text-white border border-slate-800 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-wider">
              {t('aiEnterprise.architecture.mapBadge')}
            </span>
            <h3 className="text-base font-bold text-white mt-0.5">
              {t('aiEnterprise.architecture.mapTitle')}
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            {t('aiEnterprise.architecture.mapDisclaimer')}
          </span>
        </div>

        <div className="space-y-4">
          {/* LAYER 1: CỔNG TIẾP NHẬN & NHẬN DIỆN SỐ (1 Module: Scope A) */}
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-bold uppercase tracking-wider">
                {t('aiEnterprise.architecture.layer1Title')}
              </span>
              <span>{t('aiEnterprise.architecture.layer1Count')}</span>
            </div>
            <div className="grid grid-cols-1">
              <button
                type="button"
                onClick={() => setSelectedCode('A')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  selectedCode === 'A'
                    ? 'bg-[#155EEF] text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                    : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-mono font-bold text-xs">
                    A
                  </span>
                  <div>
                    <h4 className="text-xs font-bold">Scope A: {modules.find(m => m.code === 'A')?.name || 'Website'}</h4>
                    <p className="text-[11px] text-slate-300 line-clamp-1">
                      {modules.find(m => m.code === 'A')?.tagline}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-white/70" />
              </button>
            </div>
          </div>

          {/* LAYER 2: QUẢN TRỊ KHÁCH HÀNG & DOANH THU (3 Modules: B, C, D) */}
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-purple-400 font-bold uppercase tracking-wider">
                {t('aiEnterprise.architecture.layer2Title')}
              </span>
              <span>{t('aiEnterprise.architecture.layer2Count')}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {['B', 'C', 'D'].map((code) => {
                const mod = modules.find((m) => m.code === code);
                if (!mod) return null;
                const isSelected = selectedCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setSelectedCode(code)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#155EEF] text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                        : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-mono font-bold text-xs">
                        {code}
                      </span>
                      <span className="text-xs font-bold leading-tight line-clamp-1">
                        Scope {code}: {mod.name.split('/')[0]}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-white/70" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* LAYER 3: VẬN HÀNH & NGUỒN LỰC TỔ CHỨC (4 Modules: E, F, G, H) */}
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-bold uppercase tracking-wider">
                {t('aiEnterprise.architecture.layer3Title')}
              </span>
              <span>{t('aiEnterprise.architecture.layer3Count')}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {['E', 'F', 'G', 'H'].map((code) => {
                const mod = modules.find((m) => m.code === code);
                if (!mod) return null;
                const isSelected = selectedCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setSelectedCode(code)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#155EEF] text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                        : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-mono font-bold text-xs">
                        {code}
                      </span>
                      <span className="text-xs font-bold leading-tight line-clamp-1">
                        Scope {code}: {mod.name.split('—')[0].split('(')[0]}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-white/70" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* LAYER 4: TRÍ TUỆ ĐIỀU HÀNH & NỀN TẢNG MỞ (3 Modules: I, J, K) */}
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-amber-400 font-bold uppercase tracking-wider">
                {t('aiEnterprise.architecture.layer4Title')}
              </span>
              <span>{t('aiEnterprise.architecture.layer4Count')}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {['I', 'J', 'K'].map((code) => {
                const mod = modules.find((m) => m.code === code);
                if (!mod) return null;
                const isSelected = selectedCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setSelectedCode(code)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#155EEF] text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                        : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:bg-slate-700/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center font-mono font-bold text-xs">
                        {code}
                      </span>
                      <span className="text-xs font-bold leading-tight line-clamp-1">
                        Scope {code}: {mod.name.split('&')[0]}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 text-white/70" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP MODULE DETAIL INSPECTOR */}
      {selectedModule && (
        <div className="hidden lg:block bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-2xs space-y-6">
          {/* Header of Inspector */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl ${selectedModule.bgLight} border ${selectedModule.borderLight}`}>
                <selectedModule.icon className={`w-8 h-8 ${selectedModule.color}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#0B1F3A] dark:bg-slate-800 text-white border border-slate-700">
                    SCOPE {selectedModule.code}
                  </span>
                  <span className="text-xs font-semibold text-[#155EEF] dark:text-[#06B6D4]">
                    {selectedModule.layer}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] dark:text-white mt-1">
                  {t('aiEnterprise.architecture.modulePrefix')}: {selectedModule.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                  {selectedModule.tagline}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate(selectedModule.solutionLink)}
              className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 dark:bg-blue-950/60 hover:bg-[#155EEF] hover:text-white border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold rounded-xl transition-all shrink-0 cursor-pointer"
            >
              <span>{selectedModule.solutionLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3-5 Key Capabilities Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t('aiEnterprise.architecture.capabilitiesTitle')}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {selectedModule.keyCapabilities.map((cap: any, idx: number) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#070E1B] border border-slate-200/80 dark:border-slate-800 space-y-1"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 pl-6 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Data In / Data Out Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
              <span className="font-bold text-[#155EEF] dark:text-[#06B6D4] block mb-1">
                {t('aiEnterprise.architecture.dataInTitle')}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedModule.dataIn}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                {t('aiEnterprise.architecture.dataOutTitle')}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedModule.dataOut}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE ACCORDION / STEPPER FOR 11 MODULES */}
      <div className="block lg:hidden space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          {t('aiEnterprise.architecture.mobileAccordionTitle')}
        </div>

        {modules.map((mod) => {
          const isExpanded = mobileExpandedCode === mod.code;
          return (
            <div
              key={mod.code}
              className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs transition-colors"
            >
              <button
                type="button"
                onClick={() => setMobileExpandedCode(isExpanded ? null : mod.code)}
                className="w-full p-4 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#0B1F3A] dark:bg-slate-800 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {mod.code}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                      Scope {mod.code}: {mod.name}
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {mod.layer.split(':')[0]}
                    </span>
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {isExpanded && (
                <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-3">
                    {mod.tagline}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      {t('aiEnterprise.architecture.capabilitiesTitle')}
                    </span>
                    <ul className="space-y-1.5">
                      {mod.keyCapabilities.map((cap: any, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span><strong>{cap.title}:</strong> {cap.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate(mod.solutionLink)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-bold text-xs rounded-xl border border-blue-200 dark:border-blue-800"
                  >
                    <span>{mod.solutionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
