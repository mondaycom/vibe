import React, { ReactNode, AriaRole } from "react";
import { SubIcon, VibeComponentProps } from "../../types";
import { TooltipProps } from "../Tooltip";

export interface BaseListItemProps extends React.LiHTMLAttributes<HTMLLIElement>, VibeComponentProps {
  /**
   * The value associated with the list item.
   */
  value?: string;
  /**
   * The primary text content of the list item.
   */
  label: string;
  /**
   * The size of the list item. Affects padding and font size.
   */
  size?: BaseListItemSizes;
  /**
   * If true, the list item is selected.
   */
  selected?: boolean;
  /**
   * If true, the list item is disabled.
   */
  disabled?: boolean;
  /**
   * Element rendered at the start of the list item.
   * Can be an avatar, icon, inset, or a custom element.
   */
  startElement?: StartElement;
  /**
   * Element rendered at the end of the list item.
   * Can be an icon, suffix, or a custom element.
   */
  endElement?: EndElement;
  /**
   * If true, applies highlight styling to the item.
   */
  highlighted?: boolean;
  /**
   * Props for displaying a tooltip on the list item.
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * If true, adjusts the tooltip position for right-to-left (RTL) layouts.
   */
  rtl?: boolean;
  /**
   * The ARIA role of the list item.
   */
  role?: AriaRole;
  /**
   * The index of the list item.
   */
  index?: number;
}

export type BaseListItemSizes = "small" | "medium" | "large";

export type SideElement =
  | { type: "avatar"; value: string; square?: boolean }
  | { type: "icon"; value: SubIcon }
  | { type: "indent" }
  | { type: "suffix"; value: string }
  | { type: "custom"; render: () => ReactNode };

export type StartElement = Extract<SideElement, { type: "avatar" | "icon" | "indent" | "custom" }>;

export type EndElement = Extract<SideElement, { type: "icon" | "suffix" | "custom" }>;
