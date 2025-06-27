# PR Analysis for Release Notes

## PR #5195: v3.22.2

**Author**: mrubens
**Linked Issues**: None found
**Category**: Security/Bug Fixes/Features (Mixed Release)
**User Impact**: This is a comprehensive patch release that addresses a critical security vulnerability, fixes several UI and functionality bugs, and enhances Code Index capabilities. Users get improved security with XSS protection, better terminal integration, fixed checkpoint functionality, corrected Gemini CLI error messages, and more reliable Code Index service management.
**Contributors**: mrubens

**Detailed Changes**:
- **Security**: Fixed XSS vulnerability in CodeBlock component
- **Bug Fixes**: Terminal keyboard shortcut errors, checkpoint popover issues, i18n Gemini CLI translation paths
- **Features**: Code Index (Qdrant) service recreation on configuration changes

---

## PR #5194: fix(i18n): correct gemini cli error translation paths

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: Bug Fix
**User Impact**: Fixed error message display for Gemini CLI across all supported languages by correcting translation paths in locale files
**Contributors**: daniel-lxs

---

## PR #5192: Fix checkpoint popover not opening due to StandardTooltip wrapper conflict

**Author**: daniel-lxs
**Linked Issues**: #5173 (reporter: aprpure)
**Category**: Bug Fix
**User Impact**: Fixed checkpoint menu not opening when clicked, restoring access to checkpoint functionality that users thought had disappeared
**Contributors**: daniel-lxs, aprpure

---

## PR #5157: fix: eliminate XSS vulnerability in CodeBlock component

**Author**: KJ7LNW
**Linked Issues**: #5156 (reporter: KJ7LNW)
**Category**: Security Fix
**User Impact**: Eliminates cross-site scripting (XSS) vulnerability in code display by replacing unsafe HTML rendering with secure React element rendering
**Contributors**: KJ7LNW

---

## PR #5152: Code Index (Qdrant) recreate services when change configurations

**Author**: catrielmuller
**Linked Issues**: None (references external repo issue)
**Category**: Bug Fix
**User Impact**: Fixed Code Index connection reliability when updating Qdrant configuration settings - services now automatically recreate when configurations change, eliminating the need to manually restart connections
**Contributors**: catrielmuller

---

## PR #5161: fix terminal keyboard shortcut error when adding content to context

**Author**: MuriloFP
**Linked Issues**: #2276 (reporter: iamhenry)
**Category**: Bug Fix
**User Impact**: Fixed error when using keyboard shortcuts to add terminal content to context. Users can now use keyboard shortcuts reliably to add terminal output to their context without encountering "Cannot read properties of undefined" errors.
**Contributors**: MuriloFP, iamhenry

---

## PR #5201: v3.22.3

**Author**: mrubens (excluded from acknowledgment per rules)
**Linked Issues**: None found
**Category**: Bug Fix
**User Impact**: Fixed JSON backwards compatibility for `.roomodes` files to ensure older custom modes can be restored correctly without errors
**Contributors**: None (author excluded per documentation rules)

---

## PR #5199: fix: restore JSON backwards compatibility for .roomodes files

**Author**: daniel-lxs
**Linked Issues**: #5180 (reporter: domc66), #5139 (reporter: africa1207)
**Category**: Bug Fix
**User Impact**: Fixed compatibility issue where existing JSON .roomodes files caused YAML format errors and prevented custom modes from working after updating to v3.22.0. Users with JSON format custom mode files can now use them without errors.
**Contributors**: daniel-lxs, domc66, africa1207

---
