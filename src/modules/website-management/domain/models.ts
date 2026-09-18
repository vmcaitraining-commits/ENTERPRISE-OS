export type WebsiteStatus = 'LIVE' | 'MAINTENANCE' | 'OFFLINE';
export type ThemeStatus = 'DRAFT' | 'TESTING' | 'APPROVED' | 'ACTIVE' | 'HIDDEN' | 'ARCHIVED';
export type PersistenceStatus = 'LOCAL_DEVELOPMENT' | 'DATABASE' | 'CLOUD' | 'SYNCED';
export type SecurityStatus = 'AUTH NOT CONFIGURED' | 'SECURE';
export type IntegrationStatus = 'NOT CONNECTED' | 'CONNECTED';
export type ContentStatus = 'DRAFT' | 'NEEDS_REVIEW' | 'APPROVED' | 'PUBLISHED' | 'OUTDATED' | 'ARCHIVED';
export type TranslationStatus = 'CURRENT' | 'OUTDATED' | 'NEEDS_REVIEW' | 'APPROVED';
export type FieldType = 'TEXT' | 'TEXTAREA' | 'RICH_TEXT' | 'NUMBER' | 'BOOLEAN' | 'URL' | 'BUTTON' | 'IMAGE_REFERENCE' | 'VIDEO_REFERENCE' | 'ICON' | 'LIST' | 'REPEATER' | 'STRUCTURED_OBJECT';
export type CoverageStatus = 'EDITABLE' | 'PARTIALLY_EDITABLE' | 'READ_ONLY_SOURCE' | 'SOURCE_NOT_YET_NORMALIZED';
export type SourceType = 'I18N' | 'WEBSITE_CONTENT' | 'INDUSTRY_DATA' | 'AI_COPILOT_DATA' | 'COMPONENT_SOURCE' | 'SHARED_DATA' | 'UNKNOWN';

export type AssetType = 'IMAGE' | 'SVG' | 'VIDEO' | 'LOGO' | 'BACKGROUND' | 'DIAGRAM' | 'ICON' | 'DOCUMENT' | 'OTHER';
export type StorageMode = 'LEGACY_SOURCE' | 'EXTERNAL_URL' | 'INLINE_SVG' | 'DATA_URI' | 'LOCAL_DEVELOPMENT_REFERENCE' | 'SUPABASE_STORAGE';
export type AssetCategory = 'LOGO' | 'BRAND' | 'HERO' | 'BACKGROUND' | 'PRODUCT' | 'DIAGRAM' | 'ICON' | 'CONTENT' | 'VIDEO' | 'DOCUMENT' | 'OTHER' | 'UNCATEGORIZED';
export type AssetStatus = 'DRAFT' | 'AVAILABLE' | 'IN_USE' | 'UNUSED' | 'ARCHIVED' | 'BROKEN_REFERENCE';

export interface WebsiteContentBaselineSnapshot {
  snapshotId: string;
  schemaVersion: string;
  generatedAt: number;
  sourceEntries: WebsiteContentEntry[];
  sourceHash?: string;
}

export interface WebsitePage {
  id: string;
  route: string;
  name: string;
  slug: string;
  canonicalPath: string;
  status: ContentStatus;
  order: number;
  sectionIds: string[];
  seoBinding?: string;
  createdAt: number;
  updatedAt: number;
  coverageStatus?: CoverageStatus;
}

export interface WebsiteSection {
  id: string;
  pageId: string;
  type: string;
  name: string;
  order: number;
  visible: boolean;
  contentBinding?: string;
  layoutBinding?: string;
  status: ContentStatus;
  createdAt: number;
  updatedAt: number;
  coverageStatus?: CoverageStatus;
}

export interface WebsiteContentEntry {
  id: string;
  fieldKey: string;
  label: string;
  description?: string;
  type: FieldType;
  required: boolean;
  canonicalLocale: 'vi';
  
  // Values
  vi: any; 
  en: any;
  zhCN: any;
  
