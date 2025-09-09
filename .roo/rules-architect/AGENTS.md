# AGENTS.md

This file provides guidance to agents when working with code in this repository.

- Theme components swizzled from Docusaurus core; modifying requires understanding [src/theme/](src/theme/) override hierarchy.
- Sitemap uses custom plugin ([docusaurus.config.ts](docusaurus.config.ts:94-107)) filtering "/page/" URLs; preset sitemap disabled. Don't re-enable preset.
- Redirects required when moving docs ([docusaurus.config.ts](docusaurus.config.ts:109-271)); onBrokenLinks won't fail builds but creates poor UX.
- Constants centralized in [src/constants.ts](src/constants.ts) for all external URLs. Never hardcode URLs in config or components.
- PostHog analytics conditionally loaded based on env var ([docusaurus.config.ts](docusaurus.config.ts:84-93)); architectural decision for privacy/GDPR.
- Search uses local plugin (@easyops-cn/docusaurus-search-local) with docsRouteBasePath "/" - maintain consistency.
- No blog feature (disabled in preset); this is pure documentation site, not a content platform.