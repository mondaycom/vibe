import { useCallback, useRef } from "react";
import useEventListener from "../../../../hooks/useEventListener";
import {
  ARROW_DOWN_KEYS,
  ARROW_LEFT_KEYS,
  ARROW_RIGHT_KEYS,
  ARROW_UP_KEYS,
  NavDirections
} from "../../../../hooks/useFullKeyboardListeners";
import useKeyEvent from "../../../../hooks/useKeyEvent";

const NAVIGATION_KEYS = [...ARROW_UP_KEYS, ...ARROW_RIGHT_KEYS, ...ARROW_DOWN_KEYS, ...ARROW_LEFT_KEYS];

export const useLastNavigationDirection = () => {
  const documentRef = useRef(document);

  const lastNavigationDirectionRef = useRef<NavDirections>();

  const setLastNavigationDirection = useCallback((dir: NavDirections) => {
    lastNavigationDirectionRef.current = dir;
  }, []);

  const onKeyEvent = useCallback(
    ({ key }: KeyboardEvent) => {
      if (ARROW_UP_KEYS.includes(key)) {
        setLastNavigationDirection(NavDirections.UP);
      } else if (ARROW_RIGHT_KEYS.includes(key)) {
        setLastNavigationDirection(NavDirections.RIGHT);
      } else if (ARROW_DOWN_KEYS.includes(key)) {
        setLastNavigationDirection(NavDirections.DOWN);
      } else if (ARROW_LEFT_KEYS.includes(key)) {
        setLastNavigationDirection(NavDirections.LEFT);
      }
    },
    [setLastNavigationDirection]
  );

  const onMousedownAnywhere = useCallback(() => {
    lastNavigationDirectionRef.current = undefined;
  }, [lastNavigationDirectionRef]);

  useKeyEvent({ ref: documentRef, capture: true, keys: NAVIGATION_KEYS, callback: onKeyEvent });
  useEventListener({ eventName: "mousedown", ref: documentRef, capture: true, callback: onMousedownAnywhere });

  return { lastNavigationDirectionRef };
};
