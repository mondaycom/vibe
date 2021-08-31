import React, { useMemo } from "react";
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
  text,
  ariaLevel,
  textClassName,
  titleClassName
}) => {
  const role = useMemo(() => {
    if (type === ATTENTION_BOX_TYPES.DANGER) {
      return "alert";
    }

    return "complementary";
  }, [type]);

  const iconLabel = useMemo(() => {
    if (type === ATTENTION_BOX_TYPES.DANGER) {
      return "alert";
    }

    if (type === ATTENTION_BOX_TYPES.SUCCESS) {
      return "success";
    }

    return "attention";
  }, [type]);

  const classNameWithType = `${baseClassName}--type-${type}`;
  return (
    <aside className={cx(baseClassName, classNameWithType, componentClassName)} role={role}>
      <div
        className={cx(`${baseClassName}__title-container`, `${classNameWithType}__title-container`)}
        role="heading"
        aria-level={ariaLevel}
      >
        {icon ? (
          <Icon
            iconType={iconType}
            ariaHidden
            clickable={false}
            icon={icon}
            className={cx(`${baseClassName}__title-container__icon`, `${classNameWithType}__title-container__icon`)}
            ignoreFocusStyle
            iconSize="24"
            iconLabel={iconLabel}
          />
        ) : null}
        <span
          className={cx(
            `${baseClassName}__title-container__title`,
            `${classNameWithType}__title-container__title`,
            titleClassName
          )}
        >
          {title}
        </span>
      </div>
      {text ? (
        <div className={cx(`${baseClassName}__text`, `${classNameWithType}__text`, textClassName)}>{text}</div>
      ) : null}
    </aside>
  );
};

AttentionBox.types = ATTENTION_BOX_TYPES;

AttentionBox.propTypes = {
  componentClassName: PropTypes.string,
  /** we support 4 types of attention boxes */
  type: PropTypes.oneOf([
    ATTENTION_BOX_TYPES.PRIMARY,
    ATTENTION_BOX_TYPES.SUCCESS,
    ATTENTION_BOX_TYPES.DANGER,
    ATTENTION_BOX_TYPES.DARK
  ]),
  /** We support two types of icons, SVG and Icon font (please see Icon component for more information) */
  iconType: PropTypes.oneOf([Icon.type.SVG, Icon.type.ICON_FONT]),
  /** Icon classname for icon font or SVG Icon Component for SVG Type */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  title: PropTypes.string,
  text: PropTypes.string,
  ariaLevel: PropTypes.number
};

AttentionBox.defaultProps = {
  componentClassName: "",
  type: ATTENTION_BOX_TYPES.PRIMARY,
  icon: AlertIcon,
  iconType: Icon.type.SVG,
  title: "",
  text: "",
  ariaLevel: 2
};

export default AttentionBox;
