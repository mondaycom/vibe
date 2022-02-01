import { useRef, useState, useCallback } from "react";
import {
  ARROW_DOWN_KEYS,
  ARROW_LEFT_KEYS,
  ARROW_RIGHT_KEYS,
  ARROW_UP_KEYS,
  NAV_DIRECTIONS
} from "../../../../hooks/useFullKeyboardListeners";
import useKeyEvent from "../../../../hooks/useKeyEvent";

const NAVIGATION_KEYS = [...ARROW_UP_KEYS, ...ARROW_RIGHT_KEYS, ...ARROW_DOWN_KEYS, ...ARROW_LEFT_KEYS];

export const useLastNavigationDirection = () => {
  const documentRef = useRef(document);

  const [lastNavigationDirection, setLastNavigationDirection] = useState(undefined);

  const onKeyEvent = useCallback(({ key }) => {
    if (ARROW_UP_KEYS.includes(key)) {
      setLastNavigationDirection(NAV_DIRECTIONS.UP);
    } else if (ARROW_RIGHT_KEYS.includes(key)) {
      setLastNavigationDirection(NAV_DIRECTIONS.RIGHT);
    } else if (ARROW_DOWN_KEYS.includes(key)) {
      setLastNavigationDirection(NAV_DIRECTIONS.DOWN);
    } else if (ARROW_LEFT_KEYS.includes(key)) {
      setLastNavigationDirection(NAV_DIRECTIONS.LEFT);
    }
  }, []);

  useKeyEvent({ ref: documentRef, capture: true, keys: NAVIGATION_KEYS, callback: onKeyEvent });

  return { lastNavigationDirection };
};
