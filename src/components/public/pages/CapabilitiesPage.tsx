import React from 'react';
import { usePublicRouter } from '../../../context/PublicRouterContext';
import { capabilitiesList, implementationPhases } from '../../../data/websiteContent';
import { ArrowRight, Layers, Server, Users, Globe, Zap, Cpu, BarChart3, GraduationCap } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layers, Server, Users, Globe, Zap, Cpu, BarChart3, GraduationCap
};

export const CapabilitiesPage: React.FC = () => {
  const { navigate, openConsultationModal } = usePublicRouter();

  return (
    <div className="space-y-20 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#0d274c] dark:from-[#060D19] dark:to-[#0B1528] text-white pt-16 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-[#155EEF]/30 text-[#06B6D4] text-xs font-bold uppercase tracking-wider border border-[#155EEF]/40">
            NĂNG LỰC DOANH NGHIỆP
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Năng lực Cốt lõi của VMC Group
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Chúng tôi kết hợp năng lực tư vấn kiến trúc doanh nghiệp sâu sắc cùng kỹ nghệ triển khai công nghệ và AI thực chiến.
          </p>
        </div>
      </section>

      {/* 8 Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white">8 Trụ cột Năng lực Thực thi</h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Được chuẩn hóa từ các dự án chuyển đổi và triển khai hệ điều hành doanh nghiệp thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilitiesList.map((cap) => {
            const IconComp = iconMap[cap.iconName] || Layers;
            return (
              <div key={cap.id} className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#155EEF] dark:hover:border-[#06B6D4] transition-colors">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">{cap.title}</h3>
                  <div className="text-xs font-semibold text-[#06B6D4]">{cap.tagline}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-slate-900 dark:bg-[#060D19] text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl font-extrabold text-white">Năng lực Triển khai 6 Giai đoạn</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Quy trình kiểm soát chất lượng chặt chẽ từ bước khảo sát ban đầu đến nghiệm thu và chuyển giao toàn diện.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {implementationPhases.map((phase) => (
              <div key={phase.phase} className="p-5 rounded-xl bg-slate-800/80 dark:bg-slate-900/60 border border-slate-700 dark:border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-[#06B6D4]">GIAI ĐOẠN 0{phase.phase}</div>
                <h4 className="text-sm font-bold text-white">{phase.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#0B1F3A] dark:bg-[#0A162B] text-white text-center space-y-4 border border-slate-800 shadow-lg">
          <h3 className="text-xl font-bold">Cần trao đổi về năng lực triển khai cho dự án của bạn?</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Đội ngũ tư vấn kiến trúc của VMC Group sẵn sàng đồng hành khảo sát và đánh giá hệ thống hiện tại.
          </p>
          <button
            onClick={() => openConsultationModal('consultation')}
            className="px-6 py-3 bg-[#155EEF] hover:bg-[#1048b8] text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Đăng ký tư vấn giải pháp
          </button>
        </div>
      </section>
    </div>
  );
};
