import { useCallback, useMemo } from "react";
import { type FocusEscapeTarget } from "./useFocusEscapeTargets.types";

/**
 * Hook that creates a checker function to determine if an element should be allowed
 * to receive focus outside of a focus lock (escape the focus trap).
 *
 * @param targets - Array of targets (selectors, refs, or elements) that should be allowed to receive focus and won't be managed by the focus-lock
 * @returns A function that returns `true` if the element matches any target (should be allowed to escape), `false` otherwise
 */
const useFocusEscapeTargets = (targets?: FocusEscapeTarget[]) => {
  // Pre-process and separate targets by type for faster lookup
  const { combinedSelector, elements } = useMemo(() => {
    if (!targets || targets.length === 0) {
      return { combinedSelector: null, elements: [] };
    }

    const selectorList: string[] = [];
    const elementList: HTMLElement[] = [];

    for (const item of targets) {
      if (typeof item === "string") {
        selectorList.push(item);
      } else if (item && typeof item === "object" && "current" in item) {
        // Resolve ref to element
        if (item.current) {
          elementList.push(item.current);
        }
      } else if (item instanceof HTMLElement) {
        elementList.push(item);
      }
    }

    // Combine all selectors into one for a single DOM traversal
    const combined = selectorList.length > 0 ? selectorList.join(", ") : null;

    return { combinedSelector: combined, elements: elementList };
  }, [targets]);

  const shouldAllowFocusEscape = useCallback(
    (element?: HTMLElement): boolean => {
      if (!element) {
        return false;
      }

      // Early exit if no targets
      if (!combinedSelector && elements.length === 0) {
        return false;
      }

      // Check all selectors with a single DOM traversal
      if (combinedSelector && element.closest(combinedSelector)) {
        return true;
      }

      // Check elements (direct match or contains)
      for (let i = 0; i < elements.length; i++) {
        const targetElement = elements[i];
        if (element === targetElement || targetElement.contains(element)) {
          return true;
        }
      }

      return false;
    },
    [combinedSelector, elements]
  );

  return shouldAllowFocusEscape;
};

export default useFocusEscapeTargets;
