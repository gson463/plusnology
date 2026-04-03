import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Client-focused',
      description: 'Your success is our priority. We build solutions that solve real business problems.',
    },
    {
      icon: Heart,
      title: 'Quality-driven',
      description: 'We maintain high standards in code quality, testing, and documentation.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver modern, future-proof solutions.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, from planning to deployment.',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>About Us - Plusnology</title>
        <meta
          name="description"
          content="Learn about Plusnology's mission, values, and expertise in delivering innovative software solutions. Meet our team of experienced developers and consultants."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-200/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto pt-10">
            <h1 className="heading-display mb-6 text-balance">
              About <span className="text-gradient">Plusnology</span>
            </h1>
            <p className="text-xl text-body leading-relaxed">
              We're a team of passionate developers and consultants dedicated to building software that makes a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing pt-0">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <h2 className="heading-section mb-6 text-balance">Our mission</h2>
              <div className="space-y-4 text-lg text-body">
                <p>
                  At Plusnology, we believe technology should enable businesses to reach their full potential. Our mission is to deliver software solutions that are not just functional, but transformative.
                </p>
                <p>
                  We work closely with our clients to understand their unique challenges and create custom solutions that drive measurable results. From startups to enterprises, we've helped organizations across industries modernize their operations and stay competitive.
                </p>
                <p>
                  Our approach combines technical expertise with business insight, ensuring that every solution we build aligns with your strategic goals and delivers real value.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative group flex items-center justify-center">
                <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 sm:p-12 max-w-md w-full flex items-center justify-center">
                  <img
                    src="https://horizons-cdn.hostinger.com/f2dcab24-7e9d-4f30-8d49-4bbd3690c7ea/1d5ae6b02171138f6226f9ae66aa7969.png"
                    alt="Plusnology logo"
                    className="w-full h-auto object-contain max-h-64 sm:max-h-80"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-secondary/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="max-w-7xl mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-section mb-4 text-balance">Our core values</h2>
            <p className="text-body max-w-2xl mx-auto text-lg">
              These principles guide everything we do, from how we work with clients to how we build software.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-card rounded-2xl p-8 shadow-sm hover:shadow-xl border border-border/50 text-center h-full group"
                >
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                    <value.icon className="text-primary group-hover:text-cyan-500 transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-balance">{value.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-spacing bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAwMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { value: '20+', label: 'Projects Delivered' },
              { value: '98.7%', label: 'Client Retention' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-md" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-blue-100 font-medium tracking-wide uppercase">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default AboutPage;