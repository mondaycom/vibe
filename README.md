<p align="center">
  <h1 align="center">EZDS — EZCORP Design System</h1>
  <p align="center">EZCORP's global design system for React web, React Native, and beyond.</p>
</p>

<p align="center">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@ezds/core">
  <a href="https://bundlephobia.com/package/@ezds/core"><img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/@ezds/core"></a>
  <a href="https://github.com/ezcorp/ezds"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/ezcorp/ezds"></a>
</p>

<p align="center">
  <a href="https://design.ezcorp.com">Documentation</a> •
  <a href="https://design.ezcorp.com/?path=/docs/catalog--docs">Catalog</a> •
  <a href="https://design.ezcorp.com/?path=/story/playground--playground">Playground</a>
</p>

---

## Overview

EZDS is EZCORP's unified design system — a collection of React components, design tokens, SCSS utilities, and tooling that ensures visual consistency, accessibility, and development speed across all EZCORP products.

**Three-tier token architecture:**

```
@ezds/tokens  (platform-agnostic TS constants — hex values, numbers, strings)
    ↓
@ezds/web     (CSS custom properties + Tailwind preset + SCSS mixins/functions)
@ezds/native  (React Native StyleSheet theme objects)
    ↓
@ezds/button, @ezds/icon, @ezds/dialog, ...  (individual components)
    ↓
@ezds/core    (aggregator re-exporting all components)
```

---

## Installation

EZDS packages are published to GitHub Packages under the `@ezds` scope.

### Configure your registry

Add the following to your project's `.npmrc`:

```
@ezds:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install

```bash
npm install @ezds/core
# or
yarn add @ezds/core
```

### Load theme tokens

Import the light theme CSS in your root application file:

```javascript
import "@ezds/web/themes/light";
```

For dark or black themes:

```javascript
import "@ezds/web/themes/dark";
// or
import "@ezds/web/themes/black";
```

Apply the theme attribute to your root element:

```html
<body data-theme="light">
  <!-- or data-theme="dark" / data-theme="black" -->
</body>
```

---

## Usage

```javascript
import { Button, Icon, Dialog } from "@ezds/core";

function MyComponent() {
  return <Button kind="primary">Save</Button>;
}
```

---

## Package Ecosystem

| Package | Description |
|---------|-------------|
| [`@ezds/core`](./packages/core/README.md) | Main component library (aggregator) |
| [`@ezds/tokens`](./packages/tokens) | Platform-agnostic design tokens (TS constants) |
| [`@ezds/web`](./packages/web/README.md) | CSS custom properties, Tailwind preset, SCSS mixins |
| [`@ezds/native`](./packages/native) | React Native theme objects (scaffold) |
| [`@ezds/icons`](./packages/icons/README.md) | SVG icon library |
| [`@ezds/hooks`](./packages/hooks) | Shared React hooks |
| [`@ezds/testkit`](./packages/testkit) | Playwright E2E testing utilities |
| [`@ezds/codemod`](./packages/codemod/README.md) | Migration codemods and CLI tools |
| [`@ezds/storybook-blocks`](./packages/storybook-blocks/README.md) | Storybook documentation components |
| [`@ezds/mcp`](./packages/mcp/README.md) | MCP server for AI-assisted development |

### Standalone components

Individual components are also available as standalone packages:

```bash
yarn add @ezds/button @ezds/icon @ezds/dialog @ezds/tooltip
```

---

## Design Tokens

EZDS uses a three-mode token system: **Light**, **Dark**, and **Black**.

Tokens are defined in Figma across 7 collections and compiled to `@ezds/tokens` as TypeScript constants:

| Collection | CSS prefix | Description |
|---|---|---|
| `colors` | `--ezds-color-*` | Semantic color tokens (250 values × 3 modes) |
| `dimensions` | `--ezds-space-*`, `--ezds-radius-*` | Spacing, radius, border, shadow |
| `typography` | `--ezds-font-size-*`, `--ezds-font-family-*` | Type scale and font families |
| `motion` | `--ezds-motion-*` | Animation durations and easing curves |
| `_primitives` | — | Raw palette (internal use only) |

```typescript
import { colors, dimensions, typography, motion } from "@ezds/tokens";

const primaryBg = colors.light["color/background/primary"]; // "#ffffff"
const spacing400 = dimensions["space/0400"];                // 16
```

---

## Tailwind Integration

```javascript
// tailwind.config.js
import ezdsPreset from "@ezds/web/tailwind";

export default {
  presets: [ezdsPreset],
};
```

---

## MCP Server

EZDS ships an MCP (Model Context Protocol) server for AI-assisted development. It enables component discovery, usage examples, icon search, and token lookup directly inside AI coding tools.

See the [`@ezds/mcp` docs](./packages/mcp/README.md) for setup instructions.

---

## Development

This is a Lerna monorepo with Yarn Workspaces.

```bash
# Install all dependencies
yarn install

# Build all packages
yarn build

# Run tests
yarn test

# Run Storybook
yarn storybook
```

Package-specific commands:

```bash
yarn workspace @ezds/core test
yarn workspace @ezds/core test:watch
yarn workspace @ezds/web lint:fix
```

---

## Contributing

EZDS is an internal EZCORP project. For questions or contributions, open an issue in the [GitHub repo](https://github.com/ezcorp/ezds).

---

## Legacy Migration

Coming from `monday-ui-react-core` (legacy Vibe 2/3)? Use the included codemod:

```bash
npx @ezds/codemod
```

See the [migration guide](./packages/docs/src/pages/migration-guide/) for step-by-step instructions.
