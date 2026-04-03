import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2 } from 'lucide-react';
import ConsentDialog from '@/components/ConsentDialog.jsx';
import { hasStoredConsent } from '@/lib/consentStorage.js';
import { SERVICE_TITLES } from '@/data/servicesCatalog.js';
import { sendToWhatsApp, formatContactInquiry } from '@/lib/whatsapp.js';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [consentOpen, setConsentOpen] = useState(false);
  const pendingSubmitRef = useRef(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const sendMessage = async (data) => {
    setIsSubmitting(true);
    sendToWhatsApp(formatContactInquiry(data));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const onSubmit = async (data) => {
    if (!hasStoredConsent()) {
      pendingSubmitRef.current = data;
      setConsentOpen(true);
      return;
    }
    await sendMessage(data);
  };

  const handleConsentRecorded = () => {
    const pending = pendingSubmitRef.current;
    pendingSubmitRef.current = null;
    if (pending) {
      sendMessage(pending);
    }
  };

  return (
    <div className="relative">
      <ConsentDialog
        open={consentOpen}
        onOpenChange={setConsentOpen}
        onConsentRecorded={handleConsentRecorded}
      />
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center bg-card rounded-2xl z-10"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="text-green-600 dark:text-green-400" size={40} />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">WhatsApp should open with your message — send it there to reach our team.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6"
          >
            <div className="group">
              <Label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                Name
              </Label>
              <div className="relative rounded-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Your full name"
                  className="text-foreground border-border/50 bg-background/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              {errors.name && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-destructive mt-1.5">{errors.name.message}</motion.p>
              )}
            </div>

            <div className="group">
              <Label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                Email
              </Label>
              <div className="relative rounded-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="your.email@example.com"
                  className="text-foreground border-border/50 bg-background/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              {errors.email && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-destructive mt-1.5">{errors.email.message}</motion.p>
              )}
            </div>

            <div className="group">
              <Label htmlFor="service" className="text-sm font-medium text-foreground mb-1.5 block">
                Service Interest
              </Label>
              <div className="relative rounded-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                <Select onValueChange={(value) => setValue('service', value)}>
                  <SelectTrigger className="text-foreground border-border/50 bg-background/50 focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_TITLES.map((title) => (
                      <SelectItem key={title} value={title}>
                        {title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {errors.service && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-destructive mt-1.5">{errors.service.message}</motion.p>
              )}
            </div>

            <div className="group">
              <Label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                Message
              </Label>
              <div className="relative rounded-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 focus-within:ring-offset-background">
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="text-foreground border-border/50 bg-background/50 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                />
              </div>
              {errors.message && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-destructive mt-1.5">{errors.message.message}</motion.p>
              )}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-base bg-gradient-accent hover:opacity-90 text-white shadow-lg transition-all duration-300 border-0"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  'Send Message'
                )}
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;