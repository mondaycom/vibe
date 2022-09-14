import { RefObject, useCallback, useRef } from "react";
import useEventListener from "../useEventListener";
import { GenericEventCallback } from "../../types/events";

const CTRL_OR_META = "ctrlOrMetaKey";

enum Modifiers {
  ALT = "altKey",
  META = "metaKey",
  CTRL = "ctrlKey",
  SHIFT = "shiftKey",
  CTRL_OR_META = "ctrlOrMetaKey"
}

const checkModifierInEvent = (event: KeyboardEvent, modifier: Modifiers) => {
  if (modifier === Modifiers.CTRL_OR_META) {
    return event.ctrlKey || event.metaKey;
  }

  return event[modifier];
};
const checkWithoutModifierInEvent = (event: KeyboardEvent) => {
  return !Object.values(useKeyEvent.modifiers).some((m: Modifiers) => {
    if (m === CTRL_OR_META) return true;
    return !!event[m];
  });
};

export interface UseKeyEvent {
  keys: KeyboardEvent["key"][];
  modifier?: Modifiers;
  keyEventName?: string;
  withoutAnyModifier?: boolean;
  ref?: RefObject<HTMLElement>;
  ignoreDocumentFallback?: boolean;
  capture?: boolean;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  callback: GenericEventCallback;
}

export default function useKeyEvent({
  keys = [],
  modifier,
  withoutAnyModifier,
  ref,
  callback,
  ignoreDocumentFallback = false,
  capture = false,
  preventDefault = false,
  stopPropagation = false,
  keyEventName = "keydown" // need keydown and not keyup to prevent scrolling with prevent default, for example during menu keyboard navigation
}: UseKeyEvent) {
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

useKeyEvent.modifiers = Modifiers;
