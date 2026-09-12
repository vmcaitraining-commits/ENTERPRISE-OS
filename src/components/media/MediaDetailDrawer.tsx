import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { MediaItem, MediaStatus, MediaCategory, MediaUseCase, WebsitePlacement } from '../../types/enterprise';
import { StatusBadge } from '../common/StatusBadge';
import { X, Copy, Download, Archive, Edit3, Check, Trash2, Calendar, User, FileText, Tag, Link2, ExternalLink } from 'lucide-react';

interface MediaDetailDrawerProps {
  media: MediaItem | null;
  onClose: () => void;
}

const ALL_CATEGORIES: MediaCategory[] = [
  'Logo', 'Brand', 'Company', 'Team', 'Office', 'Product', 'AI Enterprise',
  'Solution', 'Customer', 'Case Study', 'Website Hero', 'Website Banner',
  'Article', 'Marketing', 'Social', 'Training', 'Other'
];

const ALL_USE_CASES: MediaUseCase[] = [
  'Website', 'Landing Page', 'Blog', 'Sale', 'Marketing', 'Presentation',
  'Proposal', 'Social Media', 'Training', 'Internal', 'AI'
];

const ALL_PLACEMENTS: WebsitePlacement[] = [
  'Hero', 'About Us', 'Product', 'Feature', 'Solution', 'Industry',
  'CTA', 'Background', 'Card', 'Banner', 'Blog', 'Case Study', 'Team', 'Footer'
];

