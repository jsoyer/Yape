# Repository Guidelines

## Project Structure & Module Organization
Browser entry points (`popup.js`, `options.js`, `background.js`, `content-relay.js`) live beside their HTML and CSS counterparts. Shared logic is grouped under `js/` (API bridge, storage, views, utilities), assets sit in `css/`, `images/`, and `webfonts/`, and automation lives in `scripts/`. Tests are in `tests/`, while `build/` and `dist/` hold generated artifacts—never hand-edit those, regenerate them from source instead. When adding features, mirror the existing view modules (e.g., `js/views/history.js`) to keep UI code scoped per panel.

## Build, Test, and Development Commands
- `npm run build:manifests` — rebuilds both Chrome and Firefox manifests from shared metadata.
- `npm test` / `npm run test:watch` — execute Vitest once or in watch mode.
- `npm run lint` / `npm run lint:fix` — apply the ESLint ruleset; run the fixer before every push.
- `npm run validate:json` — confirm `_locales/` entries and manifest fragments stay well-formed.

## Coding Style & Naming Conventions
Use ES modules with 4-space indentation, descriptive filenames, and feature-prefixed exports (`updateHistoryView`, `getCaptchaTask`). ESLint forbids `var`, enforces strict equality, and warns on unused args (prefix ignored args with `_`). Keep DOM selectors and user-facing strings in `constants.js` or `_locales/` to stay localization-ready, and push reusable helpers into `js/utils.js` instead of copy/pasting.

## Testing Guidelines
Vitest specs live in `tests/*.test.js`; mirror that naming for new helpers or parsers. Cover any transformation, rate-limit, or formatting logic you touch, and add regression tests whenever you fix a bug. Keep fixtures small and serializable so they can double as docs. Run `npm test` before opening a PR and include any relevant coverage notes if edge cases remain untested.

## Commit & Pull Request Guidelines
Follow the lightweight Conventional Commits style seen in the log (`feat/queue-expand-files`, `security/hardening`, `chore: bump version`). PRs should explain the problem, summarize the change, list manual verification steps (e.g., “loaded unpacked build, switched servers, solved captcha”), and attach screenshots/GIFs for UI updates. Reference related ROADMAP or task items, keep commits focused, and rebase onto the latest main before requesting review.

## Security & Configuration Tips
Do not commit real PyLoad credentials or server data; rely on the encrypted storage paths already provided. Document any new host permissions in the PR and re-run `npm run build:manifests` so both stores stay aligned. Always run `npm run validate:json` after touching `_locales/` or manifest snippets, and keep CSP-friendly patterns (no inline scripts or eval) intact.
