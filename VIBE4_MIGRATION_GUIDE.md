# Vibe Design System v4 Migration Guide

> **Status**: 🚧 Under Development
>
> This guide is actively being developed alongside Vibe v4. Content will be updated as breaking changes are finalized.

## Overview

Welcome to the Vibe Design System v4 migration guide. This major version brings significant improvements to performance, accessibility, and developer experience, but requires some changes to your existing code.

## Quick Start

### Automated Migration

The easiest way to migrate to Vibe v4 is using our automated codemod:

```bash
# Install the latest version
npm install @vibe/core@4

# Run the automated migration
npx @vibe/codemod --migration v4
```

The codemod will handle most of the migration automatically, including:
- Component prop renames and updates
- Import path changes
- TypeScript type updates
- Enum to string literal conversions

### Manual Review Required

Some changes require manual attention:
- Custom CSS that uses Vibe design tokens
- Components that extend or wrap Vibe components
- Complex TypeScript type usage

## What's New in v4

### 🎯 Performance Improvements
- Reduced bundle size through tree shaking optimizations
- Lazy loading for non-critical components
- Improved rendering performance

### 🔧 Developer Experience
- Better TypeScript support with stricter types
- Simplified component APIs
- Enhanced error messages and warnings

### ♿ Accessibility Enhancements
- WCAG 2.2 compliance improvements
- Better screen reader support
- Enhanced keyboard navigation

### 🎨 Design System Evolution
- Updated design tokens
- Consistent spacing and typography
- Refined color palette

## Breaking Changes Summary

> **Note**: Detailed breaking changes are tracked in [VIBE4_CHANGELOG.md](./VIBE4_CHANGELOG.md)

### Components

#### Clickable

**Removed string types from `ariaHasPopup` and `tabIndex`**

- `ariaHasPopup` now accepts `boolean` only (was `boolean | string`)
- `tabIndex` now accepts `number` only (was `string | number`)

```tsx
// Before (v3)
<Clickable tabIndex="-1" ariaHasPopup="true" />

// After (v4)
<Clickable tabIndex={-1} ariaHasPopup={true} />
```

#### Chips

**Removed `disableClickableBehavior` prop**

The `disableClickableBehavior` prop has been removed. Chips now always uses the clickable wrapper when `onClick` or `onMouseDown` handlers are provided. Simply remove the prop:

```tsx
// Before (v3)
<Chips label="Tag" disableClickableBehavior onMouseDown={handler} />

// After (v4)
<Chips label="Tag" onMouseDown={handler} />
```

**Codemod available**: This change is handled automatically by `npx @vibe/codemod --migration v4`

#### Icon Component API Changes

**Props Renamed - Remove "icon" Prefix**
- ❌ **Removed**: `iconLabel`, `iconType`, `iconSize` props
- ✅ **Added**: `label`, `type`, `size` props with same functionality
- **Reason**: Simplified API for better consistency and reduced verbosity

**Migration:**
```jsx
// Before
<Icon
  icon={MyIcon}
  iconLabel="Close dialog"
  iconType="svg"
  iconSize={24}
/>

// After
<Icon
  icon={MyIcon}
  label="Close dialog"
  type="svg"
  size={24}
/>
```

**Automated Migration Available:**
```bash
npx @vibe/codemod icon-props-rename src/
```
#### AttentionBox

**Replaced legacy AttentionBox with new implementation**

The deprecated `AttentionBox` has been removed. The new `AttentionBox` (previously available at `@vibe/core/next`) is now the default export from `@vibe/core`.

**Key changes:**
- `AttentionBoxLink` is no longer a public export - use the `link` prop instead
- Type values renamed: `"success"` → `"positive"`, `"danger"` → `"negative"`, `"dark"` → `"neutral"`
- `entryAnimation` prop → `animate` prop
- `withIconWithoutHeader` / `withoutIcon` props removed - use `icon={false}` to hide the icon
- New `action` prop for button actions
- New `compact` layout mode (replaces inline compact patterns)

**Migration:**

```jsx
// Before (legacy)
import { AttentionBox, AttentionBoxLink } from "@vibe/core";
<AttentionBox type="danger" title="Warning" text="Something went wrong" entryAnimation>
  <AttentionBoxLink href="/docs" text="Learn more" />
</AttentionBox>

// After (new)
import { AttentionBox } from "@vibe/core";
<AttentionBox
  type="negative"
  title="Warning"
  text="Something went wrong"
  animate
  link={{ href: "/docs", text: "Learn more" }}
/>
```

