export const CONSENT_STORAGE_KEY = 'plusnology.consent.submitted';

export function hasStoredConsent() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}
