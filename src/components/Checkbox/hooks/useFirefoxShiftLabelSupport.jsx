import { useCallback, useMemo } from "react";
import { detect } from "detect-browser";

const BROWSER_NAME = "firefox";

export function useFirefoxShiftLabelSupport({ inputRef }) {
  const isFirefox = useMemo(() => {
    const browser = detect();
    console.log(browser);
    return browser && browser.name && browser.name === BROWSER_NAME;
  }, []);
  const onClickCapture = useCallback(
    e => {
      if (e.shiftKey && isFirefox && inputRef?.current?.click) {
        e.preventDefault();
        inputRef.current.click();
      }
    },
    [isFirefox]
  );

  return { onClickCapture };
}
