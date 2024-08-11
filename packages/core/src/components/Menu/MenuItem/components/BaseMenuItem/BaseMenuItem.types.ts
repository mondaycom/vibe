import { MenuItemProps } from "../../MenuItem";
import { MenuChild } from "../../../Menu/MenuConstants";
import React from "react";
import { VibeComponentProps } from "../../../../../types";

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
  subMenu?: MenuChild | MenuChild[];
  children: React.ReactNode;
}
