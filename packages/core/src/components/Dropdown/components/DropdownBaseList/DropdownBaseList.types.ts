import { type ReactNode } from "react";
import type React from "react";
import { type VibeComponentProps } from "../../../../types";
import { type BaseItemData, type BaseItemSizes, type BaseItemDirection } from "../../../BaseItem";

export interface DropdownBaseListProps<Item = Record<string, unknown>>
  extends React.HTMLAttributes<HTMLUListElement>,
    VibeComponentProps {
  /**
   * The list of options available in the list.
   */
  options: DropdownListGroup<Item>[];
  /**
   * The selected item in the list.
   */
  selectedItems?: BaseItemData<Item>[] | null;
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
  size?: BaseItemSizes;
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
  dir?: BaseItemDirection;
  /**
   * Custom renderer for options.
   */
  itemRenderer?: (item: BaseItemData<Item>) => React.ReactNode;
  /**
   * Custom renderer for the entire menu content inside the ul element.
   */
  menuRenderer?: (props: {
    children: React.ReactNode;
    filteredOptions: DropdownListGroup<Item>[];
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

export interface DropdownListGroup<Item = Record<string, unknown>> {
  /**
   * The label for the group of options.
   */
  label?: string;
  /**
   * The list of options within this group.
   */
  options: BaseItemData<Item>[];
}

export type { BaseItemSizes, BaseItemDirection };
