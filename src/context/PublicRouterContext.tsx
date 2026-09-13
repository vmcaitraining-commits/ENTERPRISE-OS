import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PublicRoute, ConsultationFormData } from '../types/website';
import { LocaleCode } from '../i18n/types';
import { parsePathLocale, buildLocalizedPath } from '../i18n/parser';
import { DEFAULT_LOCALE, isSupportedLocale, isLocalePublished, setStoredLocale } from '../i18n/registry';

const routeSeoMap: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'VMC Group | Kiến Trúc Sư Hệ Thống Doanh Nghiệp Vận Hành Bằng AI',
    description: 'VMC Group xây dựng hệ điều hành doanh nghiệp vận hành bằng AI, kết nối Con người, Dữ liệu, Quy trình, Phần mềm và AI Agent trên một nền tảng thống nhất.'
  },
  '/ai-enterprise': {
    title: 'AI ENTERPRISE | Hệ Điều Hành Doanh Nghiệp Hợp Nhất 11 Phân Hệ - VMC Group',
    description: 'Bản vẽ kiến trúc hợp nhất 11 phân hệ chức năng từ Cổng thông tin, CRM, CSKH, Vận hành, Tài chính đến An ninh và Phân quyền RBAC.'
  },
  '/solutions': {
    title: 'Hệ Thống Giải Pháp Vận Hành Doanh Nghiệp | VMC Group',
    description: 'Tổng quan các giải pháp theo phòng ban và theo nhu cầu chuyển đổi vận hành doanh nghiệp của VMC Group.'
  },
  '/solutions/sales': {
    title: 'Giải Pháp Kinh Doanh (Sales) & Quản Trị Khách Hàng | VMC Group',
    description: 'Quản trị hồ sơ khách hàng 360 độ, phễu bán hàng đa kênh, báo giá và chuyển đổi doanh thu chuẩn mực.'
  },
  '/solutions/marketing': {
    title: 'Giải Pháp Tiếp Thị & Tăng Trưởng Đa Kênh | VMC Group',
    description: 'Quản lý chiến dịch, tối ưu chi phí thu hút lead (CAC) và liên thông dữ liệu trực tiếp với đội ngũ bán hàng.'
  },
  '/solutions/customer-service': {
    title: 'Giải Pháp Chăm Sóc Khách Hàng (CSKH) & Ticket SLA | VMC Group',
    description: 'Tiếp nhận đa kênh, tự động phân luồng ticket khiếu nại, giám sát thời hạn SLA và nâng cao mức độ hài lòng.'
  },
  '/solutions/hr': {
    title: 'Giải Pháp Quản Trị Nhân Sự & Chấm Công Tiền Lương | VMC Group',
    description: 'Hồ sơ nhân sự tập trung, chấm công tự động, đối soát bảng lương và số hóa quy trình tuyển dụng đào tạo.'
  },
  '/solutions/finance': {
    title: 'Giải Pháp Quản Trị Tài Chính - Kế Toán & Dòng Tiền | VMC Group',
    description: 'Giám sát dòng tiền thu chi, quản trị công nợ khách hàng, kiểm soát đề nghị tạm ứng và ngân sách vận hành.'
  },
  '/solutions/management': {
    title: 'Giải Pháp Điều Hành Doanh Nghiệp & Quản Trị Mục Tiêu | VMC Group',
    description: 'Bảng chỉ số điều hành tổng quan dành cho ban lãnh đạo, theo dõi tiến độ OKR/KPI và cảnh báo rủi ro kịp thời.'
  },
  '/solutions/crm': {
    title: 'CRS / CRM Doanh Nghiệp | Quản Trị Khách Hàng 360 & Phễu Bán Hàng - VMC Group',
    description: 'Hồ sơ khách hàng 360, đường ống pipeline, nhật ký tương tác, báo giá hợp đồng và đối soát doanh thu.'
  },
  '/solutions/ai-agent': {
    title: 'Giải Pháp Kiến Trúc Mạng Lưới AI Agent Doanh Nghiệp | VMC Group',
    description: 'Kiến trúc giải pháp mạng lưới AI Agent chuyên trách, nguyên tắc Human-in-the-Loop và cơ chế kiểm soát dữ liệu RBAC.'
  },
  '/solutions/voice': {
    title: 'Giải Pháp AI Voice Tổng Đài & Bóc Băng Cuộc Gọi | VMC Group',
    description: 'Giải pháp tổng thể bóc băng hội thoại tiếng Việt, tích hợp tổng đài VoIP/CRM, tóm tắt sau cuộc gọi và tự động đề xuất task.'
  },
  '/solutions/automation': {
    title: 'Tự Động Hóa Quy Trình (Workflow Automation) SOP | VMC Group',
    description: 'Động cơ tự động hóa liên phòng ban theo mô hình Trigger - Condition - Action - Approval - Log.'
  },
  '/solutions/website': {
    title: 'Website Doanh Nghiệp Hợp Nhất Lõi CRM | VMC Group',
    description: 'Cổng thông tin trực tuyến kết nối trực tiếp với CRM nội bộ, tự động đồng bộ lead và đo lường chuyển đổi.'
  },
  '/solutions/bi': {
    title: 'Báo Cáo & BI Thời Gian Thực | Trung Tâm Dữ Liệu Điều Hành - VMC Group',
    description: 'Dashboard chỉ số KPI/OKR, doanh thu, dòng tiền, nhân sự và năng suất tự động cập nhật liên tục.'
  },
  '/industries': {
    title: 'Giải Pháp Chuyển Đổi Theo 8 Ngành Nghề Trọng Điểm | VMC Group',
    description: 'Giải pháp cấu hình chuyên sâu cho Thương mại, Dịch vụ, Giáo dục, Bất động sản, Sản xuất, Phân phối, Xây dựng, Công nghệ.'
  },
  '/industries/trade': {
    title: 'Giải Pháp Doanh Nghiệp Thương Mại & Bán Lẻ | VMC Group',
    description: 'Quản trị lead đa kênh, tồn kho, đơn hàng và vòng đời giao dịch cho ngành thương mại và bán lẻ.'
  },
  '/industries/service': {
    title: 'Giải Pháp Doanh Nghiệp Dịch Vụ Chuyên Nghiệp | VMC Group',
    description: 'Quản lý hợp đồng dịch vụ, tiến độ triển khai theo giai đoạn và chi phí dự án minh bạch.'
  },
  '/industries/education': {
    title: 'Giải Pháp Doanh Nghiệp Giáo Dục & Tuyển Sinh | VMC Group',
    description: 'Quản trị phễu học viên tiềm năng, lịch tư vấn, tiến độ đóng học phí và trải nghiệm học viên.'
  },
  '/industries/real-estate': {
    title: 'Giải Pháp Bất Động Sản & Môi Giới Dự Án | VMC Group',
    description: 'Quản lý giỏ hàng bất động sản, phân bổ lead môi giới công bằng và đối soát hoa hồng giao dịch.'
  },
  '/industries/manufacturing': {
    title: 'Giải Pháp Sản Xuất & Gia Công Đơn Hàng | VMC Group',
    description: 'Kiểm soát tiến độ sản xuất theo đơn đặt hàng, liên thông kho nguyên vật liệu và chi phí giá thành.'
  },
  '/industries/distribution': {
    title: 'Giải Pháp Phân Phối & Quản Trị Kênh Đại Lý | VMC Group',
    description: 'Quản lý chính sách giá đại lý, chiết khấu, hạn mức công nợ và tiến độ giao nhận phân phối.'
  },
  '/industries/construction': {
    title: 'Giải Pháp Xây Dựng & Quản Trị Dự Án Công Trình | VMC Group',
    description: 'Quản lý hồ sơ thầu, nghiệm thu theo giai đoạn, kiểm soát chi phí thực tế và nhà thầu phụ.'
  },
  '/industries/technology': {
    title: 'Giải Pháp Doanh Nghiệp Công Nghệ & Dịch Vụ Số | VMC Group',
    description: 'Quản lý phễu khách hàng B2B, hợp đồng dịch vụ định kỳ (MRR) và quy trình hỗ trợ kỹ thuật liên tục.'
  },
  '/ai': {
    title: 'Mạng Lưới 9 Trợ Lý AI Chuyên Trách Nghiệp Vụ | VMC Group',
    description: 'Khám phá 9 AI Copilot đồng hành cùng nhân sự: AI CEO, Sales, Marketing, CSKH, HR, Finance, Voice, Workflow, RAG.'
  },
  '/ai/ceo': {
    title: 'AI CEO Copilot - Trợ Lý Điều Hành Cấp Cao | VMC Group',
    description: 'Tổng hợp sức khỏe doanh nghiệp đa chiều, phát hiện nút thắt dòng tiền và cảnh báo rủi ro vận hành.'
  },
  '/ai/sales': {
    title: 'AI Sales Copilot - Trợ Lý Bán Hàng & Phễu Lead | VMC Group',
    description: 'Chấm điểm lead tiềm năng, đề xuất kịch bản tư vấn và nhắc việc chăm sóc khách hàng tự động.'
  },
  '/ai/marketing': {
    title: 'AI Marketing Copilot - Trợ Lý Tối Ưu Chiến Dịch | VMC Group',
    description: 'Phân tích chân dung khách hàng, gợi ý nội dung tiếp cận và tối ưu chi phí thu hút lead (CAC).'
  },
  '/ai/customer-service': {
    title: 'AI CSKH Copilot - Trợ Lý Xử Lý Ticket & SLA | VMC Group',
    description: 'Gợi ý giải pháp xử lý khiếu nại, phân loại mức độ khẩn cấp và hỗ trợ nhân viên phản hồi chuẩn mực.'
  },
  '/ai/hr': {
    title: 'AI HR Copilot - Trợ Lý Nhân Sự & Tuyển Dụng | VMC Group',
    description: 'Sàng lọc hồ sơ ứng viên, đối soát công tự động và soạn thảo bản đánh giá hiệu suất nhân sự.'
  },
  '/ai/finance': {
    title: 'AI Finance Copilot - Trợ Lý Quản Trị Dòng Tiền | VMC Group',
    description: 'Đối chiếu hóa đơn chứng từ, rà soát chi phí vận hành và lập báo cáo dự báo dòng tiền định kỳ.'
  },
  '/ai/voice': {
    title: 'AI Voice Copilot - Trợ Lý Phân Tích Cuộc Gọi Thoại | VMC Group',
    description: 'Bóc băng tự động, tóm tắt nội dung sau cuộc gọi và cập nhật lịch sử tương tác vào CRM.'
  },
  '/ai/workflow': {
    title: 'AI Workflow Copilot - Trợ Lý Tự Động Hóa SOP | VMC Group',
    description: 'Phát hiện điểm nghẽn quy trình, gợi ý phân bổ công việc và cảnh báo quá hạn thời gian SLA.'
  },
  '/ai/rag': {
    title: 'AI Search / RAG - Trợ Lý Tra Cứu Tri Thức Nội Bộ | VMC Group',
    description: 'Truy vấn quy chế, chính sách và tài liệu sản phẩm chuẩn xác theo ngôn ngữ tự nhiên.'
  },
  '/capabilities': {
    title: 'Năng Lực Thực Thi & 6 Giai Đoạn Triển Khai | VMC Group',
    description: '8 trụ cột năng lực cốt lõi và lộ trình 6 giai đoạn bàn giao hệ thống AI ENTERPRISE thực tế.'
  },
  '/resources': {
    title: 'Tài Nguyên Vận Hành & Cam Kết Bảo Mật NDA | VMC Group',
    description: 'Tài liệu kiến trúc, quy trình SOP mẫu, cam kết bảo mật 100% dữ liệu và giải đáp thắc mắc chuyên sâu.'
  },
  '/about': {
    title: 'Giới Thiệu VMC Group | Tầm Nhìn, Sứ Mệnh & Giá Trị Cốt Lõi',
    description: 'Hồ sơ doanh nghiệp VMC Group, triết lý ứng dụng AI và 6 nguyên tắc triển khai hệ thống cốt lõi.'
  },
  '/contact': {
    title: 'Liên Hệ & Đăng Ký Khảo Sát Kiến Trúc | VMC Group',
    description: 'Gửi yêu cầu khảo sát hiện trạng doanh nghiệp và nhận tư vấn giải pháp AI ENTERPRISE từ VMC Group.'
  }
};

