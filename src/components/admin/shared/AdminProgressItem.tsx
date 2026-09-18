import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AdminStatusBadge } from './AdminStatusBadge';

export interface AdminProgressItemProps {
  label: string;
  category: string;
  status: 'Đã xác nhận' | 'Đang hoàn thiện' | 'Cần rà soát' | string;
  progressPercentage?: number;
  onClick?: () => void;
}

export const AdminProgressItem: React.FC<AdminProgressItemProps> = ({
  label,
  category,
  status,
  progressPercentage,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded-lg border border-[#E5EAF1] bg-slate-50/50 hover:bg-white hover:border-[#155EEF]/40 transition-all flex items-center justify-between gap-3 ${
        onClick ? 'cursor-pointer group' : ''
      }`}
    >
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[#0F1F3D] group-hover:text-[#155EEF] transition-colors truncate">
            {label}
          </span>
          <span className="text-[10px] text-slate-400 font-medium">
            • {category}
          </span>
        </div>

        {typeof progressPercentage === 'number' && (
          <div className="mt-1.5 w-full bg-slate-200/70 h-1 rounded-full overflow-hidden max-w-[140px]">
            <div
              className={`h-full rounded-full ${
                progressPercentage >= 100 ? 'bg-emerald-500' : 'bg-[#155EEF]'
              }`}
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <AdminStatusBadge status={status} size="sm" />
        {onClick && (
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-0.5 transition-all" />
        )}
      </div>
    </div>
  );
};
