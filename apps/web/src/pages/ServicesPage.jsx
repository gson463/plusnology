import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView } from 'framer-motion';
import { Monitor, Globe, Cpu, Smartphone, Layout, Palette, Cloud, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import { SERVICES } from '@/data/servicesCatalog.js';

const SERVICE_ICONS = {
  'pdpc-compliance': ShieldCheck,
  'desktop-apps': Monitor,
  'web-apps': Globe,
  'custom-systems': Cpu,
  'website-dev': Layout,
  'mobile-apps': Smartphone,
  'graphics-design': Palette,
  'cloud-devops': Cloud,
};

const ServicesPage = () => {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>Our Services - Plusnology</title>
        <meta
          name="description"
          content="Plusnology offers software development, PDPC domain compliance readiness, Cloud & DevOps, and more for businesses in Tanzania and beyond."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-[#0479FB]/5 to-background relative overflow-hidden pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0479FB]/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
            <AnimatedSection className="max-w-2xl">
              <h1 className="heading-display mb-6 text-balance">
                Expertise that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0479FB] to-cyan-400">innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We specialize in crafting high-performance digital solutions tailored to your specific business needs, from bespoke enterprise systems to engaging mobile experiences.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="w-full lg:w-auto bg-primary/5 border border-primary/10 rounded-2xl p-8 shadow-sm">
              <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-4 break-words">
                DO YOU NEED US TO
              </h2>
              <ul className="space-y-3 text-foreground font-medium">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Build a custom system?</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Launch a mobile app?</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Redesign your website?</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Scale your infrastructure?</li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing pt-0">
        <div className="max-w-7xl mx-auto container-padding">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={SERVICE_ICONS[service.id]}
                title={service.title}
                description={service.description}
                image={service.image}
                detailPath={service.detailPath}
                heroImage={service.heroImage}
                index={index}
                isInView={isGridInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0479FB] to-cyan-600"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Ready to build your next big idea?</h2>
            <p className="text-xl text-blue-50 mb-10 opacity-90 max-w-2xl mx-auto">
              Let's collaborate to transform your vision into a powerful, scalable digital solution.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-[#0479FB] px-8 py-4 text-lg font-bold hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Project
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default ServicesPage;