---
sidebar_label: CLI Overview
description: Introduction to Roo Code CLI - Run the Roo Code agent from your terminal without VSCode
keywords:
  - Roo Code CLI
  - command line interface
  - terminal AI assistant
  - headless automation
---

# Roo Code CLI Overview

The Roo Code CLI allows you to run the Roo Code agent directly from your terminal without needing VSCode. It provides a powerful command-line interface for AI-powered coding assistance, perfect for automation, CI/CD pipelines, and terminal-based workflows.

## What is the Roo Code CLI?

The Roo Code CLI is a standalone command-line tool that brings all the power of the Roo Code VSCode extension to your terminal. It uses a VSCode API compatibility layer (`@roo-code/vscode-shim`) to run the full Roo Code extension in a Node.js environment.

## Key Features

- **Interactive TUI Mode**: Rich terminal user interface with real-time updates and interactive prompts
- **Non-Interactive Mode**: Fully automated execution for scripts and CI/CD pipelines
- **All Roo Code Features**: Access to modes, tools, MCP integration, and more
- **Roo Code Cloud Integration**: Authenticate and use Roo Code Cloud features
- **Flexible Configuration**: Configure via CLI flags, environment variables, or settings file
- **Cross-Platform**: Works on macOS and Linux (Intel, ARM64, and Apple Silicon)

## Use Cases

### Development Workflows
Run Roo Code tasks from your terminal for quick code analysis, refactoring, or documentation generation without opening VSCode.

### CI/CD Automation
Integrate Roo Code into your continuous integration pipelines to automate code reviews, generate tests, or validate code quality.

### Server Administration
Use Roo Code on remote servers where VSCode isn't available or practical.

### Scripting and Automation
Write scripts that leverage Roo Code's AI capabilities for batch processing or automated tasks.

## How It Works

The CLI wraps the Roo Code extension with a VSCode API shim:

1. **CLI Entry Point** parses command line arguments and initializes the extension host
2. **Extension Host** creates a VSCode API mock and loads the extension bundle
3. **Message Flow** enables bidirectional communication between CLI and extension
4. **Terminal UI** renders the interactive interface or plain text output

## Requirements

- Node.js 20 or higher
- macOS (Intel or Apple Silicon) or Linux (x64 or ARM64)
- An API key for your chosen AI provider (or Roo Code Cloud authentication)

## Getting Started

Ready to start using the Roo Code CLI? Check out the [Installation](/cli/installation) guide to get set up, then follow the [Getting Started](/cli/getting-started) guide to run your first command.

## Getting Support

If you encounter issues with the CLI:

* Join our [Discord community](https://discord.gg/roocode) for real-time support
* Submit issues on [GitHub](https://github.com/RooCodeInc/Roo-Code/issues)
* Visit our [Reddit community](https://www.reddit.com/r/RooCode)
