import React, { useState } from 'react';
import { 
  PhoneCall, PhoneForwarded, UserCheck, Bot, User, Clock, 
  CheckCircle2, AlertCircle, ArrowRight, ShieldCheck 
} from 'lucide-react';

export const VoiceDialogueVisual: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const dialogueSteps = [
    {
      id: 1,
      speaker: 'ai',
      text: 'Dạ em chào anh Tuấn Anh từ Trung tâm Dịch vụ Kỹ thuật VMC ạ. Em gọi để xin xác nhận lịch bảo dưỡng xe định kỳ của anh lúc 14:00 chiều nay tại xưởng Cầu Giấy ạ.',
      type: 'Nhắc lịch tự động',
      actionPrompt: 'Khách hàng trả lời xin dời lịch hẹn...'
    },
    {
      id: 2,
      speaker: 'user',
      text: 'Chiều nay 2 giờ anh đang dở cuộc họp với đối tác rồi. Dời sang tầm 4 rưỡi chiều nay có còn kỹ thuật viên làm việc không em?',
      type: 'Yêu cầu dời lịch hẹn',
      actionPrompt: 'AI kiểm tra khoang xưởng và khung giờ khả dụng...'
    },
    {
      id: 3,
      speaker: 'ai',
      text: 'Dạ xưởng bên em phục vụ đến 18:30 ạ. Em đã chuyển lịch hẹn của anh sang 16:30 chiều nay thành công rồi ạ. Khi đến anh chỉ cần đọc số điện thoại là kỹ thuật tiếp nhận ngay.',
      type: 'Xác nhận dời giờ thành công',
      actionPrompt: 'Khách hàng bất ngờ hỏi câu hỏi kỹ thuật chuyên sâu...'
    },
    {
      id: 4,
      speaker: 'user',
      text: 'À em ơi, tiện cho anh hỏi xe anh mấy hôm nay lúc đạp phanh nghe tiếng rít két két rất to, cái đấy kiểm tra lâu không và có phải thay đĩa phanh luôn không?',
      type: 'Thắc mắc kỹ thuật an toàn ngoài kịch bản',
      actionPrompt: 'Kích hoạt quy tắc chốt chặn: Hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng'
    },
    {
      id: 5,
      speaker: 'transfer',
      text: 'Dạ về sự cố an toàn phanh xe, em xin phép giữ máy để chuyển tiếp cuộc gọi đến Kỹ sư Trưởng Tuấn Minh hỗ trợ tư vấn chuẩn xác cho anh ngay ạ!',
      type: 'Chuyển tiếp sang Nhân viên (khi được cấu hình)',
      actionPrompt: 'Kỹ sư tiếp nhận cuộc gọi trên máy nhánh kèm tóm tắt ngữ cảnh'
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-teal-100 dark:bg-teal-950/60 text-teal-600">
            <PhoneCall className="w-4 h-4" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Mô Phỏng Cây Hội Thoại Thoại AI (Dialogue Flow)
              </h4>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                Có Kiểm Soát
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                [Kịch bản minh họa]
              </span>
            </div>
            <span className="text-xs text-slate-500">Kịch bản mô phỏng: Nhắc lịch bảo dưỡng • Đổi giờ • Chuyển tiếp khi hỏi khó</span>
          </div>
        </div>

        {/* Step controller */}
        <div className="flex items-center gap-1.5 self-start sm:self-center">
          <span className="text-xs text-slate-500 mr-1">Diễn biến:</span>
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => setCurrentStep(s)}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                currentStep === s
                  ? 'bg-primary text-white shadow-xs'
                  : currentStep > s
                  ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Dialogue Visualizer */}
      <div className="space-y-2.5 text-xs">
        {dialogueSteps.slice(0, currentStep).map((step, idx) => (
          <div
            key={step.id}
            className={`p-3 rounded-xl border transition-all ${
              step.speaker === 'transfer'
                ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-900/60 text-rose-950 dark:text-rose-200'
                : step.speaker === 'ai'
                ? 'bg-teal-50/50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900/40 text-slate-800 dark:text-slate-200'
                : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold flex items-center gap-1.5">
                {step.speaker === 'ai' && (
                  <>
                    <Bot className="w-3.5 h-3.5 text-teal-600" /> Trợ lý Voice AI VMC
                  </>
                )}
                {step.speaker === 'user' && (
                  <>
                    <User className="w-3.5 h-3.5 text-blue-600" /> Khách hàng (Lê Tuấn Anh)
                  </>
                )}
                {step.speaker === 'transfer' && (
                  <>
                    <PhoneForwarded className="w-3.5 h-3.5 text-rose-600" /> Chốt chặn: Hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng
                  </>
                )}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/80 dark:bg-slate-900/80 font-medium">
                {step.type}
              </span>
            </div>
            <p className="leading-relaxed pl-5 italic">
              "{step.text}"
            </p>
          </div>
        ))}
      </div>

      {/* Step Navigator Button */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-500 italic">
          {currentStep < 5
            ? dialogueSteps[currentStep - 1].actionPrompt
            : 'Đã hoàn tất cuộc gọi: Cố vấn kỹ thuật đã tiếp quản thành công.'}
        </span>

        {currentStep < 5 ? (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="px-3.5 py-1.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
          >
            Tiếp tục hội thoại <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={() => setCurrentStep(1)}
            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg transition-colors"
          >
            Xem lại từ đầu
          </button>
        )}
      </div>

      {/* Footer Rule */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Quy tắc cốt lõi: Voice AI không tự suy diễn kỹ thuật hoặc giá bán ngoài kịch bản; luôn chuyển giao cho con người khi gặp câu hỏi mở.</span>
      </div>
    </div>
  );
};
