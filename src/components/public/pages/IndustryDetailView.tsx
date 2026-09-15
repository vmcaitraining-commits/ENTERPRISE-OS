import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n';
import { detailedIndustriesData, IndustryDetailedConfig } from '../../../data/industryDetailedData';
import { IndustryJourneyVisual } from '../industries/IndustryJourneyVisual';
import { IndustryAiDemo } from '../industries/IndustryAiDemo';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  Layers,
  ChevronRight,
  Sparkles,
  BarChart3,
  GitCommit,
  Building,
  Briefcase,
  GraduationCap,
  Home,
  Factory,
  Truck,
  HardHat,
  Code2
} from 'lucide-react';

interface IndustryDetailViewProps {
  industrySlug: string;
}

const industryIconMap: Record<string, React.ReactNode> = {
  trade: <Building className="w-5 h-5 text-amber-500" />,
  service: <Briefcase className="w-5 h-5 text-blue-500" />,
  education: <GraduationCap className="w-5 h-5 text-emerald-500" />,
  'real-estate': <Home className="w-5 h-5 text-violet-500" />,
  manufacturing: <Factory className="w-5 h-5 text-orange-500" />,
  distribution: <Truck className="w-5 h-5 text-cyan-500" />,
  construction: <HardHat className="w-5 h-5 text-yellow-500" />,
  technology: <Code2 className="w-5 h-5 text-indigo-500" />
};

