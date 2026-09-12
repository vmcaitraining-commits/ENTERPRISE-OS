import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { MediaType, MediaSource, MediaCategory, MediaUseCase, WebsitePlacement, MediaStatus } from '../../types/enterprise';
import { X, Upload, Link as LinkIcon, Image as ImageIcon, Video, CheckCircle2 } from 'lucide-react';

interface AddMediaModalProps {
  isOpen: boolean;
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

export const AddMediaModal: React.FC<AddMediaModalProps> = ({ isOpen, onClose }) => {
  const { addMediaItem, showToast } = useEnterprise();

  const [addMode, setAddMode] = useState<'upload' | 'url'>('upload');
  const [title, setTitle] = useState('');
  const [type, setType] = useState<MediaType>('Ảnh');
  const [source, setSource] = useState<MediaSource>('Upload');
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDescription] = useState('');
  const [altText, setAltText] = useState('');
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState<MediaCategory>('Brand');
  const [tagsInput, setTagsInput] = useState('');
  const [topic, setTopic] = useState('');
  const [relatedProducts, setRelatedProducts] = useState('AI ENTERPRISE');
  const [useCases, setUseCases] = useState<MediaUseCase[]>(['Website', 'AI']);
  const [suggestedPlacements, setSuggestedPlacements] = useState<WebsitePlacement[]>(['Hero']);
  const [status, setStatus] = useState<MediaStatus>('Approved');
  const [isDragOver, setIsDragOver] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (file: File) => {
    const isVid = file.type.startsWith('video');
    setType(isVid ? 'Video' : 'Ảnh');
    setSource('Upload');
    if (!title) {
      setTitle(file.name.replace(/\.[^/.]+$/, ''));
    }
    if (!altText) {
      setAltText(file.name.replace(/\.[^/.]+$/, ''));
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const res = e.target?.result as string;
      setUrl(res);
      if (!isVid) {
        setThumbnail(res);
      }
      showToast(`Đã tải tệp ${file.name} lên thành công!`, 'info');
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const toggleUseCase = (uc: MediaUseCase) => {
    setUseCases(prev => prev.includes(uc) ? prev.filter(u => u !== uc) : [...prev, uc]);
  };

  const togglePlacement = (pl: WebsitePlacement) => {
    setSuggestedPlacements(prev => prev.includes(pl) ? prev.filter(p => p !== pl) : [...prev, pl]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) {
      showToast('Vui lòng cung cấp tiêu đề và tệp hoặc URL hợp lệ!', 'error');
      return;
    }

    addMediaItem({
      title,
      type,
      source: addMode === 'upload' ? 'Upload' : source,
      url,
      thumbnail: thumbnail || url,
      description,
      altText: altText || title,
      caption,
      category,
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      topic,
      relatedProducts,
      useCases,
      suggestedPlacements,
      status,
      fileSize: addMode === 'upload' ? 'Local Upload' : 'Remote Link',
      dimensions: type === 'Video' ? 'Video Stream' : 'Auto'
    });

    onClose();
  };

  return (
    <div
      id="add-media-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        id="add-media-modal"
        className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#06B6D4]">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0B1F3A]">Thêm tài nguyên vào Kho Media</h3>
              <p className="text-xs text-[#64748B]">Tải ảnh, video hoặc liên kết URL với đầy đủ metadata cho AI</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Method selector tabs */}
        <div className="px-6 pt-4 border-b border-[#E2E8F0] flex gap-4">
          <button
            type="button"
            onClick={() => { setAddMode('upload'); setSource('Upload'); }}
            className={`pb-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              addMode === 'upload'
                ? 'border-[#155EEF] text-[#155EEF]'
                : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>1. TẢI LÊN (Ảnh / Video)</span>
          </button>

          <button
            type="button"
            onClick={() => { setAddMode('url'); setSource('URL'); }}
            className={`pb-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
              addMode === 'url'
                ? 'border-[#155EEF] text-[#155EEF]'
                : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <LinkIcon className="w-4 h-4" />
            <span>2. GẮN LINK (URL / YouTube / Drive)</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          {/* Top upload / URL zone */}
          {addMode === 'upload' ? (
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
                isDragOver ? 'border-[#155EEF] bg-blue-50/50' : 'border-[#CBD5E1] bg-slate-50/60'
              }`}
            >
              {url ? (
                <div className="flex items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-200 flex items-center justify-center">
                    {type === 'Video' ? (
                      <Video className="w-8 h-8 text-slate-500" />
                    ) : (
                      <img src={url} alt="Preview" className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="text-left">
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold mb-1">
                      <CheckCircle2 className="w-4 h-4" /> Tệp đã sẵn sàng
                    </span>
                    <p className="text-xs text-[#0B1F3A] font-bold">{title || 'Tệp tải lên'}</p>
                    <label className="text-xs text-[#155EEF] hover:underline cursor-pointer block mt-1">
                      Chọn tệp khác
                      <input
                        type="file"
                        accept="image/*,video/*"
                        className="hidden"
                        onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#155EEF] flex items-center justify-center mx-auto mb-3">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="font-semibold text-[#0B1F3A] text-sm mb-1">
                    Kéo và thả ảnh hoặc video vào đây
                  </p>
                  <p className="text-[#64748B] text-xs mb-3">
                    Hỗ trợ PNG, JPG, SVG, WebP, MP4, WebM
                  </p>
                  <label className="inline-flex items-center gap-2 px-4 py-2 bg-[#155EEF] hover:bg-blue-700 text-white font-semibold rounded-lg cursor-pointer transition-colors">
                    <span>Chọn tệp từ thiết bị</span>
                    <input
                      type="file"
                      accept="image/*,video/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                    />
                  </label>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-50 border border-[#E2E8F0] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-[#64748B] block mb-1">Nguồn liên kết</label>
                  <select
                    value={source}
                    onChange={(e) => setSource(e.target.value as MediaSource)}
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
                  >
                    <option value="URL">URL Trực tiếp (Ảnh/Video)</option>
                    <option value="YouTube">YouTube Video</option>
                    <option value="Vimeo">Vimeo Video</option>
                    <option value="Drive">Google Drive</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-[#64748B] block mb-1">Loại tài nguyên</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as MediaType)}
                    className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
                  >
                    <option value="Ảnh">Ảnh (Image)</option>
                    <option value="Video">Video</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#64748B] block mb-1">Đường dẫn liên kết (URL)</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/asset.png hoặc https://youtube.com/..."
                  className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
                  required
                />
              </div>
            </div>
          )}

          {/* Metadata Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-[#64748B] block mb-1">Tên tài nguyên *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="VD: VMC Enterprise Dashboard Hero Visual"
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
                required
              />
            </div>

            <div>
              <label className="font-semibold text-[#64748B] block mb-1">Danh mục *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as MediaCategory)}
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
              >
                {ALL_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-[#64748B] block mb-1">Văn bản thay thế (Alt Text) *</label>
              <input
                type="text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                placeholder="Mô tả cho AI & Trình đọc màn hình"
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
                required
              />
            </div>

            <div>
              <label className="font-semibold text-[#64748B] block mb-1">Trạng thái duyệt cho AI</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as MediaStatus)}
                className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
              >
                <option value="Approved">Approved (Đã duyệt — AI được dùng)</option>
                <option value="Published">Published (Công khai)</option>
                <option value="Draft">Draft (Bản nháp — Chờ xét duyệt)</option>
                <option value="Archived">Archived (Lưu trữ)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-semibold text-[#64748B] block mb-1">Mô tả chi tiết</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mô tả nội dung, ngữ cảnh sử dụng..."
              rows={2}
              className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
            />
          </div>

          <div>
            <label className="font-semibold text-[#64748B] block mb-1">Tags (cách nhau bằng dấu phẩy)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="logo, crm, ai-agent, hero, banner..."
              className="w-full bg-white border border-[#CBD5E1] rounded-lg p-2 text-xs"
            />
          </div>

          {/* Multi-select: Mục đích sử dụng */}
          <div>
            <label className="font-semibold text-[#64748B] block mb-1">Mục đích sử dụng:</label>
            <div className="flex flex-wrap gap-1.5">
              {ALL_USE_CASES.map(uc => {
                const active = useCases.includes(uc);
                return (
                  <button
                    key={uc}
                    type="button"
                    onClick={() => toggleUseCase(uc)}
                    className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                      active ? 'bg-[#155EEF] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
            <label className="font-semibold text-[#64748B] block mb-1">
              Vị trí Website đề xuất (Cho AI Website tự động chọn):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {ALL_PLACEMENTS.map(pl => {
                const active = suggestedPlacements.includes(pl);
                return (
                  <button
                    key={pl}
                    type="button"
                    onClick={() => togglePlacement(pl)}
                    className={`px-2 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                      active ? 'bg-[#06B6D4] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {pl}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-medium rounded-lg transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#155EEF] hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Thêm vào Kho Media
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
