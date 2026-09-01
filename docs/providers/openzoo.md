---
title: OpenZoo
sidebar_label: OpenZoo
description: Use Roo Code with OpenZoo, an OpenAI-compatible provider with no signup — pay per call, hosted or local via npx.
keywords:
  - OpenZoo
  - Roo Code
  - OpenAI compatible
  - x402
  - pay per call
---

# Using OpenZoo With Roo Code

OpenZoo is an OpenAI-compatible provider with no account or signup. Any API key
value is accepted; usage is paid per request — by card, or automatically via
the x402 protocol when running the local gateway. It can be used hosted or
fully local.

**Website:** [https://openzoo.fun](https://openzoo.fun)

## Getting an API Key

No key is issued — enter any value (for example `sk-openzoo`). Billing happens
per request.

## Available Models

Fetch the live list (free) from
[`https://api.openzoo.fun/v1/models`](https://api.openzoo.fun/v1/models).
Model ids are namespaced, e.g. `z-ai/glm-5.3-flash`.

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenAI Compatible" from the "API Provider" dropdown.
3.  **Base URL:** Enter `https://api.openzoo.fun/v1`, or run `npx openzoo` locally and use `http://localhost:8402/v1`.
4.  **API Key:** Enter any value, e.g. `sk-openzoo`.
5.  **Model:** Enter a model id from `/v1/models`.

## Tips and Notes

*   **Tool calling:** Roo Code requires native OpenAI tool calling; pick a model
    that supports it (frontier chat models in the catalog do).
*   **Streaming:** SSE streaming is supported.
*   **Local mode:** `npx openzoo` runs the same API on
    `http://localhost:8402/v1` and pays per call from a local burner wallet.
*   **HTTP 402:** an unfunded wallet returns a 402 whose body carries its own
    directions (card link and wallet commands).
