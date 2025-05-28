import React, { ReactNode } from "react";
import { VibeComponentProps } from "../../types";
import { BaseListItemData } from "../BaseListItem";

export interface BaseListProps<Item = Record<string, unknown>>
  extends React.HTMLAttributes<HTMLUListElement>,
    VibeComponentProps {
  /**
   * The list of options available in the list.
   */
  options: ListGroup<Item>[];
  /**
   * The selected item in the list.
   */
  selectedItems?: BaseListItemData<Item>[] | null;
  /**
   * The index of the highlighted item in the list.
   */
  highlightedIndex?: number;
  /**
   * The ARIA label for the menu.
   */
  menuAriaLabel?: string;
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
  itemRenderer?: (item: BaseListItemData<Item>) => React.ReactNode;
  /**
   * Custom renderer for the entire menu content inside the ul element.
   */
  menuRenderer?: (props: {
    children: React.ReactNode;
    filteredOptions: ListGroup<Item>[];
    selectedItem?: Item | null;
    selectedItems?: Item[];
  }) => React.ReactNode;
  /**
   * Text or function to customize the "No results" message.
   */
  noOptionsMessage?: string | ReactNode;
  /**
   * If true, the options are rendered.
   */
  renderOptions?: boolean;
  /**
   * Function to handle scroll events.
   */
  onScroll?: (event: React.UIEvent<HTMLUListElement>) => void;
  /**
   * The maximum height of the list.
   */
  maxMenuHeight?: number;
}

export interface ListGroup<Item = Record<string, unknown>> {
  /**
   * The label for the group of options.
   */
  label?: string;
  /**
   * The list of options within this group.
   */
  options: BaseListItemData<Item>[];
}

export type BaseListSizes = "small" | "medium" | "large";

export type BaseListDirection = "ltr" | "rtl" | "auto";
