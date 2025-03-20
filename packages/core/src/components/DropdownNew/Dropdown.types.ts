import React from "react";
import { ListGroup } from "../BaseList";
import { BaseListItemProps } from "../BaseListItem";
import { VibeComponentProps } from "../../types";

export type DropdownGroupOption<T extends BaseListItemProps> = ListGroup<T>[] | T[];

export interface BaseDropdownProps<T extends BaseListItemProps> extends VibeComponentProps {
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
  optionRenderer?: (option: T) => JSX.Element;
  /**
   * The message to display when there are no options.
   */
  noOptionsMessage?: string | JSX.Element;
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
   * Callback fired when the dropdown loses focus.
   */
  onBlur?: () => void;
  /**
   * Callback fired when the selected value changes.
   */
  onChange?: (option: T | T[]) => void;
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
  onOptionSelect?: (option: T) => void;
  /**
   * Callback fired when scrolling inside the dropdown.
   */
  onScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
}

export type DropdownSizes = "small" | "medium" | "large";

export type DropdownDirection = "ltr" | "rtl" | "auto";
