---
sidebar_label: Usage Modes
description: Understanding interactive and non-interactive modes in Roo Code CLI
keywords:
  - CLI usage
  - interactive mode
  - non-interactive mode
  - automation
---

# Usage Modes

The Roo Code CLI supports two primary usage modes: interactive and non-interactive. Understanding when and how to use each mode is key to getting the most out of the CLI.

## Interactive Mode (Default)

Interactive mode provides a rich terminal user interface (TUI) with real-time updates and manual approval for all actions.

### Starting Interactive Mode

Run the CLI without the `-y` flag:

```bash
roo "Analyze the architecture" -w ~/my-project
```

Or enter the TUI first and provide the prompt:

```bash
roo ~/my-project
# Then type your prompt in the TUI
```

### Interactive Mode Features

**Terminal User Interface**
- Real-time streaming of AI responses
- Visual tool execution feedback
- Progress indicators
- Syntax-highlighted code blocks
- Rich text formatting

**Action Approvals**
The CLI prompts for approval before:
- Reading files
- Writing or modifying files
- Executing commands
- Opening browsers
- Using MCP tools

**User Controls**
- Type `y` or `yes` to approve
- Type `n` or `no` to reject
- Type `a` or `always` to approve all future actions of this type
- Press `Ctrl+C` to cancel the current operation
- Press `Ctrl+D` to exit

**Follow-up Questions**
When the AI needs clarification, it presents:
- Multiple suggested responses
- Ability to type custom responses
- Context from the conversation

### Interactive Mode Example

```bash
$ roo "Refactor the authentication logic" -w ~/my-project

┌─ Roo Code CLI ────────────────────────────────────┐
│ Mode: code | Model: claude-sonnet-4.5              │
│                                                    │
│ 🤔 Analyzing authentication logic...              │
│                                                    │
│ 📖 Reading file: src/auth.ts                      │
│    Allow? (y/n/always): y                         │
│                                                    │
│ ✓ Read src/auth.ts (245 lines)                    │
│                                                    │
│ 💭 I'll refactor this to use JWT tokens instead   │
│    of sessions. This will make it stateless and   │
│    more scalable.                                 │
│                                                    │
│ ✏️  Writing file: src/auth.ts                      │
│    Allow? (y/n/always): y                         │
│                                                    │
│ ✓ Wrote src/auth.ts (287 lines)                   │
│                                                    │
│ ✅ Refactoring complete!                           │
└────────────────────────────────────────────────────┘
```

### When to Use Interactive Mode

Use interactive mode when:
- **Learning**: Exploring what the CLI can do
- **Development**: Working on code where you want to review each change
- **Safety**: Working with critical code that requires careful review
- **Collaboration**: Pairing with others who want to see the process
- **Complex Tasks**: Multi-step tasks where you might need to provide guidance

## Non-Interactive Mode

Non-interactive mode auto-approves all actions and is designed for automation and scripts.

### Starting Non-Interactive Mode

Use the `-y` or `--yes` flag:

```bash
roo ~/my-project -y "Format all TypeScript files"
```

### Non-Interactive Mode Features

**Auto-Approval**
All actions are automatically approved:
- File reads proceed without prompts
- File writes execute immediately
- Commands run without confirmation
- Browser and MCP actions execute automatically

**Follow-up Questions**
When the AI asks a question:
- A 60-second countdown timer is displayed
- If you type anything, the timer cancels and you can provide input
- If the timer expires, the first suggested response is auto-selected

**Exit Behavior**
By default, non-interactive mode stays open after completing the task. Use `--exit-on-complete` to exit automatically:

```bash
roo "Task" -y --exit-on-complete  -w ~/my-project
```

### Non-Interactive Mode Example

```bash
$ roo ~/my-project -y "Add error logging to all API routes"

Starting task: Add error logging to all API routes
Mode: code | Model: claude-sonnet-4.5

Reading src/routes/api.ts... ✓
Reading src/routes/auth.ts... ✓
Reading src/routes/users.ts... ✓

Analyzing routes... ✓

Writing src/utils/logger.ts... ✓
Updating src/routes/api.ts... ✓
Updating src/routes/auth.ts... ✓
Updating src/routes/users.ts... ✓

Task completed successfully!
Added error logging to 3 API routes.
```

### When to Use Non-Interactive Mode

Use non-interactive mode when:
- **CI/CD Pipelines**: Automated code reviews, testing, or deployment tasks
- **Batch Processing**: Processing multiple projects or files
- **Scheduled Tasks**: Cron jobs or scheduled maintenance
- **Scripts**: Shell scripts that chain multiple CLI operations
- **Well-Defined Tasks**: Tasks with clear requirements that don't need oversight

:::warning
Non-interactive mode will execute all proposed actions without confirmation. Only use it with trusted prompts in controlled environments.
:::

## Comparison

