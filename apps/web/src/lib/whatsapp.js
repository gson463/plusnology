import { SITE_PHONE_E164_DIGITS } from '@/lib/siteContact.js';

/** Same digits as site phone — used for wa.me links */
export const WHATSAPP_PHONE = SITE_PHONE_E164_DIGITS;

/**
 * Opens WhatsApp (app or web) with a pre-filled message in a new tab.
 */
export function sendToWhatsApp(text) {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function formatContactInquiry({ name, email, service, message }) {
  return [
    '*Plusnology — Contact inquiry*',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Service interest: ${service}`,
    '',
    'Message:',
    message,
  ].join('\n');
}

export function formatConsentSubmission({
  fullName,
  email,
  privacyConsent,
  marketingConsent,
  electronicSignature,
  recordedAt,
}) {
  return [
    '*Plusnology — Consent submission*',
    '',
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Data processing consent: ${privacyConsent ? 'Yes' : 'No'}`,
    `Marketing emails: ${marketingConsent ? 'Yes' : 'No'}`,
    `Electronic signature: ${electronicSignature}`,
    `Recorded at: ${recordedAt}`,
  ].join('\n');
}
