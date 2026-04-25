#!/usr/bin/env node
/**
 * Keep api/verify/invoiceRegistry.json in sync with shared/invoiceRegistry.json (Vercel bundles this next to the handler).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const from = path.join(root, 'shared/invoiceRegistry.json');
const to = path.join(root, 'api/verify/invoiceRegistry.json');
fs.mkdirSync(path.dirname(to), { recursive: true });
fs.copyFileSync(from, to);
console.log('Synced shared/invoiceRegistry.json -> api/verify/invoiceRegistry.json');
