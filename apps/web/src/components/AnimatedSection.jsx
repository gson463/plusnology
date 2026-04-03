import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const yOffset = direction === 'up' ? 40 : direction === 'down' ? -40 : 0;
  const xOffset = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth easeOut
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;