export type ProjectCategory = 'All' | 'Healthcare' | 'IoT & Enterprise' | 'E-Commerce & Real Estate';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Healthcare' | 'IoT & Enterprise' | 'E-Commerce & Real Estate';
  description: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  impactMetrics: string[];
  techStack: string[];
  architecture: string;
  highlights: string[];
  iconType: 'activity' | 'cpu' | 'settings' | 'heart-pulse' | 'shield-check' | 'shopping-bag' | 'building' | 'graduation-cap' | 'message-square' | 'map-pin';
  accentColor: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  teamSize?: string;
  domain: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface StatHighlight {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
  accent: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  levelPercent: number;
}
