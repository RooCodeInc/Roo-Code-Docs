---
sidebar_label: Installation
description: Install Roo Code CLI on macOS and Linux with our one-command installer
keywords:
  - Roo Code CLI installation
  - install CLI
  - terminal setup
  - command line tools
---

# Installing Roo Code CLI

The Roo Code CLI can be installed with a single command on macOS and Linux systems.

## Requirements

Before installing, ensure you have:

- **Node.js 20 or higher** - Check with `node --version`
- **Operating System**: macOS (Intel or Apple Silicon) or Linux (x64 or ARM64)
- **Terminal Access**: Command line access with curl installed

## Quick Install (Recommended)

Install the Roo Code CLI with a single command:

```bash
curl -fsSL https://raw.githubusercontent.com/RooCodeInc/Roo-Code/main/apps/cli/install.sh | sh
```

This script will:
1. Detect your operating system and architecture
2. Download the appropriate CLI bundle
3. Install it to `~/.roo/cli`
4. Create a symlink in `~/.local/bin/roo`
5. Make the CLI executable

After installation completes, verify it worked:

```bash
roo --version
```

:::tip
If the `roo` command isn't found, make sure `~/.local/bin` is in your PATH. Add this to your shell profile:

```bash
export PATH="$HOME/.local/bin:$PATH"
```
:::

## Custom Installation Directory

You can customize where the CLI is installed using environment variables:

```bash
ROO_INSTALL_DIR=/opt/roo-code ROO_BIN_DIR=/usr/local/bin \
  curl -fsSL https://raw.githubusercontent.com/RooCodeInc/Roo-Code/main/apps/cli/install.sh | sh
```

- `ROO_INSTALL_DIR`: Where the CLI bundle is extracted (default: `~/.roo/cli`)
- `ROO_BIN_DIR`: Where the `roo` symlink is created (default: `~/.local/bin`)

## Installing a Specific Version

To install a specific version of the CLI:

```bash
ROO_VERSION=0.0.49 curl -fsSL https://raw.githubusercontent.com/RooCodeInc/Roo-Code/main/apps/cli/install.sh | sh
```

Replace `0.0.49` with your desired version number. See [available releases](https://github.com/RooCodeInc/Roo-Code/releases) on GitHub.

## Updating

To update to the latest version, simply re-run the install script:

```bash
curl -fsSL https://raw.githubusercontent.com/RooCodeInc/Roo-Code/main/apps/cli/install.sh | sh
```

The script will download and install the latest version, replacing your existing installation.

## Uninstalling

To completely remove the Roo Code CLI:

```bash
rm -rf ~/.roo/cli ~/.local/bin/roo
```

If you used custom directories, adjust the paths accordingly.

:::info
This only removes the CLI itself. If you also want to remove stored settings and credentials:

```bash
rm -rf ~/.config/roo
```
:::

## Development Installation

If you want to contribute to the CLI or build from source:

### Prerequisites

- Node.js 20 or higher
- pnpm package manager
- Git

### Building from Source

```bash
# Clone the repository
git clone https://github.com/RooCodeInc/Roo-Code.git
cd Roo-Code

# Install dependencies
pnpm install

# Build the main extension first
pnpm --filter roo-cline bundle

# Build the CLI
pnpm --filter @roo-code/cli build

# Run directly (without installing)
cd apps/cli
node dist/index.js --help
```

For more details on local development, see the [CLI README](https://github.com/RooCodeInc/Roo-Code/blob/main/apps/cli/README.md).

## Troubleshooting

### Command Not Found

If you get `command not found: roo` after installation:

1. Check that the symlink was created: `ls -la ~/.local/bin/roo`
2. Verify `~/.local/bin` is in your PATH: `echo $PATH`
3. Add to PATH if needed: `export PATH="$HOME/.local/bin:$PATH"`
4. Restart your terminal

### Permission Denied

If you encounter permission errors during installation:

1. Try without sudo first (the script installs to your home directory)
2. Check file permissions: `ls -la ~/.roo/cli`
3. Ensure you have write access to the installation directory

### Download Fails

If the download fails:

1. Check your internet connection
2. Verify curl is installed: `curl --version`
3. Try downloading manually from [GitHub Releases](https://github.com/RooCodeInc/Roo-Code/releases)
4. Check if GitHub is accessible from your network

### Architecture Not Supported

The CLI currently supports:
- macOS Intel (x64)
- macOS Apple Silicon (arm64)
- Linux x64
- Linux arm64

If your system isn't supported, you can try [building from source](#development-installation).

## Next Steps

Now that the CLI is installed:

1. [Configure authentication](/cli/authentication) to use Roo Code Cloud or set up your API key
2. [Follow the getting started guide](/cli/getting-started) to run your first command
3. [Learn about configuration options](/cli/configuration) to customize your setup
