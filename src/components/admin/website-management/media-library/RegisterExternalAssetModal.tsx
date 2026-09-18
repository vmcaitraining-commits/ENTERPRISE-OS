import React, { useState } from 'react';
import { X, Link as LinkIcon, Image as ImageIcon, Video, FileText } from 'lucide-react';
import { WebsiteAsset } from '../../../../modules/website-management/domain/models';

interface Props {
  onClose: () => void;
  onSave: (asset: Partial<WebsiteAsset>) => void;
}

export const RegisterExternalAssetModal: React.FC<Props> = ({ onClose, onSave }) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [assetType, setAssetType] = useState<WebsiteAsset['assetType']>('IMAGE');
  const [category, setCategory] = useState<WebsiteAsset['category']>('UNCATEGORIZED');
  const [altVi, setAltVi] = useState('');
  const [captionVi, setCaptionVi] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !name) return;
    
    // basic URL validation
    if (!url.startsWith('http') && !url.startsWith('data:') && !url.startsWith('/')) {
      alert('Vui lòng nhập URL hợp lệ (bắt đầu bằng http, data: hoặc /)');
      return;
    }

    onSave({
      name,
      sourceUrl: url,
      assetType,
      category,
      alt: { vi: altVi },
      caption: { vi: captionVi }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-5 border-b border-slate-200 shrink-0">
          <h3 className="text-lg font-bold text-slate-900">Register External Asset</h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Source URL <span className="text-red-500">*</span></label>
            <div className="relative">
              <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                required
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://example.com/image.jpg or /images/brand/logo/vmc-logo-primary.png"
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Chỉ tham chiếu đường dẫn, không tải file vào hệ thống cục bộ.</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Asset Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Hero Banner Marketing"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Asset Type</label>
              <select 
                value={assetType}
                onChange={e => setAssetType(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="IMAGE">Image</option>
                <option value="SVG">SVG</option>
                <option value="VIDEO">Video</option>
                <option value="ICON">Icon</option>
                <option value="LOGO">Logo</option>
                <option value="DOCUMENT">Document</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Category</label>
              <select 
                value={category}
                onChange={e => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="UNCATEGORIZED">Uncategorized</option>
                <option value="BRAND">Brand</option>
                <option value="HERO">Hero</option>
                <option value="BACKGROUND">Background</option>
                <option value="PRODUCT">Product</option>
                <option value="ICON">Icon</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-sm font-semibold text-slate-800 border-b border-slate-200 pb-2 mb-3">SEO & Accessibility Metadata</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Alt Text (VI)</label>
                <input 
                  type="text" 
                  value={altVi}
                  onChange={e => setAltVi(e.target.value)}
                  placeholder="Mô tả hình ảnh cho trình đọc màn hình"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Caption (VI)</label>
                <input 
                  type="text" 
                  value={captionVi}
                  onChange={e => setCaptionVi(e.target.value)}
                  placeholder="Chú thích hiển thị dưới hình ảnh"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                />
              </div>
            </div>
          </div>
        </form>

        <div className="p-5 border-t border-slate-200 shrink-0 flex justify-end gap-3 bg-slate-50">
          <button 
            type="button" 
            onClick={onClose}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-semibold rounded-lg text-sm hover:bg-slate-50"
          >
            Cancel
          </button>
          <button 
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg text-sm hover:bg-indigo-700"
          >
            Register Asset
          </button>
        </div>
      </div>
    </div>
  );
};
