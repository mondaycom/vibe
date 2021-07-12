import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../Icon/Icon";
import { AVATAR_ALLOWED_SIZES, AVATAR_ALLOWED_TYPES, AVATAR_SIZES, AVATAR_TYPES } from "./AvatarConstants";
import "./AvatarContent.scss";
import { AvatarBadge } from "./AvatarBadge";
import { elementColorsNames } from "../../general-stories/colors/colors-vars-map";

const AVATAR_CONTENT_CSS_BASE_CLASS = "monday-style-avatar-content";
const bemHelper = BEMClass(AVATAR_CONTENT_CSS_BASE_CLASS);
export const AvatarContent = ({ type, src, icon, text, ariaLabel, role, size }) => {
  const avatarType = AVATAR_ALLOWED_TYPES.indexOf(type) > -1 ? type : AVATAR_TYPES.TEXT;
  const avatarSize = AVATAR_ALLOWED_SIZES.indexOf(size) > -1 ? size : AVATAR_SIZES.LARGE;
  const className = cx(bemHelper({ element: avatarType }), bemHelper({ element: avatarType, state: avatarSize }));

  if (type === AVATAR_TYPES.IMG) return <img role={role} alt={ariaLabel} src={src} className={className} />;
  if (type === AVATAR_TYPES.ICON)
    return <Icon icon={icon} aria-label={ariaLabel} role={role} clickable={false} className={className} />;
  if (type === AVATAR_TYPES.TEXT)
    return (
      <span aria-label={ariaLabel} role={role} className={className}>
        {text}
      </span>
    );
};

AvatarBadge.propTypes = {
  src: PropTypes.string,
  type: PropTypes.oneOf(AVATAR_ALLOWED_TYPES),
  role: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(AVATAR_ALLOWED_SIZES)
};

AvatarBadge.defaultProps = {
  src: undefined,
  className: "",
  type: AVATAR_TYPES.TEXT,
  backgroundColor: elementColorsNames.CHILI_BLUE,
  role: undefined,
  ariaLabel: undefined,
  size: AVATAR_SIZES.LARGE
};
