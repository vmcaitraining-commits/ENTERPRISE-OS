import React from 'react';

export type PublicRoute =
  | '/'
  | '/ai-enterprise'
  | '/ai-enterprise/architecture'
  | '/solutions'
  | '/solutions/sales'
  | '/solutions/marketing'
  | '/solutions/customer-service'
  | '/solutions/hr'
  | '/solutions/finance'
  | '/solutions/management'
  | '/solutions/crm'
  | '/solutions/ai-agent'
  | '/solutions/voice'
  | '/solutions/automation'
  | '/solutions/website'
  | '/solutions/bi'
  | '/industries'
  | '/industries/trade'
  | '/industries/service'
  | '/industries/education'
  | '/industries/real-estate'
  | '/industries/manufacturing'
  | '/industries/distribution'
  | '/industries/construction'
  | '/industries/technology'
  | '/ai'
  | '/ai/ceo'
  | '/ai/sales'
  | '/ai/marketing'
  | '/ai/customer-service'
  | '/ai/hr'
  | '/ai/finance'
  | '/ai/voice'
  | '/ai/workflow'
  | '/ai/rag'
  | '/capabilities'
  | '/resources'
  | '/about'
  | '/contact'
  | '/admin';

export interface DepartmentSolution {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  iconName: string;
  problems: string[];
  dataManaged: string[];
  processes: string[];
  aiAssistance: {
    reads: string;
    analyzes: string;
    proposes: string;
    executes: string;
    requiresApproval: string;
  };
  reports: string[];
  interDepartmentConnection: string;
}

export interface IndustrySolution {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  iconName: string;
  characteristics: string[];
  operatingProblems: string[];
  suitableModules: string[];
  aiCapabilities: string[];
  deploymentRoadmap: string[];
}

export interface AiAgentProfile {
  id: string;
  slug: string;
  name: string;
  role: string;
  tagline: string;
  iconName: string;
  definition: string;
  businessProblem: string[];
  dataRead: string[];
  analysisCapability: string[];
  proposals: string[];
  executionScope: string[];
  approvalRequired: string[];
  expectedResults: string[];
}

export interface NeedSolution {
  id: string;
  slug: string; // 'crm' | 'ai-agent' | 'voice' | 'automation' | 'website' | 'bi'
  name: string;
  tagline: string;
  iconName: string;
  coreValue: string;
  problems: string[]; // 3-5 real operational issues
  solutionOverview: string; // how the system solves it
  dataTypes: string[]; // relevant data entities
  operatingWorkflow: {
    input: string;
    process: string;
    aiAutomation: string;
    humanControl: string;
    output: string;
  };
  keyFeatures: {
    title: string;
    description: string;
  }[];
  aiAssistance: {
    reads: string;
    analyzes: string;
    proposes: string;
    executes: string;
    requiresApproval: string;
  };
  systemConnections: string[]; // related modules
  reportTypes: string[]; // report categories only, NO fabricated stats
  securityAndGovernance: {
    rbac: string;
    auditLog: string;
    approvalMechanism: string;
    dataScope: string;
  };
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companyScale: string;
  industry: string;
  needDescription: string;
  type: 'consultation' | 'assessment' | 'booking';
}
