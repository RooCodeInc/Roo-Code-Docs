---
sidebar_label: Fireworks AI
description: Use Fireworks AI with Roo Code to access state-of-the-art open-source models like Kimi K2, Qwen3, and DeepSeek with large context windows up to 256K tokens.
keywords:
  - fireworks ai
  - fireworks
  - kimi k2
  - qwen3
  - deepseek
  - roo code
  - api provider
  - open source models
  - ai models
  - openai compatible
image: /img/social-share.jpg
---

# Using Fireworks AI With Roo Code

Fireworks AI provides access to state-of-the-art open-source language models through their optimized infrastructure. The provider offers cost-effective alternatives to proprietary AI services with context windows up to 256,000 tokens.

**Website:** [https://fireworks.ai/](https://fireworks.ai/)

---

## Getting an API Key

1. **Sign Up/Sign In:** Go to [Fireworks AI](https://fireworks.ai/). Create an account or sign in.
2. **Navigate to Dashboard:** Access your account dashboard.
3. **Generate API Key:** Create a new API key from the dashboard.
4. **Copy the Key:** **Important:** Copy the API key immediately and store it securely.

---

## Supported Models

Fireworks AI offers several high-performance models:

### Kimi K2
* `accounts/fireworks/models/kimi-k2-instruct` (Default)
  - 1 trillion total parameters with 32B activated params
  - 128K context window
  - Optimized for agentic capabilities
  - $0.60/M input, $2.50/M output

### Qwen3 Series
* `accounts/fireworks/models/qwen3-235b-a22b-instruct-2507`
  - 256K context window
  - Competitive with closed-source models
  - $0.22/M input, $0.88/M output

* `accounts/fireworks/models/qwen3-coder-480b-a35b-instruct`
  - 256K context window
  - Specialized for coding tasks
  - $0.45/M input, $1.80/M output

### DeepSeek Series
* `accounts/fireworks/models/deepseek-r1-0528`
  - 160K context window
  - Advanced reasoning with reduced hallucination
  - Function calling support
  - $3.00/M input, $8.00/M output

* `accounts/fireworks/models/deepseek-v3`
  - 128K context window
  - 671B total parameters with 37B activated
  - $0.90/M input, $0.90/M output

---

## Configuration in Roo Code

1. **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2. **Select Provider:** Choose "Fireworks AI" from the "API Provider" dropdown.
3. **Enter API Key:** Paste your Fireworks API key into the "Fireworks API Key" field.
4. **Model Selection:** The default model (Kimi K2) is automatically selected. You can change it from the model dropdown if needed.

---

## Model Selection Guide

Choose models based on your needs:

| Model | Best For | Context | Price |
|-------|----------|---------|-------|
| **Kimi K2** | General tasks, balanced performance | 128K | Mid-range |
| **Qwen3 235B** | Cost-effective general use | 256K | Budget-friendly |
| **Qwen3 Coder** | Code generation and debugging | 256K | Mid-range |
| **DeepSeek R1** | Complex reasoning, function calling | 160K | Premium |
| **DeepSeek V3** | Strong general performance | 128K | Balanced |

---

## Tips and Notes

* **Cost-Effective:** Fireworks AI offers significantly lower pricing than proprietary models while maintaining competitive performance.
* **Large Context Windows:** Most models support 128K-256K tokens, suitable for processing large documents and maintaining extended conversations.
* **OpenAI Compatibility:** The provider uses an OpenAI-compatible API format with streaming support and usage tracking.
* **Text-Only:** All models are text-only without image support or prompt caching capabilities.
* **Default Temperature:** Uses 0.5 temperature by default for balanced creativity and consistency.
* **API Keys:** Stored locally on your machine for security.
* **Pricing:** See the [Fireworks AI pricing page](https://fireworks.ai/pricing) for current rates. Prices shown are per million tokens.