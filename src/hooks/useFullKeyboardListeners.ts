import { useMemo, useCallback, useEffect, MutableRefObject } from "react";
import NOOP from "lodash/noop";
import useKeyEvent from "./useKeyEvent";
import { KeyboardEventCallback } from "../types/events";

export enum NAV_DIRECTIONS {
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
export const ESCAPE_KEYS = ["Escape"];

export default function useFullKeyboardListeners({
  ref, // the reference for the component that listens to keyboard
  onSelectionKey = NOOP,
  onArrowNavigation = NOOP,
  onEscape = NOOP,
  useDocumentEventListeners = false,
  focusOnMount = false
}: {
  ref: MutableRefObject<HTMLElement>;
  onSelectionKey: KeyboardEventCallback;
  onArrowNavigation: (type: NAV_DIRECTIONS) => void;
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

  const onArrowDown = useCallback((_event: UIEvent) => onArrowNavigation(NAV_DIRECTIONS.DOWN), [onArrowNavigation]);
  const onArrowUp = useCallback((_event: UIEvent) => onArrowNavigation(NAV_DIRECTIONS.UP), [onArrowNavigation]);
  const onArrowRight = useCallback((_event: UIEvent) => onArrowNavigation(NAV_DIRECTIONS.RIGHT), [onArrowNavigation]);
  const onArrowLeft = useCallback((_event: UIEvent) => onArrowNavigation(NAV_DIRECTIONS.LEFT), [onArrowNavigation]);

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
