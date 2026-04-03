export const COOKIE_PREFERENCE_KEY = 'plusnology.cookies.preference';

/** @returns {'accepted' | 'rejected' | null} */
export function getCookiePreference() {
  try {
    const v = window.localStorage.getItem(COOKIE_PREFERENCE_KEY);
    if (v === 'accepted' || v === 'rejected') return v;
    return null;
  } catch {
    return null;
  }
}

export function setCookiePreference(value) {
  try {
    window.localStorage.setItem(COOKIE_PREFERENCE_KEY, value);
  } catch {
    /* ignore */
  }
}
