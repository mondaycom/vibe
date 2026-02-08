import { type ReactElement, type AriaRole } from "react";
import { type VibeComponentProps } from "../../../types";
import { type BaseListSizes, type BaseListElement } from "../../BaseList";

export type ListSize = BaseListSizes;
export type ListElement = BaseListElement;

export interface ListProps extends VibeComponentProps {
  /**
   * The HTML element to render as. Defaults to "ul".
   */
  as?: ListElement;
  /**
   * The child elements inside the list (typically ListItem components).
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
   * The ARIA role of the list. Defaults to "listbox".
   */
  role?: AriaRole;
  /**
   * The size of the list items.
   */
  size?: ListSize;
  /**
   * The maximum height of the list container. Enables scrolling when content exceeds this height.
   */
  maxHeight?: number | string;
  /**
   * If true, the list will automatically focus on mount.
   */
  focusOnMount?: boolean;
  /**
   * Index of the item that should be focused initially. Defaults to 0.
   */
  defaultFocusIndex?: number;
  /**
   * Callback fired when the focused item changes.
   */
  onFocusChange?: (index: number, id?: string) => void;
}
