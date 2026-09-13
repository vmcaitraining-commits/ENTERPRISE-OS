import React, { useState } from 'react';
import { JourneyStep } from '../../../data/industryDetailedData';
import { AlertTriangle, CheckCircle2, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

interface IndustryJourneyVisualProps {
  steps: JourneyStep[];
  industryName: string;
}

export const IndustryJourneyVisual: React.FC<IndustryJourneyVisualProps> = ({ steps, industryName }) => {
  const [selectedStep, setSelectedStep] = useState<number>(() => {
    const firstBottleneck = steps.find((s) => s.isBottleneck);
    return firstBottleneck ? firstBottleneck.stepNumber : 1;
  });

  const activeStepData = steps.find((s) => s.stepNumber === selectedStep) || steps[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-8 text-white shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-medium mb-2">
            <AlertTriangle className="w-3.5 h-3.5" />
            HÀNH TRÌNH VẬN HÀNH & ĐIỂM NGHẼN THỰC TẾ
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Luồng Dữ Liệu Nghiệp Vụ — {industryName}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Bấm vào từng bước trên hành trình để xem đối soát chi tiết và cách hệ thống xử lý điểm nghẽn.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
            <span>Chuẩn hóa</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse"></span>
            <span>Điểm nghẽn rủi ro cao</span>
          </div>
        </div>
      </div>

      {/* Horizontal Pipeline Steps */}
      <div className="mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {steps.map((step, idx) => {
            const isSelected = selectedStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setSelectedStep(step.stepNumber)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? step.isBottleneck
                      ? 'bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/20 shadow-lg shadow-amber-950/50'
                      : 'bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-950/50'
                    : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      isSelected
                        ? step.isBottleneck
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {step.stepNumber}
                  </span>

                  {step.isBottleneck ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      <AlertTriangle className="w-2.5 h-2.5" />
                      Nghẽn
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      Thông suốt
                    </span>
                  )}
                </div>

                <div className="font-semibold text-white text-sm tracking-tight line-clamp-1">{step.title}</div>
                <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">{step.subtitle}</div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 pointer-events-none text-slate-600">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Step Detail Panel */}
      <div className="mt-6 p-5 md:p-6 rounded-xl bg-slate-950 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs">
                Giai đoạn {activeStepData.stepNumber} / {steps.length}
              </span>
              <h4 className="text-lg font-bold text-white">
                {activeStepData.title}: {activeStepData.subtitle}
              </h4>
            </div>

            {activeStepData.isBottleneck && activeStepData.bottleneckNote && (
              <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm leading-relaxed flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block font-semibold mb-0.5">Điểm nghẽn vận hành thực tế:</strong>
                  {activeStepData.bottleneckNote}
                </div>
              </div>
            )}

            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm leading-relaxed flex items-start gap-3">
              <Cpu className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-indigo-300 block font-semibold mb-0.5">Hệ thống AI ENTERPRISE can thiệp:</strong>
                {activeStepData.systemSupport}
              </div>
            </div>
          </div>

          <div className="shrink-0 pt-2 md:pt-0">
            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
              <div>Trạng thái: {activeStepData.isBottleneck ? 'Được kiểm soát chốt chặn' : 'Chuẩn hóa theo kịch bản'}</div>
              <div>Giao diện hỗ trợ: Màn hình nghiệp vụ tập trung</div>
              <div>Bảo mật: Phân quyền theo vai trò (RBAC)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
