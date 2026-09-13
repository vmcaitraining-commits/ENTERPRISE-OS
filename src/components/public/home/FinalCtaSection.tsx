import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  Calendar, CheckCircle2, ArrowRight, ShieldCheck,
  FileCheck, Sparkles, PhoneCall
} from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();

  const deliverables = [
    'Báo cáo phân tích hiện trạng vận hành và xác định 3 điểm nghẽn ưu tiên.',
    'Bản vẽ kiến trúc giải pháp may đo phù hợp với quy mô và đặc thù ngành.',
    'Phiên làm việc 45 phút trực tiếp cùng Kiến trúc sư hệ thống VMC Group.'
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1F3A] via-[#0E2445] to-[#070E1B] text-white p-8 sm:p-12 border border-blue-500/30 shadow-2xl overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-[#155EEF]/20 blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 -top-16 w-60 h-60 rounded-full bg-[#06B6D4]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              SẴN SÀNG CHUYỂN ĐỔI
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bắt đầu xây dựng hệ điều hành vận hành cho doanh nghiệp của bạn
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Không cần đầu tư chắp vá nhiều phần mềm rời rạc. Hãy bắt đầu với một kiến trúc thống nhất, chuẩn hóa quy trình và đưa AI vào vận hành an toàn.
            </p>
          </div>

          {/* Value delivered box */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left max-w-xl mx-auto space-y-2.5">
            <div className="text-xs font-bold uppercase text-slate-300 tracking-wider">
              Doanh nghiệp của bạn sẽ nhận được:
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => openConsultationModal('booking')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#155EEF] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Đặt lịch tư vấn kiến trúc 1:1</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => openConsultationModal('assessment')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Đăng ký đánh giá mức độ sẵn sàng AI</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Cam kết bảo mật 100% thông tin và dữ liệu doanh nghiệp</span>
          </div>
        </div>
      </div>
    </section>
  );
};
