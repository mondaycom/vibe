import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import styles from "./AvatarGroup.module.scss";

const AvatarGroup = ({ className, id, children, size, type, max, count }) => {
  if (!children) {
    return null;
  }

  if (!children.length) {
    children = [children];
  }

  return (
    <div className={cx(styles.container, className)} id={id}>
      {children.map((avatar, index) => {
        if (index < max)
          return (
            <Avatar
              {...avatar.props}
              size={size || avatar.props.size}
              key={`${id}-${index}`}
              className={styles.avatarContainer}
              type={type || avatar.props.type}
            />
          );
      })}
      {(children.length > max || count) && (
        // TODO pass size to the counter somehow
        <Counter
          color={Counter.colors.LIGHT}
          count={count || children.length - max}
          prefix="+"
          size={Counter.sizes.LARGE}
        />
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
  size: PropTypes.any,
  // TODO "Uncaught TypeError: Cannot read properties of undefined (reading 'types')" why??
  //  size: PropTypes.oneOf([Avatar.sizes.LARGE, Avatar.sizes.MEDIUM, Avatar.sizes.SMALL])
  //  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  type: PropTypes.any,
  max: PropTypes.number,
  count: PropTypes.number
};
AvatarGroup.defaultProps = {
  className: "",
  id: undefined,
  children: undefined,
  size: undefined,
  type: undefined,
  max: 5,
  count: undefined
};

export default AvatarGroup;
