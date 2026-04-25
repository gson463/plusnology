/**
 * Resolves the API URL for invoice verification. Same origin in production
 * (Vercel serverless at /api/verify) and in dev (Vite proxy to Express on 3001).
 */
export function getInvoiceVerifyRequestUrl(verifyCode) {
  return `/api/verify/${encodeURIComponent(verifyCode)}`;
}

export function formatTzsAmount(amount) {
  return new Intl.NumberFormat('en-TZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
