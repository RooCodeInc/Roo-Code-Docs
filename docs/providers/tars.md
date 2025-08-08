---
description: Configure Tetrate Agent Router Service (TARS) in Roo Code to access LLMs from multiple providers with configurable fallback and built-in observability.
keywords:
  - roo code
  - tetrate agent router service
  - tetrate
  - tars
  - ai provider
  - language models
  - model configuration
  - cost visibility
  - usage tracking
sidebar_label: Tetrate Agent Router Service
image: /img/social-share.jpg
---

# Using Tetrate Agent Router Service (TARS) With Roo Code

Roo Code supports accessing models through the [Tetrate Agent Router Service (TARS)](https://tetrate.io/products/tetrate-agent-router-service), a managed LLM routing service that provides configurable fallback and traffic shifting, and cost visibility without infrastructure overhead.

**Website:** [https://router.tetrate.ai](https://router.tetrate.ai)  
**API Endpoint:** `https://api.router.tetrate.ai/v1`

---

## Getting an API Key

1.  **Sign Up/Sign In:** Go to the [TARS website](https://router.tetrate.ai) and create an account using Google or GitHub OAuth.
2.  **Get API Key:** Generate your API key from the TARS dashboard after signing in.
3.  **Free Credit:** New signups with business email addresses receive a $5 free credit to get started.

---

## Supported Models

TARS provides access to models from multiple providers through a unified API. Roo Code will automatically fetch the latest list of available models. TARS supports configurable fallback and traffic shifting between models based on availability, cost, or performance preferences.

---

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Tetrate Agent Router Service" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your TARS API key into the "TARS API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.

---

## Tips and Notes

- **Unified Entry Point:** Single endpoint simplifies code and key management across multiple providers.
- **Cost Visibility:** Pay-as-you-go pricing with comprehensive cost tracking and optimization strategies.
- **Observability:** Detailed dashboards for monitoring usage, costs, response times, and model performance.
- **Automatic Fallback:** Built-in resiliency with automatic model switching when providers are unavailable.
- **A/B Testing:** Compare model performance side-by-side in the integrated playground.

---

## Relevant Resources

- [TARS Product Page](https://tetrate.io/products/tetrate-agent-router-service)
- [TARS Slack Community](https://join.slack.com/t/tetrate-agent-router/shared_invite/zt-399tv7hjm-6YMXztGywTOQrMIolvEBNg)
