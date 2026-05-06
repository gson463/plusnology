import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/siteContact.js';
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'PDPC Compliance', path: '/services/pdpc-compliance' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/plusnology', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/plusnology', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@plusnology', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-3 mb-4 group">
              <BrandLogo className="w-[60px] h-[60px]" />
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Plusnology</span>
            </Link>
            <p className="text-body text-sm">
              Innovative software solutions that drive digital transformation and business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold text-foreground mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold text-foreground mb-4 block">Contact</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:develop@plusnology.tech" className="hover:text-primary transition-colors duration-200">
                  develop@plusnology.tech
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href={SITE_PHONE_TEL_HREF} className="hover:text-primary transition-colors duration-200">
                  {SITE_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Dar Es Salaam, Tanzania</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-sm font-semibold text-foreground mb-4 block">Follow Us</span>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-md transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Plusnology. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;