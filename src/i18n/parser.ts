import { LocaleCode } from './types';
import { DEFAULT_LOCALE, isSupportedLocale } from './registry';

export interface ParsedPathResult {
  locale: LocaleCode;
  canonicalPath: string;
  anchor?: string;
  hasLocalePrefix: boolean;
}

/**
 * Parses any incoming browser path into its active locale and canonical route path.
 * Strict safety rules:
 * 1. /admin is ALWAYS reserved and never treated as a locale prefix.
 * 2. Unprefixed paths default to DEFAULT_LOCALE ('vi').
 * 3. Supports clean URLs: /en/solutions/crm -> locale: 'en', canonicalPath: '/solutions/crm'.
 */
export const parsePathLocale = (rawPath: string): ParsedPathResult => {
  if (!rawPath || rawPath === '') {
    return {
      locale: DEFAULT_LOCALE,
      canonicalPath: '/',
      hasLocalePrefix: false
    };
  }

  // Extract hash anchor if present
  const [pathWithoutAnchor, anchor] = rawPath.split('#');
  let cleanPath = pathWithoutAnchor;

  // Admin route safeguard
  if (cleanPath === '/admin' || cleanPath.startsWith('/admin/')) {
    return {
      locale: DEFAULT_LOCALE,
      canonicalPath: cleanPath,
      anchor,
      hasLocalePrefix: false
    };
  }

  // Ensure leading slash
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  // Normalize trailing slash (e.g. /xx/ -> /xx, except root /)
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const segments = cleanPath.split('/').filter(Boolean);

  // If first segment matches a supported locale (e.g. 'en')
  if (segments.length > 0) {
    const candidateLocale = segments[0];
    if (isSupportedLocale(candidateLocale)) {
      const rest = segments.slice(1);
      const canonicalPath = rest.length > 0 ? '/' + rest.join('/') : '/';
      return {
        locale: candidateLocale,
        canonicalPath,
        anchor,
        hasLocalePrefix: true
      };
    }
  }

  // No locale prefix found -> default to Vietnamese
  return {
    locale: DEFAULT_LOCALE,
    canonicalPath: cleanPath,
    anchor,
    hasLocalePrefix: false
  };
};

/**
 * Constructs the browser path for a given canonical route and target locale.
 */
export const buildLocalizedPath = (path: string, locale: LocaleCode, anchor?: string): string => {
  // Never localize admin
  if (path === '/admin' || path.startsWith('/admin/')) {
    return path;
  }

  // Separate any existing anchor in path
  const [pathWithoutAnchor, inlineAnchor] = path.split('#');

  // Safely extract canonical path even if input already has a locale prefix
  const parsed = parsePathLocale(pathWithoutAnchor);
  let base = parsed.canonicalPath;
  if (!base.startsWith('/')) base = '/' + base;

  let localized = base;
  if (locale !== DEFAULT_LOCALE) {
    localized = base === '/' ? `/${locale}` : `/${locale}${base}`;
  }

  const finalAnchor = anchor || inlineAnchor;
  if (finalAnchor) {
    localized += `#${finalAnchor}`;
  }

  return localized;
};
