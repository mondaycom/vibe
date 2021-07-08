import React, { useMemo } from "react";
import isNil from "lodash/isNil";
import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { AVATAR_SIZES, AVATAR_ALLOWED_SIZES } from "./AvatarConstants";
import "./Avatar.scss";
import { getElementColor, elementColorsNames } from "../../general-stories/colors/colors-vars-map";
import Icon from "../Icon/Icon";
import { AvatarBadge } from "./AvatarBadge";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

export const Avatar = ({
  className,
  size,
  img,
  children,
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
  const avatarType = isNil(img) ? "text" : "img";
  const avatarSize = AVATAR_ALLOWED_SIZES.indexOf(size) > -1 ? size : AVATAR_SIZES.LARGE;
  const avatarContent = useMemo(
    () =>
      img ? (
        <img role={role} alt={ariaLabel} src={img} className={bemHelper({ element: "image" })} />
      ) : (
        <span className={bemHelper({ element: "text" })} aria-label={ariaLabel} role={role}>
          {children}
        </span>
      ),
    [role, ariaLabel, img, children]
  );

  const backgroundColorStyle = useMemo(() => {
    return { backgroundColor: getElementColor(backgroundColor) };
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
        {avatarContent}
      </div>
      {badgesContainer}
    </div>
  );
};
Avatar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  backgroundColor: PropTypes.oneOf(elementColorsNames),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_ALLOWED_SIZES),
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ariaHidden: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSquare: PropTypes.bool,
  topLeftIcon: PropTypes.instanceOf(Icon),
  topRightIcon: PropTypes.instanceOf(Icon),
  bottomLeftIcon: PropTypes.instanceOf(Icon),
  bottomRightIcon: PropTypes.instanceOf(Icon)
};

Avatar.defaultProps = {
  className: "",
  backgroundColor: elementColorsNames.CHILI_BLUE,
  role: undefined,
  ariaLabel: "",
  size: AVATAR_SIZES.LARGE,
  tabIndex: 0,
  children: undefined,
  ariaHidden: false,
  isDisabled: false,
  isSquare: false,
  topLeftIcon: undefined,
  topRightIcon: undefined,
  bottomLeftIcon: undefined,
  bottomRightIcon: undefined
};

Avatar.sizes = AVATAR_SIZES;
Avatar.colors = elementColorsNames;
