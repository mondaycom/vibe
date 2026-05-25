# PR and Documentation Templates

## PR Template for Breaking Changes

### PR Title Format

Follow [Conventional Commits](https://www.conventionalcommits.org/). Use the appropriate type (`feat`, `fix`, `refactor`, etc.):

```
<type>(<scope>): brief description

Examples:
feat(Button): remove deprecated size prop
refactor(Dialog): update API for better accessibility
fix(Form): replace onSubmit with onFormSubmit
```

### PR Description Template

```markdown
## Summary
• Brief description of the breaking change
• Why this change was necessary
• Impact on existing users

## Breaking Changes
**[ComponentName] API Changes:**
- ❌ Removed: `oldProp` prop
- ✅ Added: `newProp` prop with enhanced functionality
- 🔄 Changed: `existingProp` now requires different value format

## Migration Path

### Automated Migration (Codemod Available)
```bash
npx @vibe/codemod component-name-api-update
```

### Manual Migration
**Before:**
```jsx
<ComponentName
  oldProp="value"
  existingProp={oldFormat}
/>
```

**After:**
```jsx
<ComponentName
  newProp="value"
  existingProp={newFormat}
/>
```

## Task Link
[Monday.com Task](https://monday.monday.com/boards/<BOARD_ID>/pulses/<PULSE_ID>)

## Testing
- [ ] All component tests pass
- [ ] Integration tests updated and passing
- [ ] Dependent components tested
- [ ] Storybook stories render correctly
- [ ] Codemod tested on real codebase examples
- [ ] Performance impact assessed

## Documentation
- [ ] Migration guide updated
- [ ] API documentation updated
- [ ] Changelog entry added
- [ ] Codemod documentation added

## Validation
- [ ] Full monorepo build passes
- [ ] All linting checks pass
- [ ] TypeScript compilation successful
- [ ] No broken imports or exports
- [ ] Manual testing completed

## Reviewer Notes
- Focus on [specific areas of concern]
- Pay attention to [migration complexity/edge cases]
- Verify [specific functionality still works]

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

## Commit Message Template

Follow [Conventional Commits](https://www.conventionalcommits.org/). Use the appropriate type (`feat`, `fix`, `refactor`, etc.):

```
<type>(<scope>): brief description

Detailed explanation of what changed and why.
Include context about the problem being solved.

BREAKING CHANGE: Specific description of what breaks.
Explain the old behavior vs new behavior.

Migration:
- Old usage: ComponentName.oldProp
- New usage: ComponentName.newProp
- Codemod: npx @vibe/codemod component-migration

Affects:
- ComponentName API
- Dependent components: ButtonGroup, Dialog
- Documentation: Migration guide updated

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

## Migration Guide Entry Template

```markdown
## [ComponentName] API Changes

### Overview
Brief explanation of what changed and why the breaking change was necessary.

### Breaking Changes

#### Removed `oldProp` prop
- **Impact**: High - affects all usage
- **Reason**: Simplifies API and improves performance
- **Migration**: Replace with `newProp`

#### Changed `existingProp` format
- **Impact**: Medium - affects complex usage
- **Reason**: Better type safety and validation
- **Migration**: Convert values using utility function

### Before and After

#### Basic Usage
```jsx
// Before
<ComponentName
  oldProp="value"
  existingProp={complexOldFormat}
  size="large"
/>

// After
<ComponentName
  newProp="value"
  existingProp={simpleNewFormat}
  size="large"
/>
```

#### Advanced Usage
```jsx
// Before
<ComponentName
  oldProp={dynamicValue}
  onOldEvent={(data) => handleOldWay(data)}
/>

// After
<ComponentName
  newProp={transformValue(dynamicValue)}
  onNewEvent={(data) => handleNewWay(data)}
/>
```

### Migration Strategies

#### Automated Migration
Use the provided codemod for straightforward cases:
```bash
npx @vibe/codemod componentname-api-update src/
```

The codemod handles:
- Simple prop renames
- Basic value transformations
- Import statement updates

#### Manual Migration
For complex cases requiring human judgment:

1. **Dynamic prop values**: Review logic and update calculations
2. **Event handlers**: Update to match new event signature
3. **Conditional usage**: Verify new API handles all conditions
4. **Tests**: Update test assertions and mocks

#### Gradual Migration
For large codebases, consider a phased approach:

1. **Phase 1**: Update critical components first
2. **Phase 2**: Update high-traffic components
3. **Phase 3**: Update remaining components
4. **Phase 4**: Remove any compatibility shims

### Common Issues

#### TypeScript Errors
```typescript
// Error: Property 'oldProp' does not exist
<ComponentName oldProp="value" />

// Solution: Use new prop name
<ComponentName newProp="value" />
```

#### Runtime Errors
```javascript
// Error: onOldEvent is not a function
props.onOldEvent?.(data);

// Solution: Use new event name
props.onNewEvent?.(data);
```

### Validation
After migration, verify:
- [ ] No TypeScript compilation errors
- [ ] Component renders as expected
- [ ] Event handlers work correctly
- [ ] Tests pass
- [ ] No console warnings
```

## Changelog Entry Template

```markdown
### BREAKING CHANGES

#### ComponentName v2.0.0
- **BREAKING**: Removed `oldProp` in favor of `newProp` for better API consistency
- **BREAKING**: Changed `existingProp` format from object to string for improved performance
- **Migration**: Use `npx @vibe/codemod componentname-api-update` for automated migration
- **Affects**: All ComponentName usage, ButtonGroup, Dialog components

##### Migration Example
```jsx
// Before
<ComponentName oldProp="value" existingProp={{key: "value"}} />

// After
<ComponentName newProp="value" existingProp="value" />
```

See [Migration Guide](./VIBE4_MIGRATION_GUIDE.md#componentname-api-changes) for detailed instructions.
```

## Code Review Checklist Template

```markdown
## Breaking Change Review Checklist

### API Design
- [ ] Breaking change is necessary and well-justified
- [ ] New API is more intuitive than old API
- [ ] API follows Vibe design system conventions
- [ ] TypeScript types are accurate and helpful

### Implementation
- [ ] Target component updated correctly
- [ ] All dependent components updated
- [ ] No lingering references to old API
- [ ] Error handling updated appropriately

### Testing
- [ ] Component tests updated and comprehensive
- [ ] Integration tests cover dependent components
- [ ] Edge cases tested
- [ ] Performance impact assessed

### Documentation
- [ ] Migration guide entry is clear and complete
- [ ] Code examples work correctly
- [ ] Codemod documented and tested
- [ ] Breaking change clearly flagged

### Developer Experience
- [ ] TypeScript errors are helpful
- [ ] Runtime errors (if any) are clear
- [ ] Migration path is straightforward
- [ ] Documentation is discoverable

### Build System
- [ ] All packages build successfully
- [ ] No circular dependencies introduced
- [ ] Import/export structure clean
- [ ] Version bumps appropriate
```