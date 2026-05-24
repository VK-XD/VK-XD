/**
 * Types and structures for Emazyn Career Growth Platform
 */

export type PageView =
  | 'home'
  | 'ai-career-roadmap'
  | 'ai-skill-analyzer'
  | 'ai-resume-builder'
  | 'ai-linkedin-optimizer'
  | 'ai-portfolio-builder'
  | 'ai-mock-interview'
  | 'opportunities-board'
  | 'for-colleges'
  | 'for-corporates'
  | 'about-us'
  | 'contact-us';

export interface TrustHighlight {
  title: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon?: string;
  badge?: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AudienceCard {
  title: string;
  description: string;
}

export interface ContactFormState {
  fullName: string;
  email: string;
  mobileNumber: string;
  cityLocation: string;
  userType: 'Student' | 'Working Professional' | 'Career Switcher' | 'College / Institution' | 'Corporate / Organization';
  
  // Student fields
  educationLevel?: string;
  yearSemester?: string;
  collegeName?: string;
  studentInterests?: string[]; // multi-select
  studentLookingFor?: string[]; // checkboxes
  studentSkillLevel?: string;

  // Working Professional fields
  currentJobRole?: string;
  currentIndustry?: string;
  yearsOfExperience?: string;
  professionalLookingFor?: string[]; // checkboxes
  professionalInterests?: string[]; // multi-select

  // Career Switcher fields
  careerSwitcherBackground?: string;
  careerSwitcherTargetDomain?: string;
  careerSwitcherReason?: string;
  careerSwitcherExperience?: string;
  careerSwitcherSupportNeeded?: string[]; // checkboxes

  // College / Institution fields
  institutionNameContact?: string;
  institutionContactPerson?: string;
  institutionDesignation?: string;
  institutionDepartments?: string[]; // multi-select
  institutionStudentStrength?: string;
  institutionServices?: string[]; // checkboxes
  institutionPreferredMode?: string;

  // Corporate / Organization fields
  corporateName?: string;
  corporateContactPerson?: string;
  corporateDesignation?: string;
  corporateIndustry?: string;
  corporateTeamSize?: string;
  corporateTrainingAreas?: string[]; // multi-select
  corporatePreferredMode?: string;

  // Common final
  preferredContactTime: string;
  additionalMessage: string;
  consentCheckbox: boolean;
}
