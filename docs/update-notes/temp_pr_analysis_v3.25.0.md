# PR Analysis for v3.25.0

This is a temporary file for analyzing PRs for the v3.25.0 release.

## PR #6357: feat: make PR reviewer rules generic

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: PR reviewer mode can now be used for reviewing pull requests in any GitHub repository without modification, making it more versatile and reusable
**Contributors**: daniel-lxs
**Documentation Needs**: docs-update
**Documentation Notes**: The PR reviewer mode documentation should be updated to reflect that it now works generically with any GitHub repository, not just Roo-Code specific repos. Update any examples or instructions that may reference the old hardcoded behavior.

---
## PR #5959: Feat: Adding Gemini tools - URL Context and Grounding with Google Search

**Author**: HahaBill
**Linked Issues**: #4519 (reporter: HahaBill)
**Category**: Major Feature
**User Impact**: Enables Gemini models to access web content and perform Google Search grounding for more accurate and up-to-date responses
**Contributors**: HahaBill
**Documentation Needs**: docs-new, docs-update, docs-example
**Documentation Notes**: 
- New feature requires documentation on how to enable and use URL context and Google Search grounding with Gemini
- Update existing Gemini provider documentation to include new capabilities
- Add examples showing practical use cases for web-grounded responses
- Suggested location: /docs/providers/gemini with new sections for URL context and grounding features

**Technical Details**:
- Adds URL context capability to Gemini provider
- Implements Google Search grounding functionality
- Updates Gemini provider settings UI with new configuration options
- Includes comprehensive test coverage for new features
- Adds internationalization support for new settings across all supported languages

**Key Benefits**:
- **Real-time Information**: Gemini can now access current web content and search results
- **Enhanced Accuracy**: Grounding with Google Search provides more reliable, fact-based responses
- **Expanded Capabilities**: URL context allows analysis of specific web pages and documents
- **User Control**: New settings allow users to enable/disable these features as needed

---
## PR #6074: feat: add prompt caching support for LiteLLM (#5791)

**Author**: MuriloFP
**Linked Issues**: #5791 (reporter: steve-gore-snapdocs)
**Category**: Provider Updates
**User Impact**: Enables prompt caching for LiteLLM provider when using compatible models (like Claude 3.5 Sonnet), reducing API costs and improving response times by caching system prompts and recent user messages
**Contributors**: MuriloFP, steve-gore-snapdocs
**Documentation Needs**: none
**Documentation Notes**: Feature is self-explanatory through UI with existing translation keys. No additional documentation required as it's an optional checkbox that appears only for compatible models.

---
## PR #5172: feat(tools): add image support to read_file tool

**Author**: samhvw8
**Linked Issues**: #5169 (reporter: samhvw8)
**Category**: Major Feature
**User Impact**: Enables reading and displaying image files directly through the read_file tool, supporting multiple formats (PNG, JPG, JPEG, GIF, WebP, SVG, BMP, ICO, TIFF) with automatic base64 conversion and MIME type detection
**Contributors**: samhvw8
**Documentation Needs**: docs-new, docs-example
**Documentation Notes**: Need to document the new image reading capability in the read_file tool documentation, including supported formats, usage examples for OCR workflows, and handling multiple images with descriptions. Should also add examples showing how to read multiple images from a folder for analysis.

**Technical Details**:
- Adds `readImageAsDataUrl` function for converting images to base64 data URLs
- Implements multi-part responses with XML metadata and image data
- Includes dimension extraction for PNG files
- Maintains backward compatibility for non-image binary files
- Comprehensive test coverage for all supported image formats
- Updates to global settings and webview components for image handling
- Internationalization support across all supported languages

**Key Benefits**:
- Solves the problem of sending multiple images with descriptions
- Enables OCR workflows on multiple images from folders
- Provides better context for image analysis tasks
- Supports common image formats used in development and design

---
## PR #6140: Add search functionality to mode selector popup and reorganize layout

**Author**: hannesrudolph
**Linked Issues**: #6128 (reporter: hannesrudolph)
**Category**: QOL Improvement
**User Impact**: Users can now search through modes when they have many installed, making mode selection faster and more efficient. The layout is also more consistent with the model selector popup.
**Contributors**: hannesrudolph
**Documentation Needs**: none
**Documentation Notes**: UI enhancement only, no new features requiring documentation. The search functionality is intuitive and follows existing patterns.

