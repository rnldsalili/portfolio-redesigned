export type PortfolioTheme = 'light' | 'dark';

export type PortfolioIconName =
  | 'layers'
  | 'database'
  | 'groups'
  | 'mail'
  | 'share'
  | 'verified'
  | 'location';

export interface PortfolioProfile {
  initials: string;
  name: string;
  role: string;
  location: string;
}

export interface PortfolioNavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

export interface PortfolioSummary {
  heading: string;
  subheading: string;
  body: string;
}

export interface PortfolioExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: Array<string>;
  isCurrent?: boolean;
}

export interface PortfolioTechnicalStackItem {
  category: string;
  value: string;
}

export interface PortfolioMetric {
  label: string;
  value: string;
  isAccent?: boolean;
}

export interface PortfolioCompetency {
  icon: Extract<PortfolioIconName, 'database' | 'groups' | 'layers'>;
  title: string;
  description: string;
}

export interface PortfolioEducationItem {
  degree: string;
  school: string;
  detail: string;
}

export interface PortfolioCredential {
  issuer: string;
  title: string;
}

export interface PortfolioQuickLink {
  href: string;
  icon: Extract<PortfolioIconName, 'mail' | 'share'>;
  label: string;
}

export interface PortfolioLinks {
  cv: string;
  quickLinks: Array<PortfolioQuickLink>;
}

export interface PortfolioContent {
  profile: PortfolioProfile;
  navItems: Array<PortfolioNavItem>;
  links: PortfolioLinks;
  summary: PortfolioSummary;
  experiences: Array<PortfolioExperienceItem>;
  competencies: Array<PortfolioCompetency>;
  education: Array<PortfolioEducationItem>;
  credentials: Array<PortfolioCredential>;
  infrastructure: {
    tabs: Array<string>;
    stack: Array<PortfolioTechnicalStackItem>;
    metrics: Array<PortfolioMetric>;
  };
  footerNote: string;
}
