import { MutableRefObject, useCallback, useEffect, useMemo } from "react";
import { noop } from "lodash-es";
import useKeyEvent from "./useKeyEvent";
import { KeyboardEventCallback } from "../types/events";

export enum NavDirections {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right"
}

export const ARROW_DOWN_KEYS = ["ArrowDown"];
export const ARROW_UP_KEYS = ["ArrowUp"];
export const ARROW_RIGHT_KEYS = ["ArrowRight"];
export const ARROW_LEFT_KEYS = ["ArrowLeft"];
export const SELECTION_KEYS = ["Enter", " "];
export const ENTER_KEYS = ["Enter"];
export const ESCAPE_KEYS = ["Escape"];

export default function useFullKeyboardListeners({
  ref, // the reference for the component that listens to keyboard
  onSelectionKey = noop,
  onArrowNavigation = noop,
  onEscape = noop,
  useDocumentEventListeners = false,
  focusOnMount = false
}: {
  ref: MutableRefObject<HTMLElement>;
  onSelectionKey: KeyboardEventCallback;
  onArrowNavigation: (type: NavDirections) => void;
  onEscape: KeyboardEventCallback;
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

  useEffect(() => {
    if (!focusOnMount || useDocumentEventListeners) return;
    ref?.current?.focus();
  }, [focusOnMount, ref, useDocumentEventListeners]);
}
