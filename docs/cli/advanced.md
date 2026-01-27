---
sidebar_label: Advanced Usage
description: Advanced patterns and use cases for Roo Code CLI
keywords:
  - CLI advanced usage
  - automation patterns
  - CI/CD integration
  - scripting
---

# Advanced Usage

This guide covers advanced patterns, use cases, and integration strategies for the Roo Code CLI.

## CI/CD Integration

### GitHub Actions

Integrate Roo Code into your GitHub workflows:

```yaml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install Roo CLI
        run: |
          curl -fsSL https://raw.githubusercontent.com/RooCodeInc/Roo-Code/main/apps/cli/install.sh | sh
          echo "$HOME/.local/bin" >> $GITHUB_PATH
      
      - name: Run AI Review
        env:
          OPENROUTER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
        run: |
          roo ${{ github.workspace }} \
            -y \
            --exit-on-complete \
            --no-tui \
            "Review this pull request for code quality, security issues, and best practices. Focus on the changed files."
```

### GitLab CI

```yaml
ai-review:
  stage: review
  image: node:20
  
  before_script:
    - curl -fsSL https://raw.githubusercontent.com/RooCodeInc/Roo-Code/main/apps/cli/install.sh | sh
    - export PATH="$HOME/.local/bin:$PATH"
  
  script:
    - |
      roo $CI_PROJECT_DIR \
        -y \
        --exit-on-complete \
        --no-tui \
        "Review code changes for quality and security"
  
  only:
    - merge_requests
```

### Jenkins Pipeline

```groovy
pipeline {
  agent any
  
  environment {
    OPENROUTER_API_KEY = credentials('openrouter-api-key')
  }
  
  stages {
    stage('Setup') {
      steps {
        sh 'curl -fsSL https://raw.githubusercontent.com/RooCodeInc/Roo-Code/main/apps/cli/install.sh | sh'
      }
    }
    
    stage('AI Review') {
      steps {
        sh '''
          export PATH="$HOME/.local/bin:$PATH"
          roo $WORKSPACE \
            -y \
            --exit-on-complete \
            --no-tui \
            "Analyze code quality and suggest improvements"
        '''
      }
    }
  }
}
```

## Batch Processing

### Multiple Projects

Process multiple projects with a script:

```bash
#!/bin/bash

PROJECTS=(
  ~/projects/api
  ~/projects/frontend
  ~/projects/mobile
)

TASK="Update README with current project structure"

for project in "${PROJECTS[@]}"; do
  echo "Processing: $project"
  
  if roo "$project" -y -x --no-tui "$TASK" 2>&1 | tee "$project.log"; then
    echo "✓ Success: $project"
  else
    echo "✗ Failed: $project"
  fi
  
  echo "---"
done
```

### Multiple Tasks

Execute multiple tasks on the same project:

```bash
#!/bin/bash

PROJECT=~/my-project

TASKS=(
  "Update all dependencies to latest versions"
  "Add JSDoc comments to public functions"
  "Generate API documentation"
  "Run linter and fix auto-fixable issues"
)

for task in "${TASKS[@]}"; do
  echo "Task: $task"
  
  roo "$PROJECT" -y -x --no-tui "$task" 2>&1 | tee -a tasks.log
  
  # Wait between tasks
  sleep 2
done
```

## Custom Workflows

### Multi-Stage Development

Architect → Code → Review workflow:

```bash
#!/bin/bash
# dev-workflow.sh

PROJECT=$1
FEATURE=$2

if [ -z "$PROJECT" ] || [ -z "$FEATURE" ]; then
  echo "Usage: $0 <project-path> <feature-description>"
  exit 1
fi

echo "=== Stage 1: Architecture Planning ==="
roo "$PROJECT" -M architect "Design and plan: $FEATURE"

echo ""
read -p "Proceed with implementation? (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo ""
  echo "=== Stage 2: Implementation ==="
  roo "$PROJECT" -M code "Implement the planned feature: $FEATURE"
  
  echo ""
  echo "=== Stage 3: Review ==="
  roo "$PROJECT" -M ask "Review the implementation and explain what was built"
fi
```

Usage:
```bash
./dev-workflow.sh ~/my-project "user authentication with JWT"
```

### Pre-commit Hook

