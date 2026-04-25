import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2, Shield } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { formatTzsAmount, getInvoiceVerifyRequestUrl } from '@/lib/invoiceVerify.js';

const InvoiceVerifyPage = () => {
  const { code } = useParams();
  const [status, setStatus] = useState('loading');
  const [payload, setPayload] = useState(null);
  const [errorKey, setErrorKey] = useState(null);

  useEffect(() => {
    if (!code) {
      setStatus('error');
      setErrorKey('missing_code');
      return;
    }

    const url = getInvoiceVerifyRequestUrl(code);
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(url, { method: 'GET' });
        const data = await res.json().catch(() => ({}));
        if (cancelled) {
          return;
        }
        if (res.ok && data.valid && data.invoice) {
          setPayload(data.invoice);
          setStatus('ok');
        } else {
          setErrorKey(data.error || 'not_found');
          setStatus('error');
        }
      } catch {
        if (!cancelled) {
          setErrorKey('network');
          setStatus('error');
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [code]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>Verify invoice - Plusnology</title>
        <meta
          name="description"
          content="Verify an official Plusnology sales invoice by scanning the QR code or opening your verification link."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Header />

      <section className="section-spacing bg-gradient-to-b from-primary/5 to-background min-h-[70vh]">
        <div className="max-w-2xl mx-auto container-padding py-12">
          {status === 'loading' && (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <Loader2 className="h-12 w-12 text-primary animate-spin" aria-hidden />
              <p className="text-muted-foreground">Checking this invoice with Plusnology…</p>
            </div>
          )}

          {status === 'ok' && payload && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-border/60 bg-card shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 border-b border-border/50 px-6 py-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Invoice verified</h1>
                  <p className="text-sm text-muted-foreground">
                    This document matches a registered Plusnology sales invoice.
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start gap-3 rounded-lg bg-muted/40 p-4">
                  <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-body">
                    The QR code (or link) you used is tied to a unique verification id. Only
                    documents issued with this code in our system will show as verified here.
                  </p>
                </div>

                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Invoice</dt>
                    <dd className="text-lg font-semibold">{payload.invoiceNumber}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Ref PI</dt>
                    <dd className="text-lg font-semibold">{payload.refPi}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Issue date</dt>
                    <dd className="text-base">{payload.issueDate}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Amount</dt>
                    <dd className="text-base font-semibold">
                      {formatTzsAmount(payload.amountTzs)} {payload.currency}
                    </dd>
                  </div>
                </dl>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">Client</p>
                  <p className="text-base font-medium">{payload.clientName}</p>
                  {payload.clientLocation && (
                    <p className="text-sm text-muted-foreground mt-0.5">{payload.clientLocation}</p>
                  )}
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">Description</p>
                  <p className="text-base text-body">{payload.productDescription}</p>
                  {payload.subscriptionTerm && (
                    <p className="text-sm text-muted-foreground mt-1">Subscription: {payload.subscriptionTerm}</p>
                  )}
                </div>

                <div className="pt-2 border-t border-border/50 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{payload.issuerName}</p>
                  <p>{payload.issuerAddress}</p>
                  <p>
                    <a href={`tel:${payload.issuerPhone.replace(/\s/g, '')}`} className="text-primary hover:underline">
                      {payload.issuerPhone}
                    </a>
                    {' · '}
                    <a href={`mailto:${payload.issuerEmail}`} className="text-primary hover:underline">
                      {payload.issuerEmail}
                    </a>
                  </p>
                  <a
                    href={payload.issuerWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {payload.issuerWebsite.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <h1 className="text-xl font-semibold mb-2">Verification failed</h1>
              {errorKey === 'network' && (
                <p className="text-muted-foreground">
                  We could not reach the verification service. Check your connection and try again.
                </p>
              )}
              {errorKey !== 'network' && (
                <p className="text-muted-foreground">
                  This code does not match a registered Plusnology invoice. If you believe this is a mistake,
                  contact us using the details on the document or on our website.
                </p>
              )}
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground mt-8">
            <Link to="/" className="text-primary hover:underline">Back to home</Link>
          </p>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default InvoiceVerifyPage;