**Key Changes:**
- Adds fuzzy search functionality to mode selector popup using Fzf library
- Reorganizes layout: moves marketplace/settings buttons to bottom, adds info tooltip
- Search input appears when more than 6 modes are available
- Maintains all existing keyboard shortcuts and accessibility features
- Updates translations across all supported locales

**Technical Details:**
- Modified `ModeSelector.tsx` with 200 additions, 76 deletions
- Added comprehensive test coverage in `ModeSelector.spec.tsx`
- Updated 18 translation files to support new search strings
- Uses existing Command component pattern for consistency

---
## PR #6167: feat: Add support for message queueing

**Author**: app/roomote (bot)
**Linked Issues**: None found
**Category**: Major Feature
**User Impact**: Adds message queueing functionality that allows users to send multiple messages while the agent is working, with messages being queued and processed sequentially
**Contributors**: app/roomote
**Documentation Needs**: docs-new, docs-example
**Documentation Notes**: New feature requires documentation explaining how message queueing works, when messages are queued vs sent immediately, and how users can manage the queue. Should include examples of typical queueing scenarios and UI explanations.

**Technical Details**: 
- Adds message queueing support when agent is busy
- New QueuedMessages component for UI display
- Modified ChatTextArea and ChatView components
- Added translations for 13 languages
- Includes comprehensive test coverage

---
## PR #6177: feat: make task mode sticky to task

**Author**: app/roomote
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Tasks now remember the last mode used, automatically switching back to that mode when reopened from history
**Contributors**: app/roomote
**Documentation Needs**: docs-update
**Documentation Notes**: Update task management documentation to explain sticky mode behavior and how modes persist across task sessions

---

## PR #6175: feat: add ESC key handling for modes, API provider, and indexing settings popovers

**Author**: app/roomote
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Users can now press ESC to close popovers (mode selector, API provider selector, code indexing settings), providing more intuitive keyboard navigation
**Contributors**: app/roomote
**Documentation Needs**: none
**Documentation Notes**: Minor UI improvement, no documentation changes needed

---

## PR #6214: feat: Add experimental setting to prevent editor focus disruption

**Author**: app/roomote
**Linked Issues**: #4784 (reporter: hannesrudolph)
**Category**: Major Feature
**User Impact**: New experimental setting allows users to disable diff views entirely, enabling uninterrupted work while Roo Code edits files in the background
**Contributors**: app/roomote, hannesrudolph
**Documentation Needs**: docs-new, docs-example
**Documentation Notes**: Need new experimental features documentation section explaining the "Prevent Editor Focus Disruption" setting, its benefits, trade-offs, and usage scenarios

---

## PR #6186: fix: exclude rules-{slug} folder from mode export paths

**Author**: app/roomote
**Linked Issues**: #6185 (reporter: hannesrudolph)
**Category**: Bug Fix
**User Impact**: Fixed mode export/import functionality to allow changing slugs in exported YAML files without manual path editing
**Contributors**: app/roomote, hannesrudolph
**Documentation Needs**: docs-update
**Documentation Notes**: Update custom modes documentation to explain improved export/import workflow and slug changing capabilities

---

## PR #6162: Fix keyboard shortcuts for non-QWERTY layouts

**Author**: app/roomote
**Linked Issues**: #6161 (reporter: shlgug)
**Category**: Bug Fix
**User Impact**: Fixed keyboard shortcuts to work correctly with non-QWERTY layouts (e.g., Dvorak), preventing unintended mode switches when using Ctrl+V
**Contributors**: app/roomote, shlgug
**Documentation Needs**: none
**Documentation Notes**: Bug fix only, no documentation changes needed

---
## PR #6336: Better command highlighting

**Author**: mrubens
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Improved slash command highlighting that only highlights valid commands, making the interface cleaner and more accurate
**Contributors**: mrubens
**Documentation Needs**: none
**Documentation Notes**: UI improvement only, no documentation changes needed

---

## PR #6358: chore: add changeset for v3.25.0

