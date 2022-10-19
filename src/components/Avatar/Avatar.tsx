import camelCase from "lodash/camelCase";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React, { AriaRole, useCallback, useMemo } from "react";
import isNil from "lodash/isNil";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { elementColorsNames, getElementColor } from "../../utils/colors-vars-map";
import { AvatarSizes, AvatarTypes } from "./AvatarConstants";
import { AvatarBadge, AvatarBadgeProps } from "./AvatarBadge";
import { AvatarContent } from "./AvatarContent";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import ClickableWrapper from "../Clickable/ClickableWrapper";
import Dialog from "../Dialog/Dialog";
import { iconSubComponentProps } from "../Icon/Icon";
import VibeComponentProps from "src/types/VibeComponentProps";
import styles from "./Avatar.module.scss";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar";

type BackgroundColors = typeof elementColorsNames[keyof typeof elementColorsNames];
export interface AvatarProps extends VibeComponentProps {
  id?: string;
  src?: string;
  text?: string;
  tooltipProps?: TooltipProps;
  ariaLabel?: string;
  withoutTooltip?: boolean;
  icon?: string | React.FunctionComponent<iconSubComponentProps> | null;
  type?: AvatarTypes;
  className?: string;
  textClassName?: string;
  backgroundColor?: BackgroundColors;
  customBackgroundColor?: string;
  role?: AriaRole;
  size?: AvatarSizes;
  customSize?: number;
  tabIndex?: number;
  ariaHidden?: boolean;
  disabled?: boolean;
  isSquare?: boolean;
  isDisabled?: boolean;
  square?: boolean;
  topLeftBadgeProps?: AvatarBadgeProps;
  topRightBadgeProps?: AvatarBadgeProps;
  bottomLeftBadgeProps?: AvatarBadgeProps;
  bottomRightBadgeProps?: AvatarBadgeProps;
  withoutBorder?: boolean;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const Avatar: React.FC<AvatarProps> = ({
  id,
  type,
  className,
  textClassName,
  size,
  src,
  icon,
  text,
  tooltipProps,
  ariaLabel,
  withoutTooltip,
  role,
  backgroundColor,
  square,
  disabled,
  // Backward compatibility for props naming
  isSquare,
  // Backward compatibility for props naming
  isDisabled,
  tabIndex,
  ariaHidden,
  topLeftBadgeProps,
  topRightBadgeProps,
  bottomLeftBadgeProps,
  bottomRightBadgeProps,
  withoutBorder,
  customSize,
  customBackgroundColor,
  onClick,
  "data-testid": dataTestId
}) => {
  const overrideSquare = backwardCompatibilityForProperties([square, isSquare]);
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false);
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
        <div
          key="top-left-badge"
          className={cx(
            styles.badge,
            "monday-style-avatar_badge",
            styles.badgeTopLeft,
            "monday-style-avatar_badge--top-left"
          )}
        >
          <AvatarBadge size={size} {...topLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(topRightBadgeProps)) {
      badges.push(
        <div
          key="top-right-badge"
          className={cx(
            styles.badge,
            "monday-style-avatar_badge",
            styles.badgeTopRight,
            "monday-style-avatar_badge--top-right"
          )}
        >
          <AvatarBadge size={size} {...topRightBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomLeftBadgeProps)) {
      badges.push(
        <div
          key="bottom-left-badge"
          className={cx(
            styles.badge,
            "monday-style-avatar_badge",
            styles.badgeBottomLeft,
            "monday-style-avatar_badge--bottom-left"
          )}
        >
          <AvatarBadge size={size} {...bottomLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomRightBadgeProps)) {
      badges.push(
        <div
          key="bottom-right-bade"
          className={cx(
            styles.badge,
            "monday-style-avatar_badge",
            styles.badgeBottomRight,
            "monday-style-avatar_badge--bottom-right"
          )}
        >
          <AvatarBadge size={size} {...bottomRightBadgeProps} />
        </div>
      );
    }

    return badges.length > 0 ? <div className={cx(styles.badges, "monday-style-avatar_badges")}>{badges}</div> : null;
  }, [size, topLeftBadgeProps, topRightBadgeProps, bottomLeftBadgeProps, bottomRightBadgeProps]);

  const clickHandler = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent) => {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    },
    [onClick]
  );

  return (
    <div
      id={id}
      className={cx(styles.avatar, AVATAR_CSS_BASE_CLASS, className, styles[size], `monday-style-avatar--${size}`)}
      style={sizeStyle}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.AVATAR, id)}
    >
      <ClickableWrapper
        isClickable={!!onClick}
        clickableProps={{
          onClick: clickHandler,
          tabIndex: "-1",
          className: cx(styles.clickableWrapper, "monday-style-avatar_clickableWrapper")
        }}
      >
        <Tooltip
          showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
          hideTrigger={[Dialog.hideShowTriggers.BLUR, Dialog.hideShowTriggers.MOUSE_LEAVE]}
          {...overrideTooltipProps}
        >
          <div
            className={cx(
              styles.circle,
              "monday-style-avatar_circle",
              getStyle(styles, camelCase("circle--" + type)),
              `monday-style-avatar_circle--${type}`,
              {
                [styles.disabled]: overrideDisabled,
                ["monday-style-avatar_circle--is-disabled"]: overrideDisabled,
                [styles.square]: overrideSquare,
                ["monday-style-avatar_circle--is-square"]: overrideSquare,
                [styles.withoutBorder]: withoutBorder,
                ["monday-style-avatar_circle--without-border"]: withoutBorder
              }
            )}
            aria-hidden={ariaHidden}
            tabIndex={tabIndex}
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

Object.assign(Avatar, {
  types: AvatarTypes,
  sizes: AvatarSizes,
  colors: elementColorsNames,
  backgroundColors: elementColorsNames
});

Avatar.defaultProps = {
  id: undefined,
  src: undefined,
  className: "",
  textClassName: "",
  icon: undefined,
  text: undefined,
  tooltipProps: undefined,
  ariaLabel: undefined,
  withoutTooltip: false,
  type: AvatarTypes.TEXT,
  backgroundColor: elementColorsNames.CHILI_BLUE,
  customBackgroundColor: null,
  role: undefined,
  size: AvatarSizes.LARGE,
  customSize: null,
  tabIndex: 0,
  ariaHidden: false,
  disabled: undefined,
  square: undefined,
  topLeftBadgeProps: undefined,
  topRightBadgeProps: undefined,
  bottomLeftBadgeProps: undefined,
  bottomRightBadgeProps: undefined,
  withoutBorder: false,
  onClick: undefined
};

export default Avatar;
