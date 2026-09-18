import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface AdminStatCardProps {
  id?: string;
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColorVariant?: 'blue' | 'emerald' | 'amber' | 'cyan' | 'purple';
  progressPercentage?: number;
  onClick?: () => void;
  statusBadge?: string;
}

export const AdminStatCard: React.FC<AdminStatCardProps> = ({
  id,
  title,
  value,
  subtitle,
  icon: Icon,
  iconColorVariant = 'blue',
  progressPercentage,
  onClick,
  statusBadge,
}) => {
  const colorMap = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-[#155EEF]',
      border: 'border-blue-100',
      bar: 'bg-[#155EEF]',
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-100',
      bar: 'bg-emerald-600',
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-100',
      bar: 'bg-amber-500',
    },
    cyan: {
      bg: 'bg-cyan-50',
      text: 'text-cyan-600',
      border: 'border-cyan-100',
      bar: 'bg-cyan-500',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-100',
      bar: 'bg-purple-500',
    },
  };

  const scheme = colorMap[iconColorVariant];

  return (
    <div
      id={id}
      onClick={onClick}
      className={`bg-white rounded-xl border border-[#E5EAF1] p-5 shadow-2xs transition-all duration-150 flex flex-col justify-between ${
        onClick ? 'cursor-pointer hover:border-[#155EEF]/50 hover:shadow-xs group' : ''
      }`}
    >
      <div>
        {/* Top: Icon + Title + Status/Arrow */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`w-9 h-9 rounded-lg ${scheme.bg} ${scheme.text} flex items-center justify-center shrink-0 border ${scheme.border}`}>
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-[#64748B] truncate">
              {title}
            </span>
          </div>

          {statusBadge ? (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
              {statusBadge}
            </span>
          ) : onClick ? (
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#155EEF] transition-colors shrink-0" />
          ) : null}
        </div>

        {/* Value */}
        <div className="text-2xl sm:text-3xl font-bold text-[#0F1F3D] tracking-tight">
          {value}
        </div>
      </div>

      {/* Subtitle & Progress */}
      <div className="mt-3 pt-3 border-t border-[#F1F5F9]">
        <div className="text-xs text-[#64748B] leading-relaxed">
          {subtitle}
        </div>

        {typeof progressPercentage === 'number' && (
          <div className="mt-2 w-full bg-slate-100 h-1 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${scheme.bar}`}
              style={{ width: `${Math.min(100, Math.max(0, progressPercentage))}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
