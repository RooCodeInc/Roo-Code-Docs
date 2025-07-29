---
description: Learn how to create and use custom slash commands in Roo Code to automate workflows and extend functionality with markdown-based definitions.
keywords:
  - slash commands
  - custom commands
  - Roo Code commands
  - command automation
  - workflow automation
  - markdown commands
  - .roo/commands
image: /img/social-share.jpg
---

# Slash Commands

Create custom slash commands to automate repetitive tasks and extend Roo Code's functionality with simple markdown files.

:::tip Quick Start
Type `/` in the chat to see all available commands, or create your own by adding a markdown file to `.roo/commands/` or `~/.roo/commands/`!
:::

---

## Overview

Slash commands let you create reusable prompts and workflows that can be triggered instantly. Turn complex multi-step processes into single commands, standardize team practices, and automate repetitive tasks with simple markdown files.

<img src="/img/slash-commands/slash-commands.png" alt="Slash commands menu showing available commands" width="400" />

**Key Benefits:**
- **Workflow Automation**: Turn complex multi-step processes into single commands
- **Team Standardization**: Share commands across your team for consistent practices
- **Context Preservation**: Include project-specific context in every command
- **Quick Access**: Fuzzy search and autocomplete for instant command discovery

---

## Creating Custom Commands

Custom commands extend Roo Code's functionality by adding markdown files to specific directories:

- **Project-specific**: `.roo/commands/` in your workspace root
- **Global**: `~/.roo/commands/` in your home directory

The filename becomes the command name. For example:
- `review.md` → `/review`
- `test-api.md` → `/test-api`
- `deploy-check.md` → `/deploy-check`

:::info Command Name Processing
When creating commands through the UI, command names are automatically processed:
- Converted to lowercase
- Spaces replaced with dashes
- Special characters removed
- Leading/trailing dashes removed

Example: "My Cool Command!" becomes `my-cool-command`
:::

**Basic Command Format**

Create a simple command by adding a markdown file:

```markdown
# review.md
Please review this code for:
- Performance issues
- Security vulnerabilities
- Code style violations
- Potential bugs
```

**Advanced Command with Frontmatter**

Add metadata using frontmatter for enhanced functionality:

```yaml
---
description: Comprehensive code review focusing on security and performance
argument-hint: <file or directory to review>
---

# Security-First Code Review

Please perform a thorough security review of the selected code:

1. **Authentication & Authorization**
   - Check for proper access controls
   - Verify token validation
   - Review permission checks

2. **Input Validation**
   - Identify potential injection points
   - Check for proper sanitization
   - Review data type validation

3. **Security Best Practices**
   - Look for hardcoded secrets
   - Check for secure communication
   - Review error handling for information leakage
```

