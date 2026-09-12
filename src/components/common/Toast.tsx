import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useEnterprise();

  if (!toast) return null;

  const iconMap = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-500 shrink-0" />
  };

  const bgMap = {
    success: 'bg-[#0B1F3A] text-white border-[#155EEF]/40',
    warning: 'bg-amber-950 text-white border-amber-500/40',
    error: 'bg-rose-950 text-white border-rose-500/40',
    info: 'bg-[#0B1F3A] text-white border-blue-500/40'
  };

  return (
    <div
      id="enterprise-toast-notification"
      className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4"
    >
      <div
        className={`flex items-center gap-3 p-4 rounded-xl shadow-xl border ${bgMap[toast.type]} transition-all animate-in fade-in slide-in-from-bottom-4 duration-200`}
      >
        {iconMap[toast.type]}
        <p className="text-sm font-medium flex-1">{toast.message}</p>
      </div>
    </div>
  );
};
