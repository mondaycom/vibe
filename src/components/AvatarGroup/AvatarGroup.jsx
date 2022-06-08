import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import Tooltip from "components/Tooltip/Tooltip";
import AvatarGroupCounterTooltipContainer from "./AvatarGroupCounterTooltipContainer";
import { AVATAR_SIZES, AVATAR_TYPES } from "components/Avatar/AvatarConstants";
import styles from "./AvatarGroup.module.scss";

const AvatarGroup = ({
  className,
  id,
  children,
  size,
  type,
  max,
  count,
  counterTooltipProps,
  counterMaxDigits,
  counterPrefix
}) => {
  if (!children) {
    return null;
  }

  if (!children.length) {
    children = [children];
  }

  return (
    <div className={cx(styles.container, className)} id={id}>
      {children.map((avatar, index) => {
        if (index < max) {
          return (
            <Avatar
              {...avatar.props}
              size={size || avatar.props.size}
              type={type || avatar.props.type}
              key={`${id}-${index}`}
              className={cx(styles.avatarContainer, avatar.props.className)}
              withoutBorder
            />
          );
        }
      })}
      {(children.length > max || count) && (
        // TODO pass size to the counter
        <AvatarGroupCounterTooltipContainer
          avatars={children}
          counterTooltipProps={counterTooltipProps}
          className={className}
          type={type}
          max={max}
        >
          <Counter
            color={Counter.colors.LIGHT}
            count={count || children.length - max}
            prefix={counterPrefix}
            maxDigits={counterMaxDigits}
            size={Counter.sizes.LARGE}
          />
        </AvatarGroupCounterTooltipContainer>
      )}
    </div>
  );
};

AvatarGroup.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  /**
   * Array of Avatar components
   */
  children: PropTypes.arrayOf(PropTypes.element),
  // TODO "Uncaught TypeError: Cannot read properties of undefined (reading 'types')" why??
  //  size: PropTypes.oneOf([Avatar.sizes.LARGE, Avatar.sizes.MEDIUM, Avatar.sizes.SMALL])
  //  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  size: PropTypes.oneOf([AVATAR_SIZES.SMALL, AVATAR_SIZES.MEDIUM, AVATAR_SIZES.LARGE]),
  type: PropTypes.oneOf([AVATAR_TYPES.TEXT, AVATAR_TYPES.ICON, AVATAR_TYPES.IMG]),
  max: PropTypes.number,
  count: PropTypes.number,
  /**
   * Tooltip.propTypes
   */
  counterTooltipProps: PropTypes.shape({ ...Tooltip.propTypes }),
  counterMaxDigits: PropTypes.number,
  counterPrefix: PropTypes.string
};
AvatarGroup.defaultProps = {
  className: "",
  id: undefined,
  children: undefined,
  size: undefined,
  type: undefined,
  max: 5,
  count: undefined,
  counterTooltipProps: undefined,
  counterMaxDigits: 3,
  counterPrefix: "+"
};

export default AvatarGroup;
