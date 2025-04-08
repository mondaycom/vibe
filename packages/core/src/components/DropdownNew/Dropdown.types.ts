import React from "react";
import { ListGroup } from "../BaseList";
import { VibeComponentProps } from "../../types";
import { BaseListItemData } from "../BaseListItem/BaseListItem.types";

export type DropdownGroupOption<T = Record<string, unknown>> = ListGroup<T>[] | BaseListItemData<T>[];
export interface BaseDropdownProps<T extends BaseListItemData<Record<string, unknown>>> extends VibeComponentProps {
  /**
   * The list of options available in the list.
   */
  options: DropdownGroupOption<T>;
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
  optionRenderer?: (option: BaseListItemData<T>) => React.ReactNode;
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
   * If true, the dropdown menu is open.
   */
  isMenuOpen?: boolean;
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
  onChange?: (option: BaseListItemData<T> | BaseListItemData<T>[]) => void;
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
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
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
  onOptionSelect?: (option: BaseListItemData<T>) => void;
  /**
   * Callback fired when scrolling inside the dropdown.
   */
  onScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
}

export type DropdownSizes = "small" | "medium" | "large";

export type DropdownDirection = "ltr" | "rtl" | "auto";