**Frontmatter Fields:**
- **`description`**: Appears in the command menu to help users understand the command's purpose
- **`argument-hint`**: (Optional) Provides a hint about expected arguments when using the command. See [Argument Hints](#argument-hints) for detailed information

---

## Command Management UI

Roo Code provides a dedicated UI for managing custom commands.

<img src="/img/slash-commands/slash-commands-4.png" alt="Accessing the command manager from Roo Code panel" width="600" />

*Click the commands icon in the Roo Code panel to open the command manager*

**Creating a New Command:**

1. Type your command name in the input field (e.g., "Sample command name")
2. Click the `+` button to create the command

<img src="/img/slash-commands/slash-commands-1.png" alt="Custom Commands Management Interface" width="400" />


3. A new file will be created and opened automatically (e.g., `sample-command-name.md`)

<img src="/img/slash-commands/slash-commands-2.png" alt="Creating a new command by typing name and clicking plus button" width="600" />


---

## Using Slash Commands

Type `/` in the chat to see a unified menu containing both types of commands. The menu shows both custom workflow commands and mode-switching commands in the same interface.

<img src="/img/slash-commands/slash-commands-3.png" alt="Newly created command file opened in editor" width="600" />


1. **Unified Menu**: Both custom commands and mode-switching commands appear together
2. **Autocomplete**: Start typing to filter commands (e.g., `/sam` shows `sample-command-name`)
3. **Fuzzy Search**: Find commands even with partial matches
4. **Description Preview**: See command descriptions in the menu
5. **Visual Indicators**: Mode commands are distinguished from custom commands with special icons

---

## Argument Hints

Argument hints provide instant help for slash commands, showing you what kind of information to provide when a command expects additional input.

When you type `/` to bring up the command menu, commands that expect arguments will display a light gray hint next to them. This hint tells you what kind of argument the command is expecting.

For example:
- `/mode <mode_slug>` - The hint `<mode_slug>` indicates you should provide a mode name like `code` or `debug`
- `/api-endpoint <endpoint-name> <http-method>` - Shows you need both an endpoint name and HTTP method

After selecting the command, it will be inserted into the chat input followed by a space. The hint is not inserted; it is only a visual guide to help you know what to type next. You must then manually type the argument after the command.

**Adding Argument Hints to Custom Commands**

You can add argument hints to your custom commands using the `argument-hint` field in the frontmatter:

```yaml
---
description: Generate a new REST API endpoint with best practices
argument-hint: <endpoint-name> <http-method>
---
```

This will display as `/api-endpoint <endpoint-name> <http-method>` in the command menu.

**Best Practices for Argument Hints:**
- **Be Specific**: Use descriptive placeholders like `<file-path>` instead of generic ones like `<arg>`
- **Show Multiple Arguments**: If your command needs multiple inputs, show them all: `<source> <destination>`
- **Use Consistent Format**: Always wrap placeholders in angle brackets: `<placeholder>`
- **Keep It Concise**: Hints should be brief and clear

**Common Questions:**

- **"What if I don't provide the argument?"** The command might not work as expected, or it might prompt you for more information. The hint is there to help you get it right the first time.
- **"Do all commands have hints?"** No, only commands that are designed to take arguments will have hints. Commands that work without additional input won't show hints.
- **"Can I use a command without replacing the hint?"** The hint text (like `<mode_slug>`) needs to be replaced with actual values. Leaving the hint text will likely cause the command to fail or behave unexpectedly.

---

## Examples and Use Cases

**Development Workflows**

**API Endpoint Generator**
```yaml
---
description: Generate a new REST API endpoint with best practices
argument-hint: <endpoint-name> <http-method>
---

Create a new REST API endpoint with the following specifications:
- Proper error handling
- Input validation
- Authentication middleware
- OpenAPI documentation
- Unit tests
- Integration tests

Follow our project's API conventions and patterns.
```

**Database Migration Helper**
```yaml
---
description: Create a database migration with rollback support
---

Generate a database migration that:
1. Includes both up and down migrations
2. Has proper transaction handling
3. Includes data validation
4. Provides clear migration descriptions
5. Follows our naming conventions

Remember to check for dependent migrations and data integrity.
```

**Code Quality**

**Performance Analyzer**
```yaml
---
description: Analyze code for performance bottlenecks
---

Analyze the selected code for performance issues:
- Identify O(n²) or worse algorithms
- Find unnecessary database queries
- Detect memory leaks
- Suggest caching opportunities
- Recommend async/await optimizations
- Check for proper resource cleanup
```

**Refactoring Assistant**
```yaml
---
description: Suggest refactoring improvements for cleaner code
---

Review this code and suggest refactoring improvements:
- Extract repeated code into functions
- Improve variable and function names
- Simplify complex conditionals
- Apply SOLID principles
- Reduce coupling between components
- Improve testability
```

**Documentation**

**README Generator**
```yaml
---
description: Create a comprehensive README for the current project
---

Generate a README.md file that includes:
1. Project title and description
2. Installation instructions
3. Usage examples
4. API documentation
5. Configuration options
6. Contributing guidelines
7. License information

Base it on the current project structure and existing code.
```

**API Documentation**
```yaml
---
description: Generate OpenAPI/Swagger documentation
---

Create OpenAPI 3.0 documentation for the API endpoints in this file:
- Include all HTTP methods
- Document request/response schemas
- Add example requests and responses
- Include authentication requirements
- Document error responses
- Add descriptive summaries
```

**Testing**

**Test Generator**
```yaml
---
description: Generate comprehensive test suites
---

Create tests for the selected code:
1. Unit tests for all public methods
2. Edge case testing
3. Error handling tests
4. Mock external dependencies
5. Performance benchmarks
6. Integration tests where applicable

Use our project's testing framework and conventions.
```

**Test Coverage Analyzer**
```yaml
---
description: Identify missing test coverage
---

Analyze the current test coverage and:
- Identify untested code paths
- Suggest additional test cases
- Find edge cases not covered
- Recommend integration tests
- Check for proper error testing
```

---

## Best Practices

**Command Naming:**
- Use descriptive, action-oriented names
- Keep names concise but clear
- Use hyphens for multi-word commands
- Avoid generic names like `help` or `test`
- Note: Names are automatically slugified (lowercase, special characters removed)
- The `.md` extension is automatically added/removed as needed

**Command Content:**
- Start with a clear directive
- Use structured formats (lists, sections)
- Include specific requirements
- Reference project conventions
- Keep commands focused on a single task

**Organization:**
- Group related commands in subdirectories
- Use consistent naming patterns
- Document complex commands
- Version control your commands
- Share team commands in the project repository

---

## Troubleshooting

**Commands Not Appearing:**
- **Check file location**: Ensure custom command files are in `.roo/commands/` or `~/.roo/commands/`
- **Verify file extension**: Custom commands must be `.md` files

**Command Not Found:**
When a slash command isn't found, the LLM will see:
```
Command 'command-name' not found. Available commands can be found in .roo/commands/ or ~/.roo/commands/
```

**Command Conflicts:**
- Custom project commands override global custom commands with the same name
- Use unique names to avoid conflicts
- When creating duplicate names through the UI, numbers are appended (e.g., `new-command-1`, `new-command-2`)

:::info About Mode Commands
The slash menu includes mode-switching commands (like `/code`, `/ask`) that fundamentally change the AI's operational mode - they don't just inject text but switch the entire AI context. Custom modes you create also appear as slash commands (e.g., a mode with slug `reviewer` becomes `/reviewer`). These mode commands cannot be overridden by custom workflow commands. Learn more in [Using Modes](/basic-usage/using-modes) and [Custom Modes](/features/custom-modes).
:::

---

## See Also

- [Using Modes](/basic-usage/using-modes) - Learn about Roo Code's different operational modes
- [Custom Instructions](/features/custom-instructions) - Set persistent instructions for Roo Code
- [Keyboard Shortcuts](/features/keyboard-shortcuts) - Quick access to commands
- [Task Management](/features/task-todo-list) - Manage complex workflows