import React from 'react';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { AdminCompanySubNav } from './AdminCompanySubNav';
import { SummaryCards } from '../../common/SummaryCards';
import { TabOverview } from '../../tabs/TabOverview';
import { TabProfile } from '../../tabs/TabProfile';
import { TabStrategy } from '../../tabs/TabStrategy';
import { TabProducts } from '../../tabs/TabProducts';
import { TabBrand } from '../../tabs/TabBrand';
import { TabMedia } from '../../tabs/TabMedia';
import { TabGovernance } from '../../tabs/TabGovernance';
import { Building2, ShieldCheck, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const AdminCompanySection: React.FC = () => {
  const { activeTab, stats, data, isEditing, tempData } = useEnterprise();
  const currentData = isEditing ? tempData : data;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Enterprise Module Banner / Page Heading */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-50/60 via-cyan-50/20 to-transparent rounded-full -mr-16 -mt-16 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-13 h-13 rounded-2xl bg-[#0B1F3A] flex items-center justify-center shrink-0 shadow-sm border border-slate-700">
              <Building2 className="w-7 h-7 text-[#06B6D4]" />
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded">
                  HỒ SƠ GỐC DOANH NGHIỆP
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#0B1F3A] text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
                  {currentData.identity.shortName.value}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Dữ liệu nền tảng lõi {currentData.version}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] tracking-tight mt-1.5">
                Thông tin doanh nghiệp
              </h1>

              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                Hệ thống quản lý dữ liệu gốc, định danh pháp lý, chiến lược phát triển, danh mục sản phẩm và thư viện nhận diện thương hiệu VMC Group.
              </p>
            </div>
          </div>

          {/* Quick Stat Capsule */}
          <div className="flex items-center gap-3 bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/70 shrink-0 self-start md:self-auto">
            <div className="text-center px-2">
              <div className="text-xs text-slate-400 font-medium">Hoàn thiện</div>
              <div className="text-base font-extrabold text-[#155EEF]">{stats?.completionPercentage ?? 100}%</div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="text-center px-2">
              <div className="text-xs text-slate-400 font-medium">Trường gốc</div>
              <div className="text-base font-extrabold text-emerald-600">{stats?.verifiedFields ?? 0}</div>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="text-center px-2">
              <div className="text-xs text-slate-400 font-medium">Cần rà soát</div>
              <div className="text-base font-extrabold text-amber-600">{stats?.needsReviewFields ?? 0}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern 7-item Horizontal Sub-navigation */}
      <AdminCompanySubNav />

      {/* KPI Cards: Shown in Overview tab or at top of Company section */}
      {activeTab === 1 && <SummaryCards />}

      {/* Active Sub-tab View */}
      <div id="tab-active-panel" className="pb-8 transition-all">
        {activeTab === 1 && <TabOverview />}
        {activeTab === 2 && <TabProfile />}
        {activeTab === 3 && <TabStrategy />}
        {activeTab === 4 && <TabProducts />}
        {activeTab === 5 && <TabBrand />}
        {activeTab === 6 && <TabMedia />}
        {activeTab === 7 && <TabGovernance />}
      </div>
    </div>
  );
};
