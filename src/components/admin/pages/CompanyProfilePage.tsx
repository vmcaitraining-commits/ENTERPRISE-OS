import React from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { TabProfile } from '../../tabs/TabProfile';

export const CompanyProfilePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Hồ sơ doanh nghiệp"
        description="Thông tin định danh pháp lý, người đại diện và các kênh liên hệ chính thức của VMC Group."
        showEditActions={true}
      />

      <TabProfile />
    </div>
  );
};
