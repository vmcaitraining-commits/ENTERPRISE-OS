import React, { useState } from 'react';
import {
  ShieldCheck, Lock, Users, KeyRound, Database, FileText,
  AlertTriangle, CheckCircle2, ArrowRight, Eye, UserCheck, History, Sliders
} from 'lucide-react';

interface RbacRow {
  resource: string;
  ceo: string;
  salesLead: string;
  salesRep: string;
  chiefAccountant: string;
  supportAgent: string;
}

const RBAC_MATRIX: RbacRow[] = [
  {
    resource: 'Hồ sơ Khách hàng & Lead (Customer 360)',
    ceo: 'Xem toàn bộ / Xuất báo cáo',
    salesLead: 'Xem toàn bộ / Phân bổ lead',
    salesRep: 'Xem khách phụ trách / Cập nhật',
    chiefAccountant: 'Xem thông tin thanh toán',
    supportAgent: 'Xem để hỗ trợ dịch vụ'
  },
  {
    resource: 'Báo giá & Hợp đồng thương mại',
    ceo: 'Phê duyệt toàn bộ',
    salesLead: 'Duyệt chiết khấu ≤ 15%',
    salesRep: 'Tạo dự thảo báo giá mẫu',
    chiefAccountant: 'Xem hợp đồng đã ký',
    supportAgent: 'Xem điều khoản bảo hành'
  },
  {
    resource: 'Sổ quỹ, Ngân hàng & Thu chi',
    ceo: 'Xem toàn bộ / Duyệt chi lớn',
    salesLead: 'Không được xem',
    salesRep: 'Không được xem',
    chiefAccountant: 'Quản lý thu chi / Lập hóa đơn',
    supportAgent: 'Không được xem'
  },
  {
    resource: 'Đề xuất tạm ứng & Ngân sách phòng',
    ceo: 'Duyệt ngân sách cấp cao',
    salesLead: 'Duyệt đề xuất của phòng',
    salesRep: 'Tạo đề xuất chi tiêu',
    chiefAccountant: 'Kiểm soát hạn mức / Chi tiền',
    supportAgent: 'Tạo đề xuất công cụ'
  },
  {
    resource: 'Báo cáo Doanh thu & Dòng tiền (BI)',
    ceo: 'Xem toàn bộ theo dữ liệu hệ thống',
    salesLead: 'Xem doanh số phòng kinh doanh',
    salesRep: 'Xem doanh số cá nhân',
    chiefAccountant: 'Xem báo cáo tài chính đầy đủ',
    supportAgent: 'Xem báo cáo hỗ trợ'
  },
  {
    resource: 'Cấu hình hệ thống & Audit Log',
    ceo: 'Xem toàn bộ nhật ký kiểm toán',
    salesLead: 'Không được xem',
    salesRep: 'Không được xem',
    chiefAccountant: 'Xem log chứng từ tài chính',
    supportAgent: 'Không được xem'
  }
];

const SECURITY_PILLARS = [
  {
    title: 'Mã hóa truyền tải và bảo vệ dữ liệu',
    desc: 'Mọi luồng dữ liệu truyền tải giữa người dùng và hệ thống đều được mã hóa bằng giao thức bảo mật TLS/HTTPS; dữ liệu lưu trữ tuân thủ các quy chuẩn an toàn.',
    icon: Lock,
    color: 'text-[#155EEF] dark:text-[#06B6D4]'
  },
  {
    title: 'Phân tách dữ liệu theo tổ chức',
    desc: 'Cơ sở dữ liệu của từng doanh nghiệp được phân tách theo tenant và cấu hình truy cập độc lập, đảm bảo dữ liệu thuộc quyền kiểm soát của doanh nghiệp.',
    icon: Database,
    color: 'text-indigo-600 dark:text-indigo-400'
  },
  {
    title: 'Nguyên tắc đặc quyền tối thiểu (Least Privilege)',
    desc: 'Mỗi nhân sự chỉ được cấp quyền truy cập theo phạm vi vị trí công việc, giảm thiểu rủi ro truy cập hoặc trích xuất dữ liệu ngoài thẩm quyền.',
    icon: KeyRound,
    color: 'text-amber-600 dark:text-amber-400'
  },
  {
    title: 'Nhật ký kiểm toán hệ thống (Audit Log)',
    desc: 'Hệ thống hỗ trợ lưu vết các thao tác trọng yếu như đăng nhập, thay đổi trạng thái và xuất báo cáo với thông tin tài khoản và thời điểm thực hiện.',
    icon: History,
    color: 'text-emerald-600 dark:text-emerald-400'
  }
];

