import { Router } from 'express';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const registry = JSON.parse(
  readFileSync(join(__dirname, '../../../../shared/invoiceRegistry.json'), 'utf8')
);

const router = Router();

function publicPayload(inv) {
  return {
    invoiceNumber: inv.invoiceNumber,
    refPi: inv.refPi,
    issueDate: inv.issueDate,
    clientName: inv.clientName,
    clientLocation: inv.clientLocation,
    amountTzs: inv.amountTzs,
    currency: inv.currency,
    productDescription: inv.productDescription,
    subscriptionTerm: inv.subscriptionTerm,
    issuerName: inv.issuerName,
    issuerHandle: inv.issuerHandle,
    issuerAddress: inv.issuerAddress,
    issuerPhone: inv.issuerPhone,
    issuerEmail: inv.issuerEmail,
    issuerWebsite: inv.issuerWebsite,
  };
}

router.get('/:code', (req, res) => {
  const code = String(req.params.code || '').trim();
  if (!code) {
    return res.status(400).json({ valid: false, error: 'missing_code' });
  }
  const inv = registry.invoices.find((i) => i.verifyCode === code);
  if (!inv) {
    return res.status(404).json({ valid: false, error: 'not_found' });
  }
  res.set('Cache-Control', 'public, max-age=60, s-maxage=60');
  return res.json({ valid: true, invoice: publicPayload(inv) });
});

export default router;
