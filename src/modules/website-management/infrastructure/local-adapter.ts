import { WebsiteManagementRepository } from '../domain/repository';
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
  ContentStatus,
  TranslationStatus,
  WebsiteContentBaselineSnapshot,
  CoverageStatus
} from '../domain/models';
import { WebsiteContentSourceExtractor } from './source-extractor';
import { websiteManifest } from '../domain/website-manifest';
import { initialMediaItems } from '../../../data/initialMedia';
import * as initialData from '../../../data/initialData';

const STORAGE_KEY = 'vmc_website_management_v1';

interface LocalStorageSchema {
  pages: WebsitePage[];
  sections: WebsiteSection[];
  contentEntries: WebsiteContentEntry[];
  contentVersions: WebsiteContentVersion[];
  assets: WebsiteAsset[];
  assetUsages: WebsiteAssetUsage[];
  themes: WebsiteTheme[];
  themeVersions: WebsiteThemeVersion[];
  publications: WebsitePublication[];
  auditLogs: WebsiteAuditEntry[];
  baselineSnapshot?: WebsiteContentBaselineSnapshot;
}

export class LocalWebsiteManagementRepository implements WebsiteManagementRepository {
  private initPromise: Promise<void> | null = null;

  constructor() {
    // We start the initialization asynchronously
    this.initPromise = this.initializeFromSourceIfNeeded();
  }

