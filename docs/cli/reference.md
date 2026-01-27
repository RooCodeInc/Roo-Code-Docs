---
sidebar_label: CLI Reference
description: Complete reference for all Roo Code CLI commands, options, and flags
keywords:
  - CLI reference
  - command line options
  - CLI flags
  - CLI commands
---

# CLI Reference

Complete reference for the Roo Code CLI, including all commands, options, and flags.

## Basic Syntax

```bash
roo [prompt] [options]
```

Or use authentication commands:

```bash
roo auth <command>
```

## Main Command

### `roo [prompt]`

Run the Roo Code agent with a prompt.

**Arguments:**
- `[prompt]` - The task or prompt to execute (positional argument, optional)

**Examples:**
```bash
roo "Analyze the code"
roo "Analyze the code" -w ~/my-project
roo  # starts interactive mode without prompt
```

## Global Options

### `-w, --workspace <path>`

Workspace directory path to operate in.

```bash
roo "Add error handling" -w ~/project
```

**Default:** Current working directory

### `-p, --provider <provider>`

AI provider to use.

**Supported providers:**
- `anthropic` - Claude models from Anthropic
- `openai-native` - OpenAI models
- `openrouter` - OpenRouter (default)
- `gemini` - Google Gemini models  
- `roo` - Roo Code Cloud

**Example:**
```bash
roo "Task" -p anthropic  -w ~/project
```

**Default:** `openrouter`

### `-m, --model <model>`

Model to use for the task.

**Example:**
```bash
roo "Task" -m claude-sonnet-4.5  -w ~/project
```

**Default:** `anthropic/claude-sonnet-4.5`

**Common models:**
- `claude-sonnet-4.5` - Latest Claude Sonnet (Anthropic)
- `claude-opus-4` - Claude Opus (Anthropic)
- `gpt-4o` - GPT-4 Optimized (OpenAI)
- `anthropic/claude-sonnet-4.5` - Via OpenRouter
- `openai/gpt-4o` - Via OpenRouter

### `-k, --api-key <key>`

API key for the provider.

```bash
roo "Task" -k sk-ant-...  -w ~/project
```

:::warning
Avoid using this flag when possible. API keys may be stored in shell history. Use environment variables instead.
:::

**Precedence:**
1. `--api-key` flag
2. Environment variable (e.g., `ANTHROPIC_API_KEY`)
3. Roo Code Cloud authentication
4. Interactive prompt

### `-M, --mode <mode>`

Mode to start in.

**Available modes:**
- `code` - Code implementation (default)
- `architect` - Planning and design
- `ask` - Questions and explanations
- `debug` - Debugging and troubleshooting

**Example:**
```bash
roo "Design a REST API" -M architect  -w ~/project
```

**Default:** `code`

### `-r, --reasoning-effort <level>`

Set the reasoning effort level for the AI.

**Levels:**
- `disabled` - Disable extended thinking
- `none` - No extended thinking
- `minimal` - Minimal thinking
- `low` - Low effort
- `medium` - Medium effort (default)
- `high` - High effort
- `xhigh` - Extra high effort (most thorough)
- `unspecified` - Let the provider decide

**Example:**
```bash
roo "Optimize this algorithm" -r high  -w ~/project
```

Higher reasoning effort may result in:
- More thorough analysis
- Better solutions to complex problems
- Longer response times
- Higher token usage

**Default:** `medium`

## Behavior Options

### `-y, --yes`

Non-interactive mode: auto-approve all actions.

```bash
roo ~/project -y "Format all files"
```

:::danger
This will execute all proposed actions without confirmation. Use carefully.
:::

**What gets auto-approved:**
- File reads and writes
- Command executions
- Browser actions
- MCP tool usage
- All other tool invocations

**When to use:**
- CI/CD pipelines
- Trusted automation scripts
- Batch processing
- Well-tested workflows

### `-x, --exit-on-complete`

Exit the CLI when the task completes.

```bash
roo "Generate docs" -x -y  -w ~/project
```

Useful for:
- Scripts that chain multiple operations
- CI/CD workflows
- Scheduled tasks
- One-off commands

**Default:** Stays open for more interaction

### `--ephemeral`

Run without persisting state (uses temporary storage).

```bash
roo ~/project --ephemeral "Quick analysis"
```

