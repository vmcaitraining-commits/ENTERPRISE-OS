/**
 * Translation Target: English (en)
 * Namespace: forms
 * 
 * Governance Status: DRAFT / NEEDS_REVIEW
 * Strict Constraints:
 * - Brand names preserved verbatim: VMC Group, VMC, AI ENTERPRISE
 * - Professional Enterprise B2B English tone
 * - Placeholders match Vietnamese source exactly
 * - No forbidden claim escalation
 * - Vietnam domestic phone format validation noted as INTERNATIONAL_PHONE_VALIDATION_PENDING
 */
export default {
  // Field Labels
  fullNameLabel: 'Full Name',
  companyNameLabel: 'Company Name',
  workEmailLabel: 'Work Email',
  businessEmailLabel: 'Business Email',
  phoneLabel: 'Phone Number',
  companyScaleLabel: 'Company Size',
  industryLabel: 'Primary Industry',
  needDescriptionLabel: 'Operational Needs or Challenges',
  consultationTypeLabel: 'Consultation Type',

  // Required indicators
  requiredIndicator: '*',

  // Field Placeholders
  fullNamePlaceholder: 'e.g. John Smith',
  companyNamePlaceholder: 'e.g. Enterprise Ltd. / Corp.',
  emailPlaceholder: 'name@company.com',
  phonePlaceholder: '+84 912 345 678',
  companyScalePlaceholder: 'Select company size...',
  industryPlaceholder: 'Select primary industry...',
  needDescriptionPlaceholder: 'e.g. Synchronizing customer records across departments, or automating approval workflows...',

  // Scale Options
  scaleUnder20: 'Under 20 employees',
  scale20to50: '20 - 50 employees',
  scale50to150: '50 - 150 employees',
  scale150to500: '150 - 500 employees',
  scaleAbove500: '500+ employees',

  // Industry Options
  industryTrade: 'Trade & Retail',
  industryService: 'Professional Services',
  industryEducation: 'Education & Training',
  industryRealEstate: 'Real Estate',
  industryManufacturing: 'Manufacturing & Processing',
  industryDistribution: 'Distribution & Wholesale',
  industryConstruction: 'Construction & Engineering',
  industryTechnology: 'Technology Enterprises',
  industryOther: 'Other Industry',

  // Form Validation Messages
  requiredFullName: 'Please enter the contact person’s full name',
  requiredCompanyName: 'Please enter your company name',
  requiredEmail: 'Please enter a valid work email address',
  invalidEmail: 'Invalid email format (e.g. name@company.com)',
  requiredPhone: 'Please enter a contact phone number',
  invalidPhoneLength: 'Phone number must contain at least 8 digits',
  requiredCompanyScale: 'Please select your organization size',
  requiredIndustry: 'Please select your primary industry',
  invalidFormToast: 'Please check the highlighted fields for errors!',
  missingRequiredFields: 'Please complete all required fields!',

  // Submission CTAs & States
  submitButton: 'Submit Request',
  submittingButton: 'Submitting...',
  cancelButton: 'Cancel',
  submissionSuccessToast: 'Information submitted successfully! A VMC Group specialist will reach out within 24 business hours.',
  submissionErrorToast: 'Unable to submit your request at this moment. Please try again later.',
  contactSubmitButton: 'Submit Consultation Request',
  contactSubmittingButton: 'Processing...',
  sendAdditionalRequest: 'Submit Additional Request',

  // Contact Page Form
  contactBadge: 'REGISTRATION FORM',
  contactTitle: 'Register for Enterprise Solution Consultation',
  contactDesc: 'Fill in your enterprise details to receive a preliminary architecture analysis report within 24 hours.',

  // Modal Titles & Headers
  assessmentBadge: 'AI READINESS ASSESSMENT',
  assessmentTitle: 'Request AI Readiness Assessment',
  assessmentDesc: 'A VMC Group systems architect will assess your technology, data, and process readiness to propose a tailored AI ENTERPRISE deployment roadmap.',

  bookingBadge: '1:1 ARCHITECTURE CONSULTATION',
  bookingTitle: 'Book an AI Architecture Consultation',
  bookingDesc: 'A dedicated 45-minute working session with a VMC Group system architect on unifying departmental workflows into a coherent operating platform.',

  generalBadge: 'ENTERPRISE CONSULTATION',
  generalTitle: 'Request AI ENTERPRISE Solution Consultation',
  generalDesc: 'Connect directly with the VMC Group team to receive a tailored configuration matching your organization size, industry, and existing workflows.',

  // Success Screen
  successTitle: 'Request Received Successfully!',
  successDetail: 'Thank you, {fullName} from {companyName}. A VMC Group consultant will contact you via email at {email} and phone within 24 business hours.',

  // Security & NDA Notice
  securityNotice: 'Data Privacy Commitment: VMC Group strictly respects 100% data privacy and signs a Non-Disclosure Agreement (NDA) prior to deep advisory engagements.'
};
