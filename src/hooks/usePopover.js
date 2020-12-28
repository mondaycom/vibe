import { useMemo } from "react";
import { usePopper } from "react-popper";

const FLIP_MODIFIER = {
  name: "flip",
  options: {
    fallbackPlacements: ["right-end", "left-start", "left-end"]
  }
};

export default function usePopover(
  referenceElement,
  popperElement,
  { isOpen }
) {
  const popperOptions = useMemo(() => {
    return {
      placement: "right-start",
      modifiers: [
        FLIP_MODIFIER,
        {
          name: "displayNone",
          enabled: true,
          phase: "write",
          fn: ({ state }) => {
            state.styles.popper.visibility = isOpen ? "visible" : "hidden";
            return state;
          }
        }
      ]
    };
  }, [isOpen]);

  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    popperOptions
  );

  return { styles, attributes };
}
