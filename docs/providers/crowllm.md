---
sidebar_label: CrowLLM
description: Connect Roo Code to CrowLLM, an OpenAI-compatible gateway that serves models from several labs behind one base URL and one API key.
keywords:
  - crowllm
  - roo code
  - api provider
  - openai compatible
  - unified api
  - llm gateway
  - multi model
---

# Using CrowLLM With Roo Code

CrowLLM is an OpenAI-compatible AI gateway: a single base URL and a single API key for models from several labs (DeepSeek, Zhipu, Moonshot, Anthropic, Google, xAI and others). It implements the OpenAI Chat Completions API and exposes a `GET /v1/models` listing, so Roo Code can use it through the built-in **OpenAI Compatible** provider.

**Website:** [https://crowllm.com](https://crowllm.com)

---

## Key Benefits

*   **One key, many models:** switch between lab models without creating separate accounts or keys.
*   **Standard API:** plain OpenAI Chat Completions, including streaming and tool calling on models that support them.
*   **Free shelf:** model ids ending in `:free` are zero-rated and listed in the public models endpoint.
*   **Live catalog:** the model list comes from the gateway's `/v1/models`, so newly served ids appear without a Roo Code update.

---

## Getting Started

1. Create an account at [https://crowllm.com](https://crowllm.com) and generate an API key.
2. In Roo Code, open **Settings → Providers** and choose **OpenAI Compatible**.
3. Fill in:
    *   **Base URL:** `https://crowllm.com/v1`
    *   **API Key:** your CrowLLM key
    *   **Model ID:** any id from the list below (or fetch the full list from `https://crowllm.com/v1/models`)
4. Save and start a task.

:::tip
CrowLLM bills per token on the paid ids; `:free` ids are zero-rated. Current rates are listed at [https://crowllm.com/pricing](https://crowllm.com/pricing).
:::

## Example Models

| Model ID | Notes |
| --- | --- |
| `deepseek-v4-flash` | Low-cost chat model |
| `glm-5.3` | 200K context, tools |
| `kimi-k3` | 256K context, text and image input |
| `claude-opus-4-7` | Anthropic flagship, text and image input |
| `gemini-3.7-flash` | Gemini flash tier, text and image input |
| `grok-4.7:free` | Zero-rated shelf model |

## Troubleshooting

*   **401 Unauthorized:** check the key and make sure the base URL ends with `/v1`.
*   **Model not found:** confirm the id exists at `https://crowllm.com/v1/models`, or pick another id from the table.
*   **Reasoning not shown:** only models that emit `reasoning_content` surface thinking output.
