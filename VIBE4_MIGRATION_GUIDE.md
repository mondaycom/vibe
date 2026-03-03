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

#### TextField

**Renamed `iconName` prop to `icon`**

```tsx
// Before (v3)
<TextField iconName={Search} placeholder="Search..." />

// After (v4)
<TextField icon={Search} placeholder="Search..." />
```

**Codemod available**: This change is handled automatically by `npx @vibe/codemod --migration v4`
#### MenuButton

**First menu item focused by default** — MenuButton now passes `focusItemIndexOnMount={0}` to Menu children. Pass `focusItemIndexOnMount={-1}` on your Menu to restore old behavior.

#### ARIA Props (All Components)

**Renamed camelCase ARIA props to standard HTML `aria-*` attributes**

All custom camelCase ARIA props have been replaced with the standard HTML hyphenated form. React natively supports `aria-*` attributes in JSX, so the custom prop layer was unnecessary.

| Old Prop | New Prop |
|----------|----------|
| `ariaLabel` | `aria-label` |
| `ariaHidden` | `aria-hidden` |
| `ariaExpanded` | `aria-expanded` |
| `ariaControls` | `aria-controls` |
| `ariaHasPopup` | `aria-haspopup` |
| `ariaLabeledBy` / `ariaLabelledBy` | `aria-labelledby` |
| `ariaDescribedBy` / `ariaDescribedby` | `aria-describedby` |
| `ariaLabelDescription` (Link) | `aria-label` |

**Affected components**: Avatar, Button, IconButton, Clickable, Checkbox, Chips, Counter, Dropdown, EditableTypography, Flex, Icon, Link, LinearProgressBar, List, Menu, MenuButton, RadioButton, Search, Slider, Switch, Toggle, VirtualizedList, and more.

**Note**: Component-specific compound props like `inputAriaLabel`, `menuAriaLabel`, `closeButtonAriaLabel` are **not affected** by this change.

```tsx
// Before (v3)
<Button ariaLabel="Save" ariaExpanded={isOpen} ariaControls="menu-1" />
<Avatar ariaHidden />
<Checkbox ariaLabelledBy="label-id" />

// After (v4)
<Button aria-label="Save" aria-expanded={isOpen} aria-controls="menu-1" />
<Avatar aria-hidden />
<Checkbox aria-labelledby="label-id" />
```

**Codemod available**: `npx @vibe/codemod aria-props-migration`

#### Clickable

**Removed string types from `aria-haspopup` and `tabIndex`**

- `aria-haspopup` now accepts `boolean` only (was `boolean | string`)
- `tabIndex` now accepts `number` only (was `string | number`)

```tsx
// Before (v3)
<Clickable tabIndex="-1" aria-haspopup="true" />

// After (v4)
<Clickable tabIndex={-1} aria-haspopup={true} />
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

#### MultiStepIndicator

**Updated `react-transition-group` usage for React 19 compatibility**

The `MultiStepIndicator` component's internal `StepIndicator` now uses `nodeRef` with `CSSTransition` instead of the deprecated `findDOMNode`-based approach. This is required for React 19 compatibility, as `findDOMNode` was removed in React 19.

This is an internal implementation change. No changes to the public `MultiStepIndicator` or `StepIndicator` props are required.

If you were extending or wrapping `StepIndicator` directly and overriding its `addEndListener` behavior, note that the callback signature no longer receives the DOM node as the first argument — this is handled internally via `nodeRef`.

#### Toggle

**Removed duplicate `data-testid` from internal element**

The Toggle component previously set `data-testid="toggle"` on both the input element and the internal visual div. The internal div's `data-testid` has been removed, so only the interactive input element carries the test ID.

If your tests query `[data-testid="toggle"]` and expect multiple matches, update them to expect a single match.

### Hooks

#### useKeyEvent — Callback type changed to `KeyboardEventCallback`

The `callback` property in `UseKeyEventArgs` has been changed from `GenericEventCallback` to `KeyboardEventCallback`:

| Property | Before (v3) | After (v4) |
|----------|-------------|------------|
| `callback` | `GenericEventCallback` (`(ev: Event \| React.UIEvent) => unknown`) | `KeyboardEventCallback` (`(event: KeyboardEvent) => unknown`) |

**Before:**
```tsx
import { useKeyEvent } from "@vibe/core";

