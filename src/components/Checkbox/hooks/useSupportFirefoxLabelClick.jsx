import { useCallback, useRef } from "react";
import { isFirefox } from "../../../utils/user-agent-utils";

export function useSupportFirefoxLabelClick({ inputRef }) {
  // we handle the custom event create state as ref because this variable should not be depend on the component renders
  // and it should be unique per checkbox
  const customEventCreated = useRef(true);

  // fix for known bug firefox bug: firefox does not support checking or unchecking checkbox by its label when shift pressed
  const onClickCapture = useCallback(
    e => {
      if (!customEventCreated.current && e.shiftKey && isFirefox() && inputRef?.current?.dispatchEvent) {
        e.preventDefault();
        const evt = new MouseEvent("click", {
          shiftKey: true,
          bubbles: true,
          cancelable: true
        });

        customEventCreated.current = true;
        inputRef.current.dispatchEvent(evt);
      }

      if (customEventCreated.current) {
        customEventCreated.current = false;
      }
    },
    [customEventCreated, inputRef]
  );

  return { onClickCapture };
}
