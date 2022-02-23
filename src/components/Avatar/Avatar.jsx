import React, { useMemo } from "react";
import isNil from "lodash/isNil";
import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "helpers/bem-helper";
import { backwardCompatibilityForProperties } from "helpers/backwardCompatibilityForProperties";
import { getElementColor, elementColorsNames } from "utils/colors-vars-map";
import { AVATAR_SIZES, AVATAR_TYPES } from "./AvatarConstants";
import { AvatarBadge } from "./AvatarBadge";
import { AvatarContent } from "./AvatarContent";
import "./Avatar.scss";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

const Avatar = ({
  type,
  className,
  size,
  src,
  icon,
  text,
  role,
  ariaLabel,
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
  customSize
}) => {
  const overrideSquare = backwardCompatibilityForProperties([square, isSquare]);
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false);
  const backgroundColorStyle = useMemo(() => {
    return src ? {} : { backgroundColor: getElementColor(backgroundColor) };
  }, [src, backgroundColor]);
  const sizeStyle = useMemo(() => {
    return customSize ? { height: `${customSize}px`, width: `${customSize}px` }: {};
  }, [customSize]);

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
    <div className={cx(AVATAR_CSS_BASE_CLASS, className)}>
      <div
        className={cx(
          { "without-border": withoutBorder },
          bemHelper({ element: "circle" }),
          bemHelper({ element: "circle", state: type }),
          bemHelper({ element: "circle", state: size }),
          {
            [bemHelper({ element: "circle", state: "is-disabled" })]: overrideDisabled,
            [bemHelper({ element: "circle", state: "is-square" })]: overrideSquare
          }
        )}
        aria-hidden={ariaHidden}
        tabIndex={tabIndex}
        style={{ ...backgroundColorStyle, ...sizeStyle }}
      >
        <AvatarContent type={type} size={size} src={src} icon={icon} text={text} ariaLabel={ariaLabel} role={role} />
      </div>
      {badgesContainer}
    </div>
  );
};

Avatar.types = AVATAR_TYPES;
Avatar.sizes = AVATAR_SIZES;
Avatar.colors = elementColorsNames;
Avatar.backgroundColors = elementColorsNames;

Avatar.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  text: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  className: PropTypes.string,
  backgroundColor: PropTypes.oneOf(Object.values(Avatar.colors)),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
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
  withoutBorder: PropTypes.bool
};

Avatar.defaultProps = {
  src: undefined,
  className: "",
  icon: undefined,
  text: undefined,
  type: AVATAR_TYPES.TEXT,
  backgroundColor: elementColorsNames.CHILI_BLUE,
  role: undefined,
  ariaLabel: undefined,
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
  withoutBorder: false
};

export default Avatar;