useKeyEvent({
  keys: ["Enter"],
  callback: (event: React.KeyboardEvent) => {
    // React synthetic event type
    console.log(event.key);
  }
});
```

**After:**
```tsx
import { useKeyEvent } from "@vibe/core";

useKeyEvent({
  keys: ["Enter"],
  callback: (event: KeyboardEvent) => {
    // Native DOM KeyboardEvent
    console.log(event.key);
  }
});
```

**Why:** `useKeyEvent` uses native DOM `addEventListener` internally, so callbacks always receive native `KeyboardEvent` objects at runtime. The previous `GenericEventCallback` type was overly broad and did not reflect the actual event type. This change improves type safety and developer experience.

**Migration:** TypeScript will flag any type mismatches automatically. Update your callback parameter type from `React.KeyboardEvent` or `GenericEventCallback` to native `KeyboardEvent`. All standard keyboard event properties (`.key`, `.code`, `.ctrlKey`, `.preventDefault()`, etc.) are available on the native type.

**Removed `noSpacing` prop**

The `noSpacing` prop has been removed. When `areLabelsHidden` is `true`, the toggle now automatically removes its surrounding margin, which was the primary use case for `noSpacing`.

- **Before:** `<Toggle areLabelsHidden noSpacing />`
- **After:** `<Toggle areLabelsHidden />`

If you used `noSpacing` without `areLabelsHidden`, wrap the toggle in a container and apply spacing/margin control there instead.

A codemod is available to automatically remove the `noSpacing` prop:

```bash
npx @vibe/codemod toggle-no-spacing
```

### TypeScript Types

<!-- This section will be populated as breaking changes are identified -->

### CSS and Design Tokens

#### Package Renamed: `monday-ui-style` → `@vibe/style`

The `monday-ui-style` package has been renamed to `@vibe/style` to align with the Vibe Design System naming conventions.

**Before:**
```bash
npm install monday-ui-style
```
```json
{ "dependencies": { "monday-ui-style": "^0.26.2" } }
```

**After:**
```bash
npm install @vibe/style
```
```json
{ "dependencies": { "@vibe/style": "^0.26.2" } }
```

**Import updates required:**
```diff
- import "monday-ui-style/dist/index.min.css";
+ import "@vibe/style/dist/index.min.css";
```

**SCSS import updates:**
```diff
- @import "~monday-ui-style/dist/functions";
- @import "~monday-ui-style/dist/mixins";
+ @import "~@vibe/style/dist/functions";
+ @import "~@vibe/style/dist/mixins";
```

**Stylelint config updates:**
```diff
- "extends": ["monday-ui-style/stylelint-config"]
+ "extends": ["@vibe/style/stylelint-config"]

- "monday-ui-style/use-defined-css-var-when-available": true
+ "@vibe/style/use-defined-css-var-when-available": true

