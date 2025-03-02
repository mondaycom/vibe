import React, { ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { BaseListItemProps } from "../BaseListItem";
import { GetItemPropsOptions, UseComboboxGetMenuPropsOptions } from "downshift";

export interface BaseListProps<T = BaseListItemProps> extends React.HTMLAttributes<HTMLDivElement>, VibeComponentProps {
  /**
   * The list of options available in the list.
   */
  options: ListGroup<T>[];
  /**
   * The selected item of the list.
   */
  selectedItem?: T | null;
  /**
   * The index of the highlighted item of the list.
   */
  highlightedIndex?: number;
  /**
   * Downshift function to get props for the menu container
   **/
  getMenuProps?: (options?: UseComboboxGetMenuPropsOptions, otherOptions?: any) => any;
  /**
   * Downshift function to get props for each item
   * */
  getItemProps?: (options: GetItemPropsOptions<T>) => any;
  /**
   * The Size of the list item.
   */
  size?: BaseListSizes;
  /**
   * If true, displays dividers between grouped options.
   */
  withGroupDivider?: boolean;
  /**
   * The text direction of the list.
   */
  dir?: BaseListDirection;
  /**
   * Custom renderer for options.
   */
  optionRenderer?: (item: T) => JSX.Element;
  /**
   * Text or Function to customize the "No results" message.
   */
  noOptionsMessage?: string | ReactNode;
}

export interface ListGroup<T = BaseListItemProps> {
  /**
   * The label for the group of options.
   */
  label?: string;
  /**
   * The list of options within this group.
   */
  options: T[];
}

export type BaseListSizes = "small" | "medium" | "large";

export type BaseListDirection = "ltr" | "rtl" | "auto";
