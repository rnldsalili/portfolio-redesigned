```txt
npm install
npm run dev
```

`npm run dev` now runs:
- an initial Tailwind build to `public/styles.css`
- Tailwind watch mode
- `wrangler dev`

```txt
npm run deploy
```

`npm run deploy` now runs a Tailwind build before deploying the Worker.

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```
