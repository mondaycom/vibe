import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./ModalHeader.module.scss";
import { IconButton } from "components";
import { CloseSmall } from "components/Icon/Icons";
import Icon from "../Icon/Icon";

const ModalHeader = ({
  className,
  title,
  titleClassName,
  description,
  descriptionClassName,
  icon,
  iconSize,
  iconClassName,
  hideCloseButton,
  closeButtonAriaLabel,
  attr = {}
}) => {
  return (
    <div className={cx(styles.mondayStyleModalHeader, className)}>
      <p {...attr.title} className={cx(titleClassName, styles.title)}>
        {icon && (
          <span className={cx(styles.icon, iconClassName)}>
            <Icon icon={icon} iconType={Icon.type.SVG} iconSize={iconSize} ignoreFocusStyle clickable={false} />
          </span>
        )}
        {title}
      </p>

      {description && <div className={cx(descriptionClassName, styles.description)}>{description}</div>}

      {!hideCloseButton && (
        <div className={cx(styles.closeButton)}>
          <IconButton
            key="xxs"
            {...attr.closeButton}
            ariaLabel={closeButtonAriaLabel}
            icon={CloseSmall}
            kind={IconButton.kinds.TERTIARY}
            size={IconButton.sizes.SMALL}
          />
        </div>
      )}
    </div>
  );
};

ModalHeader.propTypes = {
  /**
   * title of the modal
   */
  title: PropTypes.string.isRequired,
  /**
   * title of the modal
   */
  description: PropTypes.string,
  /**
   * Icon to be rendered
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element, PropTypes.func]),
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * class name to be add to the wrapper
   */
  titleClassName: PropTypes.string,
  /**
   * class name to be add to the wrapper
   */
  descriptionClassName: PropTypes.string,
  /**
   * class name to be add to the wrapper
   */
  iconSize: PropTypes.number,
  /**
   * class name to be add to the wrapper
   */
  iconClassName: PropTypes.string,
  /**
   * class name to be add to the wrapper
   */
  closeButtonAriaLabel: PropTypes.string
};
ModalHeader.defaultProps = {
  className: "",
  description: "",
  icon: undefined,
  iconSize: 24,
  titleClassName: "",
  descriptionClassName: "",
  iconClassName: "",
  closeButtonAriaLabel: "close"
};

ModalHeader.displayName = "ModalHeader";

export default ModalHeader;
