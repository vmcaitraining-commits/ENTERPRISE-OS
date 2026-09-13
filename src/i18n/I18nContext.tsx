import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LocaleCode, LocaleMetadata } from './types';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, getPublishedLocales, isSupportedLocale } from './registry';
import { loadNamespace, getLoadedDictionary, preloadCoreNamespaces } from './loader';

export interface I18nContextType {
  locale: LocaleCode;
  setLocale: (newLocale: LocaleCode) => void;
  t: (key: string, defaultText?: string, params?: Record<string, string | number>) => string;
  hasTranslation: (key: string) => boolean;
  isLoading: boolean;
  fallbackLocale: LocaleCode;
  supportedLocales: Record<LocaleCode, LocaleMetadata>;
  publishedLocales: LocaleMetadata[];
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Helper to resolve dot-notation path in object (e.g., 'nav.solutions')
const resolveObjectPath = (obj: any, path: string): any => {
  if (!obj || typeof obj !== 'object') return undefined;
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
};

// Helper to replace {varName} in template string
const interpolate = (text: string, params?: Record<string, string | number>): string => {
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (_, key) => {
    return params[key] !== undefined ? String(params[key]) : `{${key}}`;
  });
};

interface I18nProviderProps {
  children: React.ReactNode;
  initialLocale?: LocaleCode;
  onLocaleChange?: (locale: LocaleCode) => void;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  initialLocale = DEFAULT_LOCALE,
  onLocaleChange
}) => {
  const [locale, setLocaleState] = useState<LocaleCode>(() => {
    return isSupportedLocale(initialLocale) ? initialLocale : DEFAULT_LOCALE;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setVersion] = useState<number>(0); // Trigger re-render after lazy load

  // Sync state if initialLocale changes externally (e.g. from URL popstate)
  useEffect(() => {
    if (initialLocale && initialLocale !== locale && isSupportedLocale(initialLocale)) {
      setLocaleState(initialLocale);
    }
  }, [initialLocale]);

  // Preload core namespaces when locale changes
  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    preloadCoreNamespaces(locale).finally(() => {
      if (mounted) {
        setIsLoading(false);
        setVersion((v) => v + 1);
      }
    });

    // Update document html lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }

    return () => {
      mounted = false;
    };
  }, [locale]);

  const setLocale = useCallback((newLocale: LocaleCode) => {
    if (!isSupportedLocale(newLocale)) return;
    setLocaleState(newLocale);
    onLocaleChange?.(newLocale);
  }, [onLocaleChange]);

  /**
   * Main translation function with robust multi-tier fallback:
   * Tier 1: Match in current locale dictionary
   * Tier 2: Match in Vietnamese default locale dictionary
   * Tier 3: Provided defaultText argument
   * Tier 4: The translation key itself
   */
  const t = useCallback(
    (key: string, defaultText?: string, params?: Record<string, string | number>): string => {
      const [namespace, ...keyParts] = key.split('.');
      const subKey = keyParts.join('.');

      // Tier 1: Look in current locale
      const currentDict = getLoadedDictionary(locale, namespace as any);
      const val = subKey ? resolveObjectPath(currentDict, subKey) : currentDict[key];
      if (typeof val === 'string') {
        return interpolate(val, params);
      }

      // Tier 2: Fallback to Vietnamese dictionary
      if (locale !== DEFAULT_LOCALE) {
        const fallbackDict = getLoadedDictionary(DEFAULT_LOCALE, namespace as any);
        const fallbackVal = subKey ? resolveObjectPath(fallbackDict, subKey) : fallbackDict[key];
        if (typeof fallbackVal === 'string') {
          return interpolate(fallbackVal, params);
        }
      }

      // Tier 3: Default text
      if (defaultText !== undefined) {
        return interpolate(defaultText, params);
      }

      // Tier 4: Fallback to the key itself
      return key;
    },
    [locale]
  );

  const hasTranslation = useCallback(
    (key: string): boolean => {
      const [namespace, ...keyParts] = key.split('.');
      const subKey = keyParts.join('.');
      const dict = getLoadedDictionary(locale, namespace as any);
      const val = subKey ? resolveObjectPath(dict, subKey) : dict[key];
      return typeof val === 'string';
    },
    [locale]
  );

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
        hasTranslation,
        isLoading,
        fallbackLocale: DEFAULT_LOCALE,
        supportedLocales: SUPPORTED_LOCALES,
        publishedLocales: getPublishedLocales()
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
