# Repository Guidelines

## Project Structure & Module Organization
- `src/index.ts` is the Worker entrypoint and exports the app.
- `src/app.ts` builds the base Hono app, global middleware (rate limiter, logger, CORS), and error handlers.
- `src/routes/index.ts` is the route registry.
- Feature routes live in `src/routes/<feature>/<feature>.index.ts` (example: `src/routes/health/health.index.ts`).
- `wrangler.jsonc` defines environments, vars, bindings, and routes.
- `tsconfig.json` provides strict TypeScript settings and the `@/*` path alias.
- `worker-configuration.d.ts` is generated from Wrangler (`cf-typegen`); do not edit it manually.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: run the Worker locally with Wrangler (configured to port `3000`).
- `npm run deploy`: deploy the Worker with minification.
- `npm run cf-typegen`: regenerate Cloudflare binding types after config changes.
- `npm run lint`: run ESLint checks.
- `npm run lint:fix`: auto-fix lint issues.

There is currently no test script in `package.json`. If you add tests, also add a documented `npm test` command.

## Coding Style & Naming Conventions
- Use TypeScript with ES modules and strict typing.
- Follow ESLint rules: single quotes, semicolons, trailing commas (multiline), and spaced object braces.
- Keep imports grouped and alphabetized (`builtin`, `external`, `internal`, then relatives).
- Prefer alias imports (`@/app`, `@/routes/...`) over long relative paths.
- Naming pattern for route files: `<feature>.index.ts`; exported router variables in `camelCase` (for example, `healthRoute`).

## Commit & Pull Request Guidelines
- Git history is unavailable in this snapshot, so use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- Keep each commit focused and lint-clean.
- PRs should include a short summary of what changed and why.
- PRs should call out API/config impacts, especially `wrangler.jsonc` vars, bindings, and routes.
- PRs should include validation evidence (at minimum `npm run lint`, plus test output when tests exist).
- PRs should include example request/response payloads for behavior changes.

## Security & Configuration Tips
- Keep `CORS_ORIGINS` minimal per environment.
- Verify `RATE_LIMITER` binding names and namespace IDs before deployment.
- Do not commit secrets; use Wrangler environment configuration/secrets.
