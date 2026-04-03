import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ConsentForm from '@/components/ConsentForm.jsx';
import { CONSENT_STORAGE_KEY } from '@/lib/consentStorage.js';

/**
 * Controlled consent modal. Typically opened when the user submits the contact form
 * and has not yet recorded data-processing consent.
 */
const ConsentDialog = ({ open, onOpenChange, onConsentRecorded }) => {
  const handleSuccess = () => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    onOpenChange(false);
    onConsentRecorded?.();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (next) onOpenChange(true);
      }}
    >
      <DialogContent
        hideClose
        className="max-h-[min(90vh,720px)] w-[calc(100vw-1.5rem)] max-w-xl overflow-y-auto p-6 sm:p-8 gap-0"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onFocusOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-left space-y-2 pb-4 pr-6">
          <DialogTitle className="text-xl sm:text-2xl font-bold leading-tight pr-2">
            Consent
          </DialogTitle>
          <DialogDescription className="text-left text-sm leading-relaxed">
            You asked to send a message. Please confirm how we may use your information so we can process your contact
            request.
          </DialogDescription>
        </DialogHeader>
        <div className="border-t border-border/60 pt-4 -mx-2 px-2 sm:mx-0 sm:px-0">
          <ConsentForm variant="dialog" onConsentRecorded={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentDialog;
