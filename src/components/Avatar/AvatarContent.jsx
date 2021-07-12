import React from "react";
import { BEMClass } from "../../helpers/bem-helper";
import Icon from "../Icon/Icon";
import { AVATAR_ALLOWED_SIZES, AVATAR_ALLOWED_TYPES, AVATAR_SIZES, AVATAR_TYPES } from "./AvatarConstants";
import "./AvatarContent.scss";
import classNames from "classnames";

const AVATAR_CONTENT_CSS_BASE_CLASS = "monday-style-avatar-content";
const bemHelper = BEMClass(AVATAR_CONTENT_CSS_BASE_CLASS);
export const AvatarContent = ({ type, img, icon, text, ariaLabel, role, size }) => {
  const avatarType = AVATAR_ALLOWED_TYPES.indexOf(type) > -1 ? type : AVATAR_TYPES.TEXT;
  const avatarSize = AVATAR_ALLOWED_SIZES.indexOf(size) > -1 ? size : AVATAR_SIZES.LARGE;
  const className = classNames(
    bemHelper({ element: avatarType }),
    bemHelper({ element: avatarType, state: avatarSize })
  );

  if (type === AVATAR_TYPES.IMG) return <img role={role} alt={ariaLabel} src={img} className={className} />;
  if (type === AVATAR_TYPES.ICON)
    return <Icon icon={icon} aria-label={ariaLabel} role={role} clickable={false} className={className} />;
  if (type === AVATAR_TYPES.TEXT)
    return (
      <span aria-label={ariaLabel} role={role} className={className}>
        {text}
      </span>
    );
};
