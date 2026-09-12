import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { aiAgentProfiles } from '../../../data/websiteContent';
import {
  ArrowRight, ArrowLeft, Sparkles, CheckCircle2, AlertCircle, ShieldAlert,
  Database, LineChart, Zap, Check, Lock, ChevronRight, Crown
} from 'lucide-react';

export const AiAutomationPage: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = usePublicRouter();

  const segments = currentPath.split('/');
  const agentSlug = segments[2]; // 'ceo', 'sales', etc.

  const activeAgent = aiAgentProfiles.find((a) => a.slug === agentSlug);

  // If viewing a specific AI Agent profile
  if (activeAgent) {
    return (
      <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-12 pb-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <button
              onClick={() => navigate('/ai')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại Mạng lưới AI Copilot</span>
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
              TRỢ LÝ CHUYÊN MÔN
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {activeAgent.name}
            </h1>

            <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
              {activeAgent.tagline}
            </p>

            <div className="pt-2">
              <button
                onClick={() => openConsultationModal('consultation')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Đăng ký tư vấn triển khai {activeAgent.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 8-Block Standard Template */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Block 1: AI X là gì? */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">1. {activeAgent.name} là gì?</h2>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeAgent.definition}
            </p>
          </div>

          {/* Block 2: Vấn đề giải quyết */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
              <AlertCircle className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">2. Bài toán vận hành doanh nghiệp cần giải quyết</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeAgent.businessProblem.map((p, idx) => (
                <li key={idx} className="p-3 bg-rose-50/60 dark:bg-rose-950/40 rounded-xl border border-rose-100 dark:border-rose-900/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Block 3 & 4: Dữ liệu đọc & Khả năng phân tích */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-[#06B6D4]">
                <Database className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">3. Dữ liệu nội bộ AI được phép đọc</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeAgent.dataRead.map((d, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-[#155EEF] dark:text-blue-400">
                <LineChart className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">4. Năng lực phân tích chuyên sâu</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeAgent.analysisCapability.map((a, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-100 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#155EEF] dark:text-blue-400 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Block 5 & 6: Đề xuất & Thực thi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">5. Các đề xuất thông minh cho con người</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeAgent.proposals.map((pr, idx) => (
                  <li key={idx} className="p-2.5 bg-amber-50/60 dark:bg-amber-950/40 rounded-lg border border-amber-100 dark:border-amber-900/60 leading-relaxed">
                    {pr}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Zap className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">6. Phạm vi thực thi tự động hóa</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeAgent.executionScope.map((ex, idx) => (
                  <li key={idx} className="p-2.5 bg-emerald-50/60 dark:bg-emerald-950/40 rounded-lg border border-emerald-100 dark:border-emerald-900/60 leading-relaxed">
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Block 7: RANH GIỚI BẢO MẬT & PHÊ DUYỆT */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#070F1E] text-white border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-rose-400">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">
                  7. Những việc BẮT BUỘC cần con người phê duyệt (Human-in-the-Loop)
                </h3>
              </div>
              <span className="text-[10px] font-mono text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800">
                ZERO UNCHECKED RISK
              </span>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-900/60 text-xs sm:text-sm text-rose-100 leading-relaxed">
              {activeAgent.approvalRequired[0]}
            </div>

            <p className="text-xs text-slate-400 italic">
              * VMC Group tuyệt đối không cho phép AI tự ý xuất bản nội dung công khai, tự ý chuyển khoản ngân hàng, hoặc thay đổi chính sách nếu không có xác nhận của người phụ trách.
            </p>
          </div>

          {/* Block 8: Kết quả đo lường */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Check className="w-5 h-5" />
              <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white">8. Kết quả vận hành đo lường được</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeAgent.expectedResults.map((res, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-indigo-50/50 dark:bg-slate-900/60 border border-indigo-100 dark:border-slate-800 text-xs font-semibold text-indigo-950 dark:text-indigo-200 space-y-1">
                  <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase">CHỈ SỐ 0{idx + 1}</span>
                  <p className="leading-snug">{res}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#155EEF] text-white text-center space-y-4 shadow-lg">
            <h3 className="text-xl font-bold">
              Trang bị {activeAgent.name} cho tổ chức của bạn
            </h3>
            <p className="text-xs text-slate-200 max-w-lg mx-auto">
              Đăng ký để được VMC Group cấu hình trợ lý AI theo đúng bộ dữ liệu và quy trình nội bộ của doanh nghiệp.
            </p>
            <button
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3 bg-white text-[#0B1F3A] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Đăng ký tư vấn giải pháp
            </button>
          </div>
        </div>
      </div>
    );
  }

  // General /ai Overview
  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            MẠNG LƯỚI AI TRỢ LÝ
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI & Tự Động Hóa Doanh Nghiệp
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Triết lý của VMC Group: AI không hoạt động tự do. AI làm việc dựa trên dữ liệu, vai trò, quyền hạn, sự phê duyệt của con người và nhật ký audit log minh bạch.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiAgentProfiles.map((agent) => (
            <div
              key={agent.id}
              onClick={() => navigate(`/ai/${agent.slug}`)}
              className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#155EEF] dark:hover:border-[#06B6D4] hover:shadow-md transition-all cursor-pointer space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#155EEF] dark:text-[#06B6D4] bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full">
                    {agent.role}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">SUPERVISED</span>
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors">
                  {agent.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {agent.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#155EEF] dark:text-[#06B6D4]">
                <span>Xem cơ chế hoạt động</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
