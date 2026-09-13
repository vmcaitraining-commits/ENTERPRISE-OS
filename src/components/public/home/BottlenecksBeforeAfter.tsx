import React, { useState } from 'react';
import {
  XCircle, CheckCircle2, ArrowRight, Database, Workflow, BarChart3,
  Layers, AlertTriangle, Sparkles, RefreshCw
} from 'lucide-react';

interface BottleneckComparison {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  before: {
    status: string;
    flow: string[];
    consequence: string;
  };
  after: {
    status: string;
    flow: string[];
    benefit: string;
  };
}

const COMPARISONS: BottleneckComparison[] = [
  {
    id: 'data_silos',
    title: 'Dữ liệu khách hàng & kinh doanh',
    category: 'Quản trị Dữ liệu',
    icon: Database,
    before: {
      status: 'Phân mảnh nhiều nơi',
      flow: ['Excel cá nhân', 'Chat Zalo riêng', 'Sổ kế toán', 'Email rời'],
      consequence: 'Khách hàng bị bỏ quên, mất toàn bộ lịch sử khi nhân sự nghỉ việc.'
    },
    after: {
      status: 'Hồ sơ Customer 360 thống nhất',
      flow: ['Form Website', 'CRS / CRM lõi', 'Kho tài liệu tập trung', 'Bảo mật theo quyền'],
      benefit: 'Dữ liệu thuộc sở hữu tổ chức 100%, lịch sử tương tác cập nhật đa phòng ban.'
    }
  },
  {
    id: 'broken_process',
    title: 'Quy trình phối hợp liên phòng ban',
    category: 'Quy trình & Vận hành',
    icon: Workflow,
    before: {
      status: 'Thủ công & Đổ lỗi',
      flow: ['Nhắn tin nhắc miệng', 'Chờ ký giấy tay', 'Đứt gãy giữa Sales & Vận hành'],
      consequence: 'Hồ sơ chậm luân chuyển hàng ngày, không rõ trách nhiệm thuộc về ai.'
    },
    after: {
      status: 'Quy trình SOP tự động',
      flow: ['Đơn hàng xác nhận', 'Kích hoạt việc tự động', 'Kiểm soát SLA từng khâu', 'Phê duyệt trực tuyến'],
      benefit: 'Công việc tự động chuyển bước, rút ngắn 40% thời gian xử lý thủ tục.'
    }
  },
  {
    id: 'delayed_decisions',
    title: 'Báo cáo & Ra quyết định điều hành',
    category: 'Chỉ số & Quản trị',
    icon: BarChart3,
    before: {
      status: 'Số liệu chậm trễ & sai lệch',
      flow: ['Chờ báo cáo cuối tháng', 'Cắt dán Excel thủ công', 'Số kế toán lệch số bán hàng'],
      consequence: 'Lãnh đạo ra quyết định dựa trên cảm tính hoặc khi sự cố đã rồi.'
    },
    after: {
      status: 'Dashboard BI thời gian thực',
      flow: ['Dữ liệu ghi nhận ngay', 'BI tự động tổng hợp', 'Cảnh báo sớm rủi ro dòng tiền'],
      benefit: 'Nắm bắt sức khỏe doanh nghiệp 24/7, phát hiện ngay điểm nghẽn để xử lý.'
    }
  }
];

export const BottlenecksBeforeAfter: React.FC = () => {
  const [selectedIssueId, setSelectedIssueId] = useState<string>(COMPARISONS[0].id);
  const current = COMPARISONS.find((c) => c.id === selectedIssueId) || COMPARISONS[0];
  const CurrentIcon = current.icon;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 inline-block px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800">
          CHUYỂN ĐỔI VẬN HÀNH
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          Giải quyết 3 điểm nghẽn cốt lõi khiến doanh nghiệp chậm lại
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          So sánh trực quan dòng chảy vận hành trước và sau khi chuẩn hóa trên nền tảng AI ENTERPRISE.
        </p>
      </div>

      {/* 3 Topic Selector Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {COMPARISONS.map((item) => {
          const isSelected = item.id === selectedIssueId;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIssueId(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#0B1F3A] dark:bg-white text-white dark:text-[#0B1F3A] border-transparent shadow-md'
                  : 'bg-white dark:bg-[#0D182E] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Before vs After Interactive Diagram Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white dark:bg-[#0D182E] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Left: BEFORE (Thực trạng phân mảnh) */}
        <div className="rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-100/80 dark:bg-rose-950/60 px-3 py-1 rounded-full">
                <XCircle className="w-4 h-4" />
                <span>TRƯỚC: PHÂN MẢNH & THỦ CÔNG</span>
              </div>
              <span className="text-[11px] font-mono text-rose-600 dark:text-rose-400 font-semibold">
                {current.before.status}
              </span>
            </div>

            {/* Visual Flow Before (Broken Links) */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Dòng dữ liệu đứt đoạn:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {current.before.flow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-rose-200/60 dark:border-rose-900/40 text-center text-xs font-medium text-slate-700 dark:text-slate-300 relative"
                  >
                    <span className="block truncate">{step}</span>
                    {idx < current.before.flow.length - 1 && (
                      <span className="text-rose-400 font-mono text-[10px] block mt-0.5">✕ đứt quãng</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-900 dark:text-rose-200">
            <span className="font-bold block text-rose-700 dark:text-rose-400 mb-0.5">Hệ quả vận hành:</span>
            {current.before.consequence}
          </div>
        </div>

        {/* Right: AFTER (Hệ thống thống nhất với AI ENTERPRISE) */}
        <div className="rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-100/80 dark:bg-blue-950/60 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>SAU: THỐNG NHẤT VỚI AI ENTERPRISE</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                {current.after.status}
              </span>
            </div>

            {/* Visual Flow After (Connected Pipeline) */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Dòng chảy liên tục:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {current.after.flow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-blue-200 dark:border-blue-900/40 text-center text-xs font-medium text-slate-800 dark:text-slate-200 shadow-2xs"
                  >
                    <span className="block truncate">{step}</span>
                    {idx < current.after.flow.length - 1 && (
                      <span className="text-emerald-500 font-mono text-[10px] block mt-0.5">➔ liên thông</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-emerald-200 dark:border-emerald-900/50 text-xs text-slate-800 dark:text-slate-200">
            <span className="font-bold block text-emerald-700 dark:text-emerald-400 mb-0.5">Kết quả đạt được:</span>
            {current.after.benefit}
          </div>
        </div>
      </div>
    </section>
  );
};
