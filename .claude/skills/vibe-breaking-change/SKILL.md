---
name: vibe-breaking-change
description: Implements Vibe Design System breaking changes with full workflow automation including component updates, migration guide updates, codemod generation, testing, and PR creation. Use when implementing breaking changes to Vibe components that require coordinated updates across the design system.
---

# Vibe Breaking Change Implementation

## Overview

Implements breaking changes to Vibe Design System components following the established workflow with automated validation, documentation updates, and codemod generation where applicable.

## When to Use

**Use this skill when:**
- Implementing breaking API changes to Vibe components
- Deprecating component props or methods
- Changing component behavior that affects dependent components
- Updating component interfaces that require migration documentation
- Making changes that need coordinated updates across the design system

**Do NOT use for:**
- Non-breaking enhancements or bug fixes
- Internal refactoring that doesn't affect public APIs
- Style-only changes without behavioral impact
- Emergency hotfixes that bypass normal workflow

## Quick Reference

| Phase | Actions | Validation |
|-------|---------|------------|
| 1. Analysis | Identify affected components, dependencies | Component mapping complete |
| 2. Implementation | Apply breaking change, update dependents | Tests pass locally |
| 3. Testing | Run full test suite, update failing tests | All tests green |
| 4. Documentation | Update migration guide, add codemod if deterministic | Documentation complete |
| 5. Cleanup & Delivery | lint:fix, lint, build, test → commit, push, PR with task link | All checks pass, PR ready for review |

## Core Workflow

### Phase 1: Analysis and Planning

**🔍 Comprehensive Dependency Analysis:**

```bash
# 1. Find all imports and usage across packages
grep -r "import.*ComponentName" packages/
grep -r "ComponentName" packages/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"

# 2. Find specific prop usage being changed (comprehensive search)
grep -r "oldProp=" packages/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"
find packages -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "oldProp\|deprecatedMethod"

# 3. Analyze by package structure
find packages/components -name "*.tsx" | xargs grep -l "ComponentName"  # Standalone packages
find packages/core/src -name "*.tsx" | xargs grep -l "ComponentName"    # Core package
find packages/docs -name "*.tsx" | xargs grep -l "ComponentName"        # Documentation
find packages/mcp -name "*.ts" | xargs grep -l "ComponentName"          # MCP examples
```

**📋 Analysis Checklist:**
1. **Map Dependencies:**
   - [ ] Components that import the target component
   - [ ] Components that use the target component inline
   - [ ] Hook or utility functions that reference the component
   - [ ] Documentation and example files

