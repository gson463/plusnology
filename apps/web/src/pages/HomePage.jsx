import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import TypingAnimation from '@/components/TypingAnimation.jsx';
import ParticleBackground from '@/components/ParticleBackground.jsx';

const HomePage = () => {
  const heroPhrases = [
    'Build the future with software that scales',
    'Transform your business with cutting-edge technology',
    'Innovate faster with intelligent solutions',
    'Scale your dreams with powerful software',
    "Create tomorrow's possibilities today",
    'Empower your vision with smart code',
    'Build systems that grow with you',
    'Turn ideas into reality with technology',
    'Accelerate growth through digital innovation',
    'Engineer success for your business',
    'Shape the future of your industry'
  ];

  const strengths = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Ship projects on time with agile development practices and efficient workflows.',
    },
    {
      icon: Shield,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security built into every solution we deliver.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with experienced developers and consultants who understand your business.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>Plusnology - Innovative Software Solutions</title>
        <meta
          name="description"
          content="Transform your business with cutting-edge software solutions. Web development, cloud services, AI integration, and digital transformation."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-40">
          <img
            src="https://images.unsplash.com/photo-1699941150314-90a62569ef3a"
            alt="Modern technology workspace"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Subtle animated grain/noise overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>

        {/* Particle Background */}
        <ParticleBackground />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center pt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white tracking-wide">Innovative Software Solutions</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-display text-white mb-6 text-balance max-w-4xl mx-auto drop-shadow-md min-h-[4em] md:min-h-[3em] flex items-center justify-center">
              <TypingAnimation 
                phrases={heroPhrases}
                speed={100}
                pauseDuration={2500}
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200"
              />
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-blue-50/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We create custom software solutions that drive digital transformation and accelerate business growth through modern technology.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" className="text-base bg-white text-primary hover:bg-blue-50 shadow-xl h-14 px-8 rounded-xl">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white shadow-lg h-14 px-8 rounded-xl"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 backdrop-blur-sm"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Strengths Section */}
      <section className="section-spacing bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="max-w-7xl mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-section mb-4 text-balance">Why choose Plusnology</h2>
            <p className="text-body max-w-2xl mx-auto text-lg">
              We combine technical expertise with business insight to deliver solutions that make a real impact.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <AnimatedSection key={strength.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-card rounded-2xl p-8 shadow-sm hover:shadow-xl border border-border/50 h-full flex flex-col group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-accent transition-colors duration-500">
                    <strength.icon className="text-primary group-hover:text-white transition-colors duration-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-balance">{strength.title}</h3>
                  <p className="text-body text-sm leading-relaxed mt-auto">{strength.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default HomePage;