---
description: Learn how Roo Code integrates with your shell to execute commands. Troubleshooting guide for terminal issues and shell configuration.
keywords:
  - shell integration
  - terminal commands
  - command execution
  - shell configuration
  - troubleshooting
image: /img/social-share.jpg
---

# Terminal Shell Integration

Terminal Shell Integration is a key feature that enables Roo Code to execute commands in your terminal and intelligently process their output. This bidirectional communication between the AI and your development environment unlocks powerful automation capabilities.

---

## What is Shell Integration?

Shell integration is automatically enabled in Roo Code and connects directly to your terminal's command execution lifecycle without requiring any setup from you. This built-in feature allows Roo to:

- Execute commands on your behalf through the [`execute_command`](/advanced-usage/available-tools/execute-command) tool
- Read command output in real-time without manual copy-pasting
- Automatically detect and fix errors in running applications
- Observe command exit codes to determine success or failure
- Track working directory changes as you navigate your project
- React intelligently to terminal output without user intervention
- Stop running commands directly from the chat interface using the stop button that appears next to the command execution message.

<img src="/img/v3.15/v3.15.png" alt="Stop Command Button in Chat UI" width="600" />

When you ask Roo to perform tasks like installing dependencies, starting a development server, or analyzing build errors, shell integration works behind the scenes to make these interactions smooth and effective.

---

## Troubleshooting Shell Integration

Shell integration is built into Roo Code and works automatically in most cases. If you see "Shell Integration Unavailable" messages or experience issues with command execution, try these solutions:

1. **Update VSCode/Cursor** to the latest version (VSCode 1.93+ required)
2. **Ensure a compatible shell is selected**: Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) → "Terminal: Select Default Profile" → Choose bash, zsh, PowerShell, or fish
3. **Windows PowerShell users**: Run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` then restart VSCode
4. **WSL users**: Add `. "$(code --locate-shell-integration-path bash)"` to your `~/.bashrc`

---

## Command Execution Fallback

Roo Code has a fallback mechanism for executing commands. This is most relevant if you’ve chosen to use the VS Code terminal (by setting “Use Inline Terminal (recommended)” to OFF; see [Use Inline Terminal (recommended)](#use-inline-terminal-recommended)) and that integration then fails.

- **How it works**: If Roo Code is configured to use VS Code's terminal integration but cannot connect or encounters issues, it may automatically attempt to execute the command directly using a background process. This is a fallback to ensure the command still attempts to run.
- **Notification**: You might see a notification in the chat if this fallback is used, indicating that the command is running without the full features of either Roo's inline terminal or VS Code's shell integration (e.g., real-time output streaming or precise exit code detection might be limited).
<img src="/img/v3.15.0/v3.15.0.png" alt="Command execution fallback notification example" width="600" />

- **Resolution**: If you encounter this fallback, it typically indicates an issue with your VS Code shell integration setup. Review the troubleshooting steps in this document or switch to Roo Code’s recommended Inline Terminal by ensuring “Use Inline Terminal (recommended)” is ON; see [Use Inline Terminal (recommended)](#use-inline-terminal-recommended).

<img src="/img/shell-integration/shell-integration-12.png" alt="Roo Code Inline Terminal in action" width="600" />
*Example: Inline Terminal (recommended) showing command output in chat.*


---

## Terminal Integration Settings

Roo Code provides settings to fine-tune how it interacts with terminals. To access these settings:
1. Click the <Codicon name="gear" /> icon in the top-right corner of the Roo Code sidebar.
2. In the settings pane that opens, select the "Terminal" group from the left-hand menu.

### Basic Settings

#### Terminal Output Limit
<img src="/img/shell-integration/shell-integration.png" alt="Terminal output limit slider set to 500" width="600" />
Truncates by lines. Roo keeps the beginning and end and drops the middle with an "[...N lines omitted...]" marker to stay under the limit. Mechanism: keeps approximately 20% of the head and 80% of the tail of the allowed line budget and inserts an omission marker, preserving a blank line before the tail for readability. Use when commands print many lines (e.g., long logs) and you mostly care about headers and final results. Avoid when important details are in the middle. Default: 500 lines.

#### Terminal Character Limit
Hard cap on total output size (characters). Roo keeps the beginning and end and omits the middle with an "[...N characters omitted...]" marker. Mechanism: takes precedence over the line limit; keeps ~20% of the head and ~80% of the tail of the character budget, overriding the line limit to prevent memory issues from very long lines. Use when commands print extremely long lines or massive blobs. Avoid when you need the exact full content.

#### Compress progress bar output
<img src="/img/shell-integration/shell-integration-10.png" alt="Compress progress bar output checkbox" width="600" />
ON: Collapses progress bars/spinners by processing carriage returns (\r) and backspaces (\b) so only the final state is kept, then applies run-length encoding to collapse repeated lines. OFF: Keeps every update exactly as printed. Use when you don’t need intermediate spinner states (recommended ON). Disable only if you’re debugging step-by-step progress behavior.

### Advanced Settings

Unless noted, these settings apply only when "Use Inline Terminal (recommended)" is OFF (i.e., using the VS Code terminal).

:::info Important
**Terminal restart required for these settings**

Changes to advanced terminal settings only take effect after restarting your terminals. To restart a terminal:

1. Click the trash icon in the terminal panel to close the current terminal
2. Open a new terminal with Terminal → New Terminal or <kbd>Ctrl</kbd>+<kbd>`</kbd> (backtick)

