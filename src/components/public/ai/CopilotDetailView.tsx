import React from 'react';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, Database, Lock, 
  FileSpreadsheet, Users, Clock, Target, Calendar, Sparkles, Check, ChevronRight
} from 'lucide-react';
import { CopilotDetailedInfo } from '../../../data/aiCopilotDetailedData';
import { useI18n } from '../../../i18n';
import { CeoBriefVisual } from './visuals/CeoBriefVisual';
import { SalesLeadVisual } from './visuals/SalesLeadVisual';
import { MarketingChannelVisual } from './visuals/MarketingChannelVisual';
import { CsTicketVisual } from './visuals/CsTicketVisual';
import { HrExceptionVisual } from './visuals/HrExceptionVisual';
import { FinanceReconcileVisual } from './visuals/FinanceReconcileVisual';
import { VoiceDialogueVisual } from './visuals/VoiceDialogueVisual';
import { WorkflowBottleneckVisual } from './visuals/WorkflowBottleneckVisual';
import { RagSearchVisual } from './visuals/RagSearchVisual';

interface CopilotDetailViewProps {
  data: CopilotDetailedInfo;
  onOpenConsultation: (topic: string) => void;
  onNavigate: (path: string) => void;
}

export const CopilotDetailView: React.FC<CopilotDetailViewProps> = ({
  data,
  onOpenConsultation,
  onNavigate
}) => {
  const { t, tRaw } = useI18n();

  // Localized copilot data override (e.g. for CEO copilot in EN/VI)
  const localizedCopilot = tRaw<Partial<CopilotDetailedInfo>>(`aiCopilots.copilots.${data.slug}`);
  const copilotData: CopilotDetailedInfo = localizedCopilot ? {
    ...data,
    ...localizedCopilot,
    heroSample: {
      ...data.heroSample,
      ...(localizedCopilot.heroSample || {})
    },
    demoSpec: {
      ...data.demoSpec,
      ...(localizedCopilot.demoSpec || {})
    },
    governance: {
      ...data.governance,
      ...(localizedCopilot.governance || {})
    },
    taskDivision: {
      ...data.taskDivision,
      ...(localizedCopilot.taskDivision || {})
    },
    pilotPlan: {
      ...data.pilotPlan,
      ...(localizedCopilot.pilotPlan || {})
    },
    beforeAfter: localizedCopilot.beforeAfter || data.beforeAfter,
    metrics: localizedCopilot.metrics || data.metrics
  } : data;

  // Render visual component based on slug
  const renderVisual = () => {
    switch (data.slug) {
      case 'ceo':
        return <CeoBriefVisual />;
      case 'sales':
        return <SalesLeadVisual />;
      case 'marketing':
        return <MarketingChannelVisual />;
      case 'customer-service':
        return <CsTicketVisual />;
      case 'hr':
        return <HrExceptionVisual />;
      case 'finance':
        return <FinanceReconcileVisual />;
      case 'voice':
        return <VoiceDialogueVisual />;
      case 'workflow':
        return <WorkflowBottleneckVisual />;
      case 'rag':
        return <RagSearchVisual />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* SECTION 1: HERO CÓ OUTPUT MẪU */}
      <section id="hero-sample-output" className="space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> {t('aiCopilots.detail.heroBadge', 'Chuyên môn Nghiệp vụ • {roleTitle}', { roleTitle: copilotData.roleTitle })}
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            {copilotData.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
            {copilotData.shortTagline}
          </p>
          <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {t('aiCopilots.detail.targetAudienceLabel', 'Đối tượng phục vụ:')}
            </span>
            <span>{copilotData.targetAudience}</span>
          </div>
        </div>

        {/* Visual Output Card */}
        <div className="pt-2">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {t('aiCopilots.detail.outputPreviewLabel', 'Bản xem trước Output thực tế của {name}:', { name: copilotData.name })}
            </span>
            <span className="italic">{t('aiCopilots.detail.simulatedDataNote', 'Dữ liệu mô phỏng theo nghiệp vụ thực tế')}</span>
          </div>
          {renderVisual()}
        </div>
      </section>

      {/* SECTION 2: TÁC VỤ TRƯỚC / SAU KHI CÓ COPILOT */}
      <section id="before-after-matrix" className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {t('aiCopilots.detail.beforeAfterBadge', 'So sánh quy trình')}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {t('aiCopilots.detail.beforeAfterTitle', 'Thay Đổi Quy Trình Trước & Sau Khi Có Copilot')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1.5">
            {t('aiCopilots.detail.beforeAfterDesc', 'Chuyển dịch thời gian của nhân sự từ việc tìm kiếm, sao chép thủ công sang việc kiểm soát và ra quyết định.')}
          </p>
        </div>

        <div className="space-y-4">
          {copilotData.beforeAfter.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                  0{index + 1}
                </span>
                {item.task}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs sm:text-sm">
                {/* Before */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-rose-600 dark:text-rose-400 font-bold">
                    <span>{t('aiCopilots.detail.beforeTitle', 'Trước khi có Copilot (Thủ công)')}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300">
                      {item.before.timeSpent}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.before.process}
                  </p>
                  <div className="text-xs text-rose-600 dark:text-rose-400 pt-1 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{t('aiCopilots.detail.bottleneckLabel', 'Nút thắt:')} {item.before.painPoint}</span>
                  </div>
                </div>

                {/* After */}
                <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/50 space-y-2">
                  <div className="flex items-center justify-between text-emerald-700 dark:text-emerald-400 font-bold">
                    <span>{t('aiCopilots.detail.afterTitle', 'Sau khi có Copilot (AI hỗ trợ)')}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      {item.after.timeSpent}
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.after.process}
                  </p>
                  <div className="text-xs text-emerald-700 dark:text-emerald-400 pt-1 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{t('aiCopilots.detail.humanRoleLabel', 'Vai trò con người:')} {item.after.humanRole}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: DEMO CÓ NGUỒN DỮ LIỆU */}
      <section id="demo-data-sources" className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-8">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {t('aiCopilots.detail.dataSourcesBadge', 'Cơ sở dữ liệu thực thi')}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {t('aiCopilots.detail.dataSourcesTitle', 'Nguồn Dữ Liệu & Phương Thức Đồng Bộ')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            {copilotData.demoSpec.sourceDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {copilotData.demoSpec.dataSources.map((source, idx) => (
            <div 
              key={idx}
              className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Database className="w-4 h-4" />
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                  {source.syncMode}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                {source.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('aiCopilots.detail.dataTypeLabel', 'Loại dữ liệu:')} {source.type}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3.5 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 rounded-xl text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span><strong>{t('aiCopilots.detail.transparencyNotice', 'Lưu ý minh bạch:')}</strong> {copilotData.demoSpec.disclaimer}</span>
        </div>
      </section>

      {/* SECTION 4: DỮ LIỆU VÀ QUYỀN TRUY CẬP (GOVERNANCE & RBAC) */}
      <section id="governance-and-rbac" className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {t('aiCopilots.detail.governanceBadge', 'Bảo mật & Ranh giới')}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {t('aiCopilots.detail.governanceTitle', 'Quyền Truy Cập Dữ Liệu & Kiểm Soát Phân Quyền (RBAC)')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            {t('aiCopilots.detail.governanceDesc', 'Dữ liệu được phân tách theo tenant, phạm vi truy cập và cấu hình của hệ thống. Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Allowed vs Prohibited Data */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {t('aiCopilots.detail.allowedDataTitle', 'Dữ liệu AI được phép đọc (Chỉ đọc - Read-only):')}
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {copilotData.governance.allowedData.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 mb-2">
                <Lock className="w-4 h-4 text-rose-500" /> {t('aiCopilots.detail.prohibitedDataTitle', 'Dữ liệu ngoài phạm vi truy cập (Không thuộc quyền đọc):')}
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {copilotData.governance.prohibitedData.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RBAC Rules and Audit Logs */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
                <Users className="w-4 h-4 text-primary" /> {t('aiCopilots.detail.rbacRulesTitle', 'Nguyên tắc phân quyền theo vai trò (RBAC):')}
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {copilotData.governance.rbacRules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-2">
                <FileSpreadsheet className="w-4 h-4 text-primary" /> {t('aiCopilots.detail.auditTrailTitle', 'Cơ chế ghi nhật ký kiểm toán (Audit Trail):')}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2 italic">
                {t('aiCopilots.detail.auditTrailDesc', 'Các hoạt động quan trọng có thể được ghi nhận vào nhật ký kiểm toán theo cấu hình hệ thống, phục vụ truy vết và đối soát.')}
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {copilotData.governance.auditLogMechanisms.map((mech, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>{mech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TÁC VỤ TỰ ĐỘNG VÀ ĐIỂM BẮT BUỘC PHÊ DUYỆT */}
      <section id="automation-vs-human-in-the-loop" className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {t('aiCopilots.detail.hitlBadge', 'Human-in-the-Loop')}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {t('aiCopilots.detail.hitlTitle', 'Phân Định Tác Vụ Tự Động & Điểm Chốt Chặn Bắt Buộc Phê Duyệt')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            {t('aiCopilots.detail.hitlDesc', 'AI xử lý các tác vụ lặp lại ít rủi ro; mọi quyết định tài chính, nhân sự hoặc phát hành ra bên ngoài đều bắt buộc có con người kiểm tra.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Automated Tasks */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
              <Sparkles className="w-4 h-4 text-emerald-600" /> {t('aiCopilots.detail.safeAutomationTitle', 'Tác vụ AI tự động thực thi (Safe Automation)')}
            </h3>
            <div className="space-y-2.5">
              {copilotData.taskDivision.automatedTasks.map((task, i) => (
                <div key={i} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex justify-between">
                    <span>{task.task}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {task.boundary}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                    {t('aiCopilots.detail.systemOutputLabel', 'Đầu ra hệ thống:')} {task.systemOutput}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Approval Checkpoints */}
          <div className="p-5 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 space-y-3">
            <h3 className="font-bold text-amber-900 dark:text-amber-200 text-sm flex items-center gap-2 pb-2 border-b border-amber-200 dark:border-amber-900/60">
              <ShieldCheck className="w-4 h-4 text-amber-600" /> {t('aiCopilots.detail.approvalGatesTitle', 'Điểm chốt chặn bắt buộc phê duyệt (Approval Gates)')}
            </h3>
            <div className="space-y-2.5">
              {copilotData.taskDivision.mandatoryApprovals.map((chk, i) => (
                <div key={i} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-amber-200/70 dark:border-amber-900/40 text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex justify-between">
                    <span>{chk.checkpoint}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-semibold">
                      {t('aiCopilots.detail.approverLabel', 'Duyệt bởi:')} {chk.approverRole}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px]">
                    {t('aiCopilots.detail.reasonLabel', 'Lý do bắt buộc:')} {chk.reason}
                  </p>
                  <p className="text-rose-600 dark:text-rose-400 text-[10px] italic">
                    {t('aiCopilots.detail.rejectedActionLabel', 'Nếu từ chối:')} {chk.actionIfRejected}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CHỈ SỐ DÙNG ĐỂ ĐO THỬ NGHIỆM (PILOT METRICS) */}
      <section id="pilot-metrics" className="space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {t('aiCopilots.detail.pilotMetricsBadge', 'Đo lường khoa học')}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {t('aiCopilots.detail.pilotMetricsTitle', 'Bộ Chỉ Số Mục Tiêu Đo Lường Thử Nghiệm Pilot [Tham Khảo]')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            {t('aiCopilots.detail.pilotMetricsDesc', 'Các chỉ số và mốc đánh giá dưới đây là chỉ số mục tiêu pilot tham khảo, được thiết lập để đo lường trong giai đoạn thử nghiệm có kiểm soát, không phải cam kết hiệu năng thương mại cố định.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {copilotData.metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span className="font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                    {t('aiCopilots.detail.frequencyLabel', 'Kỳ đo:')} {metric.frequency}
                  </span>
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  {metric.name}
                </h3>
                <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <p><strong>{t('aiCopilots.detail.formulaLabel', 'Công thức:')}</strong> {metric.formula}</p>
                  <p><strong>{t('aiCopilots.detail.metricDataSourceLabel', 'Nguồn dữ liệu:')}</strong> {metric.dataSource}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 block">
                  {t('aiCopilots.detail.targetBenchmarkLabel', '[Mục tiêu pilot tham khảo]:')}
                </span>
                <span className="font-bold text-primary text-xs sm:text-sm">
                  {metric.targetBenchmark}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: CÁCH TRIỂN KHAI MỘT PILOT NHỎ */}
      <section id="pilot-roadmap" className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-8 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {t('aiCopilots.detail.pilotRoadmapBadge', 'Lộ trình triển khai')}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {t('aiCopilots.detail.pilotRoadmapTitle', 'Cách Triển Khai Một Pilot Nhỏ ({duration})', { duration: copilotData.pilotPlan.duration })}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            {t('aiCopilots.detail.pilotRoadmapDesc', 'Khuyến nghị phạm vi hẹp để kiểm soát rủi ro và đo lường kết quả thực tế trước khi nhân rộng toàn doanh nghiệp.')}
          </p>
          <div className="mt-2 p-3 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 rounded-xl text-xs text-slate-700 dark:text-slate-300 space-y-1">
            <p>
              <strong>{t('aiCopilots.detail.deploymentPolicyLabel', 'Chính sách triển khai:')}</strong>{' '}
              {t('aiCopilots.detail.deploymentPolicyText', 'Pilot theo giai đoạn. Thời lượng phụ thuộc phạm vi dữ liệu, mức độ tích hợp, yêu cầu bảo mật và tiêu chí nghiệm thu của từng doanh nghiệp.')}
            </p>
            <p className="text-slate-500">
              {t('aiCopilots.detail.recommendedScopeLabel', 'Phạm vi khuyến nghị:')}{' '}
              <strong>{copilotData.pilotPlan.recommendedScope}</strong>
            </p>
          </div>
        </div>

        {/* Pilot roadmap timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {copilotData.pilotPlan.pilotSteps.map((step, idx) => (
            <div 
              key={idx}
              className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3"
            >
              <div>
                <span className="text-xs font-bold text-primary px-2 py-0.5 rounded bg-primary/10">
                  {step.week}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mt-2">
                  {step.phase}
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {step.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-1.5">
                      <span className="text-primary font-bold">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                <span className="text-slate-400 block">{t('aiCopilots.detail.deliverableLabel', 'Bàn giao:')}</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Go / No-Go Criteria */}
        <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {t('aiCopilots.detail.goNoGoTitle', 'Tiêu chí nghiệm thu Pilot (Go / No-Go Criteria)')}
          </h3>
          <p className="text-xs text-slate-500">
            {t('aiCopilots.detail.goNoGoDesc', 'Dự án chỉ được quyết định nhân rộng chính thức khi thỏa mãn 100% các điều kiện an toàn sau:')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            {copilotData.pilotPlan.goNoGoCriteria.map((crit, cIdx) => (
              <div key={cIdx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                <span>{crit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA HÀNH ĐỘNG */}
      <section id="copilot-cta" className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="max-w-xl space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {t('aiCopilots.detail.ctaTitle', 'Sẵn Sàng Triển Khai Pilot Thử Nghiệm Cho {name}?', { name: copilotData.name })}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('aiCopilots.detail.ctaDesc', 'Chuyên gia chuyển đổi số VMC sẽ cùng đội ngũ của bạn khảo sát dữ liệu nguồn, thiết lập các chốt chặn an toàn và đồng hành triển khai pilot theo giai đoạn phù hợp với thực tế doanh nghiệp.')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenConsultation(`Đăng ký khảo sát Pilot: ${copilotData.name}`)}
            className="px-6 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {t('aiCopilots.detail.ctaSurveyBtn', 'Đăng ký khảo sát Pilot')} <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/ai')}
            className="px-4 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl border border-slate-300 dark:border-slate-700 transition-colors text-center cursor-pointer"
          >
            {t('aiCopilots.detail.ctaOtherCopilotsBtn', 'Xem 8 Copilot khác')}
          </button>
        </div>
      </section>
    </div>
  );
};
