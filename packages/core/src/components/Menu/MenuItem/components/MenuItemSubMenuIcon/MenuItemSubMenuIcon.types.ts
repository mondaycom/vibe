export interface SplitMenuItemSubMenuIconProps {
  /**
   * Determines whether the submenu icon is split from the main menu item.
   * When true, clicking the main menu item and the submenu icon trigger different actions.
   */
  isSplit?: true;
  /**
   * Indicates if the split submenu is currently active.
   */
  active?: boolean;
  /**
   * Whether the split submenu icon is disabled.
   */
  disabled?: boolean;
}

export interface SimpleMenuItemSubMenuIconProps {
  /**
   * Determines whether the submenu icon is part of the main menu item.
   * When false, the submenu is accessed by interacting with the main menu item itself.
   */
  isSplit?: false;
  /**
   * Label for the submenu icon, used for accessibility.
   */
  label?: string;
  /**
   * Whether the submenu icon is disabled.
   */
  disabled?: boolean;
}

export type MenuItemSubMenuIconProps = SimpleMenuItemSubMenuIconProps | SplitMenuItemSubMenuIconProps;
