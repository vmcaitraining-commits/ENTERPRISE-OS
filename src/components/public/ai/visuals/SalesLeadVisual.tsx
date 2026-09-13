import React, { useState } from 'react';
import { 
  Flame, Mail, FileText, CheckCircle2, User, Building, Phone, 
  ExternalLink, Send, ShieldCheck, ChevronRight, Sparkles 
} from 'lucide-react';

export const SalesLeadVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'score' | 'quote' | 'email'>('score');
  const [sentStatus, setSentStatus] = useState<boolean>(false);

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm">
      {/* Lead Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 flex items-center justify-center font-bold text-lg shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
                Hot Lead • 92/100
              </span>
              <span className="text-xs text-slate-500">[Kịch bản minh họa] Tiếp nhận qua Webhook</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                [Dữ liệu minh họa]
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
              Cty Cổ phần Kỹ thuật Xây dựng Thăng Long
            </h4>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-3 mt-1">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> Trần Hữu Đức (Giám đốc Điều hành)</span>
              <span className="flex items-center gap-1"><Building className="w-3.5 h-3.5" /> 60 nhân sự / Ngành Xây lắp</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> 0983.xxx.888</span>
            </div>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setActiveTab('score')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'score'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Lý do chấm điểm [Minh họa]
          </button>
          <button
            onClick={() => setActiveTab('quote')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'quote'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Báo giá nháp [Minh họa]
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'email'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Email nháp [Minh họa]
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="my-4">
        {activeTab === 'score' && (
          <div className="space-y-3">
            <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 rounded-xl">
              <div className="text-xs font-semibold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5" /> 3 Căn cứ chấm điểm 92/100 [Kịch bản & dữ liệu minh họa]:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-600 dark:text-amber-400">1.</span>
                  <span><strong>Hành vi website:</strong> 5 lần truy cập trang Bảng giá trong 48h, đã tải brochure giải pháp quản lý công trường.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-600 dark:text-amber-400">2.</span>
                  <span><strong>Chân dung chuẩn:</strong> Quy mô 60 nhân sự, chức danh đăng ký là Giám đốc Điều hành (Cấp ra quyết định cuối cùng).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-600 dark:text-amber-400">3.</span>
                  <span><strong>Mức độ gấp:</strong> Chọn mốc thời gian muốn triển khai là "Trong tháng này" và để lại số điện thoại cá nhân chính xác.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <span className="text-slate-500">Nhu cầu chính ghi nhận:</span>
                <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                  Kiểm soát vượt dự toán vật tư tại 4 công trình đang thi công đồng thời.
                </p>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                <span className="text-slate-500">Gói giải pháp AI gợi ý [Tham khảo]:</span>
                <p className="font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                  ERP Xây lắp Standard (50 User) + Module Kho công trường & Dự toán.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quote' && (
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200 dark:border-slate-700">
              <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-primary" /> Bản thảo báo giá #BG-2026-TL01 [Dữ liệu minh họa]
              </span>
              <span className="text-slate-500">Khung giá niêm yết chuẩn VMC</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex justify-between py-1 border-b border-dashed border-slate-200 dark:border-slate-700">
                <span>1. Bản quyền Cloud ERP Xây Lắp (50 Tài khoản / 12 tháng)</span>
                <span className="font-medium">120.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed border-slate-200 dark:border-slate-700">
                <span>2. Module Quản trị Kho vật tư & Dự toán công trình</span>
                <span className="font-medium">45.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between py-1 border-b border-dashed border-slate-200 dark:border-slate-700">
                <span>3. Dịch vụ Setup, Chuẩn hóa SOP & Đào tạo theo giai đoạn</span>
                <span className="font-medium">35.000.000 VNĐ</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm text-slate-900 dark:text-white">
                <span>Tổng cộng dự kiến [Minh họa] (Chưa VAT):</span>
                <span className="text-primary">200.000.000 VNĐ</span>
              </div>
            </div>
            <div className="text-xs text-slate-500 italic">
              * Báo giá áp dụng chiết khấu 0% theo đúng thẩm quyền cấp chuyên viên. Mức chiết khấu thêm cần Giám đốc Bán hàng phê duyệt.
            </div>
          </div>
        )}

        {activeTab === 'email' && (
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-500">Gửi đến:</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">ductran@thanglongcons.vn</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-500">Tiêu đề:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Giải pháp kiểm soát vượt dự toán vật tư cho Thăng Long Cons - VMC Group</span>
            </div>
            <div className="text-slate-700 dark:text-slate-300 space-y-2 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
              <p>Kính gửi Anh Trần Hữu Đức - Giám đốc Điều hành Thăng Long Cons,</p>
              <p>
                Em là Hoàng từ VMC Group. Em nhận thấy anh đang tìm kiếm giải pháp kiểm soát vượt dự toán vật tư tại các công trường thi công của công ty...
              </p>
              <p>
                Em xin gửi đính kèm bản thảo sơ bộ giải pháp ERP Xây Lắp (50 người dùng) đã bao gồm phân hệ quản lý kho công trình mà anh quan tâm. Em có thể gọi trao đổi nhanh 10 phút với anh vào 14:00 chiều nay được không ạ?
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Checkpoint Footer */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Điểm chốt chặn: AI không tự phát hành báo giá hay email. Sales kiểm tra và bấm gửi.</span>
        </div>

        <div>
          {!sentStatus ? (
            <button
              onClick={() => setSentStatus(true)}
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" /> Chuyên viên duyệt & Gửi email
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-4 h-4" /> Đã gửi email và lưu vết vào CRM
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
