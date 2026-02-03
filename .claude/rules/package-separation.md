# Package Separation Guide

**Purpose**: This rule provides a systematic approach for separating components from the `@vibe/core` package into standalone packages in the monorepo (e.g., `@vibe/tooltip`, `@vibe/dialog`). Following this pattern ensures consistency, proper enum handling, and maintainability.

## When to Use This Rule

Use this rule when:

- Separating a component from `packages/core/src/components/` into a new package under `packages/components/`
- The component has deprecated enums that need special export handling
- You need to maintain backward compatibility while avoiding enum exposure

## How Claude Should Use This Rule

When a user asks to separate a component:

1. **Gather Information:**
   - Component name (e.g., `Badge`)
   - Package name (typically kebab-case of component name, e.g., `badge`)
   - Check if component has enums (look for `ComponentNameConstants.ts`)
   - Identify dependencies (check imports in the component)

2. **Use Templates:**
   - Copy files from `.cursor/templates/package-separation/`
   - Replace all placeholders (see Template Files section below)
   - Create the necessary directory structure

3. **Follow the Step-by-Step Process:**
   - Create directories
   - Move component files
   - Set up exports (this is CRITICAL - see section 4)
   - Update core package
   - Update imports
   - Build and verify

4. **Verify:**
   - Run build commands
   - Check for TypeScript errors
   - Confirm enum imports are correct (no renaming in consumer code)

## Package Structure Pattern

All separated packages should follow this structure (using Tooltip as the reference example):

```
packages/components/tooltip/
├── src/
│   ├── Tooltip/
│   │   ├── Tooltip.tsx          # Main component
│   │   ├── Tooltip.types.ts     # Type definitions (string unions)
│   │   ├── TooltipConstants.ts  # Deprecated enums
│   │   ├── Tooltip.module.scss  # Styles
│   │   ├── __tests__/           # Tests
│   │   └── index.ts             # Subdirectory exports (CRITICAL)
│   ├── index.ts                 # Main package exports
│   └── types/
│       └── files.d.ts           # Module declarations
├── package.json
├── tsconfig.json
├── rollup.config.mjs
└── vitest.config.mjs
```

## Template Files

Template files are available in `.cursor/templates/package-separation/`:

- `package.json` - Package configuration with placeholders
- `tsconfig.json` - TypeScript configuration
- `rollup.config.mjs` - Rollup bundler configuration
- `vitest.config.mjs` - Test configuration
- `vitest.setup.mjs` - Test setup file
- `subdirectory-index.ts` - Template for component subdirectory exports
- `main-index.ts` - Template for main package exports
- `files.d.ts` - TypeScript module declarations

**Placeholders to replace:**

- `{{PACKAGE_NAME}}` - kebab-case package name (e.g., `my-component`)
- `{{ComponentName}}` - PascalCase component name (e.g., `MyComponent`)
- `{{EnumName1}}`, `{{EnumName2}}` - Enum names if component has deprecated enums

## Step-by-Step Separation Process

### 1. Create Package Directory Structure

Create the new package under `packages/components/[component-name]/`:

```bash
# Create directories
mkdir -p packages/components/[component-name]/src/[ComponentName]
mkdir -p packages/components/[component-name]/src/types

# Copy template files and replace placeholders
cp .cursor/templates/package-separation/package.json packages/components/[component-name]/
cp .cursor/templates/package-separation/tsconfig.json packages/components/[component-name]/
cp .cursor/templates/package-separation/rollup.config.mjs packages/components/[component-name]/
cp .cursor/templates/package-separation/vitest.config.mjs packages/components/[component-name]/
cp .cursor/templates/package-separation/vitest.setup.mjs packages/components/[component-name]/
cp .cursor/templates/package-separation/files.d.ts packages/components/[component-name]/src/types/

# Then replace {{PACKAGE_NAME}} and {{ComponentName}} in these files
```

**Claude Instructions:**
When helping with package separation:

1. Copy the template files from `.cursor/templates/package-separation/`
2. Replace all `{{PACKAGE_NAME}}` with the actual package name (kebab-case)
3. Replace all `{{ComponentName}}` with the actual component name (PascalCase)
4. Replace enum placeholders with actual enum names from the component
5. Update dependencies in `package.json` based on what the component imports

### 2. Move Component Files

Move these files from `packages/core/src/components/[ComponentName]/` to the new package:

- Component source files (`.tsx`, `.ts`)
- Types files (`.types.ts`)
- Constants files (with enums)
- Styles (`.module.scss`)
- Tests (`__tests__/`)
- Stories (`__stories__/`) if applicable

**Important:** Do **NOT** create `CHANGELOG.md` files for new packages. The changelog is managed automatically by the build/release system (Lerna).

### 3. Set Up Package Configuration

#### package.json

Follow the pattern from existing separated packages. Key fields:

