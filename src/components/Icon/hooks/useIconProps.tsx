import { KeyboardEvent, MouseEvent, UIEvent, useCallback, useMemo, useRef } from "react";
import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import useEventListener from "../../../hooks/useEventListener";
import useKeyEvent from "../../../hooks/useKeyEvent";
import { keyCodes } from "../../../constants/keyCodes";
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
}: {
  onClick?: (event: UIEvent) => void;
  className?: string;
  clickable?: boolean;
  ignoreFocusStyle?: boolean;
  isDecorationOnly?: boolean;
  iconLabel?: string;
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
    (event: MouseEvent) => {
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
