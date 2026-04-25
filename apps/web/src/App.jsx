import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ComplianceServicePage from './pages/ComplianceServicePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import InvoiceVerifyPage from './pages/InvoiceVerifyPage.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import CookieBanner from './components/CookieBanner.jsx';

// Separate component to use useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/pdpc-compliance" element={<ComplianceServicePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/verify/:code" element={<InvoiceVerifyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
      <CookieBanner />
      <FloatingWhatsApp />
    </Router>
  );
}

// 404 Page Component
const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center container-padding">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-accent mb-4">404</h1>
        <h2 className="heading-section mb-4">Page not found</h2>
        <p className="text-body mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-accent text-white px-6 py-3 text-base font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98] shadow-lg"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default App;