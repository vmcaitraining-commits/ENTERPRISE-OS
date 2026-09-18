import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  EnterpriseData,
  MediaItem,
  ChangeLogEntry,
  BrandColor,
  BrandLogo,
  FieldStatus,
  StrategySectionItem
} from '../types/enterprise';
import { initialEnterpriseData } from '../data/initialData';
import { initialMediaItems } from '../data/initialMedia';

interface ToastInfo {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error' | 'warning';
}

export interface EnterpriseStats {
  completionPercentage: number;
  verifiedFields: number;
  needsReviewFields: number;
  missingFields: number;
  totalFields: number;
}

interface EnterpriseContextType {
  data: EnterpriseData;
  tempData: EnterpriseData;
  mediaList: MediaItem[];
  changeHistory: ChangeLogEntry[];
  isEditing: boolean;
  activeTab: number;
  toast: ToastInfo | null;
  stats: EnterpriseStats;
  setActiveTab: (tabIndex: number) => void;
  startEditing: () => void;
  cancelEditing: () => void;
  saveChanges: (reason?: string) => void;
  updateIdentityField: (fieldKey: keyof EnterpriseData['identity'], value: string, status?: FieldStatus) => void;
  updateLegalField: (fieldKey: keyof EnterpriseData['legal'], value: string, status?: FieldStatus) => void;
  updateContactField: (fieldKey: keyof EnterpriseData['contact'], value: string, status?: FieldStatus) => void;
  updateMarketField: (fieldKey: keyof EnterpriseData['market'], value: string, status?: FieldStatus) => void;
  updateStrategyItem: (id: string, updated: Partial<StrategySectionItem>) => void;
  updateBrandColor: (color: BrandColor) => void;
  addBrandColor: (color: BrandColor) => void;
  deleteBrandColor: (id: string) => void;
  updateBrandLogo: (logo: BrandLogo) => void;
  setActiveWebsiteLogo: (logoId: string) => void;
  updateMissingItemStatus: (id: number, status: 'Chưa có' | 'Đang xử lý' | 'Đã hoàn thành') => void;
  addMediaItem: (item: Omit<MediaItem, 'id' | 'uploadedAt' | 'uploader'>) => void;
  updateMediaItem: (id: string, updated: Partial<MediaItem>) => void;
  archiveMediaItem: (id: string) => void;
  deleteMediaItemPermanently: (id: string) => void;
  resetToSeedData: () => void;
  resetToDefault: () => void;
  showToast: (message: string, type?: 'success' | 'info' | 'error' | 'warning') => void;
  verifiedCount: number;
  missingCount: number;
  mediaCounts: { total: number; images: number; videos: number };
  isHistoryModalOpen: boolean;
  setIsHistoryModalOpen: (open: boolean) => void;
}

const STORAGE_DATA_KEY = 'vmc_enterprise_data_v1';
const STORAGE_MEDIA_KEY = 'vmc_media_items_v1';
const STORAGE_HISTORY_KEY = 'vmc_change_history_v1';

const EnterpriseContext = createContext<EnterpriseContextType | undefined>(undefined);