export const SecurityAndGovernanceMatrix: React.FC = () => {
  return (
    <section id="security" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          AN NINH & QUẢN TRỊ DỮ LIỆU
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
          Bảo mật cấp độ doanh nghiệp & Phân quyền đa tầng
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Chúng tôi hiểu rằng cơ sở dữ liệu khách hàng, tài chính và bí quyết kinh doanh là tài sản sống còn. Kiến trúc AI ENTERPRISE được thiết kế theo tiêu chuẩn an ninh nghiêm ngặt với cơ chế kiểm soát truy cập và kiểm toán minh bạch.
        </p>
      </div>

      {/* SƠ ĐỒ NGUYÊN LÝ PHÂN QUYỀN: User → Role → Resource → Action → Audit */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#070E1B] border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
            Sơ đồ chu trình kiểm soát quyền truy cập chuẩn mực
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Cơ chế xác thực & ủy quyền 5 lớp
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
          {/* 1. User */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">01</span>
              <UserCheck className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
            </div>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">1. Định danh (User)</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Xác thực tài khoản cá nhân độc lập với mật khẩu mạnh & OTP bảo vệ.
            </p>
          </div>

          {/* 2. Role */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">02</span>
              <Users className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
            </div>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">2. Vai trò (Role)</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Gán vai trò chức danh: Ban giám đốc, Trưởng phòng, Chuyên viên, Kế toán.
            </p>
          </div>

          {/* 3. Resource */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">03</span>
              <Database className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
            </div>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">3. Tài nguyên (Resource)</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Dữ liệu đích: Khách hàng, Hợp đồng, Sổ quỹ, Đề xuất chi, Chỉ số KPI.
            </p>
          </div>

          {/* 4. Action */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#155EEF] dark:text-[#06B6D4]">04</span>
              <KeyRound className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
            </div>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">4. Hành động (Action)</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Kiểm tra quyền: Xem (Read), Tạo (Create), Sửa (Update), Phê duyệt (Approve).
            </p>
          </div>

          {/* 5. Audit Log */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">05</span>
              <History className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">5. Nhật ký (Audit Log)</h4>
            <p className="text-[11px] text-emerald-800/80 dark:text-emerald-300 leading-relaxed">
              Lưu vết thao tác hỗ trợ kiểm toán: Ai, thời gian nào, tác động lên dữ liệu gì.
            </p>
          </div>
        </div>
      </div>

      {/* MA TRẬN PHÂN QUYỀN MẪU (RBAC MATRIX TABLE) */}
      <div className="bg-white dark:bg-[#0D182E] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs space-y-4">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
              Ma trận phân quyền vai trò mẫu (Role-Based Access Control)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Minh họa mức độ truy cập thực tế giữa 5 nhóm vai trò trên các nhóm tài nguyên cốt lõi
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-950 text-[#155EEF] dark:text-[#06B6D4] border border-blue-200 dark:border-blue-800">
            RBAC Model
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-[#0B1F3A] dark:text-slate-200 font-bold">
                <th className="p-4 pl-6 min-w-[220px]">Nhóm Tài Nguyên</th>
                <th className="p-4 min-w-[140px]">CEO / Ban Lãnh Đạo</th>
                <th className="p-4 min-w-[140px]">Trưởng Phòng Sales</th>
                <th className="p-4 min-w-[140px]">Chuyên Viên Sales</th>
                <th className="p-4 min-w-[140px]">Kế Toán Trưởng</th>
                <th className="p-4 min-w-[140px] pr-6">Chuyên Viên CSKH</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70">
              {RBAC_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 pl-6 font-semibold text-[#0B1F3A] dark:text-white">
                    {row.resource}
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] font-medium text-[11px]">
                      {row.ceo}
                    </span>
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                      {row.salesLead}
                    </span>
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                      {row.salesRep}
                    </span>
                  </td>
                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-medium text-[11px]">
                      {row.chiefAccountant}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-slate-700 dark:text-slate-300">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                      {row.supportAgent}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VÍ DỤ QUY TRÌNH PHÊ DUYỆT ĐA CẤP THỰC TẾ (MULTI-LEVEL APPROVAL) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/30 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-6">
        <div className="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/60 pb-3">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>Kịch bản minh họa: Quy trình phê duyệt đa cấp (Multi-level Approval)</span>
          </div>
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/80 text-amber-800 dark:text-amber-200">
            Tình huống minh họa: Chiết khấu đơn hàng 18% (&gt; Hạn mức 15%)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-amber-200/80 dark:border-amber-900/40 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-400">Bước 1</span>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">NVKD lập đề xuất</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Tạo báo giá và gửi yêu cầu chiết khấu 18% kèm lý do khách hàng cam kết ký hợp đồng 2 năm.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-amber-200/80 dark:border-amber-900/40 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-400">Bước 2</span>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">Khóa tự động & Gán duyệt</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Hệ thống phát hiện vượt trần 15%, tự động khóa lệnh xuất hợp đồng và gửi thông báo cho Trưởng phòng Sales.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-amber-200/80 dark:border-amber-900/40 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-400">Bước 3</span>
            <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white">Trưởng phòng duyệt sơ bộ</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Trưởng phòng kiểm tra tỷ suất lợi nhuận gộp, ký nháy đề xuất và chuyển tiếp lên Tổng Giám Đốc.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D182E] border border-emerald-300 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/30 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">Bước 4 (Chốt)</span>
            <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">Tổng Giám Đốc ký số</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              CEO xem xét trên ứng dụng điện thoại và xác nhận bằng OTP. Báo giá tự động mở khóa gửi cho khách hàng.
            </p>
          </div>
        </div>
      </div>

      {/* 4 TRỤ CỘT BẢO MẬT CHUẨN MỰC (KHÔNG BỊA ĐẶT CHỨNG CHỈ ẢO, KHÔNG NÓI AN TOÀN TUYỆT ĐỐI) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SECURITY_PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs"
            >
              <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 w-fit ${pillar.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white leading-snug">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
