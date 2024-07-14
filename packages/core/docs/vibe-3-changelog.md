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

## Typography

- `Text` and `Heading` component API and style changed - use the [typography migration guide](https://style.monday.com/?path=/docs/typography-migration-guide--docs) to migrate.

## Components

### AttentionBox

- `componentClassName` -> `className` [codemod]

### Avatar

- `isSquare` -> `square` [codemod]
- `isDisabled` -> `disabled` [codemod]

### BreadcrumbsItem

- `isDisabled` -> `disabled` [codemod]

### Button

- `dataTestId` -> `data-testid` [codemod]

### Box

- `scrollable` -> change default to true [codemod]

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
- `JustifyType` removed [codemod]

### Divider

- `classname` -> `className` [codemod]

### IconButton

- `dataTestId` -> `data-testid` [codemod]

### Label

- `wrapperClassName` -> `className` [codemod]
- Spin in animation removed due to UX decision, including `isAnimationDisabled` prop which is not needed anymore

### EditableHeading

- Complete API Change (TBD)

### Link

- `componentClassName` -> `className` [codemod]

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

## TextField

- `dataTestId` -> `data-testid` [codemod]

### ThemeProvider

- `theme` -> `themeConfig` [codemod]

### Tipseen

- `isCloseButtonHidden` -> `hideCloseButton` [codemod]
- `showDelay` changed default to 100
- `justify` removed [codemod]
- `justifyTypes` removed [codemod]

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