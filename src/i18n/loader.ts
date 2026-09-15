import { LocaleCode, TranslationNamespace, TranslationDictionary } from './types';
import { DEFAULT_LOCALE } from './registry';

// Dynamic import maps for lazy loading translation namespaces
export const namespaceLoaders: Record<string, Record<string, () => Promise<{ default: TranslationDictionary }>>> = {
  vi: {
    common: () => import('./locales/vi/common'),
    nav: () => import('./locales/vi/nav'),
    forms: () => import('./locales/vi/forms'),
    accessibility: () => import('./locales/vi/accessibility'),
    notFound: () => import('./locales/vi/notFound'),
    home: () => import('./locales/vi/home'),
    aiEnterprise: () => import('./locales/vi/aiEnterprise'),
    solutions: () => import('./locales/vi/solutions'),
    industries: () => import('./locales/vi/industries'),
    aiCopilots: () => import('./locales/vi/aiCopilots'),
    capabilities: () => import('./locales/vi/capabilities'),
    resources: () => import('./locales/vi/resources'),
    about: () => import('./locales/vi/about'),
    contact: () => import('./locales/vi/contact'),
  },
  en: {
    common: () => import('./locales/en/common'),
    nav: () => import('./locales/en/nav'),
    forms: () => import('./locales/en/forms'),
    accessibility: () => import('./locales/en/accessibility'),
    notFound: () => import('./locales/en/notFound'),
    home: () => import('./locales/en/home'),
    aiEnterprise: () => import('./locales/en/aiEnterprise'),
    solutions: () => import('./locales/en/solutions'),
    industries: () => import('./locales/en/industries'),
    aiCopilots: () => import('./locales/en/aiCopilots'),
    capabilities: () => import('./locales/en/capabilities'),
    resources: () => import('./locales/en/resources'),
    about: () => import('./locales/en/about'),
    contact: () => import('./locales/en/contact'),
  }
};

// In-memory cache for loaded translations: cache[locale][namespace]
const loadedTranslations: Record<string, Record<string, TranslationDictionary>> = {
  vi: {},
  en: {},
  'zh-CN': {},
  ja: {},
  ko: {},
  de: {},
  fr: {},
  es: {}
};

/**
 * Lazily loads a translation namespace for a given locale.
 * If target locale loader does not exist, fallbacks to DEFAULT_LOCALE ('vi').
 */
export const loadNamespace = async (
  locale: LocaleCode,
  namespace: TranslationNamespace
): Promise<TranslationDictionary> => {
  // Return cached dictionary if already loaded
  if (loadedTranslations[locale]?.[namespace]) {
    return loadedTranslations[locale][namespace];
  }

  const localeLoader = namespaceLoaders[locale]?.[namespace];
  if (localeLoader) {
    try {
      const module = await localeLoader();
      if (!loadedTranslations[locale]) {
        loadedTranslations[locale] = {};
      }
      loadedTranslations[locale][namespace] = module.default;
      return module.default;
    } catch (error) {
      console.warn(`[i18n] Failed to load namespace "${namespace}" for locale "${locale}". Falling back to "${DEFAULT_LOCALE}".`, error);
    }
  }

  // Fallback to Vietnamese default
  if (locale !== DEFAULT_LOCALE) {
    if (loadedTranslations[DEFAULT_LOCALE]?.[namespace]) {
      return loadedTranslations[DEFAULT_LOCALE][namespace];
    }
    const fallbackLoader = namespaceLoaders[DEFAULT_LOCALE]?.[namespace];
    if (fallbackLoader) {
      try {
        const module = await fallbackLoader();
        if (!loadedTranslations[DEFAULT_LOCALE]) {
          loadedTranslations[DEFAULT_LOCALE] = {};
        }
        loadedTranslations[DEFAULT_LOCALE][namespace] = module.default;
        return module.default;
      } catch (err) {
        console.warn(`[i18n] Fallback loader failed for "${namespace}" in "${DEFAULT_LOCALE}".`, err);
      }
    }
  }

  return {};
};

/**
 * Global core namespaces required across all pages (navigation, forms, accessibility, 404)
 */
export const CORE_GLOBAL_NAMESPACES: TranslationNamespace[] = [
  'common',
  'nav',
  'forms',
  'accessibility',
  'notFound'
];

/**
 * Page-specific namespaces lazy-loaded on demand per route
 */
export const PAGE_SPECIFIC_NAMESPACES: TranslationNamespace[] = [
  'home',
  'aiEnterprise',
  'solutions',
  'industries',
  'aiCopilots',
  'capabilities',
  'resources',
  'about',
  'contact'
];

/**
 * Resolves the required translation namespace for a given canonical route path
 */
export const getRouteNamespace = (path?: string): TranslationNamespace | null => {
  if (!path) return 'home';
  const cleanPath = path.split('?')[0].split('#')[0];
  if (cleanPath === '/' || cleanPath === '') return 'home';
  if (cleanPath.startsWith('/ai-enterprise')) return 'aiEnterprise';
  if (cleanPath.startsWith('/solutions')) return 'solutions';
  if (cleanPath.startsWith('/industries')) return 'industries';
  if (cleanPath.startsWith('/ai')) return 'aiCopilots';
  if (cleanPath.startsWith('/capabilities')) return 'capabilities';
  if (cleanPath.startsWith('/resources')) return 'resources';
  if (cleanPath.startsWith('/about')) return 'about';
  if (cleanPath.startsWith('/contact')) return 'contact';
  return null;
};

/**
 * Preloads foundational global namespaces for the active locale,
 * and lazy-loads the target route's namespace on demand.
 */
export const preloadCoreNamespaces = async (
  locale: LocaleCode,
  currentPath?: string
): Promise<void> => {
  const namespaces: TranslationNamespace[] = [...CORE_GLOBAL_NAMESPACES];
  const routeNs = getRouteNamespace(currentPath);
  if (routeNs && !namespaces.includes(routeNs)) {
    namespaces.push(routeNs);
  }
  await Promise.all(namespaces.map((ns) => loadNamespace(locale, ns)));
};

/**
 * Synchronous dictionary getter for already loaded namespaces
 */
export const getLoadedDictionary = (locale: LocaleCode, namespace: TranslationNamespace): TranslationDictionary => {
  return loadedTranslations[locale]?.[namespace] || loadedTranslations[DEFAULT_LOCALE]?.[namespace] || {};
};
