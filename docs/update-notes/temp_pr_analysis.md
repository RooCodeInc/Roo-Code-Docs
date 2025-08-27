# PR Analysis for v3.26.1

This file contains analysis of PRs for the v3.26.1 release.

## PR #7461: Remove dot before model display

**Author**: mrubens
**Linked Issues**: #7423 (reporter: daniel-lxs)
**Category**: QOL Improvements
**User Impact**: Provides cleaner display of model names in the API configuration selector by removing the dot separator.
**Contributors**: mrubens, daniel-lxs
**Documentation Needs**: none
**Documentation Notes**: 

---

## PR #7457: feat: update tooltip component to match native VSCode tooltip shadow styling

**Author**: app/roomote

**Linked Issues**: None

**Category**: QOL Improvement

**User Impact**: Better visual consistency with VSCode interface through improved tooltip shadow styling

**Contributors**: app/roomote

**Documentation Needs**: none

**Documentation Notes**: N/A

---

## PR #7448: Always set remoteControlEnabled to true for cloud agents

**Author**: cte
**Linked Issues**: None
**Category**: QOL Improvements
**User Impact**: Cloud agents now automatically have remote control enabled when using cloud tokens, improving consistency and user experience for cloud deployments.
**Contributors**: cte
**Documentation Needs**: none
**Documentation Notes**: Internal improvement with no user-facing documentation requirements.

---

## PR #7446: Update @roo-code/cloud to enable roomote control for cloud agents

**Author**: cte
**Linked Issues**: 
**Category**: Feature
**User Impact**: Enables remote control for cloud agents, allowing users to manage their cloud-based agents remotely through new event handlers and service updates.
**Contributors**: cte
**Documentation Needs**: docs-update
**Documentation Notes**: Update Roo Code Cloud documentation to describe the new remote control capabilities and event handling features.

---

## PR #7445: Add support for Vercel embeddings

**Author**: mrubens
**Linked Issues**: None
**Category**: Feature
**User Impact**: Users can now configure and use Vercel AI Gateway for embeddings in codebase indexing, providing access to additional models and potentially improved performance through the gateway.
**Contributors**: mrubens
**Documentation Needs**: docs-new
**Documentation Notes**: Add configuration guide for Vercel AI Gateway embeddings, including API key setup and model selection.

---

## PR #7443: fix: remove duplicate cache display in task header

**Author**: mrubens
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Improves UI clarity by removing duplicate cache display in task header, eliminating confusion about cache information.
**Contributors**: mrubens, daniel-lxs, roomote, cte, jr
**Documentation Needs**: none
**Documentation Notes**: N/A

---

## PR #7436: Random chat text area cleanup

**Author**: cte
**Linked Issues**: None
**Category**: QOL Improvements
**User Impact**: Improves UI consistency in the chat input area by standardizing selector sizes, updating tooltip styles for consistency, and fixing tooltip behavior that was causing unwanted popups.
**Contributors**: cte, daniel-lxs, ellipsis-dev, roomote, jr, mrubens
**Documentation Needs**: none
**Documentation Notes**: Internal UI consistency improvements and code cleanup with no user-facing changes requiring documentation.

---

## PR #7433: fix: use anthropic protocol for token counting when using anthropic models via Vercel AI Gateway

**Author**: daniel-lxs
**Linked Issues**: None explicitly linked (PR mentions "original issue" but no specific issue number found)
**Category**: Provider Update / Bug Fix
**User Impact**: Fixes incorrect token counting for Anthropic models accessed through Vercel AI Gateway, ensuring accurate context window reporting and preventing "prompt too long" errors.
**Contributors**: daniel-lxs
**Documentation Needs**: docs-update
**Documentation Notes**: Update Vercel AI Gateway provider documentation to mention accurate token counting support for Anthropic models.

---

## PR #7423: feat: show model ID in API configuration dropdown

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Enhances API configuration dropdown to display model IDs alongside profile names, making it easier for users to identify which AI model is configured for each profile.
**Contributors**: daniel-lxs
**Documentation Needs**: docs-update
**Documentation Notes**: Update API configuration documentation to mention the new model ID display feature.

---
