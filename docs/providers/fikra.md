---
description: Configure Fikra in Roo Code to access open-weight models through one hosted OpenAI-compatible API and a single prepaid balance.
sidebar_label: Fikra
keywords:
  - roo code
  - fikra
  - fikraapi
  - openai compatible
  - ai provider
  - open-weight models
  - language models
  - api configuration
---

# Using Fikra With Roo Code

[Fikra](https://fikraapi.co.ke/) is a hosted, OpenAI-compatible API for open-weight models. One API key covers models from DeepSeek, GLM, Kimi, Qwen, and StepFun, plus Fikra's own lanes. Pricing is pay-as-you-go from a prepaid balance; no subscription.

**Website:** [https://fikraapi.co.ke/](https://fikraapi.co.ke/) ([Docs](https://docs.fikraapi.co.ke/))

---

## Getting an API Key

1.  **Sign Up:** Go to the [Fikra website](https://fikraapi.co.ke/) and create an account.
2.  **Create a key:** Generate an API key from the dashboard and keep it somewhere safe.

---

## Available Models

Fikra hosts open-weight models with 1M-token context windows on most lanes, billed per token. The model list and live pay-per-token pricing are on the [pricing page](https://fikraapi.co.ke/pricing). Current lanes include:

- `deepseek-v4.1-flash`
- `glm-5.3` / `glm-5.3-flash`
- `kimi-k3`
- `step-5-preview`
- `qwen3.8-27b`

---

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenAI Compatible" from the "API Provider" dropdown.
3.  **Enter Base URL:** `https://api.fikraapi.co.ke/v1`
4.  **Enter API Key:** Paste your Fikra API key.
5.  **Select Model:** Choose a model from the dropdown (e.g., `deepseek-v4.1-flash`).

---

## Tips and Notes

- **Prepaid billing:** Fikra is pay-as-you-go from a prepaid balance. Top up via card or M-Pesa/mobile money.
- **One key:** All lanes use the same key; switch models by changing the request instead of juggling providers.
