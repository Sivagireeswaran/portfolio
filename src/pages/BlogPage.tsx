import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Tag, User } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { blogPosts } from '../data/blog';

const BlogPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Extract unique categories from blog posts
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog | Portfolio</title>
        <meta
          name="description"
          content="Read articles about web development, design, and digital strategy."
        />
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Blog & Articles" 
            subtitle="Insights, tutorials, and thoughts on design and development"
            center
          />

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-2/5">
                  <img
                    className="h-64 w-full object-cover md:h-full"
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                  />
                </div>
                <div className="p-8 md:w-3/5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${blogPosts[0].id}`}
                    className="block mt-2 text-2xl font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {blogPosts[0].title}
                  </Link>
                  <p className="mt-3 text-gray-600">{blogPosts[0].excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                    </div>
                    <div className="ml-6 flex items-center">
                      <Tag className="h-4 w-4 text-gray-500 mr-1" />
                      <div className="flex space-x-2">
                        {blogPosts[0].tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-sm text-gray-600">
                            {tag}
                            {idx < Math.min(blogPosts[0].tags.length, 2) - 1 && ', '}
                          </span>
                        ))}
                        {blogPosts[0].tags.length > 2 && <span className="text-sm text-gray-600">...</span>}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/blog/${blogPosts[0].id}`}
                      className="text-primary-600 hover:text-primary-800 font-medium transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                  <img
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                    src={post.image}
                    alt={post.title}
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="block mt-2 text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm text-gray-600">{post.author}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 hover:text-primary-800 font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;