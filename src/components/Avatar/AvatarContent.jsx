import { camelCase } from "lodash";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import { AVATAR_SIZES, AVATAR_TYPES } from "./AvatarConstants";
import styles from "./AvatarContent.module.scss";

const AVATAR_CONTENT_CSS_BASE_CLASS = "monday-style-avatar-content";

export const AvatarContent = ({
  type,
  src,
  icon,
  text,
  ariaLabel,
  role,
  size,
  textClassName,
  id,
  "data-testid": dataTestId
}) => {
  const className = cx(
    styles[type],
    `${AVATAR_CONTENT_CSS_BASE_CLASS}_${type}`,
    styles[camelCase(type + "--" + size)],
    `${AVATAR_CONTENT_CSS_BASE_CLASS}_${type}--${size}`
  );
  switch (type) {
    case AVATAR_TYPES.IMG:
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
    case AVATAR_TYPES.ICON:
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
    case AVATAR_TYPES.TEXT:
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
