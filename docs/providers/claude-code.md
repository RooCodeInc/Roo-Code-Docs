---
sidebar_label: Claude Code
---

# Claude Code Provider

The Claude Code provider allows you to use Anthropic's Claude models through their official CLI (Command Line Interface) instead of the web API. This provides direct access to your Claude Max subscription right from Roo Code.

**Website:** [https://docs.anthropic.com/en/docs/claude-code/setup](https://docs.anthropic.com/en/docs/claude-code/setup)

---

## Key Features
- **Direct CLI Access**: Uses Anthropic's official Claude CLI tool for model interactions
- **Advanced Reasoning**: Full support for Claude's thinking mode and reasoning capabilities
- **Cost Transparency**: Shows exact usage costs as reported by the CLI
- **Flexible Configuration**: Works with your existing Claude CLI setup

---

## Why Use This Provider

- **No API Keys**: Uses your existing Claude CLI authentication
- **Cost Benefits**: Leverage CLI subscription rates and transparent cost reporting
- **Latest Features**: Access new Claude capabilities as they're released in the CLI
- **Advanced Reasoning**: Full support for Claude's thinking modes

## How it Works

The Claude Code provider works by:

1. **Running Commands**: Executes the `claude` CLI command with your prompts
2. **Processing Output**: Handles the CLI's JSON output in chunks with advanced parsing
3. **Handling Reasoning**: Captures and displays Claude's thinking process when available
4. **Tracking Usage**: Reports token usage and costs as provided by the CLI

The provider integrates with Roo Code's interface, giving you the same experience as other providers while using the Claude CLI under the hood.

---

## Configuration

You only need to configure one optional setting:

### **Claude Code Path**
- **Setting**: `claudeCodePath`
- **Description**: Path to your Claude CLI executable
- **Default**: `claude` (assumes it's in your system PATH)
- **When to change**: If you installed Claude CLI in a custom location

**Example custom paths:**
- Windows: `C:\tools\claude\claude.exe`
- macOS/Linux: `/usr/local/bin/claude` or `~/bin/claude`

---

## Supported Models

The Claude Code provider supports these Claude models:

- **Claude Sonnet 4** (latest, recommended)
- **Claude Opus 4** (most capable)
- **Claude 3.7 Sonnet**
- **Claude 3.5 Sonnet**
- **Claude 3.5 Haiku** (fast responses)

The specific models available depend on your Claude CLI subscription and plan.

---

## Prerequisites

Before using the Claude Code provider:

1. **Install Claude CLI**: Download and install from Anthropic
2. **Authenticate**: Run `claude auth` to sign in to your account
3. **Verify Setup**: Test with `claude --version` to ensure it's working
4. **Optional**: Add CLI location to PATH or configure custom path in settings

## Configuration in Roo Code

**Initial Setup Option:**
The Claude Code provider can be selected during your initial Roo Code setup without requiring additional configuration, making it one of the easiest providers to get started with.

**Manual Configuration:**
1. **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2. **Select Provider:** Choose "Claude Code" from the "API Provider" dropdown.
3. **Configure Path (Optional):** If needed, set the "Claude Code Path" to your CLI executable location.
4. **Select Model:** Choose your desired Claude model from the "Model" dropdown.

---


## Common Questions

**"Do I need a Claude API key for this provider?"**
- No! This provider uses your Claude CLI setup instead of the web API
- You'll need the Claude CLI installed and authenticated on your system

**"How do I install the Claude CLI?"**
- Visit [Anthropic's CLI documentation](https://docs.anthropic.com/en/docs/claude-code/setup) for installation instructions
- The CLI handles its own authentication and setup

**"Why would I use this instead of the regular Anthropic provider?"**
- Potential cost benefits depending on your subscription

**"What if the CLI isn't in my PATH?"**
- Set a custom path in the Claude Code Path setting
- Point to the full path where you installed the CLI


---

## Troubleshooting

### **"Claude Code process exited with error"**
**Common causes:**
- Claude CLI not installed or not in PATH

**Solutions:**
1. Verify CLI installation: `claude --version`
2. Re-authenticate: `claude auth`
3. Check your subscription includes the selected model
4. Try a different model


### **Custom path not working**
**Problem**: Roo Code can't find your Claude CLI
**Solutions:**
- Use the full absolute path to the CLI executable
- Verify the path exists and the file is executable
- On Windows, you may need to include the `.exe` extension


## Advanced Usage

### **Custom Installation Paths**
If you installed Claude CLI in a non-standard location:

```bash
# Example custom paths
/opt/claude/bin/claude          # Linux custom install
/Applications/Claude/claude     # macOS app bundle
C:\claude\claude.exe           # Windows custom location
```
