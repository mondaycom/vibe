import { SubIcon } from "../../../types";
import React from "react";
import { MutableRef } from "preact/hooks";

export const COMBOBOX_DIVIDER_ITEM = "combobox-divider";
export const COMBOBOX_CATEGORY_ITEM = "combobox-category";
export const COMBOBOX_OPTION_ITEM = "combobox-option";

export type ComboboxCategoryMap = {
  [key: string]: ComboboxCategoryType;
};

export type ComboboxCategoryType = {
  label: string;
  id: string;
  ariaLabel?: string;
  onlyShowOnSearch?: boolean;
};

export enum ComboboxOptionIconType {
  DEFAULT = "default",
  RENDERER = "renderer"
}

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

export interface IComboboxOptionEvents {
  onOptionClick: (
    event: React.MouseEvent | React.KeyboardEvent,
    index: number,
    option: ComboboxOptionType,
    mouseTriggered: boolean
  ) => void;
  onOptionLeave: (event: React.MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
  onOptionEnter: (event: React.MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
  onOptionHover?: (event: React.MouseEvent, index: number, option: ComboboxOptionType, mouseTriggered: boolean) => void;
}

export interface IOptionItemRendererArgs extends IComboboxOptionEvents {
  id?: string;
  index?: number;
  option?: ComboboxOptionType;
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
  optionRenderer?: (option: ComboboxOptionType) => JSX.Element;
  /**
   * temporary flag for investigate a bug - will remove very soon
   */
  forceUndoScrollNullCheck?: boolean;
}
