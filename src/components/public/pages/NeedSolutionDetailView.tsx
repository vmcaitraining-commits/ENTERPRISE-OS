import React from 'react';
import { NeedSolution } from '../../../types/website';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import {
  ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2, Database,
  Workflow, Sparkles, Layers, BarChart3, ShieldCheck, Lock,
  ChevronRight, Users, Mic, Globe, Clock, FileCheck
} from 'lucide-react';

interface NeedSolutionDetailViewProps {
  solution: NeedSolution;
}

export const NeedSolutionDetailView: React.FC<NeedSolutionDetailViewProps> = ({ solution }) => {
  const { navigate, openConsultationModal } = usePublicRouter();

  return (
    <div className="space-y-14 sm:space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* 01. HERO */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <button
            onClick={() => navigate('/solutions')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh mục Giải pháp</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GIẢI PHÁP THEO NHU CẦU CHUYỂN ĐỔI</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {solution.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {solution.tagline}
          </p>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-3xl text-xs sm:text-sm text-blue-100/90 leading-relaxed flex items-start gap-3">
            <span className="font-bold text-[#06B6D4] shrink-0 uppercase tracking-wider text-xs mt-0.5">Giá trị cốt lõi:</span>
            <span>{solution.coreValue}</span>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#155EEF] hover:bg-[#1048b8] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Đăng ký tư vấn giải pháp {solution.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/ai-enterprise')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/15"
            >
              <span>Xem Kiến trúc AI ENTERPRISE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        {/* 02. BÀI TOÁN DOANH NGHIỆP */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">Bài toán thực tế doanh nghiệp gặp phải</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Những rào cản và điểm nghẽn vận hành phổ biến khi chưa có giải pháp quản trị chuẩn hóa:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            {solution.problems.map((prob, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-rose-50/50 dark:bg-rose-950/40 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/60">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5"></span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{prob}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 03. GIẢI PHÁP */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/40 dark:from-blue-950/30 dark:to-slate-900/40 border border-blue-100 dark:border-blue-900/40 shadow-2xs space-y-3">
          <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
            <CheckCircle2 className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">Giải pháp từ AI ENTERPRISE</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
            {solution.solutionOverview}
          </p>
        </section>

        {/* 04. DỮ LIỆU */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#06B6D4]">
            <Database className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">Các loại dữ liệu quản trị liên quan</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Dữ liệu được chuẩn hóa, số hóa và lưu trữ tập trung tại cơ sở dữ liệu riêng của doanh nghiệp:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {solution.dataTypes.map((item, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shrink-0 mt-2"></div>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 05. QUY TRÌNH HOẠT ĐỘNG (INPUT -> PROCESS -> AI / AUTOMATION -> HUMAN CONTROL -> OUTPUT) */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
            <Workflow className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">Sơ đồ luồng vận hành chuẩn hóa (5 Bước)</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Mô hình vận hành minh bạch kết hợp chặt chẽ giữa công nghệ tự động hóa và sự kiểm soát của con người:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 pt-3">
            {/* Step 1: Input */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">BƯỚC 1</span>
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400">INPUT</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white">Đầu vào dữ liệu</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{solution.operatingWorkflow.input}</p>
            </div>

            {/* Step 2: Process */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">BƯỚC 2</span>
                <span className="text-[10px] uppercase font-mono font-bold text-slate-400">PROCESS</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white">Quy trình xử lý</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{solution.operatingWorkflow.process}</p>
            </div>

            {/* Step 3: AI / Automation */}
            <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">BƯỚC 3</span>
                <span className="text-[10px] uppercase font-mono font-bold text-indigo-400">AI / AUTO</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-200">AI & Tự động hóa</h3>
              <p className="text-xs text-indigo-900/80 dark:text-indigo-300/80 leading-relaxed">{solution.operatingWorkflow.aiAutomation}</p>
            </div>

            {/* Step 4: Human Control */}
            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300">BƯỚC 4</span>
                <span className="text-[10px] uppercase font-mono font-bold text-amber-500">CONTROL</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-200">Con người kiểm soát</h3>
              <p className="text-xs text-amber-900/80 dark:text-amber-300/80 leading-relaxed">{solution.operatingWorkflow.humanControl}</p>
            </div>

            {/* Step 5: Output */}
            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300">BƯỚC 5</span>
                <span className="text-[10px] uppercase font-mono font-bold text-emerald-400">OUTPUT</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-200">Kết quả đầu ra</h3>
              <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 leading-relaxed">{solution.operatingWorkflow.output}</p>
            </div>
          </div>
        </section>

        {/* 06. CHỨC NĂNG CHÍNH */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
            <Layers className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">Các tính năng & phân hệ chức năng chính</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Được thiết kế thực dụng, dễ hiểu và sẵn sàng cấu hình theo đặc thù vận hành của từng doanh nghiệp:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {solution.keyFeatures.map((feat, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950 text-[#155EEF] dark:text-[#06B6D4] font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] dark:text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 07. AI HỖ TRỢ (Đọc, Phân tích, Đề xuất, Thực thi, Cần duyệt) */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-5">
          <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">Phạm vi trợ lực của AI & Ranh giới kiểm soát</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Triết lý Human-in-the-loop: AI là trợ lý phân tích và chuẩn bị phương án, con người là người phê duyệt và quyết định:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-blue-400 uppercase tracking-wider block">1. Dữ liệu AI được đọc:</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{solution.aiAssistance.reads}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-blue-400 uppercase tracking-wider block">2. Năng lực phân tích:</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{solution.aiAssistance.analyzes}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-blue-400 uppercase tracking-wider block">3. Đề xuất thông minh:</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{solution.aiAssistance.proposes}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-[#155EEF] dark:text-blue-400 uppercase tracking-wider block">4. Phạm vi tự động thực thi:</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{solution.aiAssistance.executes}</p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 md:col-span-2 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">5. Bắt buộc con người phê duyệt:</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 font-medium leading-relaxed">{solution.aiAssistance.requiresApproval}</p>
            </div>
          </div>
        </section>

        {/* 08. KẾT NỐI HỆ THỐNG */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#06B6D4]">
            <Workflow className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">Liên thông trong Kiến trúc Hợp nhất</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Không tạo ốc đảo phần mềm biệt lập; giải pháp chia sẻ dữ liệu trực tiếp với các phân hệ trong AI ENTERPRISE:
          </p>

          <div className="space-y-2.5 pt-2">
            {solution.systemConnections.map((conn, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{conn}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 09. BÁO CÁO / KẾT QUẢ VẬN HÀNH */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#155EEF] dark:text-[#06B6D4]">
            <BarChart3 className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] dark:text-white">Danh mục Báo cáo Quản trị Thời gian thực</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Các loại báo cáo và bảng điều khiển được hệ thống tự động trích xuất từ dữ liệu vận hành thực tế:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {solution.reportTypes.map((rep, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex items-start gap-3">
                <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{rep}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 10. BẢO MẬT & KIỂM SOÁT */}
        <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#070F1E] text-white shadow-md space-y-6 border border-slate-800">
          <div className="flex items-center gap-2.5 text-[#06B6D4]">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="text-lg sm:text-xl font-bold text-white">An ninh dữ liệu & Cơ chế kiểm soát tổ chức</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Bảo vệ tài sản tri thức và dữ liệu kinh doanh của doanh nghiệp bằng 4 lớp kiểm soát nghiêm ngặt:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">1. Phân quyền RBAC</span>
              <p className="text-xs text-slate-300 leading-relaxed">{solution.securityAndGovernance.rbac}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">2. Nhật ký Audit Log</span>
              <p className="text-xs text-slate-300 leading-relaxed">{solution.securityAndGovernance.auditLog}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">3. Quy chế Phê duyệt</span>
              <p className="text-xs text-slate-300 leading-relaxed">{solution.securityAndGovernance.approvalMechanism}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs font-bold text-[#06B6D4] uppercase block">4. Phạm vi Dữ liệu</span>
              <p className="text-xs text-slate-300 leading-relaxed">{solution.securityAndGovernance.dataScope}</p>
            </div>
          </div>
        </section>

        {/* 11. CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1F3A] to-[#155EEF] text-white shadow-xl text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Sẵn sàng chuẩn hóa vận hành với {solution.name}?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Nhận tư vấn khảo sát hiện trạng và thiết kế lộ trình triển khai chi tiết phù hợp với quy mô doanh nghiệp của bạn.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openConsultationModal('consultation')}
              className="px-6 py-3.5 bg-white text-[#0B1F3A] hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Đăng ký tư vấn giải pháp
            </button>
            <button
              onClick={() => navigate('/ai-enterprise')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer border border-white/20"
            >
              Khám phá Kiến trúc AI ENTERPRISE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
