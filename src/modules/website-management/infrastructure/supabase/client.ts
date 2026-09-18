import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Configuration status typed model
export type SupabaseConfigStatus = 'NOT_CONFIGURED' | 'CONFIGURED_NOT_VERIFIED' | 'CONNECTED';

// Explicit mode for the repository
export type RepositoryMode = 'LOCAL_DEVELOPMENT' | 'SUPABASE';

// Error architecture
export type InfrastructureErrorType = 
  | 'CONFIGURATION_ERROR'
  | 'NETWORK_ERROR'
  | 'AUTH_REQUIRED'
  | 'FORBIDDEN'
  | 'STORAGE_ERROR'
  | 'DATABASE_ERROR';

export class InfrastructureError extends Error {
  constructor(
    public type: InfrastructureErrorType,
    message: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'InfrastructureError';
  }
}

// Client Factory / Singleton to avoid repeatedly creating clients
export class SupabaseClientFactory {
  private static instance: SupabaseClient | null = null;

  public static getStatus(): SupabaseConfigStatus {
    // We are using Vite environment variables. 
    // They must start with VITE_ to be exposed to the browser client safely.
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!url || !key) {
      return 'NOT_CONFIGURED';
    }

    // Currently we do not execute a health check in W3.5A,
    // so we return CONFIGURED_NOT_VERIFIED
    return 'CONFIGURED_NOT_VERIFIED';
  }

  public static getClient(): SupabaseClient | null {
    if (this.instance) {
      return this.instance;
    }

    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!url || !key) {
      return null;
    }

    // Create the client with safe settings
    this.instance = createClient(url, key, {
      auth: {
        persistSession: true,
      }
    });

    return this.instance;
  }
}