  private async initializeFromSourceIfNeeded() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data) as LocalStorageSchema;
        if (parsed.baselineSnapshot) return; // Already has baseline
      }
    } catch (e) {
      console.error(e);
    }

    // Extract real source baseline
    const extractor = new WebsiteContentSourceExtractor();
    const sourceEntries = await extractor.extract();

    // Map Pages and Sections
    const pages: WebsitePage[] = [];
    const sections: WebsiteSection[] = [];

    websiteManifest.forEach((manifestPage, pIndex) => {
      let pageCoverage: CoverageStatus = 'PARTIALLY_EDITABLE';
      
      pages.push({
        id: manifestPage.id,
        route: manifestPage.route,
        name: manifestPage.name,
        slug: manifestPage.route.replace(/\//g, '') || 'home',
        canonicalPath: manifestPage.route,
        status: 'PUBLISHED',
        order: pIndex,
        sectionIds: manifestPage.sections.map(s => s.id),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        coverageStatus: pageCoverage
      });

      manifestPage.sections.forEach((manifestSection, sIndex) => {
        const sectionId = `${manifestPage.id}-${manifestSection.id}`;
        
        // Determine section coverage
        const sectionEntries = sourceEntries.filter(e => e.id.startsWith(sectionId + '-'));
        const hasRealEntries = sectionEntries.some(e => e.sourceType !== 'UNKNOWN' && e.sourceType !== 'COMPONENT_SOURCE');
        
        let sectionCoverage: CoverageStatus = 'SOURCE_NOT_YET_NORMALIZED';
        if (hasRealEntries) {
          sectionCoverage = 'EDITABLE';
        } else if (manifestSection.sourceReference === 'component') {
          sectionCoverage = 'READ_ONLY_SOURCE';
        }

        sections.push({
          id: sectionId,
          pageId: manifestPage.id,
          type: 'generic_section',
          name: manifestSection.name,
          order: sIndex,
          visible: true,
          status: 'PUBLISHED',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          coverageStatus: sectionCoverage
        });
      });
    });

    const baselineSnapshot: WebsiteContentBaselineSnapshot = {
      snapshotId: `baseline_${Date.now()}`,
      schemaVersion: '1.0',
      generatedAt: Date.now(),
      sourceEntries: JSON.parse(JSON.stringify(sourceEntries)),
      sourceHash: 'source_hash_v1'
    };

    let existingData: LocalStorageSchema = {
      pages: [],
      sections: [],
      contentEntries: [],
      contentVersions: [],
      assets: [],
      assetUsages: [],
      themes: [],
      themeVersions: [],
      publications: [],
      auditLogs: []
    };

    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        existingData = JSON.parse(data) as LocalStorageSchema;
      }
    } catch(e) {}

    // DO NOT RE-SEED OVER USER DRAFTS
    // Only set contentEntries if they are empty
    if (!existingData.contentEntries || existingData.contentEntries.length === 0) {
      existingData.contentEntries = sourceEntries;
    }
    
    // Always update structural items (pages/sections) and the baseline snapshot
    existingData.pages = pages;
    existingData.sections = sections;
    existingData.baselineSnapshot = baselineSnapshot;
    
    // Parse legacy media if not parsed yet
    if (!existingData.assets || existingData.assets.length === 0) {
      existingData.assets = initialMediaItems.map(item => {
        let type: any = 'OTHER';
        if (item.type === 'Ảnh') {
          type = item.url.includes('svg+xml') ? 'SVG' : 'IMAGE';
        } else if (item.type === 'Video') {
          type = 'VIDEO';
        }

        let storageMode: any = 'EXTERNAL_URL';
        if (item.url.startsWith('data:image/svg+xml')) storageMode = 'INLINE_SVG';
        else if (item.url.startsWith('data:')) storageMode = 'DATA_URI';
        else if (item.url.startsWith('/')) storageMode = 'LOCAL_DEVELOPMENT_REFERENCE';
        
        let width, height;
        if (item.dimensions) {
          const match = item.dimensions.match(/(\d+)\s*x\s*(\d+)/);
          if (match) {
            width = parseInt(match[1], 10);
            height = parseInt(match[2], 10);
          }
        }
        
        let sizeBytes;
        if (item.fileSize && item.fileSize.includes('KB')) {
          sizeBytes = parseInt(item.fileSize) * 1024;
        }

        return {
          id: item.id,
          name: item.title || item.id,
          category: 'UNCATEGORIZED', // we can map better later
          assetType: type,
          storageMode: storageMode,
          sourceUrl: item.url,
          status: 'AVAILABLE',
          isLegacy: true,
          isExternal: false,
          isManaged: false,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          alt: { vi: item.altText },
          caption: { vi: item.caption },
          width,
          height,
          sizeBytes,
          thumbnailReference: item.thumbnail,
          sourceType: 'LEGACY_SOURCE'
        };
      });
      existingData.assetUsages = [];
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData));
  }

  private async getStorage(): Promise<LocalStorageSchema> {
    if (this.initPromise) {
      await this.initPromise;
    }
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data) as LocalStorageSchema;
      }
    } catch (e) {
      console.error('Failed to read from localStorage', e);
    }
    return {
      pages: [],
      sections: [],
      contentEntries: [],
      contentVersions: [],
      assets: [],
      assetUsages: [],
      themes: [],
      themeVersions: [],
      publications: [],
      auditLogs: []
    };
  }

  getPersistenceStatus(): 'LOCAL_DEVELOPMENT' {
    return 'LOCAL_DEVELOPMENT';
  }

  async getPages(): Promise<WebsitePage[]> {
    const storage = await this.getStorage();
    return storage.pages;
  }

  async getPageById(id: string): Promise<WebsitePage | null> {
    const storage = await this.getStorage();
    return storage.pages.find(p => p.id === id) || null;
  }

  async getSectionsByPageId(pageId: string): Promise<WebsiteSection[]> {
    const storage = await this.getStorage();
    return storage.sections.filter(s => s.pageId === pageId);
  }

  async getContentEntries(): Promise<WebsiteContentEntry[]> {
    const storage = await this.getStorage();
    return storage.contentEntries;
  }

  async getContentEntryById(id: string): Promise<WebsiteContentEntry | null> {
    const storage = await this.getStorage();
    return storage.contentEntries.find(c => c.id === id) || null;
  }

  async getContentVersions(entryId: string): Promise<WebsiteContentVersion[]> {
    const storage = await this.getStorage();
    return storage.contentVersions.filter(v => v.entryId === entryId);
  }

  async getContentEntriesBySectionId(sectionId: string): Promise<WebsiteContentEntry[]> {
    const storage = await this.getStorage();
    return storage.contentEntries.filter(c => c.id.startsWith(sectionId + '-'));
  }

  async getBaselineSnapshot(): Promise<WebsiteContentBaselineSnapshot | undefined> {
    const storage = await this.getStorage();
    return storage.baselineSnapshot;
  }

  private saveStorage(data: LocalStorageSchema) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  async saveDraft(entry: WebsiteContentEntry, actor: string): Promise<WebsiteContentEntry> {
    const storage = await this.getStorage();
    
    // Check if entry exists, update or add
    const existingIndex = storage.contentEntries.findIndex(e => e.id === entry.id);
    let previousEntry: WebsiteContentEntry | undefined;
    
    entry.updatedAt = Date.now();
    entry.version += 1;
    
    if (existingIndex >= 0) {
      previousEntry = storage.contentEntries[existingIndex];
      // Dependency: If VI changed, EN and ZH needs review
      if (JSON.stringify(previousEntry.vi) !== JSON.stringify(entry.vi)) {
        entry.translationStatuses.en = 'OUTDATED';
        entry.translationStatuses.zhCN = 'OUTDATED';
      }
      storage.contentEntries[existingIndex] = entry;
    } else {
      entry.version = 1;
      storage.contentEntries.push(entry);
    }
    
    // Create version
    const newVersion: WebsiteContentVersion = {
      id: `v_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      entryId: entry.id,
      versionNumber: entry.version,
      values: {
        vi: entry.vi,
        en: entry.en,
        zhCN: entry.zhCN
      },
      translationStatuses: {
        vi: entry.translationStatuses.vi,
        en: entry.translationStatuses.en,
        zhCN: entry.translationStatuses.zhCN
      },
      createdAt: entry.updatedAt,
      createdBy: actor,
      source: 'legacy/system'
    };
    
    storage.contentVersions.push(newVersion);
    this.saveStorage(storage);
    
    return entry;
  }

  async restoreVersion(versionId: string, actor: string): Promise<WebsiteContentEntry> {
    const storage = await this.getStorage();
    const version = storage.contentVersions.find(v => v.id === versionId);
    if (!version) throw new Error('Version not found');
    
    const entryIndex = storage.contentEntries.findIndex(e => e.id === version.entryId);
    if (entryIndex < 0) throw new Error('Entry not found');
    
    const entry = storage.contentEntries[entryIndex];
    
    const newEntry: WebsiteContentEntry = {
      ...entry,
      vi: version.values.vi,
      en: version.values.en,
      zhCN: version.values.zhCN,
      translationStatuses: { ...version.translationStatuses }
    };
    
    return this.saveDraft(newEntry, actor);
  }

  async getAssets(): Promise<WebsiteAsset[]> {
    const storage = await this.getStorage();
    return storage.assets;
  }

  async getAssetById(id: string): Promise<WebsiteAsset | null> {
    const storage = await this.getStorage();
    return storage.assets.find(a => a.id === id) || null;
  }

  async saveAsset(asset: WebsiteAsset, actor: string): Promise<WebsiteAsset> {
    const storage = await this.getStorage();
    const index = storage.assets.findIndex(a => a.id === asset.id);
    
    asset.updatedAt = Date.now();
    
    if (index >= 0) {
      storage.assets[index] = asset;
    } else {
      asset.createdAt = Date.now();
      storage.assets.push(asset);
    }
    
    this.saveStorage(storage);
    return asset;
  }

  async archiveAsset(id: string, actor: string): Promise<boolean> {
    const storage = await this.getStorage();
    const index = storage.assets.findIndex(a => a.id === id);
    if (index >= 0) {
      storage.assets[index].status = 'ARCHIVED';
      storage.assets[index].updatedAt = Date.now();
      this.saveStorage(storage);
      return true;
    }
    return false;
  }

  async getAssetUsages(assetId: string): Promise<WebsiteAssetUsage[]> {
    const storage = await this.getStorage();
    return storage.assetUsages.filter(u => u.assetId === assetId);
  }

  async saveAssetUsage(usage: WebsiteAssetUsage): Promise<WebsiteAssetUsage> {
    const storage = await this.getStorage();
    const index = storage.assetUsages.findIndex(u => u.id === usage.id);
    
    if (index >= 0) {
      storage.assetUsages[index] = usage;
    } else {
      usage.createdAt = Date.now();
      storage.assetUsages.push(usage);
    }
    
    this.saveStorage(storage);
    return usage;
  }

  async getThemes(): Promise<WebsiteTheme[]> {
    const storage = await this.getStorage();
    return storage.themes;
  }

  async getThemeById(id: string): Promise<WebsiteTheme | null> {
    const storage = await this.getStorage();
    return storage.themes.find(t => t.id === id) || null;
  }

  async getActiveTheme(): Promise<WebsiteTheme | null> {
    const storage = await this.getStorage();
    const themes = storage.themes;
    const active = themes.find(t => t.status === 'ACTIVE');
    if (active) return active;
    
    // Fallback: rule in domain: there should be 1 ACTIVE theme.
    // If not found, just return null.
    return null;
  }

  async getThemeVersions(themeId: string): Promise<WebsiteThemeVersion[]> {
    const storage = await this.getStorage();
    return storage.themeVersions.filter(v => v.themeId === themeId);
  }

  async getPublications(): Promise<WebsitePublication[]> {
    const storage = await this.getStorage();
    return storage.publications;
  }

  async getAuditLogs(): Promise<WebsiteAuditEntry[]> {
    const storage = await this.getStorage();
    return storage.auditLogs;
  }
}