interface RouterContextType {
  currentPath: string;
  locale: LocaleCode;
  changeLocale: (newLocale: LocaleCode) => void;
  navigate: (path: string, options?: { scrollToTop?: boolean }) => void;
  isAdminView: boolean;
  setIsAdminView: (isAdmin: boolean) => void;
  isConsultationModalOpen: boolean;
  consultationModalType: 'consultation' | 'assessment' | 'booking';
  consultationDefaultIndustry?: string;
  openConsultationModal: (type?: 'consultation' | 'assessment' | 'booking', initialIndustry?: string) => void;
  closeConsultationModal: () => void;
  submitConsultation: (data: ConsultationFormData) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const PublicRouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize path from window.location.pathname or hash fallback
  const getInitialRawPath = (): string => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) return hash;
    const pathname = window.location.pathname;
    if (pathname && pathname !== '') return pathname;
    return '/';
  };

  const initialParsed = parsePathLocale(getInitialRawPath());
  const [currentPath, setCurrentPath] = useState<string>(initialParsed.canonicalPath);
  const [locale, setLocale] = useState<LocaleCode>(initialParsed.locale);
  const [isAdminView, setIsAdminView] = useState<boolean>(() => {
    return initialParsed.canonicalPath === '/admin';
  });

  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationModalType, setConsultationModalType] = useState<'consultation' | 'assessment' | 'booking'>('consultation');
  const [consultationDefaultIndustry, setConsultationDefaultIndustry] = useState<string | undefined>(undefined);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const rawPath = getInitialRawPath();
      const parsed = parsePathLocale(rawPath);
      setCurrentPath(parsed.canonicalPath);
      setLocale(parsed.locale);
      setIsAdminView(parsed.canonicalPath === '/admin');
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Update dynamic document title, meta tags, canonical link and breadcrumb structured data when currentPath or locale changes
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Remove any trailing anchor for title lookup
    const basePath = currentPath.split('#')[0] || '/';
    const isPublished = isLocalePublished(locale);
    const isKnownRoute = Boolean(routeSeoMap[basePath]);

    const seo = routeSeoMap[basePath] || {
      title: isKnownRoute
        ? 'VMC Group | Hệ Thống Doanh Nghiệp Vận Hành Bằng AI'
        : 'Trang Không Tìm Thấy (404) | VMC Group',
      description: isKnownRoute
        ? 'Website công khai VMCGROUP.COM và Hệ thống Quản trị Hệ điều hành Doanh nghiệp AI VMC Group.'
        : 'Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển hướng.'
    };

    document.title = seo.title;

    // Update html lang attribute
    document.documentElement.lang = locale;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }

    // Phase 1 Safety Hardening for Meta Robots:
    // If locale is NOT published (draft 'en', planned 'zh-CN', 'ja', 'ko', 'de', 'fr', 'es') OR route is 404:
    // MUST apply: noindex, nofollow
    // When locale is PUBLISHED (e.g. 'vi'):
    // MUST restore: index, follow
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }

    if (!isPublished || !isKnownRoute) {
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      robotsMeta.setAttribute('content', 'index, follow');
    }

    // Dynamic Canonical URL:
    // For published locales: https://vmcgroup.com${basePath === '/' ? '/' : basePath}
    // For unpublished test locales: MUST NOT let search engines treat unpublished route as official canonical!
    // Always anchor canonical to the official published Vietnamese version.
    const canonicalHref = `https://vmcgroup.com${basePath === '/' ? '/' : basePath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // Dynamic og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalHref);

    // Ensure NO hreflang tags exist for unpublished locales
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());

    // Dynamic BreadcrumbList structured data for deep public pages
    const existingBreadcrumb = document.getElementById('route-breadcrumb-schema');
    if (basePath === '/') {
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }
    } else {
      const segments = basePath.split('/').filter(Boolean);
      const itemListElement = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Trang chủ',
          item: `https://vmcgroup.com${locale === DEFAULT_LOCALE ? '/' : `/${locale}`}`
        }
      ];

      let runningPath = '';
      segments.forEach((seg, idx) => {
        runningPath += `/${seg}`;
        const matchedSeo = routeSeoMap[runningPath];
        const segTitle = matchedSeo
          ? matchedSeo.title.split('|')[0].trim()
          : seg.charAt(0).toUpperCase() + seg.slice(1);

        const localizedItemPath = buildLocalizedPath(runningPath, locale);
        itemListElement.push({
          '@type': 'ListItem',
          position: idx + 2,
          name: segTitle,
          item: `https://vmcgroup.com${localizedItemPath}`
        });
      });

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement
      };

      let scriptTag = existingBreadcrumb as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'route-breadcrumb-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(breadcrumbData);
    }
  }, [currentPath, locale]);

  const navigate = useCallback((path: string, options: { scrollToTop?: boolean } = { scrollToTop: true }) => {
    let cleanPath = path;
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

    const parsed = parsePathLocale(cleanPath);

    // If navigation specifies a locale prefix (e.g. /en/solutions/crm) use it,
    // otherwise preserve current locale
    const targetLocale = parsed.hasLocalePrefix ? parsed.locale : locale;
    const targetCanonical = parsed.canonicalPath;

    setCurrentPath(targetCanonical);
    if (targetCanonical === '/admin') {
      setIsAdminView(true);
      try {
        window.history.pushState({}, '', '/admin');
      } catch {
        window.location.hash = '/admin';
      }
    } else {
      setIsAdminView(false);
      setLocale(targetLocale);
      const browserUrl = buildLocalizedPath(targetCanonical, targetLocale, parsed.anchor);
      try {
        window.history.pushState({}, '', browserUrl);
      } catch {
        window.location.hash = browserUrl;
      }
    }

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (parsed.anchor) {
      // Scroll to anchor element with header offset
      setTimeout(() => {
        const el = document.getElementById(parsed.anchor!);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: scrollBehavior
          });
        } else if (options.scrollToTop !== false) {
          window.scrollTo({ top: 0, behavior: scrollBehavior });
        }
      }, 120);
    } else if (options.scrollToTop !== false) {
      window.scrollTo({ top: 0, behavior: scrollBehavior });
    }
  }, [locale]);

  const changeLocale = useCallback((newLocale: LocaleCode) => {
    if (!isSupportedLocale(newLocale) || newLocale === locale) return;
    
    // Explicit user preference persistence
    setStoredLocale(newLocale);
    setLocale(newLocale);

    if (!isAdminView) {
      const [cleanCanonical, inlineAnchor] = currentPath.split('#');
      const windowHash = typeof window !== 'undefined' && window.location.hash
        ? window.location.hash.replace(/^#/, '')
        : undefined;
      const effectiveAnchor = windowHash && !windowHash.startsWith('/') ? windowHash : inlineAnchor;

      const browserUrl = buildLocalizedPath(cleanCanonical, newLocale, effectiveAnchor);
      try {
        window.history.pushState({}, '', browserUrl);
      } catch {
        window.location.hash = browserUrl;
      }
    }
  }, [locale, currentPath, isAdminView]);

  const openConsultationModal = (type: 'consultation' | 'assessment' | 'booking' = 'consultation', initialIndustry?: string) => {
    setConsultationModalType(type);
    setConsultationDefaultIndustry(initialIndustry);
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  const submitConsultation = (formData: ConsultationFormData) => {
    setIsConsultationModalOpen(false);
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        locale,
        changeLocale,
        navigate,
        isAdminView,
        setIsAdminView,
        isConsultationModalOpen,
        consultationModalType,
        consultationDefaultIndustry,
        openConsultationModal,
        closeConsultationModal,
        submitConsultation
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const usePublicRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('usePublicRouter must be used within a PublicRouterProvider');
  }
  return context;
};

