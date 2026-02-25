# Testing and Validation for Breaking Changes

## Testing Strategy

### 1. Unit Tests
Test individual component behavior with new API

```typescript
// Before: Test with old API
it('should handle oldProp correctly', () => {
  render(<ComponentName oldProp="value" />);
  expect(screen.getByRole('button')).toHaveAttribute('data-old', 'value');
});

// After: Test with new API
it('should handle newProp correctly', () => {
  render(<ComponentName newProp="value" />);
  expect(screen.getByRole('button')).toHaveAttribute('data-new', 'value');
});

// Migration test: Ensure old API no longer works
it('should not accept oldProp', () => {
  // TypeScript should prevent this at compile time
  // @ts-expect-error - oldProp no longer exists
  render(<ComponentName oldProp="value" />);
});
```

### 2. Integration Tests
Test dependent components work with changes

```typescript
// Test component that uses the changed component
it('should work with updated ComponentName API', () => {
  render(
    <ParentComponent>
      <ComponentName newProp="value" />
    </ParentComponent>
  );

  // Verify integration works
  expect(screen.getByTestId('parent-wrapper')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveAttribute('data-new', 'value');
});
```

### 3. Snapshot Testing
Update snapshots for visual regression testing

```bash
# Update component snapshots
yarn workspace @vibe/core test -- ComponentName --updateSnapshot

# Update all affected snapshots
yarn workspace @vibe/core test -- --updateSnapshot

# Check snapshot diffs are intentional
git diff packages/core/src/components/ComponentName/__tests__/__snapshots__/
```

## Validation Checklist

### Pre-Implementation Validation
- [ ] Impact analysis complete
- [ ] Dependent components identified
- [ ] Migration strategy defined
- [ ] Breaking change justified and approved

### Implementation Validation
- [ ] Target component updated correctly
- [ ] TypeScript compilation passes
- [ ] Component tests updated and passing
- [ ] No console errors in development

### Dependency Validation
- [ ] All dependent components updated
- [ ] Integration tests passing
- [ ] No broken imports or exports
- [ ] Cross-package dependencies resolved

### Build Validation
```bash
# Full monorepo build
lerna run build

# Individual package builds
yarn workspace @vibe/core build
yarn workspace @vibe/components build

# TypeScript validation
lerna run type-check

# Lint validation
lerna run lint
```

### Runtime Validation
```bash
# Storybook validation
yarn storybook
# Manually verify affected stories render correctly

# Test app validation (if available)
yarn start
# Test breaking changes in demo application
```

### Documentation Validation
- [ ] Migration guide updated with clear examples
- [ ] Breaking change documented with before/after
- [ ] Codemod usage documented (if applicable)
- [ ] API documentation updated

## Test Update Patterns

### Props Interface Changes
```typescript
// Old interface
interface OldComponentProps {
  oldProp?: string;
  size?: 'small' | 'medium' | 'large';
}

// New interface
interface NewComponentProps {
  newProp?: string;
  size?: ComponentSize; // enum to string union
}

// Test updates needed:
// 1. Update prop names in test cases
// 2. Update enum values to string literals
// 3. Add tests for new API behavior
// 4. Remove tests for deprecated functionality
```

### Behavior Changes
```typescript
// Test behavioral changes
describe('ComponentName behavior changes', () => {
  it('should trigger callback on new event', () => {
    const mockCallback = jest.fn();
    render(<ComponentName onNewEvent={mockCallback} />);

    // Trigger new behavior
    fireEvent.click(screen.getByRole('button'));
    expect(mockCallback).toHaveBeenCalledWith(/* new signature */);
  });

  it('should not trigger old callback', () => {
    // Ensure old behavior is removed
    const mockOldCallback = jest.fn();
    // @ts-expect-error - old callback should not exist
    render(<ComponentName onOldEvent={mockOldCallback} />);
  });
});
```

## Common Testing Pitfalls

### 1. Incomplete Test Updates
- **Problem:** Tests still use old API but pass due to lenient typing
- **Solution:** Enable strict TypeScript checking in tests
- **Validation:** `yarn workspace @vibe/core test --typecheck`

### 2. Missing Integration Tests
- **Problem:** Individual components work but integration breaks
- **Solution:** Test component composition scenarios
- **Validation:** Create test cases for typical usage patterns

### 3. Snapshot Pollution
- **Problem:** Snapshots updated but changes not reviewed
- **Solution:** Review snapshot diffs before committing
- **Validation:** `git diff --no-index old-snapshot new-snapshot`

### 4. Performance Regressions
- **Problem:** New API performs worse than old API
- **Solution:** Add performance benchmarks for critical components
- **Validation:** Use React DevTools Profiler

## Automated Validation Scripts

### Pre-commit Validation
```bash
#!/bin/bash
# scripts/validate-breaking-change.sh

echo "🔍 Validating breaking change implementation..."

# 1. Check TypeScript compilation
echo "Checking TypeScript..."
lerna run type-check || exit 1

# 2. Run tests
echo "Running tests..."
lerna run test || exit 1

# 3. Check for old API usage
echo "Checking for old API usage..."
if grep -r "oldProp" packages/ --include="*.ts" --include="*.tsx"; then
  echo "❌ Found old API usage"
  exit 1
fi

# 4. Build validation
echo "Validating build..."
lerna run build || exit 1

echo "✅ Breaking change validation passed"
```

### Post-merge Validation
```bash
#!/bin/bash
# scripts/post-merge-validation.sh

echo "🚀 Post-merge validation..."

# 1. Install dependencies
yarn install

# 2. Full build
yarn build

# 3. Storybook build test
yarn storybook:build

# 4. Visual regression tests (if configured)
# yarn test:visual

echo "✅ Post-merge validation complete"
```

## Rollback Strategy

### If Breaking Change Needs Rollback
1. **Immediate:** Revert the commit
   ```bash
   git revert <commit-hash>
   git push origin vibe4
   ```

2. **Gradual:** Add backward compatibility
   ```typescript
   // Add deprecated prop back with warning
   interface ComponentProps {
     newProp?: string;
     /** @deprecated Use newProp instead */
     oldProp?: string;
   }
   ```

3. **Documentation:** Update migration guide
   - Add rollback notice
   - Provide alternative migration path
   - Set timeline for re-implementation