```json
{
  "name": "@vibe/[component-name]",
  "version": "3.0.0",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    "./package.json": "./package.json",
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "default": "./dist/index.js"
    }
  }
}
```

#### tsconfig.json, rollup.config.mjs, vitest.config.mjs

Copy these from an existing separated package (e.g., `@vibe/tooltip` or `@vibe/dialog`) and adjust as needed.

### 4. Configure Exports (CRITICAL)

This is the most important step to avoid enum/type naming conflicts.

#### Component Subdirectory Index (`src/ComponentName/index.ts`)

**Pattern:**

```typescript
// Export the component (as named export, NOT default)
export { default as ComponentName, type ComponentNameProps } from "./ComponentName";

// Export enums with "Enum" suffix to avoid conflicts with types
export { EnumName1 as EnumName1Enum, EnumName2 as EnumName2Enum } from "./ComponentNameConstants";

// Export types (string unions)
export * from "./ComponentName.types";
```

**Real Example (Tooltip):**

```typescript
export { default as Tooltip, type TooltipProps } from "./Tooltip";
export { TooltipPositions as TooltipPositionsEnum, TooltipTheme as TooltipThemeEnum } from "./TooltipConstants";
export * from "./Tooltip.types";
```

**Real Example (Dialog):**

```typescript
export { default as Dialog, type DialogProps } from "./Dialog";
export {
  HideShowEvent as DialogTriggerEventEnum,
  AnimationType as DialogAnimationTypeEnum,
  DialogPosition as DialogPositionEnum,
  DialogSize as DialogSizeEnum
} from "./DialogConstants";
export * from "./Dialog.types";
```

#### Main Package Index (`src/index.ts`)

**Pattern:**

```typescript
export * from "./ComponentName";
```

This simple wildcard re-export works because the subdirectory index already handles the enum naming.

### 5. Update Core Package Exports

Edit `packages/core/src/components/index.ts`:

**Pattern:**

```typescript
// TODO: export * after removing enums
export {
  ComponentName,
  type ComponentNameProps,
  type TypeName1,
  type TypeName2
  // ... other types, but NOT enums
} from "@vibe/component-name";
```

**Why:** This prevents deprecated enums from being exposed in the core package's public API while still exporting the types that consumers need.

**Real Example (Dialog):**

```typescript
// TODO: export * after removing enums
export {
  Dialog,
  DialogContentContainer,
  type DialogProps,
  type DialogContentContainerProps,
  type DialogType,
  type DialogSize,
  type DialogPosition,
  type DialogTriggerEvent,
  type DialogAnimationType,
  type DialogOffset,
  type DialogEvent
} from "@vibe/dialog";
```

### 6. Update Consumer Imports in Core Package

Find all files in `packages/core/src/` that import from the component and update them:

#### Component Import

**Before:**

```typescript
import ComponentName from "../ComponentName/ComponentName";
```

**After:**

```typescript
import { ComponentName } from "@vibe/component-name";
```

#### Enum Import

**CRITICAL:** Import enums with their "Enum" suffix directly, do NOT rename them.

**Wrong ❌:**

```typescript
import { EnumName as EnumNameEnum } from "@vibe/component-name";
```

**Correct ✅:**

```typescript
import { EnumNameEnum } from "@vibe/component-name";
```

**Real Example (Dialog):**

```typescript
import { DialogPositionEnum, DialogTriggerEventEnum, DialogSizeEnum } from "@vibe/dialog";
```

### 7. Link Workspace Packages

Run `yarn install` at the root to create symlinks automatically:

```bash
# From anywhere in the monorepo
cd $(git rev-parse --show-toplevel)
yarn install
```

This will automatically create symlinks in `node_modules/@vibe/` for all packages defined in the `workspaces` field of the root `package.json`. You'll see:

```
node_modules/@vibe/component-name -> ../../packages/components/component-name
```

**Note:** The monorepo uses Yarn Workspaces, which automatically links all packages in `packages/*` and `packages/components/*`. Manual symlink creation with `ln -s` is NOT needed.

### 8. Update Dependencies

#### In the new package's package.json

Add dependencies for any Vibe packages it uses:

```json
{
  "dependencies": {
    "@vibe/shared": "3.0.x",
    "@vibe/icon": "3.0.x"
    // ... other dependencies
  }
}
```

#### In core package's package.json

Add the new package as a dependency:

```json
{
  "dependencies": {
    "@vibe/component-name": "3.0.0"
  }
}
```

### 9. Build and Test

```bash
# Build the new package
cd packages/components/component-name
yarn build

# Build core package
cd packages/core
rm -rf .rpt2_cache  # Clear TypeScript cache
yarn build

# Run tests
yarn test
```

## Common Patterns and Gotchas

### Pattern: Type and Enum with Same Name

When you have a type and enum with the same name (e.g., `DialogSize` type and `DialogSize` enum):

