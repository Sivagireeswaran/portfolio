import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Services from '../components/home/Services';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Professional Work & Services</title>
        <meta name="description" content="Professional portfolio showcasing creative work, services, and expertise in design and development." />
      </Helmet>
      
      <Hero />
      <FeaturedProjects />
      <Services />
      <ContactCTA />
    </>
  );
};

export default HomePage;