import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { FileCheck, AlertCircle, Image as ImageIcon, Sparkles } from 'lucide-react';

export const SummaryCards: React.FC = () => {
  const { data, isEditing, tempData, verifiedCount, missingCount, mediaCounts } = useEnterprise();
  const { navigate } = usePublicRouter();
  const currentData = isEditing ? tempData : data;

  return (
    <section id="summary-cards-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Card 1: Hồ sơ doanh nghiệp */}
      <div
        id="card-profile-status"
        onClick={() => navigate('/admin/company/profile')}
        className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-[#155EEF]/50 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              1. Hồ sơ doanh nghiệp
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <Sparkles className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
              {currentData.profileStatus}
            </h3>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Khởi tạo {currentData.version}
          </span>
          <span className="text-[#155EEF] font-semibold group-hover:translate-x-0.5 transition-transform text-xs">Chi tiết →</span>
        </div>
      </div>

      {/* Card 2: Thông tin đã xác nhận */}
      <div
        id="card-verified-count"
        onClick={() => navigate('/admin/company/profile')}
        className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-emerald-500/50 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              2. Đã xác nhận
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <FileCheck className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-extrabold text-[#0B1F3A]">
              {verifiedCount}
            </h3>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
              Trường dữ liệu gốc
            </span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="text-[11px] truncate">Định danh, Định vị, Chiến lược</span>
          <span className="text-emerald-700 font-semibold group-hover:translate-x-0.5 transition-transform text-xs">Xem →</span>
        </div>
      </div>

      {/* Card 3: Cần bổ sung */}
      <div
        id="card-missing-count"
        onClick={() => navigate('/admin/company/data-review')}
        className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-amber-500/50 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              3. Cần bổ sung
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <AlertCircle className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-extrabold text-[#0B1F3A]">
              {missingCount}
            </h3>
            <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
              Chờ hoàn thiện
            </span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="text-[11px] truncate">Pháp lý, Báo giá, Logo chuẩn</span>
          <span className="text-amber-800 font-semibold group-hover:translate-x-0.5 transition-transform text-xs">Bổ sung →</span>
        </div>
      </div>

      {/* Card 4: Tài nguyên Media */}
      <div
        id="card-media-count"
        onClick={() => navigate('/admin/company/media')}
        className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-[#06B6D4]/50 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              4. Tài nguyên Media
            </span>
            <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
              <ImageIcon className="w-4 h-4 text-cyan-600" />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-extrabold text-[#0B1F3A]">
              {mediaCounts.total}
            </h3>
            <span className="text-xs text-slate-500 font-medium">tài nguyên</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5 text-[11px]">
            <span className="font-semibold text-[#155EEF]">{mediaCounts.images} Ảnh</span>
            <span>•</span>
            <span className="font-semibold text-rose-600">{mediaCounts.videos} Video</span>
          </span>
          <span className="text-[#06B6D4] font-semibold group-hover:translate-x-0.5 transition-transform text-xs">Kho Media →</span>
        </div>
      </div>
    </section>
  );
};
