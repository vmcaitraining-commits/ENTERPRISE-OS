import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { Compass, Home, ArrowRight, Layers, PhoneCall } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = usePublicRouter();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-blue-50 dark:bg-slate-800 text-[#155EEF] dark:text-[#06B6D4] border border-blue-100 dark:border-slate-700">
          <Compass className="w-12 h-12 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#06B6D4]">
            Lỗi 404 — Trang không tồn tại
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Liên kết bạn tìm kiếm không có trong hệ thống
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Trang web này có thể đã được thay đổi cấu trúc hoặc đường dẫn truy cập chưa chính xác. Vui lòng chọn các lối tắt bên dưới:
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#1048b8] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Trang chủ VMC Group</span>
          </button>
          <button
            onClick={() => navigate('/ai-enterprise')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white text-xs font-semibold transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            <Layers className="w-4 h-4" />
            <span>Kiến trúc AI ENTERPRISE</span>
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors cursor-pointer border border-slate-300 dark:border-slate-700"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Liên hệ hỗ trợ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
