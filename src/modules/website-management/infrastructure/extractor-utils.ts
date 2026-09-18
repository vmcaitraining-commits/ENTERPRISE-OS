import { FieldType, SourceType, WebsiteContentEntry } from '../domain/models';

export function determineFieldType(value: any, key: string): FieldType {
  if (typeof value === 'boolean') return 'BOOLEAN';
  if (typeof value === 'number') return 'NUMBER';
  if (typeof value === 'string') {
    if (value.startsWith('http') || value.startsWith('/images') || value.match(/\.(jpg|png|svg|webp)$/i)) {
      if (key.toLowerCase().includes('video')) return 'VIDEO_REFERENCE';
      if (key.toLowerCase().includes('icon')) return 'ICON';
      return 'IMAGE_REFERENCE';
    }
    if (value.length > 100 || value.includes('\n')) return 'TEXTAREA';
    return 'TEXT';
  }
  if (Array.isArray(value)) {
    if (value.length > 0 && typeof value[0] === 'string') return 'LIST';
    return 'REPEATER';
  }
  if (typeof value === 'object' && value !== null) {
    return 'STRUCTURED_OBJECT';
  }
  return 'TEXT';
}

export function flattenAndExtract(
  objVi: any, 
  objEn: any, 
  objZh: any, 
  prefix: string, 
  sectionId: string, 
  sourceType: SourceType, 
  entries: WebsiteContentEntry[]
) {
  if (!objVi || typeof objVi !== 'object') return;
  
  for (const key of Object.keys(objVi)) {
    const valVi = objVi[key];
    const valEn = objEn ? objEn[key] : undefined;
    const valZh = objZh ? objZh[key] : undefined;
    const currentPath = prefix ? `${prefix}.${key}` : key;
    
    const fieldType = determineFieldType(valVi, key);
    
    // Convert camelCase key to readable label
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

    entries.push({
      id: `${sectionId}-${currentPath.replace(/[^a-zA-Z0-9]/g, '-')}`,
      fieldKey: currentPath,
      label: label,
      type: fieldType,
      required: false,
      canonicalLocale: 'vi',
      vi: valVi,
      en: valEn || valVi, // fallback to VI if missing
      zhCN: valZh || valVi,
      translationStatuses: {
        vi: 'CURRENT',
        en: valEn ? 'CURRENT' : 'OUTDATED',
        zhCN: valZh ? 'CURRENT' : 'OUTDATED'
      },
      contentStatus: 'PUBLISHED',
      sourceType: sourceType,
      sourceReference: `${sourceType}:${currentPath}`,
      version: 1,
      updatedAt: Date.now()
    });
  }
}
