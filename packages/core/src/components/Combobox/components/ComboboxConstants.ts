import type React from "react";
import { type SubIcon } from "@vibe/icon";
import type { TooltipProps } from "../../Tooltip/Tooltip";

export const COMBOBOX_DIVIDER_ITEM = "combobox-divider";
export const COMBOBOX_CATEGORY_ITEM = "combobox-category";
export const COMBOBOX_OPTION_ITEM = "combobox-option";
export const COMBOBOX_LISTBOX_ID = "combobox-listbox";

/**
 * @deprecated
 */
export enum ComboboxOptionIconType {
  DEFAULT = "default",
  RENDERER = "renderer"
}

export interface IComboboxCategoryMap {
  /**
   * A mapping of category IDs to category details.
   */
  [key: string]: IComboboxCategory;
}

export interface IComboboxCategory {
  /**
   * The display label of the category.
   */
  label: string;
  /**
   * The unique ID of the category.
   */
  id: string;
  /**
   * The ARIA label for accessibility.
   */
  ariaLabel?: string;
  /**
   * If true, the category is only shown when searching.
   */
  onlyShowOnSearch?: boolean;
  /**
   * The color associated with the category.
   */
  color?: string;
}

export interface IComboboxOption {
  /**
   * The unique ID of the option.
   */
  id: string;
  /**
   * The ID of the category the option belongs to.
   */
  categoryId?: string;
  /**
   * The icon displayed on the left side.
   */
  leftIcon?: SubIcon | ((className: string) => JSX.Element);
  /**
   * The icon displayed on the right side.
   */
  rightIcon?: SubIcon | ((className: string) => JSX.Element);
  /**
   * The type of the left icon.
   */
  leftIconType?: ComboboxOptionIconType;
  /**
   * The type of the right icon.
   */
  rightIconType?: ComboboxOptionIconType;
  /**
   * The display label of the option.
   */
  label: string;
  /**
   * The size of the icons.
   */
  iconSize?: number;
  /**
   * If true, the option is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the option is selected.
   */
  selected?: boolean;
  /**
   * The ARIA label for accessibility.
   */
  ariaLabel?: string;
  /**
   * If true, the option belongs to a category.
   */
  belongToCategory?: boolean;
  /**
   * The tooltip content displayed on hover.
   */
  tooltipContent?: string;
  /**
   * Props for the Tooltip component.
   * The "Omit" is here on purpose to avoid the content prop, in case tooltipProps would be expanded in the future.
   */
  tooltipProps?: Pick<Omit<TooltipProps, "content">, "position">;
}

export interface IComboboxItem {
  /**
   * The height of the item.
   */
  height?: number;
  /**
   * The type of the item.
   */
  type?: string;
  /**
   * The category details if the item is a category.
   */
  category?: IComboboxCategory;
  /**
   * The ID of the category the item belongs to.
   */
  categoryId?: string;
  /**
   * The unique ID of the item.
   */
  id?: string;
  /**
   * The index of the item in the list.
   */
  index?: number;
  /**
   * If true, a divider is displayed before this item.
   */
  withDivider?: boolean;
  /**
   * Class name applied to the item.
   */
  className?: string;
  /**
   * If true, the item belongs to a category.
   */
  belongToCategory?: boolean;
  /**
   * The option details if the item is an option.
   */
  option?: IComboboxOption;
  /**
   * Custom renderer for the option.
   */
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
  /**
   * If true, the item is currently active.
   */
  isActive?: boolean;
  /**
   * The height of the option item.
   */
  optionLineHeight?: number;
  /**
   * If true, the selected item is automatically scrolled into view.
   */
  shouldScrollToSelectedItem?: boolean;
}

export interface IComboboxOptionEvents {
  /**
   * Callback fired when an option is clicked.
   */
  onOptionClick: (
    event: React.MouseEvent | React.KeyboardEvent,
    index: number,
    option: IComboboxOption,
    mouseTriggered: boolean
  ) => void;
  /**
   * Callback fired when the mouse leaves an option.
   */
  onOptionLeave: (event: React.MouseEvent, index: number, option: IComboboxOption, mouseTriggered: boolean) => void;
  /**
   * Callback fired when the mouse enters an option.
   */
  onOptionEnter: (event: React.MouseEvent, index: number, option: IComboboxOption, mouseTriggered: boolean) => void;
  /**
   * Callback fired when hovering over an option.
   */
  onOptionHover?: (event: React.MouseEvent, index: number, option: IComboboxOption, mouseTriggered: boolean) => void;
}

export interface IOptionItemRendererArgs extends IComboboxOptionEvents {
  /**
   * The unique ID of the option item.
   */
  id?: string;
  /**
   * The index of the option item.
   */
  index?: number;
  /**
   * The option details.
   */
  option?: IComboboxOption;
  /**
   * Class name applied to the option item.
   */
  className?: string;
  /**
   * If true, the option is currently active.
   */
  isActive?: boolean;
  /**
   * If true, the option has visual focus.
   */
  visualFocus?: boolean;
  /**
   * A reference to the scroll container.
   */
  scrollRef?: React.MutableRefObject<HTMLElement>;
  /**
   * The amount of offset when scrolling to the active item.
   */
  scrollOffset?: number;
  /**
   * The height of the option item.
   */
  optionLineHeight?: number;
  /**
   * If true, the selected item is automatically scrolled into view.
   */
  shouldScrollToSelectedItem?: boolean;
  /**
   * If true, scrolls to the active option when it is selected.
   */
  shouldScrollWhenActive?: boolean;
  /**
   * If true, the option belongs to a category.
   */
  belongToCategory?: boolean;
  /**
   * The index of the item with visual focus.
   */
  visualFocusItemIndex?: number;
  /**
   * The index of the currently active item.
   */
  activeItemIndex?: number;
  /**
   * Custom renderer for the option content.
   */
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
}
