import { ListGroup } from "../BaseList/BaseList.types";
import { BaseListItemProps } from "../BaseListItem";
import { VibeComponentProps } from "../../types";

export interface BaseDropdownProps<T extends BaseListItemProps> extends VibeComponentProps {
  /**
   * The list of options available in the list.
   */
  options: ListGroup<T>[] | T[];
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
   * The function to call when the input changes.
   */
  onInputChange?: (input: string | null) => void;
  /**
   * The function to call when an option is selected.
   */
  onOptionSelect?: (option: T) => void;
}

export type DropdownSizes = "small" | "medium" | "large";

export type DropdownDirection = "ltr" | "rtl" | "auto";