export const EnterpriseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<EnterpriseData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_DATA_KEY);
      if (saved) {
        const parsed: EnterpriseData = JSON.parse(saved);
        if (!parsed.activeWebsiteLogoId) {
          parsed.activeWebsiteLogoId = 'logo_1';
        }
        if (parsed.brandLogos && Array.isArray(parsed.brandLogos)) {
          parsed.brandLogos = parsed.brandLogos.map(logo => {
            // If the URL is an obsolete placeholder or points to a legacy .png path, upgrade to vector SVG
            if (logo.url && (logo.url.endsWith('.png') || logo.url === '/brand/vmc-group-logo.png')) {
              const defaultMatch = initialEnterpriseData.brandLogos.find(l => l.id === logo.id || l.type === logo.type);
              if (defaultMatch) {
                return { ...logo, url: defaultMatch.url, format: defaultMatch.format };
              }
            }
            return logo;
          });
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return initialEnterpriseData;
  });

  const [tempData, setTempData] = useState<EnterpriseData>(data);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState<boolean>(false);

  const [mediaList, setMediaList] = useState<MediaItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_MEDIA_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return initialMediaItems;
  });

  const [changeHistory, setChangeHistory] = useState<ChangeLogEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_HISTORY_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return [
      {
        id: 'log_init',
        timestamp: '2026-09-12 08:30:00',
        user: 'Vũ Mạnh Cường (Admin)',
        tab: 'Hệ thống',
        field: 'Khởi tạo dữ liệu gốc',
        oldValue: '—',
        newValue: 'Phiên bản V1.0 từ VMC_GROUP_THONG_TIN_DOANH_NGHIEP_V1.txt'
      }
    ];
  });

  const [toast, setToast] = useState<ToastInfo | null>(null);

  const showToast = (message: string, type: 'success' | 'info' | 'error' | 'warning' = 'success') => {
    const id = Date.now().toString();
    setToast({ id, message, type });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 3500);
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_MEDIA_KEY, JSON.stringify(mediaList));
    } catch {
      // ignore
    }
  }, [mediaList]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(changeHistory));
    } catch {
      // ignore
    }
  }, [changeHistory]);

  const startEditing = () => {
    setTempData(JSON.parse(JSON.stringify(data)));
    setIsEditing(true);
    showToast('Đã kích hoạt chế độ chỉnh sửa thông tin', 'info');
  };

  const cancelEditing = () => {
    setTempData(JSON.parse(JSON.stringify(data)));
    setIsEditing(false);
    showToast('Đã hủy các thay đổi chưa lưu', 'info');
  };

  const recordChange = (tab: string, field: string, oldValue: string, newValue: string) => {
    const now = new Date();
    const timestamp = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0') + ' ' +
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0') + ':' +
      String(now.getSeconds()).padStart(2, '0');

    const newLog: ChangeLogEntry = {
      id: 'log_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      timestamp,
      user: 'Vũ Mạnh Cường (Admin)',
      tab,
      field,
      oldValue: oldValue || 'Trống',
      newValue: newValue || 'Trống'
    };

    setChangeHistory(prev => [newLog, ...prev]);
  };

  const saveChanges = (summaryReason?: string) => {
    const changesCount = Math.floor(Math.random() * 2) + 1;
    recordChange('Thông tin doanh nghiệp', summaryReason || 'Lưu cập nhật hồ sơ', 'Phiên bản trước', 'Cập nhật thành công (' + new Date().toLocaleTimeString('vi-VN') + ')');
    setData(JSON.parse(JSON.stringify(tempData)));
    setIsEditing(false);
    showToast('Lưu thay đổi thành công! Dữ liệu nền đã được cập nhật.', 'success');
  };

  const updateIdentityField = (fieldKey: keyof EnterpriseData['identity'], value: string, status?: FieldStatus) => {
    setTempData(prev => {
      const field = prev.identity[fieldKey];
      return {
        ...prev,
        identity: {
          ...prev.identity,
          [fieldKey]: {
            ...field,
            value,
            status: status || field.status
          }
        }
      };
    });
  };

  const updateLegalField = (fieldKey: keyof EnterpriseData['legal'], value: string, status?: FieldStatus) => {
    setTempData(prev => {
      const field = prev.legal[fieldKey];
      return {
        ...prev,
        legal: {
          ...prev.legal,
          [fieldKey]: {
            ...field,
            value,
            status: status || field.status
          }
        }
      };
    });
  };

  const updateContactField = (fieldKey: keyof EnterpriseData['contact'], value: string, status?: FieldStatus) => {
    setTempData(prev => {
      const field = prev.contact[fieldKey];
      return {
        ...prev,
        contact: {
          ...prev.contact,
          [fieldKey]: {
            ...field,
            value,
            status: status || field.status
          }
        }
      };
    });
  };

  const updateMarketField = (fieldKey: keyof EnterpriseData['market'], value: string, status?: FieldStatus) => {
    setTempData(prev => {
      const field = prev.market[fieldKey];
      return {
        ...prev,
        market: {
          ...prev.market,
          [fieldKey]: {
            ...field,
            value,
            status: status || field.status
          }
        }
      };
    });
  };

  const updateStrategyItem = (id: string, updated: Partial<StrategySectionItem>) => {
    const updater = (targetData: EnterpriseData) => ({
      ...targetData,
      strategy: targetData.strategy.map(item => item.id === id ? { ...item, ...updated } : item)
    });

    if (isEditing) {
      setTempData(prev => updater(prev));
    } else {
      setData(prev => {
        const item = prev.strategy.find(s => s.id === id);
        recordChange('Định vị & Chiến lược', item ? item.title : id, item?.content || '', updated.content || '');
        return updater(prev);
      });
      setTempData(prev => updater(prev));
      showToast('Đã cập nhật mục chiến lược', 'success');
    }
  };

  const updateBrandColor = (color: BrandColor) => {
    const updater = (targetData: EnterpriseData) => ({
      ...targetData,
      brandColors: targetData.brandColors.map(c => c.id === color.id ? color : c)
    });

    if (isEditing) {
      setTempData(prev => updater(prev));
    } else {
      setData(prev => {
        recordChange('Nhận diện thương hiệu', `Màu: ${color.name}`, 'Đổi màu HEX', color.hex);
        return updater(prev);
      });
      setTempData(prev => updater(prev));
      showToast(`Đã lưu màu ${color.name}`, 'success');
    }
  };

  const addBrandColor = (color: BrandColor) => {
    const updater = (targetData: EnterpriseData) => ({
      ...targetData,
      brandColors: [...targetData.brandColors, color]
    });

    if (isEditing) {
      setTempData(prev => updater(prev));
    } else {
      setData(prev => {
        recordChange('Nhận diện thương hiệu', `Thêm màu: ${color.name}`, 'Chưa có', color.hex);
        return updater(prev);
      });
      setTempData(prev => updater(prev));
      showToast(`Đã thêm màu mới: ${color.name}`, 'success');
    }
  };

  const deleteBrandColor = (id: string) => {
    const color = data.brandColors.find(c => c.id === id);
    const updater = (targetData: EnterpriseData) => ({
      ...targetData,
      brandColors: targetData.brandColors.filter(c => c.id !== id)
    });

    if (isEditing) {
      setTempData(prev => updater(prev));
    } else {
      setData(prev => {
        recordChange('Nhận diện thương hiệu', `Xóa màu: ${color?.name || id}`, color?.hex || '', 'Đã xóa');
        return updater(prev);
      });
      setTempData(prev => updater(prev));
      showToast(`Đã xóa màu ${color?.name || ''}`, 'info');
    }
  };

  const updateBrandLogo = (logo: BrandLogo) => {
    const updater = (targetData: EnterpriseData) => ({
      ...targetData,
      brandLogos: targetData.brandLogos.map(l => l.id === logo.id ? logo : l)
    });

    if (isEditing) {
      setTempData(prev => updater(prev));
    } else {
      setData(prev => {
        recordChange('Nhận diện thương hiệu', `Logo: ${logo.title}`, 'Cập nhật logo', logo.status);
        return updater(prev);
      });
      setTempData(prev => updater(prev));
      showToast(`Đã cập nhật ${logo.title}`, 'success');
    }
  };

  const setActiveWebsiteLogo = (logoId: string) => {
    const activeLogo = (isEditing ? tempData : data).brandLogos.find(l => l.id === logoId);
    const updater = (targetData: EnterpriseData) => ({
      ...targetData,
      activeWebsiteLogoId: logoId
    });

    if (isEditing) {
      setTempData(prev => updater(prev));
    } else {
      setData(prev => {
        recordChange('Nhận diện thương hiệu', 'Logo Website', 'Thay đổi logo chính website', activeLogo?.title || logoId);
        return updater(prev);
      });
      setTempData(prev => updater(prev));
      showToast(`Đã chọn "${activeLogo?.title || 'Logo'}" làm logo chính thức trên Website`, 'success');
    }
  };

  const updateMissingItemStatus = (id: number, status: 'Chưa có' | 'Đang xử lý' | 'Đã hoàn thành') => {
    const item = data.missingDataItems.find(i => i.id === id);
    const updater = (targetData: EnterpriseData) => ({
      ...targetData,
      missingDataItems: targetData.missingDataItems.map(i => i.id === id ? { ...i, status } : i)
    });

    setData(prev => {
      recordChange('Quản trị dữ liệu', `Mục bổ sung #${id}: ${item?.title || ''}`, item?.status || '', status);
      return updater(prev);
    });
    setTempData(prev => updater(prev));
    showToast(`Đã cập nhật trạng thái mục #${id} thành "${status}"`, 'success');
  };

  const addMediaItem = (item: Omit<MediaItem, 'id' | 'uploadedAt' | 'uploader'>) => {
    const now = new Date();
    const dateStr = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0') + ' ' +
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0');

    const newItem: MediaItem = {
      ...item,
      id: 'media_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      uploadedAt: dateStr,
      uploader: 'Vũ Mạnh Cường (Admin)'
    };

    setMediaList(prev => [newItem, ...prev]);
    recordChange('Kho ảnh & video', `Thêm tài nguyên: ${newItem.title}`, 'Chưa có', `${newItem.type} (${newItem.category})`);
    showToast(`Đã thêm thành công tài nguyên: ${newItem.title}`, 'success');
  };

  const updateMediaItem = (id: string, updated: Partial<MediaItem>) => {
    setMediaList(prev => prev.map(item => {
      if (item.id === id) {
        recordChange('Kho ảnh & video', `Sửa metadata: ${item.title}`, 'Trước khi sửa', 'Đã lưu metadata mới');
        return { ...item, ...updated };
      }
      return item;
    }));
    showToast('Đã lưu metadata tài nguyên thành công', 'success');
  };

  const archiveMediaItem = (id: string) => {
    setMediaList(prev => prev.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'Archived' ? 'Approved' : 'Archived';
        recordChange('Kho ảnh & video', `Trạng thái: ${item.title}`, item.status, nextStatus);
        return { ...item, status: nextStatus };
      }
      return item;
    }));
    showToast('Đã chuyển đổi trạng thái lưu trữ tài nguyên', 'info');
  };

  const deleteMediaItemPermanently = (id: string) => {
    const item = mediaList.find(m => m.id === id);
    setMediaList(prev => prev.filter(m => m.id !== id));
    recordChange('Kho ảnh & video', `Xóa tài nguyên: ${item?.title || id}`, item?.status || '', 'Đã xóa vĩnh viễn');
    showToast('Đã xóa tài nguyên khỏi thư viện', 'info');
  };

  const resetToSeedData = () => {
    setData(initialEnterpriseData);
    setTempData(initialEnterpriseData);
    setMediaList(initialMediaItems);
    setIsEditing(false);
    recordChange('Hệ thống', 'Khôi phục dữ liệu gốc', 'Dữ liệu phiên làm việc', 'Phiên bản gốc VMC V1.0 TXT');
    showToast('Đã khôi phục dữ liệu về trạng thái ban đầu từ file TXT V1', 'success');
  };

  // Computations
  const currentActiveData = isEditing ? tempData : data;

  const verifiedCount = [
    currentActiveData.identity.companyName.status,
    currentActiveData.identity.brandName.status,
    currentActiveData.identity.shortName.status,
    currentActiveData.identity.representative.status,
    currentActiveData.legal.legalName.status,
    currentActiveData.legal.businessCode.status,
    currentActiveData.legal.taxCode.status,
    currentActiveData.contact.website.status,
    currentActiveData.contact.domain.status,
    currentActiveData.contact.email.status,
    currentActiveData.contact.phone.status,
    currentActiveData.contact.address.status,
    currentActiveData.contact.region.status,
    currentActiveData.market.currentMarket.status,
    currentActiveData.market.expansionOrientation.status,
    ...currentActiveData.strategy.map(s => s.status),
    ...currentActiveData.ecosystem.map(e => e.status),
    ...currentActiveData.brandLogos.map(l => l.status)
  ].filter(s => s === 'Đã xác nhận').length;

  const missingCount = currentActiveData.missingDataItems.filter(i => i.status !== 'Đã hoàn thành').length +
    [
      currentActiveData.legal.legalName.status,
      currentActiveData.legal.businessCode.status,
      currentActiveData.legal.taxCode.status,
      currentActiveData.contact.phone.status,
      currentActiveData.contact.address.status
    ].filter(s => s === 'Cần bổ sung' || s === 'Chưa cập nhật').length;

  const mediaCounts = {
    total: mediaList.length,
    images: mediaList.filter(m => m.type === 'Ảnh').length,
    videos: mediaList.filter(m => m.type === 'Video').length
  };

  const allFieldStatuses: FieldStatus[] = [
    currentActiveData.identity.companyName.status,
    currentActiveData.identity.brandName.status,
    currentActiveData.identity.shortName.status,
    currentActiveData.identity.representative.status,
    currentActiveData.legal.legalName.status,
    currentActiveData.legal.businessCode.status,
    currentActiveData.legal.taxCode.status,
    currentActiveData.contact.website.status,
    currentActiveData.contact.domain.status,
    currentActiveData.contact.email.status,
    currentActiveData.contact.phone.status,
    currentActiveData.contact.address.status,
    currentActiveData.contact.region.status,
    currentActiveData.market.currentMarket.status,
    currentActiveData.market.expansionOrientation.status,
    ...currentActiveData.strategy.map(s => s.status),
    ...currentActiveData.ecosystem.map(e => e.status),
    ...currentActiveData.brandLogos.map(l => l.status)
  ];

  const verifiedFields = allFieldStatuses.filter(s => s === 'Đã xác nhận').length;
  const needsReviewFields = allFieldStatuses.filter(s => s === 'Cần bổ sung').length +
    currentActiveData.missingDataItems.filter(i => i.status === 'Đang xử lý').length;
  const missingFields = allFieldStatuses.filter(s => s === 'Chưa cập nhật').length +
    currentActiveData.missingDataItems.filter(i => i.status === 'Chưa có').length;
  const totalFields = verifiedFields + needsReviewFields + missingFields;
  const completionPercentage = totalFields > 0 ? Math.round((verifiedFields / totalFields) * 100) : 0;

  const stats: EnterpriseStats = {
    completionPercentage,
    verifiedFields,
    needsReviewFields,
    missingFields,
    totalFields
  };

  return (
    <EnterpriseContext.Provider
      value={{
        data,
        tempData,
        mediaList,
        changeHistory,
        isEditing,
        activeTab,
        toast,
        stats,
        setActiveTab,
        startEditing,
        cancelEditing,
        saveChanges,
        updateIdentityField,
        updateLegalField,
        updateContactField,
        updateMarketField,
        updateStrategyItem,
        updateBrandColor,
        addBrandColor,
        deleteBrandColor,
        updateBrandLogo,
        setActiveWebsiteLogo,
        updateMissingItemStatus,
        addMediaItem,
        updateMediaItem,
        archiveMediaItem,
        deleteMediaItemPermanently,
        resetToSeedData,
        resetToDefault: resetToSeedData,
        showToast,
        verifiedCount,
        missingCount,
        mediaCounts,
        isHistoryModalOpen,
        setIsHistoryModalOpen
      }}
    >
      {children}
    </EnterpriseContext.Provider>
  );
};

export const useEnterprise = () => {
  const context = useContext(EnterpriseContext);
  if (!context) {
    throw new Error('useEnterprise must be used within an EnterpriseProvider');
  }
  return context;
};
