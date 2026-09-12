/**
 * Design Tokens & Typography Constants for Public Website (VMC Group / AI Enterprise)
 * Ensures consistent colors, typography, elevations, spacing, and radius across all public views.
 */

export const PUBLIC_TOKENS = {
  colors: {
    primaryNavy: '#0B1F3A',
    techBlue: '#155EEF',
    techBlueHover: '#1048b8',
    aiCyan: '#06B6D4',
    accentGold: '#D9A62E',
    darkBg: '#070E1B',
    darkSurface: '#0D182E',
    darkSurfaceElevated: '#112240',
    darkBorder: '#1E293B',
    lightBg: '#F8FAFC',
    lightSurface: '#FFFFFF',
    lightBorder: '#E2E8F0',
  },
  typography: {
    fontFamily: 'font-sans',
    h1: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight',
    h2: 'text-2xl sm:text-3xl font-extrabold tracking-tight',
    h3: 'text-lg sm:text-xl font-bold tracking-tight',
    h4: 'text-sm sm:text-base font-bold',
    body: 'text-sm sm:text-base leading-relaxed',
    bodySmall: 'text-xs sm:text-sm leading-relaxed',
    caption: 'text-[11px] sm:text-xs font-medium',
    code: 'font-mono text-xs',
  },
  radius: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    pill: 'rounded-full',
  },
  shadow: {
    card: 'shadow-xs hover:shadow-md transition-shadow',
    dropdown: 'shadow-xl',
  }
} as const;
