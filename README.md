# Portfolio Redesigned

Cloudflare Worker app for a server-rendered portfolio site built with Hono + JSX and Tailwind CSS.

## Tech Stack
- Cloudflare Workers + Wrangler
- Hono (routing, middleware, JSX rendering)
- Tailwind CSS (compiled to `public/styles.css`)
- TypeScript + ESLint

## Routes
- `GET /` - portfolio home page
- `GET /contact` - contact page
- `GET /health` - health check JSON (`status` and `timestamp`)

## Project Structure
- `src/index.ts` - Worker entrypoint
- `src/app.ts` - app factory + shared middleware (secure headers, rate limiter, logger, CORS, error handlers)
- `src/routes/index.ts` - route registration
- `src/routes/<feature>/` - feature route modules
- `src/components/` - server-rendered page/layout components
- `src/styles/tailwind.css` - Tailwind input
- `public/styles.css` - generated Tailwind output
- `wrangler.jsonc` - Worker/env/rate limit/routes config

## Getting Started
```bash
npm install
npm run dev
```

`npm run dev` does all of the following:
1. Runs an initial Tailwind build.
2. Starts Tailwind watch mode.
3. Starts `wrangler dev` (configured for port `3000`).

## Scripts
- `npm run dev` - Tailwind build + watch + local Worker dev server
- `npm run dev:worker` - local Worker dev server only
- `npm run tailwind:build` - one-time Tailwind build/minify
- `npm run tailwind:watch` - Tailwind watch mode
- `npm run deploy` - Tailwind build, then `wrangler deploy --minify`
- `npm run cf-typegen` - regenerate `worker-configuration.d.ts`
- `npm run lint` - run ESLint
- `npm run lint:fix` - auto-fix lint issues

## Configuration Notes
- `CORS_ORIGINS` is read from `wrangler.jsonc` env vars and applied by global CORS middleware.
- `RATE_LIMITER` is required for the global `hono-rate-limiter` middleware.
- Static assets are served from `public/` via Wrangler `assets.directory`.

After editing bindings/vars/rate limit config in `wrangler.jsonc`, run:

```bash
npm run cf-typegen
```

## Deployment
```bash
npm run deploy
```

This command builds Tailwind first, then deploys the Worker with minification enabled.
