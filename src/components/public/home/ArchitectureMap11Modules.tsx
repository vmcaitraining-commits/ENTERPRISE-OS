import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  Globe, Megaphone, Users, Headphones, CreditCard,
  UserCheck, Workflow, BookOpen, Sparkles, BarChart3,
  Cpu, ArrowRight, ChevronRight, Check, Layers
} from 'lucide-react';
import { useI18n } from '../../../i18n';

interface ModuleConfig {
  code: string;
  scopeKey: 'scopeA' | 'scopeB' | 'scopeC' | 'scopeD' | 'scopeE' | 'scopeF' | 'scopeG' | 'scopeH' | 'scopeI' | 'scopeJ' | 'scopeK';
  deepLink: string;
  icon: React.ElementType;
  layer: number;
}

interface LayerConfig {
  layerNumber: number;
  layerKey: 'layer1' | 'layer2' | 'layer3' | 'layer4';
  modules: ModuleConfig[];
}

const LAYER_CONFIGS: LayerConfig[] = [
  {
    layerNumber: 1,
    layerKey: 'layer1',
    modules: [
      { code: 'Scope A', scopeKey: 'scopeA', deepLink: '/solutions/website', icon: Globe, layer: 1 },
      { code: 'Scope C', scopeKey: 'scopeC', deepLink: '/solutions/marketing', icon: Megaphone, layer: 1 }
    ]
  },
  {
    layerNumber: 2,
    layerKey: 'layer2',
    modules: [
      { code: 'Scope B', scopeKey: 'scopeB', deepLink: '/solutions/crm', icon: Users, layer: 2 },
      { code: 'Scope D', scopeKey: 'scopeD', deepLink: '/solutions/customer-service', icon: Headphones, layer: 2 },
      { code: 'Scope E', scopeKey: 'scopeE', deepLink: '/solutions/finance', icon: CreditCard, layer: 2 }
    ]
  },
  {
    layerNumber: 3,
    layerKey: 'layer3',
    modules: [
      { code: 'Scope F', scopeKey: 'scopeF', deepLink: '/solutions/hr', icon: UserCheck, layer: 3 },
      { code: 'Scope G', scopeKey: 'scopeG', deepLink: '/solutions/sop', icon: Workflow, layer: 3 },
      { code: 'Scope H', scopeKey: 'scopeH', deepLink: '/solutions/knowledge', icon: BookOpen, layer: 3 }
    ]
  },
  {
    layerNumber: 4,
    layerKey: 'layer4',
    modules: [
      { code: 'Scope I', scopeKey: 'scopeI', deepLink: '/ai', icon: Sparkles, layer: 4 },
      { code: 'Scope J', scopeKey: 'scopeJ', deepLink: '/solutions/bi', icon: BarChart3, layer: 4 },
      { code: 'Scope K', scopeKey: 'scopeK', deepLink: '/solutions/system', icon: Cpu, layer: 4 }
    ]
  }
];

export const ArchitectureMap11Modules: React.FC = () => {
  const { navigate } = usePublicRouter();
  const { t } = useI18n();
  const [selectedModuleKey, setSelectedModuleKey] = useState<string>('Scope B');

  const allModules = LAYER_CONFIGS.flatMap((l) => l.modules);
  const selectedConfig = allModules.find((m) => m.code === selectedModuleKey) || allModules[1]; // default Scope B
  const SelectedIcon = selectedConfig.icon;

  const getModuleData = (config: ModuleConfig) => {
    return {
      name: t(`home.architecture.modules.${config.scopeKey}.name`, ''),
      shortDesc: t(`home.architecture.modules.${config.scopeKey}.shortDesc`, ''),
      keyBenefit: t(`home.architecture.modules.${config.scopeKey}.keyBenefit`, '')
    };
  };

  const selectedData = getModuleData(selectedConfig);

  return (
    <section className="bg-slate-900 text-white py-16 sm:py-20 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl relative overflow-hidden">
      {/* Subtle architectural background accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#155EEF]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#06B6D4]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-[#06B6D4] text-xs font-bold tracking-wider uppercase border border-blue-500/20">
              <Layers className="w-3.5 h-3.5" />
              {t('home.architecture.badge', 'KIẾN TRÚC 11 PHÂN HỆ')}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {t('home.architecture.heading', 'Bản đồ 4 lớp kiến trúc AI ENTERPRISE')}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t('home.architecture.description', 'Mô hình liên thông 11 phân hệ lõi tạo nên hệ điều hành doanh nghiệp hoàn chỉnh. Chọn một phân hệ để xem chi tiết vai trò và cách thức kết nối.')}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/ai-enterprise')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer self-start md:self-auto shrink-0"
          >
            <span>{t('home.architecture.viewFullArchitecture', 'Xem kiến trúc đầy đủ')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Architecture Layers Grid (7 cols on desktop) & Preview (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Layers Stack (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {LAYER_CONFIGS.map((layer) => (
              <div
                key={layer.layerNumber}
                className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2.5 backdrop-blur-xs"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 uppercase tracking-wide text-[11px]">
                    {t(`home.architecture.${layer.layerKey}Title`, '')}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                    {t(`home.architecture.${layer.layerKey}Role`, '')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {layer.modules.map((mod) => {
                    const isSelected = selectedConfig.code === mod.code;
                    const Icon = mod.icon;
                    const modData = getModuleData(mod);
                    return (
                      <button
                        key={mod.code}
                        type="button"
                        onClick={() => setSelectedModuleKey(mod.code)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                          isSelected
                            ? 'bg-[#155EEF] border-blue-400 text-white shadow-lg shadow-blue-500/20'
                            : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-[#06B6D4]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span
                            className={`text-[9px] font-mono block ${
                              isSelected ? 'text-blue-200' : 'text-slate-400'
                            }`}
                          >
                            {mod.code}
                          </span>
                          <span className="text-xs font-semibold block truncate leading-tight">
                            {modData.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Selected Module Preview Card (5 cols on desktop) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0E1A30] to-[#070E1B] border border-blue-500/30 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#155EEF]/20 text-[#06B6D4] border border-[#155EEF]/40 flex items-center justify-center">
                    <SelectedIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#06B6D4] font-bold uppercase tracking-wider">
                      {t('home.architecture.previewBadge', `${selectedConfig.code} • LỚP ${selectedConfig.layer}`, {
                        code: selectedConfig.code,
                        layer: selectedConfig.layer
                      })}
                    </span>
                    <h3 className="text-base font-extrabold text-white leading-snug">
                      {selectedData.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[11px] block font-semibold uppercase tracking-wider mb-1">
                    {t('home.architecture.roleInSystemLabel', 'Vai trò trong hệ thống:')}
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedData.shortDesc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#06B6D4] font-semibold text-[11px]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>{t('home.architecture.benefitLabel', 'Lợi ích vận hành:')}</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {selectedData.keyBenefit}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {t('home.architecture.proprietaryNotice', 'Phân hệ thuộc bản quyền VMC Group')}
                </span>
                <button
                  type="button"
                  onClick={() => navigate(selectedConfig.deepLink)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{t('home.architecture.viewModuleDetail', 'Xem chi tiết phân hệ')}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
