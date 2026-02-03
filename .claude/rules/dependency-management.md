---
paths:
  - "**/package.json"
---

# Dependency Management

## Constraints

- **React 16.x.x ONLY** - Do not suggest newer React versions
- **Minimize dependencies** - Check existing solutions first
- **Justify new packages** - Must be absolutely essential

## Before Adding Dependencies

1. **Check existing `package.json` files** for similar functionality
2. **Consider existing Vibe components** and utilities
3. **Evaluate bundle size impact**

## Yarn Workspace Commands

```bash
# Add to specific package
yarn workspace @vibe/component-name add dependency-name

# Add to root (global tools)
yarn add -W dependency-name

# Add dev dependency
yarn workspace package-name add -D dependency-name
```

## Criteria for New Dependencies

Only add if:
- Absolutely required for functionality
- Significantly reduces development overhead
- Popular library with established best practices
- Benefits clearly outweigh bundle size cost