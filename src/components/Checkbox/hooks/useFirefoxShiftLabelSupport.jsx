import { useCallback } from "react";

export function useFirefoxShiftLabelSupport({ inputRef }) {
  const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;

  const onClick = useCallback(
    e => {
      if (e.shiftKey && isFirefox && inputRef?.current?.click) {
        inputRef.current.click();
      }
    },
    [isFirefox]
  );

  return { onClick };
}
