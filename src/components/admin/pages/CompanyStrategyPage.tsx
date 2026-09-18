import React from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { TabStrategy } from '../../tabs/TabStrategy';

export const CompanyStrategyPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Định vị & Chiến lược"
        description="Bản chất tổ chức, định vị khác biệt, tầm nhìn, sứ mệnh và nguyên tắc truyền thông chuẩn mực."
        showEditActions={true}
      />

      <TabStrategy />
    </div>
  );
};
