import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import { BEMClass } from "../../helpers/bem-helper";
import {
  AVATAR_BADGE_POSITIONS,
  AVATAR_BADGE_ALLOWED_POSITIONS,
  AVATAR_SIZES,
  AVATAR_ALLOWED_SIZES
} from "./AvatarConstants";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar-badge";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

export const AvatarBadge = ({ icon, iconType, ariaLabel, tabIndex, className, size }) => {
  const badgeSize = AVATAR_ALLOWED_SIZES.indexOf(size) > -1 ? size : AVATAR_SIZES.LARGE;
  return (
    <Icon
      icon={icon}
      iconType={iconType}
      iconLabel={ariaLabel}
      tabIndex={tabIndex}
      className={cx(AVATAR_CSS_BASE_CLASS, bemHelper({ state: badgeSize }), className)}
    />
  );
};
AvatarBadge.propTypes = {
  icon: undefined,
  iconType: undefined,
  ariaLabel: PropTypes.string,
  tabIndex: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  className: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_ALLOWED_SIZES),
  position: PropTypes.oneOf(AVATAR_BADGE_ALLOWED_POSITIONS)
};

AvatarBadge.propTypes = {
  icon: undefined,
  ariaLabel: undefined,
  tabIndex: 0,
  className: "",
  size: AVATAR_SIZES.LARGE,
  position: AVATAR_BADGE_POSITIONS.BOTTOM_LEFT
};

AvatarBadge.positions = AVATAR_BADGE_POSITIONS;
