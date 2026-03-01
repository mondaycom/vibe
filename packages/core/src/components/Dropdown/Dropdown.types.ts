import type React from "react";
import { type DropdownListGroup } from "./components/DropdownBaseList/DropdownBaseList.types";
import { type VibeComponentProps } from "../../types";
import { type BaseItemData } from "../BaseItem";
import { type TooltipProps } from "@vibe/tooltip";

export type DropdownOption<Item = Record<string, unknown>> = BaseItemData<Item>;
export type DropdownGroupOption<Item = Record<string, unknown>> = DropdownListGroup<Item>[] | BaseItemData<Item>[];

interface MultiSelectSpecifics<Item extends BaseItemData<Record<string, unknown>>> {
  /**
   * If true, the dropdown allows multiple selections.
   */
  multi: true;
  /*
   * If true, the dropdown allows multiple lines of selected items.
   */
  multiline?: boolean;
  /**
   * Callback fired when an option is removed in multi-select mode. Only available when multi is true.
   */
  onOptionRemove?: (option: Item) => void;
  /**
   * The function to call to render the selected value on single select mode.
   */
  valueRenderer?: never;
  /**
   * The default selected values for multi-select.
   */
  defaultValue?: Item[];
  /**
   * The controlled selected values for multi-select.
   */
  value?: Item[];
  /**
   * Callback fired when the selected values change in multi-select mode.
   */
  onChange?: (options: Item[]) => void;
  /**
   * Minimum number of selected chips to always show before overflowing to the counter.
   */
  minVisibleCount?: number;
}

interface SingleSelectSpecifics<Item extends BaseItemData<Record<string, unknown>>> {
  /**
   * If true, the dropdown allows multiple selections. Defaults to false.
   */
  multi?: false;
  /**
   * If true, the dropdown allows multiple lines of selected items. (Not available for single select)
   */
  multiline?: never;
  /**
   * Callback fired when an option is removed in multi-select mode. (Not available for single select)
   */
  onOptionRemove?: never;
  /**
   * The function to call to render the selected value on single select mode.
   */
  valueRenderer?: (option: Item) => React.ReactNode;
  /**
   * The default selected value for single-select.
   */
  defaultValue?: Item;
  /**
   * The controlled selected value for single-select.
   */
  value?: Item;
  /**
   * Callback fired when the selected value changes in single-select mode.
   */
  onChange?: (option: Item) => void;
  /**
   * Minimum number of selected chips to always show before overflowing to the counter. (Not available for single select)
   */
  minVisibleCount?: never;
}

type BoxModeConstraint =
  | {
      /**
       * If true, the dropdown is searchable.
       */
      searchable?: false;
      /**
       * If true, the dropdown menu is displayed inline without a popup/dialog.
       */
      boxMode?: false;
    }
  | {
      /**
       * If true, the dropdown is searchable.
       */
      searchable: true;
      /**
       * If true, the dropdown menu is displayed inline without a popup/dialog.
       */
      boxMode?: boolean;
    };

