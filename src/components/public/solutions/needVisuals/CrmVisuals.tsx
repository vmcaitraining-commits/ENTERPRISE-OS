import React, { useState } from 'react';
import { useI18n } from '../../../../i18n';
import {
  Users, TrendingUp, Calendar, Clock, DollarSign, FileText,
  CreditCard, Headphones, CheckCircle2, AlertCircle, ChevronRight,
  ShieldCheck, ArrowUpRight, MessageSquare, PhoneCall, Mail, Building
} from 'lucide-react';

export const CrmVisuals: React.FC = () => {
  const { t, language } = useI18n();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<'timeline' | 'contracts' | 'billing' | 'service'>('timeline');
  const [selectedDeal, setSelectedDeal] = useState<number>(2);

  const pipelineStages = [
    { stage: isEn ? '1. Approach' : '1. Tiếp cận', count: 18, value: '420M', rate: '100%', color: 'border-slate-300 dark:border-slate-700' },
    { stage: isEn ? '2. Discovery' : '2. Nhu cầu', count: 12, value: '680M', rate: '66.7%', color: 'border-blue-300 dark:border-blue-800' },
    { stage: isEn ? '3. Proposal' : '3. Báo giá', count: 8, value: '1.1B', rate: '44.4%', color: 'border-indigo-300 dark:border-indigo-800' },
    { stage: isEn ? '4. Negotiation' : '4. Đàm phán', count: 4, value: '890M', rate: '22.2%', color: 'border-amber-300 dark:border-amber-800' },
    { stage: isEn ? '5. Won' : '5. Ký kết', count: 6, value: '1.45B', rate: '33.3%', color: 'border-emerald-300 dark:border-emerald-800' }
  ];

  return (
    <div className="space-y-8">
      {/* 1. KEY VISUAL: CUSTOMER 360 INTERACTIVE VIEW */}
      <div className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Header bar */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white">
                  {t('solutions.visuals.crm.headerCompany')}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  {t('solutions.visuals.crm.headerVipBadge')}
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {t('solutions.visuals.crm.headerCode')}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('solutions.visuals.crm.headerReps')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-right">
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider">
                {t('solutions.visuals.crm.statRevenueLabel')}
              </span>
              <span className="text-sm font-extrabold text-[#155EEF] dark:text-[#06B6D4]">1,250,000,000 VND</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-right">
              <span className="block text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {t('solutions.visuals.crm.statRelationLabel')}
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                {t('solutions.visuals.crm.statRelationVal')} {t('solutions.visuals.common.illustrativeData')}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Interactive Tabs */}
        <div className="px-4 sm:px-6 pt-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex overflow-x-auto gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'timeline'
                ? 'border-[#155EEF] text-[#155EEF] dark:text-[#06B6D4] dark:border-[#06B6D4]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>1. {t('solutions.visuals.crm.tabTimeline')}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('contracts')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'contracts'
                ? 'border-[#155EEF] text-[#155EEF] dark:text-[#06B6D4] dark:border-[#06B6D4]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>2. {t('solutions.visuals.crm.tabContracts')}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('billing')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'billing'
                ? 'border-[#155EEF] text-[#155EEF] dark:text-[#06B6D4] dark:border-[#06B6D4]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>3. {t('solutions.visuals.crm.tabBilling')}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('service')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'service'
                ? 'border-[#155EEF] text-[#155EEF] dark:text-[#06B6D4] dark:border-[#06B6D4]'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>4. {t('solutions.visuals.crm.tabService')}</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="p-4 sm:p-6 bg-white dark:bg-[#0D182E]">
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEn ? 'Omnichannel Interaction Timeline (Real-time Interaction Log)' : 'Dòng thời gian tương tác đa kênh (Real-time Interaction Log)'}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {t('solutions.visuals.common.illustrativeData')}
                </span>
              </div>
              <div className="space-y-3 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                <div className="relative pl-9 space-y-1">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900"></div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                    <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                    <span>{isEn ? 'Consultation call on Scope E Finance expansion addendum' : 'Cuộc gọi tư vấn phụ lục mở rộng Scope E (Kế toán)'}</span>
                    <span className="text-[10px] font-mono text-slate-400 ml-auto">{isEn ? '[Illustrative] 10:30 Today' : '[Minh họa] 10:30 Hôm nay'}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                    {isEn
                      ? 'Sales Lead Tran Thi Mai conducted 14-min discussion. Client preliminarily approved 450M VND budget for Phase 2. AI Copilot transcribed and proposed summary notes to profile [Illustrative Scenario].'
                      : 'Chuyên viên Trần Thị Mai trao đổi 14 phút. Khách hàng đã duyệt sơ bộ ngân sách 450 triệu cho giai đoạn 2. AI Copilot hỗ trợ bóc băng và tóm tắt gợi ý vào hồ sơ [Kịch bản minh họa].'}
                  </p>
                </div>

                <div className="relative pl-9 space-y-1">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-900"></div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                    <Mail className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{isEn ? 'Dispatched electronic draft contract & detailed quotation' : 'Gửi bản dự thảo hợp đồng điện tử và báo giá chi tiết'}</span>
                    <span className="text-[10px] font-mono text-slate-400 ml-auto">{isEn ? '[Illustrative] 14:15 Yesterday' : '[Minh họa] 14:15 Hôm qua'}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                    {isEn
                      ? 'System dispatched draft attached with verifiable digital workflow link [Illustrative Scenario].'
                      : 'Hệ thống hỗ trợ gửi dự thảo đính kèm liên kết xác thực theo quy trình [Kịch bản minh họa].'}
                  </p>
                </div>

                <div className="relative pl-9 space-y-1">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-900"></div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{isEn ? 'Phase 1 Acceptance Record (Scope B CRM)' : 'Biên bản nghiệm thu giai đoạn 1 (Scope B CRM)'}</span>
                    <span className="text-[10px] font-mono text-slate-400 ml-auto">05/09/2026</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                    {isEn
                      ? 'Successfully provisioned 45 user accounts and completed internal staff onboarding. CSAT rating: 5/5 stars.'
                      : 'Đã bàn giao 45 tài khoản người dùng và hoàn thành khóa đào tạo người dùng nội bộ. Đánh giá CSAT: 5/5 sao.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contracts' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEn ? 'Commercial Contracts & Linked Orders' : 'Hợp đồng kinh tế và đơn hàng đã liên kết'}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {t('solutions.visuals.common.illustrativeData')}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-[11px]">
                      <th className="py-2.5 px-3">{isEn ? 'CONTRACT CODE' : 'MÃ HỢP ĐỒNG'}</th>
                      <th className="py-2.5 px-3">{isEn ? 'SCOPE & CONTENT' : 'NỘI DUNG'}</th>
                      <th className="py-2.5 px-3">{isEn ? 'VALUE' : 'GIÁ TRỊ'}</th>
                      <th className="py-2.5 px-3">{isEn ? 'EFFECTIVE DATE' : 'NGÀY HIỆU LỰC'}</th>
                      <th className="py-2.5 px-3">{isEn ? 'STATUS' : 'TRẠNG THÁI'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-blue-600 dark:text-cyan-400">HD-2026/VMC-AP01</td>
                      <td className="py-3 px-3 font-medium">
                        {isEn ? 'Deploy Core Enterprise AI (Scope B CRM & Scope G)' : 'Triển khai AI Enterprise Lõi (Scope B CRM & Scope G)'}
                      </td>
                      <td className="py-3 px-3 font-bold text-slate-800 dark:text-slate-200">800,000,000 VND</td>
                      <td className="py-3 px-3 text-slate-500">01/06/2026</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                          {isEn ? 'Accepted & Signed' : 'Đã nghiệm thu'}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-blue-600 dark:text-cyan-400">PL-2026/AP-02</td>
                      <td className="py-3 px-3 font-medium">
                        {isEn ? 'Expand Finance & Accounting Core (Scope E)' : 'Mở rộng Kế toán & Quản trị tài chính (Scope E)'}
                      </td>
                      <td className="py-3 px-3 font-bold text-slate-800 dark:text-slate-200">450,000,000 VND</td>
                      <td className="py-3 px-3 text-slate-500">15/09/2026</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                          {isEn ? 'Negotiating 90%' : 'Đang đàm phán 90%'}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEn
                    ? 'Cross-departmental Debt Reconciliation with Accounting Module (Scope E)'
                    : 'Đối soát công nợ liên phòng ban với Phân hệ Kế toán (Scope E)'}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {t('solutions.visuals.common.illustrativeData')}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">
                    {isEn ? 'Total Contract Value' : 'Tổng giá trị hợp đồng'}
                  </span>
                  <span className="text-base font-bold text-[#0B1F3A] dark:text-white">1,250,000,000 VND</span>
                  <span className="text-[10px] text-emerald-600 block mt-1">
                    ✓ {isEn ? 'Reconciled with Contract [Sample]' : 'Đã đối soát hợp đồng [Minh họa]'}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                  <span className="text-[10px] text-emerald-600 block uppercase">
                    {isEn ? 'Actual Collected Amount' : 'Đã thực thu kế toán'}
                  </span>
                  <span className="text-base font-bold text-emerald-700 dark:text-emerald-300">800,000,000 VND</span>
                  <span className="text-[10px] text-slate-500 block mt-1">
                    {isEn ? 'Bank payment matched electronic invoice' : 'UNC BIDV khớp hóa đơn điện tử'}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                  <span className="text-[10px] text-amber-600 block uppercase">
                    {isEn ? 'Next Milestone Receivable' : 'Công nợ đợt tiếp theo'}
                  </span>
                  <span className="text-base font-bold text-amber-700 dark:text-amber-300">450,000,000 VND</span>
                  <span className="text-[10px] text-slate-500 block mt-1">
                    {isEn ? 'Due upon upcoming addendum schedule' : 'Đến hạn theo phụ lục mới'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'service' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEn ? 'Technical Support & SLA History (Scope D Customer Service)' : 'Lịch sử yêu cầu hỗ trợ kỹ thuật và SLA (Scope D CSKH)'}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {t('solutions.visuals.common.illustrativeData')}
                </span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-600 text-xs">#TK-9402</span>
                      <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                        {isEn ? 'Support provisioning 5 additional sales department accounts' : 'Hỗ trợ đồng bộ thêm 5 tài khoản phòng kinh doanh mới'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      {isEn
                        ? 'Response time: 12 mins • Completed: 45 mins [Illustrative Data] • Engineer: Le Tuan'
                        : 'Thời gian phản hồi mẫu: 12 phút • Hoàn thành: 45 phút [Dữ liệu minh họa] • Kỹ thuật viên: Lê Tuấn'}
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    CSAT 5/5 ★
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-600 text-xs">#TK-8831</span>
                      <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                        {isEn ? 'Customize bilingual English - Vietnamese quotation export template' : 'Tùy biến mẫu xuất báo giá song ngữ Anh - Việt'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      {isEn ? 'Turnaround: 2 hours • Validation and sign-off completed' : 'Thời gian xử lý: 2 giờ • Kiểm tra bàn giao đạt chuẩn'}
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    CSAT 5/5 ★
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. SECONDARY VISUAL: PIPELINE BÁN HÀNG */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
              <h4 className="text-sm font-extrabold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
                {t('solutions.visuals.crm.pipelineHeader')}
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {t('solutions.visuals.crm.pipelineSubtitle')}
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            {t('solutions.visuals.common.illustrativeData')}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
          {pipelineStages.map((col, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedDeal(idx)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                selectedDeal === idx
                  ? 'bg-blue-50/60 dark:bg-blue-950/40 border-[#155EEF] shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 truncate">{col.stage}</div>
              <div className="text-base font-extrabold text-[#0B1F3A] dark:text-white mt-1">{col.count} deals</div>
              <div className="text-[11px] font-mono text-blue-600 dark:text-[#06B6D4] font-semibold">{col.value}</div>
              <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800 pt-1">
                <span>{isEn ? 'Conversion:' : 'Chuyển đổi:'}</span>
                <span className="font-bold text-slate-600 dark:text-slate-300">{col.rate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
