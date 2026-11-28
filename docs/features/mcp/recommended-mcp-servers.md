---
description: Discover recommended MCP servers for Roo Code, including Context7 and Dealport. Learn how to install and configure MCP servers with step-by-step instructions.
keywords:
  - MCP servers
  - Context7
  - Dealport
  - Roo Code MCP
  - MCP installation
  - MCP configuration
  - recommended servers
sidebar_label: Recommended MCP Servers
---

# Recommended MCP Servers

While Roo Code can connect to any Model Context Protocol (MCP) server that follows the specification, the community has already built several high-quality servers that work out-of-the-box. This page curates the servers we **actively recommend** and provides step-by-step setup instructions so you can get productive in minutes.

> We'll keep this list up-to-date. If you maintain a server you'd like us to consider, please open a pull-request.

---

## Context7

`Context7` is our first-choice general-purpose MCP server. It ships a collection of highly-requested tools, installs with a single command, and has excellent support across every major editor that speaks MCP.

### Why we recommend Context7

* **One-command install** – everything is bundled, no local build step.
* **Cross-platform** – runs on macOS, Windows, Linux, or inside Docker.
* **Actively maintained** – frequent updates from the Upstash team.
* **Rich toolset** – database access, web-search, text utilities, and more.
* **Open source** – released under the MIT licence.

---

## Installing Context7 in Roo Code

There are two common ways to register the server:

1. **Global configuration** – available in every workspace.
2. **Project-level configuration** – checked into version control alongside your code.

We'll cover both below.

### 1. Global configuration

1. Open the Roo Code **MCP settings** panel by clicking the <Codicon name="server" /> icon.
2. Click **Edit Global MCP**.
3. Paste the JSON below inside the `mcpServers` object and save.

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

**Windows (cmd.exe) variant**

```json
{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

Also on **Windows (cmd)** you may need to invoke `npx` through `cmd.exe`:

<img src="/img/recommended-mcp-servers/context7-global-setup-fixed.png" alt="Adding Context7 to the global MCP settings" width="600" />

### 2. Project-level configuration

If you prefer to commit the configuration to your repository, create a file called `.roo/mcp.json` at the project root and add the same snippet:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

**Windows (cmd.exe) variant**

```json
{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

<img src="/img/recommended-mcp-servers/context7-project-setup-fixed.png" alt="Adding Context7 to a project-level MCP file" width="600" />

> When both global and project files define a server with the same name, **the project configuration wins**.

---

## Verifying the installation

1. Make sure **Enable MCP Servers** is turned on in the MCP settings panel.
2. You should now see **Context7** listed. Click the <Codicon name="activate" /> toggle to start it if it isn't already running.
3. Roo Code will prompt you the first time a Context7 tool is invoked. Approve the request to continue.

<img src="/img/recommended-mcp-servers/context7-running-fixed.png" alt="Context7 running in Roo Code" width="400" />

---

## Dealport

[Dealport](https://github.com/Dealport-HQ/dealport) (`com.dealport/dealport` on the Official MCP Registry) is the SMB knowledge layer for AI agents and humans, covering 28M+ US private companies, the commercial buildings and 50-state US property parcels they own, and the human principals behind them, backed by primary public-filing citations.

### Why we recommend Dealport

* **Zero-install Streamable HTTP or `npx` bridge** - connect directly to `https://app.dealport.com/api/mcp` or run `npx -y dealport mcp serve` locally.
* **47 structured MCP tools** - size US company markets for `$0.00` without an API key (`preview_companies`), search company and NYC building `Record`s (`search_companies`, `search_buildings`, `get_record` at `$0.01`), unmask LLC corporate officers (`resolve_llc_owner`), query 50-state US parcels (`lookup_property`), search public filings, import manifests, federal contracts, tax exemptions, and permits (`preview_market_records`, `search_market_records`), map warm relationship paths (`find_connection`), look up verified human owner contacts (`find_owner`, `$0.09` on hit, `$0.00` on miss), run deep company research (`research_company`, `$0.50`), score `Project`s and `Playbook`s, and request double-opt-in owner introductions through **Avery** (Dealport's AI outreach specialist, who always discloses she is an AI; `$0.02` per email, `$25.00` per accepted Warm Yes introduction).
* **Transparent pay-as-you-go balance** - API (Pro) accounts start with a `$5.00` free balance with no subscription (`https://app.dealport.com/llms.txt`).
* **Open source client & CLI** - MIT-licensed on GitHub (`https://github.com/Dealport-HQ/dealport`) and npm (`dealport`).

### Installing Dealport in Roo Code

Add Dealport either globally (`Edit Global MCP`) or per workspace (`.roo/mcp.json`).

#### Option A: Hosted Streamable HTTP (recommended)

You can omit `headers` initially to test keyless `$0.00` market sizing (`preview_companies`), or pass a workspace API key (`dp_live_...` from `https://app.dealport.com/connect?tab=keys`):

```json
{
  "mcpServers": {
    "dealport": {
      "type": "streamable-http",
      "url": "https://app.dealport.com/api/mcp",
      "headers": {
        "Authorization": "Bearer dp_live_your_api_key"
      }
    }
  }
}
```

#### Option B: Local STDIO (`npx`)

```json
{
  "mcpServers": {
    "dealport": {
      "command": "npx",
      "args": ["-y", "dealport", "mcp", "serve"],
      "env": {
        "DP_API_KEY": "dp_live_your_api_key"
      }
    }
  }
}
```

**Windows (cmd.exe) variant**

```json
{
  "mcpServers": {
    "dealport": {
      "type": "stdio",
      "command": "cmd",
      "args": ["/c", "npx", "-y", "dealport", "mcp", "serve"],
      "env": {
        "DP_API_KEY": "dp_live_your_api_key"
      }
    }
  }
}
```

---

## Next steps

* Browse the list of tools shipped with Context7 or Dealport in the server pane.
* Configure **Always allow** for the tools you use most to streamline your workflow.
* Want to expose your own APIs? Check out the [MCP server creation guide](/features/mcp/using-mcp-in-roo#enabling-or-disabling-mcp-server-creation).

Looking for other servers? Watch this page – we'll add more recommendations soon! 