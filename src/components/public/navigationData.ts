import React from 'react';
import {
  TrendingUp, Megaphone, Headphones, Users, CreditCard, ShieldCheck,
  Zap, Globe, BarChart3, ShoppingBag, Briefcase, GraduationCap, Building,
  Factory, Truck, HardHat, Cpu, Crown, Mic, Workflow, Search
} from 'lucide-react';

export interface NavDepartmentItem {
  name: string;
  nameKey: string;
  path: string;
  icon: React.ElementType;
}

export interface NavNeedItem {
  name: string;
  nameKey: string;
  path: string;
  icon: React.ElementType;
}

export interface NavIndustryItem {
  name: string;
  nameKey: string;
  path: string;
  icon: React.ElementType;
}

export interface NavAiAgentItem {
  name: string;
  nameKey: string;
  desc: string;
  descKey: string;
  path: string;
  icon: React.ElementType;
}

export const NAV_DEPARTMENTS: NavDepartmentItem[] = [
  { name: 'Kinh doanh (Sales)', nameKey: 'deptSales', path: '/solutions/sales', icon: TrendingUp },
  { name: 'Marketing', nameKey: 'deptMarketing', path: '/solutions/marketing', icon: Megaphone },
  { name: 'Chăm sóc KH (CSKH)', nameKey: 'deptCustomerService', path: '/solutions/customer-service', icon: Headphones },
  { name: 'Nhân sự (HR)', nameKey: 'deptHr', path: '/solutions/hr', icon: Users },
  { name: 'Tài chính — Kế toán', nameKey: 'deptFinance', path: '/solutions/finance', icon: CreditCard },
  { name: 'Điều hành doanh nghiệp', nameKey: 'deptManagement', path: '/solutions/management', icon: ShieldCheck }
];

export const NAV_NEEDS: NavNeedItem[] = [
  { name: 'CRS / CRM Doanh nghiệp', nameKey: 'needCrm', path: '/solutions/crm', icon: Users },
  { name: 'Mạng lưới AI Agent', nameKey: 'needAiAgent', path: '/solutions/ai-agent', icon: Zap },
  { name: 'AI Voice Cuộc gọi', nameKey: 'needVoice', path: '/solutions/voice', icon: Mic },
  { name: 'Tự động hóa Workflow SOP', nameKey: 'needAutomation', path: '/solutions/automation', icon: Workflow },
  { name: 'Website Doanh nghiệp', nameKey: 'needWebsite', path: '/solutions/website', icon: Globe },
  { name: 'Báo cáo & BI Thời gian thực', nameKey: 'needBi', path: '/solutions/bi', icon: BarChart3 }
];

export const NAV_INDUSTRIES: NavIndustryItem[] = [
  { name: 'Thương mại & Bán lẻ', nameKey: 'industryTrade', path: '/industries/trade', icon: ShoppingBag },
  { name: 'Dịch vụ chuyên nghiệp', nameKey: 'industryService', path: '/industries/service', icon: Briefcase },
  { name: 'Giáo dục & Đào tạo', nameKey: 'industryEducation', path: '/industries/education', icon: GraduationCap },
  { name: 'Bất động sản', nameKey: 'industryRealEstate', path: '/industries/real-estate', icon: Building },
  { name: 'Sản xuất & Gia công', nameKey: 'industryManufacturing', path: '/industries/manufacturing', icon: Factory },
  { name: 'Phân phối & Bán buôn', nameKey: 'industryDistribution', path: '/industries/distribution', icon: Truck },
  { name: 'Xây dựng & Thi công', nameKey: 'industryConstruction', path: '/industries/construction', icon: HardHat },
  { name: 'Doanh nghiệp Công nghệ', nameKey: 'industryTechnology', path: '/industries/technology', icon: Cpu }
];

export const NAV_AI_AGENTS: NavAiAgentItem[] = [
  { name: 'AI CEO Copilot', nameKey: 'aiCeoName', path: '/ai/ceo', desc: 'Trợ lý điều hành lãnh đạo cấp cao', descKey: 'aiCeoDesc', icon: Crown },
  { name: 'AI Sales Copilot', nameKey: 'aiSalesName', path: '/ai/sales', desc: 'Chấm điểm lead & tư vấn', descKey: 'aiSalesDesc', icon: TrendingUp },
  { name: 'AI Marketing Copilot', nameKey: 'aiMarketingName', path: '/ai/marketing', desc: 'Tối ưu CAC & nội dung', descKey: 'aiMarketingDesc', icon: Megaphone },
  { name: 'AI CSKH Copilot', nameKey: 'aiCskhName', path: '/ai/customer-service', desc: 'Xử lý ticket & SLA', descKey: 'aiCskhDesc', icon: Headphones },
  { name: 'AI HR Copilot', nameKey: 'aiHrName', path: '/ai/hr', desc: 'Hành chính, tuyển dụng & chấm công', descKey: 'aiHrDesc', icon: Users },
  { name: 'AI Finance Copilot', nameKey: 'aiFinanceName', path: '/ai/finance', desc: 'Dòng tiền & đối soát hóa đơn', descKey: 'aiFinanceDesc', icon: CreditCard },
  { name: 'AI Voice Copilot', nameKey: 'aiVoiceName', path: '/ai/voice', desc: 'Thoại nhắc lịch có kiểm soát', descKey: 'aiVoiceDesc', icon: Mic },
  { name: 'AI Workflow Copilot', nameKey: 'aiWorkflowName', path: '/ai/workflow', desc: 'Tự động hóa SOP liên phòng', descKey: 'aiWorkflowDesc', icon: Workflow },
  { name: 'AI Search / RAG Copilot', nameKey: 'aiRagName', path: '/ai/rag', desc: 'Tra cứu tri thức trích dẫn nguồn', descKey: 'aiRagDesc', icon: Search }
];
