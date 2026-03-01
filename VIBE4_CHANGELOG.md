# Vibe Design System v4 Breaking Changes

This document tracks all breaking changes planned for Vibe Design System v4.0.0.

> **Status**: 🚧 In Development
>
> **Release Target**: TBD
>
> **Migration Guide**: Will be available at [vibe.monday.com](https://vibe.monday.com/?path=/docs/migration-guide--docs) upon release

## Overview

Vibe 4 represents a major evolution of the design system, focusing on:

- Modern React patterns and improved performance
- Enhanced accessibility and design consistency
- Simplified APIs and better developer experience
- Removal of deprecated features and legacy code

## Breaking Changes

<!-- Each breaking change should be documented with:
- Component/Feature affected
- Change description
- Migration path
- Codemod availability
- Related PR/Issue links
-->

### Components

#### IconButton

- [x] **Status**: Done
- **Change**: `aria-hidden` now defaults to `true` on `IconButton`
- **Reason**: Icon buttons are typically decorative and rely on `ariaLabel` for accessibility; the button element itself should be hidden from assistive technologies by default
- **Migration**: If your IconButton needs to be visible to screen readers, explicitly pass `aria-hidden={false}`
- **Codemod**: ❌ Manual (behavioral default change)

#### CustomSvgIcon

- [x] **Status**: Done
- **Change**: Removed `onClick` and `clickable` props from `CustomSvgIcon`
- **Reason**: SVG icons should be decorative; use an accessible wrapper for clickable patterns
- **Migration**: Replace `<CustomSvgIcon onClick={fn} />` with `<button onClick={fn}><CustomSvgIcon /></button>`
- **Codemod**: ❌ Manual — wrap with a clickable element and move onClick to the wrapper

#### Dropdown

- **Change**: Removed old `Dropdown` component (react-select based) and promoted new Dropdown implementation as the default export
- **Reason**: The old Dropdown was deprecated in favor of a new custom implementation with better accessibility, performance, TypeScript support, and built-in form integration
- **Migration**: Complete API change - see [Dropdown Migration Guide](https://vibe.monday.com/?path=/docs/components-dropdown-migration-guide--docs). Options structure changed from `{ id, text }` to `{ value, label }`. Removed sub-components: `DropdownMenu`, `DropdownOption`, `DropdownSingleValue`. Removed enums: `DROPDOWN_CHIP_COLORS`, `DROPDOWN_MENU_POSITION`, `DROPDOWN_MENU_PLACEMENT`. Removed static properties. If using `@vibe/core/next` import, change to `@vibe/core`.
- **Codemod**: ❌ Manual (complete API change, not automatable)

#### MenuItem

- [x] **Status**: Done
- **Change**: Removed deprecated `label` prop from internal `MenuItemIcon` component; removed now-unused `iconLabel`/`rightIconLabel` internal variables from `MenuItem`
- **Reason**: The prop was a no-op — accepted but never passed to the underlying `Icon` component
- **Migration**: No action required for `MenuItem` users. If using `MenuItemIcon` directly, remove any `label` prop.
- **Codemod**: ❌ Manual (no-op removal, no functional impact)

#### Icon

- [x] **Status**: Implemented ✅
- **Change**: Renamed props to remove "icon" prefix
  - `iconLabel` → `label`
  - `iconType` → `type`
  - `iconSize` → `size`
- **Reason**: Simplified API for better consistency and reduced verbosity
- **Migration**: Replace prop names in all Icon usages
- **Codemod**: ✅ Available - `npx @vibe/codemod icon-props-rename`
- **Task**: Monday.com task #9713029042

#### Flex

- **Change**: Removed `"stretch"` from the `justify` prop (`FlexJustify` type and `FlexJustify.STRETCH` enum value)
- **Reason**: `justify-content: stretch` is not valid CSS in flexbox, so the value had no effect and no CSS implementation
- **Migration**: Remove `justify="stretch"` or `justify={FlexJustify.STRETCH}` from `<Flex>` usage
- **Codemod**: ✅ Available (`Flex-component-migration`)
- **PR**: TBD

#### AttentionBox

- [x] **Status**: Done
- **Change**: Removed deprecated legacy AttentionBox and promoted the new AttentionBox from `@vibe/core/next` to `@vibe/core`
  - Removed legacy `AttentionBox` component with props: `withIconWithoutHeader`, `withoutIcon`, `entryAnimation`, `iconType` (limited to `"svg" | "font"`)
  - Removed `AttentionBoxLink` as a standalone public export (now internal to AttentionBox)
  - Removed `AttentionBoxConstants` (deprecated enums: `AttentionBoxType`, `IconTypeEnum`)
  - New component uses modern `forwardRef` pattern, new layout system (default + compact), new action/link props
  - Type values changed: `"success"` → `"positive"`, `"danger"` → `"negative"`, `"dark"` → `"neutral"`
- **Reason**: Legacy component was deprecated; new component provides better API, layouts, and accessibility
- **Migration**: Replace `import { AttentionBox } from "@vibe/core/next"` with `import { AttentionBox } from "@vibe/core"`. For legacy users: update type values, replace `AttentionBoxLink` children with `link` prop, replace `entryAnimation` with `animate`, remove `withIconWithoutHeader`/`withoutIcon` (use `icon={false}` instead)
- **Codemod**: ❌ Manual (significant API differences between legacy and new component)
- **PR**: TBD

#### Button

- **Change**: Removed deprecated enum exports and static properties (`ButtonType`, `ButtonColor`, `ButtonInputType` enums and `Button.sizes`, `Button.kinds`, etc.)
- **Reason**: Simplify API by removing dual ways to specify values (enum vs string), reduce bundle size, improve TypeScript performance
- **Migration**: Replace `Button.sizes.LARGE` with `"large"`, `Button.kinds.PRIMARY` with `"primary"`, etc.
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Dialog

- **Change**: Removed deprecated enum exports and static properties (`DialogTriggerEventEnum`, `DialogAnimationTypeEnum`, `DialogPositionEnum`, `DialogSizeEnum` and `Dialog.hideShowTriggers`, `Dialog.positions`, etc.)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size, improve TypeScript performance
- **Migration**: Replace `Dialog.hideShowTriggers.ESCAPE_KEY` with `"esckey"`, `Dialog.positions.TOP` with `"top"`, etc.
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Toast

- **Change**: Removed deprecated enum exports and static properties (`ToastType`, `ToastActionType` enums and `Toast.types`, `Toast.actionTypes`, etc.)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace `Toast.types.POSITIVE` with `"positive"`, `Toast.actionTypes.LINK` with `"link"`
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### TextField

- **Change**: Removed deprecated enum exports and static properties (`TextFieldTextType`, `TextFieldFeedbackState` enums and static properties)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals (e.g., `TextField.feedbackStates.ERROR` → `"error"`)
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Dropdown

- **Change**: Removed deprecated enum exports (`DROPDOWN_CHIP_COLORS`, `DROPDOWN_MENU_POSITION`, `DROPDOWN_MENU_PLACEMENT` enums)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Avatar

- **Change**: Removed deprecated enum exports and static properties for size, type enums (`Avatar.sizes`, `Avatar.types`, etc.)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace static property access with string literals (e.g., `Avatar.sizes.LARGE` → `"large"`)
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Badge

- **Change**: Removed deprecated enum exports and static properties for size, type, color enums (`BadgeConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace static property access with string literals (e.g., `Badge.sizes.LARGE` → `"large"`)
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Counter

- **Change**: Removed deprecated enum exports and static properties (`CounterConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace static property access with string literals (e.g., `Counter.sizes.LARGE` → `"large"`)
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### ColorPicker

- **Change**: Removed deprecated enum exports and static properties for color palette and size enums
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace static property access with string literals
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Label

- **Change**: Removed deprecated enum exports and static properties for size, color, alignment enums
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace static property access with string literals
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Box

- **Change**: Removed 21+ spacing/layout enums from Box component (`BoxConstants.ts` enums for margins, padding, gap, etc.)
- **Reason**: Largest individual component enum cleanup - significantly reduces bundle size and improves tree-shaking
- **Migration**: Replace `Box.margins.LARGE` with `"large"`, `Box.paddings.MEDIUM` with `"medium"`, etc.
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Heading

- **Change**: Removed `HeadingTypeEnum`, `HeadingWeightEnum` and static properties (`HeadingConstants.ts` file deleted)
- **Reason**: Simplify API and reduce bundle size
- **Migration**: Replace enum usage with string literals (e.g., `Heading.types.H1` → `"h1"`, `Heading.weights.BOLD` → `"bold"`)
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Text

- **Change**: Removed `TextTypeEnum`, `TextWeightEnum` and static properties (`TextConstants.ts` file deleted)
- **Reason**: Simplify API and reduce bundle size
- **Migration**: Replace enum usage with string literals (e.g., `Text.types.TEXT1` → `"text1"`, `Text.weights.MEDIUM` → `"medium"`)
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Toggle

- **Change**: Remove duplicate `data-testid` from internal MockToggle div element
- **Reason**: `data-testid="toggle"` was set on both the Switch input and the internal visual div, causing ambiguous test queries
- **Migration**: If tests query `[data-testid="toggle"]` and rely on multiple matches, update to expect a single match
- **Codemod**: ❌ Manual (DOM structure change, not a prop API change)
- **PR**: TBD

#### Loader

- **Change**: Removed deprecated enum exports and static properties from `LoaderConstants.ts` (file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for loader size and color properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Tooltip

- **Change**: Removed deprecated enum exports from `TooltipConstants.ts` (file deleted) including `TooltipTheme`, `TooltipPositions` enums
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals (e.g., `TooltipPositions.TOP` → `"top"`)
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Icon

- **Change**: Updated to use string literals instead of enum references in icon size and color properties
- **Reason**: Consistency with other components moving to string-only APIs
- **Migration**: Replace any enum usage with string literals for icon size properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### IconButton

- **Change**: Updated to use string literals instead of enum references for button size and kind properties
- **Reason**: Consistency with other components moving to string-only APIs
- **Migration**: Replace any enum usage with string literals for size and kind properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### AlertBanner

- **Change**: Removed deprecated enum exports and static properties (`AlertBannerConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for banner type and color properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### AttentionBox

- **Change**: Removed deprecated enum exports for type and color enums (`AttentionBoxConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for box type and color properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Divider

- **Change**: Removed deprecated enum exports for direction and color enums (`DividerConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals (e.g., `Divider.directions.HORIZONTAL` → `"horizontal"`)
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### List

- **Change**: Removed deprecated enum exports for size and type enums (`ListConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for list size and type properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### ListItem

- **Change**: Removed deprecated enum exports for size and type enums (`ListItemConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for list item size and type properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### ListItemIcon

- **Change**: Removed deprecated enum exports for size enums (`ListItemIconConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for icon size properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### MenuTitle

- **Change**: Removed deprecated enum exports for size enums (`MenuTitleConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for menu title size properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### MenuButton

- **Change**: Removed deprecated enum exports for size and type enums (`MenuButtonConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for menu button size and type properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### MultiStepIndicator

- **Change**: Removed deprecated enum exports for type and status enums (`MultiStepConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for step type and status properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### LinearProgressBar

- **Change**: Removed deprecated enum exports for size and color enums (`LinearProgressBarConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for progress bar size and color properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### TabPanels

- **Change**: Removed deprecated enum exports for size enums (`TabPanelsConstants.ts` file deleted)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for tab panel size properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Skeleton

- **Change**: Removed deprecated enum exports from `SkeletonConstants.ts` (enum exports removed, file preserved for other constants)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for skeleton size and type properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Slider

- **Change**: Removed deprecated enum exports from `SliderConstants.ts` (enum exports removed, file preserved for other constants)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for slider size and orientation properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Steps

- **Change**: Removed deprecated enum exports from `StepsConstants.ts` (enum exports removed, file preserved for other constants)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for step type and status properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### Tipseen

- **Change**: Removed deprecated enum exports from `TipseenConstants.ts` (enum exports removed, file preserved for other constants)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for tipseen position and type properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### ThemeProvider

- **Change**: Removed deprecated enum exports from `ThemeProviderConstants.ts` (enum exports removed, file preserved for other constants)
- **Reason**: Simplify API by removing dual ways to specify values, reduce bundle size
- **Migration**: Replace enum usage with string literals for theme type properties
- **Codemod**: ✅ Available (`v3-to-v4/enums`)
- **PR**: TBD

#### TextWithHighlight

- [x] **Status**: Complete
- **Change**: Removed deprecated `tooltipPosition` prop
- **Reason**: Simplifies API by consolidating tooltip configuration under a single `tooltipProps` object
- **Migration**: Replace `tooltipPosition="value"` with `tooltipProps={{ position: "value" }}`
- **Codemod**: ✅ Available (`TextWithHighlight-component-migration`)
- **PR**: [#XXXX](https://github.com/mondaycom/vibe/pull/XXXX) - breaking-change/textwith-highlight-remove-tooltip-position

#### Chips

- [x] **Status**: Complete
- **Change**: Remove `disableClickableBehavior` prop
- **Reason**: Simplifies the API; chips should always use the clickable wrapper when click handlers are provided
- **Migration**: Remove `disableClickableBehavior` from Chips usage
- **Codemod**: ✅ Available
- **PR**: TBD

#### Clickable

- [x] **Status**: Complete
- **Change**: Remove string type from `ariaHasPopup` (now `boolean` only) and `tabIndex` (now `number` only)
- **Reason**: Type safety - removes implicit string-to-number/boolean coercion
- **Migration**: Change `tabIndex="-1"` to `tabIndex={-1}` and `ariaHasPopup="true"` to `ariaHasPopup={true}`
- **Codemod**: ❌ Manual
- **PR**: TBD

<!-- Add more components as breaking changes are identified -->

### APIs and Hooks

#### useClickableProps

- **Change**: TBD
- **Reason**: TBD
- **Migration**: TBD
- **Codemod**: 🔄 Planned
- **PR**: TBD

<!-- Add more hooks/APIs as breaking changes are identified -->

### CSS and Styling

#### Design Tokens

- **Change**: TBD
- **Reason**: TBD
- **Migration**: TBD
- **Codemod**: ❌ Manual
- **PR**: TBD

<!-- Add styling changes as they are identified -->

### Package Structure

#### Package Exports

- **Change**: TBD
- **Reason**: TBD
- **Migration**: TBD
- **Codemod**: 🔄 Planned
- **PR**: TBD

<!-- Add package structure changes as they are identified -->

## Migration Tools

### Automated Codemods

Codemods will be available to automate most of the migration from v3 to v4:

```bash
npx @vibe/codemod --migration v4
```

### Manual Migration Steps

Some changes will require manual migration:

1. **Design Token Updates**: Review and update custom CSS that uses Vibe design tokens
2. **Type Changes**: Update TypeScript types that reference changed interfaces
3. **Custom Component Updates**: Review components that extend or wrap Vibe components

## Timeline

- [ ] **Phase 1**: Breaking changes planning and RFC (Current)
- [ ] **Phase 2**: Implementation and codemod development
- [ ] **Phase 3**: Beta release and testing
- [ ] **Phase 4**: Migration guide and documentation
- [ ] **Phase 5**: Stable release

## Status Legend

- 🔄 **Planned**: Codemod will be created
- ✅ **Available**: Codemod is ready
- ❌ **Manual**: Requires manual migration
- 🚧 **In Progress**: Currently being developed

---

_This document will be updated as breaking changes are finalized._
