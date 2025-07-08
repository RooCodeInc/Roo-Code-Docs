---
sidebar_label: Connecting To AI Provider
---
import KangarooIcon from '@site/src/components/KangarooIcon';

# Connecting Your First AI Provider

Roo Code requires an API key from an AI model provider to function. We recommend these options for accessing the powerful **Claude 3.7 Sonnet** model:

- **OpenRouter (Recommended):** Provides access to multiple AI models through a single API key. Ideal for getting started quickly with minimal setup. [View pricing](https://openrouter.ai/models?order=pricing-low-to-high).
- **Anthropic:** Direct access to Claude models. Requires API access approval and may have [rate limits depending on your tier](https://docs.anthropic.com/en/api/rate-limits#requirements-to-advance-tier). See [Anthropic's pricing page](https://www.anthropic.com/pricing#anthropic-api) for details.

---

## Getting Your API Key

### Option 1: LLM Routers

LLM routers let you access multiple AI models with one API key, simplifying cost management and switching between models. They often offer [competitive pricing](https://openrouter.ai/models?order=pricing-low-to-high) compared to direct providers.

#### OpenRouter

1. Go to [openrouter.ai](https://openrouter.ai/)
2. Sign in with your Google or GitHub account
3. Navigate to the [API keys page](https://openrouter.ai/keys) and create a new key
4. Copy your API key - you'll need this for Roo Code setup

<img src="/img/connecting-api-provider/connecting-api-provider-4.png" alt="OpenRouter API keys page" width="600" />

*OpenRouter dashboard with "Create key" button. Name your key and copy it after creation.*

#### LiteLLM

[LiteLLM](https://litellm.ai/) is an open-source LLM gateway that provides access to 100+ AI models through a unified OpenAI-compatible API. Set up a self-hosted proxy server to route requests to multiple providers through a single endpoint.

1. Install LiteLLM: `pip install 'litellm[proxy]'`

2. Create a configuration file (`config.yaml`) to define your models:
   ```yaml
   model_list:
     # Configure multiple Anthropic models
     - model_name: claude-3-7-sonnet
       litellm_params:
         model: anthropic/claude-3-7-sonnet-20250219
         api_key: os.environ/ANTHROPIC_API_KEY
     
     # Configure OpenAI models
     - model_name: gpt-4o
       litellm_params:
         model: openai/gpt-4o
         api_key: os.environ/OPENAI_API_KEY
     
     # Configure Azure OpenAI
     - model_name: azure-gpt-4
       litellm_params:
         model: azure/my-deployment-name
         api_base: https://your-resource.openai.azure.com/
         api_version: "2023-05-15"
         api_key: os.environ/AZURE_API_KEY
   ```

3. Start the LiteLLM proxy server:
   ```bash
   # Using configuration file (recommended)
   litellm --config config.yaml
   
   # Or quick start with a single model
   export ANTHROPIC_API_KEY=your-anthropic-key
   litellm --model claude-3-7-sonnet-20250219
   ```

4. The proxy will run at `http://0.0.0.0:4000` by default


#### Requesty

1. Go to [requesty.ai](https://requesty.ai/)
2. Sign in with your Google account or email
3. Navigate to the [API management page](https://app.requesty.ai/api-keys) and create a new key
4. **Important:** Copy your API key immediately as it won't be displayed again

<img src="/img/connecting-api-provider/connecting-api-provider-7.png" alt="Requesty API management page" width="600" />

*Requesty API management page with "Create API Key" button. Copy your key immediately - it's shown only once.*

### Option 2: Direct Providers

For direct access to specific models from their original providers, with full access to their features and capabilities:

#### Anthropic

1. Go to [console.anthropic.com](https://console.anthropic.com/)
2. Sign up for an account or log in
3. Navigate to the [API keys section](https://console.anthropic.com/settings/keys) and create a new key
4. **Important:** Copy your API key immediately as it won't be displayed again

<img src="/img/connecting-api-provider/connecting-api-provider-5.png" alt="Anthropic console API Keys section" width="600" />

*Anthropic console API Keys section with "Create key" button. Name your key, set expiration, and copy it immediately.*

#### OpenAI

1. Go to [platform.openai.com](https://platform.openai.com/)
2. Sign up for an account or log in
3. Navigate to the [API keys section](https://platform.openai.com/api-keys) and create a new key
4. **Important:** Copy your API key immediately as it won't be displayed again

<img src="/img/connecting-api-provider/connecting-api-provider-6.png" alt="OpenAI API keys page" width="600" />

*OpenAI platform with "Create new secret key" button. Name your key and copy it immediately after creation.*

---

## Configuring Roo Code in VS Code

Once you have your API key:

1. Open the Roo Code sidebar by clicking the Roo Code icon (<KangarooIcon />) in the VS Code Activity Bar
2. In the welcome screen, select your API provider from the dropdown
3. Paste your API key into the appropriate field
4. Select your model:
   - For **OpenRouter**: select `anthropic/claude-3.7-sonnet` ([model details](https://openrouter.ai/anthropic/claude-3.7-sonnet))
   - For **Anthropic**: select `claude-3-7-sonnet-20250219` ([model details](https://www.anthropic.com/pricing#anthropic-api))
   - For **LiteLLM**: 
     - Set the API provider to "OpenAI Compatible"
     - Enter your proxy URL (e.g., `http://localhost:4000`)
     - Use any string as the API key (e.g., "sk-1234")
     - Select the model name you configured in your `config.yaml`

:::info Model Selection Advice
We strongly recommend **Claude 3.7 Sonnet** for the best experience—it generally "just works" out of the box. Roo Code has been extensively optimized for this model's capabilities and instruction-following behavior.

Selecting alternative models is an advanced feature that introduces complexity. Different models vary significantly in how they follow tool instructions, parse formats, and maintain context through multi-step operations. If you do experiment with other models, choose ones specifically designed for structured reasoning and tool use.
:::

5. Click "Let's go!" to save your settings and start using Roo Code
