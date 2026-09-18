import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';

export type BrandLogoVariant = 'primary' | 'horizontal' | 'dark' | 'symbol' | 'light' | 'monochrome';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
  imgClassName?: string;
  alt?: string;
  onClick?: () => void;
}

/**
 * Biểu tượng V Ribbon Vector nguyên bản (1:1)
 */
export const VMCSymbolSVG: React.FC<{ className?: string; isDark?: boolean; isMono?: boolean }> = ({
  className = 'w-8 h-8',
  isDark = false,
  isMono = false
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vmc-sym-left" x1="8" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMono ? '#FFFFFF' : '#2563EB'} stopOpacity={isMono ? 0.9 : 1} />
          <stop offset="50%" stopColor={isMono ? '#F1F5F9' : '#1D4ED8'} />
          <stop offset="100%" stopColor={isMono ? '#CBD5E1' : '#1E3A8A'} />
        </linearGradient>

        <linearGradient id="vmc-sym-right" x1="22" y1="42" x2="42" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMono ? '#FFFFFF' : '#00BAF2'} />
          <stop offset="50%" stopColor={isMono ? '#E2E8F0' : '#06B6D4'} />
          <stop offset="100%" stopColor={isMono ? '#CBD5E1' : '#38BDF8'} />
        </linearGradient>

        <linearGradient id="vmc-sym-mid" x1="14" y1="18" x2="34" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMono ? '#FFFFFF' : '#60A5FA'} />
          <stop offset="50%" stopColor={isMono ? '#E2E8F0' : '#3B82F6'} />
          <stop offset="100%" stopColor={isMono ? '#94A3B8' : '#0284C7'} />
        </linearGradient>
      </defs>

      <g>
        {/* Base depth shadow */}
        <path
          d="M17.5 32.5L24 43L30.5 32.5C28.5 35 25.8 36.5 24 36.5C22.2 36.5 19.5 35 17.5 32.5Z"
          fill={isDark ? '#000000' : '#0F172A'}
          opacity={isMono ? '0' : '0.25'}
        />

        {/* Left Wing Ribbon */}
        <path
          d="M7 8C8.5 6.5 12 7.5 13.5 10.5L24 35.5L20 37.5L8.5 14C7.2 11.5 6 9.2 7 8Z"
          fill="url(#vmc-sym-left)"
        />

        {/* Middle Fluid Connecting Ribbon */}
        <path
          d="M13 9.5C14.5 11 19 21.5 24 34L28.5 23C26 17 21 10.5 16 8.5C14.2 7.8 12.2 8.2 13 9.5Z"
          fill="url(#vmc-sym-mid)"
        />

        {/* Right Wing Blade */}
        <path
          d="M22 38L24 42C25.5 42 27 40.5 28 38.5L41.5 10C42.5 8 40.5 6.5 38.5 7.5C36 8.8 30 15 26.5 23L22 38Z"
          fill="url(#vmc-sym-right)"
        />

        {/* Core light accent */}
        <circle cx="24" cy="40.5" r="1.5" fill={isMono ? '#FFFFFF' : '#E0F2FE'} />
      </g>
    </svg>
  );
};

/**
 * Logo VMC Group Vector phối hợp Typography công nghệ cao
 */
