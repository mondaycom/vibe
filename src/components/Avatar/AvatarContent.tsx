import camelCase from "lodash/camelCase";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { AvatarSize, AvatarType } from "./AvatarConstants";
import Icon from "../Icon/Icon";
import { SubIcon, VibeComponentProps } from "../../types";
import styles from "./AvatarContent.module.scss";

const AVATAR_CONTENT_CSS_BASE_CLASS = "monday-style-avatar-content";

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
} = ({
  type = AvatarType.TEXT,
  src,
  icon,
  text,
  ariaLabel,
  role,
  size = AvatarSize.LARGE,
  textClassName = "",
  id,
  "data-testid": dataTestId
}) => {
  const className = cx(
    getStyle(styles, type),
    `${AVATAR_CONTENT_CSS_BASE_CLASS}_${type}`,
    getStyle(styles, camelCase(type + "--" + size)),
    `${AVATAR_CONTENT_CSS_BASE_CLASS}_${type}--${size}`
  );
  switch (type) {
    case AvatarType.IMG:
      return (
        <img
          role={role}
          alt={ariaLabel}
          src={src}
          className={className}
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.AVATAR_CONTENT, id)}
        />
      );
    case AvatarType.ICON:
      return (
        <Icon
          icon={icon}
          aria-label={ariaLabel}
          role={role}
          clickable={false}
          className={className}
          ariaHidden={false}
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.AVATAR_CONTENT, id)}
        />
      );
    case AvatarType.TEXT:
      return (
        <span
          aria-label={ariaLabel}
          role={role}
          className={cx(className, textClassName)}
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.AVATAR_CONTENT, id)}
        >
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
