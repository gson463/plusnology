import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendToWhatsApp, formatConsentSubmission } from '@/lib/whatsapp.js';

const consentSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  privacyConsent: z.boolean().refine((v) => v === true, {
    message: 'You must agree to the processing of your personal data to continue.',
  }),
  marketingConsent: z.boolean().optional(),
  electronicSignature: z
    .string()
    .min(2, 'Type your full name to confirm this consent'),
});

const ConsentForm = ({ variant = 'default', onConsentRecorded }) => {
  const isDialog = variant === 'dialog';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(consentSchema),
    defaultValues: {
      fullName: '',
      email: '',
      privacyConsent: false,
      marketingConsent: false,
      electronicSignature: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const recordedAt = new Date().toISOString();
    sendToWhatsApp(
      formatConsentSubmission({
        fullName: data.fullName,
        email: data.email,
        privacyConsent: data.privacyConsent,
        marketingConsent: !!data.marketingConsent,
        electronicSignature: data.electronicSignature,
        recordedAt,
      }),
    );
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    const dismissMs = onConsentRecorded ? 2200 : 6000;
    setTimeout(() => {
      setIsSuccess(false);
      if (onConsentRecorded) onConsentRecorded();
    }, dismissMs);
  };

  return (
    <div className={isDialog ? 'relative min-h-[280px]' : 'relative min-h-[420px]'}>
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className={`flex flex-col items-center justify-center text-center px-4 bg-card rounded-2xl z-10 ${isDialog ? 'py-8' : 'py-12'}`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.45, delay: 0.15 }}
              className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="text-green-600 dark:text-green-400" size={40} />
            </motion.div>
            <h3 className={`font-bold mb-2 ${isDialog ? 'text-xl' : 'text-2xl'}`}>Consent recorded</h3>
            <p className={`text-muted-foreground max-w-md ${isDialog ? 'text-sm' : ''}`}>
              WhatsApp should open with your consent details — send it there to complete the record. You can update preferences
              anytime by contacting us.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className={isDialog ? 'space-y-4' : 'space-y-6'}
          >
            <div className="group">
              <Label htmlFor="fullName" className="text-sm font-medium text-foreground mb-1.5 block">
                Full name
              </Label>
              <Input
                id="fullName"
                {...register('fullName')}
                placeholder="As it appears on official documents"
                autoComplete="name"
                className="text-foreground border-border/50 bg-background/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {errors.fullName && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-destructive mt-1.5"
                >
                  {errors.fullName.message}
                </motion.p>
              )}
            </div>

            <div className="group">
              <Label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="your.email@example.com"
                autoComplete="email"
                className="text-foreground border-border/50 bg-background/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-destructive mt-1.5"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4 space-y-4">
              <p className="text-sm font-medium text-foreground">Declarations</p>
              <div className="flex items-start gap-3">
                <Controller
                  name="privacyConsent"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="privacyConsent"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-0.5"
                    />
                  )}
                />
                <Label htmlFor="privacyConsent" className="text-sm font-normal text-muted-foreground leading-relaxed cursor-pointer">
                  I consent to Plusnology processing my personal data provided above to respond to my inquiry, provide services,
                  and operate our business in line with applicable law and our{' '}
                  <Link to="/privacy" className="text-[#0479FB] hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </Label>
              </div>
              {errors.privacyConsent && (
                <p className="text-sm text-destructive">{errors.privacyConsent.message}</p>
              )}

              <div className="flex items-start gap-3">
                <Controller
                  name="marketingConsent"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="marketingConsent"
                      checked={!!field.value}
                      onCheckedChange={field.onChange}
                      className="mt-0.5"
                    />
                  )}
                />
                <Label htmlFor="marketingConsent" className="text-sm font-normal text-muted-foreground leading-relaxed cursor-pointer">
                  I would like to receive occasional updates, news, and promotional emails from Plusnology (optional).
                </Label>
              </div>
            </div>

            <div className="group">
              <Label htmlFor="electronicSignature" className="text-sm font-medium text-foreground mb-1.5 block">
                Electronic signature
              </Label>
              <p className="text-xs text-muted-foreground mb-2">
                Type your full legal name to confirm you have read and agree to the declarations above.
              </p>
              <Input
                id="electronicSignature"
                {...register('electronicSignature')}
                placeholder="Type your full name"
                autoComplete="off"
                className="text-foreground border-border/50 bg-background/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              {errors.electronicSignature && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-destructive mt-1.5"
                >
                  {errors.electronicSignature.message}
                </motion.p>
              )}
            </div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-base bg-gradient-accent hover:opacity-90 text-white shadow-lg transition-all duration-300 border-0"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  'Submit consent'
                )}
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ConsentForm;
