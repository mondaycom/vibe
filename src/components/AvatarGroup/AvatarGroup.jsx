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
  counterProps,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList,
  counterTooltipTheme
}) => {
  const {
    color: counterColor = Counter.colors.LIGHT,
    count: counterValue = children?.length && children.length - max,
    prefix: counterPrefix = "+",
    maxDigits: counterMaxDigits = 3
  } = counterProps || {};

  const getCounterContainerSizeStyle = useCallback(() => {
    if (size && Avatar.sizes[`${size.toString().toUpperCase()}`]) {
      return styles[`${size}`];
    }
    return styles.medium;
  }, [size]);
  const counterContainerSizeStyle = getCounterContainerSizeStyle();

  const getCounterContainerColorStyle = useCallback(() => {
    return styles[`${counterColor}`];
  }, [counterColor]);
  const counterContainerColorStyle = getCounterContainerColorStyle();

  if (!children) {
    return null;
  }

  children = React.Children.toArray(children);

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
      {(children.length > max || !!counterValue) && (
        <AvatarGroupCounterTooltipContainer
          avatars={children}
          counterTooltipCustomProps={counterTooltipCustomProps}
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
              count={counterValue}
              prefix={counterPrefix}
              maxDigits={counterMaxDigits}
              ariaLabel={`Tab for more items`}
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
  /**
   * Counter.propTypes: props for counter
   */
  counterProps: PropTypes.shape({ ...Counter.propTypes }),

  /**
   * Tooltip.propTypes: props for custom counter tooltip
   */
  counterTooltipCustomProps: PropTypes.shape({ ...Tooltip.propTypes }),
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
  counterProps: undefined,
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false,
  counterTooltipTheme: Tooltip.themes.Dark
};

export default AvatarGroup;