export const MediaDetailDrawer: React.FC<MediaDetailDrawerProps> = ({ media, onClose }) => {
  const { updateMediaItem, archiveMediaItem, deleteMediaItemPermanently, showToast } = useEnterprise();

  const [isEditingMeta, setIsEditingMeta] = useState<boolean>(false);
  const [formData, setFormData] = useState<MediaItem | null>(media);

  // Sync formData when media changes
  React.useEffect(() => {
    setFormData(media);
    setIsEditingMeta(false);
  }, [media]);

  if (!media || !formData) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateMediaItem(formData.id, formData);
    setIsEditingMeta(false);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(media.url);
    showToast('Đã sao chép liên kết tài nguyên vào clipboard!', 'info');
  };

  const toggleUseCase = (uc: MediaUseCase) => {
    setFormData(prev => {
      if (!prev) return prev;
      const exists = prev.useCases.includes(uc);
      const next = exists ? prev.useCases.filter(u => u !== uc) : [...prev.useCases, uc];
      return { ...prev, useCases: next };
    });
  };

  const togglePlacement = (pl: WebsitePlacement) => {
    setFormData(prev => {
      if (!prev) return prev;
      const exists = prev.suggestedPlacements.includes(pl);
      const next = exists ? prev.suggestedPlacements.filter(p => p !== pl) : [...prev.suggestedPlacements, pl];
      return { ...prev, suggestedPlacements: next };
    });
  };

  const isVideo = media.type === 'Video';
  const isYouTube = media.url.includes('youtube.com') || media.url.includes('youtu.be');

  return (
    <div
      id="media-detail-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        id="media-detail-modal"
        className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-slate-50/70">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-sm">
              {media.type}
            </span>
            <h3 className="text-base font-bold text-[#0B1F3A] truncate">
              {formData.title}
            </h3>
            <StatusBadge status={formData.status} size="sm" />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {!isEditingMeta ? (
              <button
                onClick={() => setIsEditingMeta(true)}
                className="px-3 py-1.5 text-xs font-semibold text-[#155EEF] hover:bg-blue-50 rounded-lg flex items-center gap-1.5 border border-blue-200 transition-colors cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Sửa Metadata</span>
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Lưu Metadata</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Đóng chi tiết"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: 2 Columns */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
          {/* Left Column: Media Preview */}
          <div className="lg:col-span-6 p-6 flex flex-col justify-between bg-slate-900/5">
            <div className="rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center min-h-[300px] max-h-[420px] relative shadow-inner">
              {isVideo ? (
                isYouTube ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white text-center">
                    <img
                      src={media.thumbnail || ''}
                      alt={media.title}
                      className="max-h-60 max-w-full rounded-lg mb-3 object-cover"
                    />
                    <a
                      href={media.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Xem video trên YouTube</span>
                    </a>
                  </div>
                ) : (
                  <video
                    src={media.url}
                    controls
                    className="max-h-full max-w-full"
                  />
                )
              ) : (
                <img
                  src={media.url}
                  alt={media.altText || media.title}
                  className="max-h-[380px] max-w-full object-contain p-2"
                />
              )}
            </div>

            {/* Quick action bar beneath preview */}
            <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-2 flex-wrap text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyUrl}
                  className="px-3 py-1.5 bg-white hover:bg-slate-100 text-[#0F172A] border border-[#CBD5E1] rounded-lg font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-[#155EEF]" />
                  <span>Copy URL</span>
                </button>

                <a
                  href={media.url}
                  download={media.title}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-white hover:bg-slate-100 text-[#0F172A] border border-[#CBD5E1] rounded-lg font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Tải về</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => archiveMediaItem(media.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    formData.status === 'Archived'
                      ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Archive className="w-3.5 h-3.5" />
                  <span>{formData.status === 'Archived' ? 'Phục hồi' : 'Lưu trữ (Archive)'}</span>
                </button>

                <button
                  onClick={() => {
                    if (window.confirm(`Bạn có chắc muốn xóa vĩnh viễn tài nguyên "${media.title}"?`)) {
                      deleteMediaItemPermanently(media.id);
                      onClose();
                    }
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                  title="Xóa vĩnh viễn"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Metadata Details / Edit Form */}
          <div className="lg:col-span-6 p-6 overflow-y-auto space-y-4">
            {isEditingMeta ? (
              <form onSubmit={handleSave} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-[#64748B] block mb-1">Tên tài nguyên</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full text-xs bg-white border border-[#CBD5E1] rounded-lg p-2 focus:ring-1 focus:ring-[#155EEF]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-[#64748B] block mb-1">Danh mục</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as MediaCategory })}
                      className="w-full text-xs bg-white border border-[#CBD5E1] rounded-lg p-2"
                    >
                      {ALL_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-[#64748B] block mb-1">Trạng thái duyệt</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as MediaStatus })}
                      className="w-full text-xs bg-white border border-[#CBD5E1] rounded-lg p-2"
                    >
                      <option value="Draft">Draft (Bản nháp)</option>
                      <option value="Approved">Approved (Đã duyệt cho AI)</option>
                      <option value="Published">Published (Công khai)</option>
                      <option value="Archived">Archived (Lưu trữ)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-[#64748B] block mb-1">Văn bản thay thế (Alt Text cho SEO & AI)</label>
                  <input
                    type="text"
                    value={formData.altText}
                    onChange={(e) => setFormData({ ...formData, altText: e.target.value })}
                    placeholder="Mô tả hình ảnh cho trình đọc màn hình và AI"
                    className="w-full text-xs bg-white border border-[#CBD5E1] rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#64748B] block mb-1">Mô tả tài nguyên</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={2}
                    className="w-full text-xs bg-white border border-[#CBD5E1] rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#64748B] block mb-1">Tags (cách nhau bởi dấu phẩy)</label>
                  <input
                    type="text"
                    value={formData.tags.join(', ')}
                    onChange={(e) => setFormData({
                      ...formData,
                      tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                    })}
                    className="w-full text-xs bg-white border border-[#CBD5E1] rounded-lg p-2"
                  />
                </div>

                {/* Multi-select: Mục đích sử dụng */}
                <div>
                  <label className="font-semibold text-[#64748B] block mb-1.5">Mục đích sử dụng (Chọn nhiều)</label>
                  <div className="flex flex-wrap gap-1.5">
                    {ALL_USE_CASES.map((uc) => {
                      const selected = formData.useCases.includes(uc);
                      return (
                        <button
                          key={uc}
                          type="button"
                          onClick={() => toggleUseCase(uc)}
                          className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                            selected
                              ? 'bg-[#155EEF] text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {uc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Multi-select: Vị trí Website đề xuất */}
                <div>
                  <label className="font-semibold text-[#64748B] block mb-1.5">
                    Vị trí Website đề xuất (Metadata quan trọng cho AI Website)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {ALL_PLACEMENTS.map((pl) => {
                      const selected = formData.suggestedPlacements.includes(pl);
                      return (
                        <button
                          key={pl}
                          type="button"
                          onClick={() => togglePlacement(pl)}
                          className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                            selected
                              ? 'bg-[#06B6D4] text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {pl}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsEditingMeta(false)}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 cursor-pointer"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 cursor-pointer"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4 text-xs">
                {/* Meta info list */}
                <div className="bg-slate-50 rounded-xl p-4 border border-[#E2E8F0] space-y-2.5">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Danh mục:</span>
                    <span className="font-bold text-[#0B1F3A] bg-white px-2 py-0.5 rounded-md border border-[#E2E8F0]">
                      {formData.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Nguồn tải lên:</span>
                    <span className="font-semibold text-[#155EEF]">{formData.source}</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                    <span className="text-[#64748B]">Kích thước / Dung lượng:</span>
                    <span className="text-slate-700">{formData.dimensions || 'Tự động'} • {formData.fileSize || 'N/A'}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Trạng thái tự động cho AI:</span>
                    <span className="font-semibold text-emerald-700">
                      {formData.status === 'Approved' || formData.status === 'Published'
                        ? '✓ AI Website được phép tự động sử dụng'
                        : '✕ Chưa duyệt cho AI tự động dùng'}
                    </span>
                  </div>
                </div>

                {/* Alt text & Description */}
                <div>
                  <span className="font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1">
                    Văn bản thay thế (Alt Text):
                  </span>
                  <p className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-[#E2E8F0]">
                    {formData.altText || 'Chưa cập nhật Alt Text'}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1">
                    Mô tả tài nguyên:
                  </span>
                  <p className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-[#E2E8F0] leading-relaxed">
                    {formData.description || 'Không có mô tả'}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <span className="font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1.5">
                    Từ khóa (Tags):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.tags.map((tag, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-[11px] font-medium border border-slate-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Use cases */}
                <div>
                  <span className="font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1.5">
                    Mục đích sử dụng:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.useCases.map((uc, idx) => (
                      <span key={idx} className="bg-blue-50 text-[#155EEF] px-2 py-0.5 rounded-md text-[11px] font-semibold border border-blue-200">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Suggested Placements */}
                <div>
                  <span className="font-bold text-[#0B1F3A] uppercase tracking-wider block mb-1.5">
                    Vị trí Website đề xuất cho AI:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.suggestedPlacements.map((pl, idx) => (
                      <span key={idx} className="bg-cyan-50 text-[#06B6D4] px-2 py-0.5 rounded-md text-[11px] font-semibold border border-cyan-200">
                        {pl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Audit date & user */}
                <div className="pt-3 border-t border-[#E2E8F0] text-[11px] text-[#94A3B8] flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    Tải lên: {formData.uploadedAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    Bởi: {formData.uploader}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
