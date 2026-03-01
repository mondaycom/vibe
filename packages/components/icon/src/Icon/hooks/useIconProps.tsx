import { type KeyboardEvent, type MouseEvent, type UIEvent, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import { useEventListener, useKeyEvent, keyCodes } from "@vibe/shared";
import useIconScreenReaderAccessProps from "./useIconScreenReaderAccessProps";
import { noop as NOOP } from "es-toolkit";
import styles from "../Icon.module.scss";

const KEYS = [keyCodes.ENTER, keyCodes.SPACE];

export default function useIconProps({
  onClick,
  className,
  clickable,
  ignoreFocusStyle,
  isDecorationOnly,
  label,
  externalTabIndex
}: {
  onClick?: (event: UIEvent) => void;
  className?: string;
  clickable?: boolean;
  ignoreFocusStyle?: boolean;
  isDecorationOnly?: boolean;
  label?: string;
  externalTabIndex?: number | undefined;
}) {
  const iconRef = useRef(null);
  const onEnterCallback = useCallback(
    (event: KeyboardEvent) => {
      const isActive = document.activeElement === iconRef.current;
      if (!isActive) {
        return;
      }
      onClick(event);
    },
    [iconRef, onClick]
  );

  const onMouseDown = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  const computedClassName = useMemo(() => {
    return cx(styles.icon, className, {
      [styles.clickable]: clickable,
      [styles.noFocusStyle]: ignoreFocusStyle
    });
  }, [clickable, className, ignoreFocusStyle]);

  useEventListener({
    eventName: "mousedown",
    callback: onMouseDown,
    ref: iconRef
  });

  useKeyEvent({
    keys: KEYS,
    ref: iconRef,
    callback: onEnterCallback,
    ignoreDocumentFallback: true,
    capture: true,
    stopPropagation: true,
    preventDefault: true
  });

  const onClickCallback = useCallback(
    (event: MouseEvent) => {
      const callback = onClick || NOOP;
      callback(event);
    },
    [onClick]
  );

  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    isClickable: clickable,
    label,
    isDecorationOnly
  });

  screenReaderAccessProps.tabIndex = externalTabIndex ?? screenReaderAccessProps.tabIndex;

  return {
    screenReaderAccessProps,
    onClickCallback,
    computedClassName,
    onEnterCallback,
    iconRef
  };
}
