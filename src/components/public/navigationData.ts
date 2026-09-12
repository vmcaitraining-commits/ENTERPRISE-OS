import React from 'react';
import {
  TrendingUp, Megaphone, Headphones, Users, CreditCard, ShieldCheck,
  Zap, Globe, BarChart3, ShoppingBag, Briefcase, GraduationCap, Building,
  Factory, Truck, HardHat, Cpu, Crown, Mic, Workflow, Search
} from 'lucide-react';

export interface NavDepartmentItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

export interface NavNeedItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

export interface NavIndustryItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

export interface NavAiAgentItem {
  name: string;
  path: string;
  desc: string;
  icon: React.ElementType;
}

export const NAV_DEPARTMENTS: NavDepartmentItem[] = [
  { name: 'Kinh doanh (Sales)', path: '/solutions/sales', icon: TrendingUp },
  { name: 'Marketing', path: '/solutions/marketing', icon: Megaphone },
  { name: 'Chăm sóc KH (CSKH)', path: '/solutions/customer-service', icon: Headphones },
  { name: 'Nhân sự (HR)', path: '/solutions/hr', icon: Users },
  { name: 'Tài chính — Kế toán', path: '/solutions/finance', icon: CreditCard },
  { name: 'Điều hành doanh nghiệp', path: '/solutions/management', icon: ShieldCheck }
];

export const NAV_NEEDS: NavNeedItem[] = [
  { name: 'CRS / CRM Doanh nghiệp', path: '/solutions/crm', icon: Users },
  { name: 'Mạng lưới AI Agent', path: '/solutions/ai-agent', icon: Zap },
  { name: 'AI Voice Cuộc gọi', path: '/solutions/voice', icon: Mic },
  { name: 'Tự động hóa Workflow SOP', path: '/solutions/automation', icon: Workflow },
  { name: 'Website Doanh nghiệp', path: '/solutions/website', icon: Globe },
  { name: 'Báo cáo & BI Thời gian thực', path: '/solutions/bi', icon: BarChart3 }
];

export const NAV_INDUSTRIES: NavIndustryItem[] = [
  { name: 'Thương mại & Bán lẻ', path: '/industries/trade', icon: ShoppingBag },
  { name: 'Dịch vụ chuyên nghiệp', path: '/industries/service', icon: Briefcase },
  { name: 'Giáo dục & Đào tạo', path: '/industries/education', icon: GraduationCap },
  { name: 'Bất động sản', path: '/industries/real-estate', icon: Building },
  { name: 'Sản xuất & Gia công', path: '/industries/manufacturing', icon: Factory },
  { name: 'Phân phối & Bán buôn', path: '/industries/distribution', icon: Truck },
  { name: 'Xây dựng & Thi công', path: '/industries/construction', icon: HardHat },
  { name: 'Doanh nghiệp Công nghệ', path: '/industries/technology', icon: Cpu }
];

export const NAV_AI_AGENTS: NavAiAgentItem[] = [
  { name: 'AI CEO Copilot', path: '/ai/ceo', desc: 'Trợ lý điều hành lãnh đạo cấp cao', icon: Crown },
  { name: 'AI Sales Copilot', path: '/ai/sales', desc: 'Chấm điểm lead & tư vấn', icon: TrendingUp },
  { name: 'AI Marketing Copilot', path: '/ai/marketing', desc: 'Tối ưu CAC & nội dung', icon: Megaphone },
  { name: 'AI CSKH Copilot', path: '/ai/customer-service', desc: 'Xử lý ticket & SLA', icon: Headphones },
  { name: 'AI HR Copilot', path: '/ai/hr', desc: 'Hành chính, tuyển dụng & chấm công', icon: Users },
  { name: 'AI Finance Copilot', path: '/ai/finance', desc: 'Dòng tiền & đối soát hóa đơn', icon: CreditCard },
  { name: 'AI Voice Copilot', path: '/ai/voice', desc: 'Thoại nhắc lịch có kiểm soát', icon: Mic },
  { name: 'AI Workflow Copilot', path: '/ai/workflow', desc: 'Tự động hóa SOP liên phòng', icon: Workflow },
  { name: 'AI Search / RAG Copilot', path: '/ai/rag', desc: 'Tra cứu tri thức không ảo giác', icon: Search }
];