1. **In Types file:** Define as string union

   ```typescript
   export type DialogSize = "none" | "small" | "medium" | "large";
   ```

2. **In Constants file:** Define as deprecated enum

   ```typescript
   /** @deprecated */
   export enum DialogSize {
     NONE = "none",
     SMALL = "small",
     MEDIUM = "medium",
     LARGE = "large"
   }
   ```

3. **In Subdirectory index:** Export enum with "Enum" suffix

   ```typescript
   export { DialogSize as DialogSizeEnum } from "./DialogConstants";
   export * from "./Dialog.types"; // Exports DialogSize type
   ```

4. **In Consumer code:** Import both explicitly
   ```typescript
   import { type DialogSize, DialogSizeEnum } from "@vibe/dialog";
   ```

### Gotcha: Default vs Named Exports

**Always use named exports** for components in separated packages, not default exports at the package level.

**Why:** This maintains consistency with other separated packages and allows for cleaner import patterns.

### Gotcha: Wildcard Exports and Enums

**Never** use `export * from "./ComponentConstants"` in the subdirectory index if you need to rename enums. Always use explicit named exports with aliases.

### Gotcha: TypeScript Cache

After making export changes, always clear the TypeScript cache:

```bash
rm -rf .rpt2_cache
rm -rf node_modules/.cache
```

### Gotcha: Module Resolution

If TypeScript can't find the new package, check:

1. Is the package built? (`dist/` folder exists)
2. Did you run `yarn install` at the root? (creates workspace symlinks)
3. Is the symlink created? Check with `ls -la node_modules/@vibe/component-name`
4. Is `package.json` configured with correct `main` and `types` fields?
5. Did you clear the TypeScript cache?

**Why symlinks are needed:** Yarn Workspaces creates symlinks so that `import { Component } from "@vibe/component-name"` resolves to `packages/components/component-name/dist/` instead of looking for a published npm package.

## Checklist for Package Separation

Use this checklist when separating a component:

- [ ] Created package directory structure under `packages/components/`
- [ ] Moved all component files (source, types, constants, styles, tests)
- [ ] Created `package.json` with correct exports configuration (DO NOT create CHANGELOG.md)
- [ ] Copied/configured `tsconfig.json`, `rollup.config.mjs`, `vitest.config.mjs`
- [ ] Set up subdirectory index with enum renaming (`src/ComponentName/index.ts`)
- [ ] Set up main package index (`src/index.ts`)
- [ ] Updated core package's `components/index.ts` with explicit exports
- [ ] Updated all consumer imports in core package (component and enums)
- [ ] Added dependencies to both packages' `package.json`
- [ ] Ran `yarn install` at root to create workspace symlinks
- [ ] Built the new package successfully
- [ ] Cleared TypeScript cache and built core package successfully
- [ ] Verified no TypeScript errors related to the component
- [ ] Updated or verified tests pass
- [ ] Verified Storybook stories work (if applicable)

## Example Command Sequence

```bash
# 1. Create package structure
mkdir -p packages/components/my-component/src/MyComponent

# 2. Move files (adjust paths as needed)
mv packages/core/src/components/MyComponent/* packages/components/my-component/src/MyComponent/

# 3. Copy config files from templates
cp .cursor/templates/package-separation/package.json packages/components/my-component/
cp .cursor/templates/package-separation/tsconfig.json packages/components/my-component/
cp .cursor/templates/package-separation/rollup.config.mjs packages/components/my-component/
# ... edit package.json to replace {{PACKAGE_NAME}} and {{COMPONENT_NAME}}

# 4. Link workspace packages (creates symlinks automatically)
cd <VIBE_ROOT>  # Root of the monorepo
yarn install

# 5. Build and test
cd packages/components/my-component
yarn build

cd ../../core
rm -rf .rpt2_cache
yarn build
```

## Claude Implementation Notes

When performing package separation:

- **Follow the systematic process exactly** - don't skip steps
- **Use templates** from `.cursor/templates/package-separation/` as starting point
- **Export enums with "Enum" suffix** to avoid type conflicts
- **Use named exports** for components, not default exports
- **Clear TypeScript cache** after making export changes
- **Run `yarn install` at root** to create workspace symlinks automatically
- **Update both packages' dependencies** appropriately
- **Test thoroughly** after separation - build, tests, TypeScript compilation
- **Never rename enum imports** - import them with their "Enum" suffix directly
- **Don't create CHANGELOG.md** - it's managed automatically by Lerna

## Related Rules

- See naming-conventions.md for component naming standards
- See file-structures.md for component file organization
- See monorepo-structure.md for overall monorepo architecture

## References

Existing separated packages to use as examples:

- `packages/components/tooltip/` - Simple component with enums
- `packages/components/dialog/` - Complex component with multiple enums
- `packages/components/button/` - Simple component
- `packages/components/icon/` - Component with special considerations