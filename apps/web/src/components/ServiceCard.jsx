import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils.js';
import { BRAND_LOGO_SRC } from '@/lib/brand.js';

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  className,
  index = 0,
  isInView = true,
  detailPath,
  heroImage,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.15 
      }
    }
  };

  const cardBody = (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -8 }}
      className={cn(
        'group relative bg-card rounded-[2rem] shadow-service-card hover:shadow-service-card-hover border border-border/50 overflow-hidden flex flex-col transition-all duration-500 h-full',
        detailPath && 'cursor-pointer',
        className
      )}
    >
      {/* Top Image Section with Inner Padding for Premium Feel */}
      <div className="w-full aspect-[4/3] overflow-hidden relative bg-muted/30 shrink-0 p-2 pb-0">
        <div className="w-full h-full rounded-t-[1.5rem] rounded-b-xl overflow-hidden relative flex items-center justify-center bg-white/50 dark:bg-black/20">
          {heroImage ? (
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <img
              src={BRAND_LOGO_SRC}
              alt="Plusnology Logo"
              className="h-20 md:h-24 w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm"
            />
          )}
        </div>
        
        {/* Floating Icon Overlapping Image */}
        <div className="absolute bottom-4 left-6 bg-background p-3.5 rounded-2xl shadow-lg border border-border/50 group-hover:-translate-y-2 transition-transform duration-500 z-10">
          <Icon className="text-[#0479FB] w-7 h-7" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 pt-8 flex flex-col flex-1 relative z-10">
        <h3 className="font-bold text-2xl text-foreground mb-4 group-hover:text-[#0479FB] transition-colors duration-300 text-balance">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mt-auto text-base">
          {description}
        </p>
        {detailPath && (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0479FB] mt-4 group-hover:gap-2 transition-all">
            View service
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </div>

      {/* Decorative bottom border highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0479FB] to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
    </motion.div>
  );

  if (detailPath) {
    return (
      <Link to={detailPath} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0479FB] focus-visible:ring-offset-2 rounded-[2rem]">
        {cardBody}
      </Link>
    );
  }

  return cardBody;
};

export default ServiceCard;