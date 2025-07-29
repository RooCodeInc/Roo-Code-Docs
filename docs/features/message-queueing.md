---
description: Learn how message queueing in Roo Code allows you to send multiple messages while the AI is working, with messages being processed sequentially for uninterrupted workflow.
keywords:
  - message queueing
  - queued messages
  - sequential processing
  - workflow efficiency
  - chat interface
  - Roo Code features
image: /img/social-share.jpg
---


# Message Queueing

Keep your workflow uninterrupted with message queueing—send multiple messages while Roo is working, and they'll be processed sequentially without losing your train of thought.

:::tip Efficiency Boost
No more waiting! Type your follow-up thoughts, corrections, or additional requests while Roo is still processing, and they'll be handled in order.
:::

---

## Overview

Message queueing lets you type and send messages while Roo is still working. Just type your message and hit Enter - it gets queued and will be processed as soon as Roo is ready for your next input, right before it would typically ask for an approval. This feature is particularly useful for quick corrections or additions to your request.

---

## How It Works

While Roo is working:

1. **Type your message** as normal
2. **Press Enter** or click Send
3. **Message gets queued** and appears with "Queued Messages:" label
4. **Roo processes the queued message** as soon as it's ready for your next input, right before it would typically ask for an approval

<img src="/img/message-queueing/message-queueing.png" alt="Message queueing interface showing active processing and three queued messages" width="800" />

**What you'll see:**
- Queued messages appear with "Queued Messages:" label
- Bordered cards for each queued message
- Click messages to edit them
- Trash icon to delete messages

The input field stays active so you can type anytime - just hit Enter to queue your message.

:::warning Interacting with Queued Messages
Editing or deleting a queued message requires clicking on it before it's processed. If you have auto-approval enabled, the time to do this may be very short or non-existent, as the queued message and the next action can be processed almost instantly. For workflows where you anticipate needing to edit queued messages, consider temporarily disabling auto-approval.
:::


---

## FAQ

**Q: How many messages can I queue?**
A: There is no hard limit on the number of messages you can queue. The queue size is only limited by available browser memory.

**Q: Can I reorder queued messages?**
A: No, messages are always processed in the order they were sent (FIFO).

**Q: What happens if Roo encounters an error?**
A: Queued messages remain in the queue. You can choose to cancel them or let processing continue.

**Q: Do queued messages use the same context?**
A: Yes, each message builds on the conversation context, including previous messages and responses.

**Q: Can I edit a queued message?**
A: Yes! Click on any queued message to edit it. Press Enter to save your changes or Escape to cancel editing. Multiple messages can be edited simultaneously.

---

## See Also

- [The Chat Interface](/basic-usage/the-chat-interface) - Learn about all chat features
- [Task Management](/features/task-todo-list) - Organize complex workflows
- [Auto-Approving Actions](/features/auto-approving-actions) - Streamline repetitive approvals
- [Keyboard Shortcuts](/features/keyboard-shortcuts) - Speed up your workflow