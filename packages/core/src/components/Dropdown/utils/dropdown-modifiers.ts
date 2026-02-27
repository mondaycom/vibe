import { type Modifier } from "react-popper";

export const matchWidthModifier: Modifier<any>[] = [
  {
    name: "matchWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
      if (state.rects && state.rects.reference) {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      }
    }
  }
];
