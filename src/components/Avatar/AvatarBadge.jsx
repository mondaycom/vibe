import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import CustomSvgIcon from "../../components/Icon/CustomSvgIcon/CustomSvgIcon";
import { AVATAR_SIZES } from "./AvatarConstants";
import styles from "./AvatarBadge.module.scss";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar-badge";

export const AvatarBadge = ({
  src,
  ariaLabel,
  tabIndex,
  className,
  size,
  id,
  "data-testid": dataTestId,
  ...otherProps
}) => {
  return src ? (
    <CustomSvgIcon
      src={src}
      ariaLabel={ariaLabel}
      className={cx(AVATAR_CSS_BASE_CLASS, styles[size], `${AVATAR_CSS_BASE_CLASS}--${size}`, className)}
      clickable={tabIndex === -1}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.AVATAR_BADGE, id)}
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
