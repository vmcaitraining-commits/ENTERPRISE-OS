import React, { useState } from 'react';
import { 
  Headphones, AlertTriangle, BookOpen, CheckCircle2, Send, Edit3, 
  ExternalLink, Clock, ShieldCheck, UserCheck 
} from 'lucide-react';

export const CsTicketVisual: React.FC = () => {
  const [responseStatus, setResponseStatus] = useState<'draft' | 'sent'>('draft');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [responseText, setResponseText] = useState<string>(
    `Chào anh Nguyễn Hoàng Nam,

VMC Group chân thành xin lỗi anh về việc kiện hàng linh kiện #LK-992 bị trễ 2 ngày so với kế hoạch ban đầu do ảnh hưởng thời tiết tại kho trung chuyển Đà Nẵng.

Hiện kiện hàng đã về đến bưu cục quận Cầu Giấy và nhân viên giao vận đang liên hệ để giao tận tay anh trước 16:30 chiều nay.

Theo Quy chế Dịch vụ VMC (SOP-CS-04, điều 3.2), VMC xin gửi tặng anh mã voucher giảm giá 10% [VMC-CARE10] cho đơn hàng tiếp theo cùng miễn phí toàn bộ cước vận chuyển của đơn hàng này. Rất mong anh thông cảm cho sự bất tiện vừa qua ạ!`
  );

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
      {/* Ticket Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600">
            <Headphones className="w-4 h-4" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                Ticket #CS-8492: Khiếu nại tiến độ giao linh kiện
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                Ưu tiên P2 (Khẩn cấp)
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                [Dữ liệu minh họa]
              </span>
            </div>
            <div className="text-xs text-slate-500 flex flex-wrap items-center gap-3 mt-0.5">
              <span>Khách hàng: Nguyễn Hoàng Nam</span>
              <span>•</span>
              <span>Đơn hàng: #LK-992 (24.500.000 VNĐ)</span>
              <span>•</span>
              <span className="text-rose-500 font-medium">Sắc thái theo kịch bản: Bức xúc [Gợi ý tham khảo]</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> [Minh họa] Tiếp nhận: 14:20 (Chờ 4 phút)
        </div>
      </div>

      {/* Customer Complaint Bubble */}
      <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
        <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
          Nội dung khách hàng gửi qua Web Portal [Kịch bản minh họa]:
        </span>
        <p className="text-slate-600 dark:text-slate-400 italic">
          "Đơn linh kiện hẹn giao từ hôm qua mà nay vẫn chưa thấy đâu, gọi tổng đài không ai nhấc máy. Công trình của bên tôi đang bị đình trệ, nếu chiều nay không giao kịp tôi sẽ hủy toàn bộ hợp đồng và yêu cầu bồi thường!"
        </p>
      </div>

      {/* Sourced Knowledge Base Citation */}
      <div className="p-3 bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/40 rounded-xl text-xs space-y-1">
        <div className="flex items-center justify-between font-semibold text-indigo-900 dark:text-indigo-300">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            Căn cứ quy chế trích dẫn [Mô phỏng nguồn tài liệu]:
          </span>
          <span className="text-[11px] text-indigo-600 dark:text-indigo-400 underline cursor-pointer flex items-center gap-0.5">
            Xem tài liệu gốc <ExternalLink className="w-3 h-3" />
          </span>
        </div>
        <p className="text-slate-700 dark:text-slate-300">
          Trích từ <strong>SOP-CS-04 (Quy chế Chăm sóc & Xử lý Khiếu nại, Mục 3.2 - Điều khoản Giao trễ do bất khả kháng)</strong>: Trường hợp hàng trễ từ 24h-48h, nhân viên hỗ trợ được phép áp dụng chính sách: Miễn phí cước vận chuyển và tặng voucher ưu đãi 10% cho đơn hàng kế tiếp.
        </p>
      </div>

      {/* Suggested Response with Edit/Approve */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            Câu trả lời AI gợi ý theo kịch bản [Đề xuất tham khảo để chuyên viên duyệt]:
          </span>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-primary hover:underline flex items-center gap-1 font-medium"
          >
            <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Lưu chỉnh sửa' : 'Chỉnh sửa câu chữ'}
          </button>
        </div>

        {isEditing ? (
          <textarea
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
            rows={6}
            className="w-full text-xs p-3 rounded-xl border border-primary bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
          />
        ) : (
          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
            {responseText}
          </div>
        )}
      </div>

      {/* Action Checkpoint Footer */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Điểm chốt chặn: Nhân viên CSKH bắt buộc kiểm tra mã vận đơn trước khi duyệt gửi. AI không tự trả lời khách.</span>
        </div>

        <div>
          {responseStatus === 'draft' ? (
            <button
              onClick={() => setResponseStatus('sent')}
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" /> Chuyên viên duyệt & Gửi phản hồi
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-4 h-4" /> Đã gửi phản hồi cho khách hàng lúc 14:24 (SLA 4 phút)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
