import React, { ReactNode, AriaRole } from "react";
import { SubIcon, VibeComponentProps } from "../../types";
import { TooltipProps } from "../Tooltip";
import { BaseListDirection, BaseListSizes } from "../BaseList/BaseList.types";

export interface BaseListItemProps<T = Record<string, unknown>>
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VibeComponentProps {
  /**
   * The value associated with the list item.
   */
  value?: string;
  /**
   * The primary text content of the list item.
   */
  label: string;
  /**
   * The Size of the list item.
   */
  size?: BaseListSizes;
  /**
   * If true, the list item is selected.
   */
  selected?: boolean;
  /**
   * If true, the list item is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the dropdown is read-only and cannot be edited.
   */
  readOnly?: boolean;
  /**
   * Element to render at the start of the list item.
   */
  startElement?: StartElement;
  /**
   * Element to render at the end of the list item.
   */
  endElement?: EndElement;
  /**
   * Whether item should have highlight styling
   */
  highlighted?: boolean;
  /**
   * Props for displaying a tooltip on the list item.
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * Determines the position of the tooltip according to the direction.
   */
  dir?: BaseListDirection;
  /**
   * ARIA role for the list item.
   */
  role?: AriaRole;
  /**
   * The index of the item in the list.
   */
  index?: number;
  /**
   * Custom renderer for options.
   */
  optionRenderer?: (item: T) => JSX.Element;
  /**
   * Allow any additional user-defined properties dynamically
   **/
  [key: string]: unknown;
}

export type SideElement =
  | { type: "avatar"; value: string; square?: boolean }
  | { type: "icon"; value: SubIcon }
  | { type: "indent" }
  | { type: "suffix"; value: string }
  | { type: "custom"; render: () => ReactNode };

export type StartElement = Extract<SideElement, { type: "avatar" | "icon" | "indent" | "custom" }>;

export type EndElement = Extract<SideElement, { type: "icon" | "suffix" | "custom" }>;
