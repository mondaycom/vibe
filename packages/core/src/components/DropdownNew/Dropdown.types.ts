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
   * The function to call when the menu is scrolled.
   */
  onScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
  /**
   * The function to call when the dropdown is blurred.
   */
  onBlur?: () => void;
  /**
   * The function to call when the selected option is changed.
   */
  onChange?: (option: T | T[]) => void;
  /**
   * The function to call when the dropdown is cleared.
   */
  onClear?: () => void;
  /**
   * The function to call when the dropdown is focused.
   */
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
  /**
   * The function to call when the input changes.
   */
  onInputChange?: (input: string | null) => void;
  /**
   * The function to call when a key is pressed in the dropdown.
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  /**
   * The function to call when the menu is opened.
   */
  onMenuOpen?: () => void;
  /**
   * The function to call when the menu is closed.
   */
  onMenuClose?: () => void;
  /**
   * The function to call when an option is selected.
   */
  onOptionSelect?: (option: T) => void;
}

export type DropdownSizes = "small" | "medium" | "large";

export type DropdownDirection = "ltr" | "rtl" | "auto";
