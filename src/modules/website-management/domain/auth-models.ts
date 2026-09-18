export type AdminAuthStatus = 
  | 'NOT_CONFIGURED' 
  | 'CONFIGURED_NOT_CONNECTED' 
  | 'SIGNED_OUT' 
  | 'AUTHENTICATING' 
  | 'AUTHENTICATED' 
  | 'ERROR';

export interface AdminIdentity {
  userId: string;
  email: string;
  displayName?: string;
  sessionStatus: 'ACTIVE' | 'EXPIRED' | 'UNKNOWN';
  provider: string;
  authenticatedAt: number;
}
