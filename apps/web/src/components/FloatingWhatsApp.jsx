import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE } from '@/lib/whatsapp.js';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-2xl hover:shadow-[#25D366]/40 transition-shadow duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5 
      }}
      aria-label="Chat with us on WhatsApp"
    >
      {/* Using MessageCircle as lucide-react doesn't have a dedicated WhatsApp brand icon */}
      <MessageCircle 
        className="w-7 h-7 md:w-8 md:h-8 text-[#0479FB] transition-transform duration-300 group-hover:rotate-12" 
        strokeWidth={2.5}
      />
      
      {/* Ping animation effect for extra visibility */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping" style={{ animationDuration: '1.5s' }}></span>
    </motion.a>
  );
};

export default FloatingWhatsApp;