Always restart all open terminals after changing any of these settings.
:::

#### Inherit environment variables
<img src="/img/shell-integration/shell-integration-11.png" alt="Inherit environment variables checkbox" width="600" />
VS Code terminal only. Controls whether VS Code integrated terminals inherit environment variables from the parent VS Code process. Mirrors the VS Code setting [`terminal.integrated.inheritEnv`](https://code.visualstudio.com/docs/editor/integrated-terminal#_inherit-environment-variables). Note: Inline Terminal (“Use Inline Terminal (recommended)” ON) runs as a background process and always uses the extension’s Node process environment; this setting doesn’t affect it. Keep enabled (VS Code default) if you rely on PATH/proxy/auth variables provided by VS Code. Disable only for clean, reproducible integrated terminal sessions or when debugging environment conflicts.

### Runtime Environment
On macOS (and possibly other operating systems) the environment provided to VSCode, and consequently Roo Code, can differ depending on how VSCode is launched.  
If launched from the command line `vscode` command, VSCode and Roo Code will inherit the environment from the shell that launched it, and all will (usually) be well.
If launched from the Finder, Dock, or Spotlight, environment exported from `.zshrc`, or `.zprofile` will likely be missing.  If you have environment variables set in one of those files, and find they are missing when running VSCode, move them to .zshenv, and log out and back in again, so the window manager will pick up the new environment settings.

#### Use Inline Terminal (recommended)
<a id="disable-terminal-shell-integration"></a>
<img src="/img/shell-integration/shell-integration-9.png" alt="Use Inline Terminal (recommended) switch" width="600" />
Controls how Roo Code executes terminal commands.

- ON (Use Inline Terminal): Runs commands with the Inline Terminal (in chat), bypassing shell profiles and VS Code shell integration for reliability and faster starts. Mechanism: uses a background “execa” provider and streams output directly (no VS Code OSC 633/133 markers).

    <img src="/img/shell-integration/shell-integration-12.png" alt="Roo Code Inline Terminal when 'Use Inline Terminal (recommended)' is ON" width="600" />
    *Inline Terminal active (Use Inline Terminal is ON).*

- OFF (Use VS Code terminal): Uses the VS Code integrated terminal and your shell profile; may require shell integration and is more likely to hit “Shell Integration Unavailable” issues. Use this only when you specifically need terminal UI features or interactive profile behavior.

The following advanced settings apply only when this is OFF (i.e., when using the VS Code terminal):

##### Terminal shell integration timeout
<img src="/img/shell-integration/shell-integration-1.png" alt="Terminal shell integration timeout slider set to 15s" width="600" />
How long Roo waits for VS Code shell integration to initialize and for the integration stream to start. If not ready within the timeout, a “no shell integration” event is emitted and execution will fall back to the Inline Terminal when retried. Use when your shell/profile has long startup times or you see “Shell Integration Unavailable” errors. Avoid increasing if you’re using the Inline Terminal (not applicable there). Default: 15s. Applies only when using the VS Code terminal.

##### Terminal command delay
<img src="/img/shell-integration/shell-integration-2.png" alt="Terminal command delay slider set to 0ms" width="600" />
Adds a small delay after each command to help VS Code terminals flush all output. Mechanism: sets `PROMPT_COMMAND='sleep N'` for bash/zsh and appends `start-sleep -milliseconds N` for PowerShell. Use when you see truncated/missing tail output or prompt races. Avoid when output captures look correct. Set to 0 to disable. Default: 0ms.

##### Enable PowerShell counter workaround
<img src="/img/shell-integration/shell-integration-3.png" alt="Enable PowerShell counter workaround checkbox" width="600" />
ON: Appends `; "(Roo/PS Workaround: N)" > $null` to each command to force a reliable post-execution signal and avoid missing or duplicated output on some setups. Use when using Windows PowerShell and output is incomplete or repeats, or when running the same command twice in a row fails. OFF: Runs PowerShell commands unchanged.

##### Clear ZSH EOL mark
<img src="/img/shell-integration/shell-integration-4.png" alt="Clear ZSH EOL mark checkbox" width="600" />
ON: Omits Zsh’s end-of-line mark (%) so output is parsed correctly. Mechanism: sets `PROMPT_EOL_MARK=""`. Use when captured output ends with a stray % or parsing looks off. OFF: Leaves the default EOL mark (may confuse parsing on some setups).

##### Enable Oh My Zsh integration
<img src="/img/shell-integration/shell-integration-5.png" alt="Enable Oh My Zsh integration checkbox" width="600" />
For users of the popular Oh My Zsh framework for Zsh. Enable this if you use Oh My Zsh and experience general issues with terminal command execution or output rendering that aren't solved by other settings. This helps Roo Code align with Oh My Zsh's specific shell integration mechanisms by setting `ITERM_SHELL_INTEGRATION_INSTALLED=Yes`. Restarting the IDE might be necessary.

##### Enable Powerlevel10k integration
<img src="/img/shell-integration/shell-integration-6.png" alt="Enable Powerlevel10k integration checkbox" width="600" />
For users of the Powerlevel10k theme for Zsh. Enable this if your Powerlevel10k prompt (which can be quite complex) seems to interfere with Roo Code's ability to correctly detect command boundaries, parse output, or track the current working directory. This sets `POWERLEVEL9K_TERM_SHELL_INTEGRATION=true`.

##### Enable ZDOTDIR handling
<img src="/img/shell-integration/shell-integration-7.png" alt="Enable ZDOTDIR handling checkbox" width="600" />
ON: Uses a temporary ZDOTDIR so VS Code shell integration works with zsh while preserving your config. Mechanism: creates a temp dir with a `.zshrc` that sources VS Code’s shell integration script, then re-sources your original zsh files and resets ZDOTDIR; the temp dir is cleaned up after initialization. Use when zsh shell integration fails or conflicts with your dotfiles. OFF: Uses your normal ZDOTDIR.

---

## How Shell Integration Works

Shell integration connects Roo to your terminal's command execution process in real-time:

1. **Connection**: When you open a terminal, VS Code establishes a special connection with your shell.

2. **Command Tracking**: VS Code monitors your terminal activities by detecting:
   - When a new prompt appears
   - When you enter a command
   - When the command starts running
   - When the command finishes (and whether it succeeded or failed)
   - What directory you're currently in

3. **Different Shells, Same Result**: Each shell type (Bash, Zsh, PowerShell, Fish) implements this slightly differently behind the scenes, but they all provide the same functionality to Roo.

4. **Information Gathering**: Roo can see what commands are running, where they're running, how long they take, whether they succeed, and their complete output - all without you having to copy and paste anything.

---

## Troubleshooting Shell Integration

### PowerShell Execution Policy (Windows)

PowerShell restricts script execution by default. To configure:

1. Open PowerShell as Administrator
2. Check current policy: `Get-ExecutionPolicy`
3. Set appropriate policy: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

Common policies:
- `Restricted`: No scripts allowed (default)
- `RemoteSigned`: Local scripts can run; downloaded scripts need signing
- `Unrestricted`: All scripts run with warnings
- `AllSigned`: All scripts must be signed

### Manual Shell Integration Installation

If automatic integration fails, add the appropriate line to your shell configuration:

**Bash** (`~/.bashrc`):
```bash
[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path bash)"
```

**Zsh** (`~/.zshrc`):
```bash
[[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path zsh)"
```

**PowerShell** (`$Profile`):
```powershell
if ($env:TERM_PROGRAM -eq "vscode") { . "$(code --locate-shell-integration-path pwsh)" }
```

**Fish** (`~/.config/fish/config.fish`):
```fish
string match -q "$TERM_PROGRAM" "vscode"; and . (code --locate-shell-integration-path fish)
```

### Terminal Customization Issues

If you use terminal customization tools:

**Powerlevel10k**:
```bash
# Add before sourcing powerlevel10k in ~/.zshrc
typeset -g POWERLEVEL9K_TERM_SHELL_INTEGRATION=true
```

**Alternative**: Enable the Powerlevel10k Integration setting in Roo Code.

### Verifying Shell Integration Status

Confirm shell integration is active with these commands:

**Bash**:
```bash
set | grep -i '[16]33;'
echo "$PROMPT_COMMAND" | grep vsc
trap -p DEBUG | grep vsc
```

**Zsh**:
```zsh
functions | grep -i vsc
typeset -p precmd_functions preexec_functions
```

**PowerShell**:
```powershell
Get-Command -Name "*VSC*" -CommandType Function
Get-Content Function:\Prompt | Select-String "VSCode"
```

**Fish**:
```fish
functions | grep -i vsc
functions fish_prompt | grep -i vsc
```

Visual indicators of active shell integration:
1. Shell integration indicator in terminal title bar
2. Command detection highlighting
3. Working directory updates in terminal title
4. Command duration and exit code reporting

---

## WSL Terminal Integration Methods

When using Windows Subsystem for Linux (WSL), there are two distinct ways to use VSCode with WSL, each with different implications for shell integration:

### Method 1: VSCode Windows with WSL Terminal

In this setup:
- VSCode runs natively in Windows
- You use the WSL terminal integration feature in VSCode
- Shell commands are executed through the WSL bridge
- May experience additional latency due to Windows-WSL communication
- Shell integration markers may be affected by the WSL-Windows boundary: you must make sure that `source "$(code --locate-shell-integration-path <shell>)"` is loaded for your shell within the WSL environment because it may not get automatically loaded; see above.

### Method 2: VSCode Running Within WSL

In this setup:
- You launch VSCode directly from within WSL using `code .`
- VSCode server runs natively in the Linux environment
- Direct access to Linux filesystem and tools
- Better performance and reliability for shell integration
- Shell integration is loaded automatically since VSCode runs natively in the Linux environment
- Recommended approach for WSL development

For optimal shell integration with WSL, we recommend:
1. Open your WSL distribution
2. Navigate to your project directory
3. Launch VSCode using `code .`
4. Use the integrated terminal within VSCode

---

## Known Issues and Workarounds

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

### VS Code Shell Integration for Fish + Cygwin on Windows

For fellow Windows users running Fish terminal within a Cygwin environment, here's how VS Code's shell integration works:

1.  **(Optional) Locate the Shell Integration Script:**
    Open your Fish terminal *within VS Code* and run the following command:
    ```bash
    code --locate-shell-integration-path fish
    ```
    This will output the path to the `shellIntegration.fish` script. Note down this path.

2.  **Update Your Fish Configuration:**
    Edit your `config.fish` file (usually located at `~/.config/fish/config.fish` within your Cygwin home directory). Add the following line, preferably within an `if status is-interactive` block or at the very end of the file:

    ```fish
    # Example config.fish structure
    if status is-interactive
        # Your other interactive shell configurations...
        # automatic locate integration script:
        string match -q "$TERM_PROGRAM" "vscode"; and . (code --locate-shell-integration-path fish)

        # Or if the above fails for you:
        # Source the VS Code shell integration script
        # IMPORTANT: Replace the example path below with the actual path you found in Step 1.
        # Make sure the path is in a format Cygwin can understand (e.g., using /cygdrive/c/...).
        # source "/cygdrive/c/Users/YourUser/.vscode/extensions/..../shellIntegration.fish"
    end
    ```
    *Remember to replace the example path with the actual path from Step 1, correctly formatted for Cygwin.*

3.  **Configure VS Code Terminal Profile:**
    Open your VS Code `settings.json` file (Ctrl+Shift+P -> "Preferences: Open User Settings (JSON)"). Update or add the Fish profile under `terminal.integrated.profiles.windows` like this:

    ```json
    {
      // ... other settings ...

      "terminal.integrated.profiles.windows": {
        // ... other profiles ...

        // Recommended: Use bash.exe to launch fish as a login shell
        "fish": {
          "path": "C:\\cygwin64\\bin\\bash.exe", // Or your Cygwin bash path
          "args": [
            "--login", // Ensures login scripts run (important for Cygwin environment)
            "-i",      // Ensures bash runs interactively
            "-c",
            "exec fish" // Replace bash process with fish
          ],
          "icon": "terminal-bash" // Optional: Use a recognizable icon
        }
        // Alternative (if the above fails): Launch fish directly
        "fish-direct": {
          "path": "C:\\cygwin64\\bin\\fish.exe", // Ensure this is in your Windows PATH or provide full path
          // Use 'options' here instead of 'args'; otherwise, you might encounter the error "terminal process terminated exit code 1".
          "options": ["-l", "-c"], // Example: login and interactive flags.
          "icon": "terminal-fish" // Optional: Use a fish icon
        }
      },

      // Optional: Set fish as your default if desired
---

## Known Issues and Workarounds
      // "terminal.integrated.defaultProfile.windows": "fish", // or "fish-direct" depending what you use.

      // ... other settings ...
    }
    ```
    *Note: Using `bash.exe --login -i -c "exec fish"` is often more reliable in Cygwin environments for ensuring the correct environment setup before `fish` starts. However, if that approach doesn't work, try the `fish-direct` profile configuration.*

4.  **Restart VS Code:**
    Close and reopen Visual Studio Code completely to apply the changes.

5.  **Verify:**
    Open a new Fish terminal in VS Code. The shell integration features (like command decorations, better command history navigation, etc.) should now be active. You can test basic functionality by running simple commands like `echo "Hello from integrated Fish!"`. <img src="/img/shell-integration/shell-integration-8.png" alt="Fish Cygwin Integration Example" width="600" />

This setup works reliably on Windows systems using Cygwin, Fish, and the Starship prompt, and should assist users with similar configurations.


### Shell Integration Failures After VSCode 1.98

**Issue**: After VSCode updates beyond version 1.98, shell integration may fail with the error "VSCE output start escape sequence (]633;C or ]133;C) not received".

**Solutions**:
1. **Set Terminal Command Delay**:
   - Set the Terminal Command Delay to 50ms in Roo Code settings
   - Restart all terminals after changing this setting
   - This matches older default behavior and may resolve the issue, however some users have reported that a value of 0ms works better. This is a workaround for upstream VSCode problems.

2. **Roll Back VSCode Version**:
   - Download VSCode v1.98 from [VSCode Updates](https://code.visualstudio.com/updates/v1_98)
   - Replace your current VSCode installation
   - No backup of Roo settings needed

3. **WSL-Specific Workaround**:
   - If using WSL, ensure you launch VSCode from within WSL using `code .`

4. **ZSH Users**:
   - Try enabling some or all ZSH-related workarounds in Roo settings
   - These settings can help regardless of your operating system


### Ctrl+C Behavior

**Issue**: If text is already typed in the terminal when Roo tries to run a command, Roo will press Ctrl+C first to clear the line, which can interrupt running processes.

**Workaround**: Make sure your terminal prompt is empty (no partial commands typed) before asking Roo to execute terminal commands.

### Multi-line Command Issues

**Issue**: Commands that span multiple lines can confuse Roo and may show output from previous commands mixed in with current output.

**Workaround**: Instead of multi-line commands, use command chaining with `&amp;&amp;` to keep everything on one line (e.g., `echo a &amp;&amp; echo b` instead of typing each command on a separate line).

### PowerShell-Specific Issues

1. **Premature Completion**: PowerShell sometimes tells Roo a command is finished before all the output has been shown.
2. **Repeated Commands**: PowerShell may refuse to run the same command twice in a row.

**Workaround**: Enable the "PowerShell counter workaround" setting and set a terminal command delay of 150ms in the settings to give commands more time to complete.

### Incomplete Terminal Output

**Issue**: Sometimes VS Code doesn't show or capture all the output from a command.

**Workaround**: If you notice missing output, try closing and reopening the terminal tab, then run the command again. This refreshes the terminal connection.

### Python Virtual Environment (venv) Issues

**Issue**: Disabling shell integration will disable venv; venv is VSCode-managed, Roo does not know anything about it because disabling shell integration uses a completely different mechanism for running commands (execa).

**Workaround**: If you need to use Python virtual environments with Roo Code, you might be able to:

```bash
killall code # closes all vscode windows!
. venv/bin/activate
code
```

This way the environment is configured before code launches so Roo should inherit it.

---

## Troubleshooting Resources

### Checking Debug Logs
When shell integration issues occur, check the debug logs:
1. Open Help → Toggle Developer Tools → Console
2. Set "Show All Levels" to see all log messages
3. Look for messages containing `[Terminal Process]`
4. Check `preOutput` content in error messages:
   - Empty preOutput (`''`) means VSCode sent no data
   - This indicates a potential VSCode shell integration issue, or an upstream bug that is out of our control
   - The absence of shell integration markers may require adjusting settings to work around possible upstream bugs or local workstation configuration issues related to shell initialization and VSCode's loading of special shell integration hooks

### Using the VSCode Terminal Integration Test Extension
The [VSCode Terminal Integration Test Extension](https://github.com/KJ7LNW/vsce-test-terminal-integration) helps diagnose shell integration issues by testing different settings combinations:


1. **When Commands Stall**:
   - If you see "command already running" warnings, click "Reset Stats" to reset the terminal state
   - These warnings indicate shell integration is not working
   - Try different settings combinations until you find one that works
   - If it really gets stuck, restart the extension by closing the window and pressing F5

2. **Testing Settings**:
   - Systematically try different combinations of:
     * Terminal Command Delay
     * Shell Integration settings
   - Document which combinations succeed or fail
   - This helps identify patterns in shell integration issues

3. **Reporting Issues**:
   - Once you find a problematic configuration
   - Document the exact settings combination
   - Note your environment (OS, VSCode version, shell, and any shell prompt customization)
   - Open an issue with these details to help improve shell integration

### Additional Resources

- [VSCode Terminal Output Issue #237208](https://github.com/microsoft/vscode/issues/237208)
- [VSCode Terminal Integration Test Repository](https://github.com/KJ7LNW/vsce-test-terminal-integration)
- [Roo Code Shell Integration Architecture PR](https://github.com/RooCodeInc/Roo-Code/pull/1365)

---

## Support

If you're still having issues:

1. Check [Roo Code GitHub Issues](https://github.com/RooCodeInc/Roo-Code/issues)
2. Create a new issue with:
   - OS and VSCode version
   - Shell type
   - Steps to reproduce
   - Error messages

For additional help, join our [Discord](https://discord.gg/roocode).
