# Package Separation Quick Reference

## For AI: Prompt to Use

```
@.cursor/rules/package-separation.mdc Separate the [ComponentName] component into @vibe/[package-name]
```

## Full Example: Separating Badge Component

### 1. Inspect the Component

```bash
# Check what files exist
ls -la packages/core/src/components/Badge/

# Check for enums
cat packages/core/src/components/Badge/BadgeConstants.ts

# Check dependencies (look at imports)
head -20 packages/core/src/components/Badge/Badge.tsx
```

**Found:**
- Component: `Badge.tsx`
- Types: `Badge.types.ts`
- Constants: `BadgeConstants.ts` (has `BadgeColor`, `BadgeSize` enums)
- Styles: `Badge.module.scss`
- Tests: `__tests__/`

### 2. Create Package Structure

```bash
# Set variables
COMPONENT="Badge"
PACKAGE="badge"

# Create directories
mkdir -p packages/components/$PACKAGE/src/$COMPONENT
mkdir -p packages/components/$PACKAGE/src/types

# Copy templates
cd packages/components/$PACKAGE
cp ../../../.cursor/templates/package-separation/package.json .
cp ../../../.cursor/templates/package-separation/tsconfig.json .
cp ../../../.cursor/templates/package-separation/rollup.config.mjs .
cp ../../../.cursor/templates/package-separation/vitest.config.mjs .
cp ../../../.cursor/templates/package-separation/vitest.setup.mjs .
cp ../../../.cursor/templates/package-separation/files.d.ts src/types/
```

### 3. Update package.json

Replace placeholders:
- `{{PACKAGE_NAME}}` → `badge`
- `{{ComponentName}}` → `Badge`

Add dependencies (based on imports found):
```json
{
  "dependencies": {
    "@vibe/shared": "3.0.8",
    "@vibe/icon": "3.0.9",
    "classnames": "^2.5.1",
    "es-toolkit": "^1.39.10"
  }
}
```

### 4. Move Component Files

```bash
cd packages/core/src/components/Badge
mv * ../../../../components/badge/src/Badge/
# (keep the directory, we'll delete it later)
```

### 5. Create src/Badge/index.ts

Using `subdirectory-index.ts` template:

```typescript
export { default as Badge, type BadgeProps } from "./Badge";
export {
  BadgeColor as BadgeColorEnum,
  BadgeSize as BadgeSizeEnum
} from "./BadgeConstants";
export * from "./Badge.types";
```

### 6. Create src/index.ts

Using `main-index.ts` template:

```typescript
export * from "./Badge";
```

### 7. Update Core Package

#### packages/core/package.json
Add dependency:
```json
{
  "dependencies": {
    "@vibe/badge": "3.0.0"
  }
}
```

#### packages/core/src/components/index.ts
Replace the line `export * from "./Badge";` with:
```typescript
// TODO: export * after removing enums
export {
  Badge,
  type BadgeProps,
  type BadgeColor,
  type BadgeSize
} from "@vibe/badge";
```

### 8. Find and Update All Imports

```bash
# Find all files importing Badge
grep -r "from.*Badge" packages/core/src/components/

# Update imports:
# Before: import Badge from "../Badge/Badge";
# After:  import { Badge } from "@vibe/badge";

# Before: import { BadgeColor as BadgeColorEnum } from "../Badge/BadgeConstants";
# After:  import { BadgeColorEnum } from "@vibe/badge";
```

### 9. Create Symlink

```bash
cd node_modules/@vibe
ln -s ../../packages/components/badge badge
```

### 10. Build

```bash
# Build badge package
cd packages/components/badge
yarn build

# Build core package
cd ../../../packages/core
rm -rf .rpt2_cache
yarn build
```

### 11. Verify

```bash
# Check no errors related to Badge
yarn build 2>&1 | grep -i badge

# Check tests still pass
yarn test Badge
```

## Common Commands

### Check what enums a component has
```bash
grep "export enum" packages/core/src/components/[ComponentName]/[ComponentName]Constants.ts
```

### Check dependencies
```bash
grep "^import.*from" packages/core/src/components/[ComponentName]/[ComponentName].tsx | grep "@vibe"
```

### Find all imports to update
```bash
grep -r "from.*[ComponentName]" packages/core/src/ --include="*.tsx" --include="*.ts"
```

### Verify symlink
```bash
ls -la node_modules/@vibe/[package-name]
```

### Check build output
```bash
cat packages/components/[package-name]/dist/index.d.ts
```

## Validation Checklist

After separation, verify:

- [ ] Package builds successfully (`yarn build` in package dir)
- [ ] Core builds successfully (`yarn build` in core dir)
- [ ] No TypeScript errors mentioning the component
- [ ] Tests pass
- [ ] Symlink exists in `node_modules/@vibe/`
- [ ] Component exports correctly (check `dist/index.d.ts`)
- [ ] Enums have "Enum" suffix in exports
- [ ] Consumer code imports enums directly (no renaming)
- [ ] Core package explicitly exports types (not enums)
- [ ] Stories/docs still work (if applicable)

## Rollback

If something goes wrong:

```bash
# Move files back
mv packages/components/[package-name]/src/[ComponentName]/* \
   packages/core/src/components/[ComponentName]/

# Remove package directory
rm -rf packages/components/[package-name]

# Revert changes to core package
git checkout packages/core/package.json
git checkout packages/core/src/components/index.ts

# Revert import changes
git checkout packages/core/src/components/
```

