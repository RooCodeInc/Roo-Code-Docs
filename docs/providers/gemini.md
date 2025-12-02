---
sidebar_label: Google Gemini
description: Use Google's Gemini AI models with Roo Code. Configure Gemini Flash, Pro, and experimental models for your development workflow.
keywords:
  - google gemini
  - gemini ai
  - roo code
  - api provider
  - gemini flash
  - gemini pro
  - google ai
  - gemini models
  - ai studio
image: /img/social-share.jpg
---

# Using Google Gemini With Roo Code

Roo Code supports Google's Gemini family of models through the Google AI Gemini API.

**Website:** [https://ai.google.dev/](https://ai.google.dev/)

---

## Getting an API Key

1.  **Go to Google AI Studio:** Navigate to [https://ai.google.dev/](https://ai.google.dev/).
2.  **Sign In:** Sign in with your Google account.
3.  **Create API Key:** Click on "Create API key" in the left-hand menu.
4.  **Copy API Key:** Copy the generated API key.

---

## Supported Models

Roo Code supports the main Gemini model families and automatically tracks Google's latest stable releases.

### Recommended Defaults

- **Gemini 3 Pro Preview**
  - 1M-token context window for very large workspaces and long-running conversations
  - Reasoning-capable behavior for multi-step coding and refactoring tasks
  - Tiered pricing support in Roo Code (≤200K vs >200K tokens) to better match Google's published pricing
- **Gemini Pro family**
  - Stable Pro models for complex coding, debugging, and analysis
  - Roo Code defaults to a stable Pro model where your provider supports it (today this is a Gemini 2.5 Pro variant; future releases may point at newer Pro models)
- **Gemini Flash family**
  - Fast, lower-cost models for everyday tasks and quick iterations
- **Experimental:** `gemini-2.5-flash-lite-preview-09-2025` - Lightweight preview variant

### Aliases

For stability and automatic updates, prefer these aliases instead of hard-coding specific versioned model IDs:

- `gemini-flash-latest` – Points to the newest stable Flash model
- `gemini-pro-latest` – Points to the newest stable Pro model

Using aliases helps Roo Code follow Google's recommended stable releases without you having to update model IDs manually.

### Thinking / Reasoning Models

Some Gemini models are reasoning-capable and may expose separate "thinking" or reasoning tokens:

- Roo Code treats these as reasoning models and can use them for deeper, multi-step planning.
- To use reasoning models effectively, enable the **reasoning budget** feature in Roo Code settings.
- When the Gemini API reports reasoning / "thought" token usage, Roo Code includes those tokens in its cost estimates so reported costs stay closer to your provider's billing.

Refer to the [Gemini documentation](https://ai.google.dev/models/gemini) for more details on each model family and its capabilities.

---

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Google Gemini" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Gemini API key into the "Gemini API Key" field.
4.  **Select Model:** Choose your desired Gemini model from the "Model" dropdown.

By default, Roo Code selects a stable Pro model (currently a Gemini 2.5 Pro variant) with a temperature of **1.0** where your provider supports it. This keeps suggestions more expressive and natural while still staying on task. If you need highly deterministic output (for example, for code generation in CI), you can lower the temperature toward `0.0`.

---

## Advanced Features

### URL Context

Gemini models can now access and analyze web content directly through URL context. This feature allows Roo to:

- Read and understand web pages in real-time
- Analyze documentation from URLs
- Review online code repositories
- Access current information from websites

#### Enabling URL Context

1. Open Roo Code Settings
2. Navigate to the Gemini provider settings
3. Enable "URL Context" option
4. Save your settings

#### Usage Example

```
Please analyze the documentation at https://example.com/api-docs and create a TypeScript client library based on the API specification.
```

### Google Search Grounding

Enable Google Search grounding to enhance Gemini's responses with real-time search results. This provides:

- Up-to-date information from web searches
- Fact-checking capabilities
- Current event awareness
- Enhanced accuracy for technical queries

#### Enabling Search Grounding

1. Open Roo Code Settings
2. Navigate to the Gemini provider settings
3. Enable "Google Search Grounding" option
4. Save your settings

#### Usage Example

```
What are the latest best practices for React Server Components in 2025? Please search for the most recent information.
```

### Combined Usage

Both features can be used together for powerful workflows:

```
Search for the latest Node.js security vulnerabilities and then analyze my package.json file to see if I'm affected. Also check the official Node.js security page for recommendations.
```

---

## Tips and Notes

*   **Pricing:**  Gemini API usage is priced based on input and output tokens. URL context and search grounding may incur additional costs. Some experimental models are available for free. Refer to the [Gemini pricing page](https://ai.google.dev/pricing) for detailed information.
*   **Model Selection:** Choose models based on your needs:
    - **Flash models:** Faster and more cost-effective for most tasks
    - **Pro models:** Better for complex reasoning and analysis
    - **Thinking models:** Best for tasks requiring step-by-step reasoning (requires reasoning budget)
    - **Experimental models:** Latest features, may be free but less stable
*   **Context Windows:** Most Gemini models support large context windows up to 1,048,576 tokens, allowing for extensive code analysis and documentation processing.
*   **Rate Limits:** URL context and search grounding features may have separate rate limits. Monitor your usage to avoid hitting limits.
*   **Privacy:** When using URL context, be mindful of accessing private or sensitive URLs. Ensure you have permission to analyze the content.
*   **Search Quality:** Google Search grounding works best with specific, well-formed queries. Be clear about what information you need.
