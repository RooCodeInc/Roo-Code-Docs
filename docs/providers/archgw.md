---
sidebar_label: Arch LLM Gateway
description: The smart edge and AI gateway for agents. Arch is a proxy server that handles the low-level work in building agents like applying guardrails, routing prompts to the right agent, and unifying access to LLMs. It is framework-agnostic, natively understands prompts, and helps you build agents faster.
keywords:
  - archgw
  - roo code
  - api provider
  - unified api
  - openai compatible
  - multi model
  - llm proxy
  - local deployment
  - cost management
  - model routing
  - preference based routing
  - developer preferences
image: /img/social-share.jpg
---

# Using Arch LLM Gateway With Roo Code

[Arch Gateway](https://github.com/katanemo/archgw) unifies access and routing to any LLM, including dynamic routing via [user preferences](https://github.com/katanemo/archgw#Preference-based-Routing). For example, it can direct a query to the appropriate model according to specified user preferences.


Arch LLM Gateway provides a unified interface to many Large Language Models (LLMs) by offering an OpenAI-compatible API. This allows you to run a local server that can proxy requests to various model providers or serve local models, all accessible through a consistent API endpoint.

**Website:** [github.com/katanemo/archgw](https://github.com/katanemo/archgw) (Main project) & [docs.archgw.com/](https://docs.archgw.com/) (Documentation)

---

## Key Benefits

* 🚦 **Routing to Agents:** Engineered with purpose-built [LLMs](https://huggingface.co/collections/katanemo/arch-function-66f209a693ea8df14317ad68) for fast (<100ms) agent routing and hand-off scenarios
* 🔗 **Routing to LLMs:** Unify access and routing to any LLM, including dynamic routing via [preference policies](https://github.com/katanemo/archgw#Preference-based-Routing).
* ⛨ **Guardrails:** Centrally configure and prevent harmful outcomes and ensure safe user interactions
* ⚡ **Tools Use:** For common agentic scenarios let Arch instantly clarify and convert prompts to tools/API calls
* 🕵 **Observability:** W3C compatible request tracing and LLM metrics that instantly plugin with popular tools
* 🧱 **Built on Envoy:** Arch runs alongside app servers as a containerized process, and builds on top of [Envoy's](https://envoyproxy.io/) proven HTTP management and scalability features to handle ingress and egress traffic related to prompts and LLMs.

---

## Setting Up Arch LLM Gateway

To use Arch Gateway with Roo Code, you first need to set up and run archgw with LLM `arch_config.yaml` (see below).

### Installation

1. Install Arch gateway pre-requisites:
  Follow [these steps](https://github.com/katanemo/archgw?tab=readme-ov-file#prerequisites) to ensure that you have pre-requisites installed.

### Configuration

2. Create a configuration file (`arch_config.yaml`) to define your models and providers:
   ```yaml
    version: v0.1.0

    listeners:
      egress_traffic:
        address: 0.0.0.0
        port: 12000
        message_format: openai
        timeout: 30s

    llm_providers:

      - model: openai/gpt-4o-mini
        access_key: $OPENAI_API_KEY
        default: true

      - model: openai/gpt-4o
        access_key: $OPENAI_API_KEY
        routing_preferences:
          - name: code understanding
            description: understand and explain existing code snippets, functions, or libraries

      - model: openai/gpt-4.1
        access_key: $OPENAI_API_KEY
        routing_preferences:
          - name: code generation
            description: generating new code snippets, functions, or boilerplate based on user prompts or requirements
   ```

### Starting the Arch LLM Gateway

3. Start the LLM Gateway:
   ```bash

   # In foreground mode with arch_config.yaml (recommended)

   $ OPENAI_API_KEY=some_key archgw up --service archgw --foreground
   ```

4. The proxy will run at `http://0.0.0.0:12000/v1` by default (accessible as `http://localhost:12000/v1`).

Refer to the [Arch Gateway documentation](https://docs.archgw.com/) for detailed instructions on advanced server configuration and features.

---

## Configuration in Roo Code

Once your Arch LLM Gateway server is running, you have two options for configuring it in Roo Code:

### Option 1: Using the Arch LLM Gateway Provider (Recommended)

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Arch LLM Gateway" from the "API Provider" dropdown.
3.  **Enter Base URL:**
    *   Input the URL of your Arch LLM Gateway server.
    *   Defaults to `http://localhost:12000/v1` if left blank.
4.  **Enter API Key (Optional):**
    *   If you've configured an API key for your Arch Gateway, enter it here.
    *   If your Arch Gateway doesn't require an API key, use a default dummy key (`"dummy-key"`), which should work fine.
5.  **Select Model:**
    *   Roo Code will attempt to fetch the list of available models from your Arch Gateway by querying the `${baseUrl}/v1/model/info` endpoint.
    *   The models displayed in the dropdown are sourced from this endpoint.
    *   Use the refresh button to update the model list if you've added new models to your Arch Gateway.
    *   If no model is selected, Roo Code defaults to `openai/gpt-4.1` (this is `archgwDefaultModelId`). Ensure this model (or your desired default) is configured and available on your Arch LLM Gateway.
6.  **Configure Routing:**
    *   Select "use preference based routing" option and use following configuration for routing. Note: model name must match with model names listed in arch_config.yaml.
    *   If you leave "use preference based routing" unchecked then routing configuration from arch_config.yaml will be used.

    ```yaml
      - model: openai/gpt-4o
        routing_preferences:
          - name: code understanding
            description: understand and explain code

      - model: openai/gpt-4.1
        routing_preferences:
          - name: code generation
            description: generating new code
    ```
    *   At this point you are ready. Fire away your queries and see arch router use dynamic models based on query type.


### Option 2: Using OpenAI Compatible Provider

Alternatively, you can configure Arch LLM Gateway using the "OpenAI Compatible" provider:

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenAI Compatible" from the "API Provider" dropdown.
3.  **Enter Base URL:** Input your Arch LLM Gateway proxy URL (e.g., `http://localhost:12000/v1`).
4.  **Enter API Key:** Use any string as the API key (e.g., `"sk-1234"`) since Arch Gateway handles the actual provider authentication.
5.  **Select Model:** Choose the model name you configured in your `arch_config.yaml` file.

---
