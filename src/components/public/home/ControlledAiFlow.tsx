import React, { useState } from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  Sparkles, Database, Brain, FileText, UserCheck, Play,
  ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, AlertCircle
} from 'lucide-react';

interface AiWorkflowExample {
  id: string;
  tabLabel: string;
  roleTitle: string;
  scenario: string;
  steps: {
    title: string;
    description: string;
    subDetail: string;
  }[];
  humanRule: string;
}

const AI_EXAMPLES: AiWorkflowExample[] = [
  {
    id: 'sales_discount',
    tabLabel: 'Kinh doanh: Báo giá & Chiết khấu',
    roleTitle: 'AI Sales Copilot hỗ trợ duyệt chiết khấu hợp đồng',
    scenario: 'Khách hàng đề xuất mức chiết khấu 8% cho đơn hàng 350 triệu đồng.',
    steps: [
      {
        title: '1. Đọc dữ liệu nội bộ',
        description: 'Đọc lịch sử giao dịch khách hàng, hạn mức biên lợi nhuận và tồn kho.',
        subDetail: 'Nguồn: CRM & Sổ giá'
      },
      {
        title: '2. Phân tích ngữ cảnh',
        description: 'Tính toán tỷ suất lợi nhuận ròng và so sánh với các đơn hàng cùng phân khúc.',
        subDetail: 'Biên độ an toàn: Đạt'
      },
      {
        title: '3. Soạn thảo đề xuất',
        description: 'Tạo bản nháp báo giá chiết khấu 8% kèm điều khoản thanh toán tạm ứng 50%.',
        subDetail: 'Chưa gửi khách hàng'
      },
      {
        title: '4. Người duyệt (Human)',
        description: 'Gửi thông báo chờ duyệt đến Giám đốc Kinh doanh; yêu cầu xác nhận trực tuyến.',
        subDetail: 'Chốt chặn bắt buộc'
      },
      {
        title: '5. Thực thi tự động',
        description: 'Sau khi được duyệt, hệ thống xuất PDF hợp đồng chính thức và gửi email cho khách.',
        subDetail: 'Gửi qua email công ty'
      },
      {
        title: '6. Lưu vết Audit Log',
        description: 'Ghi nhật ký vĩnh viễn: Thời gian, IP, người đề xuất và người phê duyệt cuối cùng.',
        subDetail: 'Bất biến, không thể xóa'
      }
    ],
    humanRule: 'BẮT BUỘC: AI không bao giờ tự động phát hành hợp đồng nếu chưa có chữ ký số hoặc sự phê duyệt của người có thẩm quyền.'
  },
  {
    id: 'cs_refund',
    tabLabel: 'CSKH: Khiếu nại & Đổi trả',
    roleTitle: 'AI CSKH Copilot xử lý yêu cầu bồi thường của khách',
    scenario: 'Khách hàng khiếu nại sản phẩm giao trễ 48 giờ và yêu cầu bồi hoàn chi phí vận chuyển.',
    steps: [
      {
        title: '1. Đọc dữ liệu nội bộ',
        description: 'Đọc mã vận đơn, nhật ký theo dõi bưu tá và điều khoản cam kết SLA.',
        subDetail: 'Nguồn: Ticket & Vận đơn'
      },
      {
        title: '2. Phân tích ngữ cảnh',
        description: 'Xác định sự cố chậm trễ do lỗi đối tác vận chuyển; khách hàng thuộc nhóm VIP.',
        subDetail: 'Mức độ ảnh hưởng: Trung bình'
      },
      {
        title: '3. Soạn thảo đề xuất',
        description: 'Đề xuất phương án: Miễn phí vận chuyển lần này và gửi voucher ưu đãi 10%.',
        subDetail: 'Dự thảo theo quy chế'
      },
      {
        title: '4. Người duyệt (Human)',
        description: 'Trưởng bộ phận CSKH rà soát phương án bồi thường và bấm xác nhận.',
        subDetail: 'Chốt chặn thẩm quyền'
      },
      {
        title: '5. Thực thi tự động',
        description: 'Tự động gửi email xin lỗi kèm voucher, chuyển yêu cầu hoàn phí sang kế toán.',
        subDetail: 'Kích hoạt phiếu thu'
      },
      {
        title: '6. Lưu vết Audit Log',
        description: 'Lưu toàn bộ biên bản xử lý vào hồ sơ khách hàng phục vụ đánh giá nhà vận chuyển.',
        subDetail: 'Lưu trữ đối soát'
      }
    ],
    humanRule: 'BẮT BUỘC: Mọi khoản bồi hoàn tài chính hoặc cam kết bồi thường đặc biệt đều phải có xác nhận của cấp quản lý.'
  },
  {
    id: 'finance_cashflow',
    tabLabel: 'Tài chính: Điều hòa dòng tiền',
    roleTitle: 'AI Finance Copilot cảnh báo thâm hụt & nhắc nợ',
    scenario: 'Dự báo dòng tiền phát hiện 3 khoản công nợ lớn sắp quá hạn trong 7 ngày tới.',
    steps: [
      {
        title: '1. Đọc dữ liệu nội bộ',
        description: 'Đọc số dư ngân hàng thực tế, lịch thu công nợ (AR) và lịch thanh toán nhà thầu (AP).',
        subDetail: 'Nguồn: Ngân hàng & Sổ nợ'
      },
      {
        title: '2. Phân tích ngữ cảnh',
        description: 'Mô phỏng dòng tiền 14 ngày tới: Phát hiện nguy cơ thâm hụt nếu 3 khách hàng chậm trả.',
        subDetail: 'Độ chính xác dự báo cao'
      },
      {
        title: '3. Soạn thảo đề xuất',
        description: 'Lập danh sách gửi nhắc nợ lịch sự và đề xuất ưu tiên thanh toán 1 nhà thầu then chốt.',
        subDetail: 'Kế hoạch điều hòa'
      },
      {
        title: '4. Người duyệt (Human)',
        description: 'Kế toán trưởng và Giám đốc Tài chính xem xét và phê duyệt kế hoạch thanh toán.',
        subDetail: 'Chốt chặn ngân sách'
      },
      {
        title: '5. Thực thi tự động',
        description: 'Gửi sao kê công nợ tự động đến kế toán khách hàng, đặt lịch giải ngân ngân hàng.',
        subDetail: 'Gửi theo mẫu định sẵn'
      },
      {
        title: '6. Lưu vết Audit Log',
        description: 'Lưu vết lịch sử cảnh báo, lệnh nhắc nợ và thời điểm xác nhận của kế toán trưởng.',
        subDetail: 'Minh bạch kiểm toán'
      }
    ],
    humanRule: 'BẮT BUỘC: Không có bất kỳ lệnh chuyển tiền hoặc điều chỉnh định mức ngân sách nào được thực hiện tự động mà thiếu chữ ký kế toán.'
  }
];

