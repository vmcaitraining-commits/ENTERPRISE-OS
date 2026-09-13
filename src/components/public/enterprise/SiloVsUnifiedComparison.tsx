import React from 'react';
import {
  AlertTriangle, CheckCircle2, XCircle, ArrowRight,
  Database, RefreshCw, Clock, ShieldCheck, Layers, FileSpreadsheet
} from 'lucide-react';

interface ComparisonRow {
  dimension: string;
  beforeProblem: string;
  afterSolution: string;
  impactMetric: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: 'Cấu trúc lưu trữ dữ liệu',
    beforeProblem: 'Dữ liệu nằm rải rác trên nhiều ứng dụng độc lập (CRM một nơi, Kế toán một nẻo, File Excel quản lý tác vụ, Zalo bàn giao việc). Khách hàng thay đổi thông tin chỉ cập nhật trên một phần mềm, các bộ phận khác không nắm được.',
    afterSolution: 'Một nguồn dữ liệu sự thật duy nhất (Single Source of Truth). Các phòng ban cùng truy cập và chia sẻ chung một cơ sở dữ liệu đã chuẩn hóa; dữ liệu cập nhật đồng bộ xuyên suốt theo phân quyền.',
    impactMetric: 'Dữ liệu tập trung, hạn chế phân mảnh'
  },
  {
    dimension: 'Thao tác nghiệp vụ & Nhập liệu',
    beforeProblem: 'Nhân viên phải nhập tay lặp lại thông tin cùng một khách hàng qua nhiều công cụ: từ biểu mẫu web sang CRM, từ hợp đồng sang phần mềm kế toán, từ phiếu thu sang nhóm chat nội bộ.',
    afterSolution: 'Dữ liệu luân chuyển tự động theo quy trình SOP chuẩn. Khách hàng điền biểu mẫu → Tạo Lead trên CRM → Ký hợp đồng tạo chứng từ kế toán → Kích hoạt chăm sóc khách hàng theo quy trình định sẵn.',
    impactMetric: 'Giảm đáng kể thao tác nhập liệu thủ công'
  },
  {
    dimension: 'Độ chính xác & Đối soát số liệu',
    beforeProblem: 'Số liệu giữa các bộ phận dễ phát sinh chênh lệch: Báo cáo doanh số ghi nhận của kinh doanh không trùng khớp với số tiền thực thu của kế toán; phát sinh mất nhiều thời gian đối soát.',
    afterSolution: 'Trạng thái hợp đồng và dòng tiền thực thu liên thông theo quy trình. Báo cáo doanh thu và công nợ đối soát dựa trên cùng một hệ thống dữ liệu, giảm thiểu sai lệch số liệu.',
    impactMetric: 'Hạn chế tối đa sai lệch số liệu đối soát'
  },
  {
    dimension: 'Tốc độ ra quyết định điều hành',
    beforeProblem: 'Lãnh đạo phải chờ đợi tổng hợp báo cáo thủ công qua nhiều cấp phòng ban vào cuối kỳ. Việc nắm bắt biến động chi phí hoặc sụt giảm doanh số thường có độ trễ.',
    afterSolution: 'Bảng điều khiển BI cập nhật theo dữ liệu thực tế hệ thống. Ban giám đốc chủ động theo dõi các chỉ số kinh doanh, tiến độ công việc và dòng tiền ngay trên giao diện điều hành.',
    impactMetric: 'Báo cáo cập nhật theo dữ liệu hệ thống'
  },
  {
    dimension: 'Ứng dụng AI & Quản trị dữ liệu',
    beforeProblem: 'Nhân sự tự ý sao chép dữ liệu khách hàng hoặc báo giá vào các công cụ AI công cộng bên ngoài. Khó kiểm soát phạm vi truy cập dữ liệu và thiếu cơ chế ghi nhận lịch sử thao tác.',
    afterSolution: 'Mạng lưới AI Copilot vận hành trong phạm vi dữ liệu được cấu hình của doanh nghiệp. Tác vụ tuân theo cơ chế Human-in-the-loop (con người phê duyệt) và ghi nhận nhật ký kiểm toán phục vụ truy vết.',
    impactMetric: 'Quyền và lịch sử thao tác rõ ràng'
  }
];

