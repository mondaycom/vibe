import { type ReactNode, type AriaRole } from "react";
import type React from "react";
import { type VibeComponentProps } from "../../types";
import { type TooltipProps } from "../Tooltip";
import { type BaseListDirection, type BaseListSizes } from "../BaseList/BaseList.types";
import { type ChipsProps } from "../Chips";
import { type SubIcon } from "@vibe/icon";

export interface BaseListItemProps<Item extends Record<string, unknown>>
  extends Omit<React.HTMLAttributes<HTMLElement>, "role">,
    VibeComponentProps {
  /**
   * The HTML element to render. Defaults to "li".
   */
  component?: keyof JSX.IntrinsicElements;
  /**
   * The Size of the list item.
   */
  size?: BaseListSizes;
  /**
   * If true, the list item is selected.
   */
  selected?: boolean;
  /**
   * If true, the dropdown is read-only and cannot be edited.
   */
  readOnly?: boolean;
  /**
   * Whether item should have highlight styling
   */
  highlighted?: boolean;
  /**
   * Determines the position of the tooltip according to the direction.
   */
  dir?: BaseListDirection;
  /**
   * The ARIA role of the list item.
   */
  role?: AriaRole;
  /**
   * The index of the item in the list.
   */
  index?: number;
  /**
   * Custom renderer for options.
   */
  itemRenderer?: (item: BaseListItemData<Item>) => React.ReactNode;
  /**
   * The original item data that this list item represents.
   */
  item?: BaseListItemData<Item>;
  /**
   * Additional props to pass to the list item element.
   */
  itemProps?: Record<string, unknown>;
}

export type BaseListItemData<Item = Record<string, unknown>> = Item & {
  /**
   * The value of the list item.
   */
  value: string | number;
  /**
   * The primary text content of the list item.
   */
  label: string;
  /**
   * The start element of the list item.
   */
  startElement?: StartElement;
  /**
   * The end element of the list item.
   */
  endElement?: EndElement;
  /**
   * If true, the list item is disabled.
   */
  disabled?: boolean;
  /**
   * Props for displaying a tooltip on the list item.
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * The color of the chip when displayed in multi-select mode.
   */
  chipColor?: ChipsProps["color"];
  /**
   * The index of the item in the list.
   */
  index?: number;
};

export type SideElement =
  | { type: "avatar"; value: string; square?: boolean }
  | { type: "icon"; value: SubIcon }
  | { type: "indent" }
  | { type: "suffix"; value: string }
  | { type: "custom"; render: () => ReactNode };

export type StartElement = Extract<SideElement, { type: "avatar" | "icon" | "indent" | "custom" }>;

export type EndElement = Extract<SideElement, { type: "icon" | "suffix" | "custom" }>;
