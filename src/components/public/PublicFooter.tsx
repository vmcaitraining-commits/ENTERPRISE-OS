import React from 'react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { useEnterprise } from '../../context/EnterpriseContext';
import { PublicLink } from './PublicLink';
import { Mail, Globe, MapPin, Shield, ArrowRight, Activity } from 'lucide-react';
import { NAV_INDUSTRIES } from './navigationData';

export const PublicFooter: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const { data } = useEnterprise();

  const companyName = data?.identity?.companyName?.value || 'VMC Group';
  const email = data?.contact?.email?.value || 'vmcaitraining@gmail.com';
  const website = data?.contact?.website?.value || 'vmcgroup.com';
  const address = 'Số 15, Ngõ 91, Đường Nguyễn Chí Thanh, Phường Láng Thượng, Đống Đa, Hà Nội';

  return (
    <footer className="bg-[#0B1F3A] dark:bg-[#060D19] text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 dark:bg-white/5 flex items-center justify-center text-white border border-white/20">
                <div className="flex items-center tracking-tight">
                  <span className="font-black text-base text-white">V</span>
                  <span className="font-black text-base text-[#06B6D4]">M</span>
                  <span className="font-black text-base text-[#155EEF]">C</span>
                </div>
              </div>
              <div>
                <div className="text-lg font-black text-white tracking-tight">{companyName}</div>
                <div className="text-[11px] font-semibold text-[#06B6D4] uppercase tracking-wider">
                  AI ENTERPRISE OS
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI. Đơn vị kiến trúc và triển khai nền tảng điều hành thống nhất cho các doanh nghiệp đang tăng trưởng tại Việt Nam.
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
              <span>Hệ thống vận hành: Đang hoạt động ổn định</span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openConsultationModal('consultation')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#155EEF] hover:bg-[#1048b8] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Đăng ký tư vấn giải pháp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Column 2: AI ENTERPRISE */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              AI ENTERPRISE
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <PublicLink href="/ai-enterprise" className="hover:text-white transition-colors block">
                  Tổng quan hệ điều hành
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/ai-enterprise#architecture" className="hover:text-white transition-colors block">
                  Kiến trúc 11 phân hệ lõi
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/ai-enterprise#principles" className="hover:text-white transition-colors block">
                  6 Nguyên tắc triển khai
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/ai-enterprise#security" className="hover:text-white transition-colors block">
                  Bảo mật & Phân quyền
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/capabilities" className="hover:text-white transition-colors block">
                  Năng lực kiến trúc hệ thống
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/ai" className="hover:text-white transition-colors block">
                  Mạng lưới 9 AI Copilots
                </PublicLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Giải pháp phòng ban & Nhu cầu */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Giải pháp & Nhu cầu
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <PublicLink href="/solutions/sales" className="hover:text-white transition-colors block">
                  Kinh doanh & Bán hàng (Sales)
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/marketing" className="hover:text-white transition-colors block">
                  Marketing & Phễu Lead
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/customer-service" className="hover:text-white transition-colors block">
                  Chăm sóc khách hàng (CSKH)
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/crm" className="hover:text-[#06B6D4] transition-colors block">
                  CRS / CRM Doanh nghiệp
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/automation" className="hover:text-[#06B6D4] transition-colors block">
                  Tự động hóa Workflow SOP
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/voice" className="hover:text-[#06B6D4] transition-colors block">
                  AI Voice Bóc băng & Phân tích
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/solutions/bi" className="hover:text-[#06B6D4] transition-colors block">
                  Báo cáo Quản trị & BI
                </PublicLink>
              </li>
            </ul>
          </div>

          {/* Column 4: 8 Ngành & Tài nguyên */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Ngành & Tài nguyên
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {NAV_INDUSTRIES.slice(0, 5).map((ind) => (
                <li key={ind.path}>
                  <PublicLink href={ind.path} className="hover:text-white transition-colors block">
                    {ind.name}
                  </PublicLink>
                </li>
              ))}
              <li>
                <PublicLink href="/industries" className="text-[#06B6D4] hover:underline block font-medium">
                  Xem tất cả 8 ngành →
                </PublicLink>
              </li>
              <li className="pt-1 border-t border-slate-800/80">
                <PublicLink href="/resources" className="hover:text-white transition-colors block">
                  Tài liệu SOP & FAQ
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/about" className="hover:text-white transition-colors block">
                  Về VMC Group
                </PublicLink>
              </li>
              <li>
                <PublicLink href="/contact" className="hover:text-white transition-colors block">
                  Liên hệ & Khảo sát
                </PublicLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {companyName}. Bản quyền thuộc về VMC Group. Tất cả quyền được bảo lưu.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            {/* Specific href destinations for legal policies */}
            <PublicLink
              href="/resources#privacy-policy"
              className="hover:text-slate-200 transition-colors"
            >
              Chính sách bảo mật (NDA)
            </PublicLink>
            <span>•</span>
            <PublicLink
              href="/resources#terms-of-service"
              className="hover:text-slate-200 transition-colors"
            >
              Điều khoản vận hành
            </PublicLink>
            <span>•</span>
            <PublicLink
              href="/admin"
              className="text-[#06B6D4] hover:underline flex items-center gap-1 font-medium"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Hệ thống Quản trị (Workspace)</span>
            </PublicLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