export const SiloVsUnifiedComparison: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-3.5 h-3.5" />
          VẤN ĐỀ NỀN TẢNG CỦA DOANH NGHIỆP
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          Sự khác biệt cốt lõi: Ghép nối rời rạc vs. Hệ điều hành hợp nhất
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Nhiều doanh nghiệp lầm tưởng rằng chuyển đổi số là mua thêm thật nhiều phần mềm. Thực tế, việc chắp vá các ứng dụng riêng lẻ chỉ tạo ra các “ốc đảo dữ liệu”, gia tăng chi phí ẩn và làm chậm nhịp vận hành.
        </p>
      </div>

      {/* Side-by-Side Visual Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: The Fragmented Reality (Before) */}
        <div className="p-6 rounded-3xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-5">
          <div className="flex items-center justify-between border-b border-rose-200 dark:border-rose-900/60 pb-3">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-base">
              <XCircle className="w-5 h-5 shrink-0" />
              <span>MÔ HÌNH PHẦN MỀM RỜI RẠC (SILOED APPS)</span>
            </div>
            <span className="text-[11px] font-mono font-bold text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded">
              TRƯỚC CHUYỂN ĐỔI
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Doanh nghiệp sử dụng nhiều công cụ riêng lẻ: Website bên thứ 3, CRM riêng, Phần mềm Kế toán riêng, Quản lý công việc trên Excel, Giao tiếp qua nhóm chat...
          </p>

          <div className="space-y-2.5 text-xs text-rose-950 dark:text-rose-200">
            <div className="flex items-start gap-2 bg-white/80 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200/80 dark:border-rose-900/40">
              <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span><strong>Dữ liệu phân tán:</strong> Mỗi phòng ban lưu trữ tập tin riêng, khó chia sẻ tự động và dễ phát sinh sai sót.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/80 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200/80 dark:border-rose-900/40">
              <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span><strong>Nhập lại dữ liệu:</strong> Nhân sự tốn thời gian gõ lại thông tin qua các khâu, quy trình dễ đứt gãy.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/80 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200/80 dark:border-rose-900/40">
              <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span><strong>Báo cáo chậm & khó truy vết:</strong> Dữ liệu tổng hợp thủ công có độ trễ, thiếu lịch sử thao tác xuyên suốt.</span>
            </div>
          </div>
        </div>

        {/* Right: The Unified AI Enterprise Model (After) */}
        <div className="p-6 rounded-3xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 space-y-5">
          <div className="flex items-center justify-between border-b border-blue-200 dark:border-blue-900/60 pb-3">
            <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4] font-bold text-base">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>HỆ ĐIỀU HÀNH AI ENTERPRISE THỐNG NHẤT</span>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">
              SAU CHUYỂN ĐỔI
            </span>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Hợp nhất các phân hệ chức năng trên một cơ sở dữ liệu chung. Luồng thông tin vận hành liên thông, kiểm soát theo phân quyền.
          </p>

          <div className="space-y-2.5 text-xs text-blue-950 dark:text-blue-200">
            <div className="flex items-start gap-2 bg-white/80 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-200/80 dark:border-blue-900/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Dữ liệu tập trung:</strong> Một nguồn dữ liệu chuẩn hóa dùng chung cho khách hàng, hợp đồng và tài chính.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/80 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-200/80 dark:border-blue-900/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Workflow liên thông:</strong> Dữ liệu tự động chuyển tiếp giữa các phòng ban theo quy trình đã cấu hình.</span>
            </div>
            <div className="flex items-start gap-2 bg-white/80 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-200/80 dark:border-blue-900/40">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Báo cáo & phân quyền rõ ràng:</strong> Số liệu phản ánh theo dữ liệu thực tế hệ thống; ghi nhận lịch sử thao tác.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed 5-Dimension Matrix Table */}
      <div className="bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
            Bảng đối chiếu 5 tiêu chí vận hành thực tế
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            * So sánh phân tích quy trình vận hành
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
          {COMPARISON_ROWS.map((row, idx) => (
            <div key={idx} className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
              <div className="lg:col-span-3 space-y-1.5">
                <div className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</div>
                <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">{row.dimension}</h4>
                <div className="inline-block text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                  {row.impactMetric}
                </div>
              </div>

              {/* Problem Column */}
              <div className="lg:col-span-4 p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  Mô hình phần mềm rời rạc:
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {row.beforeProblem}
                </p>
              </div>

              {/* Solution Column */}
              <div className="lg:col-span-5 p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Hệ điều hành AI ENTERPRISE:
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {row.afterSolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
