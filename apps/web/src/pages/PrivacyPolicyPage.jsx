import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout from '@/components/LegalLayout.jsx';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/siteContact.js';

const PrivacyPolicyPage = () => (
  <LegalLayout
    title="Privacy Policy"
    metaDescription="How Plusnology collects, uses, and protects personal information when you use our website and services."
  >
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
      <p className="text-muted-foreground">
        Plusnology (“we”, “us”, “our”) respects your privacy. This Privacy Policy explains how we collect, use, store, and
        protect personal information when you visit our website, use our contact or consent features, or engage our
        services. By using our site, you agree to this policy together with our{' '}
        <Link to="/terms" className="text-[#0479FB] hover:underline">
          Terms &amp; Conditions
        </Link>
        .
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">2. Data controller</h2>
      <p className="text-muted-foreground">
        The data controller responsible for your personal data is Plusnology, operating in Dar es Salaam, Tanzania. For
        privacy-related requests, contact us using the details in section 12.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">3. Information we collect</h2>
      <p className="text-muted-foreground">We may collect:</p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground/90">Identity and contact data:</strong> name, email address, phone number
          when you provide them (for example through our contact form, WhatsApp links, or email).
        </li>
        <li>
          <strong className="text-foreground/90">Communication content:</strong> messages you send, service interests
          you select, and consent preferences you submit.
        </li>
        <li>
          <strong className="text-foreground/90">Technical data:</strong> IP address, browser type, device
          information, and similar data collected via cookies or similar technologies as described in our cookie notice
          and section 6.
        </li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">4. How we use your information</h2>
      <p className="text-muted-foreground">We use personal information to:</p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Respond to inquiries and provide requested services or proposals.</li>
        <li>Operate, maintain, and improve our website and communications.</li>
        <li>Record and manage consents where required.</li>
        <li>Send optional marketing communications only where you have opted in.</li>
        <li>Comply with legal obligations and protect our legitimate interests, where applicable.</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">5. Legal bases</h2>
      <p className="text-muted-foreground">
        Where applicable law requires a legal basis, we rely on consent (for example marketing or non-essential cookies),
        performance of a contract or pre-contract steps, legitimate interests (such as securing our website and responding
        to enquiries), and legal obligation.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">6. Cookies</h2>
      <p className="text-muted-foreground">
        We use cookies and similar technologies as described in the cookie banner on our site. You can accept or reject
        non-essential cookies through that banner. Essential cookies may be necessary for the site to function. For more
        detail, see the cookie notice shown when you first visit.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">7. Sharing and disclosure</h2>
      <p className="text-muted-foreground">
        We do not sell your personal data. We may share information with service providers who assist us (for example
        hosting, analytics, or communication tools), when required by law, or to protect our rights and the security of
        our users. Such providers are expected to process data only on our instructions and subject to appropriate
        safeguards.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">8. International transfers</h2>
      <p className="text-muted-foreground">
        If we transfer personal data outside Tanzania, we will take steps that are appropriate under applicable law to
        ensure your information remains protected.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">9. Retention</h2>
      <p className="text-muted-foreground">
        We retain personal information only for as long as necessary to fulfil the purposes described in this policy,
        unless a longer period is required or permitted by law.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">10. Your rights</h2>
      <p className="text-muted-foreground">
        Depending on applicable law, you may have the right to access, correct, delete, or restrict processing of your
        personal data, to object to certain processing, to withdraw consent where processing is based on consent, and to
        lodge a complaint with a supervisory authority. To exercise these rights, contact us using the details below.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">11. Security</h2>
      <p className="text-muted-foreground">
        We implement appropriate technical and organisational measures designed to protect your personal information.
        However, no method of transmission over the Internet is completely secure.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">12. Children</h2>
      <p className="text-muted-foreground">
        Our services are not directed at children under 16, and we do not knowingly collect personal information from
        children. If you believe we have collected such information, please contact us so we can delete it.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">13. Changes to this policy</h2>
      <p className="text-muted-foreground">
        We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do.
        Continued use of our site after changes constitutes acceptance of the updated policy where permitted by law.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">14. Contact us</h2>
      <p className="text-muted-foreground">
        Questions about this Privacy Policy or your personal data:
      </p>
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

export default PrivacyPolicyPage;
