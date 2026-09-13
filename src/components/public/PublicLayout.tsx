import React, { Suspense, lazy } from 'react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { PublicHeader } from './PublicHeader';
import { PublicFooter } from './PublicFooter';
import { ConsultationModal } from './ConsultationModal';
import { CustomCursor } from './CustomCursor';
import { Toast } from '../common/Toast';
import { HomePage } from './pages/HomePage';

// Route-level code splitting for non-homepage views
const AiEnterprisePage = lazy(() => import('./pages/AiEnterprisePage').then((m) => ({ default: m.AiEnterprisePage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then((m) => ({ default: m.SolutionsPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then((m) => ({ default: m.IndustriesPage })));
const AiAutomationPage = lazy(() => import('./pages/AiAutomationPage').then((m) => ({ default: m.AiAutomationPage })));
const CapabilitiesPage = lazy(() => import('./pages/CapabilitiesPage').then((m) => ({ default: m.CapabilitiesPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then((m) => ({ default: m.ResourcesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center p-8 text-[#0F172A] dark:text-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-[#155EEF] border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Đang tải nội dung...</span>
    </div>
  </div>
);

export const PublicLayout: React.FC = () => {
  const { currentPath } = usePublicRouter();

  const renderContent = () => {
    if (currentPath === '/') {
      return <HomePage />;
    }
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        {(() => {
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
        })()}
      </Suspense>
    );
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
