import React from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { SystemStatusCard } from '../shared/SystemStatusCard';
import {
  Globe,
  PenTool,
  LayoutTemplate,
  Database,
  ShieldCheck,
  Image as ImageIcon,
  ArrowRight,
  Layers,
  CheckCircle2,
  HardDrive,
  ExternalLink
} from 'lucide-react';
import { LocalWebsiteManagementRepository } from '../../../modules/website-management/infrastructure/local-adapter';

const repository = new LocalWebsiteManagementRepository();

export const WebsiteOverviewPage: React.FC = () => {
  const { navigate } = usePublicRouter();
  const persistenceStatus = repository.getPersistenceStatus();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Tổng quan Website"
        description="Trung tâm điều hành hệ thống Website VMC Group, cổng kết nối dữ liệu và trạng thái hoạt động của các phân hệ nội dung."
        badge={
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#155EEF] border border-blue-200/60">
            <Layers className="w-3.5 h-3.5 text-[#155EEF]" />
            VMC Web Engine
          </span>
        }
        showEditActions={false}
      />

      {/* WEBSITE LIVE SUMMARY CARD */}
      <div className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#0F1F3D]">vmcgroup.com.vn</h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Trực tuyến
                </span>
              </div>
              <p className="text-xs text-[#64748B]">Trang thông tin doanh nghiệp đa ngôn ngữ VMC Group</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#155EEF] hover:bg-[#004EEB] shadow-2xs transition-colors cursor-pointer"
          >
            <span>Xem Website công khai</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 SYSTEM STATUS CARDS (2 rows x 3 columns) */}
        <div className="pt-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Trạng thái phân hệ CMS
          </span>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <SystemStatusCard
              label="Nội dung"
              statusText="Dữ liệu cục bộ"
              statusVariant="info"
              icon={PenTool}
              description="Bản ghi trang & bài viết"
            />

            <SystemStatusCard
              label="Media Assets"
              statusText="Kho ảnh chuẩn"
              statusVariant="cyan"
              icon={ImageIcon}
              description="Thư viện tài nguyên"
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
              statusText="Cục bộ & Trình duyệt"
              statusVariant="warning"
              icon={HardDrive}
              description="Local persistence"
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
      </div>

      {/* CORE WORKSPACE ENTRY TILES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Tile 1: Content Manager */}
        <div
          onClick={() => navigate('/admin/website/content')}
          className="p-6 rounded-xl border border-[#E5EAF1] bg-white hover:border-[#155EEF]/50 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
            <PenTool className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#0F1F3D] group-hover:text-[#155EEF] transition-colors">
            Quản trị nội dung (Content Manager)
          </h3>
          <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
            Soạn thảo, phân loại cây thư mục website, biên tập nội dung đa ngôn ngữ (Tiếng Việt, Tiếng Anh, Tiếng Trung) và quản lý bài viết tin tức.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#155EEF]">
            <span>Mở công cụ quản trị nội dung</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Tile 2: Theme Builder */}
        <div
          onClick={() => navigate('/admin/website/builder')}
          className="p-6 rounded-xl border border-[#E5EAF1] bg-white hover:border-[#155EEF]/50 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
            <LayoutTemplate className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#0F1F3D] group-hover:text-[#155EEF] transition-colors">
            Giao diện & Trình xây dựng (Theme Builder)
          </h3>
          <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
            Kiến trúc bố cục Layout Nodes, Design Tokens, cấu hình header/footer và hệ thống hiển thị đồng bộ nhận diện VMC Group.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#155EEF]">
            <span>Xem kiến trúc Theme Builder</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
