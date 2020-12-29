import { useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useSetFocus({ ref, setActive, setUnActive, isActive }) {
  useEffect(() => {
    isActive && ref && ref.current && ref.current.focus();
  }, [ref, isActive]);

  useEventListener({
    eventName: "mouseover",
    ref,
    callback: setActive
  });

  useEventListener({
    eventName: "mouseout",
    ref,
    callback: setUnActive
  });
}
