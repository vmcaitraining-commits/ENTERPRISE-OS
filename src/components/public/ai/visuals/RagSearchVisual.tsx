import React, { useState } from 'react';
import { 
  Search, BookOpen, ExternalLink, ShieldAlert, CheckCircle2, 
  HelpCircle, Lock, AlertTriangle, FileText, Sparkles 
} from 'lucide-react';

export const RagSearchVisual: React.FC = () => {
  const [scenario, setScenario] = useState<'standard' | 'missing' | 'rbac'>('standard');

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 flex items-center gap-1">
              <Search className="w-3.5 h-3.5" /> Tra cứu Tri thức Nội bộ (Enterprise RAG)
            </span>
            <span className="text-xs text-slate-500">Mô phỏng tìm kiếm ngữ nghĩa theo tài liệu chính thức</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              [Kịch bản minh họa]
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
            Câu Hỏi → Đoạn Nguồn → Câu Trả Lời (Kèm Trường Hợp Ngoại Lệ)
          </h4>
        </div>

        {/* Scenario Switcher */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-center text-xs">
          <button
            onClick={() => setScenario('standard')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              scenario === 'standard'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            1. Có nguồn chuẩn [Minh họa]
          </button>
          <button
            onClick={() => setScenario('missing')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              scenario === 'missing'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            2. Thiếu nguồn [Minh họa]
          </button>
          <button
            onClick={() => setScenario('rbac')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              scenario === 'rbac'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            3. Chặn RBAC [Minh họa]
          </button>
        </div>
      </div>

      {/* Scenario 1: Standard Grounded Search */}
      {scenario === 'standard' && (
        <div className="space-y-3 text-xs">
          {/* Query Bar */}
          <div className="p-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
            <Search className="w-4 h-4 text-primary shrink-0" />
            <span>Câu hỏi mô phỏng: "Nghỉ kết hôn được mấy ngày và công ty có khoản tiền mừng cưới không?"</span>
          </div>

          {/* Sourced Passages */}
          <div className="p-3 bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-900/40 rounded-xl space-y-1.5">
            <div className="flex items-center justify-between text-purple-900 dark:text-purple-300 font-bold">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-purple-600" />
                Đoạn trích nguồn từ Vector DB [Mô phỏng]:
              </span>
              <span className="text-[11px] underline cursor-pointer flex items-center gap-0.5">
                QC-NS-2026.pdf#Trang18 <ExternalLink className="w-3 h-3" />
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 italic bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-lg border border-purple-200/40 dark:border-purple-900/30">
              "...Căn cứ Điều 12, Khoản 3 Quy chế Lao động VMC: Người lao động ký hợp đồng chính thức khi kết hôn được nghỉ 03 ngày làm việc hưởng nguyên lương. Công đoàn và Công ty trao tặng quà mừng cưới trị giá 2.000.000 VNĐ. Điều kiện: Nộp bản sao Giấy ĐKKH cho phòng HCNS trước tối thiểu 05 ngày..."
            </p>
          </div>

          {/* Synthesized Response */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-emerald-600">
              <CheckCircle2 className="w-4 h-4" /> Câu trả lời tổng hợp theo kịch bản [Minh họa trích dẫn nguồn]:
            </span>
            <div className="text-slate-700 dark:text-slate-300 space-y-1 pl-5">
              <p>1. <strong>Số ngày nghỉ:</strong> Bạn được nghỉ <strong>03 ngày làm việc</strong> hưởng nguyên lương.</p>
              <p>2. <strong>Quà mừng cưới:</strong> Công ty và Công đoàn hỗ trợ khoản tiền mừng <strong>2.000.000 VNĐ</strong>.</p>
              <p>3. <strong>Thủ tục:</strong> Nộp bản sao Giấy đăng ký kết hôn cho Phòng Hành chính Nhân sự trước tối thiểu 5 ngày làm việc.</p>
            </div>
          </div>
        </div>
      )}

      {/* Scenario 2: Missing Data (Zero-Hallucination Guardrail) */}
      {scenario === 'missing' && (
        <div className="space-y-3 text-xs">
          {/* Query Bar */}
          <div className="p-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
            <Search className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Câu hỏi: "Công ty có chính sách cho nhân viên vay tiền mua nhà lãi suất 0% không?"</span>
          </div>

          <div className="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/60 rounded-xl space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Chốt chặn an toàn: Không tìm thấy tài liệu nguồn phù hợp
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Hệ thống đã rà soát toàn bộ 42 văn bản quy chế, thỏa ước lao động và thông tư nội bộ hiện hành nhưng <strong>không tìm thấy bất kỳ điều khoản nào quy định về chính sách cho vay mua nhà</strong>.
            </p>
            <div className="text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/40">
              <strong>Hành động của AI:</strong> Từ chối suy diễn để tránh gây hiểu lầm. Đề xuất nhân viên liên hệ trực tiếp Trưởng phòng HCNS (chị Thanh Hà - Máy lẻ 104) để được giải đáp các trường hợp hỗ trợ đặc biệt.
            </div>
          </div>
        </div>
      )}

      {/* Scenario 3: RBAC Permission Denial */}
      {scenario === 'rbac' && (
        <div className="space-y-3 text-xs">
          {/* Query Bar */}
          <div className="p-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
            <Lock className="w-4 h-4 text-rose-500 shrink-0" />
            <span>Câu hỏi: "Cho tôi xem chi tiết bảng lương và mức thưởng Tết 2026 của Ban Tổng Giám đốc?"</span>
          </div>

          <div className="p-3.5 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-900/60 rounded-xl space-y-2">
            <div className="flex items-center gap-2 font-bold text-rose-900 dark:text-rose-300">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              Từ chối truy cập: Vi phạm phân quyền dữ liệu (RBAC Guardrail)
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Tài khoản người dùng hiện tại thuộc nhóm <strong>[Chuyên viên Kinh doanh]</strong>. Dữ liệu bảng lương Ban Giám đốc thuộc phân vùng bảo mật <strong>[Tuyệt mật - Cấp độ HĐQT]</strong>.
            </p>
            <div className="text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-rose-200 dark:border-rose-900/40">
              <strong>Nhật ký bảo mật (Audit Log):</strong> Yêu cầu tra cứu đã bị khóa tự động và ghi nhận vào hệ thống giám sát an ninh thông tin.
            </div>
          </div>
        </div>
      )}

      {/* Checkpoint Footer */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
        <span>Nguyên lý RAG an toàn: Chỉ trả lời khi có bằng chứng trong tài liệu nguồn. Minh bạch khi không có dữ liệu và chặn truy cập vượt quyền.</span>
      </div>
    </div>
  );
};
