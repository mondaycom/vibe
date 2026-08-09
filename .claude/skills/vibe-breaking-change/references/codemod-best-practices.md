# Codemod Best Practices for Vibe Breaking Changes

## Lessons Learned from Real Implementation

This guide covers critical lessons learned from implementing the Icon component prop renames codemod, including major pitfalls to avoid.

## ❌ Common Mistakes to Avoid

### 1. Using Non-Existent Functions

**WRONG:**
```typescript
import { renameProp } from "../../../src/utils"; // ❌ Doesn't exist

elements.forEach(elementPath => {
  if (isPropExists(j, elementPath, "oldProp")) {
    renameProp(j, elementPath, "oldProp", "newProp"); // ❌ Function doesn't exist
  }
});
```

**CORRECT:**
```typescript
import { migratePropsNames } from "../../../src/utils"; // ✅ Real function

elements.forEach(elementPath => {
  migratePropsNames(j, elementPath, filePath, componentName, {
    oldProp: "newProp",
    anotherOld: "anotherNew"
  }); // ✅ Handles all props in one efficient call
});
```

### 2. Wrong Import Path Detection

**WRONG:**
```typescript
// This only finds "monday-ui-react-core" imports, not "@vibe/core"
const imports = getCoreImportsForFile(root);
```

**CORRECT:**
```typescript
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";

// This finds "@vibe/core" imports correctly
const imports = getImports(root, NEW_CORE_IMPORT_PATH);
```

### 3. Inefficient Multiple Loops

**WRONG:**
```typescript
elements.forEach(elementPath => {
  // Separate check for each prop - inefficient!
  if (isPropExists(j, elementPath, "iconLabel")) {
    renameProp(j, elementPath, "iconLabel", "label");
  }
  if (isPropExists(j, elementPath, "iconType")) {
    renameProp(j, elementPath, "iconType", "type");
  }
  if (isPropExists(j, elementPath, "iconSize")) {
    renameProp(j, elementPath, "iconSize", "size");
  }
});
```

**CORRECT:**
```typescript
elements.forEach(elementPath => {
  // Single call handles all prop renames efficiently
  migratePropsNames(j, elementPath, filePath, componentName, {
    iconLabel: "label",
    iconType: "type",
    iconSize: "size"
  });
});
```

## 🔧 Proven Codemod Pattern

Based on successful v2-v3 codemods, use this proven pattern:

```typescript
import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

function transform({ j, root, filePath }: TransformationContext) {
  // 1. Find imports from correct package
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);

  // 2. Check if component is imported
  const componentName = getComponentNameOrAliasFromImports(j, imports, "ComponentName");
  if (!componentName) return;

  // 3. Find all component elements
  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  // 4. Migrate props efficiently
  elements.forEach(elementPath => {
    migratePropsNames(j, elementPath, filePath, componentName, {
      oldProp1: "newProp1",
      oldProp2: "newProp2",
      oldProp3: "newProp3"
    });
  });
}

export default wrap(transform);
```

## ⚠️ JSCodeshift Formatting Artifacts

### The Problem

JSCodeshift can add unnecessary parentheses around JSX elements, even in files that **don't use the target component**.

**Example:**
```jsx
// Original code
<div className="wrapper">
  <span>Content</span>
</div>

// After codemod (WRONG!)
(<div className="wrapper">
  <span>Content</span>
</div>)
```

### Root Cause

JSCodeshift parses and rebuilds the AST, which can introduce formatting changes even when no transforms are applied.

### Prevention Strategies

#### 1. Target Specific Files
```bash
# WRONG - transforms entire directory
npx jscodeshift -t transform.js packages/core/src/components/

# BETTER - target specific files known to use the component
npx jscodeshift -t transform.js packages/core/src/components/Button/Button.tsx packages/core/src/components/IconButton/IconButton.tsx
```

#### 2. Use Dry Run First
```bash
# Always run dry first to see what changes
npx jscodeshift -t transform.js packages/ --dry

# Review the output carefully
# Only proceed if changes look correct
npx jscodeshift -t transform.js packages/
```

#### 3. Filter by Import Detection
```typescript
function transform({ j, root, filePath }: TransformationContext) {
  // Only proceed if file actually imports the component
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "ComponentName");
  if (!componentName) return; // ✅ Exit early, no changes

  // ... rest of transform
}
```

### Cleanup Process

If formatting artifacts slip through:

```bash
# 1. Identify files with unintended changes
git diff HEAD~1 HEAD --name-only | grep -E "(Checkbox|AvatarGroup|Dropdown)"

# 2. Review each file
git diff HEAD~1 HEAD -- path/to/file.tsx

# 3. Manual cleanup
# Remove extra parentheses: (<div> → <div>
# Fix indentation as needed

# 4. Commit cleanup
git add .
git commit -m "fix: remove codemod formatting artifacts"
```

## 🧪 Testing Best Practices

### Test Development
```typescript
// Cover edge cases in tests
defineInlineTest(
  transform,
  {},
  prependImport('const element = <Icon icon={Home} iconLabel="Home" iconType="svg" iconSize={24} />;'),
  prependImport('const element = <Icon icon={Home} label="Home" type="svg" size={24} />;'),
  "should rename all three props"
);

// Test aliased imports
defineInlineTest(
  transform,
  {},
  `import { Icon as VibeIcon } from "@vibe/core";
   const element = <VibeIcon icon={Home} iconLabel="Home" />;`,
  `import { Icon as VibeIcon } from "@vibe/core";
   const element = <VibeIcon icon={Home} label="Home" />;`,
  "should work with aliased imports"
);
```

### Expected Results
- **7-8 out of 8 tests pass** - indicates working codemod
- **1 formatting test failure** - expected jscodeshift artifact (acceptable)
- **0 tests pass** - indicates broken codemod logic

## 📝 Documentation Integration

### Migration Guide Entry
```markdown
## ComponentName API Changes

### Breaking Changes
**Props Renamed:**
- `oldProp` → `newProp`
- `anotherOld` → `anotherNew`

### Automated Migration
```bash
npx @vibe/codemod component-name-props-update src/
```

### Manual Migration
[Include before/after examples]
```

### Changelog Entry
```markdown
#### ComponentName v2.0.0
- **BREAKING**: Renamed props for better consistency
- **Migration**: Use `npx @vibe/codemod component-name-props-update`
- **Task**: Monday.com #[task-id]
```

## 🚀 Success Criteria

A successful codemod implementation should:

1. **✅ Follow established patterns** from v2-v3 codemods
2. **✅ Use correct utility functions** (migratePropsNames, getImports)
3. **✅ Handle import paths correctly** (NEW_CORE_IMPORT_PATH)
4. **✅ Be efficient** (single loop, batch prop updates)
5. **✅ Have comprehensive tests** (7+ passing test cases)
6. **✅ Minimize formatting artifacts** (targeted file updates)
7. **✅ Include cleanup process** (for any artifacts that slip through)

## 🔄 Iteration Process

1. **RED**: Write failing tests first
2. **GREEN**: Implement minimal working codemod
3. **REFACTOR**: Fix issues, improve efficiency
4. **CLEANUP**: Remove formatting artifacts
5. **DOCUMENT**: Update migration guide and changelog
6. **VALIDATE**: Test on real codebase examples