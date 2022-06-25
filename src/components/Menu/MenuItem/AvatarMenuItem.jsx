import React, { forwardRef, useCallback } from "react";
import MenuItem from "./MenuItem";
import Avatar from "../../Avatar/Avatar";
import PropTypes from "prop-types";

// MenuItem with Avatar instead of icon
const AvatarMenuItem = forwardRef((props, ref) => {
  const renderAvatar = useCallback(() => <Avatar {...props.avatarProps} />, [props.avatarProps]);
  return <MenuItem {...props} icon={renderAvatar} ref={ref} />;
});

AvatarMenuItem.propTypes = {
  props: PropTypes.shape({ ...MenuItem.propTypes, avatarProps: PropTypes.shape(Avatar.propTypes) })
};
AvatarMenuItem.defaultProps = {
  props: undefined
};

AvatarMenuItem.isMenuChild = true;
AvatarMenuItem.isSelectable = true;

export default AvatarMenuItem;
