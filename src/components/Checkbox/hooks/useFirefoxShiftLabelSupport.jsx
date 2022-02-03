import { useCallback } from "react";

export function useFirefoxShiftLabelSupport({ ref }) {
  const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;

  const onClick = useCallback(
    e => {
      if (e.shiftKey && isFirefox && ref?.current?.click) {
        ref.current.click();
      }
    },
    [isFirefox]
  );

  return { onClick };
}
