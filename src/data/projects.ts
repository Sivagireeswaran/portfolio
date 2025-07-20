import { Project } from '../types';
import { Laptop, Store, Layout, PenTool, FileCode, Palette, Database, Cloud, Activity, BookOpen, Users, BarChart2, Shield, Mail, Map } from 'lucide-react';
import React from 'react';

export const projects: Project[] = [
  {
    id: 'ai-resume-agent',
    title: 'AI Resume Agent',
    description: 'An AI-driven resume assistant utilizing NLP and Flask APIs for structured data extraction and candidate profiling.',
    thumbnail: '/ai_agent.png',
    images: [
      '/ai_agent.png'
    ],
    role: 'Lead Developer',
    year: '2025',
    client: 'Personal Project',
    tags: ['Python', 'Flask', 'OpenAI', 'NLP'],
    objectives: 'Streamline structured data extraction for enhanced candidate profiling using AI.',
    outcome: 'Reduced response latency by 25% and improved resume query interpretation.',
    features: [
      'NLP-powered resume parsing',
      'Context-aware responses',
      'API efficiency improvements',
      'Query-based search algorithms',
      'Resume analytics dashboard'
    ],
    link: '',
    icon: React.createElement(Cloud)
  },
  {
    id: 'db-sync-email-report',
    title: 'Database Synchronization & Email Reporting System',
    description: 'A resilient framework bridging SQL Server and MySQL, with automated email reporting and scheduling.',
    thumbnail: '/database.png',
    images: [
      '/database.png'
    ],
    role: 'System Architect',
    year: '2025',
    client: 'SCM Cube Technologies',
    tags: ['C#', 'SQL Server', 'MySQL', 'SMTP'],
    objectives: 'Automate data transfers and reporting between SQL Server and MySQL.',
    outcome: 'Mitigated data loss risks by 40% and ensured timely enterprise updates.',
    features: [
      'Cross-platform DB sync',
      'Automated email reports',
      'Flexible scheduling',
      'Secure data transfer',
      'Performance monitoring'
    ],
    link: '',
    icon: React.createElement(Database)
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A visually striking developer portfolio inspired by the VS Code theme, with smooth animations and dark mode.',
    thumbnail: '/vs_code.png',
    images: [
      '/vs_code.png'
    ],
    role: 'Frontend Developer',
    year: '2025',
    client: 'Personal Project',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    objectives: 'Showcase developer skills and projects with a modern, responsive design.',
    outcome: 'Improved personal branding and discoverability.',
    features: [
      'VS Code-inspired UI',
      'Dark mode',
      'Reusable components',
      'Smooth animations',
      'Accessibility features'
    ],
    link: '',
    icon: React.createElement(Layout)
  },
  {
    id: 'hrms-enhancements',
    title: 'HRMS Enhancements',
    description: 'Enhanced Human Resource Management System with new screens, data visualization, and role-based permissions.',
    thumbnail: '/hrms.png',
    images: [
      '/hrms.png'
    ],
    role: 'Full Stack Developer',
    year: '2025',
    client: 'SCM Cube Technologies',
    tags: ['Angular', 'React', 'JavaScript', 'MySQL'],
    objectives: 'Boost system response efficiency and empower HR teams with actionable insights.',
    outcome: 'Decreased load times and improved strategic decision-making.',
    features: [
      'Role-based permissions',
      'Interactive dashboards',
      'Exportable reports',
      'Optimized API workflows',
      'Enhanced data visualization'
    ],
    link: '',
    icon: React.createElement(Users)
  },
  {
    id: 'activity-monitor',
    title: 'Activity Monitor',
    description: 'A comprehensive monitoring tool for tracking system performance and user activity across 30+ workstations.',
    thumbnail: '/actmon.png',
    images: [
      '/actmon.png'
    ],
    role: 'Software Developer Intern',
    year: '2024',
    client: 'SCM Cube Technologies',
    tags: ['C#', '.NET', 'MySQL'],
    objectives: 'Enable real-time tracking and proactive IT maintenance.',
    outcome: 'Reduced analysis time by 40% and improved IT resource allocation.',
    features: [
      'Real-time dashboards',
      'Distributed logging',
      'Automated alerts',
      'Trend analytics',
      'Asset tracking'
    ],
    link: '',
    icon: React.createElement(Activity)
  },
  {
    id: 'smog-sentinel',
    title: 'Smog Sentinel System',
    description: 'A machine learning system for real-time air quality prediction and pollution data analytics.',
    thumbnail: 'https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&fit=crop&w=800&q=80',
    images: [
      'https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&fit=crop&w=800&q=80'
    ],
    role: 'ML Engineer',
    year: '2024',
    client: 'Personal Project',
    tags: ['Python', 'Machine Learning', 'Google Colab', 'Kaggle'],
    objectives: 'Predict air quality levels and provide actionable insights for public health.',
    outcome: 'Achieved 95% accuracy and improved decision-making for environmental agencies.',
    features: [
      'Real-time pollution prediction',
      'Distributed ML models',
      'Fast response times',
      'Actionable analytics',
      'Public health insights'
    ],
    link: '',
    icon: React.createElement(BarChart2)
  },
  {
    id: 'offensive-meme-classification',
    title: 'Multimodal Offensive Meme Classification',
    description: 'Developed a scalable classifier integrating stacked LSTM and VGG16 architectures for distributed content moderation, combining image and text modalities to enhance offensive meme detection. This project culminated in a peer-reviewed publication at IEEE Xplore.',
    thumbnail: '/multimodal.png',
    images: [
      '/multimodal.png'
    ],
    role: 'Researcher',
    year: '2024',
    client: 'Academic',
    tags: ['Python', 'Deep Learning', 'LSTM', 'VGG16'],
    objectives: 'Improve offensive content detection by integrating image and text modalities.',
    outcome: 'Achieved 92% classification accuracy and improved detection precision by 15%. Recognized with a publication in IEEE Xplore.',
    features: [
      'Stacked LSTM & VGG16',
      'Multimodal content analysis',
      'Distributed moderation',
      'Bias mitigation',
      'Team collaboration'
    ],
    link: 'https://ieeexplore.ieee.org/abstract/document/10899719',
    icon: React.createElement(BookOpen),
    paperLink: 'https://ieeexplore.ieee.org/abstract/document/10899719'
  },
  {
    id: 'route-navigator',
    title: 'Route Navigator',
    description: 'A web application for efficient route navigation and optimal path computation in distributed systems.',
    thumbnail: '/rn.png',
    images: [
      '/rn.png'
    ],
    role: 'Developer',
    year: '2024',
    client: 'Personal Project',
    tags: ['Java', 'Python', 'Distributed Systems'],
    objectives: 'Enhance navigation efficiency and user experience in distributed environments.',
    outcome: 'Increased computational speed by 40% and improved user experience.',
    features: [
      'Optimal path computation',
      'Real-time data analysis',
      'Fault-tolerant system',
      'User-friendly interface',
      'Leadership in brainstorming'
    ],
    link: '',
    icon: React.createElement(Map)
  },
  {
    id: 'blockhouse-sor-backtest',
    title: 'Smart Order Router Backtest (Cont & Kukanov Model)',
    description: 'Implements and evaluates a Smart Order Router using the static cost optimization framework by Cont & Kukanov for optimal order placement in limit order markets.',
    thumbnail: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&fit=crop&w=800&q=80',
    images: [
      'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&fit=crop&w=800&q=80'
    ],
    role: 'Quantitative Developer',
    year: '2024',
    client: 'Blockhouse',
    tags: ['Python', 'Backtesting', 'Finance', 'Optimization'],
    objectives: 'Minimize total cost of executing a 5000-share buy order across multiple venues using penalty-based allocation.',
    outcome: 'Beats best-ask baseline by multiple basis points; script runs in under two minutes.',
    features: [
      'Static cost optimization (Cont & Kukanov)',
      'Penalty-based allocation',
      'Grid search calibration',
      'Baseline comparison (Best Ask, TWAP, VWAP)',
      'Structured results output',
      'Future-ready for queue modeling'
    ],
    link: '',
    icon: React.createElement(BarChart2)
  },
  {
    id: 'gamanet-area-recognition',
    title: 'Raster Area Recognition ML App',
    description: 'A C# offline application with a machine learning module to recognize the number of areas from raster images, trained and tested on sample pictures.',
    thumbnail: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&fit=crop&w=800&q=80',
    images: [
      'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&fit=crop&w=800&q=80'
    ],
    role: 'ML Developer',
    year: '2024',
    client: 'Gamanet',
    tags: ['C#', 'Machine Learning', 'Image Processing'],
    objectives: 'Recognize and count distinct areas in raster images using ML.',
    outcome: 'Accurately recognizes and counts areas in test images; robust offline performance.',
    features: [
      'C# desktop application',
      'Custom ML module',
      'Raster image analysis',
      'Sample-based learning',
      'Offline capability'
    ],
    link: '',
    icon: React.createElement(Palette)
  }
];