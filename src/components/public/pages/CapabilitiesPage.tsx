import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n/I18nContext';
import {
  Layers, Server, Users, Globe, Zap, Cpu, BarChart3, GraduationCap,
  CheckCircle2, Shield, Workflow, Check
} from 'lucide-react';

export interface CapabilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  sampleDeliverable: string;
}

export interface CapabilityGroup {
  id: string;
  groupNumber: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: CapabilityItem[];
}

export const CapabilitiesPage: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const { t } = useI18n();
  const [selectedGroupId, setSelectedGroupId] = useState<string>('grp_architecture');

  const capabilityGroups: CapabilityGroup[] = [
    {
      id: 'grp_architecture',
      groupNumber: '01',
      name: t('capabilities.grpArchitectureName'),
      tagline: t('capabilities.grpArchitectureTagline'),
      description: t('capabilities.grpArchitectureDesc'),
      capabilities: [
        {
          id: 'cap_1',
          title: t('capabilities.cap1Title'),
          tagline: t('capabilities.cap1Tagline'),
          description: t('capabilities.cap1Desc'),
          icon: Layers,
          sampleDeliverable: t('capabilities.cap1Deliverable')
        },
        {
          id: 'cap_7',
          title: t('capabilities.cap7Title'),
          tagline: t('capabilities.cap7Tagline'),
          description: t('capabilities.cap7Desc'),
          icon: BarChart3,
          sampleDeliverable: t('capabilities.cap7Deliverable')
        }
      ]
    },
    {
      id: 'grp_build',
      groupNumber: '02',
      name: t('capabilities.grpBuildName'),
      tagline: t('capabilities.grpBuildTagline'),
      description: t('capabilities.grpBuildDesc'),
      capabilities: [
        {
          id: 'cap_2',
          title: t('capabilities.cap2Title'),
          tagline: t('capabilities.cap2Tagline'),
          description: t('capabilities.cap2Desc'),
          icon: Server,
          sampleDeliverable: t('capabilities.cap2Deliverable')
        },
        {
          id: 'cap_4',
          title: t('capabilities.cap4Title'),
          tagline: t('capabilities.cap4Tagline'),
          description: t('capabilities.cap4Desc'),
          icon: Globe,
          sampleDeliverable: t('capabilities.cap4Deliverable')
        }
      ]
    },
    {
      id: 'grp_interconnect',
      groupNumber: '03',
      name: t('capabilities.grpInterconnectName'),
      tagline: t('capabilities.grpInterconnectTagline'),
      description: t('capabilities.grpInterconnectDesc'),
      capabilities: [
        {
          id: 'cap_3',
          title: t('capabilities.cap3Title'),
          tagline: t('capabilities.cap3Tagline'),
          description: t('capabilities.cap3Desc'),
          icon: Users,
          sampleDeliverable: t('capabilities.cap3Deliverable')
        },
        {
          id: 'cap_5',
          title: t('capabilities.cap5Title'),
          tagline: t('capabilities.cap5Tagline'),
          description: t('capabilities.cap5Desc'),
          icon: Zap,
          sampleDeliverable: t('capabilities.cap5Deliverable')
        },
        {
          id: 'cap_6',
          title: t('capabilities.cap6Title'),
          tagline: t('capabilities.cap6Tagline'),
          description: t('capabilities.cap6Desc'),
          icon: Cpu,
          sampleDeliverable: t('capabilities.cap6Deliverable')
        }
      ]
    },
    {
      id: 'grp_transfer',
      groupNumber: '04',
      name: t('capabilities.grpTransferName'),
      tagline: t('capabilities.grpTransferTagline'),
      description: t('capabilities.grpTransferDesc'),
      capabilities: [
        {
          id: 'cap_8',
          title: t('capabilities.cap8Title'),
          tagline: t('capabilities.cap8Tagline'),
          description: t('capabilities.cap8Desc'),
          icon: GraduationCap,
          sampleDeliverable: t('capabilities.cap8Deliverable')
        }
      ]
    }
  ];

  const activeGroup = capabilityGroups.find(g => g.id === selectedGroupId) || capabilityGroups[0];

  const phases = [
    {
      phase: 1,
      name: t('capabilities.phase1Name'),
      desc: t('capabilities.phase1Desc'),
      deliverables: [
        t('capabilities.phase1Deliverable1'),
        t('capabilities.phase1Deliverable2'),
        t('capabilities.phase1Deliverable3')
      ]
    },
    {
      phase: 2,
      name: t('capabilities.phase2Name'),
      desc: t('capabilities.phase2Desc'),
      deliverables: [
        t('capabilities.phase2Deliverable1'),
        t('capabilities.phase2Deliverable2'),
        t('capabilities.phase2Deliverable3')
      ]
    },
    {
      phase: 3,
      name: t('capabilities.phase3Name'),
      desc: t('capabilities.phase3Desc'),
      deliverables: [
        t('capabilities.phase3Deliverable1'),
        t('capabilities.phase3Deliverable2'),
        t('capabilities.phase3Deliverable3')
      ]
    },
    {
      phase: 4,
      name: t('capabilities.phase4Name'),
      desc: t('capabilities.phase4Desc'),
      deliverables: [
        t('capabilities.phase4Deliverable1'),
        t('capabilities.phase4Deliverable2'),
        t('capabilities.phase4Deliverable3')
      ]
    },
    {
      phase: 5,
      name: t('capabilities.phase5Name'),
      desc: t('capabilities.phase5Desc'),
      deliverables: [
        t('capabilities.phase5Deliverable1'),
        t('capabilities.phase5Deliverable2'),
        t('capabilities.phase5Deliverable3')
      ]
    },
    {
      phase: 6,
      name: t('capabilities.phase6Name'),
      desc: t('capabilities.phase6Desc'),
      deliverables: [
        t('capabilities.phase6Deliverable1'),
        t('capabilities.phase6Deliverable2'),
        t('capabilities.phase6Deliverable3')
      ]
    }
  ];

  return (
    <div className="space-y-20 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            {t('capabilities.badge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('capabilities.title')}
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            {t('capabilities.subtitle')}
          </p>
        </div>
      </section>

      {/* Visual Blueprint Centerpiece */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4]">
            {t('capabilities.blueprintBadge')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('capabilities.blueprintTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {t('capabilities.blueprintDesc')}
          </p>
        </div>

        {/* Interactive Architectural Blueprint Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                {t('capabilities.blueprintModelName')}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Shield className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>{t('capabilities.blueprintSecurityTag')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Layer 1 */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <Layers className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{t('capabilities.layer1Name')}</span>
              </div>
              <p className="text-xs text-slate-300">
                {t('capabilities.layer1Desc')}
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400">
                {t('capabilities.layer1Deliverable')}
              </div>
            </div>

            {/* Layer 2 */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Server className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{t('capabilities.layer2Name')}</span>
              </div>
              <p className="text-xs text-slate-300">
                {t('capabilities.layer2Desc')}
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400">
                {t('capabilities.layer2Deliverable')}
              </div>
            </div>

            {/* Layer 3 */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                <Workflow className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{t('capabilities.layer3Name')}</span>
              </div>
              <p className="text-xs text-slate-300">
                {t('capabilities.layer3Desc')}
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400">
                {t('capabilities.layer3Deliverable')}
              </div>
            </div>

            {/* Layer 4 */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{t('capabilities.layer4Name')}</span>
              </div>
              <p className="text-xs text-slate-300">
                {t('capabilities.layer4Desc')}
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400">
                {t('capabilities.layer4Deliverable')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Capability Groups Tabs & Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4]">
            {t('capabilities.groupsSectionBadge')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('capabilities.groupsSectionTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {t('capabilities.groupsSectionDesc')}
          </p>
        </div>

        {/* Group Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          {capabilityGroups.map((group) => {
            const isActive = group.id === selectedGroupId;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedGroupId(group.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#155EEF] text-white shadow-md'
                    : 'bg-white dark:bg-[#0D182E] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-300'
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                  {group.groupNumber}
                </span>
                <span>{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Group Overview Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/40 dark:from-[#0B172E] dark:to-[#0F1E3D] border border-blue-200 dark:border-blue-900/60 space-y-2">
          <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase">
            {t('capabilities.groupPrefix')} {activeGroup.groupNumber} • {activeGroup.tagline}
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {activeGroup.description}
          </p>
        </div>

        {/* Group Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeGroup.capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div
                key={cap.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col justify-between hover:border-[#155EEF] dark:hover:border-[#06B6D4] transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">{cap.title}</h3>
                  <div className="text-xs font-semibold text-[#06B6D4]">{cap.tagline}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{cap.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 -mx-6 -mb-6 p-4 rounded-b-2xl space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{t('capabilities.sampleDeliverablesLabel')}</span>
                  </div>
                  <p className="text-xs font-medium text-[#0B1F3A] dark:text-white">
                    {cap.sampleDeliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6 Implementation Phases as Timeline with Concrete Deliverables */}
      <section className="bg-slate-900 dark:bg-[#060D19] text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#06B6D4]">
              {t('capabilities.phasesSectionBadge')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t('capabilities.phasesSectionTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t('capabilities.phasesSectionDesc')}
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-slate-700 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            {phases.map((phase) => (
              <div key={phase.phase} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-[#06B6D4] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                </div>

                <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-3 max-w-4xl hover:border-slate-600 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-[#06B6D4] px-2.5 py-0.5 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                      {t('capabilities.phasePrefixLabel')} 0{phase.phase}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {t('capabilities.phaseDurationNote')}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white">{phase.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{phase.desc}</p>

                  <div className="pt-3 border-t border-slate-700/80 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      {t('capabilities.phaseDeliverablesTitle')}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-emerald-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1F3A] dark:bg-[#0A162B] text-white text-center space-y-4 border border-slate-800 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold">
            {t('capabilities.ctaTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t('capabilities.ctaDesc')}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
            >
              {t('capabilities.ctaButton')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
