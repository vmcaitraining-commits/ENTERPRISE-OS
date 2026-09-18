import React from 'react';
import { AdminAuthProvider, AdminAuthGuard } from '../../context/AdminAuthContext';
import { AdminLogin } from './AdminLogin';
import { AdminShell } from './layout/AdminShell';

export const AdminPortal: React.FC = () => {
  return (
    <AdminAuthProvider>
      <AdminAuthGuard loginFallback={<AdminLogin />}>
        <AdminShell />
      </AdminAuthGuard>
    </AdminAuthProvider>
  );
};
