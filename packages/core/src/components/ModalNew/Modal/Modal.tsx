import React, { forwardRef, useCallback, useMemo, useState } from "react";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";
import ModalTopActions from "../ModalTopActions/ModalTopActions";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import { ModalProvider } from "../context/ModalContext";
import { ModalContextProps } from "../context/ModalContext.types";

const Modal = forwardRef(
  (
    {
      id,
      // Would be implemented in a later PR
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      show,
      size = "medium",
      renderHeaderAction,
      closeButtonTheme,
      closeButtonAriaLabel,
      onClose,
      children,
      className,
      "data-testid": dataTestId
    }: ModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [titleId, setTitleId] = useState<string>("");
    const [descriptionId, setDescriptionId] = useState<string>("");

    const setTitleIdCallback = useCallback((id: string) => setTitleId(id), []);
    const setDescriptionIdCallback = useCallback((id: string) => setDescriptionId(id), []);

    const contextValue = useMemo<ModalContextProps>(
      () => ({
        modalId: id,
        setTitleId: setTitleIdCallback,
        setDescriptionId: setDescriptionIdCallback
      }),
      [id, setTitleIdCallback, setDescriptionIdCallback]
    );

    return (
      <ModalProvider value={contextValue}>
        <div id="overlay" className={styles.overlay}>
          <div
            ref={ref}
            className={cx(styles.modal, getStyle(styles, camelCase("size-" + size)), className)}
            id={id}
            data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL, id)}
            role="dialog"
            aria-modal
            aria-labelledby={titleId || undefined}
            aria-describedby={descriptionId || undefined}
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
      </ModalProvider>
    );
  }
);

export default Modal;
