import { MouseEvent, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import useEventListener from "../../../hooks/useEventListener";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants/keyCodes";
import useIconScreenReaderAccessProps from "../../../hooks/useIconScreenReaderAccessProps";
import styles from "../Icon.module.scss";

const KEYS = [keyCodes.ENTER, keyCodes.SPACE];

export default function useIconProps({
  className,
  ignoreFocusStyle,
  isDecorationOnly,
  iconLabel,
  externalTabIndex
}: {
  className?: string;
  ignoreFocusStyle?: boolean;
  isDecorationOnly?: boolean;
  iconLabel?: string;
  externalTabIndex?: number | undefined;
}) {
  const iconRef = useRef(null);

  const onMouseDown = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  const computedClassName = useMemo(() => {
    return cx(styles.icon, className, {
      [styles.noFocusStyle]: ignoreFocusStyle
    });
  }, [className, ignoreFocusStyle]);

  useEventListener({
    eventName: "mousedown",
    callback: onMouseDown,
    ref: iconRef
  });

  useKeyEvent({
    keys: KEYS,
    ref: iconRef,
    ignoreDocumentFallback: true,
    capture: true,
    stopPropagation: true,
    preventDefault: true
  });

  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    label: iconLabel,
    isDecorationOnly
  });

  screenReaderAccessProps.tabIndex = externalTabIndex ?? screenReaderAccessProps.tabIndex;

  return {
    screenReaderAccessProps,
    computedClassName,
    iconRef
  };
}
