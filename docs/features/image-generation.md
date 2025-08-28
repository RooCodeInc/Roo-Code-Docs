---
description: Generate images from text prompts directly in Roo Code using OpenRouter API. Save AI-generated images to your workspace with preview support.
keywords:
  - image generation
  - text to image
  - OpenRouter
  - AI images
  - experimental feature
  - image creation
  - prompt to image
image: /img/social-share.jpg
---

# Image Generation

Generate images from plain text prompts, save them to your project, and preview them in the chat. This experimental feature requires an OpenRouter API key.

:::warning Experimental Feature
Image Generation is an experimental feature that requires enabling in settings and configuring an OpenRouter API key.
:::

---

## Key Features

- Create images directly from chat using natural language
- Saves to your workspace at a path you choose; file extension is auto-added if missing
- Shows a preview of the generated image in the conversation
- Choose an image generation model (via OpenRouter)
- Simple on/off toggle under Experimental settings

---

## Use Case

**Before:** You had to copy prompts to an external site, download the result, then move it into your workspace.

**With this feature:** Ask Roo to generate an image, approve, pick a save location, and continue editing with the image already in your project.

---

## How It Works

When enabled, Roo sends your prompt to an image-capable model through OpenRouter. The image returned by OpenRouter is saved to the path you specify inside your current workspace. Roo shows a preview in the chat and the file appears in your file explorer.

---

## Requirements

- OpenRouter account and API key
- Internet access
- An open, writable workspace folder

---

## Configuration

### 1. Enable Image Generation (Experimental)
- **Purpose:** Turns the feature on so Roo can create images on request
- **Default:** Off
- **Location:** Settings > Experimental

### 2. OpenRouter API Key
- **Purpose:** Authorizes image generation requests
- **Default:** Empty (required)
- **Get your key:** [https://openrouter.ai/keys](https://openrouter.ai/keys)

### 3. Image Generation Model
- **Purpose:** Selects which model to use for generation
- **Default:** Gemini 2.5 Flash Image Preview (or the free preview variant)

---

## Using Image Generation

1. In chat, ask Roo to generate an image and describe what you want (subject, style, lighting, composition).
2. Confirm the action when prompted. Roo may ask you to choose a save path (for example: `images/sunset.png`).
3. Roo generates the image and saves it. If you don't include an extension, one is added automatically (png or jpg).
4. See the image preview in the chat and locate the file in your workspace.

---

## Tips for Better Results

### Be Specific
Include these elements in your prompts:
- **Style:** artistic medium, art movement, or specific artist style
- **Mood:** emotional tone, atmosphere
- **Color palette:** specific colors or color schemes
- **Camera/lighting:** angle, perspective, lighting conditions
- **Aspect ratio:** dimensions or orientation

---

## Limitations

- Experimental feature; availability and model list are limited
- One image is produced per request
- Output formats supported: PNG or JPG
- Usage may be subject to your OpenRouter plan limits and costs

---

## Status

This feature is experimental and may change or be removed in future versions. Provide feedback through [GitHub Issues](https://github.com/RooCodeInc/Roo-Code/issues).