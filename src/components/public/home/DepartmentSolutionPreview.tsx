import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  TrendingUp, Megaphone, Headphones, Users, CreditCard,
  ShieldCheck, ArrowRight, CheckCircle2, Workflow, Clock,
  DollarSign, Activity, FileText
} from 'lucide-react';

interface DepartmentTab {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  tagline: string;
  workflowSteps: {
    step: string;
    action: string;
  }[];
  impactMetric: {
    label: string;
    value: string;
  };
  connectedDepartments: string;
}

const DEPARTMENT_TABS: DepartmentTab[] = [
  {
    id: 'sales',
    slug: 'sales',
    name: 'Kinh doanh (Sales)',
    shortName: 'Sales',
    icon: TrendingUp,
    tagline: 'Quản trị đường ống bán hàng, khách hàng 360° và tăng tốc chốt hợp đồng',
    workflowSteps: [
      { step: '01. Tiếp nhận lead', action: 'Lead từ Website/Chiến dịch đổ về CRM trong 1 giây, tự động chấm điểm tiềm năng.' },
      { step: '02. Phân bổ & Tư vấn', action: 'Hệ thống điều phối đúng tư vấn viên, AI gợi ý kịch bản trao đổi phù hợp theo ngành.' },
      { step: '03. Báo giá & Phê duyệt', action: 'Soạn báo giá nhanh theo biểu mẫu chuẩn; quản lý duyệt chiết khấu đặc biệt trực tuyến.' },
      { step: '04. Chốt hợp đồng & Bàn giao', action: 'Ký kết hợp đồng điện tử, tự động liên thông sang Tài chính để xuất hóa đơn.' }
    ],
    impactMetric: {
      label: 'Thời gian phản hồi lead mới',
      value: 'Giảm 50%'
    },
    connectedDepartments: 'Liên thông trực tiếp sang Tài chính (hóa đơn, công nợ) và CSKH (hợp đồng, bảo hành).'
  },
  {
    id: 'marketing',
    slug: 'marketing',
    name: 'Marketing Đa Kênh',
    shortName: 'Marketing',
    icon: Megaphone,
    tagline: 'Đo lường chi phí trên từng khách hàng thực và tối ưu chuyển đổi chiến dịch',
    workflowSteps: [
      { step: '01. Chiến dịch đa kênh', action: 'Quản lý thông điệp và ngân sách trên các kênh truyền thông số tập trung.' },
      { step: '02. Form thông minh', action: 'Landing page và biểu mẫu thu thập dữ liệu với mã định danh chiến dịch (UTM).' },
      { step: '03. Phân loại & Nuôi dưỡng', action: 'Tự động gắn nhãn mối quan tâm và kích hoạt chuỗi email/tin nhắn chăm sóc.' },
      { step: '04. Đo lường ROI thực tế', action: 'Đối chiếu chi phí marketing với doanh số chốt thực tế từ phòng Kinh doanh.' }
    ],
    impactMetric: {
      label: 'Đo lường chính xác CAC',
      value: '100% minh bạch'
    },
    connectedDepartments: 'Đẩy lead ngay vào CRM của Sales; nhận dữ liệu doanh số để tính tỷ lệ hoàn vốn ROI.'
  },
  {
    id: 'cs',
    slug: 'customer-service',
    name: 'Chăm sóc khách hàng (CSKH)',
    shortName: 'CSKH',
    icon: Headphones,
    tagline: 'Quản trị Ticket hỗ trợ tập trung, kiểm soát cam kết SLA và nâng cao mức độ hài lòng',
    workflowSteps: [
      { step: '01. Tiếp nhận đa kênh', action: 'Gom toàn bộ tin nhắn, email, form khiếu nại thành các Ticket có số thứ tự.' },
      { step: '02. AI tra cứu tri thức', action: 'AI đối chiếu kho quy trình SOP/FAQ để gợi ý câu trả lời chuẩn xác cho nhân viên.' },
      { step: '03. Xử lý theo cam kết SLA', action: 'Hệ thống đếm ngược thời gian cam kết; tự động cảnh báo khi sắp quá hạn.' },
      { step: '04. Khảo sát hài lòng CSAT', action: 'Tự động gửi phiếu đánh giá chất lượng sau khi vấn đề được giải quyết.' }
    ],
    impactMetric: {
      label: 'Tỷ lệ giải quyết đúng hạn SLA',
      value: 'Đạt trên 95%'
    },
    connectedDepartments: 'Chuyển tiếp cơ hội mua lại sang Sales; phản hồi lỗi sản phẩm cho ban Kỹ thuật.'
  },
  {
    id: 'hr',
    slug: 'hr',
    name: 'Nhân sự & Đào tạo (HR)',
    shortName: 'Nhân sự',
    icon: Users,
    tagline: 'Số hóa vòng đời nhân sự, chấm công tự động và theo dõi hiệu suất làm việc khách quan',
    workflowSteps: [
      { step: '01. Hồ sơ & Hội nhập', action: 'Số hóa hợp đồng lao động, tài liệu Onboarding gửi tự động cho nhân sự mới.' },
      { step: '02. Chấm công & Phép', action: 'Đồng bộ máy chấm công, duyệt đơn nghỉ phép trực tuyến không cần giấy tờ.' },
      { step: '03. Theo dõi KPI/OKR', action: 'Gắn kết mục tiêu công việc cá nhân với dữ liệu hoàn thành thực tế hàng tuần.' },
      { step: '04. Đào tạo nội bộ', action: 'Kho học liệu số theo vị trí, theo dõi tiến độ sát hạch nâng bậc chuyên môn.' }
    ],
    impactMetric: {
      label: 'Thời gian tổng hợp công cuối tháng',
      value: 'Rút ngắn 75%'
    },
    connectedDepartments: 'Cung cấp dữ liệu công/lương cho Tài chính; nhận đánh giá hiệu suất từ các trưởng phòng.'
  },
  {
    id: 'finance',
    slug: 'finance',
    name: 'Tài chính — Kế toán',
    shortName: 'Tài chính',
    icon: CreditCard,
    tagline: 'Kiểm soát dòng tiền, đối soát hóa đơn tự động và cảnh báo tuổi nợ thời gian thực',
    workflowSteps: [
      { step: '01. Tạo phiếu thu/hóa đơn', action: 'Ngay khi Sales chốt đơn, phiếu thu và hóa đơn nháp được tạo tự động.' },
      { step: '02. Đối soát ngân hàng', action: 'Webhook ngân hàng thông báo tiền về, hệ thống tự động gán mã giao dịch.' },
      { step: '03. Duyệt chi theo hạn mức', action: 'Mọi đề xuất chi tiêu được phê duyệt theo thẩm quyền phân cấp chặt chẽ.' },
      { step: '04. Báo cáo dòng tiền 24/7', action: 'Biểu đồ dòng tiền lưu chuyển cập nhật liên tục, cảnh báo sớm nguy cơ thâm hụt.' }
    ],
    impactMetric: {
      label: 'Thời gian đối soát đơn hàng',
      value: 'Nhanh hơn 90%'
    },
    connectedDepartments: 'Nhận hợp đồng từ Sales để xuất hóa đơn; nhận đề xuất chi phí từ HR/Marketing.'
  },
  {
    id: 'management',
    slug: 'management',
    name: 'Điều hành doanh nghiệp',
    shortName: 'Điều hành',
    icon: ShieldCheck,
    tagline: 'Trung tâm chỉ huy dữ liệu thời gian thực, chuẩn hóa quy trình SOP và điều phối toàn diện',
    workflowSteps: [
      { step: '01. Bản đồ mục tiêu OKR', action: 'Phân bổ chỉ tiêu chiến lược từ Ban giám đốc xuống từng phòng ban chức năng.' },
      { step: '02. Giám sát điểm nghẽn', action: 'Hệ thống tự động phát hiện các khâu quy trình bị ách tắc hoặc chậm tiến độ.' },
      { step: '03. Morning Briefing', action: 'Bản tin điều hành tóm tắt tình hình kinh doanh, dòng tiền mỗi sáng cho lãnh đạo.' },
      { step: '04. Phê duyệt trực tuyến', action: 'Ký duyệt các quyết định trọng yếu nhanh chóng và bảo mật ngay trên thiết bị di động.' }
    ],
    impactMetric: {
      label: 'Bức tranh toàn cảnh doanh nghiệp',
      value: 'Thời gian thực'
    },
    connectedDepartments: 'Là trung tâm tiếp nhận báo cáo và điều phối hoạt động của toàn bộ các phòng ban.'
  }
];

