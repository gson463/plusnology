import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';

const PortfolioPage = () => {
  const projects = [
    {
      image: '/portfolio/microfinance-loans-portal-laptop-mockup.png',
      title: 'Microfinance System (Loans Control Portal)',
      description:
        'We shipped the staff login and product shell for Fahari Credit Limited: a premium dark-mode microfinance portal with clear brand presence, secure sign-in, and on-screen support paths—giving teams a trustworthy entry point before loans, repayments, and reporting work behind the scenes.',
    },
    {
      image: '/portfolio/pharmacy-admin-dashboard.png',
      title: 'Pharmacy chain operations platform',
      description:
        'We delivered a completed multi-branch pharmacy back office: unified finance and inventory in TZS, branch-level performance, and reporting so owners can run operations and see profitability without juggling spreadsheets.',
    },
    {
      image: '/portfolio/retail-ecommerce-storefront.png',
      title: 'Retail e‑commerce storefront',
      description:
        'A finished retail site we shipped end-to-end—category-led shopping, campaign heroes for promotions, and trust-led messaging—so the brand could launch online sales with a clear path from discovery to purchase.',
    },
    {
      image: '/portfolio/compliance-portal.png',
      title: 'Compliance & licensing portal',
      description:
        'We built and released a secure entry point for compliance workflows—subscription and licence management with a calm, branded experience teams could roll out with confidence in regulated settings.',
    },
    {
      image: '/portfolio/phone-business-system.png',
      title: 'Business Management System',
      description:
        'Completed platform for day-to-day operations: inquiries, customers, and staff in one place, with TZS financial dashboards and branch-aware insight—giving leadership a single source of truth for sales, profit, and alerts.',
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
        <title>Portfolio - Plusnology</title>
        <meta
          name="description"
          content="Explore Plusnology portfolio: microfinance portals, pharmacy operations, retail e-commerce, compliance, and business management systems."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto pt-10">
            <h1 className="heading-display mb-6 text-balance">
              Our <span className="text-gradient">work</span>
            </h1>
            <p className="text-xl text-body leading-relaxed">
              We've helped businesses across industries transform their operations with custom software solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-spacing pt-0">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.15} className="h-full">
                <PortfolioCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-[0.05] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '127+', label: 'Projects Delivered' },
              { value: '89%', label: 'Client Retention' },
              { value: '4.8/5', label: 'Average Rating' },
              { value: '12', label: 'Years Experience' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-md" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-blue-100 font-medium tracking-wide uppercase">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default PortfolioPage;