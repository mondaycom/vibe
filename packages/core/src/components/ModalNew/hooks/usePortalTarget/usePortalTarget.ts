import { useEffect, useState } from "react";
import { PortalTarget } from "./usePortalTarget.types";

const usePortalTarget = (portalTarget?: PortalTarget): Element | DocumentFragment => {
  const [resolvedTarget, setResolvedTarget] = useState<Element | DocumentFragment>(document.body);

  useEffect(() => {
    const resolveTarget = (): Element | DocumentFragment => {
      if (!portalTarget) {
        return document.body;
      }

      if (typeof portalTarget === "string") {
        const target = document.querySelector(portalTarget);
        if (!target) {
          console.warn(`Target with selector "${portalTarget}" not found. Falling back to document.body.`);
          return document.body;
        }
        return target;
      }

      if (portalTarget instanceof Element || portalTarget instanceof DocumentFragment) {
        return portalTarget;
      }

      if (portalTarget.current instanceof Element) {
        return portalTarget.current;
      }

      console.warn("Invalid portalTarget provided. Falling back to document.body.");
      return document.body;
    };

    const target = resolveTarget();
    setResolvedTarget(target);
  }, [portalTarget, resolvedTarget]);

  return resolvedTarget;
};

export default usePortalTarget;
