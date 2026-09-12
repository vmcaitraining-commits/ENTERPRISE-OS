import React, { useState, useEffect, useRef } from 'react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { useEnterprise } from '../../context/EnterpriseContext';
import { industriesSolutions } from '../../data/websiteContent';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building2, User, Mail, Phone, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '../../types/website';

export const ConsultationModal: React.FC = () => {
  const { isConsultationModalOpen, consultationModalType, closeConsultationModal, submitConsultation } = usePublicRouter();
  const { showToast } = useEnterprise();

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyScale: '20 - 50 nhân sự',
    industry: 'Thương mại & Bán lẻ',
    needDescription: '',
    type: consultationModalType
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync modal type when prop changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, type: consultationModalType }));
  }, [consultationModalType]);

  // Accessibility: focus trap & Escape key listener
  useEffect(() => {
    if (!isConsultationModalOpen) return;

    // Focus first interactive element
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeConsultationModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isConsultationModalOpen, closeConsultationModal]);

  if (!isConsultationModalOpen) return null;

  const getTitleAndDesc = () => {
    switch (consultationModalType) {
      case 'assessment':
        return {
          badge: 'ĐÁNH GIÁ NĂNG LỰC VẬN HÀNH',
          title: 'Đăng Ký Đánh Giá Doanh Nghiệp',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.companyName.trim()) {
      showToast('Vui lòng điền đầy đủ các trường bắt buộc!', 'warning');
      return;
    }

    submitConsultation(formData);
    setIsSubmitted(true);
    showToast('Đăng ký thành công! Đội ngũ VMC Group sẽ liên hệ với bạn sớm nhất.', 'success');

    setTimeout(() => {
      setIsSubmitted(false);
      closeConsultationModal();
    }, 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      aria-describedby="consultation-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/75 dark:bg-black/80 backdrop-blur-xs animate-fadeIn overflow-y-auto"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-white dark:bg-[#0D182E] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="bg-[#0B1F3A] dark:bg-[#070E1B] px-6 py-5 text-white relative border-b border-slate-800">
          <button
            type="button"
            onClick={closeConsultationModal}
            className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ tư vấn"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-2 border border-[#155EEF]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            {info.badge}
          </div>
          <h3 id="consultation-modal-title" className="text-xl font-bold text-white tracking-tight">{info.title}</h3>
          <p id="consultation-modal-desc" className="text-slate-300 text-xs mt-1 leading-relaxed">{info.desc}</p>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-lg font-bold text-[#0F172A] dark:text-white">Tiếp nhận yêu cầu thành công!</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Cảm ơn Quý khách <span className="font-semibold text-[#0B1F3A] dark:text-[#06B6D4]">{formData.fullName}</span> từ doanh nghiệp{' '}
              <span className="font-semibold text-[#0B1F3A] dark:text-white">{formData.companyName}</span>. Chuyên gia tư vấn của VMC Group sẽ liên hệ lại qua email{' '}
              <span className="text-[#155EEF] dark:text-[#06B6D4] font-medium">{formData.email}</span> và số điện thoại trong vòng 24 giờ làm việc.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-[#0F172A] dark:text-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="input-fullname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Họ và tên người liên hệ <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    id="input-fullname"
                    ref={firstInputRef}
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-companyname" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Tên doanh nghiệp <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    id="input-companyname"
                    type="text"
                    required
                    placeholder="Công ty Cổ phần / TNHH..."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="input-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email công tác <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    id="input-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Số điện thoại <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    id="input-phone"
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="select-scale" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Quy mô nhân sự
                </label>
                <select
                  id="select-scale"
                  value={formData.companyScale}
                  onChange={(e) => setFormData({ ...formData, companyScale: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-colors"
                >
                  <option value="Dưới 20 nhân sự">Dưới 20 nhân sự</option>
                  <option value="20 - 50 nhân sự">20 - 50 nhân sự</option>
                  <option value="50 - 150 nhân sự">50 - 150 nhân sự</option>
                  <option value="150 - 500 nhân sự">150 - 500 nhân sự</option>
                  <option value="Trên 500 nhân sự">Trên 500 nhân sự</option>
                </select>
              </div>

              <div>
                <label htmlFor="select-industry" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Ngành nghề chính
                </label>
                <select
                  id="select-industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-colors"
                >
                  {industriesSolutions.map((ind) => (
                    <option key={ind.id} value={ind.name}>{ind.name}</option>
                  ))}
                  <option value="Khác">Ngành nghề khác</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="textarea-need" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Nhu cầu hoặc điểm nghẽn vận hành cần giải quyết
              </label>
              <textarea
                id="textarea-need"
                rows={3}
                placeholder="Ví dụ: Cần đồng bộ dữ liệu khách hàng giữa phòng Marketing và Sales, hoặc muốn số hóa quy trình phê duyệt nội bộ..."
                value={formData.needDescription}
                onChange={(e) => setFormData({ ...formData, needDescription: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-colors"
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
                className="flex items-center gap-2 px-6 py-2.5 bg-[#155EEF] hover:bg-[#1048b8] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Xác nhận gửi thông tin</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