**Author**: mrubens
**Linked Issues**: None
**Category**: Version/Release Preparation
**User Impact**: Version bump and localization updates for v3.25.0 release
**Contributors**: mrubens
**Documentation Needs**: none
**Documentation Notes**: Version preparation only, no user-facing feature changes

---

## PR #6255: fix: add text wrapping to command patterns in Manage Command Permissions

**Author**: app/roomote
**Linked Issues**: None
**Category**: Bug Fix
**User Impact**: Fixed text wrapping for long command patterns in the Manage Command Permissions section, improving readability
**Contributors**: app/roomote
**Documentation Needs**: none
**Documentation Notes**: UI bug fix only, no documentation changes needed

---

## PR #6275: fix: optimize README for VS Code marketplace to prevent UI freezing

**Author**: app/roomote
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Eliminated VS Code freezing when viewing the Roo Code extension in the marketplace by creating a lightweight README
**Contributors**: app/roomote
**Documentation Needs**: none
**Documentation Notes**: Performance optimization only, no user-facing feature documentation needed

---

## PR #6216: fix: hide Test ErrorBoundary button in production mode

**Author**: app/roomote
**Linked Issues**: #6215 (reporter: bangjohn)
**Category**: Bug Fix
**User Impact**: Prevents accidental triggering of test errors by hiding the Test ErrorBoundary button in production builds
**Contributors**: app/roomote, bangjohn
**Documentation Needs**: none
**Documentation Notes**: Bug fix only, no documentation changes needed

---
## PR #6333: Command argument hints and change release engineer to a command

**Author**: mrubens
**Linked Issues**: None found
**Category**: Major Feature
**User Impact**: Adds command argument hints to improve user experience when using slash commands, and converts the release engineer role into a proper command
**Contributors**: mrubens
**Documentation Needs**: docs-update
**Documentation Notes**: Need to update command documentation to explain argument hints feature and update any references to release-engineer mode

---

## PR #6332: Ensure form-data >= 4.0.4

**Author**: mrubens
**Linked Issues**: Security advisory GHSA-fjxv-7rqg-78g4
**Category**: Security Fix
**User Impact**: Addresses security vulnerability by updating form-data dependency to a secure version
**Contributors**: mrubens
**Documentation Needs**: none
**Documentation Notes**: Security update only, no user-facing changes

---

## PR #6331: Parse mentions from all user inputs

**Author**: mrubens
**Linked Issues**: None found
**Category**: Bug Fix
**User Impact**: Fixes issue where @mentions couldn't be used when responding to questions or in certain user input contexts
**Contributors**: mrubens
**Documentation Needs**: none
**Documentation Notes**: Bug fix only, existing mention functionality now works in more contexts

---

## PR #6327: Support inserting mentions after a slash command

**Author**: mrubens
**Linked Issues**: None found
**Category**: QOL Improvement
**User Impact**: Improves slash command workflow by allowing users to insert mentions after typing a slash command
**Contributors**: mrubens
**Documentation Needs**: docs-update
**Documentation Notes**: May need to update slash command documentation to mention this improved workflow

---

## PR #6325: Fix slash command highlighting

**Author**: mrubens
**Linked Issues**: None found
**Category**: Bug Fix
**User Impact**: Fixes visual highlighting issues with slash commands in the interface
**Contributors**: mrubens
**Documentation Needs**: none
**Documentation Notes**: UI bug fix only, no documentation changes needed

---
## PR #6314: Add support for slash command frontmatter descriptions

**Author**: mrubens
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: Slash commands can now include descriptions in frontmatter metadata, making them more informative and easier to understand when browsing available commands
**Contributors**: mrubens
**Documentation Needs**: docs-update
**Documentation Notes**: Need to update slash commands documentation to explain frontmatter description support and provide examples

---

## PR #6286: Add a UI for managing slash commands

**Author**: mrubens
**Linked Issues**: None
**Category**: Major Feature
**User Impact**: Users can now create, edit, and delete custom slash commands through a dedicated UI interface, with fuzzy search support for better command discovery
**Contributors**: mrubens
**Documentation Needs**: docs-new, docs-example
**Documentation Notes**: Need new documentation page for slash command management UI with step-by-step guide and examples of creating custom commands

---

## PR #6263: Support for custom slash commands

