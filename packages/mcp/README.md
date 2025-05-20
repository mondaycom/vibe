# @vibe/mcp

A Model Context Protocol (MCP) server for the Vibe Design System, enabling LLMs and other MCP clients to interact with Vibe component metadata.

## Usage

### Connecting AI Clients

Connect your AI client to the MCP server by following the instructions below.

#### Cursor

Update your Cursor configuration file at `~/.cursor/mcp.json` (create it if it doesn't exist):

```json
{
  "mcpServers": {
    "vibe-mcp": {
      "command": "npx",
      "args": ["@vibe/mcp"]
    }
  }
}
```

#### VSCode

Create or update your VSCode MCP configuration file at `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "vibe-mcp": {
      "command": "npx",
      "args": ["@vibe/mcp"]
    }
  }
}
```

### Tools

- `get-vibe-component-metadata`: Returns metadata for a specific Vibe component (or all components if no name is provided).
- `list-vibe-public-components`: Get a list of all public @vibe/core & @vibe/core/next components names.

## Status

**Experimental:** This package is under active development and its API may change.
