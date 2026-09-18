import React, { useState } from 'react';
import {
  Menu,
  PanelLeftClose,
  PanelLeft,
  User,
  LogOut,
  ExternalLink,
  Bell,
  HelpCircle,
  CheckCircle2,
  X
} from 'lucide-react';
import { useAdminAuth } from '../../../context/AdminAuthContext';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { AdminSearchBar } from '../shared/AdminSearchBar';

export interface AdminTopBarProps {
  currentPath: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onOpenMobile: () => void;
}

export const AdminTopBar: React.FC<AdminTopBarProps> = ({
  currentPath,
  isCollapsed,
  onToggleCollapse,
  onOpenMobile
}) => {
  const { identity, authService } = useAdminAuth();
  const { navigate } = usePublicRouter();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleLogout = async () => {
    try {
      await authService.signOut();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <header className="h-16 bg-white border-b border-[#E5EAF1] px-4 sm:px-6 flex items-center justify-between gap-4 sticky top-0 z-20 select-none">
      {/* LEFT: TOGGLES + GLOBAL SEARCH BAR */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Mobile menu button */}
        <button
          id="btn-admin-mobile-menu"
          type="button"
          onClick={onOpenMobile}
          className="lg:hidden p-2 rounded-lg text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Mở menu quản trị"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop collapse toggle */}
        <button
          id="btn-admin-collapse-toggle"
          type="button"
          onClick={onToggleCollapse}
          className="hidden lg:flex p-2 rounded-lg text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-100 transition-colors cursor-pointer"
          title={isCollapsed ? 'Mở rộng sidebar' : 'Thu gọn sidebar'}
        >
          {isCollapsed ? (
            <PanelLeft className="w-5 h-5" />
          ) : (
            <PanelLeftClose className="w-5 h-5" />
          )}
        </button>

        {/* Global Search Bar with Ctrl+K modal */}
        <div className="hidden sm:block">
          <AdminSearchBar />
        </div>
      </div>

      {/* RIGHT: ACTIONS + ACCOUNT BADGE + LOGOUT */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Mobile Search button */}
        <div className="sm:hidden">
          <AdminSearchBar />
        </div>

        {/* View Public Website */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#64748B] hover:text-[#155EEF] hover:bg-blue-50 transition-colors cursor-pointer"
          title="Xem trang web công khai"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Xem Website</span>
        </button>

        {/* Help Center Popover Trigger */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowHelp(!showHelp)}
            className="p-2 rounded-lg text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-100 transition-colors cursor-pointer"
            title="Trợ giúp & Tài liệu"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {showHelp && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E5EAF1] p-4 z-50 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#E5EAF1] mb-2">
                <span className="font-bold text-[#0F1F3D]">Trợ giúp & Hướng dẫn</span>
                <button
                  type="button"
                  onClick={() => setShowHelp(false)}
                  className="p-0.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-[#64748B] leading-relaxed mb-3">
                Hệ thống điều hành VMC Group AI Enterprise OS. Dữ liệu được đồng bộ hóa với Supabase và kho tài nguyên doanh nghiệp.
              </p>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Xác thực Auth trực tiếp</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Phím tắt tìm kiếm: Ctrl + K</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-lg text-[#64748B] hover:text-[#0F1F3D] hover:bg-slate-100 transition-colors cursor-pointer relative"
            title="Thông báo"
          >
            <Bell className="w-4 h-4" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#E5EAF1] p-4 z-50 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#E5EAF1] mb-2">
                <span className="font-bold text-[#0F1F3D]">Thông báo hệ thống</span>
                <button
                  type="button"
                  onClick={() => setShowNotifications(false)}
                  className="p-0.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="py-4 text-center text-slate-500">
                <p className="font-medium text-[#0F1F3D]">Không có thông báo mới</p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Mọi hoạt động hệ thống đang vận hành ổn định.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Vertical separator */}
        <div className="h-5 w-px bg-[#E5EAF1] mx-1 hidden sm:block" />

        {/* User Profile Badge */}
        <div
          id="admin-identity-card"
          className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-[#E5EAF1]"
        >
          <div className="w-7 h-7 rounded-full bg-blue-100 text-[#155EEF] flex items-center justify-center shrink-0 font-semibold text-xs">
            {identity?.email ? identity.email.charAt(0).toUpperCase() : <User className="w-3.5 h-3.5" />}
          </div>
          <div className="flex flex-col text-left hidden sm:flex">
            <span className="text-xs font-semibold text-[#0F1F3D] leading-tight max-w-[130px] truncate">
              {identity?.email || 'Admin'}
            </span>
            <span className="text-[10px] text-emerald-600 font-medium leading-none mt-0.5">
              Quản trị viên
            </span>
          </div>
        </div>

        {/* Soft Logout Button */}
        <button
          id="btn-admin-logout"
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 border border-rose-200/70 transition-all cursor-pointer"
          title="Đăng xuất khỏi hệ thống"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Đăng xuất</span>
        </button>
      </div>
    </header>
  );
};
