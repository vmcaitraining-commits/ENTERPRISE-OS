import React, { useState } from 'react';
import {
  ShieldCheck, Bot, CheckCircle2, AlertOctagon, ArrowRight,
  UserCheck, FileText, Lock, Sparkles, RefreshCw, Eye, History
} from 'lucide-react';

interface ApprovalStep {
  stepNum: number;
  title: string;
  actor: 'AI' | 'HUMAN' | 'SYSTEM';
  actorLabel: string;
  description: string;
  subtext: string;
}

const APPROVAL_STEPS: ApprovalStep[] = [
  {
    stepNum: 1,
    title: 'Đọc & Thu thập dữ liệu',
    actor: 'AI',
    actorLabel: 'AI Engine',
    description: 'Truy vấn ngữ cảnh nội bộ hợp lệ từ CRM, Kế toán hoặc Wiki quy chuẩn (không truy cập dữ liệu ngoài phạm vi phân quyền).',
    subtext: 'Theo cấu hình phân quyền'
  },
  {
    stepNum: 2,
    title: 'Phân tích & Đánh giá rủi ro',
    actor: 'AI',
    actorLabel: 'AI Engine',
    description: 'Đối chiếu với quy chuẩn SOP, chính sách chiết khấu và hạn mức ngân sách để nhận diện điểm bất thường hoặc rủi ro tiềm ẩn.',
    subtext: 'Đánh giá mức độ rủi ro'
  },
  {
    stepNum: 3,
    title: 'Soạn thảo bản đề xuất (Draft)',
    actor: 'AI',
    actorLabel: 'AI Copilot',
    description: 'Khởi tạo sẵn bản dự thảo báo giá, phiếu đề xuất chi tiêu hoặc nội dung email phản hồi chuẩn mực.',
    subtext: 'Chưa có hiệu lực thực thi'
  },
  {
    stepNum: 4,
    title: 'Chốt chặn: Con người phê duyệt',
    actor: 'HUMAN',
    actorLabel: 'Người có thẩm quyền',
    description: 'Cấp quản lý (Trưởng phòng/Kế toán trưởng/CEO) xem xét bản dự thảo, có thể chỉnh sửa, chấp thuận hoặc bác bỏ.',
    subtext: 'BẮT BUỘC PHÊ DUYỆT'
  },
  {
    stepNum: 5,
    title: 'Tự động hóa thực thi',
    actor: 'SYSTEM',
    actorLabel: 'Workflow Engine',
    description: 'Ngay khi có lệnh chấp thuận từ người duyệt, hệ thống tự động phát lệnh gửi email, xuất hóa đơn hoặc phân bổ ngân sách.',
    subtext: 'Thực thi chính xác theo lệnh'
  },
  {
    stepNum: 6,
    title: 'Ghi nhật ký kiểm toán (Audit Log)',
    actor: 'SYSTEM',
    actorLabel: 'Security Core',
    description: 'Hỗ trợ lưu lại lịch sử: AI đề xuất nội dung gì, ai là người bấm duyệt, thời điểm và kết quả thực thi theo cấu hình kiểm toán.',
    subtext: 'Phục vụ kiểm toán & truy vết'
  }
];

const AUTONOMOUS_TASKS = [
  {
    name: 'Phân loại & Chấm điểm Lead',
    desc: 'Tự động chấm điểm độ nóng của khách hàng tiềm năng dựa trên dữ liệu biểu mẫu và lượt tương tác.'
  },
  {
    name: 'Bóc băng & Tóm tắt cuộc gọi',
    desc: 'Chuyển đổi âm thanh cuộc gọi tư vấn thành văn bản và trích xuất các ý chính vào CRM.'
  },
  {
    name: 'Gợi ý kịch bản & Dự thảo văn bản',
    desc: 'Soạn sẵn câu trả lời ticket hỗ trợ hoặc email chăm sóc khách hàng dựa trên cẩm nang Wiki.'
  },
  {
    name: 'Phát hiện cảnh báo biến động số liệu',
    desc: 'Tự động thông báo cho quản lý khi chi phí quảng cáo tăng đột biến hoặc ticket CSKH sắp quá hạn thời gian theo quy chế.'
  },
  {
    name: 'Đồng bộ hóa trạng thái liên phòng ban',
    desc: 'Chuyển trạng thái đơn hàng và gửi thông báo nhắc việc nội bộ cho nhân sự liên quan.'
  }
];

