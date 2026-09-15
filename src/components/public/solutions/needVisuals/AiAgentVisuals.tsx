import React, { useState } from 'react';
import { useI18n } from '../../../../i18n';
import {
  User, Bot, Database, FileCheck, ShieldCheck, History,
  ArrowRight, CheckCircle2, XCircle, AlertTriangle, Cpu, Lock,
  Layers, RefreshCw
} from 'lucide-react';

export const AiAgentVisuals: React.FC = () => {
  const { t, language } = useI18n();
  const isEn = language === 'en';
  const [activeStep, setActiveStep] = useState<number>(4); // step 4: Phê duyệt con người
  const [isApproved, setIsApproved] = useState<boolean | null>(null);

  const steps = [
    {
      id: 1,
      title: isEn ? '1. Enterprise Staff (User)' : '1. Cán bộ nhân viên (User)',
      icon: User,
      badge: isEn ? 'Initiating Agent' : 'Tác nhân kích hoạt',
      desc: isEn
        ? 'User submits an operational inquiry or prompt from Workspace (e.g., "Draft contract reconciliation record for An Phat client").'
        : 'Người dùng gửi câu hỏi nghiệp vụ hoặc lệnh tác vụ từ Workspace (VD: "Soạn thảo biên bản đối soát hợp đồng cho khách hàng An Phát").'
    },
    {
      id: 2,
      title: isEn ? '2. Specialized AI Agent' : '2. AI Agent chuyên trách',
      icon: Bot,
      badge: isEn ? 'Semantic Parsing' : 'Phân giải ngữ nghĩa',
      desc: isEn
        ? 'Agent parses intent, determines related scopes (Scope B CRM + Scope E Finance) and assigned permission boundaries.'
        : 'Agent bóc tách ý định (Intent), xác định phân hệ liên quan (Scope B CRM + Scope E Kế toán) và ranh giới quyền hạn được giao.'
    },
    {
      id: 3,
      title: isEn ? '3. Granted Context (RBAC)' : '3. Dữ liệu được cấp (RBAC)',
      icon: Database,
      badge: isEn ? 'Local Data Isolation' : 'Cô lập dữ liệu cục bộ',
      desc: isEn
        ? 'System validates authorization token: Agent only loads An Phat client data assigned to this staff; prevents data leakage outside scope.'
        : 'Hệ thống kiểm tra Token phân quyền: Agent CHỈ được nạp dữ liệu khách hàng An Phát mà nhân viên này phụ trách; hỗ trợ hạn chế rò rỉ dữ liệu ngoài phạm vi.'
    },
    {
      id: 4,
      title: isEn ? '4. Structured Proposal' : '4. Đề xuất có cấu trúc',
      icon: FileCheck,
      badge: isEn ? 'Draft Solution' : 'Dự thảo giải pháp',
      desc: isEn
        ? 'Agent synthesizes context, calculates figures, and compiles a complete draft proposal sent to the authorized reviewer dashboard.'
        : 'Agent tổng hợp thông tin, tính toán số liệu và soạn thảo bản đề xuất hoàn chỉnh dạng nháp gửi đến màn hình người có thẩm quyền.'
    },
    {
      id: 5,
      title: isEn ? '5. Human Approval Gate' : '5. Phê duyệt con người (Gate)',
      icon: ShieldCheck,
      badge: isEn ? 'Mandatory Gate' : 'Chốt chặn bắt buộc',
      desc: isEn
        ? 'Manager verifies every clause, amount, and clicks Approve or Request Revision. AI cannot dispatch externally without sign-off.'
        : 'Quản trị viên kiểm tra từng điều khoản, số tiền và bấm Phê duyệt hoặc Yêu cầu chỉnh sửa. AI không được tự động phát tán ra ngoài.'
    },
    {
      id: 6,
      title: isEn ? '6. Execution & Audit Log' : '6. Thực thi & Audit Log',
      icon: History,
      badge: isEn ? 'Audit Trail' : 'Lưu vết kiểm toán',
      desc: isEn
        ? 'Action is executed into database, official email dispatched, and structured audit log persisted with immutable timestamps.'
        : 'Hành động được ghi nhận vào cơ sở dữ liệu, gửi email chính thức và lưu nhật ký kiểm toán có cấu trúc (Audit Log).'
    }
  ];

  return (
    <div className="space-y-8">
      {/* 1. KEY ARCHITECTURAL WALKTHROUGH: 6-STEP ENTERPRISE AI GUARDRAIL */}
      <div className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-blue-800">
                {isEn ? 'AI Network Control Architecture' : 'Kiến trúc Kiểm soát Mạng lưới AI'}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {t('solutions.visuals.common.illustrativeScenario')}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white mt-1">
              {isEn
                ? 'Supervised Operating Flow: User → Agent → Context → Proposal → Approval → Audit Log'
                : 'Luồng Vận hành Có Giám sát: User → Agent → Context → Proposal → Approval → Audit Log'}
            </h3>
          </div>
          <div className="text-xs font-semibold text-slate-500 flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Zero-Trust AI Guardrails</span>
          </div>
        </div>

        {/* 6-step interactive pipeline bar */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {steps.map((step) => {
              const Icon = step.icon;
              const isCurrent = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white dark:bg-slate-800/70 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-white' : 'text-blue-600 dark:text-cyan-400'}`} />
                    <span className={`text-[10px] font-mono ${isCurrent ? 'text-blue-100' : 'text-slate-400'}`}>
                      {t('solutions.visuals.common.stepPrefix')} {step.id}
                    </span>
                  </div>
                  <div className="text-xs font-bold truncate">{step.title}</div>
                  <div className={`text-[10px] mt-1 truncate ${isCurrent ? 'text-blue-100' : 'text-slate-400'}`}>
                    {step.badge}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Simulation Display of Active Step */}
        <div className="p-4 sm:p-6">
          <div className="rounded-xl p-4 bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  {activeStep}
                </span>
                <span className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                  {steps[activeStep - 1].title}
                </span>
                <span className="text-xs text-blue-600 dark:text-cyan-400 font-medium">
                  ({steps[activeStep - 1].badge})
                </span>
              </div>
              <span className="text-xs text-slate-500">{steps[activeStep - 1].desc}</span>
            </div>

            {/* Interactive Sandbox for Step 4 & 5 (Proposal & Human Gate) */}
            <div className="p-4 rounded-xl bg-white dark:bg-[#0A1222] border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-blue-600" />
                  {t('solutions.visuals.aiAgent.proposalCardTitle')} {t('solutions.visuals.common.illustrativeScenario')}
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  {t('solutions.visuals.aiAgent.proposalCardSubtitle')}
                </span>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200/60 dark:border-slate-800 space-y-2">
                <p>
                  <strong>{isEn ? 'Client:' : 'Khách hàng:'}</strong> {isEn ? 'An Phat Technology JSC (Code: KH-2026-0842)' : 'Công ty Cổ phần Công nghệ An Phát (Mã: KH-2026-0842)'}
                </p>
                <p>
                  <strong>{isEn ? 'Proposal Content:' : 'Nội dung đề xuất:'}</strong>{' '}
                  {isEn
                    ? 'Reconciliation record for Phase 1 advance of Contract HD-2026/VMC-AP01. Proposed reconciliation amount based on source vouchers: 800,000,000 VND [Illustrative Data].'
                    : 'Biên bản đối soát tạm ứng đợt 1 cho Hợp đồng HD-2026/VMC-AP01. Số tiền đề xuất đối soát theo chứng từ mẫu: 800,000,000 VND [Dữ liệu minh họa].'}
                </p>
                <p className="text-[11px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2 rounded border border-amber-200 dark:border-amber-900/50 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {isEn
                      ? 'Audit Warning: Mandatory sign-off from Chief Financial Officer before dispatching reconciliation document to client.'
                      : 'Cảnh báo kiểm toán: Bắt buộc Giám đốc Tài chính bấm phê duyệt trước khi gửi biên bản cho khách hàng.'}
                  </span>
                </p>
              </div>

              {/* Human Gate Control */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500">
                  {isApproved === null && (
                    <span>
                      {t('solutions.visuals.common.status')}: {isEn ? 'Pending executive confirmation' : 'Đang chờ lãnh đạo bấm nút xác nhận'}
                    </span>
                  )}
                  {isApproved === true && (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> {t('solutions.visuals.aiAgent.approvedAlert')}
                    </span>
                  )}
                  {isApproved === false && (
                    <span className="text-rose-600 font-bold flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> {t('solutions.visuals.aiAgent.rejectedAlert')}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setIsApproved(true);
                      setActiveStep(6);
                    }}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{t('solutions.visuals.aiAgent.btnApprove')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsApproved(false);
                      setActiveStep(5);
                    }}
                    className="flex-1 sm:flex-initial px-3 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>{t('solutions.visuals.aiAgent.btnReject')}</span>
                  </button>
                  {isApproved !== null && (
                    <button
                      type="button"
                      onClick={() => setIsApproved(null)}
                      className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600"
                      title={isEn ? 'Reset simulation' : 'Thử lại mô phỏng'}
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECONDARY VISUAL: NETWORK ARCHITECTURE vs ROLE PORTAL */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-extrabold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
              {isEn
                ? 'Network Interoperability: 9 AI Copilots Across Enterprise Scopes'
                : 'Kiến trúc Liên thông Mạng lưới 9 AI Copilots theo Phân hệ'}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {isEn
                ? 'Clear distinction between network infrastructure (on this page) and individual operational Copilot roles (at /ai).'
                : 'Phân định rõ kiến trúc hạ tầng mạng lưới (tại trang này) so với danh mục các vai trò Copilot tác nghiệp (tại /ai).'}
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            {isEn ? '[Standardized Architecture]' : '[Kiến trúc chuẩn hóa]'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 block">
              {isEn ? '1. Executive Protocol Layer' : '1. Tầng Giao thức Điều hành (Executive)'}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>{isEn ? 'AI CEO:' : 'AI CEO:'}</strong>{' '}
              {isEn
                ? 'Coordinates consolidated metrics from Scope J (BI) and interfaces with specialized Agents; never accesses subordinate records without authorization.'
                : 'Điều phối số liệu tổng hợp từ Scope J (BI) và kết nối với các Agent chuyên trách; không can thiệp trực tiếp hồ sơ cấp dưới khi chưa có thẩm quyền.'}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 block">
              {isEn ? '2. Departmental Copilot Layer' : '2. Tầng Copilot Tác nghiệp Chức năng'}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>{isEn ? 'AI Sales, Marketing, CS, HR, Finance:' : 'AI Sales, Marketing, CSKH, HR, Finance:'}</strong>{' '}
              {isEn
                ? 'Operate within autonomous departmental modules, accessing data provisioned under strict zero-trust RBAC protocols.'
                : 'Hoạt động trong từng phân hệ nghiệp vụ độc lập, đọc dữ liệu được cấp phát qua giao thức RBAC nghiêm ngặt.'}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 block">
              {isEn ? '3. Knowledge & Automation Engine' : '3. Tầng Tri thức & Động cơ Tự động'}
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>{isEn ? 'AI Voice, Workflow, Search RAG:' : 'AI Voice, Workflow, Search RAG:'}</strong>{' '}
              {isEn
                ? 'Provide enterprise infrastructure services (call transcription, workflow routing, SOP RAG retrieval) enabling the entire network.'
                : 'Cung cấp dịch vụ hạ tầng (bóc băng cuộc gọi, định tuyến quy trình, trích xuất tài liệu SOP) phục vụ toàn bộ mạng lưới.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
