---
sidebar_label: QVAC
description: Run local-first, peer-to-peer AI models with QVAC and connect them to Roo Code through its OpenAI-compatible server.
keywords:
  - QVAC
  - local models
  - Roo Code
  - OpenAI compatible
  - peer-to-peer AI
  - local-first
  - offline AI
  - gpt-oss
  - tool calling
---

# Using QVAC With Roo Code

[QVAC](https://qvac.com) is an open-source runtime for local-first, peer-to-peer AI. It can expose your local models through an OpenAI-compatible HTTP server, letting you connect them to Roo Code using the **OpenAI Compatible** provider.

**Website:** [https://qvac.com](https://qvac.com)

---

## Setting Up QVAC

1.  **Install the QVAC CLI:**

    ```bash
    npm i -g @qvac/cli
    ```

2.  **Define a model alias:** Create a `qvac.config.json` that maps a serve alias to a model. The alias you choose here is the model id you will enter in Roo Code.

    ```json
    {
      "serve": {
        "models": {
          "gpt-oss-20b": {
            "model": "GPT_OSS_20B_INST_Q4_K_M",
            "preload": true,
            "config": {
              "ctx_size": 32768,
              "tools": true
            }
          }
        }
      }
    }
    ```

    Two settings matter when using QVAC as a coding agent:
    *   **`ctx_size`** defaults to `1024`, which is far too small for agent prompts. Set it explicitly (e.g. `32768`).
    *   **`tools: true`** enables function/tool calling. Roo Code relies on native tool calling, so without this the model returns plain text instead of tool calls.

3.  **Start the server:**

    ```bash
    qvac serve openai
    ```

    This starts an OpenAI-compatible REST API on port `11434` by default (use `--port` to change it). Your base URL is `http://127.0.0.1:11434/v1`.

---

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "OpenAI Compatible" from the "API Provider" dropdown.
3.  **Enter Base URL:** Use `http://127.0.0.1:11434/v1` (or the port you set with `--port`).
4.  **Enter API Key:** QVAC's server does not validate the key, but the field is required—enter any non-empty string (e.g. `qvac`).
5.  **Enter Model ID:** Use the serve alias from your `qvac.config.json` (e.g. `gpt-oss-20b`).

---

## Tips and Notes

*   **Use a capable, agent-tuned model.** Tool-calling quality is bounded by the model you run. Small models often fail to invoke tools reliably; a larger agent-tuned model such as `gpt-oss-20b` is a good local default.
*   **Set the context window explicitly.** The QVAC LLM `ctx_size` default of `1024` is too small for Roo Code's prompts. Set it to something like `32768` in `qvac.config.json`.
*   **Enable tools.** Roo Code uses native tool calling exclusively. Set `"tools": true` in the model config or the model will respond with text instead of tool calls.
*   **Reasoning models.** For reasoning-tuned models such as Qwen3, set `"reasoning_budget": 0` in the model config unless you specifically want extended reasoning.
*   **Preload for a faster first response.** Setting `"preload": true` loads the model when the server starts, avoiding a cold start on your first request.
*   **Resource requirements.** Running large language models locally is resource-intensive. Make sure your machine can handle the model and context size you choose.

---

## Troubleshooting

*   **"Model Not Found":** The model id in Roo Code must exactly match a serve alias defined in `qvac.config.json`.
*   **Model replies with text instead of using tools:** Add `"tools": true` to the model's `config` in `qvac.config.json` and restart the server.
*   **Context overflow or truncated prompts:** Increase `ctx_size` (the default `1024` is too small for agent prompts).
*   **Connection errors:** Confirm `qvac serve openai` is running and that the Base URL and port match (`http://127.0.0.1:11434/v1` by default).
