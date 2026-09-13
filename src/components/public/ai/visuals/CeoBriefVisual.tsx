import React, { useState } from 'react';
import { 
  AlertTriangle, CheckCircle2, TrendingUp, DollarSign, Calendar, Clock,
  FileSpreadsheet, ShieldAlert, ArrowRight, UserCheck, Bell
} from 'lucide-react';

export const CeoBriefVisual: React.FC = () => {
  const [decisionState, setDecisionState] = useState<'pending' | 'approved' | 'dismissed'>('pending');
  const [activeAnomaly, setActiveAnomaly] = useState<number>(0);

  const anomalies = [
    {
      id: 1,
      title: 'Hợp đồng XL-088 (KĐT Nam An) chậm tiến độ 3 ngày',
      impact: 'Dòng tiền 650 Triệu VNĐ bị dời lịch thu sang kỳ sau',
      department: 'Ban Quản lý Dự án & Kế toán',
      suggestedAction: 'Triệu tập cuộc họp 15 phút với Giám đốc Ban QLDA & Kế toán trưởng lúc 09:30',
      actionKey: 'meet'
    },
    {
      id: 2,
      title: 'Chi phí quảng cáo Meta tăng 18% nhưng tỷ lệ form giảm 6%',
      impact: 'Chi phí CAC tuần tạm tính tăng từ 210k lên 275k/lead',
      department: 'Phòng Marketing',
      suggestedAction: 'Yêu cầu Trưởng phòng Marketing rà soát lại target tệp khách hàng trước 11:30',
      actionKey: 'review'
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Header with status badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
              <Clock className="w-3 h-3 mr-1" /> [Kịch bản minh họa] Hỗ trợ tổng hợp 07:30 AM khi kết nối dữ liệu
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Đối soát từ 4 phân hệ khi được cấu hình</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              [Dữ liệu minh họa]
            </span>
          </div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
            Bản Tin Điều Hành Sáng (Morning Executive Brief)
          </h4>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-primary" /> Phân quyền bảo mật: Chỉ dành cho Ban Tổng Giám Đốc
        </div>
      </div>

      {/* 4 Health Indicator Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/70 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Doanh thu MTD [Minh họa]</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">3.82 / 4.15 Tỷ</div>
          <div className="text-xs text-emerald-600 font-medium mt-0.5">Đạt 92.0% kế hoạch tháng</div>
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/70 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Dòng tiền D+21 [Minh họa]</span>
            <DollarSign className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <div className="text-base sm:text-lg font-bold text-amber-600 dark:text-amber-400 mt-1">- 420 Triệu VNĐ</div>
          <div className="text-xs text-amber-600 font-medium mt-0.5">Cảnh báo thiếu hụt ngắn hạn</div>
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/70 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>SLA Công việc [Minh họa]</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">94.2% Đúng hạn</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">380/403 tác vụ tuần</div>
        </div>

        <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/60">
          <div className="text-xs text-amber-800 dark:text-amber-300 flex items-center justify-between font-semibold">
            <span>Bất thường cần quyết định [Minh họa]</span>
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <div className="text-base sm:text-lg font-bold text-amber-900 dark:text-amber-200 mt-1">02 Điểm chốt</div>
          <div className="text-xs text-amber-700 dark:text-amber-400 font-medium mt-0.5">Cần Lãnh đạo chỉ đạo</div>
        </div>
      </div>

      {/* Anomalies and Decision Interface */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" /> Danh sách điểm bất thường [Kịch bản & dữ liệu minh họa]:
          </h5>
          <div className="text-xs text-slate-500">Bấm để xem chi tiết & duyệt phương án</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {anomalies.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveAnomaly(index)}
              className={`text-left p-3.5 rounded-xl border transition-all ${
                activeAnomaly === index
                  ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 bg-white dark:bg-slate-900'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {item.department}
                </span>
                <span className="text-xs text-rose-600 dark:text-rose-400 font-medium">Cảnh báo rủi ro [Minh họa]</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white mt-2 leading-snug">
                {item.title}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Tác động: <strong className="text-slate-700 dark:text-slate-300">{item.impact}</strong>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Anomaly Action Box */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-medium text-primary uppercase tracking-wider">
                Đề xuất hành động từ kịch bản AI minh họa (để Lãnh đạo phê duyệt):
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-medium mt-1">
                {anomalies[activeAnomaly].suggestedAction}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-slate-400" /> Điểm chốt chặn: AI không tự phát thông báo. Chỉ gửi khi Tổng Giám đốc xác nhận.
              </div>
            </div>

            {decisionState === 'pending' ? (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setDecisionState('dismissed')}
                  className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Bỏ qua
                </button>
                <button
                  onClick={() => setDecisionState('approved')}
                  className="px-4 py-2 text-xs font-medium text-white bg-primary hover:bg-primary-hover rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Bell className="w-3.5 h-3.5" /> Phê duyệt gửi thông báo
                </button>
              </div>
            ) : decisionState === 'approved' ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-4 h-4" /> Đã gửi thông báo triệu tập họp đến 2 phòng ban
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-200/60 dark:bg-slate-700/50 px-3 py-2 rounded-lg">
                Đã ghi nhận bỏ qua cảnh báo này
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
