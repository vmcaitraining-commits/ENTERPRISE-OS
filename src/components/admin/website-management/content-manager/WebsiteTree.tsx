import React, { useState } from 'react';
import { websiteManifest } from '../../../../modules/website-management/domain/website-manifest';
import { ChevronRight, ChevronDown, FileText, Layout, Search, Globe } from 'lucide-react';

interface WebsiteTreeProps {
  selectedPageId: string | null;
  selectedSectionId: string | null;
  onSelectPage: (id: string) => void;
  onSelectSection: (id: string) => void;
}

export const WebsiteTree: React.FC<WebsiteTreeProps> = ({
  selectedPageId,
  selectedSectionId,
  onSelectPage,
  onSelectSection
}) => {
  const [expandedPages, setExpandedPages] = useState<Set<string>>(new Set(websiteManifest.map(p => p.id)));
  const [searchQuery, setSearchQuery] = useState('');

  const togglePage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newExpanded = new Set(expandedPages);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedPages(newExpanded);
  };

  const filteredManifest = websiteManifest.map(page => ({
    ...page,
    sections: page.sections.filter(sec => 
      sec.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(page => page.sections.length > 0 || page.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-slate-200 shrink-0">
        <div className="relative">
          <Search className="absolute left-2.5 top-2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search pages, sections..." 
            className="w-full pl-8 pr-3 py-1.5 text-sm bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 rounded-md outline-none transition-all"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredManifest.map(page => {
          const isExpanded = expandedPages.has(page.id);
          const isSelected = selectedPageId === page.id && selectedSectionId === null;
          
          return (
            <div key={page.id} className="select-none">
              <div 
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md cursor-pointer text-sm transition-colors ${
                  isSelected ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => onSelectPage(page.id)}
              >
                <div onClick={(e) => togglePage(page.id, e)} className="p-0.5 hover:bg-slate-200 rounded cursor-pointer">
                  {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                </div>
                {page.isGlobal ? <Globe className="w-4 h-4 text-emerald-500" /> : <FileText className="w-4 h-4 text-slate-400" />}
                <span className="truncate">{page.name}</span>
              </div>
              
              {isExpanded && (
                <div className="ml-6 mt-0.5 space-y-0.5">
                  {page.sections.map(section => {
                    const isSectionSelected = selectedSectionId === section.id && selectedPageId === page.id;
                    return (
                      <div 
                        key={section.id}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer text-sm transition-colors ${
                          isSectionSelected ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-slate-600 hover:bg-slate-100'
                        }`}
                        onClick={() => {
                          onSelectPage(page.id);
                          onSelectSection(section.id);
                        }}
                      >
                        <Layout className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">{section.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
