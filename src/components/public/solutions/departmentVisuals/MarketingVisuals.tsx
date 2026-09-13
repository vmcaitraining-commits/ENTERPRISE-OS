import React, { useState } from 'react';
import {
  Megaphone, Target, BarChart3, Calendar, Filter,
  Layers, ArrowRight, CheckCircle2, Sparkles, Clock,
  Globe, Share2, Mail, DollarSign, TrendingUp
} from 'lucide-react';

export const MarketingVisuals: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'funnel' | 'channels' | 'calendar' | 'nurturing'>('funnel');

  return (
    <div className="space-y-6">
      {/* Sub-nav switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('funnel')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'funnel'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            1. Phễu Nguồn → Lead → Doanh thu
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('channels')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'channels'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            2. Hiệu quả kênh (CAC & CPL)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('calendar')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'calendar'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            3. Lịch nội dung & Chiến dịch
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('nurturing')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'nurturing'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            4. Chuỗi nuôi dưỡng (Nurturing)
          </button>
        </div>
        <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
          [Dữ liệu minh họa]
        </span>
      </div>

      {/* VIEW 1: FUNNEL NGUỒN → LEAD → DOANH THU */}
      {activeTab === 'funnel' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Liên thông phễu: Từ ngân sách tiếp thị đến doanh thu thực tế
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Đo lường doanh thu đóng được từ mỗi đồng chi phí tiếp thị mà không cần đối soát thủ công
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
              ROI toàn kênh: 380%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Step 1 */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">1. Nguồn truy cập (Traffic)</span>
              <div className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white font-mono">48.200</div>
              <div className="text-[11px] text-slate-500 space-y-0.5">
                <div>Google Ads: 42%</div>
                <div>SEO / Organic: 35%</div>
                <div>Social & Referral: 23%</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/60 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">2. Lead đăng ký (MQL)</span>
              <div className="text-2xl font-extrabold text-blue-800 dark:text-blue-300 font-mono">1.650</div>
              <div className="text-[11px] text-blue-600 dark:text-blue-400 space-y-0.5">
                <div>Tỷ lệ chuyển đổi: 3.4%</div>
                <div>Chi phí/Lead (CPL): 95.000 đ</div>
                <div>Lead hợp lệ: 82%</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 bg-purple-50/60 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-900/60 space-y-2">
              <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">3. Cơ hội bán hàng (SQL)</span>
              <div className="text-2xl font-extrabold text-purple-800 dark:text-purple-300 font-mono">342</div>
              <div className="text-[11px] text-purple-600 dark:text-purple-400 space-y-0.5">
                <div>Đạt chuẩn tư vấn Sales</div>
                <div>Phân bổ tức thì vào CRM</div>
                <div>Thời gian nhận: 0 giây</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/60 space-y-2">
              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">4. Doanh thu phát sinh</span>
              <div className="text-2xl font-extrabold text-emerald-800 dark:text-emerald-300 font-mono">1.82 tỷ đ</div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 space-y-0.5">
                <div>Hợp đồng chốt: 64 hợp đồng</div>
                <div>Chi phí/Khách (CAC): 2.450.000 đ</div>
                <div>Hiệu quả chi phí: 8.6%</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: HIỆU QUẢ KÊNH (CAC & CPL) */}
      {activeTab === 'channels' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Bảng phân tích hiệu quả kênh tiếp thị (Channel Performance)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                So sánh số liệu thực chi, số lượng lead, chi phí CAC và tỷ lệ chốt của từng kênh
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">Kỳ báo cáo: Tháng hiện tại</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                  <th className="pb-3 font-semibold">Kênh tiếp thị</th>
                  <th className="pb-3 font-semibold">Ngân sách chi</th>
                  <th className="pb-3 font-semibold">Lead thu được</th>
                  <th className="pb-3 font-semibold">CPL (Chi phí/Lead)</th>
                  <th className="pb-3 font-semibold">Hợp đồng đóng</th>
                  <th className="pb-3 font-semibold">Doanh thu thu về</th>
                  <th className="pb-3 font-semibold">Đánh giá hiệu quả</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                <tr>
                  <td className="py-3 font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                    Google Search B2B
                  </td>
                  <td className="py-3 font-mono">65.000.000 đ</td>
                  <td className="py-3 font-mono">580 lead</td>
                  <td className="py-3 font-mono">112.000 đ</td>
                  <td className="py-3 font-mono font-bold text-emerald-600">26 deal</td>
                  <td className="py-3 font-mono font-bold">840.000.000 đ</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 text-[10px] font-bold">Rất cao (ROI 12x)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                    <Share2 className="w-3.5 h-3.5 text-indigo-600" />
                    Mạng xã hội & Video ngắn
                  </td>
                  <td className="py-3 font-mono">45.000.000 đ</td>
                  <td className="py-3 font-mono">620 lead</td>
                  <td className="py-3 font-mono">72.000 đ</td>
                  <td className="py-3 font-mono font-bold text-emerald-600">18 deal</td>
                  <td className="py-3 font-mono font-bold">450.000.000 đ</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 text-[10px] font-bold">Tốt (ROI 10x)</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    Email Automation & Nurturing
                  </td>
                  <td className="py-3 font-mono">8.000.000 đ</td>
                  <td className="py-3 font-mono">240 lead</td>
                  <td className="py-3 font-mono">33.000 đ</td>
                  <td className="py-3 font-mono font-bold text-emerald-600">12 deal</td>
                  <td className="py-3 font-mono font-bold">360.000.000 đ</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 text-[10px] font-bold">Tối ưu chi phí</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                    <Target className="w-3.5 h-3.5 text-purple-600" />
                    Sự kiện Hội thảo / Webinar
                  </td>
                  <td className="py-3 font-mono">38.000.000 đ</td>
                  <td className="py-3 font-mono">210 lead</td>
                  <td className="py-3 font-mono">180.000 đ</td>
                  <td className="py-3 font-mono font-bold text-emerald-600">8 deal</td>
                  <td className="py-3 font-mono font-bold">170.000.000 đ</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 text-[10px] font-bold">Chất lượng cao</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 3: LỊCH NỘI DUNG & CHIẾN DỊCH */}
      {activeTab === 'calendar' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Lịch nội dung biên tập & Kế hoạch chiến dịch (Content Calendar)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Điều phối bài viết chuyên gia, case study thực chiến và lịch phát hành ấn phẩm
              </p>
            </div>
            <span className="text-xs font-mono text-purple-600 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-900">
              4 chiến dịch đang chạy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-blue-600">Thứ 3 · Tuần này</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Đã xuất bản</span>
              </div>
              <div className="font-bold text-xs text-[#0B1F3A] dark:text-white">Case Study: Chuyển đổi vận hành chuỗi 15 showroom bán buôn</div>
              <p className="text-[11px] text-slate-500">Định dạng: Bài viết chuyên sâu + Infographic luồng dữ liệu liên phòng ban.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-600">Thứ 5 · Tuần này</span>
                <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">Đang biên tập</span>
              </div>
              <div className="font-bold text-xs text-[#0B1F3A] dark:text-white">Ebook: Cẩm nang 6 bước tự động hóa quy trình phê duyệt chi phí</div>
              <p className="text-[11px] text-slate-500">Định dạng: Tài liệu PDF tải về + Biểu mẫu thu lead chất lượng cao (Gated Content).</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-purple-600">Thứ 7 · Tuần tới</span>
                <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded font-bold">Kế hoạch</span>
              </div>
              <div className="font-bold text-xs text-[#0B1F3A] dark:text-white">Webinar Trực tuyến: Kiến trúc AI Enterprise cho Doanh nghiệp vừa & nhỏ</div>
              <p className="text-[11px] text-slate-500">Định dạng: Phát sóng tương tác trực tiếp với chuyên gia tư vấn kiến trúc hệ thống.</p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: CHUỖI NUÔI DƯỠNG (NURTURING) */}
      {activeTab === 'nurturing' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                Kịch bản nuôi dưỡng tự động (Automated Lead Nurturing Flow)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tự động gửi nội dung cá nhân hóa theo hành vi và chấm điểm mức độ sẵn sàng mua hàng
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
              Trạng thái: Đang hoạt động
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
            <div className="p-3.5 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/60 space-y-1.5 text-xs">
              <span className="font-bold text-blue-700 dark:text-blue-300 text-[10px] uppercase">Giai đoạn 1</span>
              <div className="font-bold text-[#0B1F3A] dark:text-white">Lead đăng ký nhận tài liệu</div>
              <p className="text-[11px] text-slate-500">Ngay lập tức gửi email chào mừng kèm link tải file; gắn tag lĩnh vực ngành nghề.</p>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
              <span className="font-bold text-slate-500 text-[10px] uppercase">Giai đoạn 2 (Ngày +2)</span>
              <div className="font-bold text-[#0B1F3A] dark:text-white">Gửi bài toán mẫu cùng ngành</div>
              <p className="text-[11px] text-slate-500">Hệ thống gửi câu chuyện thành công từ doanh nghiệp có cùng quy mô và bài toán.</p>
            </div>

            <div className="p-3.5 bg-amber-50/60 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/60 space-y-1.5 text-xs">
              <span className="font-bold text-amber-700 dark:text-amber-300 text-[10px] uppercase">Giai đoạn 3 (Ngày +5)</span>
              <div className="font-bold text-[#0B1F3A] dark:text-white">Kiểm tra độ nóng tương tác</div>
              <p className="text-[11px] text-slate-500">Nếu người dùng mở email & xem bảng giá: Lead Score nhảy lên 85+ (Sẵn sàng mua).</p>
            </div>

            <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/60 space-y-1.5 text-xs">
              <span className="font-bold text-emerald-700 dark:text-emerald-300 text-[10px] uppercase">Giai đoạn 4</span>
              <div className="font-bold text-[#0B1F3A] dark:text-white">Kích hoạt cuộc hẹn tư vấn</div>
              <p className="text-[11px] text-slate-500">Tự động điều phối vào hàng đợi của Sales kèm thông báo nhắc lịch gọi thoại tư vấn.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
