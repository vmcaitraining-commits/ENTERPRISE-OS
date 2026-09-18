import React from 'react';
import { AdminPageHeader } from '../layout/AdminPageHeader';
import { ContentManagerLayout } from '../website-management/content-manager/ContentManagerLayout';

export const WebsiteContentPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <AdminPageHeader
        title="Quản trị nội dung (Content Manager)"
        description="Soạn thảo, phân loại cấu trúc website, biên tập bài viết và xuất bản dữ liệu đa ngôn ngữ chuẩn mực."
        showEditActions={false}
      />

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden min-h-[600px]">
        <ContentManagerLayout />
      </div>
    </div>
  );
};
