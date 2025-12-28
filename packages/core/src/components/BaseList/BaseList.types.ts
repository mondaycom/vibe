import { type AriaAttributes, type AriaRole, type ReactElement } from "react";
import type React from "react";
import { type VibeComponentProps } from "../../types";
import { type BaseItemSizes } from "../BaseItem";

export type BaseListElement = "div" | "nav" | "ul" | "ol";

export type BaseListSizes = BaseItemSizes;

export interface BaseListProps extends React.HTMLAttributes<HTMLElement>, VibeComponentProps {
  /**
   * The HTML element to render. Defaults to "ul".
   */
  component?: BaseListElement;
  /**
   * The child elements inside the list (typically BaseItem components).
   */
  children?: ReactElement | ReactElement[];
  /**
   * The ARIA label describing the list. Required for accessibility when ariaDescribedBy is not provided.
   */
  ariaLabel?: string;
  /**
   * The ID of an element that describes the list.
   */
  ariaDescribedBy?: string;
  /**
   * The ID of an element controlled by the list.
   */
  "aria-controls"?: AriaAttributes["aria-controls"];
  /**
   * The ARIA role of the list. Defaults to "listbox".
   */
  role?: AriaRole;
  /**
   * The size of the list items.
   */
  size?: BaseListSizes;
  /**
   * The maximum height of the list container. Enables scrolling when content exceeds this height.
   */
  maxHeight?: number | string;
  /**
   * The tab index of the list for keyboard navigation. Defaults to 0.
   */
  tabIndex?: number;
  /**
   * If true, the list will automatically focus on mount.
   */
  focusOnMount?: boolean;
  /**
   * Index of the item that should be focused initially. Defaults to 0.
   */
  defaultFocusIndex?: number;
  /**
   * Controlled focus index. When provided, the component becomes controlled.
   */
  focusIndex?: number;
  /**
   * Callback fired when the focused item changes.
   */
  onFocusChange?: (index: number, id?: string) => void;
  /**
   * If true, disables all keyboard navigation and focus management.
   */
  disabled?: boolean;
}
