# Vibe Design System v4 Migration Guide

> **Status**: Under Development
>
> This guide is actively being developed alongside Vibe v4. Content will be updated as breaking changes are finalized.

## Overview

Vibe 4 brings React 19 support, a ~170KB smaller bundle (min+gzip), and modern API patterns. This guide walks you through migrating from v3 to v4.

## Migration Steps

### 1. Update Dependencies

```bash
# Install Vibe 4
npm install @vibe/core@4

# If you use other Vibe packages
npm install @vibe/icons@4 @vibe/testkit@4
```

If you use `monday-ui-style`, replace it with `@vibe/style`:

```bash
npm install @vibe/style && npm remove monday-ui-style
```

### 2. Run Automated Migration

```bash
npx @vibe/codemod --migration v4 --target ./src --extensions tsx,jsx -y
```

For more information and options, refer to the [@vibe/codemod](https://github.com/mondaycom/vibe/blob/master/packages/codemod/README.md) docs.

### 3. Apply manual changes as described in the [Breaking Changes](#breaking-changes) section below.

### 4. Build and test your application thoroughly to ensure everything works as expected.

### 5. Run Prettier or any code formatting tool to format the changes made by the migration script [optional].

## Breaking Changes

The following changes are **complementary to the migration script** and require manual intervention, assuming the migration script has run successfully. If you prefer migrating entirely manually (without `@vibe/codemod`), refer to the [Complete Vibe 4 changelog](./VIBE4_CHANGELOG.md).

### Dropdown — New API

The old `Dropdown` (based on `react-select`) has been completely replaced with a new implementation.

Key changes:

- Options: `{ id, text }` → `{ value, label }`
- Sub-components removed: `DropdownMenu`, `DropdownOption`, `DropdownSingleValue`
- Static properties removed (use string literals)
- Built-in form field support (`label`, `helperText`, `error`, `required`)

```tsx
// Before (v3)
import { Dropdown } from "@vibe/core";
const options = [{ id: "1", label: "Option 1" }];
<Dropdown options={options} size={Dropdown.sizes.MEDIUM} searchable />

// After (v4)
import { Dropdown } from "@vibe/core";
const options = [{ value: "1", label: "Option 1" }];
<Dropdown options={options} size="medium" searchable label="Select an option" clearAriaLabel="Clear" />
```

If you were already using the new Dropdown from `@vibe/core/next`, just update the import path (handled by codemod).

See the [Dropdown Migration Guide](https://vibe.monday.com/?path=/docs/components-dropdown-migration-guide--docs) for detailed instructions.

### Combobox — Deprecated

The `Combobox` component is deprecated and will be removed in a future version. Use `Dropdown` with box mode instead.

### DatePicker — New implementation

DatePicker has been rewritten with a new visual design and API. It no longer uses `moment` — it now uses native `Date` objects and `date-fns`.

```tsx
// Before (v3)
import moment from "moment";
<DatePicker date={moment("2024-01-15")} onPickDate={d => setDate(d)} range />

// After (v4)
<DatePicker date={new Date("2024-01-15")} onDateChange={d => setDate(d)} mode="range" />
```

### Modal — Replaced with new component

The legacy `Modal` component has been removed and replaced with a completely new `Modal` component with a different API. The new Modal was previously available via `@vibe/core/next`.

Removed: `ModalFooterButtons`, `ModalWidth` type, legacy sub-component props.
New: `ModalBasicLayout`, `ModalMediaLayout`, `ModalSideBySideLayout`, `ModalFooterWizard`.

```tsx
// Before (v3) — Legacy Modal
import { Modal, ModalContent, ModalFooterButtons } from "@vibe/core";
<Modal id="my-modal" title="Title" show={show} onClose={close}>
  <ModalContent>Content</ModalContent>
  <ModalFooterButtons primaryButtonText="OK" onPrimaryButtonClick={close} />
</Modal>

// After (v4) — New Modal
import { Modal, ModalBasicLayout, ModalHeader, ModalContent, ModalFooter } from "@vibe/core";
<Modal id="my-modal" show={show} size="medium" onClose={close}>
  <ModalBasicLayout>
    <ModalHeader title="Title" />
    <ModalContent>Content</ModalContent>
  </ModalBasicLayout>
  <ModalFooter primaryButton={{ text: "OK", onClick: close }} />
</Modal>
```

If you were using the new Modal from `@vibe/core/next`, just update the import path (handled by codemod).

### Dialog / Tooltip / Tipseen — `modifiers` → `middleware`

These components now use `@floating-ui/react-dom` instead of Popper.js.

```tsx
// Before (v3) — Popper.js modifiers
<Dialog modifiers={[{ name: "preventOverflow", options: { mainAxis: false } }]} position="bottom" content={<div>Content</div>}>
  <button>Reference</button>
</Dialog>

// After (v4) — Floating UI middleware
import { shift } from "@floating-ui/react-dom";
<Dialog middleware={[shift({ mainAxis: false })]} position="bottom" content={<div>Content</div>}>
  <button>Reference</button>
</Dialog>
```

If you used `usePopover` from `@vibe/dialog`, migrate to `useFloating` from `@floating-ui/react-dom`.

### AttentionBox — Type values renamed

| Before | After |
| --- | --- |
| `type="success"` | `type="positive"` |
| `type="danger"` | `type="negative"` |
| `type="dark"` | `type="neutral"` |

Also:
- `entryAnimation` → `animate`
- `withIconWithoutHeader` / `withoutIcon` → `icon={false}`
- `AttentionBoxLink` removed — use `link` prop instead

```tsx
// Before (v3)
<AttentionBox type="danger" entryAnimation>
  <AttentionBoxLink href="/docs" text="Learn more" />
</AttentionBox>

// After (v4)
<AttentionBox type="negative" animate link={{ href: "/docs", text: "Learn more" }} />
```

### Icon

**`onClick` and `clickable` removed from internal `CustomSvgIcon`** — If you were using `CustomSvgIcon` directly, wrap the icon with an accessible clickable element (e.g. `<button>`, `<Clickable>`, `<IconButton>`) and move the `onClick` handler to the wrapper.

**`size` prop now applies to `type="src"` icons**

Previously, `size` only affected SVG component icons. Now it also sets `width` and `height` on URL-based SVG icons (default: `16`). If you relied on intrinsic SVG dimensions for `type="src"` icons, set `size` to match the SVG's original dimensions.

### Clickable — Stricter types

- `aria-haspopup` now accepts `boolean` only (was `boolean | string`)
- `tabIndex` now accepts `number` only (was `string | number`)

```tsx
// Before (v3)
<Clickable tabIndex="-1" aria-haspopup="true" />

// After (v4)
<Clickable tabIndex={-1} aria-haspopup={true} />
```

### Dialog — `addKeyboardHideShowTriggersByDefault` now defaults to `true`

Dialogs with mouse enter/leave triggers now also respond to keyboard focus/blur by default. To restore old behavior:

```tsx
<Dialog addKeyboardHideShowTriggersByDefault={false} ... />
```

### MenuButton — First menu item focused by default

`MenuButton` now passes `focusItemIndexOnMount={0}` to Menu children. To restore old behavior:

```tsx
<MenuButton>
  <Menu focusItemIndexOnMount={-1}>
    <MenuItem title="Option 1" />
  </Menu>
</MenuButton>
```

### MenuItem — `children` accepts only a single `MenuChild`

The type was narrowed from `MenuChild | MenuChild[]` to `MenuChild`. This matches the runtime behavior (`React.Children.only`).

### Steps — Finish button shown by default

The Steps component now always shows a "Finish" button on the last step. No code changes needed unless you want to customize it via `finishButtonProps`.

### Hooks

**`useMergeRefs` — Removed**

```tsx
// Before (v3)
import { useMergeRefs } from "@vibe/core";
const ref = useMergeRefs({ refs: [ref1, ref2] });

// After (v4)
import { mergeRefs } from "react-merge-refs";
const ref = mergeRefs([ref1, ref2]);
```

**`useListenFocusTriggers` — Removed**

Inline the focus-detection logic using `useEventListener`:

```tsx
// Before (v3)
useListenFocusTriggers({ ref, onFocusByKeyboard, onFocusByMouse });

// After (v4) — inline with useEventListener
const isMouseDown = useRef(false);
useEventListener({ eventName: "mousedown", ref, callback: () => { isMouseDown.current = true; } });
useEventListener({ eventName: "mouseup", ref, callback: () => { isMouseDown.current = false; } });
useEventListener({ eventName: "focus", ref, callback: () => {
  isMouseDown.current ? onFocusByMouse() : onFocusByKeyboard();
}});
```

**`useActiveDescendantListFocus` — Removed `onItemClickCallback` and `createOnItemClickCallback`**

Remove these from destructuring and use your `onItemClick` callback directly.

**`useKeyEvent` — Callback type changed**

`callback` type changed from `GenericEventCallback` to `KeyboardEventCallback` (native `KeyboardEvent`). TypeScript will flag any mismatches.

### CSS Changes

**Input padding reduced** — `padding-inline-start` reduced from 16px to 8px across TextField, BaseInput, TextArea, and Dropdown Trigger. No code changes needed, but check custom CSS overrides.

**Input placeholder color** — Inputs now use `--placeholder-color` instead of `--secondary-text-color`. If you override placeholder appearance via `--secondary-text-color`, use `--placeholder-color` instead.

## Troubleshooting

**TypeScript errors after migration:**
1. Clear TypeScript cache: `rm -rf node_modules/.cache/typescript`
2. Restart your IDE's TypeScript server
3. Ensure all `@types/react` packages are up to date

**Styling issues:**
1. Check for deprecated `--spacing-*` token usage
2. Check input padding changes if you have pixel-perfect layout requirements

**Rollback to v3:**
```bash
git checkout -- .
npm install @vibe/core@^3.0.0
```

## Help

If you have any questions, feedback, or need help, please don't hesitate to reach out to us. You can provide [feedback](https://github.com/mondaycom/vibe/discussions) or [report issues](https://github.com/mondaycom/vibe/issues/new/choose) in the [Vibe repository](https://github.com/mondaycom/vibe) on GitHub.
