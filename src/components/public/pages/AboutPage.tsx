import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { useEnterprise } from '../../../context/EnterpriseContext';
import {
  ShieldCheck, CheckCircle2, Globe, Sparkles, Target, Compass,
  Award, Eye, FileText, ArrowRight, UserCheck
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openConsultationModal } = usePublicRouter();
  const { data } = useEnterprise();

  const companyName = data?.identity?.companyName?.value || 'VMC Group';
  const shortName = data?.identity?.shortName?.value || 'VMC';
  const representative = data?.identity?.representative?.value || 'Vũ Mạnh Cường';
  const market = data?.market?.currentMarket?.value || 'Toàn quốc — Việt Nam';
  const targetAudience = data?.market?.targetAudience?.value || 'Doanh nghiệp vừa và đang tăng trưởng (khoảng 20 – 500 nhân sự)';

  // Find strategic items
  const strat = data?.strategy || [];
  const nature = strat.find((s) => s.id === 'strat_nature')?.content;
  const positioning = strat.find((s) => s.id === 'strat_positioning')?.content;
  const vision = strat.find((s) => s.id === 'strat_vision')?.content;
  const mission = strat.find((s) => s.id === 'strat_mission')?.content;
  const diff = strat.find((s) => s.id === 'strat_diff')?.content;
  const promise = strat.find((s) => s.id === 'strat_promise')?.content;
  const message = strat.find((s) => s.id === 'strat_message')?.content;
  const commRules = strat.find((s) => s.id === 'strat_comm_rules')?.content;

  return (
    <div className="space-y-16 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            HỒ SƠ TỔ CHỨC
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Về {companyName}
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Kiến trúc sư hệ thống đồng hành cùng các doanh nghiệp Việt Nam xây dựng nền tảng vận hành bền vững bằng dữ liệu, công nghệ và trí tuệ nhân tạo.
          </p>
        </div>
      </section>

      {/* Main Corporate Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bản chất & Định vị */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-[#155EEF] dark:text-[#06B6D4]">
              <Compass className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">Bản chất Doanh nghiệp</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {nature || 'VMC Group không phải là công ty làm website đơn thuần hay bán thêm một công cụ chatbot riêng lẻ. Bản chất của VMC Group là đơn vị xây dựng hệ thống doanh nghiệp vận hành bằng dữ liệu, công nghệ và AI.'}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-[#06B6D4]">
              <Target className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">Định vị Doanh nghiệp</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {positioning || 'Hệ điều hành doanh nghiệp bằng AI (AI Enterprise Operating System) — chuẩn hóa từ Website, Workspace, Quản trị, CRM, Quy trình đến Dữ liệu và Trợ lý AI.'}
            </p>
          </div>
        </div>

        {/* Tầm nhìn & Sứ mệnh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1F3A] dark:bg-[#081120] text-white border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-[#06B6D4]">
              <Eye className="w-5 h-5" />
              <h2 className="text-lg font-bold text-white">Tầm nhìn</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {vision || 'Trở thành đơn vị tiên phong tại Việt Nam trong việc kiến tạo và chuyển giao hệ điều hành doanh nghiệp AI, giúp hàng nghìn doanh nghiệp vừa và đang tăng trưởng vận hành tự động, minh bạch và hiệu quả.'}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1F3A] dark:bg-[#081120] text-white border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-[#D9A62E]">
              <Award className="w-5 h-5" />
              <h2 className="text-lg font-bold text-white">Sứ mệnh</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {mission || 'Giải phóng các nhà lãnh đạo và đội ngũ nhân sự khỏi các tác vụ thủ công phân mảnh; chuẩn hóa quy trình và biến dữ liệu thành tài sản sinh lời thực chất.'}
            </p>
          </div>
        </div>

        {/* Điểm khác biệt & Lời hứa thương hiệu */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">Điểm khác biệt & Lời hứa thương hiệu</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs sm:text-sm">
            <div className="space-y-2 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-[#0B1F3A] dark:text-blue-400 text-xs uppercase">Điểm khác biệt cốt lõi:</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {diff || 'Không bán các phần mềm chắp vá. Xây dựng một kiến trúc lõi thống nhất, lấy dữ liệu làm trung tâm và AI làm năng lực gia tăng sức mạnh cho con người.'}
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-[#0B1F3A] dark:text-[#06B6D4] text-xs uppercase">Lời hứa thương hiệu:</span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {promise || 'Vận hành thực chất, dữ liệu minh bạch, an toàn tuyệt đối và đồng hành lâu dài cùng sự tăng trưởng của tổ chức.'}
              </p>
            </div>
          </div>
        </div>

        {/* Nguyên tắc truyền thông & Trách nhiệm */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 dark:bg-[#070F1E] text-white border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">Nguyên tắc Truyền thông & Cam kết Thực tế</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {commRules || 'Truyền thông thực chất, không phóng đại năng lực của AI, không hứa hẹn phi thực tế; tập trung vào kiến trúc hệ thống, dòng chảy quy trình, dữ liệu và hiệu quả vận hành đo lường được.'}
          </p>
        </div>

        {/* Thông tin hồ sơ & Khách hàng mục tiêu */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">Thông tin Tổ chức & Thị trường</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Đại diện doanh nghiệp:</span>
              <div className="font-bold text-[#0B1F3A] dark:text-white mt-0.5">{representative}</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Thị trường phục vụ:</span>
              <div className="font-bold text-[#0B1F3A] dark:text-white mt-0.5">{market}</div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-lg sm:col-span-2 border border-slate-100 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Khách hàng mục tiêu:</span>
              <div className="font-bold text-[#0B1F3A] dark:text-white mt-0.5">{targetAudience}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => openConsultationModal('consultation')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>Đặt lịch trao đổi cùng VMC Group</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