```jsx
// Before (from @vibe/core/next)
import { AttentionBox } from "@vibe/core/next";

// After
import { AttentionBox } from "@vibe/core";
```

#### Toggle

**Removed duplicate `data-testid` from internal element**

The Toggle component previously set `data-testid="toggle"` on both the input element and the internal visual div. The internal div's `data-testid` has been removed, so only the interactive input element carries the test ID.

If your tests query `[data-testid="toggle"]` and expect multiple matches, update them to expect a single match.

### TypeScript Types

<!-- This section will be populated as breaking changes are identified -->

### CSS and Design Tokens

<!-- This section will be populated as breaking changes are identified -->

## Step-by-Step Migration

### 1. Prepare Your Codebase

Before migrating, ensure your codebase is ready:

```bash
# Ensure you have a clean git state
git status

# Install the latest v3 version first
npm install @vibe/core@^3.0.0

# Run tests to ensure everything works
npm test
```

### 2. Update Dependencies

Update to Vibe v4:

```bash
npm install @vibe/core@4
```

If you use other Vibe packages:

```bash
npm install @vibe/icons@4 @vibe/testkit@4
```

### 3. Run Automated Migration

```bash
npx @vibe/codemod --migration v4 --verbose
```

Options:
- `--verbose`: Shows detailed transformation logs
- `--target /path/to/code`: Specify target directory
- `--extensions tsx,ts,jsx,js`: File extensions to process

### 4. Manual Updates

Review and update:

1. **Custom CSS**: Check for usage of deprecated design tokens
2. **TypeScript**: Verify type compatibility
3. **Tests**: Update test assertions that may have changed
4. **Storybook**: Update component stories

### 5. Test and Validate

```bash
# Run type checking
npx tsc --noEmit

# Run tests
npm test

# Run linting
npm run lint

# Build your application
npm run build
```

## Component-Specific Migration

### CustomSvgIcon

#### Removed `onClick` and `clickable` props

The `onClick` and `clickable` props have been removed from `CustomSvgIcon`. SVG icons should be purely decorative; use an accessible wrapper (e.g. a `<button>`) for clickable icon patterns.

**Before (v3):**
```tsx
<CustomSvgIcon src="/icon.svg" onClick={handleClick} clickable />
```

**After (v4):**
```tsx
<button onClick={handleClick}>
  <CustomSvgIcon src="/icon.svg" />
</button>
```

> **No codemod available.** This change requires manual migration — wrap the icon with an accessible clickable element (e.g. `<Clickable>`, `<IconButton>`) and move the `onClick` handler to the wrapper.

### MenuItem

#### Removed deprecated `label` prop from `MenuItemIcon`

The internal `MenuItemIcon` component's `label` prop has been removed. This prop was already a no-op — it was accepted but not passed to the underlying `Icon` component.

> **Note:** The `MenuItem.label` prop (visual badge like "New" or "Beta") is **not affected**.

**Migration:** No action required for users of `MenuItem`. If you used `MenuItemIcon` directly, remove any `label` prop passed to it.

### Flex

#### Removed `"stretch"` from `justify` prop

The `"stretch"` value has been removed from the `FlexJustify` type. `justify-content: stretch` is not valid CSS in flexbox contexts, so this value had no effect.

**Before (v3):**
```tsx
<Flex justify="stretch" />
// or using the deprecated enum:
<Flex justify={FlexJustify.STRETCH} />
```

**After (v4):**
```tsx
// Remove the prop entirely (stretch had no visual effect)
<Flex />
```

**Codemod available:** The automated codemod will remove `justify="stretch"` and `justify={FlexJustify.STRETCH}` props automatically.

```bash
npx @vibe/codemod --migration v4
```

### Dropdown

#### Old Dropdown removed, replaced with new implementation

The old `Dropdown` component (based on `react-select`) has been completely removed and replaced with a new custom implementation. The new Dropdown was previously available as an alpha component via `@vibe/core/next` and is now the default export from `@vibe/core`.

