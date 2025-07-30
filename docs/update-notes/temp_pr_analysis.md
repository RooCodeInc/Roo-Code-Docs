# PR Analysis for Release Notes v3.25.1

## PR #6378: Cloud: add organization MCP controls

**Author**: jr
**Linked Issues**: None
**Category**: Major Feature
**User Impact**: Enables organizations to define and manage their own MCP (Model Context Protocol) servers in the marketplace, with the ability to hide specific MCPs from view
**Contributors**: jr
**Documentation Needs**: docs-new
**Documentation Notes**: This feature introduces organization-specific MCP management capabilities. Documentation should cover:
- How to define organization MCPs
- How to configure which MCPs are hidden from the marketplace
- The new organization section in the marketplace UI
- Backend configuration for organization settings

---

## PR #6377: feat: add zai-org/GLM-4.5-Air model to Chutes AI provider

**Author**: app/roomote
**Linked Issues**: #6376 (reporter: matbgn)
**Category**: Provider Updates
**User Impact**: Adds support for the GLM-4.5-Air model with 151K token context window for complex reasoning tasks and large codebase analysis - completely free to use
**Contributors**: app/roomote, matbgn
**Documentation Needs**: docs-update
**Documentation Notes**: The provider documentation should be updated to include the new GLM-4.5-Air model in the Chutes AI provider section, highlighting:
- 151,329 token context window
- 106B total parameters with 12B activated
- Free to use (no input/output costs)
- Ideal for complex reasoning tasks and large codebase analysis

---

## PR #6379: Improvements to subshell validation

**Author**: mrubens  
**Linked Issues**: None  
**Category**: QOL Improvements  
**User Impact**: Better handling and validation of complex shell commands with subshells, preventing potential errors when using command substitution patterns like `$()`, backticks, `<()`, `>()`, `$(())`, and `$[]`  
**Contributors**: mrubens  
**Documentation Needs**: docs-update  
**Documentation Notes**: The command execution documentation should be updated to mention the improved subshell support and validation. This affects how users can write complex commands with nested shell operations.

---