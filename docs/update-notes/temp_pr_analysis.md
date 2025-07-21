# PR Analysis for Release Notes v3.23.15

## PR #5934: chore: add changeset for v3.23.15 patch release

**Author**: mrubens
**Linked Issues**: None
**Category**: Release Changeset (Multiple Changes)
**User Impact**: This PR documents multiple improvements and fixes included in v3.23.15:
- Fixed diagnostic error reporting timing issues
- Added command timeout configuration options
- Enhanced custom modes with better documentation fields
- Fixed Claude model detection for proper API usage
- Improved UI with better marketplace access and YouTube links
- Added safety option to prevent task completion with unfinished todos
**Contributors**: mrubens

---

## PR #5716: Prevent completion with open todos

**Author**: mrubens
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Adds a new setting to prevent accidentally completing tasks when todo items are still open, helping users ensure all work is finished before marking a task complete.
**Contributors**: mrubens

---

## PR #5929: Added YouTube to website footer

**Author**: thill2323
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Users can now easily find and access Roo Code's YouTube channel directly from the website footer, making it simpler to discover video tutorials and other video content.
**Contributors**: thill2323

---

## PR #5910: Add command timeout allowlist with IPC support

**Author**: app/roomote
**Linked Issues**: None
**Category**: Feature
**User Impact**: Users can now exclude specific commands from timeout restrictions by configuring command prefixes in the allowlist. This is particularly useful for long-running commands like builds, deployments, or data processing tasks that need to run without interruption.
**Contributors**: app/roomote

---

## PR #5863: feat: add configurable delay for Go diagnostics to prevent premature error reporting

**Author**: app/roomote
**Linked Issues**: #5859 (reporter: mmhobi7)
**Category**: QOL Improvement
**User Impact**: Go developers will no longer see false error messages about unused imports that are automatically cleaned up by the linter. This prevents unnecessary token usage and AI confusion. Users can now configure diagnostic delay timing (default 2 seconds) to match their language's linter speed, or disable diagnostics entirely if preferred.
**Contributors**: mmhobi7

---

## PR #5864: feat: move marketplace icon from overflow menu to top navigation

**Author**: app/roomote
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: The marketplace is now directly accessible from the top navigation bar, eliminating the need to click through the overflow menu. This improves discoverability and reduces the number of clicks needed to access marketplace features.
**Contributors**: app/roomote

---

## PR #5913: feat: Add Issue Investigator mode and enhance Issue Writer mode

**Author**: hannesrudolph
**Linked Issues**: None
**Category**: Feature
**User Impact**: Introduces a new Issue Investigator mode for analyzing GitHub issues and finding root causes, plus enhances the Issue Writer mode with improved technical analysis capabilities. Users can now investigate issues more thoroughly before implementation and create better-structured issue documentation.
**Contributors**: hannesrudolph

---

## PR #5862: feat: Add description and whenToUse fields to custom modes in .roomodes

**Author**: RandalSchwartz
**Linked Issues**: #5860 (reporter: RandalSchwartz)
**Category**: QOL Improvement
**User Impact**: Custom modes now display helpful descriptions and usage guidance, making it easier to understand when and how to use each mode
**Contributors**: RandalSchwartz

---

## PR #5840: fix: detect Claude models by name for API protocol selection

**Author**: daniel-lxs
**Linked Issues**: #5830 (reporter: TheFynx)
**Category**: Bug Fix
**User Impact**: Fixed an issue where Claude models used through alternative providers (like Google Vertex AI) would encounter context length errors. Now Claude models are properly detected regardless of the provider, ensuring correct API protocol handling.
**Contributors**: daniel-lxs, TheFynx

---

## PR #5839: Fix/issue fixer pr template

**Author**: MuriloFP
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: The issue-fixer mode now automatically uses the official Roo Code PR template when creating pull requests, ensuring consistency and making it easier for contributors to provide all required information.
**Contributors**: MuriloFP

---
