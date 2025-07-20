import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, User, ArrowLeft, Share2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { blogPosts } from '../data/blog';
import { BlogPost } from '../types';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(post => post.id === id);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts (same category or shared tags)
      const related = blogPosts
        .filter(p => p.id !== id) // Exclude current post
        .filter(p => 
          p.category === currentPost.category || 
          p.tags.some(tag => currentPost.tags.includes(tag))
        )
        .slice(0, 3); // Get up to 3 related posts
      
      setRelatedPosts(related);
    } else {
      // Redirect if post not found
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Function to convert markdown to HTML (very simplified)
  const renderMarkdown = (markdown: string) => {
    // Convert headings
    let html = markdown
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-bold mt-4 mb-2">$1</h4>');
    
    // Convert paragraphs
    html = html.replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote)(.+$)/gm, '<p class="mb-4">$1</p>');
    
    // Convert lists
    html = html.replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/<\/li>\n<li/g, '</li><li');
    html = html.replace(/(<li.*<\/li>)/gms, '<ul class="list-disc ml-6 mb-4">$1</ul>');
    
    // Convert bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    return html;
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-8">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-3">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center mb-6">
                  <Tag className="h-4 w-4 text-gray-500 mr-2" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-sm text-gray-600">
                        {tag}
                        {idx < post.tags.length - 1 && ','}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 border-t border-gray-100 pt-6">
                  <div className="flex justify-end mb-8">
                    <button className="flex items-center text-gray-500 hover:text-primary-600 transition-colors">
                      <Share2 className="h-5 w-5 mr-1" />
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
                  />
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <SectionTitle title="Related Articles" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <Link to={`/blog/${relatedPost.id}`} className="block overflow-hidden">
                        <img
                          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                          src={relatedPost.image}
                          alt={relatedPost.title}
                        />
                      </Link>
                      <div className="p-4">
                        <span className="text-xs text-gray-500">{relatedPost.date}</span>
                        <Link
                          to={`/blog/${relatedPost.id}`}
                          className="block mt-2 text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;