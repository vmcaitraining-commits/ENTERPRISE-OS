import React, { useState } from 'react';
import {
  ShieldCheck, Activity, Target, AlertTriangle, FileText,
  CheckCircle2, Clock, Sparkles, ArrowRight, Eye, Layers,
  Compass, TrendingUp, BarChart3, Users, DollarSign
} from 'lucide-react';

export const ManagementVisuals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cockpit' | 'okr' | 'exceptions' | 'morningBrief'>('cockpit');

  return (
    <div className="space-y-6">
      {/* Sub-nav switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('cockpit')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'cockpit'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            1. Executive Cockpit (Bảng điều hành)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('okr')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'okr'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            2. Cây Mục tiêu chiến lược OKR
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('exceptions')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'exceptions'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            3. Hàng đợi Ngoại lệ cần duyệt
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('morningBrief')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'morningBrief'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            4. Bản tin Morning Brief có trích dẫn nguồn
          </button>
        </div>
        <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
          [Dữ liệu minh họa]
        </span>
      </div>

      {/* VIEW 1: EXECUTIVE COCKPIT */}
      {activeTab === 'cockpit' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Bảng điều khiển sức khỏe doanh nghiệp đa chiều (Executive Cockpit)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tổng hợp 4 trụ cột sống còn của tổ chức từ 5 khối phòng ban theo thời gian thực
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
              Chỉ số sức khỏe vận hành: 94/100
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Metric 1: Revenue */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                1. Doanh thu lũy kế tháng
              </span>
              <div className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white font-mono">1.82 tỷ đ</div>
              <div className="text-[11px] text-emerald-600 font-medium">Đạt 91% mục tiêu kế hoạch</div>
            </div>

            {/* Metric 2: Cash Runway */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                2. Quỹ dự phòng dòng tiền
              </span>
              <div className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white font-mono">2.84 tỷ đ</div>
              <div className="text-[11px] text-emerald-600 font-medium">Đảm bảo vận hành 8.5 tháng</div>
            </div>

            {/* Metric 3: Personnel */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-purple-600" />
                3. Năng suất nhân sự trung bình
              </span>
              <div className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white font-mono">31.2 triệu</div>
              <div className="text-[11px] text-blue-600 font-medium">Doanh thu đóng góp/nhân sự</div>
            </div>

            {/* Metric 4: SLA/CSAT */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-cyan-600" />
                4. Tuân thủ SLA & Hài lòng
              </span>
              <div className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white font-mono">96.8%</div>
              <div className="text-[11px] text-emerald-600 font-medium">CSAT 4.8★ · 18 ticket mở</div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: OKR TREE */}
      {activeTab === 'okr' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Cây mục tiêu chiến lược và kết quả then chốt (Corporate OKRs Tree)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Phân rã mục tiêu cấp công ty xuống các phòng ban với chỉ số đo lường tự động từ hệ thống
              </p>
            </div>
            <span className="text-xs font-mono text-purple-600 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-900">
              Kỳ chiến lược: Quý 3/2026
            </span>
          </div>

          <div className="space-y-3 max-w-3xl">
            {/* Level 1: Company Objective */}
            <div className="p-4 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200 dark:border-blue-900/60 space-y-1.5 text-xs">
              <span className="text-[10px] uppercase font-bold text-blue-800 dark:text-blue-300">Mục tiêu cấp công ty (Objective 1)</span>
              <div className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                Mở rộng thị phần B2B và Tự động hóa 100% quy trình liên thông giữa Sales, Kế toán và CSKH
              </div>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-blue-700 dark:text-blue-300 font-semibold">
                <span>Tiến độ tổng thể:</span>
                <span className="font-mono">82% hoàn thành</span>
              </div>
            </div>

            {/* Level 2: Key Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-4 border-l-2 border-blue-200 dark:border-blue-800">
              <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-emerald-600 uppercase">KR1 · Phòng Sales</span>
                <div className="font-bold text-[#0B1F3A] dark:text-white">Đạt 60 hợp đồng mới</div>
                <div className="text-[11px] text-slate-500">Đã đạt: 48/60 (80%)</div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-blue-600 uppercase">KR2 · Phòng Finance</span>
                <div className="font-bold text-[#0B1F3A] dark:text-white">Đối soát tự động 100%</div>
                <div className="text-[11px] text-slate-500">Đã đạt: 100% giao dịch</div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-cyan-600 uppercase">KR3 · Phòng CSKH</span>
                <div className="font-bold text-[#0B1F3A] dark:text-white">SLA đạt &ge; 95% & CSAT 4.8</div>
                <div className="text-[11px] text-slate-500">Đã đạt: SLA 96.8% · CSAT 4.8★</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: EXCEPTION QUEUE */}
      {activeTab === 'exceptions' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Hàng đợi ngoại lệ cần Ban Giám đốc quyết định (Exception Approval Queue)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Chỉ những việc vượt thẩm quyền hạn mức của Trưởng phòng mới được chuyển tiếp lên bàn làm việc của CEO
              </p>
            </div>
            <span className="text-xs font-mono text-rose-600 font-bold bg-rose-50 dark:bg-rose-950/60 px-2.5 py-1 rounded-md border border-rose-200 dark:border-rose-900">
              3 Việc cần phê duyệt
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">CHIẾT KHẤU ĐẶC BIỆT</span>
                  <span className="font-bold text-[#0B1F3A] dark:text-white">Đề xuất giảm 12% cho Hợp đồng Doanh nghiệp Dược Hưng Phát (Trị giá 120M)</span>
                </div>
                <p className="text-[11px] text-slate-500">Người trình: Trần Thu Trang (Sales Lead) · Lý do: Cam kết thanh toán 100% trước hạn và ký gói 2 năm.</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button type="button" className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer">
                  Chấp thuận
                </button>
                <button type="button" className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-300 font-medium text-xs cursor-pointer">
                  Từ chối
                </button>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">CHI VƯỢT HẠN MỨC</span>
                  <span className="font-bold text-[#0B1F3A] dark:text-white">Đề xuất mua thêm máy chủ sao lưu thảm họa cho cụm dữ liệu miền Nam (48.000.000 đ)</span>
                </div>
                <p className="text-[11px] text-slate-500">Người trình: Lê Minh (Trưởng phòng Hạ tầng) · Vượt thẩm quyền ngân sách thường kỳ (30M).</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button type="button" className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer">
                  Chấp thuận
                </button>
                <button type="button" className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-300 font-medium text-xs cursor-pointer">
                  Từ chối
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: MORNING BRIEF CÓ TRÍCH DẪN NGUỒN */}
      {activeTab === 'morningBrief' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D9A62E]" />
                Bản tin điều hành buổi sáng AI tự tổng hợp (Morning Executive Briefing)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tự động quét toàn bộ cơ sở dữ liệu 5 phân hệ lúc 07:30 mỗi sáng, kèm trích dẫn nguồn số liệu cụ thể
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">Cập nhật: 07:30 Sáng nay</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
              <div className="space-y-0.5">
                <span className="font-bold text-[#0B1F3A] dark:text-white">Kinh doanh & Thu tiền hôm qua:</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Đã chốt thêm 2 hợp đồng trị giá 180 triệu. Đã thu thực tế 60 triệu tiền cọc đợt 1 từ Công ty Minh Phát.
                </p>
                <div className="text-[10px] font-mono text-slate-400">[Nguồn: CRM Deal #OPP-88 và Sao kê ngân hàng VCB lúc 11:15]</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
              <div className="space-y-0.5">
                <span className="font-bold text-[#0B1F3A] dark:text-white">Cảnh báo Marketing & Dòng tiền:</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Chi phí CPL kênh Google Search đang rất tối ưu (112.000 đ/lead). Dự báo tuần tới dòng tiền ra cần chi lương 380 triệu vào ngày 15.
                </p>
                <div className="text-[10px] font-mono text-slate-400">[Nguồn: Google Ads API kết nối CRM và Bảng lương dự tính phòng Kế toán]</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></span>
              <div className="space-y-0.5">
                <span className="font-bold text-[#0B1F3A] dark:text-white">Điểm nghẽn cần lưu ý:</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Có 1 yêu cầu kỹ thuật cấp cao tại chi nhánh miền Nam đang chờ duyệt chi mua thiết bị dự phòng để đảm bảo SLA cuối tuần.
                </p>
                <div className="text-[10px] font-mono text-slate-400">[Nguồn: Ticket #TCK-941 và Hàng đợi ngoại lệ số #EXP-04]</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
