import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { useI18n } from '../../i18n/I18nContext';
import { LocaleCode, LocaleMetadata } from '../../i18n/types';
import { SUPPORTED_LOCALES, isLocalePublished } from '../../i18n/registry';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
  onItemSelect?: () => void;
}

// Ordered list of all 8 locales for consistent presentation
const ALL_LOCALE_CODES: LocaleCode[] = [
  'vi',
  'en',
  'zh-CN',
  'ja',
  'ko',
  'de',
  'fr',
  'es'
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'desktop',
  onItemSelect
}) => {
  const { locale, changeLocale, currentPath } = usePublicRouter();
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobilePlannedOpen, setIsMobilePlannedOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Determine if draft mode (e.g. English) is allowed for selection:
  // Allowed if running in dev environment (Vite DEV mode) OR if current URL is already a draft locale
  const isDevOrTestMode = Boolean(
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.DEV) ||
    !isLocalePublished(locale) ||
    (typeof window !== 'undefined' && window.location.search.includes('test_i18n=1'))
  );

  // Close dropdown on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on route/path change
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  // Handle keyboard navigation for desktop dropdown
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
          e.preventDefault();
          setIsOpen(true);
        }
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        // Allow natural tab out, but close dropdown
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  const handleSelectLocale = (code: LocaleCode) => {
    const isSelectable = isLocalePublished(code) || (code === 'en' && isDevOrTestMode);
    if (!isSelectable) return;

    changeLocale(code);
    setIsOpen(false);
    onItemSelect?.();
    buttonRef.current?.focus();
  };

  const currentMetadata = SUPPORTED_LOCALES[locale] || SUPPORTED_LOCALES['vi'];

  // =========================================================================
  // DESKTOP VARIANT
  // =========================================================================
  if (variant === 'desktop') {
    return (
      <div className="relative" ref={containerRef} onKeyDown={handleKeyDown}>
        {/* Trigger Button */}
        <button
          ref={buttonRef}
          type="button"
          id="language-switcher-btn"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls="language-switcher-menu"
          aria-label={t('common.currentLanguageSelectorAria', { language: currentMetadata.nativeName })}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer border ${
            isOpen
              ? 'bg-blue-50/90 dark:bg-blue-950/60 border-[#155EEF] dark:border-[#06B6D4] text-[#155EEF] dark:text-[#06B6D4]'
              : 'bg-slate-50/70 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
          } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155EEF] dark:focus-visible:ring-[#06B6D4]`}
          title={t('common.selectLanguageTitle', { language: currentMetadata.nativeName })}
        >
          <Globe
            className={`w-3.5 h-3.5 transition-colors ${
              isOpen
                ? 'text-[#155EEF] dark:text-[#06B6D4]'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          />
          <span className="font-bold tracking-wide uppercase text-[11px]">
            {currentMetadata.code.toUpperCase()}
          </span>
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 text-slate-400 ${
              isOpen ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            id="language-switcher-menu"
            role="menu"
            aria-labelledby="language-switcher-btn"
            className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#0D182E] rounded-2xl shadow-xl border border-slate-200/90 dark:border-slate-700/90 p-2 text-xs animate-fadeIn z-50 divide-y divide-slate-100 dark:divide-slate-800/60"
          >
            {/* Header / Context indicator */}
            <div className="px-2.5 py-1.5 pb-2 text-left">
              <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center justify-between">
                <span>{t('common.languageSelect')}</span>
                {isDevOrTestMode && (
                  <span className="text-[9px] text-amber-600 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-amber-950/50 px-1.5 py-0.2 rounded">
                    Test Mode
                  </span>
                )}
              </div>
            </div>

            {/* Language list */}
            <div className="py-1 space-y-0.5" role="none">
              {ALL_LOCALE_CODES.map((code) => {
                const item = SUPPORTED_LOCALES[code];
                const isSelected = locale === code;
                const isPublished = item.status === 'published';
                const isDraft = item.status === 'draft';
                const isSelectable = isPublished || (isDraft && isDevOrTestMode);

                return (
                  <button
                    key={code}
                    role="menuitemradio"
                    aria-checked={isSelected}
                    aria-disabled={!isSelectable}
                    disabled={!isSelectable}
                    tabIndex={isSelectable ? 0 : -1}
                    onClick={() => handleSelectLocale(code)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl transition-colors text-left ${
                      isSelected
                        ? 'bg-blue-50/90 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-bold'
                        : isSelectable
                        ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 cursor-pointer font-medium'
                        : 'text-slate-400 dark:text-slate-600 opacity-60 cursor-not-allowed font-normal'
                    } focus:outline-none focus-visible:bg-slate-100 dark:focus-visible:bg-slate-800`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-sm shrink-0" aria-hidden="true">
                        {item.flag}
                      </span>
                      <div className="truncate">
                        <span className="block text-xs truncate">
                          {item.nativeName}
                        </span>
                        {item.name !== item.nativeName && (
                          <span className="block text-[10px] text-slate-400 dark:text-slate-500 truncate">
                            {item.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Status Badge or Selected Checkmark */}
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4]" />
                      )}

                      {!isSelected && isDraft && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${
                            isDevOrTestMode
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300'
                              : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                          }`}
                        >
                          {isDevOrTestMode ? t('common.badgeDraft') : t('common.badgeComingSoon')}
                        </span>
                      )}

                      {!isSelected && !isPublished && !isDraft && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-400 dark:bg-slate-800/60 dark:text-slate-500">
                          {t('common.badgeComingSoon')}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // MOBILE VARIANT (Drawer Section)
  // =========================================================================
  const publishedAndDraftLocales = ALL_LOCALE_CODES.filter(
    (c) => SUPPORTED_LOCALES[c].status === 'published' || (SUPPORTED_LOCALES[c].status === 'draft' && isDevOrTestMode)
  );
  const plannedLocales = ALL_LOCALE_CODES.filter(
    (c) => !publishedAndDraftLocales.includes(c)
  );

  return (
    <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between px-3 mb-2">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-slate-400" />
          <span>{t('common.languageSelect')}</span>
        </div>
        {isDevOrTestMode && (
          <span className="text-[9px] text-amber-600 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-amber-950/50 px-1.5 py-0.5 rounded">
            Test Mode
          </span>
        )}
      </div>

      {/* Primary selectable languages (Touch target >= 44px) */}
      <div className="space-y-1.5 px-1">
        {publishedAndDraftLocales.map((code) => {
          const item = SUPPORTED_LOCALES[code];
          const isSelected = locale === code;
          const isDraft = item.status === 'draft';

          return (
            <button
              key={code}
              type="button"
              onClick={() => handleSelectLocale(code)}
              className={`w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-colors ${
                isSelected
                  ? 'bg-blue-50/90 dark:bg-blue-950/60 border-[#155EEF] text-[#155EEF] dark:text-[#06B6D4] font-bold shadow-xs'
                  : 'bg-white dark:bg-[#0D182E] border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base" aria-hidden="true">
                  {item.flag}
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold">{item.nativeName}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {item.name} {isDraft && `— ${t('common.badgeDraft')}`}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {code.toUpperCase()}
                </span>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Planned languages accordion toggle (avoids bloated drawer on 320-430px screens) */}
      {plannedLocales.length > 0 && (
        <div className="mt-2 px-1">
          <button
            type="button"
            onClick={() => setIsMobilePlannedOpen(!isMobilePlannedOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            <span>{t('common.plannedLanguagesCount', { count: plannedLocales.length })}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-150 ${
                isMobilePlannedOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isMobilePlannedOpen && (
            <div className="mt-1.5 p-2 bg-slate-50/80 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/60 space-y-1">
              <div className="text-[10px] text-slate-400 dark:text-slate-500 mb-1 px-1">
                {t('common.plannedLanguagesNotice')}
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {plannedLocales.map((code) => {
                  const item = SUPPORTED_LOCALES[code];
                  return (
                    <div
                      key={code}
                      className="flex items-center justify-between p-2 rounded-lg bg-white/60 dark:bg-[#0D182E]/60 border border-slate-200/60 dark:border-slate-800/60 text-slate-400 dark:text-slate-500 text-[11px]"
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <span aria-hidden="true">{item.flag}</span>
                        <span className="truncate">{item.nativeName}</span>
                      </div>
                      <span className="text-[9px] shrink-0 text-slate-400">
                        {item.status === 'draft' ? t('common.badgeDraft') : t('common.badgeComingSoon')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
