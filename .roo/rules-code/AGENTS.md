# AGENTS.md

This file provides guidance to agents when working with code in this repository.

- Linting targets only /src; docs are excluded. Use "pnpm run lint:unused" to enforce removal of unused imports. See [package.json](package.json).
- Type checking uses tsc only (no emit); [tsconfig.json](tsconfig.json) is editor-focused. Run "pnpm run check-types" locally; CI does not check-types.
- Use Docusaurus @site alias for cross-root imports from theme/MDX; example at [src/theme/MDXComponents.ts](src/theme/MDXComponents.ts:2).
- Centralize external URLs in [src/constants.ts](src/constants.ts); consumed by [docusaurus.config.ts](docusaurus.config.ts:21) for navbar/footer.
- When moving docs, add redirects in [docusaurus.config.ts](docusaurus.config.ts:109); onBrokenLinks is warn ([docusaurus.config.ts](docusaurus.config.ts:40)) so missing redirects won’t fail CI.
- Internal doc links must be absolute and extensionless per [.roorules](.roorules) (e.g., /basic-usage/how-tools-work).
- Images in docs must use HTML tags: <img src="/img/...png" alt="..." width="600" /> (Markdown image syntax is disallowed).
- Builds preload dotenv. No environment variables are required by default; use [.env.example](.env.example) only when adding local-only settings. See [docusaurus.config.ts](docusaurus.config.ts) and [package.json](package.json).
- Use Node 20 locally to match CI ([.github/workflows/docusaurus-build.yml](.github/workflows/docusaurus-build.yml:23)); package engines allow >=18.
- “Tutorial Videos” sidebar is driven by [docs/tutorial-videos.json](docs/tutorial-videos.json); titles truncated to 40 chars in [sidebars.ts](sidebars.ts:5).
