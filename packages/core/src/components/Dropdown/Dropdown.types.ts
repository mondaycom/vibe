import {
  type ActionMeta,
  type FocusEventHandler,
  type InputActionMeta,
  type KeyboardEventHandler,
  type MenuProps,
  type OptionProps,
  type OptionTypeBase,
  type SingleValueProps
} from "react-select";
import { type UIEventHandler, type WheelEventHandler } from "react";
import type React from "react";
import { type VibeComponentProps } from "../../types";

export type DropdownOption = any;

export interface CustomSingleValueProps extends SingleValueProps<DropdownOption> {
  /**
   * The component used to render the selected value.
   */
  Renderer: React.ComponentType;
  /**
   * If true, the dropdown is read-only and cannot be edited.
   */
  readOnly: boolean;
  /**
   * The currently selected option.
   */
  selectedOption: DropdownOption;
}

export interface CustomMenuBaseProps {
  /**
   * Class name applied to the dropdown menu wrapper.
   */
  dropdownMenuWrapperClassName?: string;
  /**
   * The ID of the menu container.
   */
  menuId?: string;
  /**
   * The ARIA label for the menu container.
   */
  menuAriaLabel?: string;
  /**
   * The ARIA label for the dropdown input.
   */
  inputAriaLabel?: string;
}

export type CustomMenuProps = CustomMenuBaseProps & MenuProps<OptionTypeBase, boolean>;

export interface CustomOptionBaseProps {
  /*
   * Class name to be added to dropdown option wrapper (dropdown-wrapper__option--reset)
   */
  optionWrapperClassName?: string;
}

export type CustomOptionProps = CustomOptionBaseProps & OptionProps<OptionTypeBase, boolean>;

export type DropdownState = {
  isDisabled: boolean;
  selectProps: { readOnly: boolean };
};

