# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The **Vibe Design System** is monday.com's official React component library, managed as a Lerna monorepo with Yarn Workspaces. The main package `@vibe/core` provides the primary component library, while specialized packages handle icons, testing utilities, codemods, and more.

## Development Commands

### Building and Testing
```bash
# Build all packages
yarn build

# Build with dependencies for specific package
sh scripts/build-dependencies.sh @vibe/core

# Run tests
yarn test
lerna run test                    # All packages
yarn workspace @vibe/core test   # Specific package

# Watch mode for testing
yarn workspace @vibe/core test:watch
```

### Linting and Formatting
```bash
# Lint all packages
yarn lint
lerna run lint

# Fix lint issues
yarn workspace @vibe/core lint:fix

# Style linting
yarn workspace @vibe/core stylelint
```

### Package Management
```bash
# Install dependencies (creates workspace symlinks)
yarn install

# Add dependency to specific package
yarn workspace @vibe/core add <dependency>
yarn workspace @vibe/core add -D <dev-dependency>

# Add dependency to root (for global tools)
yarn add -W <dependency>
```

### Storybook
```bash
# Run Storybook for all packages
yarn storybook
```

## Architecture Overview

### Monorepo Structure
- **`packages/`** - Core packages (core, icons, testkit, style, etc.)
- **`packages/components/`** - Standalone component packages (button, tooltip, dialog, etc.)
- **`components/`** - Legacy component structure (deprecated)

### Key Packages
- **`@vibe/core`** - Main component library, depends on standalone component packages
- **`@vibe/icons`** - SVG icon library
- **`@vibe/testkit`** - Playwright testing utilities
- **`@vibe/codemod`** - Code transformation tools
- **`@vibe/hooks`** - Shared React hooks
- **`@vibe/shared`** - Shared utilities and types

### Component Architecture
Components follow a systematic structure:
```
Component/
├── Component.tsx           # Main implementation
├── Component.types.ts      # TypeScript interfaces
├── Component.module.scss   # CSS Modules styles
├── ComponentConstants.ts   # Deprecated enums (if needed)
├── consts/                # Component-specific constants (organized by purpose)
├── __tests__/             # Vitest tests
├── __stories__/           # Storybook stories
└── index.ts              # Exports
```

### Package Separation Pattern
Components are extracted from `@vibe/core` into standalone packages under `packages/components/`. This follows a specific workflow:

1. **Enum Handling**: Deprecated enums are exported with "Enum" suffix to avoid conflicts with string union types
2. **Export Strategy**: Core package imports from standalone packages and re-exports selectively
3. **Workspace Linking**: Yarn Workspaces automatically creates symlinks for local package dependencies

## Development Patterns

### Component Creation Process
1. **Types first** - Define interfaces in `*.types.ts` extending `VibeComponentProps`
2. **Core component** - Use `forwardRef` pattern, mandatory `[data-vibe]` attribute
3. **Styles** - CSS Modules, use design tokens, no imports in SCSS files
4. **Tests** - Test actual behavior, verify accessibility attributes
5. **Stories** - Comprehensive Storybook examples
6. **Integration** - Add to global exports and `ComponentVibeId` enum

### Critical Requirements
- **`[data-vibe]` attribute**: Every component must include this on the root element
- **ComponentVibeId enum**: Add entry to `packages/core/src/tests/constants.ts`
- **No static properties**: Use string literals for prop values, not static properties
- **CSS Modules**: No imports allowed in `.module.scss` files

### Testing Strategy
- **Vitest** for unit tests with Testing Library
- **Playwright** for E2E tests (via `@vibe/testkit`)
- Test actual DOM behavior and accessibility attributes
- Use established test ID patterns from constants

## Specialized Workflows

### Package Separation
When extracting components from `@vibe/core`:
- Use templates from `.cursor/templates/package-separation/`
- Handle enum exports carefully (rename with "Enum" suffix)
- Update dependencies in both packages
- Run `yarn install` to create workspace symlinks
- Clear TypeScript cache (`rm -rf .rpt2_cache`)

### MCP Integration
The repository includes an MCP (Model Context Protocol) server (`@vibe/mcp`) that provides intelligent assistance for working with Vibe components. Reference the MCP documentation for API discovery and usage examples.

### Build System
- **Rollup** for bundling with TypeScript support
- **Independent versioning** via Lerna
- **Metadata generation** for component documentation
- **CSS token handling** via `monday-ui-style` package

## Important Files and Conventions

### Configuration Files
- **`lerna.json`** - Lerna configuration with independent versioning
- **`.cursor/rules/`** - Comprehensive development guidelines and patterns
- **`scripts/build-dependencies.sh`** - Build specific package with dependencies

### Key Source Locations
- **`packages/core/src/components/index.ts`** - Main component exports
- **`packages/core/src/tests/constants.ts`** - Test IDs and component identifiers
- **`packages/core/src/types/VibeComponentProps.ts`** - Base component props interface

## Migration and Legacy
- **Vibe 2 → 3**: Migration guide available in documentation
- **Legacy package**: `monday-ui-react-core` (deprecated)
- **String unions preferred** over enum constants in new components
- **Modern React patterns** - hooks, forwardRef, functional components