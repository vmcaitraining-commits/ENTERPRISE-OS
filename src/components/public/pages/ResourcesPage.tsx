import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n/I18nContext';
import {
  ChevronDown, BookOpen, ShieldCheck, HelpCircle, FileText,
  Info, Lock, FileCheck, Eye, AlertCircle
} from 'lucide-react';

interface DocumentResource {
  id: string;
  title: string;
  category: 'architecture' | 'sop' | 'security';
  categoryLabel: string;
  statusBadge: string;
  badgeStyle: string;
  formatNote: string;
  description: string;
  previewContent: string;
}

interface GroupedFaq {
  category: 'implementation' | 'pricing' | 'security';
  categoryLabel: string;
  items: { q: string; a: string }[];
}

export const ResourcesPage: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const { t } = useI18n();
  const [activeFaqCategory, setActiveFaqCategory] = useState<'implementation' | 'pricing' | 'security'>('implementation');
  const [openFaqKey, setOpenFaqKey] = useState<string>('implementation-0');
  const [previewDocId, setPreviewDocId] = useState<string | null>(null);

  const sampleDocuments: DocumentResource[] = [
    {
      id: 'doc_arch_01',
      title: t('resources.doc1Title'),
      category: 'architecture',
      categoryLabel: t('resources.catArchitecture'),
      statusBadge: t('resources.statusSample'),
      badgeStyle: 'bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] border-blue-200 dark:border-blue-900/60',
      formatNote: t('resources.doc1FormatNote'),
      description: t('resources.doc1Desc'),
      previewContent: t('resources.doc1Preview')
    },
    {
      id: 'doc_sop_01',
      title: t('resources.doc2Title'),
      category: 'sop',
      categoryLabel: t('resources.catSop'),
      statusBadge: t('resources.statusSample'),
      badgeStyle: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60',
      formatNote: t('resources.doc2FormatNote'),
      description: t('resources.doc2Desc'),
      previewContent: t('resources.doc2Preview')
    },
    {
      id: 'doc_sec_01',
      title: t('resources.doc3Title'),
      category: 'security',
      categoryLabel: t('resources.catSecurity'),
      statusBadge: t('resources.statusInProgress'),
      badgeStyle: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900/60',
      formatNote: t('resources.doc3FormatNote'),
      description: t('resources.doc3Desc'),
      previewContent: t('resources.doc3Preview')
    },
    {
      id: 'doc_api_01',
      title: t('resources.doc4Title'),
      category: 'architecture',
      categoryLabel: t('resources.catArchitecture'),
      statusBadge: t('resources.statusUnreleased'),
      badgeStyle: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900/60',
      formatNote: t('resources.doc4FormatNote'),
      description: t('resources.doc4Desc'),
      previewContent: t('resources.doc4Preview')
    }
  ];

  const categorizedFaqs: GroupedFaq[] = [
    {
      category: 'implementation',
      categoryLabel: t('resources.faqTabImplementation'),
      items: [
        {
          q: t('resources.faqImp1Q'),
          a: t('resources.faqImp1A')
        },
        {
          q: t('resources.faqImp2Q'),
          a: t('resources.faqImp2A')
        },
        {
          q: t('resources.faqImp3Q'),
          a: t('resources.faqImp3A')
        },
        {
          q: t('resources.faqImp4Q'),
          a: t('resources.faqImp4A')
        }
      ]
    },
    {
      category: 'pricing',
      categoryLabel: t('resources.faqTabPricing'),
      items: [
        {
          q: t('resources.faqPri1Q'),
          a: t('resources.faqPri1A')
        },
        {
          q: t('resources.faqPri2Q'),
          a: t('resources.faqPri2A')
        }
      ]
    },
    {
      category: 'security',
      categoryLabel: t('resources.faqTabSecurity'),
      items: [
        {
          q: t('resources.faqSec1Q'),
          a: t('resources.faqSec1A')
        },
        {
          q: t('resources.faqSec2Q'),
          a: t('resources.faqSec2A')
        },
        {
          q: t('resources.faqSec3Q'),
          a: t('resources.faqSec3A')
        }
      ]
    }
  ];

  const toggleFaq = (key: string) => {
    setOpenFaqKey(openFaqKey === key ? '' : key);
  };

  const previewDoc = sampleDocuments.find((d) => d.id === previewDocId);

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Compact Hero */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-10 pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            {t('resources.badge')}
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('resources.title')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {t('resources.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Documents & Standards */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase tracking-wider">
                {t('resources.sectionDocBadge')}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                {t('resources.sectionDocTitle')}
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {t('resources.sectionDocTransparency')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {sampleDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col justify-between hover:border-[#155EEF] dark:hover:border-[#06B6D4] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] border border-blue-200 dark:border-blue-900/60">
                      {doc.categoryLabel}
                    </span>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md border ${doc.badgeStyle}`}>
                      {doc.statusBadge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {doc.formatNote}
                  </span>

                  <button
                    type="button"
                    onClick={() => setPreviewDocId(doc.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-[#0B1F3A] dark:text-white transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4]" />
                    <span>{t('resources.btnPreview')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Document Preview Modal */}
          {previewDoc && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/70 dark:bg-black/80 backdrop-blur-xs animate-fadeIn">
              <div className="relative w-full max-w-xl bg-white dark:bg-[#0D182E] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden space-y-4 p-6">
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">
                        {previewDoc.categoryLabel}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${previewDoc.badgeStyle}`}>
                        {previewDoc.statusBadge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white mt-1">
                      {previewDoc.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreviewDocId(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    aria-label={t('resources.previewAriaClose')}
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-200 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                  {previewDoc.previewContent}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2">
                  <span className="text-[11px] italic">{t('resources.previewDisclaimer')}</span>
                  <button
                    type="button"
                    onClick={() => setPreviewDocId(null)}
                    className="px-4 py-2 bg-[#155EEF] text-white font-bold rounded-lg hover:bg-[#1048b8] cursor-pointer"
                  >
                    {t('resources.btnClose')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 2: FAQ */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase tracking-wider">
              {t('resources.sectionFaqBadge')}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
              {t('resources.sectionFaqTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {t('resources.sectionFaqDesc')}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            {categorizedFaqs.map((cat) => {
              const isActive = activeFaqCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => {
                    setActiveFaqCategory(cat.category);
                    setOpenFaqKey(`${cat.category}-0`);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#155EEF] text-white shadow-xs'
                      : 'bg-white dark:bg-[#0D182E] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-300'
                  }`}
                >
                  {cat.categoryLabel}
                </button>
              );
            })}
          </div>

          {/* FAQ Accordions for active category */}
          <div className="space-y-3">
            {categorizedFaqs
              .find((cat) => cat.category === activeFaqCategory)
              ?.items.map((faq, idx) => {
                const itemKey = `${activeFaqCategory}-${idx}`;
                const isOpen = openFaqKey === itemKey;
                return (
                  <div
                    key={itemKey}
                    className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(itemKey)}
                      className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </section>

        {/* Section 3: NDA & Data Policy */}
        <section id="privacy-policy" className="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
              <Lock className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                {t('resources.sectionNdaTitle')}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[11px] font-semibold border border-amber-300 dark:border-amber-800">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{t('resources.draftBadge')}</span>
            </span>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              {t('resources.ndaIntro')}
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>{t('resources.ndaItem1Title')}</strong> {t('resources.ndaItem1Desc')}</li>
              <li><strong>{t('resources.ndaItem2Title')}</strong> {t('resources.ndaItem2Desc')}</li>
              <li><strong>{t('resources.ndaItem3Title')}</strong> {t('resources.ndaItem3Desc')}</li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-blue-500" />
              <span>{t('resources.ndaFooterNotice')}</span>
            </div>
          </div>
        </section>

        {/* Section 4: Terms of Service */}
        <section id="terms-of-service" className="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400">
              <FileCheck className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                {t('resources.sectionTermsTitle')}
              </h2>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[11px] font-semibold border border-amber-300 dark:border-amber-800">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{t('resources.draftBadge')}</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t('resources.termsContent')}
          </p>
        </section>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-[#0B1F3A] dark:bg-[#0A162B] text-white text-center space-y-4 shadow-xl border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold">
            {t('resources.ctaTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            {t('resources.ctaDesc')}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
            >
              {t('resources.ctaButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
