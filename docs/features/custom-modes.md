# Customizing Modes

Roo Code allows you to create **custom modes** to tailor Roo's behavior to specific tasks or workflows. Custom modes can be either **global** (available across all projects) or **project-specific** (defined within a single project).

:::tip Sticky Models for Efficient Workflow
Each mode—including custom ones—features **Sticky Models**. This means Roo Code automatically remembers and selects the last model you used with a particular mode. This lets you assign different preferred models to different tasks without constant reconfiguration, as Roo switches between models when you change modes.
:::

## Why Use Custom Modes?

*   **Specialization:** Create modes optimized for specific tasks, like "Documentation Writer," "Test Engineer," or "Refactoring Expert"
*   **Safety:** Restrict a mode's access to sensitive files or commands. For example, a "Review Mode" could be limited to read-only operations
*   **Experimentation:** Safely experiment with different prompts and configurations without affecting other modes
*   **Team Collaboration:** Share custom modes with your team to standardize workflows

<img src="/img/custom-modes/custom-modes-3.png" alt="Overview of custom modes interface" width="500" />

    *Roo Code's interface for creating and managing custom modes.*

## What's Included in a Custom Mode?

Custom modes are defined by several key properties. Understanding these concepts will help you tailor Roo's behavior effectively before diving into the JSON configuration.

