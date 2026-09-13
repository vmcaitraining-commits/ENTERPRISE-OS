import React from 'react';
import { HeroSingleDataMultiRole } from '../enterprise/HeroSingleDataMultiRole';
import { SiloVsUnifiedComparison } from '../enterprise/SiloVsUnifiedComparison';
import { EndToEndTransactionFlow } from '../enterprise/EndToEndTransactionFlow';
import { Architecture11ModulesMap } from '../enterprise/Architecture11ModulesMap';
import { SupervisedAiApproval } from '../enterprise/SupervisedAiApproval';
import { SixDeploymentPrinciples } from '../enterprise/SixDeploymentPrinciples';
import { SecurityAndGovernanceMatrix } from '../enterprise/SecurityAndGovernanceMatrix';
import { EnterpriseRoadmapAndCta } from '../enterprise/EnterpriseRoadmapAndCta';

export const AiEnterprisePage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-20 text-[#0F172A] dark:text-slate-100 transition-colors">
      {/* 1. HERO WITH "ONE DATA - MANY ROLES" ARCHITECTURE DIAGRAM */}
      <HeroSingleDataMultiRole />

      {/* 2. FRAGMENTED SOFTWARE PROBLEMS & BEFORE/AFTER COMPARISON */}
      <SiloVsUnifiedComparison />

      {/* 3. END-TO-END TRANSACTION FLOW: MARKETING -> CRM/SALES -> FINANCE -> CSKH -> BI */}
      <EndToEndTransactionFlow />

      {/* 4 & 5. 11 MODULES IN 4 LAYERS + INTERACTIVE MODULE SELECTOR PREVIEW (#architecture) */}
      <Architecture11ModulesMap />

      {/* 6. SUPERVISED AI & HUMAN-IN-THE-LOOP APPROVAL MECHANISM */}
      <SupervisedAiApproval />

      {/* 7. SIX CORE DEPLOYMENT PRINCIPLES (#principles) */}
      <SixDeploymentPrinciples />

      {/* 8. SECURITY MATRIX, RBAC & MULTI-LEVEL APPROVAL (#security) */}
      <SecurityAndGovernanceMatrix />

      {/* 9 & 10. 4-PHASE IMPLEMENTATION ROADMAP & FINAL CALL TO ACTION */}
      <EnterpriseRoadmapAndCta />
    </div>
  );
};
