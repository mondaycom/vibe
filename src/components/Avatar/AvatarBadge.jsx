import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import CustomSvgIcon from "../../components/Icon/CustomSvgIcon";
import { AVATAR_SIZES } from "./AvatarConstants";
import "./AvatarBadge.scss";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar-badge";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

export const AvatarBadge = ({ src, ariaLabel, tabIndex, className, size, ...otherProps }) => {
  return src ? (
    <CustomSvgIcon
      src={src}
      ariaLabel={ariaLabel}
      className={cx(AVATAR_CSS_BASE_CLASS, bemHelper({ state: size }), className)}
      clickable={tabIndex === -1}
      {...otherProps}
    />
  ) : null;
};

AvatarBadge.sizes = AVATAR_SIZES;

AvatarBadge.propTypes = {
  src: PropTypes.any.isRequired,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  size: PropTypes.oneOf([AVATAR_SIZES.LARGE, AVATAR_SIZES.MEDIUM, AVATAR_SIZES.SMALL])
};

AvatarBadge.defaultProps = {
  ariaLabel: undefined,
  tabIndex: 0,
  className: "",
  size: AVATAR_SIZES.LARGE
};
