# Terminal Shell Integration Guide

## What is Shell Integration?

Shell integration is a [new feature in VSCode 1.93](https://code.visualstudio.com/updates/v1_93#_terminal-shell-integration-api) that allows extensions like Roo Code to run commands in your terminal and read their output. Command output allows Roo Code to react to the result of the command on its own, without you having to handhold by copy-pasting the output in yourself. It's also quite powerful when running development servers as it allows Roo Code to fix errors as the server logs them.

## How Shell Integration Works

Shell integration uses special terminal sequences (like ANSI escape codes) to mark different stages of command execution in your terminal. Here's how it works:

1. **Activation**: When you open a terminal in VSCode, your shell sends an activation sequence (`\x1b]633;A\x07`) to initialize shell integration.

2. **Command Lifecycle**: VSCode shell integration uses OSC (Operating System Command) sequence 633 to track each command's lifecycle:
   - OSC 633 ; A - Mark prompt start
   - OSC 633 ; B - Mark command start
   - OSC 633 ; C - Mark command executed (pre-output)
   - OSC 633 ; D [; `<exitcode>`] - Mark command finished with optional exit code
   - OSC 633 ; E ; `<commandline>` [; `<nonce>`] - Explicitly set command line with optional nonce
   - OSC 633 ; P ; `<Property>=<Value>` - Set properties like current working directory

3. **Shell Integration Hooks**: Each shell uses specific hooks for different stages of command execution:

   - Bash:
     * Initial activation: `PROMPT_COMMAND` (sets up initial environment)
     * Command start: `trap DEBUG` (triggers before command execution)
     * Command stop: `PROMPT_COMMAND` (triggers after command completion)

   - Zsh:
     * Initial activation: `precmd` (sets up initial environment)
     * Command start: `preexec` (triggers before command execution)
     * Command stop: `precmd` (triggers after command completion)

   - PowerShell:
     * Initial activation: `prompt` function (sets up initial environment)
     * Command input: `PSConsoleHostReadLine` (captures command input)
     * Command start/stop: `prompt` function (handles both command start and completion)

   - Fish:
     * Initial activation: `fish_prompt` (sets up initial environment)
     * Command start: `fish_preexec` (triggers before command execution)
     * Command stop: `fish_prompt` (triggers after command completion)

> **Note:** This hook implementation information was discovered through AI inspection of the VSCode source tree. If you find any inaccuracies, please submit a pull request with corrections.

These hooks emit OSC (Operating System Command) sequences that VSCode recognizes to track:
   - Prompt start/end positions
   - Command start/execution/finish events
   - Current working directory changes
   - Command line content and execution status

4. **Output Capture**: When a command runs, VSCode captures:
   - Command text and working directory
   - Start and end times
   - Exit codes
   - Output streams (stdout/stderr)

This allows VSCode and extensions like Roo Code to:
- Know exactly when commands start and finish
- Capture command output reliably
- Track command success/failure
- Update the terminal UI with command status
- React to command results automatically
- Track the current working directory

## How to Fix "Shell Integration Unavailable"

### Step 1: Update VSCode or Cursor

First, make sure you're using the latest version of VSCode or Cursor:

1. Open VSCode or Cursor
2. Press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows/Linux)
3. Type "Check for Updates" (VSCode) or "Attempt Update" (Cursor) and select it
4. Restart VSCode/Cursor after the update

### Step 2: Configure VSCode to Use the Correct Shell

1. Open VSCode
2. Press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows/Linux)
3. Type "Terminal: Select Default Profile" and choose it
4. Select one of the supported shells: zsh, bash, fish, or PowerShell.

### Step 3: Restart VSCode

After making these changes:

1. Quit VSCode completely
2. Reopen VSCode
3. Start a new Roo Code session (you can resume your previous task and try to run the command again, this time with Roo Code being able to see the output)

## Additional Troubleshooting for Windows Users

If you're using Windows and still experiencing issues with shell integration after trying the previous steps, it's recommended you use Git Bash.

