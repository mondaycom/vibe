import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import styles from "./AvatarGroup.module.scss";

const AvatarGroup = ({ className, id, children, size }) => {
  return (
    <div className={cx(styles.container, className)} id={id}>
      {children.map((avatar, index) => (
        <Avatar
          {...avatar.props}
          size={size || avatar.props.size}
          key={`${id}-${index}`}
          className={cx(styles.avatarContainer, className)}
        />
      ))}
    </div>
  );
};

AvatarGroup.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  // children: PropTypes.arrayOf(Avatar)
  children: PropTypes.arrayOf(PropTypes.any),
  // TODO doesn't work why??
  //  size: PropTypes.oneOf([Avatar.sizes.LARGE, Avatar.sizes.MEDIUM, Avatar.sizes.SMALL])
  size: PropTypes.any
};
AvatarGroup.defaultProps = {
  className: "",
  id: undefined,
  children: undefined,
  size: undefined
};

export default AvatarGroup;
