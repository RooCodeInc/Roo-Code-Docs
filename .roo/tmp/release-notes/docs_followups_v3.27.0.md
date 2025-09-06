# v3.27.0 Documentation Follow-ups

Tracking doc updates stemming from the 3.27.0 release. When done, open a PR referencing these items and the related PRs: #7447, #7713, #7701, #6904.

## 1) Edit/Delete Message feature + Auto Checkpoints

Target files:
- [docs/features/checkpoints.mdx](docs/features/checkpoints.mdx)
- [docs/basic-usage/the-chat-interface.md](docs/basic-usage/the-chat-interface.md)

Required updates:
- [ ] Describe automatic checkpoint creation on every user message
  - Runs in background and suppresses extra chat messages
  - Allows immediate rollback even when no file diffs exist
- [ ] Add a short “rollback after edit/delete” example flow
  - Edit or delete a message
  - Open Checkpoint Restore dialog
  - Preview and confirm rollback
- [ ] Cross-link from The Chat Interface to Checkpoints (and vice versa)

Notes:
- Feature PRs: #7447 (Edit/Delete), #7713 (Auto checkpoint creation)

## 2) Chutes provider model update: Kimi K2-0905

Target file:
- [docs/providers/chutes.md](docs/providers/chutes.md)

Required updates:
- [ ] Add Kimi K2-0905 model to the supported models list
  - Context window: 256k
  - Max tokens: 32,768
  - Images: unsupported
  - Prompt cache: unsupported
  - Pricing: include current pricing table row if maintained here
- [ ] Brief note on how to select this model in configuration

Notes:
- Provider PR: #7701 (linked issue #7700)

## 3) Multi-root workspaces: MCP and Slash Command paths

Target files:
- [docs/features/slash-commands.mdx](docs/features/slash-commands.mdx)
- [docs/features/mcp/overview.md](docs/features/mcp/overview.md)

Required updates:
- [ ] Clarify that Roo resolves configuration paths using the active folder’s CWD in multi-folder workspaces
- [ ] Mention expected .roo directory location resolution per active folder

Notes:
- Fix PR: #6904

## Nice-to-haves (optional now)

- [ ] Add a short tip in Checkpoints about background saves and reduced chat noise
- [ ] Consider a snippet in The Chat Interface showing message-level actions (edit/delete) UI
