import React, { useCallback } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import Tooltip from "../Tooltip/Tooltip";
import AvatarGroupCounterTooltipContainer from "./AvatarGroupCounterTooltipContainer";
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
  counterPrefix,
  counterTooltipIsVirtualizedList,
  counterTooltipTheme
}) => {
  const getCounterSizeStyle = useCallback(() => {
    switch (size || children[0]?.props?.size) {
      case Avatar.sizes.SMALL:
        return styles.small;
      case Avatar.sizes.MEDIUM:
        return styles.medium;
      case Avatar.sizes.LARGE:
        return styles.large;
      default:
        return styles.medium;
    }
  }, [children, size]);
  const counterSizeStyle = getCounterSizeStyle();

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
              // TODO normal key
              key={`${id}-${index}`}
              className={cx(styles.avatarContainer, avatar.props.className)}
              withoutBorder
            />
          );
        }
      })}
      {(children.length > max || count) && (
        <AvatarGroupCounterTooltipContainer
          avatars={children}
          counterTooltipProps={counterTooltipProps}
          className={className}
          type={type}
          max={max}
          counterTooltipIsVirtualizedList={counterTooltipIsVirtualizedList}
          counterTooltipTheme={counterTooltipTheme}
        >
          {/*TODO should be focusable?*/}
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div className={cx(styles.counterContainer, counterSizeStyle)} tabIndex={0}>
            <Counter
              color={Counter.colors.LIGHT}
              count={count || children.length - max}
              prefix={counterPrefix}
              maxDigits={counterMaxDigits}
            />
          </div>
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
  size: PropTypes.oneOf([Avatar.sizes.LARGE, Avatar.sizes.MEDIUM, Avatar.sizes.SMALL]),
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  max: PropTypes.number,
  count: PropTypes.number,
  /**
   * Tooltip.propTypes
   */
  counterTooltipProps: PropTypes.shape({ ...Tooltip.propTypes }),
  counterMaxDigits: PropTypes.number,
  counterPrefix: PropTypes.string,
  /**
   * Does default tooltip list need to be virtualized
   */
  counterTooltipIsVirtualizedList: PropTypes.bool,
  counterTooltipTheme: PropTypes.oneOf([
    Tooltip.themes.Dark,
    Tooltip.themes.Error,
    Tooltip.themes.Share,
    Tooltip.themes.Primary,
    Tooltip.themes.Private,
    Tooltip.themes.Success,
    Tooltip.themes.Surface
  ])
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
  counterPrefix: "+",
  counterTooltipIsVirtualizedList: false,
  counterTooltipTheme: Tooltip.themes.Dark
};

export default AvatarGroup;
