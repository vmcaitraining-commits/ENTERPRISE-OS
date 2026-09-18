import React from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { TabGovernance } from '../../tabs/TabGovernance';

export const CompanyDataReviewPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Quản trị dữ liệu cần rà soát"
        description="Hàng đợi rà soát, đối soát và hoàn thiện dữ liệu doanh nghiệp định kỳ trước khi phát hành."
        showEditActions={true}
      />

      <TabGovernance />
    </div>
  );
};
