import { useMemo } from "react";
import { usePopper } from "react-popper";
import { Placement } from "./popoverConstants";
import useIsomorphicLayoutEffect from "./ssr/useIsomorphicLayoutEffect";
import useForceUpdate from "./useForceUpdate";
import type { Options, State } from "@popperjs/core";
import { createObserveContentResizeModifier } from "../components/Dialog/modifiers/observeContentResizeModifier";

const { RIGHT_START, RIGHT_END, LEFT_START, LEFT_END } = Placement;

const DEFAULT_FALLBACK_PLACEMENTS = [RIGHT_END, LEFT_START, LEFT_END];

export default function usePopover(
  referenceElement: HTMLElement,
  popperElement: HTMLElement,
  {
    isOpen,
    placement = RIGHT_START,
    observeContentResize,
    offset,
    fallbackPlacements = DEFAULT_FALLBACK_PLACEMENTS
  }: {
    isOpen?: boolean;
    placement?: Placement;
    observeContentResize?: boolean;
    offset?: [number, number];
    fallbackPlacements?: Placement[];
  }
) {
  const forceUpdate = useForceUpdate();

  // we have to use forceUpdate because
  // usePopper need to run again after any refs changes, even after the first render.
  useIsomorphicLayoutEffect(() => {
    forceUpdate();
  }, [referenceElement, popperElement, forceUpdate]);

  const popperOptions: Pick<Options, "placement" | "modifiers"> = useMemo(() => {
    return {
      placement,
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements
          }
        },
        {
          name: "displayNone",
          enabled: true,
          phase: "write",
          fn: ({ state }: { state: State }) => {
            state.styles.popper.visibility = isOpen ? "visible" : "hidden";
            return state;
          }
        },
        createObserveContentResizeModifier(observeContentResize),
        offset !== undefined && {
          name: "offset",
          options: { offset }
        }
      ]
    };
  }, [placement, observeContentResize, offset, isOpen]);

  const { styles, attributes } = usePopper(referenceElement, popperElement, popperOptions);

  return { styles, attributes };
}
