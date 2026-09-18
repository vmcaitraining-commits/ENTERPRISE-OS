import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, X, ArrowRight, Building2, Globe, FileText, Image as ImageIcon, Sparkles, LayoutTemplate, PenTool } from 'lucide-react';
import { usePublicRouter } from '../../../context/PublicRouterContext';

export const AdminSearchBar: React.FC = () => {
  const { navigate } = usePublicRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Available real routes in the system for quick jump
  const navigationItems = [
    { title: 'Trang chủ Admin', path: '/admin', category: 'Điều hành', icon: Sparkles },
    { title: 'Tổng quan Doanh nghiệp', path: '/admin/company/overview', category: 'Doanh nghiệp', icon: Building2 },
    { title: 'Hồ sơ doanh nghiệp', path: '/admin/company/profile', category: 'Doanh nghiệp', icon: FileText },
    { title: 'Định vị & Chiến lược', path: '/admin/company/strategy', category: 'Doanh nghiệp', icon: Building2 },
    { title: 'Sản phẩm & Thị trường', path: '/admin/company/products-market', category: 'Doanh nghiệp', icon: Building2 },
    { title: 'Nhận diện thương hiệu', path: '/admin/company/brand', category: 'Doanh nghiệp', icon: Building2 },
    { title: 'Kho ảnh & Video Media', path: '/admin/company/media', category: 'Doanh nghiệp', icon: ImageIcon },
    { title: 'Quản trị dữ liệu cần rà soát', path: '/admin/company/data-review', category: 'Doanh nghiệp', icon: FileText },
    { title: 'Tổng quan Website', path: '/admin/website/overview', category: 'Website', icon: Globe },
    { title: 'Quản trị nội dung (Content)', path: '/admin/website/content', category: 'Website', icon: PenTool },
    { title: 'Giao diện & Trình xây dựng (Builder)', path: '/admin/website/builder', category: 'Website', icon: LayoutTemplate },
  ];

  // Shortcut Ctrl + K or Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredItems = query.trim()
    ? navigationItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : navigationItems.slice(0, 6);

  const handleSelect = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Shell input button on Topbar */}
      <div
        id="admin-global-search-trigger"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2.5 px-3 py-2 w-64 sm:w-80 md:w-96 rounded-lg bg-slate-50 hover:bg-slate-100/80 border border-[#E5EAF1] text-xs text-[#64748B] cursor-pointer transition-all duration-150 group"
      >
        <Search className="w-4 h-4 text-slate-400 group-hover:text-[#155EEF] transition-colors shrink-0" />
        <span className="truncate flex-1 text-left">
          Tìm kiếm chức năng, dữ liệu, tài nguyên…
        </span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-500 bg-white border border-slate-200 rounded shadow-2xs shrink-0">
          <Command className="w-2.5 h-2.5" /> K
        </kbd>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-xs">
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-[#E5EAF1] overflow-hidden z-10">
            {/* Input Header */}
            <div className="flex items-center px-4 border-b border-[#E5EAF1]">
              <Search className="w-4 h-4 text-[#155EEF] shrink-0 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Tìm kiếm phân hệ, hồ sơ, website, tài nguyên..."
                className="w-full py-3.5 text-sm text-[#0F1F3D] placeholder:text-slate-400 focus:outline-none bg-transparent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 mr-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredItems.length > 0 ? (
                <>
                  <div className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {query.trim() ? 'Kết quả điều hướng' : 'Chức năng gợi ý'}
                  </div>
                  {filteredItems.map(item => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.path}
                        onClick={() => handleSelect(item.path)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#155EEF] cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-7 h-7 rounded-md bg-slate-100 text-slate-500 group-hover:bg-[#155EEF] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-semibold truncate">
                            {item.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] text-slate-400 bg-slate-100 group-hover:bg-blue-100 group-hover:text-[#155EEF] px-2 py-0.5 rounded font-medium transition-colors">
                            {item.category}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#155EEF]" />
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="py-8 text-center text-xs text-slate-500">
                  <p className="font-semibold text-[#0F1F3D]">Không tìm thấy kết quả phù hợp</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Global Search mở rộng toàn diện đang chuẩn bị kết nối dữ liệu.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-slate-50 border-t border-[#E5EAF1] flex items-center justify-between text-[11px] text-slate-400">
              <span>Nhấn Enter để mở</span>
              <span>ESC để đóng</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
