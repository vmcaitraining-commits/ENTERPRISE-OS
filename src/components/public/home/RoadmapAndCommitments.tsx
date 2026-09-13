import React from 'react';
import {
  Compass, Workflow, Sliders, CheckCircle2, Rocket,
  Shield, FileCheck, Layers, ArrowRight
} from 'lucide-react';

interface RoadmapPhase {
  phaseNum: number;
  timeframe: string;
  name: string;
  focus: string;
  output: string;
}

const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phaseNum: 1,
    timeframe: 'Tuần 1',
    name: 'Khảo sát hiện trạng',
    focus: 'Đánh giá cấu trúc tổ chức, hạ tầng công nghệ và xác định 3 điểm nghẽn ưu tiên cần giải quyết.',
    output: 'Báo cáo đánh giá năng lực & mục tiêu chuyển đổi'
  },
  {
    phaseNum: 2,
    timeframe: 'Tuần 2 - 3',
    name: 'Chuẩn hóa quy trình SOP',
    focus: 'Rà soát dòng chảy dữ liệu giữa Sales, Vận hành, Kế toán và CSKH; xây dựng bản đồ quy trình chuẩn.',
    output: 'Bản đồ quy trình số & luồng dữ liệu liên phòng'
  },
  {
    phaseNum: 3,
    timeframe: 'Tuần 4 - 5',
    name: 'Cấu hình phân hệ lõi',
    focus: 'Kích hoạt Website, CRM, phân quyền RBAC đa tầng và kết nối API/Webhook các cổng tiếp nhận.',
    output: 'Hệ thống vận hành được cấu hình may đo'
  },
  {
    phaseNum: 4,
    timeframe: 'Tuần 6 - 7',
    name: 'Kiểm thử & Đào tạo nhân sự',
    focus: 'Chạy thử nghiệm dữ liệu thực tế, tập huấn theo từng vị trí phòng ban và rà soát chốt chặn an toàn.',
    output: 'Bộ tài liệu SOP và nhân sự vận hành thành thạo'
  },
  {
    phaseNum: 5,
    timeframe: 'Tuần 8+',
    name: 'Vận hành chính thức (Go-Live)',
    focus: 'Đưa hệ thống vào hoạt động sản xuất kinh doanh hàng ngày; giám sát chỉ số và bảo trì liên tục.',
    output: 'Biên bản nghiệm thu & cam kết hỗ trợ SLA'
  }
];

const COMMITMENTS = [
  {
    title: 'Triển khai cuốn chiếu rõ ràng',
    desc: 'Doanh nghiệp nhìn thấy kết quả và đưa từng phân hệ vào áp dụng ngay sau mỗi 2 tuần, không phải chờ đợi dự án kéo dài.',
    icon: Layers
  },
  {
    title: 'Chuyển giao tri thức toàn diện',
    desc: 'Bàn giao đầy đủ video hướng dẫn, tài liệu quy trình chuẩn và đào tạo trực tiếp để đội ngũ nội bộ hoàn toàn làm chủ.',
    icon: FileCheck
  },
  {
    title: 'Sở hữu dữ liệu độc lập 100%',
    desc: 'Toàn bộ dữ liệu khách hàng, tài chính và nghiệp vụ thuộc sở hữu riêng của doanh nghiệp, không phụ thuộc ràng buộc.',
    icon: Shield
  }
];

export const RoadmapAndCommitments: React.FC = () => {
  return (
    <section className="bg-slate-50 dark:bg-[#070E1B] py-16 sm:py-20 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 inline-block px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            LỘ TRÌNH ĐỒNG HÀNH
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Lộ trình triển khai 5 giai đoạn thực tế và minh bạch
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Phương pháp triển khai cuốn chiếu giúp doanh nghiệp nhanh chóng đưa từng bộ phận vào vận hành có kiểm soát, giảm thiểu xáo trộn nội bộ.
          </p>
        </div>

        {/* 5-Phase Horizontal / Responsive Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {ROADMAP_PHASES.map((phase, idx) => (
            <div
              key={phase.phaseNum}
              className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between shadow-2xs relative"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-[#155EEF] text-white text-xs font-bold flex items-center justify-center font-mono">
                    {phase.phaseNum}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-semibold">
                    {phase.timeframe}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#0B1F3A] dark:text-white leading-snug">
                    {phase.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    {phase.focus}
                  </p>
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block text-[10px] uppercase">Kết quả bàn giao:</span>
                <span className="line-clamp-2">{phase.output}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Real-world Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          {COMMITMENTS.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                    {c.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
