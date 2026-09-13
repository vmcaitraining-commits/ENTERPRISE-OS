import React, { useState } from 'react';
import {
  Mic, Play, Pause, FileText, CheckCircle2, User, PhoneCall,
  Clock, Sparkles, ArrowRight, ShieldCheck, CheckSquare, BarChart2
} from 'lucide-react';

export const VoiceVisuals: React.FC = () => {
  // Silent UX: no real audio playback, simulate playback progress visually
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackProgress, setPlaybackProgress] = useState<number>(45); // percentage
  const [taskAdded, setTaskAdded] = useState<boolean>(false);

  return (
    <div className="space-y-8">
      {/* 1. KEY PRODUCT WALKTHROUGH: WAVEFORM -> TRANSCRIPT -> SUMMARY -> TASK CRM */}
      <div className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-blue-800">
                Luồng Phân Tích & Bóc Băng Cuộc Gọi
              </span>
              <span className="text-[11px] font-mono text-slate-400">[Dữ liệu minh họa]</span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B1F3A] dark:text-white mt-1">
              Luồng Xử Lý Nghiệp Vụ: Waveform → Transcript tách người nói → AI Summary gợi ý → Task CRM theo xác nhận [Kịch bản minh họa]
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Mã hóa tệp ghi âm 256-bit</span>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-6">
          {/* STEP 1: WAVEFORM & CALL METADATA (SILENT UX - KHÔNG PHÁT AUDIO) */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer shrink-0"
                  title={isPlaying ? 'Tạm dừng mô phỏng' : 'Bật thanh tiến trình mô phỏng'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-[#0B1F3A] dark:text-white">
                      Cuộc gọi ghi âm: CALL-2026-8192
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      Chất lượng HD Voice
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Tư vấn viên: Trần Thị Mai • Khách hàng: Nguyễn Văn Hùng (AP Tech) • Thời lượng: 04:12
                  </p>
                </div>
              </div>
              <div className="text-right text-[11px] font-mono text-slate-500">
                <span>01:53 / 04:12</span>
                <span className="block text-[10px] text-slate-400">(Mô phỏng trực quan không phát âm thanh)</span>
              </div>
            </div>

            {/* Simulated Vector Waveform Bars */}
            <div className="pt-2">
              <div className="h-12 flex items-center gap-1 px-2 bg-white dark:bg-slate-950/60 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                {[
                  25, 40, 65, 80, 45, 30, 70, 95, 85, 60, 40, 20, 15, 35, 75, 90, 100, 65,
                  50, 85, 90, 40, 20, 55, 70, 85, 60, 40, 30, 65, 80, 95, 75, 50, 35, 70,
                  85, 60, 45, 90, 95, 80, 60, 40, 25, 50, 75, 85, 60, 30, 20, 45, 70, 85
                ].map((height, i) => {
                  const barProgress = (i / 54) * 100;
                  const isPassed = barProgress <= playbackProgress;
                  return (
                    <div
                      key={i}
                      onClick={() => setPlaybackProgress(barProgress)}
                      className={`flex-1 rounded-full transition-all cursor-pointer ${
                        isPassed
                          ? 'bg-[#155EEF] dark:bg-[#06B6D4]'
                          : 'bg-slate-200 dark:bg-slate-800 hover:bg-slate-300'
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* STEP 2: SPEAKER DIARIZATION TRANSCRIPT */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2">
              <span className="text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                2. Bản Bóc Băng Tách Người Nói (Speaker Diarization)
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                Dữ liệu mô phỏng phục vụ minh họa
              </span>
            </div>

            <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1 text-xs">
              <div className="p-2.5 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-blue-700 dark:text-cyan-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Chuyên viên tư vấn (Trần Thị Mai)
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">[00:08]</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Dạ em chào anh Hùng. Em gọi từ đội ngũ AI ENTERPRISE để hỗ trợ tư vấn phần mở rộng phân hệ Kế toán & Quản trị tài chính (Scope E) theo yêu cầu bên mình ạ.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Khách hàng (Nguyễn Văn Hùng - AP Tech)
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">[00:35]</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Chào em, bên anh dùng CRM Scope B rất tốt rồi. Giờ anh muốn tích hợp tự động xuất hóa đơn điện tử và đồng bộ thanh toán vào thẳng sổ cái kế toán. Em soạn báo giá và phụ lục gửi anh trước 16h00 chiều nay được không?
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-blue-700 dark:text-cyan-400 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Chuyên viên tư vấn (Trần Thị Mai)
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">[01:12]</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Dạ chắc chắn rồi ạ! Em sẽ chuẩn bị phụ lục Hợp đồng PL-02 và bảng tính chi tiết gửi email cho anh trước 16h00 chiều nay ạ.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 & 4: AI POST-CALL SUMMARY & CRM TASK SYNC */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Step 3: AI Post-Call Summary */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  3. AI Tóm Tắt Cuộc Gọi (Post-call Summary)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  Tín hiệu tương tác: Thuận lợi [Dữ liệu minh họa]
                </span>
              </div>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
                <li><strong>Nhu cầu cốt lõi:</strong> Tích hợp tự động phân hệ Kế toán (Scope E) vào CRM hiện hữu.</li>
                <li><strong>Thỏa thuận đạt được:</strong> Đồng ý cấu hình xuất hóa đơn điện tử tự động và đối soát công nợ.</li>
                <li><strong>Cam kết thời hạn:</strong> Chuyên viên gửi báo giá và phụ lục hợp đồng trước 16h00 ngày hôm nay.</li>
                <li><strong>Đánh giá SOP:</strong> 96/100 (Chào hỏi đúng chuẩn, xác nhận cam kết rõ ràng) [Minh họa].</li>
              </ul>
            </div>

            {/* Step 4: CRM Task Sync */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <CheckSquare className="w-4 h-4 text-blue-600" />
                  4. Đề Xuất Tạo Task CRM (Scope B) [Kịch bản minh họa]
                </span>
                <span className="text-[10px] font-mono text-slate-400">Hỗ trợ đồng bộ Timeline</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-[#0B1F3A] dark:text-white">
                  Tác vụ: Soạn thảo phụ lục PL-02 mở rộng Scope E cho AP Tech
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
                  <span>Hạn chót: <strong>16:00 Hôm nay</strong></span>
                  <span>• Người thực hiện: <strong>Trần Thị Mai</strong></span>
                  <span>• Ưu tiên: <strong className="text-rose-600">Cao</strong></span>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-800">
                  <span className="text-[11px] text-slate-500">
                    {taskAdded ? '✓ Đã đồng bộ vào Customer 360!' : 'Chờ nhân viên bấm xác nhận lưu:'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setTaskAdded(true)}
                    disabled={taskAdded}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      taskAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {taskAdded ? 'Đã lưu vào CRM' : 'Xác nhận đẩy vào CRM'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECONDARY NOTE: DISAMBIGUATION WITH /ai/voice */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
        <strong className="text-slate-800 dark:text-slate-200 block">
          Phân định rõ ràng phạm vi nghiệp vụ:
        </strong>
        <p>
          • <strong>Trang này (/solutions/voice):</strong> Tập trung vào giải pháp bóc băng Speech-to-Text, phân tích hội thoại đa người nói, kiểm soát chất lượng QA và trích xuất dữ liệu vào CRM.
        </p>
        <p>
          • <strong>Trang Trợ lý Thoại (/ai/voice):</strong> Tập trung vào kịch bản trợ lý ảo đàm thoại gọi ra nhắc hẹn, khảo sát dịch vụ có kịch bản và chịu sự giám sát tuyệt đối của con người.
        </p>
      </div>
    </div>
  );
};
