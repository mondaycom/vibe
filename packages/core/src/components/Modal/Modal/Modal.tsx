import React, { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import { CSSTransition } from "react-transition-group";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId, ComponentVibeId } from "../../../tests/constants";
import styles from "./Modal.module.scss";
import { type ModalProps } from "./Modal.types";
import ModalTopActions from "../ModalTopActions/ModalTopActions";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { camelCase } from "es-toolkit";
import { ModalProvider } from "../context/ModalContext";
import { type ModalProviderValue } from "../context/ModalContext.types";
import { keyCodes } from "../../../constants";
import { createPortal } from "react-dom";
import usePortalTarget from "../hooks/usePortalTarget/usePortalTarget";
import useFocusEscapeTargets from "../hooks/useFocusEscapeTargets/useFocusEscapeTargets";
import { LayerProvider } from "@vibe/layer";
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
      allowFocusEscapeTo,
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

    const animationType = size === "full-view" ? "fullView" : anchorElementRef?.current ? "anchorPop" : "centerPop";

    const anchorRect = anchorElementRef?.current?.getBoundingClientRect();
    const anchorVars = anchorRect
      ? ({
          "--modal-start-x": `${anchorRect.left + anchorRect.width / 2}px`,
          "--modal-start-y": `${anchorRect.top + anchorRect.height / 2}px`
        } as React.CSSProperties)
      : {};

    const zIndexStyle = zIndex ? ({ "--monday-modal-z-index": zIndex } as React.CSSProperties) : {};

    const shouldAllowFocusEscape = useFocusEscapeTargets(allowFocusEscapeTo);

    /**
     * Returning true means that the focus-lock is allowed to manage the element.
     * Returning false means that the focus-lock would surrender control to the element.
     */
    const handleFocusLockWhiteList = useCallback(
      (nextFocusedElement?: HTMLElement) => {
        if (onFocusAttempt) {
          const outcome = onFocusAttempt(nextFocusedElement);

          if (outcome === true) return true;

          if (outcome instanceof HTMLElement) {
            outcome.focus();
            return false;
          }

          return false;
        }

        return !shouldAllowFocusEscape(nextFocusedElement);
      },
      [onFocusAttempt, shouldAllowFocusEscape]
    );

    return (
      <CSSTransition
        in={show}
        nodeRef={containerRef}
        timeout={{ enter: 250, exit: 150 }}
        unmountOnExit
        classNames={{
          enter: styles.containerEnter,
          enterActive: styles.containerEnterActive,
          exitActive: styles.containerExitActive
        }}
      >
        <LayerProvider layerRef={containerRef}>
          <ModalProvider value={contextValue}>
            {createPortal(
              <FocusLockComponent returnFocus autoFocus={autoFocus} whiteList={handleFocusLockWhiteList}>
                <div ref={containerRef} className={styles.container} style={zIndexStyle}>
                  <div
                    data-testid={getTestId(ComponentDefaultTestId.MODAL_OVERLAY, id)}
                    className={styles.overlay}
                    onClick={onBackdropClick}
                    aria-hidden
                  />
                  <RemoveScroll forwardProps ref={modalMergedRef}>
                    <div
                      className={cx(
                        styles.modal,
                        styles[animationType],
                        getStyle(styles, camelCase("size-" + size)),
                        { [styles.withHeaderAction]: !!renderHeaderAction },
                        className
                      )}
                      id={id}
                      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL, id)}
                      data-vibe={ComponentVibeId.MODAL}
                      role="dialog"
                      aria-modal
                      aria-labelledby={ariaLabelledby || titleId}
                      aria-describedby={ariaDescribedby || descriptionId}
                      style={{ ...style, ...anchorVars }}
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
                    </div>
                  </RemoveScroll>
                </div>
              </FocusLockComponent>,
              portalTargetElement
            )}
          </ModalProvider>
        </LayerProvider>
      </CSSTransition>
    );
  }
);

export default Modal;
