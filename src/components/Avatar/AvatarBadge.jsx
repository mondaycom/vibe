import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { AVATAR_BADGE_POSITIONS, AVATAR_SIZES, AVATAR_ALLOWED_SIZES } from "./AvatarConstants";
import "./AvatarBadge.scss";
import CustomSvgIcon from "../Icon/CustomSvgIcon";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar-badge";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

export const AvatarBadge = ({ src, ariaLabel, tabIndex, className, size, ...otherProps }) => {
  const badgeSize = AVATAR_ALLOWED_SIZES.indexOf(size) > -1 ? size : AVATAR_SIZES.LARGE;
  return src ? (
    <CustomSvgIcon
      src={src}
      ariaLabel={ariaLabel}
      className={cx(AVATAR_CSS_BASE_CLASS, bemHelper({ state: badgeSize }), className)}
      clickable={tabIndex === -1}
      {...otherProps}
    />
  ) : null;
};
AvatarBadge.propTypes = {
  src: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_ALLOWED_SIZES)
};

AvatarBadge.defaultProps = {
  ariaLabel: undefined,
  tabIndex: 0,
  className: "",
  size: AVATAR_SIZES.LARGE
};

AvatarBadge.positions = AVATAR_BADGE_POSITIONS;
