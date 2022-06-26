import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import Tooltip from "../Tooltip/Tooltip";
import AvatarGroupCounter from "./AvatarGroupCounter";
import styles from "./AvatarGroup.module.scss";

const avatarOnClick = avatarProps => {
  return avatarProps?.onClick && (() => avatarProps.onClick(avatarProps?.id));
};

const AvatarGroup = ({
  className,
  avatarClassName,
  id,
  children,
  size,
  type,
  max,
  counterProps,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList
}) => {
  const { displayAvatars, counterTooltipAvatars } = useMemo(() => {
    const childrenArray = React.Children.toArray(children);
    return {
      displayAvatars: childrenArray.slice(0, max),
      counterTooltipAvatars: childrenArray.slice(max)
    };
  }, [children, max]);

  if (!children) {
    return null;
  }

  return (
    <div className={cx(styles.avatarGroupContainer, className)} id={id}>
      {displayAvatars.map((avatar, index) => {
        return React.cloneElement(avatar, {
          key: index,
          ...avatar?.props,
          size: size || avatar?.props?.size,
          type: type || avatar?.props?.type,
          className: cx(styles.avatarContainer, avatarClassName),
          onClick: avatarOnClick(avatar.props)
        });
      })}
      <AvatarGroupCounter
        counterTooltipAvatars={counterTooltipAvatars}
        counterProps={counterProps}
        counterTooltipCustomProps={counterTooltipCustomProps}
        counterTooltipIsVirtualizedList={counterTooltipIsVirtualizedList}
        size={size}
        type={type}
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
   * 4 `Counter.props` for customization + ariaLabelItemsName for specifying the "items" name in aria label
   */
  counterProps: PropTypes.shape({
    color: PropTypes.oneOf([Counter.colors.LIGHT, Counter.colors.DARK]),
    count: PropTypes.number,
    prefix: PropTypes.string,
    maxDigits: PropTypes.number,
    ariaLabelItemsName: PropTypes.string
  }),
  /**
   * `Tooltip.propTypes`: props for custom counter tooltip
   */
  counterTooltipCustomProps: PropTypes.shape(Tooltip.propTypes),
  /**
   * Using counter default tooltip virtualized list for rendering only visible items (performance optimization)
   */
  counterTooltipIsVirtualizedList: PropTypes.bool
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
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false
};

export default AvatarGroup;
