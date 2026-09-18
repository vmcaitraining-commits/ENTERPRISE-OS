import React from 'react';
import { Inbox } from 'lucide-react';

export interface AdminEmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ComponentType<{ className?: string }>;
}

export const AdminEmptyState: React.FC<AdminEmptyStateProps> = ({
  title = 'Chưa có dữ liệu',
  description = 'Hiện tại chưa có bản ghi hoặc thông tin nào được tạo trong mục này.',
  actionLabel,
  onAction,
  icon: Icon = Inbox,
}) => {
  return (
    <div className="py-10 px-6 text-center bg-slate-50/60 rounded-xl border border-dashed border-slate-200">
      <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-sm font-semibold text-[#0F1F3D]">
        {title}
      </h4>
      <p className="text-xs text-[#64748B] max-w-sm mx-auto mt-1 leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-3.5 px-3 py-1.5 bg-[#155EEF] hover:bg-[#004EEB] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
