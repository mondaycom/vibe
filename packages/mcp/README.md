# @vibe/mcp

A Model Context Protocol (MCP) server for the Vibe Design System, enabling LLMs and other MCP clients to interact with Vibe component metadata, icon information, and perform migration analysis.

## Usage

### Connecting AI Clients

Connect your AI client to the MCP server by following the instructions below.

#### Cursor

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-light.svg)](https://cursor.com/en/install-mcp?name=vibe&config=eyJjb21tYW5kIjoibnB4IC15IEB2aWJlL21jcCJ9)

Or manually update your Cursor MCP configuration file at `~/.cursor/mcp.json` (create it if it doesn't exist):

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

Paste this in your browser:

```cli
vscode://mcp-server/add?config=%7B%22name%22%3A%22vibe%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40vibe%2Fmcp%22%5D%7D
```

or manually update your VSCode MCP configuration file at `.vscode/mcp.json` (create it if it doesn't exist):

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
- `get-vibe-component-accessibility`: Get accessibility requirements and guidelines for Vibe components. Returns structured accessibility information extracted from component documentation.

#### Icon Tool

- `list-vibe-icons`: Get a list of all available Vibe icons from the @vibe/icons package with their descriptions, categories, and tags. Supports optional filtering by text query, category, or tags, limiting results, and including React usage examples.

#### Token Tool

- `list-vibe-tokens`: Get a list of all available Vibe design tokens from the `monday-ui-style` package. Supports optional filtering by text query, category, or limiting results. Returns token names, values, categories, and files, with optional CSS usage examples.

#### Migration Tool

- `v3-migration`: Evaluates your project for Vibe 2 to Vibe 3 migration needs according to the official migration guide. Conducts comprehensive project analysis, identifies breaking changes, and generates the necessary migration commands to resolve them.

#### Analytics Tools

The MCP server includes analytics tools that help you understand how the system is being used:

- `get-session-analytics`: View session usage patterns and active user interactions
- `get-project-analytics`: Monitor overall system performance and tool usage statistics
- `get-user-identification-info`: Learn about user identification methods available
- `demonstrate-user-identification`: See examples of how users are identified
- `get-mcpcat-system-info`: Get comprehensive information about the analytics system

### How Analytics Work

The MCP server uses MCPcat to provide insights into usage patterns while respecting your privacy:

- **Sessions**: Each AI client interaction creates a session to track engagement
- **Projects**: Group analytics by different deployments or environments
- **Events**: Records tool usage and performance data for analysis
- **Privacy**: All data is processed with built-in privacy protections

## MCPcat Analytics

This MCP server integrates with [MCPcat](https://mcpcat.io), an analytics platform for MCP servers that tracks tool usage patterns and provides insights into user interactions.

### Configuration

MCPcat is automatically initialized when the server starts. You can configure it using environment variables following [MCPcat's privacy best practices](https://docs.mcpcat.io/essentials/privacy-&-security#disabling-telemetry):

```bash
# Optional: Set your project ID from mcpcat.io dashboard
export MCPCAT_PROJECT_ID=proj_32Eb5TYmIAuxKeKCpkEnQTMSOKP

# Optional: Customize project details
export MCPCAT_PROJECT_NAME="My Vibe MCP Server"
export MCPCAT_PROJECT_DESCRIPTION="Custom Vibe MCP Server"

# Privacy controls (recommended)
export DISABLE_USER_ANALYTICS=false  # Set to true to disable all analytics
export ANONYMIZE_SESSIONS=false     # Set to true for anonymous analytics
```

### Features

- **Usage Insights**: See which tools are most popular and how they're used
- **Performance Monitoring**: Track response times and success rates
- **Privacy Controls**: Full control over data collection and privacy
- **Anonymous Mode**: Collect usage data without identifying users

### Privacy & Security

Your privacy is important. This implementation includes:

- **Data Protection**: Sensitive information is automatically redacted before any transmission
- **Local Processing**: All data processing happens on your machine
- **User Control**: You have full control over what data is collected
- **Anonymous Mode**: Option to collect usage data without identifying users
- **Easy Opt-out**: Simple environment variables to disable all analytics

### User Privacy Options

You can control how user data is handled:

- **Anonymous Mode**: Collect usage statistics without identifying users
- **Complete Opt-out**: Disable all analytics collection
- **Client Information**: Basic client details (name, platform) are used for insights

```bash
# Disable all analytics
export DISABLE_USER_ANALYTICS=true

# Use anonymous mode (no user identification)
export ANONYMIZE_SESSIONS=true
```

For more information about MCPcat and its privacy practices, visit [mcpcat.io](https://mcpcat.io).
