import React, { useState } from 'react';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { useI18n } from '../../../i18n/I18nContext';
import { industriesSolutions } from '../../../data/websiteContent';
import {
  Mail, Globe, MapPin, ShieldCheck, ArrowRight,
  CheckCircle2, AlertCircle
} from 'lucide-react';
import { ConsultationFormData } from '../../../types/website';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  companyScale?: string;
  industry?: string;
}

export const ContactPage: React.FC = () => {
  const { data, showToast } = useEnterprise();
  const { t, locale } = useI18n();

  const email = data?.contact?.email?.value || 'vmcaitraining@gmail.com';
  const website = data?.contact?.website?.value || 'vmcgroup.com';
  const region = locale === 'en' ? 'Hanoi, Vietnam' : (data?.contact?.region?.value || 'Hà Nội, Việt Nam');

  // Helper for translating industry options while preserving underlying value
  const getIndustryOptionLabel = (slug: string, fallbackName: string): string => {
    switch (slug) {
      case 'trade':
        return t('forms.industryTrade');
      case 'service':
        return t('forms.industryService');
      case 'education':
        return t('forms.industryEducation');
      case 'real-estate':
        return t('forms.industryRealEstate');
      case 'manufacturing':
        return t('forms.industryManufacturing');
      case 'distribution':
        return t('forms.industryDistribution');
      case 'construction':
        return t('forms.industryConstruction');
      case 'technology':
        return t('forms.industryTechnology');
      default:
        return fallbackName;
    }
  };

  // Form states
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyScale: '',
    industry: '',
    needDescription: '',
    type: 'consultation'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form with clear, per-field text messages
  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = t('forms.requiredFullName');
    }

    if (!formData.companyName.trim()) {
      errs.companyName = t('forms.requiredCompanyName');
    }

    if (!formData.email.trim()) {
      errs.email = t('forms.requiredEmail');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = t('forms.invalidEmail');
    }

    if (!formData.phone.trim()) {
      errs.phone = t('forms.requiredPhone');
    } else if (formData.phone.trim().length < 8) {
      errs.phone = t('forms.invalidPhoneLength');
    }

    if (!formData.companyScale) {
      errs.companyScale = t('forms.requiredCompanyScale');
    }

    if (!formData.industry) {
      errs.industry = t('forms.requiredIndustry');
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      showToast(t('forms.invalidFormToast'), 'warning');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast(t('forms.submissionSuccessToast'), 'success');
    }, 400);
  };

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            {t('contact.badge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('contact.title')}
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Grid:
          Desktop: Form 8/12, Contact Info 4/12
          Mobile: Form first, Contact Info second (flex-col-reverse or order classes)
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase tracking-wider">
                  {t('forms.contactBadge')}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
                  {t('forms.contactTitle')}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t('forms.contactDesc')}
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800" role="status" aria-live="polite">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">
                    {t('forms.successTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                    {t('forms.successDetail', {
                      fullName: formData.fullName,
                      companyName: formData.companyName,
                      email: formData.email
                    })}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                  >
                    {t('forms.sendAdditionalRequest')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label={t('accessibility.contactFormAriaLabel')} className="space-y-4">
                  {/* Full name & Company name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-fullname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('forms.fullNameLabel')} <span className="text-rose-500" aria-hidden="true">*</span>
                        <span className="sr-only"> ({t('accessibility.formRequiredFieldAria')})</span>
                      </label>
                      <input
                        id="contact-fullname"
                        name="name"
                        autoComplete="name"
                        type="text"
                        placeholder={t('forms.fullNamePlaceholder')}
                        value={formData.fullName}
                        aria-required="true"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? "contact-fullname-error" : undefined}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      />
                      {errors.fullName && (
                        <p id="contact-fullname-error" role="alert" className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-companyname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('forms.companyNameLabel')} <span className="text-rose-500" aria-hidden="true">*</span>
                        <span className="sr-only"> ({t('accessibility.formRequiredFieldAria')})</span>
                      </label>
                      <input
                        id="contact-companyname"
                        name="organization"
                        autoComplete="organization"
                        type="text"
                        placeholder={t('forms.companyNamePlaceholder')}
                        value={formData.companyName}
                        aria-required="true"
                        aria-invalid={Boolean(errors.companyName)}
                        aria-describedby={errors.companyName ? "contact-companyname-error" : undefined}
                        onChange={(e) => {
                          setFormData({ ...formData, companyName: e.target.value });
                          if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.companyName
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      />
                      {errors.companyName && (
                        <p id="contact-companyname-error" role="alert" className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('forms.workEmailLabel')} <span className="text-rose-500" aria-hidden="true">*</span>
                        <span className="sr-only"> ({t('accessibility.formRequiredFieldAria')})</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        placeholder={t('forms.emailPlaceholder')}
                        value={formData.email}
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      />
                      {errors.email && (
                        <p id="contact-email-error" role="alert" className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('forms.phoneLabel')} <span className="text-rose-500" aria-hidden="true">*</span>
                        <span className="sr-only"> ({t('accessibility.formRequiredFieldAria')})</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="tel"
                        autoComplete="tel"
                        type="tel"
                        placeholder={t('forms.phonePlaceholder')}
                        value={formData.phone}
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.phone
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" role="alert" className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Scale & Industry */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-scale" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('forms.companyScaleLabel')} <span className="text-rose-500" aria-hidden="true">*</span>
                        <span className="sr-only"> ({t('accessibility.formRequiredFieldAria')})</span>
                      </label>
                      <select
                        id="contact-scale"
                        name="organization-scale"
                        value={formData.companyScale}
                        aria-required="true"
                        aria-invalid={Boolean(errors.companyScale)}
                        aria-describedby={errors.companyScale ? "contact-scale-error" : undefined}
                        onChange={(e) => {
                          setFormData({ ...formData, companyScale: e.target.value });
                          if (errors.companyScale) setErrors({ ...errors, companyScale: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.companyScale
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      >
                        <option value="">{t('forms.companyScalePlaceholder')}</option>
                        <option value="Dưới 20 nhân sự">{t('forms.scaleUnder20')}</option>
                        <option value="20 - 50 nhân sự">{t('forms.scale20to50')}</option>
                        <option value="50 - 150 nhân sự">{t('forms.scale50to150')}</option>
                        <option value="150 - 500 nhân sự">{t('forms.scale150to500')}</option>
                        <option value="Trên 500 nhân sự">{t('forms.scaleAbove500')}</option>
                      </select>
                      {errors.companyScale && (
                        <p id="contact-scale-error" role="alert" className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{errors.companyScale}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-industry" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        {t('forms.industryLabel')} <span className="text-rose-500" aria-hidden="true">*</span>
                        <span className="sr-only"> ({t('accessibility.formRequiredFieldAria')})</span>
                      </label>
                      <select
                        id="contact-industry"
                        name="industry"
                        value={formData.industry}
                        aria-required="true"
                        aria-invalid={Boolean(errors.industry)}
                        aria-describedby={errors.industry ? "contact-industry-error" : undefined}
                        onChange={(e) => {
                          setFormData({ ...formData, industry: e.target.value });
                          if (errors.industry) setErrors({ ...errors, industry: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.industry
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      >
                        <option value="">{t('forms.industryPlaceholder')}</option>
                        {industriesSolutions.map((ind) => (
                          <option key={ind.id} value={ind.name}>
                            {getIndustryOptionLabel(ind.slug, ind.name)}
                          </option>
                        ))}
                        <option value="Khác">{t('forms.industryOther')}</option>
                      </select>
                      {errors.industry && (
                        <p id="contact-industry-error" role="alert" className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{errors.industry}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Need description */}
                  <div>
                    <label htmlFor="contact-need" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {t('forms.needDescriptionLabel')}
                    </label>
                    <textarea
                      id="contact-need"
                      name="description"
                      rows={4}
                      placeholder={t('forms.needDescriptionPlaceholder')}
                      value={formData.needDescription}
                      onChange={(e) => setFormData({ ...formData, needDescription: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? t('forms.contactSubmittingButton') : t('forms.contactSubmitButton')}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white">{t('contact.cardTitle')}</h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('contact.cardDesc')}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs text-slate-500 dark:text-slate-400 uppercase">{t('contact.regionLabel')}</span>
                    <span className="font-medium text-[#0B1F3A] dark:text-white">{region}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-[#06B6D4] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs text-slate-500 dark:text-slate-400 uppercase">{t('contact.emailLabel')}</span>
                    <a href={`mailto:${email}`} className="font-medium text-[#155EEF] dark:text-[#06B6D4] hover:underline">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs text-slate-500 dark:text-slate-400 uppercase">{t('contact.websiteLabel')}</span>
                    <a href={`https://${website}`} target="_blank" rel="noreferrer" className="font-medium text-[#0B1F3A] dark:text-white hover:underline">
                      {website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{t('contact.ndaPledge')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
