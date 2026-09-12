import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { X, History, Search, Download, Clock, User, Layers } from 'lucide-react';

export const HistoryModal: React.FC = () => {
  const { isHistoryModalOpen, setIsHistoryModalOpen, changeHistory } = useEnterprise();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState<string>('all');

  if (!isHistoryModalOpen) return null;

  const filteredLogs = changeHistory.filter(log => {
    const matchesSearch = 
      log.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.oldValue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.newValue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = selectedTab === 'all' || log.tab === selectedTab;

    return matchesSearch && matchesTab;
  });

  const exportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(changeHistory, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `VMC_CHANGE_HISTORY_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div
      id="modal-history-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={() => setIsHistoryModalOpen(false)}
    >
      <div
        id="modal-history-content"
        className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#06B6D4]">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0B1F3A]">Nhật ký thay đổi (Audit Log)</h3>
              <p className="text-xs text-[#64748B]">Theo dõi các thao tác chỉnh sửa thông tin doanh nghiệp</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={exportJson}
              className="p-2 text-xs font-medium text-[#155EEF] hover:bg-blue-50 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Xuất JSON lịch sử"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Xuất JSON</span>
            </button>
            <button
              onClick={() => setIsHistoryModalOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Đóng lịch sử"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="px-6 py-3 border-b border-[#E2E8F0] bg-white flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm theo trường, giá trị, người sửa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs text-[#0F172A] bg-slate-50 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#155EEF]"
            />
          </div>
          <select
            value={selectedTab}
            onChange={(e) => setSelectedTab(e.target.value)}
            className="text-xs bg-slate-50 border border-[#E2E8F0] rounded-lg px-3 py-1.5 text-[#0F172A] focus:outline-none"
          >
            <option value="all">Tất cả phân hệ</option>
            <option value="Thông tin doanh nghiệp">Thông tin doanh nghiệp</option>
            <option value="Định vị & Chiến lược">Định vị & Chiến lược</option>
            <option value="Nhận diện thương hiệu">Nhận diện thương hiệu</option>
            <option value="Kho ảnh & video">Kho ảnh & video</option>
            <option value="Quản trị dữ liệu">Quản trị dữ liệu</option>
            <option value="Hệ thống">Hệ thống</option>
          </select>
        </div>

        {/* Log list */}
        <div className="p-6 overflow-y-auto space-y-3.5 divide-y divide-[#F1F5F9] flex-1">
          {filteredLogs.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              Không tìm thấy nhật ký thay đổi phù hợp
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div key={log.id} className="pt-3.5 first:pt-0">
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#0B1F3A]">
                      <Layers className="w-3.5 h-3.5 text-[#155EEF]" />
                      {log.tab}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-[#155EEF]">{log.field}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#94A3B8]">
                    <Clock className="w-3 h-3" />
                    {log.timestamp}
                  </span>
                </div>

                <div className="bg-slate-50 rounded-lg p-2.5 text-xs grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5 border border-[#E2E8F0]/60">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">Giá trị trước:</span>
                    <div className="text-slate-600 line-through truncate max-h-12 overflow-hidden">{log.oldValue}</div>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block mb-0.5">Giá trị mới:</span>
                    <div className="text-[#0B1F3A] font-medium truncate max-h-12 overflow-hidden">{log.newValue}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#94A3B8] mt-1.5">
                  <User className="w-3 h-3" />
                  <span>Người thực hiện: <strong className="text-slate-600">{log.user}</strong></span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E2E8F0] bg-slate-50/50 flex items-center justify-between text-xs text-[#64748B]">
          <span>Tổng số: {filteredLogs.length} bản ghi</span>
          <button
            onClick={() => setIsHistoryModalOpen(false)}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-[#0F172A] font-medium rounded-lg transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
