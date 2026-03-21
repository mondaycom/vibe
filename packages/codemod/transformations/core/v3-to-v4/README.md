# Vibe v3 to v4 Migration Transformations

This directory contains all transformation files for migrating from Vibe v3 to v4.

## Structure

```
v3-to-v4/
├── README.md                           # This file
├── {Component}-component-migration.ts  # Component-specific migrations
├── enums/                             # Enum-related migrations
│   ├── Enums-migration.ts
│   ├── enumMappings.json
│   └── __tests__/
└── __tests__/                         # Test files for migrations
    └── {Component}-component-migration.test.ts
```

## Adding New Transformations

### 1. Component Migration

For component-specific breaking changes, create a file named `{ComponentName}-component-migration.ts`:

```typescript
import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";

/**
 * Migration description:
 * 1. Change description
 * 2. Another change
 */
function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "ComponentName");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    // Apply transformations here
    migratePropsNames(j, elementPath, filePath, componentName, {
      oldPropName: "newPropName"
    });
  });
}

export default wrap(transform);
```

### 2. Add Tests

Create a corresponding test file in `__tests__/{ComponentName}-component-migration.test.ts`:

```typescript
import { defineInlineTest } from "jscodeshift/dist/testUtils";
import transform from "../{ComponentName}-component-migration";

describe("{ComponentName} Migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { ComponentName } from "@vibe/core";
<ComponentName oldPropName="value" />
    `,
    `
import { ComponentName } from "@vibe/core";
<ComponentName newPropName="value" />
    `,
    "should migrate oldPropName to newPropName"
  );
});
```

### 3. Update CLI Support

The CLI will automatically pick up new transformation files. No additional registration needed.

## Migration Types

### Component Props

- Renaming props
- Changing prop types
- Removing deprecated props
- Adding required props with defaults

### Component Names

- Renaming components
- Moving components between packages

### Imports

- Changing import paths
- Updating package names

### Enums

- Converting enums to string literals
- Renaming enum values

## Testing

Run tests for all v3-to-v4 transformations:

```bash
yarn workspace @vibe/codemod test v3-to-v4
```

Run a specific transformation test:

```bash
yarn workspace @vibe/codemod test ComponentName-component-migration
```

## Running Transformations

Once implemented, users can run the v4 migration:

```bash
npx @vibe/codemod --migration v4
```

## Notes

- All transformations should be idempotent (safe to run multiple times)
- Consider edge cases and provide helpful error messages
- Document the reasoning for each breaking change
- Update the main VIBE4_CHANGELOG.md when adding new transformations
