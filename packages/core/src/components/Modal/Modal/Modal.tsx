import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
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
import { keyCodes } from "../../../constants";
import {
  modalAnimationAnchorPopVariants,
  modalAnimationCenterPopVariants,
  modalAnimationFullViewVariants,
  modalAnimationOverlayVariants
} from "../utils/animationVariants";
import { createPortal } from "react-dom";
import usePortalTarget from "../hooks/usePortalTarget/usePortalTarget";
import { LayerProvider } from "../../LayerProvider";
import useMergeRef from "../../../hooks/useMergeRef";

// @ts-expect-error This is a precaution to support all possible module systems (ESM/CJS)
const FocusLockComponent = (FocusLock.default || FocusLock) as typeof FocusLock;

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
      autoFocus = true,
      onFocusAttempt,
      anchorElementRef,
      alertModal,
      container = document.body,
      children,
      style,
      zIndex,
      className,
      "data-testid": dataTestId,
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedby
    }: ModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const portalTargetElement = usePortalTarget(container);

    const modalRef = useRef<HTMLDivElement>(null);
    const modalMergedRef = useMergeRef<HTMLDivElement>(ref, modalRef);
    const containerRef = useRef<HTMLDivElement>(null);

    const [titleId, setTitleId] = useState<string>();
    const [descriptionId, setDescriptionId] = useState<string>();

    const setTitleIdCallback = useCallback(
      (newId: string) => {
        if (ariaLabelledby) return;
        setTitleId(newId);
      },
      [ariaLabelledby]
    );
    const setDescriptionIdCallback = useCallback(
      (newId: string) => {
        if (ariaDescribedby) return;
        setDescriptionId(newId);
      },
      [ariaDescribedby]
    );

    const contextValue = useMemo<ModalProviderValue>(
      () => ({
        modalId: id,
        setTitleId: setTitleIdCallback,
        setDescriptionId: setDescriptionIdCallback,
        autoFocus
      }),
      [id, setTitleIdCallback, setDescriptionIdCallback, autoFocus]
    );

    const onBackdropClick = useCallback<React.MouseEventHandler<HTMLDivElement>>(
      e => {
        if (!show || alertModal) return;
        onClose(e);
      },
      [show, alertModal, onClose]
    );

    const onModalKeyDown = useCallback<React.KeyboardEventHandler<HTMLDivElement>>(
      e => {
        if (e.key !== keyCodes.ESCAPE || !show || alertModal) return;
        onClose(e);
      },
      [alertModal, onClose, show]
    );

    const modalAnimationVariants =
      size === "full-view"
        ? modalAnimationFullViewVariants
        : anchorElementRef?.current
        ? modalAnimationAnchorPopVariants
        : modalAnimationCenterPopVariants;

    const zIndexStyle = zIndex ? ({ "--monday-modal-z-index": zIndex } as React.CSSProperties) : {};

    const handleFocusLockWhiteList = useCallback(
      (nextFocusedElement?: HTMLElement) => {
        if (!onFocusAttempt) return true;

        const outcome = onFocusAttempt(nextFocusedElement);

        if (outcome === true) return true;

        if (outcome instanceof HTMLElement) {
          outcome.focus();
          return false;
        }

        return false;
      },
      [onFocusAttempt]
    );

    return (
      <AnimatePresence>
        {show && (
          <LayerProvider layerRef={containerRef}>
            <ModalProvider value={contextValue}>
              {createPortal(
                <FocusLockComponent returnFocus autoFocus={autoFocus} whiteList={handleFocusLockWhiteList}>
                  <div ref={containerRef} className={styles.container} style={zIndexStyle}>
                    <motion.div
                      variants={modalAnimationOverlayVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      data-testid={getTestId(ComponentDefaultTestId.MODAL_NEXT_OVERLAY, id)}
                      className={styles.overlay}
                      onClick={onBackdropClick}
                      aria-hidden
                    />
                    <RemoveScroll forwardProps ref={modalMergedRef}>
                      <motion.div
                        variants={modalAnimationVariants}
                        initial="exit"
                        animate="enter"
                        exit="exit"
                        custom={anchorElementRef}
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
                        aria-labelledby={ariaLabelledby || titleId}
                        aria-describedby={ariaDescribedby || descriptionId}
                        style={style}
                        onKeyDown={onModalKeyDown}
                        tabIndex={-1}
                      >
                        {children}
                        <ModalTopActions
                          renderAction={renderHeaderAction}
                          theme={closeButtonTheme}
                          closeButtonAriaLabel={closeButtonAriaLabel}
                          onClose={onClose}
                        />
                      </motion.div>
                    </RemoveScroll>
                  </div>
                </FocusLockComponent>,
                portalTargetElement
              )}
            </ModalProvider>
          </LayerProvider>
        )}
      </AnimatePresence>
    );
  }
);

export default Modal;
