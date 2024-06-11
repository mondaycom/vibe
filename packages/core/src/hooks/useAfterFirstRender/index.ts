import { RefObject, useEffect, useRef } from "react";

export default function useAfterFirstRender(): RefObject<boolean> {
  const isAfterFirstRender = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      isAfterFirstRender.current = true;
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return isAfterFirstRender;
}