**Key changes:**
- Completely new API (not backward compatible)
- No longer depends on `react-select`
- Built-in form field support (`label`, `helperText`, `error`, `required`)
- Enhanced accessibility with proper ARIA attributes
- Full TypeScript generics support
- `DropdownMenu`, `DropdownOption` (component), and `DropdownSingleValue` sub-components removed
- `DROPDOWN_CHIP_COLORS`, `DROPDOWN_MENU_POSITION`, `DROPDOWN_MENU_PLACEMENT` enums removed
- Static properties (`Dropdown.sizes`, `Dropdown.chipColors`, etc.) removed

**If you were using the old Dropdown from `@vibe/core`:**

```tsx
// Before (v3)
import { Dropdown } from "@vibe/core";

const options = [
  { id: "1", label: "Option 1" },
  { id: "2", label: "Option 2" }
];

<Dropdown
  placeholder="Select..."
  options={options}
  size={Dropdown.sizes.MEDIUM}
  searchable
/>

// After (v4)
import { Dropdown } from "@vibe/core";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" }
];

<Dropdown
  placeholder="Select..."
  options={options}
  size="medium"
  searchable
  label="Select an option"
  clearAriaLabel="Clear"
/>
```

**If you were using the new Dropdown from `@vibe/core/next`:**

```tsx
// Before (v3)
import { Dropdown } from "@vibe/core/next";

// After (v4)
import { Dropdown } from "@vibe/core";
```