**What isn't saved:**
- Task history
- Conversation state  
- Settings changes
- Any other persistent data

Useful for:
- Quick one-off commands
- Testing without polluting history
- Privacy-sensitive tasks

### `--no-tui`

Disable the terminal UI, use plain text output.

```bash
roo ~/project --no-tui "Task"
```

Useful for:
- Logging output to files
- Piping to other commands
- Non-interactive terminals
- CI/CD environments

**Example with output redirection:**
```bash
roo ~/project --no-tui -y "Task" 2>&1 | tee output.log
```

### `-d, --debug`

Enable debug output.

```bash
roo ~/project --debug "Task"
```

**Debug output includes:**
- Configuration details
- Provider/model information
- File paths and locations
- Extension loading process
- Message flow details
- Detailed error information

Useful for:
- Troubleshooting issues
- Understanding CLI behavior
- Reporting bugs
- Development

## Advanced Options

### `-e, --extension <path>`

Path to a custom extension bundle directory.

```bash
roo "Task" -e /path/to/extension  -w ~/project
```

**Use cases:**
- Testing extension changes
- Using a specific extension version
- Development and debugging
- Custom extension builds

**Default:** Auto-detected from installation

### `--dangerously-skip-permissions`

Skip all permission checks (alias for `-y`).

```bash
roo ~/project --dangerously-skip-permissions "Task"
```

:::danger
Extremely dangerous. Only use in fully controlled environments.
:::

## Authentication Commands

### `roo auth login`

Authenticate with Roo Code Cloud.

```bash
roo auth login
```

**Process:**
1. Opens browser to Roo Code Cloud
2. Completes authentication in browser
3. Receives token via localhost callback
4. Stores token securely in `~/.config/roo/credentials.json`

**Options:**
- No additional options

### `roo auth logout`

Clear stored authentication token.

```bash
roo auth logout
```

Removes the token from `~/.config/roo/credentials.json`.

### `roo auth status`

Show current authentication status.

```bash
roo auth status
```

**Output includes:**
- Authentication status (logged in or not)
- Token expiration date
- Associated account information

**Example output:**
```
✓ Authenticated with Roo Code Cloud
  Token expires: 2026-04-23
  Account: user@example.com
```

## Environment Variables

The CLI respects these environment variables:

### API Keys

| Variable | Description |
| --- | --- |
| `ANTHROPIC_API_KEY` | Anthropic API key |
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENROUTER_API_KEY` | OpenRouter API key |
| `GOOGLE_API_KEY` | Google/Gemini API key |

### Configuration

| Variable | Description |
| --- | --- |
| `ROO_WEB_APP_URL` | Custom Roo Code Cloud URL (default: `https://app.roocode.com`) |

### Proxy Support

Standard proxy environment variables are supported:

| Variable | Description |
| --- | --- |
| `HTTP_PROXY` | HTTP proxy URL |
| `HTTPS_PROXY` | HTTPS proxy URL |
| `NO_PROXY` | Comma-separated list of hosts to exclude from proxy |

## Exit Codes

The CLI uses standard exit codes:

| Code | Meaning |
| --- | --- |
| `0` | Success |
| `1` | General error |
| `2` | Invalid arguments or configuration |
| `130` | Interrupted by user (Ctrl+C) |

**Example in scripts:**
```bash
if roo ~/project -y "Run tests"; then
  echo "Success"
else
  echo "Failed with exit code $?"
fi
```

## Configuration Files

### Settings File

Location: `~/.config/roo/cli-settings.json`

**Format:**
```json
{
  "provider": "anthropic",
  "model": "claude-sonnet-4.5",
  "mode": "code",
  "reasoningEffort": "medium"
}
```

See [Configuration](/cli/configuration) for details.

### Credentials File

Location: `~/.config/roo/credentials.json`

**Format:** (Auto-managed by auth commands)
```json
{
  "token": "...",
  "expiresAt": "2026-04-23T00:00:00Z"
}
```

:::warning
Never manually edit this file. Use `roo auth` commands.
:::

## Examples

### Basic Usage

```bash
# Interactive mode
roo ~/my-project

# With prompt
roo "What does this code do?" -w ~/my-project

# Non-interactive
roo ~/my-project -y "Format all files"
```

