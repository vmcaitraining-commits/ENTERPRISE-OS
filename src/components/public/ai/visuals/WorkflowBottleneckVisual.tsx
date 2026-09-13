import React, { useState } from 'react';
import { 
  GitBranch, AlertTriangle, CheckCircle2, Clock, ArrowRight, 
  Users, ShieldCheck, UserCheck, RefreshCw 
} from 'lucide-react';

export const WorkflowBottleneckVisual: React.FC = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);

  const workflowSteps = [
    {
      step: 1,
      title: 'Tạo đơn hàng B2B',
      dept: 'Kinh doanh',
      timeSpent: '25 phút',
      slaLimit: '2 giờ',
      status: 'completed'
    },
    {
      step: 2,
      title: 'Duyệt bảng giá & Chiết khấu',
      dept: 'Trưởng phòng Sales',
      timeSpent: '1.2 giờ',
      slaLimit: '4 giờ',
      status: 'completed'
    },
    {
      step: 3,
      title: 'Thẩm định công nợ & Hạn mức',
      dept: 'Kế toán Công nợ',
      timeSpent: '18.5 giờ',
      slaLimit: '5 giờ',
      status: 'bottleneck',
      details: '7 đơn hàng (trị giá 450M) đang ùn ứ do Chuyên viên thẩm định chính nghỉ ốm đột xuất.'
    },
    {
      step: 4,
      title: 'Lệnh xuất kho & Soạn hàng',
      dept: 'Bộ phận Kho',
      timeSpent: 'Chờ bước 3',
      slaLimit: '3 giờ',
      status: 'blocked'
    },
    {
      step: 5,
      title: 'Bàn giao vận chuyển & Ký nhận',
      dept: 'Đội xe / Logistics',
      timeSpent: 'Chờ xuất kho',
      slaLimit: '24 giờ',
      status: 'blocked'
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> Phát hiện điểm nghẽn [Kịch bản mô phỏng]
            </span>
            <span className="text-xs text-slate-500">Quy trình Xử lý Đơn hàng B2B mô phỏng</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              [Dữ liệu minh họa]
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
            Dòng Chảy Quy Trình & Đề Xuất Tái Phân Bổ Nguồn Lực
          </h4>
        </div>
      </div>

      {/* 5-Step Process Visualizer */}
      <div className="space-y-2 text-xs">
        <div className="text-slate-500 flex justify-between">
          <span>Tiến độ luân chuyển hồ sơ qua 5 phòng ban:</span>
          <span className="text-rose-600 dark:text-rose-400 font-semibold">Ùn ứ tại Bước 3 (Kế toán)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {workflowSteps.map((s) => (
            <div
              key={s.step}
              className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                s.status === 'completed'
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'
                  : s.status === 'bottleneck'
                  ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-900/60 shadow-xs ring-1 ring-rose-400'
                  : 'bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 opacity-70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    s.status === 'completed'
                      ? 'bg-emerald-600 text-white'
                      : s.status === 'bottleneck'
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {s.step}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500">{s.dept}</span>
                </div>
                <div className="font-bold text-slate-900 dark:text-white text-xs leading-snug">
                  {s.title}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                <div className="text-[11px] flex justify-between">
                  <span className="text-slate-500">Thời gian:</span>
                  <span className={s.status === 'bottleneck' ? 'font-bold text-rose-600' : 'font-medium'}>
                    {s.timeSpent}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">Định mức SLA: {s.slaLimit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottleneck Resolution Suggestion */}
      <div className="p-3.5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="font-bold text-primary flex items-center gap-1.5">
              <Users className="w-4 h-4" /> Đề xuất tự động từ AI Workflow:
            </span>
            <p className="text-slate-700 dark:text-slate-300">
              Tạm thời kích hoạt quyền duyệt phụ cho <strong>Phó phòng Kế toán (Chị Mai Lan)</strong> đối với các đơn hàng dưới 50.000.000 VNĐ để giải tỏa ngay 5/7 đơn đang bị ách tắc.
            </p>
          </div>

          <div className="shrink-0">
            {!authorized ? (
              <button
                onClick={() => setAuthorized(true)}
                className="px-4 py-2 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition-colors shadow-xs"
              >
                Chấp thuận ủy quyền phụ
              </button>
            ) : (
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-4 h-4" /> Đã ủy quyền: Đang thông luồng 5 đơn hàng
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Safety Notice Footer */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Điểm chốt chặn: AI chỉ phát hiện điểm nghẽn và đưa ra giải pháp đề xuất. Thao tác ủy quyền bắt buộc do Trưởng phòng phê duyệt.</span>
      </div>
    </div>
  );
};