export const DepartmentSolutionPreview: React.FC = () => {
  const { navigate } = usePublicRouter();
  const [activeTabId, setActiveTabId] = useState<string>('sales');

  const activeDept = DEPARTMENT_TABS.find((d) => d.id === activeTabId) || DEPARTMENT_TABS[0];
  const ActiveIcon = activeDept.icon;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 inline-block px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
          LIÊN THÔNG PHÒNG BAN
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          Giải pháp chuyên biệt cho từng bộ phận, kết nối trong một thể thống nhất
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Chọn từng phòng ban để xem trực quan quy trình nghiệp vụ được chuẩn hóa và tự động hóa như thế nào.
        </p>
      </div>

      {/* Tabs selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl max-w-4xl mx-auto">
        {DEPARTMENT_TABS.map((dept) => {
          const isSelected = dept.id === activeTabId;
          const Icon = dept.icon;
          return (
            <button
              key={dept.id}
              type="button"
              onClick={() => setActiveTabId(dept.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{dept.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Department Business Preview Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        {/* Top Info Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center font-bold shrink-0">
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] dark:text-white">
                {activeDept.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {activeDept.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 shrink-0 self-start sm:self-auto">
            <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium">
                {activeDept.impactMetric.label}
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                {activeDept.impactMetric.value}
              </span>
            </div>
          </div>
        </div>

        {/* 4-Step Operational Flow for this department */}
        <div className="space-y-3">
          <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Luồng nghiệp vụ chuẩn hóa (SOP Flow):
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeDept.workflowSteps.map((wf, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#155EEF] dark:text-[#06B6D4]">
                    {wf.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {wf.action}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Inter-department connection & Deep Link */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Điểm liên thông:</span>
            <span>{activeDept.connectedDepartments}</span>
          </div>

          <button
            type="button"
            onClick={() => navigate(`/solutions/${activeDept.slug}`)}
            className="inline-flex items-center gap-1.5 font-bold text-[#155EEF] dark:text-[#06B6D4] hover:underline cursor-pointer self-end sm:self-auto shrink-0"
          >
            <span>Xem chi tiết giải pháp {activeDept.shortName}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
