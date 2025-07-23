# PR Analysis for Release Notes v3.23.17

## PR #6091: Release v3.23.17

**Author**: app/roomote
**Linked Issues**: None (This is a release preparation PR)
**Category**: Release (Multiple bug fixes, features, and improvements)
**User Impact**: This release brings numerous improvements including better error handling, new AI model support, enhanced UI features, and various bug fixes that improve overall stability and user experience.
**Contributors**: app/roomote

### Detailed Changes:

**Bug Fixes:**
- **Context Management**: Context condensing prompt moved to proper Prompts section for better organization
- **Terminal Output**: Added character limit to prevent context explosion from excessive terminal output
- **Mode Export**: Fixed global mode export to properly include rules files
- **UI Controls**: Export, share, and copy buttons now remain enabled during API operations
- **File Organization**: Symlinked rules files now sort correctly by symlink names
- **Testing**: Added missing run parameter to vitest command in rules
- **Error Messages**: Better distinction between user cancellations and API failures
- **Cloud Sessions**: More specific error codes for session issues
- **Evals**: Fixed issues introduced by PR #5865
- **Apply Diff**: Added case sensitivity reminder in error messages

**New Features:**
- **File Navigation**: Jump icon for quickly accessing newly created files
- **Evals Configuration**: Configurable timeout slider (5-10 minutes) for evaluation runs
- **MCP Optimization**: Auto-omits MCP content when no servers are configured
- **Provider Support**: Added Mistral embedding provider and Moonshot provider
- **Model Support**: Added Llama-4-maverick to Vertex AI and Qwen3-235B-A22B-Instruct-2507 to Chutes AI
- **Settings UI**: Todo list tool enable checkbox in provider advanced settings

**Improvements:**
- **Token Management**: Enhanced max_tokens fallback logic in sliding window
- **Documentation**: Clarified when to use update_todo_list tool

---

## PR #6052: feat: add Qwen/Qwen3-235B-A22B-Instruct-2507 model to Chutes AI provider

**Author**: app/roomote
**Linked Issues**: #6050 (reporter: apple-techie)
**Category**: Provider Update
**User Impact**: Adds support for the Qwen/Qwen3-235B-A22B-Instruct-2507 model with a massive 262,144 token context window, enabling users to process extremely large documents, entire codebases, and lengthy technical documentation in a single request without breaking them into chunks.
**Contributors**: apple-techie

---

## PR #6076: fix: add case sensitivity mention to suggested fixes in apply_diff error message

**Author**: app/roomote
**Linked Issues**: #4731 (reporter: maskelihileci)
**Category**: QOL Improvement
**User Impact**: Clearer error messages when apply_diff fails due to case sensitivity mismatches. The error message now explicitly mentions that case sensitivity matters when matching content, helping users understand why their edits might fail.
**Contributors**: maskelihileci

---

## PR #5738: Add jump icon for newly created files

**Author**: app/roomote
**Linked Issues**: #5736 (reporter: mkdir700)
**Category**: QOL Improvement
**User Impact**: Users can now quickly open newly created files by clicking the jump icon, providing a consistent experience with edited files
**Contributors**: app/roomote, mkdir700

---

## PR #6032: Add todo list tool enable checkbox to provider advanced settings

**Author**: app/roomote
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Users can now control whether the todo list tool is available to the assistant, providing more flexibility in managing which tools are enabled for their workflow
**Contributors**: app/roomote

---

## PR #5903: fix: sort symlinked rules files by symlink names, not target names

**Author**: app/roomote
**Linked Issues**: #4131 (reporter: dsent)
**Category**: Bug Fix
**User Impact**: Custom rules files using symlinks now load in the correct alphabetical order. Users can reliably control the order of their rules files using numbered symlinks (e.g., 01-database.yaml, 02-api.yaml), making it easier to organize and prioritize custom instructions.
**Contributors**: app/roomote, dsent

---

## PR #6025: fix: properly distinguish between user cancellations and API failures

**Author**: app/roomote
**Linked Issues**: #5427 (reporter: MDean-Slalom)
**Category**: Bug Fix
**User Impact**: Fixed an issue where all API failures were incorrectly shown as "API Request Cancelled". Now users will see the correct error messages when API requests fail, making it easier to diagnose and resolve issues.
**Contributors**: MDean-Slalom, daniel-lxs

---

## PR #5889: feat: auto-omit MCP content when no servers are configured

**Author**: app/roomote
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Cleaner system prompts that automatically exclude MCP-related instructions when you're not using MCP servers, reducing unnecessary verbosity
**Contributors**: app/roomote

---

## PR #5865: feat: add configurable timeout for evals (5-10 min)

**Author**: app/roomote
**Linked Issues**: None
**Category**: Feature
**User Impact**: Users can now configure evaluation run timeouts between 5-10 minutes using a slider interface, allowing longer-running evaluations to complete without timing out.
**Contributors**: app/roomote

---

## PR #5777: fix: add character limit to prevent terminal output context explosion

**Author**: app/roomote
**Linked Issues**: #5775 (reporter: robottwo)
**Category**: Bug Fix
**User Impact**: Fixed a critical issue where terminal commands outputting extremely long lines without newlines would cause context window explosion and crashes. Roo Code now properly limits terminal output by character count (default 100,000 characters) in addition to line count, preventing crashes and ensuring stable operation even with commands that produce massive single-line outputs.
**Contributors**: app/roomote, robottwo

---

