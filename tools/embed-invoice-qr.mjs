#!/usr/bin/env node
/**
 * Embeds a verification QR on a Plusnology sales invoice PDF.
 * URL comes from shared/invoiceRegistry.json (issuerWebsite + /verify/ + verifyCode).
 *
 * Usage:
 *   node tools/embed-invoice-qr.mjs --in="/path/to/Sales inv201.pdf" --out="./invoice-assets/SI-0201-with-qr.pdf"
 *   node tools/embed-invoice-qr.mjs --verifyCode=ver_8a3f9e2d1c6b4a7f --in="./Fromark-PPI.pdf" --out="./invoice-assets/PPI-0174-with-qr.pdf"
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import QRCode from 'qrcode';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function arg(name) {
  const p = process.argv.find((a) => a.startsWith(`${name}=`));
  return p ? p.slice(name.length + 1) : null;
}

async function main() {
  const registry = JSON.parse(fs.readFileSync(path.join(root, 'shared/invoiceRegistry.json'), 'utf8'));
  const list = Array.isArray(registry.invoices) ? registry.invoices : [];
  const codeArg = arg('--verifyCode');
  const inv = codeArg
    ? list.find((i) => i.verifyCode === codeArg)
    : list[0];
  if (!inv?.verifyCode) {
    throw new Error(
      codeArg
        ? `No invoice with verifyCode "${codeArg}" in shared/invoiceRegistry.json`
        : 'No invoice with verifyCode in shared/invoiceRegistry.json'
    );
  }
  const base = (inv.issuerWebsite || 'https://www.plusnology.tech').replace(/\/$/, '');
  const verifyUrl = `${base}/verify/${inv.verifyCode}`;

  const defaultIn =
    '/Users/sflaws/Library/Application Support/Cursor/User/workspaceStorage/337540802ca581e76913e8e9c80307aa/pdfs/6e0864dd-2ba4-4884-b3cc-21ec25aa7378/Sales inv201.pdf';

  const inPath = arg('--in') || defaultIn;
  const outPath = arg('--out') || path.join(root, 'invoice-assets', 'SI-0201-with-qr.pdf');

  if (!fs.existsSync(inPath)) {
    console.error('Input PDF not found:', inPath);
    console.error('Pass --in="/full/path/to/invoice.pdf"');
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const qrPng = await QRCode.toBuffer(verifyUrl, {
    type: 'png',
    width: 400,
    margin: 1,
    errorCorrectionLevel: 'M',
  });

  const pdfBytes = fs.readFileSync(inPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pngImage = await pdfDoc.embedPng(qrPng);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();
  const page = pages[pages.length - 1];
  const { width, height } = page.getSize();

  const margin = 40;
  const qrSize = 88;
  const x = width - margin - qrSize;
  const y = margin;

  page.drawImage(pngImage, { x, y, width: qrSize, height: qrSize });

  const caption = 'Scan to verify · plusnology.tech';
  const captionSize = 7;
  page.drawText(caption, {
    x,
    y: y + qrSize + 6,
    size: captionSize,
    font,
    color: rgb(0.2, 0.2, 0.2),
  });

  const outBytes = await pdfDoc.save();
  fs.writeFileSync(outPath, outBytes);

  console.log('Verification URL (encoded in QR):');
  console.log(verifyUrl);
  console.log('');
  console.log('Output PDF written to:');
  console.log(outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
