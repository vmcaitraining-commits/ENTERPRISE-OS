import React, { useState } from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import {
  Settings,
  Globe,
  Monitor,
  Tablet,
  Smartphone,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';

export const WebsiteBuilderPage: React.FC = () => {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Giao diện & Trình xây dựng (Theme Builder)"
        description="Quản lý các bản thảo giao diện, hệ thống Design Tokens và cấu trúc cây phân cấp Layout Nodes."
        badge={
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60">
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            1 Active Theme Only
          </span>
        }
        showEditActions={false}
      />

      {/* Builder Workspace Frame */}
      <div className="bg-white rounded-xl border border-[#E5EAF1] p-6 shadow-2xs space-y-6">
        {/* Workspace Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center font-bold text-xs">
              VMC
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F1F3D]">Theme: VMC Corporate Standard</h3>
              <p className="text-xs text-[#64748B]">Mã định danh: theme_vmc_corporate_2026</p>
            </div>
          </div>

          {/* Viewport controls */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                viewport === 'desktop' ? 'bg-white text-[#155EEF] shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Desktop Viewport"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                viewport === 'tablet' ? 'bg-white text-[#155EEF] shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Tablet Viewport"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded text-xs font-medium transition-colors cursor-pointer ${
                viewport === 'mobile' ? 'bg-white text-[#155EEF] shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Mobile Viewport"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Builder Status Banner */}
        <div className="bg-slate-50/80 rounded-xl p-8 border border-[#E5EAF1] border-dashed text-center max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-white text-slate-400 flex items-center justify-center mx-auto mb-3.5 shadow-2xs border border-[#E5EAF1]">
            <Settings className="w-6 h-6 text-[#155EEF]" />
          </div>
          <h4 className="text-sm font-bold text-[#0F1F3D] mb-1">Kiến trúc Theme Builder & Layout Nodes</h4>
          <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
            Mô hình WebsiteTheme và WebsiteLayoutNode đã được thiết kế sẵn sàng cho phân hệ quản trị giao diện trực quan, đồng bộ chặt chẽ với Design Tokens của VMC Group.
          </p>
          
          <button
            disabled
            type="button"
            className="px-4 py-2 bg-slate-100 text-slate-400 rounded-lg text-xs font-semibold cursor-not-allowed inline-flex items-center gap-2 border border-[#E5EAF1]"
          >
            <Globe className="w-4 h-4" />
            Xuất bản giao diện
          </button>
        </div>
      </div>
    </div>
  );
};