  // Statuses
  translationStatuses: {
    vi: TranslationStatus;
    en: TranslationStatus;
    zhCN: TranslationStatus;
  };
  contentStatus: ContentStatus;
  
  sourceType: SourceType;
  sourceReference: string;
  validationRules?: Record<string, any>;
  version: number;
  updatedAt: number;
}

export interface WebsiteContentVersion {
  id: string;
  entryId: string;
  versionNumber: number;
  values: {
    vi: any;
    en: any;
    zhCN: any;
  };
  translationStatuses: {
    vi: TranslationStatus;
    en: TranslationStatus;
    zhCN: TranslationStatus;
  };
  createdAt: number;
  createdBy: string;
  source: string;
  summary?: string;
}

export interface WebsiteAsset {
  id: string;
  name: string;
  fileName?: string;
  category: AssetCategory;
  assetType: AssetType;
  mimeType?: string;
  
  storageMode: StorageMode;
  storageKey?: string;
  sourceUrl?: string;

  width?: number;
  height?: number;
  aspectRatio?: number;
  sizeBytes?: number;

  status: AssetStatus;

  alt?: {
    vi?: string;
    en?: string;
    zhCN?: string;
  };

  caption?: {
    vi?: string;
    en?: string;
    zhCN?: string;
  };

  createdAt: number;
  updatedAt: number;

  createdBy?: string;
  sourceType?: string;

  isLegacy: boolean;
  isExternal: boolean;
  isManaged: boolean;

  thumbnailReference?: string;
  isDecorative?: boolean;
  requiresSanitization?: boolean;
}

export interface WebsiteAssetUsage {
  id: string;
  assetId: string;
  usageType: 'CONTENT_REFERENCE' | 'THEME_REFERENCE' | 'LAYOUT_REFERENCE' | 'GLOBAL_REFERENCE' | 'LEGACY_SOURCE' | 'PUBLICATION_REFERENCE';
  
  pageId?: string;
  sectionId?: string;
  contentEntryId?: string;
  themeId?: string;
  layoutNodeId?: string;
  
  usageRole?: string;
  sourceReference?: string;
  
  isPublishedUsage: boolean;
  isDraftUsage: boolean;
  
  createdAt: number;
}

export interface WebsiteTheme {
  id: string;
  name: string;
  description: string;
  status: ThemeStatus;
  activeVersionId?: string;
  thumbnailAssetId?: string;
  createdAt: number;
  updatedAt: number;
}

export interface WebsiteThemeVersion {
  id: string;
  themeId: string;
  version: number;
  layoutTree: string; // JSON string of layout
  designTokens: string; // JSON string of tokens
  createdAt: number;
  createdBy: string;
  status: ThemeStatus;
}

export interface WebsiteLayoutNode {
  id: string;
  type: 'section' | 'container' | 'stack' | 'grid' | 'columns' | 'heading' | 'text' | 'image' | 'button' | 'video' | 'tabs' | 'accordion' | 'business_block' | 'system_block';
  parentId?: string;
  children: string[];
  props: Record<string, any>;
  style: Record<string, any>;
  responsive?: Record<string, any>;
  contentBinding?: string;
  systemBlockBinding?: string;
}

export interface WebsiteContentBinding {
  id: string;
  nodeId: string;
  contentEntryId: string;
  fieldMap: Record<string, string>;
}

export interface WebsiteSystemBlock {
  id: string;
  type: string;
  name: string;
  integrationStatus: IntegrationStatus;
  eventContractId?: string;
  schemaReference?: string;
  isRequired: boolean;
  version: number;
}

export interface WebsitePublication {
  id: string;
  name: string;
  type: 'content' | 'theme' | 'full';
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'ROLLED_BACK';
  publishedAt: number;
  publishedBy: string;
}

export interface WebsiteAuditEntry {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  changes: string; // JSON string of changes
  actorId?: string;
  actorDisplayName?: string;
  source: 'authenticated' | 'legacy' | 'system';
  timestamp: number;
}
