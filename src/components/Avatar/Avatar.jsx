import React, { useMemo } from "react";
import isNil from "lodash/isNil";
import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { elementColorsNames, getElementColor } from "../../utils/colors-vars-map";
import { AVATAR_SIZES, AVATAR_TYPES } from "./AvatarConstants";
import { AvatarBadge } from "./AvatarBadge";
import { AvatarContent } from "./AvatarContent";
import Tooltip from "../Tooltip/Tooltip";
import ClickableWrapper from "../Clickable/ClickableWrapper";
import Dialog from "../Dialog/Dialog";
import "./Avatar.scss";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

const Avatar = ({
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
  onClick
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
          className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "top-left" }))}
        >
          <AvatarBadge size={size} {...topLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(topRightBadgeProps)) {
      badges.push(
        <div
          key="top-right-badge"
          className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "top-right" }))}
        >
          <AvatarBadge size={size} {...topRightBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomLeftBadgeProps)) {
      badges.push(
        <div
          key="bottom-left-badge"
          className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "bottom-left" }))}
        >
          <AvatarBadge size={size} {...bottomLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomRightBadgeProps)) {
      badges.push(
        <div
          key="bottom-right-bade"
          className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "bottom-right" }))}
        >
          <AvatarBadge size={size} {...bottomRightBadgeProps} />
        </div>
      );
    }

    return badges.length > 0 ? <div className={cx(bemHelper({ element: "badges" }))}>{badges}</div> : null;
  }, [size, topLeftBadgeProps, topRightBadgeProps, bottomLeftBadgeProps, bottomRightBadgeProps]);

  return (
    <div id={id} className={cx(AVATAR_CSS_BASE_CLASS, className, bemHelper({ state: size }))} style={sizeStyle}>
      <ClickableWrapper
        isClickable={!!onClick}
        clickableProps={{ onClick: onClick, tabIndex: "-1", className: bemHelper({ element: "clickableWrapper" }) }}
      >
        <Tooltip
          showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
          hideTrigger={[Dialog.hideShowTriggers.BLUR, Dialog.hideShowTriggers.MOUSE_LEAVE]}
          {...overrideTooltipProps}
        >
          <div
            className={cx(bemHelper({ element: "circle" }), bemHelper({ element: "circle", state: type }), {
              [bemHelper({ element: "circle", state: "is-disabled" })]: overrideDisabled,
              [bemHelper({ element: "circle", state: "is-square" })]: overrideSquare,
              [bemHelper({ element: "circle", state: "without-border" })]: withoutBorder
            })}
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

Avatar.types = AVATAR_TYPES;
Avatar.sizes = AVATAR_SIZES;
Avatar.colors = elementColorsNames;
Avatar.backgroundColors = elementColorsNames;

Avatar.propTypes = {
  id: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  text: PropTypes.string,
  tooltipProps: PropTypes.shape(Tooltip.propTypes),
  ariaLabel: PropTypes.string,
  withoutTooltip: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  className: PropTypes.string,
  textClassName: PropTypes.string,
  backgroundColor: PropTypes.oneOf(Object.values(Avatar.colors)),
  customBackgroundColor: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.oneOf([Avatar.sizes.LARGE, Avatar.sizes.MEDIUM, Avatar.sizes.SMALL]),
  customSize: PropTypes.number,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ariaHidden: PropTypes.bool,
  disabled: PropTypes.bool,
  square: PropTypes.bool,
  topLeftBadgeProps: PropTypes.object,
  topRightBadgeProps: PropTypes.object,
  bottomLeftBadgeProps: PropTypes.object,
  bottomRightBadgeProps: PropTypes.object,
  withoutBorder: PropTypes.bool,
  /**
   * (event) => void
   */
  onClick: PropTypes.func
};
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
  type: AVATAR_TYPES.TEXT,
  backgroundColor: elementColorsNames.CHILI_BLUE,
  customBackgroundColor: null,
  role: undefined,
  size: AVATAR_SIZES.LARGE,
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
