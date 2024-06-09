import { SubIcon } from "../../../types";
import React from "react";
import { MutableRef } from "preact/hooks";

export const COMBOBOX_DIVIDER_ITEM = "combobox-divider";
export const COMBOBOX_CATEGORY_ITEM = "combobox-category";
export const COMBOBOX_OPTION_ITEM = "combobox-option";
export const COMBOBOX_LISTBOX_ID = "combobox-listbox";

export enum ComboboxOptionIconType {
  DEFAULT = "default",
  RENDERER = "renderer"
}

export interface IComboboxCategoryMap {
  [key: string]: IComboboxCategory;
}

export interface IComboboxCategory {
  label: string;
  id: string;
  ariaLabel?: string;
  onlyShowOnSearch?: boolean;
  color?: string;
}

export interface IComboboxOption {
  id: string;
  categoryId?: string;
  leftIcon?: SubIcon | ((className: string) => JSX.Element);
  rightIcon?: SubIcon | ((className: string) => JSX.Element);
  leftIconType?: ComboboxOptionIconType;
  rightIconType?: ComboboxOptionIconType;
  label: string;
  iconSize?: number;
  disabled?: boolean;
  selected?: boolean;
  ariaLabel?: string;
  belongToCategory?: boolean;
  tooltipContent?: string;
}

export interface IComboboxItem {
  height?: number;
  type?: string;
  category?: IComboboxCategory;
  categoryId?: string;
  id?: string;
  index?: number;
  withDivider?: boolean;
  className?: string;
  belongToCategory?: boolean;
  option?: IComboboxOption;
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
  isActive?: boolean;
  optionLineHeight?: number;
  shouldScrollToSelectedItem?: boolean;
}

export interface IComboboxOptionEvents {
  onOptionClick: (
    event: React.MouseEvent | React.KeyboardEvent,
    index: number,
    option: IComboboxOption,
    mouseTriggered: boolean
  ) => void;
  onOptionLeave: (event: React.MouseEvent, index: number, option: IComboboxOption, mouseTriggered: boolean) => void;
  onOptionEnter: (event: React.MouseEvent, index: number, option: IComboboxOption, mouseTriggered: boolean) => void;
  onOptionHover?: (event: React.MouseEvent, index: number, option: IComboboxOption, mouseTriggered: boolean) => void;
}

export interface IOptionItemRendererArgs extends IComboboxOptionEvents {
  id?: string;
  index?: number;
  option?: IComboboxOption;
  className?: string;
  isActive?: boolean;
  visualFocus?: boolean;
  scrollRef?: MutableRef<HTMLElement>;
  scrollOffset?: number;
  optionLineHeight?: number;
  shouldScrollToSelectedItem?: boolean;
  shouldScrollWhenActive?: boolean;
  belongToCategory?: boolean;
  visualFocusItemIndex?: number;
  activeItemIndex?: number;
  optionRenderer?: (option: IComboboxOption) => JSX.Element;
}
