import React from 'react';
import { FieldStatus, MediaStatus } from '../../types/enterprise';
import { CheckCircle2, Clock, AlertCircle, AlertTriangle, Archive, Globe, FileEdit } from 'lucide-react';

interface StatusBadgeProps {
  status: FieldStatus | MediaStatus | string;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const isSm = size === 'sm';
  const baseClasses = `inline-flex items-center gap-1.5 font-medium rounded-full whitespace-nowrap ${
    isSm ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs'
  }`;

  switch (status) {
    case 'Đã xác nhận':
    case 'Approved':
      return (
        <span id={`status-badge-approved-${status}`} className={`${baseClasses} bg-emerald-50 text-emerald-700 border border-emerald-200/80`}>
          <CheckCircle2 className={isSm ? 'w-3 h-3 text-emerald-600' : 'w-3.5 h-3.5 text-emerald-600'} />
          <span>{status}</span>
        </span>
      );

    case 'Published':
      return (
        <span id={`status-badge-published-${status}`} className={`${baseClasses} bg-cyan-50 text-cyan-700 border border-cyan-200/80`}>
          <Globe className={isSm ? 'w-3 h-3 text-cyan-600' : 'w-3.5 h-3.5 text-cyan-600'} />
          <span>{status}</span>
        </span>
      );

    case 'Cần bổ sung':
      return (
        <span id={`status-badge-needs-info-${status}`} className={`${baseClasses} bg-amber-50 text-amber-800 border border-amber-200/80`}>
          <AlertTriangle className={isSm ? 'w-3 h-3 text-amber-600' : 'w-3.5 h-3.5 text-amber-600'} />
          <span>Cần bổ sung</span>
        </span>
      );

    case 'Chưa cập nhật':
    case 'Draft':
      return (
        <span id={`status-badge-draft-${status}`} className={`${baseClasses} bg-slate-100 text-slate-600 border border-slate-200`}>
          <Clock className={isSm ? 'w-3 h-3 text-slate-500' : 'w-3.5 h-3.5 text-slate-500'} />
          <span>{status}</span>
        </span>
      );

    case 'Chờ duyệt':
      return (
        <span id={`status-badge-pending-${status}`} className={`${baseClasses} bg-blue-50 text-blue-700 border border-blue-200`}>
          <FileEdit className={isSm ? 'w-3 h-3 text-blue-600' : 'w-3.5 h-3.5 text-blue-600'} />
          <span>Chờ duyệt</span>
        </span>
      );

    case 'Archived':
    case 'Hết hiệu lực':
      return (
        <span id={`status-badge-archived-${status}`} className={`${baseClasses} bg-rose-50 text-rose-700 border border-rose-200`}>
          <Archive className={isSm ? 'w-3 h-3 text-rose-600' : 'w-3.5 h-3.5 text-rose-600'} />
          <span>{status}</span>
        </span>
      );

    default:
      return (
        <span id={`status-badge-default-${status}`} className={`${baseClasses} bg-slate-100 text-slate-700 border border-slate-200`}>
          <span>{status}</span>
        </span>
      );
  }
};
