import React from 'react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { useEnterprise } from '../../context/EnterpriseContext';
import { useI18n } from '../../i18n/I18nContext';
import { PublicLink } from './PublicLink';
import { BrandLogo } from '../common/BrandLogo';
import { Mail, Globe, MapPin, Shield, ArrowRight, Activity } from 'lucide-react';
import { NAV_INDUSTRIES } from './navigationData';

export const PublicFooter: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const { data } = useEnterprise();
  const { t } = useI18n();

  const companyName = data?.identity?.companyName?.value || 'VMC Group';
  const email = data?.contact?.email?.value || 'vmcaitraining@gmail.com';
  const website = data?.contact?.website?.value || 'vmcgroup.com';
  const address = t('common.companyAddress');

  return (
    <footer className="bg-[#0B1F3A] dark:bg-[#060D19] text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center h-12 sm:h-13 w-auto">
                <BrandLogo 
                  variant="dark" 
                  imgClassName="h-12 sm:h-13 w-auto max-w-[245px] sm:max-w-[270px] object-contain drop-shadow-sm" 
                  alt={`${companyName} Logo`}
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-2">
              {t('nav.footerDescription')}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-snug">{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#06B6D4] shrink-0" />
                <a href={`mailto:${email}`} className="text-slate-300 hover:text-white transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#06B6D4] shrink-0" />
                <a href={`https://${website}`} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  {website}
                </a>
              </div>
            </div>

            {/* System Operational Status - Grounded, no unverified SLA numbers */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-emerald-400">
              <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>{t('common.systemStatusActive')}</span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openConsultationModal('consultation')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#155EEF] hover:bg-[#1048b8] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>{t('common.registerSolutionConsultation')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: AI ENTERPRISE */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              {t('nav.footerEnterpriseCol')}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <PublicLink href="/ai-enterprise" className="hover:text-white transition-colors block">
                  {t('nav.footerOverview')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/ai-enterprise#architecture" className="hover:text-white transition-colors block">
                  {t('nav.footerArchitecture')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/ai-enterprise#principles" className="hover:text-white transition-colors block">
                  {t('nav.footerPrinciples')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/ai-enterprise#security" className="hover:text-white transition-colors block">
                  {t('nav.footerSecurity')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/capabilities" className="hover:text-white transition-colors block">
                  {t('nav.footerCapabilities')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/ai" className="hover:text-white transition-colors block">
                  {t('nav.footerAiNetwork')}
                </PublicLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Giải pháp phòng ban & Nhu cầu */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              {t('nav.footerSolutionsCol')}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <PublicLink href="/solutions/sales" className="hover:text-white transition-colors block">
                  {t('nav.footerSales')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/marketing" className="hover:text-white transition-colors block">
                  {t('nav.footerMarketing')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/customer-service" className="hover:text-white transition-colors block">
                  {t('nav.footerCskh')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/crm" className="hover:text-[#06B6D4] transition-colors block">
                  {t('nav.needCrm')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/automation" className="hover:text-[#06B6D4] transition-colors block">
                  {t('nav.needAutomation')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/voice" className="hover:text-[#06B6D4] transition-colors block">
                  {t('nav.footerVoiceTranscription')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/bi" className="hover:text-[#06B6D4] transition-colors block">
                  {t('nav.footerBiReports')}
                </PublicLink>
              </li>
            </ul>
          </div>

          {/* Column 4: 8 Ngành & Tài nguyên */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              {t('nav.footerIndustriesCol')}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {NAV_INDUSTRIES.slice(0, 5).map((ind) => (
                <li key={ind.path}>
                  <PublicLink href={ind.path} className="hover:text-white transition-colors block">
                    {ind.nameKey ? t(`nav.${ind.nameKey}`, ind.name) : ind.name}
                  </PublicLink>
                </li>
              ))}
              <li>
                <PublicLink href="/industries" className="text-[#06B6D4] hover:underline block font-medium">
                  {t('nav.footerViewAllIndustries')}
                </PublicLink>
              </li>
              <li className="pt-1 border-t border-slate-800/80">
                <PublicLink href="/resources" className="hover:text-white transition-colors block">
                  {t('nav.footerSopFaq')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/about" className="hover:text-white transition-colors block">
                  {t('nav.footerAbout')}
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/contact" className="hover:text-white transition-colors block">
                  {t('nav.footerContactSurvey')}
                </PublicLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {companyName}. {t('common.copyrightNotice')}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            {/* Specific href destinations for legal policies */}
            <PublicLink
              href="/resources#privacy-policy"
              className="hover:text-slate-200 transition-colors"
            >
              {t('common.privacyPolicy')}
            </PublicLink>
            <span>•</span>
            <PublicLink
              href="/resources#terms-of-service"
              className="hover:text-slate-200 transition-colors"
            >
              {t('common.termsOfService')}
            </PublicLink>
            <span>•</span>
            <PublicLink
              href="/admin"
              className="text-[#06B6D4] hover:underline flex items-center gap-1 font-medium"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{t('common.workspaceAdmin')}</span>
            </PublicLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
