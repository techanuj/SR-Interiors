import React from 'react';
import { PageData, NavItem } from './types';
import { 
  Building2, 
  Paintbrush, 
  Ruler, 
  Crown, 
  Users, 
  Briefcase, 
  Phone, 
  HardHat, 
  Sofa,
  Award,
  Gem
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', pageId: 'home' },
  { label: 'About', pageId: 'about' },
  { label: 'Services', pageId: 'services' },
  { label: 'Residential', pageId: 'residential' },
  { label: 'Commercial', pageId: 'commercial' },
  { label: 'Civil', pageId: 'civil' },
  { label: 'Portfolio', pageId: 'portfolio' },
  { label: 'Process', pageId: 'process' },
  { label: 'Careers', pageId: 'careers' },
  { label: 'Contact', pageId: 'contact' },
];

const LOREM = "Experience the epitome of luxury and precision. We craft environments that transcend the ordinary, blending aesthetics with structural integrity to deliver masterpieces.";

// Helper to generate a placeholder image with specific dimensions
const img = (w: number, h: number, seed: number) => `https://picsum.photos/${w}/${h}?random=${seed}`;

const generateCommonSections = (pageTitle: string, indexOffset: number) => [
  {
    id: `faq-${indexOffset}`,
    type: 'FAQ',
    title: 'Common Questions',
    subtitle: 'Expert Answers',
    content: [
      { q: `What is the timeline for a typical ${pageTitle} project?`, a: "Timelines vary by complexity, but we strictly adhere to our charted schedules, typically ranging from 3-12 months." },
      { q: "Do you handle procurement?", a: "Yes, we handle end-to-end procurement of luxury materials from global suppliers." },
      { q: "Is consultation free?", a: "We offer an initial complimentary discovery call to align on vision and scope." }
    ]
  },
  {
    id: `cta-${indexOffset}`,
    type: 'CTA',
    title: 'Ready to Transform Your Space?',
    subtitle: 'Book a Consultation',
    description: "Let us bring your vision to life with our signature touch of elegance."
  }
];

