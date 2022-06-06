import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import styles from "./AvatarGroup.module.scss";

const AvatarGroup = ({ className, id, children, size, max }) => {
  return (
    <div className={cx(styles.container, className)} id={id}>
      {children.map((avatar, index) => {
        if (index < max)
          return (
            <Avatar
              {...avatar.props}
              size={size || avatar.props.size}
              key={`${id}-${index}`}
              className={cx(styles.avatarContainer, className)}
            />
          );
      })}
      {children.length > max && (
        <Counter color={Counter.colors.LIGHT} count={children.length - max} prefix="+" size={Counter.sizes.LARGE} />
      )}
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
  size: PropTypes.any,
  max: PropTypes.number
};
AvatarGroup.defaultProps = {
  className: "",
  id: undefined,
  children: undefined,
  size: undefined,
  max: 5
};

export default AvatarGroup;
