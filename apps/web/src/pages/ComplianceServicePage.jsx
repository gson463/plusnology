import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  FileText,
  ClipboardCheck,
  Database,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedSection from '@/components/AnimatedSection.jsx';
import { Button } from '@/components/ui/button';
import { sendToWhatsApp } from '@/lib/whatsapp.js';

const CRITERIA = [
  {
    icon: Lock,
    name: 'SSL / HTTPS',
    detail: 'Secure connection (valid certificate, HTTPS everywhere it matters).',
  },
  {
    icon: FileText,
    name: 'Privacy Policy',
    detail: 'Clear, published policy describing what you collect and why.',
  },
  {
    icon: ClipboardCheck,
    name: 'Consent & notices',
    detail: 'Cookie consent where needed and consent flows before collecting personal data.',
  },
  {
    icon: Database,
    name: 'Personal data practices',
    detail: 'Transparent handling aligned with how you actually run your product or site.',
  },
];

const PACKAGES = [
  {
    name: 'Compliance audit',
    blurb: 'Know exactly what is failing today.',
    items: [
      'Domain & SSL review',
      'Privacy Policy gap analysis',
      'Cookie / consent UX review',
      'Written checklist with PASS / FAIL style findings',
    ],
    cta: 'Request audit quote',
  },
  {
    name: 'Implementation',
    blurb: 'We fix the gaps so criteria can pass.',
    items: [
      'HTTPS / hosting & redirect fixes as needed',
      'Privacy Policy & Terms drafting aligned to your business',
      'Cookie banner + consent wiring on your site',
      'Contact / data-request paths and copy',
    ],
    featured: true,
    cta: 'Book implementation',
  },
  {
    name: 'Ongoing support',
    blurb: 'Stay aligned when you ship new features.',
    items: [
      'Quarterly or annual reviews',
      'Updates when laws or PDPC guidance change',
      'Help when you add forms, apps, or new data uses',
    ],
    cta: 'Discuss retainer',
  },
];

const whatsappComplianceLead = () => {
  sendToWhatsApp(
    [
      '*Plusnology — PDPC / domain compliance*',
      '',
      'I want help getting my domain aligned with PDPC-style criteria (SSL, Privacy Policy, consent, data practices).',
      '',
      'Domain: ',
      'Package interest: (audit / implementation / ongoing)',
    ].join('\n'),
  );
};

const ComplianceServicePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>PDPC Domain Compliance & Privacy Readiness - Plusnology</title>
        <meta
          name="description"
          content="Get your website aligned with PDPC-style domain checks: HTTPS, Privacy Policy, consent, and transparent personal data practices. Paid audits, implementation, and ongoing support from Plusnology Tanzania."
        />
      </Helmet>

      <Header />

      <section className="section-spacing bg-gradient-to-b from-[#0479FB]/8 to-background relative overflow-hidden pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[#0479FB]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <AnimatedSection className="max-w-3xl pt-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Tanzania data protection readiness
            </div>
            <h1 className="heading-display mb-6 text-balance">
              PDPC-style <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0479FB] to-cyan-400">domain compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Many domains do not comply because basic building blocks are missing—secure HTTPS, a real Privacy Policy,
              proper consent, and clear personal data practices. We offer paid services to audit, implement, and maintain
              what reviewers look for, so you can work toward reports like a Domain Compliance Review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="h-12 px-8 bg-gradient-accent hover:opacity-90 text-white border-0 text-base"
              >
                <Link to="/contact">Get a quote</Link>
              </Button>
              <Button type="button" variant="outline" className="h-12 px-8 text-base gap-2" onClick={whatsappComplianceLead}>
                <MessageCircle className="w-5 h-5" />
                WhatsApp us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">What “passing” usually requires</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Reports such as a Domain Compliance Review typically check technical security, published policies, and how
                you collect and handle personal data. Below is the same structure we use when we help clients prepare.
              </p>
              <ul className="space-y-4">
                {CRITERIA.map((row) => (
                  <li key={row.name} className="flex gap-4 rounded-xl border border-border/60 bg-card/50 p-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0479FB]/10 flex items-center justify-center text-[#0479FB]">
                      <row.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{row.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{row.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-border/60 bg-muted/20 overflow-hidden shadow-lg">
                <div className="aspect-[4/3] bg-muted relative">
                  <img
                    src="/compliance/pdpc-domain-report-sample.png"
                    alt="Example PDPC-style domain compliance report for plusnology.tech"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-xs text-muted-foreground p-4 border-t border-border/60">
                  Illustrative example of the kind of criteria rows a compliance report may include. Plusnology helps you
                  implement the underlying technical and policy work—not the government report itself.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0 pb-20">
        <div className="max-w-7xl mx-auto container-padding">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How you can work with us</h2>
            <p className="text-muted-foreground text-lg">
              Choose a package or combine them. Pricing is quoted per domain and complexity—we invoice after scope is
              agreed (bank transfer, mobile money, or as agreed).
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={index * 0.08}>
                <div
                  className={`relative h-full flex flex-col rounded-2xl border p-8 ${
                    pkg.featured
                      ? 'border-[#0479FB] bg-gradient-to-b from-[#0479FB]/5 to-card shadow-xl'
                      : 'border-border/60 bg-card'
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wide bg-[#0479FB] text-white px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.blurb}</p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full gap-2 ${pkg.featured ? 'bg-gradient-accent hover:opacity-90 text-white border-0' : ''}`}
                    variant={pkg.featured ? 'default' : 'outline'}
                  >
                    <Link to="/contact">
                      {pkg.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
            Plusnology provides technical and legal-style documentation support for your business; official certification
            or filing with PDPC Tanzania, where required, remains the responsibility of the data controller and may
            require separate steps. We help you meet the practical criteria first.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="rounded-2xl bg-gradient-to-br from-[#0479FB] to-cyan-600 p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to fix your domain compliance gaps?</h2>
            <p className="text-blue-50 mb-8 max-w-xl mx-auto opacity-95">
              Tell us your domain and what you need—we reply with a scope and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="h-12 px-8 text-[#0479FB] font-semibold">
                <Link to="/contact">Start on Contact</Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 px-8 border-white/40 text-white hover:bg-white/10"
                onClick={whatsappComplianceLead}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default ComplianceServicePage;
