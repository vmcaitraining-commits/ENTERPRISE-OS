import React, { useState } from 'react';
import {
  Headphones, Inbox, Clock, CheckCircle2, AlertTriangle,
  MessageSquare, Star, ArrowRight, ShieldCheck, UserCheck,
  PhoneCall, Mail, ChevronRight, Activity, Smile
} from 'lucide-react';

export const CustomerServiceVisuals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'sla' | 'timeline' | 'csat'>('inbox');

  return (
    <div className="space-y-6">
      {/* Sub-nav switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('inbox')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'inbox'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            1. Hộp thư Hỗ trợ & Ticket Queue
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('sla')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'sla'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            2. Đồng hồ đo hạn cam kết SLA
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            3. Dòng thời gian giải quyết sự cố
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('csat')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'csat'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            4. Phân bố mức độ hài lòng (CSAT)
          </button>
        </div>
        <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
          [Dữ liệu minh họa]
        </span>
      </div>

      {/* VIEW 1: INBOX & TICKET QUEUE */}
      {activeTab === 'inbox' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Inbox className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Hàng đợi Ticket hợp nhất đa kênh (Omnichannel Inbox)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tập hợp mọi khiếu nại, yêu cầu từ Website, Zalo OA, Hotline và Email vào một luồng xử lý duy nhất
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-bold">18 Đang mở</span>
              <span className="px-2 py-1 rounded bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-bold">2 Gấp</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {/* Ticket 1 */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-rose-200/80 dark:border-rose-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold">KHẨN CẤP</span>
                  <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">#TCK-941: Lỗi đồng bộ dữ liệu tồn kho sang POS chi nhánh 3</span>
                  <span className="text-[11px] text-slate-400 font-mono">· Zalo OA</span>
                </div>
                <p className="text-[11px] text-slate-500">Khách hàng: Chuỗi thời trang May Mắn · Chuyên viên: Lê Quang (Kỹ thuật)</p>
              </div>
              <div className="flex items-center gap-3 shrink-0 text-xs">
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">SLA phản hồi còn:</span>
                  <strong className="text-rose-600 font-mono font-bold">06 phút 12 giây</strong>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
                  Đang xử lý
                </span>
              </div>
            </div>

            {/* Ticket 2 */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold">CAO</span>
                  <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">#TCK-938: Đề nghị cấp thêm 5 tài khoản nhân sự mới cho phòng mua hàng</span>
                  <span className="text-[11px] text-slate-400 font-mono">· Email</span>
                </div>
                <p className="text-[11px] text-slate-500">Khách hàng: Công ty Cơ khí An Phát · Chuyên viên: Phạm Hà (CSKH)</p>
              </div>
              <div className="flex items-center gap-3 shrink-0 text-xs">
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">SLA phản hồi còn:</span>
                  <strong className="text-emerald-600 font-mono font-bold">34 phút</strong>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium text-[11px]">
                  Chờ xác nhận hợp đồng
                </span>
              </div>
            </div>

            {/* Ticket 3 */}
            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-bold">TIÊU CHUẨN</span>
                  <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">#TCK-935: Hướng dẫn xuất báo cáo doanh số tổng hợp theo tháng</span>
                  <span className="text-[11px] text-slate-400 font-mono">· Web Chat</span>
                </div>
                <p className="text-[11px] text-slate-500">Khách hàng: Siêu thị Sữa Sạch · AI Copilot đã gửi bài viết hướng dẫn (Knowledge Base)</p>
              </div>
              <div className="flex items-center gap-3 shrink-0 text-xs">
                <span className="text-emerald-600 font-mono font-bold text-[11px]">Khách đã đánh giá 5★</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium text-[11px]">
                  Đã giải quyết
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: SLA CLOCKS */}
      {activeTab === 'sla' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Đồng hồ giám sát thời hạn dịch vụ (SLA Tracking)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tự động cảnh báo trước 15 phút nếu yêu cầu chưa được phản hồi hoặc giải quyết
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
              Tỷ lệ đạt chuẩn SLA: 96.8%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Thời gian phản hồi đầu tiên (FRT)</span>
              <div className="text-3xl font-extrabold text-[#155EEF] dark:text-[#06B6D4] font-mono">04 phút</div>
              <span className="text-[11px] text-emerald-600 font-medium">Cam kết mục tiêu: ≤ 15 phút</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Thời gian xử lý triệt để (TTR)</span>
              <div className="text-3xl font-extrabold text-[#0B1F3A] dark:text-white font-mono">2.4 giờ</div>
              <span className="text-[11px] text-emerald-600 font-medium">Cam kết mục tiêu: ≤ 4.0 giờ</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 text-center">
              <span className="text-xs text-slate-500 font-semibold block">Tỷ lệ giải quyết trong 1 lần (FCR)</span>
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">79.2%</div>
              <span className="text-[11px] text-slate-400 font-medium">Không cần khách hỏi lại</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: RESOLUTION TIMELINE */}
      {activeTab === 'timeline' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Dòng thời gian xử lý ca hỗ trợ mẫu (Incident Resolution Timeline)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Minh bạch từng mốc thao tác từ người dùng, AI và chuyên viên phụ trách
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">Mã ca: #TCK-941</span>
          </div>

          <div className="space-y-3 pt-2 max-w-2xl">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 flex items-center justify-center font-bold text-xs shrink-0">1</div>
              <div>
                <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">09:00 · Khách gửi tin nhắn Zalo phản ánh</span>
                <p className="text-[11px] text-slate-500">Hệ thống lập tức khởi tạo Ticket #TCK-941 và phân loại mức Khẩn cấp.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 flex items-center justify-center font-bold text-xs shrink-0">2</div>
              <div>
                <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">09:01 · AI Copilot gợi ý nguyên nhân & bài viết hướng dẫn</span>
                <p className="text-[11px] text-slate-500">Nhận diện lỗi cấu hình mạng tại máy in hóa đơn chi nhánh 3 theo dữ liệu log hệ thống.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 flex items-center justify-center font-bold text-xs shrink-0">3</div>
              <div>
                <span className="text-xs font-bold text-[#0B1F3A] dark:text-white">09:04 · Chuyên viên kỹ thuật liên hệ hỗ trợ từ xa</span>
                <p className="text-[11px] text-slate-500">Kết nối cấu hình lại cổng kết nối IP và thông báo khách in thử phiếu xuất kho.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 flex items-center justify-center font-bold text-xs shrink-0">4</div>
              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">09:18 · Sự cố khắc phục hoàn toàn & Khách xác nhận hài lòng</span>
                <p className="text-[11px] text-slate-500">Đóng ticket, tự động lưu lịch sử vào Customer 360 và gửi khảo sát 5 sao.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: CSAT & NPS DISTRIBUTION */}
      {activeTab === 'csat' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Smile className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Phân bố mức độ hài lòng khách hàng (CSAT & NPS Score)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Thu thập đánh giá tự động ngay sau khi mỗi yêu cầu hỗ trợ được đóng thành công
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
                CSAT Trung bình: 4.8 / 5.0
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2.5">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Tỷ lệ đánh giá sao (1.240 lượt phản hồi)</span>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-500 font-medium">5 sao</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="font-mono text-slate-600 dark:text-slate-300 w-10 text-right">82%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-500 font-medium">4 sao</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '13%' }}></div>
                  </div>
                  <span className="font-mono text-slate-600 dark:text-slate-300 w-10 text-right">13%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-500 font-medium">3 sao</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: '3%' }}></div>
                  </div>
                  <span className="font-mono text-slate-600 dark:text-slate-300 w-10 text-right">3%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-500 font-medium">1-2 sao</span>
                  <div className="flex-1 bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: '2%' }}></div>
                  </div>
                  <span className="font-mono text-slate-600 dark:text-slate-300 w-10 text-right">2%</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Chỉ số đo lường lòng trung thành (Net Promoter Score)</span>
              <div className="flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">+68</div>
                  <span className="text-xs text-slate-500 font-medium mt-1 block">Xếp hạng: Xuất sắc (World-class B2B)</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                85% khách hàng sẵn sàng giới thiệu giải pháp cho đối tác cùng mạng lưới kinh doanh.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
