import { RefObject, useCallback, useRef } from "react";
import useEventListener from "../useEventListener";
import { GenericEventCallback } from "../../types/events";

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
  keys: KeyboardEvent["key"][];
  callback: GenericEventCallback;
  modifier?: Modifier;
  keyEventName?: string;
  withoutAnyModifier?: boolean;
  ref?: RefObject<HTMLElement | Document>;
  ignoreDocumentFallback?: boolean;
  capture?: boolean;
  preventDefault?: boolean;
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
  const documentRef = useRef(document.body);
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
