import React, { useState } from 'react';
import { useI18n } from '../../../../i18n';
import {
  TrendingUp, Users, DollarSign, ArrowRight, CheckCircle2,
  Clock, FileText, ArrowLeftRight, ChevronRight, ShieldAlert,
  Layers, Filter, Eye, Building2, PhoneCall, Mail, Calendar
} from 'lucide-react';

export const SalesVisuals: React.FC = () => {
  const { t, language } = useI18n();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<'pipeline' | 'customer360' | 'funnel' | 'handoff'>('pipeline');

  return (
    <div className="space-y-6">
      {/* Sub-nav switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('pipeline')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'pipeline'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '1. Kanban Pipeline' : '1. Kanban Pipeline'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('customer360')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'customer360'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '2. Customer 360' : '2. Customer 360'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('funnel')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'funnel'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '3. Sales Funnel' : '3. Phễu chuyển đổi (Funnel)'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('handoff')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'handoff'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '4. Contract → Finance → Support Flow' : '4. Liên thông Hợp đồng → Kế toán → CSKH'}
          </button>
        </div>
        <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
          {isEn ? '[Illustrative Data]' : '[Dữ liệu minh họa]'}
        </span>
      </div>

      {/* VIEW 1: KANBAN PIPELINE */}
      {activeTab === 'pipeline' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Sales Opportunity Pipeline' : 'Đường ống cơ hội bán hàng (Sales Opportunity Pipeline)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Track deal progression from initial lead intake to won contracts and customer handoff'
                  : 'Theo dõi tiến độ từ lúc tiếp nhận lead đến khi chốt hợp đồng và chuyển giao'}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span>
                {isEn ? 'Total Pipeline Value: ' : 'Tổng giá trị đường ống: '}
                <strong className="text-emerald-600 dark:text-emerald-400 font-mono">1.480.000.000 đ</strong>
              </span>
            </div>
          </div>

          {/* Kanban columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Column 1 */}
            <div className="bg-slate-50/80 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                  {isEn ? 'Outreach & Qualify' : 'Tiếp cận & Đánh giá'}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">4 deal</span>
              </div>
              <div className="space-y-2.5">
                <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-slate-200/70 dark:border-slate-700/60 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0B1F3A] dark:text-white">Công ty Dược Hưng Phát</span>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">Lead 92</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {isEn ? 'Need: Unified CRM & Pharma inventory' : 'Nhu cầu: Hợp nhất CRM & Kho dược'}
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                    <span>{isEn ? 'Value: ' : 'Trị giá: '}<strong className="text-slate-700 dark:text-slate-200">120M</strong></span>
                    <span>{isEn ? 'Prob: 40%' : 'Xác suất: 40%'}</span>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-slate-200/70 dark:border-slate-700/60 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0B1F3A] dark:text-white">Nội thất Kim Long</span>
                    <span className="text-[10px] font-mono text-blue-600 bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded">Lead 78</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {isEn ? 'Need: Automated quotes for 6 showrooms' : 'Nhu cầu: Báo giá tự động cho 6 showroom'}
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                    <span>{isEn ? 'Value: ' : 'Trị giá: '}<strong className="text-slate-700 dark:text-slate-200">85M</strong></span>
                    <span>{isEn ? 'Prob: 45%' : 'Xác suất: 45%'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-blue-50/50 dark:bg-blue-950/20 p-3.5 rounded-xl border border-blue-200/60 dark:border-blue-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider">
                  {isEn ? 'Proposal & Quote' : 'Tư vấn & Báo giá'}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-bold">3 deal</span>
              </div>
              <div className="space-y-2.5">
                <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-blue-200/60 dark:border-slate-700/60 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0B1F3A] dark:text-white">Tập đoàn Logistics Á Châu</span>
                    <span className="text-[10px] font-mono text-purple-600 bg-purple-50 dark:bg-purple-950/60 px-1.5 py-0.5 rounded">BG v2</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {isEn ? 'Quote: Deploy 45 CRM user seats' : 'Báo giá: Triển khai 45 user phân hệ CRM'}
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                    <span>{isEn ? 'Value: ' : 'Trị giá: '}<strong className="text-slate-700 dark:text-slate-200">240M</strong></span>
                    <span>{isEn ? 'Prob: 65%' : 'Xác suất: 65%'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-amber-50/50 dark:bg-amber-950/20 p-3.5 rounded-xl border border-amber-200/60 dark:border-amber-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                  {isEn ? 'Terms Negotiation' : 'Đàm phán điều khoản'}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200 font-bold">2 deal</span>
              </div>
              <div className="space-y-2.5">
                <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-amber-200/60 dark:border-slate-700/60 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0B1F3A] dark:text-white">Trường Liên Cấp Tuệ Đức</span>
                    <span className="text-[10px] font-mono text-amber-700 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded">Dự thảo HD</span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {isEn ? 'Negotiation: 3-installment payment schedule' : 'Thương lượng: Điều khoản thanh toán 3 đợt'}
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                    <span>{isEn ? 'Value: ' : 'Trị giá: '}<strong className="text-slate-700 dark:text-slate-200">180M</strong></span>
                    <span>{isEn ? 'Prob: 85%' : 'Xác suất: 85%'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                  {isEn ? 'Won / Executed' : 'Won / Đã ký kết'}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-bold">5 deal</span>
              </div>
              <div className="space-y-2.5">
                <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-emerald-200/60 dark:border-slate-700/60 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0B1F3A] dark:text-white">Bất động sản Đất Lành</span>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 dark:bg-emerald-950/80 px-1.5 py-0.5 rounded">
                      {isEn ? 'OTP Signed' : 'Đã ký OTP'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {isEn ? 'Auto-handed over to Finance & CSKH' : 'Tự động bàn giao sang Kế toán & CSKH'}
                  </p>
                  <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                    <span>{isEn ? 'Revenue: ' : 'Doanh số: '}<strong className="text-emerald-600 dark:text-emerald-400">160M</strong></span>
                    <span className="text-emerald-600 text-[10px] font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: CUSTOMER 360 */}
      {activeTab === 'customer360' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Customer 360 View' : 'Hồ sơ khách hàng 360 độ (Customer 360 View)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'All interaction data, contracts, receivables, and message history on a single screen'
                  : 'Toàn bộ dữ liệu tương tác, hợp đồng, công nợ và lịch sử trao đổi trên một màn hình duy nhất'}
              </p>
            </div>
            <span className="text-xs font-mono text-blue-600 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-900">
              {isEn ? 'Profile ID: #CUS-2026-88' : 'Mã hồ sơ: #CUS-2026-88'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Customer info card */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#155EEF]/10 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#0B1F3A] dark:text-white">Công ty CP Thương Mại Minh Phát</h5>
                  <span className="text-[11px] text-slate-500">
                    {isEn ? 'Industry: Consumer electronics wholesale' : 'Ngành: Bán buôn thiết bị điện máy'}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{isEn ? 'Representative:' : 'Người đại diện:'}</span>
                  <span className="font-medium">Nguyễn Văn Bình (GĐ Điều hành)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{isEn ? 'Phone Number:' : 'Số điện thoại:'}</span>
                  <span className="font-mono">0982.xxx.912</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{isEn ? 'Lead Source:' : 'Nguồn Lead:'}</span>
                  <span className="text-blue-600">{isEn ? 'Google Ads B2B Campaign' : 'Google Ads chiến dịch B2B'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{isEn ? 'Account Owner:' : 'Chuyên viên quản lý:'}</span>
                  <span className="font-semibold text-[#0B1F3A] dark:text-white">Trần Thu Trang (Sales Lead)</span>
                </div>
              </div>
            </div>

            {/* Contract & financial health */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                {isEn ? 'Contracts & Financial Status' : 'Hợp đồng & Tình trạng tài chính'}
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-white dark:bg-[#0B1528] rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#0B1F3A] dark:text-white">HĐ #HD-2026-088</div>
                    <div className="text-[10px] text-slate-400">{isEn ? 'AI Enterprise 3 modules package' : 'Gói AI Enterprise 3 phân hệ'}</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600">120.000.000 đ</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200">
                    <span className="block text-[10px] text-emerald-600">{isEn ? 'Collected installment 1:' : 'Đã thu đợt 1:'}</span>
                    <strong className="font-mono text-xs">60.000.000 đ</strong>
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-200">
                    <span className="block text-[10px] text-blue-600">{isEn ? 'Pending receivable:' : 'Còn phải thu:'}</span>
                    <strong className="font-mono text-xs">60.000.000 đ</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Interaction history timeline */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2.5">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#155EEF]" />
                {isEn ? 'Interaction Timeline' : 'Dòng thời gian tương tác (Timeline)'}
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0"></span>
                  <div>
                    <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                      {isEn ? 'E-contract signed via OTP' : 'Đã ký kết hợp đồng điện tử qua OTP'}
                    </span>
                    <p className="text-[10px] text-slate-400">
                      {isEn ? '10:45 Today · Auto confirmation email sent' : '10:45 Hôm nay · Tự động gửi email xác nhận'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></span>
                  <div>
                    <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                      {isEn ? 'Solution advisory call 28 min' : 'Cuộc gọi tư vấn giải pháp 28 phút'}
                    </span>
                    <p className="text-[10px] text-slate-400">
                      {isEn ? '14:20 Yesterday · AI Voice transcribed & summarized' : '14:20 Hôm qua · AI Voice đã bóc băng & tóm tắt'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                      {isEn ? 'Consultation form submitted via Website' : 'Gửi biểu mẫu tư vấn từ Website'}
                    </span>
                    <p className="text-[10px] text-slate-400">
                      {isEn ? '09:12 2 days ago · Intent Score 92/100' : '09:12 Hai ngày trước · Điểm số tiềm năng 92/100'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: SALES FUNNEL */}
      {activeTab === 'funnel' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Sales Conversion Funnel' : 'Phễu chuyển đổi bán hàng (Conversion Funnel)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Measure drop-off rates across stages to timely address pitch and process bottlenecks'
                  : 'Đo lường tỷ lệ hao hụt qua từng bước để kịp thời tối ưu điểm nghẽn kịch bản'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900 font-bold">
              {isEn ? 'End-to-End Win Rate: 4.5%' : 'Tỷ lệ chốt đơn cuối phễu: 4.5%'}
            </span>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            {/* Step 1 */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-200">
                <span>{isEn ? '1. Traffic & Inbound Reach' : '1. Lượng tiếp cận & Traffic web'}</span>
                <span className="font-mono">{isEn ? '12,400 visits' : '12.400 lượt'}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-8 rounded-xl overflow-hidden p-1 flex items-center">
                <div className="bg-[#155EEF] h-full rounded-lg text-white text-[11px] font-bold flex items-center px-3 justify-between" style={{ width: '100%' }}>
                  <span>{isEn ? 'Funnel Top' : 'Phễu đầu vào'}</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-200">
                <span>{isEn ? '2. Lead Form Submissions' : '2. Lead để lại thông tin tư vấn'}</span>
                <span className="font-mono">{isEn ? '840 leads (6.7%)' : '840 lead (6.7%)'}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-8 rounded-xl overflow-hidden p-1 flex items-center">
                <div className="bg-blue-500 h-full rounded-lg text-white text-[11px] font-bold flex items-center px-3 justify-between" style={{ width: '75%' }}>
                  <span>{isEn ? 'Auto-routed into CRM' : 'Tự động phân bổ vào CRM'}</span>
                  <span>75%</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-200">
                <span>{isEn ? '3. Qualified Opportunities' : '3. Cơ hội liên hệ & Đạt chuẩn tư vấn'}</span>
                <span className="font-mono">{isEn ? '210 opportunities' : '210 cơ hội'}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-8 rounded-xl overflow-hidden p-1 flex items-center">
                <div className="bg-indigo-500 h-full rounded-lg text-white text-[11px] font-bold flex items-center px-3 justify-between" style={{ width: '52%' }}>
                  <span>{isEn ? '1-on-1 Solution Consultation' : 'Tư vấn giải pháp 1-1'}</span>
                  <span>52%</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-200">
                <span>{isEn ? '4. Quotes & Draft Contracts Sent' : '4. Gửi báo giá & Hợp đồng dự thảo'}</span>
                <span className="font-mono">{isEn ? '95 quotes' : '95 báo giá'}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-8 rounded-xl overflow-hidden p-1 flex items-center">
                <div className="bg-purple-600 h-full rounded-lg text-white text-[11px] font-bold flex items-center px-3 justify-between" style={{ width: '35%' }}>
                  <span>{isEn ? 'E-Contract Proposal' : 'Hợp đồng điện tử'}</span>
                  <span>35%</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
                <span>{isEn ? '5. Formally Signed Contracts & Deals Won' : '5. Hợp đồng chính thức ký kết & Đóng deal'}</span>
                <span className="font-mono">{isEn ? '38 contracts' : '38 hợp đồng'}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-8 rounded-xl overflow-hidden p-1 flex items-center">
                <div className="bg-emerald-600 h-full rounded-lg text-white text-[11px] font-bold flex items-center px-3 justify-between" style={{ width: '22%' }}>
                  <span>{isEn ? 'Won - Realized Revenue' : 'Won - Doanh số thực'}</span>
                  <span>{isEn ? '22% from quotes' : '22% từ báo giá'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: INTER-DEPARTMENT HANDOFF FLOW */}
      {activeTab === 'handoff' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4 text-emerald-600" />
                {isEn
                  ? 'Inter-Departmental Handoff: Contract → Finance → CSKH'
                  : 'Luồng bàn giao liên phòng ban: Hợp đồng → Kế toán → CSKH'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? '100% automated handoff data, eliminating chat messages for invoices or manual handoffs'
                  : 'Tự động hóa 100% dữ liệu bàn giao, loại bỏ hoàn toàn việc chat Zalo xin hóa đơn hay chuyển giao thông tin thủ công'}
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              {isEn ? 'Automated Handover' : 'Liên thông tự động'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {/* Step 1: Sales */}
            <div className="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-900 dark:text-blue-200 uppercase tracking-wider">
                  {isEn ? 'Source: Sales' : 'Khởi nguồn: Sales'}
                </span>
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-blue-100 dark:border-blue-950 space-y-1.5 text-xs">
                <div className="font-bold text-[#0B1F3A] dark:text-white">
                  {isEn ? 'E-Contract Signing' : 'Ký Hợp đồng điện tử'}
                </div>
                <p className="text-slate-500 text-[11px]">
                  {isEn
                    ? 'Client validates OTP digital signature. Opportunity status converts to WON.'
                    : 'Khách hàng xác nhận mã OTP ký số. Trạng thái cơ hội chuyển thành WON.'}
                </p>
                <div className="pt-2 text-[10px] font-mono text-blue-600">
                  {isEn ? '→ Event Bus Signal: contract.signed' : '→ Bắn tín hiệu Event Bus: contract.signed'}
                </div>
              </div>
            </div>

            {/* Step 2: Finance */}
            <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wider">
                  {isEn ? 'Receiver: Finance' : 'Tiếp nhận: Kế toán'}
                </span>
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">2</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-emerald-100 dark:border-emerald-950 space-y-1.5 text-xs">
                <div className="font-bold text-[#0B1F3A] dark:text-white">
                  {isEn ? 'Auto-generate Receipt & Invoice' : 'Tự sinh Phiếu thu & Hóa đơn'}
                </div>
                <p className="text-slate-500 text-[11px]">
                  {isEn
                    ? 'System generates 1st installment receipt (50%), schedules 2nd receivable (net-30), and issues e-invoice.'
                    : 'Hệ thống tạo phiếu thu đợt 1 (50%), mở công nợ đợt 2 theo hạn 30 ngày, xuất hóa đơn điện tử.'}
                </p>
                <div className="pt-2 text-[10px] font-mono text-emerald-600">
                  {isEn ? '→ Signal Emitted: invoice.issued' : '→ Bắn tín hiệu: invoice.issued'}
                </div>
              </div>
            </div>

            {/* Step 3: Customer Service */}
            <div className="p-4 bg-cyan-50/60 dark:bg-cyan-950/30 rounded-xl border border-cyan-200 dark:border-cyan-900/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-900 dark:text-cyan-200 uppercase tracking-wider">
                  {isEn ? 'Fulfillment: CSKH & Implementation' : 'Hậu mãi: CSKH & Triển khai'}
                </span>
                <span className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold">3</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-cyan-100 dark:border-cyan-950 space-y-1.5 text-xs">
                <div className="font-bold text-[#0B1F3A] dark:text-white">
                  {isEn ? 'Auto-open Onboarding Ticket' : 'Mở Ticket Onboarding tự động'}
                </div>
                <p className="text-slate-500 text-[11px]">
                  {isEn
                    ? 'Inherits full Customer 360 profile, sends welcome packet, and schedules kickoff guide.'
                    : 'Kế thừa toàn bộ hồ sơ Customer 360, gửi email chào mừng và kích hoạt lịch hướng dẫn sử dụng.'}
                </p>
                <div className="pt-2 text-[10px] font-mono text-cyan-600">
                  {isEn ? '→ First response SLA: ≤ 15 mins' : '→ SLA phản hồi đầu tiên: ≤ 15 phút'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
