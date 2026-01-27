---
sidebar_label: Configuration
description: Configure Roo Code CLI with settings files, environment variables, and command-line flags
keywords:
  - CLI configuration
  - settings file
  - CLI preferences
  - default options
---

# Configuration

The Roo Code CLI can be configured through a combination of settings files, environment variables, and command-line flags.

## Configuration Priority

When the CLI determines what settings to use, it follows this priority (highest to lowest):

1. **Command-line flags** - Explicitly provided options
2. **Environment variables** - Shell environment settings
3. **Settings file** - Saved preferences in `~/.config/roo/cli-settings.json`
4. **Defaults** - Built-in default values

## Settings File

The CLI stores persistent settings in a JSON file located at:

```
~/.config/roo/cli-settings.json
```

### Settings File Format

```json
{
  "provider": "anthropic",
  "model": "claude-sonnet-4.5",
  "mode": "code",
  "reasoningEffort": "medium",
  "dangerouslySkipPermissions": false,
  "oneshot": false,
  "onboardingProviderChoice": "roo"
}
```

### Available Settings

| Setting | Type | Description | Default |
| --- | --- | --- | --- |
| `provider` | string | Default AI provider | `openrouter` |
| `model` | string | Default model name | `anthropic/claude-sonnet-4.5` |
| `mode` | string | Default mode to start in | `code` |
| `reasoningEffort` | string | Default reasoning effort level | `medium` |
| `dangerouslySkipPermissions` | boolean | Auto-approve all actions | `false` |
| `oneshot` | boolean | Exit after task completion | `false` |
| `onboardingProviderChoice` | string | Provider choice from onboarding | - |

### Manually Editing Settings

You can edit the settings file directly:

```bash
# Open in your default editor
$EDITOR ~/.config/roo/cli-settings.json

# Or use nano
nano ~/.config/roo/cli-settings.json
```

Example configuration for daily use:

```json
{
  "provider": "anthropic",
  "model": "claude-sonnet-4.5",
  "mode": "code",
  "reasoningEffort": "medium"
}
```

Example configuration for CI/CD:

```json
{
  "provider": "openrouter",
  "model": "anthropic/claude-sonnet-4.5",
  "dangerouslySkipPermissions": true,
  "oneshot": true
}
```

### Resetting Settings

To reset all settings to defaults:

```bash
rm ~/.config/roo/cli-settings.json
```

The CLI will recreate the file with default values on next run.

## Environment Variables

Environment variables provide a flexible way to configure the CLI without modifying files.

### API Configuration

```bash
# Provider-specific API keys
export ANTHROPIC_API_KEY=sk-ant-...
export OPENAI_API_KEY=sk-...
export OPENROUTER_API_KEY=sk-or-v1-...
export GOOGLE_API_KEY=...

# Roo Code Cloud
export ROO_WEB_APP_URL=https://app.roocode.com
```

### CLI Behavior

While the CLI doesn't directly use behavior environment variables, you can create shell aliases that use them:

```bash
# In your ~/.bashrc or ~/.zshrc
export DEFAULT_ROO_PROVIDER=anthropic
export DEFAULT_ROO_MODEL=claude-sonnet-4.5

# Create an alias that uses these
alias roo-dev='roo --provider $DEFAULT_ROO_PROVIDER --model $DEFAULT_ROO_MODEL'
```

## Command-Line Flags

Command-line flags override all other configuration sources. See the [CLI Reference](/cli/reference) for a complete list.

### Common Flag Examples

```bash
# Override provider
roo "Task" -p anthropic  -w ~/project

# Override model
roo "Task" -m claude-sonnet-4.5  -w ~/project

# Override mode
roo "Task" -M architect  -w ~/project

# Multiple overrides
roo ~/project \
  -p anthropic \
  -m claude-sonnet-4.5 \
  -M code \
  -r high \
  "Complex task"
```

## Configuration Strategies

### Local Development

For local development work:

```json
{
  "provider": "anthropic",
  "model": "claude-sonnet-4.5",
  "mode": "code",
  "reasoningEffort": "medium"
}
```

Use interactively to review changes before applying.

### Automation & Scripts

For automated tasks and CI/CD:

```json
{
  "provider": "openrouter",
  "dangerouslySkipPermissions": true,
  "oneshot": true
}
```

Always use the `-y` flag in scripts:

```bash
roo ~/project -y "Generate tests"
```

### Multiple Configurations

Manage different configurations with shell profiles or scripts:

```bash
#!/bin/bash
# dev-config.sh
export ANTHROPIC_API_KEY=sk-ant-dev-...
alias roo='command roo --provider anthropic --mode code'
```

