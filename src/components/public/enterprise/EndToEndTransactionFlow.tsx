import React, { useState } from 'react';
import {
  ArrowRight, CheckCircle2, Megaphone, TrendingUp, DollarSign,
  Headphones, BarChart3, ChevronRight, Clock, FileCheck, Shield, Sparkles
} from 'lucide-react';

interface FlowStep {
  stepNumber: number;
  stageName: string;
  scopeCode: string;
  scopeTitle: string;
  icon: React.ElementType;
  color: string;
  bgLight: string;
  borderLight: string;
  role: string;
  userAction: string;
  dataGenerated: string[];
  aiAutomationRole: string;
  handoffNext: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    stepNumber: 1,
    stageName: 'Tiếp nhận Lead',
    scopeCode: 'Scope C',
    scopeTitle: 'Marketing Đa Kênh',
    icon: Megaphone,
    color: 'text-purple-600 dark:text-purple-400',
    bgLight: 'bg-purple-50 dark:bg-purple-950/40',
    borderLight: 'border-purple-200 dark:border-purple-800',
    role: 'Khách hàng tiềm năng & Marketing Lead',
    userAction: 'Khách hàng điền biểu mẫu tư vấn trên Website doanh nghiệp (Ví dụ giao dịch minh họa: 120.000.000 VNĐ).',
    dataGenerated: [
      'Mã Lead: #LD-8492 (Dữ liệu minh họa)',
      'Nguồn: Kênh tiếp thị được cấu hình',
      'Nhu cầu: Tối ưu quy trình & liên thông dữ liệu',
      'Quy mô tổ chức: 45 nhân sự'
    ],
    aiAutomationRole: 'AI Marketing hỗ trợ chấm điểm tiềm năng (Ví dụ minh họa: 94/100), hỗ trợ làm giàu thông tin và phân loại theo cấu hình.',
    handoffNext: 'Tự động tạo bản ghi khách hàng trên CRM và chuyển tiếp về hàng đợi tiếp nhận theo phân bổ định sẵn.'
  },
  {
    stepNumber: 2,
    stageName: 'Tư vấn & Ký hợp đồng',
    scopeCode: 'Scope B',
    scopeTitle: 'Kinh Doanh / CRM',
    icon: TrendingUp,
    color: 'text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-50 dark:bg-blue-950/40',
    borderLight: 'border-blue-200 dark:border-blue-800',
    role: 'Chuyên viên Kinh doanh (Account Executive)',
    userAction: 'NVKD nhận thông báo trên ứng dụng, liên hệ tư vấn, xuất báo giá mẫu từ hệ thống và gửi hợp đồng điện tử.',
    dataGenerated: [
      'Hợp đồng điện tử: #HD-2026-088 (Mẫu minh họa)',
      'Giá trị hợp đồng minh họa: 120.000.000 VNĐ',
      'Trạng thái: Khách hàng xác nhận ký số OTP',
      'Giai đoạn pipeline: Won (Đã chốt hợp đồng)'
    ],
    aiAutomationRole: 'AI Sales Copilot hỗ trợ trích xuất nội dung ghi chú cuộc gọi, tóm tắt yêu cầu và hỗ trợ điền thông tin vào hợp đồng mẫu.',
    handoffNext: 'Hợp đồng khi chuyển trạng thái "Đã ký" tự động tạo thông tin thu tiền chuyển tiếp sang phân hệ Kế toán.'
  },
  {
    stepNumber: 3,
    stageName: 'Thanh toán & Thu tiền',
    scopeCode: 'Scope E',
    scopeTitle: 'Tài Chính — Kế Toán',
    icon: DollarSign,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-50 dark:bg-emerald-950/40',
    borderLight: 'border-emerald-200 dark:border-emerald-800',
    role: 'Kế toán thanh toán & Kế toán trưởng',
    userAction: 'Khách hàng chuyển khoản thanh toán đợt 1 (Ví dụ minh họa: 60.000.000 VNĐ) vào tài khoản doanh nghiệp.',
    dataGenerated: [
      'Phiếu thu điện tử: #PT-5521 (Mẫu minh họa)',
      'Số tiền thực thu minh họa: 60.000.000 VNĐ',
      'Theo dõi công nợ đợt tiếp theo theo hợp đồng',
      'Chứng từ kế toán cập nhật theo quy trình'
    ],
    aiAutomationRole: 'Hệ thống hỗ trợ đối soát thông tin giao dịch ngân hàng với mã hợp đồng theo quy tắc cấu hình, giảm thao tác rà soát thủ công.',
    handoffNext: 'Ghi nhận thanh toán thành công tự động chuyển tiếp thông tin bàn giao sang bộ phận Chăm sóc khách hàng & Triển khai.'
  },
  {
    stepNumber: 4,
    stageName: 'Onboarding & CSKH',
    scopeCode: 'Scope D',
    scopeTitle: 'Chăm Sóc Khách Hàng',
    icon: Headphones,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgLight: 'bg-cyan-50 dark:bg-cyan-950/40',
    borderLight: 'border-cyan-200 dark:border-cyan-800',
    role: 'Chuyên viên CSKH & Kỹ thuật triển khai',
    userAction: 'Đội ngũ CSKH tiếp nhận hồ sơ Customer 360 với toàn bộ thông tin đã thống nhất từ giai đoạn bán hàng.',
    dataGenerated: [
      'Ticket Onboarding: #TK-1044 (Mẫu minh họa)',
      'Thời hạn phản hồi hỗ trợ theo quy chế nội bộ',
      'Kế hoạch triển khai theo thỏa thuận hợp đồng',
      'Tài khoản định danh cấp cho khách hàng'
    ],
    aiAutomationRole: 'AI CSKH Copilot hỗ trợ soạn sẵn thông điệp chào mừng, liên kết hướng dẫn sử dụng và tài liệu dịch vụ theo mẫu.',
    handoffNext: 'Dữ liệu tiến độ triển khai liên tục đồng bộ về hồ sơ khách hàng và cập nhật lên báo cáo quản trị.'
  },
  {
    stepNumber: 5,
    stageName: 'Báo cáo & Phân tích BI',
    scopeCode: 'Scope J',
    scopeTitle: 'Báo Cáo & BI Thời Gian Thực',
    icon: BarChart3,
    color: 'text-amber-600 dark:text-amber-400',
    bgLight: 'bg-amber-50 dark:bg-amber-950/40',
    borderLight: 'border-amber-200 dark:border-amber-800',
    role: 'Ban Điều Hành & Tổng Giám Đốc (CEO)',
    userAction: 'Lãnh đạo mở giao diện điều hành và theo dõi các chỉ số tài chính, doanh số và tiến độ cập nhật theo dữ liệu hệ thống.',
    dataGenerated: [
      'Doanh số kỳ kinh doanh (Dữ liệu minh họa)',
      'Dòng tiền thực thu cập nhật theo chứng từ',
      'Chi phí tiếp thị ghi nhận theo hệ thống',
      'Tiến độ chỉ tiêu cập nhật theo kỳ báo cáo'
    ],
    aiAutomationRole: 'AI hỗ trợ cập nhật mô hình dự báo dòng tiền theo kỳ và tổng hợp dữ liệu biến động phục vụ phân tích điều hành.',
    handoffNext: 'Dữ liệu giao dịch được lưu trữ và tổng hợp phục vụ báo cáo và tối ưu hóa quy trình (Scope H & Scope J).'
  }
];

