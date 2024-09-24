import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";
import ModalTopActions from "../ModalTopActions/ModalTopActions";

const Modal = forwardRef(
  (
    {
      // Would be implemented in a later PR
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      show,
      // Would be implemented in a later PR
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      size = "medium",
      renderHeaderAction,
      closeButtonTheme,
      closeButtonAriaLabel,
      onClose,
      children,
      className,
      id,
      "data-testid": dataTestId
    }: ModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div id="overlay" className={styles.overlay}>
        <div
          ref={ref}
          className={cx(styles.modal, className)}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL, id)}
          role="dialog"
          aria-modal
          aria-labelledby="TODO" // TODO
          aria-describedby="TODO" // TODO
        >
          <ModalTopActions
            renderAction={renderHeaderAction}
            color={closeButtonTheme}
            closeButtonAriaLabel={closeButtonAriaLabel}
            onClose={onClose}
          />
          {children}
        </div>
      </div>
    );
  }
);

export default Modal;
