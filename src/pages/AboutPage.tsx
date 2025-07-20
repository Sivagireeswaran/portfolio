import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/ui/SectionTitle';
import { CheckCircle, Calendar, GraduationCap, Briefcase, Award, BookOpen, Users, Cloud, Database, Activity, BarChart2, Map, Mail, MapPin, Download, ExternalLink } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skills = [
    'Python', 'C#', 'Java', 'HTML/CSS', 'SQL', 'MySQL',
    'React', 'Angular', 'JavaScript', 'Flask', 'Machine Learning', 'Deep Learning',
    'Distributed Systems', 'OOPS', 'Data Structures', 'Computer Networks',
    'Hadoop', 'Scala', 'SMTP', 'GitHub', 'VS Code', 'Google Cloud Platform',
    'OpenCV', 'Android Studio', 'Microsoft Suite', 'Google Suite',
    // Added frameworks and tools
    'Next.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'Django', 'FastAPI', '.NET Core', 'AWS',
    'React Testing Library', 'PyTest', 'Postman', 'MongoDB', 'PostgreSQL', 'Redis', 'Firebase',
    'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn',
    'Linux', 'Shell Scripting (Bash, PowerShell)'
  ];

  const experience = [
    {
      title: 'AI Intern',
      company: 'NYX AI (Remote)',
      period: 'June 2025 – Present',
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Conducting research on advanced image generation algorithms and analyzing their interplay with natural language processing (NLP) models to explore multi-modal AI capabilities.</li>
        </ul>
      ),
    },
    {
      title: 'Software Developer Intern',
      company: 'SCM Cube Technologies, Chennai, Tamil Nadu',
      period: 'November 2024 – May 2025',
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Designed and implemented an enterprise-grade Activity Monitor using C#, .NET, and MySQL, deployed across 30+ computers to analyze system performance, track usage patterns, and manage asset inventories in real-time.</li>
          <li>Enhanced Human Resource Management System (HRMS) by designing new screens and refining user experience, leveraging Angular, React, and JavaScript to improve operational efficiency and data accessibility.</li>
          <li>Architected a robust database synchronization tool, integrating SQL Server with MySQL on Linux to automate data transfers and enhance cross-platform accessibility, while also implementing an automated email reporting system in C# that leveraged SMTP to deliver structured reports from SQL Server, securely storing insights in a MySQL database for improved administrative decision-making.</li>
        </ul>
      ),
    },
    {
      title: 'Prompt Engineer Intern',
      company: 'VKCI Groups (Remote)',
      period: 'April 2024 – October 2024',
      description: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Engineered advanced prompts for ChatGPT, LLaMA, and Claude, optimizing zero-shot and few-shot performance across summarization, question answering, and code generation tasks.</li>
          <li>Developed a dynamic prompt testing framework to systematically evaluate LLM outputs for accuracy, relevance, and hallucination, using Python and OpenAI APIs.</li>
          <li>Collaborated on the design of a retrieval-augmented generation (RAG) pipeline using FAISS and LangChain, enabling context-aware response generation from internal documentation.</li>
          <li>Led internal documentation on prompt engineering strategies, maintaining a knowledge base of effective templates for different LLM use cases, which improved prompt performance consistency by 30%.</li>
        </ul>
      ),
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Amrita Vishwa Vidyapeetham, Chennai, Tamil Nadu',
      year: 'Oct 2021 – May 2025',
      description: ''
    }
  ];

  const publications = [
    {
      title: 'Advancing Offensive Meme Classification through BERT and VGG-19',
      date: 'Jan 2025 – Present',
      description: 'Researching multimodal offensive meme classification, leveraging BERT for text analysis and VGG-19 for image processing.'
    },
    {
      title: 'Two-stage Classification of Offensive Meme Content and Analysis',
      date: 'Sep 2024',
      description: (
        <>
          Published research on a two-stage classification approach integrating deep learning for content moderation. Achieved 83% accuracy for offensive content.<br />
          <span className="block mt-2 text-xs text-gray-600 dark:text-gray-400">
            DOI: <a href="https://doi.org/10.1109/CICT64037.2024.10899719" target="_blank" rel="noopener noreferrer" className="underline text-primary-600 hover:text-primary-800 dark:hover:text-primary-400">10.1109/CICT64037.2024.10899719</a> — IEEE Xplore: <a href="https://ieeexplore.ieee.org/document/10823312" target="_blank" rel="noopener noreferrer" className="underline text-primary-600 hover:text-primary-800 dark:hover:text-primary-400">ieeexplore.ieee.org/document/10823312</a>
          </span>
        </>
      )
    }
  ];

  const certifications = [
    'AWS Academy Graduate – Cloud Architecting',
    'IBM – Virtual Collaboration & Communication',
    'Rajyapuraskar Award – Bharat Scouts & Guides'
  ];

  const extracurriculars = [
    {
      title: "Tantrotsav'24 Organizer",
      org: 'Amrita Vishwa Vidyapeetham',
      period: 'Mar 2024',
      description: 'Orchestrated a national-level tech fest, managing 1500+ participants and leading cross-functional coordination.'
    },
    {
      title: 'Google Developers Students Club – Marketing & PR Lead',
      org: 'Amrita Vishwa Vidyapeetham',
      period: 'Aug 2023 – Jul 2024',
      description: 'Pioneered the GDSC Marketing and PR Lead role, improving brand presence by 25% and driving a 40% increase in student involvement.'
    },
    {
      title: 'Bharat Scouts & Guides – Rajyapuraskar Awardee',
      org: 'Bharat Scouts & Guides',
      period: 'Jul 2015 – Present',
      description: 'Earned the highest state-level recognition for Scouts and Guides for exemplary performance in service and discipline.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About | Sivagireeswaran S</title>
        <meta name="description" content="Sivagireeswaran S - Software Developer, ML Researcher, and Tech Enthusiast." />
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="About Me" center />

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl transform rotate-3"></div>
                <img
                  src="/imagee.jpg"
                  alt="Sivagireeswaran S portrait"
                  className="relative z-10 rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100">Sivagireeswaran S</h2>
                <h3 className="text-xl text-primary-600 dark:text-primary-400 mb-4 font-semibold">Software Developer | ML Researcher</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-primary-500" /> 
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-primary-500" /> 
                  <span>sivasath287@gmail.com</span>
                </div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-4"
              >
                <a
                  href="/Sivagireeswaran.S_CV.pdf"
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  <Download className="w-5 h-5" /> Download CV
                </a>
              </motion.div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I am a passionate software developer and researcher with a strong background in distributed systems, machine learning, and full-stack development. I enjoy building scalable solutions and contributing to impactful projects in both academic and industry settings.
              </p>

              {/* Skills Preview */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 6).map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div ref={timelineRef} className="mb-20">
            <SectionTitle title="My Journey" subtitle="Professional Timeline" center />
            <div className="relative w-full max-w-6xl mx-auto overflow-x-auto">
              {/* Horizontal Timeline Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 dark:from-primary-800 dark:via-primary-600 dark:to-primary-400 z-0"></div>
              <div className="flex justify-between items-center relative z-10 min-w-[700px]">
                {[
                  { year: '2003', title: 'Journey Begins', desc: 'Born & started my journey', icon: '👶' },
                  { year: '2021', title: 'B.Tech Degree', desc: 'Started B.Tech in Computer Science', icon: '🎓' },
                  { year: '2024', title: 'VKCI Group', desc: 'Prompt Engineer Intern', icon: '🤖' },
                  { year: '2024', title: 'SCM Cube', desc: 'Software Developer Intern', icon: '💻' },
                  { year: '2025', title: 'NYX AI', desc: 'AI Intern (Current)', icon: '🚀' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex flex-col items-center w-40 min-w-[160px] relative"
                  >
                    {/* Card above or below the line */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={timelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                      className={`bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 mb-6 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl mb-2 mx-auto">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </motion.div>
                    {/* Timeline Node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                      className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg border-4 border-white dark:border-gray-800 z-10"
                    >
                      {item.year}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <SectionTitle title="Experience" subtitle="Professional Journey" />
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="text-primary-600 dark:text-primary-400 h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{job.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{job.company}</p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-16">
                    {job.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <SectionTitle title="Technical Skills" subtitle="Languages, Tools & Technologies" />
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700"
                >
                  <div className="flex items-center">
                    <CheckCircle className="text-primary-500 mr-3 h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <SectionTitle title="Education" subtitle="Academic Background" />
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="text-primary-600 dark:text-primary-400 h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{edu.degree}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.institution}</p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications Section */}
          <div className="mb-20">
            <SectionTitle title="Publications" subtitle="Research & Papers" />
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-800/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="text-accent-600 dark:text-accent-400 h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{pub.title}</h3>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{pub.date}</span>
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">{pub.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-20">
            <SectionTitle title="Certifications" subtitle="Professional Credentials" />
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <ul className="space-y-3 mb-6">
                {certifications.map((cert, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle className="text-primary-500 mr-3 h-5 w-5 flex-shrink-0" />
                    {cert}
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center"
              >
                <a
                  href="https://drive.google.com/drive/folders/1rwxgJuE1z3FEStHd3KbxKuhsrtSPYWjl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline text-primary-600 hover:text-primary-800 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  <img
                    src="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png"
                    alt="Google Drive"
                    className="w-7 h-7 mr-2 inline-block align-middle"
                  />
                  <span className="font-medium">Certifications Repository – For more Certification</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Extracurriculars Section */}
          <div className="mb-20">
            <SectionTitle title="Extracurriculars" subtitle="Leadership & Community" />
            <div className="space-y-8">
              {extracurriculars.map((extra, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-800/30 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="text-accent-600 dark:text-accent-400 h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{extra.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{extra.org}</p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{extra.period}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{extra.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;