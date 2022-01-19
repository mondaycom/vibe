import { useMemo, useLayoutEffect, useCallback } from "react";
import useKeyEvent from "./useKeyEvent";

export const NAV_DIRECTIONS = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right"
};

const ARROW_DOWN_KEYS = ["ArrowDown"];
const ARROW_UP_KEYS = ["ArrowUp"];
const ARROW_RIGHT_KEYS = ["ArrowRight"];
const ARROW_LEFT_KEYS = ["ArrowLeft"];
const SELECTION_KEYS = ["Enter", " "];
const ESCAPE_KEYS = ["Escape"];

const NOOP = () => {};

export default function useFullKeyboardListeners({
  ref, // the reference for the component that listens to keyboard
  onSelectionKey = NOOP,
  onArrowNavigation = NOOP,
  onEscape = NOOP,
  useDocumentEventListeners = false,
  focusOnMount = false
}) {
  const listenerOptions = useMemo(() => {
    if (useDocumentEventListeners) return undefined;

    return {
      ref,
      preventDefault: true,
      stopPropagation: true
    };
  }, [useDocumentEventListeners, ref]);

  const onArrowDown = useCallback(() => onArrowNavigation(NAV_DIRECTIONS.DOWN), [onArrowNavigation]);
  const onArrowUp = useCallback(() => onArrowNavigation(NAV_DIRECTIONS.UP), [onArrowNavigation]);
  const onArrowRight = useCallback(() => onArrowNavigation(NAV_DIRECTIONS.RIGHT), [onArrowNavigation]);
  const onArrowLeft = useCallback(() => onArrowNavigation(NAV_DIRECTIONS.LEFT), [onArrowNavigation]);

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

  useLayoutEffect(() => {
    if (!focusOnMount || useDocumentEventListeners) return;
    requestAnimationFrame(() => {
      ref?.current?.focus();
    });
  }, [ref, focusOnMount, useDocumentEventListeners]);
}
