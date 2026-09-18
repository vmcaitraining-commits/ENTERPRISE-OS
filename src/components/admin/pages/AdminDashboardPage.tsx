import React from 'react';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { AdminStatCard } from '../shared/AdminStatCard';
import { AdminProgressItem } from '../shared/AdminProgressItem';
import { SystemStatusCard } from '../shared/SystemStatusCard';
import {
  Building2,
  Globe,
  PenTool,
  Image as ImageIcon,
  Database,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  TrendingUp,
  User,
  Calendar,
  Sparkles,
  LayoutTemplate
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const { data, tempData, isEditing, stats, mediaCounts } = useEnterprise();
  const { navigate } = usePublicRouter();
  const currentData = isEditing ? tempData : data;
  const officialLogo = currentData.brandLogos.find(l => l.type === 'Logo chính') || currentData.brandLogos[0];

  // Format real current date in Vietnamese
  const currentDateFormatted = new Intl.DateTimeFormat('vi-VN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  const completionRate = stats?.completionPercentage ?? 100;
  const verifiedCount = stats?.verifiedFields ?? 14;
  const reviewCount = stats?.needsReviewFields ?? 0;
  const totalMedia = mediaCounts?.total ?? currentData.brandLogos.length;

  return (
    <div className="space-y-6">
      {/* 1. TOP GREETING & DATE BAR */}
      <div className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-[#155EEF] bg-blue-50 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                VMC Enterprise OS
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#0F1F3D] tracking-tight">
              Chào mừng trở lại
            </h1>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl leading-relaxed">
              Quản trị toàn diện dữ liệu doanh nghiệp và hệ thống website VMC Group.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#64748B] bg-slate-50 border border-[#E5EAF1] px-3.5 py-2 rounded-lg self-start sm:self-auto shrink-0">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span className="capitalize">{currentDateFormatted}</span>
          </div>
        </div>
      </div>

      {/* 2. ROW OF 4 KPI SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <AdminStatCard
          id="stat-card-profile"
          title="Hồ sơ doanh nghiệp"
          value={`${completionRate}%`}
          subtitle="Tỷ lệ hoàn thiện dữ liệu chính thức"
          icon={Building2}
          iconColorVariant="blue"
          progressPercentage={completionRate}
          onClick={() => navigate('/admin/company/profile')}
        />

        <AdminStatCard
          id="stat-card-verified"
          title="Dữ liệu đã xác nhận"
          value={verifiedCount}
          subtitle="Trường thông tin chuẩn hóa pháp lý"
          icon={CheckCircle2}
          iconColorVariant="emerald"
          statusBadge="Chuẩn hóa"
          onClick={() => navigate('/admin/company/profile')}
        />

        <AdminStatCard
          id="stat-card-media"
          title="Tài nguyên Media"
          value={totalMedia}
          subtitle="Tệp media & logo trong thư viện"
          icon={ImageIcon}
          iconColorVariant="cyan"
          onClick={() => navigate('/admin/company/media')}
        />

        <AdminStatCard
          id="stat-card-review"
          title="Dữ liệu cần rà soát"
          value={reviewCount}
          subtitle="Trường dữ liệu cần đối soát"
          icon={AlertTriangle}
          iconColorVariant="amber"
          statusBadge={reviewCount > 0 ? `${reviewCount} mục` : 'Ổn định'}
          onClick={() => navigate('/admin/company/data-review')}
        />
      </div>

      {/* 3. MAIN DASHBOARD: TWO COLUMN ARCHITECTURE (Design 3: Left 60%, Right 40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT BLOCK: THÔNG TIN DOANH NGHIỆP (60% / col-span-7) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#F1F5F9]">
              <div>
                <h2 className="text-base font-bold text-[#0F1F3D]">
                  Thông tin doanh nghiệp
                </h2>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Định danh pháp lý, đại diện và các kênh liên hệ chính thức
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate('/admin/company/profile')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#155EEF] hover:bg-blue-50 border border-blue-100 transition-colors cursor-pointer shrink-0"
              >
                <span>Xem toàn bộ hồ sơ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Company Identity Card */}
            <div className="p-4 rounded-xl bg-slate-50/70 border border-[#E5EAF1] flex flex-col sm:flex-row items-start gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border border-[#E5EAF1] p-2 flex items-center justify-center shrink-0 shadow-2xs">
                <img
                  src={officialLogo?.url}
                  alt="VMC Group Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F1F3D] tracking-tight">
                    {currentData.identity.companyName.value}
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100/70 text-[#155EEF]">
                    {currentData.identity.shortName.value}
                  </span>
                </div>

                <p className="text-xs text-[#0F1F3D] font-medium leading-relaxed">
                  VMC Group — Hệ thống doanh nghiệp vận hành bằng dữ liệu, quy trình và AI.
                </p>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  Đơn vị thiết kế và triển khai kiến trúc AI Enterprise OS, kết nối con người, dữ liệu và AI Agent thành một hệ thống vận hành thống nhất.
                </p>
              </div>
            </div>

            {/* Compact Essential Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-[#E5EAF1]">
                <Globe className="w-4 h-4 text-[#155EEF] shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 font-medium block">Website</span>
                  <span className="text-xs font-semibold text-[#0F1F3D] truncate block">
                    {currentData.contact.website.value}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-[#E5EAF1]">
                <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 font-medium block">Email</span>
                  <span className="text-xs font-semibold text-[#0F1F3D] truncate block">
                    {currentData.contact.email.value}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-[#E5EAF1]">
                <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 font-medium block">Trụ sở & Khu vực</span>
                  <span className="text-xs font-semibold text-[#0F1F3D] truncate block">
                    {currentData.contact.region.value}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-[#E5EAF1]">
                <User className="w-4 h-4 text-slate-600 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 font-medium block">Đại diện pháp luật</span>
                  <span className="text-xs font-semibold text-[#0F1F3D] truncate block">
                    {currentData.identity.representative.value}
                  </span>
                </div>
              </div>
            </div>

            {/* Company Progress (6 compact items) */}
            <div className="pt-4 border-t border-[#F1F5F9] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tiến độ hoàn thiện dữ liệu
                </span>
                <span className="text-xs font-bold text-[#155EEF]">
                  {completionRate}% hoàn thiện
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <AdminProgressItem
                  label="Hồ sơ doanh nghiệp"
                  category="Định danh & Pháp lý"
                  status="Đã xác nhận"
                  progressPercentage={100}
                  onClick={() => navigate('/admin/company/profile')}
                />
                <AdminProgressItem
                  label="Định vị & Chiến lược"
                  category="Tầm nhìn & Sứ mệnh"
                  status="Đã xác nhận"
                  progressPercentage={100}
                  onClick={() => navigate('/admin/company/strategy')}
                />
                <AdminProgressItem
                  label="Sản phẩm & Thị trường"
                  category="Danh mục & Trọng điểm"
                  status="Đã xác nhận"
                  progressPercentage={100}
                  onClick={() => navigate('/admin/company/products-market')}
                />
                <AdminProgressItem
                  label="Nhận diện thương hiệu"
                  category="Màu sắc & Typography"
                  status="Đã xác nhận"
                  progressPercentage={100}
                  onClick={() => navigate('/admin/company/brand')}
                />
                <AdminProgressItem
                  label="Kho ảnh & Video"
                  category="Tài nguyên số"
                  status="Đã xác nhận"
                  progressPercentage={100}
                  onClick={() => navigate('/admin/company/media')}
                />
                <AdminProgressItem
                  label="Quản trị dữ liệu"
                  category="Kiểm soát rà soát"
                  status={reviewCount > 0 ? 'Cần rà soát' : 'Đã xác nhận'}
                  progressPercentage={reviewCount > 0 ? 80 : 100}
                  onClick={() => navigate('/admin/company/data-review')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BLOCK: QUẢN TRỊ TRANG WEB (40% / col-span-5) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#F1F5F9]">
              <div>
                <h2 className="text-base font-bold text-[#0F1F3D]">
                  Quản trị trang web
                </h2>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Trạng thái kết nối và phân hệ nội dung
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors cursor-pointer shrink-0"
              >
                <span>Truy cập web</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Website Status Panel */}
            <div className="p-4 rounded-xl bg-slate-50/70 border border-[#E5EAF1] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#64748B]">Tên miền chính</span>
                <span className="text-xs font-bold text-[#0F1F3D]">{currentData.contact.website.value}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#64748B]">Trạng thái Website</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Đang hoạt động
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#64748B]">Phiên bản phát hành</span>
                <span className="text-xs font-mono font-medium text-slate-700">V1.0 Enterprise</span>
              </div>
            </div>

            {/* CMS System Status: 2 rows x 3 columns */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Trạng thái hệ thống CMS
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <SystemStatusCard
                  label="Nội dung"
                  statusText="Dữ liệu cục bộ"
                  statusVariant="info"
                  icon={PenTool}
                  description="Sẵn sàng đồng bộ"
                />
                <SystemStatusCard
                  label="Media Assets"
                  statusText="Kho ảnh chuẩn"
                  statusVariant="cyan"
                  icon={ImageIcon}
                  description={`${totalMedia} tệp tài nguyên`}
                />
                <SystemStatusCard
                  label="Cơ sở dữ liệu"
                  statusText="Đã cấu hình"
                  statusVariant="indigo"
                  icon={Database}
                  description="Supabase ready"
                />
                <SystemStatusCard
                  label="Kho lưu trữ"
                  statusText="Cục bộ & Web"
                  statusVariant="warning"
                  icon={HardDrive}
                  description="Local cache"
                />
                <SystemStatusCard
                  label="Supabase Auth"
                  statusText="Đang hoạt động"
                  statusVariant="success"
                  icon={ShieldCheck}
                  description="Live & Connected"
                />
                <SystemStatusCard
                  label="Bảo vệ Admin"
                  statusText="Đã bảo vệ"
                  statusVariant="navy"
                  icon={CheckCircle2}
                  description="Guard Enforced"
                />
              </div>
            </div>

            {/* Quick Actions List */}
            <div className="pt-4 border-t border-[#F1F5F9] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Thao tác nhanh
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => navigate('/admin/website/content')}
                  className="p-3 rounded-lg border border-[#E5EAF1] bg-white hover:bg-blue-50/50 hover:border-[#155EEF]/40 transition-all flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <PenTool className="w-4 h-4 text-[#155EEF] shrink-0" />
                    <span className="text-xs font-semibold text-[#0F1F3D] group-hover:text-[#155EEF] truncate">
                      Soạn thảo nội dung
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/admin/company/media')}
                  className="p-3 rounded-lg border border-[#E5EAF1] bg-white hover:bg-blue-50/50 hover:border-[#155EEF]/40 transition-all flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <ImageIcon className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span className="text-xs font-semibold text-[#0F1F3D] group-hover:text-[#155EEF] truncate">
                      Quản lý Media
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/admin/website/builder')}
                  className="p-3 rounded-lg border border-[#E5EAF1] bg-white hover:bg-blue-50/50 hover:border-[#155EEF]/40 transition-all flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <LayoutTemplate className="w-4 h-4 text-purple-600 shrink-0" />
                    <span className="text-xs font-semibold text-[#0F1F3D] group-hover:text-[#155EEF] truncate">
                      Giao diện Website
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#155EEF] group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="p-3 rounded-lg border border-[#E5EAF1] bg-white hover:bg-blue-50/50 hover:border-[#155EEF]/40 transition-all flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-semibold text-[#0F1F3D] group-hover:text-[#155EEF] truncate">
                      Xem Website
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#155EEF] transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
