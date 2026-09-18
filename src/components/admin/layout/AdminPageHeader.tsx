import React from 'react';
import { History, RotateCcw, Edit3, Save, X, Check } from 'lucide-react';
import { useEnterprise } from '../../../context/EnterpriseContext';

export interface AdminPageHeaderProps {
  title: string;
  description: string;
  badge?: React.ReactNode;
  showEditActions?: boolean;
}

export const AdminPageHeader: React.FC<AdminPageHeaderProps> = ({
  title,
  description,
  badge,
  showEditActions = true
}) => {
  const {
    isEditing,
    setIsEditing,
    saveChanges,
    cancelChanges,
    resetToSeed,
    setIsHistoryOpen
  } = useEnterprise();

  const handleReset = () => {
    if (window.confirm('Khôi phục toàn bộ dữ liệu mẫu ban đầu từ Seed? Thay đổi chưa lưu sẽ bị xóa.')) {
      resetToSeed();
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Category Eyebrow, Title, Description, Badge */}
        <div className="space-y-1.5 min-w-0">
          {badge && (
            <div className="flex items-center gap-2 flex-wrap">
              {badge}
            </div>
          )}

          <h1 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0F1F3D] tracking-tight">
            {title}
          </h1>

          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right: Context Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap self-start md:self-auto shrink-0 pt-1 md:pt-0">
          {/* History Button */}
          <button
            id="btn-view-history"
            type="button"
            onClick={() => setIsHistoryOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-[#E5EAF1] transition-all cursor-pointer"
            title="Xem lịch sử cập nhật"
          >
            <History className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Lịch sử</span>
          </button>

          {/* Reset to Seed Button */}
          <button
            id="btn-reset-seed"
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-[#E5EAF1] transition-all cursor-pointer"
            title="Khôi phục bản gốc"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Bản gốc</span>
          </button>

          {/* Edit / Save / Cancel toggles */}
          {showEditActions && (
            <>
              {isEditing ? (
                <>
                  <button
                    id="btn-save-changes"
                    type="button"
                    onClick={saveChanges}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-2xs transition-all cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Lưu thay đổi</span>
                  </button>

                  <button
                    id="btn-cancel-edit"
                    type="button"
                    onClick={cancelChanges}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Hủy</span>
                  </button>
                </>
              ) : (
                <button
                  id="btn-start-edit"
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#155EEF] hover:bg-[#004EEB] shadow-2xs transition-all cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Chỉnh sửa</span>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
