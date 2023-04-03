import { SubIcon } from "../../../types";

export const COMBOBOX_DIVIDER_ITEM = "combobox-divider";
export const COMBOBOX_CATEGORY_ITEM = "combobox-category";
export const COMBOBOX_OPTION_ITEM = "combobox-option";

export enum ComboboxOptionIconType {
  DEFAULT = "default",
  RENDERER = "renderer"
}

export type ComboboxCategoryMap = {
  [key: string]: ComboboxCategoryType;
};

export type ComboboxCategoryType = {
  label: string;
  id: string;
  ariaLabel?: string;
  onlyShowOnSearch?: boolean;
};

export type ComboboxOptionType = {
  id: string;
  categoryId: string;
  leftIcon: SubIcon | ((className: string) => JSX.Element);
  rightIcon: SubIcon | ((className: string) => JSX.Element);
  leftIconType: ComboboxOptionIconType;
  rightIconType: ComboboxOptionIconType;
  label: string;
  iconSize: number;
  disabled: boolean;
  selected: boolean;
  ariaLabel: string;
  belongToCategory: boolean;
  tooltipContent: string;
};

export type ComboboxItem = {
  height?: number;
  type?: string;
  category?: ComboboxCategoryType;
  categoryId?: string;
  id?: string;
  index?: number;
  withDivider?: boolean;
  className?: string;
  belongToCategory?: boolean;
  option?: ComboboxOptionType;
  optionRenderer?: (option: ComboboxOptionType) => JSX.Element;
  isActive?: boolean;
  optionLineHeight?: number;
  shouldScrollToSelectedItem?: boolean;
};

export type ComboboxOptionEvents = {
  onOptionClick: (
    event: MouseEvent | KeyboardEvent,
    index: number,
    option: ComboboxOptionType,
    mouseTriggered: boolean
  ) => void;
  onOptionLeave: (event: MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
  onOptionEnter: (event: MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
  onOptionHover?: (event: MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
};
