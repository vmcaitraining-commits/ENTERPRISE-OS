import React, { useState, useEffect, useRef } from 'react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { useEnterprise } from '../../context/EnterpriseContext';
import { useTheme } from '../../context/ThemeContext';
import { PublicLink } from './PublicLink';
import {
  NAV_DEPARTMENTS,
  NAV_NEEDS,
  NAV_INDUSTRIES,
  NAV_AI_AGENTS
} from './navigationData';
import {
  Menu, X, ChevronDown, Sparkles, Sun, Moon, Monitor,
  Shield, ArrowRight, Layers, ShieldCheck
} from 'lucide-react';

export const PublicHeader: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = usePublicRouter();
  const { data } = useEnterprise();
  const { theme, setTheme, activeTheme } = useTheme();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const companyName = data?.identity?.companyName?.value || 'VMC Group';

  // Handle page scrolling header backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close active mega menus and mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeMenu) {
          setActiveMenu(null);
        }
        if (isThemeMenuOpen) {
          setIsThemeMenuOpen(false);
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMenu, isThemeMenuOpen, isMobileMenuOpen]);

  // Click outside to close active mega menus
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(e.target as Node)
      ) {
        setActiveMenu(null);
      }
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(e.target as Node)
      ) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMegaMenu = (menuName: string) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
    setIsThemeMenuOpen(false);
  };

  const closeAllMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setIsThemeMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#070E1B]/95 backdrop-blur-md border-slate-200/90 dark:border-slate-800/90 shadow-2xs'
          : 'bg-white dark:bg-[#070E1B] border-slate-200 dark:border-slate-800'
      }`}
    >
      {/* Top Value Banner - Compact, high-signal */}
      <div className="hidden sm:block bg-gradient-to-r from-[#0B1F3A] via-[#0e2c56] to-[#155EEF] text-white text-[11px] py-1.5 px-4 text-center font-medium border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-[#06B6D4]/20 text-[#06B6D4] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-[#06B6D4]/30">
              AI Enterprise
            </span>
            <span className="text-slate-200">
              Hệ điều hành doanh nghiệp thế hệ mới — 11 phân hệ lõi, 9 AI Copilots & cơ chế Human-in-the-Loop
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <PublicLink
              href="/ai-enterprise#architecture"
              className="text-[#06B6D4] hover:text-white transition-colors underline font-medium"
            >
              Xem sơ đồ luồng dữ liệu →
            </PublicLink>
            <span className="text-slate-500">|</span>
            <PublicLink
              href="/admin"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              title="Truy cập Workspace Quản trị Dữ liệu Doanh nghiệp"
            >
              <Shield className="w-3 h-3 text-[#06B6D4]" />
              <span>Workspace Quản trị</span>
            </PublicLink>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-18'
          }`}
        >
          {/* Brand Logo & Desktop Navigation */}
          <div className="flex items-center gap-6" ref={menuContainerRef}>
            <PublicLink
              href="/"
              onClick={closeAllMenus}
              className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-[#155EEF] rounded-xl p-1"
              aria-label="VMC Group - Về trang chủ"
            >
              {/* Brand Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0B1F3A] dark:bg-slate-900 border border-slate-700/50 flex items-center justify-center text-white shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                <div className="flex items-center tracking-tight">
                  <span className="font-black text-sm sm:text-base text-white">V</span>
                  <span className="font-black text-sm sm:text-base text-[#06B6D4]">M</span>
                  <span className="font-black text-sm sm:text-base text-[#155EEF]">C</span>
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4] transition-colors leading-none">
                  {companyName}
                </span>
                <span className="text-[10px] font-bold text-[#06B6D4] tracking-widest mt-1 uppercase">
                  AI ENTERPRISE OS
                </span>
              </div>
            </PublicLink>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Thanh điều hướng chính"
            >
              {/* Trang chủ */}
              <PublicLink
                href="/"
                exact
                onClick={closeAllMenus}
                className="px-3 py-2 text-xs font-semibold rounded-lg transition-colors text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                activeClassName="!text-[#155EEF] dark:!text-[#06B6D4] !bg-blue-50/80 dark:!bg-blue-950/40"
              >
                Trang chủ
              </PublicLink>

              {/* Menu 1: AI ENTERPRISE Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  id="menu-btn-enterprise"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === 'enterprise'}
                  aria-controls="mega-menu-enterprise"
                  onClick={() => toggleMegaMenu('enterprise')}
                  className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeMenu === 'enterprise' || currentPath.startsWith('/ai-enterprise')
                      ? 'text-[#155EEF] dark:text-[#06B6D4] bg-blue-50/80 dark:bg-blue-950/40'
                      : 'text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>AI ENTERPRISE</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      activeMenu === 'enterprise' ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {activeMenu === 'enterprise' && (
                  <div
                    id="mega-menu-enterprise"
                    role="region"
                    aria-labelledby="menu-btn-enterprise"
                    className="absolute top-full left-0 mt-2 w-84 bg-white dark:bg-[#0D182E] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/80 p-3 animate-fadeIn z-50"
                  >
                    <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100 dark:border-slate-800/80 mb-1.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Hệ Điều Hành Doanh Nghiệp
                      </span>
                      <PublicLink
                        href="/ai-enterprise"
                        onClick={closeAllMenus}
                        className="text-[11px] font-bold text-[#155EEF] dark:text-[#06B6D4] hover:underline"
                      >
                        Trang tổng quan →
                      </PublicLink>
                    </div>

                    <div className="space-y-1">
                      <PublicLink
                        href="/ai-enterprise"
                        exact
                        onClick={closeAllMenus}
                        className="w-full flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                      >
                        <Sparkles className="w-4 h-4 text-[#155EEF] dark:text-[#06B6D4] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4]">
                            Mô hình Hệ điều hành AI
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Kiến trúc điều hành dựa trên dữ liệu và AI
                          </div>
                        </div>
                      </PublicLink>

                      <PublicLink
                        href="/ai-enterprise#architecture"
                        onClick={closeAllMenus}
                        className="w-full flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                      >
                        <Layers className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4]">
                            11 Phân hệ lõi (Scope A-K)
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Từ Website, CRM, CSKH đến Hệ thống & BI
                          </div>
                        </div>
                      </PublicLink>

                      <PublicLink
                        href="/ai-enterprise#principles"
                        onClick={closeAllMenus}
                        className="w-full flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4]">
                            6 Nguyên tắc cốt lõi
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Dữ liệu riêng biệt, không ảo giác, kiểm soát rủi ro
                          </div>
                        </div>
                      </PublicLink>

                      <PublicLink
                        href="/ai-enterprise#security"
                        onClick={closeAllMenus}
                        className="w-full flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                      >
                        <Shield className="w-4 h-4 text-[#D9A62E] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4]">
                            Bảo mật & Phân quyền
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Ranh giới phê duyệt con người (Human-in-the-Loop)
                          </div>
                        </div>
                      </PublicLink>
                    </div>
                  </div>
                )}
              </div>

              {/* Menu 2: GIẢI PHÁP Mega Menu (3 Columns) */}
              <div className="relative">
                <button
                  type="button"
                  id="menu-btn-solutions"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === 'solutions'}
                  aria-controls="mega-menu-solutions"
                  onClick={() => toggleMegaMenu('solutions')}
                  className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeMenu === 'solutions' || currentPath.startsWith('/solutions') || currentPath.startsWith('/industries')
                      ? 'text-[#155EEF] dark:text-[#06B6D4] bg-blue-50/80 dark:bg-blue-950/40'
                      : 'text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>Giải pháp</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      activeMenu === 'solutions' ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {activeMenu === 'solutions' && (
                  <div
                    id="mega-menu-solutions"
                    role="region"
                    aria-labelledby="menu-btn-solutions"
                    className="absolute top-full -left-20 mt-2 w-[760px] bg-white dark:bg-[#0D182E] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/80 p-5 animate-fadeIn grid grid-cols-3 gap-6 z-50"
                  >
                    {/* Column 1: Theo phòng ban */}
                    <div>
                      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold text-[#155EEF] dark:text-blue-400 uppercase tracking-wider">
                          Theo phòng ban
                        </span>
                        <PublicLink
                          href="/solutions"
                          onClick={closeAllMenus}
                          className="text-[10px] font-bold text-[#155EEF] dark:text-blue-400 hover:underline"
                        >
                          Tất cả →
                        </PublicLink>
                      </div>

                      <div className="space-y-1">
                        {NAV_DEPARTMENTS.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <PublicLink
                              key={item.path}
                              href={item.path}
                              onClick={closeAllMenus}
                              className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-[#155EEF] dark:hover:text-[#06B6D4] transition-colors"
                            >
                              <IconComp className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                              <span>{item.name}</span>
                            </PublicLink>
                          );
                        })}
                      </div>
                    </div>

                    {/* Column 2: Theo nhu cầu chuyển đổi */}
                    <div>
                      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold text-[#06B6D4] uppercase tracking-wider">
                          Theo nhu cầu lõi
                        </span>
                        <PublicLink
                          href="/solutions"
                          onClick={closeAllMenus}
                          className="text-[10px] font-bold text-[#06B6D4] hover:underline"
                        >
                          Khám phá →
                        </PublicLink>
                      </div>

                      <div className="space-y-1">
                        {NAV_NEEDS.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <PublicLink
                              key={item.path}
                              href={item.path}
                              onClick={closeAllMenus}
                              className="w-full flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-[#06B6D4] transition-colors"
                            >
                              <IconComp className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                              <span>{item.name}</span>
                            </PublicLink>
                          );
                        })}
                      </div>
                    </div>

                    {/* Column 3: Theo 8 Ngành ưu tiên */}
                    <div>
                      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold text-[#D9A62E] uppercase tracking-wider">
                          Theo 8 ngành
                        </span>
                        <PublicLink
                          href="/industries"
                          onClick={closeAllMenus}
                          className="text-[10px] font-bold text-[#D9A62E] hover:underline"
                        >
                          Xem tất cả →
                        </PublicLink>
                      </div>

                      <div className="space-y-0.5">
                        {NAV_INDUSTRIES.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <PublicLink
                              key={item.path}
                              href={item.path}
                              onClick={closeAllMenus}
                              className="w-full flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-[#D9A62E] transition-colors"
                            >
                              <IconComp className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                              <span>{item.name}</span>
                            </PublicLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Menu 3: AI & TỰ ĐỘNG HÓA Mega Menu (9 AI Copilot) */}
              <div className="relative">
                <button
                  type="button"
                  id="menu-btn-ai"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === 'ai'}
                  aria-controls="mega-menu-ai"
                  onClick={() => toggleMegaMenu('ai')}
                  className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeMenu === 'ai' || currentPath.startsWith('/ai')
                      ? 'text-[#155EEF] dark:text-[#06B6D4] bg-blue-50/80 dark:bg-blue-950/40'
                      : 'text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>AI & Tự động hóa</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      activeMenu === 'ai' ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {activeMenu === 'ai' && (
                  <div
                    id="mega-menu-ai"
                    role="region"
                    aria-labelledby="menu-btn-ai"
                    className="absolute top-full -left-20 mt-2 w-[540px] bg-white dark:bg-[#0D182E] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/80 p-4 animate-fadeIn z-50"
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Mạng lưới 9 AI Copilots chuyên môn
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Chỉ đọc, phân tích & đề xuất — Không tự ý quyết định
                        </span>
                      </div>
                      <PublicLink
                        href="/ai"
                        onClick={closeAllMenus}
                        className="text-xs font-semibold text-[#155EEF] dark:text-[#06B6D4] hover:underline"
                      >
                        Xem tất cả 9 Agent →
                      </PublicLink>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {NAV_AI_AGENTS.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <PublicLink
                            key={item.path}
                            href={item.path}
                            onClick={closeAllMenus}
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 text-left group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-[#155EEF] dark:text-[#06B6D4] group-hover:bg-[#155EEF] group-hover:text-white dark:group-hover:bg-[#06B6D4] dark:group-hover:text-[#0B1F3A] transition-colors shrink-0">
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#155EEF] dark:group-hover:text-[#06B6D4]">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                {item.desc}
                              </div>
                            </div>
                          </PublicLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* NĂNG LỰC */}
              <PublicLink
                href="/capabilities"
                onClick={closeAllMenus}
                className="px-3 py-2 text-xs font-semibold rounded-lg transition-colors text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                activeClassName="!text-[#155EEF] dark:!text-[#06B6D4] !bg-blue-50/80 dark:!bg-blue-950/40"
              >
                Năng lực
              </PublicLink>

              {/* TÀI NGUYÊN */}
              <PublicLink
                href="/resources"
                onClick={closeAllMenus}
                className="px-3 py-2 text-xs font-semibold rounded-lg transition-colors text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                activeClassName="!text-[#155EEF] dark:!text-[#06B6D4] !bg-blue-50/80 dark:!bg-blue-950/40"
              >
                Tài nguyên
              </PublicLink>

              {/* VỀ VMC GROUP */}
              <PublicLink
                href="/about"
                onClick={closeAllMenus}
                className="px-3 py-2 text-xs font-semibold rounded-lg transition-colors text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                activeClassName="!text-[#155EEF] dark:!text-[#06B6D4] !bg-blue-50/80 dark:!bg-blue-950/40"
              >
                Về VMC Group
              </PublicLink>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button & Dropdown */}
            <div className="relative" ref={themeMenuRef}>
              <button
                type="button"
                id="theme-selector-btn"
                aria-haspopup="true"
                aria-expanded={isThemeMenuOpen}
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={`Chế độ hiển thị (${theme === 'system' ? 'Tự động' : theme === 'dark' ? 'Tối' : 'Sáng'})`}
                aria-label="Chuyển chế độ giao diện Sáng / Tối"
              >
                {activeTheme === 'dark' ? (
                  <Moon className="w-4 h-4 text-[#06B6D4]" />
                ) : (
                  <Sun className="w-4 h-4 text-[#D9A62E]" />
                )}
              </button>

              {isThemeMenuOpen && (
                <div
                  role="menu"
                  aria-labelledby="theme-selector-btn"
                  className="absolute right-0 mt-2 w-38 bg-white dark:bg-[#0D182E] rounded-xl shadow-xl border border-slate-200 dark:border-slate-700/80 p-1.5 text-xs animate-fadeIn z-50"
                >
                  <button
                    role="menuitem"
                    onClick={() => {
                      setTheme('light');
                      setIsThemeMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors text-left cursor-pointer ${
                      theme === 'light'
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-[#155EEF] dark:text-[#06B6D4] font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5 text-[#D9A62E]" />
                    <span>Giao diện Sáng</span>
                  </button>
                  <button
                    role="menuitem"
                    onClick={() => {
                      setTheme('dark');
                      setIsThemeMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors text-left cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-[#155EEF] dark:text-[#06B6D4] font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>Giao diện Tối</span>
                  </button>
                  <button
                    role="menuitem"
                    onClick={() => {
                      setTheme('system');
                      setIsThemeMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-colors text-left cursor-pointer ${
                      theme === 'system'
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-[#155EEF] dark:text-[#06B6D4] font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5 text-slate-400" />
                    <span>Theo hệ thống</span>
                  </button>
                </div>
              )}
            </div>

            {/* Chuyển sang Workspace / Admin Portal (Distinct appearance) */}
            <PublicLink
              href="/admin"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl transition-colors border border-slate-200 dark:border-slate-700/70"
              title="Truy cập Workspace Quản trị Dữ liệu Doanh nghiệp"
            >
              <Shield className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Workspace</span>
            </PublicLink>

            {/* Đăng ký tư vấn CTA */}
            <button
              type="button"
              onClick={() => {
                closeAllMenus();
                openConsultationModal('consultation');
              }}
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 bg-[#155EEF] hover:bg-[#1048b8] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
            >
              <span>Đăng ký tư vấn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button with dynamic accessible label */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-[#0B1F3A] dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
              aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu điều hướng di động"
          className="fixed inset-0 top-[57px] sm:top-[65px] z-50 lg:hidden flex flex-col bg-white dark:bg-[#070E1B] border-t border-slate-200 dark:border-slate-800 animate-fadeIn"
        >
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
            {/* Trang chủ */}
            <PublicLink
              href="/"
              exact
              onClick={closeAllMenus}
              className="w-full block px-3 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl"
              activeClassName="!text-[#155EEF] dark:!text-[#06B6D4] !bg-blue-50/80 dark:!bg-blue-950/40"
            >
              Trang chủ
            </PublicLink>

            {/* Accordion 1: AI ENTERPRISE */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === 'enterprise' ? null : 'enterprise'
                  )
                }
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl cursor-pointer"
              >
                <span>AI ENTERPRISE</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    mobileExpandedSection === 'enterprise'
                      ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]'
                      : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileExpandedSection === 'enterprise' && (
                <div className="pl-4 pr-2 py-2 space-y-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 rounded-xl mt-1">
                  <PublicLink
                    href="/ai-enterprise"
                    exact
                    onClick={closeAllMenus}
                    className="block w-full py-1.5 font-bold text-[#155EEF] dark:text-[#06B6D4]"
                  >
                    Tổng quan Hệ điều hành AI →
                  </PublicLink>
                  <PublicLink
                    href="/ai-enterprise#architecture"
                    onClick={closeAllMenus}
                    className="block w-full py-1.5 hover:text-[#0B1F3A] dark:hover:text-white"
                  >
                    11 Phân hệ lõi (Scope A-K)
                  </PublicLink>
                  <PublicLink
                    href="/ai-enterprise#principles"
                    onClick={closeAllMenus}
                    className="block w-full py-1.5 hover:text-[#0B1F3A] dark:hover:text-white"
                  >
                    6 Nguyên tắc triển khai
                  </PublicLink>
                  <PublicLink
                    href="/ai-enterprise#security"
                    onClick={closeAllMenus}
                    className="block w-full py-1.5 hover:text-[#0B1F3A] dark:hover:text-white"
                  >
                    Bảo mật & Phân quyền AI
                  </PublicLink>
                </div>
              )}
            </div>

            {/* Accordion 2: GIẢI PHÁP (Phòng ban + Nhu cầu + ĐỦ 8 NGÀNH) */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === 'solutions' ? null : 'solutions'
                  )
                }
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl cursor-pointer"
              >
                <span>Giải pháp</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    mobileExpandedSection === 'solutions'
                      ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]'
                      : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileExpandedSection === 'solutions' && (
                <div className="pl-4 pr-2 py-2 space-y-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 rounded-xl mt-1">
                  <PublicLink
                    href="/solutions"
                    exact
                    onClick={closeAllMenus}
                    className="block w-full py-1 font-bold text-[#155EEF] dark:text-[#06B6D4]"
                  >
                    Xem trang tổng quan Giải pháp →
                  </PublicLink>

                  {/* Nhóm Theo phòng ban */}
                  <div className="font-bold text-[#155EEF] dark:text-blue-400 pt-1 text-[11px] uppercase tracking-wider">
                    Theo phòng ban:
                  </div>
                  {NAV_DEPARTMENTS.map((dept) => (
                    <PublicLink
                      key={dept.path}
                      href={dept.path}
                      onClick={closeAllMenus}
                      className="block w-full py-1 hover:text-[#0B1F3A] dark:hover:text-white"
                    >
                      {dept.name}
                    </PublicLink>
                  ))}

                  {/* Nhóm Theo nhu cầu chuyển đổi */}
                  <div className="font-bold text-[#06B6D4] pt-2 text-[11px] uppercase tracking-wider">
                    Theo nhu cầu lõi:
                  </div>
                  {NAV_NEEDS.map((need) => (
                    <PublicLink
                      key={need.path}
                      href={need.path}
                      onClick={closeAllMenus}
                      className="block w-full py-1 hover:text-[#0B1F3A] dark:hover:text-white"
                    >
                      {need.name}
                    </PublicLink>
                  ))}

                  {/* Nhóm Theo 8 Ngành ưu tiên - ĐỦ CẢ 8 NGÀNH */}
                  <div className="font-bold text-[#D9A62E] pt-2 text-[11px] uppercase tracking-wider flex items-center justify-between">
                    <span>Theo 8 ngành:</span>
                    <PublicLink
                      href="/industries"
                      onClick={closeAllMenus}
                      className="text-[10px] lowercase hover:underline"
                    >
                      (xem tất cả)
                    </PublicLink>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {NAV_INDUSTRIES.map((ind) => (
                      <PublicLink
                        key={ind.path}
                        href={ind.path}
                        onClick={closeAllMenus}
                        className="block w-full py-1 hover:text-[#D9A62E]"
                      >
                        • {ind.name}
                      </PublicLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 3: AI & TỰ ĐỘNG HÓA (ĐỦ 9 COPILOT) */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === 'ai' ? null : 'ai'
                  )
                }
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl cursor-pointer"
              >
                <span>AI & Tự động hóa</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    mobileExpandedSection === 'ai'
                      ? 'rotate-180 text-[#155EEF] dark:text-[#06B6D4]'
                      : 'text-slate-400'
                  }`}
                />
              </button>

              {mobileExpandedSection === 'ai' && (
                <div className="pl-4 pr-2 py-2 space-y-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 rounded-xl mt-1">
                  <PublicLink
                    href="/ai"
                    exact
                    onClick={closeAllMenus}
                    className="block w-full py-1 font-bold text-[#155EEF] dark:text-[#06B6D4]"
                  >
                    Xem tất cả 9 AI Agent →
                  </PublicLink>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                    {NAV_AI_AGENTS.map((agent) => (
                      <PublicLink
                        key={agent.path}
                        href={agent.path}
                        onClick={closeAllMenus}
                        className="block w-full py-1 hover:text-[#0B1F3A] dark:hover:text-white"
                      >
                        • {agent.name}
                      </PublicLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Năng lực */}
            <PublicLink
              href="/capabilities"
              onClick={closeAllMenus}
              className="w-full block px-3 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl"
              activeClassName="!text-[#155EEF] dark:!text-[#06B6D4] !bg-blue-50/80 dark:!bg-blue-950/40"
            >
              Năng lực
            </PublicLink>

            {/* Tài nguyên */}
            <PublicLink
              href="/resources"
              onClick={closeAllMenus}
              className="w-full block px-3 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl"
              activeClassName="!text-[#155EEF] dark:!text-[#06B6D4] !bg-blue-50/80 dark:!bg-blue-950/40"
            >
              Tài nguyên & Tri thức
            </PublicLink>

            {/* Về VMC Group */}
            <PublicLink
              href="/about"
              onClick={closeAllMenus}
              className="w-full block px-3 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-xl"
              activeClassName="!text-[#155EEF] dark:!text-[#06B6D4] !bg-blue-50/80 dark:!bg-blue-950/40"
            >
              Về VMC Group
            </PublicLink>

            {/* Mobile Theme Selector */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">
                Chế độ hiển thị
              </div>
              <div className="grid grid-cols-3 gap-2 px-1">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold cursor-pointer border ${
                    theme === 'light'
                      ? 'bg-blue-50 dark:bg-blue-950/60 border-[#155EEF] text-[#155EEF] dark:text-[#06B6D4]'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-[#D9A62E]" />
                  <span>Sáng</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold cursor-pointer border ${
                    theme === 'dark'
                      ? 'bg-blue-50 dark:bg-blue-950/60 border-[#155EEF] text-[#155EEF] dark:text-[#06B6D4]'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Tối</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('system')}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold cursor-pointer border ${
                    theme === 'system'
                      ? 'bg-blue-50 dark:bg-blue-950/60 border-[#155EEF] text-[#155EEF] dark:text-[#06B6D4]'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5 text-slate-400" />
                  <span>Tự động</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sticky Mobile Bottom CTA */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0D182E] space-y-2">
            <button
              type="button"
              onClick={() => {
                closeAllMenus();
                openConsultationModal('consultation');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-[#155EEF] hover:bg-[#1048b8] rounded-xl shadow-xs cursor-pointer"
            >
              <span>Đăng ký tư vấn giải pháp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <PublicLink
              href="/admin"
              onClick={closeAllMenus}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white"
            >
              <Shield className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Chuyển sang Workspace Quản trị</span>
            </PublicLink>
          </div>
        </div>
      )}
    </header>
  );
};
