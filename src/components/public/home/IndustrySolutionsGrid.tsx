import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  ShoppingBag, Briefcase, GraduationCap, Building2,
  Factory, Truck, HardHat, Cpu, ArrowRight, ChevronRight
} from 'lucide-react';

interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  problemStatement: string;
  icon: React.ElementType;
  tag: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'ind_trade',
    slug: 'trade',
    name: 'Thương mại & Bán lẻ',
    problemStatement: 'Đồng bộ đơn hàng đa kênh, quản lý tồn kho và chống thất thoát dòng tiền bán hàng.',
    icon: ShoppingBag,
    tag: 'Đa kênh & Tồn kho'
  },
  {
    id: 'ind_service',
    slug: 'service',
    name: 'Dịch vụ chuyên nghiệp',
    problemStatement: 'Quản lý lịch hẹn tư vấn, tiến độ hợp đồng dự án và đo lường sự hài lòng khách hàng.',
    icon: Briefcase,
    tag: 'Dự án & SLA'
  },
  {
    id: 'ind_education',
    slug: 'education',
    name: 'Giáo dục & Đào tạo',
    problemStatement: 'Tối ưu phễu tuyển sinh học viên, quản lý lịch đào tạo và số hóa kho học liệu tập trung.',
    icon: GraduationCap,
    tag: 'Tuyển sinh & Học liệu'
  },
  {
    id: 'ind_real_estate',
    slug: 'real-estate',
    name: 'Bất động sản',
    problemStatement: 'Bảo mật giỏ hàng dự án, phân quyền nguồn khách và giám sát hoa hồng môi giới minh bạch.',
    icon: Building2,
    tag: 'Bảo mật giỏ hàng'
  },
  {
    id: 'ind_manufacturing',
    slug: 'manufacturing',
    name: 'Sản xuất & Gia công',
    problemStatement: 'Liên thông đơn hàng từ phòng kinh doanh tới tiến độ xưởng và định mức nguyên vật liệu.',
    icon: Factory,
    tag: 'Liên thông xưởng'
  },
  {
    id: 'ind_distribution',
    slug: 'distribution',
    name: 'Phân phối & Bán buôn',
    problemStatement: 'Quản lý mạng lưới đại lý đa cấp, chiết khấu bậc thang và tự động khóa nợ quá hạn.',
    icon: Truck,
    tag: 'Đại lý & Công nợ'
  },
  {
    id: 'ind_construction',
    slug: 'construction',
    name: 'Xây dựng & Thi công',
    problemStatement: 'Kiểm soát định mức dự toán công trình, nhật ký thi công và hồ sơ nghiệm thu từng giai đoạn.',
    icon: HardHat,
    tag: 'Dự toán & Nghiệm thu'
  },
  {
    id: 'ind_technology',
    slug: 'technology',
    name: 'Doanh nghiệp Công nghệ',
    problemStatement: 'Tích hợp API/Webhook linh hoạt, quản lý vòng đời phát triển và tra cứu tri thức RAG nội bộ.',
    icon: Cpu,
    tag: 'API & Tri thức RAG'
  }
];

export const IndustrySolutionsGrid: React.FC = () => {
  const { navigate } = usePublicRouter();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 inline-block px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
            MAY ĐO THEO NGÀNH
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Giải pháp chuyên sâu cho 8 lĩnh vực kinh doanh trọng điểm
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Mỗi ngành nghề có đặc thù vận hành riêng biệt. AI ENTERPRISE được cấu hình sẵn các mẫu quy trình SOP và bộ trường dữ liệu phù hợp.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/industries/trade')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#155EEF] dark:text-[#06B6D4] hover:underline cursor-pointer shrink-0 self-start md:self-auto"
        >
          <span>Khám phá toàn bộ ngành</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 8 Compact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INDUSTRIES.map((ind) => {
          const Icon = ind.icon;
          return (
            <div
              key={ind.id}
              onClick={() => navigate(`/industries/${ind.slug}`)}
              className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center transition-transform group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                    {ind.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1 line-clamp-2">
                    {ind.problemStatement}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4]">
                <span>Xem giải pháp ngành</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
