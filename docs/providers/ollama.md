---
sidebar_label: Ollama
description: Set up Ollama with Roo Code to run open source language models locally for privacy, offline access, and cost-effective AI coding.
keywords:
  - Ollama
  - local models
  - Roo Code
  - open source AI
  - CodeLlama
  - Qwen
  - offline AI
  - privacy
  - context window configuration
image: /img/social-share.jpg
---
import KangarooIcon from '@site/src/components/KangarooIcon';

# Using Ollama With Roo Code

Roo Code supports running models locally using Ollama. This provides privacy, offline access, and potentially lower costs, but requires more setup and a powerful computer.

**Website:** [https://ollama.com/](https://ollama.com/)

---

## Setting up Ollama

1.  **Download and Install Ollama:**  Download the Ollama installer for your operating system from the [Ollama website](https://ollama.com/). Follow the installation instructions. Make sure Ollama is running

    ```bash
    ollama serve
    ```

2.  **Download a Model:**  Ollama supports many different models.  You can find a list of available models on the [Ollama website](https://ollama.com/library).  Some recommended models for coding tasks include:

    *   `codellama:7b-code` (good starting point, smaller)
    *   `codellama:13b-code` (better quality, larger)
    *   `codellama:34b-code` (even better quality, very large)
    *   `qwen2.5-coder:32b`
    *   `mistralai/Mistral-7B-Instruct-v0.1` (good general-purpose model)
    *   `deepseek-coder:6.7b-base` (good for coding tasks)
    *   `llama3:8b-instruct-q5_1` (good for general tasks)

    To download a model, open your terminal and run:

    ```bash
    ollama pull <model_name>
    ```

    For example:

    ```bash
    ollama pull qwen2.5-coder:32b
    ```

3. **Configure the Model:** by default, Ollama uses a context window size of 2048 tokens, which is too small for Roo Code requests. You need to have at least 12k to get decent results, ideally - 32k. To configure a model, you actually need to set its parameters and save a copy of it.

   Load the model (we will use `qwen2.5-coder:32b` as an example):
   
    ```bash
    ollama run qwen2.5-coder:32b
    ```

   Change context size parameter:

    ```bash
    /set parameter num_ctx 32768
    ```

    Save the model with a new name:

    ```bash
    /save your_model_name
    ```

4.  **Configure Roo Code:**
    *   Open the Roo Code sidebar (<KangarooIcon /> icon).
    *   Click the settings gear icon (<Codicon name="gear" />).
    *   Select "ollama" as the API Provider.
    *   Enter the Model name from the previous step (e.g., `your_model_name`).
    *   (Optional) You can configure the base URL if you're running Ollama on a different machine. The default is `http://localhost:11434`.
    *   (Optional) Configure Model context size in Advanced settings, so Roo Code knows how to manage its sliding window.

---

## Tips and Notes

*   **Resource Requirements:** Running large language models locally can be resource-intensive.  Make sure your computer meets the minimum requirements for the model you choose.
*   **Model Selection:** Experiment with different models to find the one that best suits your needs.
*   **Offline Use:** Once you've downloaded a model, you can use Roo Code offline with that model.
*   **Token Tracking:** Roo Code tracks token usage for models run via Ollama, helping you monitor consumption.
*   **Ollama Documentation:** Refer to the [Ollama documentation](https://ollama.com/docs) for more information on installing, configuring, and using Ollama.
