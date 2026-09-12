/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { EnterpriseProvider } from './context/EnterpriseContext';
import { PublicRouterProvider, usePublicRouter } from './context/PublicRouterContext';
import { PublicLayout } from './components/public/PublicLayout';
import { AdminPortal } from './components/admin/AdminPortal';

const AppRouterSwitcher: React.FC = () => {
  const { isAdminView } = usePublicRouter();

  if (isAdminView) {
    return <AdminPortal />;
  }

  return <PublicLayout />;
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


