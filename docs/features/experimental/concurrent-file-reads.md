# Concurrent File Reads

:::warning Experimental Feature
Concurrent file reads is an experimental feature that allows Roo to read multiple files simultaneously in a single request. This feature is under active development and may change significantly in future releases.
:::

This feature dramatically improves your workflow by allowing Roo to gather context from multiple files in a single conversation turn, rather than asking to read files one by one. Instead of waiting through multiple back-and-forth exchanges, Roo can understand your entire project structure much faster.

## Why This Matters

**Faster Context Building**: Previously, when Roo needed to understand your project, you'd see multiple requests like:
- "Can I read `src/app.js`?" → You approve
- "Now can I read `src/utils.js`?" → You approve
- "And can I read `src/config.json`?" → You approve

**With concurrent file reads**: Roo asks once to read all related files together, getting the full picture immediately and providing better assistance faster.

## Key Benefits

- **Fewer interruptions** - One approval dialog instead of many
- **Faster assistance** - Roo understands your project context immediately
- **Better analysis** - Roo can see relationships between files from the start
- **Smoother workflow** - Less waiting, more productive conversations

## Enabling Concurrent File Reads

To enable this experimental feature:

1. Open Roo Code settings (<Codicon name="gear" /> icon in the top right corner)
2. Navigate to **Advanced Settings** → **Experimental Features**
3. Check **"Enable concurrent file reads"**

<img src="/img/experimental/concurrent-file-reads-setting.png" alt="Concurrent file reads setting toggle" width="600" />

Once enabled, you can configure the maximum number of concurrent files (2-100) using the slider that appears below the toggle.

## Configuration Options

### Maximum Concurrent Files

- **Default**: 15 files when enabled, 1 file when disabled
- **Range**: 2-100 files (when experimental feature is enabled)
- **Location**: Settings → Advanced Settings → Context Management → "Concurrent file reads limit"

The setting automatically adjusts when you toggle the experimental feature:
- Enabling sets the limit to 15 files
- Disabling resets the limit to 1 file (standard behavior)

## User Experience

### Batch Approval Interface

When Roo requests to read multiple files, you'll see a new batch approval interface that displays:

- List of all files to be read
- File paths with line range indicators (if specified)
- Clickable file headers to open files in your editor
- **Approve All** and **Deny All** buttons for quick decisions
- Individual file permission controls

### Enhanced Tool Behavior

The [`read_file`](/advanced-usage/available-tools/read-file) tool automatically adapts based on your settings:

- **Single-file mode** (disabled): Uses traditional one-file-at-a-time approach
- **Multi-file mode** (enabled): Accepts multiple files in a single request using XML format

## How It Works Behind the Scenes

When you enable concurrent file reads, Roo can request multiple files at once instead of one at a time. You don't need to understand the technical details - it just works more efficiently.

### What You Control

- **Enable/disable the feature** - Simple checkbox in settings
- **Set file limits** - Choose how many files Roo can request at once (2-100, default 15)
- **Individual file approval** - Still approve or deny specific files if needed

### What Happens Automatically

- Roo groups related files together in single requests
- Files are processed in parallel for faster results
- If some files are blocked or denied, Roo still gets the approved ones
- Everything falls back gracefully if there are any issues

## What You'll Experience

### Before Concurrent File Reads
When working on a feature that spans multiple files, you might see:
1. Roo: "I need to understand your authentication system. Can I read `auth.js`?"
2. You: *Approve*
3. Roo: "Now I need to see the user model. Can I read `user.js`?"
4. You: *Approve*
5. Roo: "And the database config. Can I read `database.js`?"
6. You: *Approve*
7. Finally, Roo can help with your request

### With Concurrent File Reads
1. Roo: "I need to understand your authentication system. Can I read these files: `auth.js`, `user.js`, `database.js`?"
2. You: *Approve all at once*
3. Roo immediately provides comprehensive help

### Real-World Impact

- **Faster debugging** - Roo can see the full picture of related files instantly
- **Better code reviews** - Understanding entire features at once, not piece by piece
- **Smoother refactoring** - Analyzing dependencies across multiple files simultaneously
- **Less clicking** - One approval instead of many interruptions

## Backward Compatibility

The feature maintains full backward compatibility:

- Existing single-file requests continue to work unchanged
- Legacy `path` parameter format is still supported
- No breaking changes for current workflows
- Smooth transition between single and multi-file modes

## Common Questions

**"I enabled the feature but don't see any difference"**
- Restart VS Code after enabling the experimental feature
- The feature only activates when Roo needs to read multiple files

**"Roo is asking for too many files at once"**
- Lower the concurrent file limit in settings (try 5-10 instead of 15)
- You can still approve or deny individual files in the batch dialog

**"Some files were denied but others approved"**
- This is normal - Roo gets the files you approve and works with those
- Files might be blocked by your `.rooignore` settings

## Need Help?

If you run into issues:
1. Check the [FAQ section](/faq) for common solutions
2. Report problems on [GitHub Issues](https://github.com/RooCodeInc/Roo-Code/issues)
3. Include what you were trying to do and any error messages

## What's Next

This experimental feature is actively being improved based on user feedback. We're working on making the approval interface even smoother and helping Roo make smarter decisions about which files to request together.

Your experience matters - let us know how this feature works for your workflow!

For more about experimental features, see [Experimental Features Overview](/features/experimental/experimental-features).