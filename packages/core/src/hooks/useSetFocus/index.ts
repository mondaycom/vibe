import { type RefObject, useCallback, useEffect, useState } from "react";
import useEventListener from "../useEventListener";
import usePrevious from "../../hooks/usePrevious";

// TODO: [breaking] rename to useFocus? and maybe change signature to be like useHover?
export default function useSetFocus({
  ref,
  focusCallback,
  blurCallback
}: {
  ref: RefObject<HTMLElement>;
  focusCallback?: () => void;
  blurCallback?: () => void;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const isFocusedPrev = usePrevious(isFocused);

  useEffect(() => {
    if (isFocusedPrev === undefined) {
      // Don't call callback on first render
      return;
    }

    // Calling back from here to be sure that isFocused value have already been updated
    if (isFocused) {
      focusCallback && focusCallback();
    } else {
      blurCallback && blurCallback();
    }
  }, [blurCallback, focusCallback, isFocused, isFocusedPrev]);

  const focus = useCallback(() => {
    ref.current.focus();
  }, [ref]);

  const blur = useCallback(() => {
    ref.current.blur();
  }, [ref]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEventListener({
    eventName: "focus",
    ref,
    callback: onFocus
  });

  useEventListener({
    eventName: "blur",
    ref,
    callback: onBlur
  });

  return { isFocused, focus, blur };
}
