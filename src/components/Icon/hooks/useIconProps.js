import { useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import NOOP from "lodash/noop";
import useEventListener from "../../../hooks/useEventListener";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants/KeyCodes";
import useIconScreenReaderAccessProps from "../../../hooks/useIconScreenReaderAccessProps";

const KEYS = [keyCodes.ENTER, keyCodes.SPACE];

export default function useIconProps({
  onClick,
  className,
  clickable,
  ignoreFocusStyle,
  isDecorationOnly,
  iconLabel,
  externalTabIndex
}) {
  const iconRef = useRef(null);
  const onEnterCallback = useCallback(
    event => {
      const isActive = document.activeElement === iconRef.current;
      if (!isActive) {
        return;
      }
      onClick(event);
    },
    [iconRef, onClick]
  );

  const onMouseDown = useCallback(event => {
    event.preventDefault();
  }, []);

  const computedClassName = useMemo(() => {
    return cx("icon_component", className, {
      "icon_component--clickable": clickable,
      "icon_component--no-focus-style": ignoreFocusStyle
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
    event => {
      const callback = onClick || NOOP;
      callback(event);
    },
    [onClick]
  );

  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    isClickable: clickable,
    label: iconLabel,
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
