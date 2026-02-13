---
description: Replace all occurrences of text in files using the search_replace tool in Roo Code.
keywords:
  - search_replace
  - search and replace
  - file editing
  - text replacement
  - Roo Code tools
  - code modifications
---

# search_replace

The `search_replace` tool performs search-and-replace operations on files, replacing **all occurrences** of specified text. It provides a straightforward way to make global text substitutions throughout a file.

---

## Parameters

The tool accepts these parameters:

- `file_path` (required): The path of the file to modify relative to the current working directory.
- `old_string` (required): The exact text to search for and replace.
- `new_string` (required): The text to replace all occurrences with.

---

## What It Does

This tool searches for an exact string in a file and replaces **all occurrences** with new text. The replacement is performed globally across the entire file, making it ideal for consistent updates where every instance needs to change.

---

## When is it used?

- When replacing all instances of a string throughout a file
- When updating repeated string literals or configuration values
- When renaming variables, functions, or identifiers globally
- When fixing consistent patterns or outdated terminology
- When you need simple, exact string replacement for all matches

---

## Key Features

- Replaces **all occurrences** globally (no option for single replacement)
- Exact string matching (no regex or fuzzy matching)
- Simple three-parameter interface
- Shows preview of changes before applying
- Preserves file formatting and structure
- User approval required before applying changes

---

## Limitations

- Requires exact string matches (case-sensitive, whitespace-sensitive)
- Always replaces all occurrences (cannot target specific instances)
- Cannot use regular expressions or patterns
- Not suitable for context-dependent replacements
- Less precise than [`apply_diff`](/advanced-usage/available-tools/apply-diff) for complex edits

---

## How It Works

When the `search_replace` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates required `file_path`, `old_string`, and `new_string` parameters.
2. **File Loading**: Reads the target file content.
3. **Search Operation**: Searches for all occurrences of `old_string` in the file.
4. **Replacement**: Replaces all found occurrences with `new_string`.
5. **User Review**: Shows a preview of changes for user approval.
6. **Application**: Applies changes to the file if approved.
7. **Feedback**: Reports the result of the operation.

---

## Relation to Other Tools

- `search_replace`: Always replaces **all occurrences** (this tool)
- [`edit_file`](/advanced-usage/available-tools/edit-file): Also replaces **all occurrences** (with optional expected count validation)
- [`edit`](/advanced-usage/available-tools/edit): Replaces **first occurrence** by default (unless `replace_all: true`)
- [`apply_diff`](/advanced-usage/available-tools/apply-diff): Use for precise, context-aware edits with fuzzy matching

These are different implementations of search-and-replace functionality with varying capabilities.
