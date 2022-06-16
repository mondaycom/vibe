import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import Tooltip from "../Tooltip/Tooltip";
import AvatarGroupCounter from "./AvatarGroupCounter";
import styles from "./AvatarGroup.module.scss";

const AvatarGroup = ({
  className,
  avatarClassName,
  id,
  children,
  size,
  type,
  max,
  counterProps,
  counterTooltipCustomProps
}) => {
  if (!children) {
    return null;
  }

  children = React.Children.toArray(children);
  const displayAvatars = children.slice(0, max);
  const counterTooltipAvatars = children.slice(max);

  return (
    <div className={cx(styles.avatarGroupContainer, className)} id={id}>
      {displayAvatars.map((avatar, index) => {
        return React.cloneElement(avatar, {
          key: index,
          ...avatar?.props,
          size: size || avatar?.props?.size,
          type: type || avatar?.props?.type,
          className: cx(styles.avatarContainer, avatarClassName)
        });
      })}
      <AvatarGroupCounter
        counterTooltipAvatars={counterTooltipAvatars}
        counterProps={counterProps}
        counterTooltipCustomProps={counterTooltipCustomProps}
        avatarSize={size}
        avatarType={type}
      />
    </div>
  );
};

AvatarGroup.propTypes = {
  className: PropTypes.string,
  avatarClassName: PropTypes.string,
  id: PropTypes.string,
  /**
   * Array of `Avatar` components
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  size: PropTypes.oneOf([Avatar.sizes.LARGE, Avatar.sizes.MEDIUM, Avatar.sizes.SMALL]),
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  max: PropTypes.number,
  /**
   * 4 `Counter.props` for customization
   */
  counterProps: PropTypes.shape({
    color: PropTypes.oneOf([Counter.colors.LIGHT, Counter.colors.DARK]),
    count: PropTypes.number,
    prefix: PropTypes.string,
    maxDigits: PropTypes.number
  }),
  /**
   * `Tooltip.propTypes`: props for custom counter tooltip
   */
  counterTooltipCustomProps: PropTypes.shape({ ...Tooltip.propTypes })
};
AvatarGroup.defaultProps = {
  className: "",
  avatarClassName: "",
  id: undefined,
  children: undefined,
  size: undefined,
  type: undefined,
  max: 5,
  counterProps: undefined,
  counterTooltipCustomProps: undefined
};

export default AvatarGroup;
