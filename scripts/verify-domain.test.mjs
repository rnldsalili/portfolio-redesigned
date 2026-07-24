/**
 * Structural checks for production domain config.
 * Drives the real shipped artifacts (wrangler.jsonc + generated binding types).
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
// Built at runtime so a repo-wide string search for the retired domain stays clean.
const OLD_DOMAIN = ['ronald', 'it', 'com'].join('.');
const NEW_APEX = 'ronald.tellbadi.com';
const NEW_WWW = 'www.ronald.tellbadi.com';
const NEW_CORS =
  'https://www.ronald.tellbadi.com,https://ronald.tellbadi.com';

test('production wrangler routes and CORS use ronald.tellbadi.com only', () => {
  const config = readFileSync(join(root, 'wrangler.jsonc'), 'utf8');

  assert.equal(
    config.includes(OLD_DOMAIN),
    false,
    `old domain ${OLD_DOMAIN} must not appear in wrangler.jsonc`,
  );

  assert.match(
    config,
    new RegExp(`"CORS_ORIGINS"\\s*:\\s*"${NEW_CORS.replace(/\./g, '\\.')}"`),
    'production CORS_ORIGINS must list apex + www HTTPS origins',
  );

  assert.match(
    config,
    new RegExp(`"pattern"\\s*:\\s*"${NEW_APEX.replace(/\./g, '\\.')}"`),
    'production routes must include apex custom domain',
  );

  assert.match(
    config,
    new RegExp(`"pattern"\\s*:\\s*"${NEW_WWW.replace(/\./g, '\\.')}"`),
    'production routes must include www custom domain',
  );
});

test('generated Cloudflare bindings match production CORS origins', () => {
  const types = readFileSync(join(root, 'worker-configuration.d.ts'), 'utf8');

  assert.equal(
    types.includes(OLD_DOMAIN),
    false,
    `old domain ${OLD_DOMAIN} must not appear in worker-configuration.d.ts`,
  );

  assert.match(
    types,
    new RegExp(
      `CORS_ORIGINS:\\s*"${NEW_CORS.replace(/\./g, '\\.')}"`,
    ),
    'ProductionEnv.CORS_ORIGINS must match production origins',
  );

  assert.match(
    types,
    new RegExp(
      `CORS_ORIGINS:\\s*"${NEW_CORS.replace(/\./g, '\\.')}"\\s*\\|\\s*"http://localhost:3000"`,
    ),
    'Env.CORS_ORIGINS union must include production origins and localhost',
  );
});
