import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Tooltip from "../Tooltip/Tooltip";
import Avatar from "../Avatar/Avatar";
import MenuButton from "../MenuButton/MenuButton";
import Counter from "../Counter/Counter";
import MenuItem from "../Menu/MenuItem/MenuItem";
import Menu from "../Menu/Menu/Menu";
import AvatarGroupCounterTooltipContainer from "./AvatarGroupCounterTooltipContainer";
import styles from "./AvatarGroupCounter.module.scss";

const AvatarGroupCounter = ({
  avatarGroupContainerRef,
  counterTooltipAvatars,
  counterProps,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList,
  size,
  type
}) => {
  const {
    color: counterColor = Counter.colors.LIGHT,
    count: counterValue = counterTooltipAvatars.length,
    prefix: counterPrefix = "+",
    maxDigits: counterMaxDigits = 3
  } = counterProps || {};

  const counterSizeStyle = styles[size?.toString()];
  const counterColorStyle = styles[counterColor];

  const focusPrevPlaceholderRef = useRef(null);
  const focusNextPlaceholderRef = useRef(null);
  const counterContainerRef = useRef(null);

  const counterComponent = useCallback(() => {
    return (
      <Counter
        color={counterColor}
        count={counterValue}
        prefix={counterPrefix}
        maxDigits={counterMaxDigits}
        ariaLabel="Tab for more items"
      />
    );
  }, [counterColor, counterMaxDigits, counterPrefix, counterValue]);

  if (!counterTooltipAvatars.length && !counterValue) {
    return null;
  }

  const areAvatarsClickable = counterTooltipAvatars.some(a => a.props?.onClick);
  if (areAvatarsClickable) {
    return (
      <MenuButton
        component={counterComponent}
        zIndex={1}
        dialogClassName={styles.menu}
        componentClassName={cx(styles.counterContainer, counterSizeStyle, counterColorStyle)}
        ariaLabel={`${counterValue} additional items`}
      >
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          {counterTooltipAvatars.map((avatar, index) => {
            return (
              <MenuItem
                key={index}
                title={avatar.props?.tooltipProps?.content || avatar?.props?.ariaLabel}
                onClick={avatar.props?.onClick}
                iconComponent={<Avatar {...avatar.props} size={Avatar.sizes.SMALL} ariaLabel="" tabIndex="-1" />}
              />
            );
          })}
        </Menu>
      </MenuButton>
    );
  }

  return (
    <AvatarGroupCounterTooltipContainer
      avatarGroupContainerRef={avatarGroupContainerRef}
      focusPrevPlaceholderRef={focusPrevPlaceholderRef}
      focusNextPlaceholderRef={focusNextPlaceholderRef}
      counterContainerRef={counterContainerRef}
      avatars={counterTooltipAvatars}
      counterTooltipCustomProps={counterTooltipCustomProps}
      counterTooltipIsVirtualizedList={counterTooltipIsVirtualizedList}
      type={type}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div id="avatar-group-focus-prev-placeholder" tabIndex={-1} ref={focusPrevPlaceholderRef} />
      {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
      <div
        tabIndex={0}
        className={cx(styles.counterContainer, counterSizeStyle, counterColorStyle)}
        ref={counterContainerRef}
      >
        {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
        {counterComponent()}
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div id="avatar-group-focus-next-placeholder" tabIndex={-1} ref={focusNextPlaceholderRef} />
      </div>
    </AvatarGroupCounterTooltipContainer>
  );
};

AvatarGroupCounter.propTypes = {
  /**
   * Array of Avatar elements
   */
  counterTooltipAvatars: PropTypes.arrayOf(PropTypes.element),
  /**
   * Counter.propTypes: props for counter
   */
  counterProps: PropTypes.shape(Counter.propTypes),
  counterTooltipCustomProps: PropTypes.shape(Tooltip.propTypes),
  counterTooltipIsVirtualizedList: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Avatar.sizes)),
  type: PropTypes.oneOf(Object.values(Avatar.types)),
  avatarGroupContainerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })])
};
AvatarGroupCounter.defaultProps = {
  counterTooltipAvatars: [],
  counterProps: undefined,
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false,
  size: Avatar.sizes.MEDIUM,
  type: undefined,
  avatarGroupContainerRef: undefined
};

export default AvatarGroupCounter;
