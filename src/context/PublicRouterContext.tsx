import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PublicRoute, ConsultationFormData } from '../types/website';
import { LocaleCode } from '../i18n/types';
import { parsePathLocale, buildLocalizedPath } from '../i18n/parser';
import { DEFAULT_LOCALE, isSupportedLocale, isLocalePublished, getPublishedLocales, setStoredLocale } from '../i18n/registry';

export const routeSeoMap: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'VMC Group | Kiến Trúc Sư Hệ Thống Doanh Nghiệp Vận Hành Bằng AI',
    description: 'VMC Group xây dựng hệ điều hành doanh nghiệp vận hành bằng AI, kết nối Con người, Dữ liệu, Quy trình, Phần mềm và AI Agent trên một nền tảng thống nhất.'
  },
  '/ai-enterprise': {
    title: 'AI ENTERPRISE | Hệ Điều Hành Doanh Nghiệp Hợp Nhất 11 Phân Hệ - VMC Group',
    description: 'Bản vẽ kiến trúc hợp nhất 11 phân hệ chức năng từ Cổng thông tin, CRM, CSKH, Vận hành, Tài chính đến An ninh và Phân quyền RBAC.'
  },
  '/solutions': {
    title: 'Hệ Thống Giải Pháp Vận Hành Doanh Nghiệp | VMC Group',
    description: 'Tổng quan các giải pháp theo phòng ban và theo nhu cầu chuyển đổi vận hành doanh nghiệp của VMC Group.'
  },
  '/solutions/sales': {
    title: 'Giải Pháp Kinh Doanh (Sales) & Quản Trị Khách Hàng | VMC Group',
    description: 'Quản trị hồ sơ khách hàng 360 độ, phễu bán hàng đa kênh, báo giá và chuyển đổi doanh thu chuẩn mực.'
  },
  '/solutions/marketing': {
    title: 'Giải Pháp Tiếp Thị & Tăng Trưởng Đa Kênh | VMC Group',
    description: 'Quản lý chiến dịch, tối ưu chi phí thu hút lead (CAC) và liên thông dữ liệu trực tiếp với đội ngũ bán hàng.'
  },
  '/solutions/customer-service': {
    title: 'Giải Pháp Chăm Sóc Khách Hàng (CSKH) & Ticket SLA | VMC Group',
    description: 'Tiếp nhận đa kênh, tự động phân luồng ticket khiếu nại, giám sát thời hạn SLA và nâng cao mức độ hài lòng.'
  },
  '/solutions/hr': {
    title: 'Giải Pháp Quản Trị Nhân Sự & Chấm Công Tiền Lương | VMC Group',
    description: 'Hồ sơ nhân sự tập trung, chấm công tự động, đối soát bảng lương và số hóa quy trình tuyển dụng đào tạo.'
  },
  '/solutions/finance': {
    title: 'Giải Pháp Quản Trị Tài Chính - Kế Toán & Dòng Tiền | VMC Group',
    description: 'Giám sát dòng tiền thu chi, quản trị công nợ khách hàng, kiểm soát đề nghị tạm ứng và ngân sách vận hành.'
  },
  '/solutions/management': {
    title: 'Giải Pháp Điều Hành Doanh Nghiệp & Quản Trị Mục Tiêu | VMC Group',
    description: 'Bảng chỉ số điều hành tổng quan dành cho ban lãnh đạo, theo dõi tiến độ OKR/KPI và cảnh báo rủi ro kịp thời.'
  },
  '/solutions/crm': {
    title: 'CRS / CRM Doanh Nghiệp | Quản Trị Khách Hàng 360 & Phễu Bán Hàng - VMC Group',
    description: 'Hồ sơ khách hàng 360, đường ống pipeline, nhật ký tương tác, báo giá hợp đồng và đối soát doanh thu.'
  },
  '/solutions/ai-agent': {
    title: 'Giải Pháp Kiến Trúc Mạng Lưới AI Agent Doanh Nghiệp | VMC Group',
    description: 'Kiến trúc giải pháp mạng lưới AI Agent chuyên trách, nguyên tắc Human-in-the-Loop và cơ chế kiểm soát dữ liệu RBAC.'
  },
  '/solutions/voice': {
    title: 'Giải Pháp AI Voice Tổng Đài & Bóc Băng Cuộc Gọi | VMC Group',
    description: 'Giải pháp tổng thể bóc băng hội thoại tiếng Việt, tích hợp tổng đài VoIP/CRM, tóm tắt sau cuộc gọi và tự động đề xuất task.'
  },
  '/solutions/automation': {
    title: 'Tự Động Hóa Quy Trình (Workflow Automation) SOP | VMC Group',
    description: 'Động cơ tự động hóa liên phòng ban theo mô hình Trigger - Condition - Action - Approval - Log.'
  },
  '/solutions/website': {
    title: 'Website Doanh Nghiệp Hợp Nhất Lõi CRM | VMC Group',
    description: 'Cổng thông tin trực tuyến kết nối trực tiếp với CRM nội bộ, tự động đồng bộ lead và đo lường chuyển đổi.'
  },
  '/solutions/bi': {
    title: 'Báo Cáo & BI Thời Gian Thực | Trung Tâm Dữ Liệu Điều Hành - VMC Group',
    description: 'Dashboard chỉ số KPI/OKR, doanh thu, dòng tiền, nhân sự và năng suất tự động cập nhật liên tục.'
  },
  '/industries': {
    title: 'Giải Pháp Chuyển Đổi Theo 8 Ngành Nghề Trọng Điểm | VMC Group',
    description: 'Giải pháp cấu hình chuyên sâu cho Thương mại, Dịch vụ, Giáo dục, Bất động sản, Sản xuất, Phân phối, Xây dựng, Công nghệ.'
  },
  '/industries/trade': {
    title: 'Giải Pháp Doanh Nghiệp Thương Mại & Bán Lẻ | VMC Group',
    description: 'Quản trị lead đa kênh, tồn kho, đơn hàng và vòng đời giao dịch cho ngành thương mại và bán lẻ.'
  },
  '/industries/service': {
    title: 'Giải Pháp Doanh Nghiệp Dịch Vụ Chuyên Nghiệp | VMC Group',
    description: 'Quản lý hợp đồng dịch vụ, tiến độ triển khai theo giai đoạn và chi phí dự án minh bạch.'
  },
  '/industries/education': {
    title: 'Giải Pháp Doanh Nghiệp Giáo Dục & Tuyển Sinh | VMC Group',
    description: 'Quản trị phễu học viên tiềm năng, lịch tư vấn, tiến độ đóng học phí và trải nghiệm học viên.'
  },
  '/industries/real-estate': {
    title: 'Giải Pháp Bất Động Sản & Môi Giới Dự Án | VMC Group',
    description: 'Quản lý giỏ hàng bất động sản, phân bổ lead môi giới công bằng và đối soát hoa hồng giao dịch.'
  },
  '/industries/manufacturing': {
    title: 'Giải Pháp Sản Xuất & Gia Công Đơn Hàng | VMC Group',
    description: 'Kiểm soát tiến độ sản xuất theo đơn đặt hàng, liên thông kho nguyên vật liệu và chi phí giá thành.'
  },
  '/industries/distribution': {
    title: 'Giải Pháp Phân Phối & Quản Trị Kênh Đại Lý | VMC Group',
    description: 'Quản lý chính sách giá đại lý, chiết khấu, hạn mức công nợ và tiến độ giao nhận phân phối.'
  },
  '/industries/construction': {
    title: 'Giải Pháp Xây Dựng & Quản Trị Dự Án Công Trình | VMC Group',
    description: 'Quản lý hồ sơ thầu, nghiệm thu theo giai đoạn, kiểm soát chi phí thực tế và nhà thầu phụ.'
  },
  '/industries/technology': {
    title: 'Giải Pháp Doanh Nghiệp Công Nghệ & Dịch Vụ Số | VMC Group',
    description: 'Quản lý phễu khách hàng B2B, hợp đồng dịch vụ định kỳ (MRR) và quy trình hỗ trợ kỹ thuật liên tục.'
  },
  '/ai': {
    title: 'Mạng Lưới 9 Trợ Lý AI Chuyên Trách Nghiệp Vụ | VMC Group',
    description: 'Khám phá 9 AI Copilot đồng hành cùng nhân sự: AI CEO, Sales, Marketing, CSKH, HR, Finance, Voice, Workflow, RAG.'
  },
  '/ai/ceo': {
    title: 'AI CEO Copilot - Trợ Lý Điều Hành Cấp Cao | VMC Group',
    description: 'Tổng hợp sức khỏe doanh nghiệp đa chiều, phát hiện nút thắt dòng tiền và cảnh báo rủi ro vận hành.'
  },
  '/ai/sales': {
    title: 'AI Sales Copilot - Trợ Lý Bán Hàng & Phễu Lead | VMC Group',
    description: 'Chấm điểm lead tiềm năng, đề xuất kịch bản tư vấn và nhắc việc chăm sóc khách hàng tự động.'
  },
  '/ai/marketing': {
    title: 'AI Marketing Copilot - Trợ Lý Tối Ưu Chiến Dịch | VMC Group',
    description: 'Phân tích chân dung khách hàng, gợi ý nội dung tiếp cận và tối ưu chi phí thu hút lead (CAC).'
  },
  '/ai/customer-service': {
    title: 'AI CSKH Copilot - Trợ Lý Xử Lý Ticket & SLA | VMC Group',
    description: 'Gợi ý giải pháp xử lý khiếu nại, phân loại mức độ khẩn cấp và hỗ trợ nhân viên phản hồi chuẩn mực.'
  },
  '/ai/hr': {
    title: 'AI HR Copilot - Trợ Lý Nhân Sự & Tuyển Dụng | VMC Group',
    description: 'Sàng lọc hồ sơ ứng viên, đối soát công tự động và soạn thảo bản đánh giá hiệu suất nhân sự.'
  },
  '/ai/finance': {
    title: 'AI Finance Copilot - Trợ Lý Quản Trị Dòng Tiền | VMC Group',
    description: 'Đối chiếu hóa đơn chứng từ, rà soát chi phí vận hành và lập báo cáo dự báo dòng tiền định kỳ.'
  },
  '/ai/voice': {
    title: 'AI Voice Copilot - Trợ Lý Phân Tích Cuộc Gọi Thoại | VMC Group',
    description: 'Bóc băng tự động, tóm tắt nội dung sau cuộc gọi và cập nhật lịch sử tương tác vào CRM.'
  },
  '/ai/workflow': {
    title: 'AI Workflow Copilot - Trợ Lý Tự Động Hóa SOP | VMC Group',
    description: 'Phát hiện điểm nghẽn quy trình, gợi ý phân bổ công việc và cảnh báo quá hạn thời gian SLA.'
  },
  '/ai/rag': {
    title: 'AI Search / RAG - Trợ Lý Tra Cứu Tri Thức Nội Bộ | VMC Group',
    description: 'Truy vấn quy chế, chính sách và tài liệu sản phẩm chuẩn xác theo ngôn ngữ tự nhiên.'
  },
  '/capabilities': {
    title: 'Năng Lực Thực Thi & 6 Giai Đoạn Triển Khai | VMC Group',
    description: '8 trụ cột năng lực cốt lõi và lộ trình 6 giai đoạn bàn giao hệ thống AI ENTERPRISE thực tế.'
  },
  '/resources': {
    title: 'Tài Nguyên Vận Hành & Cam Kết Bảo Mật NDA | VMC Group',
    description: 'Tài liệu kiến trúc, quy trình SOP mẫu, cam kết bảo mật 100% dữ liệu và giải đáp thắc mắc chuyên sâu.'
  },
  '/about': {
    title: 'Giới Thiệu VMC Group | Tầm Nhìn, Sứ Mệnh & Giá Trị Cốt Lõi',
    description: 'Hồ sơ doanh nghiệp VMC Group, triết lý ứng dụng AI và 6 nguyên tắc triển khai hệ thống cốt lõi.'
  },
  '/contact': {
    title: 'Liên Hệ & Đăng Ký Khảo Sát Kiến Trúc | VMC Group',
    description: 'Gửi yêu cầu khảo sát hiện trạng doanh nghiệp và nhận tư vấn giải pháp AI ENTERPRISE từ VMC Group.'
  }
};

