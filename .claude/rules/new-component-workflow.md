---
paths:
  - "packages/core/src/components/**/index.ts"
---

# New Component Implementation

**Triggered when**: Creating new components or working on component exports.

## Implementation Order

1. **Research First** - Study 2-3 similar existing components
2. **Types** - `ComponentName.types.ts` extending `VibeComponentProps`
3. **Component** - `ComponentName.tsx` with forwardRef pattern
4. **Styles** - `ComponentName.module.scss` with design tokens
5. **Tests** - `__tests__/ComponentName.test.tsx`
6. **Export** - Update `index.ts` and global exports

## Critical Requirements

- **`[data-vibe]` attribute** on root element
- **Add to `ComponentVibeId` enum** in `constants.ts`
- **Use string literals** for prop values
- **Follow accessibility patterns**

## Global Export Pattern

```typescript
// In component index.ts
export { default as ComponentName } from "./ComponentName";
export * from "./ComponentName.types";

// In packages/core/src/components/index.ts (alphabetical)
export { ComponentName } from "./ComponentName";
```

## Validation Steps

1. TypeScript compilation passes
2. Tests pass: `yarn test src/components/ComponentName/`
3. Lint: `yarn lint src/components/ComponentName/ --fix`
4. Component follows established Vibe patterns