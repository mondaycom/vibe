# @ezds/mcp

A Model Context Protocol (MCP) server for the EZDS Design System, enabling LLMs and other MCP clients to interact with EZDS component metadata, icon information, and perform migration analysis.

## Usage

### Connecting AI Clients

Connect your AI client to the MCP server by following the instructions below.

#### Cursor

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-light.svg)](https://cursor.com/en/install-mcp?name=ezds&config=eyJjb21tYW5kIjoibnB4IC15IEBlenBkcy9tY3AifQ==)

Or manually update your Cursor MCP configuration file at `~/.cursor/mcp.json` (create it if it doesn't exist):

```json
{
  "mcpServers": {
    "ezds": {
      "command": "npx",
      "args": ["@ezds/mcp"]
    }
  }
}
```

#### VSCode

Paste this in your browser:

```cli
vscode://mcp-server/add?config=%7B%22name%22%3A%22ezds%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40ezds%2Fmcp%22%5D%7D
```

or manually update your VSCode MCP configuration file at `.vscode/mcp.json` (create it if it doesn't exist):

```json
{
  "servers": {
    "ezds": {
      "command": "npx",
      "args": ["@ezds/mcp"]
    }
  }
}
```

### Tools

#### Component Tools

- `get-ezds-component-metadata`: Returns metadata for a specific EZDS component (or all components if no name is provided).
- `list-ezds-public-components`: Get a list of all public @ezds/core & @ezds/core/next components names.
- `get-ezds-component-examples`: Get React usage examples for EZDS components. Returns implementation examples and patterns for specific components or all components if none specified.
- `get-ezds-component-accessibility`: Get accessibility requirements and guidelines for EZDS components. Returns structured accessibility information extracted from component documentation.

#### Icon Tool

- `list-ezds-icons`: Get a list of all available EZDS icons from the @ezds/icons package with their descriptions, categories, and tags. Supports optional filtering by text query, category, or tags, limiting results, and including React usage examples.

#### Token Tool

- `list-ezds-tokens`: Get a list of all available EZDS design tokens from the `@ezds/web` package. Supports optional filtering by text query, category, or limiting results. Returns token names, values, categories, and files, with optional CSS usage examples.

#### Migration Tool

- `v3-migration`: Evaluates your project for EZDS v2 to EZDS v3 migration needs according to the official migration guide. Conducts comprehensive project analysis, identifies breaking changes, and generates the necessary migration commands to resolve them.
