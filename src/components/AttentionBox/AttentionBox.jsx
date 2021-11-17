import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import AlertIcon from "../Icon/Icons/components/Alert";
import { baseClassName, closeClassName, compactClassName, ATTENTION_BOX_TYPES } from "./AttentionBoxConstants";
import "./AttentionBox.scss";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";

const AttentionBox = ({
  className,
  // Backward compatibility for props naming
  componentClassName,
  type,
  icon,
  iconType,
  title,
  text,
  withoutIcon,
  onClose,
  compact
}) => {
  const iconLabel = useMemo(() => {
    if (type === ATTENTION_BOX_TYPES.DANGER) {
      return "alert";
    }

    if (type === ATTENTION_BOX_TYPES.SUCCESS) {
      return "success";
    }

    return "attention";
  }, [type]);

  const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
  const classNameWithType = `${baseClassName}--type-${type}`;
  return (
    <aside
      className={cx(
        baseClassName,
        classNameWithType,
        { [compactClassName]: compact },
        { [closeClassName]: onClose },
        overrideClassName
      )}
      role="alert"
    >
      {title && (
        <h2 className={cx(`${baseClassName}__title-container`, `${classNameWithType}__title-container`)}>
          {!withoutIcon && (
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
          )}
          <span
            className={cx(`${baseClassName}__title-container__title`, `${classNameWithType}__title-container__title`)}
          >
            {title}
          </span>
        </h2>
      )}
      <div className={cx(`${baseClassName}__text`, `${classNameWithType}__text`)}>{text}</div>
      {onClose && (
        <Icon
          iconType={Icon.type.SVG}
          iconLabel="Close"
          icon={CloseSmall}
          className={cx(`${baseClassName}__close-icon`, { [compactClassName]: compact })}
          ignoreFocusStyle
          onClick={onClose}
          iconSize="24"
        />
      )}
    </aside>
  );
};

AttentionBox.types = ATTENTION_BOX_TYPES;

AttentionBox.propTypes = {
  className: PropTypes.string,
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
  withoutIcon: PropTypes.bool,
  compact: PropTypes.bool,
  onClose: PropTypes.func
};

AttentionBox.defaultProps = {
  className: undefined,
  type: ATTENTION_BOX_TYPES.PRIMARY,
  icon: AlertIcon,
  iconType: Icon.type.SVG,
  title: "",
  text: "",
  withoutIcon: false,
  compact: false,
  onClose: undefined
};

export default AttentionBox;