- "monday-ui-style/use-new-spacing-tokens": true
+ "@vibe/style/use-new-spacing-tokens": true
```

**Vite/webpack alias updates:**
```diff
- "monday-ui-style/dist": path.resolve("./node_modules/monday-ui-style/dist"),
+ "@vibe/style/dist": path.resolve("./node_modules/@vibe/style/dist"),
```

**Codemod:** ❌ Not available — rename your imports manually or use find-and-replace.

---

#### TableCellSkeleton — Removed `@supports` fallback for `aspect-ratio`

The `@supports (aspect-ratio: 1 / 1)` and `@supports not (aspect-ratio: 1 / 1)` blocks have been removed from the `TableCellSkeleton` styles. The `aspect-ratio: 1 / 1` property is now applied unconditionally to `.circle` and `.rectangle` skeleton types.

**Impact:** Browsers that do not support `aspect-ratio` (IE 11, Safari < 15) will no longer receive the `width: 21px` fallback for circle/rectangle skeleton cells.

**Migration:** No action required for projects targeting modern browsers. If you must support older browsers without `aspect-ratio`, add your own fallback styles:

```css
/* Custom fallback for legacy browsers */
@supports not (aspect-ratio: 1 / 1) {
  .your-skeleton-circle,
  .your-skeleton-rectangle {
    width: 21px;
  }
}
```

**Codemod:** ❌ Not applicable — this is a CSS-only change with no automated migration path.

#### All Components — CSS physical properties replaced with logical properties

All component styles now use CSS logical properties instead of physical direction properties. This enables proper RTL (right-to-left) language support automatically.

**Properties replaced:**

| Physical property | Logical property |
|---|---|
| `margin-left` | `margin-inline-start` |
| `margin-right` | `margin-inline-end` |
| `margin-left` + `margin-right` (both) | `margin-inline` |
| `padding-left` | `padding-inline-start` |
| `padding-right` | `padding-inline-end` |
| `padding-left` + `padding-right` (both) | `padding-inline` |
| `border-left` | `border-inline-start` |
| `border-right` | `border-inline-end` |
| `border-left` + `border-right` (both) | `border-inline` |
| `left` (positioning) | `inset-inline-start` |
| `right` (positioning) | `inset-inline-end` |

**Affected components:** Accordion, AlertBanner, Avatar, AvatarGroup, Badge, Button, Checkbox, Chips, ColorPicker, Combobox, DatePicker, EditableTypography, Label, ListItemAvatar, ListItemIcon, Menu (MenuItem, MenuTitle), Modal, MultiStepIndicator, ProgressBar, Search, Slider, SplitButton, Steps, TextArea, TextField, Tipseen, Toast, Toggle, and utility classes (`mx`, `px`).

**Impact:** No visual change for LTR applications. RTL layouts will now render correctly without additional CSS overrides.

**Migration:** If you have custom CSS that overrides Vibe component styles using physical direction properties, update those overrides to use logical properties:

```css
/* Before (v3) */
.my-custom-override .icon {
  margin-right: 8px;
}

/* After (v4) */
.my-custom-override .icon {
  margin-inline-end: 8px;
}
```

**Codemod:** ❌ Not available — this is a CSS-only change affecting component internals. Custom overrides targeting Vibe component internals should be updated manually.

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

### MenuButton

#### First menu item is now focused by default

When a `MenuButton` opens a `Menu`, the first menu item is now automatically focused (`focusItemIndexOnMount={0}`). Previously, no item was focused on mount.

This improves keyboard accessibility — users can immediately navigate menu items with arrow keys after opening the menu.

**If you need the old behavior** (no item focused on mount), explicitly pass `focusItemIndexOnMount={-1}` to your Menu:

```tsx
<MenuButton>
  <Menu focusItemIndexOnMount={-1}>
    <MenuItem title="Option 1" />
    <MenuItem title="Option 2" />
  </Menu>
</MenuButton>
```

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

#### `children` prop now accepts only a single `MenuChild` (not an array)

The `children` prop of `MenuItem` previously accepted `MenuChild | MenuChild[]`, but passing an array was never valid at runtime — `MenuItem` always required exactly one `Menu` element as its child (enforced by `React.Children.only`). The type has been narrowed to `MenuChild` to match the actual runtime constraint.

**Before (v3):**
```tsx
<MenuItem title="Has submenu">
  {[<Menu key="sub">...</Menu>]}
</MenuItem>
```

**After (v4):**
```tsx
<MenuItem title="Has submenu">
  <Menu>...</Menu>
</MenuItem>
```

**Migration:** Replace any array-wrapped `children` with a single `Menu` element. If your code already passes a single `Menu` as `children`, no change is needed.

> **No codemod available.** This is a type-only narrowing — passing an array was a runtime error in v3 as well.

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

#### New Dialog implementation (floating-ui based)

The legacy class-based `Dialog` component (using `react-popper` / Popper.js) has been replaced with a new functional implementation using `@floating-ui/react-dom`.

**Key changes:**
- `modifiers` prop removed - use `middleware` prop instead (Floating UI middleware)
- `usePopover` hook removed from `@vibe/dialog`
- Component is now a functional component (was class-based `PureComponent`)
- Positioning is handled by Floating UI instead of Popper.js

**Migration:**

```tsx
// Before (v3) - Popper.js modifiers
import { Dialog } from "@vibe/core";

