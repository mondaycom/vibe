import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Tooltip from "../Tooltip/Tooltip";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import MenuButton from "../MenuButton/MenuButton";
import Menu from "../Menu/Menu/Menu";
import AvatarMenuItem from "../Menu/MenuItem/AvatarMenuItem";
import AvatarGroupCounterTooltipContainer from "./AvatarGroupCounterTooltipContainer";
import styles from "./AvatarGroupCounter.module.scss";

const avatarOnClick = avatarProps => {
  return avatarProps?.onClick && (() => avatarProps.onClick(avatarProps?.id));
};

const AvatarGroupCounter = ({
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
    maxDigits: counterMaxDigits = 3,
    ariaLabelItemsName: counterAriaLabelItemsName = "items"
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
        ariaLabel={`Tab for more ${counterAriaLabelItemsName}`}
      />
    );
  }, [counterAriaLabelItemsName, counterColor, counterMaxDigits, counterPrefix, counterValue]);

  if (!counterTooltipAvatars.length && !counterValue) {
    return null;
  }

  const areAvatarsClickable = counterTooltipAvatars.some(a => a.props?.onClick);
  if (areAvatarsClickable) {
    return (
      <MenuButton
        component={counterComponent}
        zIndex={1}
        componentClassName={cx(styles.counterContainer, counterSizeStyle, counterColorStyle)}
        ariaLabel={`${counterValue} additional ${counterAriaLabelItemsName}`}
      >
        <Menu id="menu" size={Menu.sizes.MEDIUM} className={styles.menu} focusItemIndexOnMount={0}>
          {counterTooltipAvatars.map((avatar, index) => {
            return (
              <AvatarMenuItem
                key={avatar.props?.id || index}
                title={avatar.props?.tooltipProps?.content || avatar?.props?.ariaLabel}
                onClick={avatarOnClick(avatar.props)}
                avatarProps={{ ...avatar.props, size: Avatar.sizes.SMALL, ariaLabel: "", tabIndex: "-1" }}
              />
            );
          })}
        </Menu>
      </MenuButton>
    );
  }

  return (
    <AvatarGroupCounterTooltipContainer
      focusPrevPlaceholderRef={focusPrevPlaceholderRef}
      focusNextPlaceholderRef={focusNextPlaceholderRef}
      counterContainerRef={counterContainerRef}
      avatars={counterTooltipAvatars}
      counterTooltipCustomProps={counterTooltipCustomProps}
      counterTooltipIsVirtualizedList={counterTooltipIsVirtualizedList}
      type={type}
    >
      <div tabIndex={-1} ref={focusPrevPlaceholderRef} />
      {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
      <div
        tabIndex={0}
        className={cx(styles.counterContainer, counterSizeStyle, counterColorStyle)}
        ref={counterContainerRef}
      >
        {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
        {counterComponent()}
        <div tabIndex={-1} ref={focusNextPlaceholderRef} />
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
  counterProps: PropTypes.shape({
    color: PropTypes.oneOf([Counter.colors.LIGHT, Counter.colors.DARK]),
    count: PropTypes.number,
    prefix: PropTypes.string,
    maxDigits: PropTypes.number,
    ariaLabelItemsName: PropTypes.string
  }),
  counterTooltipCustomProps: PropTypes.shape(Tooltip.propTypes),
  counterTooltipIsVirtualizedList: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(Avatar.sizes)),
  type: PropTypes.oneOf(Object.values(Avatar.types))
};
AvatarGroupCounter.defaultProps = {
  counterTooltipAvatars: [],
  counterProps: undefined,
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false,
  size: Avatar.sizes.MEDIUM,
  type: undefined
};

export default AvatarGroupCounter;
