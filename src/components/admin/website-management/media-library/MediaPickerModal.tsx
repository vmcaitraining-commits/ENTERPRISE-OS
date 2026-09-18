import React, { useState, useEffect } from 'react';
import { X, Search, Image as ImageIcon, Video, FileText } from 'lucide-react';
import { WebsiteAsset } from '../../../../modules/website-management/domain/models';
import { LocalWebsiteManagementRepository } from '../../../../modules/website-management/infrastructure/local-adapter';

const repository = new LocalWebsiteManagementRepository();

interface Props {
  allowedTypes: ('IMAGE' | 'VIDEO' | 'SVG' | 'LOGO' | 'ICON')[];
  onClose: () => void;
  onSelect: (asset: WebsiteAsset) => void;
}

export const MediaPickerModal: React.FC<Props> = ({ allowedTypes, onClose, onSelect }) => {
  const [assets, setAssets] = useState<WebsiteAsset[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    const allAssets = await repository.getAssets();
    // Filter by allowed types and not archived
    const filtered = allAssets.filter(a => 
      a.status !== 'ARCHIVED' && 
      (allowedTypes.length === 0 || allowedTypes.includes(a.assetType as any))
    );
    setAssets(filtered);
  };

  const filteredAssets = assets.filter(a => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return a.name.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl mx-4 overflow-hidden flex flex-col h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 shrink-0">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Select Media</h3>
            <p className="text-sm text-slate-500 mt-0.5">Chọn tài nguyên từ thư viện để sử dụng cho nội dung.</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="text-sm text-slate-500">
            Showing {filteredAssets.length} assets
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-5">
          {filteredAssets.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p>No suitable assets found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredAssets.map(asset => (
                <div 
                  key={asset.id}
                  onClick={() => onSelect(asset)}
                  className="group cursor-pointer rounded-xl border border-slate-200 hover:border-indigo-500 hover:ring-2 hover:ring-indigo-500/20 bg-white transition-all overflow-hidden"
                >
                  <div className="aspect-square bg-slate-100 relative flex items-center justify-center p-2">
                    {asset.assetType === 'IMAGE' || asset.assetType === 'SVG' || asset.assetType === 'LOGO' || asset.assetType === 'ICON' ? (
                      <img 
                        src={asset.thumbnailReference || asset.sourceUrl} 
                        alt={asset.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
                        }}
                      />
                    ) : asset.assetType === 'VIDEO' ? (
                      <Video className="w-12 h-12 text-slate-400" />
                    ) : (
                      <FileText className="w-12 h-12 text-slate-400" />
                    )}
                    <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-sm transition-opacity">
                        SELECT
                      </span>
                    </div>
                  </div>
                  <div className="p-3 border-t border-slate-100">
                    <div className="text-sm font-medium text-slate-800 truncate" title={asset.name}>{asset.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{asset.assetType}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
