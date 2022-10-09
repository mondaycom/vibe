import camelCase from "lodash/camelCase";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import { AvatarSizes, AvatarTypes } from "./AvatarConstants";
import VibeComponentProps from "src/types/VibeComponentProps";
import Icon, { iconSubComponentProps } from "../Icon/Icon";
import styles from "./AvatarContent.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

const AVATAR_CONTENT_CSS_BASE_CLASS = "monday-style-avatar-content";

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
} = ({ type, src, icon, text, ariaLabel, role, size, textClassName, id, "data-testid": dataTestId }) => {
  const className = cx(
    getStyle(styles, type),
    `${AVATAR_CONTENT_CSS_BASE_CLASS}_${type}`,
    getStyle(styles, camelCase(type + "--" + size)),
    `${AVATAR_CONTENT_CSS_BASE_CLASS}_${type}--${size}`
  );
  switch (type) {
    case AvatarTypes.IMG:
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
    case AvatarTypes.ICON:
      return (
        <Icon
          icon={icon}
          aria-label={ariaLabel}
          // role={role}
          clickable={false}
          className={className}
          ariaHidden={false}
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.AVATAR_CONTENT, id)}
        />
      );
    case AvatarTypes.TEXT:
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
