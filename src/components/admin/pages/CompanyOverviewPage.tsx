import React from 'react';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { AdminStatCard } from '../shared/AdminStatCard';
import { AdminStatusBadge } from '../shared/AdminStatusBadge';
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  User,
  ArrowRight,
  ShieldCheck,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Image as ImageIcon,
  Clock
} from 'lucide-react';

export const CompanyOverviewPage: React.FC = () => {
  const { data, tempData, isEditing, stats, mediaCounts } = useEnterprise();
  const { navigate } = usePublicRouter();
  const currentData = isEditing ? tempData : data;
  const officialLogo = currentData.brandLogos.find(l => l.type === 'Logo chính') || currentData.brandLogos[0];

  const completionRate = stats?.completionPercentage ?? 100;
  const verifiedCount = stats?.verifiedFields ?? 14;
  const reviewCount = stats?.needsReviewFields ?? 0;
  const totalMedia = mediaCounts?.total ?? currentData.brandLogos.length;

  return (
    <div className="space-y-6">
      {/* 1. PAGE HEADER */}
      <AdminPageHeader
        title="Tổng quan doanh nghiệp"
        description="Quản lý dữ liệu nền tảng chính thức, định danh pháp lý và tài nguyên số của VMC Group."
        badge={
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            {completionRate}% hoàn thiện
          </span>
        }
      />

      {/* 2. 4 SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <AdminStatCard
          title="Hồ sơ doanh nghiệp"
          value={`${completionRate}%`}
          subtitle="Tỷ lệ trường dữ liệu hoàn thiện"
          icon={Building2}
          iconColorVariant="blue"
          progressPercentage={completionRate}
          onClick={() => navigate('/admin/company/profile')}
        />

        <AdminStatCard
          title="Dữ liệu đã xác nhận"
          value={verifiedCount}
          subtitle="Trường dữ liệu đã chuẩn hóa"
          icon={CheckCircle2}
          iconColorVariant="emerald"
          statusBadge="Chuẩn hóa"
          onClick={() => navigate('/admin/company/profile')}
        />

        <AdminStatCard
          title="Tài nguyên Media"
          value={totalMedia}
          subtitle="Tệp media & nhận diện"
          icon={ImageIcon}
          iconColorVariant="cyan"
          onClick={() => navigate('/admin/company/media')}
        />

        <AdminStatCard
          title="Cần rà soát"
          value={reviewCount}
          subtitle="Mục cần kiểm tra đối soát"
          icon={AlertTriangle}
          iconColorVariant="amber"
          statusBadge={reviewCount > 0 ? `${reviewCount} mục` : 'Ổn định'}
          onClick={() => navigate('/admin/company/data-review')}
        />
      </div>

      {/* 3. MAIN GRID: LEFT (2/3 width) + RIGHT (1/3 width) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT — 2/3 width (col-span-8): COMPANY PROFILE CARD */}
        <div className="lg:col-span-8 space-y-6">
          <div id="tab-content-overview" className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs">
            {/* Header: Logo & Company Description */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 pb-5 border-b border-[#F1F5F9]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white border border-[#E5EAF1] p-2.5 flex items-center justify-center shrink-0 shadow-2xs">
                <img
                  src={officialLogo?.url}
                  alt="Logo VMC Group"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0F1F3D] tracking-tight">
                    {currentData.identity.companyName.value}
                  </h2>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-[#155EEF] border border-blue-100">
                    {currentData.identity.shortName.value}
                  </span>
                  <AdminStatusBadge status={currentData.identity.companyName.status} />
                </div>

                <p className="text-xs sm:text-sm text-[#0F1F3D] font-medium leading-relaxed">
                  VMC Group — Xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, quy trình và AI.
                </p>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  Đơn vị thiết kế và triển khai kiến trúc AI Enterprise OS, kết nối con người, dữ liệu, quy trình, phần mềm và AI Agent thành một hệ thống vận hành thống nhất.
                </p>
              </div>
            </div>

            {/* Structured 6 Essential Info Fields */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Website */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50/70 border border-[#E5EAF1]">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Website chính thức</span>
                  <a
                    href={`https://${currentData.contact.website.value}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#155EEF] hover:underline truncate block"
                  >
                    {currentData.contact.website.value}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50/70 border border-[#E5EAF1]">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Email doanh nghiệp</span>
                  <span className="text-xs font-medium text-[#0F1F3D] truncate block">
                    {currentData.contact.email.value}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50/70 border border-[#E5EAF1]">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Hotline liên hệ</span>
                  <span className="text-xs font-medium text-[#0F1F3D] truncate block">
                    {currentData.contact.phone.value}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50/70 border border-[#E5EAF1]">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Trụ sở & Khu vực</span>
                  <span className="text-xs font-medium text-[#0F1F3D] truncate block">
                    {currentData.contact.region.value}
                  </span>
                </div>
              </div>

              {/* Market */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50/70 border border-[#E5EAF1]">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Thị trường trọng điểm</span>
                  <span className="text-xs font-medium text-[#0F1F3D] truncate block">
                    {currentData.market.currentMarket.value}
                  </span>
                </div>
              </div>

              {/* Representative */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-50/70 border border-[#E5EAF1]">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Người đại diện pháp luật</span>
                  <span className="text-xs font-semibold text-[#0F1F3D] truncate block">
                    {currentData.identity.representative.value}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between flex-wrap gap-2">
              <button
                id="btn-overview-to-profile"
                type="button"
                onClick={() => navigate('/admin/company/profile')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#155EEF] hover:underline cursor-pointer"
              >
                <span>Xem hồ sơ định danh chi tiết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="btn-overview-to-media"
                type="button"
                onClick={() => navigate('/admin/company/media')}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#64748B] hover:text-[#0F1F3D] hover:underline cursor-pointer"
              >
                <span>Kho tài nguyên Media</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — 1/3 width (col-span-4): DATA HEALTH & REVIEW SUMMARY */}
        <div className="lg:col-span-4 space-y-5">
          {/* DATA HEALTH CARD */}
          <div className="bg-white rounded-xl border border-[#E5EAF1] p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#155EEF]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Sức khỏe dữ liệu
                </h3>
              </div>
              <span className="text-xs font-bold text-[#155EEF]">
                {completionRate}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#155EEF] h-full rounded-full transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              />
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Đã xác thực chuẩn</span>
                </div>
                <span className="font-bold text-emerald-700">{verifiedCount}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50/60 border border-amber-100">
                <div className="flex items-center gap-2 text-amber-800 font-medium">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Cần đối soát / rà soát</span>
                </div>
                <span className="font-bold text-amber-700">{reviewCount}</span>
              </div>
            </div>
          </div>

          {/* DATA REVIEW SUMMARY / RECENT SYSTEM MILESTONES */}
          <div className="bg-white rounded-xl border border-[#E5EAF1] p-5 shadow-2xs space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Mốc hệ thống doanh nghiệp
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="border-l-2 border-emerald-500 pl-3 py-1">
                <p className="font-semibold text-[#0F1F3D]">Khởi tạo dữ liệu gốc V1.0</p>
                <span className="text-[11px] text-[#64748B]">Seed data chuẩn mực doanh nghiệp</span>
              </div>
              <div className="border-l-2 border-[#155EEF] pl-3 py-1">
                <p className="font-semibold text-[#0F1F3D]">Xác thực Supabase Auth</p>
                <span className="text-[11px] text-[#64748B]">Bảo vệ phân hệ Admin Portal an toàn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
