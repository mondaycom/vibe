import { camelCase } from "es-toolkit";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { type AriaRole, useCallback, useMemo } from "react";
import { isNil } from "es-toolkit";
import { type ElementAllowedColor, getElementColor } from "../../types/Colors";
import { type AvatarSize, type AvatarType } from "./Avatar.types";
import AvatarBadge, { type AvatarBadgeProps } from "./AvatarBadge";
import AvatarContent from "./AvatarContent";
import { Tooltip, type TooltipProps } from "@vibe/tooltip";
import { ClickableWrapper } from "@vibe/clickable";
import { type VibeComponentProps } from "../../types";
import { type SubIcon } from "@vibe/icon";
import styles from "./Avatar.module.scss";
import { ComponentVibeId } from "../../tests/constants";

export interface AvatarProps extends VibeComponentProps {
  /**
   * The image source for the avatar.
   */
  src?: string;
  /**
   * The text displayed inside the avatar.
   */
  text?: string;
  /**
   * Props passed to the Tooltip component. See full options in the [Tooltip documentation](https://vibe.monday.com/?path=/docs/components-tooltip--docs).
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * The ARIA label of the avatar.
   */
  ariaLabel?: string;
  /**
   * If true, the tooltip is disabled.
   */
  withoutTooltip?: boolean;
  /**
   * The icon displayed inside the avatar.
   */
  icon?: SubIcon;
  /**
   * The type of the avatar.
   */
  type?: AvatarType;
  /**
   * Class name applied to the text inside the avatar.
   */
  textClassName?: string;
  /**
   * Class name applied to the avatar content wrapper.
   */
  avatarContentWrapperClassName?: string;
  /**
   * The background color of the avatar.
   */
  backgroundColor?: ElementAllowedColor;
  /**
   * A custom background color.
   */
  customBackgroundColor?: string;
  /**
   * The ARIA role of the avatar.
   */
  role?: AriaRole;
  /**
   * The size of the avatar.
   */
  size?: AvatarSize;
  /**
   * A custom size in pixels.
   */
  customSize?: number;
  /**
   * The tab index of the avatar.
   */
  tabIndex?: number;
  /**
   * If true, the avatar is hidden from assistive technologies.
   */
  ariaHidden?: boolean;
  /**
   * If true, the avatar is disabled.
   */
  disabled?: boolean;
  /**
   * If true, renders the avatar as a square instead of a circle.
   */
  square?: boolean;
  /**
   * Props for the top-left badge.
   */
  topLeftBadgeProps?: AvatarBadgeProps;
  /**
   * Props for the top-right badge.
   */
  topRightBadgeProps?: AvatarBadgeProps;
  /**
   * Props for the bottom-left badge.
   */
  bottomLeftBadgeProps?: AvatarBadgeProps;
  /**
   * Props for the bottom-right badge.
   */
  bottomRightBadgeProps?: AvatarBadgeProps;
  /**
   * If true, removes the avatar's border.
   */
  withoutBorder?: boolean;
  /**
   * Callback fired when the avatar is clicked.
   */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent, avatarId: string) => void;
}

const Avatar = ({
  id,
  type = "text",
  className,
  avatarContentWrapperClassName,
  textClassName = "",
  size = "large",
  src,
  icon,
  text,
  tooltipProps,
  ariaLabel,
  withoutTooltip = false,
  role,
  backgroundColor = "chili-blue",
  square,
  disabled,
  tabIndex,
  ariaHidden = false,
  topLeftBadgeProps,
  topRightBadgeProps,
  bottomLeftBadgeProps,
  bottomRightBadgeProps,
  withoutBorder = false,
  customSize = null,
  customBackgroundColor = null,
  onClick,
  "data-testid": dataTestId
}: AvatarProps) => {
  const backgroundColorStyle = useMemo(() => {
    if (customBackgroundColor) return { backgroundColor: customBackgroundColor };
    return src ? {} : { backgroundColor: getElementColor(backgroundColor) };
  }, [src, backgroundColor, customBackgroundColor]);
  const sizeStyle = useMemo(() => {
    return customSize ? { height: customSize, width: customSize } : {};
  }, [customSize]);

  const overrideTooltipProps = useMemo(() => {
    if (withoutTooltip) return undefined;

    if (tooltipProps) {
      return { content: ariaLabel, ...tooltipProps };
    } else {
      return { content: ariaLabel };
    }
  }, [ariaLabel, tooltipProps, withoutTooltip]);

  const badgesContainer = useMemo(() => {
    const badges = [];
    if (!isNil(topLeftBadgeProps)) {
      badges.push(
        <div key="top-left-badge" className={cx(styles.badge, styles.badgeTopLeft)}>
          <AvatarBadge size={size} {...topLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(topRightBadgeProps)) {
      badges.push(
        <div key="top-right-badge" className={cx(styles.badge, styles.badgeTopRight)}>
          <AvatarBadge size={size} {...topRightBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomLeftBadgeProps)) {
      badges.push(
        <div key="bottom-left-badge" className={cx(styles.badge, styles.badgeBottomLeft)}>
          <AvatarBadge size={size} {...bottomLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomRightBadgeProps)) {
      badges.push(
        <div key="bottom-right-bade" className={cx(styles.badge, styles.badgeBottomRight)}>
          <AvatarBadge size={size} {...bottomRightBadgeProps} />
        </div>
      );
    }

    return badges.length > 0 ? <div className={cx(styles.badges)}>{badges}</div> : null;
  }, [size, topLeftBadgeProps, topRightBadgeProps, bottomLeftBadgeProps, bottomRightBadgeProps]);

  const defaultTabIndex = useMemo(() => {
    if (!disabled && (onClick || overrideTooltipProps?.content)) {
      return 0;
    }
    return -1;
  }, [disabled, onClick, overrideTooltipProps?.content]);

  const overrideTabIndex = tabIndex ?? defaultTabIndex;

  const clickHandler = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      event.preventDefault();
      if (onClick) {
        onClick(event, id);
      }
    },
    [onClick, id]
  );

  return (
    <div
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.AVATAR, id)}
      className={cx(styles.avatar, styles[size], className)}
      style={sizeStyle}
      data-vibe={ComponentVibeId.AVATAR}
    >
      <ClickableWrapper
        isClickable={!!onClick}
        clickableProps={{
          onClick: clickHandler,
          tabIndex: "-1",
          className: styles.clickableWrapper
        }}
      >
        <Tooltip showTrigger={["focus", "mouseenter"]} hideTrigger={["blur", "mouseleave"]} {...overrideTooltipProps}>
          <div
            className={cx(
              styles.circle,
              getStyle(styles, camelCase("circle--" + type)),
              {
                [styles.disabled]: disabled,
                [styles.square]: square,
                [styles.withoutBorder]: withoutBorder
              },
              avatarContentWrapperClassName
            )}
            aria-hidden={ariaHidden}
            tabIndex={overrideTabIndex}
            style={{ ...backgroundColorStyle }}
          >
            <AvatarContent
              type={type}
              size={size}
              src={src}
              icon={icon}
              text={text}
              ariaLabel={ariaLabel}
              role={role}
              textClassName={textClassName}
            />
          </div>
          {badgesContainer}
        </Tooltip>
      </ClickableWrapper>
    </div>
  );
};

export default Avatar;
