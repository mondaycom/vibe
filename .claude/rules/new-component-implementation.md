# New Component Implementation Workflow

**Purpose**: Provides a systematic, research-driven workflow for implementing new Vibe components - for the @vibe/core library (located in "packages/core") - from initial research through final validation. Emphasizes studying existing patterns, following established conventions, and systematic progression through types, component implementation, styling, testing, and documentation to ensure consistency and quality.

**Purpose**: Provides a systematic approach to implementing new Vibe components, ensuring consistency, efficiency, and adherence to project standards.

## Pre-Implementation Research Phase

### Study Similar Components

Before writing any code, examine 2-3 existing components that share similar functionality or patterns. For example:

- For informational components: `AttentionBox.tsx`, `AlertBanner.tsx`
- For action-oriented components: `Button.tsx`, `SplitButton.tsx`
- For layout components: `Flex.tsx`, `Box.tsx`

**Reference**: component-internal-structure.md for detailed component structure patterns and conventions.

### Identify Dependencies

Research the exact APIs of Vibe components you'll integrate with:

- **Typography**: `Text.tsx`, `Heading.tsx`
- **Actions**: `Button.tsx`, `Link.tsx`
- **Layout**: `Flex.tsx`
- Check component types files (e.g., `Button.types.ts`) for available props

**Reference**: dependency-management.md for guidelines on choosing and managing dependencies.

### Understand Project Structure

- Base types: `VibeComponentProps.ts`
- Test utilities: `test-ids-utils.ts`
- Constants: `constants.ts`
- Design tokens: Check existing SCSS files for available CSS custom properties

**Reference**: monorepo-structure.md for understanding the overall project organization and file-structures.md for specific file organization patterns.

## Implementation Order

### 1. Types First (`ComponentName.types.ts`)

- Extend `VibeComponentProps.ts`
- Define clear interfaces before implementation
- Use `ReactNode` for flexible content props
- Follow existing patterns from similar components

**Reference**: naming-conventions.md for proper naming patterns for types and interfaces.

### 2. Core Component (`ComponentName.tsx`)

- Use `forwardRef` pattern. For example following `Button.tsx`
- Import from established Vibe components
- Follow existing test ID patterns from `constants.ts`
- Use CSS Modules for styling
- **MANDATORY**: Add `[data-vibe]` attribute for component identification

#### Essential `[data-vibe]` Attribute Implementation

**CRITICAL**: Every new component MUST include the `[data-vibe]` attribute on its root element for component identification in the DOM.

**Import Pattern**:

```tsx
import { ComponentVibeId } from "../../tests/constants";
```

**Usage Pattern**:
Add to the root element's props:

```tsx
data-vibe={ComponentVibeId.ATTENTION_BOX}
```

**Implementation Examples**:

**Enum Naming Pattern**:
The `ComponentVibeId` enum follows SCREAMING_SNAKE_CASE format. For example:

- `Button` → `ComponentVibeId.BUTTON`
- `AttentionBox` → `ComponentVibeId.ATTENTION_BOX`
- `MenuButton` → `ComponentVibeId.MENU_BUTTON`
- `LinearProgressBar` → `ComponentVibeId.LINEAR_PROGRESS_BAR`

**References**:

- component-internal-structure.md for detailed component structure conventions
- accessibility-guidelines.md for ensuring proper accessibility implementation
- react-context.md if your component needs to use or provide React Context
- naming-conventions.md for component and prop naming patterns

### 3. Component Constants (Optional: `consts/` directory)

**If your component needs constant values**, organize them properly:

- **MANDATORY**: Place constants files inside a `consts/` folder, never at the component root
- **MANDATORY**: Use meaningful file names that describe purpose, not generic names like `MyComponentConstants.ts` or `consts.ts`
- **Examples of good names**: `variants.ts`, `validate-colors.ts`, `events.ts`, `sizes.ts`

**Reusability Rule**: If constants are used across multiple components, place them in the top-level `packages/core/src/constants/` directory instead.

**Reference**: file-structures.md for detailed constants organization patterns.

### 4. Styles (`ComponentName.module.scss`)

- NEVER Import anything inside the module scss file
- Use established design tokens and spacing variables

**Reference**: styling-conventions.md for comprehensive CSS Modules guidelines, design token usage, and styling best practices.

### 5. Index Exports (`index.ts`)

- On the same root directory of the component (e.g., `packages/core/src/components/MyComponent/index.ts`)
- Export both component and types
- Follow pattern: `export { default as ComponentName } from "./ComponentName"`

**Reference**: file-structures.md for export patterns and file organization conventions.

### 6. Add to Global Exports

- Update `components/index.ts` in alphabetical order
- Add test IDs to `constants.ts` enum
- **MANDATORY**: Add your component to the `ComponentVibeId` enum in `constants.ts`

#### Adding ComponentVibeId Enum Value

**CRITICAL**: Every new component MUST have a corresponding entry in the `ComponentVibeId` enum.

**Steps**:

1. Find the `ComponentVibeId` enum
2. Add your component in alphabetical order using SCREAMING_SNAKE_CASE format

**Naming Convention**: Use the exact component name as the enum value, but the key should be in SCREAMING_SNAKE_CASE:

