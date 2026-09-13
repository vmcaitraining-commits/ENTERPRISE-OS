import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  ChevronDown, BookOpen, ShieldCheck, HelpCircle, FileText,
  Info, Lock, FileCheck, Eye, Download, AlertCircle, ArrowRight, ExternalLink
} from 'lucide-react';

// Document Resource Item Type
interface DocumentResource {
  id: string;
  title: string;
  category: 'architecture' | 'sop' | 'security';
  categoryLabel: string;
  docType: 'Khung kiến trúc' | 'Tài liệu SOP' | 'Quy chuẩn' | 'Đặc tả API';
  statusBadge: '[Bản mẫu]' | '[Đang cập nhật]' | '[Chưa phát hành]' | '[Cần bổ sung tài liệu]';
  badgeStyle: string;
  formatNote: string;
  description: string;
  previewContent: string;
}

const sampleDocuments: DocumentResource[] = [
  {
    id: 'doc_arch_01',
    title: 'Khung Kiến trúc Tổng thể AI ENTERPRISE Reference Model',
    category: 'architecture',
    categoryLabel: 'Kiến trúc Hệ thống',
    docType: 'Khung kiến trúc',
    statusBadge: '[Bản mẫu]',
    badgeStyle: 'bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] border-blue-200 dark:border-blue-900/60',
    formatNote: 'Bản vẽ tham chiếu (Không cung cấp file tải trực tiếp)',
    description: 'Sơ đồ luồng dữ liệu liên phân hệ, cơ chế phân tách tenant logic và ranh giới an toàn cho mạng lưới AI Copilot.',
    previewContent: `[BẢN MẪU THAM KHẢO KIẾN TRÚC — KHÔNG PHẢI TẬP TIN TẢI VỀ CHÍNH THỨC]
1. Tổng quan kiến trúc: 11 Phân hệ lõi kết nối đồng bộ trên một nguồn dữ liệu duy nhất (Single Source of Truth).
2. Tầng hạ tầng: Cô lập dữ liệu đa tenant (Isolated tenant data space), mã hóa lưu trữ và truyền tải.
3. Tầng trí tuệ: 9 AI Copilots hoạt động trong phạm vi quyền hạn tài khoản (RBAC-bound), audit log 100% truy vấn.
* Lưu ý: Hồ sơ kiến trúc chính thức chỉ được bàn giao cho khách hàng ký kết hợp đồng triển khai.`
  },
  {
    id: 'doc_sop_01',
    title: 'Khung Quy trình Vận hành Chuẩn (SOP) Số hóa Mẫu',
    category: 'sop',
    categoryLabel: 'Quy trình SOP Số',
    docType: 'Tài liệu SOP',
    statusBadge: '[Bản mẫu]',
    badgeStyle: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60',
    formatNote: 'Biểu mẫu khung tham khảo',
    description: 'Bộ biểu mẫu quy trình khung cho các phòng ban Kinh doanh, Marketing, CSKH, Nhân sự, Tài chính và Ban Điều hành.',
    previewContent: `[BẢN MẪU QUY TRÌNH SOP — TÙY BIẾN THEO TỪNG DOANH NGHIỆP]
- Phân hệ Kinh doanh: Tiếp nhận Lead -> Chấm điểm -> Điều phối tự động -> Báo giá chuẩn -> Hợp đồng.
- Phân hệ Marketing: Kênh -> Phễu chuyển đổi -> Tag phân nhóm tự động -> Đồng bộ CRM.
- Phân hệ CSKH: Đa kênh -> Ticket tự động -> Phân bổ theo SLA -> Đánh giá CSAT.
- Phân hệ Tài chính: Dòng tiền thực -> Đối soát hóa đơn -> Cảnh báo ngân sách.
* Lưu ý: Quy trình SOP thực tế được may đo dựa trên kết quả khảo sát hiện trạng của từng tổ chức.`
  },
  {
    id: 'doc_sec_01',
    title: 'Quy chuẩn An ninh, Phân quyền RBAC & Ranh giới Trách nhiệm AI',
    category: 'security',
    categoryLabel: 'An ninh & Bảo mật',
    docType: 'Quy chuẩn',
    statusBadge: '[Đang cập nhật]',
    badgeStyle: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900/60',
    formatNote: 'Tài liệu chuẩn hóa nội bộ',
    description: 'Quy chế phân cấp thẩm quyền tài khoản, cơ chế Human-in-the-Loop và tiêu chuẩn bảo vệ dữ liệu nội bộ doanh nghiệp.',
    previewContent: `[TÀI LIỆU ĐANG TRONG QUÁ TRÌNH CẬP NHẬT NỘI BỘ]
- Nguyên tắc 1: Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.
- Nguyên tắc 2: Con người phê duyệt (Human-in-the-Loop) là điều kiện tiên quyết cho các thao tác tài chính, xóa dữ liệu, gửi email hàng loạt.
- Nguyên tắc 3: Nhật ký kiểm toán bất biến (Immutable Audit Logs) ghi nhận người dùng, thời gian và địa chỉ IP.
* Trạng thái: Đang hoàn thiện các phụ lục kiểm soát bảo mật chuyên sâu.`
  },
  {
    id: 'doc_api_01',
    title: 'Đặc tả Kỹ thuật Tích hợp API & Webhook (RESTful)',
    category: 'architecture',
    categoryLabel: 'Kiến trúc Hệ thống',
    docType: 'Đặc tả API',
    statusBadge: '[Chưa phát hành]',
    badgeStyle: 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900/60',
    formatNote: 'Dự thảo kỹ thuật',
    description: 'Tài liệu hướng dẫn kết nối hệ thống hiện hữu của doanh nghiệp với hệ thống AI ENTERPRISE.',
    previewContent: `[TÀI LIỆU CHƯA PHÁT HÀNH CÔNG KHAI]
- Đặc tả API và Webhook chuẩn hóa cho từng phiên bản release của AI ENTERPRISE.
- Doanh nghiệp có nhu cầu kết nối chuyên biệt sẽ được cung cấp tài liệu kỹ thuật đối ứng trong giai đoạn ký hợp đồng kỹ thuật.`
  }
];

