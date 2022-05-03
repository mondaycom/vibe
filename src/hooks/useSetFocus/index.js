import { useCallback, useEffect, useState } from "react";
import useEventListener from "../useEventListener";

export default function useSetFocus({ ref, focusCallback, blurCallback }) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) {
      focusCallback && focusCallback();
    } else {
      blurCallback && blurCallback();
    }
  }, [blurCallback, focusCallback, isFocused]);

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
