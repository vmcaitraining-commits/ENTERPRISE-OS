import React, { useState, useEffect, useRef } from 'react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { useEnterprise } from '../../context/EnterpriseContext';
import { industriesSolutions } from '../../data/websiteContent';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building2, User, Mail, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { ConsultationFormData } from '../../types/website';

interface ModalErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  companyScale?: string;
  industry?: string;
}

export const ConsultationModal: React.FC = () => {
  const {
    isConsultationModalOpen,
    consultationModalType,
    consultationDefaultIndustry,
    currentPath,
    closeConsultationModal,
    submitConsultation
  } = usePublicRouter();

  const { showToast } = useEnterprise();

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyScale: '',
    industry: '',
    needDescription: '',
    type: consultationModalType
  });

  const [errors, setErrors] = useState<ModalErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  // Sync modal type & industry when modal opens or props change
  useEffect(() => {
    if (isConsultationModalOpen) {
      lastActiveElementRef.current = document.activeElement as HTMLElement | null;
      let targetInd = consultationDefaultIndustry || '';
      if (!targetInd) {
        const match = industriesSolutions.find((i) => currentPath === `/industries/${i.slug}`);
        if (match) targetInd = match.name;
      }
      setFormData((prev) => ({
        ...prev,
        type: consultationModalType,
        industry: targetInd || prev.industry
      }));
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isConsultationModalOpen, consultationModalType, consultationDefaultIndustry, currentPath]);

  // Accessibility: focus trap & Escape key listener & return focus & prevent body scroll layout shift
  useEffect(() => {
    if (!isConsultationModalOpen) return;

    // Prevent body scrolling without layout shift
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Focus first interactive input
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeConsultationModal();
        return;
      }

      // Focus trap within modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      // Return focus to previously active element
      if (lastActiveElementRef.current) {
        lastActiveElementRef.current.focus();
      }
    };
  }, [isConsultationModalOpen, closeConsultationModal]);

  if (!isConsultationModalOpen) return null;

  const getTitleAndDesc = () => {
    switch (consultationModalType) {
      case 'assessment':
        return {
          badge: 'ĐÁNH GIÁ NĂNG LỰC SẴN SÀNG AI',
          title: 'Đăng Ký Đánh Giá Mức Độ Sẵn Sàng AI',
          desc: 'Chuyên gia kiến trúc của VMC Group sẽ khảo sát mức độ sẵn sàng công nghệ, dữ liệu và quy trình để đề xuất lộ trình ứng dụng AI ENTERPRISE tối ưu.'
        };
      case 'booking':
        return {
          badge: 'ĐẶT LỊCH LÀM VIỆC 1:1',
          title: 'Đặt Lịch Tư Vấn Kiến Trúc AI',
          desc: 'Phiên làm việc chuyên sâu 45 phút cùng Kiến trúc sư hệ thống VMC Group về phương án kết nối các phòng ban trên một nền tảng vận hành thống nhất.'
        };
      default:
        return {
          badge: 'TƯ VẤN DOANH NGHIỆP',
          title: 'Đăng Ký Tư Vấn Giải Pháp AI ENTERPRISE',
          desc: 'Kết nối trực tiếp cùng đội ngũ VMC Group để nhận cấu hình may đo theo quy mô, ngành nghề và quy trình thực tế của doanh nghiệp.'
        };
    }
  };

  const info = getTitleAndDesc();

  // Validate modal fields
  const validate = (): boolean => {
    const errs: ModalErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên người liên hệ';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Vui lòng nhập tên doanh nghiệp của bạn';
    }

    if (!formData.email.trim()) {
      errs.email = 'Vui lòng nhập email công tác';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Email không hợp lệ (ví dụ: name@company.com)';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Số điện thoại tối thiểu 8 chữ số';
    }

    if (!formData.companyScale) {
      errs.companyScale = 'Vui lòng chọn quy mô nhân sự';
    }

    if (!formData.industry) {
      errs.industry = 'Vui lòng chọn ngành nghề';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      showToast('Vui lòng hoàn tất các trường bắt buộc!', 'warning');
      return;
    }

    setIsSubmitting(true);

    // Save in context & mock safe return
    submitConsultation(formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Đăng ký thành công! Chuyên gia VMC Group sẽ liên hệ với bạn sớm nhất.', 'success');

      setTimeout(() => {
        setIsSubmitted(false);
        closeConsultationModal();
      }, 2200);
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      aria-describedby="consultation-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0B1F3A]/75 dark:bg-black/85 backdrop-blur-xs animate-fadeIn overflow-y-auto"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-white dark:bg-[#0D182E] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-[#0B1F3A] dark:bg-[#070E1B] px-5 sm:px-6 py-4 sm:py-5 text-white relative border-b border-slate-800 shrink-0">
          <button
            type="button"
            onClick={closeConsultationModal}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ đăng ký tư vấn"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#155EEF]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            {info.badge}
          </div>
          <h2 id="consultation-modal-title" className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {info.title}
          </h2>
          <p id="consultation-modal-desc" className="text-slate-300 text-xs mt-1 leading-relaxed max-w-md">
            {info.desc}
          </p>
        </div>

        {/* Modal Body - Single main scrollable region on mobile and desktop */}
        <div className="overflow-y-auto p-5 sm:p-6 flex-1 text-[#0F172A] dark:text-slate-200">
          {isSubmitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">Tiếp nhận yêu cầu thành công!</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Cảm ơn Quý khách <span className="font-semibold text-[#0B1F3A] dark:text-[#06B6D4]">{formData.fullName}</span> từ doanh nghiệp{' '}
                <span className="font-semibold text-[#0B1F3A] dark:text-white">{formData.companyName}</span>. Chuyên gia tư vấn của VMC Group sẽ liên hệ lại qua email{' '}
                <span className="text-[#155EEF] dark:text-[#06B6D4] font-medium">{formData.email}</span> và số điện thoại trong vòng 24 giờ làm việc.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-fullname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Họ và tên người liên hệ <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      id="modal-fullname"
                      ref={firstInputRef}
                      name="name"
                      autoComplete="name"
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                      } bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-companyname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Tên doanh nghiệp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      id="modal-companyname"
                      name="organization"
                      autoComplete="organization"
                      type="text"
                      placeholder="Công ty Cổ phần / TNHH..."
                      value={formData.companyName}
                      onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.companyName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                      } bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {errors.companyName && (
                    <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.companyName}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email công tác <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      id="modal-email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                      } bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Số điện thoại <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      id="modal-phone"
                      name="tel"
                      autoComplete="tel"
                      type="tel"
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border ${
                        errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                      } bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-scale" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Quy mô nhân sự <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="modal-scale"
                    value={formData.companyScale}
                    onChange={(e) => {
                      setFormData({ ...formData, companyScale: e.target.value });
                      if (errors.companyScale) setErrors({ ...errors, companyScale: undefined });
                    }}
                    className={`w-full px-3 py-2 text-sm rounded-xl border ${
                      errors.companyScale ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                    } bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                  >
                    <option value="">Chọn quy mô...</option>
                    <option value="Dưới 20 nhân sự">Dưới 20 nhân sự</option>
                    <option value="20 - 50 nhân sự">20 - 50 nhân sự</option>
                    <option value="50 - 150 nhân sự">50 - 150 nhân sự</option>
                    <option value="150 - 500 nhân sự">150 - 500 nhân sự</option>
                    <option value="Trên 500 nhân sự">Trên 500 nhân sự</option>
                  </select>
                  {errors.companyScale && (
                    <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.companyScale}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-industry" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Ngành nghề chính <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="modal-industry"
                    value={formData.industry}
                    onChange={(e) => {
                      setFormData({ ...formData, industry: e.target.value });
                      if (errors.industry) setErrors({ ...errors, industry: undefined });
                    }}
                    className={`w-full px-3 py-2 text-sm rounded-xl border ${
                      errors.industry ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 dark:border-slate-700 focus:ring-[#155EEF]'
                    } bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2`}
                  >
                    <option value="">Chọn ngành nghề...</option>
                    {industriesSolutions.map((ind) => (
                      <option key={ind.id} value={ind.name}>{ind.name}</option>
                    ))}
                    <option value="Khác">Ngành nghề khác</option>
                  </select>
                  {errors.industry && (
                    <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.industry}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="modal-need" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nhu cầu hoặc điểm nghẽn vận hành cần giải quyết
                </label>
                <textarea
                  id="modal-need"
                  rows={3}
                  placeholder="Ví dụ: Cần đồng bộ dữ liệu khách hàng giữa phòng Marketing và Sales, hoặc muốn số hóa quy trình phê duyệt nội bộ..."
                  value={formData.needDescription}
                  onChange={(e) => setFormData({ ...formData, needDescription: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                />
              </div>

              <div className="p-3 bg-blue-50/60 dark:bg-slate-800/60 rounded-xl border border-blue-100 dark:border-slate-700 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                <span>
                  Cam kết bảo mật: VMC Group tôn trọng 100% quyền riêng tư dữ liệu và ký thỏa thuận bảo mật thông tin (NDA) trước mọi buổi làm việc chuyên sâu.
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeConsultationModal}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#155EEF] hover:bg-[#1048b8] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Đang gửi...' : 'Xác nhận gửi thông tin'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
