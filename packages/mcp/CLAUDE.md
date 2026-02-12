# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`@vibe/mcp` is a Model Context Protocol (MCP) server that exposes Vibe Design System data (component metadata, icons, design tokens, migration analysis) as tools for LLMs. It's part of the [mondaycom/vibe](https://github.com/mondaycom/vibe) monorepo.

## Commands

```bash
# Build (compile TypeScript + generate docs from Storybook stories and MDX)
yarn build

# Run tests (vitest, currently passes with no tests)
yarn test

# Start the MCP server locally
yarn start

# Debug with MCP Inspector
yarn debug

# Regenerate code examples and accessibility docs only (no tsc)
yarn generate-boilerplate
```

Build from monorepo root: `lerna run build --scope=@vibe/mcp`

## Architecture

### Entry Point and Server

`src/index.ts` is the CLI entry point (has shebang). It registers all tools with the MCP server and connects via `StdioServerTransport`. The server setup and the `MCPTool<T>` interface live in `src/server/index.ts`.

### Tool Pattern

Every tool in `src/server/tools/` exports an object conforming to `MCPTool<T>`:

```typescript
{ name, description, inputSchema (Zod), execute }
```

Tools are registered in `src/index.ts` via `addServerTool()`. To add a new tool: create the file in `src/server/tools/`, export the tool object, import and register it in `src/index.ts`.

### Metadata Services

Three services fetch remote data with in-memory caching and fetch→curl fallback (for corporate proxies):

- **`metadata-service.ts`** — component metadata from `unpkg.com/@vibe/core@latest/dist/metadata.json`
- **`icon-metadata-service.ts`** — icon metadata from `unpkg.com/@vibe/icons@latest/dist/iconsMetaData.js` (parsed via VM)
- **`token-metadata-service.ts`** — design tokens from `unpkg.com/monday-ui-style@latest/dist/index.css` (CSS custom properties)

### Build-Time Generated Assets

`scripts/extract-code-samples.js` and `scripts/extract-accessibility.js` parse Storybook `.stories.tsx` and `.mdx` files from the sibling `docs` package and output markdown files to `dist/generated/` and `dist/generated/accessibility/`. These are read at runtime by the example and accessibility tools.

## Key Dependencies

- **`@modelcontextprotocol/sdk`** — MCP protocol implementation (`McpServer`, `StdioServerTransport`)
- **`zod`** — input schema validation for all tool parameters

## Conventions

- ES modules (`"type": "module"`) — all imports use `.js` extensions
- Logging goes to `console.error` (stdout is reserved for MCP protocol communication)
- TypeScript strict mode, target ES2022
- Prettier: 120 char width, no trailing commas, no parens on single arrow params
