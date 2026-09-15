import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useI18n } from '../../../i18n';
import { copilotDetailedMap } from '../../../data/aiCopilotDetailedData';
import { CopilotDetailView } from '../ai/CopilotDetailView';
import {
  ArrowRight, ArrowLeft, Sparkles, CheckCircle2, AlertTriangle, ShieldAlert,
  Database, LineChart, Zap, Check, Lock, ChevronRight, ShieldCheck, FileSpreadsheet,
  Users, Activity, PhoneCall, GitBranch, Search, DollarSign, Target
} from 'lucide-react';

export const AiAutomationPage: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = usePublicRouter();
  const { t } = useI18n();

  const segments = currentPath.split('/');
  const agentSlug = segments[2]; // 'ceo', 'sales', etc.

  const detailedCopilot = agentSlug ? copilotDetailedMap[agentSlug] : null;

  // If viewing a specific AI Copilot profile with full 8-section rich UI
  if (detailedCopilot) {
    const localizedCopilotName = t(`aiCopilots.copilots.${detailedCopilot.slug}.name`, detailedCopilot.name);
    return (
      <div className="space-y-12 pb-24 text-slate-900 dark:text-slate-100 transition-colors">
        {/* Navigation Breadcrumb Bar */}
        <section className="bg-slate-900 text-white pt-8 pb-10 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate('/ai')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-white transition-colors cursor-pointer mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('aiCopilots.detail.backToNetwork', 'Quay lại Mạng lưới 9 AI Copilot')}</span>
            </button>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="cursor-pointer hover:text-white" onClick={() => navigate('/')}>{t('nav.home', 'Trang chủ')}</span>
              <span>/</span>
              <span className="cursor-pointer hover:text-white" onClick={() => navigate('/ai')}>{t('nav.aiCopilot', 'AI Copilot')}</span>
              <span>/</span>
              <span className="text-white font-semibold">{localizedCopilotName}</span>
            </div>
          </div>
        </section>

        {/* 8-Section Standard & Specialized Architecture */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CopilotDetailView
            data={detailedCopilot}
            onOpenConsultation={(topic) => openConsultationModal('consultation')}
            onNavigate={(path) => navigate(path)}
          />
        </main>
      </div>
    );
  }

  // 9 Copilots Overview list with specific output badges
  const copilotOverviewList = [
    {
      slug: 'ceo',
      name: 'AI CEO Copilot',
      role: 'Điều hành Cấp cao',
      outputPreview: 'Morning Brief tổng hợp chỉ số, 2 bất thường dòng tiền & dự thảo thông báo họp giao ban.',
      targetUser: 'CEO, Chủ tịch HĐQT, COO, Ban Thư ký',
      icon: Activity,
      color: 'text-amber-500'
    },
    {
      slug: 'sales',
      name: 'AI Sales Copilot',
      role: 'Kinh doanh & Bán hàng',
      outputPreview: 'Thẻ chấm điểm Lead (92/100 kèm 3 lý do) + Bản thảo Báo giá sơ bộ & Email gửi khách.',
      targetUser: 'Giám đốc Kinh doanh, Trưởng nhóm Sales, Chuyên viên B2B',
      icon: Target,
      color: 'text-orange-500'
    },
    {
      slug: 'marketing',
      name: 'AI Marketing Copilot',
      role: 'Tiếp thị & Tăng trưởng',
      outputPreview: 'Bảng so sánh CAC 3 kênh + Đề xuất dồn ngân sách + Hàng đợi kiểm duyệt bài viết chuẩn brand.',
      targetUser: 'CMO, Trưởng phòng Marketing, Media Buyer, Content Creator',
      icon: LineChart,
      color: 'text-blue-500'
    },
    {
      slug: 'customer-service',
      name: 'AI CSKH Copilot',
      role: 'Hỗ trợ & Hậu mãi',
      outputPreview: 'Phân loại Ticket P1/P2/P3 + Câu trả lời trích dẫn nguồn SOP-CS-04 + Nút chuyên viên duyệt gửi.',
      targetUser: 'Trưởng phòng CSKH, Chuyên viên Hỗ trợ, Đội ngũ Giải quyết khiếu nại',
      icon: Users,
      color: 'text-indigo-500'
    },
    {
      slug: 'hr',
      name: 'AI HR Copilot',
      role: 'Nhân sự & Hiệu suất',
      outputPreview: 'Bảng công ngoại lệ (quên quẹt vân tay) + Onboarding checklist 5 bước + Ma trận Skill Gap.',
      targetUser: 'CHRO, Trưởng phòng HCNS, C&B, Cán bộ Đào tạo nội bộ',
      icon: Users,
      color: 'text-emerald-500'
    },
    {
      slug: 'finance',
      name: 'AI Finance Copilot',
      role: 'Kế toán & Dòng tiền',
      outputPreview: 'Ghép giao dịch sao kê với mã đơn + Phát hiện lệch số tiền + Dự báo dòng tiền có dải bất định.',
      targetUser: 'CFO, Kế toán trưởng, Kế toán công nợ, Thu - Chi',
      icon: DollarSign,
      color: 'text-teal-500'
    },
    {
      slug: 'voice',
      name: 'AI Voice Copilot',
      role: 'Thoại Tự động Có Kiểm soát',
      outputPreview: 'Cây hội thoại nhắc lịch bảo dưỡng, nhận diện xin dời giờ và hỗ trợ chuyển cuộc gọi sang nhân viên phù hợp theo kịch bản điều hướng.',
      targetUser: 'COO, Quản lý Call Center, Lễ tân đặt lịch',
      icon: PhoneCall,
      color: 'text-cyan-500'
    },
    {
      slug: 'workflow',
      name: 'AI Workflow Copilot',
      role: 'Tự động hóa SOP',
      outputPreview: 'Sơ đồ luồng phát hiện điểm nghẽn đỏ (chờ 18.5h) + Đề xuất ủy quyền phụ giải tỏa 7 đơn hàng.',
      targetUser: 'COO, Trưởng phòng QA/QC, Quản lý quy trình liên phòng ban',
      icon: GitBranch,
      color: 'text-rose-500'
    },
    {
      slug: 'rag',
      name: 'AI Search & RAG',
      role: 'Tra cứu Tri thức Nội bộ',
      outputPreview: 'Câu hỏi → Đoạn nguồn kèm số trang → Câu trả lời có kiểm chứng (Minh bạch từ chối khi thiếu nguồn).',
      targetUser: 'Toàn thể Cán bộ Nhân viên, Pháp chế, Thư ký, Kỹ thuật',
      icon: Search,
      color: 'text-purple-500'
    }
  ];

  // General /ai Overview Page
  return (
    <div className="space-y-16 pb-24 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider border border-primary/30">
            <Sparkles className="w-3.5 h-3.5" />
            HỆ SINH THÁI 9 AI COPILOT DOANH NGHIỆP
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Mạng Lưới AI Trợ Lý Nghiệp Vụ Có Kiểm Soát
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Mỗi vị trí trợ lý được thiết kế chuyên biệt cho từng nghiệp vụ: Đọc dữ liệu sạch, tổng hợp thông tin, chuẩn bị bản thảo có trích nguồn và <strong>luôn có con người làm chốt chặn phê duyệt cuối cùng (Human-in-the-Loop)</strong>.
          </p>
          <div className="pt-2">
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs w-full">
              <div className="text-slate-300">
                <span className="font-semibold text-primary-light">Phân biệt vai trò:</span> Đây là <strong>Danh mục 9 Trợ lý AI Copilot chuyên trách</strong> theo vị trí tác nghiệp. Nếu doanh nghiệp cần tìm hiểu về <strong>kiến trúc giải pháp mạng lưới AI tổng thể, liên thông 11 phân hệ và ranh giới an toàn hệ thống</strong>, vui lòng xem Giải pháp Mạng lưới AI Agent.
              </div>
              <button
                onClick={() => navigate('/solutions/ai-agent')}
                className="shrink-0 inline-flex items-center gap-1 font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
              >
                <span>Xem Giải pháp Mạng lưới AI Agent</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Governance & Guardrails Layer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Nguyên tắc an toàn vận hành</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Lớp Kiểm Soát & Ranh Giới An Toàn Chung (Guardrails Layer)
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Áp dụng xuyên suốt cho toàn bộ 9 trợ lý AI trong hệ thống doanh nghiệp:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Lock className="w-4 h-4" /> Phân quyền RBAC
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Chỉ đọc dữ liệu trong phạm vi chức vụ. Tuyệt đối không đọc trộm dữ liệu mật phòng ban khác.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" /> Human-in-the-Loop
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                AI chỉ soạn thảo bản nháp. Không tự ý chuyển khoản, không tự xuất bản bài viết, không tự ký duyệt.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <FileSpreadsheet className="w-4 h-4" /> Nhật ký Audit Log
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Các hoạt động quan trọng có thể được ghi nhận vào nhật ký kiểm toán theo cấu hình hệ thống, phục vụ truy vết và đối soát.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <Database className="w-4 h-4" /> Quản Trị Dữ Liệu
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Dữ liệu được phân tách theo tenant, phạm vi truy cập và cấu hình của hệ thống. Dữ liệu được xử lý theo phạm vi quyền truy cập và chính sách của mô hình hoặc nhà cung cấp được cấu hình cho hệ thống.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Specialized Copilot Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Danh mục 9 Copilot</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Khám Phá Chi Tiết Từng Vị Trí AI Copilot
            </h2>
          </div>
          <div className="text-xs text-slate-500">
            Bấm vào từng trợ lý để xem Output mẫu, Bảng so sánh trước/sau & Lộ trình Pilot theo giai đoạn
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copilotOverviewList.map((agent) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={agent.slug}
                onClick={() => navigate(`/ai/${agent.slug}`)}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary dark:hover:border-primary hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {agent.role}
                    </span>
                    <IconComponent className={`w-5 h-5 ${agent.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {agent.name}
                  </h3>

                  {/* Output Preview Box */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <span className="font-semibold text-slate-900 dark:text-white block text-[11px] text-primary">
                      Output đặc thù của Copilot:
                    </span>
                    <p className="line-clamp-2 leading-relaxed italic">
                      "{agent.outputPreview}"
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Dành cho: {agent.targetUser}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Xem 8 phần chi tiết & Output mẫu</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Pilot Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-primary/80 text-white flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Bạn Cần Tư Vấn Thiết Lập Một Gói Pilot 4 Tuần?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              VMC Group cung cấp dịch vụ đánh giá mức độ sẵn sàng dữ liệu, số hóa kho tri thức và thiết lập các ngưỡng an toàn phê duyệt trước khi đưa AI vào hỗ trợ nhân sự thực tế.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm rounded-xl shadow-lg transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Đăng ký khảo sát dữ liệu & Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
