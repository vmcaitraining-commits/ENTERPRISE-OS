export type FieldStatus = 
  | 'Đã xác nhận' 
  | 'Chưa cập nhật' 
  | 'Cần bổ sung' 
  | 'Chờ duyệt' 
  | 'Hết hiệu lực';

export interface ProfileField<T = string> {
  id: string;
  label: string;
  value: T;
  status: FieldStatus;
  notes?: string;
  verifiedAt?: string;
}

export interface CompanyIdentity {
  companyName: ProfileField<string>;
  brandName: ProfileField<string>;
  shortName: ProfileField<string>;
  representative: ProfileField<string>;
}

export interface CompanyLegal {
  legalName: ProfileField<string>;
  businessCode: ProfileField<string>;
  taxCode: ProfileField<string>;
}

export interface CompanyContact {
  website: ProfileField<string>;
  domain: ProfileField<string>;
  email: ProfileField<string>;
  phone: ProfileField<string>;
  address: ProfileField<string>;
  region: ProfileField<string>;
}

export interface CompanyMarket {
  currentMarket: ProfileField<string>;
  expansionOrientation: ProfileField<string>;
}

export interface StrategySectionItem {
  id: string;
  title: string;
  content: string;
  details?: string[];
  status: FieldStatus;
}

export interface ProductScope {
  id: string;
  code: string;
  name: string;
  description: string;
  items: string[];
}

export interface EcosystemProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: FieldStatus;
}

export interface TargetCustomerInfo {
  primaryTarget: string;
  referenceScale: string;
  referenceRevenue: string;
  suitableCharacteristics: string[];
  priorityIndustries: string[];
  nonPriorityCustomers: string[];
  implementationSteps: string[];
  pricingModel: string;
}

export interface BrandColor {
  id: string;
  name: string;
  hex: string;
  role: 'Primary' | 'Secondary' | 'AI' | 'Accent' | 'Background' | 'Surface' | 'Text' | 'Border' | 'Success' | 'Warning' | 'Danger';
  description: string;
  usageRatio?: string;
}

export interface BrandLogo {
  id: string;
  title: string;
  type: 'Logo chính' | 'Logo ngang' | 'Logo biểu tượng' | 'Logo nền sáng' | 'Logo nền tối' | 'Logo trắng' | 'Favicon';
  status: FieldStatus;
  format: string;
  url: string;
  usageNote: string;
}

export interface TypographyLevel {
  level: 'Heading' | 'Subheading' | 'Body' | 'Caption' | 'Number';
  fontFamily: string;
  weight: string;
  size: string;
  usage: string;
}

export type MediaType = 'Ảnh' | 'Video';
export type MediaSource = 'Upload' | 'URL' | 'YouTube' | 'Vimeo' | 'Drive' | 'Khác';
export type MediaStatus = 'Draft' | 'Approved' | 'Published' | 'Archived';

export type MediaCategory = 
  | 'Logo'
  | 'Brand'
  | 'Company'
  | 'Team'
  | 'Office'
  | 'Product'
  | 'AI Enterprise'
  | 'Solution'
  | 'Customer'
  | 'Case Study'
  | 'Website Hero'
  | 'Website Banner'
  | 'Article'
  | 'Marketing'
  | 'Social'
  | 'Training'
  | 'Other';

export type MediaUseCase = 
  | 'Website'
  | 'Landing Page'
  | 'Blog'
  | 'Sale'
  | 'Marketing'
  | 'Presentation'
  | 'Proposal'
  | 'Social Media'
  | 'Training'
  | 'Internal'
  | 'AI';

export type WebsitePlacement = 
  | 'Hero'
  | 'About Us'
  | 'Product'
  | 'Feature'
  | 'Solution'
  | 'Industry'
  | 'CTA'
  | 'Background'
  | 'Card'
  | 'Banner'
  | 'Blog'
  | 'Case Study'
  | 'Team'
  | 'Footer';

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  source: MediaSource;
  url: string;
  thumbnail?: string;
  description: string;
  altText: string;
  caption?: string;
  category: MediaCategory;
  tags: string[];
  topic?: string;
  relatedProducts?: string;
  relatedServices?: string;
  relatedTargetCustomers?: string;
  relatedIndustry?: string;
  useCases: MediaUseCase[];
  suggestedPlacements: WebsitePlacement[];
  status: MediaStatus;
  uploadedAt: string;
  uploader: string;
  fileSize?: string;
  dimensions?: string;
}

export interface MissingDataItem {
  id: number;
  title: string;
  category: string;
  priority: 'Cao' | 'Trung bình' | 'Thấp';
  status: 'Chưa có' | 'Đang xử lý' | 'Đã hoàn thành';
  note?: string;
}

export interface ChangeLogEntry {
  id: string;
  timestamp: string;
  user: string;
  tab: string;
  field: string;
  oldValue: string;
  newValue: string;
}

export interface EnterpriseData {
  version: string;
  profileStatus: string;
  lastUpdated: string;
  identity: CompanyIdentity;
  legal: CompanyLegal;
  contact: CompanyContact;
  market: CompanyMarket;
  strategy: StrategySectionItem[];
  coreProduct: {
    name: string;
    tagline: string;
    role: string;
    deploymentPrinciples: string[];
    scopes: ProductScope[];
  };
  ecosystem: EcosystemProduct[];
  customerAndMarket: TargetCustomerInfo;
  brandColors: BrandColor[];
  brandLogos: BrandLogo[];
  typography: TypographyLevel[];
  brandPersonality: string[];
  designPrinciples: string[];
  aiRules: string[];
  dataRules: string[];
  dataPolicies: string[];
  missingDataItems: MissingDataItem[];
}
