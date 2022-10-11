import React from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { AvatarSizes, AvatarTypes } from "./AvatarConstants";
import "./AvatarContent.scss";
import VibeComponentProps from "src/types/VibeComponentProps";
import Icon, { iconSubComponentProps } from "../Icon/Icon";

const AVATAR_CONTENT_CSS_BASE_CLASS = "monday-style-avatar-content";
const bemHelper = BEMClass(AVATAR_CONTENT_CSS_BASE_CLASS);

interface AvatarContentProps extends VibeComponentProps {
  src?: string;
  type?: AvatarTypes;
  size?: AvatarSizes;
  role?: string;
  ariaLabel?: string;
  /** we support two types of icons - SVG and FONT (classname) so this prop is either the name of the icon or the component */
  icon?: string | React.FunctionComponent<iconSubComponentProps> | null;
  textClassName?: string;
  text?: string;
}

export const AvatarContent: React.FC<AvatarContentProps> & {
  sizes?: typeof AvatarSizes;
  types?: typeof AvatarTypes;
} = ({ type, src, icon, text, ariaLabel, role, size, textClassName }) => {
  const className = cx(bemHelper({ element: type }), bemHelper({ element: type, state: size }));
  switch (type) {
    case AvatarTypes.IMG:
      return <img role={role} alt={ariaLabel} src={src} className={className} />;
    case AvatarTypes.ICON:
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
    case AvatarTypes.TEXT:
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
  types: AvatarTypes,
  sizes: AvatarSizes
});

AvatarContent.defaultProps = {
  src: undefined,
  icon: undefined,
  type: AvatarTypes.TEXT,
  role: undefined,
  ariaLabel: undefined,
  size: AvatarSizes.LARGE,
  textClassName: "",
  text: undefined
};