Add AI review to git pre-commit:

```bash
#!/bin/bash
# .git/hooks/pre-commit

# Only run on changed files
CHANGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|js|tsx|jsx)$')

if [ -z "$CHANGED_FILES" ]; then
  exit 0
fi

echo "Running AI review on changed files..."

# Create a temporary file with file list
echo "$CHANGED_FILES" > /tmp/changed-files.txt

# Run CLI review
if roo . -y --ephemeral --no-tui "Review these changed files for issues: $(cat /tmp/changed-files.txt)" | grep -i "error\|issue\|problem"; then
  echo ""
  echo "⚠️  AI detected potential issues. Review the output above."
  echo "Commit anyway? (y/n)"
  read -r response
  if [[ ! $response =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

rm /tmp/changed-files.txt
exit 0
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

## Automation Patterns

### Scheduled Tasks

Use cron for scheduled CLI tasks:

```bash
# Edit crontab
crontab -e

# Add daily documentation update at 2 AM
0 2 * * * cd ~/my-project && $HOME/.local/bin/roo . -y -x --no-tui "Update documentation to reflect latest code changes" >> ~/roo-cron.log 2>&1

# Add weekly dependency check on Mondays at 9 AM
0 9 * * 1 cd ~/my-project && $HOME/.local/bin/roo . -y -x --no-tui "Check for outdated dependencies and suggest updates" >> ~/roo-deps.log 2>&1
```

### Watch and React

Monitor files and trigger CLI on changes:

```bash
#!/bin/bash
# watch-and-review.sh

PROJECT=$1

if [ -z "$PROJECT" ]; then
  echo "Usage: $0 <project-path>"
  exit 1
fi

echo "Watching $PROJECT for changes..."

# Requires fswatch: brew install fswatch (macOS) or apt-get install fswatch (Linux)
fswatch -o "$PROJECT/src" | while read; do
  echo "Changes detected, running review..."
  
  roo "$PROJECT" \
    -y \
    --ephemeral \
    --no-tui \
    "Review recent changes for code quality issues" \
    >> "$PROJECT/watch.log" 2>&1
  
  echo "Review complete at $(date)"
done
```

### Conditional Execution

Execute based on conditions:

```bash
#!/bin/bash
# conditional-review.sh

PROJECT=$1

# Check if tests are passing
if npm test --prefix "$PROJECT"; then
  echo "Tests passing, running optimization review..."
  
  roo "$PROJECT" -y -x --no-tui "Analyze code for optimization opportunities"
else
  echo "Tests failing, running debug analysis..."
  
  roo "$PROJECT" -M debug "Analyze test failures and suggest fixes"
fi
```

## Integration Examples

### Slack Notifications

Send CLI results to Slack:

```bash
#!/bin/bash
# roo-with-slack.sh

PROJECT=$1
TASK=$2
SLACK_WEBHOOK=$3

# Run CLI and capture output
OUTPUT=$(roo "$PROJECT" -y -x --no-tui "$TASK" 2>&1)
EXIT_CODE=$?

# Format for Slack
if [ $EXIT_CODE -eq 0 ]; then
  STATUS="✅ Success"
  COLOR="good"
else
  STATUS="❌ Failed"
  COLOR="danger"
fi

# Send to Slack
curl -X POST "$SLACK_WEBHOOK" \
  -H 'Content-Type: application/json' \
  -d "{
    \"attachments\": [{
      \"color\": \"$COLOR\",
      \"title\": \"Roo CLI Task: $TASK\",
      \"text\": \"$STATUS\",
      \"fields\": [{
        \"title\": \"Project\",
        \"value\": \"$PROJECT\",
        \"short\": true
      }]
    }]
  }"
```

### Email Reports

Email CLI output:

```bash
#!/bin/bash
# roo-with-email.sh

PROJECT=$1
TASK=$2
EMAIL=$3

# Run CLI
OUTPUT=$(roo "$PROJECT" -y -x --no-tui "$TASK" 2>&1)

# Send email (requires mailx or similar)
echo "$OUTPUT" | mail -s "Roo CLI Report: $TASK" "$EMAIL"
```

### Database Logging

Log CLI execution to database:

```bash
#!/bin/bash
# roo-with-db.sh

PROJECT=$1
TASK=$2

