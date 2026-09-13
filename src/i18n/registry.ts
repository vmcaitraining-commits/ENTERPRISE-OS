import { LocaleCode, LocaleMetadata } from './types';

export const DEFAULT_LOCALE: LocaleCode = 'vi';

export const SUPPORTED_LOCALES: Record<LocaleCode, LocaleMetadata> = {
  vi: {
    code: 'vi',
    name: 'Tiếng Việt',
    nativeName: 'Tiếng Việt',
    flag: '🇻🇳',
    status: 'published',
    direction: 'ltr',
    isDefault: true
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    status: 'draft', // Critical Phase 1 safety rule: English is NOT published yet
    direction: 'ltr',
    isDefault: false
  },
  'zh-CN': {
    code: 'zh-CN',
    name: 'Chinese (Simplified)',
    nativeName: '简体中文',
    flag: '🇨🇳',
    status: 'planned',
    direction: 'ltr',
    isDefault: false
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    status: 'planned',
    direction: 'ltr',
    isDefault: false
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    status: 'planned',
    direction: 'ltr',
    isDefault: false
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    status: 'planned',
    direction: 'ltr',
    isDefault: false
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    status: 'planned',
    direction: 'ltr',
    isDefault: false
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    status: 'planned',
    direction: 'ltr',
    isDefault: false
  }
};

export const getLocaleMetadata = (code: string): LocaleMetadata | undefined => {
  return SUPPORTED_LOCALES[code as LocaleCode];
};

export const isSupportedLocale = (code: string): code is LocaleCode => {
  return Object.prototype.hasOwnProperty.call(SUPPORTED_LOCALES, code);
};

export const getPublishedLocales = (): LocaleMetadata[] => {
  return Object.values(SUPPORTED_LOCALES).filter((loc) => loc.status === 'published');
};

export const getAllLocales = (): LocaleMetadata[] => {
  return Object.values(SUPPORTED_LOCALES);
};

export const isLocalePublished = (code: string): boolean => {
  return SUPPORTED_LOCALES[code as LocaleCode]?.status === 'published';
};

const STORAGE_KEY = 'vmc_preferred_locale';

export const getStoredLocale = (): LocaleCode | null => {
  if (typeof window === 'undefined') return null;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && isSupportedLocale(saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access error
  }
  return null;
};

export const setStoredLocale = (locale: LocaleCode): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore
  }
};
