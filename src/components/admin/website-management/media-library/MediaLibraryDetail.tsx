import React, { useEffect, useState } from 'react';
import { WebsiteAsset, WebsiteAssetUsage } from '../../../../modules/website-management/domain/models';
import { LocalWebsiteManagementRepository } from '../../../../modules/website-management/infrastructure/local-adapter';
import { X, ExternalLink, Image as ImageIcon, Video, FileText, Trash2, Calendar, Link as LinkIcon, Info } from 'lucide-react';

const repository = new LocalWebsiteManagementRepository();

interface Props {
  asset: WebsiteAsset;
  onClose: () => void;
  onDelete: () => void;
}

export const MediaLibraryDetail: React.FC<Props> = ({ asset, onClose, onDelete }) => {
  const [usages, setUsages] = useState<WebsiteAssetUsage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsages();
  }, [asset.id]);

  const loadUsages = async () => {
    setLoading(true);
    const assetUsages = await repository.getAssetUsages(asset.id);
    setUsages(assetUsages);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-right-8 duration-300">
      <div className="flex items-center justify-between p-4 border-b border-slate-200 shrink-0">
        <h3 className="font-bold text-slate-800">Asset Details</h3>
        <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded text-slate-500">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Preview */}
        <div className="bg-slate-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center relative p-2 border border-slate-200">
          {asset.assetType === 'IMAGE' || asset.assetType === 'SVG' || asset.assetType === 'LOGO' || asset.assetType === 'ICON' ? (
            <img 
              src={asset.sourceUrl} 
              alt={asset.name}
              className="max-w-full max-h-full object-contain"
            />
          ) : asset.assetType === 'VIDEO' ? (
            <Video className="w-16 h-16 text-slate-400" />
          ) : (
            <FileText className="w-16 h-16 text-slate-400" />
          )}
        </div>

        {/* Info */}
        <div>
          <h4 className="font-bold text-slate-900 break-words leading-tight mb-2">{asset.name}</h4>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-semibold">{asset.assetType}</span>
            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-semibold">{asset.category}</span>
            {asset.isLegacy && <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold">LEGACY SOURCE</span>}
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500">Storage</span>
              <span className="font-medium text-slate-800 text-right">{asset.storageMode}</span>
            </div>
            {asset.width && asset.height && (
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">Dimensions</span>
                <span className="font-medium text-slate-800 text-right">{asset.width} x {asset.height}</span>
              </div>
            )}
            {asset.sizeBytes && (
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">Size</span>
                <span className="font-medium text-slate-800 text-right">{Math.round(asset.sizeBytes / 1024)} KB</span>
              </div>
            )}
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500">Uploaded</span>
              <span className="font-medium text-slate-800 text-right">{new Date(asset.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <h5 className="font-semibold text-slate-800 text-sm mb-3">Metadata</h5>
          <div className="space-y-3">
            <div>
              <div className="text-xs font-medium text-slate-500 mb-1">Alt Text (VI)</div>
              <div className="text-sm text-slate-800 bg-white p-2 rounded border border-slate-200">{asset.alt?.vi || <span className="text-slate-400 italic">Not set</span>}</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-500 mb-1">Caption (VI)</div>
              <div className="text-sm text-slate-800 bg-white p-2 rounded border border-slate-200">{asset.caption?.vi || <span className="text-slate-400 italic">Not set</span>}</div>
            </div>
          </div>
        </div>

        {/* Usages */}
        <div>
          <h5 className="font-semibold text-slate-800 text-sm mb-3 flex items-center justify-between">
            Usage Locations
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs">{usages.length}</span>
          </h5>
          
          {loading ? (
            <div className="text-sm text-slate-500 italic">Loading usages...</div>
          ) : usages.length === 0 ? (
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-center text-sm text-slate-500">
              <Info className="w-5 h-5 mx-auto mb-2 text-slate-400" />
              Chưa được sử dụng ở đâu
            </div>
          ) : (
            <div className="space-y-2">
              {usages.map(usage => (
                <div key={usage.id} className="text-sm bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-start gap-3">
                  <LinkIcon className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-800">{usage.usageRole || 'Content Reference'}</div>
                    <div className="text-xs text-slate-500 mt-0.5 font-mono">{usage.sourceReference}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 border-t border-slate-200 shrink-0">
        <button 
          onClick={onDelete}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-red-50 border border-red-200 text-red-600 rounded-lg font-semibold text-sm transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Archive Asset
        </button>
      </div>
    </div>
  );
};
