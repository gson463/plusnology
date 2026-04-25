#!/usr/bin/env node
/**
 * Keep api/invoiceRegistry.json in sync with shared/invoiceRegistry.json (Vercel serverless).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const from = path.join(root, 'shared/invoiceRegistry.json');
const to = path.join(root, 'api/invoiceRegistry.json');
fs.copyFileSync(from, to);
console.log('Synced shared/invoiceRegistry.json -> api/invoiceRegistry.json');
