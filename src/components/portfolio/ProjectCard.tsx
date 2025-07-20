import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative overflow-hidden">
        <div className="relative">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Fixed overlay gradient */}
          <div className="absolute inset-0 
  bg-gradient-to-t from-black/50 via-black/20 to-transparent 
  dark:bg-transparent 
  opacity-0 group-hover:opacity-100 
  transition-all duration-300 flex items-end">
  <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
    <div className="flex flex-wrap gap-2 mb-2">
      {project.tags.slice(0, 3).map((tag, idx) => (
        <span
          key={idx}
          className="text-xs px-2 py-1 bg-white/30 text-white rounded-full backdrop-blur-sm"
        >
          {tag}
        </span>
      ))}
    </div>
    <Link
      to={`/portfolio#${project.id}`}
      className="text-white hover:text-white/80 text-sm flex items-center transition-colors"
    >
      <span>View Details</span>
      <ExternalLink className="ml-1 h-3 w-3" />
    </Link>
  </div>
</div>

        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.year}
          </span>
          <Link
            to={`/portfolio#${project.id}`}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm font-medium transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
  