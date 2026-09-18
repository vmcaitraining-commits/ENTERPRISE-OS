import React from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { TabBrand } from '../../tabs/TabBrand';

export const CompanyBrandPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Nhận diện thương hiệu"
        description="Hệ thống nhận diện thương hiệu số: Logo, Bảng màu chuẩn mực, Typography và Nguyên tắc thương hiệu."
        showEditActions={true}
      />

      <TabBrand />
    </div>
  );
};