**Author**: mrubens
**Linked Issues**: None
**Category**: Major Feature
**User Impact**: Users can now create custom slash commands by placing markdown files in `.roo/commands/` or `~/.roo/commands/` directories, enabling personalized workflow automation
**Contributors**: mrubens
**Documentation Needs**: docs-new, docs-example
**Documentation Notes**: Need comprehensive documentation on creating custom slash commands, file structure, and examples of common use cases

---

## PR #6328: feat: Update PR reviewer mode to use todo lists and GitHub CLI

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: QOL Improvement
**User Impact**: PR reviewer mode now provides better progress tracking with todo lists and uses standard GitHub CLI commands for more reliable GitHub operations
**Contributors**: daniel-lxs
**Documentation Needs**: docs-update
**Documentation Notes**: Update PR reviewer mode documentation to reflect new todo list tracking and GitHub CLI usage

---

## PR #6324: Restore PR reviewer

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: Bug Fix
**User Impact**: Restores PR reviewer mode functionality with updated and simplified rule structure for better code review workflows
**Contributors**: daniel-lxs
**Documentation Needs**: docs-update
**Documentation Notes**: Update PR reviewer mode documentation to reflect the new simplified rule structure

---
## PR #6266: fix: prevent scrollbar flickering in chat view during content streaming

**Author**: daniel-lxs
**Linked Issues**: None mentioned
**Category**: Bug Fix
**User Impact**: Fixed scrollbar flickering when streaming markdown content with tables and code blocks in chat view
**Contributors**: daniel-lxs
**Documentation Needs**: none
**Documentation Notes**: Bug fix only, improves chat interface stability during content streaming

---

## PR #6261: test: update list-files test for fixed hidden files bug

**Author**: daniel-lxs
**Linked Issues**: None mentioned (test update for existing bug fix)
**Category**: Test Update
**User Impact**: Ensures hidden files are correctly included in non-recursive directory listings (reflects bug fix)
**Contributors**: daniel-lxs
**Documentation Needs**: none
**Documentation Notes**: Test update only, no user-facing changes

---

## PR #6253: fix: restore working settings link in command permissions tooltip

**Author**: daniel-lxs
**Linked Issues**: References PR #5798 where bug was introduced
**Category**: Bug Fix
**User Impact**: Fixed broken "View Settings" link in command permissions tooltip that now properly opens auto-approve settings
**Contributors**: daniel-lxs
**Documentation Needs**: none
**Documentation Notes**: Bug fix only, restores expected functionality

---

## PR #6252: feat: add markdown table rendering support

**Author**: daniel-lxs
**Linked Issues**: None mentioned
**Category**: Major Feature
**User Impact**: Added support for rendering markdown tables in chat interface with proper styling and GitHub Flavored Markdown support
**Contributors**: daniel-lxs
**Documentation Needs**: docs-example
**Documentation Notes**: New feature that enables table rendering - could benefit from examples in chat interface documentation showing table usage

---

## PR #6355: Remove duplicated assignment

**Author**: chrarnoldus
**Linked Issues**: None mentioned
**Category**: Code Cleanup
**User Impact**: Minor code cleanup removing duplicate state assignment in ErrorBoundary component
**Contributors**: chrarnoldus
**Documentation Needs**: none
**Documentation Notes**: Internal code cleanup only, no user-facing impact

---
## PR #6350: fix(environment): Filter out non-text tab inputs

**Author**: hassoncs
**Linked Issues**: Kilo-Org/kilocode#712 (reporter: szermatt)
**Category**: Bug Fix
**User Impact**: Fixed multi-file edit operations failing when Git diff views are open in VSCode
**Contributors**: hassoncs, szermatt
**Documentation Needs**: none
**Documentation Notes**: Bug fix only, no documentation changes needed

---

## PR #6346: Add .roomotes.yml

**Author**: cte
**Linked Issues**: none
**Category**: Internal/Infrastructure
**User Impact**: Internal repository configuration for automated commands and GitHub event actions
**Contributors**: cte
**Documentation Needs**: none
**Documentation Notes**: Internal configuration file, not user-facing

---

## PR #6313: feat(mode-writer): add validation and cohesion checking for mode creation