export const ControlledAiFlow: React.FC = () => {
  const { navigate } = usePublicRouter();
  const [activeExampleId, setActiveExampleId] = useState<string>(AI_EXAMPLES[0].id);

  const activeExample = AI_EXAMPLES.find((e) => e.id === activeExampleId) || AI_EXAMPLES[0];

  return (
    <section className="bg-slate-50 dark:bg-[#081225] border-y border-slate-200 dark:border-slate-800 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-cyan-200 dark:border-cyan-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            TRIẾT LÝ HUMAN-IN-THE-LOOP
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            AI không tự ý hành động — Con người luôn giữ quyền quyết định
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Mọi thao tác của Trợ lý AI đều tuân thủ luồng kiểm soát 6 bước nghiêm ngặt: Đọc dữ liệu, phân tích và soạn thảo đề xuất, nhưng bắt buộc có sự phê duyệt của con người trước khi thực thi.
          </p>
        </div>

        {/* 3 Interactive Scenario Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {AI_EXAMPLES.map((ex) => {
            const isSelected = ex.id === activeExampleId;
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => setActiveExampleId(ex.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0B1F3A] dark:bg-white text-white dark:text-[#0B1F3A] border-transparent shadow-sm'
                    : 'bg-white dark:bg-[#0D182E] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                {ex.tabLabel}
              </button>
            );
          })}
        </div>

        {/* The 6-Step Workflow Visual Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          {/* Active Scenario Title */}
          <div className="pb-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#155EEF] dark:text-[#06B6D4] font-bold uppercase tracking-wider">
                TÌNH HUỐNG THỰC TẾ
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] dark:text-white">
                {activeExample.roleTitle}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Bối cảnh: {activeExample.scenario}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-semibold self-start sm:self-auto">
              <UserCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Chốt chặn con người bắt buộc</span>
            </div>
          </div>

          {/* The 6 Sequential Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {activeExample.steps.map((st, idx) => {
              const isApprovalStep = idx === 3;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border text-xs space-y-2 flex flex-col justify-between ${
                    isApprovalStep
                      ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800/80 shadow-xs'
                      : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-bold uppercase ${
                          isApprovalStep
                            ? 'text-amber-700 dark:text-amber-400'
                            : 'text-[#155EEF] dark:text-[#06B6D4]'
                        }`}
                      >
                        {st.title}
                      </span>
                      {isApprovalStep && (
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                      )}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    {st.subDetail}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Rule Statement */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <AlertCircle className="w-4 h-4 text-[#155EEF] shrink-0" />
              <span>{activeExample.humanRule}</span>
            </div>

            <button
              type="button"
              onClick={() => navigate('/ai')}
              className="inline-flex items-center gap-1 font-bold text-[#155EEF] dark:text-[#06B6D4] hover:underline shrink-0 cursor-pointer"
            >
              <span>Xem tất cả Trợ lý AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
