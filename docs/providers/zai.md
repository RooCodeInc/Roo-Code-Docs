---
sidebar_label: Z AI
description: Configure Z.ai's GLM-4.5 AI models in Roo Code. Access cutting-edge open-source language models with dual regional support and competitive pricing.
keywords:
  - z ai
  - zai
  - zhipu ai
  - glm-4.5
  - roo code
  - api provider
  - chinese ai
  - language models
  - open source ai
  - mixture of experts
image: /img/social-share.jpg
---

# Using Z AI With Roo Code

Z.ai (formerly Zhipu AI) is a leading Chinese AI company that develops cutting-edge foundation models. Their GLM-4.5 series represents breakthrough technology in open-source AI, featuring Mixture of Experts (MoE) architecture with native agent capabilities and exceptional performance across reasoning, coding, and intelligent agent tasks.

**Website:** [https://z.ai/](https://z.ai/)

---

## Getting an API Key

Z.ai provides two regional endpoints to serve users globally:

### International Users
1. **Access Z.ai Platform:** Visit [https://chat.z.ai/](https://chat.z.ai/)
2. **Register/Sign In:** Create an account or sign in to the platform
3. **Navigate to API:** Access the API section to generate your key
4. **Copy the Key:** **Important:** Copy and securely store your API key immediately

### China Users  
1. **Access Zhipu Platform:** Visit [https://open.bigmodel.cn/dev/api](https://open.bigmodel.cn/dev/api)
2. **Register/Sign In:** Create an account on the Zhipu AI Open Platform
3. **Generate API Key:** Create a new API key in the developer console
4. **Copy the Key:** **Important:** Store your API key securely for future use

---

## Supported Models

Roo Code supports the complete GLM-4.5 series:

### GLM-4.5 Series
* `glm-4.5` (Default) - Advanced reasoning and coding with 355B total parameters (32B active)
* `glm-4.5-air` - Efficient model with 106B total parameters (12B active)

### Model Features
All GLM-4.5 models include:
- **Context Window:** 131,072 tokens
- **Max Output:** 98,304 tokens  
- **Prompt Caching:** Supported with significant cost savings
- **Agent Capabilities:** Native reasoning, planning, and tool usage
- **Hybrid Reasoning:** Both thinking and non-thinking modes
- **Multi-Token Prediction:** Up to 8x faster inference

### Pricing
Z.ai offers industry-leading competitive pricing:
- **Input tokens:** From $0.11 per million tokens
- **Output tokens:** From $0.28 per million tokens
- **Cache reads:** Significant discounts on cached content

---

## Regional Configuration

Z.ai automatically selects the optimal endpoint based on your configuration:

### International Endpoint
- **Base URL:** `https://api.z.ai/api/paas/v4`
- **Models:** International pricing tier
- **Recommended for:** Users outside mainland China

### China Endpoint  
- **Base URL:** `https://open.bigmodel.cn/api/paas/v4`
- **Models:** Mainland China pricing tier
- **Recommended for:** Users in mainland China

---

## Configuration in Roo Code

1. **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2. **Select Provider:** Choose "Z AI" from the "API Provider" dropdown.
3. **Choose Endpoint:** Select your Z AI entrypoint:
   - **api.z.ai** for international users
   - **open.bigmodel.cn** for China users
4. **Enter API Key:** Paste your Z AI API key into the "Z AI API Key" field.
5. **Select Model:** Choose your desired GLM-4.5 model from the dropdown.

---

## Advanced Features

### Agent-Native Capabilities
GLM-4.5 models feature built-in agent capabilities:
- **Multi-step reasoning:** Complex problem decomposition and planning
- **Tool integration:** Native API and function calling support
- **Workflow management:** End-to-end task execution
- **Data visualization:** Complex chart and diagram generation

### Performance Optimizations
- **Speculative Decoding:** Up to 8x faster inference speeds
- **Multi-Token Prediction:** Generate 100+ tokens per second
- **Mixture of Experts:** Efficient parameter utilization
- **Hardware Efficiency:** Optimized for both cloud and edge deployment

---

## Example Usage

Here's a sample API call structure as referenced in the [Z.ai documentation](https://docs.z.ai/guides/overview/quick-start):

```bash
curl -X POST "https://api.z.ai/api/paas/v4/chat/completions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
    "model": "glm-4.5",
    "messages": [
        {
            "role": "system", 
            "content": "You are a helpful AI assistant."
        },
        {
            "role": "user",
            "content": "Hello, please introduce yourself."
        }
    ],
    "temperature": 0.7,
    "top_p": 0.8
}'
```

**Note:** Roo Code handles all API communication automatically once configured.