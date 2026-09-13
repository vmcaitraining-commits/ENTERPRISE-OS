import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { implementationPhases } from '../../../data/websiteContent';
import {
  Layers, Server, Users, Globe, Zap, Cpu, BarChart3, GraduationCap,
  ArrowRight, CheckCircle2, Shield, Workflow, Database, FileText, Check, ChevronRight
} from 'lucide-react';

// 4 Groups of Capabilities
export interface CapabilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  sampleDeliverable: string;
}

export interface CapabilityGroup {
  id: string;
  groupNumber: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: CapabilityItem[];
}

const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'grp_architecture',
    groupNumber: '01',
    name: 'Kiến trúc & Khảo sát',
    tagline: 'Thiết kế tổng thể hệ thống vận hành và cấu trúc dữ liệu AI-native',
    description: 'Xây dựng bản vẽ kiến trúc kết nối con người, quy trình, dữ liệu và công nghệ thành một thể thống nhất, loại bỏ hoàn toàn tình trạng công cụ chắp vá.',
    capabilities: [
      {
        id: 'cap_1',
        title: 'Kiến trúc Doanh nghiệp AI',
        tagline: 'Thiết kế tổng thể hệ thống vận hành AI-native',
        description: 'Xây dựng bản vẽ kiến trúc kết nối con người, quy trình, dữ liệu và công nghệ thành một thể thống nhất, loại bỏ tình trạng chắp vá công cụ.',
        icon: Layers,
        sampleDeliverable: 'Blueprint Kiến trúc Tổng thể & Ranh giới Dữ liệu (System Architecture Blueprint)'
      },
      {
        id: 'cap_7',
        title: 'Data & Business Intelligence (BI)',
        tagline: 'Hệ thống báo cáo thời gian thực hỗ trợ ra quyết định',
        description: 'Xây dựng Dashboard trực quan đo lường hiệu quả vận hành, doanh thu, năng suất và dự báo tăng trưởng dựa trên dữ liệu thực chứng.',
        icon: BarChart3,
        sampleDeliverable: 'Executive Dashboard & Mô hình Dữ liệu Quản trị (Semantic Layer)'
      }
    ]
  },
  {
    id: 'grp_build',
    groupNumber: '02',
    name: 'Xây dựng & Cấu hình',
    tagline: 'Thiết lập nền tảng lõi và không gian số hóa chuẩn hóa',
    description: 'Khảo sát hiện trạng, phân tích nghiệp vụ, cấu hình các lõi chức năng từ Cổng thông tin, CRM đến phân hệ điều hành quản trị.',
    capabilities: [
      {
        id: 'cap_2',
        title: 'Triển khai AI ENTERPRISE',
        tagline: 'May đo hệ điều hành doanh nghiệp theo đặc thù',
        description: 'Khảo sát hiện trạng, phân tích nghiệp vụ, cấu hình các lõi chức năng và đồng hành chuyển đổi toàn diện cho khách hàng doanh nghiệp.',
        icon: Server,
        sampleDeliverable: 'Hệ điều hành AI ENTERPRISE bàn giao theo tenant riêng biệt'
      },
      {
        id: 'cap_4',
        title: 'Website Doanh nghiệp Thông minh',
        tagline: 'Cổng thông tin trực tuyến kết nối trực tiếp với lõi',
        description: 'Xây dựng website chuẩn thương hiệu, tối ưu chuyển đổi, kết nối dữ liệu trực tiếp với hệ thống CRM và các trợ lý AI tiếp nhận thông tin.',
        icon: Globe,
        sampleDeliverable: 'Cổng Portal/Website đồng bộ trực tiếp Lead vào CRM theo thời gian thực'
      }
    ]
  },
  {
    id: 'grp_interconnect',
    groupNumber: '03',
    name: 'Liên thông & Tự động hóa',
    tagline: 'Đồng bộ dòng chảy dữ liệu liên phòng ban và tích hợp dịch vụ',
    description: 'Thiết kế quy trình SOP số, tự động kích hoạt tác vụ liên phòng ban, liên kết API/Webhook với hệ sinh thái bên thứ ba an toàn.',
    capabilities: [
      {
        id: 'cap_3',
        title: 'CRS / CRM Doanh nghiệp',
        tagline: 'Quản trị khách hàng và quan hệ đối tác 360 độ',
        description: 'Thiết lập hệ thống quản lý lead, pipeline kinh doanh, chăm sóc khách hàng và lịch sử tương tác xuyên suốt hành trình trải nghiệm.',
        icon: Users,
        sampleDeliverable: 'Pipeline CRM chuẩn hóa & Hồ sơ Customer 360 liên kết kế toán'
      },
      {
        id: 'cap_5',
        title: 'Tự động hóa Quy trình (Workflow)',
        tagline: 'Chuẩn hóa và tự động hóa các dòng chảy nghiệp vụ',
        description: 'Thiết kế quy trình SOP số, tự động kích hoạt tác vụ liên phòng ban, loại bỏ thao tác thủ công lặp lại và giảm thiểu sai sót con người.',
        icon: Zap,
        sampleDeliverable: 'Bộ Workflow tự động hóa SOP kích hoạt tác vụ đa phòng ban'
      },
      {
        id: 'cap_6',
        title: 'Tích hợp Hệ thống (Integration)',
        tagline: 'Mở rộng liên kết qua API, Webhook chuẩn quốc tế',
        description: 'Có khả năng tích hợp linh hoạt với các hệ sinh thái dịch vụ bên thứ ba (Google Workspace, Zalo, Email, Cổng thanh toán, Cơ sở dữ liệu riêng).',
        icon: Cpu,
        sampleDeliverable: 'Tài liệu tích hợp Webhook/API & Bản đồ luân chuyển dữ liệu đối ứng'
      }
    ]
  },
  {
    id: 'grp_transfer',
    groupNumber: '04',
    name: 'Chuyển giao & Đồng hành',
    tagline: 'Đào tạo nhân sự, bàn giao tài liệu SOP và làm chủ công nghệ',
    description: 'Chuyển giao tri thức vận hành, đào tạo người dùng cuối và quản trị viên, giúp doanh nghiệp làm chủ hệ thống dài hạn và bền vững.',
    capabilities: [
      {
        id: 'cap_8',
        title: 'Đào tạo & Chuyển giao Năng lực',
        tagline: 'Nâng cao năng lực ứng dụng công nghệ và AI cho đội ngũ',
        description: 'Chuyển giao tri thức vận hành, đào tạo người dùng cuối và quản trị viên, giúp doanh nghiệp làm chủ hệ thống dài hạn.',
        icon: GraduationCap,
        sampleDeliverable: 'Bộ tài liệu SOP số, cẩm nang vận hành và video tập huấn nội bộ'
      }
    ]
  }
];