2. **Assess Impact Scope:**
   - [ ] Standalone component packages (packages/components/*)
   - [ ] Core package components (packages/core/src/components/*)
   - [ ] Supporting packages (docs, mcp, testkit)
   - [ ] Test files and stories

3. **Plan Migration Strategy:**
   - [ ] Order of updates (component first, then dependents)
   - [ ] TypeScript interface changes needed
   - [ ] Codemod feasibility (deterministic vs manual)
   - [ ] Documentation updates required

See `references/dependency-analysis.md` for advanced dependency mapping techniques.

**📊 Expected Findings:**
- **20-40 component files** typically need updates for major component changes
- **Multiple package types** - standalone, core, docs, examples
- **Mixed file types** - .tsx, .ts, .jsx, .js all may need updates
- **Hidden dependencies** - MCP tools, test utilities, etc.

### Phase 2: Implementation

**🏗️ Systematic Update Approach:**

**Step 1: Source Component Updates**
```typescript
// 1. Update component interface
interface ComponentProps {
  // ❌ Remove deprecated props
  // oldProp?: string;
  // deprecatedMethod?: () => void;

  // ✅ Add new props with better API
  newProp?: string;
  improvedMethod?: () => void;
}

// 2. Update component implementation
const Component = ({ newProp, ...props }: ComponentProps) => {
  // Implementation with new API
};
```

**Step 2: Internal Dependencies (same package)**
```typescript
// Update hooks, utilities, and helpers in the same package
// Example: Icon component's useIconProps hook
export default function useIconProps({
  label,        // ✅ Updated from iconLabel
  // iconLabel, // ❌ Removed
}) {
  // Implementation
}
```

**Step 3: Cross-Package Updates (systematic)**
```bash
# Process 20-40 files systematically
# Group by package for efficient updates:

# A. Standalone component packages
packages/components/tooltip/src/Tooltip/Tooltip.tsx
packages/components/button/src/Button/Button.tsx

# B. Core package components (bulk of changes)
packages/core/src/components/AttentionBox/AttentionBox.tsx
packages/core/src/components/Checkbox/Checkbox.tsx
# ... (typically 20-30 files)

# C. Supporting files
packages/mcp/src/server/tools/list-vibe-icons.ts
packages/docs/src/pages/components/ComponentName/ComponentName.stories.tsx
```

**🔄 Implementation Order:**
1. **Component Package** - Update source component and internal dependencies
2. **Individual Packages** - Update standalone packages that use the component
3. **Core Package** - Systematically update all core components (largest effort)
4. **Build Fix** - Address any TypeScript errors revealed by changes
5. **Supporting Files** - Update docs, examples, MCP tools

**✅ Implementation Checklist:**
- [ ] Source component interface updated
- [ ] Internal component dependencies updated (hooks, utilities)
- [ ] Standalone packages updated (5-10 files typically)
- [ ] Core package components updated (20-30 files typically)
- [ ] TypeScript build errors resolved
- [ ] Documentation and examples updated
- [ ] All updates maintain semantic consistency

### Phase 3: Testing and Validation

```bash
# Run comprehensive tests
yarn workspace @vibe/core test
lerna run test

# Run specific component tests
yarn workspace @vibe/core test -- Component

# Update snapshots if needed
yarn workspace @vibe/core test -- --updateSnapshot
```

See `references/testing-validation.md` for detailed testing patterns and examples.

**Testing requirements:**
- All existing tests pass or are updated appropriately
- New tests cover breaking change scenarios
- Integration tests verify dependent components work
- No TypeScript errors across the monorepo

### Phase 4: Documentation Updates

#### Migration Guide Update (VIBE4_MIGRATION_GUIDE.md)

```markdown
## ComponentName API Changes

### Breaking Changes

**Removed `oldProp` prop**
- **Before:** `<ComponentName oldProp="value" />`
- **After:** `<ComponentName newProp="value" />`
- **Reason:** Better API consistency and performance

### Migration Path

1. Replace `oldProp` with `newProp` in all usages
2. Update prop value format if needed
3. Test component behavior matches expected outcome

### Codemod Available
```bash
npx @vibe/codemod componentname-old-prop-to-new-prop
```
```

#### Codemod Generation (if deterministic)

⚠️ **CRITICAL**: Follow established Vibe codemod patterns to avoid common pitfalls.
See `references/codemod-best-practices.md` and `references/codemod-examples.md` for detailed patterns and real examples.

```typescript
// packages/codemod/transformations/core/v3-to-v4/ComponentName-component-migration.ts
import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

/**
 * ComponentName migration for v3 to v4:
 * 1. Rename oldProp1 to newProp1
 * 2. Rename oldProp2 to newProp2
 */
function transform({ j, root, filePath }: TransformationContext) {
  // ✅ Use correct import path detection
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "ComponentName");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  // ✅ Single efficient call handles all prop renames
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

**Key Pattern Elements:**
- ✅ Use `getImports(root, NEW_CORE_IMPORT_PATH)` not `getCoreImportsForFile()`
- ✅ Use `migratePropsNames()` not non-existent `renameProp()`
- ✅ Single loop with batch prop updates
- ✅ Include `filePath` parameter for error reporting
- ✅ Use established utility imports

### Phase 5: Cleanup, Validation, and PR Creation

**⚠️ CRITICAL: Do NOT commit or push until all validation steps pass.**

**Step 1: Fix and verify**
```bash
# Fix lint issues across all packages
yarn lint:fix

# Verify lint passes
yarn lint

# Build all packages
yarn build

# Run tests
yarn test
```

If any step fails, fix the issues and re-run until all pass.

**Step 2: Create branch and commit only after all checks pass**

See `references/pr-templates.md` for PR description, commit message, and migration guide templates.
See `references/workflow-checklist.md` for a comprehensive checklist of all phases.

**📋 Monday.com Task Link:**
Extract the Monday.com task link from the user's original prompt if provided.
The link format is: `https://monday.monday.com/boards/<BOARD_ID>/pulses/<PULSE_ID>`
Include this link in the PR description under the "Task Link" section.
If no task link was provided in the original prompt, ask the user for it before creating the PR.

```bash
# Create feature branch from vibe4
git checkout vibe4
git pull origin vibe4
git checkout -b breaking-change/component-name-api-update

# Commit changes (only after all checks above pass)
git add .
git commit -m "breaking: update ComponentName API

- Remove deprecated oldProp in favor of newProp
- Update all dependent components
- Add migration guide and codemod
- Update tests for new API

BREAKING CHANGE: ComponentName.oldProp has been removed.
Use ComponentName.newProp instead.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"

# Push and create PR
git push -u origin breaking-change/component-name-api-update
gh pr create \
  --title "breaking: update ComponentName API" \
  --body "## Summary
• Remove deprecated \`oldProp\` from ComponentName
• Update all dependent components to use \`newProp\`
• Add comprehensive migration guide
• Include codemod for automated migration

## Breaking Changes
- \`ComponentName.oldProp\` → \`ComponentName.newProp\`

## Task Link
[Monday.com Task](https://monday.monday.com/boards/<BOARD_ID>/pulses/<PULSE_ID>)

## Test Plan
- [ ] All component tests pass
- [ ] Dependent components work correctly
- [ ] Codemod transforms existing usage
- [ ] Migration guide tested
- [ ] Build and lint checks pass

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```

## Common Patterns

### Comprehensive Component Updates

**Pattern: Systematic Cross-Package Updates**
```bash
# Real example from Icon migration (28 files updated):

# 1. Component package (source)
packages/components/icon/src/Icon/Icon.tsx                    # Main component
packages/components/icon/src/Icon/hooks/useIconProps.tsx      # Internal hooks

# 2. Related component packages
packages/components/tooltip/src/Tooltip/Tooltip.tsx          # Uses Icon
packages/components/icon-button/src/IconButton/IconButton.tsx # Uses Icon internally

# 3. Core package components (bulk updates)
packages/core/src/components/AttentionBox/AttentionBox.tsx   # 2 Icon instances
packages/core/src/components/Checkbox/Checkbox.tsx          # 2 Icon instances
packages/core/src/components/Chips/Chips.tsx                # 2 Icon instances
# ... 20+ more core components

# 4. Supporting updates
packages/mcp/src/server/tools/list-vibe-icons.ts           # Documentation examples
packages/core/src/components/DatePicker/DatePickerHeader.tsx # Related component fixes
```

**🔧 Batch Update Strategy:**
1. Use `replace_all=true` for simple prop renames across files
2. Use `replace_all=false` for context-specific updates
3. Group similar changes together for efficiency
4. Verify build after each logical group of changes

### Deterministic Changes (Add Codemod)
- Simple prop renames (`iconSize` → `size`)
- Enum value updates
- Import path changes
- Method signature changes with clear mapping

### Non-Deterministic Changes (No Codemod)
- Complex behavioral changes requiring human judgment
- Context-dependent prop usage
- Changes requiring business logic updates
- Multi-step migration requiring staged approach

### Mixed Changes (Partial Codemod + Manual)
- Prop renames (codemod) + related component fixes (manual)
- API changes (codemod) + TypeScript error fixes (manual)
- Interface updates (codemod) + documentation updates (manual)

### Error Recovery
- If tests fail: Fix broken components, don't skip tests
- If build fails: Check import/export consistency
- If codemod fails: Validate transform logic with test cases
- If PR blocked: Address review feedback before merging

## ⚠️ Common Pitfalls & Lessons Learned

### Codemod Implementation Issues

**❌ Wrong Function Usage:**
```typescript
// WRONG - this function doesn't exist
renameProp(j, elementPath, "oldProp", "newProp");

// CORRECT - use established utility
migratePropsNames(j, elementPath, filePath, componentName, {
  oldProp: "newProp"
});
```

**❌ Wrong Import Path:**
```typescript
// WRONG - looks for old package name
const imports = getCoreImportsForFile(root);

// CORRECT - specify the right import path
const imports = getImports(root, NEW_CORE_IMPORT_PATH); // "@vibe/core"
```

**❌ Inefficient Multiple Loops:**
```typescript
// WRONG - separate loops for each prop
if (isPropExists(j, elementPath, "prop1")) {
  // handle prop1
}
if (isPropExists(j, elementPath, "prop2")) {
  // handle prop2
}

// CORRECT - single efficient call
migratePropsNames(j, elementPath, filePath, componentName, {
  prop1: "newProp1",
  prop2: "newProp2",
  prop3: "newProp3"
});
```

### JSCodeshift Formatting Artifacts

**⚠️ Problem:** jscodeshift adds unnecessary parentheses around JSX elements in files that don't even use the target component.

**Example Artifacts:**
```jsx
// Before codemod
<div className="wrapper">

// After codemod (WRONG!)
(<div className="wrapper">
```

**🔧 Prevention:**
1. **Target specific files** instead of entire directories
2. **Use `--dry` run first** to verify only expected files change
3. **Review all diffs carefully** before committing
4. **Create cleanup commits** if formatting issues slip through

**🔧 Cleanup Pattern:**
```typescript
// Find files with formatting artifacts
git diff HEAD~1 HEAD --name-only | grep -v "target-component"

// Manual cleanup needed for unintended changes
```

### Documentation Reversion Issues

**⚠️ Problem:** Linters, formatters, or branch switches can revert documentation changes.

**🔧 Prevention:**
- **Commit documentation separately** from code changes
- **Verify documentation persists** after all code changes
- **Check git status** before final PR creation
- **Re-add documentation** if reverted by automation

### Component Package Dependencies

**⚠️ Problem:** Components in different packages need different import handling.

```typescript
// Icon is in @vibe/icon but also re-exported from @vibe/core
// Both need to be handled correctly
```

**🔧 Solution:**
- Check component package structure first
- Handle both direct imports and re-exports
- Test codemod on actual usage patterns

### Build System Validation

**⚠️ Problem:** Not all components build even before changes, causing false positives.

**🔧 Approach:**
- **Test individual packages** first (`yarn workspace @vibe/icon build`)
- **Focus on changed packages** rather than full monorepo build
- **Separate build issues** from breaking change issues

### Cross-Package Component Updates

**⚠️ Problem:** Breaking changes often affect components across multiple packages, not just the main @vibe/core package.

**Real Example - Icon Migration:**
Icon component is in `@vibe/icon` but used throughout:
- `packages/components/tooltip/` - standalone package using Icon
- `packages/core/src/components/` - 25+ core components using Icon
- `packages/components/icon-button/` - IconButton using Icon internally
- `packages/mcp/` - documentation and examples

**🔧 Comprehensive Search Strategy:**

```bash
# 1. Find ALL files with old prop usage across entire monorepo
grep -r "iconType\|iconSize\|iconLabel" packages/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"

# 2. Identify usage by package type
find packages/components -name "*.tsx" -o -name "*.ts" | xargs grep -l "iconType="
find packages/core/src -name "*.tsx" -o -name "*.ts" | xargs grep -l "iconSize="

# 3. Check supporting files (docs, examples, tests)
grep -r "iconLabel=" packages/mcp packages/docs
```

**🔧 Update Strategy:**
1. **Component Package First** - Update the source component and its internal hooks
2. **Core Package Components** - Systematically update all core components (20-30 files typical)
3. **Standalone Packages** - Update components that depend on the changed component
4. **Supporting Files** - Update documentation, examples, and MCP tools
5. **Build Verification** - Test each package individually before full build

### TypeScript Build Errors in Related Components

**⚠️ Problem:** Breaking changes can reveal existing TypeScript errors in related components.

**Real Example - IconButton Props:**
```typescript
// DatePickerHeader was using deprecated Button static properties
<IconButton
  kind={Button.kinds.TERTIARY}  // ❌ Error: Property 'kind' does not exist
  size={Button.sizes.SMALL}     // ❌ Error: Property 'size' does not exist
/>

// Fixed to use string literals
<IconButton
  kind="tertiary"     // ✅ Correct
  size="small"        // ✅ Correct
/>
```

**🔧 Resolution Approach:**
1. **Isolate the error** - determine if it's related to your breaking change or pre-existing
2. **Check component API** - verify correct prop values for the component
3. **Use string literals** instead of deprecated static enum properties
4. **Test build** after each fix to catch additional issues

### Documentation and Example Updates

**⚠️ Problem:** Code examples in documentation and MCP tools need updating with new API.

**🔧 Required Updates:**
- **MCP Documentation** - Update usage examples with new props
- **Component Stories** - Storybook examples using the component
- **README files** - Any inline code examples
- **Test files** - Update snapshot tests and component tests

## Quality Gates

**Before committing:**
- [ ] All tests pass locally
- [ ] TypeScript compiles without errors
- [ ] Changed components render in Storybook
- [ ] Migration guide entry complete

**Before creating PR:**
- [ ] Full monorepo build successful
- [ ] All linting passes
- [ ] Codemod tested (if applicable)
- [ ] Documentation updated

## Integration Points

- **Package Dependencies:** Update `package.json` files as needed
- **TypeScript:** Ensure type consistency across packages
- **Build System:** Verify Rollup configurations handle changes
- **Storybook:** Update stories to reflect new API
- **Documentation:** Sync with component documentation site

