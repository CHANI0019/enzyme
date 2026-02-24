import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { motion } from 'motion/react';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl aspect-[4/3]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div>
        <span className="text-primary text-xs font-black uppercase tracking-widest mb-2 block">{post.category}</span>
        <h4 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {post.title}
        </h4>
        <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </motion.div>
  );
};

export default BlogCard;
