import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax based on scroll
  const { scrollY } = useScroll();
  const yOrb1 = useTransform(scrollY, [0, 600], [0, -60]);
  const yOrb2 = useTransform(scrollY, [0, 600], [0, 40]);
  const yOrb3 = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ y: -20, opacity: 0.2 }}
          animate={{ y: [ -20, 10, -20 ], opacity: 0.25 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          style={{ y: yOrb1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ y: 0, opacity: 0.2 }}
          animate={{ y: [ 0, -15, 0 ], opacity: 0.25 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut', delay: 0.6 }}
          style={{ y: yOrb2 }}
          className="absolute top-1/3 -left-20 w-60 h-60 bg-secondary-200 dark:bg-secondary-900 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ y: 10, opacity: 0.2 }}
          animate={{ y: [ 10, -10, 10 ], opacity: 0.25 }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut', delay: 0.3 }}
          style={{ y: yOrb3 }}
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent-200 dark:bg-accent-900 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 min-h-[70vh]">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:items-start"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100 mb-8 tracking-tight">
              Crafting Digital{' '}
              <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-clip-text text-transparent inline-block mt-2">
                Experiences
              </span>{' '}
              That Inspire
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed">
            Solving real-world problems with AI from offensive meme detection to AI-powered marketing tools. I blend full-stack engineering with deep learning and NLP to build impactful, scalable systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/portfolio" size="lg" className="shadow-lg shadow-primary-500/20">
                View My Work
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="backdrop-blur-sm">
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center items-center mb-10 lg:mb-0"
          >
            <div className="relative w-full max-w-4xl aspect-[1011/303]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 dark:from-primary-700/20 dark:to-secondary-700/20 rounded-3xl shadow-2xl"></div>
              <img
                src="/portfolio-pic.jpg"
                alt="Creative workspace"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-full object-contain border-4 border-white dark:border-gray-900 transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(80,80,200,0.25)] hover:border-primary-400 dark:hover:border-primary-500"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;