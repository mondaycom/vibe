import { camelCase } from "es-toolkit";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { type ReactElement, useCallback, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Icon, type IconSubComponentProps } from "@vibe/icon";
import { Text } from "@vibe/typography";
import { Loader } from "@vibe/loader";
import { Flex } from "@vibe/layout";
import { CloseSmall } from "@vibe/icons";
import ToastLink from "./ToastLink/ToastLink";
import ToastButton from "./ToastButton/ToastButton";
import { ToastActionType as ToastActionTypeEnum, ToastType as ToastTypeEnum } from "./ToastConstants";
import { type ToastType, type ToastAction } from "./Toast.types";
import { getIcon } from "./ToastHelpers";
import { NOOP } from "../../utils/function-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { type VibeComponentProps, withStaticPropsWithoutForwardRef } from "../../types";
import styles from "./Toast.module.scss";
import usePrevious from "../../hooks/usePrevious";

export interface ToastProps extends VibeComponentProps {
  /**
   * The actions available in the toast.
   */
  actions?: ToastAction[];
  /**
   * If true, the toast is open (visible).
   */
  open?: boolean;
  /**
   * If true, displays a loading indicator inside the toast.
   */
  loading?: boolean;
  /**
   * The type of toast.
   */
  type?: ToastType;
  /**
   * The icon displayed in the toast.
   */
  icon?: string | React.FC<IconSubComponentProps> | null;
  /**
   * If true, hides the toast icon.
   */
  hideIcon?: boolean;
  /**
   * The action element displayed in the toast.
   */
  action?: JSX.Element;
  /**
   * If false, hides the close button.
   */
  closeable?: boolean;
  /**
   * Callback fired when the toast is closed.
   */
  onClose?: () => void;
  /**
   * The number of milliseconds before the toast automatically closes.
   * (0 or null disables auto-close behavior).
   */
  autoHideDuration?: number;
  /**
   * The content displayed inside the toast.
   */
  children?: ReactElement | ReactElement[] | string;
  /**
   * The aria-label for the close button.
   */
  closeButtonAriaLabel?: string;
  /**
   * If true, renders the toast inline (for galleries/previews) instead of fixed at the top of the viewport.
   */
  inline?: boolean;
}

const Toast = ({
  open = false,
  loading = false,
  autoHideDuration = null,
  type = "normal",
  icon,
  hideIcon = false,
  action: deprecatedAction,
  actions,
  children,
  closeable = true,
  onClose = NOOP,
  className,
  id,
  closeButtonAriaLabel = "Close",
  inline = false,
  "data-testid": dataTestId
}: ToastProps) => {
  const ref = useRef(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const prevActions = usePrevious(actions?.length);
  const toastLinks = useMemo(() => {
    return actions
      ? actions
          .filter(action => action.type === "link")
          .map(({ type: _type, ...otherProps }) => (
            <ToastLink key={otherProps.href} className={styles.actionLink} {...otherProps} />
          ))
      : null;
  }, [actions]);

  const shouldShowButtonTransition = useMemo(() => {
    return prevActions !== undefined && actions?.length !== prevActions;
  }, [actions, prevActions]);

  const toastButtons: JSX.Element[] | null = useMemo(() => {
    return actions
      ? actions
          .filter(action => action.type === "button")
          .map(({ type: _type, content, ...otherProps }, index) => (
            <ToastButton
              key={`alert-button-${index}`}
              className={cx(styles.actionButton, { [styles.withTransition]: shouldShowButtonTransition })}
              {...otherProps}
            >
              {content}
            </ToastButton>
          ))
      : null;
  }, [actions, shouldShowButtonTransition]);

  const classNames = useMemo(
    () => cx(styles.toast, getStyle(styles, camelCase("type-" + type)), { [styles.inline]: inline }, className),
    [type, inline, className]
  );

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  /* Timer */
  const timerAutoHide = useRef<NodeJS.Timeout>();
  const setAutoHideTimer = useCallback(
    (duration: number) => {
      if (!onClose || duration == null) {
        return;
      }

      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = setTimeout(() => {
        handleClose();
      }, duration);
    },
    [handleClose, onClose]
  );

  useEffect(() => {
    if (open && autoHideDuration > 0) {
      setAutoHideTimer(autoHideDuration);
    }

    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);

  const iconElement = !hideIcon && getIcon(type, icon);

  // https://n12v.com/css-transition-to-from-auto/
  const recalculateElementWidth = useCallback((element: HTMLElement) => {
    const prevWidth = element.style.width;
    element.style.width = "auto";
    const endWidth = getComputedStyle(element).width;
    element.style.width = prevWidth;
    element.offsetWidth; // force repaint
    element.style.width = endWidth;
  }, []);

  useEffect(() => {
    if (ref.current) {
      recalculateElementWidth(ref.current);
    }
  }, [children, recalculateElementWidth]);

  const toastElement = (
    <Text
      ref={nodeRef}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOAST, id)}
      data-vibe="Toast"
      type="text2"
      element="div"
      className={classNames}
      role="alert"
      aria-live="polite"
    >
      {iconElement && <div className={cx(styles.icon)}>{iconElement}</div>}
      <Flex align="center" gap="small" className={styles.content}>
        <Flex
          align="center"
          gap="medium"
          data-testid={getTestId(ComponentDefaultTestId.TOAST_CONTENT)}
          className={styles.textContent}
        >
          <span className={styles.message}>{children}</span>
          {toastLinks}
        </Flex>
        {(toastButtons || deprecatedAction) && (
          <div className={styles.actions}>{toastButtons || deprecatedAction}</div>
        )}
        {loading && <Loader size="xs" />}
      </Flex>
      {closeable && (
        <button
          type="button"
          className={cx(styles.closeButton)}
          onClick={handleClose}
          aria-label={closeButtonAriaLabel}
          data-testid={getTestId(ComponentDefaultTestId.TOAST_CLOSE_BUTTON)}
        >
          <Icon icon={CloseSmall} iconSize={14} ignoreFocusStyle />
        </button>
      )}
    </Text>
  );

  if (inline) {
    if (!open) {
      return null;
    }

    return toastElement;
  }

  return createPortal(
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      classNames={{ enterActive: styles.enterActive, exitActive: styles.exitActive }}
      timeout={400}
      unmountOnExit
    >
      {toastElement}
    </CSSTransition>,
    document.body
  );
};

interface ToastStaticProps {
  types: typeof ToastTypeEnum;
  actionTypes: typeof ToastActionTypeEnum;
}

export default withStaticPropsWithoutForwardRef<ToastProps, ToastStaticProps>(Toast, {
  types: ToastTypeEnum,
  actionTypes: ToastActionTypeEnum
});
