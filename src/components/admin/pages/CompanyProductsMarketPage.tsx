import React from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { TabProducts } from '../../tabs/TabProducts';

export const CompanyProductsMarketPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Sản phẩm & Thị trường"
        description="Danh mục sản phẩm công nghệ AI ENTERPRISE, dịch vụ triển khai và phân khúc khách hàng mục tiêu."
        showEditActions={true}
      />

      <TabProducts />
    </div>
  );
};
