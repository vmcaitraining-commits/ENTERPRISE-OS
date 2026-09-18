import React, { useState, useEffect } from 'react';
import { WebsiteContentVersion } from '../../../../modules/website-management/domain/models';
import { LocalWebsiteManagementRepository } from '../../../../modules/website-management/infrastructure/local-adapter';
import { X, Clock, RotateCcw, User, ArrowRight } from 'lucide-react';

const repository = new LocalWebsiteManagementRepository();

interface VersionHistoryProps {
  entryId: string;
  onClose: () => void;
  onRestore: () => void;
}

export const VersionHistory: React.FC<VersionHistoryProps> = ({ entryId, onClose, onRestore }) => {
  const [versions, setVersions] = useState<WebsiteContentVersion[]>([]);
  const [loading, setLoading] = useState(true);
  const [comparingVersion, setComparingVersion] = useState<WebsiteContentVersion | null>(null);

  useEffect(() => {
    const fetchVersions = async () => {
      setLoading(true);
      const v = await repository.getContentVersions(entryId);
      // Sort descending by version number
      setVersions(v.sort((a, b) => b.versionNumber - a.versionNumber));
      setLoading(false);
    };
    fetchVersions();
  }, [entryId]);

  const handleRestore = async (versionId: string) => {
    if (window.confirm('Restore this version? This will create a new draft version.')) {
      await repository.restoreVersion(versionId, 'system/legacy');
      onRestore();
    }
  };

  return (
    <div className="absolute inset-0 bg-black/50 z-50 flex justify-end">
      <div className="w-[500px] h-full bg-white shadow-xl flex flex-col animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" /> Version History
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-md text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {loading ? (
            <div className="text-center text-slate-500 py-8">Loading versions...</div>
          ) : versions.length === 0 ? (
            <div className="text-center text-slate-500 py-8">No history found.</div>
          ) : (
            versions.map((version, index) => {
              const isLatest = index === 0;
              const isComparing = comparingVersion?.id === version.id;
              
              return (
                <div key={version.id} className={`border rounded-lg overflow-hidden ${isLatest ? 'border-indigo-200 bg-indigo-50/30' : 'border-slate-200 bg-white'}`}>
                  <div className="p-3 border-b border-slate-100 flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`font-bold text-sm ${isLatest ? 'text-indigo-700' : 'text-slate-700'}`}>v{version.versionNumber}</span>
                        {isLatest && <span className="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-semibold">LATEST</span>}
                        <span className="text-xs text-slate-400">{new Date(version.createdAt).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <User className="w-3 h-3" /> {version.createdBy}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setComparingVersion(isComparing ? null : version)}
                        className="text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded transition-colors"
                      >
                        {isComparing ? 'Hide Diff' : 'Compare'}
                      </button>
                      <button 
                        onClick={() => handleRestore(version.id)}
                        className="text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-2 py-1 rounded flex items-center gap-1 transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" /> Restore
                      </button>
                    </div>
                  </div>
                  
                  {isComparing && (
                    <div className="p-3 bg-slate-50 border-t border-slate-200 space-y-3">
                      <div>
                        <div className="text-[10px] font-bold text-slate-500 mb-1">VIETNAMESE VALUE</div>
                        <div className="text-sm text-slate-700 p-2 bg-white border border-slate-200 rounded line-clamp-3">
                          {version.values.vi}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-500 mb-1">ENGLISH VALUE</div>
                        <div className="text-sm text-slate-700 p-2 bg-white border border-slate-200 rounded line-clamp-3">
                          {version.values.en}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