- `Button` → `BUTTON = "Button"`
- `MenuButton` → `MENU_BUTTON = "MenuButton"`
- `LinearProgressBar` → `LINEAR_PROGRESS_BAR = "LinearProgressBar"`

**References**:

- file-structures.md for global export patterns
- monorepo-structure.md for understanding where and how to add global exports

### 7. Tests (`__tests__/ComponentName.test.tsx`)

- Follow testing patterns from similar components
- Test actual component behavior, not assumptions
- Check for proper test ID assignments
- Verify accessibility attributes (e.g., `aria-hidden`, `aria-disabled`)

**Reference**:

- accessibility-guidelines.md for comprehensive accessibility testing requirements and patterns.
- file-structures.md for detailed test organization patterns.

### 8. Stories (`__stories__/ComponentName.stories.tsx`)

- Create comprehensive examples covering all variants

**Reference**: storybook-stories.md for detailed Storybook conventions, story structure, and MDX documentation requirements.

## Validation and Quality Phase

### Development Validation

1. **TypeScript Check**
2. **Test Suite**: `yarn test src/components/ComponentName/` (will recursively run all tests in subdirectories)
3. **Lint and Format**: `yarn prettier --write src/components/ComponentName/` then `yarn lint src/components/ComponentName/ --fix`

### Integration Verification

- Verify component exports work by importing in test file
- Check that all test IDs are properly defined in `constants.ts`
- Ensure component follows established Vibe patterns

## Key Principles

### Research-Driven Development

- **Don't Guess APIs**: Always check actual component implementations
- **Study Patterns**: Look at how similar components handle similar problems
- **Understand Context**: Review existing test patterns and story structures

### Modern Prop Patterns

- **Use String Literals**: Define prop values as string literals instead of static properties
  - ✅ Prefer: `<MyComponent size="large" variant="primary" />`
  - ❌ Avoid: `<MyComponent size={MyComponent.sizes.LARGE} variant={MyComponent.variants.PRIMARY} />`
- **Backward Compatibility**: While legacy static properties may exist in the codebase, new components should not include them

### Systematic Progression

- **Follow Order**: Complete each phase before moving to next
- **Validate Early**: Run TypeScript and tests frequently
- **Defer Formatting**: Focus on functionality first, format as final step

### Quality Standards

- **Test Real Behavior**: Verify actual DOM output and accessibility attributes
- **Follow Conventions**: Use established patterns for file structure and naming
- **Integrate Properly**: Ensure component works within the existing Vibe ecosystem

## Common Pitfalls to Avoid

1. **API Assumptions**: Don't assume component APIs (e.g., Link uses `text` prop, not children)
2. **Premature Formatting**: Don't interrupt development flow with linting - batch it at the end
3. **Test Assumptions**: Test actual behavior (disabled buttons may use `aria-disabled` vs `disabled`)
4. **Missing Integration**: Forgetting to add exports to main index files or test constants
5. **Design Token Guessing**: Check existing SCSS files for available CSS custom properties
6. **Missing `[data-vibe]` Attribute**: Forgetting to add the mandatory `[data-vibe]` attribute or missing the corresponding `ComponentVibeId` enum entry

## Step-by-Step Implementation Checklist

### Research Phase
- [ ] Study 2-3 similar existing components
- [ ] Research APIs of components you'll integrate with
- [ ] Check existing patterns for similar functionality
- [ ] Review design tokens and available CSS custom properties

### Implementation Phase
- [ ] 1. Create `ComponentName.types.ts` extending `VibeComponentProps`
- [ ] 2. Implement `ComponentName.tsx` with `forwardRef` pattern
- [ ] 3. Add mandatory `[data-vibe]` attribute with `ComponentVibeId`
- [ ] 4. Create constants in `consts/` directory if needed (meaningful names)
- [ ] 5. Create `ComponentName.module.scss` using design tokens
- [ ] 6. Create `index.ts` with proper exports
- [ ] 7. Add to global `components/index.ts` (alphabetical order)
- [ ] 8. Add to `ComponentVibeId` enum in `constants.ts`

### Testing & Documentation Phase
- [ ] 9. Create `__tests__/ComponentName.test.tsx` following patterns
- [ ] 10. Create stories in `packages/docs` (refer to storybook-stories.md)
- [ ] 11. Test accessibility attributes and behavior
- [ ] 12. Verify proper test ID assignments

### Validation Phase
- [ ] TypeScript compilation passes
- [ ] All tests pass: `yarn test src/components/ComponentName/`
- [ ] Linting passes: `yarn lint src/components/ComponentName/ --fix`
- [ ] Component exports work correctly
- [ ] Stories render properly in Storybook
- [ ] Component follows established Vibe patterns

## Claude Implementation Notes

When implementing new Vibe components:

- **Always follow the research-driven approach** - study existing components first
- **Use the systematic implementation order** - don't skip steps
- **Never guess APIs** - always check actual component implementations
- **Include the mandatory `[data-vibe]` attribute** on root element
- **Add to `ComponentVibeId` enum** in proper SCREAMING_SNAKE_CASE format
- **Use string literals for prop values** instead of static properties
- **Test real behavior** not assumptions about how things should work
- **Follow established patterns** for file structure, naming, and organization
- **Validate integration** by ensuring component works within Vibe ecosystem

This workflow ensures consistent, high-quality component implementation that integrates seamlessly with the Vibe design system.