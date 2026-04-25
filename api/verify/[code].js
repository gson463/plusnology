import registry from './invoiceRegistry.json' with { type: 'json' };

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

/**
 * Vercel dynamic routes do not always populate req.query; parse from URL path.
 * Some runtimes pass `req.url` as a full URL.
 */
function extractCode(req) {
  const fromQuery = (req.query?.code ?? req.query?.slug ?? '').toString().trim();
  if (fromQuery) {
    return decodeURIComponent(fromQuery);
  }
  let u = String(req.url ?? '');
  if (u.startsWith('http')) {
    try {
      u = new URL(u).pathname;
    } catch {
      /* ignore */
    }
  }
  const m = u.match(/\/api\/verify\/([^?#/]+)/);
  if (m) {
    return decodeURIComponent(m[1]);
  }
  return '';
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }
  const code = extractCode(req);
  if (!code) {
    return res.status(400).json({ valid: false, error: 'missing_code' });
  }
  const list = Array.isArray(registry.invoices) ? registry.invoices : [];
  const inv = list.find((i) => i.verifyCode === code);
  if (!inv) {
    return res.status(404).json({ valid: false, error: 'not_found' });
  }
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
  return res.status(200).json({ valid: true, invoice: publicPayload(inv) });
}
