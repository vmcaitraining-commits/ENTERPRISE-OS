import React, { useState } from 'react';
import {
  User, Bot, Database, FileCheck, ShieldCheck, History,
  ArrowRight, CheckCircle2, XCircle, AlertTriangle, Cpu, Lock,
  Layers, RefreshCw
} from 'lucide-react';

export const AiAgentVisuals: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(4); // step 4: Phê duyệt con người
  const [isApproved, setIsApproved] = useState<boolean | null>(null);

  const steps = [
    {
      id: 1,
      title: '1. Cán bộ nhân viên (User)',
      icon: User,
      badge: 'Tác nhân kích hoạt',
      desc: 'Người dùng gửi câu hỏi nghiệp vụ hoặc lệnh tác vụ từ Workspace (VD: "Soạn thảo biên bản đối soát hợp đồng cho khách hàng An Phát").'
    },
    {
      id: 2,
      title: '2. AI Agent chuyên trách',
      icon: Bot,
      badge: 'Phân giải ngữ nghĩa',
      desc: 'Agent bóc tách ý định (Intent), xác định phân hệ liên quan (Scope B CRM + Scope E Kế toán) và ranh giới quyền hạn được giao.'
    },
    {
      id: 3,
      title: '3. Dữ liệu được cấp (RBAC)',
      icon: Database,
      badge: 'Cô lập dữ liệu cục bộ',
      desc: 'Hệ thống kiểm tra Token phân quyền: Agent CHỈ được nạp dữ liệu khách hàng An Phát mà nhân viên này phụ trách; tuyệt đối không rò rỉ dữ liệu ngoài phạm vi.'
    },
    {
      id: 4,
      title: '4. Đề xuất có cấu trúc',
      icon: FileCheck,
      badge: 'Dự thảo giải pháp',
      desc: 'Agent tổng hợp thông tin, tính toán số liệu và soạn thảo bản đề xuất hoàn chỉnh dạng nháp gửi đến màn hình người có thẩm quyền.'
    },
    {
      id: 5,
      title: '5. Phê duyệt con người (Gate)',
      icon: ShieldCheck,
      badge: 'Chốt chặn bắt buộc',
      desc: 'Quản trị viên kiểm tra từng điều khoản, số tiền và bấm Phê duyệt hoặc Yêu cầu chỉnh sửa. AI không được tự động phát tán ra ngoài.'
    },
    {
      id: 6,
      title: '6. Thực thi & Audit Log',
      icon: History,
      badge: 'Lưu vết kiểm toán',
      desc: 'Hành động được ghi nhận vào cơ sở dữ liệu, gửi email chính thức và lưu nhật ký kiểm toán có cấu trúc (Audit Log).'
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
                Kiến trúc Kiểm soát Mạng lưới AI
              </span>
              <span className="text-[11px] font-mono text-slate-400">[Mô hình minh họa]</span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white mt-1">
              Luồng Vận hành Có Giám sát: User → Agent → Context → Proposal → Approval → Audit Log
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
                      Bước {step.id}
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
                  Bản Đề Xuất Gợi Ý Bởi AI (AI Proposal Draft #PRP-8821) [Kịch bản minh họa]
                </span>
                <span className="font-mono text-[10px] text-slate-400">Context: Scope B (CRM) + Scope E (Tài chính)</span>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200/60 dark:border-slate-800 space-y-2">
                <p>
                  <strong>Khách hàng:</strong> Công ty Cổ phần Công nghệ An Phát (Mã: KH-2026-0842)
                </p>
                <p>
                  <strong>Nội dung đề xuất:</strong> Biên bản đối soát tạm ứng đợt 1 cho Hợp đồng HD-2026/VMC-AP01.
                  Số tiền đề xuất đối soát theo chứng từ mẫu: <strong>800,000,000 VND [Dữ liệu minh họa]</strong>.
                </p>
                <p className="text-[11px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 p-2 rounded border border-amber-200 dark:border-amber-900/50 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>Cảnh báo kiểm toán: Bắt buộc Giám đốc Tài chính bấm phê duyệt trước khi gửi biên bản cho khách hàng.</span>
                </p>
              </div>

              {/* Human Gate Control */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500">
                  {isApproved === null && 'Trạng thái: Đang chờ lãnh đạo bấm nút xác nhận'}
                  {isApproved === true && (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Đã phê duyệt! Bản ghi đã được ghi vết vào Audit Log lúc 14:22:10 [Minh họa].
                    </span>
                  )}
                  {isApproved === false && (
                    <span className="text-rose-600 font-bold flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Đã từ chối! Yêu cầu nhân viên kinh doanh đối soát lại chứng từ gốc.
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
                    <span>Phê duyệt đề xuất</span>
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
                    <span>Từ chối</span>
                  </button>
                  {isApproved !== null && (
                    <button
                      type="button"
                      onClick={() => setIsApproved(null)}
                      className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600"
                      title="Thử lại mô phỏng"
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
              Kiến trúc Liên thông Mạng lưới 9 AI Copilots theo Phân hệ
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Phân định rõ kiến trúc hạ tầng mạng lưới (tại trang này) so với danh mục các vai trò Copilot tác nghiệp (tại /ai).
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400">[Kiến trúc chuẩn hóa]</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 block">
              1. Tầng Giao thức Điều hành (Executive)
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>AI CEO:</strong> Điều phối số liệu tổng hợp từ Scope J (BI) và kết nối với các Agent chuyên trách; không can thiệp trực tiếp hồ sơ cấp dưới khi chưa có thẩm quyền.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 block">
              2. Tầng Copilot Tác nghiệp Chức năng
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>AI Sales, Marketing, CSKH, HR, Finance:</strong> Hoạt động trong từng phân hệ nghiệp vụ độc lập, đọc dữ liệu được cấp phát qua giao thức RBAC nghiêm ngặt.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 block">
              3. Tầng Tri thức & Động cơ Tự động
            </span>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>AI Voice, Workflow, Search RAG:</strong> Cung cấp dịch vụ hạ tầng (bóc băng cuộc gọi, định tuyến quy trình, trích xuất tài liệu SOP) phục vụ toàn bộ mạng lưới.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
