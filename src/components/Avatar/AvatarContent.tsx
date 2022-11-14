import React from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { AvatarSize, AvatarType } from "./AvatarConstants";
import Icon from "../Icon/Icon";
import { SubIcon, VibeComponentProps } from "../../types";
import "./AvatarContent.scss";

const AVATAR_CONTENT_CSS_BASE_CLASS = "monday-style-avatar-content";
const bemHelper = BEMClass(AVATAR_CONTENT_CSS_BASE_CLASS);

interface AvatarContentProps extends VibeComponentProps {
  src?: string;
  type?: AvatarType;
  size?: AvatarSize;
  role?: string;
  ariaLabel?: string;
  /** we support two types of icons - SVG and FONT (classname) so this prop is either the name of the icon or the component */
  icon?: SubIcon;
  textClassName?: string;
  text?: string;
}

export const AvatarContent: React.FC<AvatarContentProps> & {
  sizes?: typeof AvatarSize;
  types?: typeof AvatarType;
} = ({ type = AvatarType.TEXT, src, icon, text, ariaLabel, role, size = AvatarSize.LARGE, textClassName = "" }) => {
  const className = cx(bemHelper({ element: type }), bemHelper({ element: type, state: size }));
  switch (type) {
    case AvatarType.IMG:
      return <img role={role} alt={ariaLabel} src={src} className={className} />;
    case AvatarType.ICON:
      return (
        <Icon
          icon={icon}
          aria-label={ariaLabel}
          // role={role}
          clickable={false}
          className={className}
          ariaHidden={false}
        />
      );
    case AvatarType.TEXT:
      return (
        <span aria-label={ariaLabel} role={role} className={cx(className, textClassName)}>
          {text}
        </span>
      );
    default:
      return null;
  }
};

Object.assign(AvatarContent, {
  types: AvatarType,
  sizes: AvatarSize
});