// FAQ Grouped by 3 Categories: Triển khai, Chi phí, Dữ liệu / Bảo mật
interface GroupedFaq {
  category: 'implementation' | 'pricing' | 'security';
  categoryLabel: string;
  items: { q: string; a: string }[];
}

const categorizedFaqs: GroupedFaq[] = [
  {
    category: 'implementation',
    categoryLabel: 'Triển khai & Vận hành',
    items: [
      {
        q: 'VMC Group là ai và định vị như thế nào?',
        a: 'VMC Group là đơn vị xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI. Chúng tôi không định vị là công ty làm website đơn thuần hay bán thêm một công cụ chatbot riêng lẻ, mà đóng vai trò là kiến trúc sư thiết kế và triển khai một hệ điều hành thống nhất cho doanh nghiệp.'
      },
      {
        q: 'AI ENTERPRISE khác gì so với việc mua nhiều phần mềm rời rạc?',
        a: 'Thay vì doanh nghiệp phải mua CRM riêng, phần mềm nhân sự riêng, kế toán riêng rồi loay hoay tìm cách ghép nối với nhiều chi phí và dữ liệu phân mảnh, AI ENTERPRISE cung cấp một kiến trúc lõi thống nhất: một cơ sở dữ liệu, một chuẩn phân quyền, một luồng quy trình và các trợ lý AI thông minh xuyên suốt.'
      },
      {
        q: 'Doanh nghiệp nào phù hợp với giải pháp của VMC Group?',
        a: 'Doanh nghiệp vừa và đang tăng trưởng (khoảng 20 – 500 nhân sự), đã có hoạt động kinh doanh thực tế nhưng bắt đầu gặp giới hạn về con người, dữ liệu, quy trình và sự phối hợp liên phòng ban; có tinh thần chuẩn hóa vận hành và mong muốn ứng dụng công nghệ thực chất.'
      },
      {
        q: 'Thời gian triển khai một dự án kéo dài bao lâu?',
        a: 'Thời gian triển khai cụ thể phụ thuộc vào quy mô phòng ban, mức độ chuẩn hóa dữ liệu hiện tại và yêu cầu may đo quy trình của doanh nghiệp. VMC Group tiến hành qua 6 giai đoạn rõ ràng và luôn thống nhất lộ trình nghiệm thu sau buổi khảo sát hiện trạng thực tế.'
      }
    ]
  },
  {
    category: 'pricing',
    categoryLabel: 'Chi phí & Đầu tư',
    items: [
      {
        q: 'Chi phí triển khai AI ENTERPRISE được tính như thế nào?',
        a: 'Hiện chưa có một bảng giá cố định duy nhất vì AI ENTERPRISE là giải pháp doanh nghiệp may đo theo kiến trúc lõi. Chi phí phụ thuộc vào quy mô nhân sự, số lượng module kích hoạt, khối lượng dữ liệu, mức độ tùy biến và phạm vi chuyển giao. Doanh nghiệp có thể đăng ký tư vấn để nhận cấu hình giải pháp tối ưu.'
      },
      {
        q: 'Doanh nghiệp có phải trả phí ẩn hay chi phí bản quyền định kỳ không?',
        a: 'Mọi khoản chi phí bản quyền phần mềm, chi phí hạ tầng máy chủ đám mây hoặc chi phí API mô hình ngôn ngữ lớn (LLM) đều được bóc tách minh bạch trong bản đề xuất giải pháp sau khảo sát. Doanh nghiệp nắm quyền chủ động tuyệt đối về phương án hạ tầng.'
      }
    ]
  },
  {
    category: 'security',
    categoryLabel: 'Dữ liệu & Bảo mật',
    items: [
      {
        q: 'Triết lý ứng dụng AI của VMC Group là gì?',
        a: 'VMC Group tuân thủ nguyên tắc: AI không tự do hành động. AI hoạt động dựa trên dữ liệu, vai trò, quyền hạn, phê duyệt của con người và nhật ký audit log minh bạch. AI là năng lực vận hành gia tăng sức mạnh cho con người chứ không thay thế hoàn toàn con người.'
      },
      {
        q: 'Dữ liệu của doanh nghiệp có được bảo mật an toàn không?',
        a: 'Doanh nghiệp sở hữu hoàn toàn 100% dữ liệu của mình. Hệ thống áp dụng kiến trúc phân tách không gian dữ liệu riêng biệt cho từng doanh nghiệp, mã hóa lưu trữ, phân quyền đa tầng và nhật ký audit log truy vết mọi thao tác.'
      },
      {
        q: 'Dữ liệu của doanh nghiệp được xử lý và bảo vệ như thế nào khi ứng dụng AI?',
        a: 'Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.'
      }
    ]
  }
];

