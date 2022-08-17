import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./ModalHeader.module.scss";
import IconButton from "components/IconButton/IconButton";
import CloseSmall from "components/Icon/Icons/components/CloseSmall";
import Icon from "components/Icon/Icon";

const ModalHeader = ({
  className,
  title,
  titleClassName,
  description,
  descriptionClassName,
  icon,
  closeModal,
  iconSize,
  iconClassName,
  hideCloseButton,
  closeButtonAriaLabel,
  id
}) => {
  return (
    <div className={cx(styles.container, className)}>
      <p role="heading" aria-level={1} id={id} className={cx(titleClassName, styles.title)}>
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
            onClick={closeModal}
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
   * closes the Modal. No need to provide it, it is being provided by the modal
   */
  closeModal: PropTypes.func,
  /**  /**
   * ID for the title, needed for accessibility. No need to provide it, it is being provided by the modal
   */
  id: PropTypes.string,
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
  id: "",
  className: "",
  description: "",
  icon: undefined,
  iconSize: 24,
  titleClassName: "",
  descriptionClassName: "",
  iconClassName: "",
  closeButtonAriaLabel: "close",
  closeModal: () => {}
};

ModalHeader.displayName = "ModalHeader";

export default ModalHeader;
