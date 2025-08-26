import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : ''} ${className}`}
    >
      <div className={`${center ? 'flex flex-col items-center' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </div>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`origin-left h-1 w-24 bg-gradient-to-r from-primary-600 to-accent-500 mt-4 rounded ${center ? 'mx-auto' : ''}`}
      />
    </motion.div>
  );
};

export default SectionTitle;