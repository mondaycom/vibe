import { useMemo } from "react";

export function useA11yNotificationProps({ isUrgent, isAriaLiveHandledOutside, isIncludeActions }) {
  return useMemo(
    () =>
      isAriaLiveHandledOutside
        ? {}
        : {
            role: isUrgent ? "alert" : "status"
          },
    [isUrgent, isAriaLiveHandledOutside]
  );
}
