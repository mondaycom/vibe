# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the Vibe Design System repository.

## Overview

Vibe Design System is monday.com's comprehensive React UI library and design system. This monorepo contains multiple packages that work together to provide components, styling, icons, development tools, and AI assistance for building React applications.

**Key Resources:**
- [Documentation](https://vibe.monday.com)
- [Component Catalog](https://vibe.monday.com/?path=/docs/catalog--docs)
- [Playground](https://vibe.monday.com/?path=/story/playground--playground)
- [Migration Guide](http://vibe.monday.com/?path=/docs/migration-guide--docs) (from Vibe 2 to Vibe 3)

## Monorepo Structure

This is a Lerna-managed monorepo using independent versioning. Key packages:

### Core Libraries
- **`@vibe/core`** (`packages/core/`) — Main component library with 80+ React components
- **`@vibe/icons`** (`packages/icons/`) — 500+ SVG icons as React components
- **`@vibe/style`** (`packages/style/`) — CSS foundations, design tokens, and styling utilities (published as `monday-ui-style`)
- **`@vibe/hooks`** (`packages/hooks/`) — Reusable React hooks

### Development Tools
- **`@vibe/codemod`** (`packages/codemod/`) — Automated migration scripts and CLI tools
- **`@vibe/testkit`** (`packages/testkit/`) — Testing utilities for Playwright
- **`@vibe/mcp`** (`packages/mcp/`) — MCP server providing AI assistance for Vibe components

### Documentation & Storybook
- **`@vibe/docs`** (`packages/docs/`) — Documentation site and Storybook stories
- **`@vibe/storybook-blocks`** (`packages/storybook-blocks/`) — Custom Storybook blocks and addons

### Infrastructure
- **`@vibe/shared`** (`packages/shared/`) — Shared utilities and helpers
- **`@vibe/config`** (`packages/config/`) — Shared configuration (ESLint, etc.)
- **`@vibe/base`** (`packages/base/`) — Base components and primitives

## Common Commands

```bash
# Install dependencies (runs postinstall to build core deps)
yarn install

# Build all packages
yarn build

# Build specific package and its dependencies
yarn build:package @vibe/core

# Run tests across all packages
yarn test

# Start Storybook (documentation/development environment)
yarn storybook

# Lint all packages
yarn lint
```

### Working with Specific Packages

```bash
# Build single package from monorepo root
lerna run build --scope=@vibe/core

# Run package-specific commands
cd packages/core && yarn build
cd packages/core && yarn test
```

## Development Workflow

### Component Development
1. Components live in `packages/core/src/components/`
2. Each component has its own directory with:
   - `Component.tsx` — Main component implementation
   - `Component.types.ts` — TypeScript interfaces
   - `Component.module.scss` — Component-specific styles
   - `__tests__/Component.test.tsx` — Jest tests
   - `__stories__/Component.stories.tsx` — Storybook stories (in docs package)

### Styling Approach
- Uses CSS Modules with SCSS
- Design tokens from `@vibe/style` package
- CSS custom properties for theming
- BEM-like naming conventions in CSS classes

### Icons Development
- Icons are in `packages/icons/src/`
- Generated from SVG files using build scripts
- Each icon exports as both React component and SVG path
- Metadata is auto-generated for search and categorization

## Architecture & Conventions

### TypeScript
- Strict mode enabled across all packages
- Target ES2022
- Shared TypeScript configurations in `@vibe/config`

### Styling
- CSS Modules with `.module.scss` files
- Design tokens accessible via CSS custom properties
- Responsive design utilities
- Dark/light theme support

### Testing
- Jest for unit tests
- Playwright for integration testing via `@vibe/testkit`
- Storybook for component testing and documentation

### Build System
- Lerna for monorepo management
- Individual package build scripts
- Rollup/Webpack for bundling
- TypeScript compilation

## Key Files and Directories

### Root Level
- `lerna.json` — Lerna configuration (independent versioning)
- `package.json` — Root workspace configuration
- `packages/` — All packages live here

### Component Structure Example
```
packages/core/src/components/Button/
├── Button.tsx              # Main component
├── Button.types.ts         # TypeScript interfaces
├── Button.module.scss      # Styles
├── __tests__/
│   └── Button.test.tsx     # Tests
└── index.ts               # Exports
```

### Style Structure
```
packages/style/src/
├── tokens/                # Design tokens (colors, spacing, etc.)
├── mixins/                # SCSS mixins
├── components/            # Component-specific styles
└── foundations/           # Base styles, reset, typography
```

## MCP Integration

Vibe includes an MCP (Model Context Protocol) server that provides AI assistance for working with Vibe components. The MCP server can help:

- Discover component APIs and props
- Get usage examples and best practices
- Find appropriate icons by name or category
- Understand component relationships and patterns
- Get migration guidance between versions

**MCP Server (`packages/mcp/`):**
- Entry point: `src/index.ts` (CLI with shebang)
- Tools in `src/server/tools/` following `MCPTool<T>` interface
- Fetches component metadata from published packages
- Generates code examples from Storybook stories
- Provides accessibility guidance

## Component Guidelines

### Props Conventions
- Use `className` for custom CSS classes
- Include `id` and `data-testid` props for testing
- Use `children` for content when appropriate
- Follow React prop naming conventions

### Styling Guidelines
- Use CSS Modules for component styles
- Leverage design tokens from `@vibe/style`
- Support both light and dark themes
- Follow responsive design patterns

### Testing Patterns
- Test component rendering and basic functionality
- Use `@testing-library/react` for DOM testing
- Include accessibility tests where relevant
- Test prop variations and edge cases

## Migration Notes

Vibe 3 (current) replaced Vibe 2 (`monday-ui-react-core`). Key changes:
- New package structure (`@vibe/*` scoped packages)
- Updated component APIs and prop names
- Improved TypeScript support
- Enhanced accessibility
- Better tree-shaking and bundle size optimization

Use the [migration guide](http://vibe.monday.com/?path=/docs/migration-guide--docs) and `@vibe/codemod` for automated migrations.