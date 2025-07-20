import React from 'react';
import { 
  Code, 
  MessageSquare, 
  Package, 
  Globe, 
  BarChart2, 
  Database,
  Cpu,
  Zap
} from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Full-stack development solutions with expertise in modern technologies and scalable architectures.',
    icon: React.createElement(Code, { size: 36 }),
    features: [
      'Full-stack web applications',
      'API development & integration',
      'Database design & optimization',
      'Cloud deployment & DevOps',
      'Performance optimization'
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Specialized AI prompt design and optimization for enhanced LLM performance and accuracy.',
    icon: React.createElement(MessageSquare, { size: 36 }),
    features: [
      'LLM prompt optimization',
      'Zero-shot & few-shot learning',
      'RAG pipeline development',
      'AI model fine-tuning',
      'Prompt testing frameworks'
    ]
  },
  {
    id: 'product-development',
    title: 'Product Development',
    description: 'End-to-end product development from concept to deployment with user-centric design principles.',
    icon: React.createElement(Package, { size: 36 }),
    features: [
      'Product strategy & planning',
      'MVP development',
      'User research & testing',
      'Agile development cycles',
      'Product launch & iteration'
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Custom ML solutions for data analysis, prediction, and intelligent automation.',
    icon: React.createElement(Cpu, { size: 36 }),
    features: [
      'Custom ML model development',
      'Data preprocessing & analysis',
      'Model training & optimization',
      'Real-time prediction systems',
      'ML pipeline automation'
    ]
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Robust data infrastructure and ETL pipelines for scalable data processing.',
    icon: React.createElement(Database, { size: 36 }),
    features: [
      'Data pipeline development',
      'ETL process optimization',
      'Database synchronization',
      'Real-time data processing',
      'Data quality assurance'
    ]
  },
  {
    id: 'system-architecture',
    title: 'System Architecture',
    description: 'Scalable system design and distributed computing solutions for enterprise applications.',
    icon: React.createElement(Zap, { size: 36 }),
    features: [
      'Distributed system design',
      'Microservices architecture',
      'System performance optimization',
      'Scalability planning',
      'Infrastructure automation'
    ]
  }
];