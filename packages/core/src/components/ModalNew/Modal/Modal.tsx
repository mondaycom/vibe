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
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants";

const Modal = forwardRef(
  (
    {
      id,
      show,
      size = "medium",
      renderHeaderAction,
      closeButtonTheme,
      closeButtonAriaLabel,
      onClose = () => {},
      children,
      className,
      "data-testid": dataTestId
    }: ModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [titleId, setTitleId] = useState<string>();
    const [descriptionId, setDescriptionId] = useState<string>();

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

    const onBackdropClick = useCallback<React.MouseEventHandler<HTMLDivElement>>(
      e => {
        if (!show) return;
        onClose(e);
      },
      [onClose, show]
    );

    const onEscClick = useCallback<React.KeyboardEventHandler<HTMLBodyElement>>(
      e => {
        if (!show) return;
        onClose(e);
      },
      [onClose, show]
    );

    useKeyEvent({
      callback: onEscClick,
      capture: true,
      keys: [keyCodes.ESCAPE]
    });

    if (!show) {
      return null;
    }

    return (
      <ModalProvider value={contextValue}>
        <div
          data-testid={getTestId(ComponentDefaultTestId.MODAL_NEXT_OVERLAY, id)}
          className={styles.overlay}
          onClick={onBackdropClick}
          aria-hidden
        />
        <div
          ref={ref}
          className={cx(styles.modal, getStyle(styles, camelCase("size-" + size)), className)}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT, id)}
          role="dialog"
          aria-modal
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <ModalTopActions
            renderAction={renderHeaderAction}
            color={closeButtonTheme}
            closeButtonAriaLabel={closeButtonAriaLabel}
            onClose={onClose}
          />
          {children}
        </div>
      </ModalProvider>
    );
  }
);

export default Modal;
