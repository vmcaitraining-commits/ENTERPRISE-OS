import React, { useState } from 'react';
import { 
  BarChart3, ArrowUpRight, ArrowDownRight, Layers, FileCheck, CheckCircle2,
  Clock, AlertCircle, ArrowRight, ShieldCheck
} from 'lucide-react';

export const MarketingChannelVisual: React.FC = () => {
  const [approvedPosts, setApprovedPosts] = useState<number[]>([]);
  const [budgetApproved, setBudgetApproved] = useState<boolean>(false);

  const channels = [
    {
      name: 'Google Search Ads',
      spend: '45.0 Triệu',
      validLeads: 243,
      cac: '185.000 VNĐ',
      conversionToDeal: '28.4%',
      trend: 'up',
      recommendation: 'Tăng +20M ngân sách'
    },
    {
      name: 'Meta Ads (Facebook)',
      spend: '52.0 Triệu',
      validLeads: 168,
      cac: '310.000 VNĐ',
      conversionToDeal: '14.2%',
      trend: 'down',
      recommendation: 'Giảm -20M ngân sách'
    },
    {
      name: 'TikTok Video Ads',
      spend: '18.0 Triệu',
      validLeads: 42,
      cac: '428.000 VNĐ',
      conversionToDeal: '8.1%',
      trend: 'down',
      recommendation: 'Tối ưu lại tệp & creative'
    }
  ];

  const contentQueue = [
    {
      id: 1,
      title: '5 Dấu hiệu doanh nghiệp cần chuẩn hóa SOP trước khi mua ERP',
      channel: 'Website Blog & LinkedIn',
      wordCount: '1.450 từ',
      complianceScore: '98/100 (Đạt chuẩn)',
      complianceNotes: 'Đã bỏ các từ khẳng định tuyệt đối, đúng nhận diện thương hiệu VMC.',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Hướng dẫn kiểm soát vượt dự toán công trình xây lắp',
      channel: 'Ebook & Tải tài liệu',
      wordCount: '3.200 từ',
      complianceScore: '92/100 (Cần lưu ý)',
      complianceNotes: 'Có trích dẫn 1 số liệu chi phí, cần Kế toán trưởng ký xác nhận.',
      status: 'pending'
    }
  ];

  const toggleApprove = (id: number) => {
    if (approvedPosts.includes(id)) {
      setApprovedPosts(approvedPosts.filter(item => item !== id));
    } else {
      setApprovedPosts([...approvedPosts, id]);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 flex items-center gap-1">
              <BarChart3 className="w-3.5 h-3.5" /> Báo cáo hiệu quả kênh [Minh họa]
            </span>
            <span className="text-xs text-slate-500">Đối chiếu chi phí vs CRM khi được cấu hình</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              [Dữ liệu minh họa]
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
            So Sánh Hiệu Quả Kênh & Hàng Đợi Duyệt Nội Dung
          </h4>
        </div>
      </div>

      {/* Part 1: Channel Comparison Table */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            1. So sánh chi phí tìm kiếm khách hàng (CAC) và tỷ lệ tạo hợp đồng [Minh họa]:
          </span>
          <span className="text-xs text-slate-500">Dữ liệu kịch bản minh họa</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 font-semibold border-y border-slate-200 dark:border-slate-700">
              <tr>
                <th className="py-2.5 px-3">Kênh quảng cáo</th>
                <th className="py-2.5 px-3">Chi tiêu</th>
                <th className="py-2.5 px-3">Lead hợp lệ</th>
                <th className="py-2.5 px-3">Chi phí / Lead (CAC)</th>
                <th className="py-2.5 px-3">Chuyển đổi Deal</th>
                <th className="py-2.5 px-3">Đề xuất AI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {channels.map((ch, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {ch.trend === 'up' ? (
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <ArrowDownRight className="w-3.5 h-3.5 text-amber-600" />
                    )}
                    {ch.name}
                  </td>
                  <td className="py-2.5 px-3">{ch.spend}</td>
                  <td className="py-2.5 px-3 font-medium">{ch.validLeads}</td>
                  <td className="py-2.5 px-3 font-bold text-slate-900 dark:text-white">{ch.cac}</td>
                  <td className="py-2.5 px-3 font-medium text-emerald-600">{ch.conversionToDeal}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                      ch.trend === 'up'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {ch.recommendation}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Budget Proposal Action */}
        <div className="mt-3 p-3 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-900/40 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-semibold text-blue-900 dark:text-blue-300">
              Đề xuất phân bổ ngân sách [Kịch bản tham khảo]:
            </span>
            <span className="text-slate-700 dark:text-slate-300 ml-1.5">
              Dịch chuyển 20.000.000 VNĐ từ Meta sang Google Search để gia tăng lead chuyển đổi cao [Kịch bản minh họa].
            </span>
          </div>
          <div>
            {!budgetApproved ? (
              <button
                onClick={() => setBudgetApproved(true)}
                className="px-3 py-1.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors shrink-0 shadow-xs"
              >
                Duyệt đề xuất ngân sách
              </button>
            ) : (
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> Đã duyệt kịch bản ngân sách
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Part 2: Content Approval Queue */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-primary" /> 2. Hàng đợi kiểm duyệt nội dung (Content Approval Queue) [Minh họa]:
          </span>
          <span className="text-xs text-slate-500">2 bài viết mẫu đang chờ Trưởng phòng duyệt</span>
        </div>

        <div className="space-y-2.5">
          {contentQueue.map((post) => {
            const isApproved = approvedPosts.includes(post.id);
            return (
              <div
                key={post.id}
                className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {post.title}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[10px]">
                      {post.channel}
                    </span>
                  </div>
                  <div className="text-slate-500 flex items-center gap-3">
                    <span>Độ dài: {post.wordCount}</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-medium">{post.complianceScore}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 italic">
                    Ghi chú rà soát: {post.complianceNotes}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => toggleApprove(post.id)}
                    className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                      isApproved
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-primary'
                    }`}
                  >
                    {isApproved ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đã duyệt xuất bản
                      </>
                    ) : (
                      <>
                        <FileCheck className="w-3.5 h-3.5" /> Duyệt xuất bản
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Safety Notice Footer */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>Điểm chốt chặn: AI không tự xuất bản bài viết lên blog hay thay đổi số tiền trên tài khoản quảng cáo.</span>
      </div>
    </div>
  );
};
