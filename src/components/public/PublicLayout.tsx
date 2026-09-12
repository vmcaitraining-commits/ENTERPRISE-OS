import React from 'react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';
import { ConsultationModal } from './ConsultationModal';
import { CustomCursor } from './CustomCursor';
import { Toast } from '../common/Toast';
import { HomePage } from './pages/HomePage';
import { AiEnterprisePage } from './pages/AiEnterprisePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { AiAutomationPage } from './pages/AiAutomationPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const PublicLayout: React.FC = () => {
  const { currentPath } = usePublicRouter();

  const renderContent = () => {
    if (currentPath === '/') {
      return <HomePage />;
    }
    if (currentPath.startsWith('/ai-enterprise')) {
      return <AiEnterprisePage />;
    }
    if (currentPath.startsWith('/solutions')) {
      return <SolutionsPage />;
    }
    if (currentPath.startsWith('/industries')) {
      return <IndustriesPage />;
    }
    if (currentPath.startsWith('/ai')) {
      return <AiAutomationPage />;
    }
    if (currentPath.startsWith('/capabilities')) {
      return <CapabilitiesPage />;
    }
    if (currentPath.startsWith('/resources')) {
      return <ResourcesPage />;
    }
    if (currentPath.startsWith('/about')) {
      return <AboutPage />;
    }
    if (currentPath.startsWith('/contact')) {
      return <ContactPage />;
    }
    // Unmatched public routes
    return <NotFoundPage />;
  };

  return (
    <div
      id="vmc-public-website"
      className="min-h-screen bg-[#F8FAFC] dark:bg-[#070E1B] flex flex-col text-[#0F172A] dark:text-[#F8FAFC] font-sans antialiased selection:bg-[#155EEF] selection:text-white transition-colors duration-200 overflow-x-hidden"
    >
      {/* Desktop Precision Custom Cursor */}
      <CustomCursor />

      {/* Public Header */}
      <PublicHeader />

      {/* Main Page Body */}
      <main className="flex-1 w-full overflow-x-hidden">
        {renderContent()}
      </main>

      {/* Public Footer */}
      <PublicFooter />

      {/* Interactive Consultation Modal */}
      <ConsultationModal />

      {/* Toast notifications */}
      <Toast />
    </div>
  );
};
