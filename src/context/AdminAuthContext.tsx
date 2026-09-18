import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AdminAuthStatus, AdminIdentity } from '../modules/website-management/domain/auth-models';
import { SupabaseClientFactory } from '../modules/website-management/infrastructure/supabase/client';
import { SupabaseAdminAuthService } from '../modules/website-management/infrastructure/supabase/auth-service';
import { usePublicRouter } from './PublicRouterContext';

// State enforcement for preparation phase
export type AuthEnforcementState = 'ENFORCED';

interface AdminAuthContextType {
  status: AdminAuthStatus;
  identity: AdminIdentity | null;
  enforcementState: AuthEnforcementState;
  authService: SupabaseAdminAuthService;
  refreshSession: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<AdminAuthStatus>('AUTHENTICATING');
  const [identity, setIdentity] = useState<AdminIdentity | null>(null);
  
  // W3.5D2 Live Supabase Auth: ENFORCED
  const enforcementState: AuthEnforcementState = 'ENFORCED';
  
  // Singleton instance
  const [authService] = useState(() => {
    const client = SupabaseClientFactory.getClient();
    return new SupabaseAdminAuthService(client);
  });

  const refreshSession = async () => {
    setStatus('AUTHENTICATING');
    const result = await authService.getCurrentSession();
    setIdentity(result.identity);
    setStatus(result.status);
  };

  useEffect(() => {
    // Initial load
    refreshSession();

    // Subscribe to events
    const { unsubscribe } = authService.onAuthStateChange((newStatus, newIdentity) => {
      setStatus(newStatus);
      setIdentity(newIdentity);
    });

    return () => unsubscribe();
  }, [authService]);

  return (
    <AdminAuthContext.Provider value={{ status, identity, enforcementState, authService, refreshSession }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

// Guard component - STRICT ENFORCEMENT: ONLY AUTHENTICATED MAY RENDER ADMIN PORTAL
export const AdminAuthGuard: React.FC<{ children: ReactNode; loginFallback?: ReactNode }> = ({ 
  children, 
  loginFallback 
}) => {
  const { status } = useAdminAuth();
  const { currentPath, navigate } = usePublicRouter();

  useEffect(() => {
    // If authenticated user visits /admin/login, redirect safely to /admin
    if (currentPath === '/admin/login' && status === 'AUTHENTICATED') {
      navigate('/admin');
    }
  }, [currentPath, status, navigate]);

  useEffect(() => {
    // If user is signed out or error or not configured, and not currently on /admin/login, redirect to /admin/login
    if ((status === 'SIGNED_OUT' || status === 'ERROR' || status === 'NOT_CONFIGURED') && currentPath !== '/admin/login') {
      navigate('/admin/login');
    }
  }, [status, currentPath, navigate]);

  // While session is being checked: show loading screen (NO AUTH FLASH)
  if (status === 'AUTHENTICATING') {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-[#0F172A]">
        <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-sm font-medium text-slate-500">Đang kiểm tra phiên xác thực quản trị...</p>
      </div>
    );
  }

  // If authenticated user opens /admin/login: redirect to /admin
  if (currentPath === '/admin/login') {
    if (status === 'AUTHENTICATED') {
      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-[#0F172A]">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-sm font-medium text-slate-500">Đã xác thực. Đang chuyển hướng về Admin Portal...</p>
        </div>
      );
    }
    return <>{loginFallback}</>;
  }

  // If NOT authenticated (SIGNED_OUT, NOT_CONFIGURED, ERROR):
  // STRICT SECURITY: NEVER render children (<AdminPortalContent />). Show login screen immediately.
  if (status !== 'AUTHENTICATED') {
    return <>{loginFallback}</>;
  }

  // ONLY authenticated users can ever reach children (<AdminPortalContent />)
  return <>{children}</>;
};
