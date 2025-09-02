# Repository Guidelines

## Project Structure & Module Organization
- App code lives in `src/` with aliases: `@` → `src/`.
- Key folders: `src/components/`, `src/pages/`, `src/hooks/`, `src/lib/`.
- Entry points: `index.html`, `src/main.tsx`, root router in `src/App.tsx`.
- Static assets: `public/` (served at `/`). Netlify serverless functions in `netlify/functions/`.

## Build, Test, and Development Commands
- `npm i`: install dependencies.
- `npm run dev`: start Vite dev server on `http://localhost:8080`.
- `npm run build`: production build to `dist/`.
- `npm run build:dev`: development-mode build (useful for faster checks).
- `npm run preview`: preview the production build locally.
- `npm run lint`: run ESLint checks.

## Coding Style & Naming Conventions
- Language: TypeScript + React, Vite, Tailwind CSS.
- Indentation: 2 spaces (match existing files); avoid tabs in TS/TSX.
- Components: PascalCase (`Header.tsx`), hooks: camelCase (`use-mobile.tsx`), utilities: lowerCamelCase (`lib/utils.ts`).
- Import aliases: prefer `@/...` over relative paths (configured in `vite.config.ts` and `tsconfig*`).
- Linting: ESLint (TS + React Hooks). Autofix locally when possible.

## Testing Guidelines
- No test suite is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Place tests alongside code as `*.test.ts(x)` or under `src/__tests__/`.
- Keep UI tests deterministic; mock network calls.

## Commit & Pull Request Guidelines
- Current history uses short, imperative messages (e.g., "Update ...", "Fix ...").
- Prefer: `type(scope): imperative summary` (e.g., `feat(header): add mobile menu`).
- Commits should be scoped and atomic; avoid unrelated file churn (e.g., large asset reformatting).
- PRs must include: concise description, rationale, screenshots for UI changes, and linked issues.
- Ensure `npm run build` and `npm run lint` pass before requesting review.

## Security & Configuration Tips
- Environment: Node 18+ recommended. Netlify function expects `GOOGLE_CHAT_WEBHOOK_URL` set server-side.
- Do not commit secrets or `.env` files. Use Netlify/CI variables.
- Public assets in `public/` are world-readable; place sensitive files elsewhere.
- Keep routes added above the catch-all in `App.tsx` and validate external links.

