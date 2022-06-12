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
  counterColor,
  counterTooltipProps,
  counterMaxDigits,
  counterPrefix,
  counterTooltipIsVirtualizedList,
  counterTooltipTheme
}) => {
  const getCounterContainerSizeStyle = useCallback(() => {
    const counterSize = size || (children?.length && children[0]?.props?.size);
    if (counterSize && Avatar.sizes[`${counterSize.toString().toUpperCase()}`]) {
      return styles[`${counterSize}`];
    }
    return styles.medium;
  }, [children, size]);
  const counterContainerSizeStyle = getCounterContainerSizeStyle();

  const getCounterContainerColorStyle = useCallback(() => {
    return styles[`${counterColor}`];
  }, [counterColor]);
  const counterContainerColorStyle = getCounterContainerColorStyle();

  if (!children) {
    return null;
  }

  if (!Array.isArray(children) && typeof children === "object") {
    children = [children];
  }

  return (
    <div className={cx(styles.container, className)} id={id}>
      {children.map((avatar, index) => {
        if (index < max) {
          return (
            <Avatar
              {...avatar.props}
              size={size || avatar.props?.size}
              type={type || avatar.props?.type}
              // TODO normal key
              key={`${id}-${index}`}
              className={cx(styles.avatarContainer, avatar.props?.className)}
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
          {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
          <div
            tabIndex={0}
            className={cx(styles.counterContainer, counterContainerSizeStyle, counterContainerColorStyle)}
          >
            {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
            <Counter
              color={counterColor}
              count={count || children.length - max}
              prefix={counterPrefix}
              maxDigits={counterMaxDigits}
              ariaLabel={`Additional items`}
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
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
  ]),
  counterColor: PropTypes.oneOf([
    Counter.colors.LIGHT,
    Counter.colors.DARK,
    Counter.colors.PRIMARY,
    Counter.colors.NEGATIVE
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
  counterTooltipTheme: Tooltip.themes.Dark,
  counterColor: Counter.colors.LIGHT
};

export default AvatarGroup;
