---
description: Configure TokenMix in Roo Code to access 300+ models from 17 vendors through one OpenAI-compatible API key, including hard-to-reach Chinese models.
keywords:
  - roo code
  - tokenmix
  - ai provider
  - openai compatible
  - api gateway
  - chinese models
  - deepseek
  - qwen
sidebar_label: TokenMix
---

# Using TokenMix With Roo Code

Roo Code supports [TokenMix](https://tokenmix.ai/), an OpenAI-compatible API gateway that provides access to 300+ models across 17 vendors — including OpenAI, Anthropic, and Google, plus Chinese models that are otherwise hard to access from outside China (Qwen, DeepSeek, Doubao, GLM, Kimi, Hunyuan).

**Website:** [https://tokenmix.ai/](https://tokenmix.ai/)

---

## Getting an API Key

1.  **Sign Up/Sign In:** Go to [tokenmix.ai](https://tokenmix.ai/) and create an account or sign in.
2.  **Get API Key:** Generate an API key from your TokenMix dashboard. See the [TokenMix documentation](https://tokenmix.ai/docs) for details.

---

## Available Models

TokenMix exposes 300+ models behind a single OpenAI-compatible endpoint. Because Roo Code connects through the OpenAI Compatible provider, you set the model ID directly. Example model IDs:

- `deepseek/deepseek-v3.2`
- `qwen/qwen3.7-max`
- `moonshot/kimi-k2.6`
- `anthropic/claude-opus-4.8`

For the full, up-to-date catalog, see the [TokenMix website](https://tokenmix.ai/).

---

## Configuration in Roo Code

Because TokenMix is OpenAI-compatible, it is configured through Roo Code's **OpenAI Compatible** provider:

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenAI Compatible" from the "API Provider" dropdown.
3.  **Base URL:** Enter `https://api.tokenmix.ai/v1`.
4.  **API Key:** Paste your TokenMix API key.
5.  **Model:** Enter a model ID, for example `deepseek/deepseek-v3.2`.

---

## Tips and Notes

- **One key, many vendors:** TokenMix routes to 17 upstream vendors behind a single key and base URL.
- **Chinese models:** Qwen, DeepSeek, Doubao, GLM, Kimi and Hunyuan are reachable without region restrictions.
- **Tool calling:** Native tool calling requires a model that supports OpenAI-compatible tool calls.
