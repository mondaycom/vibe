import { type MutableRefObject, useCallback, useEffect, useMemo } from "react";
import { noop } from "es-toolkit";
import useKeyEvent from "./useKeyEvent";
import { type KeyboardEventCallback } from "../types/events";
import { NavDirections, ARROW_DOWN_KEYS, ARROW_UP_KEYS, ARROW_RIGHT_KEYS, ARROW_LEFT_KEYS } from "@vibe/shared";

export { NavDirections, ARROW_DOWN_KEYS, ARROW_UP_KEYS, ARROW_RIGHT_KEYS, ARROW_LEFT_KEYS };

export const SELECTION_KEYS = ["Enter", " "];
export const ENTER_KEYS = ["Enter"];
export const ESCAPE_KEYS = ["Escape"];
export const END_KEYS = ["End"];
export const HOME_KEYS = ["Home"];

export default function useFullKeyboardListeners({
  ref, // the reference for the component that listens to keyboard
  onSelectionKey = noop,
  onArrowNavigation = noop,
  onEscape = noop,
  onHome = noop,
  onEnd = noop,
  useDocumentEventListeners = false,
  focusOnMount = false
}: {
  ref: MutableRefObject<HTMLElement>;
  onSelectionKey: KeyboardEventCallback;
  onArrowNavigation: (type: NavDirections) => void;
  onEscape: KeyboardEventCallback;
  onHome?: KeyboardEventCallback;
  onEnd?: KeyboardEventCallback;
  useDocumentEventListeners?: boolean;
  focusOnMount: boolean;
}) {
  const listenerOptions = useMemo(() => {
    if (useDocumentEventListeners) return undefined;

    return {
      ref,
      preventDefault: true,
      stopPropagation: true
    };
  }, [useDocumentEventListeners, ref]);

  const onArrowDown = useCallback(() => onArrowNavigation(NavDirections.DOWN), [onArrowNavigation]);
  const onArrowUp = useCallback(() => onArrowNavigation(NavDirections.UP), [onArrowNavigation]);
  const onArrowRight = useCallback(() => onArrowNavigation(NavDirections.RIGHT), [onArrowNavigation]);
  const onArrowLeft = useCallback(() => onArrowNavigation(NavDirections.LEFT), [onArrowNavigation]);

  useKeyEvent({
    keys: ARROW_DOWN_KEYS,
    callback: onArrowDown,
    ...listenerOptions
  });

  useKeyEvent({
    keys: ARROW_UP_KEYS,
    callback: onArrowUp,
    ...listenerOptions
  });

  useKeyEvent({
    keys: ARROW_RIGHT_KEYS,
    callback: onArrowRight,
    ...listenerOptions
  });

  useKeyEvent({
    keys: ARROW_LEFT_KEYS,
    callback: onArrowLeft,
    ...listenerOptions
  });

  useKeyEvent({
    keys: SELECTION_KEYS,
    callback: onSelectionKey,
    ...listenerOptions
  });

  useKeyEvent({
    keys: ESCAPE_KEYS,
    callback: onEscape,
    ...listenerOptions
  });

  useKeyEvent({
    keys: HOME_KEYS,
    callback: onHome,
    ...listenerOptions
  });

  useKeyEvent({
    keys: END_KEYS,
    callback: onEnd,
    ...listenerOptions
  });

  useEffect(() => {
    if (!focusOnMount || useDocumentEventListeners) return;
    ref?.current?.focus();
  }, [focusOnMount, ref, useDocumentEventListeners]);
}
