import React, { forwardRef, useCallback } from "react";
import MenuItem from "./MenuItem";
import Avatar, { AvatarProps } from "../../Avatar/Avatar";
import VibeComponentProps from "../../../types/VibeComponentProps";

interface AvatarMenuItemProps extends VibeComponentProps {
  avatarProps?: AvatarProps;
  // TODO ts-migration replace with MenuItemProps when MenuItem is converted to TS
  menuItemProps?: any;
}

/**
 * MenuItem with Avatar instead of Icon
 */
const AvatarMenuItem: React.FC<AvatarMenuItemProps & { isMenuChild?: boolean; isSelectable?: boolean }> = forwardRef(
  ({ avatarProps, menuItemProps, ...embeddedMenuItemProps }, ref) => {
    const renderAvatar = useCallback(() => <Avatar {...avatarProps} />, [avatarProps]);
    // @ts-ignore TODO ts-migration: remove this line & fix the issues when MenuItem is converted to TS
    return <MenuItem {...embeddedMenuItemProps} {...menuItemProps} icon={renderAvatar} ref={ref} />;
  }
);

Object.assign(AvatarMenuItem, {
  isMenuChild: true,
  isSelectable: true
});

export default AvatarMenuItem;
