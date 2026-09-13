import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  Globe, Megaphone, Users, Headphones, CreditCard,
  UserCheck, Workflow, BookOpen, Sparkles, BarChart3,
  Cpu, ArrowRight, ChevronRight, Check, Layers
} from 'lucide-react';

interface ScopeModule {
  code: string;
  name: string;
  shortDesc: string;
  deepLink: string;
  icon: React.ElementType;
  keyBenefit: string;
  layer: number;
}

interface ArchitectureLayer {
  layerNumber: number;
  layerTitle: string;
  layerRole: string;
  modules: ScopeModule[];
}

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    layerNumber: 1,
    layerTitle: 'Lớp 1: Cổng Tiếp Nhận & Tương Tác Số',
    layerRole: 'Cửa ngõ thu hút lead và tương tác công khai',
    modules: [
      {
        code: 'Scope A',
        name: 'Website Doanh nghiệp',
        shortDesc: 'Cổng thông tin thương hiệu, landing page chiến dịch và tiếp nhận yêu cầu tự động vào CRM.',
        deepLink: '/solutions/website',
        icon: Globe,
        keyBenefit: 'Đồng bộ tức thì dữ liệu khách truy cập vào đường ống bán hàng.',
        layer: 1
      },
      {
        code: 'Scope C',
        name: 'Marketing Đa Kênh',
        shortDesc: 'Đo lường ROI chiến dịch quảng cáo, quản lý kênh truyền thông và tự động nuôi dưỡng lead.',
        deepLink: '/solutions/marketing',
        icon: Megaphone,
        keyBenefit: 'Tính toán chính xác chi phí CPL và CAC trên từng khách hàng thực.',
        layer: 1
      }
    ]
  },
  {
    layerNumber: 2,
    layerTitle: 'Lớp 2: Nghiệp Vụ Cốt Lõi & Khách Hàng',
    layerRole: 'Quản trị khách hàng 360°, hợp đồng và dòng tiền',
    modules: [
      {
        code: 'Scope B',
        name: 'CRS / CRM Doanh nghiệp',
        shortDesc: 'Quản lý thông tin khách hàng 360 độ, phễu cơ hội (Pipeline) và lịch sử tương tác đa kênh.',
        deepLink: '/solutions/crm',
        icon: Users,
        keyBenefit: 'Dữ liệu khách hàng thuộc sở hữu tổ chức, chống thất thoát khi thay đổi nhân sự.',
        layer: 2
      },
      {
        code: 'Scope D',
        name: 'Chăm sóc khách hàng (CSKH)',
        shortDesc: 'Hệ thống Ticket đa kênh, kiểm soát thời hạn cam kết SLA và đo lường mức độ hài lòng CSAT.',
        deepLink: '/solutions/customer-service',
        icon: Headphones,
        keyBenefit: 'Giải quyết khiếu nại nhanh chóng, bảo đảm không sót yêu cầu hậu mãi.',
        layer: 2
      },
      {
        code: 'Scope E',
        name: 'Tài chính — Kế toán',
        shortDesc: 'Kiểm soát dòng tiền thu chi, hóa đơn điện tử, đối soát ngân hàng và cảnh báo tuổi nợ.',
        deepLink: '/solutions/finance',
        icon: CreditCard,
        keyBenefit: 'Đối soát tức thì đơn hàng với tài khoản ngân hàng, minh bạch dòng tiền.',
        layer: 2
      }
    ]
  },
  {
    layerNumber: 3,
    layerTitle: 'Lớp 3: Vận Hành & Nguồn Lực Nội Bộ',
    layerRole: 'Chuẩn hóa quy trình SOP, hồ sơ nhân sự và kho tri thức',
    modules: [
      {
        code: 'Scope F',
        name: 'Nhân sự & Đào tạo (HR)',
        shortDesc: 'Quản lý vòng đời nhân sự, bảng chấm công, đo lường chỉ số KPI/OKR và lộ trình đào tạo.',
        deepLink: '/solutions/hr',
        icon: UserCheck,
        keyBenefit: 'Giảm 75% thời gian thủ tục hành chính, đánh giá hiệu suất minh bạch.',
        layer: 3
      },
      {
        code: 'Scope G',
        name: 'Quy trình SOP & Công việc',
        shortDesc: 'Chuẩn hóa quy trình vận hành, tự động kích hoạt tác vụ liên phòng ban và giám sát tiến độ.',
        deepLink: '/solutions/automation',
        icon: Workflow,
        keyBenefit: 'Loại bỏ hoàn toàn tình trạng đùn đẩy trách nhiệm giữa các phòng ban.',
        layer: 3
      },
      {
        code: 'Scope H',
        name: 'Tri thức Doanh nghiệp',
        shortDesc: 'Kho tài liệu, quy chế, biểu mẫu và hướng dẫn nghiệp vụ nội bộ tập trung, phân quyền truy cập.',
        deepLink: '/ai-enterprise',
        icon: BookOpen,
        keyBenefit: 'Lưu trữ tài sản tri thức của công ty, nhân viên mới tra cứu dễ dàng.',
        layer: 3
      }
    ]
  },
  {
    layerNumber: 4,
    layerTitle: 'Lớp 4: Trí Tuệ & Điều Hành Trung Tâm',
    layerRole: 'Trợ lý AI Copilot, Báo cáo BI và Tích hợp mở an toàn',
    modules: [
      {
        code: 'Scope I',
        name: 'Mạng lưới AI & Copilot',
        shortDesc: 'Trợ lý AI chuyên sâu từng vai trò, phân tích dữ liệu và đề xuất hành động có phê duyệt.',
        deepLink: '/ai',
        icon: Sparkles,
        keyBenefit: 'Hỗ trợ tăng tốc độ xử lý công việc nhưng con người luôn giữ quyền kiểm soát.',
        layer: 4
      },
      {
        code: 'Scope J',
        name: 'Báo cáo & BI Thời gian thực',
        shortDesc: 'Bảng điều khiển trực quan sức khỏe doanh nghiệp, dự báo xu hướng và cảnh báo điểm nghẽn.',
        deepLink: '/solutions/bi',
        icon: BarChart3,
        keyBenefit: 'Xóa bỏ việc chờ đợi báo cáo cuối tháng, ra quyết định dựa trên dữ liệu thực.',
        layer: 4
      },
      {
        code: 'Scope K',
        name: 'Hệ thống & Tích hợp Mở',
        shortDesc: 'Kiến trúc bảo mật đa tầng, phân quyền RBAC, Open API, Webhook và kiểm toán Audit Log.',
        deepLink: '/ai-enterprise',
        icon: Cpu,
        keyBenefit: 'Mở rộng kết nối linh hoạt với hệ sinh thái công nghệ sẵn có của doanh nghiệp.',
        layer: 4
      }
    ]
  }
];

