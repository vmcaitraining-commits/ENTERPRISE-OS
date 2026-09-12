import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  LayoutDashboard, Building2, Compass, Cpu, Palette, Image as ImageIcon, ShieldCheck
} from 'lucide-react';

interface TabItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
  badgeColor?: string;
}

export const TabNavigation: React.FC = () => {
  const { activeTab, setActiveTab, mediaList, stats } = useEnterprise();

  const tabs: TabItem[] = [
    {
      id: 1,
      label: '1. Tổng quan',
      icon: <LayoutDashboard className="w-4 h-4" />
    },
    {
      id: 2,
      label: '2. Hồ sơ doanh nghiệp',
      icon: <Building2 className="w-4 h-4" />
    },
    {
      id: 3,
      label: '3. Định vị & Chiến lược',
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: 4,
      label: '4. Sản phẩm & Thị trường',
      icon: <Cpu className="w-4 h-4" />
    },
    {
      id: 5,
      label: '5. Nhận diện thương hiệu',
      icon: <Palette className="w-4 h-4" />
    },
    {
      id: 6,
      label: '6. Kho ảnh & Video',
      icon: <ImageIcon className="w-4 h-4" />,
      badge: mediaList.length,
      badgeColor: 'bg-[#155EEF] text-white'
    },
    {
      id: 7,
      label: '7. Quản trị dữ liệu',
      icon: <ShieldCheck className="w-4 h-4" />,
      badge: (stats?.needsReviewFields ?? 0) > 0 ? `${stats.needsReviewFields} cần rà soát` : undefined,
      badgeColor: 'bg-amber-100 text-amber-800'
    }
  ];

  return (
    <div id="enterprise-tab-navigation" className="w-full bg-white border-b border-[#E2E8F0] sticky top-0 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-x-auto no-scrollbar gap-1 sm:gap-2 py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#0B1F3A] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#0B1F3A] hover:bg-slate-100/80'
                }`}
              >
                <span className={isActive ? 'text-[#06B6D4]' : 'text-slate-400'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                {tab.badge !== undefined && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${tab.badgeColor}`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