export const EndToEndTransactionFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep = FLOW_STEPS[activeStep - 1];

  return (
    <section className="bg-slate-50 dark:bg-[#070E1B] py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#155EEF] dark:text-[#06B6D4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              DÒNG CHẢY DỮ LIỆU LIÊN HOÀN
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              Kịch bản & Dữ liệu minh họa
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Một giao dịch xuyên suốt: Marketing → Sales → Finance → CSKH → BI
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Xem cách dữ liệu của một hợp đồng dịch vụ mẫu được tự động chuyển tiếp và cập nhật liên thông qua 5 phân hệ theo đúng quy trình nghiệp vụ chuẩn.
          </p>
        </div>

        {/* 5-Step Horizontal Navigation Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {FLOW_STEPS.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStep(step.stepNumber)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-white dark:bg-[#0D182E] border-[#155EEF] dark:border-[#3B82F6] shadow-sm ring-2 ring-[#155EEF]/20 dark:ring-blue-500/20'
                    : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center font-mono ${
                    isActive ? 'bg-[#155EEF] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    {step.scopeCode}
                  </span>
                </div>

                <div>
                  <h3 className={`text-xs font-bold ${isActive ? 'text-[#155EEF] dark:text-[#06B6D4]' : 'text-[#0B1F3A] dark:text-slate-200'}`}>
                    {step.stageName}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {step.scopeTitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl ${currentStep.bgLight} border ${currentStep.borderLight}`}>
                <currentStep.icon className={`w-6 h-6 ${currentStep.color}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                    CHẶNG 0{currentStep.stepNumber} • {currentStep.scopeCode}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">| {currentStep.role}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B1F3A] dark:text-white mt-1">
                  {currentStep.stageName}: {currentStep.scopeTitle}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Luồng liên thông theo cấu hình quy trình</span>
            </div>
          </div>

          {/* User Action Description */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Thao tác thực tế tại chặng:
            </div>
            <p className="text-sm font-medium text-[#0B1F3A] dark:text-slate-200 leading-relaxed">
              {currentStep.userAction}
            </p>
          </div>

          {/* 3-Column Grid: Data Generated, AI Copilot Role, Next Handoff */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1. Dữ liệu phát sinh */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#070E1B] border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F3A] dark:text-white">
                <FileCheck className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                <span>Dữ liệu phát sinh & Ghi nhận:</span>
              </div>
              <ul className="space-y-1.5">
                {currentStep.dataGenerated.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF] dark:bg-[#06B6D4] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Trợ lý AI & Tự động hóa */}
            <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-[#06B6D4]">
                <Sparkles className="w-4 h-4" />
                <span>AI & Động cơ tự động hóa:</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentStep.aiAutomationRole}
              </p>
            </div>

            {/* 3. Bàn giao sang chặng tiếp theo */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/60 space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <ArrowRight className="w-4 h-4" />
                <span>Tự động chuyển giao (Handoff):</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentStep.handoffNext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
