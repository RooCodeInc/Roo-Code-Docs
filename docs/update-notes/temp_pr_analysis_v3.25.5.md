## PR #6552: Fix VB.NET indexing by implementing fallback chunking system

**Author**: daniel-lxs
**Linked Issues**: #6420 (reporter: JensvanZutphen)
**Category**: Bug Fix
**User Impact**: VB.NET files are now properly indexed in large monorepos, showing all code chunks instead of just 6
**Contributors**: daniel-lxs, JensvanZutphen
**Documentation Needs**: docs-update
**Documentation Notes**: The indexing documentation should be updated to mention that VB.NET and Scala files now use length-based chunking as a fallback when tree-sitter parsers are not available. This is part of the new fallback extension system.

---
## PR #6487: fix: restore message sending when clicking save button

**Author**: daniel-lxs
**Linked Issues**: None (but references PR #6222)
**Category**: Bug Fix
**User Impact**: Fixes a regression where messages were not being sent when clicking the save button in the chat interface
**Contributors**: daniel-lxs
**Documentation Needs**: none
**Documentation Notes**: This is a bug fix that restores previous functionality - no documentation changes needed

---
## PR #6296: fix: handle Qdrant deletion errors gracefully to prevent indexing interruption

**Author**: daniel-lxs
**Linked Issues**: None
**Category**: Bug Fix
**User Impact**: Code indexing now properly deletes outdated entries when files are modified or removed, maintaining an accurate code index without interruption
**Contributors**: daniel-lxs
**Documentation Needs**: none
**Documentation Notes**: This is a bug fix for the internal vector store implementation. No user-facing documentation changes needed.

---
## PR #6538: Clean up the auto-approve UI

**Author**: mrubens
**Linked Issues**: None
**Category**: QOL Improvements
**User Impact**: Cleaner and more streamlined auto-approve interface with simplified layout and improved localization
**Contributors**: mrubens
**Documentation Needs**: none
**Documentation Notes**: UI cleanup only - no functional changes that require documentation

---