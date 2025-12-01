---
title: Baseten
sidebar_label: Baseten
description: Learn how to configure and use Baseten's Model APIs with Roo Code. Access frontier open-source models with enterprise-grade performance, reliability, and competitive pricing.
keywords:
  - Baseten
  - Model APIs
  - open-source models
  - DeepSeek
  - Kimi K2
  - Qwen
  - Roo Code
  - AI integration
  - API key
  - enterprise inference
image: /img/social-share.jpg
---

# Using Baseten With Roo Code

Baseten provides on-demand frontier model APIs designed for production applications, not just experimentation. Built on the Baseten Inference Stack, these APIs deliver optimized inference for leading open-source models from OpenAI, DeepSeek, Moonshot AI, and Alibaba Cloud.

**Website:** [https://www.baseten.co/products/model-apis/](https://www.baseten.co/products/model-apis/)

---

## Getting an API Key

1. **Sign Up/Sign In:** Go to [Baseten](https://www.baseten.co/) and create an account or sign in.

2. **Navigate to API Keys:** Access your dashboard and go to the API Keys section at [https://app.baseten.co/settings/api_keys](https://app.baseten.co/settings/api_keys).

3. **Create a Key:** Generate a new API key. Give it a descriptive name (e.g., "Roo Code").

4. **Copy the Key:** Copy the API key immediately and store it securely.

---

## Supported Models

Roo Code supports all current models under Baseten Model APIs, including:

| Model | Provider | Context | Input/Output per 1M tokens |
|-------|----------|---------|---------------------------|
| `moonshotai/Kimi-K2-Thinking` | Moonshot AI | 262K | $0.60 / $2.50 |
| `zai-org/GLM-4.6` | Z AI | 200K | $0.60 / $2.20 |
| `moonshotai/Kimi-K2-Instruct-0905` | Moonshot AI | 262K | $0.60 / $2.50 |
| `openai/gpt-oss-120b` | OpenAI | 128K | $0.10 / $0.50 |
| `Qwen/Qwen3-Coder-480B-A35B-Instruct` | Alibaba Cloud | 262K | $0.38 / $1.53 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507` | Alibaba Cloud | 262K | $0.22 / $0.80 |
| `deepseek-ai/DeepSeek-R1` | DeepSeek | 163K | $2.55 / $5.95 |
| `deepseek-ai/DeepSeek-R1-0528` | DeepSeek | 163K | $2.55 / $5.95 |
| `deepseek-ai/DeepSeek-V3.1` | DeepSeek | 163K | $0.50 / $1.50 |
| `deepseek-ai/DeepSeek-V3-0324` | DeepSeek | 163K | $0.77 / $0.77 |

For the most up-to-date pricing, visit the [Baseten Model APIs page](https://www.baseten.co/products/model-apis/).

---

## Configuration in Roo Code

1. **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.

2. **Select Provider:** Choose "Baseten" from the "API Provider" dropdown.

3. **Enter API Key:** Paste your Baseten API key into the "Baseten API Key" field.

4. **Select Model:** Choose your desired model from the "Model" dropdown.

:::warning Kimi K2 Thinking Model
To use the `moonshotai/Kimi-K2-Thinking` model, you must enable native tool calling in the Roo Code settings. This setting allows Roo Code to call the model's tools through their native tool processor and is required for this reasoning model to function properly.
:::

---

## Production-First Architecture

Baseten's Model APIs are built for production environments with several key advantages:

### Enterprise-Grade Reliability

- **Four nines of uptime** (99.99%) through active-active redundancy
- **Cloud-agnostic, multi-cluster autoscaling** for consistent availability
- **SOC 2 Type II certified** and **HIPAA compliant** for security requirements

### Optimized Performance

- **Pre-optimized models** shipped with the Baseten Inference Stack
- **Latest-generation GPUs** with multi-cloud infrastructure
- **Ultra-fast inference** optimized from the bottom up for production workloads

### Cost Efficiency

- **5-10x less expensive** than closed alternatives
- **Optimized multi-cloud infrastructure** for efficient resource utilization
- **Transparent pricing** with no hidden costs or rate limit surprises

### Developer Experience

- **OpenAI compatible API** - migrate by swapping a single URL
- **Drop-in replacement** for closed models with comprehensive observability and analytics
- **Seamless scaling** from Model APIs to dedicated deployments

---

## Special Features

### Function Calling & Tool Use

All Baseten models support structured outputs, function calling, and tool use as part of the Baseten Inference Stack, making them ideal for agentic applications and coding workflows.

---

## Tips and Notes

- **Static Model List:** Roo Code uses a curated list of Baseten models. The default model is `zai-org/GLM-4.6`.

- **Multi-Cloud Capacity Management (MCM):** Baseten's multi-cloud infrastructure ensures high availability and low latency globally.

- **Support:** Baseten provides dedicated support for production deployments and can work with you on dedicated resources as you scale.

- **Pricing:** Current pricing is highly competitive and transparent. Prices typically range from $0.10-$6.00 per million tokens, making Baseten significantly more cost-effective than many closed-model alternatives while providing access to state-of-the-art open-source models.
