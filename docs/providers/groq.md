---
sidebar_label: Groq
---

# Using Groq With Roo Code

Groq specializes in providing very high-speed inference for large language models, utilizing their custom-built Language Processing Units (LPUs). This can result in significantly faster response times for supported models.

**Website:** [https://groq.com/](https://groq.com/)

---

## Getting an API Key

To use Groq with Roo Code, you'll need an API key from the [GroqCloud Console](https://console.groq.com/). After signing up or logging in, navigate to the API Keys section of your dashboard to create and copy your key.

---

## Supported Models

Roo Code will attempt to fetch the list of available models from the Groq API. Common models available via Groq include:

*   `llama3-8b-8192`
*   `llama3-70b-8192`
*   `mixtral-8x7b-32768`
*   `gemma-7b-it`

Refer to the [Groq Documentation](https://console.groq.com/docs/models) for the most up-to-date list of supported models and their capabilities.

---

## Configuration in Roo Code

1.  **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2.  **Select Provider:** Choose "Groq" from the "API Provider" dropdown.
3.  **Enter API Key:** Paste your Groq API key into the "Groq API Key" field.
4.  **Select Model:** Choose your desired model from the "Model" dropdown.
