export interface ManifestPage {
  id: string;
  name: string;
  route: string;
  sections: ManifestSection[];
  isGlobal?: boolean;
}

export interface ManifestSection {
  id: string;
  name: string;
  sourceReference: 'i18n' | 'websiteContent' | 'industry data' | 'AI copilot data' | 'component' | 'other source';
}

export const websiteManifest: ManifestPage[] = [
  // GLOBAL (1 virtual page for shared components)
  {
    id: 'global-shared',
    name: 'Thành phần dùng chung',
    route: '/global',
    isGlobal: true,
    sections: [
      { id: 'header', name: 'Header', sourceReference: 'i18n' },
      { id: 'navigation', name: 'Navigation', sourceReference: 'i18n' },
      { id: 'mega-menu', name: 'Mega Menu', sourceReference: 'websiteContent' },
      { id: 'footer', name: 'Footer', sourceReference: 'i18n' },
      { id: 'global-cta', name: 'Global CTA', sourceReference: 'i18n' },
      { id: 'contact-info', name: 'Contact Information', sourceReference: 'websiteContent' },
      { id: 'consultation-labels', name: 'Consultation labels', sourceReference: 'i18n' },
      { id: 'legal-labels', name: 'Legal/shared labels', sourceReference: 'i18n' }
    ]
  },
  // CORE (9)
  {
    id: 'core-home',
    name: 'Home',
    route: '/',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'bottlenecks', name: 'Bottlenecks', sourceReference: 'websiteContent' },
      { id: 'architecture', name: 'Architecture', sourceReference: 'websiteContent' },
      { id: 'departments', name: 'Departments', sourceReference: 'websiteContent' },
      { id: 'controlled-ai', name: 'Controlled AI', sourceReference: 'websiteContent' },
      { id: 'industries', name: 'Industries', sourceReference: 'websiteContent' },
      { id: 'integration-security', name: 'Integration/Security', sourceReference: 'websiteContent' },
      { id: 'roadmap', name: 'Roadmap', sourceReference: 'websiteContent' },
      { id: 'final-cta', name: 'Final CTA', sourceReference: 'i18n' }
    ]
  },
  {
    id: 'core-ai-enterprise',
    name: 'AI Enterprise',
    route: '/ai-enterprise',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'silo-vs-unified', name: 'Silo vs Unified', sourceReference: 'websiteContent' },
      { id: 'transaction-flow', name: 'Transaction Flow', sourceReference: 'websiteContent' },
      { id: 'architecture', name: 'Architecture', sourceReference: 'websiteContent' },
      { id: 'approval', name: 'Approval', sourceReference: 'websiteContent' },
      { id: 'principles', name: 'Principles', sourceReference: 'websiteContent' },
      { id: 'security', name: 'Security', sourceReference: 'websiteContent' },
      { id: 'roadmap', name: 'Roadmap', sourceReference: 'websiteContent' }
    ]
  },
  {
    id: 'core-solutions',
    name: 'Solutions',
    route: '/solutions',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'departments', name: 'Department Solutions', sourceReference: 'websiteContent' },
      { id: 'needs', name: 'Need Solutions', sourceReference: 'websiteContent' }
    ]
  },
  {
    id: 'core-industries',
    name: 'Industries',
    route: '/industries',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'sectors', name: 'Industry Sectors', sourceReference: 'industry data' }
    ]
  },
  {
    id: 'core-ai',
    name: 'AI',
    route: '/ai',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'copilots', name: 'AI Copilots', sourceReference: 'AI copilot data' }
    ]
  },
  {
    id: 'core-capabilities',
    name: 'Capabilities',
    route: '/capabilities',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'features', name: 'Features', sourceReference: 'websiteContent' }
    ]
  },
  {
    id: 'core-resources',
    name: 'Resources',
    route: '/resources',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'documents', name: 'Documents', sourceReference: 'websiteContent' }
    ]
  },
  {
    id: 'core-about',
    name: 'About',
    route: '/about',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'company', name: 'Company', sourceReference: 'websiteContent' }
    ]
  },
  {
    id: 'core-contact',
    name: 'Contact',
    route: '/contact',
    sections: [
      { id: 'hero', name: 'Hero', sourceReference: 'i18n' },
      { id: 'contact-form', name: 'Contact Form', sourceReference: 'component' }
    ]
  },

  // DEPARTMENT (6)
  { id: 'dept-sales', name: 'Sales', route: '/solutions/sales', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'dept-marketing', name: 'Marketing', route: '/solutions/marketing', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'dept-customer-service', name: 'Customer Service', route: '/solutions/customer-service', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'dept-hr', name: 'HR', route: '/solutions/hr', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'dept-finance', name: 'Finance', route: '/solutions/finance', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'dept-management', name: 'Management', route: '/solutions/management', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },

  // NEEDS (6)
  { id: 'need-crm', name: 'CRM', route: '/solutions/crm', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'need-ai-agent', name: 'AI Agent', route: '/solutions/ai-agent', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'need-voice', name: 'Voice', route: '/solutions/voice', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'need-automation', name: 'Automation', route: '/solutions/automation', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'need-website', name: 'Website', route: '/solutions/website', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },
  { id: 'need-bi', name: 'BI', route: '/solutions/bi', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'websiteContent' }] },

  // INDUSTRIES (8)
  { id: 'ind-trade', name: 'Trade', route: '/industries/trade', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'industry data' }] },
  { id: 'ind-service', name: 'Service', route: '/industries/service', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'industry data' }] },
  { id: 'ind-education', name: 'Education', route: '/industries/education', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'industry data' }] },
  { id: 'ind-real-estate', name: 'Real Estate', route: '/industries/real-estate', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'industry data' }] },
  { id: 'ind-manufacturing', name: 'Manufacturing', route: '/industries/manufacturing', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'industry data' }] },
  { id: 'ind-distribution', name: 'Distribution', route: '/industries/distribution', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'industry data' }] },
  { id: 'ind-construction', name: 'Construction', route: '/industries/construction', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'industry data' }] },
  { id: 'ind-technology', name: 'Technology', route: '/industries/technology', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'industry data' }] },

  // AI COPILOTS (9)
  { id: 'ai-ceo', name: 'CEO', route: '/ai/ceo', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] },
  { id: 'ai-sales', name: 'Sales', route: '/ai/sales', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] },
  { id: 'ai-marketing', name: 'Marketing', route: '/ai/marketing', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] },
  { id: 'ai-customer-service', name: 'Customer Service', route: '/ai/customer-service', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] },
  { id: 'ai-hr', name: 'HR', route: '/ai/hr', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] },
  { id: 'ai-finance', name: 'Finance', route: '/ai/finance', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] },
  { id: 'ai-voice', name: 'Voice', route: '/ai/voice', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] },
  { id: 'ai-workflow', name: 'Workflow', route: '/ai/workflow', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] },
  { id: 'ai-rag', name: 'RAG', route: '/ai/rag', sections: [{ id: 'detail', name: 'Detail', sourceReference: 'AI copilot data' }] }
];
