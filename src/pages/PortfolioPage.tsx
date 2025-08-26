import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { Project } from '../types';
import ProjectCard from '../components/portfolio/ProjectCard';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags)))];
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.tags.includes(selectedCategory));

  useEffect(() => {
    // Check if there's a hash in the URL to open a specific project
    const hash = window.location.hash.substring(1);
    if (hash) {
      const project = projects.find((p) => p.id === hash);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, []);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // Update URL hash
    window.history.pushState(null, '', `#${project.id}`);
  };

  const closeProject = () => {
    setSelectedProject(null);
    // Remove hash from URL
    window.history.pushState(null, '', window.location.pathname);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | My Work</title>
        <meta
          name="description"
          content="Explore my portfolio of web development and design projects across various industries."
        />
      </Helmet>

      <div className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="My Portfolio" 
            subtitle="Explore my recent projects and creative work"
            center
          />

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.slice(0, 8).map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                onMouseMove={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  const rect = target.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  target.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = '';
                }}
                className="relative"
              >
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <div key={project.id} onClick={() => openProject(project)} className="cursor-pointer">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto"
                onClick={closeProject}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <div className="relative h-72 sm:h-96 bg-gray-200 overflow-hidden">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Image Navigation */}
                      {selectedProject.images.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                          {selectedProject.images.map((_, idx) => (
                            <button
                              key={idx}
                              className={`w-2 h-2 rounded-full ${
                                currentImageIndex === idx ? 'bg-white' : 'bg-white/50'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                              }}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Previous/Next Buttons */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage();
                            }}
                            aria-label="Previous image"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage();
                            }}
                            aria-label="Next image"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                    
                    <button
                      className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm"
                      onClick={closeProject}
                      aria-label="Close modal"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Overview</h3>
                        <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                        
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Objectives</h3>
                        <p className="text-gray-700 mb-6">{selectedProject.objectives}</p>
                        
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Outcome</h3>
                        <p className="text-gray-700 mb-6">{selectedProject.outcome}</p>
                        
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                        <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Project Details</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-500">Client</p>
                            <p className="font-medium text-gray-900">{selectedProject.client}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Year</p>
                            <p className="font-medium text-gray-900">{selectedProject.year}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Role</p>
                            <p className="font-medium text-gray-900">{selectedProject.role}</p>
                          </div>
                          
                          {selectedProject.link && (
                            <div className="pt-2">
                              <Button
                                href={selectedProject.link}
                                external
                                icon={<ExternalLink className="h-4 w-4" />}
                                className="w-full"
                              >
                                Visit Project
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
};

export default PortfolioPage;