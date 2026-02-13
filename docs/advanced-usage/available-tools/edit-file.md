---
description: Replace all occurrences of text in files using the edit_file search-and-replace tool in Roo Code.
keywords:
  - edit_file
  - search and replace
  - file editing
  - text replacement
  - Roo Code tools
  - code modifications
---

# edit_file

The `edit_file` tool performs search-and-replace operations on files, replacing **all occurrences** of specified text. It provides a straightforward way to make consistent changes across a file when you need to update every instance of a pattern.

---

## Parameters

The tool accepts these parameters:

- `file_path` (required): The path of the file to modify relative to the current working directory.
- `old_string` (required): The exact text to search for and replace.
- `new_string` (required): The text to replace all occurrences with.
- `expected_replacements` (optional): Expected number of replacements. If specified, the operation fails if the actual count doesn't match.

---

## What It Does

This tool searches for an exact string in a file and replaces **all occurrences** with new text. The replacement is performed globally across the entire file, making it ideal for consistent updates like renaming variables, updating API endpoints, or fixing repeated patterns.

---

## When is it used?

- When renaming variables, functions, or identifiers throughout a file
- When updating repeated string literals or configuration values
- When fixing consistent typos or outdated terminology
- When replacing all instances of a deprecated API or import path
- When you need to ensure exact match replacement without fuzzy logic

---

## Key Features

- Replaces **all occurrences** by default (global replacement)
- Exact string matching (no regex or fuzzy matching)
- Optional validation via `expected_replacements` parameter
- Shows preview of changes before applying
- Fails safely if expected replacement count doesn't match actual
- Preserves file formatting and structure

---

## Limitations

- Requires exact string matches (case-sensitive, whitespace-sensitive)
- Always replaces all occurrences (cannot target specific instances)
- Cannot use regular expressions or patterns
- Not suitable for context-dependent replacements
- Less precise than [`apply_diff`](/advanced-usage/available-tools/apply-diff) for complex edits

---

## How It Works

When the `edit_file` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates required `file_path`, `old_string`, and `new_string` parameters.
2. **File Loading**: Reads the target file content.
3. **Search Operation**: Searches for all occurrences of `old_string` in the file.
4. **Count Validation**: If `expected_replacements` is specified, validates the actual occurrence count matches.
5. **Replacement**: Replaces all found occurrences with `new_string`.
6. **User Review**: Shows a preview of changes for user approval.
7. **Application**: Applies changes to the file if approved.
8. **Feedback**: Reports the number of replacements made.

---

## Relation to Other Tools

- `edit_file`: Replaces **all occurrences** (this tool)
- [`edit`](/advanced-usage/available-tools/edit): Replaces **first occurrence** only (unless `replace_all: true`)
- [`search_replace`](/advanced-usage/available-tools/search-replace): Also replaces **all occurrences**
- [`apply_diff`](/advanced-usage/available-tools/apply-diff): Use for precise, context-aware edits with fuzzy matching

These are different implementations of search-and-replace with varying default behaviors.
