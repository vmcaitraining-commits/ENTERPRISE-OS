import React from 'react';
import {
  Users, Megaphone, Headphones, UserCheck, CreditCard, Sliders,
  Sparkles, CheckCircle2, ArrowRight, Layers, Lock, ShieldCheck
} from 'lucide-react';

export interface PlaceholderModuleConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  features: string[];
  integrationStatus: string;
}

const moduleConfigs: Record<string, PlaceholderModuleConfig> = {
  crm: {
    id: 'crm',
    name: 'CRM Khách hàng & Đối tác',
    category: 'Quan hệ Doanh nghiệp',
    description: 'Hệ thống quản lý khách hàng B2B, hồ sơ đối tác, quản lý phễu cơ hội và phân tích vòng đời khách hàng tích hợp dữ liệu VMC Core.',
    icon: Users,
    accentColor: 'emerald',
    features: [
      'Quản lý hồ sơ đối tác & khách hàng doanh nghiệp tập trung',
      'Đồng bộ với dữ liệu Hồ sơ & Sản phẩm VMC Group',
      'Phân tích phễu chuyển đổi và lịch sử giao dịch',
      'Tích hợp trợ lý AI gợi ý kịch bản chăm sóc khách hàng'
    ],
    integrationStatus: 'Kế hoạch triển khai Giai đoạn 2 (W4)'
  },
  marketing: {
    id: 'marketing',
    name: 'Marketing Tự động & Chiến dịch',
    category: 'Tăng trưởng & Thương hiệu',
    description: 'Nền tảng quản lý chiến dịch đa kênh, tối ưu nội dung số, theo dõi hiệu suất SEO và chiến lược định vị thương hiệu VMC.',
    icon: Megaphone,
    accentColor: 'amber',
    features: [
      'Điều phối chiến dịch đa kênh đồng bộ nhận diện VMC',
      'Tự động hóa phân phối nội dung bài viết và giải pháp ngành',
      'Báo cáo hiệu suất lưu lượng truy cập và chuyển đổi lead',
      'Thư viện ấn phẩm số gắn liền với Brand Guidelines'
    ],
    integrationStatus: 'Kế hoạch triển khai Giai đoạn 2 (W4)'
  },
  cskh: {
    id: 'cskh',
    name: 'Chăm sóc khách hàng & Dịch vụ (CSKH)',
    category: 'Vận hành Dịch vụ',
    description: 'Trung tâm tiếp nhận yêu cầu, hỗ trợ khách hàng đa kênh, quản lý SLA dịch vụ và khảo sát mức độ hài lòng khách hàng.',
    icon: Headphones,
    accentColor: 'cyan',
    features: [
      'Hệ thống Ticket đa kênh tiếp nhận yêu cầu tư vấn & hỗ trợ',
      'Trợ lý ảo AI giải đáp kỹ thuật dựa trên dữ liệu sản phẩm VMC',
      'Giám sát chỉ số SLA và thời gian phản hồi trung bình',
      'Khảo sát CSAT / NPS sau khi cung cấp giải pháp'
    ],
    integrationStatus: 'Kế hoạch triển khai Giai đoạn 3 (W5)'
  },
  hr: {
    id: 'hr',
    name: 'Quản trị nhân sự & Tổ chức (HRM)',
    category: 'Nội bộ & Con người',
    description: 'Quản lý cơ cấu tổ chức, hồ sơ nhân sự, chính sách văn hóa doanh nghiệp và đánh giá năng lực đội ngũ VMC Group.',
    icon: UserCheck,
    accentColor: 'purple',
    features: [
      'Sơ đồ tổ chức phân tầng và phân quyền theo phòng ban',
      'Hồ sơ nhân sự số hóa và quy chế nội bộ VMC',
      'Theo dõi lộ trình đào tạo và ứng dụng công nghệ AI',
      'Hệ thống đánh giá KPI / OKR định kỳ'
    ],
    integrationStatus: 'Kế hoạch triển khai Giai đoạn 3 (W5)'
  },
  finance: {
    id: 'finance',
    name: 'Tài chính - Kế toán & Ngân sách',
    category: 'Tài chính Doanh nghiệp',
    description: 'Hệ thống quản lý báo giá chuẩn, hợp đồng kinh tế, theo dõi dòng tiền dự án và dự báo tài chính phục vụ điều hành.',
    icon: CreditCard,
    accentColor: 'rose',
    features: [
      'Quản lý bảng giá chuẩn theo từng danh mục giải pháp',
      'Theo dõi tiến độ thanh toán và hợp đồng đối tác',
      'Báo cáo doanh thu theo ngành nghề và sản phẩm dịch vụ',
      'Dự báo dòng tiền và kế hoạch ngân sách vận hành'
    ],
    integrationStatus: 'Kế hoạch triển khai Giai đoạn 4 (W6)'
  },
  system: {
    id: 'system',
    name: 'Quản trị hệ thống & Bảo mật',
    category: 'Hạ tầng & An ninh',
    description: 'Cấu hình bảo mật toàn diện, nhật ký kiểm toán (Audit Logs), phân quyền RBAC và tích hợp các kết nối API ngoại vi.',
    icon: Sliders,
    accentColor: 'slate',
    features: [
      'Quản lý phân quyền người dùng và kiểm soát vai trò (RBAC)',
      'Nhật ký kiểm toán truy cập và thay đổi dữ liệu chi tiết',
      'Quản trị kết nối Supabase Auth, Storage và Edge Functions',
      'Cấu hình chính sách bảo mật và sao lưu dữ liệu tự động'
    ],
    integrationStatus: 'Đang kết nối nền tảng (Supabase Auth ENFORCED)'
  }
};

