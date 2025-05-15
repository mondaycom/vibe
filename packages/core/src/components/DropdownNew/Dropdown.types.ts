import React from "react";
import { ListGroup } from "../BaseList";
import { VibeComponentProps } from "../../types";
import { BaseListItemData } from "../BaseListItem/BaseListItem.types";

export type DropdownGroupOption<Item = Record<string, unknown>> = ListGroup<Item>[] | BaseListItemData<Item>[];

interface MultiSelectSpecifics<Item extends BaseListItemData<Record<string, unknown>>> {
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
  onOptionRemove?: (option: BaseListItemData<Item>) => void;
}

interface SingleSelectSpecifics<Item extends BaseListItemData<Record<string, unknown>>> {
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
}

export type BaseDropdownProps<Item extends BaseListItemData<Record<string, unknown>>> = VibeComponentProps & {
  /**
   * The list of options available in the list.
   */
  options: DropdownGroupOption<Item>;
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
   * If true, the dropdown is searchable.
   */
  searchable?: boolean;
  /**
   * The function to call to render an option.
   */
  optionRenderer?: (option: BaseListItemData<Item>) => React.ReactNode;
  /**
   * The function to call to render the selected value
   */
  valueRenderer?: (option: BaseListItemData<Item>) => React.ReactNode;
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
  onBlur?: () => void;
  /**
   * Callback fired when the selected value changes.
   */
  onChange?: (option: BaseListItemData<Item> | BaseListItemData<Item>[]) => void;
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
  onOptionSelect?: (option: BaseListItemData<Item>) => void;
  /**
   * Callback fired when scrolling inside the dropdown.
   */
  onScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
} & (MultiSelectSpecifics<Item> | SingleSelectSpecifics<Item>);

export type DropdownSizes = "small" | "medium" | "large";

export type DropdownDirection = "ltr" | "rtl" | "auto";
