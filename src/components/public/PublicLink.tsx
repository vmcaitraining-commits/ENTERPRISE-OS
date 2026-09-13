import React from 'react';
import { usePublicRouter } from '../../context/PublicRouterContext';
import { buildLocalizedPath, parsePathLocale } from '../../i18n/parser';

interface PublicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
  activeClassName?: string;
  exact?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * PublicLink component provides:
 * 1. Real `<a href="...">` for standard SEO crawler indexing, middle-click and right-click "Open in new tab"
 * 2. Client-side SPA navigation via `usePublicRouter` on normal left-click (preventing full-page reload)
 * 3. Proper keyboard access, focus outline, and aria accessibility
 * 4. Automatic locale prefix preservation for multi-language navigation
 */
export const PublicLink: React.FC<PublicLinkProps> = ({
  href,
  className = '',
  activeClassName = '',
  exact = false,
  children,
  onClick,
  ...props
}) => {
  const { currentPath, navigate, locale } = usePublicRouter();

  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');
  const targetHref = isExternal ? href : buildLocalizedPath(href, locale);
  const parsed = parsePathLocale(href);
  const canonicalHref = parsed.canonicalPath;

  const isActive = exact
    ? currentPath === canonicalHref
    : (canonicalHref === '/' ? currentPath === '/' : currentPath.startsWith(canonicalHref));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Allow default browser behavior for modifier keys (Ctrl/Cmd click, Shift click, etc.) or external links
    if (e.defaultPrevented || isExternal || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    e.preventDefault();
    navigate(targetHref);
  };

  const combinedClasses = `${className} ${isActive && activeClassName ? activeClassName : ''}`.trim();

  if (isExternal) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={props.target || '_blank'}
        rel={props.rel || 'noopener noreferrer'}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={targetHref}
      className={combinedClasses}
      onClick={handleClick}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
