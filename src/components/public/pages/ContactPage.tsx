import React, { useState } from 'react';
import { useEnterprise } from '../../../context/EnterpriseContext';
import { industriesSolutions } from '../../../data/websiteContent';
import {
  Mail, Globe, MapPin, Phone, ShieldCheck, ArrowRight,
  CheckCircle2, Building2, User, Sparkles, AlertCircle
} from 'lucide-react';
import { ConsultationFormData } from '../../../types/website';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  companyScale?: string;
  industry?: string;
}

export const ContactPage: React.FC = () => {
  const { data, showToast } = useEnterprise();

  const companyName = data?.identity?.companyName?.value || 'VMC Group';
  const email = data?.contact?.email?.value || 'vmcaitraining@gmail.com';
  const website = data?.contact?.website?.value || 'vmcgroup.com';
  const region = data?.contact?.region?.value || 'Hà Nội, Việt Nam';

  // Form states - Empty initial scale and industry as requested ("Chọn...")
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyScale: '',
    industry: '',
    needDescription: '',
    type: 'consultation'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate form with clear, per-field text messages
  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên người liên hệ';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Vui lòng nhập tên doanh nghiệp của bạn';
    }

    if (!formData.email.trim()) {
      errs.email = 'Vui lòng nhập email công tác';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Email không đúng định dạng (ví dụ: name@company.com)';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại liên hệ';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Số điện thoại phải có ít nhất 8 chữ số';
    }

    if (!formData.companyScale) {
      errs.companyScale = 'Vui lòng chọn quy mô nhân sự của doanh nghiệp';
    }

    if (!formData.industry) {
      errs.industry = 'Vui lòng chọn ngành nghề kinh doanh';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      showToast('Vui lòng kiểm tra các trường bị lỗi!', 'warning');
      return;
    }

    setIsSubmitting(true);

    // Simulated local safe submission: Giữ dữ liệu, không tự gửi mạng thật ra bên ngoài
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Gửi thông tin thành công! Chuyên gia VMC Group sẽ liên hệ trong 24h làm việc.', 'success');
    }, 400);
  };

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            KẾT NỐI VỚI KIẾN TRÚC SƯ
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Liên hệ & Đăng ký Tư vấn Kiến trúc
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Đội ngũ tư vấn kiến trúc của VMC Group sẵn sàng lắng nghe bài toán vận hành của doanh nghiệp và đề xuất phương án chuyển đổi tối ưu.
          </p>
        </div>
      </section>

      {/* Main Grid:
          Desktop: Form 8/12, Contact Info 4/12
          Mobile: Form first, Contact Info second (flex-col-reverse or order classes)
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form: 8 cols on desktop (lg:col-span-8), appears FIRST on mobile */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase tracking-wider">
                  PHIẾU ĐĂNG KÝ
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
                  Đăng Ký Tư Vấn Giải Pháp Doanh Nghiệp
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Điền thông tin doanh nghiệp để nhận báo cáo phân tích kiến trúc sơ bộ trong vòng 24 giờ.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50/50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">Tiếp nhận yêu cầu thành công!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                    Cảm ơn Quý khách <span className="font-semibold text-[#0B1F3A] dark:text-white">{formData.fullName}</span> từ doanh nghiệp{' '}
                    <span className="font-semibold text-[#0B1F3A] dark:text-white">{formData.companyName}</span>. Chuyên gia tư vấn của VMC Group sẽ liên hệ lại qua email{' '}
                    <span className="text-[#155EEF] dark:text-[#06B6D4] font-semibold">{formData.email}</span> và số điện thoại trong thời gian sớm nhất.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                  >
                    Gửi yêu cầu bổ sung
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full name & Company name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-fullname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Họ và tên người liên hệ <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-fullname"
                        name="name"
                        autoComplete="name"
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-companyname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Tên doanh nghiệp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-companyname"
                        name="organization"
                        autoComplete="organization"
                        type="text"
                        placeholder="Công ty Cổ phần / TNHH..."
                        value={formData.companyName}
                        onChange={(e) => {
                          setFormData({ ...formData, companyName: e.target.value });
                          if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.companyName
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      />
                      {errors.companyName && (
                        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email công tác <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Số điện thoại <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="tel"
                        autoComplete="tel"
                        type="tel"
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.phone
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Scale & Industry with "Chọn..." default option */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-scale" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Quy mô nhân sự <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-scale"
                        name="organization-scale"
                        value={formData.companyScale}
                        onChange={(e) => {
                          setFormData({ ...formData, companyScale: e.target.value });
                          if (errors.companyScale) setErrors({ ...errors, companyScale: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.companyScale
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      >
                        <option value="">Chọn quy mô nhân sự...</option>
                        <option value="Dưới 20 nhân sự">Dưới 20 nhân sự</option>
                        <option value="20 - 50 nhân sự">20 - 50 nhân sự (Đang tăng trưởng)</option>
                        <option value="50 - 150 nhân sự">50 - 150 nhân sự (Quy mô vừa)</option>
                        <option value="150 - 500 nhân sự">150 - 500 nhân sự (Doanh nghiệp lớn)</option>
                        <option value="Trên 500 nhân sự">Trên 500 nhân sự (Tập đoàn)</option>
                      </select>
                      {errors.companyScale && (
                        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.companyScale}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-industry" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Ngành nghề kinh doanh <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-industry"
                        name="industry"
                        value={formData.industry}
                        onChange={(e) => {
                          setFormData({ ...formData, industry: e.target.value });
                          if (errors.industry) setErrors({ ...errors, industry: undefined });
                        }}
                        className={`w-full px-3 py-2 text-sm rounded-xl border ${
                          errors.industry
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                        } bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2`}
                      >
                        <option value="">Chọn ngành nghề kinh doanh...</option>
                        {industriesSolutions.map((ind) => (
                          <option key={ind.id} value={ind.name}>
                            {ind.name}
                          </option>
                        ))}
                        <option value="Khác">Lĩnh vực khác</option>
                      </select>
                      {errors.industry && (
                        <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.industry}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Need description */}
                  <div>
                    <label htmlFor="contact-need" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Nhu cầu hoặc điểm nghẽn vận hành cần giải quyết
                    </label>
                    <textarea
                      id="contact-need"
                      name="description"
                      rows={4}
                      placeholder="Mô tả ngắn gọn về tình hình hiện tại (ví dụ: đang dùng nhiều phần mềm rời rạc, cần chuẩn hóa CRM, tự động hóa quy trình...)"
                      value={formData.needDescription}
                      onChange={(e) => setFormData({ ...formData, needDescription: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-sm rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Đang xử lý...' : 'Gửi thông tin đăng ký tư vấn'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Left / Secondary on Mobile: Contact Info (4 cols on desktop, order-2 on mobile) */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white">Thông tin Trụ sở & Liên hệ</h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Vui lòng gửi thông tin qua biểu mẫu hoặc kết nối trực tiếp qua email chính thức của VMC Group để được phản hồi và đặt lịch làm việc.
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

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Cam kết bảo mật: Mọi thông tin liên hệ được xử lý theo quy định bảo mật và thỏa thuận NDA.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
