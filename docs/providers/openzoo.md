---
title: OpenZoo
sidebar_label: OpenZoo
description: Use Roo Code with OpenZoo, an OpenAI-compatible provider that pays per call over x402 from a local proxy — no account.
keywords:
  - OpenZoo
  - Roo Code
  - OpenAI compatible
  - x402
  - pay per call
---

# Using OpenZoo With Roo Code

OpenZoo is an OpenAI-compatible provider with no account or signup. You run a
small local proxy (`npx openzoo`) that pays for each request over the x402
protocol from a local burner wallet; Roo Code talks to the proxy like any
other OpenAI-compatible endpoint.

**Website:** [https://openzoo.fun](https://openzoo.fun)

## Getting an API Key

No key is issued. The local proxy ignores the key, so enter any non-empty
value (for example `sk-openzoo`). Billing happens per request from the
proxy's wallet.

## Available Models

Fetch the live list (free) from `http://localhost:8402/v1/models` once the
proxy is running. Model ids are bare model names, e.g. `claude-sonnet-5` or
`gpt-4o-mini`; `auto` lets the proxy pick a model per request.

## Configuration in Roo Code

1.  **Start the proxy:** run `npx openzoo`; it listens on `http://localhost:8402/v1`.
2.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
3.  **Select Provider:** Choose "OpenAI Compatible" from the "API Provider" dropdown.
4.  **Base URL:** Enter `http://localhost:8402/v1`.
5.  **API Key:** Enter any non-empty value, e.g. `sk-openzoo`.
6.  **Model:** Enter a model id from `/v1/models`.

## Tips and Notes

*   **Wallet:** `npx openzoo address` prints the proxy's wallet; fund it with
    USDC on Solana or Base. `npx openzoo balance` shows what is left.
*   **Tool calling:** Roo Code requires native OpenAI tool calling; pick a model
    that supports it (frontier chat models in the catalog do).
*   **Streaming:** SSE streaming is supported.
*   **HTTP 402 from the proxy:** the local wallet is unfunded — send USDC to
    the address from `npx openzoo address`.
*   **Hosted endpoint:** `https://api.openzoo.fun/v1` answers HTTP 402 unless
    the caller pays x402 or presents an OpenZoo subscription key
    (`ozk_live_…`). Roo Code cannot pay x402 itself, so use the local proxy.
