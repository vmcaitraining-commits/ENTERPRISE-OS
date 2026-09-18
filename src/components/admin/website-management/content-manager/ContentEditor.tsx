import React, { useState, useEffect, useCallback } from 'react';
import { WebsiteContentEntry } from '../../../../modules/website-management/domain/models';
import { LocalWebsiteManagementRepository } from '../../../../modules/website-management/infrastructure/local-adapter';
import { Save, AlertCircle, History, FileText, Image as ImageIcon, Link as LinkIcon, Type, FileCode2, Layout } from 'lucide-react';
import { VersionHistory } from './VersionHistory';
import { NestedFieldEditor } from './NestedFieldEditor';
import { MediaPickerModal } from '../media-library/MediaPickerModal';

const repository = new LocalWebsiteManagementRepository();

interface ContentEditorProps {
  selectedPageId: string | null;
  selectedSectionId: string | null;
  onUnsavedChangesChange: (hasUnsaved: boolean) => void;
}

export const ContentEditor: React.FC<ContentEditorProps> = ({ 
  selectedPageId, 
  selectedSectionId, 
  onUnsavedChangesChange 
}) => {
  const [entries, setEntries] = useState<WebsiteContentEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'vi' | 'en' | 'zhCN'>('vi');
  const [draftValues, setDraftValues] = useState<Record<string, { vi: any; en: any; zhCN: any }>>({});
  const [showHistoryFor, setShowHistoryFor] = useState<string | null>(null);
  const [pickerOpenFor, setPickerOpenFor] = useState<{ entryId: string, tab: 'vi' | 'en' | 'zhCN' } | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      if (!selectedSectionId) {
        setEntries([]);
        setDraftValues({});
        onUnsavedChangesChange(false);
        return;
      }
      setLoading(true);
      const sectionEntries = await repository.getContentEntriesBySectionId(selectedSectionId);
      setEntries(sectionEntries);
      
      const initialDrafts: Record<string, { vi: any; en: any; zhCN: any }> = {};
      sectionEntries.forEach(entry => {
        initialDrafts[entry.id] = { vi: entry.vi, en: entry.en, zhCN: entry.zhCN };
      });
      setDraftValues(initialDrafts);
      onUnsavedChangesChange(false);
      setLoading(false);
    };

    fetchContent();
  }, [selectedSectionId, onUnsavedChangesChange]);

  const handleValueChange = (entryId: string, locale: 'vi' | 'en' | 'zhCN', value: any) => {
    setDraftValues(prev => ({
      ...prev,
      [entryId]: {
        ...prev[entryId],
        [locale]: value
      }
    }));
    onUnsavedChangesChange(true);
  };

  const handleSaveDraft = async (entry: WebsiteContentEntry) => {
    const updatedEntry: WebsiteContentEntry = {
      ...entry,
      vi: draftValues[entry.id].vi,
      en: draftValues[entry.id].en,
      zhCN: draftValues[entry.id].zhCN
    };
    
    await repository.saveDraft(updatedEntry, 'system/legacy');
    
    // Refresh
    const sectionEntries = await repository.getContentEntriesBySectionId(selectedSectionId!);
    setEntries(sectionEntries);
    onUnsavedChangesChange(false);
  };

  if (!selectedPageId) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8 text-center h-full">
        <FileCode2 className="w-12 h-12 mb-4 text-slate-200" />
        <h3 className="text-lg font-semibold text-slate-700">Chưa chọn trang</h3>
        <p className="text-sm max-w-md mt-2">Chọn một trang hoặc khu vực từ Website Tree bên trái để bắt đầu quản trị nội dung.</p>
      </div>
    );
  }

  if (!selectedSectionId) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8 text-center h-full">
        <Layout className="w-12 h-12 mb-4 text-slate-200" />
        <h3 className="text-lg font-semibold text-slate-700">Chưa chọn khối (Section)</h3>
        <p className="text-sm max-w-md mt-2">Trang đã được chọn. Hãy chọn một Section cụ thể để chỉnh sửa nội dung chi tiết.</p>
      </div>
    );
  }

  if (loading) {
    return <div className="p-8 text-slate-500">Đang tải nội dung...</div>;
  }

  if (entries.length === 0) {
    return (
      <div className="p-8 text-slate-500 text-center">
        Khu vực này hiện chưa được cấu hình các trường nội dung cấu trúc (SOURCE_NOT_YET_NORMALIZED).
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden relative">
      {/* Editor Header & Tabs */}
      <div className="bg-white border-b border-slate-200 shrink-0">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Chỉnh sửa nội dung</h3>
            <p className="text-sm text-slate-500">Khu vực đang chọn có {entries.length} trường thông tin</p>
          </div>
        </div>
        <div className="flex px-6 gap-6">
          <button 
            className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'vi' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('vi')}
          >
            Tiếng Việt (VI) <span className="ml-1 text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">CANONICAL</span>
          </button>
          <button 
            className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'en' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('en')}
          >
            English (EN)
          </button>
          <button 
            className={`py-3 px-1 border-b-2 text-sm font-medium transition-colors ${activeTab === 'zhCN' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('zhCN')}
          >
            简体中文 (ZH)
          </button>
        </div>
      </div>

      {/* Editor Form Area */}
      <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
        <div className="max-w-3xl space-y-8 pb-20">
          {entries.map(entry => {
            const currentValue = draftValues[entry.id]?.[activeTab] ?? '';
            const isChanged = currentValue !== entry[activeTab];
            const tStatus = entry.translationStatuses[activeTab];

            return (
              <div key={entry.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                {/* Field Header */}
                <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {entry.type === 'TEXT' || entry.type === 'TEXTAREA' ? <Type className="w-4 h-4 text-slate-400" /> : null}
                    {entry.type === 'IMAGE_REFERENCE' || entry.type === 'VIDEO_REFERENCE' ? <ImageIcon className="w-4 h-4 text-slate-400" /> : null}
                    <span className="font-semibold text-slate-700">{entry.label}</span>
                    <span className="text-xs text-slate-400 font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">{entry.fieldKey}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {tStatus === 'OUTDATED' && (
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded flex items-center gap-1 border border-amber-100">
                        <AlertCircle className="w-3 h-3" /> OUTDATED
                      </span>
                    )}
                    
                    <button 
                      onClick={() => setShowHistoryFor(entry.id)}
                      className="text-xs font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors"
                    >
                      <History className="w-3.5 h-3.5" /> History (v{entry.version})
                    </button>
                    
                    <button 
                      onClick={() => handleSaveDraft(entry)}
                      disabled={!isChanged}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${
                        isChanged 
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm' 
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <Save className="w-3.5 h-3.5" /> Save Draft
                    </button>
                  </div>
                </div>
                
                {/* Field Input */}
                <div className="p-5">
                  {entry.type === 'TEXT' && (
                    <input 
                      type="text"
                      value={currentValue}
                      onChange={(e) => handleValueChange(entry.id, activeTab, e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                  )}
                  {entry.type === 'TEXTAREA' && (
                    <textarea 
                      value={currentValue}
                      onChange={(e) => handleValueChange(entry.id, activeTab, e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                  )}
                  {(entry.type === 'IMAGE_REFERENCE' || entry.type === 'VIDEO_REFERENCE') && (
                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex items-center gap-4">
                      <div className="w-32 h-20 bg-slate-200 rounded overflow-hidden relative shrink-0">
                        {currentValue ? (
                          entry.type === 'IMAGE_REFERENCE' ? (
                            <img src={currentValue} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-slate-800 text-xs font-bold">
                              VIDEO
                            </div>
                          )
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <ImageIcon className="w-8 h-8 opacity-50" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 space-y-2">
                        <input 
                          type="text"
                          value={currentValue}
                          onChange={(e) => handleValueChange(entry.id, activeTab, e.target.value)}
                          placeholder={entry.type === 'IMAGE_REFERENCE' ? "Image URL..." : "Video URL..."}
                          className="w-full px-3 py-1.5 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        />
                        <button 
                          onClick={() => setPickerOpenFor({ entryId: entry.id, tab: activeTab })}
                          className="text-xs bg-white border border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded shadow-sm font-semibold transition-colors"
                        >
                          CHỌN TỪ THƯ VIỆN
                        </button>
                      </div>
                    </div>
                  )}

                  {(entry.type === 'LIST' || entry.type === 'REPEATER' || entry.type === 'STRUCTURED_OBJECT') && (
                    <div className="border border-slate-200 rounded-lg p-4 bg-white">
                      <NestedFieldEditor 
                        value={currentValue}
                        onChange={(newVal) => handleValueChange(entry.id, activeTab, newVal)}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {showHistoryFor && (
        <VersionHistory 
          entryId={showHistoryFor} 
          onClose={() => setShowHistoryFor(null)} 
          onRestore={async () => {
            const sectionEntries = await repository.getContentEntriesBySectionId(selectedSectionId!);
            setEntries(sectionEntries);
            const initialDrafts: Record<string, { vi: any; en: any; zhCN: any }> = {};
            sectionEntries.forEach(entry => {
              initialDrafts[entry.id] = { vi: entry.vi, en: entry.en, zhCN: entry.zhCN };
            });
            setDraftValues(initialDrafts);
            setShowHistoryFor(null);
          }}
        />
      )}

      {pickerOpenFor && (
        <MediaPickerModal 
          allowedTypes={[]}
          onClose={() => setPickerOpenFor(null)}
          onSelect={(asset) => {
            handleValueChange(pickerOpenFor.entryId, pickerOpenFor.tab, asset.sourceUrl);
            setPickerOpenFor(null);
          }}
        />
      )}
    </div>
  );
};
