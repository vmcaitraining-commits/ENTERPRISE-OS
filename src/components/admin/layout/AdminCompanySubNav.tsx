import React from 'react';
import { useEnterprise } from '../../../context/EnterpriseContext';
import {
  LayoutDashboard, Building2, Compass, Cpu, Palette, Image as ImageIcon, ShieldCheck
} from 'lucide-react';

interface SubNavItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
  badgeVariant?: 'blue' | 'amber';
}

export const AdminCompanySubNav: React.FC = () => {
  const { activeTab, setActiveTab, mediaList, stats } = useEnterprise();

  const navItems: SubNavItem[] = [
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
      badgeVariant: 'blue'
    },
    {
      id: 7,
      label: '7. Quản trị dữ liệu',
      icon: <ShieldCheck className="w-4 h-4" />,
      badge: (stats?.needsReviewFields ?? 0) > 0 ? `${stats.needsReviewFields} cần rà soát` : undefined,
      badgeVariant: 'amber'
    }
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200/80 p-1.5 shadow-xs overflow-x-auto scrollbar-none">
      <div className="flex items-center gap-1 min-w-max">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              id={`tab-btn-${item.id}`}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none ${
                isActive
                  ? 'bg-[#0B1F3A] text-white shadow-xs'
                  : 'text-[#64748B] hover:text-[#0B1F3A] hover:bg-slate-100/80'
              }`}
            >
              <span className={isActive ? 'text-[#06B6D4]' : 'text-slate-400'}>
                {item.icon}
              </span>
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ml-0.5 ${
                    item.badgeVariant === 'amber'
                      ? isActive
                        ? 'bg-amber-400 text-slate-900'
                        : 'bg-amber-100 text-amber-800'
                      : isActive
                        ? 'bg-[#06B6D4] text-[#0B1F3A]'
                        : 'bg-blue-100 text-[#155EEF]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
