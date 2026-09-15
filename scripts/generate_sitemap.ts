import fs from 'fs';
import path from 'path';
import { getPublishedLocales } from '../src/i18n/registry';
import { buildLocalizedPath } from '../src/i18n/parser';

export interface RouteConfig {
  path: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
}

export const CANONICAL_PUBLIC_ROUTES: RouteConfig[] = [
  // Core pages
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/ai-enterprise', changefreq: 'weekly', priority: '0.9' },
  { path: '/solutions', changefreq: 'weekly', priority: '0.9' },
  { path: '/industries', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai', changefreq: 'weekly', priority: '0.9' },
  { path: '/capabilities', changefreq: 'monthly', priority: '0.8' },
  { path: '/resources', changefreq: 'weekly', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },

  // Department Solutions
  { path: '/solutions/sales', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/marketing', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/customer-service', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/hr', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/finance', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/management', changefreq: 'weekly', priority: '0.8' },

  // Key Need Solutions
  { path: '/solutions/crm', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/ai-agent', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/voice', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/automation', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/website', changefreq: 'weekly', priority: '0.8' },
  { path: '/solutions/bi', changefreq: 'weekly', priority: '0.8' },

  // Industry Solutions
  { path: '/industries/trade', changefreq: 'weekly', priority: '0.7' },
  { path: '/industries/service', changefreq: 'weekly', priority: '0.7' },
  { path: '/industries/education', changefreq: 'weekly', priority: '0.7' },
  { path: '/industries/real-estate', changefreq: 'weekly', priority: '0.7' },
  { path: '/industries/manufacturing', changefreq: 'weekly', priority: '0.7' },
  { path: '/industries/distribution', changefreq: 'weekly', priority: '0.7' },
  { path: '/industries/construction', changefreq: 'weekly', priority: '0.7' },
  { path: '/industries/technology', changefreq: 'weekly', priority: '0.7' },

  // 9 AI Copilots
  { path: '/ai/ceo', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai/sales', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai/marketing', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai/customer-service', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai/hr', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai/finance', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai/voice', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai/workflow', changefreq: 'weekly', priority: '0.8' },
  { path: '/ai/rag', changefreq: 'weekly', priority: '0.8' }
];

export function generateSitemapXml(): string {
  const publishedLocales = getPublishedLocales();
  const domain = 'https://vmcgroup.com';

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const localeMeta of publishedLocales) {
    const locCode = localeMeta.code;
    xml += `  <!-- ============================================================ -->\n`;
    xml += `  <!-- ${localeMeta.name.toUpperCase()} PUBLIC ROUTES (${localeMeta.status.toUpperCase()}) -->\n`;
    xml += `  <!-- ============================================================ -->\n`;

    for (const route of CANONICAL_PUBLIC_ROUTES) {
      const localizedPath = buildLocalizedPath(route.path, locCode);
      xml += `  <url>\n`;
      xml += `    <loc>${domain}${localizedPath}</loc>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority}</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;
  return xml;
}

if (process.argv[1] && process.argv[1].endsWith('generate_sitemap.ts')) {
  const outputPath = path.resolve(process.cwd(), 'public/sitemap.xml');
  const xml = generateSitemapXml();
  fs.writeFileSync(outputPath, xml, 'utf8');
  const publishedCount = getPublishedLocales().length;
  console.log(`Generated sitemap.xml with ${CANONICAL_PUBLIC_ROUTES.length * publishedCount} URLs across ${publishedCount} published locale(s).`);
}
