/**
 * VMC Group — Admin UI Design 3 System Tokens
 * Premium Light Enterprise Admin System
 */

export const ADMIN_TOKENS = {
  colors: {
    // Canvas & Surfaces
    canvas: '#F7F9FC',
    card: '#FFFFFF',
    sidebar: '#FFFFFF',
    topbar: '#FFFFFF',
    border: '#E5EAF1',
    borderSubtle: '#F1F5F9',
    
    // Typography
    textPrimary: '#0F1F3D',
    textSecondary: '#64748B',
    textMuted: '#94A3B8',
    
    // Actions & Accents
    primaryAction: '#155EEF', // Royal Blue
    primaryHover: '#004EEB',
    primaryLight: '#EFF4FF',
    accent: '#06B6D4', // AI Cyan
    accentLight: '#ECFEFF',
    
    // Semantics
    success: '#10B981',
    successLight: '#ECFDF5',
    successText: '#065F46',
    warning: '#F59E0B',
    warningLight: '#FFFBEB',
    warningText: '#92400E',
    danger: '#EF4444',
    dangerLight: '#FEF2F2',
    dangerText: '#991B1B',
  },
  
  // Dimensions
  layout: {
    sidebarWidth: 270,
    sidebarCollapsedWidth: 72,
    topbarHeight: 64,
    contentMaxWidth: '1440px',
  },
  
  // Radii
  radius: {
    sm: 'rounded-md',    // 6px
    md: 'rounded-lg',    // 8px
    lg: 'rounded-xl',    // 12px (Standard card)
    xl: 'rounded-2xl',   // 16px
    full: 'rounded-full'
  },
  
  // Transitions
  transition: 'transition-all duration-150 ease-in-out',
} as const;
