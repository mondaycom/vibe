import React from "react";
import { CloseMenuOption, MenuChild } from "../../../Menu/MenuConstants";
import { SubmenuPosition } from "../../MenuItem.Types";

export interface MenuItemSubMenuProps {
  /**
   * Reference to the anchor element that the submenu is related to. This is used to position the submenu correctly relative to the parent menu item.
   */
  anchorRef: React.MutableRefObject<HTMLElement>;
  /**
   * Controls the visibility of the submenu. When true, the submenu is shown; otherwise, it is hidden.
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
  // TODO MenuItem can accept only Menu element as first level child, it accepts MenuChild[] as children even though it is not valid.
  //  Should be fixed in next major version
  /**
   * The children elements of the submenu, should be a Menu component.
   */
  children: MenuChild | MenuChild[];
  submenuPosition?: SubmenuPosition;
}
