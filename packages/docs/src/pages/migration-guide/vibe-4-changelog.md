# Vibe 4 Changelog

This is the complete list of changes in the Vibe 4 release. Changes that are marked with a 🔀 are covered by a migration script (codemod).

For the complete migration guide see the [Vibe 4 Migration Guide](https://vibe.monday.com/?path=/docs/vibe-4-migration-guide--docs).

## General

- React 19 support — all deprecated React APIs (`findDOMNode`, class components) removed; `framer-motion` replaced with `react-transition-group` + CSS animations; `react-transition-group` components updated to use `nodeRef` instead of `findDOMNode`
- Package rename — `monday-ui-style` renamed to `@vibe/style` 🔀
- `moment` removed as a peer dependency
- `@vibe/core/next` consolidation — AttentionBox, Dropdown, DatePicker, Dialog, and Modal promoted to `@vibe/core`. Only `List` remains in `@vibe/core/next`
- All deprecated enum exports and static properties removed across all components 🔀 (see [Enums](#enums) section)
- ARIA props renamed from camelCase to standard `aria-*` attributes across all components 🔀 (see [ARIA Props](#aria-props) section)

### Removed dependencies

| Removed | Replacement |
|---|---|
| `@popperjs/core`, `react-popper` | `@floating-ui/react-dom` |
| `react-dates`, `moment` | `react-day-picker`, `date-fns` |
| `react-select`, `react-windowed-select` | New custom Dropdown |
| `framer-motion` | `react-transition-group` + CSS animations |
| `a11y-dialog`, `body-scroll-lock` | New functional Modal |

## Enums

> codemod: `v3-to-v4/enums`

All deprecated enum exports and static property accessors have been removed. Use string literals instead. 🔀

Affected components: AlertBanner, AttentionBox, Avatar, Badge, Box, Button, Clickable, ColorPicker, Counter, Dialog, Divider, Dropdown, Flex, Heading, Icon, IconButton, Label, LinearProgressBar, List, ListItem, ListItemIcon, Loader, MenuButton, MenuTitle, MultiStepIndicator, Skeleton, Slider, Steps, TabPanels, Text, TextField, ThemeProvider, Tipseen, Toast, Tooltip.

Example: `Button.sizes.LARGE` → `"large"`, `ButtonType.PRIMARY` → `"primary"`

## ARIA Props

> codemod: `aria-props-migration`

All custom camelCase ARIA props renamed to standard HTML `aria-*` attributes. 🔀

- `ariaLabel` → `aria-label` 🔀
- `ariaHidden` → `aria-hidden` 🔀
- `ariaExpanded` → `aria-expanded` 🔀
- `ariaControls` → `aria-controls` 🔀
- `ariaHasPopup` → `aria-haspopup` 🔀
- `ariaLabeledBy` / `ariaLabelledBy` → `aria-labelledby` 🔀
- `ariaDescribedBy` / `ariaDescribedby` → `aria-describedby` 🔀
- `ariaLabelDescription` (Link) → `aria-label` 🔀

Note: Component-specific compound props like `inputAriaLabel`, `menuAriaLabel`, `closeButtonAriaLabel` are not affected.

## Components

### AttentionBox

- Legacy `AttentionBox` removed, new implementation (from `@vibe/core/next`) promoted to `@vibe/core`
- `AttentionBoxLink` removed as a public export — use the `link` prop instead
- `AttentionBoxConstants` removed (deprecated enums: `AttentionBoxType`, `IconTypeEnum`) 🔀
- Type values changed: `"success"` → `"positive"`, `"danger"` → `"negative"`, `"dark"` → `"neutral"`
- `entryAnimation` prop → `animate`
- `withoutIcon` / `withIconWithoutHeader` props removed — use `icon={false}`

### Chips

- The `disableClickableBehavior` prop has been removed — Chips now always uses the clickable wrapper when click handlers are provided 🔀

### Clickable

- `ariaHasPopup` now accepts `boolean` only (was `boolean | string`)
- `tabIndex` now accepts `number` only (was `string | number`)

### DatePicker

- Legacy DatePicker (`react-dates` + `moment`) replaced with new implementation (`react-day-picker` + `date-fns`) with an updated visual design
- `date` prop type changed from `moment.Moment` to `Date`
- `onPickDate` renamed to `onDateChange`
- `range` boolean prop replaced with `mode: "single" | "range"`
- `moment` no longer required as a peer dependency

### Dialog

- Legacy class-based Dialog (Popper.js) replaced with new functional Dialog (Floating UI)
- `modifiers` prop removed — use `middleware` prop instead
- `enableNestedDialogLayer` prop removed — `LayerProvider` is always used
- `addKeyboardHideShowTriggersByDefault` default changed to `true`
- Removed dependencies: `react-popper`, `@popperjs/core`
- Added dependency: `@floating-ui/react-dom`

### Dropdown

- Old `react-select`-based Dropdown removed, new custom Dropdown promoted as default export
- Options structure changed from `{ id, text }` to `{ value, label }`
- Sub-components removed: `DropdownMenu`, `DropdownOption`, `DropdownSingleValue`
- If importing from `@vibe/core/next`, change to `@vibe/core`
- See the [Dropdown Migration Guide](https://vibe.monday.com/?path=/docs/components-dropdown-migration-guide--docs)
- `padding-inline-start` reduced from `16px` to `8px` on Dropdown Trigger
- Placeholder now uses `var(--placeholder-color)` instead of `var(--secondary-text-color)`

### Flex

> codemod: `Flex-component-migration`

- The `"stretch"` value removed from `justify` prop 🔀

### Icon

> codemod: `icon-props-rename`

- `iconLabel` prop renamed to `label` 🔀
- `iconType` prop renamed to `type` 🔀
- `iconSize` prop renamed to `size` 🔀
- `size` prop now applies to `type="src"` icons (previously only affected `type="svg"`)
- `onClick` and `clickable` props removed from internal `CustomSvgIcon` — wrap with a clickable element (e.g. `<IconButton>`) instead

### LinearProgressBar (ProgressBar)

- `LinearProgressBar` renamed to `ProgressBar` — update imports accordingly
- `LinearProgressBarProps` renamed to `ProgressBarProps`

### MenuButton

- `focusItemIndexOnMount` now defaults to `0` for Menu children (first item focused on open)

### MenuItem

- `children` prop now accepts only a single `MenuChild`, not `MenuChild[]`

### Modal

- Legacy Modal removed and replaced with a completely new Modal component with a different API (previously available via `@vibe/core/next`)
- Removed: `ModalFooterButtons`, `ModalWidth` type, legacy sub-component props
- New: `ModalBasicLayout`, `ModalMediaLayout`, `ModalSideBySideLayout`, `ModalFooterWizard`

### Steps

- Finish button now renders by default on the last step

### Tipseen

- `modifiers` prop removed — use `middleware` instead (same as Dialog/Tooltip)

### TextField

> codemod: `TextField-component-migration`

- `iconName` prop renamed to `icon` 🔀
- `iconsNames` object prop replaced with flat `iconLabel` and `secondaryIconLabel` props 🔀
- `padding-inline-start` reduced from `16px` to `8px`
- Placeholder now uses `var(--placeholder-color)` instead of `var(--secondary-text-color)`

### Search

- `padding-inline-start` reduced from `16px` to `8px`
- Placeholder now uses `var(--placeholder-color)` instead of `var(--secondary-text-color)`

### TextArea

- `padding-inline-start` reduced from `16px` to `8px`
- Placeholder now uses `var(--placeholder-color)` instead of `var(--secondary-text-color)`

### NumberField

- `padding-inline-start` reduced from `16px` to `8px`
- Placeholder now uses `var(--placeholder-color)` instead of `var(--secondary-text-color)`

### Combobox

- `padding-inline-start` reduced from `16px` to `8px`
- Placeholder now uses `var(--placeholder-color)` instead of `var(--secondary-text-color)`

### TextWithHighlight

> codemod: `TextWithHighlight-component-migration`

- The `tooltipPosition` prop has been removed, use `tooltipProps={{ position: "value" }}` instead 🔀

### TipseenImage

> codemod: `TipseenImage-component-migration`

- `TipseenImage` component removed — use `TipseenMedia` with an `<img>` child instead 🔀

### Toggle

> codemod: `Toggle-component-migration`

- The `noSpacing` prop has been removed — margin is auto-removed when `areLabelsHidden` is `true` 🔀
- Duplicate `data-testid="toggle"` removed from internal visual div — the test ID is now only on the input element

### Tooltip

- `modifiers` prop removed — use `middleware` instead (same as Dialog)

### VirtualizedGrid

- `itemRenderer` return type corrected to `ReactElement`

### VirtualizedList

- Deprecated `getItemHeight` prop removed — use `itemHeight` instead
- Deprecated `onVerticalScrollbarVisiblityChange` prop removed — use `onScrollbarVisibilityChange` instead

## Hooks

### useMergeRefs

- Removed from `@vibe/core` — use `react-merge-refs` or implement your own

### useListenFocusTriggers

- Removed from `@vibe/core` — inline the logic using `useEventListener`

### useActiveDescendantListFocus

- `onItemClickCallback` and `createOnItemClickCallback` return values removed — use `onItemClick` directly

### useKeyEvent

- `callback` type changed from `GenericEventCallback` to `KeyboardEventCallback` (native `KeyboardEvent`)

## CSS and Design Tokens

### Spacing Tokens

- Deprecated semantic spacing tokens removed from `@vibe/style` 🔀 (stylelint auto-fix via `@vibe/style/use-new-spacing-tokens`)
  - `--spacing-xs` → `--space-4`
  - `--spacing-small` → `--space-8`
  - `--spacing-medium` → `--space-16`
  - `--spacing-large` → `--space-24`
  - `--spacing-xl` → `--space-32`
  - `--spacing-xxl` → `--space-48`
  - `--spacing-xxxl` → `--space-64`