export const VMCFullLogoSVG: React.FC<{
  className?: string;
  variant?: BrandLogoVariant;
}> = ({ className = 'h-10 sm:h-11 md:h-12 w-auto', variant = 'primary' }) => {
  const isDark = variant === 'dark';
  const isMono = variant === 'monochrome';

  const textColor = isMono ? '#FFFFFF' : isDark ? '#FFFFFF' : '#0B1F3A';
  const groupColor = isMono ? '#E2E8F0' : isDark ? '#CBD5E1' : '#334155';
  const sublineColor = isMono ? '#94A3B8' : isDark ? '#38BDF8' : '#155EEF';
  const dotColor = isMono ? '#FFFFFF' : '#06B6D4';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 208 52"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`vmc-full-l-${variant}`} x1="12" y1="8" x2="26" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMono ? '#FFFFFF' : isDark ? '#3B82F6' : '#2563EB'} />
          <stop offset="60%" stopColor={isMono ? '#F1F5F9' : isDark ? '#2563EB' : '#1D4ED8'} />
          <stop offset="100%" stopColor={isMono ? '#CBD5E1' : isDark ? '#1D4ED8' : '#1E3A8A'} />
        </linearGradient>

        <linearGradient id={`vmc-full-r-${variant}`} x1="24" y1="46" x2="46" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMono ? '#FFFFFF' : isDark ? '#22D3EE' : '#00BAF2'} />
          <stop offset="50%" stopColor={isMono ? '#E2E8F0' : isDark ? '#06B6D4' : '#06B6D4'} />
          <stop offset="100%" stopColor={isMono ? '#CBD5E1' : isDark ? '#38BDF8' : '#38BDF8'} />
        </linearGradient>

        <linearGradient id={`vmc-full-m-${variant}`} x1="16" y1="18" x2="36" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isMono ? '#FFFFFF' : isDark ? '#93C5FD' : '#60A5FA'} />
          <stop offset="50%" stopColor={isMono ? '#E2E8F0' : isDark ? '#60A5FA' : '#3B82F6'} />
          <stop offset="100%" stopColor={isMono ? '#94A3B8' : isDark ? '#0284C7' : '#0284C7'} />
        </linearGradient>
      </defs>

      {/* Ribbon Symbol */}
      <g transform="translate(0, 2)">
        <path d="M7 9C8.5 7.5 12 8.5 13.5 11.5L24 37.5L20 39.5L8.5 15C7.2 12.5 6 10.2 7 9Z" fill={`url(#vmc-full-l-${variant})`} />
        <path d="M13 10.5C14.5 12 19 22.8 24 36L28.5 24.5C26 18.2 21 11.5 16 9.2C14.2 8.5 12.2 9 13 10.5Z" fill={`url(#vmc-full-m-${variant})`} />
        <path d="M22 40L24 44.5C25.5 44.5 27 43 28 40.8L41.5 11C42.5 9 40.5 7.5 38.5 8.5C36 9.8 30 16.5 26.5 24.8L22 40Z" fill={`url(#vmc-full-r-${variant})`} />
        <circle cx="24" cy="42.5" r="1.5" fill={isMono ? '#FFFFFF' : isDark ? '#38BDF8' : '#E0F2FE'} />
      </g>

      {/* Typography: VMC Group & Tagline */}
      <g transform="translate(54, 0)">
        <text x="0" y="29" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Be Vietnam Pro', sans-serif" fontWeight="900" fontSize="24" fill={textColor} letterSpacing="-0.5">VMC</text>
        <text x="57" y="29" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Be Vietnam Pro', sans-serif" fontWeight="600" fontSize="24" fill={groupColor} letterSpacing="-0.3">Group</text>
        <circle cx="132" cy="25" r="3" fill={dotColor} />
        <text x="0.5" y="44" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Be Vietnam Pro', sans-serif" fontWeight="800" fontSize="8.5" fill={sublineColor} letterSpacing="2.5">AI ENTERPRISE OS</text>
      </g>
    </svg>
  );
};

/**
 * BrandLogo kết nối trực tiếp với nhận diện thương hiệu trong EnterpriseContext
 * - Tự động cập nhật tức thì khi người dùng thay đổi logo trong Admin -> Thông tin doanh nghiệp -> Nhận diện thương hiệu
 * - Render vector chất lượng cao chuẩn VMC Group đẹp và chuyên nghiệp
 * - An toàn 100%, không bị 404 hay broken-image
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'primary',
  className = '',
  imgClassName = '',
  alt = 'VMC Group Logo',
  onClick
}) => {
  const { data, tempData, isEditing } = useEnterprise();
  const currentData = isEditing ? tempData : data;
  const brandLogos = currentData?.brandLogos || [];
  const [hasImgError, setHasImgError] = useState(false);

  // Tìm kiếm logo tương ứng theo variant
  const matchedLogo = (() => {
    switch (variant) {
      case 'dark':
        return brandLogos.find((l) => l.type === 'Logo nền tối') || brandLogos.find((l) => l.type === 'Logo chính');
      case 'symbol':
        return brandLogos.find((l) => l.type === 'Logo biểu tượng') || brandLogos.find((l) => l.type === 'Favicon');
      case 'horizontal':
        return brandLogos.find((l) => l.type === 'Logo ngang') || brandLogos.find((l) => l.type === 'Logo chính');
      case 'light':
        return brandLogos.find((l) => l.type === 'Logo nền sáng') || brandLogos.find((l) => l.type === 'Logo chính');
      case 'monochrome':
        return brandLogos.find((l) => l.type === 'Logo trắng');
      case 'primary':
      default: {
        // Ưu tiên logo được chọn cụ thể trong Admin làm Logo Website chính
        if (currentData?.activeWebsiteLogoId) {
          const active = brandLogos.find((l) => l.id === currentData.activeWebsiteLogoId);
          if (active) return active;
        }
        // Mặc định chọn "Logo chính" / "Logo chính thức"
        return (
          brandLogos.find((l) => l.type === 'Logo chính') ||
          brandLogos.find((l) => l.title === 'Logo chính thức') ||
          brandLogos[0]
        );
      }
    }
  })();

  const rawUrl = matchedLogo?.url;

  // Nếu có url hợp lệ từ hệ thống nhận diện thương hiệu Admin và chưa bị lỗi tải
  if (rawUrl && !hasImgError) {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`} onClick={onClick}>
        <img
          src={rawUrl}
          alt={alt || matchedLogo?.title || 'VMC Group Logo'}
          className={`object-contain max-h-full max-w-full ${imgClassName}`}
          onError={() => setHasImgError(true)}
        />
      </div>
    );
  }

  // Nếu variant là symbol
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`} onClick={onClick}>
        <VMCSymbolSVG className={imgClassName || 'w-9 h-9 sm:w-10 sm:h-10'} />
      </div>
    );
  }

  // Mặc định hiển thị bản Full Logo Vector cực nét và chuẩn đẹp của VMC Group
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`} onClick={onClick}>
      <VMCFullLogoSVG className={imgClassName || 'h-10 sm:h-11 md:h-12 w-auto'} variant={variant} />
    </div>
  );
};
