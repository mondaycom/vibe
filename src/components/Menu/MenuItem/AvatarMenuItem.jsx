import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import Avatar from "../../Avatar/Avatar";

// MenuItem with Avatar instead of Icon
const AvatarMenuItem = forwardRef((props, ref) => {
  const { avatarProps } = props;
  // All props except avatarProps, can be simplified, but just for clarity
  const menuItemProps = { avatarProps: undefined, ...props };
  const renderAvatar = useCallback(() => <Avatar {...avatarProps} />, [avatarProps]);
  return <MenuItem {...menuItemProps} icon={renderAvatar} ref={ref} />;
});

AvatarMenuItem.propTypes = {
  ...MenuItem.propTypes,
  avatarProps: PropTypes.shape(Avatar.propTypes)
};
AvatarMenuItem.defaultProps = {
  avatarProps: {}
};

AvatarMenuItem.isMenuChild = true;
AvatarMenuItem.isSelectable = true;

export default AvatarMenuItem;
