import React, { useState } from 'react';
import { NeedSolution } from '../../../types/website';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n';
import {
  ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, Database,
  Workflow, Sparkles, Layers, BarChart3, ShieldCheck, Lock,
  ChevronRight, Users, Mic, Globe, Clock, FileCheck, HelpCircle,
  Calendar, Check, ChevronDown, ExternalLink, ArrowUpRight
} from 'lucide-react';
import {
  CrmVisuals,
  AiAgentVisuals,
  VoiceVisuals,
  AutomationVisuals,
  WebsiteVisuals,
  BiVisuals
} from '../solutions/needVisuals';

interface NeedSolutionDetailViewProps {
  solution: NeedSolution;
}

export const NeedSolutionDetailView: React.FC<NeedSolutionDetailViewProps> = ({ solution }) => {
  const { navigate, openConsultationModal } = usePublicRouter();
  const { t, tRaw } = useI18n();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Render the dedicated product walkthrough visual based on solution slug
  const renderNeedVisual = () => {
    switch (solution.slug) {
      case 'crm':
        return <CrmVisuals />;
      case 'ai-agent':
        return <AiAgentVisuals />;
      case 'voice':
        return <VoiceVisuals />;
      case 'automation':
        return <AutomationVisuals />;
      case 'website':
        return <WebsiteVisuals />;
      case 'bi':
        return <BiVisuals />;
      default:
        return null;
    }
  };

  // Specific FAQs tailored to each need solution from i18n
  const needData = tRaw<any>(`solutions.needs.${solution.slug}`);
  const localizedName = needData?.name || solution.name;
  const localizedTagline = needData?.tagline || solution.tagline;
  const localizedCoreValue = needData?.coreValue || solution.coreValue;
  const localizedProblems: string[] = needData?.problems || solution.problems;
  const localizedOverview = needData?.solutionOverview || solution.solutionOverview;
  const localizedDataTypes: string[] = needData?.dataTypes || solution.dataTypes;
  const localizedWorkflow = {
    input: needData?.operatingWorkflow?.input || solution.operatingWorkflow.input,
    process: needData?.operatingWorkflow?.process || solution.operatingWorkflow.process,
    aiAutomation: needData?.operatingWorkflow?.aiAutomation || solution.operatingWorkflow.aiAutomation,
    humanControl: needData?.operatingWorkflow?.humanControl || solution.operatingWorkflow.humanControl,
    output: needData?.operatingWorkflow?.output || solution.operatingWorkflow.output,
  };
  const localizedFeatures: Array<{ title: string; description: string }> = needData?.keyFeatures || solution.keyFeatures;
  const localizedAiAssistance = {
    reads: needData?.aiAssistance?.reads || solution.aiAssistance.reads,
    analyzes: needData?.aiAssistance?.analyzes || solution.aiAssistance.analyzes,
    proposes: needData?.aiAssistance?.proposes || solution.aiAssistance.proposes,
    executes: needData?.aiAssistance?.executes || solution.aiAssistance.executes,
    requiresApproval: needData?.aiAssistance?.requiresApproval || solution.aiAssistance.requiresApproval,
  };
  const localizedConnections: string[] = needData?.systemConnections || solution.systemConnections;
  const localizedReports: string[] = needData?.reportTypes || solution.reportTypes;
  const localizedSecurity = {
    rbac: needData?.securityAndGovernance?.rbac || solution.securityAndGovernance.rbac,
    auditLog: needData?.securityAndGovernance?.auditLog || solution.securityAndGovernance.auditLog,
    approvalMechanism: needData?.securityAndGovernance?.approvalMechanism || solution.securityAndGovernance.approvalMechanism,
    dataScope: needData?.securityAndGovernance?.dataScope || solution.securityAndGovernance.dataScope,
  };

  const faqs = needData?.faqs || [];

  // 5-step implementation roadmap from i18n
  const roadmapSteps = tRaw<Array<{ step: string; duration: string; title: string; desc: string }>>('solutions.needDetail.roadmapSteps') || [
    {
      step: 'Giai đoạn 1',
      duration: 'Tuần 1',
      title: 'Khảo sát hiện trạng & Xác định phạm vi (Scope Definition)',
      desc: 'Phân tích các điểm nghẽn thực tế, rà soát quy trình SOP hiện hành và thiết lập bộ chỉ tiêu KPI kỳ vọng của doanh nghiệp.'
    },
    {
      step: 'Giai đoạn 2',
      duration: 'Tuần 2',
      title: 'Chuẩn hóa cấu trúc & Làm sạch dữ liệu nguồn (Data Readiness)',
      desc: 'Thiết kế cấu trúc bảng dữ liệu, chuẩn hóa danh mục khách hàng/chứng từ và thiết lập chính sách phân quyền RBAC.'
    },
    {
      step: 'Giai đoạn 3',
      duration: 'Tuần 3',
      title: 'Cấu hình luồng nghiệp vụ & Tích hợp phân hệ (Integration)',
      desc: 'Thiết lập các kịch bản tự động hóa, cấu hình rào chắn AI Guardrails và kết nối liên thông với các phân hệ liên quan.'
    },
    {
      step: 'Giai đoạn 4',
      duration: 'Tuần 4',
      title: 'Đào tạo nhân sự & Chạy thử nghiệm có giám sát (Pilot Run)',
      desc: 'Tập huấn cán bộ nhân viên theo từng vai trò, vận hành song song thử nghiệm và rà soát các chốt chặn phê duyệt thực tế.'
    },
    {
      step: 'Giai đoạn 5',
      duration: 'Tuần 5+',
      title: 'Bàn giao chính thức & Bảo hành tối ưu hóa liên tục',
      desc: 'Nghiệm thu đưa vào vận hành chính thức, thiết lập cơ chế giám sát SLA và định kỳ đánh giá hiệu quả số hóa.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* ========================================================================= */}
      {/* 1. HERO CÓ DEMO CHÍNH (KEY PRODUCT WALKTHROUGH DEMO) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-10 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb & Subtitle */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/solutions')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('solutions.needDetail.backToSolutions')}</span>
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('solutions.needDetail.badge')}</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {t('solutions.needDetail.productWalkthrough')}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {localizedName}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {localizedTagline}
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-3xl text-xs sm:text-sm text-blue-100/90 leading-relaxed flex items-start gap-2.5">
              <span className="font-bold text-[#06B6D4] shrink-0 uppercase tracking-wider text-xs mt-0.5">
                {t('solutions.needDetail.coreValueLabel')}
              </span>
              <span>{localizedCoreValue}</span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openConsultationModal('consultation')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>{t('solutions.needDetail.ctaConsultation', { name: localizedName })}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/ai-enterprise')}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/15"
              >
                <span>{t('solutions.needDetail.ctaArchitecture')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Scope distinction callouts */}
            {solution.slug === 'crm' && (
              <div className="p-3.5 rounded-xl bg-blue-900/40 border border-blue-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-200">
                  <span className="font-semibold text-blue-300">{t('solutions.needDetail.crmDistinctionTitle')} </span>
                  {t('solutions.needDetail.crmDistinctionText')}
                </div>
                <button
                  onClick={() => navigate('/solutions/sales')}
                  className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{t('solutions.needDetail.crmDistinctionLink')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {solution.slug === 'ai-agent' && (
              <div className="p-3.5 rounded-xl bg-purple-900/40 border border-purple-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-200">
                  <span className="font-semibold text-purple-300">{t('solutions.needDetail.aiAgentDistinctionTitle')} </span>
                  {t('solutions.needDetail.aiAgentDistinctionText')}
                </div>
                <button
                  onClick={() => navigate('/ai')}
                  className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{t('solutions.needDetail.aiAgentDistinctionLink')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {solution.slug === 'voice' && (
              <div className="p-3.5 rounded-xl bg-cyan-900/40 border border-cyan-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-200">
                  <span className="font-semibold text-cyan-300">{t('solutions.needDetail.voiceDistinctionTitle')} </span>
                  {t('solutions.needDetail.voiceDistinctionText')}
                </div>
                <button
                  onClick={() => navigate('/ai/voice')}
                  className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{t('solutions.needDetail.voiceDistinctionLink')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* KEY VISUAL DEMO MOUNTED DIRECTLY IN HERO REGION */}
          <div className="pt-2">
            <div className="flex items-center justify-between pb-2 text-xs text-slate-400 font-mono">
              <span>{t('solutions.needDetail.interactiveDemoTitle')}</span>
              <span>{t('solutions.needDetail.interactiveDemoSubtitle')}</span>
            </div>
            {renderNeedVisual()}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* ========================================================================= */}
        {/* 2. VẤN ĐỀ VÀ KẾT QUẢ MONG MUỐN (BEFORE & AFTER) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white">
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
              {t('solutions.needDetail.problemsTitle')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            {t('solutions.needDetail.problemsSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* Before: Điểm nghẽn */}
            <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>{t('solutions.needDetail.problemsTitle')}</span>
              </div>
              <div className="space-y-2.5">
                {localizedProblems.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After: Kết quả số hóa */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t('solutions.needDetail.overviewTitle')}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {localizedOverview}
              </p>
              <div className="pt-2 border-t border-emerald-200/80 dark:border-emerald-900/60 space-y-2">
                <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase block">
                  {t('solutions.needDetail.dataTypesTitle')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {localizedDataTypes.map((item, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-white dark:bg-slate-900/60 border border-emerald-100 dark:border-emerald-950 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WALKTHROUGH LUỒNG VẬN HÀNH (OPERATING WORKFLOW 5 BƯỚC) */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
                <Workflow className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  {t('solutions.needDetail.workflowTitle')}
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('solutions.needDetail.workflowSubtitle')}
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">[SOP]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  STEP 1
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">INPUT</span>
              </div>
              <h3 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('solutions.needDetail.workflowInput')}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{localizedWorkflow.input}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
                  STEP 2
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">PROCESS</span>
              </div>
              <h3 className="text-xs font-bold text-[#0B1F3A] dark:text-white">{t('solutions.needDetail.workflowProcess')}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{localizedWorkflow.process}</p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                  STEP 3
                </span>
                <span className="text-[10px] font-mono font-bold text-indigo-400">AI / AUTO</span>
              </div>
              <h3 className="text-xs font-bold text-indigo-950 dark:text-indigo-200">{t('solutions.needDetail.workflowAi')}</h3>
              <p className="text-xs text-indigo-900/80 dark:text-indigo-300/80 leading-relaxed">{localizedWorkflow.aiAutomation}</p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300">
                  STEP 4
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-500">CONTROL</span>
              </div>
              <h3 className="text-xs font-bold text-amber-950 dark:text-amber-200">{t('solutions.needDetail.workflowHuman')}</h3>
              <p className="text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed">{localizedWorkflow.humanControl}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300">
                  STEP 5
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-400">OUTPUT</span>
              </div>
              <h3 className="text-xs font-bold text-emerald-950 dark:text-emerald-200">{t('solutions.needDetail.workflowOutput')}</h3>
              <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 leading-relaxed">{localizedWorkflow.output}</p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TÍNH NĂNG CÓ PREVIEW (KEY FEATURES WITH PREVIEW) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white">
                <Layers className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">
                  {t('solutions.needDetail.featuresTitle')}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {t('solutions.needDetail.featuresSubtitle')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
            {localizedFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#155EEF] dark:text-[#06B6D4] font-extrabold text-xs flex items-center justify-center border border-blue-200 dark:border-blue-900">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span>{t('solutions.needDetail.featuresTitle')}</span>
                  <span className="text-emerald-600">✓ Core</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. AI, TỰ ĐỘNG HÓA VÀ ĐIỂM PHÊ DUYỆT (HUMAN-IN-THE-LOOP) */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
                <Sparkles className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  {t('solutions.needDetail.aiSectionTitle')}
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('solutions.needDetail.aiSectionSubtitle')}
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>Human-in-the-Loop</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-cyan-400 uppercase tracking-wider block">
                {t('solutions.needDetail.aiReads')}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {localizedAiAssistance.reads}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-cyan-400 uppercase tracking-wider block">
                {t('solutions.needDetail.aiAnalyzes')}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {localizedAiAssistance.analyzes}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-cyan-400 uppercase tracking-wider block">
                {t('solutions.needDetail.aiProposes')}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {localizedAiAssistance.proposes}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-cyan-400 uppercase tracking-wider block">
                {t('solutions.needDetail.aiExecutes')}
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {localizedAiAssistance.executes}
              </p>
            </div>

            {/* Human approval boundary */}
            <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 md:col-span-2 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
                <Lock className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {t('solutions.needDetail.aiApprovalRequired')}
                </span>
              </div>
              <p className="text-xs text-amber-950 dark:text-amber-200 font-medium leading-relaxed">
                {localizedAiAssistance.requiresApproval}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. TÍCH HỢP / LIÊN THÔNG THEO BẢN ĐỒ SCOPE A-K */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <Workflow className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  {t('solutions.needDetail.connectionsTitle')}
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('solutions.needDetail.connectionsSubtitle')}
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">A–K</span>
          </div>

          <div className="space-y-2.5 pt-1">
            {localizedConnections.map((conn, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{conn}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. CHỈ SỐ THEO DÕI (METRICS & REPORTS) */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
                <BarChart3 className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  {t('solutions.needDetail.reportsTitle')}
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('solutions.needDetail.reportsSubtitle')}
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">[KPI/BI]</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {localizedReports.map((rep, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-start gap-3"
              >
                <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{rep}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. BẢO MẬT ĐẶC THÙ & LIÊN KẾT VỀ AI ENTERPRISE */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#070F1E] text-white shadow-md space-y-6 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <ShieldCheck className="w-5 h-5" />
                <h2 className="text-base sm:text-lg font-extrabold text-white">
                  {t('solutions.needDetail.securityTitle')}
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {t('solutions.needDetail.securitySubtitle')}
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Zero-Trust</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">{t('solutions.needDetail.secRbac')}</span>
              <p className="text-xs text-slate-300 leading-relaxed">{localizedSecurity.rbac}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">{t('solutions.needDetail.secAudit')}</span>
              <p className="text-xs text-slate-300 leading-relaxed">{localizedSecurity.auditLog}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">{t('solutions.needDetail.secApproval')}</span>
              <p className="text-xs text-slate-300 leading-relaxed">{localizedSecurity.approvalMechanism}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">{t('solutions.needDetail.secScope')}</span>
              <p className="text-xs text-slate-300 leading-relaxed">{localizedSecurity.dataScope}</p>
            </div>
          </div>

          {/* DẪN VỀ KIẾN TRÚC BẢO MẬT CHUNG AI ENTERPRISE */}
          <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <strong className="text-white block">
                {t('solutions.needDetail.connectionsTitle')}
              </strong>
              <p className="text-slate-300 text-[11px]">
                {t('solutions.needDetail.connectionsSubtitle')}
              </p>
            </div>
            <button
              onClick={() => navigate('/ai-enterprise')}
              className="px-4 py-2 rounded-lg bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
            >
              <span>{t('solutions.needDetail.ctaArchitecture')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. LỘ TRÌNH TRIỂN KHAI (5 GIAI ĐOẠN CHUẨN) */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white">
                <Calendar className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
                <h2 className="text-base sm:text-lg font-extrabold">
                  {t('solutions.needDetail.roadmapTitle')}
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('solutions.needDetail.roadmapSubtitle')}
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-400">4–6 Weeks</span>
          </div>

          <div className="space-y-3 pt-1">
            {roadmapSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white">
                        {item.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Sign-off
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. FAQ NGẮN THEO ĐÚNG GIẢI PHÁP */}
        {/* ========================================================================= */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
            <HelpCircle className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
            <div>
              <h2 className="text-base sm:text-lg font-extrabold">
                {t('solutions.needDetail.faqTitle')}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('solutions.needDetail.faqSubtitle')}
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white dark:bg-[#0D182E] text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. CTA (CALL TO ACTION) */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1F3A] to-[#155EEF] text-white shadow-xl text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t('solutions.needDetail.ctaTitle', { name: localizedName })}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              {t('solutions.needDetail.ctaDesc')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-white text-[#0B1F3A] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              {t('solutions.needDetail.ctaConsultationBtn', { name: localizedName })}
            </button>
            <button
              onClick={() => navigate('/ai-enterprise')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/20"
            >
              {t('solutions.needDetail.ctaTrialBtn')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
