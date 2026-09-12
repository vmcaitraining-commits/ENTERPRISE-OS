import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { StatusBadge } from '../common/StatusBadge';
import { BrandColor, BrandLogo } from '../../types/enterprise';
import { Palette, Copy, Check, Plus, Trash2, Edit2, Upload, Sparkles, Type, Sliders, Shield } from 'lucide-react';

export const TabBrand: React.FC = () => {
  const {
    data,
    tempData,
    isEditing,
    updateBrandColor,
    addBrandColor,
    deleteBrandColor,
    updateBrandLogo,
    showToast
  } = useEnterprise();

  const currentData = isEditing ? tempData : data;
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  // Edit / Add Color Modal or inline form state
  const [editingColor, setEditingColor] = useState<BrandColor | null>(null);
  const [isAddingColor, setIsAddingColor] = useState<boolean>(false);
  const [newColor, setNewColor] = useState<Omit<BrandColor, 'id'>>({
    name: '',
    hex: '#000000',
    role: 'Accent',
    description: '',
    usageRatio: '5%'
  });

  // Logo upload state
  const [uploadingLogoId, setUploadingLogoId] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    showToast(`Đã sao chép mã màu ${hex} vào clipboard!`, 'info');
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>, logo: BrandLogo) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      if (result) {
        updateBrandLogo({
          ...logo,
          url: result,
          format: file.type || 'Custom Image',
          status: 'Đã xác nhận'
        });
        showToast(`Đã thay thế tệp cho "${logo.title}" thành công!`, 'success');
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
    setUploadingLogoId(null);
  };

  const handleSaveColorEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingColor) return;
    updateBrandColor(editingColor);
    setEditingColor(null);
  };

  const handleCreateColor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newColor.name || !newColor.hex) return;
    addBrandColor({
      ...newColor,
      id: 'col_' + Date.now()
    });
    setNewColor({
      name: '',
      hex: '#000000',
      role: 'Accent',
      description: '',
      usageRatio: '5%'
    });
    setIsAddingColor(false);
  };

  return (
    <div id="tab-content-brand" className="space-y-8">
      {/* Section A: Bộ Logo chuẩn */}
      <div id="section-brand-logos" className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#F1F5F9]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">A. HỆ THỐNG LOGO</span>
              <span className="text-xs text-[#64748B]">• 7 biến thể chuẩn hóa</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#0B1F3A]">Bộ nhận diện Logo VMC Group</h3>
          </div>
          <span className="text-xs bg-slate-50 border border-[#E2E8F0] px-3 py-1.5 rounded-lg text-[#64748B]">
            Tạm dùng bản khởi tạo V1, cho phép tải lên tệp mới
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {currentData.brandLogos.map((logo) => {
            const isDarkPreview = logo.type === 'Logo chính' || logo.type === 'Logo nền tối' || logo.type === 'Logo biểu tượng';
            const isWhiteMono = logo.type === 'Logo trắng';

            return (
              <div
                key={logo.id}
                id={`logo-card-${logo.id}`}
                className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                {/* Preview Box */}
                <div className={`h-36 p-4 flex items-center justify-center relative ${
                  isWhiteMono ? 'bg-slate-700' : isDarkPreview ? 'bg-[#0B1F3A]' : 'bg-slate-50 border-b border-[#E2E8F0]'
                }`}>
                  <img
                    src={logo.url}
                    alt={logo.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute top-2 right-2">
                    <StatusBadge status={logo.status} size="sm" />
                  </div>
                </div>

                {/* Metadata */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-bold text-[#155EEF] uppercase tracking-wider block">
                      {logo.type}
                    </span>
                    <h4 className="text-sm font-bold text-[#0B1F3A] mb-1">{logo.title}</h4>
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-3">
                      {logo.usageNote}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[11px] text-[#94A3B8]">{logo.format}</span>
                    <label className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#155EEF] hover:bg-blue-50 rounded-md border border-blue-200/80 transition-colors cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Thay file</span>
                      <input
                        type="file"
                        accept="image/*,.svg"
                        className="hidden"
                        onChange={(e) => handleLogoFileChange(e, logo)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section B: Bảng màu thương hiệu (Brand Color Palette) */}
      <div id="section-brand-colors" className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#F1F5F9]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">B. BẢNG MÀU THƯƠNG HIỆU</span>
              <span className="text-xs text-[#64748B]">• Color Swatches & Vai trò</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#0B1F3A]">Color Palette chuẩn định danh</h3>
          </div>

          <button
            onClick={() => setIsAddingColor(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0B1F3A] hover:bg-[#155EEF] rounded-lg transition-colors cursor-pointer shadow-2xs self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm màu mới</span>
          </button>
        </div>

        {/* Color Usage Ratio Bar */}
        <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-[#E2E8F0]">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider block mb-2">
            Tỷ lệ sử dụng màu khuyến nghị:
          </span>
          <div className="h-4 rounded-full overflow-hidden flex shadow-inner border border-slate-300">
            <div style={{ width: '70%', backgroundColor: '#F8FAFC' }} title="70% Ice White / Nền sáng" />
            <div style={{ width: '20%', backgroundColor: '#0B1F3A' }} title="20% Deep Navy & Royal Blue" />
            <div style={{ width: '7%', backgroundColor: '#06B6D4' }} title="7% Electric Cyan (AI)" />
            <div style={{ width: '3%', backgroundColor: '#D9A62E' }} title="3% VMC Gold (Accent)" />
          </div>
          <div className="flex flex-wrap items-center justify-between text-[11px] text-[#64748B] mt-2">
            <span>70% Trắng & Xám sáng (Nền)</span>
            <span>20% Deep Navy & Royal Blue (Thương hiệu/Công nghệ)</span>
            <span>7% Electric Cyan (AI & Tự động hóa)</span>
            <span>3% VMC Gold (Điểm nhấn cao cấp)</span>
          </div>
        </div>

        {/* Swatches Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {currentData.brandColors.map((color) => {
            const isLightColor = color.hex.toUpperCase() === '#FFFFFF' || color.hex.toUpperCase() === '#F8FAFC';
            const isCopied = copiedHex === color.hex;

            return (
              <div
                key={color.id}
                id={`color-swatch-${color.id}`}
                className="rounded-xl border border-[#E2E8F0] overflow-hidden bg-white shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between group"
              >
                {/* Color block */}
                <div
                  className={`h-24 p-2 flex flex-col justify-between relative ${isLightColor ? 'border-b border-slate-200' : ''}`}
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm shadow-2xs ${
                      isLightColor ? 'bg-slate-900 text-white' : 'bg-white/90 text-slate-900'
                    }`}>
                      {color.role}
                    </span>

                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setEditingColor(color)}
                        className="p-1 rounded-sm bg-white/90 text-slate-800 hover:bg-white cursor-pointer shadow-xs"
                        title="Chỉnh sửa màu"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Bạn có chắc muốn xóa màu ${color.name}?`)) {
                            deleteBrandColor(color.id);
                          }
                        }}
                        className="p-1 rounded-sm bg-white/90 text-rose-600 hover:bg-white cursor-pointer shadow-xs"
                        title="Xóa màu"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyHex(color.hex)}
                    className={`self-end flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-[10px] font-mono font-bold transition-transform active:scale-95 cursor-pointer ${
                      isLightColor ? 'bg-slate-900 text-white' : 'bg-white/90 text-slate-900'
                    }`}
                    title="Bấm để sao chép mã HEX"
                  >
                    {isCopied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{color.hex}</span>
                  </button>
                </div>

                {/* Details */}
                <div className="p-3">
                  <h4 className="text-xs font-bold text-[#0B1F3A] truncate">{color.name}</h4>
                  <p className="text-[11px] text-[#64748B] truncate mt-0.5" title={color.description}>
                    {color.description}
                  </p>
                  {color.usageRatio && (
                    <span className="text-[10px] text-[#94A3B8] block mt-1">
                      Tỷ lệ: {color.usageRatio}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section C: Typography */}
      <div id="section-brand-typography" className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
        <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#F1F5F9]">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <Type className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0B1F3A]">C. Typography — Be Vietnam Pro</h3>
            <p className="text-xs text-[#64748B]">Hệ thống phân cấp chữ chuẩn mực cho giao diện doanh nghiệp</p>
          </div>
        </div>

        <div className="divide-y divide-[#F1F5F9] overflow-x-auto">
          {currentData.typography.map((typo, idx) => (
            <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="sm:w-32 shrink-0">
                <span className="font-bold text-[#155EEF] block">{typo.level}</span>
                <span className="text-[11px] text-[#94A3B8]">{typo.fontFamily}</span>
              </div>
              <div className="sm:w-48 text-[#0B1F3A] font-medium">
                <span>{typo.weight}</span> • <span className="font-mono text-slate-500">{typo.size}</span>
              </div>
              <div className="flex-1 text-[#64748B]">
                {typo.usage}
              </div>
              <div className="text-right sm:w-48">
                <span className="text-sm font-semibold text-[#0B1F3A]">
                  VMC Enterprise AI
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section D & E: Brand Personality & Design Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section D: Personality */}
        <div id="section-brand-personality" className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#F1F5F9]">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1F3A]">D. Tính cách thương hiệu (Brand Personality)</h4>
                <p className="text-xs text-[#64748B]">7 phẩm chất cốt lõi định hình hình ảnh tổ chức</p>
              </div>
            </div>

            <div className="space-y-2">
              {currentData.brandPersonality.map((pers, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#0B1F3A] font-medium p-2 rounded-lg bg-slate-50 border border-[#E2E8F0]/60">
                  <span className="w-5 h-5 rounded-full bg-[#155EEF]/10 text-[#155EEF] flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </span>
                  <span>{pers}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section E: Design Principles */}
        <div id="section-design-principles" className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#F1F5F9]">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#06B6D4] flex items-center justify-center shrink-0">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1F3A]">E. Triết lý & Nguyên tắc thiết kế</h4>
                <p className="text-xs text-[#64748B]">Định hướng thiết kế giao diện và ấn phẩm</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {currentData.designPrinciples.map((principle, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#64748B] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-1.5 shrink-0" />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Color Modal */}
      {editingColor && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form onSubmit={handleSaveColorEdit} className="bg-white rounded-xl p-5 max-w-sm w-full shadow-xl border border-[#E2E8F0] space-y-4">
            <h4 className="text-sm font-bold text-[#0B1F3A]">Chỉnh sửa màu: {editingColor.name}</h4>
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1">Mã màu HEX</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={editingColor.hex}
                  onChange={(e) => setEditingColor({ ...editingColor, hex: e.target.value })}
                  className="w-9 h-9 rounded-md border border-slate-300 cursor-pointer p-0.5"
                />
                <input
                  type="text"
                  value={editingColor.hex}
                  onChange={(e) => setEditingColor({ ...editingColor, hex: e.target.value })}
                  className="flex-1 text-xs border border-slate-300 rounded-md px-2.5 py-1.5 font-mono uppercase"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1">Tên màu</label>
              <input
                type="text"
                value={editingColor.name}
                onChange={(e) => setEditingColor({ ...editingColor, name: e.target.value })}
                className="w-full text-xs border border-slate-300 rounded-md px-2.5 py-1.5"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1">Vai trò</label>
              <select
                value={editingColor.role}
                onChange={(e) => setEditingColor({ ...editingColor, role: e.target.value as any })}
                className="w-full text-xs border border-slate-300 rounded-md px-2.5 py-1.5"
              >
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="AI">AI</option>
                <option value="Accent">Accent</option>
                <option value="Background">Background</option>
                <option value="Surface">Surface</option>
                <option value="Text">Text</option>
                <option value="Border">Border</option>
                <option value="Success">Success</option>
                <option value="Warning">Warning</option>
                <option value="Danger">Danger</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1">Mô tả công năng</label>
              <input
                type="text"
                value={editingColor.description}
                onChange={(e) => setEditingColor({ ...editingColor, description: e.target.value })}
                className="w-full text-xs border border-slate-300 rounded-md px-2.5 py-1.5"
              />
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setEditingColor(null)}
                className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#155EEF] hover:bg-blue-700 rounded-md cursor-pointer"
              >
                Lưu màu
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add Color Modal */}
      {isAddingColor && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <form onSubmit={handleCreateColor} className="bg-white rounded-xl p-5 max-w-sm w-full shadow-xl border border-[#E2E8F0] space-y-4">
            <h4 className="text-sm font-bold text-[#0B1F3A]">Thêm màu mới vào Palette</h4>
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1">Mã màu HEX</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={newColor.hex}
                  onChange={(e) => setNewColor({ ...newColor, hex: e.target.value })}
                  className="w-9 h-9 rounded-md border border-slate-300 cursor-pointer p-0.5"
                />
                <input
                  type="text"
                  value={newColor.hex}
                  onChange={(e) => setNewColor({ ...newColor, hex: e.target.value })}
                  placeholder="#000000"
                  className="flex-1 text-xs border border-slate-300 rounded-md px-2.5 py-1.5 font-mono uppercase"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1">Tên màu</label>
              <input
                type="text"
                value={newColor.name}
                onChange={(e) => setNewColor({ ...newColor, name: e.target.value })}
                placeholder="VD: Cyan Glow"
                className="w-full text-xs border border-slate-300 rounded-md px-2.5 py-1.5"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1">Vai trò</label>
              <select
                value={newColor.role}
                onChange={(e) => setNewColor({ ...newColor, role: e.target.value as any })}
                className="w-full text-xs border border-slate-300 rounded-md px-2.5 py-1.5"
              >
                <option value="Accent">Accent</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="AI">AI</option>
                <option value="Background">Background</option>
                <option value="Surface">Surface</option>
                <option value="Text">Text</option>
                <option value="Border">Border</option>
                <option value="Success">Success</option>
                <option value="Warning">Warning</option>
                <option value="Danger">Danger</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#64748B] block mb-1">Mô tả công năng</label>
              <input
                type="text"
                value={newColor.description}
                onChange={(e) => setNewColor({ ...newColor, description: e.target.value })}
                placeholder="VD: Điểm nhấn phụ cho module"
                className="w-full text-xs border border-slate-300 rounded-md px-2.5 py-1.5"
              />
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAddingColor(false)}
                className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-md cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-[#155EEF] hover:bg-blue-700 rounded-md cursor-pointer"
              >
                Thêm màu
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
