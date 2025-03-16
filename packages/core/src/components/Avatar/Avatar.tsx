import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { AriaRole, useCallback, useMemo } from "react";
import { isNil } from "lodash-es";
import { ElementAllowedColor as ElementAllowedColorEnum } from "../../utils/colors-vars-map";
import { ElementAllowedColor, getElementColor } from "../../types/Colors";
import { AvatarSize as AvatarSizeEnum, AvatarType as AvatarTypeEnum } from "./AvatarConstants";
import { AvatarSize, AvatarType } from "./Avatar.types";
import { AvatarBadge, AvatarBadgeProps } from "./AvatarBadge";
import { AvatarContent } from "./AvatarContent";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import ClickableWrapper from "../Clickable/ClickableWrapper";
import { SubIcon, VibeComponentProps, withStaticProps } from "../../types";
import styles from "./Avatar.module.scss";

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
   * Props passed to the Tooltip component. See full options in the [Tooltip documentation](/?path=/docs/components-tooltip--docs).
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * The label of the avatar.
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

const Avatar: React.FC<AvatarProps> & {
  types?: typeof AvatarTypeEnum;
  sizes?: typeof AvatarSizeEnum;
  colors?: typeof ElementAllowedColorEnum;
  backgroundColors?: typeof ElementAllowedColorEnum;
} = ({
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

export default withStaticProps(Avatar, {
  types: AvatarTypeEnum,
  sizes: AvatarSizeEnum,
  colors: ElementAllowedColorEnum,
  backgroundColors: ElementAllowedColorEnum
});