START_TIME=$(date +%s)

# Run CLI
OUTPUT=$(roo "$PROJECT" -y -x --no-tui "$TASK" 2>&1)
EXIT_CODE=$?

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

# Log to database (example using PostgreSQL)
psql -U user -d mydb -c "
  INSERT INTO cli_logs (project, task, exit_code, duration, output, created_at)
  VALUES ('$PROJECT', '$TASK', $EXIT_CODE, $DURATION, '$OUTPUT', NOW())
"
```

## Performance Optimization

### Parallel Execution

Run multiple CLI instances in parallel:

```bash
#!/bin/bash
# parallel-tasks.sh

PROJECT=$1

# Define tasks
declare -a TASKS=(
  "Update documentation"
  "Run linter"
  "Check for security issues"
  "Analyze code complexity"
)

# Run in parallel
for task in "${TASKS[@]}"; do
  (
    echo "Starting: $task"
    roo "$PROJECT" -y -x --no-tui "$task" > "${task// /_}.log" 2>&1
    echo "Completed: $task"
  ) &
done

# Wait for all to complete
wait

echo "All tasks completed"
```

### Caching Strategies

Cache AI responses for repeated prompts:

```bash
#!/bin/bash
# roo-with-cache.sh

PROJECT=$1
TASK=$2
CACHE_DIR=~/.cache/roo

mkdir -p "$CACHE_DIR"

# Generate cache key
CACHE_KEY=$(echo "$PROJECT:$TASK" | md5sum | cut -d' ' -f1)
CACHE_FILE="$CACHE_DIR/$CACHE_KEY"

# Check cache
if [ -f "$CACHE_FILE" ]; then
  AGE=$(($(date +%s) - $(stat -f %m "$CACHE_FILE" 2>/dev/null || stat -c %Y "$CACHE_FILE")))
  
  # Use cache if less than 1 hour old
  if [ $AGE -lt 3600 ]; then
    echo "Using cached result..."
    cat "$CACHE_FILE"
    exit 0
  fi
fi

# Run CLI and cache result
roo "$PROJECT" -y -x --no-tui "$TASK" | tee "$CACHE_FILE"
```

## Error Handling

### Retry Logic

Retry failed CLI executions:

```bash
#!/bin/bash
# roo-with-retry.sh

PROJECT=$1
TASK=$2
MAX_RETRIES=3
RETRY_DELAY=5

for i in $(seq 1 $MAX_RETRIES); do
  echo "Attempt $i of $MAX_RETRIES"
  
  if roo "$PROJECT" -y -x --no-tui "$TASK"; then
    echo "Success on attempt $i"
    exit 0
  else
    echo "Failed attempt $i"
    
    if [ $i -lt $MAX_RETRIES ]; then
      echo "Retrying in ${RETRY_DELAY}s..."
      sleep $RETRY_DELAY
    fi
  fi
done

echo "Failed after $MAX_RETRIES attempts"
exit 1
```

### Graceful Degradation

Fallback to simpler models on failure:

```bash
#!/bin/bash
# roo-with-fallback.sh

PROJECT=$1
TASK=$2

# Try primary model
if roo "$PROJECT" -p anthropic -m claude-sonnet-4.5 -y -x --no-tui "$TASK"; then
  exit 0
fi

echo "Primary model failed, trying fallback..."

# Fallback to different model
if roo "$PROJECT" -p openrouter -m anthropic/claude-sonnet-4.5 -y -x --no-tui "$TASK"; then
  exit 0
fi

echo "All models failed"
exit 1
```

### Validation and Testing

Test CLI tasks before production use:

```bash
#!/bin/bash
# test-cli-task.sh

PROJECT=$1
TASK=$2

# Create a test copy
TEST_DIR=$(mktemp -d)
cp -r "$PROJECT" "$TEST_DIR/project"

echo "Testing in: $TEST_DIR/project"

# Run CLI on test copy
if roo "$TEST_DIR/project" -y -x --no-tui "$TASK"; then
  echo "✓ Task succeeded on test copy"
  
  echo "Apply to real project? (y/n)"
  read -r response
  
  if [[ $response =~ ^[Yy]$ ]]; then
    roo "$PROJECT" -y -x "$TASK"
  fi
