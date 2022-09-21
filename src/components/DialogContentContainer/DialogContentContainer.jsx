import cx from "classnames";
import { SIZES } from "../../constants/sizes";
import React, { forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./DialogContentContainer.module.scss";

const DIALOG_TYPES = {
  MODAL: "modal",
  POPOVER: "popover"
};

const DIALOG_SIZES = {
  NONE: "none",
  SMALL: SIZES.SMALL,
  MEDIUM: SIZES.MEDIUM,
  LARGE: SIZES.LARGE
};

const DialogContentContainer = forwardRef(
  ({ className, ariaLabelledby, ariaDescribedby, type, size, children, style, id, "data-testid": dataTestId }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.DIALOG_CONTENT_CONTAINER, id)}
        role="dialog"
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
        ref={mergedRef}
        style={style}
        className={cx(
          styles.dialogContentContainer,
          "dialog-content-container",
          className,
          styles[type],
          `dialog-content-container--${type}`,
          styles[size],
          `dialog-content-container--${size}`
        )}
      >
        {children}
      </div>
    );
  }
);

DialogContentContainer.types = DIALOG_TYPES;
DialogContentContainer.sizes = DIALOG_SIZES;

DialogContentContainer.propTypes = {
  className: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  type: PropTypes.oneOf([DialogContentContainer.types.MODAL, DialogContentContainer.types.POPOVER]),
  size: PropTypes.oneOf([
    DialogContentContainer.sizes.SMALL,
    DialogContentContainer.sizes.MEDIUM,
    DialogContentContainer.sizes.LARGE
  ])
};

DialogContentContainer.defaultProps = {
  className: "",
  ariaLabelledby: "",
  ariaDescribedby: "",
  type: DIALOG_TYPES.POPOVER,
  size: DIALOG_SIZES.MEDIUM
};

export default DialogContentContainer;
