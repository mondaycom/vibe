import React, { useMemo } from "react";
import isNil from "lodash/isNil";
import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { AVATAR_SIZES, AVATAR_ALLOWED_SIZES, AVATAR_TYPES, AVATAR_ALLOWED_TYPES } from "./AvatarConstants";
import { getElementColor, elementColorsNames } from "../../general-stories/colors/colors-vars-map";
import { AvatarBadge } from "./AvatarBadge";
import "./Avatar.scss";
import { AvatarContent } from "./AvatarContent";

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
  isSquare,
  isDisabled,
  tabIndex,
  ariaHidden,
  topLeftBadgeProps,
  topRightBadgeProps,
  bottomLeftBadgeProps,
  bottomRightBadgeProps
}) => {
  const avatarType = AVATAR_ALLOWED_TYPES.indexOf(type) > -1 ? type : AVATAR_TYPES.TEXT;
  const avatarSize = AVATAR_ALLOWED_SIZES.indexOf(size) > -1 ? size : AVATAR_SIZES.LARGE;
  const backgroundColorStyle = useMemo(() => {
    return src ? undefined : { backgroundColor: getElementColor(backgroundColor) };
  }, [backgroundColor]);

  const badgesContainer = useMemo(() => {
    const badges = [];
    if (!isNil(topLeftBadgeProps)) {
      badges.push(
        <div className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "top-left" }))}>
          <AvatarBadge size={avatarSize} {...topLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(topRightBadgeProps)) {
      badges.push(
        <div className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "top-right" }))}>
          <AvatarBadge size={avatarSize} {...topRightBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomLeftBadgeProps)) {
      badges.push(
        <div className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "bottom-left" }))}>
          <AvatarBadge size={avatarSize} {...bottomLeftBadgeProps} />
        </div>
      );
    }
    if (!isNil(bottomRightBadgeProps)) {
      badges.push(
        <div className={cx(bemHelper({ element: "badge" }), bemHelper({ element: "badge", state: "bottom-right" }))}>
          <AvatarBadge size={avatarSize} {...bottomRightBadgeProps} />
        </div>
      );
    }

    return badges.length > 0 ? <div className={cx(bemHelper({ element: "badges" }))}>{badges}</div> : null;
  }, [topLeftBadgeProps, topRightBadgeProps, bottomLeftBadgeProps, bottomRightBadgeProps]);

  return (
    <div className={cx(AVATAR_CSS_BASE_CLASS, className)}>
      <div
        className={cx(
          bemHelper({ element: "circle" }),
          bemHelper({ element: "circle", state: avatarType }),
          bemHelper({ element: "circle", state: avatarSize }),
          {
            [bemHelper({ element: "circle", state: "is-disabled" })]: isDisabled,
            [bemHelper({ element: "circle", state: "is-square" })]: isSquare
          }
        )}
        aria-hidden={ariaHidden}
        tabIndex={tabIndex}
        style={backgroundColorStyle}
      >
        <AvatarContent
          type={avatarType}
          size={avatarSize}
          src={src}
          icon={icon}
          text={text}
          ariaLabel={ariaLabel}
          role={role}
        />
      </div>
      {badgesContainer}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  type: PropTypes.oneOf(AVATAR_ALLOWED_TYPES),
  className: PropTypes.string,
  backgroundColor: PropTypes.oneOf(elementColorsNames),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_ALLOWED_SIZES),
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ariaHidden: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSquare: PropTypes.bool,
  topLeftBadgeProps: PropTypes.object,
  topRightBadgeProps: PropTypes.object,
  bottomLeftBadgeProps: PropTypes.object,
  bottomRightBadgeProps: PropTypes.object
};

Avatar.defaultProps = {
  src: undefined,
  className: "",
  type: AVATAR_TYPES.TEXT,
  backgroundColor: elementColorsNames.CHILI_BLUE,
  role: undefined,
  ariaLabel: undefined,
  size: AVATAR_SIZES.LARGE,
  tabIndex: 0,
  ariaHidden: false,
  isDisabled: false,
  isSquare: false,
  topLeftBadgeProps: undefined,
  topRightBadgeProps: undefined,
  bottomLeftBadgeProps: undefined,
  bottomRightBadgeProps: undefined
};

Avatar.types = AVATAR_TYPES;
Avatar.sizes = AVATAR_SIZES;
Avatar.colors = elementColorsNames;

export default Avatar;