export const routeSeoMapEn: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'VMC Group | Enterprise AI Systems Architect',
    description: 'VMC Group builds enterprise operating systems powered by AI, connecting People, Data, Processes, Software, and AI Agents on a unified platform.'
  },
  '/ai-enterprise': {
    title: 'AI ENTERPRISE | Unified 11-Module Operating System - VMC Group',
    description: 'Reference architecture uniting 11 functional modules from Portal, CRM, Customer Service, Operations, Finance to Security and RBAC.'
  },
  '/solutions': {
    title: 'Enterprise Operational Solutions | VMC Group',
    description: 'Comprehensive overview of departmental and transformational enterprise operational solutions by VMC Group.'
  },
  '/solutions/sales': {
    title: 'Sales & Customer Pipeline Solutions | VMC Group',
    description: '360-degree customer records, omnichannel sales pipelines, quoting, and standardized revenue operations.'
  },
  '/solutions/marketing': {
    title: 'Omnichannel Marketing & Growth Solutions | VMC Group',
    description: 'Campaign tracking, customer acquisition cost (CAC) optimization, and direct data integration with sales pipelines.'
  },
  '/solutions/customer-service': {
    title: 'Customer Service & SLA Ticket Management Solutions | VMC Group',
    description: 'Omnichannel intake, automated complaint ticket routing, SLA monitoring, and customer satisfaction tracking.'
  },
  '/solutions/hr': {
    title: 'HR Management & Automated Payroll Solutions | VMC Group',
    description: 'Centralized employee profiles, automated timekeeping, payroll reconciliation, and digital onboarding workflows.'
  },
  '/solutions/finance': {
    title: 'Financial Accounting & Cashflow Management Solutions | VMC Group',
    description: 'Revenue/expense tracking, customer accounts receivable, advance approval workflows, and operational budget controls.'
  },
  '/solutions/management': {
    title: 'Executive Management & Goal Tracking Solutions | VMC Group',
    description: 'Executive dashboards for leadership teams, OKR/KPI milestone tracking, and timely operational risk alerts.'
  },
  '/solutions/crm': {
    title: 'Enterprise CRS / CRM | 360 Customer Records & Sales Pipeline - VMC Group',
    description: 'Comprehensive customer 360, visual pipeline stages, interaction logs, contract quoting, and revenue reconciliation.'
  },
  '/solutions/ai-agent': {
    title: 'Enterprise AI Agent Network Architecture | VMC Group',
    description: 'Specialized business AI agent network architecture, Human-in-the-Loop governance, and RBAC data access controls.'
  },
  '/solutions/voice': {
    title: 'AI Voice Switchboard & Call Transcription Solutions | VMC Group',
    description: 'Automated Vietnamese conversation transcription, VoIP/CRM integration, post-call summarization, and action item extraction.'
  },
  '/solutions/automation': {
    title: 'SOP Workflow Automation Engine | VMC Group',
    description: 'Cross-departmental automation engine built on Trigger - Condition - Action - Approval - Log logic.'
  },
  '/solutions/website': {
    title: 'Enterprise Website Unified with CRM Core | VMC Group',
    description: 'Public web portal directly connected to internal CRM for automatic lead sync and transparent conversion measurement.'
  },
  '/solutions/bi': {
    title: 'Real-Time Reports & Executive BI Center | VMC Group',
    description: 'Continuous reporting dashboards covering KPI/OKR, revenue, cashflow, staffing, and team operational productivity.'
  },
  '/industries': {
    title: 'Targeted Solutions Across 8 Core Industries | VMC Group',
    description: 'Tailored configurations for Trade, Services, Education, Real Estate, Manufacturing, Distribution, Construction, and Technology.'
  },
  '/industries/trade': {
    title: 'Retail & Commercial Enterprise Solutions | VMC Group',
    description: 'Omnichannel lead management, inventory status, order fulfillment, and transaction lifecycles for commerce.'
  },
  '/industries/service': {
    title: 'Professional Service Enterprise Solutions | VMC Group',
    description: 'Service contract administration, phased project milestones, and transparent operational resource utilization.'
  },
  '/industries/education': {
    title: 'Education & Admissions Enterprise Solutions | VMC Group',
    description: 'Prospective student pipeline, advisory scheduling, tuition payment progress, and learner lifecycle records.'
  },
  '/industries/real-estate': {
    title: 'Real Estate & Brokerage Project Solutions | VMC Group',
    description: 'Property inventory allocation, equitable agent lead distribution, and transaction commission reconciliation.'
  },
  '/industries/manufacturing': {
    title: 'Manufacturing & Order Processing Solutions | VMC Group',
    description: 'Order-based production progress, raw materials inventory synchronization, and direct manufacturing unit costs.'
  },
  '/industries/distribution': {
    title: 'Distribution & Agency Channel Management Solutions | VMC Group',
    description: 'Dealer pricing policies, volume discounts, credit exposure thresholds, and delivery fulfillment tracking.'
  },
  '/industries/construction': {
    title: 'Construction & Project Site Management Solutions | VMC Group',
    description: 'Bidding records, phased stage acceptance, actual site expense control, and subcontractor administration.'
  },
  '/industries/technology': {
    title: 'Technology & Digital Service Enterprise Solutions | VMC Group',
    description: 'B2B client pipeline, recurring software subscriptions (MRR), and continuous technical support operations.'
  },
  '/ai': {
    title: 'Network of 9 Specialized Business AI Copilots | VMC Group',
    description: 'Explore 9 AI Copilots assisting personnel: AI CEO, Sales, Marketing, Customer Service, HR, Finance, Voice, Workflow, RAG.'
  },
  '/ai/ceo': {
    title: 'AI CEO Copilot - Executive Operations Assistant | VMC Group',
    description: 'Multi-dimensional enterprise health synthesis, cashflow bottleneck detection, and operational risk alerts.'
  },
  '/ai/sales': {
    title: 'AI Sales Copilot - Lead Qualification & Pipeline Assistant | VMC Group',
    description: 'Potential lead scoring, contextual advisory scripts, and automated customer follow-up task generation.'
  },
  '/ai/marketing': {
    title: 'AI Marketing Copilot - Campaign Optimization Assistant | VMC Group',
    description: 'Audience persona analysis, messaging suggestions, and customer acquisition cost (CAC) optimization.'
  },
  '/ai/customer-service': {
    title: 'AI Customer Service Copilot - Ticket & SLA Assistant | VMC Group',
    description: 'Complaint resolution suggestions, urgency classification, and standardized customer response drafting.'
  },
  '/ai/hr': {
    title: 'AI HR Copilot - Recruitment & People Operations Assistant | VMC Group',
    description: 'Resume screening, automated timesheet verification, and structured performance evaluation drafting.'
  },
  '/ai/finance': {
    title: 'AI Finance Copilot - Cashflow Governance Assistant | VMC Group',
    description: 'Invoice and voucher reconciliation, operational expense audits, and periodic cashflow forecast reporting.'
  },
  '/ai/voice': {
    title: 'AI Voice Copilot - Voice Call Intelligence Assistant | VMC Group',
    description: 'Automated transcription, post-call structured summary generation, and interaction history sync to CRM.'
  },
  '/ai/workflow': {
    title: 'AI Workflow Copilot - Digital SOP Automation Assistant | VMC Group',
    description: 'Process bottleneck identification, task allocation suggestions, and SLA deadline breach warnings.'
  },
  '/ai/rag': {
    title: 'AI Search / RAG - Internal Knowledge Retrieval Assistant | VMC Group',
    description: 'Accurate natural-language queries across enterprise policies, digital SOPs, and operational documentation.'
  },
  '/capabilities': {
    title: 'Execution Capabilities & 6-Phase Delivery Model | VMC Group',
    description: '8 core capability pillars and verifiable 6-phase deployment roadmap for practical AI ENTERPRISE handover.'
  },
  '/resources': {
    title: 'Operational Resources & Data Confidentiality Framework | VMC Group',
    description: 'System architectural diagrams, sample digital SOP templates, enterprise data privacy principles, and classified FAQ.'
  },
  '/about': {
    title: 'About VMC Group | Vision, Mission & Operating Principles',
    description: 'Enterprise profile of VMC Group, pragmatic AI operational philosophy, and 6 core system implementation standards.'
  },
  '/contact': {
    title: 'Contact & Architecture Consultation Registration | VMC Group',
    description: 'Submit an operational assessment request and schedule enterprise architectural consultation with VMC Group.'
  }
};

