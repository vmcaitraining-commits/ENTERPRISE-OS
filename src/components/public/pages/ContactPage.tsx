import React, { useState } from 'react';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { industriesSolutions } from '../../../data/websiteContent';
import {
  Mail, Globe, MapPin, Phone, ShieldCheck, ArrowRight,
  CheckCircle2, Building2, User, Sparkles
} from 'lucide-react';
import { ConsultationFormData } from '../../../types/website';

export const ContactPage: React.FC = () => {
  const { data, showToast } = useEnterprise();

  const companyName = data?.identity?.companyName?.value || 'VMC Group';
  const email = data?.contact?.email?.value || 'vmcaitraining@gmail.com';
  const website = data?.contact?.website?.value || 'vmcgroup.com';
  const region = data?.contact?.region?.value || 'Hà Nội, Việt Nam';

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyScale: '20 - 50 nhân sự',
    industry: 'Thương mại & Bán lẻ',
    needDescription: '',
    type: 'consultation'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.companyName) {
      showToast('Vui lòng điền đầy đủ thông tin bắt buộc!', 'warning');
      return;
    }

    setIsSubmitted(true);
    showToast('Gửi yêu cầu thành công! VMC Group sẽ liên hệ trong 24h làm việc.', 'success');
  };

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            KẾT NỐI VỚI CHUYÊN GIA
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Liên hệ & Đăng ký Tư vấn
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Đội ngũ tư vấn kiến trúc của VMC Group sẵn sàng lắng nghe bài toán vận hành của doanh nghiệp và đề xuất phương án chuyển đổi tối ưu.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white">Thông tin Trụ sở & Liên hệ</h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Vui lòng gửi thông tin qua biểu mẫu hoặc kết nối trực tiếp qua email chính thức của VMC Group để được hỗ trợ nhanh nhất.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs text-slate-500 dark:text-slate-400 uppercase">Khu vực / Địa bàn:</span>
                    <span className="font-medium text-[#0B1F3A] dark:text-white">{region}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-[#06B6D4] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs text-slate-500 dark:text-slate-400 uppercase">Email công tác:</span>
                    <a href={`mailto:${email}`} className="font-medium text-[#155EEF] dark:text-[#06B6D4] hover:underline">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs text-slate-500 dark:text-slate-400 uppercase">Website chính thức:</span>
                    <a href={`https://${website}`} target="_blank" rel="noreferrer" className="font-medium text-[#0B1F3A] dark:text-white hover:underline">
                      {website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Cam kết bảo mật 100% dữ liệu kinh doanh và thông tin liên hệ.</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white">Phiếu Đăng Ký Tư Vấn Giải Pháp</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Điền thông tin doanh nghiệp để nhận báo cáo phân tích kiến trúc sơ bộ trong vòng 24 giờ.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">Tiếp nhận yêu cầu thành công!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                    Cảm ơn Quý khách <span className="font-semibold text-[#0B1F3A] dark:text-white">{formData.fullName}</span> từ doanh nghiệp{' '}
                    <span className="font-semibold text-[#0B1F3A] dark:text-white">{formData.companyName}</span>. Chuyên gia tư vấn của VMC Group sẽ liên hệ lại qua email{' '}
                    <span className="text-[#155EEF] dark:text-[#06B6D4] font-semibold">{formData.email}</span> trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Họ và tên người liên hệ <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Tên doanh nghiệp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Công ty Cổ phần / TNHH..."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email công tác <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Số điện thoại <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Quy mô nhân sự
                      </label>
                      <select
                        value={formData.companyScale}
                        onChange={(e) => setFormData({ ...formData, companyScale: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                      >
                        <option value="Dưới 20 nhân sự">Dưới 20 nhân sự</option>
                        <option value="20 - 50 nhân sự">20 - 50 nhân sự (Phù hợp)</option>
                        <option value="50 - 150 nhân sự">50 - 150 nhân sự (Phù hợp)</option>
                        <option value="150 - 500 nhân sự">150 - 500 nhân sự (Phù hợp)</option>
                        <option value="Trên 500 nhân sự">Trên 500 nhân sự</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Ngành nghề kinh doanh
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                      >
                        {industriesSolutions.map((ind) => (
                          <option key={ind.id} value={ind.name}>
                            {ind.name}
                          </option>
                        ))}
                        <option value="Khác">Lĩnh vực khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nhu cầu hoặc điểm nghẽn vận hành cần giải quyết
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Mô tả ngắn gọn về tình hình hiện tại (ví dụ: đang dùng nhiều phần mềm rời rạc, cần chuẩn hóa CRM, tự động hóa quy trình...)"
                      value={formData.needDescription}
                      onChange={(e) => setFormData({ ...formData, needDescription: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Gửi thông tin đăng ký tư vấn</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
