import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../ui/Button';

const ContactCTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -bottom-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
        <div className="absolute -left-20 top-20 w-60 h-60 bg-white rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Let's work together to create something amazing. Contact me today to discuss your project needs and how I can help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              to="/contact"
              className="bg-white/30 text-black hover:bg-gray-100 backdrop-blur-sm"
              size="lg"
            >
              Get in Touch
            </Button>
            <Button
              to="/portfolio"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              size="lg"
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;