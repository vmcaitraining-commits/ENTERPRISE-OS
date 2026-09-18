import React, { useState, useEffect } from 'react';
import {
  Building2,
  Globe,
  Settings,
  ChevronDown,
  ChevronRight,
  FileText,
  Compass,
  Package,
  Palette,
  Image as ImageIcon,
  CheckSquare,
  LayoutTemplate,
  PenTool,
  Sparkles,
  X,
  LayoutDashboard,
  Users,
  BarChart3,
  Headphones,
  UserCheck,
  CreditCard
} from 'lucide-react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { BrandLogo } from '../../common/BrandLogo';

export interface AdminSidebarProps {
  currentPath: string;
  isCollapsed: boolean;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onToggleCollapse: () => void;
}

interface NavSubItem {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  currentPath,
  isCollapsed,
  isOpenMobile,
  onCloseMobile,
  onToggleCollapse
}) => {
  const { navigate } = usePublicRouter();
  const { stats } = useEnterprise();

  const needsReviewCount = stats?.needsReviewFields ?? 0;

  // Accordion state for core groups
  const [isCompanyOpen, setIsCompanyOpen] = useState<boolean>(true);
  const [isWebsiteOpen, setIsWebsiteOpen] = useState<boolean>(true);
  const [isSystemOpen, setIsSystemOpen] = useState<boolean>(false);

  // Auto expand matching accordion based on currentPath
  useEffect(() => {
    if (currentPath.startsWith('/admin/company')) {
      setIsCompanyOpen(true);
    } else if (currentPath.startsWith('/admin/website')) {
      setIsWebsiteOpen(true);
    } else if (['/admin/crm', '/admin/marketing', '/admin/cskh', '/admin/hr', '/admin/finance', '/admin/system'].includes(currentPath)) {
      setIsSystemOpen(true);
    }
  }, [currentPath]);

  const companySubItems: NavSubItem[] = [
    { id: 'overview', label: 'Tổng quan', path: '/admin/company/overview', icon: Sparkles },
    { id: 'profile', label: 'Hồ sơ doanh nghiệp', path: '/admin/company/profile', icon: FileText },
    { id: 'strategy', label: 'Định vị & Chiến lược', path: '/admin/company/strategy', icon: Compass },
    { id: 'products-market', label: 'Sản phẩm & Thị trường', path: '/admin/company/products-market', icon: Package },
    { id: 'brand', label: 'Nhận diện thương hiệu', path: '/admin/company/brand', icon: Palette },
    { id: 'media', label: 'Kho ảnh & Video', path: '/admin/company/media', icon: ImageIcon },
    {
      id: 'data-review',
      label: 'Quản trị dữ liệu',
      path: '/admin/company/data-review',
      icon: CheckSquare,
      badge: needsReviewCount > 0 ? needsReviewCount : undefined
    }
  ];

  const websiteSubItems: NavSubItem[] = [
    { id: 'web-overview', label: 'Tổng quan Website', path: '/admin/website/overview', icon: Globe },
    { id: 'web-content', label: 'Quản trị nội dung', path: '/admin/website/content', icon: PenTool },
    { id: 'web-builder', label: 'Giao diện & Trình xây dựng', path: '/admin/website/builder', icon: LayoutTemplate }
  ];

  const systemSubItems: NavSubItem[] = [
    { id: 'sys-crm', label: 'CRM', path: '/admin/crm', icon: Users },
    { id: 'sys-marketing', label: 'Marketing', path: '/admin/marketing', icon: BarChart3 },
    { id: 'sys-cskh', label: 'CSKH', path: '/admin/cskh', icon: Headphones },
    { id: 'sys-hr', label: 'Nhân sự', path: '/admin/hr', icon: UserCheck },
    { id: 'sys-finance', label: 'Tài chính', path: '/admin/finance', icon: CreditCard },
    { id: 'sys-config', label: 'Quản trị hệ thống', path: '/admin/system', icon: Settings }
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isOpenMobile) {
      onCloseMobile();
    }
  };

  const isHomeActive = currentPath === '/admin' || currentPath === '/admin/dashboard';
  const isCompanyActive = currentPath.startsWith('/admin/company');
  const isWebsiteActive = currentPath.startsWith('/admin/website');
  const isSystemActive = ['/admin/crm', '/admin/marketing', '/admin/cskh', '/admin/hr', '/admin/finance', '/admin/system'].includes(currentPath);

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white text-[#0F1F3D] select-none border-r border-[#E5EAF1]">
      {/* 1. BRAND HEADER */}
      <div className="h-18 px-4 flex items-center justify-between border-b border-[#E5EAF1] shrink-0">
        <div
          onClick={() => handleNavigate('/admin')}
          className="flex items-center gap-3 cursor-pointer min-w-0"
        >
          <div className="h-9 sm:h-10 w-auto flex items-center shrink-0">
            <BrandLogo
              variant={isCollapsed ? 'symbol' : 'horizontal'}
              imgClassName={isCollapsed ? 'w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-xs' : 'h-9 sm:h-10 w-auto max-w-[190px] object-contain drop-shadow-xs'}
              alt="VMC Group Logo"
            />
          </div>
        </div>

        {/* Mobile close button */}
        {isOpenMobile && (
          <button
            type="button"
            onClick={onCloseMobile}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Đóng menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* 2. SCROLLABLE NAVIGATION BODY */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-3 px-3 space-y-4">
        {/* TRANG CHỦ */}
        <div>
          <button
            type="button"
            onClick={() => handleNavigate('/admin')}
            title="Trang chủ Admin"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              isHomeActive
                ? 'bg-blue-50 text-[#155EEF] border-l-[3px] border-[#155EEF] pl-2.5'
                : 'text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className={`w-4 h-4 shrink-0 ${isHomeActive ? 'text-[#155EEF]' : 'text-slate-400'}`} />
            {!isCollapsed && <span>Trang chủ</span>}
          </button>
        </div>

        {/* SECTION: THÔNG TIN DOANH NGHIỆP */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-3 pt-1 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Thông tin doanh nghiệp
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={() => {
                if (isCollapsed) {
                  onToggleCollapse();
                  handleNavigate('/admin/company/overview');
                } else {
                  setIsCompanyOpen(!isCompanyOpen);
                }
              }}
              title="Thông tin doanh nghiệp"
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isCompanyActive && !isCollapsed
                  ? 'bg-blue-50/50 text-[#155EEF]'
                  : 'text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Building2 className={`w-4 h-4 shrink-0 ${isCompanyActive ? 'text-[#155EEF]' : 'text-slate-400'}`} />
                {!isCollapsed && <span className="truncate">Thông tin doanh nghiệp</span>}
              </div>
              {!isCollapsed && (
                <div className="text-slate-400">
                  {isCompanyOpen ? (
                    <ChevronDown className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5" />
                  )}
                </div>
              )}
            </button>

            {/* Child sub-items */}
            {!isCollapsed && isCompanyOpen && (
              <div className="pl-3.5 pt-1 space-y-0.5 ml-3 border-l border-[#E5EAF1]">
                {companySubItems.map(item => {
                  const isActive = currentPath === item.path;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(item.path)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-[12px] font-medium transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-[#155EEF] font-semibold border-l-[3px] border-[#155EEF] pl-2 -ml-[1px]'
                          : 'text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#155EEF]' : 'text-slate-400'}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.badge !== undefined && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* SECTION: QUẢN TRỊ TRANG WEB */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-3 pt-1 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Quản trị trang web
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={() => {
                if (isCollapsed) {
                  onToggleCollapse();
                  handleNavigate('/admin/website/overview');
                } else {
                  setIsWebsiteOpen(!isWebsiteOpen);
                }
              }}
              title="Quản trị trang web"
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isWebsiteActive && !isCollapsed
                  ? 'bg-blue-50/50 text-[#155EEF]'
                  : 'text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Globe className={`w-4 h-4 shrink-0 ${isWebsiteActive ? 'text-[#155EEF]' : 'text-slate-400'}`} />
                {!isCollapsed && <span className="truncate">Quản trị trang web</span>}
              </div>
              {!isCollapsed && (
                <div className="text-slate-400">
                  {isWebsiteOpen ? (
                    <ChevronDown className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5" />
                  )}
                </div>
              )}
            </button>

            {/* Child sub-items */}
            {!isCollapsed && isWebsiteOpen && (
              <div className="pl-3.5 pt-1 space-y-0.5 ml-3 border-l border-[#E5EAF1]">
                {websiteSubItems.map(item => {
                  const isActive = currentPath === item.path;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(item.path)}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-[#155EEF] font-semibold border-l-[3px] border-[#155EEF] pl-2 -ml-[1px]'
                          : 'text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#155EEF]' : 'text-slate-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* SECTION: HỆ SINH THÁI MỞ RỘNG */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="px-3 pt-1 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Hệ sinh thái mở rộng
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={() => {
                if (isCollapsed) {
                  onToggleCollapse();
                  handleNavigate('/admin/crm');
                } else {
                  setIsSystemOpen(!isSystemOpen);
                }
              }}
              title="Hệ sinh thái mở rộng"
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isSystemActive && !isCollapsed
                  ? 'bg-blue-50/50 text-[#155EEF]'
                  : 'text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Settings className={`w-4 h-4 shrink-0 ${isSystemActive ? 'text-[#155EEF]' : 'text-slate-400'}`} />
                {!isCollapsed && <span className="truncate">Hệ sinh thái mở rộng</span>}
              </div>
              {!isCollapsed && (
                <div className="text-slate-400">
                  {isSystemOpen ? (
                    <ChevronDown className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5" />
                  )}
                </div>
              )}
            </button>

            {/* Child sub-items */}
            {!isCollapsed && isSystemOpen && (
              <div className="pl-3.5 pt-1 space-y-0.5 ml-3 border-l border-[#E5EAF1]">
                {systemSubItems.map(item => {
                  const isActive = currentPath === item.path;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(item.path)}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-[#155EEF] font-semibold border-l-[3px] border-[#155EEF] pl-2 -ml-[1px]'
                          : 'text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#155EEF]' : 'text-slate-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. SIDEBAR FOOTER */}
      <div className="p-3 border-t border-[#E5EAF1] shrink-0 bg-slate-50/70">
        {!isCollapsed ? (
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-semibold text-emerald-700">Supabase Auth Live</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">V1.0</span>
          </div>
        ) : (
          <div className="flex justify-center" title="Supabase Auth Live V1.0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed Left) */}
      <aside
        className={`hidden lg:flex flex-col fixed inset-y-0 left-0 z-30 bg-white transition-all duration-200 ease-in-out border-r border-[#E5EAF1] ${
          isCollapsed ? 'w-[72px]' : 'w-[270px]'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (Overlay) */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            onClick={onCloseMobile}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer content */}
          <aside className="relative flex flex-col w-[270px] max-w-[85vw] h-full bg-white shadow-2xl z-10">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};