const STRICT_APPROVAL_TASKS = [
  {
    name: 'Lệnh giải ngân & Chuyển tiền thực tế',
    desc: 'Mọi giao dịch chi tiền từ sổ quỹ hoặc tài khoản ngân hàng BẮT BUỘC có chữ ký duyệt của Kế toán trưởng và Ban Giám Đốc.'
  },
  {
    name: 'Áp dụng chiết khấu vượt trần quy định',
    desc: 'Báo giá có tỷ lệ giảm giá vượt thẩm quyền của nhân viên kinh doanh phải được Giám đốc Kinh doanh phê duyệt.'
  },
  {
    name: 'Ký kết hợp đồng pháp lý & Đối tác',
    desc: 'Hợp đồng kinh tế và văn bản cam kết pháp lý bắt buộc phải do người đại diện pháp luật ký duyệt số.'
  },
  {
    name: 'Xuất bản nội dung công khai ra ngoài',
    desc: 'Bài viết truyền thông, thông cáo báo chí hoặc chính sách giá mới trên Website phải qua bước biên tập và phê duyệt.'
  },
  {
    name: 'Cấp quyền truy cập & Thay đổi cấu hình',
    desc: 'Thay đổi vai trò quản trị viên, phân bổ quyền xem dữ liệu tài chính hoặc can thiệp cấu hình hệ thống.'
  }
];

export const SupervisedAiApproval: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          AN TOÀN TRÍ TUỆ NHÂN TẠO
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          Cơ chế AI có kiểm soát: Human-in-the-loop (Con người phê duyệt)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          AI trong doanh nghiệp không bao giờ được phép tự do quyết định vận mệnh tài chính hay ký kết hợp đồng. AI ENTERPRISE thiết lập cơ chế kiểm soát nghiêm ngặt: AI đóng vai trò phân tích và đề xuất, con người giữ quyền quyết định tối hậu.
        </p>
      </div>

      {/* 6-Step Visual Process Flow */}
      <div className="bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
            Quy trình 6 bước vận hành có kiểm soát chuẩn mực
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            Khóa chốt an toàn tại bước 4
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {APPROVAL_STEPS.map((step) => {
            const isHuman = step.actor === 'HUMAN';
            return (
              <div
                key={step.stepNum}
                className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 transition-all ${
                  isHuman
                    ? 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700/80 ring-2 ring-amber-400/30 shadow-xs'
                    : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
                      isHuman ? 'bg-amber-500 text-white' : 'bg-[#155EEF] text-white'
                    }`}>
                      {step.stepNum}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isHuman
                        ? 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800'
                        : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                    }`}>
                      {step.actorLabel}
                    </span>
                  </div>

                  <h4 className={`text-xs font-bold leading-tight ${isHuman ? 'text-amber-900 dark:text-amber-200' : 'text-[#0B1F3A] dark:text-white'}`}>
                    {step.title}
                  </h4>

                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                  {step.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two-Column Matrix: Autonomous Allowed vs. Strict Approval Required */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1: AI Autonomous in Boundaries */}
        <div className="p-6 rounded-3xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 space-y-4">
          <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4] border-b border-blue-200 dark:border-blue-900/60 pb-3">
            <Bot className="w-5 h-5 shrink-0" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                1. Tác vụ AI tự động trong ranh giới an toàn
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Hỗ trợ xử lý thông tin thông thường theo phạm vi quy trình được phân công
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {AUTONOMOUS_TASKS.map((task, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white dark:bg-[#0D182E] border border-blue-100 dark:border-blue-900/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{task.name}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-5 leading-relaxed">
                  {task.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Strict Human Approval Required */}
        <div className="p-6 rounded-3xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-700 dark:text-amber-400 border-b border-amber-200 dark:border-amber-900/60 pb-3">
            <AlertOctagon className="w-5 h-5 shrink-0" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                2. Chốt chặn bắt buộc con người phê duyệt
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Bắt buộc có phê duyệt của nhân sự có thẩm quyền trước khi ban hành hoặc thực thi
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {STRICT_APPROVAL_TASKS.map((task, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white dark:bg-[#0D182E] border border-amber-100 dark:border-amber-900/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1F3A] dark:text-white">
                  <UserCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{task.name}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-5 leading-relaxed">
                  {task.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
