## PR #6090: feat: add merge-resolver mode for intelligent conflict resolution

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: Major Feature
**User Impact**: New mode for intelligent Git merge conflict resolution that analyzes commit history and intent to make informed decisions when resolving conflicts. Also updates PR Fixer mode to automatically delegate merge conflicts to this specialized mode.
**Contributors**: daniel-lxs

---
## PR #5969: feat: add support for Agent Rules standard via AGENTS.md (#5966)

**Author**: app/roomote
**Linked Issues**: #5966 (reporter: sgryphon)
**Category**: Features
**User Impact**: Roo Code now supports the Agent Rules standard through AGENTS.md files, allowing you to share natural language guidelines across different AI coding tools. This means you can maintain a single set of coding standards, security practices, and workflow rules that work with Roo Code, Aider, Cline, and other compatible tools.
**Contributors**: sgryphon

---
## PR #5798: feat: Add terminal command permissions UI to chat interface (#5480)

**Author**: hannesrudolph
**Linked Issues**: #5480 (reporter: hannesrudolph)
**Category**: Features
**User Impact**: Manage terminal command permissions directly in the chat interface with an interactive UI that shows suggested patterns and allows toggling between allowed/denied states
**Contributors**: hannesrudolph

---
## PR #5582: feat: Add settings to control diagnostic messages (#5524)

**Author**: hannesrudolph
**Linked Issues**: #5524 (reporter: hannesrudolph), #4860 (reporter: hannesrudolph)
**Category**: QOL Improvements
**User Impact**: Users can now control how many diagnostic messages (errors, warnings) appear in their context, preventing overwhelming amounts of diagnostics from cluttering the interface and slowing down Roo Code's responses. This is especially helpful when working with legacy code or projects that temporarily have many errors during development.
**Contributors**: hannesrudolph

---
## PR #6103: Fix todo list toggle not working

**Author**: chrarnoldus
**Linked Issues**: None
**Category**: Bug Fix
**User Impact**: Fixed the todo list toggle feature that wasn't working properly, allowing users to enable/disable todo lists in their tasks as intended
**Contributors**: chrarnoldus

---

## PR #6095: fix: restore list styles for markdown lists in chat interface

**Author**: app/roomote
**Linked Issues**: #6094 (reporter: village-way)
**Category**: Bug Fix
**User Impact**: Markdown lists (both ordered and unordered) now display properly in the chat interface with correct bullets, numbers, and indentation, making them visually distinguishable from regular paragraphs
**Contributors**: app/roomote, village-way

---

## PR #6079: Fix Ollama API URL normalization by removing trailing slashes

**Author**: Naam
**Linked Issues**: #6078 (reporter: Naam)
**Category**: Bug Fix
**User Impact**: Fixed Ollama integration issues caused by trailing slashes in API URLs, preventing confusing error messages about models not supporting embedding when the real issue was URL formatting
**Contributors**: Naam

---

## PR #6073: fix: respect maxReadFileLine setting for file mentions to prevent context exhaustion

**Author**: app/roomote
**Linked Issues**: #6069 (reporter: sebinseban)
**Category**: Bug Fix
**User Impact**: Prevents Roo Code from failing with "Failed to condense" errors when accidentally reading very large source files (>5000 lines), especially important in Orchestrator mode where it could wipe out task context
**Contributors**: app/roomote, sebinseban

---

## PR #6061: fix: allow auto-approve checkbox to be toggled at any time

**Author**: KJ7LNW
**Linked Issues**: #6060 (reporter: KJ7LNW)
**Category**: Bug Fix
**User Impact**: Fixed a critical safety issue where the auto-approve checkbox would become unresponsive during model responses, ensuring users can always disable auto-approval to prevent unwanted actions
**Contributors**: KJ7LNW

---
## PR #6228: refactor: consolidate HuggingFace models API into providers/fetchers

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: Misc Improvements
**User Impact**: Improved code organization for better maintainability
**Contributors**: daniel-lxs

---

## PR #6055: feat: add efficiency warning for single SEARCH/REPLACE blocks in apply_diff

**Author**: KJ7LNW
**Linked Issues**: None
**Category**: QOL Improvements
**User Impact**: Better guidance for efficient file editing with apply_diff tool
**Contributors**: KJ7LNW

---

## PR #5920: fix: add Git installation check for checkpoints feature (#3109)

**Author**: MuriloFP
**Linked Issues**: #3109 (reporter: hannesrudolph)
**Category**: Bug Fixes
**User Impact**: Clear warning when Git is not installed, preventing silent checkpoint failures
**Contributors**: MuriloFP

---

## PR #5743: fix: resolve 'Bad substitution' error in command parsing

**Author**: daniel-lxs
**Linked Issues**: #5978 (reporter: KJ7LNW)
**Category**: Bug Fixes
**User Impact**: Fixed crashes when using complex bash commands with special syntax
**Contributors**: daniel-lxs, KJ7LNW

---

## PR #5085: debug: Add ErrorBoundary component for better error handling

**Author**: KJ7LNW
**Linked Issues**: #5731 (reporter: elianiva)
**Category**: QOL Improvements
**User Impact**: Better error handling prevents complete UI crashes, showing helpful error messages instead
**Contributors**: KJ7LNW, elianiva

---