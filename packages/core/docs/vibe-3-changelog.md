# Vibe 3 Changelog

## General

- `monday-ui-react-core/next` removed - import from `monday-ui-react-core` instead.
- `SearchComponent` and `Input` components removed - use [`Search`](https://style.monday.com/?path=/docs/inputs-search--docs) and [`TextField`](https://style.monday.com/?path=/docs/inputs-textfield--docs) respectively.
- `EditableInput` removed, use [`TextField`](https://style.monday.com/?path=/docs/inputs-editabletext--docs) instead
- `monday-ui-react-core/types` removed, exported types are now exported from `monday-ui-react-core` [codemod]
- `monday-ui-react-core/storybookComponents` removed, use the `vibe-storybook-components` package instead [codemod]
- CommonJS support removed
- `monday-ui-react-core/dist/main.css` removed, use `monday-ui-react-core/tokens` instead [codemod]
- All components' props interfaces are exported

## Colors

- Removed `--shareable-color` and `--private-color`

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
- Removed `sm`, `md`, `lg` sizes, use `small`, `medium`, `large` accordingly

### ButtonGroup

- `componentClassName` -> `className` [codemod]

### Checkbox

- `componentClassName` -> `className` [codemod]

### Chips

- `dataTestId` -> `data-testid` [codemod]
- `clickable`, `isClickable` removed, use `onClick` instead to get clickable behavior and style
- `color` - remove dark_indigo and blackish colors

### Clickable

- `dataTestId` -> `data-testid` [codemod]

### Counter

- `wrapperClassName` -> `className` [codemod]

### Dialog

- `shoudlCallbackOnMount` -> `shouldCallbackOnMount` [codemod]

### DialogContentContainer

- Changed default size to "small" instead of "medium" [codemod - change usages of size medium to small, keep other usages the same]
- Fixed "medium" size spacings

### Divider

- `classname` -> `className` [codemod]

### Flex

- Removed `Flex.gaps.NONE`

### Dropdown

- Removed `Dropdown.size` property, use `Dropdown.sizes` instead [codemod]
- Remove size 'xxs' and 'xs'
- Remove `withReadOnlyStyle` prop, new read only style will apply when using `readOnly` prop [codemod - remove withReadOnlyStyle]

### IconButton

- `dataTestId` -> `data-testid` [codemod]

### Label

- `wrapperClassName` -> `className` [codemod]
- Spin in animation removed due to UX decision, including `isAnimationDisabled` prop which is not needed anymore

### EditableHeading

- Complete API Change (TBD)

### Link

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

### MenuItemButton

- `classname` -> `className` [codemod]

### MenuTitle

- `classname` -> `className` [codemod]

### MenuButton

- `componentClassName` -> `className` [codemod]
- `closeDialogOnContentClick` -> `closeMenuOnItemClick` [codemod]
- Removed `disabledReason`, use `tooltipContent` instead

### ModalHeader

- `hideCloseButton` removed due to UX decision, Modals should always have a close button [codemod]

### Modal

- `hideCloseButton` removed due to UX decision, Modals should always have a close button [codemod]
- Modal will not render if `show` is false
- `unmountOnClose` removed, modal will always unmount on close [codemod]

### RadioButton

- `componentClassName` -> `className` [codemod]

## Search

- `Search` has changed - follow the [`Search` docs](https://style.monday.com/?path=/docs/inputs-search--docs) for the new API.

## SplitButton

- We're now accepting instead of static props, inline string, e.g. "bottom-start". We need to change DialogPosition to be a string in its root declaration (this also requires big codemod changes probably) [codemod]
- Requires codemod for when people used secondaryDialogPosition={SplitButton.secondaryBlaBla}. [codemod]
- Once changing DialogPosition to be a const, instead of enum, remove DialogPosition double declaration from SplitButton's declaration [internal]
- Remove `data-testId` prop from nested elements

### Steps

- `isOnPrimary` removed, use `color={StepsColor.PRIMARY}` instead [codemod]

### Tabs

- Reset spacings (removed default browser's margin/padding for ul,li elements)

### TabList

- `noPadding` is removed as it's the default, component no longer gets a default padding bottom [codemod]

## TextField

- `dataTestId` -> `data-testid` [codemod]
- `requiredAsterisk` prop removed and its style will be applied when using the `required` prop [codemod]
- Remove `withReadOnlyStyle` prop, new read only style will apply when using `readOnly` prop [codemod - remove withReadOnlyStyle]
-

### ThemeProvider

- `theme` -> `themeConfig` [codemod]

### Tipseen

- Default `color` changed from 'primary' to 'inverted'
- `isCloseButtonHidden` -> `hideCloseButton` [codemod]
- `showDelay` changed default to 100
- `justify` removed [codemod]
- `justifyTypes` removed [codemod]
- `submitButtonProps`, `dismissButtonProps` props removed, use separate props to customize the button
- `content` prop is now mandatory

### TipseenContent

- `isDismissHidden` -> `hideDismiss` [codemod]
- `isSubmitHidden` -> `hideSubmit` [codemod]

### Toggle

- `componentClassName` -> `className` [codemod]
- `isDisabled` -> `disabled` [codemod]

### Tooltip

- `paddingSize` removed [codemod]
- `themes` - remove all themes besides for "dark" & "primary" [codemod]
- `showOnDialogEnter` changed default to be true
- `hideDelay` changed default to be 100
- `position` changed to only accept "top, right, bottom, left" [codemod]
- `justify` removed [codemod]
- `arrowPosition` removed [codemod]

### ColorPicker

- `ColorPicker.COLOR_STYLES` removed [codemod]

### ColorPickerContent

- `ColorPickerContent.COLOR_STYLES` removed [codemod]

### ResponsiveList

- Remove entire component

## Icons

- Removed Current Upgrade icon, and rename existing Featured icon to Upgrade

## Hooks

### useClickableProps

- `dataTestId` -> `data-testid` [codemod]

### useSwitch

- `onChange` type changed to `(value: boolean, event?: ChangeEvent<HTMLInputElement>) => void`

## monday-ui-style

- Remove `color-warning`, `color-warning-hover`, `color-warning-select`, `color-warning-select-hover` from colors.json
