import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { StatusBadge } from '../common/StatusBadge';
import { Cpu, Layers, Users, Building, ShieldAlert, GitBranch, DollarSign, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TabProducts: React.FC = () => {
  const { data, tempData, isEditing } = useEnterprise();
  const currentData = isEditing ? tempData : data;
  const [selectedScopeId, setSelectedScopeId] = useState<string>('scope_a');

  const selectedScope = currentData.coreProduct.scopes.find(s => s.id === selectedScopeId) || currentData.coreProduct.scopes[0];

  return (
    <div id="tab-content-products" className="space-y-8">
      {/* Section A: Sản phẩm lõi AI ENTERPRISE */}
      <div id="section-core-product" className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#06B6D4] shadow-xs">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">A. SẢN PHẨM LÕI</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  AI-Native Platform
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1F3A]">
                {currentData.coreProduct.name}
              </h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-[#155EEF] bg-blue-50/70 border border-blue-200/60 px-3 py-1.5 rounded-lg">
            “{currentData.coreProduct.tagline}”
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#64748B] mt-4 leading-relaxed">
          {currentData.coreProduct.role}
        </p>

        {/* 6 Nguyên tắc triển khai */}
        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-[#E2E8F0]/80">
          <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider block mb-2">
            Nguyên tắc triển khai:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {currentData.coreProduct.deploymentPrinciples.map((principle, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#0F172A]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 11 Scopes of Value Interactive Browser */}
        <div className="mt-6 pt-5 border-t border-[#F1F5F9]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider">
              11 Phân hệ giá trị của AI ENTERPRISE
            </h4>
            <span className="text-xs text-[#64748B]">Bấm chọn phân hệ để xem chi tiết</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Scope tabs list */}
            <div className="lg:col-span-4 space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
              {currentData.coreProduct.scopes.map((scope) => {
                const isActive = scope.id === selectedScopeId;
                return (
                  <button
                    key={scope.id}
                    onClick={() => setSelectedScopeId(scope.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0B1F3A] text-white shadow-xs font-semibold'
                        : 'bg-slate-50 hover:bg-slate-100 text-[#0F172A] border border-[#E2E8F0]/60'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isActive ? 'bg-[#155EEF] text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {scope.code}
                      </span>
                      <span className="truncate">{scope.name}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#06B6D4]' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Scope detail panel */}
            <div className="lg:col-span-8 bg-slate-50 rounded-xl p-5 border border-[#E2E8F0] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#155EEF] text-white text-xs font-bold">
                    Khối {selectedScope.code}
                  </span>
                  <h5 className="text-base font-bold text-[#0B1F3A]">{selectedScope.name}</h5>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] mb-4">
                  {selectedScope.description}
                </p>

                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-[#0B1F3A] block mb-2">
                    Các hạng mục thành phần nghiệp vụ:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedScope.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[#0F172A] font-medium shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                <span>Tương thích kiến trúc lõi AI ENTERPRISE</span>
                <span className="text-[#155EEF] font-semibold">Khả năng tùy biến theo ngành: 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section B: Hệ sinh thái sản phẩm & dịch vụ */}
      <div id="section-ecosystem" className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs">
        <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#F1F5F9]">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#155EEF] flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0B1F3A]">B. Hệ sinh thái 9 sản phẩm và dịch vụ</h3>
            <p className="text-xs text-[#64748B]">Từ nền tảng công nghệ lõi đến dịch vụ tư vấn, triển khai và đào tạo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentData.ecosystem.map((prod, idx) => (
            <div
              key={prod.id}
              className="p-4 rounded-xl border border-[#E2E8F0] bg-slate-50/40 hover:bg-white hover:border-[#155EEF]/40 transition-all shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-[#155EEF] uppercase">
                    0{idx + 1}
                  </span>
                  <StatusBadge status={prod.status} size="sm" />
                </div>
                <h4 className="text-sm font-bold text-[#0B1F3A] mb-1">{prod.name}</h4>
                <p className="text-xs font-medium text-[#155EEF] mb-2">{prod.tagline}</p>
                <p className="text-xs text-[#64748B] leading-relaxed">{prod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section C, D, E: Khách hàng mục tiêu, Ngành ưu tiên & Không ưu tiên */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Khách hàng mục tiêu */}
        <div id="section-target-customers" className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#F1F5F9]">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#06B6D4] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0B1F3A]">C. Khách hàng mục tiêu</h4>
            </div>

            <p className="text-xs text-[#0F172A] font-semibold mb-3 leading-relaxed">
              {currentData.customerAndMarket.primaryTarget}
            </p>

            <div className="space-y-2 text-xs text-[#64748B] bg-slate-50 p-3 rounded-lg border border-[#E2E8F0]/80 mb-3">
              <div>
                <strong className="text-[#0B1F3A]">Quy mô:</strong> {currentData.customerAndMarket.referenceScale}
              </div>
              <div>
                <strong className="text-[#0B1F3A]">Doanh thu:</strong> {currentData.customerAndMarket.referenceRevenue}
              </div>
            </div>

            <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block mb-1.5">
              Đặc điểm phù hợp:
            </span>
            <div className="space-y-1">
              {currentData.customerAndMarket.suitableCharacteristics.map((char, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs text-[#0F172A]">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{char}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ngành ưu tiên */}
        <div id="section-priority-industries" className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#F1F5F9]">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0B1F3A]">D. Ngành ưu tiên</h4>
            </div>

            <p className="text-xs text-[#64748B] mb-3">
              Nguyên tắc: Khung lõi dùng chung → Module theo ngành → Cấu hình theo doanh nghiệp → Dữ liệu và quy trình riêng.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {currentData.customerAndMarket.priorityIndustries.map((ind, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 border border-[#E2E8F0] text-xs font-semibold text-[#0B1F3A] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Khách hàng không ưu tiên */}
        <div id="section-non-priority" className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#F1F5F9]">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0B1F3A]">E. Khách hàng không ưu tiên</h4>
            </div>

            <p className="text-xs text-[#64748B] mb-3">
              Tiêu chuẩn sàng lọc dự án rõ ràng nhằm đảm bảo tỷ lệ thành công khi triển khai hệ thống:
            </p>

            <div className="space-y-1.5">
              {currentData.customerAndMarket.nonPriorityCustomers.map((crit, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span>{crit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section F & G: Mô hình triển khai & Mô hình giá */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Section F: 12 Bước triển khai */}
        <div id="section-implementation-steps" className="lg:col-span-7 bg-white rounded-xl border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#F1F5F9]">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B1F3A]">F. Mô hình triển khai 12 bước cho khách hàng</h4>
              <p className="text-xs text-[#64748B]">Quy trình chuẩn hóa từ khảo sát đến bảo trì định kỳ</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentData.customerAndMarket.implementationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-slate-50 border border-[#E2E8F0]/70 text-xs text-[#0F172A] flex items-start gap-2"
              >
                <span className="w-5 h-5 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="font-medium">{step.replace(/^Bước \d+:\s*/, '')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section G: Mô hình giá */}
        <div id="section-pricing-model" className="lg:col-span-5 bg-white rounded-xl border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#F1F5F9]">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1F3A]">G. Mô hình giá và chính sách báo giá</h4>
                <p className="text-xs text-[#64748B]">Không áp dụng giá cố định cho giải pháp may đo</p>
              </div>
            </div>

            <div className="bg-amber-50/60 border border-amber-200/70 rounded-xl p-4 text-xs text-amber-900 leading-relaxed space-y-2 mb-4">
              <span className="font-bold block text-amber-950">Nguyên tắc định giá:</span>
              <p>{currentData.customerAndMarket.pricingModel}</p>
            </div>

            <div className="space-y-1.5 text-xs text-[#64748B]">
              <span className="font-bold text-[#0B1F3A] block">Các yếu tố cấu thành báo giá:</span>
              <p>• Quy mô nhân sự & số tài khoản người dùng</p>
              <p>• Số lượng phân hệ core & mức độ tùy biến quy trình</p>
              <p>• Khối lượng tích hợp API, webhook & dịch vụ thứ ba</p>
              <p>• Mức độ tự động hóa workflow & mạng lưới AI Agent</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
            <span className="text-[#64748B]">Trạng thái: <strong>Cần bổ sung bảng khung</strong></span>
            <span className="text-[#155EEF] font-semibold">Tư vấn may đo</span>
          </div>
        </div>
      </div>
    </div>
  );
};
