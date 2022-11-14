import React, { FC, ReactElement, useCallback, useEffect, useMemo, useRef } from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import Button from "../../components/Button/Button";
import Icon, { IconSubComponentProps } from "../../components/Icon/Icon";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import ToastLink from "./ToastLink/ToastLink";
import ToastButton from "./ToastButton/ToastButton";
import { ToastAction, ToastActionType, ToastType } from "./ToastConstants";
import { getIcon } from "./ToastHelpers";
import VibeComponentProps from "../../types/VibeComponentProps";
import { NOOP } from "../../utils/function-utils";
import "./Toast.scss";

interface ToastProps extends VibeComponentProps {
  actions?: ToastAction[];
  /** If true, Toast is open (visible) */
  open?: boolean;
  type?: ToastType;
  /** Possible to override the default icon */
  icon?: string | React.FC<IconSubComponentProps> | null;
  /** If true, won't show the icon */
  hideIcon?: boolean;
  /** The action to display */
  action?: JSX.Element;
  /** If false, won't show the close button */
  closeable?: boolean;
  onClose?: () => void;
  /** The number of milliseconds to wait before
   * automatically closing the Toast
   * (0 or null cancels this behaviour) */
  autoHideDuration?: number;
  children?: ReactElement | ReactElement[] | string;
}

const Toast: FC<ToastProps> & { types?: typeof ToastType; actionTypes?: typeof ToastActionType } = ({
  open = false,
  autoHideDuration = null,
  type = ToastType.NORMAL,
  icon,
  hideIcon = false,
  action: deprecatedAction,
  actions,
  children,
  closeable = true,
  onClose = NOOP,
  className
}) => {
  const toastLinks = useMemo(() => {
    return actions
      ? actions
          .filter(action => action.type === ToastActionType.LINK)
          .map(({ type: _type, ...otherProps }) => <ToastLink key={otherProps.href} {...otherProps} />)
      : null;
  }, [actions]);

  const toastButtons: JSX.Element[] | null = useMemo(() => {
    return actions
      ? actions
          .filter(action => action.type === ToastActionType.BUTTON)
          .map(({ type: _type, content, ...otherProps }, index) => (
            <ToastButton key={`alert-button-${index}`} {...otherProps}>
              {content}
            </ToastButton>
          ))
      : null;
  }, [actions]);

  const classNames = useMemo(
    () => cx("monday-style-toast", `monday-style-toast--type-${type}`, className),
    [type, className]
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

  return (
    <CSSTransition in={open} classNames="monday-style-toast-animation" timeout={400} unmountOnExit>
      <div className={classNames} role="alert" aria-live="polite">
        {iconElement && <div className="monday-style-toast-icon">{iconElement}</div>}
        <div
          className={cx("monday-style-toast-content", {
            "monday-style-toast-content-no-icon": !iconElement
          })}
        >
          {children}
          {toastLinks}
        </div>
        {(toastButtons || deprecatedAction) && (
          <div className="monday-style-toast-action">{toastButtons || deprecatedAction}</div>
        )}
        {closeable && (
          <Button
            className="monday-style-toast_close-button"
            onClick={handleClose}
            size={Button.sizes.SMALL}
            kind={Button.kinds.TERTIARY}
            color={Button.colors.ON_PRIMARY_COLOR}
            ariaLabel="close-toast"
          >
            <Icon iconType={Icon.type.SVG} clickable={false} icon={CloseSmall} iconSize="20px" ignoreFocusStyle />
          </Button>
        )}
      </div>
    </CSSTransition>
  );
};

Object.assign(Toast, {
  types: ToastType,
  actionTypes: ToastActionType
});

export default Toast;
