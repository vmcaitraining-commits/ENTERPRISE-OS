import React, { useState } from 'react';
import { useI18n } from '../../../../i18n';
import {
  CreditCard, DollarSign, TrendingUp, TrendingDown,
  PieChart, CheckCircle2, AlertTriangle, FileText,
  Clock, ArrowRight, ShieldCheck, RefreshCw, BarChart3
} from 'lucide-react';

export const FinanceVisuals: React.FC = () => {
  const { t, language } = useI18n();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<'cashflow' | 'aging' | 'budget' | 'reconciliation'>('cashflow');

  return (
    <div className="space-y-6">
      {/* Sub-nav switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('cashflow')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'cashflow'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '1. Cash Flow Movement' : '1. Dòng tiền lưu chuyển (Cash-flow)'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('aging')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'aging'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '2. Aging Report (A/R)' : '2. Báo cáo tuổi nợ (Aging Report)'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('budget')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'budget'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '3. Budget vs Actual' : '3. Dự toán vs Thực tế (Budget vs Actual)'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('reconciliation')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'reconciliation'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '4. Automated Bank & VAT Reconciliation' : '4. Đối soát giao dịch ngân hàng & Hóa đơn'}
          </button>
        </div>
        <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
          {isEn ? '[Illustrative Data]' : '[Dữ liệu minh họa]'}
        </span>
      </div>

      {/* VIEW 1: CASH-FLOW */}
      {activeTab === 'cashflow' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Predictive Cash-Flow Forecast Report' : 'Báo cáo lưu chuyển tiền tệ dự báo (Cash-Flow Forecast)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Track cash inflow, outflow, and treasury reserves in real time with forward projections'
                  : 'Theo dõi dòng tiền vào (Inflow), tiền ra (Outflow) và số dư quỹ tiền mặt theo thời gian thực'}
              </p>
            </div>
            <div className="text-xs font-mono">
              {isEn ? 'Current Fund Balance: ' : 'Số dư quỹ hiện tại: '}
              <strong className="text-emerald-600 dark:text-emerald-400">2.840.000.000 đ</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
              <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                {isEn ? 'Monthly Cash Inflow' : 'Dòng tiền vào tháng này (Inflow)'}
              </span>
              <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-400 font-mono">+ 1.620.000.000 đ</div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'From 28 active enterprise contracts & recurring subscription accounts.'
                  : 'Từ 28 hợp đồng kinh doanh & các khoản thu dịch vụ định kỳ.'}
              </p>
            </div>

            <div className="p-4 bg-rose-50/60 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 space-y-1.5">
              <span className="text-[11px] font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
                {isEn ? 'Monthly Cash Outflow' : 'Dòng tiền ra tháng này (Outflow)'}
              </span>
              <div className="text-2xl font-extrabold text-rose-700 dark:text-rose-400 font-mono">- 980.000.000 đ</div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Payroll disbursements, cloud infra overhead, and marketing campaigns.'
                  : 'Lương nhân sự, chi phí thuê hạ tầng máy chủ & marketing quảng cáo.'}
              </p>
            </div>

            <div className="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/60 space-y-1.5">
              <span className="text-[11px] font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                {isEn ? 'Net Cash-Flow' : 'Dòng tiền ròng (Net Cash-Flow)'}
              </span>
              <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 font-mono">+ 640.000.000 đ</div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Current liquidity ratio: 2.8x (Optimal health threshold).'
                  : 'Hệ số thanh toán hiện hành đạt 2.8 lần (Mức độ an toàn cao).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: AGING REPORT */}
      {activeTab === 'aging' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Accounts Receivable Aging Analysis' : 'Báo cáo phân tích tuổi nợ khách hàng (Accounts Receivable Aging)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Automated Email/Zalo reminder sequences tailored to contractual credit milestones'
                  : 'Tự động gửi email/Zalo nhắc nợ theo hạn thanh toán thỏa thuận trên hợp đồng'}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {isEn ? 'Total Receivables: ' : 'Tổng công nợ phải thu: '}
              <strong className="text-[#0B1F3A] dark:text-white font-bold">420.000.000 đ</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500">
                {isEn ? 'Current (0–30 days)' : 'Trong hạn (0–30 ngày)'}
              </span>
              <div className="text-lg font-bold font-mono text-emerald-600">310.000.000 đ</div>
              <span className="text-[10px] text-slate-400">
                {isEn ? '14 accounts · 73.8% of total' : '14 khách hàng · Tỷ lệ 73.8%'}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-amber-600">
                {isEn ? 'Overdue (31–60 days)' : 'Quá hạn (31–60 ngày)'}
              </span>
              <div className="text-lg font-bold font-mono text-amber-600">80.000.000 đ</div>
              <span className="text-[10px] text-slate-400">
                {isEn ? '3 accounts · Phase 1 AI reminder sent' : '3 khách hàng · AI tự gửi nhắc đợt 1'}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-rose-600">
                {isEn ? 'Overdue (61–90 days)' : 'Quá hạn (61–90 ngày)'}
              </span>
              <div className="text-lg font-bold font-mono text-rose-600">30.000.000 đ</div>
              <span className="text-[10px] text-slate-400">
                {isEn ? '1 account · Escalated to Account Exec' : '1 khách hàng · Chuyển Sales phụ trách'}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">
                {isEn ? 'Doubtful Debt (>90 days)' : 'Nợ khó đòi (>90 ngày)'}
              </span>
              <div className="text-lg font-bold font-mono text-slate-500">0 đ</div>
              <span className="text-[10px] text-emerald-600 font-medium">
                {isEn ? 'Zero bad debts recorded' : 'Không phát sinh nợ xấu'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: BUDGET VS ACTUAL */}
      {activeTab === 'budget' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Budget Allocation vs. Actual Expenditure' : 'So sánh Dự toán Ngân sách vs Thực tế chi trả (Budget vs Actual)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Control department expense requests with real-time budget threshold warnings'
                  : 'Kiểm soát từng khoản mục đề nghị tạm ứng, cảnh báo trước khi một phòng ban chạm trần ngân sách'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
              {isEn ? 'Controlled Budget Index: 91.2%' : 'Tổng ngân sách kiểm soát: 91.2%'}
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between font-semibold">
                <span className="text-[#0B1F3A] dark:text-white">
                  {isEn ? 'Marketing & Growth (Budget: 120M)' : 'Khối Tiếp thị & Marketing (Ngân sách: 120M)'}
                </span>
                <span className="font-mono text-slate-500">
                  {isEn ? 'Actual: 108M (90.0%)' : 'Thực chi: 108M (90.0%)'}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between font-semibold">
                <span className="text-[#0B1F3A] dark:text-white">
                  {isEn ? 'Technology & Cloud Infra (Budget: 85M)' : 'Khối Công nghệ & Hạ tầng Cloud (Ngân sách: 85M)'}
                </span>
                <span className="font-mono text-slate-500">
                  {isEn ? 'Actual: 72M (84.7%)' : 'Thực chi: 72M (84.7%)'}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '84.7%' }}></div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between font-semibold">
                <span className="text-[#0B1F3A] dark:text-white">
                  {isEn ? 'Human Resources & Training (Budget: 45M)' : 'Khối Nhân sự & Đào tạo (Ngân sách: 45M)'}
                </span>
                <span className="font-mono text-slate-500">
                  {isEn ? 'Actual: 36M (80.0%)' : 'Thực chi: 36M (80.0%)'}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: RECONCILIATION */}
      {activeTab === 'reconciliation' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Automated Bank Reconciliation & VAT Invoice Matching' : 'Đối soát giao dịch ngân hàng & Hóa đơn VAT tự động'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Auto-parses transaction remarks and clears invoice ledgers without manual accounting inputs'
                  : 'Tự động nhận diện nội dung chuyển khoản và gạch nợ hóa đơn không cần kế toán nhập tay'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
              {isEn ? 'Matching Accuracy: 100%' : 'Độ chính xác đối khớp: 100%'}
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    {isEn ? 'AUTO-MATCHED' : 'KHỚP TỰ ĐỘNG'}
                  </span>
                  <span className="font-mono font-bold text-[#0B1F3A] dark:text-white">+ 60.000.000 đ</span>
                  <span className="text-slate-400">
                    {isEn ? '· VCB A/C 001100... · 11:15 today' : '· VCB TK 001100... · 11:15 hôm nay'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {isEn ? 'Remark: "CTY MINH PHAT PAYMENT INV 2026 088 PHASE 1"' : 'Nội dung: "CTY MINH PHAT THANH TOAN HD 2026 088 DOT 1"'}
                </p>
              </div>
              <div className="text-right text-[11px]">
                <span className="text-emerald-600 font-bold block">
                  {isEn ? '→ Reconciled Inv #HD-2026-088' : '→ Đã gạch nợ HĐ #HD-2026-088'}
                </span>
                <span className="text-slate-400">
                  {isEn ? 'Receipt Voucher #PT-2026-114 generated' : 'Tự sinh phiếu thu số #PT-2026-114'}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    {isEn ? 'AUTO-MATCHED' : 'KHỚP TỰ ĐỘNG'}
                  </span>
                  <span className="font-mono font-bold text-[#0B1F3A] dark:text-white">+ 18.500.000 đ</span>
                  <span className="text-slate-400">
                    {isEn ? '· MBBank A/C 1088... · 09:40 today' : '· MBBank TK 1088... · 09:40 hôm nay'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {isEn ? 'Remark: "RENEW CRM Q3 PHARMACEUTICAL HUNG PHAT"' : 'Nội dung: "GIA HAN GOI CRM QUY 3 DUOC HUNG PHAT"'}
                </p>
              </div>
              <div className="text-right text-[11px]">
                <span className="text-emerald-600 font-bold block">
                  {isEn ? '→ Reconciled Inv #HD-2025-412' : '→ Đã gạch nợ HĐ #HD-2025-412'}
                </span>
                <span className="text-slate-400">
                  {isEn ? 'Auto-extended license by 90 days' : 'Tự gia hạn dịch vụ thêm 90 ngày'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
