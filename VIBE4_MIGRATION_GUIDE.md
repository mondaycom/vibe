# Vibe Design System v4 Migration Guide

> **Status**: 🚧 Under Development
>
> This guide is actively being developed alongside Vibe v4. Content will be updated as breaking changes are finalized.

## Overview

Welcome to the Vibe Design System v4 migration guide. This major version brings significant improvements to performance, accessibility, and developer experience, but requires some changes to your existing code.

## Quick Start

### Automated Migration

The easiest way to migrate to Vibe v4 is using our automated codemod:

```bash
# Install the latest version
npm install @vibe/core@4

# Run the automated migration
npx @vibe/codemod --migration v4
```

The codemod will handle most of the migration automatically, including:
- Component prop renames and updates
- Import path changes
- TypeScript type updates
- Enum to string literal conversions

### Manual Review Required

Some changes require manual attention:
- Custom CSS that uses Vibe design tokens
- Components that extend or wrap Vibe components
- Complex TypeScript type usage

## What's New in v4

### 🎯 Performance Improvements
- Reduced bundle size through tree shaking optimizations
- Lazy loading for non-critical components
- Improved rendering performance

### 🔧 Developer Experience
- Better TypeScript support with stricter types
- Simplified component APIs
- Enhanced error messages and warnings

### ♿ Accessibility Enhancements
- WCAG 2.2 compliance improvements
- Better screen reader support
- Enhanced keyboard navigation

### 🎨 Design System Evolution
- Updated design tokens
- Consistent spacing and typography
- Refined color palette

## Breaking Changes Summary

> **Note**: Detailed breaking changes are tracked in [VIBE4_CHANGELOG.md](./VIBE4_CHANGELOG.md)

### Components

<!-- This section will be populated as breaking changes are identified -->

### TypeScript Types

<!-- This section will be populated as breaking changes are identified -->

### CSS and Design Tokens

<!-- This section will be populated as breaking changes are identified -->

## Step-by-Step Migration

### 1. Prepare Your Codebase

Before migrating, ensure your codebase is ready:

```bash
# Ensure you have a clean git state
git status

# Install the latest v3 version first
npm install @vibe/core@^3.0.0

# Run tests to ensure everything works
npm test
```

### 2. Update Dependencies

Update to Vibe v4:

```bash
npm install @vibe/core@4
```

If you use other Vibe packages:

```bash
npm install @vibe/icons@4 @vibe/testkit@4
```

### 3. Run Automated Migration

```bash
npx @vibe/codemod --migration v4 --verbose
```

Options:
- `--verbose`: Shows detailed transformation logs
- `--target /path/to/code`: Specify target directory
- `--extensions tsx,ts,jsx,js`: File extensions to process

### 4. Manual Updates

Review and update:

1. **Custom CSS**: Check for usage of deprecated design tokens
2. **TypeScript**: Verify type compatibility
3. **Tests**: Update test assertions that may have changed
4. **Storybook**: Update component stories

### 5. Test and Validate

```bash
# Run type checking
npx tsc --noEmit

# Run tests
npm test

# Run linting
npm run lint

# Build your application
npm run build
```

## Component-Specific Migration

### Flex

#### Removed `"stretch"` from `justify` prop

The `"stretch"` value has been removed from the `FlexJustify` type. `justify-content: stretch` is not valid CSS in flexbox contexts, so this value had no effect.

**Before (v3):**
```tsx
<Flex justify="stretch" />
// or using the deprecated enum:
<Flex justify={FlexJustify.STRETCH} />
```

**After (v4):**
```tsx
// Remove the prop entirely (stretch had no visual effect)
<Flex />
```

**Codemod available:** The automated codemod will remove `justify="stretch"` and `justify={FlexJustify.STRETCH}` props automatically.

```bash
npx @vibe/codemod --migration v4
```

### Button

<!-- Will be populated when Button breaking changes are identified -->

### Dialog

<!-- Will be populated when Dialog breaking changes are identified -->

### Other Components

For component-specific migration details, see [VIBE4_CHANGELOG.md](./VIBE4_CHANGELOG.md).

## Common Migration Patterns

### Prop Renames

```typescript
// Before (v3)
<Button oldPropName="value" />

// After (v4)
<Button newPropName="value" />
```

### Type Updates

```typescript
// Before (v3)
import { OldTypeName } from "@vibe/core";

// After (v4)
import { NewTypeName } from "@vibe/core";
```

### Enum to String Literals

```typescript
// Before (v3)
import { ButtonSize } from "@vibe/core";
<Button size={ButtonSize.LARGE} />

// After (v4)
<Button size="large" />
```

## Troubleshooting

### Common Issues

**TypeScript Errors After Migration**

If you encounter TypeScript errors:

1. Clear your TypeScript cache: `rm -rf node_modules/.cache/typescript`
2. Restart your TypeScript server in your IDE
3. Check if you're using the latest types: `npm install @types/react@latest`

**Components Not Rendering Correctly**

1. Check browser console for errors
2. Verify all Vibe packages are updated to v4
3. Clear your build cache and rebuild

**Styling Issues**

1. Check if you're importing the correct CSS: `import "@vibe/core/tokens"`
2. Verify custom CSS doesn't override Vibe styles unintentionally
3. Check for deprecated design token usage

### Getting Help

- **Documentation**: [vibe.monday.com](https://vibe.monday.com)
- **GitHub Issues**: [Report issues](https://github.com/mondaycom/vibe/issues)
- **Discussions**: [Join discussions](https://github.com/mondaycom/vibe/discussions)

## Development Workflow for Breaking Changes

> **For Vibe maintainers and contributors**

### Adding a New Breaking Change

1. **Plan the Change**
   - Document in [VIBE4_CHANGELOG.md](./VIBE4_CHANGELOG.md)
   - Create GitHub issue for tracking
   - Get team approval

2. **Create Migration**
   - Create a new migration file in `packages/codemod/transformations/core/v3-to-v4/`
   - Add comprehensive tests
   - Test on real codebases

4. **Update Documentation**
   - Update this migration guide
   - Update component documentation
   - Add examples and common patterns

5. **Create PR**
   - Include breaking change implementation
   - Include migration codemod
   - Include documentation updates

### Testing Migrations

```bash
# Test specific migration
yarn workspace @vibe/codemod test ComponentName-component-migration

# Test all v4 migrations
yarn workspace @vibe/codemod test v3-to-v4

# Manual testing
npx @vibe/codemod --migration v4 --target /path/to/test/project
```

## Rollback Plan

If you encounter issues after migration:

1. **Revert to v3**
   ```bash
   git checkout -- .
   npm install @vibe/core@^3.0.0
   ```

2. **Report Issues**
   - Create a GitHub issue with details
   - Include error messages and code examples
   - Specify your environment and setup

3. **Gradual Migration**
   Consider migrating components one at a time rather than the entire codebase.

---

*This guide is updated regularly. Check back for the latest migration information and best practices.*