<Dialog
  modifiers={[
    { name: "preventOverflow", options: { mainAxis: false } }
  ]}
  position="bottom"
  content={<div>Content</div>}
>
  <button>Reference</button>
</Dialog>

// After (v4) - Floating UI middleware
import { Dialog } from "@vibe/core";
import { shift } from "@floating-ui/react-dom";

<Dialog
  middleware={[shift({ mainAxis: false })]}
  position="bottom"
  content={<div>Content</div>}
>
  <button>Reference</button>
</Dialog>
```

**Tooltip / Tipseen changes:**
- `modifiers` prop removed from `Tooltip` and `Tipseen` components
- Most users don't need modifiers — the new Dialog handles positioning automatically

**`usePopover` hook removed:**
If you were using `usePopover` from `@vibe/dialog`, migrate to `useFloating` from `@floating-ui/react-dom` directly.

**Codemod:** ❌ Manual migration required for `modifiers` → `middleware` conversion.

#### `addKeyboardHideShowTriggersByDefault` default changed to `true`

The `addKeyboardHideShowTriggersByDefault` prop now defaults to `true` (was `false`). This means keyboard focus/blur events will automatically behave like mouse enter/leave events, improving accessibility for keyboard users.

**Impact:** Dialogs that use `mouseenter`/`mouseleave` triggers will now also respond to keyboard `focus`/`blur` events by default.

**Before (v3):**
```tsx
// Keyboard triggers were disabled by default — had to opt in
<Dialog showTrigger="mouseenter" hideTrigger="mouseleave" addKeyboardHideShowTriggersByDefault>
  <button>Hover or focus me</button>
</Dialog>
```

**After (v4):**
```tsx
// Keyboard triggers are enabled by default
<Dialog showTrigger="mouseenter" hideTrigger="mouseleave">
  <button>Hover or focus me</button>
</Dialog>

// To restore old behavior, explicitly disable
<Dialog showTrigger="mouseenter" hideTrigger="mouseleave" addKeyboardHideShowTriggersByDefault={false}>
  <button>Hover only</button>
</Dialog>
```

**Codemod:** ❌ Not needed — this is a default value change. Add `addKeyboardHideShowTriggersByDefault={false}` only if you need the old behavior.

#### Removed `enableNestedDialogLayer` prop

The `enableNestedDialogLayer` prop has been removed. Dialog now always wraps its content with `LayerProvider`, so nested dialogs work correctly by default without any configuration.

**Before (v3):**
```tsx
<Dialog enableNestedDialogLayer content={<NestedDropdown />}>
  <button>Open</button>
</Dialog>
```

**After (v4):**
```tsx
// Simply remove the prop — LayerProvider is always applied
<Dialog content={<NestedDropdown />}>
  <button>Open</button>
</Dialog>
```

**Codemod available**: This change is handled automatically by `npx @vibe/codemod --migration v4`

### Tooltip

#### `TooltipProps` now extends `DialogProps`

`TooltipProps` now extends `DialogProps` (with overrides for `position`, `content`, and `children`). This is a TypeScript-level breaking change that improves type safety and consistency.

**What changed:**
- `TooltipProps` now inherits all `DialogProps` (event handlers, positioning, animation, etc.)
- Duplicate prop definitions were removed from `TooltipProps` (they come from `DialogProps` now)
- `position` prop is still restricted to `"top" | "right" | "bottom" | "left"` (narrower than Dialog's 12 positions)
- `content` prop remains required (unlike Dialog's optional `content`)
- `children` prop maintains its discriminated union with `forceRenderWithoutChildren`

**Impact:**
- If you use `Partial<TooltipProps>` in your types (most common pattern), your code will accept additional Dialog props like `onBlur`, `onFocus`, `disable`, `startingEdge`, etc. This is **additive** and backward compatible.
- If you have custom types that wrap `TooltipProps` and explicitly list its properties, you may need to update them.
- If you spread Tooltip props into a non-Dialog element, you may get additional unexpected DOM attributes. Use destructuring to pick only the props you need.

**No code changes required** for most users. This change improves type inference and allows passing Dialog-level props directly to Tooltip.

**Codemod:** ❌ Not needed — this is a type-level change only. No runtime behavior changes.

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

### TextWithHighlight

#### Removed `tooltipPosition` prop

The deprecated `tooltipPosition` prop has been removed. Use `tooltipProps.position` instead.

**Before (v3):**

```jsx
<TextWithHighlight tooltipPosition="top" text="hello" highlightTerm="he" />
```

**After (v4):**

```jsx
<TextWithHighlight tooltipProps={{ position: "top" }} text="hello" highlightTerm="he" />
```

**Migration:** Replace `tooltipPosition="value"` with `tooltipProps={{ position: "value" }}`.

**Codemod:** The v4 codemod automatically migrates `tooltipPosition` values to `tooltipProps.position`.

### TipseenImage

#### Removed `TipseenImage` component

The `TipseenImage` component has been removed. It was a thin wrapper around `TipseenMedia` that only rendered an `<img>` tag. Use `TipseenMedia` directly with an `<img>` child instead.

**Before (v3):**

```tsx
import { TipseenImage } from "@vibe/core";

