import fs from 'fs';
import path from 'path';

// Load and scan ConsultationModal.tsx, ContactPage.tsx, and NotFoundPage.tsx
const filesToCheck = [
  'src/components/public/ConsultationModal.tsx',
  'src/components/public/pages/ContactPage.tsx',
  'src/components/public/pages/NotFoundPage.tsx'
];

let errors: string[] = [];

filesToCheck.forEach((relPath) => {
  const fullPath = path.resolve(process.cwd(), relPath);
  const content = fs.readFileSync(fullPath, 'utf8');

  // Check that useI18n is imported and used
  if (!content.includes('useI18n')) {
    errors.push(`${relPath}: missing useI18n import`);
  }
  if (!content.includes('const { t } = useI18n()')) {
    errors.push(`${relPath}: missing const { t } = useI18n()`);
  }
});

// Specific checks for ConsultationModal.tsx
const modalContent = fs.readFileSync(path.resolve(process.cwd(), 'src/components/public/ConsultationModal.tsx'), 'utf8');
const modalExpectedKeys = [
  'forms.consultationBadge',
  'forms.consultationTitle',
  'forms.consultationDesc',
  'forms.fullNameLabel',
  'forms.fullNamePlaceholder',
  'forms.companyNameLabel',
  'forms.companyNamePlaceholder',
  'forms.workEmailLabel',
  'forms.emailPlaceholder',
  'forms.phoneLabel',
  'forms.phonePlaceholder',
  'forms.companyScaleLabel',
  'forms.companyScalePlaceholder',
  'forms.industryLabel',
  'forms.industryPlaceholder',
  'forms.needDescriptionLabel',
  'forms.needDescriptionPlaceholder',
  'forms.submitButton',
  'forms.submittingButton',
  'forms.successTitle',
  'forms.successDetail',
  'forms.closeModalButton',
  'accessibility.closeModalAria',
  'accessibility.formRequiredFieldAria'
];

modalExpectedKeys.forEach(k => {
  if (!modalContent.includes(`'${k}'`)) {
    errors.push(`ConsultationModal.tsx missing expected key: ${k}`);
  }
});

// Specific checks for ContactPage.tsx
const contactContent = fs.readFileSync(path.resolve(process.cwd(), 'src/components/public/pages/ContactPage.tsx'), 'utf8');
const contactExpectedKeys = [
  'forms.contactBadge',
  'forms.contactTitle',
  'forms.contactDesc',
  'forms.fullNameLabel',
  'forms.fullNamePlaceholder',
  'forms.companyNameLabel',
  'forms.companyNamePlaceholder',
  'forms.workEmailLabel',
  'forms.emailPlaceholder',
  'forms.phoneLabel',
  'forms.phonePlaceholder',
  'forms.companyScaleLabel',
  'forms.companyScalePlaceholder',
  'forms.industryLabel',
  'forms.industryPlaceholder',
  'forms.needDescriptionLabel',
  'forms.needDescriptionPlaceholder',
  'forms.contactSubmitButton',
  'forms.contactSubmittingButton',
  'forms.successTitle',
  'forms.successDetail',
  'forms.sendAdditionalRequest',
  'accessibility.contactFormAriaLabel',
  'accessibility.formRequiredFieldAria'
];

contactExpectedKeys.forEach(k => {
  if (!contactContent.includes(`'${k}'`)) {
    errors.push(`ContactPage.tsx missing expected key: ${k}`);
  }
});

// Specific checks for NotFoundPage.tsx
const notFoundContent = fs.readFileSync(path.resolve(process.cwd(), 'src/components/public/pages/NotFoundPage.tsx'), 'utf8');
const notFoundExpectedKeys = [
  'notFound.pageTitleAria',
  'notFound.errorCodeBadge',
  'notFound.heading',
  'notFound.description',
  'notFound.homeCta',
  'notFound.architectureCta',
  'notFound.contactSupportCta'
];

notFoundExpectedKeys.forEach(k => {
  if (!notFoundContent.includes(`'${k}'`)) {
    errors.push(`NotFoundPage.tsx missing expected key: ${k}`);
  }
});

if (errors.length > 0) {
  console.error('Phase 4A2-B Component Checks Failed:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('Phase 4A2-B Component Checks Passed: 100% key coverage in ConsultationModal, ContactPage form, and NotFoundPage!');
}
