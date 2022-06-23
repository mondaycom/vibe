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
   * Title of the modal
   */
  title: PropTypes.string.isRequired,
  /**
   * Description of the modal
   */
  description: PropTypes.string,
  /**
   * Icon to be rendered before the title
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element, PropTypes.func]),
  /**
   * Class name for the wrapper
   */
  className: PropTypes.string,
  /**
   * Class name for the title
   */
  titleClassName: PropTypes.string,
  /**
   * Class name for the description
   */
  descriptionClassName: PropTypes.string,
  /**
   * Size of the icon
   */
  iconSize: PropTypes.number,
  /**
   * class name for the icon
   */
  iconClassName: PropTypes.string,
  /**
   * Aria label for the close button
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