## PR #6090: feat: add merge-resolver mode for intelligent conflict resolution

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: Major Feature
**User Impact**: Automatically resolve Git merge conflicts intelligently using commit history analysis. The new merge-resolver mode makes smart decisions about which changes to keep, prioritizing bugfixes, combining improvements, and preserving tests. This saves time and reduces errors when dealing with complex merge conflicts.
**Contributors**: daniel-lxs

---

## PR #6019: fix: add bedrock to ANTHROPIC_STYLE_PROVIDERS and restore vertex Claude model checking

**Author**: daniel-lxs
**Linked Issues**: #6004 (reporter: fedorbass)
**Category**: Bug Fix
**User Impact**: AWS Bedrock users will now see accurate token counts and won't experience false context window exceeded errors or issues with the chat history condenser.
**Contributors**: daniel-lxs, fedorbass

---

## PR #5920: fix: add Git installation check for checkpoints feature (#3109)

**Author**: MuriloFP
**Linked Issues**: #3109 (reporter: hannesrudolph)
**Category**: QOL Improvement
**User Impact**: Users now receive immediate feedback when Git is not installed, preventing silent failures of the checkpoints feature. A clear warning notification appears with a "Learn More" button that directs to the Git download page, helping users quickly resolve the issue.
**Contributors**: MuriloFP

---

## PR #6023: feat: add llama-4-maverick model to Vertex AI provider (#5808)

**Author**: MuriloFP
**Linked Issues**: #5808 (reporter: konstantinosbotonakis)
**Category**: Provider Updates
**User Impact**: Users can now select and use the Llama 4 Maverick model (with 128K context) when using Google Vertex AI as their provider in the US-EAST5 region
**Contributors**: MuriloFP, konstantinosbotonakis

---

## PR #5849: fix: enable export, share, and copy buttons during API operations (#5324)

**Author**: MuriloFP
**Linked Issues**: #5324 (reporter: KJ7LNW)
**Category**: Bug Fix
**User Impact**: Fixed a regression that prevented users from exporting task history, sharing tasks, or copying content while the API was running. These actions are now available during model operations, restoring an important debugging workflow that was broken between versions 3.16.5 and 3.22.5.
**Contributors**: MuriloFP, KJ7LNW

---

## PR #5926: docs: clarify when to use update_todo_list tool

**Author**: hannesrudolph
**Linked Issues**: None
**Category**: Documentation Update
**User Impact**: Clarifies that the todo list tool should be used for complicated tasks, not just multi-step tasks, helping users better understand when to leverage this feature for task management.
**Contributors**: hannesrudolph

---

## PR #5837: fix: resolve global mode export not including rules files (#5834)

**Author**: hannesrudolph
**Linked Issues**: #5834 (reporter: hannesrudolph)
**Category**: Bug Fix
**User Impact**: Fixed an issue where exporting global custom modes did not include their associated rules files. Now when you export a global mode, all rules files from the global configuration directory are properly included in the export, making it easier to share and backup your custom mode configurations.
**Contributors**: hannesrudolph (excluded from release notes per rules)

---

## PR #6065: Fix evals; broken by #5865

**Author**: cte
**Linked Issues**: None
**Category**: Bug Fix
**User Impact**: Fixed the evaluation system that was broken by a previous update, restoring proper timeout handling and service startup functionality
**Contributors**: cte

---

## PR #6051: Bugfix: Cloud: be more specific about session error codes

**Author**: jr
**Linked Issues**: None
**Category**: Bug Fix
**User Impact**: Prevents unnecessary logouts during service outages or rate limiting. Users will maintain their session during temporary service issues instead of being forced to log in again.
**Contributors**: jr

---

## PR #6046: feat: add moonshot provider

**Author**: mrubens
**Linked Issues**: #5869 (reporter: CellenLee)
**Category**: Provider Updates
**User Impact**: Adds support for Moonshot AI models, giving users another AI provider option to choose from in Roo Code
**Contributors**: mrubens, CellenLee

---

## PR #5993: Update the max_tokens fallback logic in the sliding window

**Author**: mrubens
**Linked Issues**: None
**Category**: Misc Improvements
**User Impact**: More predictable context handling with a consistent 8192 token fallback instead of variable 20% calculations, ensuring reliable behavior when working with large conversations.
**Contributors**: mrubens

---

## PR #5991: fix: add run parameter to vitest command in rules

**Author**: KJ7LNW
**Linked Issues**: #5992 (reporter: KJ7LNW)
**Category**: Bug Fix
**User Impact**: Fixed an issue where vitest tests would hang in watch mode waiting for user input. Tests now run to completion automatically without requiring interaction.
**Contributors**: KJ7LNW

---

## PR #5279: fix: move context condensing prompt to Prompts section (#4924)

**Author**: SannidhyaSah
**Linked Issues**: #4924 (reporter: notadamking)
**Category**: QOL Improvement
**User Impact**: The context condensing prompt setting is now easier to find in the Prompts section where users naturally look for it, and the prompt remains visible regardless of auto-condensing settings
**Contributors**: SannidhyaSah, notadamking

---

## PR #5946: feat: Add Mistral embedding provider (#5932)

**Author**: SannidhyaSah
**Linked Issues**: #5932 (reporter: shariqriazz)
**Category**: Feature
**User Impact**: Adds Mistral as a new embedding provider for codebase indexing, offering superior performance at no cost. Users can now choose Mistral's codestral-embed model for better code understanding and more accurate AI responses while reducing operational costs.
**Contributors**: SannidhyaSah, shariqriazz

---
