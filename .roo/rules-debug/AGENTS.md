# AGENTS.md

This file provides guidance to agents when working with code in this repository.

- CI only builds, doesn't lint/check-types ([.github/workflows/docusaurus-build.yml](.github/workflows/docusaurus-build.yml:29)). Run "pnpm run lint" and "pnpm run check-types" locally before pushing.
- PostHog analytics silently skips if POSTHOG_API_KEY missing. Check [.env](.env) exists with key from [.env.example](.env.example).
- No test framework configured. Scripts exist in package.json but no test files or jest/vitest config present.
- Docusaurus dev server at localhost:3000. Hot reload may fail for theme swizzled components; restart if changes don't appear.
- onBrokenLinks set to "warn" ([docusaurus.config.ts](docusaurus.config.ts:40)) - broken links won't fail build but check console warnings.
- Node version mismatch (engines >=18, CI uses 20) can cause subtle differences. Use Node 20 locally.