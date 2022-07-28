import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../Icon/Icon";
import { AVATAR_SIZES, AVATAR_TYPES } from "./AvatarConstants";
import "./AvatarContent.scss";

const AVATAR_CONTENT_CSS_BASE_CLASS = "monday-style-avatar-content";
const bemHelper = BEMClass(AVATAR_CONTENT_CSS_BASE_CLASS);
export const AvatarContent = ({ type, src, icon, text, ariaLabel, role, size, textClassName }) => {
  const className = cx(bemHelper({ element: type }), bemHelper({ element: type, state: size }));
  switch (type) {
    case AVATAR_TYPES.IMG:
      return <img role={role} alt={ariaLabel} src={src} className={className} />;
    case AVATAR_TYPES.ICON:
      return (
        <Icon
          icon={icon}
          aria-label={ariaLabel}
          role={role}
          clickable={false}
          className={className}
          ariaHidden={false}
        />
      );
    case AVATAR_TYPES.TEXT:
      return (
        <span aria-label={ariaLabel} role={role} className={cx(className, textClassName)}>
          {text}
        </span>
      );
    default:
      return null;
  }
};

AvatarContent.types = AVATAR_TYPES;
AvatarContent.sizes = AVATAR_SIZES;

AvatarContent.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.oneOf([AvatarContent.types.TEXT, AvatarContent.types.ICON, AvatarContent.types.IMG]),
  size: PropTypes.oneOf([AvatarContent.sizes.SMALL, AvatarContent.sizes.MEDIUM, AvatarContent.sizes.LARGE]),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  /** we support two types of icons - SVG and FONT (classname) so this prop is either the name of the icon or the component */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  textClassName: PropTypes.string,
  text: PropTypes.string
};

AvatarContent.defaultProps = {
  src: undefined,
  icon: undefined,
  type: AVATAR_TYPES.TEXT,
  role: undefined,
  ariaLabel: undefined,
  size: AVATAR_SIZES.LARGE,
  textClassName: "",
  text: undefined
};
