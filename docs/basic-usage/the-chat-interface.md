---
description: Learn how to use the Roo Code chat interface effectively. Understand the layout, features, and best practices for communicating with your AI coding assistant.
keywords:
  - Roo Code chat interface
  - AI assistant interaction
  - chat features
  - user interface
  - VS Code extension
image: /img/social-share.jpg
---

import KangarooIcon from '@site/src/components/KangarooIcon';

# The Chat Interface

The Roo Code chat interface is your primary way of interacting with it. It's located in the Roo Code panel, which you can open by clicking the Roo Code icon (<KangarooIcon />) in the VS Code Activity Bar.

---

## Components of the Chat Interface

The chat interface consists of the following main elements:

1. **Chat History:** This area displays the conversation history between you and Roo Code.  It shows your requests, Roo Code's responses, and any actions taken (like file edits or command executions).

2. **Input Field:** This is where you type your tasks and questions for Roo Code.  You can use plain English to communicate.

3. **Action Buttons:** These buttons appear above the input field and allow you to approve or reject Roo Code's proposed actions.  The available buttons change depending on the context.

4. **Send Button:** This looks like a small plane and it's located to the far right of the input field. This sends messages to Roo after you've typed them.

5. **Plus Button:** The plus button is located at the top in the header, and it resets the current session.

6. **Settings Button:** The settings button is a gear, and it's used for opening the settings to customize features or behavior.

7. **Mode Selector:** The mode selector is a dropdown located to the left of the chat input field. It is used for selecting which mode Roo should use for your tasks.

<img src="/img/the-chat-interface/the-chat-interface-1.png" alt="Chat interface components labeled with numbered callouts" width="900" />

*Numbered interface elements showing the key components of the Roo Code chat interface.*

---

## Interacting with Messages

* **Clickable Links:** File paths, URLs, and other mentions in the chat history are clickable.  Clicking a file path will open the file in the editor.  Clicking a URL will open it in your default browser.
* **Copying Text:** You can copy text from the chat history by selecting it and using the standard copy command (Ctrl/Cmd + C).  Some elements, like code blocks, have a dedicated "Copy" button.
* **Expanding and Collapsing**: Click on a message to expand or collapse it.

---

## Status Indicators

* **Loading Spinner:**  When Roo Code is processing a request, you'll see a loading spinner.
* **Error Messages:**  If an error occurs, a red error message will be displayed.
* **Success Messages:** Green messages indicate successful completion of actions.