interface PlaceholderProps {
  moduleId: string;
  onNavigate: (targetModule: string, subTab?: number) => void;
}

export const AdminPlaceholderModule: React.FC<PlaceholderProps> = ({ moduleId, onNavigate }) => {
  const config = moduleConfigs[moduleId] || {
    id: moduleId,
    name: 'Phân hệ quản trị',
    category: 'Enterprise Module',
    description: 'Phân hệ đang trong lộ trình phát triển và tích hợp vào hệ thống VMC Enterprise.',
    icon: Layers,
    accentColor: 'blue',
    features: ['Sẵn sàng mở rộng theo kiến trúc module hóa'],
    integrationStatus: 'Đang phát triển'
  };

  const IconComponent = config.icon;

  return (
    <div className="space-y-6">
      {/* Banner Card */}
      <div className="bg-white rounded-xl border border-[#E5EAF1] p-6 sm:p-8 shadow-2xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0 border border-blue-100">
              <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] bg-slate-100 px-2 py-0.5 rounded">
                  {config.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Sắp ra mắt
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F1F3D] mt-1.5 tracking-tight">
                {config.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl leading-relaxed">
                {config.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('company/overview')}
              className="px-4 py-2 bg-[#155EEF] hover:bg-[#004EEB] text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-2xs cursor-pointer"
            >
              <span>Về Thông tin doanh nghiệp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('website/overview')}
              className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-[#0F1F3D] border border-[#E5EAF1] text-xs sm:text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Quản trị trang web</span>
            </button>
          </div>
        </div>
      </div>

      {/* Architecture & Feature Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E5EAF1] p-6 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0F1F3D] uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#155EEF]" />
            <span>Tính năng dự kiến tích hợp</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {config.features.map((feature, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50/70 rounded-lg border border-[#E5EAF1] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#0F1F3D] font-medium leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#64748B]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Thiết kế tương thích với hạ tầng VMC Core Data & Supabase
            </span>
            <span className="font-semibold text-[#155EEF]">{config.integrationStatus}</span>
          </div>
        </div>

        {/* Integration Readiness Card */}
        <div className="bg-slate-50 rounded-xl p-6 border border-[#E5EAF1] shadow-2xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#155EEF] font-semibold uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5" />
              Kiến trúc bảo mật thống nhất
            </div>
            <h3 className="text-base font-bold text-[#0F1F3D]">Kế hoạch triển khai Module</h3>
            <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
              Các module nghiệp vụ được kích hoạt theo lộ trình chuẩn hóa dữ liệu doanh nghiệp VMC Group. Toàn bộ phiên bản đều kế thừa bảo mật Supabase Auth ENFORCED.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-white border border-[#E5EAF1] text-xs space-y-1.5">
            <div className="flex justify-between text-[#64748B]">
              <span>Trạng thái module:</span>
              <span className="font-semibold text-amber-600">Đang chuẩn bị</span>
            </div>
            <div className="flex justify-between text-[#64748B]">
              <span>Cơ chế bảo vệ:</span>
              <span className="font-semibold text-emerald-600">AdminAuthGuard Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
