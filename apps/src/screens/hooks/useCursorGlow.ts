import { useEffect, useRef } from "react";

/**
 * Tracks pointer position over an element and writes it as CSS custom properties
 * (`--mx`, `--my`) so styles can render a cursor-following spotlight.
 * Values are in pixels relative to the element's top-left corner.
 */
export function useCursorGlow<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return ref;
}