### Provider & Model Selection

```bash
# Use Anthropic directly
roo "Task" -p anthropic -m claude-sonnet-4.5  -w ~/project

# Use OpenRouter
roo "Task" -p openrouter -m anthropic/claude-sonnet-4.5  -w ~/project

# Use OpenAI
roo "Task" -p openai-native -m gpt-4o  -w ~/project
```

### Mode Selection

```bash
# Planning
roo "Design a new feature" -M architect  -w ~/project

# Implementation
roo "Implement the feature" -M code  -w ~/project

# Questions
roo "How does authentication work?" -M ask  -w ~/project

# Debugging
roo "Why is the login failing?" -M debug  -w ~/project
```

### Automation

```bash
# CI/CD
roo ~/project \
  -y \
  --exit-on-complete \
  --no-tui \
  "Run linter and fix issues"

# Script with error handling
if ! roo "Generate docs" -y -x  -w ~/project 2>&1 | tee build.log; then
  echo "Documentation generation failed"
  exit 1
fi
```

### Complex Workflows

```bash
# Step 1: Architect mode (interactive)
roo "Plan user authentication" -M architect  -w ~/project

# Step 2: Code mode (automated)
roo ~/project -M code -y "Implement the authentication plan"

# Step 3: Ask mode (review)
roo "Explain the authentication implementation" -M ask  -w ~/project
```

### Debug and Development

```bash
# Debug mode
roo ~/project --debug "Task"

# Custom extension
roo "Task" -e ./custom-extension  -w ~/project

# Ephemeral (no history)
roo ~/project --ephemeral "Quick test"
```

## Common Patterns

### Daily Development

```bash
# Set defaults in settings file
cat > ~/.config/roo/cli-settings.json <<EOF
{
  "provider": "anthropic",
  "model": "claude-sonnet-4.5",
  "mode": "code"
}
EOF

# Then use short commands
roo "Add tests" -w ~/project
```

### Shell Aliases

```bash
# Add to ~/.bashrc or ~/.zshrc
alias roo-quick='roo --ephemeral -y --exit-on-complete'
alias roo-plan='roo -M architect'
alias roo-code='roo -M code'
alias roo-debug='roo -M debug --debug'

# Usage
roo-quick ~/project "Quick fix"
roo-plan ~/project "Design feature"
```

### CI/CD Integration

```yaml
# GitHub Actions
- name: AI Code Review
  env:
    OPENROUTER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
  run: |
    roo ${{ github.workspace }} \
      -y \
      --exit-on-complete \
      --no-tui \
      -p openrouter \
      -m anthropic/claude-sonnet-4.5 \
      "Review the changes in this PR and report issues"
```

### Batch Processing

```bash
#!/bin/bash
# Process multiple projects
for project in ~/projects/*; do
  echo "Processing $project"
  roo "$project" -y -x --no-tui "Update dependencies" 2>&1 | tee "$project.log"
done
```

## Tips

### Performance

- Use `--ephemeral` for faster one-off commands (no state persistence)
- Choose appropriate reasoning effort (lower = faster, higher = more thorough)
- Use specific prompts to reduce back-and-forth

### Safety

- Always test in interactive mode before automating with `-y`
- Use version control before allowing file writes
- Review logs when using non-interactive mode
- Start with read-only tasks when learning

### Efficiency

- Set defaults in settings file for repeated options
- Create shell aliases for common patterns
- Use modes appropriately (architect → code → debug)
- Pipe output with `--no-tui` for logging

## Getting Help

### Built-in Help

```bash
# General help
roo --help

# Auth commands help
roo auth --help
```

### Version Information

```bash
roo --version
```

### Support Resources

- **Discord**: [discord.gg/roocode](https://discord.gg/roocode)
- **GitHub Issues**: [github.com/RooCodeInc/Roo-Code/issues](https://github.com/RooCodeInc/Roo-Code/issues)
- **Reddit**: [reddit.com/r/RooCode](https://reddit.com/r/RooCode)
- **Documentation**: [roocode.com/docs](https://roocode.com/docs)

## Next Steps

- [Learn about advanced use cases](/cli/advanced) for complex workflows
- [Explore configuration options](/cli/configuration) to customize your setup
- [Read usage patterns](/cli/usage) for interactive vs non-interactive modes
