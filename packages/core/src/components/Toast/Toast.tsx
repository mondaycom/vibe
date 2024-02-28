import { camelCase } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { FC, ReactElement, useCallback, useEffect, useMemo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../components/Button/Button";
import { IconSubComponentProps } from "../Icon/Icon";
import Text from "../Text/Text";
import Loader from "../Loader/Loader";
import Flex from "../Flex/Flex";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import ToastLink from "./ToastLink/ToastLink";
import ToastButton from "./ToastButton/ToastButton";
import { ToastAction, ToastActionType, ToastType } from "./ToastConstants";
import { getIcon } from "./ToastHelpers";
import { NOOP } from "../../utils/function-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { withStaticProps, VibeComponentProps } from "../../types";
import styles from "./Toast.module.scss";
import IconButton from "../IconButton/IconButton";

export interface ToastProps extends VibeComponentProps {
  actions?: ToastAction[];
  /** If true, Toast is open (visible) */
  open?: boolean;
  loading?: boolean;
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
  closeButtonAriaLabel?: string;
}

const Toast: FC<ToastProps> & { types?: typeof ToastType; actionTypes?: typeof ToastActionType } = ({
  open = false,
  loading = false,
  autoHideDuration = null,
  type = ToastType.NORMAL,
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
  "data-testid": dataTestId
}) => {
  const toastLinks = useMemo(() => {
    return actions
      ? actions
          .filter(action => action.type === ToastActionType.LINK)
          .map(({ type: _type, ...otherProps }) => (
            <ToastLink key={otherProps.href} className={styles.actionLink} {...otherProps} />
          ))
      : null;
  }, [actions]);

  const toastButtons: JSX.Element[] | null = useMemo(() => {
    return actions
      ? actions
          .filter(action => action.type === ToastActionType.BUTTON)
          .map(({ type: _type, content, ...otherProps }, index) => (
            <ToastButton key={`alert-button-${index}`} className={styles.actionButton} {...otherProps}>
              {content}
            </ToastButton>
          ))
      : null;
  }, [actions]);

  const classNames = useMemo(
    () => cx(styles.toast, getStyle(styles, camelCase("type-" + type)), className),
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
    <CSSTransition
      in={open}
      classNames={{ enterActive: styles.enterActive, exitActive: styles.exitActive }}
      timeout={400}
      unmountOnExit
    >
      <Text
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TOAST, id)}
        type={Text.types.TEXT2}
        element="div"
        color={Text.colors.FIXED_LIGHT}
        className={classNames}
        role="alert"
        aria-live="polite"
      >
        {iconElement && <div className={cx(styles.icon)}>{iconElement}</div>}
        <Flex align={Flex.align.CENTER} gap={Flex.gaps.LARGE} className={styles.content}>
          <Flex
            gap={Flex.gaps.MEDIUM}
            data-testid={getTestId(ComponentDefaultTestId.TOAST_CONTENT)}
            className={styles.textContent}
          >
            <span>{children}</span>
            {toastLinks}
          </Flex>
          {(toastButtons || deprecatedAction) && (toastButtons || deprecatedAction)}
          {loading && <Loader size={Loader.sizes.XS} />}
        </Flex>
        {closeable && (
          <IconButton
            className={cx(styles.closeButton)}
            onClick={handleClose}
            size={Button.sizes.SMALL}
            kind={Button.kinds.TERTIARY}
            color={Button.colors.FIXED_LIGHT}
            ariaLabel={closeButtonAriaLabel}
            data-testid={getTestId(ComponentDefaultTestId.TOAST_CLOSE_BUTTON)}
            icon={CloseSmall}
            hideTooltip
          />
        )}
      </Text>
    </CSSTransition>
  );
};

export default withStaticProps(Toast, {
  types: ToastType,
  actionTypes: ToastActionType
});
