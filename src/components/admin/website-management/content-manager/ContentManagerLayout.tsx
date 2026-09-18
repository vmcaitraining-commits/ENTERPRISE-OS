import React, { useState, useEffect } from 'react';
import { WebsiteTree } from './WebsiteTree';
import { ContentEditor } from './ContentEditor';
import { ContentProperties } from './ContentProperties';
import { WebsitePage, WebsiteSection, WebsiteContentEntry } from '../../../../modules/website-management/domain/models';
import { LocalWebsiteManagementRepository } from '../../../../modules/website-management/infrastructure/local-adapter';
import { ShieldAlert, Info, PenTool, Image as ImageIcon } from 'lucide-react';
import { MediaLibraryLayout } from '../media-library/MediaLibraryLayout';

const repository = new LocalWebsiteManagementRepository();

export const ContentManagerLayout: React.FC = () => {
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [activeTab, setActiveTab] = useState<'CONTENT' | 'MEDIA'>('CONTENT');

  // Unsaved changes protection
  const handleSelectPage = (pageId: string) => {
    if (hasUnsavedChanges) {
      if (!window.confirm('You have unsaved changes. Do you want to discard them?')) return;
    }
    setHasUnsavedChanges(false);
    setSelectedPageId(pageId);
    setSelectedSectionId(null);
  };

  const handleSelectSection = (sectionId: string) => {
    if (hasUnsavedChanges) {
      if (!window.confirm('You have unsaved changes. Do you want to discard them?')) return;
    }
    setHasUnsavedChanges(false);
    setSelectedSectionId(sectionId);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)] relative">
      {/* Top Banner for Auth & Publish Status */}
      <div className="bg-slate-50 border-b border-[#E5EAF1] px-4 flex items-center justify-between shrink-0 h-14">
        
        <div className="flex items-center gap-2 h-full">
          <button
            onClick={() => setActiveTab('CONTENT')}
            className={`h-full px-4 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'CONTENT' ? 'border-[#155EEF] text-[#155EEF]' : 'border-transparent text-[#64748B] hover:bg-slate-100 hover:text-[#0F1F3D]'
            }`}
          >
            <PenTool className="w-4 h-4" />
            Cấu trúc & Nội dung
          </button>
          <button
            onClick={() => setActiveTab('MEDIA')}
            className={`h-full px-4 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'MEDIA' ? 'border-[#155EEF] text-[#155EEF]' : 'border-transparent text-[#64748B] hover:bg-slate-100 hover:text-[#0F1F3D]'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Thư viện Media
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] bg-white px-2.5 py-1 rounded-md border border-[#E5EAF1]">
            <Info className="w-3.5 h-3.5 text-[#155EEF]" />
            Kho dữ liệu: Cục bộ (Đang kết nối)
          </div>
          <button disabled className="px-3.5 py-1.5 bg-slate-100 text-slate-400 rounded-md text-xs font-semibold cursor-not-allowed border border-[#E5EAF1]">
            Xuất bản
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {activeTab === 'CONTENT' && (
          <div className="absolute inset-0 flex">
            {/* Left Panel: Tree */}
            <div className="w-72 border-r border-[#E5EAF1] bg-white flex flex-col shrink-0 overflow-hidden">
              <WebsiteTree 
                selectedPageId={selectedPageId}
                selectedSectionId={selectedSectionId}
                onSelectPage={handleSelectPage}
                onSelectSection={handleSelectSection}
              />
            </div>
            
            {/* Center Panel: Editor */}
            <div className="flex-1 bg-[#F7F9FC] flex flex-col overflow-hidden">
              <ContentEditor 
                selectedPageId={selectedPageId} 
                selectedSectionId={selectedSectionId} 
                onUnsavedChangesChange={setHasUnsavedChanges}
              />
            </div>

            {/* Right Panel: Properties */}
            <div className="w-80 border-l border-[#E5EAF1] bg-white shrink-0 overflow-y-auto">
              <ContentProperties 
                selectedPageId={selectedPageId} 
                selectedSectionId={selectedSectionId} 
              />
            </div>
          </div>
        )}

        {activeTab === 'MEDIA' && (
          <div className="absolute inset-0 bg-slate-50">
            <MediaLibraryLayout />
          </div>
        )}
      </div>
    </div>
  );
};
