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
  // TODO: [breaking] MenuItem can accept only Menu element as first level, it accepts MenuChild[] as subMenu even though it is not valid.
  /**
   * The submenu items associated with this menu item.
   * **Note:** Only `Menu` elements are allowed as first-level children, even though `MenuChild[]` is currently accepted.
   */
  subMenu?: MenuChild | MenuChild[];
  /**
   * The content of the menu item.
   */
  children: React.ReactNode;
}
