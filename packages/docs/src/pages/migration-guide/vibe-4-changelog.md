# Vibe 4 Changelog

This is the complete list of changes in the Vibe 4 release. Changes that are marked with a 🔀 are covered by a migration script (codemod).

For the complete migration guide see the [Vibe 4 Migration Guide](https://vibe.monday.com/?path=/docs/vibe-4-migration-guide).

## General

- React 19 support — all deprecated React APIs (`findDOMNode`, class components) have been removed
- Package rename — `monday-ui-style` renamed to `@vibe/style` 🔀
- `moment` removed as a peer dependency
- `@vibe/core/next` consolidation — AttentionBox, Dropdown, DatePicker, Dialog, and Modal promoted to `@vibe/core`. Only `List` remains in `@vibe/core/next`
- `box-sizing: border-box` is now expected globally
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

- The `disableClickableBehavior` prop has been removed 🔀

### Clickable

- `ariaHasPopup` now accepts `boolean` only (was `boolean | string`)
- `tabIndex` now accepts `number` only (was `string | number`)

### CustomSvgIcon

- The `onClick` and `clickable` props have been removed — wrap with a clickable element instead

### DatePicker

- Legacy DatePicker (`react-dates` + `moment`) replaced with new implementation (`react-day-picker` + `date-fns`)
- `date` prop type changed from `moment.Moment` to `Date`
- `onPickDate` renamed to `onDateChange`
- `range` boolean prop replaced with `mode: "single" | "range"`
- `moment` no longer required as a peer dependency

### Dialog

- Legacy class-based Dialog (Popper.js) replaced with new functional Dialog (Floating UI)
- `modifiers` prop removed — use `middleware` prop instead
- `enableNestedDialogLayer` prop removed — `LayerProvider` is always used
- `addKeyboardHideShowTriggersByDefault` default changed to `true`
- `usePopover` hook removed from `@vibe/dialog`
- `Refable` component removed from public exports
- Removed dependencies: `react-popper`, `@popperjs/core`
- Added dependency: `@floating-ui/react-dom`

### Dropdown

- Old `react-select`-based Dropdown removed, new custom Dropdown promoted as default export
- Options structure changed from `{ id, text }` to `{ value, label }`
- Sub-components removed: `DropdownMenu`, `DropdownOption`, `DropdownSingleValue`
- If importing from `@vibe/core/next`, change to `@vibe/core`
- See the [Dropdown Migration Guide](https://vibe.monday.com/?path=/docs/components-dropdown-migration-guide--docs)

### Flex

> codemod: `Flex-component-migration`

- The `"stretch"` value removed from `justify` prop (`justify-content: stretch` is not valid CSS) 🔀

### Icon

> codemod: `icon-props-rename`

- `iconLabel` prop renamed to `label` 🔀
- `iconType` prop renamed to `type` 🔀
- `iconSize` prop renamed to `size` 🔀
- `size` prop now applies to `type="src"` icons (previously only affected `type="svg"`)

### LinearProgressBar (ProgressBar)

- `LinearProgressBar` renamed to `ProgressBar` — update imports accordingly
- `LinearProgressBarProps` renamed to `ProgressBarProps`
- `allowExceedingMax` prop added to support values exceeding `max`

### MenuButton

- `focusItemIndexOnMount` now defaults to `0` for Menu children (first item focused on open)

### MenuItem

- `children` prop now accepts only a single `MenuChild`, not `MenuChild[]`
- Internal `MenuItemIcon` `label` prop removed (was a no-op)

### Modal

- Legacy class-based Modal (`a11y-dialog`, `body-scroll-lock`) removed, new functional Modal promoted as default export
- If importing from `@vibe/core/next`, change to `@vibe/core`
- Sub-components (`ModalHeader`, `ModalContent`, `ModalFooter`) have updated APIs

### Steps

- Finish button now renders by default on the last step

### TextField

> codemod: `TextField-component-migration`

- `iconName` prop renamed to `icon` 🔀
- `iconsNames` object prop replaced with flat `iconLabel` and `secondaryIconLabel` props 🔀

### TextWithHighlight

> codemod: `TextWithHighlight-component-migration`

- The `tooltipPosition` prop has been removed, use `tooltipProps={{ position: "value" }}` instead 🔀

### TipseenImage

> codemod: `TipseenImage-component-migration`

- `TipseenImage` component removed — use `TipseenMedia` with an `<img>` child instead 🔀

### Toggle

> codemod: `toggle-no-spacing`

- The `noSpacing` prop has been removed — margin is auto-removed when `areLabelsHidden` is `true` 🔀
- Duplicate `data-testid="toggle"` removed from internal visual div

### Tooltip

- `TooltipProps` now extends `DialogProps`
- `modifiers` prop removed — use `middleware` instead (same as Dialog)

### VirtualizedGrid

- `itemRenderer` return type corrected to `ReactElement`

### VirtualizedList

- Deprecated `getItemHeight` prop removed
- Deprecated `onVerticalScrollbarVisiblityChange` prop removed

## Hooks

### useMergeRefs

- Removed from `@vibe/core` — use `react-merge-refs` or implement your own

### useListenFocusTriggers

- Removed from `@vibe/core` — inline the logic using `useEventListener`

### useActiveDescendantListFocus

- `onItemClickCallback` and `createOnItemClickCallback` return values removed — use `onItemClick` directly

### useKeyEvent

- `callback` type changed from `GenericEventCallback` to `KeyboardEventCallback` (native `KeyboardEvent`)

## TypeScript Types

### VibeComponent

- `VibeComponent<T, P>` type alias removed from `@vibe/core` and `@vibe/shared` — use `forwardRef<P, T>` and let TypeScript infer

### withStaticProps

- `withStaticProps` and `withStaticPropsWithoutForwardRef` utilities removed from `@vibe/core` and `@vibe/shared`

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

### Input Padding

- `padding-inline-start` reduced from `16px` to `8px` across TextField, BaseInput, TextArea, and Dropdown Trigger

### Input Placeholder Color

- All inputs now use `var(--placeholder-color)` instead of `var(--secondary-text-color)` for placeholder text

### CSS Logical Properties

- Physical CSS properties replaced with logical properties throughout
- `@supports` fallback blocks removed from Link and TableCellSkeleton (logical properties and `aspect-ratio` are supported by all modern browsers)
