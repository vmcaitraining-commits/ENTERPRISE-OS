import React from 'react';

export interface SystemStatusCardProps {
  label: string;
  statusText: string;
  statusVariant: 'success' | 'info' | 'warning' | 'neutral' | 'cyan' | 'indigo' | 'navy';
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

export const SystemStatusCard: React.FC<SystemStatusCardProps> = ({
  label,
  statusText,
  statusVariant,
  icon: Icon,
  description,
}) => {
  const variantStyles = {
    success: {
      dot: 'bg-emerald-500',
      text: 'text-emerald-700 font-semibold',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    info: {
      dot: 'bg-[#155EEF]',
      text: 'text-[#155EEF] font-semibold',
      iconBg: 'bg-blue-50 text-[#155EEF]',
    },
    warning: {
      dot: 'bg-amber-500',
      text: 'text-amber-700 font-semibold',
      iconBg: 'bg-amber-50 text-amber-600',
    },
    neutral: {
      dot: 'bg-slate-400',
      text: 'text-slate-700 font-medium',
      iconBg: 'bg-slate-100 text-slate-600',
    },
    cyan: {
      dot: 'bg-cyan-500',
      text: 'text-cyan-700 font-semibold',
      iconBg: 'bg-cyan-50 text-cyan-600',
    },
    indigo: {
      dot: 'bg-indigo-500',
      text: 'text-indigo-700 font-semibold',
      iconBg: 'bg-indigo-50 text-indigo-600',
    },
    navy: {
      dot: 'bg-[#0B1F3A]',
      text: 'text-[#0B1F3A] font-semibold',
      iconBg: 'bg-slate-100 text-[#0B1F3A]',
    },
  };

  const style = variantStyles[statusVariant];

  return (
    <div className="p-3 bg-white rounded-lg border border-[#E5EAF1] shadow-2xs flex flex-col justify-between">
      <div className="flex items-center justify-between gap-1.5 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className={`w-5 h-5 rounded ${style.iconBg} flex items-center justify-center shrink-0`}>
            <Icon className="w-3 h-3" />
          </div>
          <span className="text-[11px] font-semibold text-[#64748B] truncate">
            {label}
          </span>
        </div>
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.dot}`} />
      </div>

      <div className={`text-xs ${style.text} truncate`}>
        {statusText}
      </div>

      {description && (
        <div className="text-[10px] text-slate-400 mt-1 truncate">
          {description}
        </div>
      )}
    </div>
  );
};
