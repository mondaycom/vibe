import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Icon from "../Icon/Icon";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import AlertIcon from "../Icon/Icons/components/Alert";
import { baseClassName, dismissClassName, compactClassName, ATTENTION_BOX_TYPES } from "./AttentionBoxConstants";
import "./AttentionBox.scss";

const AttentionBox = ({ componentClassName, type, icon, iconType, title, text, withoutIcon, onDismiss, compact }) => {
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
    <aside
      className={cx(
        baseClassName,
        classNameWithType,
        { [compactClassName]: compact },
        { [dismissClassName]: onDismiss },
        componentClassName
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
      {onDismiss && (
        <Icon
          iconType={Icon.type.SVG}
          icon={CloseSmall}
          className={cx(`${baseClassName}__dissmiss-icon`, { [compactClassName]: compact })}
          ignoreFocusStyle
          onClick={onDismiss}
          iconSize="24"
        />
      )}
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
  withoutIcon: PropTypes.bool,
  compact: PropTypes.bool,
  onDismiss: PropTypes.func
};

AttentionBox.defaultProps = {
  componentClassName: "",
  type: ATTENTION_BOX_TYPES.PRIMARY,
  icon: AlertIcon,
  iconType: Icon.type.SVG,
  title: "",
  text: "",
  withoutIcon: false,
  compact: false,
  onDismiss: () => {}
};

export default AttentionBox;
