import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { StatusBadge } from '../common/StatusBadge';
import {
  Activity, AlertTriangle, CheckCircle, Clock, Download, RefreshCw,
  FileJson, FileSpreadsheet, ArrowRight, ShieldCheck, Database
} from 'lucide-react';

export const TabGovernance: React.FC = () => {
  const {
    data,
    mediaList,
    stats,
    changeHistory,
    resetToDefault,
    showToast
  } = useEnterprise();
  const { navigate } = usePublicRouter();

  const tabIndexToRoute: Record<number, string> = {
    1: '/admin/company/overview',
    2: '/admin/company/profile',
    3: '/admin/company/strategy',
    4: '/admin/company/products-market',
    5: '/admin/company/brand',
    6: '/admin/company/media',
    7: '/admin/company/data-review'
  };

  // List of fields that need attention
  const attentionFields = [
    {
      tab: 'Hồ sơ doanh nghiệp',
      tabIndex: 2,
      field: 'Tên pháp lý',
      status: data.legal.legalName.status,
      issue: 'Chưa có giấy phép đăng ký kinh doanh chính thức, đang dùng thương hiệu',
      action: 'Bổ sung khi có GPKD'
    },
    {
      tab: 'Hồ sơ doanh nghiệp',
      tabIndex: 2,
      field: 'Mã số doanh nghiệp',
      status: data.legal.businessCode.status,
      issue: 'Chưa có mã số doanh nghiệp',
      action: 'Bổ sung mã ĐKKD'
    },
    {
      tab: 'Hồ sơ doanh nghiệp',
      tabIndex: 2,
      field: 'Mã số thuế',
      status: data.legal.taxCode.status,
      issue: 'Chưa có mã số thuế chính thức',
      action: 'Bổ sung MST'
    },
    {
      tab: 'Hồ sơ doanh nghiệp',
      tabIndex: 2,
      field: 'Số điện thoại',
      status: data.contact.phone.status,
      issue: 'Cần kiểm tra lại định dạng 11 số (09632432052) trước khi công bố',
      action: 'Chuẩn hóa định dạng'
    },
    {
      tab: 'Hồ sơ doanh nghiệp',
      tabIndex: 2,
      field: 'Địa chỉ trụ sở',
      status: data.contact.address.status,
      issue: 'Chưa cập nhật địa chỉ trụ sở văn phòng chính thức',
      action: 'Cập nhật địa chỉ'
    },
    {
      tab: 'Sản phẩm & Thị trường',
      tabIndex: 4,
      field: 'Bảng khung giá tham khảo',
      status: 'Cần bổ sung' as const,
      issue: 'Chưa có khung khoảng giá định hướng theo quy mô doanh nghiệp',
      action: 'Bổ sung khung ước tính'
    }
  ];

  // Export handlers
  const handleExportAllJson = () => {
    const payload = {
      enterpriseProfile: data,
      mediaLibrary: mediaList,
      auditHistory: changeHistory,
      exportedAt: new Date().toISOString(),
      schemaVersion: '1.0.0-vmc'
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VMC_ENTERPRISE_FULL_BACKUP_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Đã xuất toàn bộ hồ sơ và dữ liệu JSON!', 'success');
  };

  const handleExportMediaCsv = () => {
    const headers = ['ID', 'Tên', 'Loại', 'Nguồn', 'URL', 'Danh mục', 'Tags', 'Trạng thái', 'Vị trí đề xuất'];
    const rows = mediaList.map(m => [
      m.id,
      `"${m.title.replace(/"/g, '""')}"`,
      m.type,
      m.source,
      `"${m.url}"`,
      m.category,
      `"${m.tags.join(';')}"`,
      m.status,
      `"${m.suggestedPlacements.join(';')}"`
    ]);
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VMC_MEDIA_LIBRARY_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Đã xuất danh sách Media Library ra file CSV!', 'success');
  };

  const handleResetData = () => {
    if (window.confirm('CẢNH BÁO: Thao tác này sẽ đặt lại toàn bộ dữ liệu về trạng thái ban đầu của VMC Group V1. Bạn có chắc chắn muốn tiếp tục?')) {
      resetToDefault();
    }
  };

  return (
    <div id="tab-content-governance" className="space-y-8">
      {/* Section A: Data Health Score */}
      <div id="section-data-health" className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
        <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#F1F5F9]">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0B1F3A]">A. Chỉ số hoàn thiện dữ liệu (Data Health Score)</h3>
            <p className="text-xs text-[#64748B]">Đánh giá tính sẵn sàng của thông tin cho hệ thống AI và truyền thông</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 flex flex-col justify-between">
            <span className="text-xs text-blue-800 font-semibold">Tỷ lệ hoàn thiện hồ sơ</span>
            <div className="my-2">
              <span className="text-3xl font-black text-[#155EEF]">{stats.completionPercentage}%</span>
            </div>
            <div className="w-full bg-blue-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#155EEF] h-full" style={{ width: `${stats.completionPercentage}%` }} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60 flex flex-col justify-between">
            <span className="text-xs text-emerald-800 font-semibold">Trường đã xác nhận</span>
            <div className="my-2">
              <span className="text-3xl font-black text-emerald-700">{stats.verifiedFields}</span>
            </div>
            <span className="text-[11px] text-emerald-600">Đủ điều kiện đưa vào AI Website</span>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 flex flex-col justify-between">
            <span className="text-xs text-amber-800 font-semibold">Trường cần rà soát / bổ sung</span>
            <div className="my-2">
              <span className="text-3xl font-black text-amber-700">{stats.needsReviewFields}</span>
            </div>
            <span className="text-[11px] text-amber-700">Cần xác minh trước khi công bố</span>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/60 flex flex-col justify-between">
            <span className="text-xs text-rose-800 font-semibold">Trường chưa có dữ liệu</span>
            <div className="my-2">
              <span className="text-3xl font-black text-rose-700">{stats.missingFields}</span>
            </div>
            <span className="text-[11px] text-rose-600">Pháp lý / GPKD / MST</span>
          </div>
        </div>
      </div>

      {/* Section B: Bảng danh sách các trường cần bổ sung */}
      <div id="section-actionable-items" className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
        <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#F1F5F9]">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0B1F3A]">B. Danh sách các trường cần bổ sung & chuẩn hóa</h3>
            <p className="text-xs text-[#64748B]">Hành động ngay để đưa chỉ số hoàn thiện dữ liệu lên 100%</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-[#64748B] uppercase font-semibold border-b border-[#E2E8F0] text-[11px]">
              <tr>
                <th className="py-2.5 px-3">Phân hệ</th>
                <th className="py-2.5 px-3">Tên trường</th>
                <th className="py-2.5 px-3">Trạng thái</th>
                <th className="py-2.5 px-4">Lý do / Hướng dẫn</th>
                <th className="py-2.5 px-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9] text-[#0F172A]">
              {attentionFields.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-3 font-semibold text-[#155EEF]">{item.tab}</td>
                  <td className="py-3 px-3 font-bold text-[#0B1F3A]">{item.field}</td>
                  <td className="py-3 px-3">
                    <StatusBadge status={item.status} size="sm" />
                  </td>
                  <td className="py-3 px-4 text-[#64748B]">{item.issue}</td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => navigate(tabIndexToRoute[item.tabIndex] || '/admin/company/profile')}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#155EEF] hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                    >
                      <span>Cập nhật</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section C: Export Tools & Backup */}
      <div id="section-export-tools" className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
        <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#F1F5F9]">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0B1F3A]">C. Xuất dữ liệu & Sao lưu (Backup & Export)</h3>
            <p className="text-xs text-[#64748B]">Trích xuất hồ sơ dưới các định dạng chuẩn để phục vụ tích hợp</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-[#E2E8F0] bg-slate-50/50 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#155EEF] flex items-center justify-center mb-3">
                <FileJson className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0B1F3A] mb-1">Toàn bộ hồ sơ (JSON)</h4>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Bao gồm Profile, Định vị, Sản phẩm, Bảng màu, Media Library và Lịch sử cập nhật.
              </p>
            </div>
            <button
              onClick={handleExportAllJson}
              className="w-full py-2 bg-[#0B1F3A] hover:bg-[#155EEF] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải tệp JSON</span>
            </button>
          </div>

          <div className="p-4 rounded-xl border border-[#E2E8F0] bg-slate-50/50 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0B1F3A] mb-1">Kho tài nguyên (CSV)</h4>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Trích xuất danh mục hình ảnh và video cùng đầy đủ thẻ phân loại, Alt Text và URL.
              </p>
            </div>
            <button
              onClick={handleExportMediaCsv}
              className="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải file CSV</span>
            </button>
          </div>

          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center mb-3">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-rose-950 mb-1">Khôi phục dữ liệu gốc</h4>
              <p className="text-xs text-rose-700 leading-relaxed mb-4">
                Xóa tất cả các thay đổi tùy biến tạm thời và khôi phục dữ liệu chuẩn từ nguồn VMC Group V1.
              </p>
            </div>
            <button
              onClick={handleResetData}
              className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Đặt lại về dữ liệu gốc</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
