import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout from '@/components/LegalLayout.jsx';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/siteContact.js';

const TermsOfServicePage = () => (
  <LegalLayout
    title="Terms & Conditions"
    metaDescription="Terms governing use of the Plusnology website and software and design services."
  >
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">1. Agreement to terms</h2>
      <p className="text-muted-foreground">
        These Terms &amp; Conditions (“Terms”) govern your access to and use of the Plusnology website and any services we
        agree to provide in writing. By using our website or engaging our services, you agree to these Terms and our{' '}
        <Link to="/privacy" className="text-[#0479FB] hover:underline">
          Privacy Policy
        </Link>
        . If you do not agree, do not use our site or services.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">2. About us</h2>
      <p className="text-muted-foreground">
        Plusnology provides software development, design, cloud, and related technology services. We are based in Dar es
        Salaam, Tanzania. Specific project scope, deliverables, timelines, and fees are set out in separate proposals,
        statements of work, or contracts where applicable.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">3. Use of the website</h2>
      <p className="text-muted-foreground">You agree to use our website only for lawful purposes. You must not:</p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Attempt to gain unauthorised access to our systems, other users’ data, or any networks connected to the site.</li>
        <li>Use the site to distribute malware, spam, or misleading content.</li>
        <li>Scrape, data-mine, or automate access to the site in a way that overloads or harms our infrastructure.</li>
        <li>Misrepresent your identity or affiliation when contacting us.</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">4. Services and reliance on information</h2>
      <p className="text-muted-foreground">
        Descriptions of services on this website are for general information. They do not constitute a binding offer.
        A contract is formed only when we confirm a project in writing (including by email) or as otherwise agreed.
        You are responsible for the accuracy of information you provide to us.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">5. Intellectual property</h2>
      <p className="text-muted-foreground">
        Unless otherwise agreed in a written contract, Plusnology retains ownership of pre-existing materials, tools, and
        know-how. Ownership of deliverables for a paid project will be as specified in your agreement with us. You may not
        copy, modify, or redistribute content from this website without our prior written consent, except as allowed by
        law.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">6. Client responsibilities</h2>
      <p className="text-muted-foreground">
        Where we provide services to you, you agree to provide timely feedback, access, content, and approvals reasonably
        required for delivery; to ensure you have rights to any materials you supply; and to comply with applicable laws
        (including data protection laws when you process personal data through solutions we build).
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">7. Fees and payment</h2>
      <p className="text-muted-foreground">
        Fees, invoicing, and payment terms for professional services are as stated in your proposal or contract. Unless
        otherwise agreed, quoted prices may exclude taxes, third-party licences, and out-of-pocket expenses, which may be
        charged additionally where applicable.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">8. Limitation of liability</h2>
      <p className="text-muted-foreground">
        To the maximum extent permitted by applicable law, Plusnology and its team shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from
        your use of the website or services. Our total liability for any claim relating to a specific engagement shall
        not exceed the fees paid to us for that engagement in the twelve (12) months preceding the claim, except where
        liability cannot be limited by law.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">9. Indemnity</h2>
      <p className="text-muted-foreground">
        You agree to indemnify and hold harmless Plusnology from claims, damages, losses, and expenses (including
        reasonable legal fees) arising from your breach of these Terms, your misuse of the website, or your violation of
        third-party rights, except to the extent caused by our wilful misconduct or gross negligence.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">10. Suspension and termination</h2>
      <p className="text-muted-foreground">
        We may suspend or terminate access to the website or decline to provide services where you breach these Terms or
        where required for legal or security reasons. Provisions that by their nature should survive (including
        intellectual property, limitation of liability, and governing law) will survive termination.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">11. Governing law and disputes</h2>
      <p className="text-muted-foreground">
        These Terms are governed by the laws of the United Republic of Tanzania, without regard to conflict-of-law rules.
        Courts in Tanzania shall have exclusive jurisdiction over disputes arising from these Terms or your use of the
        website, subject to any mandatory rights you may have under local consumer protection rules.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">12. Changes</h2>
      <p className="text-muted-foreground">
        We may update these Terms from time to time. The “Last updated” date will reflect changes. Your continued use of
        the website after updates constitutes acceptance of the revised Terms where permitted by law.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">13. Contact</h2>
      <p className="text-muted-foreground">For questions about these Terms:</p>
      <ul className="list-none space-y-2 text-muted-foreground">
        <li>
          Email:{' '}
          <a href="mailto:develop@plusnology.tech" className="text-[#0479FB] hover:underline">
            develop@plusnology.tech
          </a>
        </li>
        <li>
          Phone:{' '}
          <a href={SITE_PHONE_TEL_HREF} className="text-[#0479FB] hover:underline">
            {SITE_PHONE_DISPLAY}
          </a>
        </li>
        <li>Location: Dar es Salaam, Tanzania</li>
      </ul>
    </section>
  </LegalLayout>
);

export default TermsOfServicePage;