export const CapabilitiesPage: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const [selectedGroupId, setSelectedGroupId] = useState<string>('grp_architecture');

  const activeGroup = capabilityGroups.find(g => g.id === selectedGroupId) || capabilityGroups[0];

  return (
    <div className="space-y-20 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            NĂNG LỰC DOANH NGHIỆP
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Khung Năng lực Vận hành & Triển khai
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Chúng tôi kết hợp năng lực tư vấn kiến trúc doanh nghiệp sâu sắc cùng kỹ nghệ triển khai công nghệ và AI thực chiến, chuẩn hóa thành 4 nhóm năng lực rõ ràng.
          </p>
        </div>
      </section>

      {/* Visual Blueprint Centerpiece */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4]">
            BẢN VẼ KIẾN TRÚC TRUNG TÂM
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Mô hình Phân tầng Kiến trúc Doanh nghiệp AI
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Bản thiết kế mẫu thể hiện cách các năng lực cấu thành một thể thống nhất: từ Dữ liệu nền tảng, Dòng chảy quy trình, Hệ thống phân hệ đến Mạng lưới trợ lý AI.
          </p>
        </div>

        {/* Interactive Architectural Blueprint Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                VMC Enterprise Architecture Blueprint (v2.4 - Reference Model)
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Shield className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Multi-tenant Isolation • RBAC • Audit Trails</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Layer 1 */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <Layers className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">01. Kiến trúc</span>
              </div>
              <p className="text-xs text-slate-300">
                Thiết kế cấu trúc dữ liệu chuẩn hóa, sơ đồ tương tác liên phòng ban và ma trận quyền hạn RBAC.
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400">
                Đầu ra: System Blueprint
              </div>
            </div>

            {/* Layer 2 */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <Server className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">02. Xây dựng</span>
              </div>
              <p className="text-xs text-slate-300">
                Cấu hình phân hệ lõi: CRM, Kho tri thức SOP, Cổng Website số và không gian lưu trữ riêng biệt.
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400">
                Đầu ra: Operating Core System
              </div>
            </div>

            {/* Layer 3 */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400">
                <Workflow className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">03. Liên thông</span>
              </div>
              <p className="text-xs text-slate-300">
                Tự động hóa luân chuyển Lead, hợp đồng, đơn hàng; tích hợp API/Webhook hai chiều với bên thứ ba.
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400">
                Đầu ra: Event-driven SOP Workflows
              </div>
            </div>

            {/* Layer 4 */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">04. Chuyển giao</span>
              </div>
              <p className="text-xs text-slate-300">
                Tập huấn người dùng, bàn giao tài liệu SOP số, nghiệm thu kỹ thuật và cam kết dịch vụ bảo trì định kỳ.
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-emerald-400">
                Đầu ra: SOP Docs & Handover Records
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Capability Groups Tabs & Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4]">
            4 NHÓM NĂNG LỰC CỐT LÕI
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Chi tiết 4 Nhóm Năng lực Thực thi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Mỗi nhóm năng lực đều đi kèm đầu ra bàn giao mẫu rõ ràng và có thể kiểm chứng trong thực tế.
          </p>
        </div>

        {/* Group Filter Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          {capabilityGroups.map((group) => {
            const isActive = group.id === selectedGroupId;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedGroupId(group.id)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#155EEF] text-white shadow-md'
                    : 'bg-white dark:bg-[#0D182E] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-300'
                }`}
              >
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                  {group.groupNumber}
                </span>
                <span>{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Group Overview Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/40 dark:from-[#0B172E] dark:to-[#0F1E3D] border border-blue-200 dark:border-blue-900/60 space-y-2">
          <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase">
            Nhóm {activeGroup.groupNumber} • {activeGroup.tagline}
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {activeGroup.description}
          </p>
        </div>

        {/* Group Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeGroup.capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div
                key={cap.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col justify-between hover:border-[#155EEF] dark:hover:border-[#06B6D4] transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">{cap.title}</h3>
                  <div className="text-xs font-semibold text-[#06B6D4]">{cap.tagline}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{cap.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 -mx-6 -mb-6 p-4 rounded-b-2xl space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Đầu ra tham khảo (Tùy theo phạm vi triển khai):</span>
                  </div>
                  <p className="text-xs font-medium text-[#0B1F3A] dark:text-white">
                    {cap.sampleDeliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6 Implementation Phases as Timeline with Concrete Deliverables */}
      <section className="bg-slate-900 dark:bg-[#060D19] text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#06B6D4]">
              QUY TRÌNH THỰC THI CHUẨN HÓA
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Lộ trình 6 Giai đoạn Triển khai & Đầu ra Bàn giao
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Quy trình kiểm soát chất lượng từ bước khảo sát ban đầu đến nghiệm thu và chuyển giao toàn diện. Mỗi giai đoạn đều có các đầu ra kỹ thuật cụ thể, không hứa hẹn thời gian chung chung khi chưa khảo sát thực tế.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-slate-700 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            {implementationPhases.map((phase) => (
              <div key={phase.phase} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-[#06B6D4] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                </div>

                <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-3 max-w-4xl hover:border-slate-600 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-[#06B6D4] px-2.5 py-0.5 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/20">
                      GIAI ĐOẠN 0{phase.phase}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Thời lượng xác định theo quy mô khảo sát thực tế
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white">{phase.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{phase.description}</p>

                  <div className="pt-3 border-t border-slate-700/80 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Đầu ra tham khảo của từng giai đoạn (Tùy theo phạm vi triển khai):
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-emerald-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1F3A] dark:bg-[#0A162B] text-white text-center space-y-4 border border-slate-800 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold">
            Cần trao đổi về năng lực triển khai cho bài toán của doanh nghiệp bạn?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Đội ngũ kiến trúc sư của VMC Group sẵn sàng đồng hành khảo sát hiện trạng và đề xuất phương án kiến trúc phù hợp nhất với quy mô tổ chức của bạn.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Đăng ký tư vấn kiến trúc giải pháp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
