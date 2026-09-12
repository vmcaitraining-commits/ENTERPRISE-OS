import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { StatusBadge } from '../common/StatusBadge';
import { Globe, Mail, Phone, MapPin, TrendingUp, User, ArrowRight, Sparkles, Cpu, Target, ShieldCheck } from 'lucide-react';

export const TabOverview: React.FC = () => {
  const { data, tempData, isEditing, setActiveTab } = useEnterprise();
  const currentData = isEditing ? tempData : data;
  const officialLogo = currentData.brandLogos.find(l => l.type === 'Logo chính') || currentData.brandLogos[0];

  return (
    <div id="tab-content-overview" className="space-y-6">
      {/* Hero Banner Section */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100/40 via-blue-50/20 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          {/* Logo & Headline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0B1F3A] p-2 flex items-center justify-center shrink-0 shadow-md border border-[#155EEF]/30 overflow-hidden">
              <img
                src={officialLogo.url}
                alt="Logo VMC Group"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                  {currentData.identity.companyName.value}
                </h2>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#155EEF]/10 text-[#155EEF] border border-[#155EEF]/20">
                  {currentData.identity.shortName.value}
                </span>
                <StatusBadge status={currentData.identity.companyName.status} size="sm" />
              </div>

              <p className="text-sm sm:text-base text-[#0B1F3A] font-semibold mt-2 max-w-2xl leading-relaxed">
                VMC Group — Xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI.
              </p>

              <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl">
                Đơn vị thiết kế và triển khai kiến trúc doanh nghiệp AI, kết nối con người, dữ liệu, quy trình, phần mềm và AI thành một hệ thống vận hành thống nhất.
              </p>
            </div>
          </div>

          {/* Quick jump actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0">
            <button
              id="btn-overview-to-profile"
              onClick={() => setActiveTab(2)}
              className="px-4 py-2.5 bg-[#0B1F3A] hover:bg-[#155EEF] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-between gap-3 transition-colors shadow-xs cursor-pointer"
            >
              <span>Xem toàn bộ hồ sơ</span>
              <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
            </button>
            <button
              id="btn-overview-to-media"
              onClick={() => setActiveTab(6)}
              className="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#0B1F3A] border border-[#CBD5E1] text-xs sm:text-sm font-medium rounded-xl flex items-center justify-between gap-3 transition-colors cursor-pointer"
            >
              <span>Kho ảnh & Video</span>
              <ArrowRight className="w-4 h-4 text-[#64748B]" />
            </button>
          </div>
        </div>

        {/* 6 Essential Fields Grid */}
        <div className="mt-8 pt-6 border-t border-[#F1F5F9] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-[#E2E8F0]/70">
            <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-[#155EEF] flex items-center justify-center shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#64748B] block">Website chính thức</span>
              <a
                href={`https://${currentData.contact.website.value}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-semibold text-[#155EEF] hover:underline truncate block"
              >
                {currentData.contact.website.value}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-[#E2E8F0]/70">
            <div className="w-8 h-8 rounded-lg bg-cyan-100/60 text-[#06B6D4] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#64748B] block">Email doanh nghiệp</span>
              <span className="text-xs sm:text-sm font-medium text-[#0F172A] truncate block">
                {currentData.contact.email.value}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-[#E2E8F0]/70">
            <div className="w-8 h-8 rounded-lg bg-amber-100/60 text-amber-600 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#64748B] block">Số điện thoại</span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-medium text-[#0F172A]">
                  {currentData.contact.phone.value}
                </span>
                <StatusBadge status={currentData.contact.phone.status} size="sm" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-[#E2E8F0]/70">
            <div className="w-8 h-8 rounded-lg bg-purple-100/60 text-purple-600 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#64748B] block">Khu vực hoạt động</span>
              <span className="text-xs sm:text-sm font-medium text-[#0F172A] truncate block">
                {currentData.contact.region.value}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-[#E2E8F0]/70">
            <div className="w-8 h-8 rounded-lg bg-emerald-100/60 text-emerald-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#64748B] block">Thị trường</span>
              <span className="text-xs sm:text-sm font-medium text-[#0F172A] truncate block">
                {currentData.market.currentMarket.value}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-[#E2E8F0]/70">
            <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-[#64748B] block">Người đại diện</span>
              <span className="text-xs sm:text-sm font-semibold text-[#0B1F3A] truncate block">
                {currentData.identity.representative.value}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars: Định vị, Tầm nhìn, Sứ mệnh, Sản phẩm lõi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Pillar 1: Định vị */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#155EEF] uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>ĐỊNH VỊ DOANH NGHIỆP</span>
              </div>
              <StatusBadge status="Đã xác nhận" size="sm" />
            </div>
            <h3 className="text-base font-bold text-[#0B1F3A] mb-2">
              VMC Group — Kiến trúc sư hệ thống doanh nghiệp AI
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] line-clamp-3 leading-relaxed">
              Xây dựng kiến trúc lõi dùng chung, cấu hình theo từng doanh nghiệp và tùy biến theo ngành, quy mô, quy trình, dữ liệu riêng với khả năng nâng cấp liên tục.
            </p>
          </div>
          <button
            onClick={() => setActiveTab(3)}
            className="mt-4 pt-3 border-t border-[#F1F5F9] text-xs font-semibold text-[#155EEF] hover:text-blue-700 flex items-center gap-1 cursor-pointer"
          >
            <span>Xem chi tiết định vị</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar 2: Tầm nhìn */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>TẦM NHÌN CHIẾN LƯỢC</span>
              </div>
              <StatusBadge status="Đã xác nhận" size="sm" />
            </div>
            <h3 className="text-base font-bold text-[#0B1F3A] mb-2">
              Tiên phong xây dựng hệ thống AI-native tại Việt Nam
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] line-clamp-3 leading-relaxed">
              Chuyển đổi doanh nghiệp từ dữ liệu phân mảnh, phòng ban rời rạc, thao tác thủ công sang hệ thống thống nhất, dữ liệu kết nối, AI phân tích và ra quyết định.
            </p>
          </div>
          <button
            onClick={() => setActiveTab(3)}
            className="mt-4 pt-3 border-t border-[#F1F5F9] text-xs font-semibold text-[#06B6D4] hover:text-cyan-700 flex items-center gap-1 cursor-pointer"
          >
            <span>Xem chi tiết tầm nhìn</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar 3: Sứ mệnh */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>SỨ MỆNH VẬN HÀNH</span>
              </div>
              <StatusBadge status="Đã xác nhận" size="sm" />
            </div>
            <h3 className="text-base font-bold text-[#0B1F3A] mb-2">
              Biến AI thành năng lực vận hành thực tế
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] line-clamp-3 leading-relaxed">
              Kết nối con người, dữ liệu, quy trình, phần mềm và AI trong một kiến trúc thống nhất, giảm thiểu thao tác thủ công và xây nền tảng mở rộng bền vững.
            </p>
          </div>
          <button
            onClick={() => setActiveTab(3)}
            className="mt-4 pt-3 border-t border-[#F1F5F9] text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
          >
            <span>Xem 4 trụ cột sứ mệnh</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Pillar 4: Sản phẩm lõi */}
        <div className="bg-gradient-to-br from-[#0B1F3A] to-[#132A4D] rounded-xl p-5 text-white shadow-2xs flex flex-col justify-between border border-[#155EEF]/40">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#06B6D4] uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>SẢN PHẨM LÕI</span>
              </div>
              <span className="text-[11px] font-semibold bg-[#D9A62E] text-[#0B1F3A] px-2 py-0.5 rounded-full">
                Core Engine
              </span>
            </div>
            <h3 className="text-lg font-black text-white mb-1">
              AI ENTERPRISE
            </h3>
            <p className="text-xs text-[#06B6D4] font-medium mb-2">
              “Hệ điều hành doanh nghiệp bằng AI.”
            </p>
            <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
              Nền tảng lõi của VMC Group để xây dựng, quản trị và vận hành toàn diện với 11 phân hệ giá trị cho cả nội bộ lẫn thương mại hóa.
            </p>
          </div>
          <button
            onClick={() => setActiveTab(4)}
            className="mt-4 pt-3 border-t border-white/10 text-xs font-semibold text-[#06B6D4] hover:text-white flex items-center justify-between cursor-pointer"
          >
            <span>Khám phá hệ sinh thái AI Enterprise</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
