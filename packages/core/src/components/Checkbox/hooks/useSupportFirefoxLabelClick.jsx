import { useCallback, useRef } from "react";
import { isFirefox } from "../../../utils/user-agent-utils";

export function useSupportFirefoxLabelClick({ inputRef }) {
  // The purpose of this variable is to make sure that the captured event is a checkbox's label click event and not a manual event
  // that we actually created in this hook.
  // We handle the custom event create state as ref because this variable should not be depend on the component renders
  // and it should be unique per checkbox.
  const customEventCreated = useRef(false);

  // fix for known bug firefox bug: firefox does not support checking or unchecking checkbox by its label when shift pressed
  const onClickCapture = useCallback(
    e => {
      // We would like to dispatch a manual event to click on the input only for cases where there is a bug in supporting this capability -
      // firefox browsers when the shift key is pressed.
      // In addition we make sure here that the captured event is not a manually generated event created by this code because we want to prevent
      // an infinite loop in recursion here.
      if (!customEventCreated.current && e.shiftKey && isFirefox() && inputRef?.current?.dispatchEvent) {
        e.preventDefault();
        const manualClickEvent = new MouseEvent("click", {
          shiftKey: true,
          // After dispatch this event we will want it to be captured by all the relevant event listeners which registered to this checkbox input.
          bubbles: true,
          cancelable: true
        });

        customEventCreated.current = true;
        inputRef.current.dispatchEvent(manualClickEvent);
      } else if (customEventCreated.current) {
        customEventCreated.current = false;
      }
    },
    [customEventCreated, inputRef]
  );

  return { onClickCapture };
}
