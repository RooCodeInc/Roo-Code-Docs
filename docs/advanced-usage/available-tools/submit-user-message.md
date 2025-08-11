---
description: This page explains how to use the submitUserMessage method in the Task API to programmatically send messages to a webview.
keywords:
  - submitusermessage
  - task api
  - developer tools
  - webview
image: /img/social-share.jpg
---

# submitUserMessage

The `submitUserMessage` method allows you to programmatically submit a user message to a webview, which is useful for building custom UI and automating interactions.

## Usage

```typescript
task.submitUserMessage("This is a message from my custom UI");
```

## Example

Here's an example of how you might use `submitUserMessage` in a custom mode to create a simple "To-Do" list manager:

```typescript
// .roo/modes/todo.js
import { Task } from '@roo-code/types';

export default {
  id: 'todo-manager',
  name: 'To-Do Manager',
  description: 'A simple to-do list manager',
  run: async (task: Task, args: string[]) => {
    task.submitUserMessage(`Added "${args.join(' ')}" to the to-do list.`);
  },
};
```

When you run `/todo-manager complete Project A`, this mode will submit the message "Added "complete Project A" to the to-do list." to the chat.