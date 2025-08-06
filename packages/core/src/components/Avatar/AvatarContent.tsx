import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React from "react";
import { AvatarSize as AvatarSizeEnum, AvatarType as AvatarTypeEnum } from "./AvatarConstants";
import { type AvatarSize, type AvatarType } from "./Avatar.types";
import Icon from "../Icon/Icon";
import { type SubIcon, type VibeComponentProps, withStaticPropsWithoutForwardRef } from "../../types";
import styles from "./AvatarContent.module.scss";

export interface AvatarContentProps extends VibeComponentProps {
  /**
   * The image source when the type is set to `img`.
   */
  src?: string;
  /**
   * The type of content displayed inside the avatar.
   */
  type?: AvatarType;
  /**
   * The size of the avatar content.
   */
  size?: AvatarSize;
  /**
   * The ARIA role of the content.
   */
  role?: string;
  /**
   * The label of the content for accessibility.
   */
  ariaLabel?: string;
  /**
   * The icon displayed when the type is set to `icon`.
   */
  icon?: SubIcon;
  /**
   * Class name applied to the text content.
   */
  textClassName?: string;
  /**
   * The text displayed when the type is set to `text`.
   */
  text?: string;
}

const AvatarContent = ({
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

interface AvatarContentStaticProps {
  sizes: typeof AvatarSizeEnum;
  types: typeof AvatarTypeEnum;
}

export default withStaticPropsWithoutForwardRef<AvatarContentProps, AvatarContentStaticProps>(AvatarContent, {
  sizes: AvatarSizeEnum,
  types: AvatarTypeEnum
});
