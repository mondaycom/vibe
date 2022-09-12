import { useMemo, useLayoutEffect } from "react";
import { usePopper } from "react-popper";
import { PLACEMENTS } from "./popoverConstants";

import useForceUpdate from "./useForceUpdate";
import * as PopperJS from "@popperjs/core";

const { RIGHT_START, RIGHT_END, LEFT_START, LEFT_END } = PLACEMENTS;

const FLIP_MODIFIER = {
  name: "flip",
  options: {
    fallbackPlacements: [RIGHT_END, LEFT_START, LEFT_END]
  }
};

export default function usePopover(
  referenceElement: HTMLElement,
  popperElement: HTMLElement,
  {
    isOpen,
    placement = RIGHT_START
  }: {
    isOpen?: boolean;
    placement?: PLACEMENTS;
  }
) {
  const forceUpdate = useForceUpdate();

  // we have to use forceUpdate because
  // usePopper need to run again after any refs changes, even after the first render.
  useLayoutEffect(() => {
    forceUpdate();
  }, [referenceElement, popperElement, forceUpdate]);

  const popperOptions: Partial<PopperJS.Options> = useMemo(() => {
    return {
      placement,
      modifiers: [
        FLIP_MODIFIER,
        {
          name: "displayNone",
          enabled: true,
          phase: "write",
          fn: ({ state }: { state: PopperJS.State }) => {
            // eslint-disable-next-line no-param-reassign
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
