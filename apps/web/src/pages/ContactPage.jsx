import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/siteContact.js';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'develop@plusnology.tech',
      link: 'mailto:develop@plusnology.tech',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: SITE_PHONE_DISPLAY,
      link: SITE_PHONE_TEL_HREF,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dar Es Salaam, Tanzania',
      link: null,
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/plusnology' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/plusnology' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@plusnology' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>Contact Us - Plusnology</title>
        <meta
          name="description"
          content="Get in touch with Plusnology to discuss your software development needs. Contact us via email, phone, or visit our office in Dar Es Salaam, Tanzania."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-[#0479FB]/5 to-background relative overflow-hidden pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0479FB]/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto pt-10">
            <h1 className="heading-display mb-6 text-balance">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0479FB] to-cyan-400">touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out to our team in Dar Es Salaam and let's build something amazing together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Section (Above Form) */}
      <section className="pb-16 relative z-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl border border-border/50 h-full flex flex-col items-center text-center group transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#0479FB]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0479FB] transition-colors duration-500">
                    <info.icon className="text-[#0479FB] group-hover:text-white transition-colors duration-500" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-[#0479FB] transition-colors duration-200 font-medium text-lg"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground font-medium text-lg">{info.value}</p>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}

            {/* Social Media Card */}
            <AnimatedSection delay={0.3}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl border border-border/50 h-full flex flex-col items-center text-center group transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#0479FB]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0479FB] transition-colors duration-500">
                  <div className="flex space-x-1">
                    <Instagram className="text-[#0479FB] group-hover:text-white transition-colors duration-500" size={20} />
                    <Twitter className="text-[#0479FB] group-hover:text-white transition-colors duration-500" size={20} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4 mt-auto">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#0479FB] hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#0479FB]/20 transition-all duration-300"
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-spacing pt-0">
        <div className="max-w-4xl mx-auto container-padding">
          <AnimatedSection direction="up" delay={0.4}>
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0479FB] to-cyan-400"></div>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Send us a message</h2>
                <p className="text-muted-foreground text-lg">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default ContactPage;