export const IndustryDetailView: React.FC<IndustryDetailViewProps> = ({ industrySlug }) => {
  const { navigate, openConsultationModal } = usePublicRouter();
  const { t, tRaw } = useI18n();

  const localizedData = tRaw<IndustryDetailedConfig>(`industries.sectors.${industrySlug}`);
  const fallbackData = detailedIndustriesData[industrySlug] || detailedIndustriesData['trade'];
  const data: IndustryDetailedConfig = localizedData || fallbackData;

  const handleOpenConsultation = () => {
    openConsultationModal('consultation', data.name);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 1. HERO NGÀNH + VISUAL BỐI CẢNH/NGHIỆP VỤ */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/80 overflow-hidden bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <button
              onClick={() => navigate('/industries')}
              className="hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {t('industries.detail.breadcrumb')}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-200 font-medium">{data.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
                {industryIconMap[industrySlug]}
                <span className="font-semibold text-white">{data.sectorCode}</span>
                <span className="text-slate-500">|</span>
                <span>{t('industries.detail.architectureBadge')}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('industries.detail.titlePrefix')} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
                  {data.name}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
                {data.tagline}
              </p>

              {/* Problem summary card */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-white block mb-1">{t('industries.detail.problemSummaryHeading')}</span>
                {data.heroProblemSummary}
              </div>

              {/* Quick CTA keeping industry preselected */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-950/50 cursor-pointer"
                >
                  <span>{t('industries.detail.surveyCta', { name: data.name })}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('daily-operation');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-700/80 transition-all cursor-pointer"
                >
                  <span>{t('industries.detail.viewDailyCta')}</span>
                </button>
              </div>
            </div>

            {/* Operating Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {t('industries.detail.snapshot.heading')}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t('industries.detail.snapshot.badge')}
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                    <div className="text-slate-400 mb-1">{t('industries.detail.snapshot.dailyVolumeLabel')}</div>
                    <div className="text-white font-semibold text-sm">{data.operatingSnapshot.dailyVolume}</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                    <div className="text-slate-400 mb-1">{t('industries.detail.snapshot.primaryChannelsLabel')}</div>
                    <div className="text-slate-200 text-sm font-medium">{data.operatingSnapshot.primaryChannels}</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                    <div className="text-slate-400 mb-1">{t('industries.detail.snapshot.keyConstraintLabel')}</div>
                    <div className="text-amber-300 text-sm font-medium">{data.operatingSnapshot.keyConstraint}</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                    <div className="text-slate-400 mb-1">{t('industries.detail.snapshot.complianceNoteLabel')}</div>
                    <div className="text-slate-300 text-xs font-sans leading-relaxed">{data.operatingSnapshot.complianceNote}</div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 font-mono italic">
                  {t('industries.detail.snapshot.disclaimer')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MỘT NGÀY VẬN HÀNH ĐIỂN HÌNH */}
      <section id="daily-operation" className="py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
              <Clock className="w-3.5 h-3.5" />
              {t('industries.detail.daily.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('industries.detail.daily.heading')}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {t('industries.detail.daily.subheading', { name: data.name })}
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-10">
            {data.dailyOperation.map((item: { time: string; title: string; actor: string; desc: string; systemAction: string }, idx: number) => (
              <div key={idx} className="relative pl-6 md:pl-8 group">
                {/* Timeline node badge */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-xs font-mono font-bold text-indigo-300 group-hover:scale-110 transition-transform shadow-md shadow-indigo-950">
                  {idx + 1}
                </div>

                {/* Time pill on desktop */}
                <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right font-mono text-sm font-bold text-indigo-400">
                  {item.time}
                </div>

                {/* Card content */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 hover:border-slate-700 transition-colors space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="md:hidden inline-block px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold">
                      {item.time}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {t('industries.detail.daily.actorLabel')}: {item.actor}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>

                  <div className="pt-3 border-t border-slate-800/80 flex items-start gap-2 text-xs text-emerald-300/90 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{t('industries.detail.daily.systemActionLabel')}: {item.systemAction}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ĐIỂM NGHẼN ĐƯỢC ĐÁNH DẤU TRÊN HÀNH TRÌNH */}
      <section className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryJourneyVisual steps={data.journeyVisualFlow} industryName={data.name} />
        </div>
      </section>

      {/* 4. CẤU HÌNH CÁC MODULE AI ENTERPRISE PHÙ HỢP */}
      <section className="py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <Layers className="w-3.5 h-3.5" />
              {t('industries.detail.modules.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('industries.detail.modules.heading', { name: data.name })}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {t('industries.detail.modules.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.configuredModules.map((mod: { scope: string; moduleName: string; inputData: string; coreProcess: string; outputData: string }, i: number) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 font-mono text-xs font-semibold border border-indigo-500/20">
                      {mod.scope}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{t('industries.detail.modules.interopLabel')}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">{mod.moduleName}</h3>

                  <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                    <div className="bg-slate-950 p-3 rounded border border-slate-800/80">
                      <span className="text-slate-400 block mb-1 font-semibold text-[11px] uppercase">{t('industries.detail.modules.inputDataLabel')}</span>
                      <span>{mod.inputData}</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded border border-slate-800/80">
                      <span className="text-indigo-400 block mb-1 font-semibold text-[11px] uppercase">{t('industries.detail.modules.coreProcessLabel')}</span>
                      <span className="font-sans text-xs text-slate-200">{mod.coreProcess}</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded border border-slate-800/80">
                      <span className="text-emerald-400 block mb-1 font-semibold text-[11px] uppercase">{t('industries.detail.modules.outputDataLabel')}</span>
                      <span className="font-sans text-xs text-slate-200">{mod.outputData}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MỘT DEMO AI ĐẶC THÙ NGÀNH */}
      <section className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryAiDemo demoData={data.aiSpecializedDemo} industryName={data.name} />
        </div>
      </section>

      {/* 6. ĐẦU RA VÀ CHỈ SỐ NÊN THEO DÕI */}
      <section className="py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              {t('industries.detail.kpi.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('industries.detail.kpi.heading')}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {t('industries.detail.kpi.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.trackedKpis.map((kpi: { frequency: string; metric: string; formula: string; targetBenchmark: string; businessImpact: string }, idx: number) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
                    <span>{t('industries.detail.kpi.kpiIndexLabel')} #{idx + 1}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">{kpi.frequency}</span>
                  </div>

                  <h3 className="text-base font-bold text-white">{kpi.metric}</h3>

                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                    <span className="text-slate-400 block mb-0.5 text-[10px] uppercase">{t('industries.detail.kpi.formulaLabel')}</span>
                    <span>{kpi.formula}</span>
                  </div>

                  <div className="p-2.5 rounded bg-indigo-950/40 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                    <span className="text-indigo-400 block mb-0.5 text-[10px] uppercase">{t('industries.detail.kpi.benchmarkLabel')}</span>
                    <span className="font-bold text-sm text-indigo-200">{kpi.targetBenchmark}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-200 block mb-0.5">{t('industries.detail.kpi.businessImpactLabel')}</strong>
                  {kpi.businessImpact}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs font-mono text-slate-500 text-center">
            {t('industries.detail.kpi.disclaimer')}
          </div>
        </div>
      </section>

      {/* 7. LỘ TRÌNH 3 GIAI ĐOẠN */}
      <section className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-medium mb-3">
              <GitCommit className="w-3.5 h-3.5" />
              {t('industries.detail.roadmap.badge')}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t('industries.detail.roadmap.heading')}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {t('industries.detail.roadmap.subheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.threeStageRoadmap.map((phase: { phase: string; timeline: string; title: string; focus: string; deliverables: string[] }, idx: number) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-4 relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-indigo-400">{phase.phase}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs">
                      {phase.timeline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">{phase.title}</h3>

                  <p className="text-xs text-slate-300 leading-relaxed">{phase.focus}</p>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      {t('industries.detail.roadmap.deliverablesLabel')}
                    </span>
                    <ul className="space-y-1.5">
                      {phase.deliverables.map((item: string, dIdx: number) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA GIỮ SẴN NGÀNH TRONG FORM */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            {t('industries.detail.cta.badge', { nameUpper: data.name.toUpperCase() })}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('industries.detail.cta.heading')}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('industries.detail.cta.description')}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-base transition-all shadow-xl shadow-indigo-950/60 cursor-pointer"
            >
              <span>{t('industries.detail.cta.submitButton', { name: data.name })}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => navigate('/industries')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-base border border-slate-700 transition-all cursor-pointer"
            >
              <span>{t('industries.detail.cta.exploreOtherButton')}</span>
            </button>
          </div>

          <div className="text-xs font-mono text-slate-500 pt-2">
            {t('industries.detail.cta.preselectedNote', { name: data.name })}
          </div>
        </div>
      </section>
    </div>
  );
};
