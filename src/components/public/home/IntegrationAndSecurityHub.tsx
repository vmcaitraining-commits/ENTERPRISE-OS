import React, { useState } from 'react';
import {
  Cpu, ShieldCheck, Database, FileText, UserCheck, Lock,
  Globe, Mail, MessageSquare, CreditCard, Server, ArrowUpRight,
  CheckCircle2, RefreshCw, Key
} from 'lucide-react';
import { useI18n } from '../../../i18n';

interface SpokeConfig {
  id: string;
  keyPrefix: 'apiWebhook' | 'googleWorkspace' | 'emailCorp' | 'zaloChat' | 'bankingPay' | 'privateDb';
  status: 'ready' | 'capable';
  icon: React.ElementType;
}

const SPOKE_CONFIGS: SpokeConfig[] = [
  { id: 'api_webhook', keyPrefix: 'apiWebhook', status: 'ready', icon: Globe },
  { id: 'google_workspace', keyPrefix: 'googleWorkspace', status: 'capable', icon: Server },
  { id: 'email_corp', keyPrefix: 'emailCorp', status: 'capable', icon: Mail },
  { id: 'zalo_chat', keyPrefix: 'zaloChat', status: 'capable', icon: MessageSquare },
  { id: 'banking_pay', keyPrefix: 'bankingPay', status: 'capable', icon: CreditCard },
  { id: 'private_db', keyPrefix: 'privateDb', status: 'capable', icon: Database }
];

interface PillarConfig {
  id: string;
  keyPrefix: 'rbac' | 'isolated' | 'audit' | 'approval';
  icon: React.ElementType;
}

const PILLAR_CONFIGS: PillarConfig[] = [
  { id: 'sec_rbac', keyPrefix: 'rbac', icon: Key },
  { id: 'sec_isolated', keyPrefix: 'isolated', icon: Database },
  { id: 'sec_audit', keyPrefix: 'audit', icon: FileText },
  { id: 'sec_approval', keyPrefix: 'approval', icon: UserCheck }
];

export const IntegrationAndSecurityHub: React.FC = () => {
  const { t } = useI18n();
  const [selectedSpokeId, setSelectedSpokeId] = useState<string>('api_webhook');

  const getSpokeData = (cfg: SpokeConfig) => {
    return {
      name: t(`home.integrationAndSecurity.spokes.${cfg.keyPrefix}.name`, ''),
      category: t(`home.integrationAndSecurity.spokes.${cfg.keyPrefix}.category`, ''),
      statusLabel: t(`home.integrationAndSecurity.spokes.${cfg.keyPrefix}.statusLabel`, ''),
      desc: t(`home.integrationAndSecurity.spokes.${cfg.keyPrefix}.desc`, '')
    };
  };

  const getPillarData = (cfg: PillarConfig) => {
    return {
      title: t(`home.integrationAndSecurity.securityPillars.${cfg.keyPrefix}.title`, ''),
      description: t(`home.integrationAndSecurity.securityPillars.${cfg.keyPrefix}.desc`, '')
    };
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. TÍCH HỢP: HUB & SPOKE DIAGRAM */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#155EEF] dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 inline-block px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            {t('home.integrationAndSecurity.integrationBadge', 'KIẾN TRÚC MỞ (OPEN ARCHITECTURE)')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('home.integrationAndSecurity.integrationHeading', 'Kết nối linh hoạt với hệ sinh thái công nghệ của bạn')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('home.integrationAndSecurity.integrationDescription', 'AI ENTERPRISE đóng vai trò như trung tâm điều phối, sẵn sàng liên kết thông suốt qua API, Webhook và các dịch vụ bên thứ ba.')}
          </p>
        </div>

        {/* Hub and Spoke Interactive Layout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0A1426] border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Center Core Hub (4 cols) */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0B1F3A] text-white border border-blue-500/40 shadow-xl space-y-4 text-center flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-2xl bg-[#155EEF]/30 text-[#06B6D4] border border-[#155EEF]/50 flex items-center justify-center">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#06B6D4] uppercase tracking-wider font-bold">
                  {t('home.integrationAndSecurity.hubCoreTitle', 'TRUNG TÂM ĐIỀU PHỐI LÕI')}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {t('home.integrationAndSecurity.hubCoreHeading', 'AI ENTERPRISE CORE')}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {t('home.integrationAndSecurity.hubCoreDesc', 'Cơ sở dữ liệu tập trung, bộ máy phân quyền RBAC và quản lý dòng quy trình SOP thống nhất.')}
                </p>
              </div>
              <div className="w-full pt-3 border-t border-slate-700/80 flex items-center justify-around text-[11px] font-mono text-slate-300">
                <span>{t('home.integrationAndSecurity.hubCoreFooter.unifiedApi', 'Unified API')}</span>
                <span>•</span>
                <span>{t('home.integrationAndSecurity.hubCoreFooter.webhooks', 'Webhooks')}</span>
                <span>•</span>
                <span>{t('home.integrationAndSecurity.hubCoreFooter.auditTrail', 'Audit Trail')}</span>
              </div>
            </div>

            {/* Spokes Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SPOKE_CONFIGS.map((spoke) => {
                const isSelected = spoke.id === selectedSpokeId;
                const Icon = spoke.icon;
                const isReady = spoke.status === 'ready';
                const data = getSpokeData(spoke);

                return (
                  <div
                    key={spoke.id}
                    onClick={() => setSelectedSpokeId(spoke.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                      isSelected
                        ? 'bg-white dark:bg-[#0D182E] border-blue-500 shadow-md ring-1 ring-blue-500/20'
                        : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[#155EEF] dark:text-[#06B6D4] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#0B1F3A] dark:text-white truncate">
                          {data.name}
                        </span>
                      </div>

                      <span
                        className={`text-[9px] font-medium px-2 py-0.5 rounded border whitespace-nowrap ${
                          isReady
                            ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {data.statusLabel}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {data.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. BẢO MẬT: 4 TRỤ CỘT VỮNG CHẮC */}
      <div className="space-y-8 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 inline-block px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            {t('home.integrationAndSecurity.securityBadge', 'AN TOÀN & BẢO MẬT')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            {t('home.integrationAndSecurity.securityHeading', 'Bảo mật đa tầng theo tiêu chuẩn doanh nghiệp')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('home.integrationAndSecurity.securityDescription', 'Dữ liệu là tài sản cốt lõi. Chúng tôi thiết lập 4 rào chắn bảo vệ nghiêm ngặt để đảm bảo an toàn thông tin và tính toàn vẹn vận hành.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLAR_CONFIGS.map((pillar) => {
            const Icon = pillar.icon;
            const data = getPillarData(pillar);
            return (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D182E] border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                  {data.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
