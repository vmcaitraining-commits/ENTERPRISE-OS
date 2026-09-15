import React, { useState } from 'react';
import { useI18n } from '../../../../i18n';
import {
  Users, Calendar, CheckSquare, Award, BookOpen,
  Clock, CheckCircle2, AlertCircle, ArrowRight, Star,
  TrendingUp, UserCheck, ShieldCheck, FileText
} from 'lucide-react';

export const HrVisuals: React.FC = () => {
  const { t, language } = useI18n();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<'attendance' | 'onboarding' | 'skillMatrix' | 'training'>('attendance');

  return (
    <div className="space-y-6">
      {/* Sub-nav switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('attendance')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'attendance'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '1. Attendance & Leave Hub' : '1. Lịch công & Đơn nghỉ phép'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('onboarding')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'onboarding'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '2. Onboarding Checklist' : '2. Checklist Onboarding nhân sự'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('skillMatrix')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'skillMatrix'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '3. Department Skill Matrix' : '3. Ma trận kỹ năng (Skill Matrix)'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('training')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'training'
                ? 'bg-white dark:bg-[#0D182E] text-[#155EEF] dark:text-[#06B6D4] shadow-xs border border-slate-200 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white'
            }`}
          >
            {isEn ? '4. Internal Training Tracks' : '4. Lộ trình đào tạo nội bộ'}
          </button>
        </div>
        <span className="text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
          {isEn ? '[Illustrative Data]' : '[Dữ liệu minh họa]'}
        </span>
      </div>

      {/* VIEW 1: ATTENDANCE & LEAVES */}
      {activeTab === 'attendance' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Time Attendance & Leave Management Hub' : 'Bảng chấm công & Quản lý ngày phép (Attendance & Leave Hub)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Reconcile biometric attendance logs and automate annual leave quota balances'
                  : 'Tự động đối soát dữ liệu máy chấm công vân tay/khuôn mặt và tự động tính quỹ phép năm'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
              {isEn ? 'Punctuality Rate Today: 98.4%' : 'Tỷ lệ chuyên cần hôm nay: 98.4%'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Real-time Attendance status */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                {isEn ? 'Attendance Status Today' : 'Trạng thái chấm công hôm nay'}
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200">
                  <span className="text-[10px] text-emerald-600 block">{isEn ? 'On Time' : 'Đúng giờ'}</span>
                  <strong className="font-mono text-base">54</strong>
                </div>
                <div className="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200">
                  <span className="text-[10px] text-amber-600 block">{isEn ? 'Late' : 'Đi muộn'}</span>
                  <strong className="font-mono text-base">2</strong>
                </div>
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-200">
                  <span className="text-[10px] text-blue-600 block">{isEn ? 'Approved Leave' : 'Có phép'}</span>
                  <strong className="font-mono text-base">3</strong>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Automatically reconciled into Finance for monthly automated payroll processing.'
                  : 'Dữ liệu liên thông tự động với phòng Kế toán để kết xuất bảng tính lương cuối tháng.'}
              </p>
            </div>

            {/* Leave requests pending */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2.5 col-span-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                {isEn ? 'Pending Leave Requests Awaiting Approval' : 'Đơn xin nghỉ phép đang chờ duyệt'}
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#0B1F3A] dark:text-white">
                      {isEn ? 'Nguyen Thuy Linh (Marketing)' : 'Nguyễn Thùy Linh (Marketing)'}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      {isEn
                        ? 'Annual leave: 2 days (14/09 – 15/09) · Reason: Family matters'
                        : 'Xin nghỉ phép năm: 2 ngày (14/09 – 15/09) · Lý do: Giải quyết việc gia đình'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400">
                      {isEn ? '9.5 days left' : 'Còn 9.5 ngày phép'}
                    </span>
                    <span className="px-2 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
                      {isEn ? 'Awaiting Manager Review' : 'Chờ Trưởng phòng duyệt'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white dark:bg-[#0B1528] rounded-lg border border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-[#0B1F3A] dark:text-white">
                      {isEn ? 'Hoang Van Duc (Engineering)' : 'Hoàng Văn Đức (Kỹ thuật)'}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      {isEn
                        ? 'Remote work: This Friday · Reason: Client deployment on-site'
                        : 'Xin làm việc từ xa (Remote): Thứ 6 tuần này · Lý do: Hỗ trợ triển khai hệ thống đối tác'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      {isEn ? 'Manager Approved' : 'Trưởng phòng đã duyệt'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ONBOARDING CHECKLIST */}
      {activeTab === 'onboarding' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Standardized New Hire Onboarding Workflow' : 'Quy trình hội nhập nhân sự mới (New Hire Onboarding Checklist)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Automatically triggers standard SOP tasks upon digital contract signature'
                  : 'Tự động kích hoạt chuỗi công việc chuẩn hóa ngay khi ứng viên ký hợp đồng thử việc'}
              </p>
            </div>
            <span className="text-xs font-mono text-blue-600 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-900">
              {isEn ? 'Employee: Do Hoang Nam (Sales Specialist)' : 'Nhân sự: Đỗ Hoàng Nam (Chuyên viên Sales)'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5">
            <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/60 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-800 dark:text-emerald-300">
                  {isEn ? 'Phase 1: Legal Docs' : 'Giai đoạn 1: Hồ sơ'}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="font-bold text-[#0B1F3A] dark:text-white">
                {isEn ? 'Document Submission' : 'Tiếp nhận hồ sơ pháp lý'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'National ID, degree certificates, digital probation agreement signed via OTP.'
                  : 'Căn cước công dân, bằng cấp, hợp đồng thử việc điện tử đã ký OTP.'}
              </p>
            </div>

            <div className="p-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/60 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-800 dark:text-emerald-300">
                  {isEn ? 'Phase 2: RBAC Accounts' : 'Giai đoạn 2: Tài khoản'}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="font-bold text-[#0B1F3A] dark:text-white">
                {isEn ? 'Email & RBAC Roles Provisioned' : 'Cấp email & Phân quyền RBAC'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Corporate email assigned, CRM Sales access role configured, building badge issued.'
                  : 'Cấp email công ty, tài khoản CRM nhóm Bán hàng và cấp thẻ ra vào.'}
              </p>
            </div>

            <div className="p-3.5 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/60 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-blue-800 dark:text-blue-300">
                  {isEn ? 'Phase 3: SOP Training' : 'Giai đoạn 3: Đào tạo'}
                </span>
                <span className="text-[10px] font-bold text-blue-600">
                  {isEn ? 'In progress 75%' : 'Đang học 75%'}
                </span>
              </div>
              <div className="font-bold text-[#0B1F3A] dark:text-white">
                {isEn ? 'Complete 3 SOP Courses' : 'Hoàn thành 3 khóa SOP'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Corporate values, consultative solution pitch guidelines, security regulations.'
                  : 'Quy chuẩn văn hóa doanh nghiệp, kịch bản tư vấn giải pháp và quy chế bảo mật.'}
              </p>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500">
                  {isEn ? 'Phase 4: Evaluation' : 'Giai đoạn 4: Thử việc'}
                </span>
                <span className="text-[10px] font-bold text-slate-400">
                  {isEn ? 'Scheduled' : 'Kế hoạch'}
                </span>
              </div>
              <div className="font-bold text-[#0B1F3A] dark:text-white">
                {isEn ? '60-Day KPI Review' : 'Giao chỉ tiêu & Đánh giá 60 ngày'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Assigned mentor guidance and official evaluation scorecard.'
                  : 'Người hướng dẫn (Mentor) đồng hành kèm cặp và đánh giá kết quả nghiệm thu.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: SKILL MATRIX */}
      {activeTab === 'skillMatrix' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Department Skill Matrix & Gap Analysis' : 'Ma trận kỹ năng năng lực phòng ban (Department Skill Matrix)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Transparent competence gap analysis for targeted training initiatives'
                  : 'Minh bạch khoảng trống năng lực (Skill Gap) để lập kế hoạch đào tạo trúng đích'}
              </p>
            </div>
            <span className="text-xs font-mono text-purple-600 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-900">
              {isEn ? 'Division: Sales & Account Management' : 'Khối: Kinh doanh & Chăm sóc'}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500">
                  <th className="pb-3 font-semibold">{isEn ? 'Member' : 'Nhân sự'}</th>
                  <th className="pb-3 font-semibold">{isEn ? 'Role' : 'Vị trí'}</th>
                  <th className="pb-3 font-semibold">{isEn ? 'Product & SOPs' : 'Hiểu sản phẩm & SOP'}</th>
                  <th className="pb-3 font-semibold">{isEn ? 'Negotiation & Closing' : 'Đàm phán & Chốt deal'}</th>
                  <th className="pb-3 font-semibold">{isEn ? 'AI & CRM Utilization' : 'Sử dụng AI & CRM'}</th>
                  <th className="pb-3 font-semibold">{isEn ? 'Complaint Handling' : 'Xử lý khiếu nại'}</th>
                  <th className="pb-3 font-semibold">{isEn ? 'Tier Level' : 'Xếp hạng năng lực'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                <tr>
                  <td className="py-3 font-bold text-[#0B1F3A] dark:text-white">
                    {isEn ? 'Tran Thu Trang' : 'Trần Thu Trang'}
                  </td>
                  <td className="py-3 text-slate-500">Sales Lead</td>
                  <td className="py-3 font-mono text-amber-500">★★★★★ (5)</td>
                  <td className="py-3 font-mono text-amber-500">★★★★★ (5)</td>
                  <td className="py-3 font-mono text-amber-500">★★★★☆ (4)</td>
                  <td className="py-3 font-mono text-amber-500">★★★★☆ (4)</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      {isEn ? 'Senior Lead' : 'Chuyên gia (Senior)'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[#0B1F3A] dark:text-white">
                    {isEn ? 'Le Minh Tuan' : 'Lê Minh Tuấn'}
                  </td>
                  <td className="py-3 text-slate-500">Account Exec</td>
                  <td className="py-3 font-mono text-amber-500">★★★★☆ (4)</td>
                  <td className="py-3 font-mono text-amber-500">★★★☆☆ (3)</td>
                  <td className="py-3 font-mono text-amber-500">★★★★★ (5)</td>
                  <td className="py-3 font-mono text-amber-500">★★★☆☆ (3)</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                      {isEn ? 'Mid-level' : 'Thành thạo (Mid)'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[#0B1F3A] dark:text-white">
                    {isEn ? 'Do Hoang Nam' : 'Đỗ Hoàng Nam'}
                  </td>
                  <td className="py-3 text-slate-500">{isEn ? 'Intern / Trainee' : 'Tập sự'}</td>
                  <td className="py-3 font-mono text-amber-500">★★★☆☆ (3)</td>
                  <td className="py-3 font-mono text-amber-500">★★☆☆☆ (2)</td>
                  <td className="py-3 font-mono text-amber-500">★★★☆☆ (3)</td>
                  <td className="py-3 font-mono text-amber-500">★★☆☆☆ (2)</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
                      {isEn ? 'In Training' : 'Đang đào tạo'}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 4: TRAINING ROADMAP */}
      {activeTab === 'training' && (
        <div className="p-5 sm:p-6 bg-white dark:bg-[#0D182E] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4]" />
                {isEn ? 'Internal Courses & Examination Tracks' : 'Lộ trình khóa học & Sát hạch nghiệp vụ (Internal Training Tracks)'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isEn
                  ? 'Packaging proprietary knowledge into interactive modules with objective quizzes'
                  : 'Đóng gói tri thức nội bộ thành các bài học tương tác có bài kiểm tra trắc nghiệm'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
              {isEn ? 'Company-wide Completion: 88.6%' : 'Tỷ lệ hoàn thành toàn công ty: 88.6%'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] font-bold text-blue-600 uppercase">
                {isEn ? 'Course 01 · Fundamental' : 'Khóa học 01 · Cơ bản'}
              </span>
              <div className="font-bold text-[#0B1F3A] dark:text-white">
                {isEn ? 'Data Privacy & RBAC Principles' : 'Quy chế Bảo mật dữ liệu & Nguyên tắc RBAC'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Client confidentiality rules, DLP protocols, and principle of least privilege.'
                  : 'Quy tắc bảo vệ thông tin khách hàng, chống thất thoát dữ liệu và phân quyền truy cập tối thiểu.'}
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isEn ? 'Duration: 45 mins' : 'Thời lượng: 45 phút'}</span>
                <span className="text-emerald-600 font-bold">{isEn ? '100% Passed' : '100% Đạt'}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] font-bold text-amber-600 uppercase">
                {isEn ? 'Course 02 · Deep-dive' : 'Khóa học 02 · Chuyên sâu'}
              </span>
              <div className="font-bold text-[#0B1F3A] dark:text-white">
                {isEn ? 'Leveraging AI Copilots in Operations' : 'Khai thác AI Copilot trong xử lý công việc'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Prompt engineering, human-in-the-loop workflows, and QA reviews before client delivery.'
                  : 'Cách viết lệnh chuẩn xác, cơ chế Human-in-the-loop và quy trình duyệt đề xuất trước khi gửi khách.'}
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isEn ? 'Duration: 90 mins' : 'Thời lượng: 90 phút'}</span>
                <span className="text-blue-600 font-bold">{isEn ? '84% Passed' : '84% Đạt'}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <span className="text-[10px] font-bold text-purple-600 uppercase">
                {isEn ? 'Course 03 · Advanced' : 'Khóa học 03 · Nâng cao'}
              </span>
              <div className="font-bold text-[#0B1F3A] dark:text-white">
                {isEn ? 'Operational BI Analytics & Diagnostic Skills' : 'Kỹ năng phân tích báo cáo số liệu vận hành'}
              </div>
              <p className="text-[11px] text-slate-500">
                {isEn
                  ? 'Interpreting BI trends, identifying process bottlenecks, and formulating remediation plans.'
                  : 'Đọc hiểu biểu đồ BI, phân tích xu hướng và đề xuất giải pháp xử lý điểm nghẽn cho quản lý.'}
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isEn ? 'Duration: 120 mins' : 'Thời lượng: 120 phút'}</span>
                <span className="text-amber-600 font-bold">{isEn ? '62% Passed' : '62% Đạt'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
