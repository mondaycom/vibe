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
  isSplit?: false;
  /**
   * Label for the submenu icon, used for accessibility.
   */
  label?: string;
}

export type MenuItemSubMenuIconProps = SimpleMenuItemSubMenuIconProps | SplitMenuItemSubMenuIconProps;
