import React, { useState } from 'react';
import { useI18n } from '../../../../i18n';
import {
  BarChart3, TrendingUp, DollarSign, Users, Award, ShieldCheck,
  ChevronRight, ArrowUpRight, ArrowDownRight, Layers, FileSpreadsheet,
  ExternalLink, Search
} from 'lucide-react';

export const BiVisuals: React.FC = () => {
  const { t, language } = useI18n();
  const isEn = language === 'en';
  const [activeDrilldown, setActiveDrilldown] = useState<string | null>('TX-8841');

  return (
    <div className="space-y-8">
      {/* 1. KEY ARCHITECTURE: 3-TIER BUSINESS INTELLIGENCE DASHBOARD */}
      <div className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-blue-800">
                {t('solutions.visuals.bi.badgeArch')}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {t('solutions.visuals.common.illustrativeData')}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white mt-1">
              {t('solutions.visuals.bi.titleDashboard')} {t('solutions.visuals.common.illustrativeData')}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isEn ? 'Role-based access control' : 'Phân quyền xem theo chức danh'}</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-8">
          {/* TẦNG 1: EXECUTIVE KPI SCORECARD */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h4 className="text-xs font-extrabold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
                  {t('solutions.visuals.bi.tier1Title')} {t('solutions.visuals.common.illustrativeData')}
                </h4>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {isEn ? '[Illustrative] Updated 2 mins ago' : '[Minh họa] Cập nhật 2 phút trước'}
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 block">
                  {isEn ? 'Monthly Cumulative Revenue' : 'Doanh thu lũy kế tháng'}
                </span>
                <div className="text-lg sm:text-xl font-extrabold text-[#0B1F3A] dark:text-white mt-1">
                  4,850,000,000 VND
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>{isEn ? '+18.4% vs last month' : '+18.4% so với tháng trước'}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 block">
                  {isEn ? 'OKR Completion Rate' : 'Tiến độ hoàn thành OKR'}
                </span>
                <div className="text-lg sm:text-xl font-extrabold text-[#155EEF] dark:text-[#06B6D4] mt-1">
                  78.2%
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                  <span>{isEn ? 'Annual target: 90% (On track)' : 'Mục tiêu năm: 90% (Đúng lộ trình)'}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 block">
                  {isEn ? 'Deal Win Rate' : 'Tỷ lệ chốt hợp đồng (Win Rate)'}
                </span>
                <div className="text-lg sm:text-xl font-extrabold text-[#0B1F3A] dark:text-white mt-1">
                  34.8%
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>{isEn ? '+4.2% from CRM pipeline (Scope B)' : '+4.2% từ phễu CRM (Scope B)'}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 block">
                  {isEn ? 'CS Support SLA Response Time' : 'Thời gian phản hồi SLA CSKH'}
                </span>
                <div className="text-lg sm:text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                  4.2 {isEn ? 'mins' : 'phút'}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                  <span>{isEn ? 'Committed threshold < 15 mins' : 'Ngưỡng cam kết < 15 phút'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* TẦNG 2: XU HƯỚNG THỜI GIAN (TREND ANALYTICS BIỂU ĐỒ TRỰC QUAN) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h4 className="text-xs font-extrabold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
                  {t('solutions.visuals.bi.tier2Title')}
                </h4>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-blue-600 inline-block"></span>
                  <span className="text-slate-600 dark:text-slate-300 font-medium">
                    {isEn ? 'Actual' : 'Thực tế đạt'}
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-slate-300 dark:bg-slate-700 inline-block"></span>
                  <span className="text-slate-400 font-medium">
                    {isEn ? 'Target Plan' : 'Kế hoạch chỉ tiêu'}
                  </span>
                </span>
              </div>
            </div>

            {/* SVG Visual Bar Chart */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="h-44 w-full flex items-end justify-between gap-3 sm:gap-6 pt-4 pb-2 px-2">
                {[
                  { month: isEn ? 'Apr' : 'Tháng 4', actual: 65, target: 60, label: '3.2B' },
                  { month: isEn ? 'May' : 'Tháng 5', actual: 75, target: 70, label: '3.8B' },
                  { month: isEn ? 'Jun' : 'Tháng 6', actual: 82, target: 75, label: '4.1B' },
                  { month: isEn ? 'Jul' : 'Tháng 7', actual: 88, target: 80, label: '4.4B' },
                  { month: isEn ? 'Aug' : 'Tháng 8', actual: 95, target: 85, label: '4.75B' },
                  { month: isEn ? 'Sep' : 'Tháng 9', actual: 98, target: 90, label: '4.85B' }
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <span className="text-[10px] font-mono text-slate-500 font-bold">{item.label}</span>
                    <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-32">
                      <div
                        className="w-1/2 bg-blue-600 dark:bg-cyan-500 rounded-t-sm transition-all"
                        style={{ height: `${item.actual}%` }}
                        title={`${isEn ? 'Actual' : 'Thực tế'}: ${item.actual}%`}
                      ></div>
                      <div
                        className="w-1/2 bg-slate-300 dark:bg-slate-700 rounded-t-sm transition-all"
                        style={{ height: `${item.target}%` }}
                        title={`${isEn ? 'Target' : 'Kế hoạch'}: ${item.target}%`}
                      ></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium mt-1 truncate">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TẦNG 3: DRILL-DOWN CHI TIẾT ĐẾN BẢN GHI NGUỒN */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h4 className="text-xs font-extrabold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
                  {t('solutions.visuals.bi.tier3Title')}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                {isEn ? 'Click to inspect sample document audit flow [Illustrative]' : 'Nhấn chọn để xem luồng truy xuất chứng từ mẫu [Dữ liệu minh họa]'}
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-400 text-[11px]">
                    <th className="py-2.5 px-3">{isEn ? 'TRANSACTION ID' : 'MÃ GIAO DỊCH'}</th>
                    <th className="py-2.5 px-3">{isEn ? 'CLIENT / PARTNER' : 'KHÁCH HÀNG / ĐỐI TÁC'}</th>
                    <th className="py-2.5 px-3">{isEn ? 'SOURCE MODULE' : 'PHÂN HỆ NGUỒN'}</th>
                    <th className="py-2.5 px-3">{isEn ? 'VALUE' : 'GIÁ TRỊ'}</th>
                    <th className="py-2.5 px-3">{isEn ? 'LOGGED DATE' : 'NGÀY GHI NHẬN'}</th>
                    <th className="py-2.5 px-3">{isEn ? 'STATUS' : 'TRẠNG THÁI'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
                  {[
                    {
                      id: 'TX-8841',
                      client: isEn ? 'An Phat Technology JSC' : 'Công ty Cổ phần Công nghệ An Phát',
                      scope: isEn ? 'Scope B (CRM) → Scope E (Finance)' : 'Scope B (CRM) → Scope E (Kế toán)',
                      val: '800,000,000 VND',
                      date: '12/09/2026 14:22',
                      status: isEn ? 'Matched Bank UNC' : 'Đã khớp UNC BIDV'
                    },
                    {
                      id: 'TX-8839',
                      client: isEn ? 'Thien Nam Pharma Group' : 'Tập đoàn Dược phẩm Thiên Nam',
                      scope: isEn ? 'Scope B (Sales) → Scope E' : 'Scope B (Bán hàng) → Scope E',
                      val: '1,200,000,000 VND',
                      date: '11/09/2026 10:15',
                      status: isEn ? 'E-Contract Signed' : 'Đã ký hợp đồng điện tử'
                    },
                    {
                      id: 'TX-8835',
                      client: isEn ? 'Toan Cau Logistics Ltd' : 'Công ty TNHH Vận tải Toàn Cầu',
                      scope: isEn ? 'Scope D (CS & Support)' : 'Scope D (CSKH & Dịch vụ)',
                      val: '150,000,000 VND',
                      date: '10/09/2026 16:40',
                      status: isEn ? 'Maintenance Renewed' : 'Gia hạn gói bảo trì'
                    },
                    {
                      id: 'TX-8830',
                      client: isEn ? 'Hoang Phuc Retail Chain' : 'Chuỗi Bán lẻ Hoàng Phúc',
                      scope: isEn ? 'Scope A (Portal)' : 'Scope A (Website Portal)',
                      val: '450,000,000 VND',
                      date: '09/09/2026 09:30',
                      status: isEn ? 'Phase 2 Acceptance' : 'Nghiệm thu giai đoạn 2'
                    }
                  ].map((row) => (
                    <tr
                      key={row.id}
                      onClick={() => setActiveDrilldown(row.id)}
                      className={`cursor-pointer transition-colors ${
                        activeDrilldown === row.id
                          ? 'bg-blue-50/70 dark:bg-blue-950/40 font-semibold'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <td className="py-3 px-3 font-mono text-blue-600 dark:text-cyan-400">{row.id}</td>
                      <td className="py-3 px-3 text-slate-800 dark:text-slate-200">{row.client}</td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-400 font-mono text-[11px]">{row.scope}</td>
                      <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{row.val}</td>
                      <td className="py-3 px-3 text-slate-500 text-[11px]">{row.date}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {activeDrilldown && (
              <div className="p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between text-xs">
                <span className="text-blue-700 dark:text-cyan-300 font-medium">
                  {isEn ? (
                    <>
                      Source record audit preview <strong>{activeDrilldown}</strong>: Supports matching sample VAT invoice HD-004291 and original contract upon data integration.
                    </>
                  ) : (
                    <>
                      Mô phỏng truy vấn bản ghi nguồn <strong>{activeDrilldown}</strong>: Hỗ trợ đối chiếu hóa đơn GTGT điện tử mẫu HD-004291 và Hợp đồng kinh tế gốc khi có kết nối dữ liệu.
                    </>
                  )}
                </span>
                <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 underline cursor-pointer flex items-center gap-1">
                  <span>{isEn ? 'Open Sample Doc' : 'Mở chứng từ mẫu'}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
