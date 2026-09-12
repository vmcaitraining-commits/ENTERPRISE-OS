import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { StatusBadge } from '../common/StatusBadge';
import { StrategySectionItem } from '../../types/enterprise';
import { Compass, Target, Eye, ShieldAlert, Sparkles, HeartHandshake, MessageSquareQuote, Megaphone, Edit2, Check, X } from 'lucide-react';

export const TabStrategy: React.FC = () => {
  const { data, tempData, isEditing, updateStrategyItem } = useEnterprise();
  const currentData = isEditing ? tempData : data;

  const [editingCardId, setEditingCardId] = useState<string | null>(null);
  const [draftContent, setDraftContent] = useState<string>('');

  const iconMap: Record<string, React.ReactNode> = {
    strat_nature: <Compass className="w-5 h-5 text-[#155EEF]" />,
    strat_positioning: <Target className="w-5 h-5 text-[#06B6D4]" />,
    strat_vision: <Eye className="w-5 h-5 text-indigo-600" />,
    strat_mission: <Sparkles className="w-5 h-5 text-emerald-600" />,
    strat_diff: <ShieldAlert className="w-5 h-5 text-amber-600" />,
    strat_promise: <HeartHandshake className="w-5 h-5 text-rose-600" />,
    strat_message: <MessageSquareQuote className="w-5 h-5 text-blue-600" />,
    strat_comm_rules: <Megaphone className="w-5 h-5 text-purple-600" />
  };

  const handleStartCardEdit = (item: StrategySectionItem) => {
    setEditingCardId(item.id);
    setDraftContent(item.content);
  };

  const handleSaveCardEdit = (id: string) => {
    updateStrategyItem(id, { content: draftContent });
    setEditingCardId(null);
  };

  return (
    <div id="tab-content-strategy" className="space-y-6">
      <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-2xs flex items-center justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#0B1F3A]">Định vị & Chiến lược phát triển</h2>
          <p className="text-xs sm:text-sm text-[#64748B]">Bản chất tổ chức, định vị khác biệt và nguyên tắc truyền thông chuẩn mực</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-[#155EEF] rounded-full border border-blue-200">
          8 Section chuẩn hóa
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {currentData.strategy.map((item, index) => {
          const isItemEditing = editingCardId === item.id;

          return (
            <div
              key={item.id}
              id={`card-strategy-${item.id}`}
              className="bg-white rounded-xl border border-[#E2E8F0] p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                      {iconMap[item.id] || <Compass className="w-4 h-4 text-[#155EEF]" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider block">
                        Mục {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base font-bold text-[#0B1F3A]">{item.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <StatusBadge status={item.status} size="sm" />
                    {!isEditing && !isItemEditing && (
                      <button
                        onClick={() => handleStartCardEdit(item)}
                        className="p-1.5 text-slate-400 hover:text-[#155EEF] hover:bg-slate-50 rounded-md transition-colors cursor-pointer"
                        title="Chỉnh sửa nhanh nội dung"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Content body */}
                {isItemEditing ? (
                  <div className="space-y-3 mt-2">
                    <textarea
                      value={draftContent}
                      onChange={(e) => setDraftContent(e.target.value)}
                      rows={4}
                      className="w-full text-xs sm:text-sm text-[#0F172A] bg-slate-50 border border-[#CBD5E1] rounded-lg p-2.5 focus:ring-2 focus:ring-[#155EEF] focus:outline-none"
                    />
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setEditingCardId(null)}
                        className="px-2.5 py-1 text-xs text-slate-500 hover:bg-slate-100 rounded-md flex items-center gap-1 cursor-pointer"
                      >
                        <X className="w-3 h-3" /> Hủy
                      </button>
                      <button
                        onClick={() => handleSaveCardEdit(item.id)}
                        className="px-3 py-1 text-xs font-semibold text-white bg-[#155EEF] hover:bg-blue-700 rounded-md flex items-center gap-1 cursor-pointer"
                      >
                        <Check className="w-3 h-3" /> Lưu
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-xs sm:text-sm font-semibold text-[#0B1F3A] leading-relaxed mb-3">
                      {item.content}
                    </p>

                    {item.details && item.details.length > 0 && (
                      <div className="space-y-2 mt-3 pt-3 border-t border-[#F1F5F9]">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#64748B]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
