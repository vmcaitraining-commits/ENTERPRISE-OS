import React, { useState, useEffect } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { AdminSidebar } from './AdminSidebar';
import { AdminTopBar } from './AdminTopBar';
import { HistoryModal } from '../../common/HistoryModal';
import { Toast } from '../../common/Toast';

// Sibling Independent Pages
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { CompanyOverviewPage } from '../pages/CompanyOverviewPage';
import { CompanyProfilePage } from '../pages/CompanyProfilePage';
import { CompanyStrategyPage } from '../pages/CompanyStrategyPage';
import { CompanyProductsMarketPage } from '../pages/CompanyProductsMarketPage';
import { CompanyBrandPage } from '../pages/CompanyBrandPage';
import { CompanyMediaPage } from '../pages/CompanyMediaPage';
import { CompanyDataReviewPage } from '../pages/CompanyDataReviewPage';

import { WebsiteOverviewPage } from '../pages/WebsiteOverviewPage';
import { WebsiteContentPage } from '../pages/WebsiteContentPage';
import { WebsiteBuilderPage } from '../pages/WebsiteBuilderPage';

import { AdminPlaceholderModule } from './AdminPlaceholderModule';

export const AdminShell: React.FC = () => {
  const { currentPath, navigate } = usePublicRouter();

  // Desktop sidebar collapse & mobile drawer
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isOpenMobileSidebar, setIsOpenMobileSidebar] = useState<boolean>(false);

  // Canonical route normalization for bare prefixes (Single Source of Truth)
  useEffect(() => {
    if (currentPath === '/admin/company') {
      navigate('/admin/company/overview', { scrollToTop: false });
    } else if (currentPath === '/admin/website') {
      navigate('/admin/website/overview', { scrollToTop: false });
    }
  }, [currentPath, navigate]);

  // Determine which page component to render directly from currentPath
  const renderActivePage = () => {
    // 1. Dashboard Home Page
    if (currentPath === '/admin' || currentPath === '/admin/dashboard') {
      return <AdminDashboardPage />;
    }

    // 2. Company Module Pages
    if (currentPath === '/admin/company' || currentPath === '/admin/company/overview') {
      return <CompanyOverviewPage />;
    }
    if (currentPath === '/admin/company/profile') {
      return <CompanyProfilePage />;
    }
    if (currentPath === '/admin/company/strategy') {
      return <CompanyStrategyPage />;
    }
    if (currentPath === '/admin/company/products-market') {
      return <CompanyProductsMarketPage />;
    }
    if (currentPath === '/admin/company/brand') {
      return <CompanyBrandPage />;
    }
    if (currentPath === '/admin/company/media') {
      return <CompanyMediaPage />;
    }
    if (currentPath === '/admin/company/data-review') {
      return <CompanyDataReviewPage />;
    }

    // 3. Website Module Pages
    if (currentPath === '/admin/website' || currentPath === '/admin/website/overview') {
      return <WebsiteOverviewPage />;
    }
    if (currentPath === '/admin/website/content') {
      return <WebsiteContentPage />;
    }
    if (currentPath === '/admin/website/builder') {
      return <WebsiteBuilderPage />;
    }

    // 4. Expansion Modules
    if (currentPath === '/admin/crm') {
      return <AdminPlaceholderModule moduleId="crm" onNavigate={(target) => navigate(`/admin/${target}`)} />;
    }
    if (currentPath === '/admin/marketing') {
      return <AdminPlaceholderModule moduleId="marketing" onNavigate={(target) => navigate(`/admin/${target}`)} />;
    }
    if (currentPath === '/admin/cskh') {
      return <AdminPlaceholderModule moduleId="cskh" onNavigate={(target) => navigate(`/admin/${target}`)} />;
    }
    if (currentPath === '/admin/hr') {
      return <AdminPlaceholderModule moduleId="hr" onNavigate={(target) => navigate(`/admin/${target}`)} />;
    }
    if (currentPath === '/admin/finance') {
      return <AdminPlaceholderModule moduleId="finance" onNavigate={(target) => navigate(`/admin/${target}`)} />;
    }
    if (currentPath === '/admin/system') {
      return <AdminPlaceholderModule moduleId="system" onNavigate={(target) => navigate(`/admin/${target}`)} />;
    }

    // Default Fallback
    return <AdminDashboardPage />;
  };

  return (
    <div id="vmc-enterprise-admin-portal" className="min-h-screen bg-[#F7F9FC] flex text-[#0F1F3D]">
      {/* Light Sidebar (Fixed Left) */}
      <AdminSidebar
        currentPath={currentPath}
        isCollapsed={isSidebarCollapsed}
        isOpenMobile={isOpenMobileSidebar}
        onCloseMobile={() => setIsOpenMobileSidebar(false)}
        onToggleCollapse={() => setIsSidebarCollapsed(prev => !prev)}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-200 ease-in-out ${
          isSidebarCollapsed ? 'lg:pl-[72px]' : 'lg:pl-[270px]'
        }`}
      >
        {/* Topbar */}
        <AdminTopBar
          currentPath={currentPath}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(prev => !prev)}
          onOpenMobile={() => setIsOpenMobileSidebar(true)}
        />

        {/* Dynamic Page Content Area */}
        <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div id="admin-page-content">
            {renderActivePage()}
          </div>
        </main>

        {/* Global Modals & Notifications */}
        <HistoryModal />
        <Toast />

        {/* Clean Admin Footer */}
        <footer className="border-t border-[#E5EAF1] bg-white py-3.5 text-xs text-[#64748B] shrink-0">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <span className="font-medium text-[#0F1F3D]">
              VMC AI ENTERPRISE — Kiến trúc Doanh nghiệp AI Vận hành Thống nhất
            </span>
            <span className="text-slate-400 font-mono text-[11px]">
              Admin Control Center • Phiên bản V1.0 • Supabase Auth Live
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
