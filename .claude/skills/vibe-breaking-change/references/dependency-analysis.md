# Dependency Analysis for Breaking Changes

## Component Dependency Mapping

### Finding Direct Dependencies

```bash
# Find components importing the target component
grep -r "import.*ComponentName" packages/core/src/components/
grep -r "import.*ComponentName" packages/components/

# Find usage in TypeScript files
grep -r "ComponentName" packages/*/src/**/*.tsx
grep -r "ComponentName" packages/*/src/**/*.ts

# Find usage in test files
grep -r "ComponentName" packages/*/src/**/__tests__/*.tsx
grep -r "ComponentName" packages/*/src/**/__stories__/*.tsx
```

### Finding Indirect Dependencies

```bash
# Check for components that extend or compose target component
grep -r "extends.*ComponentNameProps" packages/
grep -r "ComponentName.*Props" packages/

# Find re-exports
grep -r "export.*ComponentName" packages/*/src/index.ts
grep -r "export.*from.*ComponentName" packages/
```

### Analyzing Package Dependencies

```bash
# Check package.json dependencies
find packages/ -name "package.json" -exec grep -l "@vibe/component-name\|ComponentName" {} \;

# Check workspace dependencies
yarn workspace @vibe/core info
yarn workspaces info
```

## Impact Assessment Matrix

| Component | Import Type | Usage Pattern | Breaking Impact | Update Required |
|-----------|-------------|---------------|-----------------|-----------------|
| ButtonGroup | Direct | Props passed through | High | Yes - API change |
| Dialog | Indirect | Used in composition | Medium | Yes - prop update |
| Form | Test only | Test utilities | Low | Maybe - test update |

## Component Relationship Types

### Direct Usage
- Component imports and uses target component
- Props passed directly to target component
- **Impact:** High - requires immediate update

### Composed Usage
- Component wraps or extends target component
- May add additional props or behavior
- **Impact:** Medium - requires careful testing

### Re-export Usage
- Package re-exports target component
- May not use component directly
- **Impact:** Low - update exports only

### Test/Story Usage
- Only used in test files or Storybook
- No runtime impact on users
- **Impact:** Minimal - update tests/stories

## Dependency Update Strategy

### Phase 1: Core Component Update
1. Update target component with breaking change
2. Update component types and interfaces
3. Ensure component builds and basic tests pass

### Phase 2: Direct Dependencies
1. Update components with direct imports
2. Update prop passing and usage patterns
3. Fix compilation errors

### Phase 3: Indirect Dependencies
1. Update composed components
2. Update complex usage patterns
3. Verify behavioral consistency

### Phase 4: Package Dependencies
1. Update package.json versions if needed
2. Update workspace dependencies
3. Verify cross-package compatibility

## Validation Commands

```bash
# Check TypeScript compilation across all packages
lerna run type-check

# Check for remaining references to old API
grep -r "oldProp" packages/ --include="*.ts" --include="*.tsx"

# Verify no broken imports
yarn workspace @vibe/core build
lerna run build

# Check for usage in Storybook
grep -r "oldProp" packages/**/__stories__/
```

## Common Dependency Patterns

### Button Dependencies
- ButtonGroup, IconButton, SplitButton
- Form components (FieldButton, FormButton)
- Dialog components (DialogButton)

### Icon Dependencies
- All components using icons
- IconButton, Button with icons
- Menu items, navigation components

### Layout Dependencies
- Grid system components
- Container components
- Responsive utilities

### Hook Dependencies
- Components using shared hooks
- Custom hook implementations
- Test utilities using hooks

## Risk Mitigation

### High-Risk Changes
- Core utility changes (hooks, constants)
- Base component changes (Button, Icon)
- Type system changes (VibeComponentProps)

### Medium-Risk Changes
- Layout component changes
- Form component changes
- Complex composite components

### Low-Risk Changes
- Leaf components (no dependencies)
- Style-only changes
- Test utility changes