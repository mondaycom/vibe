import { RefObject, useEffect, useRef } from "react";

export default function useAfterFirstRender(): RefObject<boolean> {
  const isAfterFirstRender = useRef(true);
  useEffect(() => {
    window.requestAnimationFrame(() => {
      isAfterFirstRender.current = false;
    });
  }, []);
  return isAfterFirstRender;
}
