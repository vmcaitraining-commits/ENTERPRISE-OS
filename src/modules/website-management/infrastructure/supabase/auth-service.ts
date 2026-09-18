import { SupabaseClient } from '@supabase/supabase-js';
import { InfrastructureError } from './client';
import { AdminAuthStatus, AdminIdentity } from '../../domain/auth-models';

export interface AdminAuthService {
  getCurrentSession(): Promise<{ identity: AdminIdentity | null, status: AdminAuthStatus }>;
  signInWithPassword(email: string, password: string): Promise<AdminIdentity>;
  signOut(): Promise<void>;
  onAuthStateChange(callback: (status: AdminAuthStatus, identity: AdminIdentity | null) => void): { unsubscribe: () => void };
}

export class SupabaseAdminAuthService implements AdminAuthService {
  constructor(private client: SupabaseClient | null) {}

  public async getCurrentSession(): Promise<{ identity: AdminIdentity | null, status: AdminAuthStatus }> {
    if (!this.client) {
      return { identity: null, status: 'NOT_CONFIGURED' };
    }

    try {
      const { data, error } = await this.client.auth.getSession();
      
      if (error) {
        return { identity: null, status: 'ERROR' };
      }

      if (!data.session) {
        return { identity: null, status: 'SIGNED_OUT' };
      }

      const identity: AdminIdentity = {
        userId: data.session.user.id,
        email: data.session.user.email || '',
        displayName: data.session.user.user_metadata?.displayName,
        sessionStatus: 'ACTIVE',
        provider: data.session.user.app_metadata?.provider || 'email',
        authenticatedAt: Date.now() // Close enough representation for client
      };

      return { identity, status: 'AUTHENTICATED' };
    } catch (e) {
      return { identity: null, status: 'ERROR' };
    }
  }

  public async signInWithPassword(email: string, password: string): Promise<AdminIdentity> {
    if (!this.client) {
      throw new InfrastructureError('CONFIGURATION_ERROR', 'Supabase is not configured.');
    }

    const { data, error } = await this.client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Return safe message
      throw new InfrastructureError('AUTH_REQUIRED', error.message, error);
    }

    if (!data.session) {
      throw new InfrastructureError('AUTH_REQUIRED', 'No session established');
    }

    return {
      userId: data.session.user.id,
      email: data.session.user.email || '',
      displayName: data.session.user.user_metadata?.displayName,
      sessionStatus: 'ACTIVE',
      provider: data.session.user.app_metadata?.provider || 'email',
      authenticatedAt: Date.now()
    };
  }

  public async signOut(): Promise<void> {
    if (!this.client) return;
    const { error } = await this.client.auth.signOut();
    if (error) {
       console.error("SignOut error:", error);
    }
  }

  public onAuthStateChange(callback: (status: AdminAuthStatus, identity: AdminIdentity | null) => void): { unsubscribe: () => void } {
    if (!this.client) {
      return { unsubscribe: () => {} };
    }

    const { data: { subscription } } = this.client.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        callback('SIGNED_OUT', null);
      } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        const identity: AdminIdentity = {
          userId: session.user.id,
          email: session.user.email || '',
          displayName: session.user.user_metadata?.displayName,
          sessionStatus: 'ACTIVE',
          provider: session.user.app_metadata?.provider || 'email',
          authenticatedAt: Date.now()
        };
        callback('AUTHENTICATED', identity);
      }
    });

    return {
      unsubscribe: () => {
        subscription.unsubscribe();
      }
    };
  }
}