### Git Bash

Git Bash is a terminal emulator that provides a Unix-like command line experience on Windows. To use Git Bash, you need to:

1. Download and run the Git for Windows installer from [https://git-scm.com/downloads/win](https://git-scm.com/downloads/win)
2. Quit and re-open VSCode
3. Press `Ctrl + Shift + P` to open the Command Palette
4. Type "Terminal: Select Default Profile" and choose it
5. Select "Git Bash"

### PowerShell

If you'd still like to use PowerShell, make sure you're using an updated version (at least v7+).
  - Check your current PowerShell version by running: `$PSVersionTable.PSVersion`
  - If your version is below 7, [update PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7.4#installing-powershell-7).

### Cygwin (bash, zsh)

Cygwin provides a Unix-like environment on Windows systems. To configure Cygwin as your terminal in VS Code:

1. Install Cygwin from [https://www.cygwin.com/](https://www.cygwin.com/)

2. Open VS Code settings:
   - Select File > Preferences > Settings
   - Click the "Open Settings (JSON)" icon in the top right corner
   
3. Add the following configuration to your `settings.json` (inside the top-level curly braces `{}`):
   ```json
   {
     "terminal.integrated.profiles.windows": {
       "Cygwin": {
         "path": "C:\\cygwin64\\bin\\bash.exe",
         "args": ["--login"],
         "env": {"CHERE_INVOKING": "1"}
       }
     },
     "terminal.integrated.defaultProfile.windows": "Cygwin"
   }
   ```

   > Note: If you have 32-bit Cygwin installed, use `"C:\\cygwin\\bin\\bash.exe"` for the path.

4. Understanding the configuration:
   - `path`: Points to the Bash executable in your Cygwin installation
   - `args`: The `--login` flag ensures the shell reads profile files
   - `env`: The `CHERE_INVOKING` environment variable tells Cygwin to use the current directory as the working directory
   - `terminal.integrated.defaultProfile.windows`: Sets Cygwin as the default terminal profile

5. To open a new Cygwin terminal:
   - Press Ctrl+Shift+(backtick) to open a new terminal, or
   - Press `F1`, type "Terminal: Create New Terminal (with Profile)", and select "Cygwin"

While our testing shows that this works out of the box, if you encounter shell integration issues with Cygwin, ensure you have added the appropriate shell integration hooks to your Cygwin bash profile as described in the "Manual Shell Integration Installation" section.

#### Understanding PowerShell Execution Policies

PowerShell uses execution policies to determine which scripts can run on your system. Here are the most common policies:

- `Restricted`: No PowerShell scripts can run. This is the default setting.
- `AllSigned`: All scripts, including local ones, must be signed by a trusted publisher.
- `RemoteSigned`: Scripts created locally can run, but scripts downloaded from the internet must be signed.
- `Unrestricted`: No restrictions. Any script can run, though you will be warned before running internet-downloaded scripts.

For development work in VSCode, the `RemoteSigned` policy is generally recommended. It allows locally created scripts to run without restrictions while maintaining security for downloaded scripts. To learn more about PowerShell execution policies and understand the security implications of changing them, visit Microsoft's documentation: [About Execution Policies](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies).

#### Steps to Change the Execution Policy

1. Open PowerShell as an Administrator: Press `Win + X` and select "Windows PowerShell (Administrator)" or "Windows Terminal (Administrator)".

2. Check Current Execution Policy by running this command:
     ```powershell
     Get-ExecutionPolicy
     ```
   - If the output is already `RemoteSigned`, `Unrestricted`, or `Bypass`, you likely don't need to change your execution policy. These policies should allow shell integration to work.
   - If the output is `Restricted` or `AllSigned`, you may need to change your policy to enable shell integration.

3. Change the Execution Policy by running the following command:
     ```powershell
     Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
     ```
   - This sets the policy to `RemoteSigned` for the current user only, which is safer than changing it system-wide.

4. Confirm the Change by typing `Y` and pressing Enter when prompted.

5. Verify the Policy Change by running `Get-ExecutionPolicy` again to confirm the new setting.

6. Restart VSCode and try the shell integration again.

## Manual Shell Integration Installation

If you're still experiencing issues after trying the basic troubleshooting steps, you can try manually installing shell integration:

### Installation Instructions

For Bash users:
1. Run `code ~/.bashrc` in the terminal to open your bash configuration file.
2. Add the following line to your `~/.bashrc`:
```bash
[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path bash)"
```

For Zsh users:
1. Run `code ~/.zshrc` in the terminal to open your zsh configuration file.
2. Add the following line to your `~/.zshrc`:
```bash
[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path zsh)"
```

For PowerShell users:
1. Run `code $Profile` in the terminal to open your PowerShell profile.
2. Add the following line to the file:
```powershell
if ($env:TERM_PROGRAM -eq "vscode") { . "$(code --locate-shell-integration-path pwsh)" }
```

For Fish users:
1. Run `code ~/.config/fish/config.fish` in the terminal to open your fish configuration file.
2. Add the following line to your `~/.config/fish/config.fish`:
```fish
string match -q "$TERM_PROGRAM" "vscode"; and . (code --locate-shell-integration-path fish)
```

### About the Shell Integration Path Command

The `code --locate-shell-integration-path` command returns the path to shell-specific integration scripts. It supports four shell types:
- bash - returns path to `shellIntegration-bash.sh`
- zsh - returns path to `shellIntegration-rc.zsh`
- pwsh - returns path to `shellIntegration.ps1`
- fish - returns path to `shellIntegration.fish`

Any other value will throw an error: "Error using `--locate-shell-integration-path`: Invalid shell type".

## Unusual Terminal Output

If you're seeing unusual output with rectangles, lines, escape sequences, or control characters, it may be related to terminal customization tools. Common culprits include:

- Powerlevel10k: A zsh theme that adds visual elements to the prompt. If using Powerlevel10k, you must set `typeset -g POWERLEVEL9K_TERM_SHELL_INTEGRATION=true` in your `~/.zshrc` before sourcing the theme. This enables proper integration with VSCode's shell integration, which differs from the integration provided by VSCE.
- Oh My Zsh: A framework for managing zsh configurations
- Fish shell themes

To troubleshoot:

1. For Powerlevel10k users:
   ```bash
   # Add this line before sourcing powerlevel10k in ~/.zshrc
   typeset -g POWERLEVEL9K_TERM_SHELL_INTEGRATION=true
   ```

2. If issues persist, temporarily disable these tools in your shell configuration file (e.g., `~/.zshrc` for Zsh)
3. If the issue resolves, gradually re-enable features to identify the conflicting component

## Advanced Troubleshooting

### Shell Integration Not Available

Shell integration activation sequence (`\x1b]633;A\x07`) was not received. Shell integration features are disabled. Verify you are using a supported shell (Bash, Zsh, PowerShell, Fish) and shell integration is enabled in settings.

### Command Stream Not Available

Command stream failed: missing start sequence (`\x1b]633;C\x07`) or command already ended (`\x1b]633;D\x07`). Command output cannot be captured. Check if the command started correctly or has completed execution.

### Verifying Shell Integration Status

Run these commands to verify shell integration sequences are installed:

#### Bash
```bash
# View all shell integration sequences
set | grep -i '[16]33;'

# Should show VSCode shell integration functions like:
# printf '\e]633;E;%s;%s\a' - Command line set
# printf '\e]633;C\a' - Command executed
# printf '\e]633;D\a' - Command finished
# printf '\e]633;B\a' - Command start
# printf '\e]633;A\a' - Shell integration activated
# printf '\e]633;P;Prompt=%s\a' - Prompt marker

# Check for PROMPT_COMMAND and DEBUG trap
echo "$PROMPT_COMMAND" | grep vsc
trap -p DEBUG | grep vsc
```

#### Zsh
```zsh
# List all VSCode shell integration functions
functions | grep -i vsc  # Should show __vsc_precmd, __vsc_preexec, etc.

# Verify shell integration hooks are installed
typeset -p precmd_functions preexec_functions  # Should include __vsc_precmd and __vsc_preexec

# Check Powerlevel10k integration (if installed)
(( ${+functions[p10k]} )) && typeset -p POWERLEVEL9K_TERM_SHELL_INTEGRATION  # Should show "true"
```

#### PowerShell
```powershell
# View shell integration functions
Get-Command -Name "*VSC*" -CommandType Function

# Check prompt function
Get-Content Function:\Prompt | Select-String "VSCode"
```

#### Fish
```fish
# Check for shell integration functions
functions | grep -i vsc

# Verify fish_prompt and fish_preexec hooks
functions fish_prompt | grep -i vsc
functions fish_preexec | grep -i vsc
```

Visual indicators of active shell integration:
1. Shell integration indicator in terminal title bar
2. Command detection highlighting
3. Working directory updates in terminal title
4. Command duration reporting
5. Exit code reporting for failed commands

## Troubleshooting Terminal Execution Failures

If commands that previously worked suddenly stop working:
1. Close the current terminal
2. Let Roo Code open a new terminal for you
3. Try your command again

This often resolves temporary shell integration issues. However, if you experience persistent terminal execution failures and can reliably reproduce the problem, please [open a ticket](https://github.com/RooVetGit/Roo-Code/issues/new) with:
- A step-by-step reproduction of the problem
- Your operating system and VSCode/Cursor version
- The shell you're using (Bash, Zsh, PowerShell, Fish)
- Any relevant error messages or terminal output

This will help us investigate and fix the underlying issue.

## Known Issues

### Incomplete Terminal Output

There is an ongoing issue in VSCode where terminal command output may not be completely captured by extensions like Roo Code. This can result in:
- Missing portions of command output
- Incomplete error messages
- Delayed or missing command completion signals

If you experience this issue, try:
1. Closing and reopening the terminal
2. Running the command again
3. If the problem persists, you may need to manually copy-paste relevant output to Roo Code

For detailed troubleshooting guidance, refer to the [Cline Wiki - Troubleshooting Shell Integration](https://github.com/cline/cline/wiki/Troubleshooting-%E2%80%90-Shell-Integration-Unavailable) guide.

## Troubleshooting Resources

- [VSCode Terminal Output Issue #237208](https://github.com/microsoft/vscode/issues/237208): Tracking the incomplete terminal output capture issue (ongoing as of March 8, 2025)
- [VSCode Terminal Integration Test Repository](https://github.com/KJ7LNW/vsce-test-terminal-integration): A tool for validating shell integration functionality in your environment
- [Cline Wiki - Troubleshooting Shell Integration](https://github.com/cline/cline/wiki/Troubleshooting-%E2%80%90-Shell-Integration-Unavailable): Comprehensive troubleshooting guide by Cline's original creator
- [Shell Integration Improvements PR](https://github.com/cline/cline/pull/1089): Enhanced shell integration behavior (merged in Roo Code as of March 8, 2025, pending merge in Cline)
- [Roo Code Shell Integration Architecture PR](https://github.com/RooVetGit/Roo-Code/pull/1365): Detailed discussion and proposed architectural changes for more reliable shell integration (pending as of March 8, 2025)

## Support

If you've followed these steps and are still experiencing problems, please:

1. Check the [Roo Code GitHub Issues](https://github.com/RooVetGit/Roo-Code/issues) to see if others have reported similar problems
2. If not, create a new issue with details about your operating system, VSCode/Cursor version, and the steps you've tried

For additional help, join our [Discord](https://discord.com/channels/1332146336664915968/1332212137568899162).

_Content adapted from [Cline Wiki - Troubleshooting Shell Integration Unavailable](https://github.com/cline/cline/wiki/Troubleshooting-%E2%80%90-Shell-Integration-Unavailable)_