**Codemod:** ❌ Manual migration required due to complete API change. See the [Dropdown Migration Guide](https://vibe.monday.com/?path=/docs/components-dropdown-migration-guide--docs) for detailed instructions.

### Modal (Legacy)

#### Legacy Modal removed, replaced with new Modal

The legacy `Modal` component and its sub-components (`ModalHeader`, `ModalContent`, `ModalFooter`, `ModalFooterButtons`) have been completely removed. The new Modal (previously available via `@vibe/core/next`) is now the default export from `@vibe/core`.

**Removed components:**
- `Modal` (legacy) - replaced by new `Modal`
- `ModalHeader` (legacy) - replaced by new `ModalHeader`
- `ModalContent` (legacy) - replaced by new `ModalContent`
- `ModalFooter` (legacy) - replaced by new `ModalFooter`
- `ModalFooterButtons` - removed entirely (use `ModalFooter` with `primaryButton`/`secondaryButton` props)

**New components available from `@vibe/core`:**
- `Modal`, `ModalHeader`, `ModalContent`, `ModalMedia`
- `ModalFooter`, `ModalFooterWizard`
- `ModalBasicLayout`, `ModalMediaLayout`, `ModalSideBySideLayout`

**Removed types:**
- `ModalWidth` type
- `LegacyModalProps`, `LegacyModalHeaderProps`, `LegacyModalContentProps`, `LegacyModalFooterProps`, `LegacyModalFooterButtonsProps`

**Removed dependencies:**
- `a11y-dialog` - no longer used
- `body-scroll-lock` - replaced by `react-remove-scroll`

**If you were using the legacy Modal from `@vibe/core`:**

```tsx
// Before (v3) - Legacy Modal
import { Modal, ModalContent, ModalFooterButtons } from "@vibe/core";

<Modal
  id="my-modal"
  title="Modal title"
  description="Subtitle"
  show={show}
  onClose={closeModal}
  contentSpacing
  triggerElement={buttonRef.current}
>
  <ModalContent>Content here</ModalContent>
  <ModalFooterButtons
    primaryButtonText="Confirm"
    secondaryButtonText="Cancel"
    onPrimaryButtonClick={closeModal}
    onSecondaryButtonClick={closeModal}
  />
</Modal>

// After (v4) - New Modal
import { Modal, ModalBasicLayout, ModalHeader, ModalContent, ModalFooter } from "@vibe/core";

<Modal
  id="my-modal"
  show={show}
  size="medium"
  onClose={closeModal}
>
  <ModalBasicLayout>
    <ModalHeader title="Modal title" description="Subtitle" />
    <ModalContent>Content here</ModalContent>
  </ModalBasicLayout>
  <ModalFooter
    primaryButton={{ text: "Confirm", onClick: closeModal }}
    secondaryButton={{ text: "Cancel", onClick: closeModal }}
  />
</Modal>
```

**If you were using the new Modal from `@vibe/core/next`:**

```tsx
// Before (v3)
import { Modal, ModalHeader, ModalContent, ModalFooter } from "@vibe/core/next";

// After (v4) - just change the import path
import { Modal, ModalHeader, ModalContent, ModalFooter } from "@vibe/core";
```

**Codemod:** ❌ Manual migration required due to complete API change.
### Button

<!-- Will be populated when Button breaking changes are identified -->

### Dialog

<!-- Will be populated when Dialog breaking changes are identified -->

### Steps

#### Finish button is now shown by default on the last step

The Steps component now always displays a "Finish" button on the last step, replacing the "Next" button. Previously, the finish button only appeared when `onFinish` was provided.

**Before (v3):**

```jsx
// Finish button only shown when onFinish is provided
<Steps steps={steps} onFinish={() => handleFinish()} />

// Without onFinish, last step showed "Next" button (disabled)
<Steps steps={steps} />
```

**After (v4):**

```jsx
// Finish button always shown on last step
<Steps steps={steps} onFinish={() => handleFinish()} />

// Finish button still shown even without onFinish
<Steps steps={steps} />
```

**Migration:** No code changes required. If you want to customize the finish button, use `finishButtonProps`.

### Other Components

For component-specific migration details, see [VIBE4_CHANGELOG.md](./VIBE4_CHANGELOG.md).

## Common Migration Patterns

### Prop Renames

```typescript
// Before (v3)
<Button oldPropName="value" />

// After (v4)
<Button newPropName="value" />
```

### Type Updates

```typescript
// Before (v3)
import { OldTypeName } from "@vibe/core";

// After (v4)
import { NewTypeName } from "@vibe/core";
```

### Enum to String Literals

```typescript
// Before (v3)
import { ButtonSize } from "@vibe/core";
<Button size={ButtonSize.LARGE} />

// After (v4)
<Button size="large" />
```

## Troubleshooting

### Common Issues

**TypeScript Errors After Migration**

If you encounter TypeScript errors:

1. Clear your TypeScript cache: `rm -rf node_modules/.cache/typescript`
2. Restart your TypeScript server in your IDE
3. Check if you're using the latest types: `npm install @types/react@latest`

**Components Not Rendering Correctly**

1. Check browser console for errors
2. Verify all Vibe packages are updated to v4
3. Clear your build cache and rebuild

**Styling Issues**

1. Check if you're importing the correct CSS: `import "@vibe/core/tokens"`
2. Verify custom CSS doesn't override Vibe styles unintentionally
3. Check for deprecated design token usage

### Getting Help

- **Documentation**: [vibe.monday.com](https://vibe.monday.com)
- **GitHub Issues**: [Report issues](https://github.com/mondaycom/vibe/issues)
- **Discussions**: [Join discussions](https://github.com/mondaycom/vibe/discussions)

## Development Workflow for Breaking Changes

> **For Vibe maintainers and contributors**

### Adding a New Breaking Change

1. **Plan the Change**
   - Document in [VIBE4_CHANGELOG.md](./VIBE4_CHANGELOG.md)
   - Create GitHub issue for tracking
   - Get team approval

2. **Create Migration**
   - Create a new migration file in `packages/codemod/transformations/core/v3-to-v4/`
   - Add comprehensive tests
   - Test on real codebases

4. **Update Documentation**
   - Update this migration guide
   - Update component documentation
   - Add examples and common patterns

5. **Create PR**
   - Include breaking change implementation
   - Include migration codemod
   - Include documentation updates

### Testing Migrations

```bash
# Test specific migration
yarn workspace @vibe/codemod test ComponentName-component-migration

# Test all v4 migrations
yarn workspace @vibe/codemod test v3-to-v4

# Manual testing
npx @vibe/codemod --migration v4 --target /path/to/test/project
```

## Rollback Plan

If you encounter issues after migration:

1. **Revert to v3**
   ```bash
   git checkout -- .
   npm install @vibe/core@^3.0.0
   ```

2. **Report Issues**
   - Create a GitHub issue with details
   - Include error messages and code examples
   - Specify your environment and setup

3. **Gradual Migration**
   Consider migrating components one at a time rather than the entire codebase.

---

*This guide is updated regularly. Check back for the latest migration information and best practices.*