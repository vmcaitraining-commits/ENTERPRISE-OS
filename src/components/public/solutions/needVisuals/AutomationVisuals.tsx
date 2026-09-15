import React, { useState } from 'react';
import { useI18n } from '../../../../i18n';
import {
  GitBranch, Play, CheckCircle2, AlertTriangle, Clock, ShieldCheck,
  FileCheck, ArrowRight, CornerDownRight, RefreshCw, Terminal, Layers
} from 'lucide-react';

export const AutomationVisuals: React.FC = () => {
  const { t, language } = useI18n();
  const isEn = language === 'en';
  const [selectedBranch, setSelectedBranch] = useState<'standard' | 'high_value' | 'exception'>('high_value');
  const [approved, setApproved] = useState<boolean>(true);

  return (
    <div className="space-y-8">
      {/* 1. KEY WORKFLOW CANVAS */}
      <div className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-blue-800">
                {t('solutions.visuals.automation.badgeCanvas')}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {t('solutions.visuals.common.illustrativeScenario')}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white mt-1">
              {t('solutions.visuals.automation.titleCanvas')}
            </h3>
          </div>

          {/* Branch selector buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
            <button
              type="button"
              onClick={() => setSelectedBranch('high_value')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                selectedBranch === 'high_value'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t('solutions.visuals.automation.btnBranchHigh')}
            </button>
            <button
              type="button"
              onClick={() => setSelectedBranch('standard')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                selectedBranch === 'standard'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t('solutions.visuals.automation.btnBranchStd')}
            </button>
            <button
              type="button"
              onClick={() => setSelectedBranch('exception')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                selectedBranch === 'exception'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {t('solutions.visuals.automation.btnBranchException')}
            </button>
          </div>
        </div>

        {/* Workflow Diagram Display */}
        <div className="p-4 sm:p-6 space-y-6">
          <div className="relative pl-6 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {/* NODE 1: TRIGGER */}
            <div className="relative space-y-2">
              <div className="absolute -left-6 sm:-left-10 top-0 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                1
              </div>
              <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80">
                <div className="flex items-center justify-between text-xs font-bold text-blue-800 dark:text-cyan-300">
                  <span>{t('solutions.visuals.automation.stepTrigger')}</span>
                  <span className="font-mono text-[10px] text-blue-600 dark:text-cyan-400">14:22:01.120</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  {t('solutions.visuals.automation.stepTriggerDesc')}
                </p>
              </div>
            </div>

            {/* NODE 2: CONDITION & BRANCHING */}
            <div className="relative space-y-2">
              <div className="absolute -left-6 sm:-left-10 top-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                2
              </div>
              <div className="p-3.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80">
                <div className="flex items-center justify-between text-xs font-bold text-indigo-800 dark:text-indigo-300">
                  <span>{t('solutions.visuals.automation.stepCondition')}</span>
                  <span className="font-mono text-[10px] text-indigo-500">14:22:01.450</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-xs">
                  <div className={`p-2 rounded-lg border ${selectedBranch === 'high_value' ? 'bg-white dark:bg-slate-900 border-blue-500 font-bold' : 'bg-slate-100/60 dark:bg-slate-800/40 border-slate-200 opacity-60'}`}>
                    <span>{isEn ? 'Branch 1: Value > 100M VND' : 'Nhánh 1: Giá trị > 100M VND'}</span>
                    <span className="block text-[10px] text-blue-600 mt-0.5">
                      {isEn ? '→ Mandatory CFO Approval' : '→ Yêu cầu CFO phê duyệt'}
                    </span>
                  </div>
                  <div className={`p-2 rounded-lg border ${selectedBranch === 'standard' ? 'bg-white dark:bg-slate-900 border-blue-500 font-bold' : 'bg-slate-100/60 dark:bg-slate-800/40 border-slate-200 opacity-60'}`}>
                    <span>{isEn ? 'Branch 2: Value ≤ 100M VND' : 'Nhánh 2: Giá trị ≤ 100M VND'}</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">
                      {isEn ? '→ Auto-generate collection request' : '→ Tự động xuất đề nghị thu'}
                    </span>
                  </div>
                  <div className={`p-2 rounded-lg border ${selectedBranch === 'exception' ? 'bg-white dark:bg-slate-900 border-rose-500 font-bold' : 'bg-slate-100/60 dark:bg-slate-800/40 border-slate-200 opacity-60'}`}>
                    <span>{isEn ? 'Exception: Deferment > 30 days' : 'Ngoại lệ: Đề xuất nợ > 30 ngày'}</span>
                    <span className="block text-[10px] text-rose-600 mt-0.5">
                      {isEn ? '→ Escalate to Board' : '→ Chuyển Hội đồng quản trị'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* NODE 3: MULTI-ACTION DISPATCH */}
            <div className="relative space-y-2">
              <div className="absolute -left-6 sm:-left-10 top-0 w-6 h-6 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                3
              </div>
              <div className="p-3.5 rounded-xl bg-violet-50/70 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/80">
                <div className="flex items-center justify-between text-xs font-bold text-violet-800 dark:text-violet-300">
                  <span>{t('solutions.visuals.automation.stepAction')}</span>
                  <span className="font-mono text-[10px] text-violet-500">14:22:02.010</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-xs">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-[#0B1F3A] dark:text-white block">
                      {isEn ? 'Finance & Accounting (Scope E):' : 'Kế toán (Scope E):'}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      {isEn
                        ? 'Auto-create Phase 1 receipt voucher (50% = 225M) and draft electronic invoice.'
                        : 'Tự động khởi tạo phiếu thu đợt 1 (50% = 225M) và dự thảo hóa đơn điện tử.'}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-[#0B1F3A] dark:text-white block">
                      {isEn ? 'CS & Service (Scope D):' : 'CSKH & Dịch vụ (Scope D):'}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      {isEn
                        ? 'Initialize customer onboard profile, activate SLA warranty, and invite dedicated support channel.'
                        : 'Khởi tạo hồ sơ khách hàng mới, kích hoạt bảo hành và tạo nhóm hỗ trợ.'}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-[#0B1F3A] dark:text-white block">
                      {isEn ? 'Operations (Scope G):' : 'Vận hành (Scope G):'}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      {isEn
                        ? 'Auto-schedule deployment project timeline and assign lead technical engineer.'
                        : 'Tự động lập dự án triển khai kỹ thuật và gán kỹ sư trưởng phụ trách.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NODE 4: HUMAN APPROVAL GATE */}
            <div className="relative space-y-2">
              <div className="absolute -left-6 sm:-left-10 top-0 w-6 h-6 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                4
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80">
                <div className="flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300">
                  <span>{t('solutions.visuals.automation.stepApproval')}</span>
                  <span className="font-mono text-[10px] text-amber-600">14:25:30.880</span>
                </div>
                <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <span className="text-slate-600 dark:text-slate-300">
                    {isEn
                      ? 'Approver: Le Quang Huy (CFO) • Executed through Workspace with digital signature.'
                      : 'Người duyệt: Lê Quang Huy (CFO) • Thao tác qua giao diện Workspace có chữ ký số nội bộ.'}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {isEn ? 'Approved at 14:25:30' : 'Đã duyệt lúc 14:25:30'}
                  </span>
                </div>
              </div>
            </div>

            {/* NODE 5 & 6: RESULT & AUDIT LOG */}
            <div className="relative space-y-2">
              <div className="absolute -left-6 sm:-left-10 top-0 w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                5
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <span>{t('solutions.visuals.automation.stepResult')}</span>
                  <span className="font-mono text-[10px] text-emerald-600">
                    {isEn ? '[Simulated Log] STATUS: COMPLETED' : '[Nhật ký mô phỏng] STATUS: COMPLETED'}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 text-emerald-400 font-mono text-[11px] space-y-0.5">
                  <div>[2026-09-12 14:22:01.120] TRIGGER: Contract #HD-0842 signed on Scope B.</div>
                  <div>[2026-09-12 14:22:01.450] CONDITION: High-value check passed (&gt;100M). Route to CFO approval.</div>
                  <div>[2026-09-12 14:22:02.010] ACTION: Spawned sub-tasks in Scope E, Scope D, Scope G.</div>
                  <div>[2026-09-12 14:25:30.880] APPROVAL: Confirmed by CFO Le Quang Huy (IP: 10.0.4.12).</div>
                  <div>[2026-09-12 14:25:31.200] SUCCESS: Notifications dispatched to all stakeholders. SLA: 3m29s.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
