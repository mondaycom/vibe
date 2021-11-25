import { useMemo } from "react";

export function useA11yNotification({ isUrgent = false, isAriaLiveHandledOutside = false }) {
  return useMemo(
    () =>
      isAriaLiveHandledOutside
        ? {}
        : {
            role: isUrgent ? "alert" : "status"
          },
    [isAriaLiveHandledOutside, isUrgent]
  );
}
