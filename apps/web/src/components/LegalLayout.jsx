import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const LegalLayout = ({ title, metaDescription, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>{title} - Plusnology</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <Header />

      <main className="section-spacing pt-8 pb-20">
        <div className="max-w-3xl mx-auto container-padding">
          <p className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="text-[#0479FB] hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">{title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: 4 April 2026</p>
          <div className="space-y-8 text-[15px] md:text-base leading-relaxed text-foreground/90">{children}</div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default LegalLayout;
