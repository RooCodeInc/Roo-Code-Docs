---
sidebar_label: Gemini CLI
---

# Using the Gemini CLI Provider With Roo Code

Use your personal Google account to access Gemini models for free without managing API keys. This provider authenticates using credentials from the official `gemini` command-line tool.

**Website:** [https://github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## Why Use This Provider

- **No API Key Required**: Authenticates via the Gemini CLI's OAuth flow.
- **Free Tier Access**: Leverages the free tier available to personal Google accounts.
- **Simple Setup**: Install and authenticate with the Gemini CLI once.
- **Secure**: Credentials are stored locally and refreshed automatically.

When you use the Gemini CLI provider, you simply log in once using Google's official command-line tool. Roo Code then securely uses those credentials, so you can start working right away.

---

## How It Works

The Gemini CLI provider integrates with Google's ecosystem:

1.  **Installation & Login**: Install the `gemini` CLI tool and run `gemini auth` to log in to your Google account. This creates a secure OAuth credentials file on your local machine.
2.  **Credential Loading**: When you select this provider in Roo Code, it reads the credentials from the default location (`~/.gemini/oauth_creds.json`) or a custom path you provide.
3.  **Authentication**: Roo Code uses these credentials to obtain a temporary access token from Google's authentication servers.
4.  **API Calls**: The access token is used to make secure calls to Google's Code Assist API, which powers the Gemini models. The provider handles refreshing the token automatically when it expires.

---

## Prerequisites

Before using this provider, you must:

- Install the official [Gemini CLI tool](https://github.com/google-gemini/gemini-cli?tab=readme-ov-file#quickstart).
- Run `gemini auth` in your terminal and log in with your Google account.
- **Note:** This provider works with **personal Google accounts** and is not compatible with Google Workspace accounts.

---

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Gemini CLI" from the "API Provider" dropdown.
3.  **Set OAuth Credentials Path (Optional):**
    - **Setting**: `geminiCliOAuthPath`
    - **Description**: The file path to your OAuth credentials JSON file. Leave this blank to use the default path.
    - **Default**: `~/.gemini/oauth_creds.json`.

---

## Common Questions

**"Where do I find the `oauth_creds.json` file?"**

After you run `gemini auth`, the file is automatically created. On macOS and Linux, it's typically located in `~/.gemini/oauth_creds.json`.

**"What if my authentication expires?"**

Roo Code will automatically use the refresh token to get a new access token. If the refresh token itself expires, you may need to run `gemini auth` again.

**"I'm getting an error about a 'bad request' or '401 Unauthorized'."**

This usually means your credentials have expired or are invalid. Try running `gemini auth` in your terminal again to re-authenticate. Ensure you are logged into a personal Google account, not a Google Workspace account.