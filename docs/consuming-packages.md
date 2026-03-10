# Consuming EZDS Packages

All `@ezds/*` packages are published to the **GitHub Packages** npm registry under the `ezcorp-appdev` organization.

---

## 1 — Authenticate

You need a GitHub PAT with **`read:packages`** scope.

```bash
# Generate at: https://github.com/settings/tokens/new
# Required scopes: read:packages
export NODE_AUTH_TOKEN=ghp_your_token_here
```

Add to `~/.npmrc` (or your CI environment secrets):

```
@ezds:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Or create a `.npmrc` at your project root with the same content.

---

## 2 — Install Packages

```bash
# React components + SCSS tokens
npm install @ezds/core @ezds/web @ezds/icons

# Platform-agnostic TypeScript tokens
npm install @ezds/tokens

# React Native theme objects
npm install @ezds/native

# Standalone components (tree-shakeable)
npm install @ezds/button @ezds/dialog @ezds/tooltip
```

---

## 3 — Add the Theme CSS

### Option A — Import in your app entry

```js
// Import the generated EZDS theme (light by default)
import "@ezds/web/themes/light";
```

### Option B — Link in HTML

```html
<link rel="stylesheet" href="node_modules/@ezds/web/dist/themes/light.css" />
```

### Option C — All themes (dynamic switching via `data-theme` attribute)

```js
import "@ezds/web/themes/light";
import "@ezds/web/themes/dark";
import "@ezds/web/themes/black";
```

```html
<!-- Switch themes at runtime -->
<html data-theme="dark">
```

---

## 4 — Use Tailwind Preset (optional)

```js
// tailwind.config.js
const ezdsPreset = require("@ezds/web/tailwind");

module.exports = {
  presets: [ezdsPreset],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
```

This exposes all `ezds-*` color, spacing, radius, font-size, and line-height utilities.

---

## 5 — Use Components

```tsx
import { Button } from "@ezds/core";
// or standalone:
import { Button } from "@ezds/button";

export default function App() {
  return <Button>Click me</Button>;
}
```

---

## 6 — React Native

```ts
import { lightTheme, darkTheme } from "@ezds/native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.colors["color_background_primary"],
    padding: lightTheme.spacing["space/0400"],
  },
});
```

---

## Available Packages

| Package | Description |
|---------|-------------|
| `@ezds/core` | All React components |
| `@ezds/web` | CSS tokens, themes, SCSS mixins |
| `@ezds/tokens` | Platform-agnostic TypeScript token objects |
| `@ezds/native` | React Native theme objects |
| `@ezds/icons` | SVG icon library |
| `@ezds/button` | Standalone Button component |
| `@ezds/dialog` | Standalone Dialog component |
| `@ezds/tooltip` | Standalone Tooltip component |
| `@ezds/icon` | Standalone Icon component |
| `@ezds/icon-button` | Standalone IconButton component |
| `@ezds/clickable` | Standalone Clickable primitive |
| `@ezds/hooks` | Shared React hooks |
| `@ezds/codemod` | Codemods for migration |
| `@ezds/testkit` | Playwright test utilities |
