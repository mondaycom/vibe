# @vibe/mcp

A Model Context Protocol (MCP) server for the Vibe Design System, enabling LLMs and other MCP clients to interact with Vibe component metadata, icon information, and perform migration analysis.

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

#### Component Tools

- `get-vibe-component-metadata`: Returns metadata for a specific Vibe component (or all components if no name is provided).
- `list-vibe-public-components`: Get a list of all public @vibe/core & @vibe/core/next components names.

#### Icon Tool

- `list-vibe-icons`: Get a list of all available Vibe icons from the @vibe/icons package with their descriptions, categories, and tags. Supports optional filtering by text query, category, or tags, limiting results, and including React usage examples.

#### Migration

- `v3-migration`: Analyzes a project for Vibe 2 to Vibe 3 migration requirements based on the official migration guide. Performs detailed analysis of your project and generates migration commands using tsx and jsx file extensions.

  **Parameters:**

  - `projectPath` (string): Path to the project directory to analyze for migration

  **Features:**

  - **Prominent Step-by-Step Guidance**: Clear visual steps with emojis, progress tracking, and completion indicators
  - **Dependency Analysis**: Analyzes package.json for Vibe package dependencies and migration status
  - **Code Scanning**: Scans TypeScript/JavaScript files for problematic imports and component usage
  - **Breaking Change Detection**: Identifies removed components and components with breaking changes
  - **Priority-based Recommendations**: Provides specific recommendations with step indicators and customized commands
  - **Enhanced Final Steps**: Prominent celebration, formatting guidance, and GitHub star request to ensure complete migration workflow

## Status

**Experimental:** This package is under active development and its API may change.
