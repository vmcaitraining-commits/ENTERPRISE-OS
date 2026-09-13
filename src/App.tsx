/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { EnterpriseProvider } from './context/EnterpriseContext';
import { PublicRouterProvider, usePublicRouter } from './context/PublicRouterContext';
import { I18nProvider } from './i18n';
import { PublicLayout } from './components/public/PublicLayout';

const AdminPortal = lazy(() =>
  import('./components/admin/AdminPortal').then((m) => ({ default: m.AdminPortal }))
);

const AppRouterSwitcher: React.FC = () => {
  const { isAdminView, locale, changeLocale } = usePublicRouter();

  if (isAdminView) {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 text-[#0F172A]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-mono font-medium text-slate-500">Đang khởi động Admin Portal...</span>
            </div>
          </div>
        }
      >
        <AdminPortal />
      </Suspense>
    );
  }

  return (
    <I18nProvider initialLocale={locale} onLocaleChange={changeLocale}>
      <PublicLayout />
    </I18nProvider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <EnterpriseProvider>
        <PublicRouterProvider>
          <AppRouterSwitcher />
        </PublicRouterProvider>
      </EnterpriseProvider>
    </ThemeProvider>
  );
}


