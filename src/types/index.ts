export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Frontend' | 'Fullstack' | 'Web Apps' | 'Experiments';
  tags: string[];
  features: string[];
  architecture?: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Concept Prototype';
  placeholderNote?: string;
}

export interface TechItem {
  name: string;
  category: 'Core & Languages' | 'Frameworks & Libraries' | 'Styling & Motion' | 'Workflow & Tools';
  level: 'Learning & Building' | 'Proficient' | 'Exploring';
  icon: string; // key of lucide or custom svg
  accentColor: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
  status: 'Current' | 'Completed' | 'Upcoming';
  type: 'Education' | 'Milestone' | 'Exploration';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
