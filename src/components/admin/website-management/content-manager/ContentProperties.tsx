import React, { useState, useEffect } from 'react';
import { LocalWebsiteManagementRepository } from '../../../../modules/website-management/infrastructure/local-adapter';
import { WebsitePage, WebsiteSection, WebsiteContentEntry, WebsiteContentBaselineSnapshot } from '../../../../modules/website-management/domain/models';
import { Info, FileText, Layout, Clock, Globe, Database } from 'lucide-react';

const repository = new LocalWebsiteManagementRepository();

interface ContentPropertiesProps {
  selectedPageId: string | null;
  selectedSectionId: string | null;
}

export const ContentProperties: React.FC<ContentPropertiesProps> = ({ selectedPageId, selectedSectionId }) => {
  const [page, setPage] = useState<WebsitePage | null>(null);
  const [section, setSection] = useState<WebsiteSection | null>(null);
  const [entries, setEntries] = useState<WebsiteContentEntry[]>([]);
  const [baseline, setBaseline] = useState<WebsiteContentBaselineSnapshot | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const snap = await repository.getBaselineSnapshot();
      setBaseline(snap);

      if (selectedPageId) {
        const p = await repository.getPageById(selectedPageId);
        setPage(p);
      } else {
        setPage(null);
      }
      
      if (selectedSectionId && selectedPageId) {
        const secs = await repository.getSectionsByPageId(selectedPageId);
        const sec = secs.find(s => s.id === selectedSectionId);
        setSection(sec || null);
        
        if (sec) {
          const ents = await repository.getContentEntriesBySectionId(sec.id);
          setEntries(ents);
        } else {
          setEntries([]);
        }
      } else {
        setSection(null);
        setEntries([]);
      }
    };
    fetchData();
  }, [selectedPageId, selectedSectionId]);

  if (!page) {
    return (
      <div className="p-4 text-center text-slate-400 mt-10">
        <Info className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">Select an item to view properties</p>
      </div>
    );
  }

  // Determine Content Origin
  const hasDrafts = entries.some(e => e.version > 1);
  let contentOrigin = 'Baseline';
  if (hasDrafts) contentOrigin = 'Draft';

  const sourceTypes = Array.from(new Set(entries.map(e => e.sourceType))).filter(Boolean);
  const sourceRefs = Array.from(new Set(entries.map(e => e.sourceReference))).filter(Boolean);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0">
        <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
          <Info className="w-4 h-4 text-slate-500" /> Properties & Status
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        
        {/* Content Origin */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
            <Database className="w-4 h-4 text-indigo-500" /> Content Origin
          </div>
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Current State</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${contentOrigin === 'Draft' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {contentOrigin}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Source Types</span>
              <span className="font-medium text-slate-900 text-right truncate max-w-[150px]" title={sourceTypes.join(', ')}>
                {sourceTypes.length > 0 ? sourceTypes.join(', ') : 'N/A'}
              </span>
            </div>
            {sourceRefs.length > 0 && (
              <div className="flex flex-col gap-1 mt-2 pt-2 border-t border-slate-200">
                <span className="text-slate-500 text-xs">Source References:</span>
                {sourceRefs.map((ref, i) => (
                  <span key={i} className="text-slate-700 font-mono text-[10px] truncate" title={ref}>{ref}</span>
                ))}
              </div>
            )}
            {baseline && (
              <div className="flex flex-col gap-1 mt-2 pt-2 border-t border-slate-200">
                <span className="text-slate-500 text-xs">Baseline Snapshot ID:</span>
                <span className="text-slate-700 font-mono text-[10px] truncate">{baseline.snapshotId}</span>
              </div>
            )}
          </div>
        </div>

        {/* Page Properties */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
            <FileText className="w-4 h-4 text-indigo-500" /> Page Info
          </div>
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Name</span>
              <span className="font-medium text-slate-900">{page.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Route</span>
              <span className="font-medium text-slate-900 font-mono text-xs">{page.route}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Coverage</span>
              <span className="font-medium text-slate-900">{page.coverageStatus?.replace(/_/g, ' ') || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Status</span>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded uppercase">{page.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Sections</span>
              <span className="font-medium text-slate-900">{page.sectionIds.length}</span>
            </div>
          </div>
        </div>

        {/* Section Properties */}
        {section && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
              <Layout className="w-4 h-4 text-indigo-500" /> Section Info
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Name</span>
                <span className="font-medium text-slate-900">{section.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Coverage</span>
                <span className="font-medium text-slate-900">{section.coverageStatus?.replace(/_/g, ' ') || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Visibility</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${section.visible ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>
                  {section.visible ? 'VISIBLE' : 'HIDDEN'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Fields</span>
                <span className="font-medium text-slate-900">{entries.length}</span>
              </div>
            </div>
          </div>
        )}

        {/* Localization Health */}
        {section && entries.length > 0 && (
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300 delay-75">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
              <Globe className="w-4 h-4 text-indigo-500" /> Translation Health
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-2 text-sm">
              {['vi', 'en', 'zhCN'].map(locale => {
                const outdatedCount = entries.filter(e => e.translationStatuses[locale as 'vi'|'en'|'zhCN'] === 'OUTDATED').length;
                const isCanonical = locale === 'vi';
                
                return (
                  <div key={locale} className="flex justify-between items-center">
                    <span className="text-slate-600 uppercase font-medium flex items-center gap-2">
                      {locale}
                      {isCanonical && <span className="text-[9px] bg-slate-200 text-slate-600 px-1 py-0.5 rounded">CANONICAL</span>}
                    </span>
                    {outdatedCount > 0 ? (
                      <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                        {outdatedCount} outdated
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-emerald-600">
                        100% current
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