export type BaseDropdownProps<Item extends BaseItemData<Record<string, unknown>>> = VibeComponentProps &
  BoxModeConstraint & {
    /**
     * The list of options available in the list.
     */
    options: DropdownGroupOption<Item>;
    /**
     * Props to be passed to the Tooltip component that wraps the dropdown.
     */
    tooltipProps?: Partial<TooltipProps>;
    /**
     * If true, displays dividers between grouped options.
     */
    withGroupDivider?: boolean;
    /**
     * If true, makes the group title sticky.
     */
    stickyGroupTitle?: boolean;
    /**
     * The size of the dropdown.
     */
    size?: DropdownSizes;
    /**
     * The direction of the dropdown.
     */
    dir?: DropdownDirection;
    /**
     * If true, the dropdown has no visible border by default, but shows border on hover, focus, and active states.
     */
    borderless?: boolean;
    /**
     * The function to call to render an option.
     */
    optionRenderer?: (option: Item) => React.ReactNode;
    /**
     * The function to call to render the menu.
     */
    menuRenderer?: (props: {
      children: React.ReactNode;
      filteredOptions: DropdownListGroup<Item>[];
      selectedItems: Item[];
      getItemProps: (options: any) => Record<string, unknown>;
    }) => React.ReactNode;
    /**
     * The message to display when there are no options.
     */
    noOptionsMessage?: string | React.ReactNode;
    /**
     * The placeholder to display when the dropdown is empty.
     */
    placeholder?: string;
    /**
     * If true, the dropdown is disabled.
     */
    disabled?: boolean;
    /**
     * If true, the dropdown is read only.
     */
    readOnly?: boolean;
    /**
     * If true, the dropdown is in an error state.
     */
    error?: boolean;
    /**
     * The helper text to display below the dropdown.
     */
    helperText?: string;
    /**
     * If true, the dropdown is required.
     */
    required?: boolean;
    /**
     * The label to display above the dropdown.
     */
    label?: string;
    /**
     * The ARIA label for the dropdown.
     */
    ariaLabel?: string;
    /**
     * The ARIA label for the dropdown input.
     */
    inputAriaLabel?: string;
    /**
     * The ARIA label for the menu container.
     */
    menuAriaLabel?: string;
    /**
     * The ARIA label for the clear button.
     */
    clearAriaLabel?: string;
    /**
     * The current value of the input field.
     */
    inputValue?: string;
    /**
     * The maximum height of the dropdown menu.
     */
    maxMenuHeight?: number;
    /**
     * If true, controls the menu open state.
     */
    isMenuOpen?: boolean;
    /**
     * If true, closes the menu when an option is selected.
     */
    closeMenuOnSelect?: boolean;
    /**
     * If true, the dropdown menu will be auto focused.
     */
    autoFocus?: boolean;
    /**
     * If true, the dropdown will have a clear button.
     */
    clearable?: boolean;
    /**
     * Callback fired when the dropdown loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * Callback fired when the clear button is clicked.
     */
    onClear?: () => void;
    /**
     * Callback fired when the dropdown gains focus.
     */
    onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * Callback fired when the dropdown input value changes.
     */
    onInputChange?: (input: string | null) => void;
    /**
     * Callback fired when a key is pressed inside the dropdown.
     */
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    /**
     * Callback fired when the dropdown menu opens.
     */
    onMenuOpen?: () => void;
    /**
     * Callback fired when the dropdown menu closes.
     */
    onMenuClose?: () => void;
    /**
     * Callback fired when an option is selected.
     */
    onOptionSelect?: (option: Item) => void;
    /**
     * Callback fired when scrolling inside the dropdown.
     */
    onScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
    /**
     * A function to customize the filtering of options.
     * It receives an option and the current input value, and should return true if the option should be included, false otherwise.
     */
    filterOption?: (option: Item, inputValue: string) => boolean;
    /**
     * If false, selected options will be hidden from the list. Defaults to true.
     */
    showSelectedOptions?: boolean;
    /**
     * The class name to be applied to the menu wrapper.
     */
    menuWrapperClassName?: string;
    /**
     * If true, displays a loading indicator in the dropdown controls.
     */
    loading?: boolean;
  } & (MultiSelectSpecifics<Item> | SingleSelectSpecifics<Item>);

export type DropdownSizes = "small" | "medium" | "large";

export type DropdownDirection = "ltr" | "rtl" | "auto";

export type DropdownMultiControllerProps<Item extends BaseItemData<Record<string, unknown>>> = Omit<
  BaseDropdownProps<Item>,
  keyof MultiSelectSpecifics<Item> | keyof BoxModeConstraint
> &
  BoxModeConstraint &
  MultiSelectSpecifics<Item> & {
    dropdownRef: React.Ref<HTMLDivElement>;
  };

export type DropdownSingleControllerProps<Item extends BaseItemData<Record<string, unknown>>> = Omit<
  BaseDropdownProps<Item>,
  keyof SingleSelectSpecifics<Item> | keyof BoxModeConstraint
> &
  BoxModeConstraint &
  SingleSelectSpecifics<Item> & {
    dropdownRef: React.Ref<HTMLDivElement>;
  };
