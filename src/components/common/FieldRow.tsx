import React from 'react';
import { FieldStatus, ProfileField } from '../../types/enterprise';
import { StatusBadge } from './StatusBadge';

interface FieldRowProps {
  id: string;
  label: string;
  field: ProfileField<string>;
  isEditing: boolean;
  onChange: (value: string, status?: FieldStatus) => void;
  multiline?: boolean;
  type?: 'text' | 'email' | 'tel' | 'url';
  placeholder?: string;
}

export const FieldRow: React.FC<FieldRowProps> = ({
  id,
  label,
  field,
  isEditing,
  onChange,
  multiline = false,
  type = 'text',
  placeholder = 'Nhập thông tin...'
}) => {
  return (
    <div id={`field-row-${id}`} className="py-3 sm:py-3.5 border-b border-[#F1F5F9] last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
        <div className="sm:w-1/3 shrink-0">
          <label htmlFor={`input-${id}`} className="text-xs sm:text-sm font-semibold text-[#64748B]">
            {label}
          </label>
          {field.notes && (
            <p className="text-[11px] text-[#94A3B8] mt-0.5 leading-tight">
              {field.notes}
            </p>
          )}
        </div>

        <div className="sm:w-2/3 flex-1">
          {isEditing ? (
            <div className="space-y-2">
              {multiline ? (
                <textarea
                  id={`input-${id}`}
                  value={field.value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={placeholder}
                  rows={3}
                  className="w-full text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-all"
                />
              ) : (
                <input
                  id={`input-${id}`}
                  type={type}
                  value={field.value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={placeholder}
                  className="w-full text-sm text-[#0F172A] bg-white border border-[#CBD5E1] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-all"
                />
              )}

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#64748B]">Trạng thái:</span>
                <select
                  id={`select-status-${id}`}
                  value={field.status}
                  onChange={(e) => onChange(field.value, e.target.value as FieldStatus)}
                  aria-label={`Trạng thái ${label}`}
                  className="text-xs bg-slate-50 border border-[#CBD5E1] text-[#0F172A] rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#155EEF]"
                >
                  <option value="Đã xác nhận">Đã xác nhận</option>
                  <option value="Chưa cập nhật">Chưa cập nhật</option>
                  <option value="Cần bổ sung">Cần bổ sung</option>
                  <option value="Chờ duyệt">Chờ duyệt</option>
                  <option value="Hết hiệu lực">Hết hiệu lực</option>
                </select>
              </div>
            </div>
          ) : (
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex-1">
                <span className={`text-sm ${
                  field.status === 'Chưa cập nhật' || field.status === 'Cần bổ sung' && (!field.value || field.value === 'Chưa có' || field.value === 'Chưa cập nhật')
                    ? 'text-[#94A3B8] italic'
                    : 'text-[#0F172A] font-medium'
                }`}>
                  {field.value || 'Chưa cập nhật'}
                </span>
                {field.verifiedAt && (
                  <span className="block text-[11px] text-[#94A3B8] mt-0.5">
                    Xác nhận ngày: {field.verifiedAt}
                  </span>
                )}
              </div>
              <StatusBadge status={field.status} size="sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
