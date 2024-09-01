# Vibe 3 Changelog

This is the complete list of changes and deprecations in the Vibe 3 release. Changes that are marked with a 🔀 covered by a migration script (codemod).

For the complete migration guide see the [Vibe 3 Migration Guide](https://style.monday.com/?path=/docs/vibe-3-migration-guide--docs).

## General

- CommonJS support removed
- Package rename - `monday-ui-react-core` renamed to `@vibe/core`: 🔀
  - `/tokens` -> `@vibe/core/tokens` 🔀
  - `/interactionsTests` -> `@vibe/core/interactionsTests` 🔀
  - `/testIds` -> `@vibe/core/testIds` 🔀
  - `/mockedClassNames` -> `@vibe/core/mockedClassNames`
- Removed entry pointes:
  - `/types` removed, import from `@vibe/core` instead 🔀
- Entry points moved to a new package:
  - `/icons` -> use `@vibe/icons` package instead 🔀
  - `/storybookComponents` removed, use the `vibe-storybook-components` package instead
- `monday-ui-react-core/dist/main.css` removed, use `@vibe/core/tokens` instead
- All components' props interfaces are exported

## Colors

- The `--shareable-color` and `--private-color` CSS variables were removed for all themes
- The `color-warning`, `color-warning-hover`, `color-warning-select`, `color-warning-select-hover` colors were removed from the `colors.json` file (in `monday-ui-style` package), use `warning-color-*` respectively

## Typography

- Overhauled typography system, for more information check out the [Typography page](https://style.monday.com/?path=/docs/foundations-typography--docs)
- `Text` and `Heading` API and style changed

## Components

### AttentionBox

> codemod: `attention-box-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀

### Avatar

> codemod: `avatar-component-migration`

- The `isSquare` prop has been removed, use `square` instead 🔀
- The `isDisabled` prop has been removed, use `disabled` instead 🔀

### AvatarGroup

> codemod: `avatar-group-component-migration`

- The `removePadding` prop has been removed, and the component no longer gets a padding bottom 🔀

### Box

> codemod: `box-component-migration`

- The `border` prop type has been changed from string to boolean, and the so `Box.borders` static prop has been removed 🔀

### BreadcrumbItem

> codemod: `breadcrumb-item-component-migration`

- The `isDisabled` prop has been removed, use `disabled` instead 🔀

### Button

> codemod: `button-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀
- The `children` prop is now mandatory
- The `sm`, `md`, `lg` sizes were removed, use `small`, `medium`, `large` respectively

### ButtonGroup

> codemod: `button-group-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀

### Checkbox

> codemod: `checkbox-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀

### Chips

> codemod: `chips-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀
- The `DARK_INDIGO` and `BLACKISH` colors were removed from the `color` prop
- The `clickable` and `isClickable` props were removed, use `onClick` instead, to get clickable behavior and style 🔀

### Clickable

> codemod: `clickable-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀

### Counter

> codemod: `chips-component-migration`

- The `wrapperClassName` prop has been removed, use `className` instead 🔀
- The `sm`, `md`, `lg` sizes were removed, use `small`, `medium`, `large` respectively

### Dialog

> codemod: `dialog-component-migration`

- The `shoudlCallbackOnMount` prop has been removed, use `shouldCallbackOnMount` instead 🔀

### DialogContentContainer

> codemod: `dialog-content-container-component-migration`

- The "medium" `size` now has an increased padding, correcting a previous sizing issue where "medium" and "small" had identical paddings. As a result, "small" is now the default size 🔀

### Divider

> codemod: `divider-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### Flex

- The `Flex.gaps.NONE` property has been removed, to specify no gap simply omit the `gap` prop

### Dropdown

> codemod: `dropdown-component-migration`

- The `Dropdown.size` property was removed, use `Dropdown.sizes` instead 🔀
- The `xxs`, `xs` sizes were acting as the `small` size and therefore removed. Use `small` instead
- The `withReadOnlyStyle` prop was removed, new readonly style will be applied automatically when using the `readOnly` prop 🔀

### EditableInput

- `EditableInput` removed, use [EditableText](https://style.monday.com/?path=/docs/inputs-editabletext--docs) instead

### Heading

- `Heading` component API and style changed, follow the [Heading](https://style.monday.com/?path=/docs/text-heading--docs) docs for the new API.

### Icon

> codemod: `icon-component-migration`

- - The `clickable`, `onClick` props were removed 🔀, use `<IconButton>` for clickable icons

### IconButton

> codemod: `icon-button-component-migration`

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀

## Input

> codemod: `input-field-component-migration`

- `Input` removed - use [TextField](https://style.monday.com/?path=/docs/inputs-textfield--docs) 🔀

### Label

> codemod: `label-component-migration`

- The `wrapperClassName` prop has been removed, use `className` instead 🔀
- The "Spin In" animation was removed, and so the `isAnimationDisabled` prop has been removed 🔀

### EditableHeading

- API and style changed, follow the [EditableHeading](https://style.monday.com/?path=/docs/inputs-editableheading--docs) docs for the new API

### Link

> codemod: `link-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀
- The static `Link.target` property was removed, use `Link.targets` instead 🔀

### Loader

> codemod: `loader-component-migration`

- The `svgClassName` prop has been removed, use `className` instead 🔀

### Menu

> codemod: `menu-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### MenuDivider

> codemod: `menu-divider-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### MenuItem

> codemod: `menu-item-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀
- The provided tooltip (when the text is overflowing) now wraps the entire element so non-block layout given to the `title` prop may break

### MenuItemButton

> codemod: `menu-item-button-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### MenuTitle

> codemod: `menu-title-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

### MenuButton

> codemod: `menu-button-component-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀
- The `closeDialogOnContentClick` prop has been removed, use `closeMenuOnItemClick` instead 🔀
- The `disabledReason` prop has been removed, use `tooltipContent` instead 🔀

### Modal

> codemod: `modal-component-migration`

- The `hideCloseButton` has been removed since Modals should always have a close button 🔀
- The `unmountOnClose` prop default value changes to "true", meaning the Modal will not render when `show` is "false". To disable this behavior set `unmountOnClose` to "false"
- Tooltips, Tipseens, and Dialogs on Modals will now be rendered inside the Modal's container by default, without any z-index interference

### ModalHeader

> codemod: `modal-header-component-migration`

- The `hideCloseButton` has been removed since Modals should always have a close button 🔀

### RadioButton

> codemod: `radio-button-component-migration`

- The `classname` prop has been removed, use `className` instead 🔀

## Search

- `Search` has changed - follow the [Search](https://style.monday.com/?path=/docs/inputs-search--docs) docs for the new API.

## SearchComponent

> codemod: `search-component-import-migration`

- `SearchComponent` component removed - use [Search](https://style.monday.com/?path=/docs/inputs-search--docs) 🔀

## SplitButton

- The `data-testId` prop will no longer be applied to the internal elements, only the root element

### Steps

> codemod: `steps-component-import-migration`

- The `isOnPrimary` prop was removed, use `color="primary` instead 🔀

### Tabs

- Browser's default margin/padding for ul, li elements was reset

### TabList

> codemod: `tab-list-import-migration`

- The component no longer gets a padding bottom, and so the `noPadding` prop was removed 🔀

### TabPanels

> codemod: `tab-panels-import-migration`

- TabPanels will render only the active tab instead of rendering all the panels, and so the `renderOnlyActiveTab` was removed 🔀

### TextField

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀
- The `iconsNames` prop no longer accepts the `layout` property
- Providing the `required` prop will now show a red asterisk, implying that the field is mandatory, and so the `requiredAsterisk` prop was removed 🔀
- The `withReadOnlyStyle` prop was removed, new readonly style will be applied automatically when using the `readOnly` prop 🔀
- The `sm`, `md`, `lg` sizes were removed, use `small`, `medium`, `large` respectively

### ThemeProvider

> codemod: `theme-provider-import-migration`

- The `theme` has been removed, use `themeConfig` instead 🔀

### Tipseen

> codemod: `tipseen-import-migration`

- The `content` prop is now mandatory
- The default `color` has changed from 'primary' to 'inverted'. To keep the previous color, set the `color` prop to 'primary'
- The `isCloseButtonHidden` prop has been removed, use `hideCloseButton` instead 🔀
- The `showDelay` prop's default value has changed to 100
- The `justify` prop was removed, and so the `Tipseen.justifyTypes` static property was removed as well

### TipseenContent

> codemod: `tipseen-content-import-migration`

- The `isDismissHidden` prop has been removed, use `hideDismiss` instead 🔀
- The `isSubmitHidden` prop has been removed, use `hideSubmit` instead 🔀
- The `submitButtonProps`, `dismissButtonProps` props were removed, use `submitButtonText` and `dismissButtonText` to change the buttons' text

### Toggle

> codemod: `toggle-import-migration`

- The `componentClassName` prop has been removed, use `className` instead 🔀
- The `isDisabled` prop has been removed, use `disabled` instead 🔀

### Tooltip

> codemod: `tooltip-import-migration`

- The `paddingSize`, `justify`, and `arrowPosition` props were removed. Accordingly the `Tooltip.paddingSizes`, `Tooltip.justifyTypes`, and `Tooltip.arrowPositions` static properties were removed as well
- The `themes` prop can now accept only "dark" or "primary"
- The `position` prop can now accept only "top, right, bottom, left"
- The `showOnDialogEnter` props's default value has changed to true, now the tooltip will remain open be default when hovering over it
- The `hideDelay` props's default value changed to 100
- The `addKeyboardHideShowTriggersByDefault` default changed to true, making it accessible with keyboard navigation
- The tooltip's max-width is now set to 240px, and so the `withMaxWidth` prop removed 🔀
- Tooltip's `content` is now wrapped in another div, meaning that non-block layouts inside the tooltip may break
- The `containerSelector` will now fallback to `document.body` instead of `#tooltips-container` if not provided

### ColorPicker

> codemod: `color-picker-import-migration`

- The static `ColorPicker.COLOR_STYLES` property has been removed, use `ColorPicker.colorStyles` instead 🔀

### ColorPickerContent

> codemod: `color-picker-content-import-migration`

- The static `ColorPickerContent.COLOR_STYLES` property has been removed, use `ColorPickerContent.colorStyles` instead 🔀

### ResponsiveList

- Component was removed, use the [useIsOverflowing](https://style.monday.com/?path=/docs/hooks-useisoverflowing--docs) hook instead

## Icons

- The `Upgrade` icon has been removed, and the `Featured` icon has been renamed to `Upgrade`

## Hooks

### useClickableProps

- The `dataTestId` prop has been removed, use `data-testid` instead 🔀
