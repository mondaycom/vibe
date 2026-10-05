import type React from "react";
import { type CloseMenuOption, type MenuChild } from "../../../Menu/MenuConstants";
import { type SubmenuPosition } from "../../MenuItem.types";
import { type MenuItemProps } from "../../MenuItem";

export interface MenuItemSubMenuProps extends Pick<MenuItemProps, "autoAdjustOnSubMenuContentResize"> {
  /**
   * Reference to the anchor element that the submenu is related to.
   * This is used to position the submenu correctly relative to the parent menu item.
   */
  anchorRef: React.MutableRefObject<HTMLElement>;
  /**
   * Controls the visibility of the submenu. If true, the submenu is shown; otherwise, it is hidden.
   */
  open?: boolean;
  /**
   * If true, the submenu will automatically receive focus when it mounts.
   */
  autoFocusOnMount?: boolean;
  /**
   * Function to call when the submenu is requested to close.
   * This can be triggered by user interaction or programmatically.
   * The function may accept an optional object with a `propagate` property, which can be used to control whether the close event should also propagate up to parent menus.
   */
  onClose?: (option?: CloseMenuOption) => void;
  /**
   * The submenu content. Must be a single `Menu` component.
   */
  children: MenuChild;
  /**
   * The position of the submenu relative to its parent menu item.
   */
  submenuPosition?: SubmenuPosition;
}
