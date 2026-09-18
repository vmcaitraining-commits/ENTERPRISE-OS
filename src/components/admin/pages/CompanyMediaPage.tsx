import React from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { TabMedia } from '../../tabs/TabMedia';

export const CompanyMediaPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Kho ảnh & Video"
        description="Thư viện tài nguyên đa phương tiện chính thức phục vụ truyền thông, xuất bản và giao diện website."
        showEditActions={false}
      />

      <TabMedia />
    </div>
  );
};
