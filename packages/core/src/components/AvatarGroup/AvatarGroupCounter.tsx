import React, { type ReactElement, useCallback, useRef } from "react";
import cx from "classnames";
import { type AvatarProps } from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import MenuButton from "../MenuButton/MenuButton";
import Menu from "../Menu/Menu/Menu";
import AvatarMenuItem from "../Menu/MenuItem/AvatarMenuItem";
import AvatarGroupCounterTooltipContainer from "./AvatarGroupCounterTooltipContainer";
import { type VibeComponentProps } from "@vibe/shared";
import { type AvatarSize, type AvatarType } from "../Avatar/Avatar.types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { type AvatarGroupCounterVisualProps } from "./AvatarGroup.types";
import { type TooltipProps } from "../Tooltip/Tooltip";
import { avatarOnClick } from "./AvatarGroupHelper";
import styles from "./AvatarGroupCounter.module.scss";
import { AVATAR_GROUP_COUNTER_AVATAR_SIZE } from "./AvatarGroupConstants";

export interface AvatarGroupCounterProps extends VibeComponentProps {
  /**
   * The list of avatars hidden behind the counter.
   */
  counterTooltipAvatars?: ReactElement<AvatarProps>[];
  /**
   * Props for customizing the counter appearance.
   */
  counterProps?: AvatarGroupCounterVisualProps;
  /**
   * Props for customizing the counter tooltip.
   */
  counterTooltipCustomProps?: Partial<TooltipProps>;
  /**
   * If true, the counter tooltip uses a virtualized list for performance optimization.
   */
  counterTooltipIsVirtualizedList?: boolean;
  /**
   * The size of the counter.
   */
  size?: AvatarSize;
  /**
   * The type of the avatars in the counter.
   */
  type?: AvatarType;
  /**
   * The label of the counter for accessibility.
   */
  counterAriaLabel?: string;
  /**
   * If true, the counter is disabled and non-interactive.
   */
  disabled?: boolean;
}

const AvatarGroupCounter: React.FC<AvatarGroupCounterProps> = ({
  counterTooltipAvatars = [],
  counterProps,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList = false,
  size = "medium",
  type,
  counterAriaLabel,
  disabled
}: AvatarGroupCounterProps) => {
  const {
    color: counterColor = "light",
    count: counterValue = counterTooltipAvatars.length,
    prefix: counterPrefix = "+",
    maxDigits: counterMaxDigits = 3,
    ariaLabelItemsName: counterAriaLabelItemsName = "items",
    noAnimation,
    dialogContainerSelector,
    tabIndex: counterTabIndex = 0
  } = counterProps || {};

  const counterSizeStyle = getStyle(styles, size?.toString());
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
        ariaLabel={counterAriaLabel ? counterAriaLabel : `Tab for more ${counterAriaLabelItemsName}`}
        noAnimation={noAnimation}
        counterClassName={cx({ [styles.disabled]: disabled })}
        size={size === "xs" ? "xs" : undefined}
      />
    );
  }, [
    counterAriaLabel,
    counterAriaLabelItemsName,
    counterColor,
    counterMaxDigits,
    counterPrefix,
    counterValue,
    disabled,
    noAnimation
  ]);

  if (!counterTooltipAvatars.length && !counterValue) {
    return null;
  }

  if (disabled) {
    return (
      <div
        ref={counterContainerRef}
        className={cx(styles.counterContainer, styles.disabled, counterSizeStyle, counterColorStyle)}
      >
        {counterComponent()}
      </div>
    );
  }

  const areAvatarsClickable = counterTooltipAvatars.some(a => a.props?.onClick);
  if (areAvatarsClickable) {
    return (
      <MenuButton
        component={counterComponent}
        zIndex={1}
        className={cx(styles.counterContainer, counterSizeStyle, counterColorStyle)}
        ariaLabel={counterAriaLabel ? counterAriaLabel : `${counterValue} additional ${counterAriaLabelItemsName}`}
        dialogContainerSelector={dialogContainerSelector}
      >
        <Menu id="menu" size={Menu.sizes.MEDIUM} className={styles.menu} focusItemIndexOnMount={0}>
          {counterTooltipAvatars.map((avatar, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <AvatarMenuItem
                menuItemProps={{
                  key: avatar.props?.id || String(index),
                  title: (avatar.props?.tooltipProps?.content as string) || avatar?.props?.ariaLabel,
                  onClick: (event: React.MouseEvent | React.KeyboardEvent) => avatarOnClick(event, avatar.props)
                }}
                avatarProps={{
                  ...avatar.props,
                  customSize: AVATAR_GROUP_COUNTER_AVATAR_SIZE,
                  ariaLabel: "",
                  tabIndex: -1
                }}
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
        tabIndex={counterTabIndex}
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

export default AvatarGroupCounter;
