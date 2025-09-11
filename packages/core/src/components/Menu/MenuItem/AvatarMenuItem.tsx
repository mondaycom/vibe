import React, { type ForwardedRef, forwardRef, useCallback } from "react";
import MenuItem, { type MenuItemProps } from "./MenuItem";
import Avatar, { type AvatarProps } from "../../Avatar/Avatar";
import type VibeComponentProps from "../../../types/VibeComponentProps";

export interface AvatarMenuItemProps extends VibeComponentProps {
  /**
   * Props passed to the avatar component.
   */
  avatarProps?: AvatarProps;
  /**
   * Props passed to the menu item component.
   */
  menuItemProps?: MenuItemProps;
}

/**
 * MenuItem with Avatar instead of Icon
 */
const AvatarMenuItem: React.FC<AvatarMenuItemProps & { isMenuChild?: boolean; isSelectable?: boolean }> = forwardRef(
  ({ avatarProps, menuItemProps, ...embeddedMenuItemProps }, ref: ForwardedRef<HTMLElement>) => {
    const renderAvatar = useCallback(() => <Avatar {...avatarProps} />, [avatarProps]);
    return <MenuItem {...embeddedMenuItemProps} {...menuItemProps} icon={renderAvatar} ref={ref} />;
  }
);

Object.assign(AvatarMenuItem, {
  isMenuChild: true,
  isSelectable: true
});

export default AvatarMenuItem;
