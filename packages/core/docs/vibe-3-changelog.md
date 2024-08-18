# Vibe 3 Changelog

## General

- `monday-ui-react-core/next` removed - import from `monday-ui-react-core` instead.
- `monday-ui-react-core/types` removed, exported types are now exported from `monday-ui-react-core` [codemod]
- `monday-ui-react-core/storybookComponents` removed, use the `vibe-storybook-components` package instead [codemod]
- CommonJS support removed
- `monday-ui-react-core/dist/main.css` removed, use `monday-ui-react-core/tokens` instead [codemod]
- All components' props interfaces are exported

## Colors

- Removed `--shareable-color` and `--private-color` for all themes

## Typography

- `Text` and `Heading` component API and style changed - use the [typography migration guide](https://style.monday.com/?path=/docs/typography-migration-guide--docs) to migrate.

## Components

### AttentionBox

codemod: `attention-box-component-migration`

- `componentClassName` -> `className` [codemod ✅]

### Avatar

codemod: `avatar-component-migration`

- `isSquare` -> `square` [codemod ✅]
- `isDisabled` -> `disabled` [codemod ✅]

### AvatarGroup

- `removePadding` is removed as it's the default, component no longer gets a default padding bottom [codemod]

### BreadcrumbItem

- `isDisabled` -> `disabled` [codemod]

### Button

- `dataTestId` -> `data-testid` [codemod]
- `children` prop is now mandatory
- `size` prop - removed `sm`, `md`, `lg` sizes, use `small`, `medium`, `large` accordingly

### ButtonGroup

- `componentClassName` -> `className` [codemod]

### Checkbox

- `componentClassName` -> `className` [codemod]

### Chips

codemod: `chips-component-migration`

- `dataTestId` -> `data-testid` [codemod ✅]
- `clickable`, `isClickable` removed, use `onClick` instead to get clickable behavior and style. Pay attention that this codemod removes `clickable` and `isClickable` only if `onClick` is present [codemod ✅]
- `color` - remove dark_indigo and blackish colors

### Clickable

- `dataTestId` -> `data-testid` [codemod]

### Counter

codemod: `chips-component-migration`

- `wrapperClassName` -> `className` [codemod ✅]
  - Removed `sm`, `md`, `lg` sizes, use `small`, `medium`, `large` respectively

### Dialog

- `shoudlCallbackOnMount` -> `shouldCallbackOnMount` [codemod]

### DialogContentContainer 🚩

- Fixed "medium" size spacings
- Changed default size to "small" instead of "medium" [codemod - change usages of size medium to small, keep other usages the same]

### Divider

codemod: `divider-component-migration`

- `classname` -> `className` [codemod ✅]

### Flex

- Removed `Flex.gaps.NONE`

### Dropdown 🚩

- Removed `Dropdown.size` property, use `Dropdown.sizes` instead [codemod]
- Remove size 'xxs' and 'xs'
- Remove `withReadOnlyStyle` prop, new read only style will apply when using `readOnly` prop [codemod - remove withReadOnlyStyle]

### EditableInput

- `EditableInput` removed, use [`EditableText`](https://style.monday.com/?path=/docs/inputs-editabletext--docs) instead

### Heading

- `Heading` component API and style changed - use the [typography migration guide](https://style.monday.com/?path=/docs/typography-migration-guide--docs) to migrate.

### Icon

- `clickable`, `onClick` removed, use `<IconButton>` in case of a clickable icon [codemod]

### IconButton

- `dataTestId` -> `data-testid` [codemod]

## Input

- `Input` component removed - use [`TextField`](https://style.monday.com/?path=/docs/inputs-textfield--docs). [codemod]

### Label

- `wrapperClassName` -> `className` [codemod]
- Spin in animation removed due to UX decision
  - Removed `isAnimationDisabled` prop which is not needed anymore [codemod]

### EditableHeading

- Complete API Change (TBD)

### Link 🚩

- `componentClassName` -> `className` [codemod]
- `Link.target` removed, use `Link.targets` instead [codemod]

### Loader

- `svgClassName` -> `className` [codemod]

### Menu

- `classname` -> `className` [codemod]

### MenuDivider

- `classname` -> `className` [codemod]

### MenuItem

- `classname` -> `className` [codemod]
- Tooltip now wraps the entire element so non-block layout given to the `title` prop may break

### MenuItemButton

- `classname` -> `className` [codemod]

### MenuTitle

- `classname` -> `className` [codemod]

### MenuButton

- `componentClassName` -> `className` [codemod]
- `closeDialogOnContentClick` -> `closeMenuOnItemClick` [codemod]
- Removed `disabledReason`, use `tooltipContent` instead [codemod]

### Modal

- Modal no longer have the ability to remove the close button due to UX decision
  - Removed `hideCloseButton` prop which is not needed anymore [codemod]
- The `unmountOnClose` prop default value changes to "true", meaning the Modal will not render if `show` is "false". To disable this behavior set `unmountOnClose` to "false".

### ModalHeader

- Modal no longer have the ability to remove the close button due to UX decision
  - Removed `hideCloseButton` prop which is not needed anymore [codemod]

### RadioButton

- `componentClassName` -> `className` [codemod]

## Search

- `Search` has changed - follow the [`Search` docs](https://style.monday.com/?path=/docs/inputs-search--docs) for the new API.

- ## SearchComponent

codemod: `search-component-import-migration`

- `SearchComponent` component removed - use [`Search`](https://style.monday.com/?path=/docs/inputs-search--docs). [codemod ✅]

## SplitButton

- [!!!] We're now accepting instead of static props, inline string, e.g. "bottom-start". We need to change DialogPosition to be a string in its root declaration (this also requires big codemod changes probably) [codemod]
  - Requires codemod for when people used secondaryDialogPosition={SplitButton.secondaryBlaBla}. [codemod]
  - Once changing DialogPosition to be a const, instead of enum, remove DialogPosition double declaration from SplitButton's declaration [internal]
- Remove `data-testId` prop from nested elements (data-testId used to be applied also to each of the internal elements)

### Steps 🚩

- `isOnPrimary` removed, use `color={StepsColor.PRIMARY}` instead [codemod]

### Tabs

- Reset spacings (removed default browser's margin/padding for ul,li elements)

### TabList

- `noPadding` is removed as it's the default, component no longer gets a default padding bottom [codemod]

### TabPanels

- Fix: TabPanels will render only the active tab
- `renderOnlyActiveTab` - removed as it's now the default behavior [codemod]

### TextField

- `dataTestId` -> `data-testid` [codemod]
- `iconsNames` prop removed `layout` [codemod]
- Behavior of asterisk is now controlled by `required` prop, which means a field with asterisk will have to be required.
  - Removed `requiredAsterisk` [codemod] (codemod should replace only if `requiredAsterisk` is used with `required`)
- Remove `withReadOnlyStyle` prop, new read only style will apply when using `readOnly` prop [codemod - remove withReadOnlyStyle]
- Removed `sm`, `md`, `lg` sizes, use `small`, `medium`, `large` respectively
-

### ThemeProvider

- `theme` -> `themeConfig` [codemod]
- Should it be out of beta ?

### Tipseen

- Default `color` changed from 'primary' to 'inverted'
- `isCloseButtonHidden` -> `hideCloseButton` [codemod]
- `showDelay` changed default to 100
- `justify` removed
  - `Tipseen.justifyTypes` removed
- `submitButtonProps`, `dismissButtonProps` props removed, use separate props to customize the button
- `content` prop is now mandatory

### TipseenContent

- `isDismissHidden` -> `hideDismiss` [codemod]
- `isSubmitHidden` -> `hideSubmit` [codemod]

### Toggle

- `componentClassName` -> `className` [codemod]
- `isDisabled` -> `disabled` [codemod]

### Tooltip

- `paddingSize` removed
- `themes` - remove all themes besides for "dark" & "primary" [codemod]
- `showOnDialogEnter` changed default to be true (should we remove this prop?)
- `hideDelay` changed default to be 100
- `addKeyboardHideShowTriggersByDefault` default changed to true [codemod - remove prop if exists, and add as false if doesn't exist]
- `position` changed to only accept "top, right, bottom, left"
- `justify` removed
  - `Tooltip.justifyTypes` removed
- `arrowPosition` removed
- - `Tooltip.arrowPositions` removed
- `withMaxWidth` prop removed, max-width is now set to 240px [codemod]
- Tooltip's content is now wrapped in another div, non-block layouts inside the tooltip may break

### ColorPicker

- `ColorPicker.COLOR_STYLES` removed [codemod]

### ColorPickerContent

- `ColorPickerContent.COLOR_STYLES` removed [codemod]

### ResponsiveList

- Remove entire component

## Icons

- Removed Upgrade icon
- Featured icon renamed to Upgrade

## Hooks

### useClickableProps

- `dataTestId` -> `data-testid` [codemod]

## monday-ui-style

- Remove `color-warning`, `color-warning-hover`, `color-warning-select`, `color-warning-select-hover` from colors.json, use `warning-color-*` instead
