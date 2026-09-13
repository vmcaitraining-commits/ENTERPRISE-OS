import React, { useState } from 'react';
import { 
  DollarSign, CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, 
  FileCheck, ShieldAlert, Sparkles, RefreshCw 
} from 'lucide-react';

export const FinanceReconcileVisual: React.FC = () => {
  const [createdReceipt, setCreatedReceipt] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'reconcile' | 'forecast'>('reconcile');

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" /> Đối soát giao dịch ngân hàng [Minh họa]
            </span>
            <span className="text-xs text-slate-500">Mô phỏng đồng bộ dữ liệu ngân hàng khi được cấu hình</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              [Dữ liệu minh họa]
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
            Ghép Nối Giao Dịch, Xử Lý Ngoại Lệ & Dự Báo Dòng Tiền
          </h4>
        </div>

        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-center text-xs">
          <button
            onClick={() => setActiveTab('reconcile')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'reconcile'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Ghép nối giao dịch [Minh họa]
          </button>
          <button
            onClick={() => setActiveTab('forecast')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'forecast'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Dự báo dòng tiền [Minh họa]
          </button>
        </div>
      </div>

      {activeTab === 'reconcile' ? (
        <div className="space-y-3 text-xs">
          {/* Matched Transaction */}
          <div className="p-3 bg-emerald-50/40 dark:bg-emerald-950/20 rounded-xl border border-emerald-200/70 dark:border-emerald-900/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Giao dịch gợi ý khớp [Kịch bản & dữ liệu minh họa]:
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Độ tin cậy mô phỏng: 99.8%</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
              <div className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 block text-[11px]">Sao kê ngân hàng:</span>
                <span className="font-bold text-slate-900 dark:text-white">+ 45.000.000 VNĐ</span>
                <p className="text-[11px] text-slate-500 mt-0.5">"CTY TNHH TM BINH MINH TT TIEN HOP DONG HD-2026-091"</p>
              </div>
              <div className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 block text-[11px]">Đơn hàng trên CRM:</span>
                <span className="font-bold text-slate-900 dark:text-white">Hợp đồng #HD-2026-091</span>
                <p className="text-[11px] text-slate-500 mt-0.5">Giá trị cần thanh toán: 45.000.000 VNĐ (Khớp chính xác)</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-slate-500 italic">Đề xuất AI: Gợi ý lập phiếu thu nháp để kế toán kiểm tra & duyệt.</span>
              {!createdReceipt ? (
                <button
                  onClick={() => setCreatedReceipt(true)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors flex items-center gap-1"
                >
                  <FileCheck className="w-3.5 h-3.5" /> Xác nhận tạo phiếu thu
                </button>
              ) : (
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Đã tạo phiếu thu #PT-0912-01
                </span>
              )}
            </div>
          </div>

          {/* Exception Transaction */}
          <div className="p-3 bg-amber-50/50 dark:bg-amber-950/20 rounded-xl border border-amber-200/70 dark:border-amber-900/50 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Giao dịch ngoại lệ [Kịch bản minh họa - Cần kế toán xử lý]:
              </span>
              <span className="text-amber-700 dark:text-amber-400 font-semibold">Lệch số tiền: - 250.000 VNĐ</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
              <div className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 block text-[11px]">Sao kê ngân hàng:</span>
                <span className="font-bold text-amber-600">+ 12.250.000 VNĐ</span>
                <p className="text-[11px] text-slate-500 mt-0.5">"AN PHAT CK MUA HANG SO 8821"</p>
              </div>
              <div className="p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 block text-[11px]">Hóa đơn gốc #8821:</span>
                <span className="font-bold text-slate-900 dark:text-white">12.500.000 VNĐ</span>
                <p className="text-[11px] text-rose-500 mt-0.5">Thiếu 250.000 VNĐ (Khả năng khách tự trừ phí bank hoặc chiết khấu)</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-slate-500 italic">Chốt chặn an toàn: AI không tự gán phiếu thu khi số tiền không khớp tuyệt đối.</span>
              <button className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-slate-200 font-medium rounded-lg transition-colors">
                Xử lý thủ công & Gửi yêu cầu Sales
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Cashflow Forecast with Confidence Interval */
        <div className="space-y-3 text-xs">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                Dự báo dòng tiền [Kịch bản mô phỏng minh họa tham khảo]
              </span>
              <span className="text-slate-500">Kịch bản mô phỏng phân tích độ nhạy (khi được cấu hình kết nối đầy đủ dữ liệu)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
              <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 text-[11px]">Kịch bản Cơ sở [Minh họa]:</span>
                <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">+ 520 Triệu VNĐ</div>
                <p className="text-[10px] text-slate-500">Giả định 90% khách hàng trả đúng hạn cam kết</p>
              </div>
              <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 text-[11px]">Kịch bản Thận trọng [Minh họa]:</span>
                <div className="text-base font-bold text-amber-600 mt-0.5">+ 180 Triệu VNĐ</div>
                <p className="text-[10px] text-slate-500">Giả định 2 hợp đồng xây lắp trễ thêm 15 ngày</p>
              </div>
              <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 text-[11px]">Kịch bản Tích cực [Minh họa]:</span>
                <div className="text-base font-bold text-emerald-600 mt-0.5">+ 780 Triệu VNĐ</div>
                <p className="text-[10px] text-slate-500">Giả định thu hồi công nợ cũ trước 30/09</p>
              </div>
            </div>

            <div className="p-2.5 bg-blue-50/60 dark:bg-blue-950/20 rounded-lg border border-blue-200/60 dark:border-blue-900/40 text-slate-700 dark:text-slate-300">
              <strong>Khuyến nghị tham khảo theo kịch bản AI mô phỏng:</strong> Quỹ tiền mặt an toàn trong 21 ngày tới. Tuy nhiên ngày 25/09 có khoản chi lương 450 triệu và thuế VAT 120 triệu; đề xuất Kế toán trưởng đôn đốc thu hồi 2 khoản nợ của Cty Nam An trước ngày 22/09.
            </div>
          </div>
        </div>
      )}

      {/* Checkpoint Footer */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
        <span>Ranh giới an toàn: AI chỉ đọc sao kê và soạn phiếu thu nháp. AI TUYỆT ĐỐI KHÔNG CÓ QUYỀN chuyển tiền hay can thiệp số dư.</span>
      </div>
    </div>
  );
};
