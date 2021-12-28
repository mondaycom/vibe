import { useEffect, useRef } from "react";

export default function useAfterFirstRender() {
  const isAfterFirstRender = useRef(true);
  useEffect(() => {
    window.requestAnimationFrame(() => {
      isAfterFirstRender.current = false;
    });
  }, []);
  return isAfterFirstRender;
}
