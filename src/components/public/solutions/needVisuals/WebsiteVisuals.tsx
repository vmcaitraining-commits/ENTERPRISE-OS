import React, { useState } from 'react';
import { useI18n } from '../../../../i18n';
import {
  Monitor, Smartphone, ArrowRight, Zap, CheckCircle2,
  TrendingUp, Users, Filter, Globe, Sparkles
} from 'lucide-react';

export const WebsiteVisuals: React.FC = () => {
  const { t, language } = useI18n();
  const isEn = language === 'en';
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(true);

  return (
    <div className="space-y-8">
      {/* 1. KEY VISUAL: DUAL-VIEW PREVIEW (DESKTOP / MOBILE) & REAL-TIME LEAD SYNC */}
      <div className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Top bar with mode switcher */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-blue-800">
                {t('solutions.visuals.website.badgeUnified')}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {isEn ? '[Device Preview]' : '[Trực quan hóa thiết bị]'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white mt-1">
              {t('solutions.visuals.website.titleFunnel')} {t('solutions.visuals.common.illustrativeScenario')}
            </h3>
          </div>

          {/* Device Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
            <button
              type="button"
              onClick={() => setDeviceMode('desktop')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                deviceMode === 'desktop'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>{t('solutions.visuals.website.tabDesktop')}</span>
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode('mobile')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                deviceMode === 'mobile'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{t('solutions.visuals.website.tabMobile')}</span>
            </button>
          </div>
        </div>

        {/* Visual Preview Container */}
        <div className="p-4 sm:p-6 bg-slate-100 dark:bg-slate-950/70 flex justify-center">
          {deviceMode === 'desktop' ? (
            /* Desktop Mockup */
            <div className="w-full max-w-4xl rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
              {/* Browser chrome */}
              <div className="px-4 py-2.5 bg-slate-200 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex-1 max-w-md mx-auto px-3 py-1 rounded bg-white dark:bg-slate-900 text-[11px] font-mono text-slate-500 text-center truncate">
                  https://enterprise.vmcgroup.vn/solutions/ai-enterprise?utm_source=google_ads&utm_campaign=q3_lead
                </div>
              </div>

              {/* Web Page Content & Form */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-cyan-400">
                    {isEn ? 'Breakthrough Architecture' : 'Sản Phẩm Đột Phá'}
                  </span>
                  <h4 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white leading-tight">
                    {isEn ? 'AI Enterprise Operating System' : 'Hệ Điều Hành Doanh Nghiệp Tích Hợp AI'}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {isEn
                      ? 'Unifying 11 operational modules from Marketing, Sales to Accounting and BI on a single governed framework.'
                      : 'Hợp nhất 11 phân hệ nghiệp vụ từ Tiếp thị, Bán hàng đến Kế toán và BI trên một nền tảng duy nhất.'}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{isEn ? '✓ Strict Access Control' : '✓ Hỗ trợ phân quyền chặt chẽ'}</span>
                    <span>{isEn ? '✓ Controlled Operations' : '✓ Vận hành có kiểm soát'}</span>
                  </div>
                </div>

                {/* Form to Lead Sync Demonstration */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">
                      {isEn ? 'Consultation Request Form' : 'Đăng ký tư vấn giải pháp'}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                      Live Form Engine
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block">{isEn ? 'Full Name' : 'Họ và tên'}</span>
                      <div className="p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                        {isEn ? 'Nguyen Van Hung' : 'Nguyễn Văn Hùng'}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">{isEn ? 'Phone & Email' : 'Số điện thoại & Email'}</span>
                      <div className="p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                        0912 345 678 • hung.nguyen@aptech.vn
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">{isEn ? 'Implementation Scope' : 'Nhu cầu triển khai'}</span>
                      <div className="p-1.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                        {isEn ? 'Enterprise CRM + Finance (Scope B + E)' : 'CRM Doanh nghiệp + Kế toán (Scope B + E)'}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    {isEn ? 'Submit Survey Request' : 'Gửi yêu cầu khảo sát'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Mobile Mockup */
            <div className="w-72 rounded-3xl border-4 border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
              <div className="p-3 bg-slate-800 text-white text-center text-[10px] font-mono flex items-center justify-between">
                <span>9:41</span>
                <div className="w-12 h-3 bg-slate-900 rounded-full"></div>
                <span>5G 100%</span>
              </div>
              <div className="p-4 space-y-3">
                <span className="text-[9px] font-bold text-blue-600 uppercase">AI Enterprise Portal</span>
                <h4 className="text-sm font-extrabold text-[#0B1F3A] dark:text-white leading-tight">
                  {isEn ? 'Comprehensive Enterprise Digital Transformation' : 'Chuyển Đổi Số Toàn Diện Doanh Nghiệp'}
                </h4>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-[11px] space-y-1.5">
                  <div className="font-bold">{isEn ? 'Quick Survey Request' : 'Đăng ký khảo sát nhanh'}</div>
                  <div className="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 text-slate-600">0912 345 678</div>
                  <button className="w-full py-1.5 rounded bg-blue-600 text-white text-[10px] font-bold">
                    {isEn ? 'Get Consultation Now' : 'Nhận tư vấn ngay'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2. REAL-TIME DATA TRANSMISSION TO CRM (SCOPE B) */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D182E] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t('solutions.visuals.website.utmEngineTitle')}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {t('solutions.visuals.common.illustrativeData')}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">1. UTM Source</span>
              <span className="font-mono font-bold text-blue-600 dark:text-cyan-400">google_search</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {isEn ? 'Keyword ad channel' : 'Kênh quảng cáo từ khóa'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">2. UTM Campaign</span>
              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">q3_ai_enterprise</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {isEn ? 'Key Q3 campaign' : 'Chiến dịch trọng điểm Q3'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">3. {isEn ? 'Sync Engine' : 'Cơ chế đồng bộ'}</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {isEn ? 'Webhook / API [Simulated]' : 'Webhook / API [Mô phỏng]'}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {isEn ? 'Event-driven stream' : 'Xử lý theo luồng sự kiện'}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">4. {isEn ? 'Auto Lead Score' : 'Lead Score tự động'}</span>
              <span className="font-mono font-bold text-amber-600 dark:text-amber-400">88 / 100</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {isEn ? 'Classified: High Potential' : 'Phân loại Tiềm năng cao'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECONDARY VISUAL: CONVERSION FLOW */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-extrabold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
              {t('solutions.visuals.website.conversionFunnelTitle')}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {isEn
                ? 'Measuring conversion stages from page visitors to won contracts.'
                : 'Đo lường tỷ lệ rớt giá trị từ lượt xem đến hợp đồng thực tế.'}
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            {t('solutions.visuals.common.illustrativeData')}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase block">
              1. {isEn ? 'Web Traffic Visits' : 'Lượt truy cập web'}
            </span>
            <div className="text-base font-extrabold text-[#0B1F3A] dark:text-white mt-1">14,250</div>
            <span className="text-[10px] text-slate-500">
              {isEn ? '100% users' : '100% người dùng'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50">
            <span className="text-[10px] text-blue-600 dark:text-cyan-400 uppercase block">
              2. {isEn ? 'Form Submissions' : 'Điền Form Lead'}
            </span>
            <div className="text-base font-extrabold text-blue-700 dark:text-cyan-400 mt-1">1,180</div>
            <span className="text-[10px] text-blue-600">
              {isEn ? '8.3% form conversion' : '8.3% chuyển đổi form'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50">
            <span className="text-[10px] text-indigo-600 dark:text-indigo-400 uppercase block">
              3. {isEn ? 'Qualified Leads (MQL)' : 'Lead đạt chuẩn (MQL)'}
            </span>
            <div className="text-base font-extrabold text-indigo-700 dark:text-indigo-400 mt-1">890</div>
            <span className="text-[10px] text-indigo-600">
              {isEn ? '75.4% qualified' : '75.4% hợp lệ'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50">
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase block">
              4. {isEn ? 'Won Contracts' : 'Chốt hợp đồng (Won)'}
            </span>
            <div className="text-base font-extrabold text-emerald-700 dark:text-emerald-400 mt-1">245</div>
            <span className="text-[10px] text-emerald-600">
              {isEn ? '27.5% win rate' : '27.5% tỷ lệ chốt'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
