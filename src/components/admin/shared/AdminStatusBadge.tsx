import React from 'react';
import { CheckCircle2, Clock, AlertTriangle, Globe, ShieldCheck } from 'lucide-react';

export interface AdminStatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const AdminStatusBadge: React.FC<AdminStatusBadgeProps> = ({
  status,
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  // Normalize string for matching
  const normalized = status.trim();

  if (
    normalized === 'Đã xác nhận' ||
    normalized === 'Approved' ||
    normalized === 'Đang hoạt động' ||
    normalized === 'Live' ||
    normalized === 'Connected' ||
    normalized === 'Đã bảo vệ' ||
    normalized === 'Enforced'
  ) {
    return (
      <span className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 ${sizeClasses} ${className}`}>
        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
        <span>{normalized}</span>
      </span>
    );
  }

  if (normalized === 'Đã xuất bản' || normalized === 'Published') {
    return (
      <span className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200/60 ${sizeClasses} ${className}`}>
        <Globe className="w-3 h-3 text-cyan-600 shrink-0" />
        <span>{normalized}</span>
      </span>
    );
  }

  if (
    normalized === 'Cần bổ sung' ||
    normalized === 'Cần rà soát' ||
    normalized === 'Needs Review'
  ) {
    return (
      <span className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-amber-50 text-amber-700 border border-amber-200/60 ${sizeClasses} ${className}`}>
        <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0" />
        <span>{normalized}</span>
      </span>
    );
  }

  if (
    normalized === 'Bản nháp' ||
    normalized === 'Draft' ||
    normalized === 'Chưa cập nhật' ||
    normalized === 'Đang hoàn thiện'
  ) {
    return (
      <span className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 ${sizeClasses} ${className}`}>
        <Clock className="w-3 h-3 text-slate-500 shrink-0" />
        <span>{normalized}</span>
      </span>
    );
  }

  // Fallback
  return (
    <span className={`inline-flex items-center gap-1.5 font-medium rounded-full bg-slate-100 text-slate-700 border border-slate-200/60 ${sizeClasses} ${className}`}>
      <span>{normalized}</span>
    </span>
  );
};
