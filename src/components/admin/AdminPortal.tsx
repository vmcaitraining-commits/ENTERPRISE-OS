import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { Header } from '../common/Header';
import { SummaryCards } from '../common/SummaryCards';
import { TabNavigation } from '../common/TabNavigation';
import { HistoryModal } from '../common/HistoryModal';
import { Toast } from '../common/Toast';
import { TabOverview } from '../tabs/TabOverview';
import { TabProfile } from '../tabs/TabProfile';
import { TabStrategy } from '../tabs/TabStrategy';
import { TabProducts } from '../tabs/TabProducts';
import { TabBrand } from '../tabs/TabBrand';
import { TabMedia } from '../tabs/TabMedia';
import { TabGovernance } from '../tabs/TabGovernance';
import { ArrowLeft, Globe } from 'lucide-react';

export const AdminPortal: React.FC = () => {
  const { activeTab } = useEnterprise();
  const { navigate } = usePublicRouter();

  return (
    <div id="vmc-enterprise-admin-portal" className="min-h-screen bg-[#F8FAFC] flex flex-col text-[#0F172A]">
      {/* Top Banner to toggle back to Public Website */}
      <div className="bg-[#0F172A] text-white px-4 py-2 text-xs flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span className="font-semibold text-amber-300">ADMIN PORTAL:</span>
          <span className="text-slate-300">Hệ thống Quản trị Dữ liệu Doanh nghiệp VMC Group</span>
        </div>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[#06B6D4] hover:text-white font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Về Website Công Khai (vmcgroup.com)</span>
        </button>
      </div>

      {/* Top Application Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* 4 Corporate KPI Summary Cards */}
        <SummaryCards />

        {/* 7 Tab Navigation Bar */}
        <TabNavigation />

        {/* Tab View Panels */}
        <div id="tab-active-panel" className="pb-16 transition-all">
          {activeTab === 1 && <TabOverview />}
          {activeTab === 2 && <TabProfile />}
          {activeTab === 3 && <TabStrategy />}
          {activeTab === 4 && <TabProducts />}
          {activeTab === 5 && <TabBrand />}
          {activeTab === 6 && <TabMedia />}
          {activeTab === 7 && <TabGovernance />}
        </div>
      </main>

      {/* Global Audit Log History Modal */}
      <HistoryModal />

      {/* Interactive Toast Notifications */}
      <Toast />

      {/* Footer */}
      <footer className="border-t border-[#E2E8F0] bg-white py-4 text-center text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>VMC AI ENTERPRISE — Kiến trúc Doanh nghiệp AI Vận hành Thống nhất</span>
          <span>Hệ thống Quản trị Dữ liệu Doanh nghiệp lõi • Phiên bản V1</span>
        </div>
      </footer>
    </div>
  );
};