export const PAGES: Record<string, PageData> = {
  home: {
    id: 'home',
    slug: '/',
    title: 'Home',
    sections: [
      {
        id: 'hero',
        type: 'HERO',
        title: 'Redefining Ultra-Luxury Living',
        subtitle: 'SR Interiors & Constructions',
        description: 'Where architectural mastery meets bespoke interior elegance.',
        backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
      },
      {
        id: 'marquee',
        type: 'MARQUEE',
        content: ['Interiors', 'Architecture', 'Construction', 'Landscape', 'Bespoke Furniture', 'Project Management', 'Luxury Styling']
      },
      {
        id: 'intro',
        type: 'TEXT_IMAGE',
        title: 'A Legacy of Elegance',
        subtitle: 'About Us',
        description: 'SR Interiors & Constructions stands at the vanguard of luxury real estate development. We do not just build; we curate lifestyles for the elite.',
        backgroundImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
      },
      {
        id: 'services-3d',
        type: 'GRID_CARDS',
        title: 'Our Expertise',
        subtitle: 'Core Services',
        content: [
          { title: 'Residential Design', icon: <Sofa />, desc: 'Villas, Penthouses, and Estates.' },
          { title: 'Civil Construction', icon: <HardHat />, desc: 'Structural integrity meets modern engineering.' },
          { title: 'Commercial Spaces', icon: <Building2 />, desc: 'Offices and Retail spaces that inspire.' },
          { title: 'Turnkey Projects', icon: <Gem />, desc: 'Concept to handover, seamlessly executed.' },
        ]
      },
      {
        id: 'stats',
        type: 'STATS',
        content: [
          { label: 'Years of Excellence', value: '15+' },
          { label: 'Projects Completed', value: '450+' },
          { label: 'Design Awards', value: '32' },
          { label: 'Happy Families', value: '400+' },
        ]
      },
      {
        id: 'why-us',
        type: 'GRID_CARDS',
        title: 'The SR Advantage',
        subtitle: 'Why Choose Us',
        theme: 'glass',
        content: [
          { title: 'Premium Materials', icon: <Crown />, desc: 'Sourced from Italy and Germany.' },
          { title: 'Expert Team', icon: <Users />, desc: 'Architects with 20+ years experience.' },
          { title: 'On-Time Delivery', icon: <Briefcase />, desc: 'Zero compromise on timelines.' },
        ]
      },
      {
        id: 'featured-project',
        type: 'TEXT_IMAGE',
        title: 'The Golden Palm Villa',
        subtitle: 'Featured Project',
        description: 'A 12,000 sq.ft masterpiece featuring Italian marble flooring, automated lighting, and a cantilevered infinity pool.',
        backgroundImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop'
      },
      {
        id: 'gallery-mini',
        type: 'GALLERY',
        title: 'Recent Masterpieces',
        content: [img(600, 600, 1), img(600, 600, 2), img(600, 600, 3), img(600, 600, 4)]
      },
      {
        id: 'video',
        type: 'VIDEO',
        title: 'Cinematic Experience',
        description: 'Take a virtual tour of our latest penthouse project.',
        backgroundImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2074&auto=format&fit=crop'
      },
      {
        id: 'process-home',
        type: 'TIMELINE',
        title: 'Our Workflow',
        content: [
          { step: '01', title: 'Consultation', desc: 'Understanding your vision.' },
          { step: '02', title: 'Design', desc: '3D modeling and material selection.' },
          { step: '03', title: 'Execution', desc: 'Precision construction.' },
          { step: '04', title: 'Handover', desc: 'Welcome to your dream home.' },
        ]
      },
      {
        id: 'testimonials',
        type: 'TESTIMONIALS',
        title: 'Client Voices',
        content: [
          { name: 'Rajesh Malhotra', role: 'Industrialist', text: 'SR Interiors transformed our bare shell apartment into a palace.' },
          { name: 'Sarah Jenkins', role: 'CEO, TechCorp', text: 'Professional, punctual, and absolutely premium quality.' },
        ]
      },
      {
        id: 'team',
        type: 'TEAM',
        title: 'The Visionaries',
        content: [
          { name: 'S. Rao', role: 'Founder & Principal Architect', img: img(200, 200, 10) },
          { name: 'Elena D.', role: 'Head of Design', img: img(200, 200, 11) },
          { name: 'Mark T.', role: 'Structural Engineer', img: img(200, 200, 12) },
        ]
      },
      {
        id: 'pricing',
        type: 'PRICING',
        content: [
          { name: 'Essential Luxury', price: '₹2500/sq.ft', features: ['Standard Materials', '3D Designs', '6 Month Warranty'] },
          { name: 'Premium Elite', price: '₹4500/sq.ft', features: ['Italian Marble', 'VR Walkthrough', '2 Year Warranty'] },
          { name: 'Royal Bespoke', price: 'On Request', features: ['Imported Artifacts', 'Automation', 'Lifetime Support'] },
        ]
      },
      ...generateCommonSections('Project', 0)
    ] as any
  },
  about: {
    id: 'about',
    slug: '/about',
    title: 'About Us',
    sections: [
      {
        id: 'about-hero',
        type: 'HERO',
        title: 'Our Story',
        subtitle: 'Since 2008',
        description: 'Building dreams with unwavering commitment to quality and luxury.',
        backgroundImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'mission-vision',
        type: 'GRID_CARDS',
        title: 'Philosophy',
        content: [
          { title: 'Mission', desc: 'To democratize luxury through intelligent design.', icon: <Crown /> },
          { title: 'Vision', desc: 'To be the global standard for bespoke living.', icon: <Gem /> },
        ]
      },
      {
        id: 'founder',
        type: 'TEXT_IMAGE',
        title: 'Meet the Founder',
        description: 'Mr. S. Rao started this firm with a singular vision: to bridge the gap between architectural structural integrity and interior aesthetic perfection. With over 25 years of industry experience, his oversight ensures every brick laid is perfect.',
        backgroundImage: img(800, 1000, 55)
      },
      {
        id: 'history',
        type: 'TIMELINE',
        title: 'Our Journey',
        content: [
          { step: '2008', title: 'Inception', desc: 'Started as a boutique consultancy.' },
          { step: '2015', title: 'Expansion', desc: 'Opened Civil Construction wing.' },
          { step: '2020', title: 'Luxury Tech', desc: 'Integrated Smart Home solutions.' },
          { step: '2024', title: 'Global Reach', desc: 'First international project commissioned.' },
        ]
      },
      {
        id: 'values',
        type: 'LIST_OVERVIEW',
        title: 'Core Values',
        content: ['Transparency', 'Quality Assurance', 'Innovation', 'Sustainability', 'Client Centricity']
      },
      {
        id: 'stats-about',
        type: 'STATS',
        content: [
          { label: 'Skilled Workers', value: '200+' },
          { label: 'Architects', value: '15' },
          { label: 'Cities', value: '6' },
          { label: 'Awards', value: '32' },
        ]
      },
      {
        id: 'studio-tour',
        type: 'VIDEO',
        title: 'Our Design Studio',
        description: 'Where the magic happens. Visit our material library and VR lab.',
        backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069'
      },
      {
        id: 'certifications',
        type: 'GRID_CARDS',
        title: 'Certifications',
        content: [
          { title: 'ISO 9001', desc: 'Quality Management Certified', icon: <Award /> },
          { title: 'LEED Green', desc: 'Sustainable Building Practice', icon: <Award /> },
          { title: 'Safety First', desc: 'Zero Accident Policy', icon: <HardHat /> },
        ]
      },
      ...generateCommonSections('About', 1)
    ] as any
  },
  services: {
    id: 'services',
    slug: '/services',
    title: 'Services',
    sections: [
      {
        id: 'serv-hero',
        type: 'HERO',
        title: 'Holistic Solutions',
        subtitle: 'End-to-End Execution',
        backgroundImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000'
      },
      {
        id: 'serv-list',
        type: 'LIST_OVERVIEW',
        title: 'What We Offer',
        content: ['Architectural Planning', 'Interior Design', 'Civil Construction', 'Renovation', 'Landscape Design', 'Automation', 'Vastu Consultation']
      },
      {
        id: 'serv-resid',
        type: 'TEXT_IMAGE',
        title: 'Residential',
        description: 'From cozy apartments to sprawling villas, we design homes that reflect your personality.',
        backgroundImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2000'
      },
      {
        id: 'serv-comm',
        type: 'TEXT_IMAGE',
        title: 'Commercial',
        description: 'Workspaces that boost productivity and retail spaces that maximize footfall.',
        backgroundImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000'
      },
       {
        id: 'serv-civil',
        type: 'TEXT_IMAGE',
        title: 'Civil Works',
        description: 'Foundation to finish. We handle the heavy lifting with precision engineering.',
        backgroundImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000'
      },
      {
        id: 'tech',
        type: 'GRID_CARDS',
        title: 'Technology We Use',
        content: [
          { title: 'BIM Modeling', icon: <Ruler />, desc: 'For precise conflict detection.' },
          { title: 'VR Walkthroughs', icon: <Gem />, desc: 'Experience before building.' },
          { title: 'Laser Surveying', icon: <Ruler />, desc: 'Accuracy to the millimeter.' },
        ]
      },
      ...generateCommonSections('Service', 2)
    ] as any
  },
  // Generative filling for other pages to meet the "10 distinct pages" requirement without file overflow
  residential: {
    id: 'residential',
    slug: '/residential',
    title: 'Residential Design',
    sections: [
      { id: 'res-hero', type: 'HERO', title: 'Residential Sanctuaries', backgroundImage: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000' },
      { id: 'res-intro', type: 'TEXT_IMAGE', title: 'Living Rooms', description: 'The heart of the home, designed for comfort and grandeur.', backgroundImage: 'https://images.unsplash.com/photo-1615529182904-14819c35db37' },
      { id: 'res-kitchen', type: 'TEXT_IMAGE', title: 'Modular Kitchens', description: 'German hardware meets ergonomic design.', backgroundImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f' },
      { id: 'res-bed', type: 'TEXT_IMAGE', title: 'Master Suites', description: 'Your private retreat from the world.', backgroundImage: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae4' },
      { id: 'res-grid', type: 'GALLERY', content: [img(600,600,30), img(600,600,31), img(600,600,32), img(600,600,33)] },
      { id: 'res-features', type: 'LIST_OVERVIEW', title: 'Features', content: ['Walk-in Wardrobes', 'Home Theaters', 'Terrace Gardens', 'Smart Lighting'] },
       ...generateCommonSections('Residential', 3)
    ] as any
  },
  commercial: {
    id: 'commercial',
    slug: '/commercial',
    title: 'Commercial Design',
    sections: [
      { id: 'com-hero', type: 'HERO', title: 'Business Excellence', backgroundImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000' },
      { id: 'com-office', type: 'TEXT_IMAGE', title: 'Corporate Offices', description: 'Spaces that define your brand identity.', backgroundImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72' },
      { id: 'com-retail', type: 'TEXT_IMAGE', title: 'Retail & Showrooms', description: 'Layouts that guide customer flow and increase sales.', backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8' },
      { id: 'com-hosp', type: 'TEXT_IMAGE', title: 'Hospitality', description: 'Hotels and restaurants that create memories.', backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4' },
      ...generateCommonSections('Commercial', 4)
    ] as any
  },
  civil: {
    id: 'civil',
    slug: '/civil',
    title: 'Civil Construction',
    sections: [
      { id: 'civ-hero', type: 'HERO', title: 'Built to Last', backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000' },
      { id: 'civ-intro', type: 'TEXT_IMAGE', title: 'Structural Engineering', description: 'We use high-grade steel and cement mixtures for maximum durability.', backgroundImage: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c' },
      { id: 'civ-proc', type: 'TIMELINE', title: 'Construction Phases', content: [{step:'1', title: 'Excavation', desc:''}, {step:'2', title: 'Foundation', desc:''}, {step:'3', title: 'Structure', desc:''}, {step:'4', title: 'Finishing', desc:''}] },
      ...generateCommonSections('Civil', 5)
    ] as any
  },
  portfolio: {
    id: 'portfolio',
    slug: '/portfolio',
    title: 'Our Portfolio',
    sections: [
      { id: 'port-hero', type: 'HERO', title: 'Gallery of Dreams', backgroundImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000' },
      { id: 'port-grid', type: 'GALLERY', title:'Luxury Villas', content: [img(600,600,60), img(600,600,61), img(600,600,62), img(600,600,63), img(600,600,64), img(600,600,65)] },
      { id: 'port-vid', type: 'VIDEO', title: 'Project Highlights', backgroundImage: img(1200,600,66) },
      ...generateCommonSections('Portfolio', 6)
    ] as any
  },
  process: {
    id: 'process',
    slug: '/process',
    title: 'Our Process',
    sections: [
      { id: 'proc-hero', type: 'HERO', title: 'Methodology', backgroundImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000' },
      { id: 'proc-timeline', type: 'TIMELINE', title: 'The SR Standard', content: [{step:'01', title:'Meet', desc:'Initial Meeting'}, {step:'02', title:'Concept', desc:'Moodboards'}, {step:'03', title:'Design', desc:'CAD/3D'}, {step:'04', title:'Build', desc:'Construction'}, {step:'05', title:'Deliver', desc:'Handover'}] },
      { id: 'proc-qa', type: 'TEXT_IMAGE', title: 'Quality Checks', description: 'We perform 150+ quality checks before handover.', backgroundImage: img(800,600,70) },
      ...generateCommonSections('Process', 7)
    ] as any
  },
  careers: {
    id: 'careers',
    slug: '/careers',
    title: 'Careers',
    sections: [
      { id: 'car-hero', type: 'HERO', title: 'Join the Elite', backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000' },
      { id: 'car-list', type: 'LIST_OVERVIEW', title: 'Open Positions', content: ['Senior Interior Designer', 'Site Supervisor', '3D Visualizer', 'Sales Manager'] },
      { id: 'car-cult', type: 'TEXT_IMAGE', title: 'Culture', description: 'We foster creativity and precision.', backgroundImage: img(800,600,80) },
      ...generateCommonSections('Careers', 8)
    ] as any
  },
  contact: {
    id: 'contact',
    slug: '/contact',
    title: 'Contact Us',
    sections: [
      { id: 'cont-hero', type: 'HERO', title: 'Get in Touch', backgroundImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000' },
      { id: 'cont-form', type: 'CONTACT_FORM', title: 'Send a Message' },
      { id: 'cont-info', type: 'GRID_CARDS', title: 'Visit Us', content: [{title:'HQ', icon:<Building2/>, desc:'Golden Tower, Mumbai'}, {title:'Email', icon:<Users/>, desc:'hello@srinteriors.com'}, {title:'Phone', icon:<Phone/>, desc:'+91 98765 43210'}] },
    ] as any
  }
};