<TipseenImage src={picture} alt="description" className="custom" tipseenMediaClassName="mediaClass" />
```

**After (v4):**

```tsx
import { TipseenMedia } from "@vibe/core";

<TipseenMedia className="mediaClass">
  <img src={picture} alt="description" className="custom" style={{ objectFit: "cover", width: "100%" }} />
</TipseenMedia>
```

**Prop mapping:**
- `src` → `<img src={...}>`
- `alt` → `<img alt={...}>`
- `className` → `<img className={...}>`
- `tipseenMediaClassName` → `<TipseenMedia className={...}>`

**Codemod:** The v4 codemod automatically transforms `TipseenImage` to `TipseenMedia` with an `<img>` child.

### Link

#### Removed `@supports` CSS block for icon spacing

The `@supports (margin-inline-start: initial)` CSS feature detection block has been removed from the Link component's styles. CSS logical properties are now used directly since all modern browsers support them.

**What changed:**
- `.iconStart` now uses `margin-inline-end` directly instead of `margin-right` with an `@supports` override
- `.iconEnd` now uses `margin-inline-start` directly instead of `margin-left` with an `@supports` override
- Physical direction properties (`margin-right`, `margin-left`) are no longer set

**Impact:**
If you have custom CSS that overrides Link icon spacing using physical direction properties (`margin-right` on `.iconStart` or `margin-left` on `.iconEnd`), you need to update those overrides to use CSS logical properties.

**Before (v3):**

```css
/* Custom override using physical properties */
.iconStart {
  margin-right: 8px;
}
.iconEnd {
  margin-left: 8px;
}
```

**After (v4):**

```css
/* Use logical properties instead */
.iconStart {
  margin-inline-end: 8px;
}
.iconEnd {
  margin-inline-start: 8px;
}
```

**Codemod:** ❌ Not available — this is a CSS-only change. Search your codebase for overrides targeting Link's `.iconStart` or `.iconEnd` classes and update to logical properties.

#### VirtualizedGrid

**Fixed `itemRenderer` return type**

The `itemRenderer` prop had an incorrect return type of `ItemType | GridChildComponentProps<ItemType>`. This caused TypeScript errors when passing valid JSX renderers. The type is now `ReactElement`.

**Before (v3):**

```tsx
// TypeScript would show errors with this usage:
<VirtualizedGrid
  items={items}
  itemRenderer={(item, index, style) => (
    <div key={index} style={style}>{item.value}</div>
  )}
/>
```

**After (v4):**

```tsx
// Works correctly — no type changes needed at the call site:
<VirtualizedGrid
  items={items}
  itemRenderer={(item, index, style) => (
    <div key={index} style={style}>{item.value}</div>
  )}
/>
```

If you had explicit type annotations for `itemRenderer` referencing the old return type, update them:

```typescript
// Before (v3)
const renderer: (item: VirtualizedGridItemType, index: number, style: CSSProperties) =>
  VirtualizedGridItemType | GridChildComponentProps<VirtualizedGridItemType> = ...;

// After (v4)
const renderer: (item: VirtualizedGridItemType, index: number, style: CSSProperties) =>
  ReactElement = ...;
```

**Codemod:** ❌ Not available — this is a type-only change with no runtime impact.

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