export interface DropdownComponentProps extends CustomMenuBaseProps, CustomOptionBaseProps, VibeComponentProps {
  /**
   * Class name applied to the dropdown's single value wrapper.
   */
  singleValueWrapperClassName?: string;
  /**
   * Placeholder text displayed when no value is selected.
   */
  placeholder?: string;
  /**
   * If true, the placeholder will be truncated with an ellipsis when too long.
   */
  allowPlaceholderEllipsis?: boolean;
  /**
   * If true, the dropdown is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the dropdown is read-only and cannot be edited.
   */
  readOnly?: boolean;
  /**
   * Callback fired when the dropdown menu opens.
   */
  onMenuOpen?: () => void;
  /**
   * Callback fired when the dropdown menu closes.
   */
  onMenuClose?: () => void;
  /**
   * Callback fired when a key is pressed inside the dropdown.
   */
  onKeyDown?: KeyboardEventHandler;
  /**
   * Callback fired when the dropdown gains focus.
   */
  onFocus?: FocusEventHandler;
  /**
   * Callback fired when the dropdown loses focus.
   */
  onBlur?: FocusEventHandler;
  /**
   * Callback fired when scrolling inside the dropdown.
   */
  onScroll?: UIEventHandler<HTMLDivElement>;
  /**
   * Callback fired when the user scrolls to the bottom of the menu.
   */
  onMenuScrollToBottom?: WheelEventHandler<HTMLDivElement>;
  /**
   * If true, prevents scrolling beyond the menu's boundaries.
   */
  captureMenuScroll?: boolean;
  /**
   * Callback fired when the selected value changes.
   */
  onChange?: (
    option: DropdownOption | DropdownOption[],
    meta: ActionMeta<DropdownOption> | React.MouseEvent | React.KeyboardEvent
  ) => void;
  /**
   * Callback fired when the dropdown input value changes.
   */
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  /**
   * If true, enables search functionality within the dropdown.
   */
  searchable?: boolean;
  /**
   * The list of options available in the dropdown.
   */
  options?: DropdownOption[];
  /**
   * Function to customize the "no options found" message.
   */
  noOptionsMessage?: (obj: { inputValue: string }) => string | null;
  /**
   * If true, the menu opens when the dropdown gains focus.
   */
  openMenuOnFocus?: boolean;
  /**
   * If true, the menu opens when the dropdown is clicked.
   */
  openMenuOnClick?: boolean;
  /**
   * If true, displays a clear button inside the dropdown's input.
   */
  clearable?: boolean;
  /**
   * Custom renderer for each option.
   */
  optionRenderer?: (option: DropdownOption) => JSX.Element;
  /**
   * Custom renderer for the selected value.
   */
  valueRenderer?:
    | React.ReactNode
    | ((props: Omit<CustomSingleValueProps, "Renderer"> & DropdownOption) => React.ReactNode);
  /**
   *   Custom renderer for the selected value.
   */
  ValueRenderer?: React.ReactNode;
  /**
   * Custom renderer for the dropdown menu.
   */
  menuRenderer?: React.ReactElement | ((props: CustomMenuProps) => React.ReactElement);
  /**
   * The placement of the dropdown menu relative to the input.
   */
  menuPlacement?: DropdownMenuPlacement;
  /**
   * The CSS position property of the dropdown menu.
   */
  menuPosition?: DropdownMenuPosition;
  /**
   * If true, the dropdown is displayed in right-to-left mode.
   */
  rtl?: boolean;
  /**
   * The default selected value.
   */
  defaultValue?: DropdownOption[];
  /**
   * The controlled value of the dropdown.
   */
  value?: DropdownOption | DropdownOption[];
  /**
   * The size of the dropdown.
   */
  size?: DropdownSize;
  /**
   * Enables async loading of options.
   */
  asyncOptions?: (inputValue: string) => Promise<DropdownOption[]>;
  /**
   * If true, caches async-loaded options.
   */
  cacheOptions?: boolean;
  /**
   * If true, `asyncOptions` is invoked on mount.
   */
  defaultOptions?: boolean | DropdownOption[];
  /**
   * If true, enables virtualization for improved performance.
   */
  isVirtualized?: boolean;
  /**
   * The target element for the dropdown menu portal.
   */
  menuPortalTarget?: HTMLElement;
  /**
   * Custom styles for the dropdown.
   */
  extraStyles?: (...args: unknown[]) => unknown;
  /**
   * The maximum height of the menu before scrolling.
   */
  maxMenuHeight?: number;
  /**
   * The tab index of the dropdown for keyboard navigation.
   */
  tabIndex?: number | string;
  /**
   * If true, the dropdown input is automatically focused on mount.
   */
  autoFocus?: boolean;
  /**
   * If true, enables multi-select mode.
   * When in multi-select mode, the selected value will be an array,
   * and it will be displayed as our [`<Chips>`](/?path=/docs/components-chips--sandbox) component.
   */
  multi?: boolean;
  /**
   * If true, expands the dropdown to multiple lines when multiple values are selected.
   */
  multiline?: boolean;
  /**
   * If true, closes the menu when an option is selected.
   */
  closeMenuOnSelect?: boolean;
  /**
   * If true, closes the menu when scrolling.
   */
  closeMenuOnScroll?: boolean;
  /**
   * Callback fired when an option is removed in multi-select mode.
   */
  onOptionRemove?: (option?: DropdownOption) => void;
  /**
   * If true, prevents mandatory default options from being removed.
   */
  withMandatoryDefaultOptions?: boolean;
  /**
   * Custom function to determine if an option is selected.
   */
  isOptionSelected?: (option: DropdownOption, options: DropdownOption[]) => boolean;
  /**
   * If true, allows the dropdown menu to overflow its container.
   */
  insideOverflowContainer?: boolean;
  /**
   * If true, allows the dropdown menu to overflow its container even with CSS transforms.
   */
  insideOverflowWithTransformContainer?: boolean;
  /**
   * If true, renders the dropdown menu inside its parent container in case it's inside a layer provider.
   * Use this prop when the dropdown menu is being cut off by its parent's (such as Modal, Dialog, Tooltip, etc.)overflow settings.
   */
  insideLayerContext?: boolean;
  /**
   * Tooltip content displayed when hovering over the selected value.
   */
  tooltipContent?: string;
  /**
   * If true, displays a loading state inside the dropdown.
   */
  isLoading?: boolean;
  /**
   * Function to override the default loading message.
   */
  loadingMessage?: (obj: { inputValue: string }) => string | null;
  /**
   * The ARIA label for the dropdown.
   */
  ariaLabel?: string;
  /**
   * If true, enables selecting values with the Tab key.
   */
  tabSelectsValue?: boolean;
  /**
   * Custom function to filter options based on input.
   */
  filterOption?: (option: DropdownOption, inputValue: string) => boolean;
  /**
   * The current value of the input field.
   */
  inputValue?: string;
  /**
   * If true, the input field loses focus when an option is selected.
   */
  blurInputOnSelect?: boolean;
  /**
   * Custom renderer for dropdown options.
   */
  OptionRenderer?: React.ReactNode;
  /**
   * If true, controls the menu open state.
   */
  menuIsOpen?: boolean;
  /**
   * Callback fired when an option is selected.
   */
  onOptionSelect?: (option: DropdownOption) => void;
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear?: () => void;
  /**
   * CSS selector for the container where popups are rendered.
   */
  popupsContainerSelector?: string;
  /**
   * Additional properties passed to the `react-select` component.
   */
  selectProps?: Record<string, string>;
  /**
   * If true, displays dividers between grouped options.
   */
  withGroupDivider?: boolean;
  /*
   * Class name to be added to multi select dialog
   */
  multiValueDialogClassName?: string;
}

export type DropdownProps = DropdownComponentProps;

export type DropdownChipColors = "primary" | "negative" | "positive";

export type DropdownMenuPosition = "absolute" | "fixed";

export type DropdownMenuPlacement = "top" | "bottom" | "auto";

export type DropdownSize = "small" | "medium" | "large";
