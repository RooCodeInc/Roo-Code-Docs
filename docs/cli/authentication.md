---
sidebar_label: Authentication
description: Authenticate Roo Code CLI with Roo Code Cloud or configure your own API keys
keywords:
  - Roo Code CLI authentication
  - API key setup
  - Roo Code Cloud login
  - CLI credentials
---

# Authentication

The Roo Code CLI supports two authentication methods: Roo Code Cloud authentication for seamless provider access, or bring-your-own-key (BYOK) with direct API provider credentials.

## Roo Code Cloud Authentication

Roo Code Cloud provides a managed authentication service that gives you access to AI providers without managing API keys yourself.

### Login

To authenticate with Roo Code Cloud:

```bash
roo auth login
```

This command will:
1. Open your default web browser to the Roo Code Cloud authentication page
2. Wait for you to complete authentication in the browser
3. Receive a secure token via localhost callback
4. Store the token in `~/.config/roo/credentials.json`

The authentication flow looks like this:

```
┌──────┐         ┌─────────┐         ┌───────────────┐
│  CLI │         │ Browser │         │ Roo Code Cloud│
└──┬───┘         └────┬────┘         └───────┬───────┘
   │                  │                      │
   │ Open auth URL    │                      │
   │─────────────────>│                      │
   │                  │                      │
   │                  │ Authenticate         │
   │                  │─────────────────────>│
   │                  │                      │
   │                  │<─────────────────────│
   │                  │ Token via callback   │
   │<─────────────────│                      │
   │                  │                      │
   │ Store token      │                      │
   │                  │                      │
```

:::info Token Validity
Authentication tokens are valid for 90 days. The CLI will prompt you to re-authenticate when your token expires.
:::

### Check Status

To verify your authentication status:

```bash
roo auth status
```

This displays:
- Whether you're authenticated
- Token expiration date (if authenticated)
- Associated account information

Example output:
```
✓ Authenticated with Roo Code Cloud
  Token expires: 2026-04-23
  Account: user@example.com
```

### Logout

To remove your stored authentication token:

```bash
roo auth logout
```

This clears the token from `~/.config/roo/credentials.json` but preserves other CLI settings.

## Bring Your Own Key (BYOK)

If you prefer to use your own API keys from AI providers, you can configure them directly.

### Setting API Keys

API keys can be provided in three ways (in order of precedence):

1. **Command Line Flag**: `--api-key` or `-k`
2. **Environment Variable**: Provider-specific variable
3. **Prompt**: The CLI will ask for a key if none is found

### Provider Environment Variables

Each provider has a specific environment variable for API keys:

| Provider | Environment Variable |
| --- | --- |
| Anthropic | `ANTHROPIC_API_KEY` |
| OpenAI | `OPENAI_API_KEY` |
| OpenRouter | `OPENROUTER_API_KEY` |
| Google/Gemini | `GOOGLE_API_KEY` |
| OpenAI Native | `OPENAI_API_KEY` |

### Example: Using OpenRouter

Set your API key as an environment variable:

```bash
export OPENROUTER_API_KEY=sk-or-v1-...
```

Then run the CLI without additional flags:

```bash
roo "Refactor the utils.ts file" -w ~/my-project
```

### Example: Using Command Line Flag

Provide the API key directly in the command:

```bash
roo ~/my-project \
  --provider anthropic \
  --api-key sk-ant-... \
  "Add unit tests"
```

:::warning Security Note
Be careful when using `--api-key` in commands, as the key may be stored in your shell history. Using environment variables or credential files is more secure.
:::

## Credential Storage

### Roo Code Cloud Credentials

Roo Code Cloud tokens are stored in:
```
~/.config/roo/credentials.json
```

This file has restrictive permissions (mode 0600) to protect your credentials.

### API Key Storage

API keys are NOT stored by the CLI. You must:
- Set them as environment variables
- Provide them via command line flags
- Let the CLI prompt you each time

For convenience, add API keys to your shell profile:

```bash
# In ~/.bashrc, ~/.zshrc, or equivalent
export OPENROUTER_API_KEY=sk-or-v1-...
export ANTHROPIC_API_KEY=sk-ant-...
```

## Authentication Priority

When determining which credentials to use, the CLI follows this priority:

1. **Command line flags** (`--api-key`, `--provider`)
2. **Environment variables** (provider-specific)
3. **Roo Code Cloud authentication** (if logged in)
4. **Interactive prompt** (CLI asks for missing credentials)

## Advanced Configuration

### Custom Roo Code Cloud URL

For enterprise or development environments, you can override the Roo Code Cloud URL:

```bash
export ROO_WEB_APP_URL=https://custom-roo-instance.example.com
```

### Proxy Configuration

If you're behind a corporate proxy, set standard proxy environment variables:

```bash
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
```

## Troubleshooting

### Browser Doesn't Open

If `roo auth login` doesn't open your browser:

1. Manually copy the URL displayed in the terminal
2. Paste it into your browser
3. Complete authentication
4. The CLI will detect the callback automatically

### Token Expired

If you see token expiration errors:

```bash
roo auth login
```

This will refresh your authentication token.

### Permission Denied on Credentials File

If you get permission errors reading/writing credentials:

```bash
chmod 600 ~/.config/roo/credentials.json
```

### Multiple API Keys

To switch between different API keys, use separate environment variable names or shell profiles:

```bash
# Development key
export DEV_API_KEY=sk-...

# Production key  
export PROD_API_KEY=sk-...

# Use specific key
roo ~/project --api-key $DEV_API_KEY
```

## Next Steps

After setting up authentication:

1. [Get started with your first command](/cli/getting-started)
2. [Learn about configuration options](/cli/configuration)
3. [Explore interactive and non-interactive modes](/cli/usage)
