---
sidebar_label: Getting Started
description: Learn how to use Roo Code CLI with your first commands and examples
keywords:
  - Roo Code CLI tutorial
  - CLI getting started
  - first CLI command
  - terminal workflow
---

# Getting Started with Roo Code CLI

This guide will walk you through running your first Roo Code CLI commands and understanding the basics.

## Prerequisites

Before starting, ensure you have:

1. [Installed the Roo Code CLI](/cli/installation)
2. [Set up authentication](/cli/authentication) (Roo Code Cloud or API key)

## Your First Command

The simplest way to run the CLI is with a prompt and optional workspace:

```bash
roo "What is this project?" -w ~/my-project
```

Or if you're already in the project directory:

```bash
cd ~/my-project
roo "What is this project?"
```

This command:
- Executes the prompt "What is this project?"
- Uses `~/my-project` as the workspace (or current directory if `-w` is omitted)
- Starts in interactive mode with a terminal UI
- Waits for your approval before executing any actions

### Understanding the Output

When you run the command, you'll see:

1. **Initialization**: CLI loads the extension and connects to the AI provider
2. **Task Execution**: The AI analyzes your prompt and proposes actions
3. **Tool Approvals**: You're prompted to approve file reads, commands, etc.
4. **Results**: The AI presents its findings and awaits your response

## Interactive Mode

By default, the CLI runs in interactive mode with a rich terminal UI.

### Starting Interactive Mode

Run without a prompt to enter interactive mode:

```bash
roo ~/my-project
```

You'll be presented with an input prompt where you can:
- Type your task or question
- Use tab completion for files and commands
- Access command history with up/down arrows
- Enter multi-line prompts with Shift+Enter

### Approving Actions

In interactive mode, the CLI will prompt for approval before:

- **Reading files**: "Allow reading file: src/utils.ts?"
- **Writing files**: "Allow writing to: src/config.ts?"
- **Running commands**: "Execute command: npm test?"
- **Browser actions**: "Open browser to: https://example.com?"
- **MCP tool usage**: "Use MCP tool: database_query?"

Respond with:
- `y` or `yes` to approve
- `n` or `no` to reject
- `a` or `always` to approve all future actions of this type

## Non-Interactive Mode

For automation and scripts, use non-interactive mode with the `-y` flag:

```bash
roo ~/my-project -y "Add JSDoc comments to all functions"
```

In non-interactive mode:
- All actions are auto-approved
- No user input is required
- Follow-up questions show a 60-second timeout
- The CLI exits when the task completes

:::warning
Use non-interactive mode carefully, as it will execute all proposed actions without confirmation.
:::

## Common Workflows

### Code Analysis

Analyze code without making changes:

```bash
roo "Analyze the architecture and suggest improvements" -w ~/my-project
```

### Refactoring

Refactor code with approval for each change:

```bash
roo "Refactor src/utils.ts to use modern ES6 syntax" -w ~/my-project
```

### Documentation Generation

Generate documentation automatically:

```bash
roo ~/my-project -y "Generate API documentation in docs/api.md"
```

### Test Creation

Create tests interactively:

```bash
roo "Create unit tests for src/auth.ts" -w ~/my-project
```

### Bug Investigation

Debug issues with full context:

```bash
roo "Why is the login form not submitting?" -w ~/my-project
```

## Working with Files

### Specify Files in Prompts

Reference specific files in your prompts:

```bash
roo "Review src/auth.ts and src/api.ts for security issues" -w ~/my-project
```

### Reading from Files

You can load prompts from files:

```bash
echo "Analyze the codebase and create a README" > task.txt
roo "$(cat task.txt)" -w ~/my-project
```

Or use stdin:

```bash
echo "Add error handling" | roo ~/my-project
```

## Using Different Providers and Models

### Specify Provider

Choose your AI provider:

```bash
roo "Explain this code" -p anthropic  -w ~/my-project
```

Supported providers:
- `anthropic` - Claude models
- `openai-native` - OpenAI models
- `openrouter` - OpenRouter (default)
- `gemini` - Google Gemini
- `roo` - Roo Code Cloud

### Specify Model

Use a specific model:

```bash
roo ~/my-project \
  -p anthropic \
  -m claude-sonnet-4.5 \
  "Optimize this database query"
```

### Use Different Modes

Start in a specific mode:

```bash
roo "Design a new user authentication system" -M architect  -w ~/my-project
```

Available modes:
- `code` - Code implementation (default)
- `architect` - Planning and design
- `ask` - Questions and explanations
- `debug` - Debugging and troubleshooting

## Advanced Examples

### Multi-Step Task

Let the AI work through a complex task:

```bash
roo "Create a new API endpoint for user registration including route, controller, validation, and tests" -w ~/my-project
```

### With Reasoning Effort

Adjust reasoning effort for complex problems:

```bash
roo ~/my-project \
  -r high \
  "Optimize this algorithm for better time complexity"
```

Reasoning levels: `none`, `minimal`, `low`, `medium` (default), `high`, `xhigh`

### Exit on Completion

Automatically exit when the task is done:

```bash
roo ~/my-project \
  --exit-on-complete \
  -y \
  "Format all TypeScript files"
```

### Ephemeral Mode

Run without saving history or state:

```bash
roo ~/my-project --ephemeral "Quick code review"
```

## Tips for Success

### 1. Be Specific

Good prompt:
```bash
roo "Add input validation to the signup form in src/components/SignupForm.tsx using Zod" -w ~/my-project
```

Vague prompt:
```bash
roo "Fix the form" -w ~/my-project
```

### 2. Provide Context

Include relevant information in your prompt:
```bash
roo "The API returns 500 errors when creating users. Check the error logs in logs/error.log and fix the issue in src/api/users.ts" -w ~/my-project
```

### 3. Use Modes Appropriately

- **Architect mode** for planning: Design before implementing
- **Code mode** for implementation: Write and modify code
- **Ask mode** for understanding: Learn about the codebase
- **Debug mode** for troubleshooting: Investigate and fix issues

### 4. Review Before Approving

In interactive mode, carefully review proposed changes before approving file writes or potentially destructive commands.

### 5. Start Simple

Begin with read-only analysis tasks to understand how the CLI works before having it make changes.

## Keyboard Shortcuts

In the interactive TUI:

- `Ctrl+C` - Cancel current operation
- `Ctrl+D` - Exit the CLI
- `Tab` - Autocomplete files and commands
- `↑/↓` - Navigate command history
- `Shift+Enter` - New line in input (for multi-line prompts)
- `Enter` - Submit prompt

## Next Steps

Now that you understand the basics:

1. [Learn about configuration](/cli/configuration) to customize default settings
2. [Explore usage patterns](/cli/usage) for interactive and non-interactive modes
3. [Review CLI reference](/cli/reference) for all available options and commands

## Troubleshooting

### CLI Hangs

If the CLI appears stuck:
- Press `Ctrl+C` to cancel
- Check your internet connection
- Verify API key or authentication is valid
- Look for errors with `--debug` flag

### Unexpected Behavior

Enable debug output to see what's happening:

```bash
roo ~/my-project --debug "Your prompt"
```

### Commands Not Working

Verify the CLI is using the correct workspace:

```bash
roo "List files in the current directory" -w ~/my-project
```

The CLI should show files from `~/my-project`, not your current terminal directory.
