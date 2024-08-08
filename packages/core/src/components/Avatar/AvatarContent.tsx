import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import { AvatarSize as AvatarSizeEnum, AvatarType as AvatarTypeEnum } from "./AvatarConstants";
import { AvatarSize, AvatarType } from "./Avatar.types";
import Icon from "../Icon/Icon";
import { VibeComponentProps } from "../../types";
import styles from "./AvatarContent.module.scss";
import { SubIcon } from "../Icon";

export interface AvatarContentProps extends VibeComponentProps {
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
  sizes?: typeof AvatarSizeEnum;
  types?: typeof AvatarTypeEnum;
} = ({
  type = "text",
  src,
  icon,
  text,
  ariaLabel,
  role,
  size = "large",
  textClassName = "",
  id,
  "data-testid": dataTestId
}: AvatarContentProps) => {
  const className = cx(
    getStyle(styles, camelCase("content_" + type)),
    getStyle(styles, camelCase("content_" + type + "--" + size))
  );
  switch (type) {
    case "img":
      return (
        <img
          role={role}
          alt={ariaLabel}
          src={src}
          className={className}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.AVATAR_CONTENT, id)}
        />
      );
    case "icon":
      return (
        <Icon
          icon={icon}
          aria-label={ariaLabel}
          // role={role}
          clickable={false}
          className={className}
          ariaHidden={false}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.AVATAR_CONTENT, id)}
        />
      );
    case "text":
      return (
        <span
          aria-label={ariaLabel}
          role={role}
          className={cx(className, textClassName)}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.AVATAR_CONTENT, id)}
        >
          {text}
        </span>
      );
    default:
      return null;
  }
};

Object.assign(AvatarContent, {
  types: AvatarTypeEnum,
  sizes: AvatarSizeEnum
});