export const routeSeoMapZh: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'VMC Group | 企业级 AI 操作系统架构师',
    description: 'VMC Group 构建由 AI 驱动的企业操作系统，在统一平台上融合人、数据、流程、软件与 AI 协同助理。'
  },
  '/ai-enterprise': {
    title: 'AI ENTERPRISE | 融合 11 大功能分系统的企业操作系统 - VMC Group',
    description: '融合门户、CRM、客服、运营、财务至安全与细粒度 RBAC 权限的 11 大分系统架构设计。'
  },
  '/solutions': {
    title: '企业数字化运营解决方案体系 | VMC Group',
    description: '全面概览 VMC Group 针对各业务部门及数字化转型需求的企业级运营解决方案。'
  },
  '/solutions/sales': {
    title: '销售业务 (Sales) 与客户管道解决方案 | VMC Group',
    description: '360 度全方位客户档案、多渠道销售漏斗、标准化报价体系与业务营收转化。'
  },
  '/solutions/marketing': {
    title: '全渠道数字营销与业务增长解决方案 | VMC Group',
    description: '营销活动全流程追踪、优化获客成本 (CAC)，并与销售漏斗数据无缝直连打通。'
  },
  '/solutions/customer-service': {
    title: '客户服务 (CSKH) 与 SLA 工单管理解决方案 | VMC Group',
    description: '全渠道统一接入、客户投诉工单自动化分流、SLA 履约时效闭环监督与客户满意度提升。'
  },
  '/solutions/hr': {
    title: '人力资源治理与智能考勤薪酬解决方案 | VMC Group',
    description: '集中式员工档案库、自动化智能考勤、薪资核算对账校验与数字化招聘培训规程。'
  },
  '/solutions/finance': {
    title: '财务会计核算与现金流管控解决方案 | VMC Group',
    description: '实时监测收支资金流、客户往来账款治理、备用金借支审批受控流转与运营预算红线预警。'
  },
  '/solutions/management': {
    title: '企业经营调度与目标治理解决方案 | VMC Group',
    description: '面向高管层的全局经营综合指标驾驶舱，实时洞察 OKR/KPI 推进节奏，及时预警潜在运营风险。'
  },
  '/solutions/crm': {
    title: '企业级 CRS / CRM | 客户 360 全景档案与销售漏斗 - VMC Group',
    description: '360 度客户全生命周期档案、可视化商机阶段管道、往来交互历史日志、标准报价合同与业财对账。'
  },
  '/solutions/ai-agent': {
    title: '企业级 AI Agent 协同网络架构解决方案 | VMC Group',
    description: '业务专职 AI Agent 协同网络架构、人机协同 (Human-in-the-Loop) 审核机制与严格的 RBAC 数据管控红线。'
  },
  '/solutions/voice': {
    title: 'AI 语音总机与智能通话转写分析解决方案 | VMC Group',
    description: '自动化语音对话高精转写、无缝直连 VoIP/CRM、通话后结构化纪要生成与智能派发待办任务。'
  },
  '/solutions/automation': {
    title: '业务流程自动化引擎 (Workflow Automation) SOP | VMC Group',
    description: '基于“触发 - 条件 - 执行 - 审核 - 审计”五位一体机制构建的跨部门自动化引擎。'
  },
  '/solutions/website': {
    title: '直连 CRM 核心底座的企业官方门户 | VMC Group',
    description: '直通企业内部 CRM 系统的数字化企业官网，线索实时入库，转化效能透明可查。'
  },
  '/solutions/bi': {
    title: '实时报表与高管商业智能 (BI) 中心 | VMC Group',
    description: '实时自动更新的高管决策看板，全面覆盖 KPI/OKR 指标、营业收入、现金流水、人力效能及交付产能。'
  },
  '/industries': {
    title: '面向 8 大核心行业的定制化解决方案 | VMC Group',
    description: '深度契合商贸、专业服务、教育培训、房地产、制造加工、渠道分销、工程建设与高新科技行业。'
  },
  '/industries/trade': {
    title: '商贸与零售企业运营解决方案 | VMC Group',
    description: '全渠道线索汇聚、精准库存调拨、订单履约跟踪与商贸零售全生命周期闭环。'
  },
  '/industries/service': {
    title: '专业服务型企业运营解决方案 | VMC Group',
    description: '服务合同履约管理、项目阶段里程碑把控以及透明精准的人力资源投入核算。'
  },
  '/industries/education': {
    title: '教育培训与招生管理企业解决方案 | VMC Group',
    description: '潜客学员漏斗跟进、个性化咨询排期、学费交纳进度核验与学员全周期培养记录。'
  },
  '/industries/real-estate': {
    title: '房地产开发与经纪代理解决方案 | VMC Group',
    description: '楼盘项目房源销控管理、经纪渠道线索公道分配与交易佣金快速合规对账。'
  },
  '/industries/manufacturing': {
    title: '制造加工与定制订单生产解决方案 | VMC Group',
    description: '按订单进度统筹排产、原材料库存动态同步直连与单件产品成本精细核算。'
  },
  '/industries/distribution': {
    title: '分销代理与渠道网络管控解决方案 | VMC Group',
    description: '经销商分级价格体系、批量返利阶梯、应收账款授信额度与干线配送跟踪。'
  },
  '/industries/construction': {
    title: '工程建设与项目现场管理解决方案 | VMC Group',
    description: '招投标文件台账、分阶段工程节点验收、施工现场实际成本管控与分包商协同。'
  },
  '/industries/technology': {
    title: '高新科技与数字化服务企业解决方案 | VMC Group',
    description: 'B2B 大客户商机漏斗、周期性订阅合约 (MRR) 与持续性技术保障支持流程。'
  },
  '/ai': {
    title: '9 大业务专职 AI Copilot 协同网络 | VMC Group',
    description: '探索赋能业务骨干的 9 大 AI Copilot：AI CEO、Sales、Marketing、CSKH、HR、Finance、Voice、Workflow、RAG。'
  },
  '/ai/ceo': {
    title: 'AI CEO Copilot - 高管决策协同助理 | VMC Group',
    description: '多维综合洞察企业经营体征，敏锐探查现金流卡点，及时提供运营隐患前瞻预警。'
  },
  '/ai/sales': {
    title: 'AI Sales Copilot - 销售赋能与线索转化助理 | VMC Group',
    description: '潜在客资精准评分画像、输出定制化跟进沟通话术，自动化创建客户跟进待办日程。'
  },
  '/ai/marketing': {
    title: 'AI Marketing Copilot - 营销活动智能优化助理 | VMC Group',
    description: '深度剖析客户画像偏好、起草高转化触达文案，持续优化综合获客成本 (CAC)。'
  },
  '/ai/customer-service': {
    title: 'AI CSKH Copilot - 客服工单与 SLA 履约助理 | VMC Group',
    description: '建议客户投诉专业应对方案、智能判定紧急程度等级，辅助客服专员规范标准应答。'
  },
  '/ai/hr': {
    title: 'AI HR Copilot - 人事考勤与招聘评估助理 | VMC Group',
    description: '高效初筛候选人履历、智能化考勤数据校验核对，规范拟定员工绩效评估建议草案。'
  },
  '/ai/finance': {
    title: 'AI Finance Copilot - 现金流管理与业财对账助理 | VMC Group',
    description: '智能勾稽发票原始凭证、细致筛查异常运营支出，定期出具前瞻性现金流预算报告。'
  },
  '/ai/voice': {
    title: 'AI Voice Copilot - 语音通话智能分析助理 | VMC Group',
    description: '录音高精自动化转写、通话后快速萃取核心纪要，自动沉淀沟通历史至 CRM 客户档案。'
  },
  '/ai/workflow': {
    title: 'AI Workflow Copilot - 数字化 SOP 流程自动化助理 | VMC Group',
    description: '敏锐识别业务流程断点、科学建议跨部门任务调配，实时预防工单超时超期违约。'
  },
  '/ai/rag': {
    title: 'AI Search / RAG - 企业内部知识检索问答助理 | VMC Group',
    description: '支持以自然语言快速精准调阅企业制度章程、标准 SOP 手册及产品技术全套文档。'
  },
  '/capabilities': {
    title: '实战落地能力与 6 大实施阶段路线图 | VMC Group',
    description: '4 大实操落地核心能力支柱，结合 6 大标准化推进阶段，规范交付实用可靠的 AI ENTERPRISE 系统。'
  },
  '/resources': {
    title: '运营资源知识库与保密协议 (NDA) 承诺 | VMC Group',
    description: '系统架构参考蓝图、数字化 SOP 规程框架、100% 数据主权保护原则及常见疑难解答。'
  },
  '/about': {
    title: '关于 VMC Group | 战略愿景、企业使命与务实准则',
    description: 'VMC Group 企业档案、系统架构师定位、务实的人工智能应用理念与 6 大实施标准。'
  },
  '/contact': {
    title: '联系我们 & 预约系统架构咨询 | VMC Group',
    description: '递交企业运营现状调研诉求，获取 VMC Group 资深系统架构师专属定制的咨询规划方案。'
  }
};

