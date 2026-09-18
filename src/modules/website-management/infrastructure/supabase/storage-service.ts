import { SupabaseClient } from '@supabase/supabase-js';
import { InfrastructureError } from './client';

export interface StorageUploadResult {
  path: string;
  checksum: string;
  sizeBytes: number;
  mimeType: string;
}

export interface WebsiteAssetStorageService {
  validateFile(file: File): { valid: boolean; error?: string; requiresSanitization?: boolean };
  uploadAsset(file: File, assetId: string): Promise<StorageUploadResult>;
  getSignedUrl(path: string, expiresIn?: number): Promise<string>;
  getPublicUrl(path: string): string;
  deleteAsset(path: string): Promise<boolean>;
  checkExists(path: string): Promise<boolean>;
}

export const MEDIA_POLICIES = {
  MAX_SIZES: {
    IMAGE: 10 * 1024 * 1024, // 10MB
    SVG: 2 * 1024 * 1024, // 2MB
    VIDEO: 150 * 1024 * 1024, // 150MB
    DOCUMENT: 20 * 1024 * 1024, // 20MB
  },
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_SVG_TYPES: ['image/svg+xml'],
  ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/webm'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf'],
  BLOCKED_EXTENSIONS: ['.html', '.htm', '.js', '.mjs', '.cjs', '.exe', '.sh', '.bat', '.php'],
};

export class SupabaseWebsiteAssetStorage implements WebsiteAssetStorageService {
  private bucketName = 'website-assets';

  constructor(private client: SupabaseClient) {}

  public validateFile(file: File): { valid: boolean; error?: string; requiresSanitization?: boolean } {
    const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    
    // 1. Blocked Executables
    if (MEDIA_POLICIES.BLOCKED_EXTENSIONS.includes(extension)) {
      return { valid: false, error: 'FILE_TYPE_BLOCKED' };
    }

    // 2. MIME & Size Validation
    const mime = file.type;
    
    if (MEDIA_POLICIES.ALLOWED_IMAGE_TYPES.includes(mime)) {
      if (file.size > MEDIA_POLICIES.MAX_SIZES.IMAGE) return { valid: false, error: 'FILE_TOO_LARGE' };
      return { valid: true };
    }
    
    if (MEDIA_POLICIES.ALLOWED_SVG_TYPES.includes(mime) || extension === '.svg') {
      if (file.size > MEDIA_POLICIES.MAX_SIZES.SVG) return { valid: false, error: 'FILE_TOO_LARGE' };
      return { valid: true, requiresSanitization: true }; // SVG always needs sanitization in production
    }

    if (MEDIA_POLICIES.ALLOWED_VIDEO_TYPES.includes(mime)) {
      if (file.size > MEDIA_POLICIES.MAX_SIZES.VIDEO) return { valid: false, error: 'FILE_TOO_LARGE' };
      return { valid: true };
    }

    if (MEDIA_POLICIES.ALLOWED_DOCUMENT_TYPES.includes(mime)) {
      if (file.size > MEDIA_POLICIES.MAX_SIZES.DOCUMENT) return { valid: false, error: 'FILE_TOO_LARGE' };
      return { valid: true };
    }

    return { valid: false, error: 'UNSUPPORTED_TYPE' };
  }

  public async uploadAsset(file: File, assetId: string): Promise<StorageUploadResult> {
    const validation = this.validateFile(file);
    if (!validation.valid) {
      throw new InfrastructureError('STORAGE_ERROR', `Upload failed: ${validation.error}`);
    }

    const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    const env = import.meta.env.MODE || 'development';
    
    // Architecture: {environment}/{assetId}/original{ext}
    const path = `${env}/${assetId}/original${extension}`;

    const { data, error } = await this.client.storage
      .from(this.bucketName)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false // Immutable identity rule
      });

    if (error) {
      throw new InfrastructureError('STORAGE_ERROR', `Supabase upload failed: ${error.message}`, error);
    }

    return {
      path: data.path,
      // Real checksum typically handled by a robust crypto API or backend hash.
      // Supabase storage returns an ETag. 
      checksum: 'TBD_ETAG_OR_SHA',
      sizeBytes: file.size,
      mimeType: file.type
    };
  }

  public async getSignedUrl(path: string, expiresIn: number = 3600): Promise<string> {
    const { data, error } = await this.client.storage
      .from(this.bucketName)
      .createSignedUrl(path, expiresIn);

    if (error) {
      throw new InfrastructureError('STORAGE_ERROR', `Failed to generate signed URL: ${error.message}`, error);
    }
    
    return data.signedUrl;
  }

  public getPublicUrl(path: string): string {
    const { data } = this.client.storage
      .from(this.bucketName)
      .getPublicUrl(path);
      
    return data.publicUrl;
  }

  public async deleteAsset(path: string): Promise<boolean> {
    // Delete policy is highly restricted.
    // In production this would only succeed if the user has EDIT_MEDIA 
    // and the object isn't restricted by active references (checked server-side).
    const { error } = await this.client.storage
      .from(this.bucketName)
      .remove([path]);

    if (error) {
      throw new InfrastructureError('STORAGE_ERROR', `Failed to delete asset: ${error.message}`, error);
    }

    return true;
  }

  public async checkExists(path: string): Promise<boolean> {
    // We can list files in the directory to see if it exists
    const pathParts = path.split('/');
    const fileName = pathParts.pop();
    const directory = pathParts.join('/');
    
    const { data, error } = await this.client.storage
      .from(this.bucketName)
      .list(directory, {
        search: fileName
      });

    if (error) {
      return false; // Assuming no access or doesn't exist
    }

    return data && data.length > 0;
  }
}