| UI Field / JSON Property                 | Conceptual Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Slug (`slug`)                            | A **unique internal identifier** for the mode. It's used by Roo Code to reference the mode, especially for associating [mode-specific instruction files](#mode-specific-instructions-via-filesdirectories).                                                                                                                                                                                                   |
| Name (`name`)                            | The **display name** for the mode as it appears in the Roo Code user interface. This should be human-readable and descriptive.                                                                                                                                                                                                                                                                               |
| Role Definition (`roleDefinition`)       | Defines the **core identity and expertise** of the mode. This text is placed at the beginning of the system prompt.<br />- Its primary function is to define Roo's personality and behavior when this mode is active.<br />- The **first sentence** (up to the first period `.`) serves as a default concise summary for Roo to understand the mode's general purpose. <br />- **However, if the `whenToUse` property is defined, `whenToUse` takes precedence** for summarizing the mode's function, especially in contexts like task orchestration or mode switching. In such cases, the first sentence of `roleDefinition` is less critical for this specific summarization task, though the entire `roleDefinition` is still used when the mode is active to guide its overall behavior. |
| Available Tools (`groups`)               | Defines the **allowed toolsets and file access permissions** for the mode.<br />- In the UI, this corresponds to selecting which general categories of tools (like reading files, editing files, browsing, or executing commands) the mode can use.<br />- File type restrictions for the "edit" group are typically managed via manual JSON configuration or by asking Roo to set them up, as detailed in the [JSON Property Details for `groups`](#groups). |
| When to Use (optional) (`whenToUse`)     | (Optional) Provides **guidance for Roo to understand the mode's purpose**, especially for automated decisions.<br />- This text is used by Roo, particularly the [`🪃 Orchestrator`](/basic-usage/using-modes#orchestrator-mode-aka-boomerang-mode) mode, for [orchestrating tasks](/features/boomerang-tasks) (e.g., via the [`new_task`](/advanced-usage/available-tools/new-task) tool).<br />- It also helps Roo decide which mode is appropriate when [switching modes](/basic-usage/using-modes#switching-between-modes) (e.g., via the [`switch_mode`](/advanced-usage/available-tools/switch-mode) tool).<br />- If populated, this description is used by Roo to understand the mode's function; otherwise, the first sentence of the `roleDefinition` is used by default. |
| Custom Instructions (optional) (`customInstructions`) | **Specific behavioral guidelines** or rules for the mode.<br />- These instructions are added near the end of the system prompt to further refine Roo's behavior beyond the `roleDefinition`.<br />- This can be provided directly in the configuration or via separate instruction files.                                                                                                                               |

## Methods for Creating and Configuring Custom Modes

You can create and configure custom modes in several ways:

### 1. Ask Roo! (Recommended)

You can quickly create a basic custom mode by asking Roo Code to do it for you. For example:
```
Create a new mode called "Documentation Writer". It should only be able to read files and write Markdown files.
```
Roo Code will guide you through the process, prompting for necessary information for the properties described in the [What's Included in a Custom Mode?](#whats-included-in-a-custom-mode) table. For fine-tuning or making specific adjustments later, you can use the Prompts tab or manual configuration.

### 2. Using the Prompts Tab

1.  **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar.
2.  **Create New Mode:** Click the <Codicon name="add" /> button to the right of the Modes heading.
3.  **Fill in Fields:**

<img src="/img/custom-modes/custom-modes-4.png" alt="Custom mode creation interface in the Prompts tab" width="600" />

*The custom mode creation interface showing fields for name, slug, save location, role definition, available tools, custom instructions.*

    The interface provides fields for `Name`, `Slug`, `Save Location`, `Role Definition`, `When to Use (optional)`, `Available Tools`, and `Custom Instructions`. After filling these, click the "Create Mode" button.

*Refer to the [What's Included in a Custom Mode?](#whats-included-in-a-custom-mode) table for conceptual explanations of each property. File type restrictions for the "edit" tool group can be added by asking Roo or through manual JSON configuration.*

### 3. Manual Configuration and JSON Structure

You can directly edit the JSON configuration files to create or modify custom modes. This method offers the most control over all properties.

*   **Global Modes:** Edit the `custom_modes.json` file. Access it via **Prompts Tab** > <Codicon name="bracket" /> (Settings Menu) > "Edit Global Modes".
*   **Project Modes:** Edit the `.roomodes` file in your project root. Access it via **Prompts Tab** > <Codicon name="bracket" /> (Settings Menu) > "Edit Project Modes".

Both files use the same JSON format. Each configuration file contains a `customModes` array, where each element is an object defining a single custom mode.

```json
{
  "customModes": [
    {
      "slug": "mode-slug-example",
      "name": "Example Mode Display Name",
      "roleDefinition": "This mode's role and capabilities are defined here.",
      "whenToUse": "Describe when this mode is most appropriate here.",
      "customInstructions": "Additional guidelines for this example mode.",
      "groups": [
        "read",
        "edit", // Can also be ["edit", { "fileRegex": "\\.md$", "description": "Markdown only" }]
        "browser",
        "command",
        "mcp"
      ]
    }
  ]
}
```

#### JSON Property Details

##### `slug`
*   **Purpose:** A unique identifier for the mode.
*   **Format:** Use lowercase letters, numbers, and hyphens.
*   **Usage:** Used internally and in file/directory names for mode-specific rules (e.g., `.roo/rules-{slug}/`).
*   **Recommendation:** Keep it short and descriptive.
*   *JSON Example:* `"slug": "docs-writer"`

##### `name`
*   **Purpose:** The display name shown in the Roo Code UI.
*   **Format:** Can include spaces and proper capitalization.
*   *JSON Example:* `"name": "Documentation Writer"`

##### `roleDefinition`
*   **Purpose:** Detailed description of the mode's role, expertise, and personality.
*   **Placement:** This text is placed at the beginning of the system prompt when the mode is active.
*   **Important First Sentence:** The first sentence (up to the first period `.`) serves as a default concise summary for Roo to understand the mode's general purpose. **However, if the `whenToUse` property is defined, `whenToUse` takes precedence** for summarizing the mode's function, especially in contexts like task orchestration or mode selection. In such cases, the first sentence of `roleDefinition` is less critical for this specific summarization task, though the entire `roleDefinition` is still used when the mode is active to guide its overall behavior.
*   *JSON Example:* `"roleDefinition": "You are a technical writer specializing in clear documentation."`

##### `groups`
*   **Purpose:** Array defining which tool groups the mode can access and any file restrictions.
*   **Available Tool Groups (Strings):** `"read"`, `"edit"`, `"browser"`, `"command"`, `"mcp"`.
*   **File Restrictions for "edit" group:**
    *   **Format:** To apply file restrictions, the "edit" entry becomes an array: `["edit", { "fileRegex": "your-regex-pattern", "description": "Optional description" }]`
    *   `fileRegex`: A JavaScript-style regular expression string to control which files the mode can edit. Remember to double-escape backslashes in the JSON string (e.g., `\\.` for a literal dot).
        *   *Example `fileRegex` values:* `"\\.md$"` (Markdown files), `"\\.(test\|spec)\\.(js\|ts)$"` (JS/TS test files).
    *   `description`: An optional string describing the restriction.
    *   For more complex patterns and detailed explanations, see [Understanding Regex in Custom Modes](#understanding-regex-in-custom-modes).
*   *JSON Example:*
    ```json
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]
    ]
    ```

##### `whenToUse`
*   **Purpose:** (Optional) Provides guidance for Roo to understand what this mode does. This is primarily used by the [`🪃 Orchestrator`](/basic-usage/using-modes#orchestrator-mode-aka-boomerang-mode) mode for [orchestrating tasks](/features/boomerang-tasks) (e.g., via the [`new_task`](/advanced-usage/available-tools/new-task) tool) and for determining the appropriate mode when [switching modes](/basic-usage/using-modes#switching-between-modes) (e.g., via the [`switch_mode`](/advanced-usage/available-tools/switch-mode) tool).
*   **Format:** A string describing ideal scenarios or task types for this mode.
*   **Usage:** If populated, Roo uses this description to understand the mode's function. Otherwise, the first sentence of the `roleDefinition` is used by default.
*   **JSON Example:** `"whenToUse": "This mode is best for refactoring Python code to improve performance and readability."`

##### `customInstructions`
*   **Purpose:** A string containing additional behavioral guidelines for the mode.
*   **Placement:** This text is added near the end of the system prompt.
*   **Supplementing:** Can be supplemented or replaced by instructions in [Mode-Specific Instructions via Files/Directories](#mode-specific-instructions-via-filesdirectories).
*   *JSON Example:* `"customInstructions": "Focus on explaining concepts and providing examples."`

## Mode-Specific Instructions via Files/Directories

:::info Mode-Specific Instruction File Locations
You can provide instructions for custom modes using dedicated files or directories within your workspace. This allows for better organization and version control compared to only using the JSON `customInstructions` property.

**Preferred Method: Directory (`.roo/rules-{mode-slug}/`)**
```
.
├── .roo/
│   └── rules-docs-writer/  # Example for mode slug "docs-writer"
│       ├── 01-style-guide.md
│       └── 02-formatting.txt
└── ... (other project files)
```

**Fallback Method: Single File (`.roorules-{mode-slug}`)**
```
.
├── .roorules-docs-writer  # Example for mode slug "docs-writer"
└── ... (other project files)
```
The directory method takes precedence if it exists and contains files.
:::

In addition to the `customInstructions` property in JSON, you can provide mode-specific instructions via files in your workspace. This is particularly useful for:

*   Organizing lengthy or complex instructions into multiple, manageable files.
*   Managing instructions easily with version control.
*   Allowing non-technical team members to modify instructions without editing JSON.

There are two ways Roo Code loads these instructions, with a clear preference for the newer directory-based method:

**1. Preferred Method: Directory-Based Instructions (`.roo/rules-{mode-slug}/`)**

*   **Structure:** Create a directory named `.roo/rules-{mode-slug}/` in your workspace root. Replace `{mode-slug}` with your mode's slug (e.g., `.roo/rules-docs-writer/`).
*   **Content:** Place one or more files (e.g., `.md`, `.txt`) containing your instructions inside this directory. You can organize instructions further using subdirectories; Roo Code reads files recursively, appending their content to the system prompt in **alphabetical order** based on filename.
*   **Loading:** All instruction files found within this directory structure will be loaded and applied to the specified mode.

**2. Fallback (Backward Compatibility): File-Based Instructions (`.roorules-{mode-slug}`)**

*   **Structure:** If the `.roo/rules-{mode-slug}/` directory **does not exist or is empty**, Roo Code will look for a single file named `.roorules-{mode-slug}` in your workspace root (e.g., `.roorules-docs-writer`).
*   **Loading:** If found, the content of this single file will be loaded as instructions for the mode.

**Precedence:**

*   The **directory-based method (`.roo/rules-{mode-slug}/`) takes precedence**. If this directory exists and contains files, any corresponding root-level `.roorules-{mode-slug}` file will be **ignored** for that mode.
*   This ensures that projects migrated to the new directory structure behave predictably, while older projects using the single-file method remain compatible.

**Combining with JSON `customInstructions`:**

*   Instructions loaded from either the directory or the fallback file are combined with the `customInstructions` property defined in the mode's JSON configuration.
*   Typically, the content from the files/directories is appended after the content from the JSON `customInstructions` property.

## Configuration Precedence

Mode configurations are applied in this order:

1. Project-level mode configurations (from `.roomodes`)
2. Global mode configurations (from `custom_modes.json`)
3. Default mode configurations

This means that project-specific configurations will override global configurations, which in turn override default configurations. You can override any default mode (like `code`, `debug`, `architect`, `ask`, `orchestrator` (aka Boomerang Mode)) by including a mode with the same slug in either your global or project-specific configuration.

*   **Note on Instruction Files:** Within the loading of mode-specific instructions from the filesystem, the directory `.roo/rules-{mode-slug}/` takes precedence over the single file `.roorules-{mode-slug}` found in the workspace root.

## Overriding Default Modes

You can override Roo Code's built-in modes (like `💻 Code`, `🪲 Debug`, `❓ Ask`, `🏗️ Architect`, `🪃 Orchestrator` (aka Boomerang Mode)) with customized versions that better suit your workflow. This is done by creating a custom mode with the same slug as a default mode (e.g., `code`, `debug`, `orchestrator`).

### Overriding Modes Globally

To customize a default mode across all your projects:

1. **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2. **Access Settings Menu:** Click the <Codicon name="bracket" /> button to the right of the Modes heading
3. **Edit Global Modes:** Select "Edit Global Modes" to edit `custom_modes.json`
4. **Add Your Override:** Create an entry with the same slug as the built-in mode you want to override

```json
{
  "customModes": [{
    "slug": "code", // Matches the default 'code' mode slug
    "name": "💻 Code (Global Override)", // Custom display name
    "roleDefinition": "You are a software engineer with global-specific constraints",
    "whenToUse": "This globally overridden code mode is for JS/TS tasks.",
    "customInstructions": "Focus on project-specific JS/TS development",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.(js|ts)$", "description": "JS/TS files only" }]
    ]
  }]
}
```

This example replaces the default `💻 Code` mode with a custom version that can only edit JavaScript and TypeScript files.

### Project-Specific Mode Override

To override a default mode for just one project:

1. **Open Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Roo Code top menu bar
2. **Access Settings Menu:** Click the <Codicon name="bracket" /> button to the right of the Modes heading
3. **Edit Project Modes:** Select "Edit Project Modes" to edit the `.roomodes` file
4. **Add Your Override:** Create an entry with the same slug as the built-in mode you want to override

```json
{
  "customModes": [{
    "slug": "code", // Matches the default 'code' mode slug
    "name": "💻 Code (Project-Specific)", // Custom display name
    "roleDefinition": "You are a software engineer with project-specific constraints",
    "whenToUse": "This project-specific code mode is for JS/TS tasks within this project.",
    "customInstructions": "Focus on project-specific JS/TS development",
    "groups": [
      "read",
      ["edit", { "fileRegex": "\\.(js|ts)$", "description": "JS/TS files only" }]
    ]
  }]
}
```

Project-specific overrides take precedence over global overrides, which in turn override the built-in defaults.

### Common Use Cases for Overriding Default Modes

Common reasons to override built-in modes include:

* **Restricting file access:** Limit a mode to specific file types for safety (e.g., restricting `💻 Code` mode to only edit non-production files)
* **Specializing behavior:** Customize a mode's expertise for your tech stack (e.g., making `🪲 Debug` mode focus on your framework)
* **Adding custom instructions:** Integrate project standards or team guidelines directly into modes
* **Changing available tools:** Remove certain tools from modes to prevent unwanted operations

:::tip
When overriding default modes, test your configuration carefully. Small changes to core modes can significantly impact functionality. Consider creating a backup of your original configuration before making substantial changes.
:::

By following these instructions, you can create and manage custom modes to enhance your workflow with Roo Code.

## Understanding Regex in Custom Modes

While basic file restrictions are covered under the `groups` property, this section provides a more detailed look at using regular expressions for advanced control over which files Roo can edit.

:::tip
**Let Roo Build Your Regex Patterns**

Instead of writing complex regex patterns manually, you can ask Roo to create them for you! Simply describe which files you want to include or exclude:
```
Create a regex pattern that matches JavaScript files but excludes test files
```
Roo will generate the appropriate pattern with proper escaping for JSON configuration.
:::

When you specify `fileRegex` in a custom mode, you're creating a pattern that file paths must match. For example:
```json
["edit", { "fileRegex": "\\.md$", "description": "Markdown files only" }]
```

**Important Rules for `fileRegex`:**
*   **Double Backslashes:** In JSON strings, backslashes (`\`) are special characters and must be escaped with another backslash. So, a regex pattern like `\.md$` becomes `"\\.md$"` in your JSON configuration.
*   **Path Matching:** Patterns match against the full relative file path from your workspace root (e.g., `src/components/button.js`), not just the filename.
*   **Case Sensitivity:** Regex patterns are case-sensitive by default.

**Common Pattern Examples:**

| Pattern                         | Matches                                   | Doesn't Match                         |
| ------------------------------- | ----------------------------------------- | ------------------------------------- |
| `"\\.md$"`                      | `readme.md`, `docs/guide.md`              | `script.js`, `readme.md.bak`          |
| `"^src/.*"`                     | `src/app.js`, `src/components/button.tsx` | `lib/utils.js`, `test/src/mock.js`    |
| `"\\.(css\|scss)$"`             | `styles.css`, `theme.scss`                | `styles.less`, `styles.css.map`       |
| `"docs/.*\\.md$"`               | `docs/guide.md`, `docs/api/reference.md`  | `guide.md`, `src/docs/notes.md`       |
| `"^(?!.*(test\|spec))\\.(js\|ts)$"` | `app.js`, `utils.ts`                      | `app.test.js`, `utils.spec.js`, `app.jsx` |


**Key Regex Building Blocks:**
*   `\.`: Matches a literal dot (period). In JSON, use `"\\."`.
*   `$`: Matches the end of the string (filename).
*   `^`: Matches the beginning of the string (filepath).
*   `.*`: Matches any character (except newline) zero or more times.
*   `(a|b)`: Matches either "a" or "b". In JSON, use `"\\.(js|ts)$"` to match `.js` or `.ts`.
*   `(?!...)`: Negative lookahead (asserts that the pattern does not match). For example, `^(?!.*(test\|spec))` ensures the path doesn't contain "test" or "spec".

**Testing Your Patterns:**
Before applying a regex pattern:
1.  Test it on sample file paths to ensure it behaves as expected. Online regex testers can be helpful.
2.  Remember the double backslash rule for JSON.
3.  Start with simpler patterns and build complexity gradually.

## Community Gallery
Ready to explore more? Check out the [Custom Modes Gallery](/community/#custom-modes-gallery) section on the main community page to discover and share custom modes created by the community!
