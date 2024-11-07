import React, { forwardRef, useCallback, useMemo, useState } from "react";
import cx from "classnames";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import { motion, AnimatePresence } from "framer-motion";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";
import ModalTopActions from "../ModalTopActions/ModalTopActions";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { camelCase } from "lodash-es";
import { ModalProvider } from "../context/ModalContext";
import { ModalProviderValue } from "../context/ModalContext.types";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants";
import {
  modalAnimationAnchorPopVariants,
  modalAnimationCenterPopVariants,
  modalAnimationOverlayVariants
} from "../utils/animationVariants";

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
      anchorElementRef,
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

    const contextValue = useMemo<ModalProviderValue>(
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

    const modalAnimationVariants = anchorElementRef?.current
      ? modalAnimationAnchorPopVariants
      : modalAnimationCenterPopVariants;

    return (
      <AnimatePresence>
        {show && (
          <ModalProvider value={contextValue}>
            <motion.div
              variants={modalAnimationOverlayVariants}
              initial={false}
              animate="enter"
              exit="exit"
              data-testid={getTestId(ComponentDefaultTestId.MODAL_NEXT_OVERLAY, id)}
              className={styles.overlay}
              onClick={onBackdropClick}
              aria-hidden
            />
            <FocusLock returnFocus>
              <RemoveScroll forwardProps>
                <motion.div
                  variants={modalAnimationVariants}
                  initial="exit"
                  animate="enter"
                  exit="exit"
                  custom={anchorElementRef}
                  ref={ref}
                  className={cx(
                    styles.modal,
                    getStyle(styles, camelCase("size-" + size)),
                    { [styles.withHeaderAction]: !!renderHeaderAction },
                    className
                  )}
                  id={id}
                  data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT, id)}
                  role="dialog"
                  aria-modal
                  aria-labelledby={titleId}
                  aria-describedby={descriptionId}
                >
                  {children}
                  <ModalTopActions
                    renderAction={renderHeaderAction}
                    color={closeButtonTheme}
                    closeButtonAriaLabel={closeButtonAriaLabel}
                    onClose={onClose}
                  />
                </motion.div>
              </RemoveScroll>
            </FocusLock>
          </ModalProvider>
        )}
      </AnimatePresence>
    );
  }
);

export default Modal;
