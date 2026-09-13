import { LocaleCode, TranslationNamespace, TranslationDictionary } from './types';
import { DEFAULT_LOCALE } from './registry';

// Dynamic import maps for lazy loading translation namespaces
const namespaceLoaders: Record<string, Record<string, () => Promise<{ default: TranslationDictionary }>>> = {
  vi: {
    common: () => import('./locales/vi/common'),
    nav: () => import('./locales/vi/nav'),
  },
  en: {
    common: () => import('./locales/en/common'),
    nav: () => import('./locales/en/nav'),
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
 * Preloads foundational namespaces for the active locale
 */
export const preloadCoreNamespaces = async (locale: LocaleCode): Promise<void> => {
  await Promise.all([
    loadNamespace(locale, 'common'),
    loadNamespace(locale, 'nav')
  ]);
};

/**
 * Synchronous dictionary getter for already loaded namespaces
 */
export const getLoadedDictionary = (locale: LocaleCode, namespace: TranslationNamespace): TranslationDictionary => {
  return loadedTranslations[locale]?.[namespace] || loadedTranslations[DEFAULT_LOCALE]?.[namespace] || {};
};
