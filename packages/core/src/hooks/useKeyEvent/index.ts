import { type RefObject, useCallback, useRef } from "react";
import useEventListener from "../useEventListener";
import { type GenericEventCallback } from "../../types/events";
import { isClient } from "../../utils/ssr-utils";

const CTRL_OR_META = "ctrlOrMetaKey";

enum Modifier {
  ALT = "altKey",
  META = "metaKey",
  CTRL = "ctrlKey",
  SHIFT = "shiftKey",
  CTRL_OR_META = "ctrlOrMetaKey"
}

const checkModifierInEvent = (event: KeyboardEvent, modifier: Modifier) => {
  if (modifier === Modifier.CTRL_OR_META) {
    return event.ctrlKey || event.metaKey;
  }

  return event[modifier];
};
const checkWithoutModifierInEvent = (event: KeyboardEvent) => {
  return !Object.values(useKeyEvent.modifiers).some((m: Modifier) => {
    if (m !== CTRL_OR_META) {
      return !!event[m];
    }
  });
};

export interface UseKeyEventArgs {
  /**
   * The list of keys that should trigger the event.
   */
  keys: KeyboardEvent["key"][];
  // TODO: [breaking] change to keyboard event
  /**
   * Callback fired when a specified key is pressed.
   */
  callback: GenericEventCallback;
  /**
   * Modifier key that must be pressed along with the specified key.
   */
  modifier?: Modifier;
  /**
   * The keyboard event type to listen for (e.g., "keydown", "keyup").
   */
  keyEventName?: string;
  /**
   * If true, ensures no modifier keys are pressed when handling the event.
   */
  withoutAnyModifier?: boolean;
  /**
   * The element reference to listen for key events on.
   */
  ref?: RefObject<HTMLElement | Document>;
  /**
   * If true, prevents fallback to listening on the document when no ref is provided.
   */
  ignoreDocumentFallback?: boolean;
  /**
   * If true, uses capture phase instead of bubbling phase for event listening.
   */
  capture?: boolean;
  /**
   * If true, calls `preventDefault` on the key event.
   */
  preventDefault?: boolean;
  /**
   * If true, calls `stopPropagation` on the key event.
   */
  stopPropagation?: boolean;
}

export default function useKeyEvent({
  keys = [],
  callback,
  modifier,
  withoutAnyModifier,
  ref,
  ignoreDocumentFallback = false,
  capture = false,
  preventDefault = false,
  stopPropagation = false,
  keyEventName = "keydown" // need keydown and not keyup to prevent scrolling with prevent default, for example during menu keyboard navigation
}: UseKeyEventArgs) {
  const documentRef = useRef(isClient() ? document.body : null);
  const onKeyUpPress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      if (!keys.includes(key)) {
        return;
      }
      if (modifier && !checkModifierInEvent(event, modifier)) {
        return;
      }
      if (withoutAnyModifier && !checkWithoutModifierInEvent(event)) {
        return;
      }

      if (preventDefault) {
        event.preventDefault();
      }

      if (stopPropagation) {
        event.stopPropagation();
      }

      callback(event);
    },
    [keys, modifier, withoutAnyModifier, preventDefault, stopPropagation, callback]
  );

  let listenerRef;

  if (ref) {
    listenerRef = ref;
  } else if (ignoreDocumentFallback) {
    listenerRef = null;
  } else {
    listenerRef = documentRef;
  }

  useEventListener({
    eventName: keyEventName,
    callback: onKeyUpPress,
    ref: listenerRef,
    capture
  });
}

useKeyEvent.modifiers = Modifier;
