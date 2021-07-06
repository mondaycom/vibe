import cx from "classnames";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../Icon/Icon";
import { AVATAR_SIZES } from "./AvatarConstants";
import "./Avatar.scss";

const AVATAR_CSS_BASE_CLASS = "monday-style-avatar";
const bemHelper = BEMClass(AVATAR_CSS_BASE_CLASS);

// TODO: still need to figure it out: color
export const Avatar = ({
  className,
  size,
  img,
  text,
  icon,
  iconProps,
  isSupportEmptyState,
  role,
  ariaLabel,
  backgroundColor
}) => {
  // Get avatar content
  let avatarContent;
  if (img) avatarContent = <img role={role} alt={ariaLabel} src={img} />;
  else if (icon) avatarContent = <Icon {...iconProps} ariaLabel={ariaLabel} role={role} />;
  else if (text === "" && isSupportEmptyState) <div />;
  else
    avatarContent = (
      <span aria-label={ariaLabel} role={role}>
        {text}
      </span>
    );

  return (
    <div className={cx(AVATAR_CSS_BASE_CLASS, bemHelper({ state: size }), className)} style={{ backgroundColor }}>
      {avatarContent}
    </div>
  );
};
Avatar.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  role: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf([AVATAR_SIZES.LARGE, AVATAR_SIZES.MEDIUM, AVATAR_SIZES.SMALL]),
  isSupportEmptyState: PropTypes.bool
};

Avatar.defaultProps = {
  className: "",
  backgroundColor: "red",
  role: undefined,
  alt: "",
  size: AVATAR_SIZES.LARGE,
  isSupportEmptyState: true
};

Avatar.sizes = AVATAR_SIZES;
