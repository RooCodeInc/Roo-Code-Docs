---
sidebar_label: DaoXE
description: Configure DaoXE in Roo Code as a multi-model multi-protocol AI API gateway via the OpenAI Compatible provider.
keywords:
  - DaoXE
  - Roo Code
  - OpenAI compatible
  - multi-model
  - multi-protocol
  - API gateway
  - custom endpoint
---

# Using DaoXE With Roo Code

[DaoXE](https://daoxe.com) is a multi-model multi-protocol AI API gateway for developers.
In Roo Code, connect through the **OpenAI Compatible** provider using:

- **Base URL:** `https://daoxe.com/v1`
- **API Key:** your DaoXE account key
- **Model ID:** an exact model ID currently available to your account

DaoXE supports OpenAI Chat Completions, OpenAI Responses, Anthropic Messages, and image-compatible endpoints. Roo Code uses the OpenAI Chat Completions path below.

> DaoXE is **not available in mainland China**.

**Website:** [https://daoxe.com](https://daoxe.com)  
**Examples:** [DaoXE-AI](https://github.com/seven7763/DaoXE-AI)

---

## Getting an API Key

1. Create or sign in to your [DaoXE account](https://daoxe.com).
2. Create an API key in the dashboard.
3. Copy the key. Do not commit it to source control.

---

## Available Models

DaoXE model availability is account-scoped. Prefer the models returned for your key over a static list.

- Public catalog/pricing: [https://daoxe.com/pricing](https://daoxe.com/pricing)
- Authenticated discovery endpoint used by many clients: `GET https://daoxe.com/v1/models`

---

## Configuration in Roo Code

1. Open Roo Code Settings (gear icon).
2. Set **API Provider** to **OpenAI Compatible**.
3. Set **Base URL** to `https://daoxe.com/v1`.
4. Paste your DaoXE API key into **API Key**.
5. Enter an exact currently available DaoXE model ID in **Model**.

For tool use / agent features, choose a model that supports OpenAI-compatible tool/function calling.

---

## Tips

- Do not invent or hardcode model IDs from old screenshots; re-copy from your account.
- If you get model-not-found errors, refresh the catalog for your key and update the Model field.
- Public smoke/compare examples: [DaoXE-AI](https://github.com/seven7763/DaoXE-AI).
