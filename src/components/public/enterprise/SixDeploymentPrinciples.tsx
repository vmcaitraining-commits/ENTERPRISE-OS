import React from 'react';
import {
  Globe, UserCheck, Database, Sliders, Bot, Layers,
  CheckCircle2, ShieldCheck, Sparkles
} from 'lucide-react';

interface PrincipleItem {
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
}

const SIX_PRINCIPLES: PrincipleItem[] = [
  {
    num: '01',
    title: 'Website riêng biệt cho từng doanh nghiệp',
    description: 'Mỗi khách hàng sở hữu một cổng thông tin và tên miền độc lập, mang trọn vẹn nhận diện thương hiệu, giao diện và cấu trúc tiếp nhận lead riêng biệt, không chạy chung giao diện hay phụ thuộc nền tảng công cộng.',
    icon: Globe,
    highlights: [
      'Tên miền và nhận diện thương hiệu riêng theo cấu hình',
      'Tùy biến cấu trúc trang và biểu mẫu thu lead',
      'Đồng bộ trực tiếp vào CRM nội bộ không qua trung gian'
    ]
  },
  {
    num: '02',
    title: 'Người dùng riêng biệt & Bảo mật cao',
    description: 'Mỗi nhân sự được cấp tài khoản định danh riêng, xác thực an toàn và phân quyền theo vai trò (RBAC). Hạn chế việc dùng chung tài khoản để đảm bảo tính giải trình và truy vết theo quy chế.',
    icon: UserCheck,
    highlights: [
      'Định danh cá nhân hóa cho từng vị trí phòng ban',
      'Phân quyền đặc quyền tối thiểu (Least Privilege)',
      'Ghi nhận trách nhiệm cá nhân trong nhật ký kiểm toán'
    ]
  },
  {
    num: '03',
    title: 'Dữ liệu phân tách & Quyền sở hữu của doanh nghiệp',
    description: 'Dữ liệu giữa các doanh nghiệp được phân tách theo tenant và phạm vi truy cập. Toàn bộ cơ sở dữ liệu khách hàng, tài chính và nghiệp vụ thuộc quyền sở hữu của doanh nghiệp theo thỏa thuận triển khai.',
    icon: Database,
    highlights: [
      'Dữ liệu được phân tách theo tenant và phạm vi truy cập',
      'Doanh nghiệp có quyền xuất (export) dữ liệu theo quy trình bàn giao',
      'Có thể áp dụng thỏa thuận bảo mật theo phạm vi triển khai và hợp đồng'
    ]
  },
  {
    num: '04',
    title: 'Quy trình và giao diện cấu hình linh hoạt',
    description: 'Hệ thống cho phép tùy biến trường dữ liệu, quy trình phê duyệt và các bước SOP theo đúng đặc thù ngành và văn hóa tổ chức mà không làm gãy vỡ kiến trúc lõi dùng chung.',
    icon: Sliders,
    highlights: [
      'Tùy biến trường thông tin và đường ống kinh doanh',
      'Cấu hình luồng phê duyệt đa cấp theo hạn mức',
      'Kế thừa tính toàn vẹn và độ ổn định của hệ thống lõi'
    ]
  },
  {
    num: '05',
    title: 'AI vận hành theo ngữ cảnh tổ chức',
    description: 'Mạng lưới AI Copilot hỗ trợ tra cứu từ kho tri thức nội bộ (SOP, cẩm nang nghiệp vụ, tài liệu sản phẩm) của doanh nghiệp. Dữ liệu được phân tách theo tenant, phạm vi truy cập và cấu hình của hệ thống. Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.',
    icon: Bot,
    highlights: [
      'Truy vấn RAG trên cơ sở dữ liệu tri thức nội bộ được kiểm duyệt',
      'Bảo vệ thông tin kinh doanh và chính sách nội bộ theo phân quyền',
      'Giảm nguy cơ trả lời không có căn cứ bằng RAG và nguồn dữ liệu được kiểm soát'
    ]
  },
  {
    num: '06',
    title: 'Cùng sử dụng chung kiến trúc lõi được kiểm soát',
    description: 'Dù mỗi doanh nghiệp có dữ liệu và quy trình riêng, toàn bộ hệ thống đều vận hành trên kiến trúc lõi chuẩn mực của VMC Group. Đảm bảo tính ổn định cao, khả năng mở rộng quy mô và liên tục nhận các bản nâng cấp mới.',
    icon: Layers,
    highlights: [
      'Nền tảng hạ tầng ổn định cấp doanh nghiệp',
      'Khả năng nâng cấp liên tục và cập nhật bảo mật',
      'Hỗ trợ ghi nhận nhật ký kiểm toán cho các hành động trọng yếu'
    ]
  }
];

export const SixDeploymentPrinciples: React.FC = () => {
  return (
    <section id="principles" className="scroll-mt-28 bg-slate-900 dark:bg-[#060D19] text-white py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            NGUYÊN TẮC BẤT BIẾN
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            6 Nguyên tắc triển khai cốt lõi của VMC Group
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Các cam kết nền tảng đảm bảo hệ thống vừa có tính ổn định lâu dài theo chuẩn kiến trúc, vừa giữ trọn vẹn tính độc lập, bảo mật và quyền sở hữu dữ liệu của từng doanh nghiệp.
          </p>
        </div>

        {/* 6 Reconstructed Rich Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIX_PRINCIPLES.map((pr) => {
            const Icon = pr.icon;
            return (
              <div
                key={pr.num}
                className="p-6 rounded-3xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-600 transition-colors shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#06B6D4]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800">
                        Nguyên tắc {pr.num}
                      </span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-700/60 text-[#06B6D4]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {pr.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pr.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Cam kết thực thi:
                  </span>
                  <ul className="space-y-1">
                    {pr.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
