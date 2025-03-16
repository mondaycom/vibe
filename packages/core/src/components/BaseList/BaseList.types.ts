import React, { ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { BaseListItemProps } from "../BaseListItem";

export interface BaseListProps<T = BaseListItemProps>
  extends React.HTMLAttributes<HTMLUListElement>,
    VibeComponentProps {
  /**
   * The list of options available in the list.
   */
  options: ListGroup<T>[];
  /**
   * The selected item in the list.
   */
  selectedItem?: T | null;
  /**
   * The index of the highlighted item in the list.
   */
  highlightedIndex?: number;
  /**
   * Function to get props for the menu container.
   */
  getMenuProps?: ((options?: any, otherOptions?: any) => Record<string, unknown>) | null;
  /**
   * Function to get props for each item in the list.
   */
  getItemProps?: ((options: any) => Record<string, unknown>) | null;
  /**
   * The size of the list item.
   */
  size?: BaseListSizes;
  /**
   * If true, displays dividers between grouped options.
   */
  withGroupDivider?: boolean;
  /**
   * If true, makes the group title sticky.
   */
  stickyGroupTitle?: boolean;
  /**
   * The text direction of the list.
   */
  dir?: BaseListDirection;
  /**
   * Custom renderer for options.
   */
  optionRenderer?: (item: T) => JSX.Element;
  /**
   * Text or function to customize the "No results" message.
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
