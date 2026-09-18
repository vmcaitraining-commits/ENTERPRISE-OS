import {
  WebsitePage,
  WebsiteSection,
  WebsiteContentEntry,
  WebsiteContentVersion,
  WebsiteAsset,
  WebsiteAssetUsage,
  WebsiteTheme,
  WebsiteThemeVersion,
  WebsitePublication,
  WebsiteAuditEntry,
  ThemeStatus,
  WebsiteContentBaselineSnapshot
} from './models';

export interface WebsiteManagementRepository {
  // Persistence Status
  getPersistenceStatus(): 'LOCAL_DEVELOPMENT' | 'DATABASE' | 'CLOUD' | 'SYNCED';

  // Pages
  getPages(): Promise<WebsitePage[]>;
  getPageById(id: string): Promise<WebsitePage | null>;

  // Sections
  getSectionsByPageId(pageId: string): Promise<WebsiteSection[]>;

  // Content
  getContentEntries(): Promise<WebsiteContentEntry[]>;
  getContentEntryById(id: string): Promise<WebsiteContentEntry | null>;
  getContentVersions(entryId: string): Promise<WebsiteContentVersion[]>;
  getContentEntriesBySectionId(sectionId: string): Promise<WebsiteContentEntry[]>;
  getBaselineSnapshot(): Promise<WebsiteContentBaselineSnapshot | undefined>;
  saveDraft(entry: WebsiteContentEntry, actor: string): Promise<WebsiteContentEntry>;
  restoreVersion(versionId: string, actor: string): Promise<WebsiteContentEntry>;

  // Assets metadata
  getAssets(): Promise<WebsiteAsset[]>;
  getAssetById(id: string): Promise<WebsiteAsset | null>;
  saveAsset(asset: WebsiteAsset, actor: string): Promise<WebsiteAsset>;
  archiveAsset(id: string, actor: string): Promise<boolean>;
  getAssetUsages(assetId: string): Promise<WebsiteAssetUsage[]>;
  saveAssetUsage(usage: WebsiteAssetUsage): Promise<WebsiteAssetUsage>;

  // Themes
  getThemes(): Promise<WebsiteTheme[]>;
  getThemeById(id: string): Promise<WebsiteTheme | null>;
  getActiveTheme(): Promise<WebsiteTheme | null>;
  getThemeVersions(themeId: string): Promise<WebsiteThemeVersion[]>;

  // Publications
  getPublications(): Promise<WebsitePublication[]>;

  // Audit
  getAuditLogs(): Promise<WebsiteAuditEntry[]>;
}
