---
sidebar_label: Z AI
description: Configure Z AI models in Roo Code. Access GLM-4.5 series models with region-aware routing for international and China mainland users.
keywords:
  - z ai
  - zai
  - zhipu ai
  - glm-4.5
  - roo code
  - api provider
  - china ai
  - international ai
  - openai compatible
image: /img/social-share.jpg
---

# Using Z AI With Roo Code

Z AI (Zhipu AI) provides advanced language models with the GLM-4.5 series. The provider offers region-aware routing with separate endpoints for international users and China mainland users.

**Website:** [https://www.z.ai/](https://www.z.ai/) (International) | [https://open.bigmodel.cn/](https://open.bigmodel.cn/) (China)

---

## Getting an API Key

### International Users

1. **Sign Up/Sign In:** Go to [https://www.z.ai/](https://www.z.ai/). Create an account or sign in.
2. **Navigate to API Keys:** Access your account dashboard and find the API keys section.
3. **Create a Key:** Generate a new API key for your application.
4. **Copy the Key:** **Important:** Copy the API key immediately and store it securely.

### China Mainland Users

1. **Sign Up/Sign In:** Go to [https://open.bigmodel.cn/](https://open.bigmodel.cn/). Create an account or sign in.
2. **Navigate to API Keys:** Access your account dashboard and find the API keys section.
3. **Create a Key:** Generate a new API key for your application.
4. **Copy the Key:** **Important:** Copy the API key immediately and store it securely.

---

## Supported Models

Z AI provides different model catalogs based on your selected region:

### International Models
* GLM-4.5 series models
* GLM-4.5-Air models

### China Mainland Models
* GLM-4.5 series models
* GLM-4.5-Air models

The specific model availability may vary by region. The appropriate models will be available in the dropdown once you select your region.

---

## Configuration in Roo Code

1. **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2. **Select Provider:** Choose "Z AI" from the "API Provider" dropdown.
3. **Select Region:** Choose your region:
   - "International" for global access
   - "China" for mainland China access
4. **Enter API Key:** Paste your Z AI API key into the "Z AI API Key" field.
5. **Select Model:** Choose your desired model from the "Model" dropdown. Available models depend on your selected region.

---

## Tips and Notes

* **Region Selection:** The region setting determines both the API endpoint and available models:
  - International: Uses `https://api.z.ai/api/paas/v4`
  - China: Uses `https://open.bigmodel.cn/api/paas/v4`
* **OpenAI Compatibility:** Z AI uses an OpenAI-compatible API, providing streaming responses and usage reporting.
* **Model Selection:** Models are automatically filtered based on your selected region to ensure compatibility.
* **API Key Required:** A valid API key is required for all requests. Ensure you've obtained one from the appropriate regional platform.
* **Pricing:** Check the respective regional websites for current pricing information.