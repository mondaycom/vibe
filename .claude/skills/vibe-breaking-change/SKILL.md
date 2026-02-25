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
| 5. Validation | Code review, build verification | Build successful |
| 6. Delivery | Create branch, PR with task link | PR ready for review |

## Core Workflow

### Phase 1: Analysis and Planning

```bash
# 1. Analyze component dependencies
grep -r "import.*ComponentName" packages/
grep -r "ComponentName" packages/*/src/**/*.tsx
```

**Key steps:**
1. Map all components that import or use the target component
2. Identify props, methods, or behaviors being changed
3. Assess impact scope (breaking vs non-breaking)
4. Plan migration strategy for dependent components

### Phase 2: Implementation

```typescript
// Example: Deprecating a prop
interface ComponentProps {
  // ❌ Breaking change - remove deprecated prop
  // oldProp?: string;

  // ✅ New prop with better API
  newProp?: string;
}

// Update component implementation
const Component = ({ newProp, ...props }: ComponentProps) => {
  // Implementation with new API
};
```

**Implementation checklist:**
- [ ] Apply breaking change to target component
- [ ] Update all dependent components in same commit
- [ ] Maintain backward compatibility where possible during transition
- [ ] Update component types and interfaces
- [ ] Add deprecation warnings if gradual migration needed

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

```typescript
// packages/codemod/src/transforms/componentname-old-prop-to-new-prop.ts
import type { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Transform JSX prop usage
  root
    .find(j.JSXElement, {
      openingElement: {
        name: { name: 'ComponentName' }
      }
    })
    .forEach(path => {
      const attributes = path.value.openingElement.attributes;
      // Transform logic here
    });

  return root.toSource();
};

export default transform;
```

### Phase 5: Comprehensive Validation

```bash
# Full build verification
yarn build
lerna run build

# Lint checks
yarn lint
lerna run lint

# Style validation
yarn workspace @vibe/core stylelint

# Run Storybook build test
yarn storybook:build
```

**Validation checklist:**
- [ ] All packages build successfully
- [ ] No linting errors
- [ ] Storybook stories render correctly
- [ ] TypeScript compilation passes
- [ ] No broken imports or exports

### Phase 6: Branch and PR Creation

```bash
# Create feature branch from vibe4
git checkout vibe4
git pull origin vibe4
git checkout -b breaking-change/component-name-api-update

# Commit changes
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
[Link to task/issue]

## Test Plan
- [ ] All component tests pass
- [ ] Dependent components work correctly
- [ ] Codemod transforms existing usage
- [ ] Migration guide tested
- [ ] Build and lint checks pass

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```

## Common Patterns

### Deterministic Changes (Add Codemod)
- Simple prop renames
- Enum value updates
- Import path changes
- Method signature changes with clear mapping

### Non-Deterministic Changes (No Codemod)
- Complex behavioral changes requiring human judgment
- Context-dependent prop usage
- Changes requiring business logic updates
- Multi-step migration requiring staged approach

### Error Recovery
- If tests fail: Fix broken components, don't skip tests
- If build fails: Check import/export consistency
- If codemod fails: Validate transform logic with test cases
- If PR blocked: Address review feedback before merging

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

**Before merging:**
- [ ] PR approved by component owners
- [ ] CI/CD pipeline passes
- [ ] Migration path validated
- [ ] Breaking change properly flagged

## Integration Points

- **Package Dependencies:** Update `package.json` files as needed
- **TypeScript:** Ensure type consistency across packages
- **Build System:** Verify Rollup configurations handle changes
- **Storybook:** Update stories to reflect new API
- **Documentation:** Sync with component documentation site

See `references/` for detailed examples and edge cases.