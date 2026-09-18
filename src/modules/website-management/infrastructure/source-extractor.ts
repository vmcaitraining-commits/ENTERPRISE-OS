import { WebsiteContentEntry, SourceType } from '../domain/models';
import { websiteManifest } from '../domain/website-manifest';
import { getLoadedDictionary, loadNamespace, PAGE_SPECIFIC_NAMESPACES, CORE_GLOBAL_NAMESPACES } from '../../../i18n/loader';
import { LocaleCode } from '../../../i18n/types';
import * as websiteContent from '../../../data/websiteContent';
import * as industryDetailedData from '../../../data/industryDetailedData';
import * as aiCopilotDetailedData from '../../../data/aiCopilotDetailedData';
import { flattenAndExtract, determineFieldType } from './extractor-utils';

export class WebsiteContentSourceExtractor {
  async extract(): Promise<WebsiteContentEntry[]> {
    const entries: WebsiteContentEntry[] = [];
    
    // Preload i18n
    const locales: LocaleCode[] = ['vi', 'en', 'zh-CN'];
    const namespaces = [...CORE_GLOBAL_NAMESPACES, ...PAGE_SPECIFIC_NAMESPACES];
    
    for (const locale of locales) {
      for (const ns of namespaces) {
        await loadNamespace(locale, ns);
      }
    }

    const dataSources: Record<string, any> = {
      websiteContent,
      industryDetailedData,
      aiCopilotDetailedData
    };

    const mappedSectionIds = new Set<string>();

    // We will traverse websiteManifest
    websiteManifest.forEach(page => {
      page.sections.forEach(section => {
        const sectionId = `${page.id}-${section.id}`;
        
        let foundContent = false;

        // Try extracting from i18n
        if (section.sourceReference === 'i18n') {
          // Typical pattern: page route maps to a namespace (e.g. '/' -> home, '/ai-enterprise' -> aiEnterprise)
          const ns = page.route === '/' ? 'home' : (page.route.replace('/', '').split('/')[0] || 'common');
          // Actually, we can use the `getLoadedDictionary` and map using the section name.
          // For simplicity in W2.2, we map exact roots.
          
          let rootVi: any = null;
          let rootEn: any = null;
          let rootZh: any = null;
          let extractPath = '';

          // Heuristics for i18n structure
          // home -> hero -> { title: ... }
          let nsKey = page.id.replace('core-', '').replace(/-([a-z])/g, g => g[1].toUpperCase());
          if (nsKey === 'home' || page.route === '/') nsKey = 'home';
          if (page.id === 'global-shared') nsKey = 'common';
          
          const sectionKey = section.id;
          
          // Try to get exactly that section from dictionary
          let dictVi = getLoadedDictionary('vi', nsKey as any);
          if (!dictVi || Object.keys(dictVi).length === 0) {
            // fallback to see if it's in common or nav
            if (section.name.includes('Nav')) dictVi = getLoadedDictionary('vi', 'nav');
            else if (section.name.includes('Footer')) dictVi = getLoadedDictionary('vi', 'common');
          }

          if (dictVi) {
            // Try to find the section by key
            if (dictVi[sectionKey]) {
              rootVi = dictVi[sectionKey];
              rootEn = getLoadedDictionary('en', nsKey as any)?.[sectionKey];
              rootZh = getLoadedDictionary('zh-CN', nsKey as any)?.[sectionKey];
              extractPath = `${nsKey}:${sectionKey}`;
            } else {
              // Try to find any key that matches partially
              const possibleKey = Object.keys(dictVi).find(k => k.toLowerCase().includes(sectionKey.toLowerCase().replace(/[^a-z]/g, '')));
              if (possibleKey) {
                rootVi = dictVi[possibleKey];
                rootEn = getLoadedDictionary('en', nsKey as any)?.[possibleKey];
                rootZh = getLoadedDictionary('zh-CN', nsKey as any)?.[possibleKey];
                extractPath = `${nsKey}:${possibleKey}`;
              }
            }
          }

          if (rootVi) {
            flattenAndExtract(rootVi, rootEn, rootZh, extractPath, sectionId, 'I18N', entries);
            foundContent = true;
          }
        }
        
        // Try extracting from websiteContent, industry data, AI data
        if (section.sourceReference === 'websiteContent' || section.sourceReference === 'industry data' || section.sourceReference === 'AI copilot data') {
          let dsObj = null;
          let extractPath = '';
          let sourceType: SourceType = 'WEBSITE_CONTENT';

          if (page.id.startsWith('dept-') || page.id.startsWith('need-') || page.id === 'core-solutions') {
            dsObj = websiteContent.departmentSolutions;
            if (page.id.startsWith('dept-')) {
               const slug = page.id.replace('dept-', '');
               const item = websiteContent.departmentSolutions.find(d => d.slug === slug || d.id.includes(slug));
               if (item) {
                 dsObj = item;
                 extractPath = `websiteContent:departmentSolutions.[${slug}]`;
               }
            }
          } else if (page.id.startsWith('ind-') || page.id === 'core-industries') {
            dsObj = industryDetailedData.detailedIndustriesData;
            sourceType = 'INDUSTRY_DATA';
            if (page.id.startsWith('ind-')) {
               const slug = page.id.replace('ind-', '');
               dsObj = (industryDetailedData.detailedIndustriesData as any)[slug];
               extractPath = `industryDetailedData:detailedIndustriesData.${slug}`;
            }
          } else if (page.id.startsWith('ai-') || page.id === 'core-ai') {
            dsObj = aiCopilotDetailedData.copilotDetailedMap;
            sourceType = 'AI_COPILOT_DATA';
            if (page.id !== 'core-ai') {
               const slug = page.id.replace('ai-', '');
               dsObj = (aiCopilotDetailedData.copilotDetailedMap as any)[slug];
               extractPath = `aiCopilotDetailedData:copilotDetailedMap.${slug}`;
            }
          } else if (section.sourceReference === 'websiteContent') {
            // Find in websiteContent top level properties based on section name
            const possibleKey = Object.keys(websiteContent).find(k => k.toLowerCase().includes(section.id.replace(/-/g, '')));
            if (possibleKey) {
              dsObj = (websiteContent as any)[possibleKey];
              extractPath = `websiteContent:${possibleKey}`;
            }
          }

          if (dsObj) {
            // For data objects, we just create a single entry that holds the whole object/array
            // since our UI now supports REPEATER and STRUCTURED_OBJECT
            const fieldType = determineFieldType(dsObj, extractPath);
            entries.push({
              id: `${sectionId}-${extractPath.replace(/[^a-zA-Z0-9]/g, '-')}`,
              fieldKey: extractPath,
              label: section.name,
              type: fieldType,
              required: false,
              canonicalLocale: 'vi',
              vi: dsObj,
              en: dsObj,
              zhCN: dsObj,
              translationStatuses: { vi: 'CURRENT', en: 'NEEDS_REVIEW', zhCN: 'NEEDS_REVIEW' },
              contentStatus: 'PUBLISHED',
              sourceType: sourceType,
              sourceReference: extractPath,
              version: 1,
              updatedAt: Date.now()
            });
            foundContent = true;
          }
        }

        if (foundContent) {
          mappedSectionIds.add(sectionId);
        } else {
          // Unmapped / Placeholder
          entries.push({
            id: `${sectionId}-placeholder`,
            fieldKey: 'placeholder',
            label: `[Chưa chuẩn hóa] ${section.name}`,
            type: 'TEXT',
            required: false,
            canonicalLocale: 'vi',
            vi: `Nội dung này hiện đang được code trực tiếp trong file mã nguồn. Nguồn: ${section.sourceReference}`,
            en: 'This content is hard-coded in the source code.',
            zhCN: '未标准化内容',
            translationStatuses: { vi: 'CURRENT', en: 'CURRENT', zhCN: 'CURRENT' },
            contentStatus: 'PUBLISHED',
            sourceType: 'UNKNOWN',
            sourceReference: section.sourceReference,
            version: 1,
            updatedAt: Date.now()
          });
        }
      });
    });

    return entries;
  }
}
