import { type MenuItemProps } from "../../MenuItem";
import { type MenuChild } from "../../../Menu/MenuConstants";
import type React from "react";
import { type VibeComponentProps } from "../../../../../types";

export type LossMenuItemProps = Omit<
  MenuItemProps,
  | "className"
  | "classname"
  | "iconWrapperClassName"
  | "title"
  | "label"
  | "icon"
  | "iconType"
  | "iconBackgroundColor"
  | "disabledReason"
  | "key"
  | "tooltipContent"
  | "tooltipPosition"
  | "tooltipShowDelay"
  | "tooltipProps"
  | "aria-label"
  | "children"
>;

export interface BaseMenuItemProps extends LossMenuItemProps, VibeComponentProps {
  /**
   * The submenu associated with this menu item. Must be a single `Menu` element.
   */
  subMenu?: MenuChild;
  /**
   * The content of the menu item.
   */
  children: React.ReactNode;
}
