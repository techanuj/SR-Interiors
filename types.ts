import { LucideIcon } from "lucide-react";

export type SectionType = 
  | 'HERO' 
  | 'MARQUEE' 
  | 'TEXT_IMAGE' 
  | 'GRID_CARDS' 
  | 'STATS' 
  | 'GALLERY' 
  | 'VIDEO' 
  | 'TIMELINE' 
  | 'TESTIMONIALS' 
  | 'TEAM' 
  | 'PRICING' 
  | 'FAQ' 
  | 'CTA' 
  | 'CONTACT_FORM'
  | 'LIST_OVERVIEW';

export interface PageSection {
  id: string;
  type: SectionType;
  title?: string;
  subtitle?: string;
  description?: string;
  content?: any; // Flexible content based on type
  backgroundImage?: string;
  theme?: 'dark' | 'glass' | 'gold';
}

export interface PageData {
  id: string;
  slug: string;
  title: string;
  sections: PageSection[];
}

export interface NavItem {
  label: string;
  pageId: string;
}
