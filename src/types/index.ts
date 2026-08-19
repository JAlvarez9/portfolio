export interface Project {
  id: string;
  name: string;
  description: string;
  techs: string[];
  category: 'all' | 'dotnet' | 'typescript' | 'go' | 'systems';
  githubUrl: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  levelPercentage: number;
  levelLabel: string;
  category: 'core' | 'tools';
  iconName: string;
}

export interface DevFact {
  id: number;
  fact: string;
  authorOrSource: string;
  tag: string;
}

export interface CertificationPlaceholder {
  id: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Upcoming';
  targetArea: string;
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  icon: string;
  actionType: 'copy' | 'link';
  actionUrl?: string;
}
