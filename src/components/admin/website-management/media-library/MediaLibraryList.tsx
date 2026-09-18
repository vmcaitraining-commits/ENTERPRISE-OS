import React from 'react';
import { WebsiteAsset } from '../../../../modules/website-management/domain/models';
import { FileText, Video, Image as ImageIcon } from 'lucide-react';

interface Props {
  assets: WebsiteAsset[];
  selectedId?: string;
  onSelect: (asset: WebsiteAsset) => void;
}

export const MediaLibraryList: React.FC<Props> = ({ assets, selectedId, onSelect }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <table className="w-full text-left text-sm text-slate-600">
        <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold">
          <tr>
            <th className="px-4 py-3">Preview</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Storage</th>
            <th className="px-4 py-3">Size</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {assets.map(asset => {
            const isSelected = selectedId === asset.id;
            return (
              <tr 
                key={asset.id}
                onClick={() => onSelect(asset)}
                className={`cursor-pointer transition-colors ${
                  isSelected ? 'bg-indigo-50/50' : 'hover:bg-slate-50'
                }`}
              >
                <td className="px-4 py-3 w-16">
                  <div className="w-10 h-10 bg-slate-100 rounded overflow-hidden flex items-center justify-center p-1">
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
                      <Video className="w-5 h-5 text-slate-400" />
                    ) : (
                      <FileText className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-slate-800">{asset.name}</td>
                <td className="px-4 py-3">{asset.assetType}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded font-medium ${
                    asset.isLegacy ? 'bg-slate-100 text-slate-600' : 
                    asset.isExternal ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                  }`}>
                    {asset.storageMode}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {asset.sizeBytes ? `${Math.round(asset.sizeBytes / 1024)} KB` : '-'}
                </td>
                <td className="px-4 py-3">
                  {asset.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
