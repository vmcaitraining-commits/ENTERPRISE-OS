import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { resourcesFaq } from '../../../data/websiteContent';
import { ChevronDown, BookOpen, ShieldCheck, HelpCircle, FileText, Info, Lock, FileCheck } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            TÀI NGUYÊN & TRI THỨC
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tài nguyên, Tri thức & Quy chuẩn Vận hành
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Tổng hợp tri thức về kiến trúc doanh nghiệp AI, cẩm nang triển khai và các chính sách minh bạch bảo mật dữ liệu.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Transparent Notice about Case Studies & Data */}
        <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-xs text-slate-700 dark:text-slate-300 space-y-2 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#0B1F3A] dark:text-white">Chính sách minh bạch dữ liệu & Thỏa thuận NDA:</span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              VMC Group cam kết bảo mật 100% dữ liệu kinh doanh của các đối tác doanh nghiệp. Chúng tôi tuân thủ nghiêm ngặt thỏa thuận không tiết lộ (NDA) và chỉ công bố các bản tóm tắt kiến trúc khi được sự đồng ý bằng văn bản của khách hàng. Tuyệt đối không sử dụng số liệu ảo hay chứng nhận chưa xác thực.
            </p>
          </div>
        </div>

        {/* Section 1: Privacy Policy & NDA Anchor Target */}
        <section id="privacy-policy" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
            <Lock className="w-5 h-5 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
              Chính sách Bảo mật Dữ liệu & Cam kết NDA
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              Đối với VMC Group, dữ liệu doanh nghiệp là tài sản quý giá nhất của khách hàng. Trong mọi dự án tư vấn, triển khai và bảo trì hệ thống AI Enterprise, chúng tôi áp dụng các nguyên tắc bảo mật tối cao:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Quyền sở hữu dữ liệu 100%:</strong> Toàn bộ cơ sở dữ liệu (Database), tài liệu tri thức (Knowledge Base) và lịch sử giao dịch thuộc quyền sở hữu duy nhất của khách hàng. VMC Group không sử dụng dữ liệu này để huấn luyện lại các mô hình AI công cộng.
              </li>
              <li>
                <strong>Ký kết Thỏa thuận Bảo mật (NDA):</strong> Ký kết thỏa thuận ràng buộc pháp lý bảo mật thông tin trước khi bắt đầu khảo sát và tiếp cận hệ thống dữ liệu nghiệp vụ của doanh nghiệp.
              </li>
              <li>
                <strong>Mã hóa đầu cuối & Phân vùng độc lập:</strong> Áp dụng chuẩn mã hóa dữ liệu khi lưu trữ (at-rest) và khi truyền tải (in-transit). Dữ liệu của từng doanh nghiệp được phân vùng vật lý hoặc logic hoàn toàn cô lập (Multi-tenant isolation).
              </li>
              <li>
                <strong>Kiểm toán quyền truy cập (Audit Logs):</strong> Mọi thao tác truy xuất dữ liệu từ đội ngũ kỹ thuật đều được ghi nhật ký bất biến và lưu trữ độc lập để doanh nghiệp kiểm tra bất kỳ lúc nào.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Terms of Service Anchor Target */}
        <section id="terms-of-service" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#06B6D4]">
            <FileCheck className="w-5 h-5 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
              Điều khoản Vận hành & Ranh giới Trách nhiệm
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              Quy chuẩn cung cấp giải pháp và cam kết trách nhiệm giữa VMC Group và doanh nghiệp đối tác:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Cơ chế Phê duyệt Con người (Human-in-the-Loop):</strong> Các phân hệ AI do VMC Group cấu hình đóng vai trò trợ lý hỗ trợ (đọc dữ liệu, tính toán, đề xuất giải pháp). Các hành động trọng yếu (xuất kho, chi ngân sách, ký hợp đồng, xóa dữ liệu) luôn yêu cầu phê duyệt trực tiếp từ nhân sự có thẩm quyền của doanh nghiệp.
              </li>
              <li>
                <strong>Bảo hành & Chuyển giao:</strong> Cam kết bảo hành kỹ thuật, cập nhật bản vá lỗi định kỳ và tổ chức tập huấn chuyển giao tài liệu SOP số chi tiết cho đội ngũ nội bộ trước khi hoàn tất nghiệm thu.
              </li>
              <li>
                <strong>Tính khả dụng của hệ thống:</strong> Mục tiêu hạ tầng đám mây luôn hướng tới mức độ ổn định cao nhất, có phương án dự phòng (backup) dữ liệu định kỳ mỗi ngày để đảm bảo hoạt động kinh doanh không bị gián đoạn.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#0B1F3A] dark:text-white">
            <HelpCircle className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
            <h2 className="text-2xl font-extrabold tracking-tight">Câu hỏi thường gặp (FAQ)</h2>
          </div>

          <div className="space-y-3">
            {resourcesFaq.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-[#0B1F3A] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <BookOpen className="w-5 h-5 text-[#155EEF] dark:text-[#06B6D4]" />
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Tài liệu Kiến trúc</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Các bản thiết kế mẫu và sơ đồ luồng dữ liệu cho hệ thống doanh nghiệp AI.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <FileText className="w-5 h-5 text-[#06B6D4]" />
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Quy trình SOP Số</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Khung biểu mẫu và quy trình vận hành chuẩn cho 6 phòng ban chức năng.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Quy chuẩn An ninh</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Tiêu chuẩn kiểm soát dữ liệu riêng biệt và ranh giới quyền hạn của AI.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#155EEF] text-white text-center space-y-4 shadow-lg">
          <h3 className="text-xl font-bold">
            Cần tư vấn sâu hơn về kiến trúc bảo mật & quy trình triển khai?
          </h3>
          <p className="text-xs text-slate-200 max-w-lg mx-auto leading-relaxed">
            Đội ngũ chuyên gia kiến trúc của VMC Group sẵn sàng đồng hành khảo sát và tư vấn lộ trình chuyển đổi tối ưu nhất cho doanh nghiệp của bạn.
          </p>
          <button
            type="button"
            onClick={() => openConsultationModal('consultation')}
            className="px-6 py-3 bg-white text-[#0B1F3A] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Đăng ký khảo sát & tư vấn
          </button>
        </div>
      </div>
    </div>
  );
};