export const ArchitectureMap11Modules: React.FC = () => {
  const { navigate } = usePublicRouter();
  const [selectedModule, setSelectedModule] = useState<ScopeModule>(ARCHITECTURE_LAYERS[1].modules[0]);
  const [activeMobileLayer, setActiveMobileLayer] = useState<number>(1);

  const SelectedIcon = selectedModule.icon;

  return (
    <section className="bg-[#0B1F3A] dark:bg-[#060D19] text-white py-16 sm:py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
              <Layers className="w-3.5 h-3.5" />
              KIẾN TRÚC 11 PHÂN HỆ
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Bản đồ 4 lớp kiến trúc AI ENTERPRISE
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Mô hình liên thông 11 phân hệ lõi tạo nên hệ điều hành doanh nghiệp hoàn chỉnh. Chọn một phân hệ để xem chi tiết vai trò và cách thức kết nối.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/ai-enterprise')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors shrink-0 cursor-pointer self-start md:self-auto"
          >
            <span>Xem kiến trúc đầy đủ</span>
            <ArrowRight className="w-4 h-4 text-[#06B6D4]" />
          </button>
        </div>

        {/* Layout: Desktop Interactive Map (Left) + Detail Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Architecture Layers (8 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {ARCHITECTURE_LAYERS.map((layer) => (
              <div
                key={layer.layerNumber}
                className="p-4 rounded-2xl bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-slate-800 space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 uppercase tracking-wide text-[11px]">
                    {layer.layerTitle}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                    {layer.layerRole}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {layer.modules.map((mod) => {
                    const isSelected = selectedModule.code === mod.code;
                    const Icon = mod.icon;
                    return (
                      <button
                        key={mod.code}
                        type="button"
                        onClick={() => setSelectedModule(mod)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                          isSelected
                            ? 'bg-[#155EEF] border-blue-400 text-white shadow-lg shadow-blue-500/20'
                            : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-[#06B6D4]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span
                            className={`text-[9px] font-mono block ${
                              isSelected ? 'text-blue-200' : 'text-slate-400'
                            }`}
                          >
                            {mod.code}
                          </span>
                          <span className="text-xs font-semibold block truncate leading-tight">
                            {mod.name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Selected Module Preview Card (5 cols on desktop) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0E1A30] to-[#070E1B] border border-blue-500/30 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#155EEF]/20 text-[#06B6D4] border border-[#155EEF]/40 flex items-center justify-center">
                    <SelectedIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#06B6D4] font-bold uppercase tracking-wider">
                      {selectedModule.code} • LỚP {selectedModule.layer}
                    </span>
                    <h3 className="text-base font-extrabold text-white leading-snug">
                      {selectedModule.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[11px] block font-semibold uppercase tracking-wider mb-1">
                    Vai trò trong hệ thống:
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedModule.shortDesc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#06B6D4] font-semibold text-[11px]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Lợi ích vận hành:</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {selectedModule.keyBenefit}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Phân hệ thuộc bản quyền VMC Group
                </span>
                <button
                  type="button"
                  onClick={() => navigate(selectedModule.deepLink)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Xem chi tiết phân hệ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
