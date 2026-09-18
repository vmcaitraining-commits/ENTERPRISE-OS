import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { FieldRow } from '../common/FieldRow';
import { Building2, Scale, Mail, MapPin } from 'lucide-react';

export const TabProfile: React.FC = () => {
  const {
    data,
    tempData,
    isEditing,
    updateIdentityField,
    updateLegalField,
    updateContactField,
    updateMarketField
  } = useEnterprise();

  const currentData = isEditing ? tempData : data;

  return (
    <div id="tab-content-profile" className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section A: Định danh */}
        <div id="section-identity" className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#F1F5F9]">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F1F3D]">A. Thông tin định danh</h3>
              <p className="text-xs text-[#64748B]">Tên gọi, thương hiệu và người đại diện chính thức</p>
            </div>
          </div>

          <div className="divide-y divide-[#F1F5F9]">
            <FieldRow
              id="companyName"
              label="Tên doanh nghiệp"
              field={currentData.identity.companyName}
              isEditing={isEditing}
              onChange={(val, st) => updateIdentityField('companyName', val, st)}
            />
            <FieldRow
              id="brandName"
              label="Tên thương hiệu"
              field={currentData.identity.brandName}
              isEditing={isEditing}
              onChange={(val, st) => updateIdentityField('brandName', val, st)}
            />
            <FieldRow
              id="shortName"
              label="Tên viết tắt"
              field={currentData.identity.shortName}
              isEditing={isEditing}
              onChange={(val, st) => updateIdentityField('shortName', val, st)}
            />
            <FieldRow
              id="representative"
              label="Người đại diện"
              field={currentData.identity.representative}
              isEditing={isEditing}
              onChange={(val, st) => updateIdentityField('representative', val, st)}
            />
          </div>
        </div>

        {/* Section B: Pháp lý */}
        <div id="section-legal" className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#F1F5F9]">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F1F3D]">B. Thông tin pháp lý</h3>
              <p className="text-xs text-[#64748B]">Hồ sơ đăng ký kinh doanh và mã số thuế</p>
            </div>
          </div>

          <div className="divide-y divide-[#F1F5F9]">
            <FieldRow
              id="legalName"
              label="Tên pháp lý"
              field={currentData.legal.legalName}
              isEditing={isEditing}
              multiline={true}
              onChange={(val, st) => updateLegalField('legalName', val, st)}
            />
            <FieldRow
              id="businessCode"
              label="Mã số doanh nghiệp"
              field={currentData.legal.businessCode}
              isEditing={isEditing}
              onChange={(val, st) => updateLegalField('businessCode', val, st)}
            />
            <FieldRow
              id="taxCode"
              label="Mã số thuế"
              field={currentData.legal.taxCode}
              isEditing={isEditing}
              onChange={(val, st) => updateLegalField('taxCode', val, st)}
            />
          </div>
        </div>

        {/* Section C: Liên hệ */}
        <div id="section-contact" className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#F1F5F9]">
            <div className="w-9 h-9 rounded-lg bg-cyan-50 text-[#06B6D4] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F1F3D]">C. Thông tin liên hệ</h3>
              <p className="text-xs text-[#64748B]">Kênh truyền thông, liên lạc và địa chỉ trụ sở</p>
            </div>
          </div>

          <div className="divide-y divide-[#F1F5F9]">
            <FieldRow
              id="website"
              label="Website chính thức"
              field={currentData.contact.website}
              isEditing={isEditing}
              type="url"
              onChange={(val, st) => updateContactField('website', val, st)}
            />
            <FieldRow
              id="domain"
              label="Tên miền chính thức"
              field={currentData.contact.domain}
              isEditing={isEditing}
              onChange={(val, st) => updateContactField('domain', val, st)}
            />
            <FieldRow
              id="email"
              label="Email doanh nghiệp"
              field={currentData.contact.email}
              isEditing={isEditing}
              type="email"
              onChange={(val, st) => updateContactField('email', val, st)}
            />
            <FieldRow
              id="phone"
              label="Số điện thoại"
              field={currentData.contact.phone}
              isEditing={isEditing}
              type="tel"
              onChange={(val, st) => updateContactField('phone', val, st)}
            />
            <FieldRow
              id="address"
              label="Địa chỉ trụ sở"
              field={currentData.contact.address}
              isEditing={isEditing}
              onChange={(val, st) => updateContactField('address', val, st)}
            />
            <FieldRow
              id="region"
              label="Khu vực hoạt động"
              field={currentData.contact.region}
              isEditing={isEditing}
              onChange={(val, st) => updateContactField('region', val, st)}
            />
          </div>
        </div>

        {/* Section D: Thị trường */}
        <div id="section-market" className="bg-white rounded-xl border border-[#E5EAF1] p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#F1F5F9]">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F1F3D]">D. Thị trường hoạt động</h3>
              <p className="text-xs text-[#64748B]">Phạm vi hiện tại và định hướng vươn ra quốc tế</p>
            </div>
          </div>

          <div className="divide-y divide-[#F1F5F9]">
            <FieldRow
              id="currentMarket"
              label="Thị trường hiện tại"
              field={currentData.market.currentMarket}
              isEditing={isEditing}
              onChange={(val, st) => updateMarketField('currentMarket', val, st)}
            />
            <FieldRow
              id="expansionOrientation"
              label="Định hướng mở rộng"
              field={currentData.market.expansionOrientation}
              isEditing={isEditing}
              multiline={true}
              onChange={(val, st) => updateMarketField('expansionOrientation', val, st)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
