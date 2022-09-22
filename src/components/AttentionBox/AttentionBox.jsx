import camelCase from "lodash/camelCase";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Icon from "../../components/Icon/Icon";
import IconButton from "../IconButton/IconButton";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import AlertIcon from "../../components/Icon/Icons/components/Alert";
import { IconType } from "../../components/Icon/IconConstants";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { ATTENTION_BOX_TYPES } from "./AttentionBoxConstants";
import styles from "./AttentionBox.module.scss";

const ATTENTION_BOX_CSS_BASE_CLASS = "monday-style-attention-box-component";

const AttentionBox = ({
  className,
  // Backward compatibility for props naming
  componentClassName,
  // Will remove when releasing version 2 as BREAKING CHANGES
  withIconWithoutHeader,
  type,
  icon,
  iconType,
  title,
  text,
  withoutIcon,
  onClose,
  compact,
  id,
  "data-testid": dataTestId
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
  const classNameWithType = `${ATTENTION_BOX_CSS_BASE_CLASS}--type-${type}`;
  return (
    <aside
      className={cx(
        styles.attentionBox,
        ATTENTION_BOX_CSS_BASE_CLASS,
        styles[camelCase(`type-${type}`)],
        classNameWithType,
        { compact: compact, "with-close": onClose },
        overrideClassName
      )}
      role="alert"
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.ATTENTION_BOX, id)}
      id={id}
    >
      {title && (
        <h2
          className={cx(
            styles.titleContainer,
            `${ATTENTION_BOX_CSS_BASE_CLASS}__title-container`,
            styles[camelCase(`type-${type}__title-container`)],
            `${classNameWithType}__title-container`
          )}
        >
          {!withoutIcon && (
            <Icon
              iconType={iconType}
              ariaHidden
              clickable={false}
              icon={icon}
              className={cx(
                styles.titleContainerIcon,
                `${ATTENTION_BOX_CSS_BASE_CLASS}__title-container__icon`,
                styles[camelCase(`type-${type}__title-container__icon`)],
                `${classNameWithType}__title-container__icon`
              )}
              ignoreFocusStyle
              iconSize="24"
              iconLabel={iconLabel}
            />
          )}
          <span
            className={cx(
              styles.titleContainerTitle,
              `${ATTENTION_BOX_CSS_BASE_CLASS}__title-container__title`,
              styles[camelCase(`type-${type}__title-container__title`)],
              `${classNameWithType}__title-container__title`
            )}
          >
            {title}
          </span>
        </h2>
      )}
      <div
        className={cx(
          styles.text,
          `${ATTENTION_BOX_CSS_BASE_CLASS}__text`,
          styles[camelCase(`type-${type}__text`)],
          `${classNameWithType}__text`,
          {
            [styles.textCompact]: compact,
            [`${ATTENTION_BOX_CSS_BASE_CLASS}_text--compact`]: compact
          }
        )}
      >
        {!title && compact && !withoutIcon && withIconWithoutHeader && (
          <Icon
            iconType={iconType}
            iconSize={18}
            ariaHidden
            clickable={false}
            icon={icon}
            className={cx(
              styles.titleContainerIcon,
              `${ATTENTION_BOX_CSS_BASE_CLASS}__title-container__icon`,
              styles[camelCase(`type-${type}__title-container__icon`)],
              `${classNameWithType}__title-container__icon`
            )}
            ignoreFocusStyle
            iconLabel={iconLabel}
          />
        )}
        {text}
      </div>
      {onClose && (
        <IconButton
          size={IconButton.sizes.SMALL}
          color={IconButton.colors.ON_PRIMARY_COLOR}
          className={cx(styles.closeIcon, `${ATTENTION_BOX_CSS_BASE_CLASS}__close-icon`)}
          wrapperClassName={cx(styles.closeIconWrapper, `${ATTENTION_BOX_CSS_BASE_CLASS}__close-icon--wrapper`, {
            [styles.closeIconCompact]: compact,
            [`${ATTENTION_BOX_CSS_BASE_CLASS}__close-icon--compact`]: compact
          })}
          ariaLabel="Close"
          icon={CloseSmall}
          onClick={onClose}
        />
      )}
    </aside>
  );
};

AttentionBox.types = ATTENTION_BOX_TYPES;
AttentionBox.iconTypes = IconType;
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
  text: PropTypes.any,
  withIconWithoutHeader: PropTypes.bool,
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
  withIconWithoutHeader: false,
  compact: false,
  onClose: undefined
};

export default AttentionBox;
