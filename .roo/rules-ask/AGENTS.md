# AGENTS.md

This file provides guidance to agents when working with code in this repository.

- Docusaurus docs, not source code. This is documentation for the Roo Code VS Code extension at docs.roocode.com.
- Legacy [Rakefile](Rakefile) is from old Jekyll site. Ignore it; current build uses Docusaurus/npm scripts.
- Tutorial videos defined in [docs/tutorial-videos.json](docs/tutorial-videos.json), dynamically loaded in [sidebars.ts](sidebars.ts:37-42). Titles truncated to 40 chars.
- Release notes have thanking exclusions: don't thank daniel-lxs, cte, hannesrudolph, jr, roomote, app/roomote, dleffel, mrubens per [.roorules](.roorules:14).
- Many docs moved; check redirects in [docusaurus.config.ts](docusaurus.config.ts:109-271) when referencing old paths.
- Context7 MCP configured in [.roo/mcp.json](.roo/mcp.json) with library ID "/facebook/docusaurus" for structural research.
- Sidebar structure in [sidebars.ts](sidebars.ts) has nested categories; update-notes organized by major.minor versions.