# Package Separation Templates

These templates are used when separating a component from `@vibe/core` into its own package.

## Template Files

### Configuration Files (Copy as-is, then replace placeholders)

- **package.json** - Package configuration
- **tsconfig.json** - TypeScript configuration
- **rollup.config.mjs** - Build configuration
- **vitest.config.mjs** - Test runner configuration
- **vitest.setup.mjs** - Test setup
- **files.d.ts** - Module type declarations

### Code Templates (Use as reference, replace placeholders)

- **subdirectory-index.ts** - Component subdirectory export pattern
- **main-index.ts** - Main package export pattern

## Placeholders to Replace

| Placeholder | Example | Description |
|------------|---------|-------------|
| `{{PACKAGE_NAME}}` | `badge` | Kebab-case package name |
| `{{ComponentName}}` | `Badge` | PascalCase component name |
| `{{EnumName1}}` | `BadgeColor` | First enum name (if exists) |
| `{{EnumName2}}` | `BadgeSize` | Second enum name (if exists) |

## Quick Start

### For AI Assistants

When separating a component named "Badge":

```typescript
// 1. Gather info
const componentName = "Badge";      // PascalCase
const packageName = "badge";        // kebab-case
const enums = ["BadgeColor", "BadgeSize"];  // if component has enums

// 2. Create directories
packages/components/badge/
  src/
    Badge/
      Badge.tsx
      Badge.types.ts
      BadgeConstants.ts  // if has enums
      Badge.module.scss
      __tests__/
      index.ts  ← use subdirectory-index.ts template
    types/
      files.d.ts  ← copy from template
    index.ts  ← use main-index.ts template
  package.json  ← copy and replace placeholders
  tsconfig.json  ← copy as-is
  rollup.config.mjs  ← copy as-is
  vitest.config.mjs  ← copy as-is
  vitest.setup.mjs  ← copy as-is

// 3. Replace in subdirectory-index.ts:
{{ComponentName}} → Badge
{{EnumName1}} → BadgeColor
{{EnumName2}} → BadgeSize

// 4. Replace in main-index.ts:
{{ComponentName}} → Badge

// 5. Replace in package.json:
{{PACKAGE_NAME}} → badge
{{ComponentName}} → Badge
```

### For Developers

```bash
# 1. Create structure
COMPONENT_NAME="Badge"
PACKAGE_NAME="badge"

mkdir -p packages/components/$PACKAGE_NAME/src/$COMPONENT_NAME
mkdir -p packages/components/$PACKAGE_NAME/src/types

# 2. Copy templates
cp .cursor/templates/package-separation/{package.json,tsconfig.json,rollup.config.mjs,vitest.config.mjs,vitest.setup.mjs} \
   packages/components/$PACKAGE_NAME/

cp .cursor/templates/package-separation/files.d.ts \
   packages/components/$PACKAGE_NAME/src/types/

# 3. Replace placeholders (macOS)
sed -i '' "s/{{PACKAGE_NAME}}/$PACKAGE_NAME/g" packages/components/$PACKAGE_NAME/package.json
sed -i '' "s/{{ComponentName}}/$COMPONENT_NAME/g" packages/components/$PACKAGE_NAME/package.json

# 4. Move component files
mv packages/core/src/components/$COMPONENT_NAME/* \
   packages/components/$PACKAGE_NAME/src/$COMPONENT_NAME/

# 5. Link workspace packages
cd <VIBE_ROOT>  # Root of the monorepo
yarn install

# 6. Continue with rule file instructions...
```

## Dependencies to Add

Common dependencies to add to `package.json`:

```json
{
  "dependencies": {
    "@vibe/shared": "3.0.8",         // Almost always needed
    "@vibe/icon": "3.0.x",            // If component uses icons
    "@vibe/dialog": "3.0.x",          // If uses Dialog/Popover
    "@vibe/layout": "3.0.x",          // If uses Box/Flex
    "classnames": "^2.5.1",           // Usually needed
    "es-toolkit": "^1.39.10"          // For utilities
  }
}
```

Check the component's imports to determine which dependencies are needed.

## Reference Examples

Real packages to reference:
- **Simple component:** `packages/components/button/`
- **Component with enums:** `packages/components/tooltip/`
- **Complex component:** `packages/components/dialog/`

## Common Issues

### Issue: TypeScript can't find the package

**Solution:**
```bash
# Run yarn install at root - Yarn Workspaces creates symlinks automatically
cd <VIBE_ROOT>  # Root of the monorepo
yarn install
```

This automatically creates symlinks for all packages in `packages/components/*`. You should see:
```
node_modules/@vibe/[package-name] -> ../../packages/components/[package-name]
```

**Note:** Manual symlink creation with `ln -s` is NOT needed - Yarn Workspaces handles this automatically.

### Issue: Build fails with enum errors

**Solution:** Check that:
1. Subdirectory `index.ts` exports enums with "Enum" suffix
2. Consumer code imports enums directly (not renaming them)
3. Types and enums don't have conflicting names

### Issue: Component import fails

**Solution:** Make sure component is exported as **named export**, not default:
```typescript
// ✅ Correct
export { default as Component, ... } from "./Component";

// ❌ Wrong
export { default } from "./Component";
```

## See Also

- Main guide: `.cursor/rules/package-separation.mdc`
- Monorepo structure: `.cursor/rules/monorepo-structure.mdc`
- Naming conventions: `.cursor/rules/naming-conventions.mdc`

