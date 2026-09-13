import React, { useState } from 'react';
import { 
  Users, AlertCircle, CheckSquare, BarChart, Bell, CheckCircle2, 
  ChevronRight, Calendar, Sparkles, ShieldCheck 
} from 'lucide-react';

export const HrExceptionVisual: React.FC = () => {
  const [activeView, setActiveView] = useState<'exceptions' | 'onboarding' | 'skillgap'>('exceptions');
  const [remindedList, setRemindedList] = useState<number[]>([]);

  const exceptions = [
    {
      id: 1,
      name: 'Nguyễn Văn An',
      dept: 'Ban Quản lý Dự án',
      date: '05/09/2026',
      issue: 'Thiếu dữ liệu giờ ra (Check-out)',
      suggestedAction: 'Gửi tin nhắn nhắc nộp đơn giải trình quên chấm công',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Trần Thị Bích',
      dept: 'Phòng Kế toán',
      date: '08/09/2026',
      issue: 'Vào muộn 28 phút (Chưa có đơn xin phép)',
      suggestedAction: 'Nhắc bổ sung đơn công tác ngoại kiểm',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Phạm Minh Đức',
      dept: 'Phòng Kinh doanh',
      date: '09/09/2026',
      issue: 'Vắng mặt cả ngày (Chưa duyệt phép)',
      suggestedAction: 'Báo động Trưởng phòng xác nhận lý do',
      status: 'pending'
    }
  ];

  const onboardingSteps = [
    { step: 1, title: 'Ký hợp đồng & Nhận trang thiết bị làm việc', date: 'Ngày 1', status: 'completed' },
    { step: 2, title: 'Hoàn thành khóa học văn hóa & quy chế công ty', date: 'Ngày 3', status: 'completed' },
    { step: 3, title: 'Gặp gỡ Mentor & Thiết lập mục tiêu thử việc (KPIs)', date: 'Ngày 7', status: 'completed' },
    { step: 4, title: 'Đánh giá tiến độ thử việc mốc 30 ngày', date: 'Ngày 30', status: 'active' },
    { step: 5, title: 'Hội đồng nhân sự nghiệm thu thử việc chính thức', date: 'Ngày 60', status: 'upcoming' }
  ];

  const skillGaps = [
    { skill: 'Kỹ năng đàm phán hợp đồng lớn (B2B)', dept: 'Kinh doanh', current: 65, benchmark: 90, gap: '-25%' },
    { skill: 'Sử dụng công cụ quản lý dự án Jira/SOP', dept: 'Kỹ thuật', current: 78, benchmark: 85, gap: '-7%' },
    { skill: 'Kiểm soát tuân thủ thuế & hóa đơn điện tử', dept: 'Kế toán', current: 88, benchmark: 90, gap: '-2%' }
  ];

  const toggleRemind = (id: number) => {
    if (remindedList.includes(id)) {
      setRemindedList(remindedList.filter(item => item !== id));
    } else {
      setRemindedList([...remindedList, id]);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
              <Users className="w-3.5 h-3.5" /> Quản trị Nhân sự & Hiệu suất [Minh họa]
            </span>
            <span className="text-xs text-slate-500">Kỳ công kịch bản mô phỏng</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              [Dữ liệu minh họa]
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
            Bảng Ngoại Lệ Chấm Công, Onboarding & Khoảng Trống Kỹ Năng
          </h4>
        </div>

        {/* View switcher tabs */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-center text-xs">
          <button
            onClick={() => setActiveView('exceptions')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeView === 'exceptions'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Bảng công ngoại lệ (3) [Minh họa]
          </button>
          <button
            onClick={() => setActiveView('onboarding')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeView === 'onboarding'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Onboarding [Minh họa]
          </button>
          <button
            onClick={() => setActiveView('skillgap')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeView === 'skillgap'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Khoảng trống kỹ năng [Minh họa]
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div>
        {activeView === 'exceptions' && (
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between text-slate-500">
              <span>Phát hiện 3 trường hợp bất thường cần nhân sự bổ sung minh chứng:</span>
              <span className="text-amber-600 font-medium">Hạn chốt giải trình: 25 hàng tháng</span>
            </div>

            <div className="space-y-2">
              {exceptions.map((exc) => {
                const isReminded = remindedList.includes(exc.id);
                return (
                  <div
                    key={exc.id}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {exc.name}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px]">
                          {exc.dept}
                        </span>
                        <span className="text-slate-400">• Ngày: {exc.date}</span>
                      </div>
                      <div className="text-rose-600 dark:text-rose-400 font-medium mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {exc.issue}
                      </div>
                      <div className="text-slate-500 mt-0.5">
                        Đề xuất AI: {exc.suggestedAction}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleRemind(exc.id)}
                      className={`px-3 py-1.5 rounded-lg font-medium transition-colors shrink-0 flex items-center gap-1.5 ${
                        isReminded
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-primary text-white hover:bg-primary-hover shadow-xs'
                      }`}
                    >
                      {isReminded ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Đã gửi tin nhắn nhắc
                        </>
                      ) : (
                        <>
                          <Bell className="w-3.5 h-3.5" /> Nhắc nộp giải trình
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeView === 'onboarding' && (
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-900/40 rounded-xl flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  Lê Hoàng Nam - Kỹ sư Triển khai ERP (Mới vào 12 ngày)
                </span>
                <p className="text-slate-500 mt-0.5">Mentor phụ trách: Vũ Tuấn Minh (Trưởng nhóm Triển khai)</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                Tiến độ: 3/5 bước (Đúng hạn)
              </span>
            </div>

            <div className="space-y-2">
              {onboardingSteps.map((st) => (
                <div
                  key={st.step}
                  className={`p-2.5 rounded-xl border flex items-center justify-between ${
                    st.status === 'completed'
                      ? 'bg-emerald-50/30 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900/50 text-slate-700 dark:text-slate-300'
                      : st.status === 'active'
                      ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800 font-medium text-slate-900 dark:text-white'
                      : 'bg-slate-50 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${
                      st.status === 'completed'
                        ? 'bg-emerald-600 text-white'
                        : st.status === 'active'
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-200 text-slate-500 dark:bg-slate-700'
                    }`}>
                      {st.step}
                    </span>
                    <span>{st.title}</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">{st.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'skillgap' && (
          <div className="space-y-3 text-xs">
            <div className="text-slate-500">
              Đối chiếu năng lực thực tế qua KPI so với Khung năng lực chuẩn (Skill Matrix):
            </div>

            <div className="space-y-3">
              {skillGaps.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                    <span>{item.skill} ({item.dept})</span>
                    <span className="text-rose-600 dark:text-rose-400 font-bold">Chênh lệch: {item.gap}</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${item.current}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>Hiện tại: {item.current}%</span>
                    <span>Chuẩn yêu cầu: {item.benchmark}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Safety Notice Footer */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Điểm chốt chặn: AI không tự ý trừ lương hay quyết định sa thải. Chuyên viên C&B chốt công và Lãnh đạo ký duyệt.</span>
      </div>
    </div>
  );
};
