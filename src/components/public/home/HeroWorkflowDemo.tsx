import React, { useState, useEffect } from 'react';
import {
  Globe, Database, Users, CheckSquare, CreditCard, BarChart3,
  ArrowRight, Shield, CheckCircle2, ChevronRight, Activity, Clock
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  stepNumber: number;
  label: string;
  shortRole: string;
  action: string;
  icon: React.ElementType;
  mockData: {
    event: string;
    details: string;
    tag: string;
    tagType: 'auto' | 'approval' | 'audit';
  };
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'step_form',
    stepNumber: 1,
    label: 'Website / Form',
    shortRole: 'Tiếp nhận yêu cầu',
    action: 'Khách hàng gửi biểu mẫu yêu cầu tư vấn giải pháp B2B từ Website',
    icon: Globe,
    mockData: {
      event: 'Biểu mẫu tư vấn AI ENTERPRISE #9421',
      details: 'Công ty Cổ phần Vận tải Á Châu • 120 nhân sự • UTM: Google B2B Search',
      tag: 'Tự động xác thực',
      tagType: 'auto'
    }
  },
  {
    id: 'step_crm',
    stepNumber: 2,
    label: 'CRS / CRM',
    shortRole: 'Chấm điểm & Phân loại',
    action: 'Tự động kiểm tra trùng lặp, chấm điểm tiềm năng và tạo hồ sơ Customer 360',
    icon: Database,
    mockData: {
      event: 'Tạo Lead mới & Chấm điểm: 88/100',
      details: 'Gán nhóm: Khách hàng Doanh nghiệp Vừa • Tự động gán nhãn ưu tiên cao',
      tag: 'Đồng bộ thời gian thực',
      tagType: 'auto'
    }
  },
  {
    id: 'step_sales',
    stepNumber: 3,
    label: 'Kinh doanh (Sales)',
    shortRole: 'Tư vấn & Soạn báo giá',
    action: 'Điều phối cho Trưởng nhóm tư vấn phụ trách, AI hỗ trợ soạn dự thảo giải pháp',
    icon: Users,
    mockData: {
      event: 'Gán tư vấn viên: Nguyễn Văn A (Phòng Sales 01)',
      details: 'Soạn báo giá cấu hình 5 phân hệ lõi theo mẫu quy chuẩn công ty',
      tag: 'Đã tạo lịch hẹn 15:00',
      tagType: 'auto'
    }
  },
  {
    id: 'step_approval',
    stepNumber: 4,
    label: 'Phê duyệt (Human)',
    shortRole: 'Kiểm soát hạn mức',
    action: 'Giám đốc Kinh doanh xem xét đề xuất chiết khấu dự án vượt thẩm quyền chuẩn',
    icon: CheckSquare,
    mockData: {
      event: 'Yêu cầu duyệt: Chiết khấu dự án 8% (Giá trị: 320 triệu)',
      details: 'Người duyệt: Lê Minh Trí (GĐ Vận hành) • Phê duyệt trực tuyến trong 2 phút',
      tag: 'Human-in-the-loop',
      tagType: 'approval'
    }
  },
  {
    id: 'step_finance_cs',
    stepNumber: 5,
    label: 'Finance & CSKH',
    shortRole: 'Liên thông thanh toán & SLA',
    action: 'Kế toán xuất hóa đơn/hợp đồng; CSKH tự động kích hoạt tài khoản & cam kết SLA',
    icon: CreditCard,
    mockData: {
      event: 'Hợp đồng điện tử ký số #HD-2026-88',
      details: 'Đối soát tạm ứng 50% qua ngân hàng • Tạo Ticket khởi động dự án',
      tag: 'Audit Log đã lưu',
      tagType: 'audit'
    }
  },
  {
    id: 'step_dashboard',
    stepNumber: 6,
    label: 'Executive Dashboard',
    shortRole: 'Cập nhật chỉ số BI',
    action: 'Toàn bộ số liệu ghi nhận tức thì vào chỉ số Doanh thu, Pipeline và Báo cáo điều hành',
    icon: BarChart3,
    mockData: {
      event: 'KPI Quý III: +320.000.000 VNĐ vào Pipeline',
      details: 'Tỷ lệ chuyển đổi phễu tăng 1.8% • Cập nhật trực tiếp lên bảng chỉ số Lãnh đạo',
      tag: 'Thời gian thực 24/7',
      tagType: 'auto'
    }
  }
];

export const HeroWorkflowDemo: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto cycle through steps if not manually paused by user hover/click
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentStep = WORKFLOW_STEPS[activeStepIndex];
  const CurrentIcon = currentStep.icon;

  return (
    <div
      className="relative rounded-2xl bg-[#0B1F3A] dark:bg-[#070F1E] border border-slate-700/80 shadow-2xl p-5 text-white space-y-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* OS Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-2 font-mono text-[11px] text-slate-400">luong-van-hanh-doanh-nghiep.os</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-medium">
          <Activity className="w-3 h-3 text-amber-400 animate-pulse" />
          <span>Minh họa vận hành</span>
        </div>
      </div>

      {/* Horizontal Mini-Steppers */}
      <div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-2">
          <span>Hành trình dữ liệu liên phòng ban:</span>
          <span className="font-mono text-[#06B6D4]">Bước {activeStepIndex + 1}/6</span>
        </div>
        
        <div className="grid grid-cols-6 gap-1 sm:gap-1.5">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isCurrent = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  setActiveStepIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`text-left p-1.5 sm:p-2 rounded-lg transition-all cursor-pointer border text-[10px] sm:text-[11px] ${
                  isCurrent
                    ? 'bg-[#155EEF] border-blue-400 text-white font-bold shadow-sm shadow-blue-500/40'
                    : isCompleted
                    ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                    : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:text-slate-400'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="font-mono text-[9px] opacity-80">0{step.stepNumber}</span>
                  {isCompleted && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0 ml-auto hidden sm:block" />}
                </div>
                <div className="truncate font-medium text-[10px] sm:text-[11px] mt-0.5">
                  {step.label.split('/')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Real-time Business Simulation Card */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900/90 to-[#0B1F3A] border border-slate-700/80 space-y-3 min-h-[160px] flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#155EEF]/20 text-[#06B6D4] border border-[#155EEF]/40 flex items-center justify-center shrink-0">
                <CurrentIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#06B6D4] uppercase tracking-wider font-semibold">
                    Bước 0{currentStep.stepNumber}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">• {currentStep.shortRole}</span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">{currentStep.label}</h4>
              </div>
            </div>

            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                currentStep.mockData.tagType === 'approval'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : currentStep.mockData.tagType === 'audit'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
              }`}
            >
              {currentStep.mockData.tag}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">{currentStep.action}</p>
        </div>

        {/* Data payload simulated block */}
        <div className="p-2.5 rounded-lg bg-black/40 border border-slate-800 font-mono text-[11px] space-y-1">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
            <span className="text-[10px] text-slate-400 font-semibold uppercase">Dữ liệu luân chuyển:</span>
          </div>
          <div className="text-slate-200 font-medium truncate">{currentStep.mockData.event}</div>
          <div className="text-slate-400 text-[10px] truncate">{currentStep.mockData.details}</div>
        </div>
      </div>

      {/* Step Connection Bar */}
      <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[10px]">Dữ liệu liên thông khép kín, kiểm soát quyền theo vai trò</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
            setIsAutoPlaying(false);
          }}
          className="inline-flex items-center gap-1 text-[11px] text-[#06B6D4] hover:text-white font-medium transition-colors cursor-pointer"
        >
          <span>Bước kế</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
