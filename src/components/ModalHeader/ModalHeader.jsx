import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import classes from "./ModalHeader.module.scss";
import { IconButton } from "components";
import { CloseSmall } from "components/Icon/Icons";

const ModalHeader = ({ className, title, titleClassName, hideCloseButton, closeButtonAriaLabel, attr = {} }) => {
  return (
    <div className={cx(classes["monday-style-modal-header"], className)}>
      <p {...attr.title} className={cx(titleClassName, classes.title)}>
        {title}
      </p>

      {!hideCloseButton && (
        <IconButton
          key="xxs"
          {...attr.closeButton}
          ariaLabel={closeButtonAriaLabel}
          className={cx(className)}
          icon={CloseSmall}
          kind={IconButton.kinds.TERTIARY}
          size={IconButton.sizes.SMALL}
        />
      )}
    </div>
  );
};

ModalHeader.propTypes = {
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
  closeButtonAriaLabel: PropTypes.string
};
ModalHeader.defaultProps = {
  className: "",
  titleClassName: "",
  closeButtonAriaLabel: "close"
};

ModalHeader.displayName = "ModalHeader";
ModalHeader.lalala = "kuku";
ModalHeader.prototype.lala = "kuku";

export default ModalHeader;
