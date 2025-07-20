import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  role: string;
  year: string;
  client: string;
  tags: string[];
  objectives: string;
  outcome: string;
  features: string[];
  link?: string;
  icon: ReactNode;
  paperLink?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}