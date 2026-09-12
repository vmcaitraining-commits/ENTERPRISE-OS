import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { FileCheck, AlertCircle, Image as ImageIcon, Sparkles } from 'lucide-react';

export const SummaryCards: React.FC = () => {
  const { data, isEditing, tempData, verifiedCount, missingCount, mediaCounts, setActiveTab } = useEnterprise();
  const currentData = isEditing ? tempData : data;

  return (
    <section id="summary-cards-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
      {/* Card 1: Hồ sơ doanh nghiệp */}
      <div
        id="card-profile-status"
        onClick={() => setActiveTab(2)}
        className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs hover:border-[#155EEF]/50 transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
            1. Hồ sơ doanh nghiệp
          </span>
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
            <Sparkles className="w-4 h-4 text-amber-600" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
            {currentData.profileStatus}
          </h3>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-[#64748B]">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Khởi tạo nền tảng {currentData.version}
          </span>
          <span className="text-[#155EEF] font-medium group-hover:underline">Chi tiết →</span>
        </div>
      </div>

      {/* Card 2: Thông tin đã xác nhận */}
      <div
        id="card-verified-count"
        onClick={() => setActiveTab(2)}
        className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs hover:border-emerald-400/50 transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
            2. Đã xác nhận
          </span>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
            <FileCheck className="w-4 h-4 text-emerald-600" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-extrabold text-[#0B1F3A]">
            {verifiedCount}
          </h3>
          <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
            Trường dữ liệu gốc
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-[#64748B]">
          <span>Định danh, Định vị, Chiến lược</span>
          <span className="text-emerald-700 font-medium group-hover:underline">Xem →</span>
        </div>
      </div>

      {/* Card 3: Cần bổ sung */}
      <div
        id="card-missing-count"
        onClick={() => setActiveTab(7)}
        className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs hover:border-amber-400/50 transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
            3. Cần bổ sung
          </span>
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
            <AlertCircle className="w-4 h-4 text-amber-600" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-extrabold text-[#0B1F3A]">
            {missingCount}
          </h3>
          <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full">
            Hạng mục chờ hoàn thiện
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-[#64748B]">
          <span>Pháp lý, Báo giá, Logo chuẩn</span>
          <span className="text-amber-800 font-medium group-hover:underline">Bổ sung →</span>
        </div>
      </div>

      {/* Card 4: Tài nguyên Media */}
      <div
        id="card-media-count"
        onClick={() => setActiveTab(6)}
        className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs hover:border-[#06B6D4]/50 transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
            4. Tài nguyên Media
          </span>
          <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
            <ImageIcon className="w-4 h-4 text-cyan-600" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-2xl font-extrabold text-[#0B1F3A]">
            {mediaCounts.total}
          </h3>
          <span className="text-xs font-medium text-[#0B1F3A]">tài nguyên</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-[#64748B]">
          <span className="flex items-center gap-2">
            <span className="font-semibold text-[#155EEF]">{mediaCounts.images} Ảnh</span>
            <span>•</span>
            <span className="font-semibold text-rose-600">{mediaCounts.videos} Video</span>
          </span>
          <span className="text-[#06B6D4] font-medium group-hover:underline">Kho Media →</span>
        </div>
      </div>
    </section>
  );
};