**Author**: hannesrudolph
**Linked Issues**: none
**Category**: Internal/Infrastructure
**User Impact**: Enhanced internal tooling for mode creation and modification with improved validation
**Contributors**: hannesrudolph
**Documentation Needs**: none
**Documentation Notes**: Internal improvement to mode-writer functionality, not user-facing

---

## PR #6311: Improve issue-writer mode initialization workflow

**Author**: hannesrudolph
**Linked Issues**: none
**Category**: Internal/Infrastructure
**User Impact**: Streamlined initialization workflow for internal issue-writer mode
**Contributors**: hannesrudolph
**Documentation Needs**: none
**Documentation Notes**: Internal mode improvement, not user-facing

---

## PR #6303: Revert "fix: optimize README for VS Code marketplace to prevent UI freezing"

**Author**: hannesrudolph
**Linked Issues**: none (reverts PR #6275)
**Category**: Bug Fix/Revert
**User Impact**: Reverted README optimization that did not resolve VS Code marketplace UI freezing issue
**Contributors**: hannesrudolph
**Documentation Needs**: none
**Documentation Notes**: Revert of previous optimization attempt, no documentation impact

---
## PR #6230: Update issue writer rules and workflow configurations

**Author**: hannesrudolph
**Linked Issues**: None
**Category**: QOL Improvements
**User Impact**: Improved issue writer mode functionality with better workflow steps, repository-specific template handling, and enhanced issue creation process
**Contributors**: hannesrudolph
**Documentation Needs**: docs-update
**Documentation Notes**: Issue writer mode documentation may need updates to reflect new workflow behavior and template handling improvements

---

## PR #6148: feat: sync API config selector style with mode selector from PR #6140

**Author**: hannesrudolph
**Linked Issues**: None
**Category**: QOL Improvements
**User Impact**: Enhanced UI consistency with improved API configuration selector that matches mode selector styling, includes search functionality and better visual layout
**Contributors**: hannesrudolph
**Documentation Needs**: none
**Documentation Notes**: UI improvement only, no documentation changes needed

---

## PR #5176: fix: list_files recursive mode now works for dot directories

**Author**: MuriloFP
**Linked Issues**: #2992 (reporter: avtc), #5409 (reporter: MuriloFP), #4807 (reporter: zhang157686)
**Category**: Bug Fix
**User Impact**: Fixed issue where list_files tool with recursive mode failed to show contents of hidden directories (starting with dot) when explicitly targeted
**Contributors**: MuriloFP, avtc, zhang157686
**Documentation Needs**: none
**Documentation Notes**: Bug fix only, existing tool documentation remains accurate

---

## PR #6302: Update contributors list

**Author**: app/github-actions
**Linked Issues**: None
**Category**: Misc Improvements
**User Impact**: Updated contributor acknowledgments in README files across all locales
**Contributors**: github-actions
**Documentation Needs**: none
**Documentation Notes**: Automated contributor list update, no documentation changes needed

---

## PR #6305: fix: remove demo GIF from VS Code README to prevent marketplace freezing

**Author**: app/roomote
**Linked Issues**: None
**Category**: Bug Fix
**User Impact**: Fixed VS Code marketplace freezing issue by removing large demo GIF from VS Code-specific README while preserving contributor section
**Contributors**: roomote
**Documentation Needs**: none
**Documentation Notes**: Internal build process change, no user-facing documentation impact

---

## PR #6308: fix: normalize Windows paths to forward slashes in mode export

**Author**: app/roomote
**Linked Issues**: #6307 (reporter: hannesrudolph)
**Category**: Bug Fix
**User Impact**: Fixed cross-platform compatibility issue where custom mode exports from Windows contained backslash paths that failed on Unix-based systems
**Contributors**: roomote, hannesrudolph
**Documentation Needs**: none
**Documentation Notes**: Bug fix only, existing mode export documentation remains accurate

---

## PR #6315: fix: empty README.vscode.md to test marketplace freezing issue

**Author**: app/roomote
**Linked Issues**: Related to #6305
**Category**: Bug Fix
**User Impact**: Further testing fix for VS Code marketplace freezing by completely emptying VS Code README content
**Contributors**: roomote
**Documentation Needs**: none
**Documentation Notes**: Temporary testing change, no documentation impact

---