import React from 'react';
import { WebsiteAsset } from '../../../../modules/website-management/domain/models';
import { FileText, Video, Image as ImageIcon } from 'lucide-react';

interface Props {
  assets: WebsiteAsset[];
  selectedId?: string;
  onSelect: (asset: WebsiteAsset) => void;
}

export const MediaLibraryGrid: React.FC<Props> = ({ assets, selectedId, onSelect }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {assets.map(asset => {
        const isSelected = selectedId === asset.id;
        return (
          <div 
            key={asset.id}
            onClick={() => onSelect(asset)}
            className={`group cursor-pointer rounded-xl border transition-all ${
              isSelected 
                ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-md' 
                : 'border-slate-200 hover:border-slate-300 hover:shadow-sm bg-white'
            }`}
          >
            <div className="aspect-square bg-slate-100 rounded-t-xl overflow-hidden relative flex items-center justify-center p-2">
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
              
              {/* Badges */}
              <div className="absolute top-2 right-2 flex flex-col gap-1">
                {asset.isLegacy && (
                  <span className="px-1.5 py-0.5 bg-slate-800/80 text-white text-[10px] font-bold rounded">LEGACY</span>
                )}
                {asset.isExternal && (
                  <span className="px-1.5 py-0.5 bg-blue-600/80 text-white text-[10px] font-bold rounded">EXTERNAL</span>
                )}
              </div>
            </div>
            <div className="p-3 border-t border-slate-100">
              <div className="text-sm font-medium text-slate-800 truncate" title={asset.name}>{asset.name}</div>
              <div className="text-xs text-slate-500 mt-0.5 flex justify-between items-center">
                <span>{asset.assetType}</span>
                {asset.sizeBytes && <span>{Math.round(asset.sizeBytes / 1024)} KB</span>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
