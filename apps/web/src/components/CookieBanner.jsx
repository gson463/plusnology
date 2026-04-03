import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCookiePreference, setCookiePreference } from '@/lib/cookieStorage.js';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookiePreference() === null);
  }, []);

  const dismiss = (preference) => {
    setCookiePreference(preference);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-5 pb-6 sm:pb-5 pr-20 sm:pr-24 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto pointer-events-auto rounded-2xl border border-border/80 bg-card/95 backdrop-blur-md shadow-xl shadow-black/10 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex gap-3 min-w-0 flex-1">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0479FB]/10 flex items-center justify-center text-[#0479FB]">
            <Cookie className="w-5 h-5" aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground mb-1">Cookies</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to run this site, remember preferences, and understand traffic. By clicking Accept, you agree
              to our use of cookies as described in our{' '}
              <Link to="/privacy" className="text-[#0479FB] hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:flex-shrink-0 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => dismiss('rejected')}
          >
            Reject
          </Button>
          <Button
            type="button"
            className="w-full sm:w-auto bg-gradient-accent hover:opacity-90 text-white border-0"
            onClick={() => dismiss('accepted')}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
