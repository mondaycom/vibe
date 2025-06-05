# @vibe/mcp

A Model Context Protocol (MCP) server for the Vibe Design System, enabling LLMs and other MCP clients to interact with Vibe component metadata, icon information, and perform migration analysis.

## Usage

### Connecting AI Clients

Connect your AI client to the MCP server by following the instructions below.

#### Cursor

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-light.svg)](https://cursor.com/install-mcp?name=vibe&config=eyJjb21tYW5kIjoibnB4IC15IEB2aWJlL21jcCJ9)

Or manually update your Cursor configuration file at `~/.cursor/mcp.json` (create it if it doesn't exist):

```json
{
  "mcpServers": {
    "vibe": {
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
    "vibe": {
      "command": "npx",
      "args": ["@vibe/mcp"]
    }
  }
}
```

### Tools

#### Component Tools

- `get-vibe-component-metadata`: Returns metadata for a specific Vibe component (or all components if no name is provided).
- `list-vibe-public-components`: Get a list of all public @vibe/core & @vibe/core/next components names.
- `get-vibe-component-examples`: Get React usage examples for Vibe components. Returns implementation examples and patterns for specific components or all components if none specified.

#### Icon Tool

- `list-vibe-icons`: Get a list of all available Vibe icons from the @vibe/icons package with their descriptions, categories, and tags. Supports optional filtering by text query, category, or tags, limiting results, and including React usage examples.

#### Migration Tool

- `v3-migration`: Evaluates your project for Vibe 2 to Vibe 3 migration needs according to the official migration guide. Conducts comprehensive project analysis, identifies breaking changes, and generates the necessary migration commands to resolve them.

## Status

**Experimental:** This package is under active development and its API may change.
