import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { services } from '../data/services';
import ContactCTA from '../components/home/ContactCTA';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Services | Portfolio</title>
        <meta
          name="description"
          content="Explore the comprehensive range of services I offer, from software development to AI solutions."
        />
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Services I Offer" 
            subtitle="Comprehensive solutions tailored to your specific needs and objectives."
            center
          />

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I provide end-to-end services to help businesses establish a strong digital presence, 
              leverage AI technologies, and achieve their technical goals. Each service is customized 
              to meet your unique requirements and challenges.
            </p>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  {/* Icon with background */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                      >
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-primary-500/25"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-20 border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">My Development Process</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  I follow a structured, agile approach to ensure each project is completed efficiently and exceeds expectations. 
                  My process is designed to keep you involved at every stage while delivering results that drive real business value.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button to="/contact" size="lg" className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600">
                    Start a Project
                  </Button>
                </motion.div>
              </div>
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-600 dark:text-primary-400 font-bold text-lg mr-6">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Discovery & Planning</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">I start by understanding your business goals, technical requirements, and target audience to create a comprehensive project roadmap and architecture plan.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-600 dark:text-primary-400 font-bold text-lg mr-6">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Development & Testing</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">I develop your solution using modern technologies and best practices, with continuous testing and regular updates to ensure quality and performance.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-600 dark:text-primary-400 font-bold text-lg mr-6">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Deployment & Support</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">I handle deployment, provide comprehensive documentation, and offer ongoing support to ensure your solution continues to perform optimally.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">How long does a typical project take?</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Project timelines vary based on complexity. A simple web application might take 2-4 weeks, while complex AI systems can take 2-3 months. I provide detailed timelines during our initial consultation.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">What is your pricing structure?</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">I offer flexible pricing based on project scope and requirements. After understanding your needs, I provide detailed proposals with transparent pricing. I can work on project-based or hourly rates.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Do you offer ongoing maintenance?</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Yes, I offer comprehensive maintenance packages to keep your systems secure, updated, and performing optimally. These can be customized to your specific needs and budget.</p>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Can you work with existing systems?</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Absolutely! I specialize in integrating with existing systems and can work with your current infrastructure. I'll analyze your setup and recommend the best approach for seamless integration.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Do you work with clients remotely?</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Yes, I work with clients globally and have established efficient remote collaboration processes. We'll communicate regularly through video calls, email, and project management tools.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">What technologies do you specialize in?</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">I specialize in modern technologies including React, Python, C#, machine learning frameworks, cloud platforms, and AI/ML solutions. I stay updated with the latest industry trends and best practices.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactCTA />
    </>
  );
};

export default ServicesPage;