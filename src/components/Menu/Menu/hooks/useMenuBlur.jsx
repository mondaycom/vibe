import { useLayoutEffect } from "react";

export default function useMenuBlur(ref, resetOpenSubMenuIndex, hasOpenSubMenu, closeSubMenu) {
  useLayoutEffect(() => {
    const refElement = ref && ref.current;

    const callback = () => {
      if (hasOpenSubMenu) {
        return;
      }

      closeSubMenu && closeSubMenu({ propagate: true });
    };
    const listenerOptions = { capture: false };
    const eventName = "blur";
    refElement.addEventListener(eventName, callback, listenerOptions);
    return () => {
      refElement.removeEventListener(eventName, callback, listenerOptions);
    };
  }, [ref, resetOpenSubMenuIndex, hasOpenSubMenu, closeSubMenu]);
}
