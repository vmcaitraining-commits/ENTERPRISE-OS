import React from 'react';
import { ChevronRight, Home, Building2, Globe, Users, Megaphone, Headphones, UserCheck, CreditCard, Sliders } from 'lucide-react';

interface BreadcrumbProps {
  module: string;
  subItem?: string;
  onNavigateModule?: (module: string) => void;
}

const moduleIconMap: Record<string, React.ReactNode> = {
  company: <Building2 className="w-3.5 h-3.5 text-[#155EEF]" />,
  website: <Globe className="w-3.5 h-3.5 text-indigo-600" />,
  crm: <Users className="w-3.5 h-3.5 text-emerald-600" />,
  marketing: <Megaphone className="w-3.5 h-3.5 text-amber-600" />,
  cskh: <Headphones className="w-3.5 h-3.5 text-cyan-600" />,
  hr: <UserCheck className="w-3.5 h-3.5 text-purple-600" />,
  finance: <CreditCard className="w-3.5 h-3.5 text-rose-600" />,
  system: <Sliders className="w-3.5 h-3.5 text-slate-600" />
};

const moduleNameMap: Record<string, string> = {
  company: 'Thông tin doanh nghiệp',
  website: 'Quản trị trang web',
  crm: 'CRM Khách hàng',
  marketing: 'Marketing Tự động',
  cskh: 'Chăm sóc khách hàng',
  hr: 'Quản trị nhân sự',
  finance: 'Tài chính - Kế toán',
  system: 'Quản trị hệ thống'
};

export const AdminBreadcrumbs: React.FC<BreadcrumbProps> = ({ module, subItem, onNavigateModule }) => {
  const moduleLabel = moduleNameMap[module] || module;
  const moduleIcon = moduleIconMap[module] || <Building2 className="w-3.5 h-3.5 text-slate-500" />;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs text-[#64748B] font-medium">
      <div className="flex items-center gap-1 hover:text-[#0B1F3A] transition-colors">
        <Home className="w-3.5 h-3.5 text-slate-400" />
        <span className="hidden sm:inline">Admin Portal</span>
      </div>

      <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />

      <button
        type="button"
        onClick={() => onNavigateModule?.(module)}
        className="flex items-center gap-1.5 px-1.5 py-0.5 rounded hover:bg-slate-100 text-[#0F172A] font-semibold transition-colors cursor-pointer"
      >
        {moduleIcon}
        <span>{moduleLabel}</span>
      </button>

      {subItem && (
        <>
          <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
          <span className="text-[#155EEF] font-semibold px-1.5 py-0.5 rounded bg-blue-50/60 border border-blue-100 truncate max-w-[200px] sm:max-w-xs">
            {subItem}
          </span>
        </>
      )}
    </nav>
  );
};
