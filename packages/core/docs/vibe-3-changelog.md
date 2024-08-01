# Vibe 3 Changelog

## General

- `monday-ui-react-core/next` removed - import same components from `monday-ui-react-core` instead.

## Components

### AttentionBox

codemod: `attention-box-component-migration`

- `componentClassName` -> `className` [codemod ✅]

### Avatar

codemod: `avatar-component-migration`

- `isSquare` -> `square` [codemod ✅]
- `isDisabled` -> `disabled` [codemod ✅]

### BreadcrumbItem

- `isDisabled` -> `disabled` [codemod]

### Button

- `dataTestId` -> `data-testid` [codemod]
- `children` prop is now mandatory

### Box 🚩

- `scrollable` -> change default to true [codemod (?)]

### ButtonGroup

- `componentClassName` -> `className` [codemod]

### Checkbox

- `componentClassName` -> `className` [codemod]

### Chips

codemod: `chips-component-migration`

- `dataTestId` -> `data-testid` [codemod ✅]
- `clickable`, `isClickable` removed, use `onClick` instead to get clickable behavior and style. Pay attention that this codemod removes `clickable` and `isClickable` only if `onClick` is present [codemod ✅]

### Clickable

- `dataTestId` -> `data-testid` [codemod]

### Counter

- `wrapperClassName` -> `className` [codemod]

### Dialog

- `shoudlCallbackOnMount` -> `shouldCallbackOnMount` [codemod]
- [!!!] `JustifyType` removed

### DialogContentContainer 🚩

- Fixed "medium" size spacings
- Changed default size to "small" instead of "medium" [codemod - change usages of size medium to small, keep other usages the same]

### Divider

- `classname` -> `className` [codemod]

### Dropdown 🚩

- Removed `Dropdown.size` property, use `Dropdown.sizes` instead [codemod]

### Flex

- Removed `Flex.gaps.NONE`

### EditableInput

- `EditableInput` removed, use [`EditableText`](https://style.monday.com/?path=/docs/inputs-editabletext--docs) instead

### Heading

- `Heading` component API and style changed - use the [typography migration guide](https://style.monday.com/?path=/docs/typography-migration-guide--docs) to migrate.

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

### MenuItemButton

- `classname` -> `className` [codemod]

### MenuTitle

- `classname` -> `className` [codemod]

### MenuButton

- `componentClassName` -> `className` [codemod]
- `closeDialogOnContentClick` -> `closeMenuOnItemClick` [codemod]
- Removed `disabledReason`, use `tooltipContent` instead [codemod]

### Modal

- Modal no longer have the ability to have a close button due to UX decision
  - Removed `hideCloseButton` prop which is not needed anymore [codemod]
- Modal will not render if `show` is false
  - `unmountOnClose` removed, modal will always unmount on close [codemod]

### ModalHeader

- Modal no longer have the ability to have a close button due to UX decision
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

### TextField

- `dataTestId` -> `data-testid` [codemod]
- Behavior of asterisk is now controlled by `required` prop, which means a field with asterisk will have to be required.
  - Removed `requiredAsterisk` [codemod] (codemod should replace only if `requiredAsterisk` is used with `required`)

### ThemeProvider

- `theme` -> `themeConfig` [codemod]
- Should it be out of beta ?

### Tipseen

- `isCloseButtonHidden` -> `hideCloseButton` [codemod]
- `showDelay` changed default to 100
- `justify` removed
- `justifyTypes` removed
- `submitButtonProps`, `dismissButtonProps` props removed, use separate props to customize the button

### TipseenContent

- `isDismissHidden` -> `hideDismiss` [codemod]
- `isSubmitHidden` -> `hideSubmit` [codemod]

### Toggle

- `componentClassName` -> `className` [codemod]
- `isDisabled` -> `disabled` [codemod]

### Tooltip

- `paddingSize` removed
- [!!!] `themes` Remove all themes besides for dark & primary, and changed theme to accept string instead of static prop. theme="primary" instead of theme={Tooltip.themes.Primary} [codemod]
- [!!!] `showOnDialogEnter` changed default to be true (should we remove this prop?)
- `hideDelay` changed default to be 100
- [!!!] `position` changed to accept string instead of static prop
- `position` changed to only accept "top, right, bottom, left"
- `justify` removed
- `arrowPosition` removed
- `TooltipArrowPosition` removed

## Hooks

### useClickableProps

- `dataTestId` -> `data-testid` [codemod]