| Feature | Interactive Mode | Non-Interactive Mode |
| --- | --- | --- |
| Action Approval | Manual (y/n prompts) | Automatic (all approved) |
| User Interface | Rich TUI | Plain text output |
| Follow-up Questions | Full input capability | 60s timeout → auto-select |
| Exit After Task | Stays open | Optional (`--exit-on-complete`) |
| Use Case | Development, learning | Automation, CI/CD |
| Safety | High (review each action) | Low (executes everything) |

## Switching Between Modes

You cannot switch modes during execution, but you can:

**Start in interactive, test a command:**
```bash
roo "Test task" -w ~/project
```

**Then run the same task non-interactively:**
```bash
roo ~/project -y "Test task"
```

## Advanced Usage Patterns

### Semi-Automated Workflows

Combine interactive and non-interactive for different steps:

```bash
# Step 1: Plan interactively in architect mode
roo "Design a new feature" -M architect  -w ~/project

# Step 2: Implement non-interactively in code mode
roo ~/project -M code -y "Implement the design from the previous task"

# Step 3: Review interactively
roo "Review the implementation" -M ask  -w ~/project
```

### Conditional Automation

Use shell logic to decide when to use `-y`:

```bash
#!/bin/bash

# Check if in CI environment
if [ "$CI" = "true" ]; then
  MODE_FLAGS="-y --exit-on-complete --no-tui"
else
  MODE_FLAGS=""
fi

roo ~/project $MODE_FLAGS "Run code quality checks"
```

### Timeout Handling in Non-Interactive

Handle follow-up questions in scripts:

```bash
# Non-interactive with immediate auto-selection
# (Don't wait for 60s timeout)
echo "" | roo ~/project -y "Task that might ask questions"
```

### Logging in Non-Interactive Mode

Capture output for logs:

```bash
roo "Generate docs" -y --no-tui  -w ~/project 2>&1 | tee build.log
```

## TUI Controls

### Interactive TUI Features

When running in interactive mode, the TUI provides:

**Input Area**
- Multi-line input support (Shift+Enter for new line)
- Autocomplete with Tab key
- Command history with Up/Down arrows
- File path completion

**Display Area**
- Streaming AI responses
- Tool execution visualization
- Progress indicators
- Error messages with context
- Syntax highlighting for code

**Status Bar**
- Current mode (code, architect, ask, debug)
- Model being used
- Token usage and costs
- Connection status

### Disabling TUI

For plain text output (useful for piping or logging):

```bash
roo ~/project --no-tui "Task"
```

This provides:
- Plain text output without formatting
- No interactive elements
- Suitable for redirection or parsing
- Still requires manual approval unless `-y` is used

## Best Practices

### For Interactive Use

1. **Start Small**: Begin with read-only tasks to understand behavior
2. **Review Carefully**: Read proposed changes before approving
3. **Use Always Sparingly**: Only use "always approve" for safe operations
4. **Ask Questions**: Use follow-up to clarify AI actions
5. **Save Work First**: Commit or backup before allowing writes

### For Non-Interactive Use

1. **Test First**: Run interactively before automating
2. **Specific Prompts**: Be explicit about what you want
3. **Error Handling**: Wrap in scripts with error checking
4. **Dry Runs**: Consider architect mode first to plan
5. **Monitor Output**: Log and review execution results
6. **Limit Scope**: Use specific, bounded tasks

### Hybrid Approach

```bash
#!/bin/bash
# review.sh - Interactive planning, automated execution

echo "=== Step 1: Plan (Interactive) ==="
roo "Plan how to add rate limiting" -M architect  -w ~/project

echo ""
echo "Proceed with implementation? (y/n)"
read -r response

if [ "$response" = "y" ]; then
  echo "=== Step 2: Implement (Automated) ==="
  roo ~/project -M code -y "Implement rate limiting as planned"
  
  echo ""
  echo "=== Step 3: Review (Interactive) ==="
  roo "Explain what was implemented" -M ask  -w ~/project
fi
```

## Troubleshooting

### Interactive Mode Issues

**TUI Not Rendering Properly**
```bash
# Try without TUI
roo ~/project --no-tui "Task"

# Check terminal compatibility
echo $TERM
```

**Approval Prompts Not Working**
- Ensure stdin is not redirected
- Check terminal supports interactive input
- Verify no other processes are blocking input

### Non-Interactive Mode Issues

**Tasks Not Completing**
```bash
# Add debug output
roo "Task" -y --debug  -w ~/project

# Use exit-on-complete
roo "Task" -y --exit-on-complete  -w ~/project
```

**Unexpected Approvals**
- Review your prompt for unintended actions
- Test in interactive mode first
- Check what files/commands are being executed with `--debug`

## Next Steps

- [Review the complete CLI reference](/cli/reference) for all available options
- [Explore advanced use cases](/cli/advanced) for complex workflows
- [Learn about configuration](/cli/configuration) to set defaults for each mode
