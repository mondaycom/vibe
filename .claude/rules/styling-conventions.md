---
paths:
  - "packages/core/src/components/**/*.module.scss"
  - "packages/components/**/*.module.scss"
---

# SCSS Modules Styling Rules

## Required Patterns

- **NEVER import anything** in `.module.scss` files
- **Use camelCase** for all class names
- **Use design tokens** instead of hardcoded values
- **Chrome 85+ compatibility** required

## Design Tokens (Required)

```scss
// ✅ Use design tokens
color: var(--primary-text-color);
margin: var(--space-8);
background: var(--secondary-background-color);

// ✅ Use new numeric spacing system
gap: var(--space-4);     // Instead of var(--spacing-small)
padding: var(--space-16); // Instead of var(--spacing-medium)
```

## Prohibited Patterns

```scss
// ❌ Never import anything
@import "~monday-ui-style/dist/mixins";

// ❌ Never use :global
:global(.someClass) { }

// ❌ Never use !important
color: red !important;

// ❌ No theme-specific rules
:global(.dark-app-theme) & { }
```

## Typography

Don't use font tokens directly - use `Text` and `Heading` components instead.

## Component Styling

Style base components via their `className` prop, not CSS selectors:

```scss
// ✅ Good - set className prop
// <BaseInput className={styles.customInput} />

// ❌ Bad - targeting with selectors
[data-vibe="base-input"] { }
button { }
```