export const ResourcesPage: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const [activeFaqCategory, setActiveFaqCategory] = useState<'implementation' | 'pricing' | 'security'>('implementation');
  const [openFaqKey, setOpenFaqKey] = useState<string>('implementation-0');
  const [previewDocId, setPreviewDocId] = useState<string | null>(null);

  const toggleFaq = (key: string) => {
    setOpenFaqKey(openFaqKey === key ? '' : key);
  };

  const previewDoc = sampleDocuments.find((d) => d.id === previewDocId);

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Compact Hero: Đưa tài nguyên lên sớm */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-10 pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            TÀI NGUYÊN & TRI THỨC VẬN HÀNH
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kho Tài Liệu Kỹ Thuật, Quy Chuẩn SOP & Câu Hỏi Thường Gặp
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Cung cấp các bản vẽ kiến trúc mẫu, khung tài liệu SOP và các giải đáp thực tế về bảo mật, chi phí và triển khai hệ điều hành AI ENTERPRISE.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Tài liệu Kiến trúc, SOP & An ninh với Preview và trạng thái thật */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase tracking-wider">
                TÀI LIỆU KỸ THUẬT & QUY TRÌNH
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                Tài Liệu Mẫu & Quy Chuẩn Kiến Trúc
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Minh bạch trạng thái tài liệu thực tế
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {sampleDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4 flex flex-col justify-between hover:border-[#155EEF] dark:hover:border-[#06B6D4] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] border border-blue-200 dark:border-blue-900/60">
                      {doc.categoryLabel}
                    </span>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md border ${doc.badgeStyle}`}>
                      {doc.statusBadge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {doc.formatNote}
                  </span>

                  <button
                    type="button"
                    onClick={() => setPreviewDocId(doc.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-[#0B1F3A] dark:text-white transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#155EEF] dark:text-[#06B6D4]" />
                    <span>Xem nội dung mẫu</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Document Preview Modal */}
          {previewDoc && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/70 dark:bg-black/80 backdrop-blur-xs animate-fadeIn">
              <div className="relative w-full max-w-xl bg-white dark:bg-[#0D182E] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden space-y-4 p-6">
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">
                        {previewDoc.categoryLabel}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${previewDoc.badgeStyle}`}>
                        {previewDoc.statusBadge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white mt-1">
                      {previewDoc.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreviewDocId(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    aria-label="Đóng bản xem trước"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-200 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                  {previewDoc.previewContent}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2">
                  <span className="text-[11px] italic">Nội dung mẫu minh họa — Không có link tải trực tiếp</span>
                  <button
                    type="button"
                    onClick={() => setPreviewDocId(null)}
                    className="px-4 py-2 bg-[#155EEF] text-white font-bold rounded-lg hover:bg-[#1048b8] cursor-pointer"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 2: FAQ Nhóm theo 3 Chủ đề rõ ràng: Triển khai, Chi phí, Dữ liệu/Bảo mật */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold font-mono text-[#155EEF] dark:text-[#06B6D4] uppercase tracking-wider">
              GIẢI ĐÁP THẮC MẮC
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
              Câu Hỏi Thường Gặp (FAQ) Phân Loại
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Phân tách câu hỏi theo từng nhóm mối quan tâm chính của lãnh đạo doanh nghiệp.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            {categorizedFaqs.map((cat) => {
              const isActive = activeFaqCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => {
                    setActiveFaqCategory(cat.category);
                    setOpenFaqKey(`${cat.category}-0`);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#155EEF] text-white shadow-xs'
                      : 'bg-white dark:bg-[#0D182E] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-300'
                  }`}
                >
                  {cat.categoryLabel}
                </button>
              );
            })}
          </div>

          {/* FAQ Accordions for active category */}
          <div className="space-y-3">
            {categorizedFaqs
              .find((cat) => cat.category === activeFaqCategory)
              ?.items.map((faq, idx) => {
                const itemKey = `${activeFaqCategory}-${idx}`;
                const isOpen = openFaqKey === itemKey;
                return (
                  <div
                    key={itemKey}
                    className="rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(itemKey)}
                      className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]' : ''
                        }`}
                      />
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
        </section>

        {/* Section 3: NDA & Chính sách Dữ liệu rút gọn */}
        <section id="privacy-policy" className="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
              <Lock className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                Chính Sách Bảo Mật Dữ Liệu & Cam Kết NDA
              </h2>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[11px] font-semibold border border-amber-300 dark:border-amber-800">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>Bản dự thảo — cần xác nhận trước khi công bố chính thức</span>
            </span>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
            <p>
              VMC Group tôn trọng quyền riêng tư và cam kết áp dụng khung bảo vệ dữ liệu nghiệp vụ:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Ký thỏa thuận NDA:</strong> Bảo vệ toàn diện dữ liệu nghiệp vụ, không tiết lộ cho bên thứ ba.</li>
              <li><strong>Quyền sở hữu 100%:</strong> Doanh nghiệp nắm quyền sở hữu cơ sở dữ liệu và tài liệu tri thức.</li>
              <li><strong>Phạm vi xử lý dữ liệu:</strong> Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.</li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-blue-500" />
              <span>Nội dung mang tính nguyên tắc định hướng. Văn bản pháp lý NDA chính thức được ký kết riêng theo từng hợp đồng dịch vụ.</span>
            </div>
          </div>
        </section>

        {/* Section 4: Điều khoản Vận hành Anchor Target */}
        <section id="terms-of-service" className="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400">
              <FileCheck className="w-5 h-5 shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">
                Điều Khoản Vận Hành & Trách Nhiệm Phê Duyệt Con Người
              </h2>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[11px] font-semibold border border-amber-300 dark:border-amber-800">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>Bản dự thảo — cần xác nhận trước khi công bố chính thức</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Các phân hệ AI được triển khai với ranh giới trách nhiệm rõ ràng: AI trợ giúp đọc dữ liệu và dự thảo tác vụ; con người giữ quyền phê duyệt cuối cùng đối với các giao dịch tài chính, xuất bản truyền thông, hoặc ban hành chính sách nhân sự. Các điều khoản dịch vụ và trách nhiệm pháp lý chi tiết sẽ được cụ thể hóa trong văn bản hợp đồng chính thức giữa hai bên.
          </p>
        </section>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-[#0B1F3A] dark:bg-[#0A162B] text-white text-center space-y-4 shadow-xl border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold">
            Cần trao đổi sâu về bài toán bảo mật hoặc quy trình cụ thể?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Đội ngũ tư vấn kiến trúc của VMC Group sẵn sàng khảo sát và xây dựng phương án kiến trúc chi tiết cho doanh nghiệp của bạn.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Đăng ký tư vấn giải pháp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