else
  echo "✗ Task failed on test copy"
fi

# Cleanup
rm -rf "$TEST_DIR"
```

## Security Best Practices

### Secrets Management

Use environment files for secrets:

```bash
#!/bin/bash
# Load secrets from .env file
if [ -f ~/.roo.env ]; then
  export $(cat ~/.roo.env | xargs)
fi

# Run CLI without exposing keys in command
roo "$PROJECT" -y -x --no-tui "$TASK"
```

Example `~/.roo.env`:
```bash
OPENROUTER_API_KEY=sk-or-v1-...
ANTHROPIC_API_KEY=sk-ant-...
```

Protect the file:
```bash
chmod 600 ~/.roo.env
```

### Audit Logging

Log all CLI executions:

```bash
#!/bin/bash
# roo-audit.sh

PROJECT=$1
TASK=$2
LOG_FILE=~/.roo-audit.log

# Log execution
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) | User: $(whoami) | Project: $PROJECT | Task: $TASK" >> "$LOG_FILE"

# Run CLI
roo "$PROJECT" "$@"

# Log completion
echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) | Completed | Exit code: $?" >> "$LOG_FILE"
```

### Sandboxed Execution

Run CLI in isolated environment:

```bash
#!/bin/bash
# roo-sandbox.sh

PROJECT=$1
TASK=$2

# Create isolated environment
SANDBOX=$(mktemp -d)

# Copy project to sandbox
cp -r "$PROJECT" "$SANDBOX/project"

# Run in sandbox
roo "$SANDBOX/project" -y -x --no-tui "$TASK"

# Review changes before applying
echo "Review sandbox changes in: $SANDBOX/project"
echo "Apply changes? (y/n)"
read -r response

if [[ $response =~ ^[Yy]$ ]]; then
  rsync -av --delete "$SANDBOX/project/" "$PROJECT/"
fi

# Cleanup
rm -rf "$SANDBOX"
```

## Monitoring and Observability

### Metrics Collection

Track CLI performance metrics:

```bash
#!/bin/bash
# roo-metrics.sh

PROJECT=$1
TASK=$2

START=$(date +%s)
START_MEM=$(ps -o rss= -p $$ 2>/dev/null || echo 0)

# Run CLI
OUTPUT=$(roo "$PROJECT" -y -x --no-tui "$TASK" 2>&1)
EXIT_CODE=$?

END=$(date +%s)
DURATION=$((END - START))
END_MEM=$(ps -o rss= -p $$ 2>/dev/null || echo 0)
MEM_USED=$((END_MEM - START_MEM))

# Log metrics (could send to monitoring system)
echo "{
  \"timestamp\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",
  \"project\": \"$PROJECT\",
  \"task\": \"$TASK\",
  \"duration_seconds\": $DURATION,
  \"memory_kb\": $MEM_USED,
  \"exit_code\": $EXIT_CODE
}" >> ~/.roo-metrics.jsonl
```

## Troubleshooting Advanced Setups

### Debug Mode in Scripts

Enable comprehensive debugging:

```bash
#!/bin/bash
set -euo pipefail  # Exit on error, undefined vars, pipe failures
set -x             # Print commands before executing

export ROO_DEBUG=1

roo "$PROJECT" --debug -y -x --no-tui "$TASK" 2>&1 | tee debug.log
```

### Logging Everything

Capture complete execution logs:

```bash
#!/bin/bash
# roo-full-log.sh

LOG_DIR=~/.roo-logs
mkdir -p "$LOG_DIR"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="$LOG_DIR/roo_${TIMESTAMP}.log"

{
  echo "=== Execution Start: $(date) ==="
  echo "Project: $1"
  echo "Task: $2"
  echo "Environment:"
  env | grep -E 'ROO|ANTHROPIC|OPENAI|OPENROUTER' || true
  echo "==="
  
  roo "$1" -y -x --debug --no-tui "$2"
  
  echo "=== Execution End: $(date) ==="
  echo "Exit Code: $?"
} 2>&1 | tee "$LOG_FILE"
```

## Next Steps

- Review the [CLI Reference](/cli/reference) for complete command documentation
- Check the [Configuration Guide](/cli/configuration) for customization options
- Join the [Discord community](https://discord.gg/roocode) to share your advanced use cases
