# Vibe 3 Changelog

## General

- `monday-ui-react-core/next` removed - import from `monday-ui-react-core` instead.
- `SearchComponent` and `Input` components removed - use [`Search`](https://style.monday.com/?path=/docs/inputs-search--docs) and [`TextField`](https://style.monday.com/?path=/docs/inputs-textfield--docs) respectively.
- `EditableInput` removed, use [`TextField`](https://style.monday.com/?path=/docs/inputs-editabletext--docs) instead

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

### BreadcrumbItem

- `isDisabled` -> `disabled` [codemod]

### Button

- `dataTestId` -> `data-testid` [codemod]
- `children` prop is now mandatory

### ButtonGroup

- `componentClassName` -> `className` [codemod]

### Checkbox

- `componentClassName` -> `className` [codemod]

### Chips

- `dataTestId` -> `data-testid` [codemod]
- `clickable`, `isClickable` removed, use `onClick` instead to get clickable behavior and style

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

### TabPanels

- Fix: TabPanels will render only the active tab
- `renderOnlyActiveTab` - removed as it's now the default behavior [codemod]

## TextField

- `dataTestId` -> `data-testid` [codemod]
- `requiredAsterisk` prop removed and its style will be applied when using the `required` prop [codemod]

### ThemeProvider

- `theme` -> `themeConfig` [codemod]

### Tipseen

- `isCloseButtonHidden` -> `hideCloseButton` [codemod]
- `showDelay` changed default to 100
- `justify` removed [codemod]
- `justifyTypes` removed [codemod]
- `submitButtonProps`, `dismissButtonProps` props removed, use separate props to customize the button

### TipseenContent

- `isDismissHidden` -> `hideDismiss` [codemod]
- `isSubmitHidden` -> `hideSubmit` [codemod]

### Toggle

- `componentClassName` -> `className` [codemod]
- `isDisabled` -> `disabled` [codemod]

### Tooltip

- `paddingSize` removed [codemod]
- `themes` Remove all themes besides for dark & primary, and changed theme to accept string instead of static prop. theme="primary" instead of theme={Tooltip.themes.Primary} [codemod]
- `showOnDialogEnter` changed default to be true
- `hideDelay` changed default to be 100
- `position` changed to accept string instead of static prop [codemod]
- `position` changed to only accept "top, right, bottom, left" [codemod]
- `justify` removed [codemod]
- `arrowPosition` removed [codemod]
- `TooltipArrowPosition` removed [codemod]

## Hooks

### useClickableProps

- `dataTestId` -> `data-testid` [codemod]
