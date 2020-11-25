import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import AlertIcon from "../Icon/Icons/components/Alert";
import { baseClassName, ATTENTION_BOX_TYPES } from "./AttentionBoxConstants";
import "./AttentionBox.scss";

const AttentionBox = ({
  componentClassName,
  type,
  icon,
  iconType,
  title,
  text
}) => {
  const classNameWithType = `${baseClassName}--type-${type}`;
  return (
    <div className={cx(baseClassName, classNameWithType, componentClassName)}>
      <div
        className={cx(
          `${baseClassName}__title-container`,
          `${classNameWithType}__title-container`
        )}
      >
        <Icon
          iconType={iconType}
          clickable={false}
          icon={icon}
          className={cx(
            `${baseClassName}__title-container__icon`,
            `${classNameWithType}__title-container__icon`
          )}
          ignoreFocusStyle
          iconSize={24}
        />
        <span
          className={cx(
            `${baseClassName}__title-container__title`,
            `${classNameWithType}__title-container__title`
          )}
        >
          {title}
        </span>
      </div>
      <div
        className={cx(`${baseClassName}__text`, `${classNameWithType}__text`)}
      >
        {text}
      </div>
    </div>
  );
};

AttentionBox.types = ATTENTION_BOX_TYPES;

AttentionBox.propTypes = {
  componentClassName: PropTypes.string,
  type: PropTypes.oneOf([
    ATTENTION_BOX_TYPES.PRIMARY,
    ATTENTION_BOX_TYPES.SUCCESS,
    ATTENTION_BOX_TYPES.DANGER,
    ATTENTION_BOX_TYPES.DARK
  ]),
  iconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  title: PropTypes.string,
  text: PropTypes.string
};

AttentionBox.defaultProps = {
  componentClassName: "",
  type: ATTENTION_BOX_TYPES.PRIMARY,
  icon: AlertIcon,
  iconType: Icon.type.SVG,
  title: "",
  text: ""
};

export default AttentionBox;