```bash
#!/bin/bash
# ci-config.sh  
export OPENROUTER_API_KEY=sk-or-ci-...
alias roo='command roo --provider openrouter -y --exit-on-complete'
```

Source the appropriate config:

```bash
source dev-config.sh
roo "Task" -w ~/project
```

### Per-Project Configuration

Create project-specific wrapper scripts:

```bash
#!/bin/bash
# ~/my-project/roo.sh

# Project-specific settings
PROVIDER="anthropic"
MODEL="claude-sonnet-4.5"
MODE="code"

# Run CLI with project settings
roo "$(dirname "$0")" \
  --provider "$PROVIDER" \
  --model "$MODEL" \
  --mode "$MODE" \
  "$@"
```

Usage:

```bash
cd ~/my-project
./roo.sh "Add tests"
```

## Debugging Configuration

To see what configuration the CLI is using, run with the `--debug` flag:

```bash
roo ~/project --debug "Test"
```

This will show:
- Which settings file was loaded
- Environment variables detected
- Final resolved configuration
- Provider and model information

## Security Considerations

### File Permissions

The CLI automatically sets secure permissions on sensitive files:

- **Settings file**: `~/.config/roo/cli-settings.json` (mode 0644)
- **Credentials file**: `~/.config/roo/credentials.json` (mode 0600)

### API Key Storage

**Never store API keys in the settings file.** Always use:

1. Environment variables (recommended)
2. Command-line flags (for one-off uses)
3. Roo Code Cloud authentication (most secure)

### Dangerous Flags

The `dangerouslySkipPermissions` setting is dangerous because it auto-approves all actions:

- File writes without review
- Command execution without confirmation
- Potentially destructive operations

Only use this in controlled environments like CI/CD where you trust the prompts being executed.

## Advanced Configuration

### Custom Extension Path

Specify a custom extension bundle location:

```bash
roo ~/project --extension /path/to/custom/extension "Task"
```

Useful for:
- Testing extension changes
- Using a specific extension version
- Development and debugging

### Ephemeral Mode

Run without persisting any state:

```bash
roo ~/project --ephemeral "Quick analysis"
```

In ephemeral mode:
- No task history is saved
- Settings changes aren't persisted
- Temporary storage is used
- Useful for one-off commands

### Disabling TUI

For plain text output (useful for logging):

```bash
roo ~/project --no-tui "Task"
```

Output can be piped or redirected:

```bash
roo ~/project --no-tui -y "Analyze" > output.txt
```

## Configuration Examples

### Example 1: Personal Development

```json
{
  "provider": "anthropic",
  "model": "claude-sonnet-4.5",
  "mode": "code",
  "reasoningEffort": "medium"
}
```

```bash
# In ~/.bashrc
export ANTHROPIC_API_KEY=sk-ant-...
```

### Example 2: Team Environment

```json
{
  "provider": "openrouter",
  "model": "anthropic/claude-sonnet-4.5"
}
```

```bash
# Shared in team documentation
export OPENROUTER_API_KEY=sk-or-team-...

# Team members use same config
roo "Task" -w ~/project
```

### Example 3: CI/CD Pipeline

```json
{
  "provider": "openrouter",
  "dangerouslySkipPermissions": true,
  "oneshot": true
}
```

```yaml
# .github/workflows/ai-review.yml
- name: AI Code Review
  env:
    OPENROUTER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
  run: |
    roo ${{ github.workspace }} \
      -y \
      --exit-on-complete \
      --no-tui \
      "Review changes in this PR"
```

## Troubleshooting

### Settings Not Applied

If your settings aren't being used:

1. Check file location: `ls -la ~/.config/roo/cli-settings.json`
2. Verify JSON syntax: `cat ~/.config/roo/cli-settings.json | jq`
3. Check file permissions: `ls -la ~/.config/roo/`
4. Look for override flags in your command
5. Enable debug mode: `--debug`

### Invalid Configuration

If the CLI reports invalid configuration:

```bash
# Backup current settings
cp ~/.config/roo/cli-settings.json ~/.config/roo/cli-settings.json.bak

# Remove and let CLI recreate with defaults
rm ~/.config/roo/cli-settings.json

# Run CLI - it will create new settings file
roo --help
```

### Permission Errors

If you can't write to the config directory:

```bash
# Check permissions
ls -la ~/.config/

# Create directory if needed
mkdir -p ~/.config/roo
chmod 700 ~/.config/roo

# Reset file permissions
chmod 644 ~/.config/roo/cli-settings.json
chmod 600 ~/.config/roo/credentials.json
```

## Next Steps

- [Review the complete CLI reference](/cli/reference) for all available options
- [Learn about interactive and non-interactive usage](/cli/usage)
- [Explore advanced use cases and patterns](/cli/advanced)
