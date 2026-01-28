import type React from "react";
import { type AriaRole } from "react";
import { type VibeComponentProps } from "../../../../types";
import { type BaseItemDirection, type BaseItemData, type StartElement, type EndElement } from "../../../BaseItem";

/**
 * Re-export types from BaseItem for convenience
 */
export type ListItemDirection = BaseItemDirection;
export type ListItemStartElement = StartElement;
export type ListItemEndElement = EndElement;

/**
 * Props for the ListItem component.
 * These are derived from BaseItemData to ensure consistency with the underlying BaseItem component.
 */
export interface ListItemProps
  extends Pick<BaseItemData, "label" | "disabled" | "startElement" | "endElement" | "tooltipProps">,
    VibeComponentProps {
  /**
   * The value of the list item (used for identification). Defaults to label if not provided.
   */
  value?: BaseItemData["value"];
  /**
   * If true, the list item is selected.
   */
  selected?: boolean;
  /**
   * If true, the list item is read-only and cannot be edited.
   */
  readOnly?: boolean;
  /**
   * Determines the position of the tooltip according to the direction.
   */
  dir?: ListItemDirection;
  /**
   * The ARIA role of the list item.
   */
  role?: AriaRole;
  /**
   * Callback fired when the list item is clicked.
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * Callback fired when the list item is hovered (mouseenter or focus).
   */
  onHover?: (event: React.MouseEvent | React.FocusEvent) => void;
}
