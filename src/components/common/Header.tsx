import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { Edit3, Check, X, History, RotateCcw, ShieldCheck, Building2 } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    isEditing,
    startEditing,
    cancelEditing,
    saveChanges,
    setIsHistoryModalOpen,
    resetToSeedData
  } = useEnterprise();

  return (
    <header id="enterprise-header" className="bg-white border-b border-[#E2E8F0] sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Title & Brand info */}
          <div className="flex items-start gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0 shadow-sm border border-[#155EEF]/20">
              <Building2 className="w-6 h-6 text-[#06B6D4]" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-sm">
                  ADMIN MODULE
                </span>
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] tracking-tight">
                  THÔNG TIN DOANH NGHIỆP
                </h1>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-[#0B1F3A] text-white border border-[#0B1F3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
                  VMC Group
                </span>
              </div>
              <p className="text-sm text-[#64748B] mt-1 flex items-center gap-2">
                <span>Quản lý hồ sơ, thương hiệu và tài nguyên chính thức của doanh nghiệp.</span>
                <span className="hidden sm:inline-block text-[#CBD5E1]">•</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Dữ liệu nền tảng lõi V1.0
                </span>
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
            {!isEditing ? (
              <>
                <button
                  id="btn-view-history"
                  onClick={() => setIsHistoryModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#0B1F3A] bg-slate-50 hover:bg-slate-100 border border-[#CBD5E1] rounded-lg transition-colors shadow-2xs cursor-pointer"
                  title="Xem lịch sử cập nhật dữ liệu"
                >
                  <History className="w-4 h-4 text-[#64748B]" />
                  <span>Xem lịch sử</span>
                </button>

                <button
                  id="btn-reset-seed"
                  onClick={() => {
                    if (window.confirm('Bạn có chắc chắn muốn khôi phục dữ liệu về bản gốc VMC V1.0 từ file TXT?')) {
                      resetToSeedData();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-[#64748B] hover:text-[#0B1F3A] bg-transparent hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  title="Khôi phục nguyên trạng file TXT"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline">Bản gốc TXT</span>
                </button>

                <button
                  id="btn-start-edit"
                  onClick={startEditing}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#155EEF] hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-all shadow-xs cursor-pointer"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Chỉnh sửa</span>
                </button>
              </>
            ) : (
              <>
                <button
                  id="btn-cancel-edit"
                  onClick={cancelEditing}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#64748B] hover:text-[#0F172A] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  <span>Hủy</span>
                </button>

                <button
                  id="btn-save-changes"
                  onClick={() => saveChanges('Cập nhật thông tin qua giao diện Admin')}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg transition-all shadow-xs cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Lưu thay đổi</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