interface RouterContextType {
  currentPath: string;
  locale: LocaleCode;
  changeLocale: (newLocale: LocaleCode) => void;
  navigate: (path: string, options?: { scrollToTop?: boolean }) => void;
  isAdminView: boolean;
  setIsAdminView: (isAdmin: boolean) => void;
  isConsultationModalOpen: boolean;
  consultationModalType: 'consultation' | 'assessment' | 'booking';
  consultationDefaultIndustry?: string;
  openConsultationModal: (type?: 'consultation' | 'assessment' | 'booking', initialIndustry?: string) => void;
  closeConsultationModal: () => void;
  submitConsultation: (data: ConsultationFormData) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const PublicRouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize path from window.location.pathname or hash fallback
  const getInitialRawPath = (): string => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) return hash;
    const pathname = window.location.pathname;
    if (pathname && pathname !== '') return pathname;
    return '/';
  };

  const initialParsed = parsePathLocale(getInitialRawPath());
  const [currentPath, setCurrentPath] = useState<string>(initialParsed.canonicalPath);
  const [locale, setLocale] = useState<LocaleCode>(initialParsed.locale);
  const [isAdminView, setIsAdminView] = useState<boolean>(() => {
    return initialParsed.canonicalPath === '/admin' || initialParsed.canonicalPath.startsWith('/admin/');
  });

  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationModalType, setConsultationModalType] = useState<'consultation' | 'assessment' | 'booking'>('consultation');
  const [consultationDefaultIndustry, setConsultationDefaultIndustry] = useState<string | undefined>(undefined);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const rawPath = getInitialRawPath();
      const parsed = parsePathLocale(rawPath);
      setCurrentPath(parsed.canonicalPath);
      setLocale(parsed.locale);
      setIsAdminView(parsed.canonicalPath === '/admin' || parsed.canonicalPath.startsWith('/admin/'));
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Update dynamic document title, meta tags, canonical link and breadcrumb structured data when currentPath or locale changes
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Remove any trailing anchor for title lookup
    const basePath = currentPath.split('#')[0] || '/';
    const isPublished = isLocalePublished(locale);
    const isKnownRoute = Boolean(routeSeoMap[basePath]);

    const activeSeoMap = locale === 'zh-CN' ? routeSeoMapZh : (locale === 'en' ? routeSeoMapEn : routeSeoMap);
    const seo = activeSeoMap[basePath] || routeSeoMap[basePath] || {
      title: isKnownRoute
        ? (locale === 'zh-CN' ? 'VMC Group | 企业级 AI 操作系统' : (locale === 'en' ? 'VMC Group | Enterprise AI Operating System' : 'VMC Group | Hệ Thống Doanh Nghiệp Vận Hành Bằng AI'))
        : (locale === 'zh-CN' ? '页面未找到 (404) | VMC Group' : (locale === 'en' ? 'Page Not Found (404) | VMC Group' : 'Trang Không Tìm Thấy (404) | VMC Group')),
      description: isKnownRoute
        ? (locale === 'zh-CN' ? 'VMCGROUP.COM 官方门户与 VMC Group 企业级 AI 操作系统。' : (locale === 'en' ? 'Public website VMCGROUP.COM and VMC Group Enterprise AI Operating System.' : 'Website công khai VMCGROUP.COM và Hệ thống Quản trị Hệ điều hành Doanh nghiệp AI VMC Group.'))
        : (locale === 'zh-CN' ? '您访问的页面不存在或已被重定向。' : (locale === 'en' ? 'The requested page does not exist or has been redirected.' : 'Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển hướng.'))
    };

    document.title = seo.title;

    // Update html lang attribute
    document.documentElement.lang = locale;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seo.description);
    }

    // Phase 1 Safety Hardening for Meta Robots:
    // If locale is NOT published (draft 'en', planned 'zh-CN', 'ja', 'ko', 'de', 'fr', 'es') OR route is 404:
    // MUST apply: noindex, nofollow
    // When locale is PUBLISHED (e.g. 'vi'):
    // MUST restore: index, follow
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }

    if (!isPublished || !isKnownRoute) {
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      robotsMeta.setAttribute('content', 'index, follow');
    }

    // Dynamic Canonical URL:
    // VI: /solutions/crm -> https://vmcgroup.com/solutions/crm
    // EN: /en/solutions/crm -> https://vmcgroup.com/en/solutions/crm
    // zh-CN: /zh-CN/solutions/crm -> https://vmcgroup.com/zh-CN/solutions/crm (draft, accompanied by noindex, nofollow)
    const canonicalHref = `https://vmcgroup.com${buildLocalizedPath(basePath, locale)}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // Dynamic og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalHref);

    // Dynamic Hreflang links:
    // Only published locales may be advertised via hreflang to search engines.
    // When a locale is 'draft' or 'planned' (e.g. draft English prior to human approval),
    // emitting hreflang pointing to a 'noindex, nofollow' URL triggers search engine crawl conflict errors.
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());

    const publishedLocales = getPublishedLocales();
    if (isKnownRoute && publishedLocales.length > 1) {
      publishedLocales.forEach((pub) => {
        const localizedPath = buildLocalizedPath(basePath, pub.code);
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', pub.code);
        link.setAttribute('href', `https://vmcgroup.com${localizedPath}`);
        document.head.appendChild(link);
      });

      const defaultPath = buildLocalizedPath(basePath, DEFAULT_LOCALE);
      const xDefaultLink = document.createElement('link');
      xDefaultLink.setAttribute('rel', 'alternate');
      xDefaultLink.setAttribute('hreflang', 'x-default');
      xDefaultLink.setAttribute('href', `https://vmcgroup.com${defaultPath}`);
      document.head.appendChild(xDefaultLink);
    }

    // Dynamic BreadcrumbList structured data for deep public pages
    const existingBreadcrumb = document.getElementById('route-breadcrumb-schema');
    if (basePath === '/') {
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }
    } else {
      const segments = basePath.split('/').filter(Boolean);
      const itemListElement = [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'zh-CN' ? '首页' : (locale === 'en' ? 'Home' : 'Trang chủ'),
          item: `https://vmcgroup.com${locale === DEFAULT_LOCALE ? '/' : `/${locale}`}`
        }
      ];

      let runningPath = '';
      segments.forEach((seg, idx) => {
        runningPath += `/${seg}`;
        const matchedSeo = activeSeoMap[runningPath] || routeSeoMap[runningPath];
        const segTitle = matchedSeo
          ? matchedSeo.title.split('|')[0].trim()
          : seg.charAt(0).toUpperCase() + seg.slice(1);

        const localizedItemPath = buildLocalizedPath(runningPath, locale);
        itemListElement.push({
          '@type': 'ListItem',
          position: idx + 2,
          name: segTitle,
          item: `https://vmcgroup.com${localizedItemPath}`
        });
      });

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement
      };

      let scriptTag = existingBreadcrumb as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'route-breadcrumb-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(breadcrumbData);
    }
  }, [currentPath, locale]);

  const navigate = useCallback((path: string, options: { scrollToTop?: boolean } = { scrollToTop: true }) => {
    let cleanPath = path;
    if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

    const parsed = parsePathLocale(cleanPath);

    // If navigation specifies a locale prefix (e.g. /en/solutions/crm) use it,
    // otherwise preserve current locale
    const targetLocale = parsed.hasLocalePrefix ? parsed.locale : locale;
    const targetCanonical = parsed.canonicalPath;

    // AVOID NO-OP NAVIGATION: If already on the target canonical route and no anchor, do nothing
    if (targetCanonical === currentPath && (!parsed.anchor || parsed.anchor === '')) {
      return;
    }

    setCurrentPath(targetCanonical);
    if (targetCanonical === '/admin' || targetCanonical.startsWith('/admin/')) {
      setIsAdminView(true);
      try {
        window.history.pushState({}, '', targetCanonical);
      } catch {
        window.location.hash = targetCanonical;
      }
      if (typeof window !== 'undefined' && window.location.hash && window.location.hash.startsWith('#/')) {
        window.location.hash = targetCanonical;
      }
    } else {
      setIsAdminView(false);
      setLocale(targetLocale);
      const browserUrl = buildLocalizedPath(targetCanonical, targetLocale, parsed.anchor);
      try {
        window.history.pushState({}, '', browserUrl);
      } catch {
        window.location.hash = browserUrl;
      }
    }

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (parsed.anchor) {
      // Scroll to anchor element with header offset
      setTimeout(() => {
        const el = document.getElementById(parsed.anchor!);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: scrollBehavior
          });
        } else if (options.scrollToTop !== false) {
          window.scrollTo({ top: 0, behavior: scrollBehavior });
        }
      }, 120);
    } else if (options.scrollToTop !== false) {
      // For Admin routes, do instant jump without smooth scroll lag
      if (targetCanonical.startsWith('/admin')) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
      }
    }
  }, [locale, currentPath]);

  const changeLocale = useCallback((newLocale: LocaleCode) => {
    if (!isSupportedLocale(newLocale) || newLocale === locale) return;
    
    // Explicit user preference persistence
    setStoredLocale(newLocale);
    setLocale(newLocale);

    if (!isAdminView) {
      const [cleanCanonical, inlineAnchor] = currentPath.split('#');
      const windowHash = typeof window !== 'undefined' && window.location.hash
        ? window.location.hash.replace(/^#/, '')
        : undefined;
      const effectiveAnchor = windowHash && !windowHash.startsWith('/') ? windowHash : inlineAnchor;

      const browserUrl = buildLocalizedPath(cleanCanonical, newLocale, effectiveAnchor);
      try {
        window.history.pushState({}, '', browserUrl);
      } catch {
        window.location.hash = browserUrl;
      }
    }
  }, [locale, currentPath, isAdminView]);

  const openConsultationModal = (type: 'consultation' | 'assessment' | 'booking' = 'consultation', initialIndustry?: string) => {
    setConsultationModalType(type);
    setConsultationDefaultIndustry(initialIndustry);
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  const submitConsultation = (formData: ConsultationFormData) => {
    setIsConsultationModalOpen(false);
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        locale,
        changeLocale,
        navigate,
        isAdminView,
        setIsAdminView,
        isConsultationModalOpen,
        consultationModalType,
        consultationDefaultIndustry,
        openConsultationModal,
        closeConsultationModal,
        submitConsultation
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const usePublicRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('usePublicRouter must be used within a PublicRouterProvider');
  }
  return context;
};

