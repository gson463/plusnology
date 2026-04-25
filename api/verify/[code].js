import registry from '../../shared/invoiceRegistry.json' assert { type: 'json' };

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

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }
  const code = (req.query.code ?? '').toString().trim();
  if (!code) {
    return res.status(400).json({ valid: false, error: 'missing_code' });
  }
  const inv = registry.invoices.find((i) => i.verifyCode === code);
  if (!inv) {
    return res.status(404).json({ valid: false, error: 'not_found' });
  }
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
  return res.status(200).json({ valid: true, invoice: publicPayload(inv) });
}
