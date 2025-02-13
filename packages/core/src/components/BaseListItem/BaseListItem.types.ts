import React, { ReactNode } from "react";
import { SubIcon, VibeComponentProps } from "../../types";
import { TooltipProps } from "../Tooltip";

export interface BaseListItemProps extends React.HTMLAttributes<HTMLDivElement>, VibeComponentProps {
  value?: string;
  /**
   * Primary text content of the list item
   */
  label: string;
  /**
   * Size of the list item. Will influence the padding and font size.
   */
  size?: BaseListItemSizes;
  /**
   * Indicates whether the list item is selected.
   */
  selected?: boolean;
  /**
   * Indicates whether the list item is disabled.
   */
  disabled?: boolean;
  /**
   * Element to render at the start of the list item.
   * Can be an avatar, icon, inset or a custom rendered element.
   */
  startElement?: StartElement;
  /**
   * Element to render at the end of the list item.
   * Can be an icon, suffix, or a custom rendered element.
   */
  endElement?: EndElement;
  /**
   * Whether item should have highlight styling
   */
  highlighted?: boolean;
  /**
   * Use when there's a need to display a tooltip on the list item (e.g., explain why disabled).
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * determines the position of the tooltip according to the direction.
   */
  rtl?: boolean;
}

export type BaseListItemSizes = "small" | "medium" | "large";

export type SideElement =
  | { type: "avatar"; value: string; square?: boolean }
  | { type: "icon"; value: SubIcon }
  | { type: "inset" }
  | { type: "suffix"; value: string }
  | { type: "custom"; render: () => ReactNode };

export type StartElement = Extract<SideElement, { type: "avatar" | "icon" | "inset" | "custom" }>;

export type EndElement = Extract<SideElement, { type: "icon" | "suffix" | "custom" }>;
