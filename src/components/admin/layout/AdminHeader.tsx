import React from 'react';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { useAdminAuth } from '../../../context/AdminAuthContext';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { AdminBreadcrumbs } from './AdminBreadcrumbs';
import {
  Menu, PanelLeftClose, PanelLeft, LogOut, ArrowLeft,
  History, RotateCcw, Edit3, Check, X, ShieldCheck
} from 'lucide-react';

interface AdminHeaderProps {
  currentModule: string;
  currentSubItem?: string;
  isSidebarCollapsed: boolean;
  onToggleCollapse: () => void;
  onOpenMobileSidebar: () => void;
  onNavigateModule: (module: string) => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  currentModule,
  currentSubItem,
  isSidebarCollapsed,
  onToggleCollapse,
  onOpenMobileSidebar,
  onNavigateModule
}) => {
  const {
    isEditing,
    startEditing,
    cancelEditing,
    saveChanges,
    setIsHistoryModalOpen,
    resetToSeedData
  } = useEnterprise();
  const { identity, authService } = useAdminAuth();
  const { navigate } = usePublicRouter();

  const handleLogout = async () => {
    await authService.signOut();
    navigate('/admin/login');
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200/90 shadow-2xs">
      {/* Top Banner Bar for Enterprise Context & Auth Status */}
      <div className="bg-[#0B1F3A] text-white px-4 py-1.5 text-xs flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-[#06B6D4]">VMC GROUP ENTERPRISE:</span>
          <span className="text-slate-300 hidden sm:inline">Hệ thống Quản trị Dữ liệu & Vận hành Doanh nghiệp AI</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {identity && (
            <div className="flex items-center gap-1.5 text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/80">
              <span className="text-[11px] text-slate-400">Admin:</span>
              <span className="text-[11px] font-semibold text-emerald-400 max-w-[150px] sm:max-w-[220px] truncate">
                {identity.email}
              </span>
            </div>
          )}

          <a
            id="btn-back-to-public"
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[#06B6D4] hover:text-white font-medium transition-colors cursor-pointer text-xs"
            title="Quay lại trang website công khai vmcgroup.com"
          >
            <ArrowLeft className="w-3 h-3" />
            <span className="hidden sm:inline">Về Website Công Khai (vmcgroup.com)</span>
            <span className="sm:hidden">Website</span>
          </a>

          <button
            id="btn-admin-logout"
            onClick={handleLogout}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-950/70 hover:bg-red-900 text-red-200 hover:text-white border border-red-800/60 transition-colors cursor-pointer text-xs"
            title="Đăng xuất khỏi phiên quản trị"
          >
            <LogOut className="w-3 h-3" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>

      {/* Main Content Action Header */}
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Left: Sidebar Toggle & Breadcrumbs */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Mở danh mục quản trị"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop collapse toggle */}
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            title={isSidebarCollapsed ? "Mở rộng thanh điều hướng" : "Thu gọn thanh điều hướng"}
          >
            {isSidebarCollapsed ? (
              <PanelLeft className="w-4 h-4 text-[#155EEF]" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>

          <div className="min-w-0">
            <AdminBreadcrumbs
              module={currentModule}
              subItem={currentSubItem}
              onNavigateModule={onNavigateModule}
            />
          </div>
        </div>

        {/* Right: Module Contextual Actions (only for Company module currently) */}
        {currentModule === 'company' && (
          <div className="flex items-center gap-2 shrink-0">
            {!isEditing ? (
              <>
                <button
                  id="btn-view-history"
                  type="button"
                  onClick={() => setIsHistoryModalOpen(true)}
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0B1F3A] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  title="Xem lịch sử cập nhật dữ liệu"
                >
                  <History className="w-3.5 h-3.5 text-slate-500" />
                  <span>Xem lịch sử</span>
                </button>

                <button
                  id="btn-reset-seed"
                  type="button"
                  onClick={() => {
                    if (window.confirm('Bạn có chắc chắn muốn khôi phục dữ liệu về bản gốc VMC V1.0 từ file TXT?')) {
                      resetToSeedData();
                    }
                  }}
                  className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-500 hover:text-[#0B1F3A] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  title="Khôi phục nguyên trạng từ file TXT"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Bản gốc TXT</span>
                </button>

                <button
                  id="btn-start-edit"
                  type="button"
                  onClick={startEditing}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#155EEF] hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-all shadow-xs cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Chỉnh sửa</span>
                </button>
              </>
            ) : (
              <>
                <button
                  id="btn-cancel-edit"
                  type="button"
                  onClick={cancelEditing}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Hủy</span>
                </button>

                <button
                  id="btn-save-changes"
                  type="button"
                  onClick={() => saveChanges('Cập nhật thông tin qua giao diện Admin')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg transition-all shadow-xs cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Lưu thay đổi</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
