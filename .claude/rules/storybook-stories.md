---
paths:
  - "packages/docs/**/*.stories.tsx"
  - "packages/docs/**/*.mdx"
---

# Storybook Stories (CSF 3.0)

## Required Story Structure

```typescript
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "@vibe/core";

export default {
  title: "Components/ComponentName",
  component: ComponentName
} satisfies Meta<typeof ComponentName>;

type Story = StoryObj<typeof ComponentName>;

// REQUIRED: Interactive overview story
export const Overview: Story = {
  render: args => <ComponentName {...args} />
};

// Other stories with specific props
export const SpecificExample: Story = {
  render: () => <ComponentName size="large" variant="primary" />
};
```

## Required Patterns

- **CSF 3.0 format** with explicit `render` functions
- **Overview story must be interactive** with controls
- **Use string literals** for props: `size="large"` not `size={Component.sizes.LARGE}`
- **No story-specific `args`** - set props in `render` function
- **No external helpers** - define utilities in same file if needed

## Prop Values

```typescript
// ✅ Modern approach
render: () => <Button kind="primary" size="small">Click me</Button>

// ❌ Legacy approach
render: () => <Button kind={Button.kinds.PRIMARY} size={Button.sizes.SMALL}>
```

## MDX Requirements

Accompanying `.mdx` file must include:
- Usage guidelines for **designers and product managers**
- Do's and Don'ts using `<ComponentRules />` component
- Focus on **user experience principles**, not implementation details