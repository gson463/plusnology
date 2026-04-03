import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PortfolioCard = ({ image, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl group relative"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center shadow-lg"
          >
            <ExternalLink className="text-white" size={18} />
          </motion.div>
        </div>
      </div>
      
      <div className="p-6 relative bg-gradient-card">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <h3 className="heading-card mb-2 text-balance group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-body text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;