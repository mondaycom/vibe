import { useMemo } from "react";
import { usePopper } from "react-popper";
import { PLACEMENTS } from "./popoverConstants";

const { RIGHT_START, RIGHT_END, LEFT_START, LEFT_END } = PLACEMENTS;

const FLIP_MODIFIER = {
  name: "flip",
  options: {
    fallbackPlacements: [RIGHT_END, LEFT_START, LEFT_END]
  }
};

export default function usePopover(referenceElement, popperElement, { isOpen, placement = RIGHT_START }) {
  const popperOptions = useMemo(() => {
    return {
      placement,
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
  }, [isOpen, placement]);

  const { styles, attributes } = usePopper(referenceElement, popperElement, popperOptions);

  return { styles, attributes };
}
