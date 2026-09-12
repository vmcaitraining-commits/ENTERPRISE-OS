import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { MediaItem, MediaType, MediaStatus, MediaCategory } from '../../types/enterprise';
import { StatusBadge } from '../common/StatusBadge';
import { MediaDetailDrawer } from '../media/MediaDetailDrawer';
import { AddMediaModal } from '../media/AddMediaModal';
import {
  Search, Plus, LayoutGrid, List, Filter, Video, Image as ImageIcon,
  Copy, ExternalLink, Archive, Sparkles, CheckCircle2, ChevronRight, Play
} from 'lucide-react';

const CATEGORY_OPTIONS: { label: string; value: string }[] = [
  { label: 'Tất cả danh mục', value: 'all' },
  { label: 'Logo', value: 'Logo' },
  { label: 'Brand', value: 'Brand' },
  { label: 'AI Enterprise', value: 'AI Enterprise' },
  { label: 'Product', value: 'Product' },
  { label: 'Website Hero', value: 'Website Hero' },
  { label: 'Website Banner', value: 'Website Banner' },
  { label: 'Company', value: 'Company' },
  { label: 'Team', value: 'Team' },
  { label: 'Case Study', value: 'Case Study' },
  { label: 'Other', value: 'Other' }
];

export const TabMedia: React.FC = () => {
  const { mediaList, showToast } = useEnterprise();

  // Filters & State
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | MediaType>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | MediaStatus>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Modals & Drawers
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Quick stats
  const totalCount = mediaList.length;
  const approvedCount = mediaList.filter(m => m.status === 'Approved' || m.status === 'Published').length;
  const videoCount = mediaList.filter(m => m.type === 'Video').length;
  const imageCount = mediaList.filter(m => m.type === 'Ảnh').length;

  const filteredMedia = mediaList.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.altText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;

    return matchesSearch && matchesType && matchesCategory && matchesStatus;
  });

  const handleCopyUrl = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    showToast('Đã sao chép liên kết tài nguyên!', 'info');
  };

  return (
    <div id="tab-content-media" className="space-y-6">
      {/* Top Media Bar & Stats */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#F1F5F9]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">
                KHO ẢNH & VIDEO TẬP TRUNG
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cyan-50 text-[#06B6D4] border border-cyan-200">
                AI Website Ready
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-[#0B1F3A] mt-0.5">
              Media Asset Library — VMC Group
            </h2>
            <p className="text-xs text-[#64748B] mt-1 max-w-2xl">
              Nguồn tài nguyên số chuẩn hóa được gắn nhãn danh mục, vị trí website đề xuất và alt-text để hệ thống AI Website và Landing Page tự động trích xuất chính xác.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto shrink-0">
            <button
              id="btn-add-media"
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2.5 bg-[#155EEF] hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm tài nguyên</span>
            </button>
          </div>
        </div>

        {/* AI Readiness Banner & Micro Stats */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-[#E2E8F0]">
            <span className="text-[11px] text-[#64748B] block">Tổng tài nguyên</span>
            <span className="text-lg font-bold text-[#0B1F3A]">{totalCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
            <span className="text-[11px] text-emerald-800 block font-medium">Đã duyệt cho AI (Ready)</span>
            <span className="text-lg font-bold text-emerald-900">{approvedCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/60">
            <span className="text-[11px] text-blue-800 block font-medium">Hình ảnh tĩnh</span>
            <span className="text-lg font-bold text-[#155EEF]">{imageCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-200/60">
            <span className="text-[11px] text-purple-800 block font-medium">Video nội dung</span>
            <span className="text-lg font-bold text-purple-900">{videoCount}</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-2xs space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="input-search-media"
              type="text"
              placeholder="Tìm theo tên ảnh, tag, alt-text, từ khóa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm text-[#0F172A] bg-slate-50 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#155EEF]"
            />
          </div>

          {/* View Mode & Counts */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            <span className="text-xs text-[#64748B]">
              Hiển thị: <strong>{filteredMedia.length}</strong> / {totalCount}
            </span>

            <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-[#E2E8F0]">
              <button
                id="btn-media-grid-view"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-[#155EEF] shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Dạng lưới"
                aria-label="Xem dạng lưới"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                id="btn-media-list-view"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-white text-[#155EEF] shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Dạng danh sách"
                aria-label="Xem dạng danh sách"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Dropdowns */}
        <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <Filter className="w-3.5 h-3.5" />
            <span className="font-semibold">Bộ lọc:</span>
          </div>

          {/* Type Filter */}
          <select
            id="select-filter-type"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as any)}
            className="text-xs bg-slate-50 border border-[#E2E8F0] rounded-lg px-2.5 py-1.5 text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#155EEF]"
          >
            <option value="all">Mọi loại (Ảnh & Video)</option>
            <option value="Ảnh">Chỉ hình ảnh</option>
            <option value="Video">Chỉ video</option>
          </select>

          {/* Category Filter */}
          <select
            id="select-filter-category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs bg-slate-50 border border-[#E2E8F0] rounded-lg px-2.5 py-1.5 text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#155EEF]"
          >
            {CATEGORY_OPTIONS.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            id="select-filter-status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="text-xs bg-slate-50 border border-[#E2E8F0] rounded-lg px-2.5 py-1.5 text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#155EEF]"
          >
            <option value="all">Mọi trạng thái</option>
            <option value="Approved">Approved (Đã duyệt)</option>
            <option value="Published">Published (Công khai)</option>
            <option value="Draft">Draft (Bản nháp)</option>
            <option value="Archived">Archived (Lưu trữ)</option>
          </select>

          {(searchTerm || typeFilter !== 'all' || categoryFilter !== 'all' || statusFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setTypeFilter('all');
                setCategoryFilter('all');
                setStatusFilter('all');
              }}
              className="text-xs text-[#155EEF] hover:underline px-2 cursor-pointer"
            >
              Đặt lại bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Media Content Display */}
      {filteredMedia.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-12 text-center">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-[#0B1F3A]">Không tìm thấy tài nguyên</h4>
          <p className="text-xs text-[#64748B] mt-1 max-w-sm mx-auto">
            Không có ảnh hoặc video nào khớp với điều kiện tìm kiếm hoặc bộ lọc hiện tại.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setTypeFilter('all');
              setCategoryFilter('all');
              setStatusFilter('all');
            }}
            className="mt-4 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#0B1F3A] rounded-lg cursor-pointer"
          >
            Xóa bộ lọc
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredMedia.map((item) => {
            const isVideo = item.type === 'Video';

            return (
              <div
                key={item.id}
                id={`media-card-${item.id}`}
                onClick={() => setSelectedMedia(item)}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Thumbnail Box */}
                <div className="h-44 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={item.thumbnail || item.url}
                    alt={item.altText || item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badges overlay */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#0B1F3A]/90 text-white backdrop-blur-xs flex items-center gap-1">
                      {isVideo ? <Video className="w-3 h-3 text-[#06B6D4]" /> : <ImageIcon className="w-3 h-3 text-[#155EEF]" />}
                      <span>{item.type}</span>
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5">
                    <StatusBadge status={item.status} size="sm" />
                  </div>

                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#0B1F3A] flex items-center justify-center shadow-lg">
                        <Play className="w-4 h-4 ml-0.5 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Hover quick copy bar */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => handleCopyUrl(e, item.url)}
                      className="p-1.5 bg-white/95 text-slate-800 hover:text-[#155EEF] rounded-md shadow-md cursor-pointer"
                      title="Copy URL"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-1 text-[11px] text-[#64748B] mb-1">
                      <span className="font-semibold text-[#155EEF]">{item.category}</span>
                      <span className="text-[10px] text-slate-400">{item.uploadedAt}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-[#0B1F3A] line-clamp-1 group-hover:text-[#155EEF] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-[#64748B] line-clamp-2 mt-1 leading-relaxed">
                      {item.description || item.altText}
                    </p>
                  </div>

                  {/* Placement tag */}
                  <div className="pt-3 mt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 truncate max-w-[140px]">
                      Vị trí: <strong>{item.suggestedPlacements[0] || 'Tự do'}</strong>
                    </span>
                    <span className="text-[#155EEF] font-semibold flex items-center gap-0.5">
                      <span>Chi tiết</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* LIST VIEW */
        <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-2xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[#64748B] uppercase font-semibold border-b border-[#E2E8F0] text-[11px]">
                <tr>
                  <th className="py-3 px-4">Tài nguyên</th>
                  <th className="py-3 px-3">Loại</th>
                  <th className="py-3 px-3">Danh mục</th>
                  <th className="py-3 px-3">Vị trí đề xuất</th>
                  <th className="py-3 px-3">Trạng thái</th>
                  <th className="py-3 px-3">Ngày tải</th>
                  <th className="py-3 px-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-[#0F172A]">
                {filteredMedia.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => setSelectedMedia(item)}
                    className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-slate-900 overflow-hidden shrink-0 flex items-center justify-center">
                          <img
                            src={item.thumbnail || item.url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 max-w-xs">
                          <h5 className="font-bold text-[#0B1F3A] truncate">{item.title}</h5>
                          <span className="text-[11px] text-[#64748B] truncate block">
                            {item.altText || item.description}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 font-semibold text-[#155EEF]">
                      {item.type}
                    </td>
                    <td className="py-3 px-3">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      {item.suggestedPlacements.slice(0, 2).join(', ') || 'Tự do'}
                    </td>
                    <td className="py-3 px-3">
                      <StatusBadge status={item.status} size="sm" />
                    </td>
                    <td className="py-3 px-3 text-slate-400 text-[11px]">
                      {item.uploadedAt}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={(e) => handleCopyUrl(e, item.url)}
                          className="p-1.5 text-slate-500 hover:text-[#155EEF] hover:bg-slate-100 rounded-md cursor-pointer"
                          title="Sao chép liên kết"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedMedia(item);
                          }}
                          className="p-1.5 text-[#155EEF] hover:bg-blue-50 rounded-md cursor-pointer font-semibold text-[11px]"
                        >
                          Chi tiết
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Media Detail Drawer / Modal */}
      {selectedMedia && (
        <MediaDetailDrawer
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}

      {/* Add Media Modal */}
      <AddMediaModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
};
