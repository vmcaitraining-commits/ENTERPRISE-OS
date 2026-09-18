import React, { useState } from 'react';
import { Globe, Settings, Database, ShieldAlert, Users, PenTool, LayoutTemplate, Image } from 'lucide-react';
import { LocalWebsiteManagementRepository } from '../../modules/website-management/infrastructure/local-adapter';

const repository = new LocalWebsiteManagementRepository();

import { ContentManagerLayout } from '../admin/website-management/content-manager/ContentManagerLayout';
import { MediaLibraryLayout } from '../admin/website-management/media-library/MediaLibraryLayout';

export interface TabWebsiteManagementProps {
  subTab?: 'overview' | 'content' | 'builder';
  onSelectSubTab?: (subTab: 'overview' | 'content' | 'builder') => void;
}

export const TabWebsiteManagement: React.FC<TabWebsiteManagementProps> = ({ subTab = 'overview', onSelectSubTab }) => {
  const [internalSubTab, setInternalSubTab] = useState<'overview' | 'content' | 'builder'>(subTab);

  // Sync when prop changes
  React.useEffect(() => {
    if (subTab) {
      setInternalSubTab(subTab);
    }
  }, [subTab]);

  const activeView = onSelectSubTab ? subTab : internalSubTab;
  const handleSwitchTab = (tab: 'overview' | 'content' | 'builder') => {
    setInternalSubTab(tab);
    onSelectSubTab?.(tab);
  };

  const persistenceStatus = repository.getPersistenceStatus();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300 h-full flex flex-col">
      
      {/* Header & Status */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100">
              <Globe className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  HỆ THỐNG WEBSITE
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Quản trị trang web
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Website Management System • Quản lý trang tĩnh, trang động, nội dung đa ngôn ngữ và theme giao diện
              </p>
            </div>
          </div>

          {/* Quick Subnav Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => handleSwitchTab('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeView === 'overview'
                  ? 'bg-white text-indigo-600 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tổng quan
            </button>
            <button
              type="button"
              onClick={() => handleSwitchTab('content')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeView === 'content'
                  ? 'bg-white text-indigo-600 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nội dung
            </button>
            <button
              type="button"
              onClick={() => handleSwitchTab('builder')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeView === 'builder'
                  ? 'bg-white text-indigo-600 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Trình xây dựng
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-1">
              <PenTool className="w-3.5 h-3.5 text-indigo-600" /> CONTENT
            </div>
            <div className="text-xs sm:text-sm font-bold text-indigo-600">Local Development</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-1">
              <Image className="w-3.5 h-3.5 text-indigo-600" /> MEDIA
            </div>
            <div className="text-xs sm:text-sm font-bold text-indigo-600">Local / Legacy</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-1">
              <Database className="w-3.5 h-3.5 text-amber-600" /> DATABASE
            </div>
            <div className="text-xs sm:text-sm font-bold text-amber-600">READY / NOT LIVE</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-1">
              <Database className="w-3.5 h-3.5 text-amber-600" /> STORAGE
            </div>
            <div className="text-xs sm:text-sm font-bold text-amber-600">READY / NOT LIVE</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-1">
              <ShieldAlert className="w-3.5 h-3.5 text-blue-600" /> AUTH FOUNDATION
            </div>
            <div className="text-xs sm:text-sm font-bold text-blue-600">CONNECTED / READY</div>
          </div>
          <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-1">
              <Globe className="w-3.5 h-3.5 text-emerald-600" /> ADMIN PROTECTION
            </div>
            <div className="text-xs sm:text-sm font-bold text-emerald-600">ENFORCED (LIVE AUTH)</div>
          </div>
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden flex flex-col flex-1 min-h-[480px]">
        {activeView === 'overview' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Tổng quan hệ thống Quản trị trang web</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                Cung cấp công cụ quản lý nội dung đa ngôn ngữ (Tiếng Việt, Tiếng Anh, Tiếng Trung) cho website VMC Group, tích hợp trình soạn thảo bài viết và quản lý theme giao diện.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                onClick={() => handleSwitchTab('content')}
                className="p-5 rounded-xl border border-slate-200/80 hover:border-indigo-500/60 bg-slate-50/60 hover:bg-indigo-50/20 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <PenTool className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Quản trị nội dung (Content Manager)
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Soạn thảo, phân loại, gắn thẻ và xuất bản bài viết, tin tức doanh nghiệp, giải pháp chuyển đổi số và bài giới thiệu.
                </p>
                <div className="mt-3 text-xs font-semibold text-indigo-600 flex items-center gap-1">
                  Mở công cụ quản trị nội dung →
                </div>
              </div>

              <div 
                onClick={() => handleSwitchTab('builder')}
                className="p-5 rounded-xl border border-slate-200/80 hover:border-indigo-500/60 bg-slate-50/60 hover:bg-indigo-50/20 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <LayoutTemplate className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Giao diện & Trình xây dựng (Theme Builder)
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Kiến trúc bố cục Layout Nodes, Design Tokens, cấu hình header/footer và hệ thống hiển thị đồng bộ nhận diện VMC.
                </p>
                <div className="mt-3 text-xs font-semibold text-indigo-600 flex items-center gap-1">
                  Xem kiến trúc Theme Builder →
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === 'content' && (
          <div className="flex-1 overflow-hidden p-0 relative min-h-[500px]">
            <ContentManagerLayout />
          </div>
        )}

        {activeView === 'builder' && (
          <div className="space-y-4 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">Giao diện & Trình xây dựng website</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
              Quản lý các bản thảo giao diện, hệ thống Design Tokens và cấu trúc Layout Nodes. Hệ thống chỉ cho phép 1 Active Theme duy nhất tại một thời điểm.
            </p>
            
            <div className="bg-slate-50/80 rounded-xl p-8 border border-slate-200 border-dashed text-center">
              <Settings className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-700 mb-1">Theme Builder Architecture</h4>
              <p className="text-xs text-slate-500 mb-4">Mô hình WebsiteTheme và WebsiteLayoutNode đã được định nghĩa độc lập với logic CRM.</p>
              
              <button disabled className="px-4 py-2 bg-slate-200 text-slate-400 rounded-lg text-xs font-semibold cursor-not-allowed inline-flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Publish Theme (Disabled in W1)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
