import { useEffect } from "react";
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export default function useBodyScrollLock({ instance }) {
  // clear all scroll locks on unmount (just to be safe)
  useEffect(() => {
    return () => clearAllBodyScrollLocks();
  }, []);

  // lock body on modal show
  useEffect(() => {
    instance?.on("show", () => disableBodyScroll(instance.$el, { reserveScrollBarGap: true }));
    instance?.on("hide", () => enableBodyScroll(instance.$el));
    return () => {
      instance?.off("show");
      instance?.off("hide");
    };
  }, [instance]);
}
