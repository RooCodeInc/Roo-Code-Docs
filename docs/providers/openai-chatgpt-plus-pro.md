---
sidebar_label: OpenAI – ChatGPT Plus/Pro
title: OpenAI – ChatGPT Plus/Pro
description: Use Codex models in Roo Code with a ChatGPT Plus/Pro subscription (OAuth sign-in, no API key).
keywords:
  - OpenAI Codex
  - ChatGPT Plus
  - ChatGPT Pro
  - Roo Code
  - OAuth
  - no api key
  - subscription
---

<iframe
  width="600"
  height="338"
  src="https://www.youtube.com/embed/t0sIT8nGvrk"
  title="OpenAI – ChatGPT Plus/Pro provider setup"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

Use Codex models in Roo Code **without an OpenAI API key**. Just sign in with the ChatGPT account you already pay for.

---

If you want the official OpenAI API (API keys, usage-based billing, broader model availability), use the regular OpenAI provider instead: [Using OpenAI With Roo Code](/providers/openai).

## Quickstart: sign in and run a task

1. Open Roo Code settings (click the gear icon <Codicon name="gear" /> in the Roo Code panel).
2. In **API Provider**, select **OpenAI – ChatGPT Plus/Pro**.
3. Click **Sign in to OpenAI Codex**.
4. Finish the sign-in flow in your browser.
5. Back in Roo Code settings, pick a model from the dropdown.
6. Start a task.

## What you can't do (and why)

- **You can't use arbitrary OpenAI API models.** This provider only exposes the models listed in Roo's Codex model catalog.
- **You can't export/migrate your sign-in state with settings export.** OAuth tokens are stored in VS Code SecretStorage, which isn't included in Roo's settings export.
- **You can't sign in if Roo can't bind `localhost:1455`.** The OAuth callback uses a local server; if your machine (or security software) blocks it, the flow can't complete.

## Troubleshooting

#### Not authenticated with OpenAI Codex (or Roo asks you to sign in)

- **Symptom:** Roo fails immediately and tells you to sign in.
- **Cause:** You haven't completed OAuth sign-in, or your stored refresh token was revoked and Roo cleared it.
- **Fix:** In the provider settings panel, click **Sign in to OpenAI Codex** again.
- **Prevention:** Don't delete VS Code extension secrets unless you expect to re-auth.

#### Port 1455 is already in use during sign-in

- **Symptom:** Sign-in fails right away and mentions port `1455`.
- **Cause:** Another process is listening on that port.
- **Fix:** Stop the process using `1455`, then retry sign-in.
- **Prevention:** Avoid running other local OAuth callback servers on the same port.

#### 403 Forbidden or Model not available

- **Symptom:** Requests fail with access denied.
- **Cause:** Your ChatGPT subscription or organization doesn't have access to that model.
- **Fix:** Pick a different model, or verify your account/org subscription.
- **Prevention:** Treat the model list in the provider settings as the source of truth.

#### Cost shows as $0

- **Symptom:** Roo shows usage but cost is zero.
- **Cause:** This provider is subscription-covered, so Roo intentionally reports cost as $0.
- **Fix:** Nothing to fix.
- **Prevention:** Don't treat $0 as “no tokens consumed”; it's “not billed per token in Roo”.
