import { useEffect, useMemo } from "react";

export function useA11yNotification({
  isUrgent = false,
  isAriaLiveHandledOutside = false,
  isIncludeActions = false,
  ref
}) {
  // If notification include actions, focus need to pass move to the notification itself
  useEffect(() => {
    if (isIncludeActions && ref && ref.current) {
      ref.current.focus();
    }
  }, [isIncludeActions, ref]);
  return useMemo(
    () =>
      isAriaLiveHandledOutside || (isIncludeActions && !isUrgent)
        ? { ref }
        : {
            role: isUrgent ? "alert" : "status",
            ref
          },
    [ref, isAriaLiveHandledOutside, isIncludeActions, isUrgent]
  );
}
